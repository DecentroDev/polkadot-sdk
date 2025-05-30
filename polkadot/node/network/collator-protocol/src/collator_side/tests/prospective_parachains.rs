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

//! Tests for the collator side with enabled prospective parachains.

use super::*;

use polkadot_node_subsystem::messages::ChainApiMessage;
use polkadot_primitives::Header;
use rstest::rstest;

fn get_parent_hash(hash: Hash) -> Hash {
	Hash::from_low_u64_be(hash.to_low_u64_be() + 1)
}

/// Handle a view update.
pub(super) async fn update_view(
	test_state: &TestState,
	virtual_overseer: &mut VirtualOverseer,
	new_view: Vec<(Hash, u32)>, // Hash and block number.
	activated: u8,              // How many new heads does this update contain?
) {
	let new_view: HashMap<Hash, u32> = HashMap::from_iter(new_view);

	let our_view = OurView::new(new_view.keys().map(|hash| *hash), 0);

	overseer_send(
		virtual_overseer,
		CollatorProtocolMessage::NetworkBridgeUpdate(NetworkBridgeEvent::OurViewChange(our_view)),
	)
	.await;

	for _ in 0..activated {
		// obtain the claim queue schedule.
		let (leaf_hash, leaf_number) = assert_matches!(
			overseer_recv(virtual_overseer).await,
			AllMessages::RuntimeApi(RuntimeApiMessage::Request(
				parent,
				RuntimeApiRequest::ClaimQueue(tx),
			)) => {
				tx.send(Ok(test_state.claim_queue.clone())).unwrap();
				(parent, new_view.get(&parent).copied().expect("Unknown parent requested"))
			}
		);

		let min_number = leaf_number.saturating_sub(SCHEDULING_LOOKAHEAD as u32 - 1);

		let ancestry_len = leaf_number + 1 - min_number;
		let ancestry_hashes = std::iter::successors(Some(leaf_hash), |h| Some(get_parent_hash(*h)))
			.take(ancestry_len as usize);
		let ancestry_numbers = (min_number..=leaf_number).rev();
		let mut ancestry_iter = ancestry_hashes.clone().zip(ancestry_numbers).peekable();

		if let Some((hash, number)) = ancestry_iter.next() {
			assert_matches!(
				overseer_recv_with_timeout(virtual_overseer, Duration::from_millis(50)).await.unwrap(),
				AllMessages::ChainApi(ChainApiMessage::BlockHeader(.., tx)) => {
					let header = Header {
						parent_hash: get_parent_hash(hash),
						number,
						state_root: Hash::zero(),
						extrinsics_root: Hash::zero(),
						digest: Default::default(),
					};

					tx.send(Ok(Some(header))).unwrap();
				}
			);

			assert_matches!(
				overseer_recv_with_timeout(virtual_overseer, Duration::from_millis(50)).await.unwrap(),
				AllMessages::RuntimeApi(
					RuntimeApiMessage::Request(
						..,
						RuntimeApiRequest::SessionIndexForChild(
							tx
						)
					)
				) => {
					tx.send(Ok(1)).unwrap();
				}
			);

			assert_matches!(
				overseer_recv_with_timeout(virtual_overseer, Duration::from_millis(50)).await.unwrap(),
				AllMessages::RuntimeApi(
					RuntimeApiMessage::Request(
						..,
						RuntimeApiRequest::SchedulingLookahead(
							session_index,
							tx
						)
					)
				) => {
					assert_eq!(session_index, 1);
					tx.send(Ok(SCHEDULING_LOOKAHEAD as u32)).unwrap();
				}
			);

			assert_matches!(
				overseer_recv_with_timeout(virtual_overseer, Duration::from_millis(50)).await.unwrap(),
				AllMessages::ChainApi(
					ChainApiMessage::Ancestors {
						k,
						response_channel: tx,
						..
					}
				) => {
					assert_eq!(k, SCHEDULING_LOOKAHEAD - 1);
					let hashes: Vec<_> = ancestry_hashes.clone().skip(1).into_iter().collect();
					assert_eq!(k, hashes.len());
					tx.send(Ok(hashes)).unwrap();
				}
			);
		}

		for _ in ancestry_iter.clone() {
			assert_matches!(
				overseer_recv_with_timeout(virtual_overseer, Duration::from_millis(50)).await.unwrap(),
				AllMessages::RuntimeApi(
					RuntimeApiMessage::Request(
						..,
						RuntimeApiRequest::SessionIndexForChild(
							tx
						)
					)
				) => {
					tx.send(Ok(1)).unwrap();
				}
			);
		}

		let mut iter_clone = ancestry_iter.clone();
		while let Some((hash, number)) = iter_clone.next() {
			// May be `None` for the last element.
			let parent_hash =
				iter_clone.peek().map(|(h, _)| *h).unwrap_or_else(|| get_parent_hash(hash));

			let Some(msg) =
				overseer_peek_with_timeout(virtual_overseer, Duration::from_millis(50)).await
			else {
				return
			};

			if !matches!(
				&msg,
				AllMessages::ChainApi(ChainApiMessage::BlockHeader(_hash, ..))
					if *_hash == hash
			) {
				// Ancestry has already been cached for this leaf.
				break
			}

			assert_matches!(
				overseer_recv_with_timeout(virtual_overseer, Duration::from_millis(50)).await.unwrap(),
				AllMessages::ChainApi(ChainApiMessage::BlockHeader(.., tx)) => {
					let header = Header {
						parent_hash,
						number,
						state_root: Hash::zero(),
						extrinsics_root: Hash::zero(),
						digest: Default::default(),
					};

					tx.send(Ok(Some(header))).unwrap();
				}
			);
		}

		for _ in ancestry_iter {
			while let Some(msg) =
				overseer_peek_with_timeout(virtual_overseer, Duration::from_millis(50)).await
			{
				if !matches!(
					&msg,
					AllMessages::RuntimeApi(RuntimeApiMessage::Request(
						_,
						RuntimeApiRequest::ClaimQueue(_),
					))
				) && !matches!(
					&msg,
					AllMessages::RuntimeApi(RuntimeApiMessage::Request(
						_,
						RuntimeApiRequest::CandidateEvents(_),
					))
				) {
					break
				}

				match overseer_recv_with_timeout(virtual_overseer, Duration::from_millis(50))
					.await
					.unwrap()
				{
					AllMessages::RuntimeApi(RuntimeApiMessage::Request(
						_,
						RuntimeApiRequest::ClaimQueue(tx),
					)) => {
						tx.send(Ok(test_state.claim_queue.clone())).unwrap();
					},
					AllMessages::RuntimeApi(RuntimeApiMessage::Request(
						..,
						RuntimeApiRequest::CandidateEvents(tx),
					)) => {
						tx.send(Ok(vec![])).unwrap();
					},
					_ => {
						unimplemented!()
					},
				}
			}
		}
	}
}

