// Copyright (C) Parity Technologies (UK) Ltd.
// This file is part of Polkadot.

// Polkadot is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Polkadot is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Polkadot.  If not, see <http://www.gnu.org/licenses/>.

//! Test kit to simulate cross-chain message passing and XCM execution.

/// Implementation of a simple message queue.
/// Used for sending messages.
pub mod mock_message_queue;

extern crate alloc;

pub use codec::Encode;
pub use paste;

pub use alloc::collections::vec_deque::VecDeque;
pub use core::{cell::RefCell, marker::PhantomData};
pub use frame_support::{
	traits::{EnqueueMessage, Get, ProcessMessage, ProcessMessageError, ServiceQueues},
	weights::{Weight, WeightMeter},
};
pub use sp_io::{hashing::blake2_256, TestExternalities};

pub use polkadot_core_primitives::BlockNumber as RelayBlockNumber;
pub use polkadot_parachain_primitives::primitives::{
	DmpMessageHandler as DmpMessageHandlerT, Id as ParaId, XcmpMessageFormat,
	XcmpMessageHandler as XcmpMessageHandlerT,
};
pub use polkadot_runtime_parachains::{
	dmp,
	inclusion::{AggregateMessageOrigin, UmpQueueId},
};
pub use xcm::{latest::prelude::*, VersionedXcm};
pub use xcm_builder::ProcessXcmMessage;
pub use xcm_executor::XcmExecutor;

pub trait TestExt {
	/// Initialize the test environment.
	fn new_ext() -> sp_io::TestExternalities;
	/// Resets the state of the test environment.
	fn reset_ext();
	/// Execute code in the context of the test externalities, without automatic
	/// message processing. All messages in the message buses can be processed
	/// by calling `Self::dispatch_xcm_buses()`.
	fn execute_without_dispatch<R>(execute: impl FnOnce() -> R) -> R;
	/// Process all messages in the message buses
	fn dispatch_xcm_buses();
	/// Execute some code in the context of the test externalities, with
	/// automatic message processing.
	/// Messages are dispatched once the passed closure completes.
	fn execute_with<R>(execute: impl FnOnce() -> R) -> R {
		let result = Self::execute_without_dispatch(execute);
		Self::dispatch_xcm_buses();
		result
	}
}

pub enum MessageKind {
	Ump,
	Dmp,
	Xcmp,
}

/// Encodes the provided XCM message based on the `message_kind`.
pub fn encode_xcm(message: Xcm<()>, message_kind: MessageKind) -> Vec<u8> {
	match message_kind {
		MessageKind::Ump | MessageKind::Dmp => VersionedXcm::<()>::from(message).encode(),
		MessageKind::Xcmp => {
			let fmt = XcmpMessageFormat::ConcatenatedVersionedXcm;
			let mut outbound = fmt.encode();

			let encoded = VersionedXcm::<()>::from(message).encode();
			outbound.extend_from_slice(&encoded[..]);
			outbound
		},
	}
}

pub fn fake_message_hash<T>(message: &Xcm<T>) -> XcmHash {
	message.using_encoded(blake2_256)
}

/// The macro is implementing upward message passing(UMP) for the provided relay
/// chain struct. The struct has to provide the XCM configuration for the relay
/// chain.
///
/// ```ignore
/// decl_test_relay_chain! {
///	    pub struct Relay {
///	        Runtime = relay_chain::Runtime,
///	        XcmConfig = relay_chain::XcmConfig,
///	        new_ext = relay_ext(),
///	    }
///	}
/// ```
#[macro_export]
#[rustfmt::skip]
macro_rules! decl_test_relay_chain {
	(
		pub struct $name:ident {
			Runtime = $runtime:path,
			RuntimeCall = $runtime_call:path,
			RuntimeEvent = $runtime_event:path,
			XcmConfig = $xcm_config:path,
			MessageQueue = $mq:path,
			System = $system:path,
			new_ext = $new_ext:expr,
		}
	) => {
		pub struct $name;

		$crate::__impl_ext!($name, $new_ext);

		impl $crate::ProcessMessage for $name {
			type Origin = $crate::ParaId;

			fn process_message(
				msg: &[u8],
				para: Self::Origin,
				meter: &mut $crate::WeightMeter,
				id: &mut [u8; 32],
			) -> Result<bool, $crate::ProcessMessageError> {
				use $crate::{Weight, AggregateMessageOrigin, UmpQueueId, ServiceQueues, EnqueueMessage};
				use $mq as message_queue;
				use $runtime_event as runtime_event;

				Self::execute_with(|| {
					<$mq as EnqueueMessage<AggregateMessageOrigin>>::enqueue_message(
						msg.try_into().expect("Message too long"),
						AggregateMessageOrigin::Ump(UmpQueueId::Para(para.clone()))
					);

					<$system>::reset_events();
					<$mq as ServiceQueues>::service_queues(Weight::MAX);
					let events = <$system>::events();
					let event = events.last().expect("There must be at least one event");

					match &event.event {
						runtime_event::MessageQueue(
								pallet_message_queue::Event::Processed {origin, ..}) => {
							assert_eq!(origin, &AggregateMessageOrigin::Ump(UmpQueueId::Para(para)));
						},
						event => panic!("Unexpected event: {:#?}", event),
					}
					Ok(true)
				})
			}
		}
	};
}