/// Check that the next received message is a `Declare` message.
pub(super) async fn expect_declare_msg(
	virtual_overseer: &mut VirtualOverseer,
	test_state: &TestState,
	peer: &PeerId,
) {
	assert_matches!(
		overseer_recv(virtual_overseer).await,
		AllMessages::NetworkBridgeTx(NetworkBridgeTxMessage::SendCollationMessage(
			to,
			CollationProtocols::V2(protocol_v2::CollationProtocol::CollatorProtocol(
				wire_message,
			)),
		)) => {
			assert_eq!(to[0], *peer);
			assert_matches!(
				wire_message,
				protocol_v2::CollatorProtocolMessage::Declare(
					collator_id,
					para_id,
					signature,
				) => {
					assert!(signature.verify(
						&*protocol_v2::declare_signature_payload(&test_state.local_peer_id),
						&collator_id),
					);
					assert_eq!(collator_id, test_state.collator_pair.public());
					assert_eq!(para_id, test_state.para_id);
				}
			);
		}
	);
}

/// Test that a collator distributes a collation from the allowed ancestry
/// to correct validators group.
/// Run once with validators sending their view first and then the collator setting their own
/// view first.
#[rstest]
#[case(true)]
#[case(false)]
fn distribute_collation_from_implicit_view(#[case] validator_sends_view_first: bool) {
	let head_a = Hash::from_low_u64_be(126);
	let head_a_num: u32 = 66;

	// Grandparent of head `a`.
	let head_b = Hash::from_low_u64_be(128);
	let head_b_num: u32 = 64;

	// Grandparent of head `b`.
	let head_c = Hash::from_low_u64_be(130);
	let head_c_num = 62;

	let group_rotation_info = GroupRotationInfo {
		session_start_block: head_c_num - 2,
		group_rotation_frequency: 3,
		now: head_c_num,
	};

	let mut test_state = TestState::default();
	test_state.group_rotation_info = group_rotation_info;

	let local_peer_id = test_state.local_peer_id;
	let collator_pair = test_state.collator_pair.clone();

	test_harness(
		local_peer_id,
		collator_pair,
		ReputationAggregator::new(|_| true),
		|mut test_harness| async move {
			let virtual_overseer = &mut test_harness.virtual_overseer;

			// Set collating para id.
			overseer_send(virtual_overseer, CollatorProtocolMessage::CollateOn(test_state.para_id))
				.await;

			if validator_sends_view_first {
				// Activate leaf `c` to accept at least the collation.
				update_view(&test_state, virtual_overseer, vec![(head_c, head_c_num)], 1).await;
			} else {
				// Activated leaf is `b`, but the collation will be based on `c`.
				update_view(&test_state, virtual_overseer, vec![(head_b, head_b_num)], 1).await;
			}

			let validator_peer_ids = test_state.current_group_validator_peer_ids();
			for (val, peer) in test_state
				.current_group_validator_authority_ids()
				.into_iter()
				.zip(validator_peer_ids.clone())
			{
				connect_peer(virtual_overseer, peer, CollationVersion::V2, Some(val.clone())).await;
			}

			// Collator declared itself to each peer.
			for peer_id in &validator_peer_ids {
				expect_declare_msg(virtual_overseer, &test_state, peer_id).await;
			}

			let pov = PoV { block_data: BlockData(vec![1, 2, 3]) };
			let parent_head_data_hash = Hash::repeat_byte(0xAA);
			let candidate = TestCandidateBuilder {
				para_id: test_state.para_id,
				relay_parent: head_c,
				pov_hash: pov.hash(),
				..Default::default()
			}
			.build();
			let DistributeCollation { candidate, pov_block: _ } =
				distribute_collation_with_receipt(
					virtual_overseer,
					&test_state,
					head_c,
					false, // Check the group manually.
					candidate,
					pov,
					parent_head_data_hash,
				)
				.await;
			assert_matches!(
				overseer_recv(virtual_overseer).await,
				AllMessages::NetworkBridgeTx(
					NetworkBridgeTxMessage::ConnectToValidators { validator_ids, .. }
				) => {
					let expected_validators = test_state.current_group_validator_authority_ids();

					assert_eq!(expected_validators, validator_ids);
				}
			);

			let candidate_hash = candidate.hash();

			// Update peer views.
			for peer_id in &validator_peer_ids {
				send_peer_view_change(virtual_overseer, peer_id, vec![head_b]).await;

				if !validator_sends_view_first {
					expect_advertise_collation_msg(
						virtual_overseer,
						&[*peer_id],
						head_c,
						vec![candidate_hash],
					)
					.await;
				}
			}

			if validator_sends_view_first {
				// Activated leaf is `b`, but the collation will be based on `c`.
				update_view(&test_state, virtual_overseer, vec![(head_b, head_b_num)], 1).await;

				for _ in &validator_peer_ids {
					expect_advertise_collation_msg(
						virtual_overseer,
						&validator_peer_ids,
						head_c,
						vec![candidate_hash],
					)
					.await;
				}
			}

			// Head `c` goes out of view.
			// Build a different candidate for this relay parent and attempt to distribute it.
			update_view(&test_state, virtual_overseer, vec![(head_a, head_a_num)], 1).await;

			let pov = PoV { block_data: BlockData(vec![4, 5, 6]) };
			let parent_head_data_hash = Hash::repeat_byte(0xBB);
			let candidate = TestCandidateBuilder {
				para_id: test_state.para_id,
				relay_parent: head_c,
				pov_hash: pov.hash(),
				..Default::default()
			}
			.build();
			overseer_send(
				virtual_overseer,
				CollatorProtocolMessage::DistributeCollation {
					candidate_receipt: candidate.clone(),
					parent_head_data_hash,
					pov: pov.clone(),
					parent_head_data: HeadData(vec![1, 2, 3]),
					result_sender: None,
					core_index: CoreIndex(0),
				},
			)
			.await;

			// Parent out of view, nothing happens.
			assert!(overseer_recv_with_timeout(virtual_overseer, Duration::from_millis(100))
				.await
				.is_none());

			test_harness
		},
	);
}

/// Tests that collator respects the per relay parent limit of collations, which is equal to the
/// number of assignments they have in the claim queue for that core.
#[test]
fn distribute_collation_up_to_limit() {
	let mut test_state = TestState::default();
	// Claim queue has 4 assignments for our paraid on core 0, 1 assignment for another paraid on
	// core 1. Let's replace one of our assignments on core 0.

	*test_state.claim_queue.get_mut(&CoreIndex(0)).unwrap().get_mut(1).unwrap() = ParaId::from(3);
	let expected_assignments = SCHEDULING_LOOKAHEAD - 1;

	let local_peer_id = test_state.local_peer_id;
	let collator_pair = test_state.collator_pair.clone();

	test_harness(
		local_peer_id,
		collator_pair,
		ReputationAggregator::new(|_| true),
		|mut test_harness| async move {
			let virtual_overseer = &mut test_harness.virtual_overseer;

			let head_a = Hash::from_low_u64_be(128);
			let head_a_num: u32 = 64;

			// Grandparent of head `a`.
			let head_b = Hash::from_low_u64_be(130);

			// Set collating para id.
			overseer_send(virtual_overseer, CollatorProtocolMessage::CollateOn(test_state.para_id))
				.await;
			// Activated leaf is `a`, but the collation will be based on `b`.
			update_view(&test_state, virtual_overseer, vec![(head_a, head_a_num)], 1).await;

			for i in 0..expected_assignments {
				let pov = PoV { block_data: BlockData(vec![i as u8]) };
				let parent_head_data_hash = Hash::repeat_byte(0xAA);
				let candidate = TestCandidateBuilder {
					para_id: test_state.para_id,
					relay_parent: head_b,
					pov_hash: pov.hash(),
					core_index: CoreIndex(0),
					..Default::default()
				}
				.build();
				distribute_collation_with_receipt(
					virtual_overseer,
					&test_state,
					head_b,
					true,
					candidate,
					pov,
					parent_head_data_hash,
				)
				.await;
			}

			let pov = PoV { block_data: BlockData(vec![10, 12, 6]) };
			let parent_head_data_hash = Hash::repeat_byte(0xBB);
			let candidate = TestCandidateBuilder {
				para_id: test_state.para_id,
				relay_parent: head_b,
				pov_hash: pov.hash(),
				core_index: CoreIndex(0),
				..Default::default()
			}
			.build();
			overseer_send(
				virtual_overseer,
				CollatorProtocolMessage::DistributeCollation {
					candidate_receipt: candidate.clone(),
					parent_head_data_hash,
					pov: pov.clone(),
					parent_head_data: HeadData(vec![1, 2, 3]),
					result_sender: None,
					core_index: CoreIndex(0),
				},
			)
			.await;

			// Limit has been reached.
			assert!(overseer_recv_with_timeout(virtual_overseer, Duration::from_millis(100))
				.await
				.is_none());

			// Let's also try on core 1, where we don't have any assignments.

			let pov = PoV { block_data: BlockData(vec![10, 12, 6]) };
			let parent_head_data_hash = Hash::repeat_byte(0xBB);
			let candidate = TestCandidateBuilder {
				para_id: test_state.para_id,
				relay_parent: head_b,
				pov_hash: pov.hash(),
				core_index: CoreIndex(1),
				..Default::default()
			}
			.build();
			overseer_send(
				virtual_overseer,
				CollatorProtocolMessage::DistributeCollation {
					candidate_receipt: candidate.clone(),
					parent_head_data_hash,
					pov: pov.clone(),
					parent_head_data: HeadData(vec![1, 2, 3]),
					result_sender: None,
					core_index: CoreIndex(1),
				},
			)
			.await;

			assert!(overseer_recv_with_timeout(virtual_overseer, Duration::from_millis(100))
				.await
				.is_none());

			test_harness
		},
	)
}