/// The macro is implementing the `XcmMessageHandlerT` and `DmpMessageHandlerT`
/// traits for the provided parachain struct. Expects the provided parachain
/// struct to define the XcmpMessageHandler and DmpMessageHandler pallets that
/// contain the message handling logic.
///
/// ```ignore
/// decl_test_parachain! {
/// 	    pub struct ParaA {
/// 	        Runtime = parachain::Runtime,
/// 	        XcmpMessageHandler = parachain::MsgQueue,
/// 	        DmpMessageHandler = parachain::MsgQueue,
/// 	        new_ext = para_ext(),
/// 	    }
/// }
/// ```
#[macro_export]
macro_rules! decl_test_parachain {
	(
		pub struct $name:ident {
			Runtime = $runtime:path,
			XcmpMessageHandler = $xcmp_message_handler:path,
			DmpMessageHandler = $dmp_message_handler:path,
			new_ext = $new_ext:expr,
		}
	) => {
		pub struct $name;

		$crate::__impl_ext!($name, $new_ext);

		impl $crate::XcmpMessageHandlerT for $name {
			fn handle_xcmp_messages<
				'a,
				I: Iterator<Item = ($crate::ParaId, $crate::RelayBlockNumber, &'a [u8])>,
			>(
				iter: I,
				max_weight: $crate::Weight,
			) -> $crate::Weight {
				use $crate::{TestExt, XcmpMessageHandlerT};

				$name::execute_with(|| {
					<$xcmp_message_handler>::handle_xcmp_messages(iter, max_weight)
				})
			}
		}

		impl $crate::DmpMessageHandlerT for $name {
			fn handle_dmp_messages(
				iter: impl Iterator<Item = ($crate::RelayBlockNumber, Vec<u8>)>,
				max_weight: $crate::Weight,
			) -> $crate::Weight {
				use $crate::{DmpMessageHandlerT, TestExt};

				$name::execute_with(|| {
					<$dmp_message_handler>::handle_dmp_messages(iter, max_weight)
				})
			}
		}
	};
}

/// Implements the `TestExt` trait for a specified struct.
#[macro_export]
macro_rules! __impl_ext {
	// entry point: generate ext name
	($name:ident, $new_ext:expr) => {
		$crate::paste::paste! {
			$crate::__impl_ext!(@impl $name, $new_ext, [<EXT_ $name:upper>]);
		}
	};
	// impl
	(@impl $name:ident, $new_ext:expr, $ext_name:ident) => {
		thread_local! {
			pub static $ext_name: $crate::RefCell<$crate::TestExternalities>
				= $crate::RefCell::new($new_ext);
		}

		impl $crate::TestExt for $name {
			fn new_ext() -> $crate::TestExternalities {
				$new_ext
			}

			fn reset_ext() {
				$ext_name.with(|v| *v.borrow_mut() = $new_ext);
			}

			fn execute_without_dispatch<R>(execute: impl FnOnce() -> R) -> R {
				$ext_name.with(|v| v.borrow_mut().execute_with(execute))
			}

			fn dispatch_xcm_buses() {
				while exists_messages_in_any_bus() {
					if let Err(xcm_error) = process_relay_messages() {
						panic!("Relay chain XCM execution failure: {:?}", xcm_error);
					}
					if let Err(xcm_error) = process_para_messages() {
						panic!("Parachain XCM execution failure: {:?}", xcm_error);
					}
				}
			}
		}
	};
}

thread_local! {
	pub static PARA_MESSAGE_BUS: RefCell<VecDeque<(ParaId, Location, Xcm<()>)>>
		= RefCell::new(VecDeque::new());
	pub static RELAY_MESSAGE_BUS: RefCell<VecDeque<(Location, Xcm<()>)>>
		= RefCell::new(VecDeque::new());
}

/// Declares a test network that consists of a relay chain and multiple
/// parachains. Expects a network struct as an argument and implements testing
/// functionality, `ParachainXcmRouter` and the `RelayChainXcmRouter`. The
/// struct needs to contain the relay chain struct and an indexed list of
/// parachains that are going to be in the network.
///
/// ```ignore
/// decl_test_network! {
/// 	    pub struct ExampleNet {
/// 	        relay_chain = Relay,
/// 	        parachains = vec![
/// 	            (1, ParaA),
/// 	            (2, ParaB),
/// 	        ],
/// 	    }
/// }
/// ```
#[macro_export]
macro_rules! decl_test_network {
	(
		pub struct $name:ident {
			relay_chain = $relay_chain:ty,
			parachains = vec![ $( ($para_id:expr, $parachain:ty), )* ],
		}
	) => {
		use $crate::Encode;
		pub struct $name;

		impl $name {
			pub fn reset() {
				use $crate::{TestExt, VecDeque};
				// Reset relay chain message bus.
				$crate::RELAY_MESSAGE_BUS.with(|b| b.replace(VecDeque::new()));
				// Reset parachain message bus.
				$crate::PARA_MESSAGE_BUS.with(|b| b.replace(VecDeque::new()));
				<$relay_chain>::reset_ext();
				$( <$parachain>::reset_ext(); )*
			}
		}

		/// Check if any messages exist in either message bus.
		fn exists_messages_in_any_bus() -> bool {
			use $crate::{RELAY_MESSAGE_BUS, PARA_MESSAGE_BUS};
			let no_relay_messages_left = RELAY_MESSAGE_BUS.with(|b| b.borrow().is_empty());
			let no_parachain_messages_left = PARA_MESSAGE_BUS.with(|b| b.borrow().is_empty());
			!(no_relay_messages_left && no_parachain_messages_left)
		}

		/// Process all messages originating from parachains.
		fn process_para_messages() -> $crate::XcmResult {
			use $crate::{ProcessMessage, XcmpMessageHandlerT};

			while let Some((para_id, destination, message)) = $crate::PARA_MESSAGE_BUS.with(
				|b| b.borrow_mut().pop_front()) {
				match destination.unpack() {
					(1, []) => {
						let encoded = $crate::encode_xcm(message, $crate::MessageKind::Ump);
						let mut _id = [0; 32];
						let r = <$relay_chain>::process_message(
							encoded.as_slice(), para_id,
							&mut $crate::WeightMeter::new(),
							&mut _id,
						);
						match r {
							Err($crate::ProcessMessageError::Overweight(required)) =>
								return Err($crate::XcmError::WeightLimitReached(required)),
							// Not really the correct error, but there is no "undecodable".
							Err(_) => return Err($crate::XcmError::Unimplemented),
							Ok(_) => (),
						}
					},
					$(
						(1, [$crate::Parachain(id)]) if *id == $para_id => {
							let encoded = $crate::encode_xcm(message, $crate::MessageKind::Xcmp);
							let messages = vec![(para_id, 1, &encoded[..])];
							let _weight = <$parachain>::handle_xcmp_messages(
								messages.into_iter(),
								$crate::Weight::MAX,
							);
						},
					)*
					_ => {
						return Err($crate::XcmError::Unroutable);
					}
				}
			}

			Ok(())
		}

		/// Process all messages originating from the relay chain.
		fn process_relay_messages() -> $crate::XcmResult {
			use $crate::DmpMessageHandlerT;

			while let Some((destination, message)) = $crate::RELAY_MESSAGE_BUS.with(
				|b| b.borrow_mut().pop_front()) {
				match destination.unpack() {
					$(
						(0, [$crate::Parachain(id)]) if *id == $para_id => {
							let encoded = $crate::encode_xcm(message, $crate::MessageKind::Dmp);
							// NOTE: RelayChainBlockNumber is hard-coded to 1
							let messages = vec![(1, encoded)];
							let _weight = <$parachain>::handle_dmp_messages(
								messages.into_iter(), $crate::Weight::MAX,
							);
						},
					)*
					_ => return Err($crate::XcmError::Transport("Only sends to children parachain.")),
				}
			}

			Ok(())
		}

		/// XCM router for parachain.
		pub struct ParachainXcmRouter<T>($crate::PhantomData<T>);

		impl<T: $crate::Get<$crate::ParaId>> $crate::SendXcm for ParachainXcmRouter<T> {
			type Ticket = ($crate::ParaId, $crate::Location, $crate::Xcm<()>);
			fn validate(
				destination: &mut Option<$crate::Location>,
				message: &mut Option<$crate::Xcm<()>>,
			) -> $crate::SendResult<($crate::ParaId, $crate::Location, $crate::Xcm<()>)> {
				use $crate::XcmpMessageHandlerT;

				let d = destination.take().ok_or($crate::SendError::MissingArgument)?;
				match d.unpack() {
					(1, []) => {},
					$(
						(1, [$crate::Parachain(id)]) if id == &$para_id => {}
					)*
					_ => {
						*destination = Some(d);
						return Err($crate::SendError::NotApplicable)
					},
				}
				let m = message.take().ok_or($crate::SendError::MissingArgument)?;
				Ok(((T::get(), d, m), $crate::Assets::new()))
			}
			fn deliver(
				triple: ($crate::ParaId, $crate::Location, $crate::Xcm<()>),
			) -> Result<$crate::XcmHash, $crate::SendError> {
				let hash = $crate::helpers::derive_topic_id(&triple.2);
				$crate::PARA_MESSAGE_BUS.with(|b| b.borrow_mut().push_back(triple));
				Ok(hash)
			}
		}

		/// XCM router for relay chain.
		pub struct RelayChainXcmRouter;
		impl $crate::SendXcm for RelayChainXcmRouter {
			type Ticket = ($crate::Location, $crate::Xcm<()>);
			fn validate(
				destination: &mut Option<$crate::Location>,
				message: &mut Option<$crate::Xcm<()>>,
			) -> $crate::SendResult<($crate::Location, $crate::Xcm<()>)> {
				use $crate::DmpMessageHandlerT;

				let d = destination.take().ok_or($crate::SendError::MissingArgument)?;
				match d.unpack() {
					$(
						(0, [$crate::Parachain(id)]) if id == &$para_id => {},
					)*
					_ => {
						*destination = Some(d);
						return Err($crate::SendError::NotApplicable)
					},
				}
				let m = message.take().ok_or($crate::SendError::MissingArgument)?;
				Ok(((d, m), $crate::Assets::new()))
			}
			fn deliver(
				pair: ($crate::Location, $crate::Xcm<()>),
			) -> Result<$crate::XcmHash, $crate::SendError> {
				let hash = $crate::helpers::derive_topic_id(&pair.1);
				$crate::RELAY_MESSAGE_BUS.with(|b| b.borrow_mut().push_back(pair));
				Ok(hash)
			}
		}
	};
}

pub mod helpers {
	use super::*;
	use sp_runtime::testing::H256;
	use std::collections::{HashMap, HashSet};

	/// Derives a topic ID for an XCM in tests.
	pub fn derive_topic_id<T>(message: &Xcm<T>) -> XcmHash {
		if let Some(SetTopic(topic_id)) = message.last() {
			*topic_id
		} else {
			fake_message_hash(message)
		}
	}

	/// A test utility for tracking XCM topic IDs
	#[derive(Clone)]
	pub struct TopicIdTracker {
		ids: HashMap<String, H256>,
	}
	impl TopicIdTracker {
		/// Initialises a new, empty topic ID tracker.
		pub fn new() -> Self {
			TopicIdTracker { ids: HashMap::new() }
		}

		/// Asserts that exactly one unique topic ID is present across all captured entries.
		pub fn assert_unique(&self) {
			let unique_ids: HashSet<_> = self.ids.values().collect();
			assert_eq!(
				unique_ids.len(),
				1,
				"Expected exactly one topic ID, found {}: {:?}",
				unique_ids.len(),
				unique_ids
			);
		}

		/// Inserts a topic ID with the given chain name in the captor.
		pub fn insert(&mut self, chain: &str, id: H256) {
			self.ids.insert(chain.to_string(), id);
		}

		/// Inserts a topic ID for a given chain and then asserts global uniqueness.
		pub fn insert_and_assert_unique(&mut self, chain: &str, id: H256) {
			if let Some(existing_id) = self.ids.get(chain) {
				assert_eq!(
					id, *existing_id,
					"Topic ID mismatch for chain '{}': expected {:?}, got {:?}",
					id, existing_id, chain
				);
			} else {
				self.insert(chain, id);
			}
			self.assert_unique();
		}
	}
}