/// Tests that collator send the parent head data in
/// case the para is assigned to multiple cores (elastic scaling).
#[test]
fn send_parent_head_data_for_elastic_scaling() {
	let test_state = TestState::with_elastic_scaling();

	let local_peer_id = test_state.local_peer_id;
	let collator_pair = test_state.collator_pair.clone();

	test_harness(
		local_peer_id,
		collator_pair,
		ReputationAggregator::new(|_| true),
		|test_harness| async move {
			let mut virtual_overseer = test_harness.virtual_overseer;
			let mut req_v2_cfg = test_harness.req_v2_cfg;

			let head_b = Hash::from_low_u64_be(129);
			let head_b_num: u32 = 63;

			// Set collating para id.
			overseer_send(
				&mut virtual_overseer,
				CollatorProtocolMessage::CollateOn(test_state.para_id),
			)
			.await;
			update_view(&test_state, &mut virtual_overseer, vec![(head_b, head_b_num)], 1).await;

			let pov_data = PoV { block_data: BlockData(vec![1 as u8]) };
			let candidate = TestCandidateBuilder {
				para_id: test_state.para_id,
				relay_parent: head_b,
				pov_hash: pov_data.hash(),
				..Default::default()
			}
			.build();

			let phd = HeadData(vec![1, 2, 3]);
			let phdh = phd.hash();

			distribute_collation_with_receipt(
				&mut virtual_overseer,
				&test_state,
				head_b,
				true,
				candidate.clone(),
				pov_data.clone(),
				phdh,
			)
			.await;

			let peer = test_state.validator_peer_id[0];
			let validator_id = test_state.current_group_validator_authority_ids()[0].clone();
			connect_peer(
				&mut virtual_overseer,
				peer,
				CollationVersion::V2,
				Some(validator_id.clone()),
			)
			.await;
			expect_declare_msg(&mut virtual_overseer, &test_state, &peer).await;

			send_peer_view_change(&mut virtual_overseer, &peer, vec![head_b]).await;
			let hashes: Vec<_> = vec![candidate.hash()];
			expect_advertise_collation_msg(&mut virtual_overseer, &[peer], head_b, hashes).await;

			let (pending_response, rx) = oneshot::channel();
			req_v2_cfg
				.inbound_queue
				.as_mut()
				.unwrap()
				.send(RawIncomingRequest {
					peer,
					payload: CollationFetchingRequest {
						relay_parent: head_b,
						para_id: test_state.para_id,
						candidate_hash: candidate.hash(),
					}
					.encode(),
					pending_response,
				})
				.await
				.unwrap();

			assert_matches!(
				rx.await,
				Ok(full_response) => {
					let response: CollationFetchingResponse =
						CollationFetchingResponse::decode(
							&mut full_response.result
							.expect("We should have a proper answer").as_ref()
						).expect("Decoding should work");
						assert_matches!(
							response,
							CollationFetchingResponse::CollationWithParentHeadData {
								receipt, pov, parent_head_data
							} => {
								assert_eq!(receipt, candidate);
								assert_eq!(pov, pov_data);
								assert_eq!(parent_head_data, phd);
							}
						);
				}
			);

			TestHarness { virtual_overseer, req_v2_cfg }
		},
	)
}

/// Tests that collator correctly handles peer V2 requests.
#[test]
fn advertise_and_send_collation_by_hash() {
	let test_state = TestState::default();

	let local_peer_id = test_state.local_peer_id;
	let collator_pair = test_state.collator_pair.clone();

	test_harness(
		local_peer_id,
		collator_pair,
		ReputationAggregator::new(|_| true),
		|test_harness| async move {
			let mut virtual_overseer = test_harness.virtual_overseer;
			let mut req_v2_cfg = test_harness.req_v2_cfg;

			let head_a = Hash::from_low_u64_be(128);
			let head_a_num: u32 = 64;

			// Parent of head `a`.
			let head_b = Hash::from_low_u64_be(129);
			let head_b_num: u32 = 63;

			// Set collating para id.
			overseer_send(
				&mut virtual_overseer,
				CollatorProtocolMessage::CollateOn(test_state.para_id),
			)
			.await;
			update_view(&test_state, &mut virtual_overseer, vec![(head_b, head_b_num)], 1).await;
			update_view(&test_state, &mut virtual_overseer, vec![(head_a, head_a_num)], 1).await;

			let candidates: Vec<_> = (0..2)
				.map(|i| {
					let pov = PoV { block_data: BlockData(vec![i as u8]) };
					let candidate = TestCandidateBuilder {
						para_id: test_state.para_id,
						relay_parent: head_b,
						pov_hash: pov.hash(),
						..Default::default()
					}
					.build();
					(candidate, pov)
				})
				.collect();

			for (candidate, pov) in &candidates {
				distribute_collation_with_receipt(
					&mut virtual_overseer,
					&test_state,
					head_b,
					true,
					candidate.clone(),
					pov.clone(),
					Hash::zero(),
				)
				.await;
			}

			let peer = test_state.validator_peer_id[0];
			let validator_id = test_state.current_group_validator_authority_ids()[0].clone();
			connect_peer(
				&mut virtual_overseer,
				peer,
				CollationVersion::V2,
				Some(validator_id.clone()),
			)
			.await;
			expect_declare_msg(&mut virtual_overseer, &test_state, &peer).await;

			// Head `b` is not a leaf, but both advertisements are still relevant.
			send_peer_view_change(&mut virtual_overseer, &peer, vec![head_b]).await;
			let hashes: Vec<_> = candidates.iter().map(|(candidate, _)| candidate.hash()).collect();
			expect_advertise_collation_msg(&mut virtual_overseer, &[peer], head_b, hashes).await;

			for (candidate, pov_block) in candidates {
				let (pending_response, rx) = oneshot::channel();
				req_v2_cfg
					.inbound_queue
					.as_mut()
					.unwrap()
					.send(RawIncomingRequest {
						peer,
						payload: CollationFetchingRequest {
							relay_parent: head_b,
							para_id: test_state.para_id,
							candidate_hash: candidate.hash(),
						}
						.encode(),
						pending_response,
					})
					.await
					.unwrap();

				assert_matches!(
					rx.await,
					Ok(full_response) => {
						// Response is the same for v2.
						let (receipt, pov) = decode_collation_response(
							full_response.result
							.expect("We should have a proper answer").as_ref()
						);
						assert_eq!(receipt, candidate);
						assert_eq!(pov, pov_block);
					}
				);
			}

			TestHarness { virtual_overseer, req_v2_cfg }
		},
	)
}
