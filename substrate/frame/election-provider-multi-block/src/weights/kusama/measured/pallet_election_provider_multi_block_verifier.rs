// This file is part of Substrate.

// Copyright (C) Parity Technologies (UK) Ltd.
// SPDX-License-Identifier: Apache-2.0

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// 	http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


//! Autogenerated weights for `pallet_election_provider_multi_block_verifier`
//!
//! THIS FILE WAS AUTO-GENERATED USING THE SUBSTRATE BENCHMARK CLI VERSION 32.0.0
//! DATE: 2025-04-17, STEPS: `5`, REPEAT: `10`, LOW RANGE: `[]`, HIGH RANGE: `[]`
//! WORST CASE MAP SIZE: `1000000`
//! HOSTNAME: `ggwpez-ref-hw`, CPU: `AMD EPYC 7232P 8-Core Processor`
//! WASM-EXECUTION: `Compiled`, CHAIN: `None`, DB CACHE: `1024`

// Executed Command:
// ../../../../../target/release/frame-omni-bencher
// v1
// benchmark
// pallet
// --pallet
// pallet_election_provider_multi_block_verifier
// --extrinsic
// all
// --runtime
// ../../../../../target/release/wbuild/pallet-staking-async-parachain-runtime/pallet_staking_async_parachain_runtime.compact.wasm
// --steps
// 5
// --repeat
// 10
// --genesis-builder-preset
// ksm_size
// --template
// ../../../../../substrate/.maintain/frame-weight-template.hbs
// --heap-pages
// 65000
// --output
// ./pallet_election_provider_multi_block_verifier_ksm_size.rs

#![cfg_attr(rustfmt, rustfmt_skip)]
#![allow(unused_parens)]
#![allow(unused_imports)]
#![allow(missing_docs)]
#![allow(dead_code)]

use frame_support::{traits::Get, weights::{Weight, constants::RocksDbWeight}};
use core::marker::PhantomData;

/// Weight functions needed for `pallet_election_provider_multi_block_verifier`.
pub trait WeightInfo {
	fn on_initialize_valid_non_terminal() -> Weight;
	fn on_initialize_valid_terminal() -> Weight;
	fn on_initialize_invalid_terminal() -> Weight;
	fn on_initialize_invalid_non_terminal(v: u32, ) -> Weight;
}

/// Weights for `pallet_election_provider_multi_block_verifier` using the Substrate node and recommended hardware.
pub struct SubstrateWeight<T>(PhantomData<T>);
impl<T: frame_system::Config> WeightInfo for SubstrateWeight<T> {
	/// Storage: `MultiBlock::CurrentPhase` (r:1 w:1)
	/// Proof: `MultiBlock::CurrentPhase` (`max_values`: Some(1), `max_size`: Some(5), added: 500, mode: `Measured`)
	/// Storage: `MultiBlockVerifier::StatusStorage` (r:1 w:1)
	/// Proof: `MultiBlockVerifier::StatusStorage` (`max_values`: Some(1), `max_size`: Some(5), added: 500, mode: `Measured`)
	/// Storage: `MultiBlock::Round` (r:1 w:0)
	/// Proof: `MultiBlock::Round` (`max_values`: Some(1), `max_size`: Some(4), added: 499, mode: `Measured`)
	/// Storage: `MultiBlockSigned::SortedScores` (r:1 w:0)
	/// Proof: `MultiBlockSigned::SortedScores` (`max_values`: None, `max_size`: Some(653), added: 3128, mode: `Measured`)
	/// Storage: `MultiBlockSigned::SubmissionStorage` (r:1 w:0)
	/// Proof: `MultiBlockSigned::SubmissionStorage` (`max_values`: None, `max_size`: Some(50064), added: 52539, mode: `Measured`)
	/// Storage: UNKNOWN KEY `0xa143099d7a337c5fd879b91b2b157c2d` (r:1 w:0)
	/// Proof: UNKNOWN KEY `0xa143099d7a337c5fd879b91b2b157c2d` (r:1 w:0)
	/// Storage: `MultiBlock::PagedTargetSnapshot` (r:1 w:0)
	/// Proof: `MultiBlock::PagedTargetSnapshot` (`max_values`: None, `max_size`: Some(32014), added: 34489, mode: `Measured`)
	/// Storage: `MultiBlock::PagedVoterSnapshot` (r:1 w:0)
	/// Proof: `MultiBlock::PagedVoterSnapshot` (`max_values`: None, `max_size`: Some(431907), added: 434382, mode: `Measured`)
	/// Storage: UNKNOWN KEY `0x6f320d44e42312c78638e6c92dff65af` (r:1 w:0)
	/// Proof: UNKNOWN KEY `0x6f320d44e42312c78638e6c92dff65af` (r:1 w:0)
	/// Storage: `MultiBlock::DesiredTargets` (r:1 w:0)
	/// Proof: `MultiBlock::DesiredTargets` (`max_values`: Some(1), `max_size`: Some(4), added: 499, mode: `Measured`)
	/// Storage: `MultiBlockVerifier::QueuedValidVariant` (r:1 w:0)
	/// Proof: `MultiBlockVerifier::QueuedValidVariant` (`max_values`: Some(1), `max_size`: Some(1), added: 496, mode: `Measured`)
	/// Storage: UNKNOWN KEY `0x48384a816e4f71a936cb76dc9e303f2a` (r:1 w:0)
	/// Proof: UNKNOWN KEY `0x48384a816e4f71a936cb76dc9e303f2a` (r:1 w:0)
	/// Storage: UNKNOWN KEY `0xc209f5d8eb920681b56c64b8694ea78c` (r:1 w:0)
	/// Proof: UNKNOWN KEY `0xc209f5d8eb920681b56c64b8694ea78c` (r:1 w:0)
	/// Storage: `MultiBlockVerifier::QueuedSolutionX` (r:0 w:1)
	/// Proof: `MultiBlockVerifier::QueuedSolutionX` (`max_values`: None, `max_size`: Some(37538014), added: 37540489, mode: `Measured`)
	/// Storage: `MultiBlockVerifier::QueuedSolutionBackings` (r:0 w:1)
	/// Proof: `MultiBlockVerifier::QueuedSolutionBackings` (`max_values`: None, `max_size`: Some(52014), added: 54489, mode: `Measured`)
	fn on_initialize_valid_non_terminal() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `283185`
		//  Estimated: `286650`
		// Minimum execution time: 6_624_600_000 picoseconds.
		Weight::from_parts(8_167_211_000, 286650)
			.saturating_add(T::DbWeight::get().reads(13_u64))
			.saturating_add(T::DbWeight::get().writes(4_u64))
	}
	/// Storage: `MultiBlock::CurrentPhase` (r:1 w:1)
	/// Proof: `MultiBlock::CurrentPhase` (`max_values`: Some(1), `max_size`: Some(5), added: 500, mode: `Measured`)
	/// Storage: `MultiBlockVerifier::StatusStorage` (r:1 w:1)
	/// Proof: `MultiBlockVerifier::StatusStorage` (`max_values`: Some(1), `max_size`: Some(5), added: 500, mode: `Measured`)
	/// Storage: `MultiBlock::Round` (r:1 w:0)
	/// Proof: `MultiBlock::Round` (`max_values`: Some(1), `max_size`: Some(4), added: 499, mode: `Measured`)
	/// Storage: `MultiBlockSigned::SortedScores` (r:1 w:1)
	/// Proof: `MultiBlockSigned::SortedScores` (`max_values`: None, `max_size`: Some(653), added: 3128, mode: `Measured`)
	/// Storage: `MultiBlockSigned::SubmissionStorage` (r:16 w:16)
	/// Proof: `MultiBlockSigned::SubmissionStorage` (`max_values`: None, `max_size`: Some(50064), added: 52539, mode: `Measured`)
	/// Storage: UNKNOWN KEY `0xa143099d7a337c5fd879b91b2b157c2d` (r:1 w:0)
	/// Proof: UNKNOWN KEY `0xa143099d7a337c5fd879b91b2b157c2d` (r:1 w:0)
	/// Storage: `MultiBlock::PagedTargetSnapshot` (r:1 w:0)
	/// Proof: `MultiBlock::PagedTargetSnapshot` (`max_values`: None, `max_size`: Some(32014), added: 34489, mode: `Measured`)
	/// Storage: `MultiBlock::PagedVoterSnapshot` (r:1 w:0)
	/// Proof: `MultiBlock::PagedVoterSnapshot` (`max_values`: None, `max_size`: Some(431907), added: 434382, mode: `Measured`)
	/// Storage: UNKNOWN KEY `0x6f320d44e42312c78638e6c92dff65af` (r:1 w:0)
	/// Proof: UNKNOWN KEY `0x6f320d44e42312c78638e6c92dff65af` (r:1 w:0)
	/// Storage: `MultiBlock::DesiredTargets` (r:1 w:0)
	/// Proof: `MultiBlock::DesiredTargets` (`max_values`: Some(1), `max_size`: Some(4), added: 499, mode: `Measured`)
	/// Storage: `MultiBlockVerifier::QueuedValidVariant` (r:1 w:1)
	/// Proof: `MultiBlockVerifier::QueuedValidVariant` (`max_values`: Some(1), `max_size`: Some(1), added: 496, mode: `Measured`)
	/// Storage: `MultiBlockVerifier::QueuedSolutionBackings` (r:17 w:16)
	/// Proof: `MultiBlockVerifier::QueuedSolutionBackings` (`max_values`: None, `max_size`: Some(52014), added: 54489, mode: `Measured`)
	/// Storage: `MultiBlockVerifier::QueuedSolutionScore` (r:1 w:1)
	/// Proof: `MultiBlockVerifier::QueuedSolutionScore` (`max_values`: Some(1), `max_size`: Some(48), added: 543, mode: `Measured`)
	/// Storage: `MultiBlockSigned::SubmissionMetadataStorage` (r:1 w:1)
	/// Proof: `MultiBlockSigned::SubmissionMetadataStorage` (`max_values`: None, `max_size`: Some(165), added: 2640, mode: `Measured`)
	/// Storage: `Balances::Holds` (r:1 w:1)
	/// Proof: `Balances::Holds` (`max_values`: None, `max_size`: Some(193), added: 2668, mode: `Measured`)
	/// Storage: UNKNOWN KEY `0x48384a816e4f71a936cb76dc9e303f2a` (r:1 w:0)
	/// Proof: UNKNOWN KEY `0x48384a816e4f71a936cb76dc9e303f2a` (r:1 w:0)
	/// Storage: UNKNOWN KEY `0xc209f5d8eb920681b56c64b8694ea78c` (r:1 w:0)
	/// Proof: UNKNOWN KEY `0xc209f5d8eb920681b56c64b8694ea78c` (r:1 w:0)
	/// Storage: `MultiBlockVerifier::QueuedSolutionX` (r:0 w:1)
	/// Proof: `MultiBlockVerifier::QueuedSolutionX` (`max_values`: None, `max_size`: Some(37538014), added: 37540489, mode: `Measured`)
	fn on_initialize_valid_terminal() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `1196794`
		//  Estimated: `1239859`
		// Minimum execution time: 31_557_875_000 picoseconds.
		Weight::from_parts(31_820_575_000, 1239859)
			.saturating_add(T::DbWeight::get().reads(48_u64))
			.saturating_add(T::DbWeight::get().writes(40_u64))
	}
	/// Storage: `MultiBlock::CurrentPhase` (r:1 w:1)
	/// Proof: `MultiBlock::CurrentPhase` (`max_values`: Some(1), `max_size`: Some(5), added: 500, mode: `Measured`)
	/// Storage: `MultiBlockVerifier::StatusStorage` (r:1 w:1)
	/// Proof: `MultiBlockVerifier::StatusStorage` (`max_values`: Some(1), `max_size`: Some(5), added: 500, mode: `Measured`)
	/// Storage: `MultiBlock::Round` (r:1 w:0)
	/// Proof: `MultiBlock::Round` (`max_values`: Some(1), `max_size`: Some(4), added: 499, mode: `Measured`)
	/// Storage: `MultiBlockSigned::SortedScores` (r:1 w:1)
	/// Proof: `MultiBlockSigned::SortedScores` (`max_values`: None, `max_size`: Some(653), added: 3128, mode: `Measured`)
	/// Storage: `MultiBlockSigned::SubmissionStorage` (r:16 w:16)
	/// Proof: `MultiBlockSigned::SubmissionStorage` (`max_values`: None, `max_size`: Some(50064), added: 52539, mode: `Measured`)
	/// Storage: UNKNOWN KEY `0xa143099d7a337c5fd879b91b2b157c2d` (r:1 w:0)
	/// Proof: UNKNOWN KEY `0xa143099d7a337c5fd879b91b2b157c2d` (r:1 w:0)
	/// Storage: `MultiBlock::PagedTargetSnapshot` (r:1 w:0)
	/// Proof: `MultiBlock::PagedTargetSnapshot` (`max_values`: None, `max_size`: Some(32014), added: 34489, mode: `Measured`)
	/// Storage: `MultiBlock::PagedVoterSnapshot` (r:1 w:0)
	/// Proof: `MultiBlock::PagedVoterSnapshot` (`max_values`: None, `max_size`: Some(431907), added: 434382, mode: `Measured`)
	/// Storage: UNKNOWN KEY `0x6f320d44e42312c78638e6c92dff65af` (r:1 w:0)
	/// Proof: UNKNOWN KEY `0x6f320d44e42312c78638e6c92dff65af` (r:1 w:0)
	/// Storage: `MultiBlock::DesiredTargets` (r:1 w:0)
	/// Proof: `MultiBlock::DesiredTargets` (`max_values`: Some(1), `max_size`: Some(4), added: 499, mode: `Measured`)
	/// Storage: `MultiBlockVerifier::QueuedValidVariant` (r:1 w:0)
	/// Proof: `MultiBlockVerifier::QueuedValidVariant` (`max_values`: Some(1), `max_size`: Some(1), added: 496, mode: `Measured`)
	/// Storage: `MultiBlockVerifier::QueuedSolutionBackings` (r:17 w:16)
	/// Proof: `MultiBlockVerifier::QueuedSolutionBackings` (`max_values`: None, `max_size`: Some(52014), added: 54489, mode: `Measured`)
	/// Storage: `MultiBlockSigned::SubmissionMetadataStorage` (r:1 w:1)
	/// Proof: `MultiBlockSigned::SubmissionMetadataStorage` (`max_values`: None, `max_size`: Some(165), added: 2640, mode: `Measured`)
	/// Storage: `Balances::Holds` (r:1 w:1)
	/// Proof: `Balances::Holds` (`max_values`: None, `max_size`: Some(193), added: 2668, mode: `Measured`)
	/// Storage: `MultiBlockVerifier::QueuedSolutionX` (r:15 w:16)
	/// Proof: `MultiBlockVerifier::QueuedSolutionX` (`max_values`: None, `max_size`: Some(37538014), added: 37540489, mode: `Measured`)
	/// Storage: UNKNOWN KEY `0x48384a816e4f71a936cb76dc9e303f2a` (r:1 w:0)
	/// Proof: UNKNOWN KEY `0x48384a816e4f71a936cb76dc9e303f2a` (r:1 w:0)
	/// Storage: UNKNOWN KEY `0xc209f5d8eb920681b56c64b8694ea78c` (r:1 w:0)
	/// Proof: UNKNOWN KEY `0xc209f5d8eb920681b56c64b8694ea78c` (r:1 w:0)
	fn on_initialize_invalid_terminal() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `1197143`
		//  Estimated: `1240208`
		// Minimum execution time: 31_544_642_000 picoseconds.
		Weight::from_parts(31_777_605_000, 1240208)
			.saturating_add(T::DbWeight::get().reads(62_u64))
			.saturating_add(T::DbWeight::get().writes(53_u64))
	}
	/// Storage: `MultiBlock::CurrentPhase` (r:1 w:1)
	/// Proof: `MultiBlock::CurrentPhase` (`max_values`: Some(1), `max_size`: Some(5), added: 500, mode: `Measured`)
	/// Storage: `MultiBlockVerifier::StatusStorage` (r:1 w:1)
	/// Proof: `MultiBlockVerifier::StatusStorage` (`max_values`: Some(1), `max_size`: Some(5), added: 500, mode: `Measured`)
	/// Storage: `MultiBlock::Round` (r:1 w:0)
	/// Proof: `MultiBlock::Round` (`max_values`: Some(1), `max_size`: Some(4), added: 499, mode: `Measured`)
	/// Storage: `MultiBlockSigned::SortedScores` (r:1 w:1)
	/// Proof: `MultiBlockSigned::SortedScores` (`max_values`: None, `max_size`: Some(653), added: 3128, mode: `Measured`)
	/// Storage: `MultiBlockSigned::SubmissionStorage` (r:16 w:16)
	/// Proof: `MultiBlockSigned::SubmissionStorage` (`max_values`: None, `max_size`: Some(50064), added: 52539, mode: `Measured`)
	/// Storage: UNKNOWN KEY `0xa143099d7a337c5fd879b91b2b157c2d` (r:1 w:0)
	/// Proof: UNKNOWN KEY `0xa143099d7a337c5fd879b91b2b157c2d` (r:1 w:0)
	/// Storage: `MultiBlock::PagedTargetSnapshot` (r:1 w:0)
	/// Proof: `MultiBlock::PagedTargetSnapshot` (`max_values`: None, `max_size`: Some(32014), added: 34489, mode: `Measured`)
	/// Storage: `MultiBlock::PagedVoterSnapshot` (r:1 w:0)
	/// Proof: `MultiBlock::PagedVoterSnapshot` (`max_values`: None, `max_size`: Some(431907), added: 434382, mode: `Measured`)
	/// Storage: UNKNOWN KEY `0x6f320d44e42312c78638e6c92dff65af` (r:1 w:0)
	/// Proof: UNKNOWN KEY `0x6f320d44e42312c78638e6c92dff65af` (r:1 w:0)
	/// Storage: `MultiBlock::DesiredTargets` (r:1 w:0)
	/// Proof: `MultiBlock::DesiredTargets` (`max_values`: Some(1), `max_size`: Some(4), added: 499, mode: `Measured`)
	/// Storage: `MultiBlockVerifier::QueuedValidVariant` (r:1 w:0)
	/// Proof: `MultiBlockVerifier::QueuedValidVariant` (`max_values`: Some(1), `max_size`: Some(1), added: 496, mode: `Measured`)
	/// Storage: `MultiBlockVerifier::QueuedSolutionX` (r:15 w:15)
	/// Proof: `MultiBlockVerifier::QueuedSolutionX` (`max_values`: None, `max_size`: Some(37538014), added: 37540489, mode: `Measured`)
	/// Storage: `MultiBlockVerifier::QueuedSolutionBackings` (r:15 w:15)
	/// Proof: `MultiBlockVerifier::QueuedSolutionBackings` (`max_values`: None, `max_size`: Some(52014), added: 54489, mode: `Measured`)
	/// Storage: `MultiBlockSigned::SubmissionMetadataStorage` (r:1 w:1)
	/// Proof: `MultiBlockSigned::SubmissionMetadataStorage` (`max_values`: None, `max_size`: Some(165), added: 2640, mode: `Measured`)
	/// Storage: `Balances::Holds` (r:1 w:1)
	/// Proof: `Balances::Holds` (`max_values`: None, `max_size`: Some(193), added: 2668, mode: `Measured`)
	/// Storage: UNKNOWN KEY `0x48384a816e4f71a936cb76dc9e303f2a` (r:1 w:0)
	/// Proof: UNKNOWN KEY `0x48384a816e4f71a936cb76dc9e303f2a` (r:1 w:0)
	/// Storage: UNKNOWN KEY `0xc209f5d8eb920681b56c64b8694ea78c` (r:1 w:0)
	/// Proof: UNKNOWN KEY `0xc209f5d8eb920681b56c64b8694ea78c` (r:1 w:0)
	/// The range of component `v` is `[0, 15]`.
	fn on_initialize_invalid_non_terminal(v: u32, ) -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `286810 + v * (15242 ±0)`
		//  Estimated: `339803 + v * (16209 ±1_588)`
		// Minimum execution time: 1_378_480_000 picoseconds.
		Weight::from_parts(3_834_433_376, 339803)
			.saturating_add(T::DbWeight::get().reads(30_u64))
			.saturating_add(T::DbWeight::get().reads((2_u64).saturating_mul(v.into())))
			.saturating_add(T::DbWeight::get().writes(21_u64))
			.saturating_add(T::DbWeight::get().writes((2_u64).saturating_mul(v.into())))
			.saturating_add(Weight::from_parts(0, 16209).saturating_mul(v.into()))
	}
}

// For backwards compatibility and tests.
impl WeightInfo for () {
	/// Storage: `MultiBlock::CurrentPhase` (r:1 w:1)
	/// Proof: `MultiBlock::CurrentPhase` (`max_values`: Some(1), `max_size`: Some(5), added: 500, mode: `Measured`)
	/// Storage: `MultiBlockVerifier::StatusStorage` (r:1 w:1)
	/// Proof: `MultiBlockVerifier::StatusStorage` (`max_values`: Some(1), `max_size`: Some(5), added: 500, mode: `Measured`)
	/// Storage: `MultiBlock::Round` (r:1 w:0)
	/// Proof: `MultiBlock::Round` (`max_values`: Some(1), `max_size`: Some(4), added: 499, mode: `Measured`)
	/// Storage: `MultiBlockSigned::SortedScores` (r:1 w:0)
	/// Proof: `MultiBlockSigned::SortedScores` (`max_values`: None, `max_size`: Some(653), added: 3128, mode: `Measured`)
	/// Storage: `MultiBlockSigned::SubmissionStorage` (r:1 w:0)
	/// Proof: `MultiBlockSigned::SubmissionStorage` (`max_values`: None, `max_size`: Some(50064), added: 52539, mode: `Measured`)
	/// Storage: UNKNOWN KEY `0xa143099d7a337c5fd879b91b2b157c2d` (r:1 w:0)
	/// Proof: UNKNOWN KEY `0xa143099d7a337c5fd879b91b2b157c2d` (r:1 w:0)
	/// Storage: `MultiBlock::PagedTargetSnapshot` (r:1 w:0)
	/// Proof: `MultiBlock::PagedTargetSnapshot` (`max_values`: None, `max_size`: Some(32014), added: 34489, mode: `Measured`)
	/// Storage: `MultiBlock::PagedVoterSnapshot` (r:1 w:0)
	/// Proof: `MultiBlock::PagedVoterSnapshot` (`max_values`: None, `max_size`: Some(431907), added: 434382, mode: `Measured`)
	/// Storage: UNKNOWN KEY `0x6f320d44e42312c78638e6c92dff65af` (r:1 w:0)
	/// Proof: UNKNOWN KEY `0x6f320d44e42312c78638e6c92dff65af` (r:1 w:0)
	/// Storage: `MultiBlock::DesiredTargets` (r:1 w:0)
	/// Proof: `MultiBlock::DesiredTargets` (`max_values`: Some(1), `max_size`: Some(4), added: 499, mode: `Measured`)
	/// Storage: `MultiBlockVerifier::QueuedValidVariant` (r:1 w:0)
	/// Proof: `MultiBlockVerifier::QueuedValidVariant` (`max_values`: Some(1), `max_size`: Some(1), added: 496, mode: `Measured`)
	/// Storage: UNKNOWN KEY `0x48384a816e4f71a936cb76dc9e303f2a` (r:1 w:0)
	/// Proof: UNKNOWN KEY `0x48384a816e4f71a936cb76dc9e303f2a` (r:1 w:0)
	/// Storage: UNKNOWN KEY `0xc209f5d8eb920681b56c64b8694ea78c` (r:1 w:0)
	/// Proof: UNKNOWN KEY `0xc209f5d8eb920681b56c64b8694ea78c` (r:1 w:0)
	/// Storage: `MultiBlockVerifier::QueuedSolutionX` (r:0 w:1)
	/// Proof: `MultiBlockVerifier::QueuedSolutionX` (`max_values`: None, `max_size`: Some(37538014), added: 37540489, mode: `Measured`)
	/// Storage: `MultiBlockVerifier::QueuedSolutionBackings` (r:0 w:1)
	/// Proof: `MultiBlockVerifier::QueuedSolutionBackings` (`max_values`: None, `max_size`: Some(52014), added: 54489, mode: `Measured`)
	fn on_initialize_valid_non_terminal() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `283185`
		//  Estimated: `286650`
		// Minimum execution time: 6_624_600_000 picoseconds.
		Weight::from_parts(8_167_211_000, 286650)
			.saturating_add(RocksDbWeight::get().reads(13_u64))
			.saturating_add(RocksDbWeight::get().writes(4_u64))
	}
	/// Storage: `MultiBlock::CurrentPhase` (r:1 w:1)
	/// Proof: `MultiBlock::CurrentPhase` (`max_values`: Some(1), `max_size`: Some(5), added: 500, mode: `Measured`)
	/// Storage: `MultiBlockVerifier::StatusStorage` (r:1 w:1)
	/// Proof: `MultiBlockVerifier::StatusStorage` (`max_values`: Some(1), `max_size`: Some(5), added: 500, mode: `Measured`)
	/// Storage: `MultiBlock::Round` (r:1 w:0)
	/// Proof: `MultiBlock::Round` (`max_values`: Some(1), `max_size`: Some(4), added: 499, mode: `Measured`)
	/// Storage: `MultiBlockSigned::SortedScores` (r:1 w:1)
	/// Proof: `MultiBlockSigned::SortedScores` (`max_values`: None, `max_size`: Some(653), added: 3128, mode: `Measured`)
	/// Storage: `MultiBlockSigned::SubmissionStorage` (r:16 w:16)
	/// Proof: `MultiBlockSigned::SubmissionStorage` (`max_values`: None, `max_size`: Some(50064), added: 52539, mode: `Measured`)
	/// Storage: UNKNOWN KEY `0xa143099d7a337c5fd879b91b2b157c2d` (r:1 w:0)
	/// Proof: UNKNOWN KEY `0xa143099d7a337c5fd879b91b2b157c2d` (r:1 w:0)
	/// Storage: `MultiBlock::PagedTargetSnapshot` (r:1 w:0)
	/// Proof: `MultiBlock::PagedTargetSnapshot` (`max_values`: None, `max_size`: Some(32014), added: 34489, mode: `Measured`)
	/// Storage: `MultiBlock::PagedVoterSnapshot` (r:1 w:0)
	/// Proof: `MultiBlock::PagedVoterSnapshot` (`max_values`: None, `max_size`: Some(431907), added: 434382, mode: `Measured`)
	/// Storage: UNKNOWN KEY `0x6f320d44e42312c78638e6c92dff65af` (r:1 w:0)
	/// Proof: UNKNOWN KEY `0x6f320d44e42312c78638e6c92dff65af` (r:1 w:0)
	/// Storage: `MultiBlock::DesiredTargets` (r:1 w:0)
	/// Proof: `MultiBlock::DesiredTargets` (`max_values`: Some(1), `max_size`: Some(4), added: 499, mode: `Measured`)
	/// Storage: `MultiBlockVerifier::QueuedValidVariant` (r:1 w:1)
	/// Proof: `MultiBlockVerifier::QueuedValidVariant` (`max_values`: Some(1), `max_size`: Some(1), added: 496, mode: `Measured`)
	/// Storage: `MultiBlockVerifier::QueuedSolutionBackings` (r:17 w:16)
	/// Proof: `MultiBlockVerifier::QueuedSolutionBackings` (`max_values`: None, `max_size`: Some(52014), added: 54489, mode: `Measured`)
	/// Storage: `MultiBlockVerifier::QueuedSolutionScore` (r:1 w:1)
	/// Proof: `MultiBlockVerifier::QueuedSolutionScore` (`max_values`: Some(1), `max_size`: Some(48), added: 543, mode: `Measured`)
	/// Storage: `MultiBlockSigned::SubmissionMetadataStorage` (r:1 w:1)
	/// Proof: `MultiBlockSigned::SubmissionMetadataStorage` (`max_values`: None, `max_size`: Some(165), added: 2640, mode: `Measured`)
	/// Storage: `Balances::Holds` (r:1 w:1)
	/// Proof: `Balances::Holds` (`max_values`: None, `max_size`: Some(193), added: 2668, mode: `Measured`)
	/// Storage: UNKNOWN KEY `0x48384a816e4f71a936cb76dc9e303f2a` (r:1 w:0)
	/// Proof: UNKNOWN KEY `0x48384a816e4f71a936cb76dc9e303f2a` (r:1 w:0)
	/// Storage: UNKNOWN KEY `0xc209f5d8eb920681b56c64b8694ea78c` (r:1 w:0)
	/// Proof: UNKNOWN KEY `0xc209f5d8eb920681b56c64b8694ea78c` (r:1 w:0)
	/// Storage: `MultiBlockVerifier::QueuedSolutionX` (r:0 w:1)
	/// Proof: `MultiBlockVerifier::QueuedSolutionX` (`max_values`: None, `max_size`: Some(37538014), added: 37540489, mode: `Measured`)
	fn on_initialize_valid_terminal() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `1196794`
		//  Estimated: `1239859`
		// Minimum execution time: 31_557_875_000 picoseconds.
		Weight::from_parts(31_820_575_000, 1239859)
			.saturating_add(RocksDbWeight::get().reads(48_u64))
			.saturating_add(RocksDbWeight::get().writes(40_u64))
	}
	/// Storage: `MultiBlock::CurrentPhase` (r:1 w:1)
	/// Proof: `MultiBlock::CurrentPhase` (`max_values`: Some(1), `max_size`: Some(5), added: 500, mode: `Measured`)
	/// Storage: `MultiBlockVerifier::StatusStorage` (r:1 w:1)
	/// Proof: `MultiBlockVerifier::StatusStorage` (`max_values`: Some(1), `max_size`: Some(5), added: 500, mode: `Measured`)
	/// Storage: `MultiBlock::Round` (r:1 w:0)
	/// Proof: `MultiBlock::Round` (`max_values`: Some(1), `max_size`: Some(4), added: 499, mode: `Measured`)
	/// Storage: `MultiBlockSigned::SortedScores` (r:1 w:1)
	/// Proof: `MultiBlockSigned::SortedScores` (`max_values`: None, `max_size`: Some(653), added: 3128, mode: `Measured`)
	/// Storage: `MultiBlockSigned::SubmissionStorage` (r:16 w:16)
	/// Proof: `MultiBlockSigned::SubmissionStorage` (`max_values`: None, `max_size`: Some(50064), added: 52539, mode: `Measured`)
	/// Storage: UNKNOWN KEY `0xa143099d7a337c5fd879b91b2b157c2d` (r:1 w:0)
	/// Proof: UNKNOWN KEY `0xa143099d7a337c5fd879b91b2b157c2d` (r:1 w:0)
	/// Storage: `MultiBlock::PagedTargetSnapshot` (r:1 w:0)
	/// Proof: `MultiBlock::PagedTargetSnapshot` (`max_values`: None, `max_size`: Some(32014), added: 34489, mode: `Measured`)
	/// Storage: `MultiBlock::PagedVoterSnapshot` (r:1 w:0)
	/// Proof: `MultiBlock::PagedVoterSnapshot` (`max_values`: None, `max_size`: Some(431907), added: 434382, mode: `Measured`)
	/// Storage: UNKNOWN KEY `0x6f320d44e42312c78638e6c92dff65af` (r:1 w:0)
	/// Proof: UNKNOWN KEY `0x6f320d44e42312c78638e6c92dff65af` (r:1 w:0)
	/// Storage: `MultiBlock::DesiredTargets` (r:1 w:0)
	/// Proof: `MultiBlock::DesiredTargets` (`max_values`: Some(1), `max_size`: Some(4), added: 499, mode: `Measured`)
	/// Storage: `MultiBlockVerifier::QueuedValidVariant` (r:1 w:0)
	/// Proof: `MultiBlockVerifier::QueuedValidVariant` (`max_values`: Some(1), `max_size`: Some(1), added: 496, mode: `Measured`)
	/// Storage: `MultiBlockVerifier::QueuedSolutionBackings` (r:17 w:16)
	/// Proof: `MultiBlockVerifier::QueuedSolutionBackings` (`max_values`: None, `max_size`: Some(52014), added: 54489, mode: `Measured`)
	/// Storage: `MultiBlockSigned::SubmissionMetadataStorage` (r:1 w:1)
	/// Proof: `MultiBlockSigned::SubmissionMetadataStorage` (`max_values`: None, `max_size`: Some(165), added: 2640, mode: `Measured`)
	/// Storage: `Balances::Holds` (r:1 w:1)
	/// Proof: `Balances::Holds` (`max_values`: None, `max_size`: Some(193), added: 2668, mode: `Measured`)
	/// Storage: `MultiBlockVerifier::QueuedSolutionX` (r:15 w:16)
	/// Proof: `MultiBlockVerifier::QueuedSolutionX` (`max_values`: None, `max_size`: Some(37538014), added: 37540489, mode: `Measured`)
	/// Storage: UNKNOWN KEY `0x48384a816e4f71a936cb76dc9e303f2a` (r:1 w:0)
	/// Proof: UNKNOWN KEY `0x48384a816e4f71a936cb76dc9e303f2a` (r:1 w:0)
	/// Storage: UNKNOWN KEY `0xc209f5d8eb920681b56c64b8694ea78c` (r:1 w:0)
	/// Proof: UNKNOWN KEY `0xc209f5d8eb920681b56c64b8694ea78c` (r:1 w:0)
	fn on_initialize_invalid_terminal() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `1197143`
		//  Estimated: `1240208`
		// Minimum execution time: 31_544_642_000 picoseconds.
		Weight::from_parts(31_777_605_000, 1240208)
			.saturating_add(RocksDbWeight::get().reads(62_u64))
			.saturating_add(RocksDbWeight::get().writes(53_u64))
	}
	/// Storage: `MultiBlock::CurrentPhase` (r:1 w:1)
	/// Proof: `MultiBlock::CurrentPhase` (`max_values`: Some(1), `max_size`: Some(5), added: 500, mode: `Measured`)
	/// Storage: `MultiBlockVerifier::StatusStorage` (r:1 w:1)
	/// Proof: `MultiBlockVerifier::StatusStorage` (`max_values`: Some(1), `max_size`: Some(5), added: 500, mode: `Measured`)
	/// Storage: `MultiBlock::Round` (r:1 w:0)
	/// Proof: `MultiBlock::Round` (`max_values`: Some(1), `max_size`: Some(4), added: 499, mode: `Measured`)
	/// Storage: `MultiBlockSigned::SortedScores` (r:1 w:1)
	/// Proof: `MultiBlockSigned::SortedScores` (`max_values`: None, `max_size`: Some(653), added: 3128, mode: `Measured`)
	/// Storage: `MultiBlockSigned::SubmissionStorage` (r:16 w:16)
	/// Proof: `MultiBlockSigned::SubmissionStorage` (`max_values`: None, `max_size`: Some(50064), added: 52539, mode: `Measured`)
	/// Storage: UNKNOWN KEY `0xa143099d7a337c5fd879b91b2b157c2d` (r:1 w:0)
	/// Proof: UNKNOWN KEY `0xa143099d7a337c5fd879b91b2b157c2d` (r:1 w:0)
	/// Storage: `MultiBlock::PagedTargetSnapshot` (r:1 w:0)
	/// Proof: `MultiBlock::PagedTargetSnapshot` (`max_values`: None, `max_size`: Some(32014), added: 34489, mode: `Measured`)
	/// Storage: `MultiBlock::PagedVoterSnapshot` (r:1 w:0)
	/// Proof: `MultiBlock::PagedVoterSnapshot` (`max_values`: None, `max_size`: Some(431907), added: 434382, mode: `Measured`)
	/// Storage: UNKNOWN KEY `0x6f320d44e42312c78638e6c92dff65af` (r:1 w:0)
	/// Proof: UNKNOWN KEY `0x6f320d44e42312c78638e6c92dff65af` (r:1 w:0)
	/// Storage: `MultiBlock::DesiredTargets` (r:1 w:0)
	/// Proof: `MultiBlock::DesiredTargets` (`max_values`: Some(1), `max_size`: Some(4), added: 499, mode: `Measured`)
	/// Storage: `MultiBlockVerifier::QueuedValidVariant` (r:1 w:0)
	/// Proof: `MultiBlockVerifier::QueuedValidVariant` (`max_values`: Some(1), `max_size`: Some(1), added: 496, mode: `Measured`)
	/// Storage: `MultiBlockVerifier::QueuedSolutionX` (r:15 w:15)
	/// Proof: `MultiBlockVerifier::QueuedSolutionX` (`max_values`: None, `max_size`: Some(37538014), added: 37540489, mode: `Measured`)
	/// Storage: `MultiBlockVerifier::QueuedSolutionBackings` (r:15 w:15)
	/// Proof: `MultiBlockVerifier::QueuedSolutionBackings` (`max_values`: None, `max_size`: Some(52014), added: 54489, mode: `Measured`)
	/// Storage: `MultiBlockSigned::SubmissionMetadataStorage` (r:1 w:1)
	/// Proof: `MultiBlockSigned::SubmissionMetadataStorage` (`max_values`: None, `max_size`: Some(165), added: 2640, mode: `Measured`)
	/// Storage: `Balances::Holds` (r:1 w:1)
	/// Proof: `Balances::Holds` (`max_values`: None, `max_size`: Some(193), added: 2668, mode: `Measured`)
	/// Storage: UNKNOWN KEY `0x48384a816e4f71a936cb76dc9e303f2a` (r:1 w:0)
	/// Proof: UNKNOWN KEY `0x48384a816e4f71a936cb76dc9e303f2a` (r:1 w:0)
	/// Storage: UNKNOWN KEY `0xc209f5d8eb920681b56c64b8694ea78c` (r:1 w:0)
	/// Proof: UNKNOWN KEY `0xc209f5d8eb920681b56c64b8694ea78c` (r:1 w:0)
	/// The range of component `v` is `[0, 15]`.
	fn on_initialize_invalid_non_terminal(v: u32, ) -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `286810 + v * (15242 ±0)`
		//  Estimated: `339803 + v * (16209 ±1_588)`
		// Minimum execution time: 1_378_480_000 picoseconds.
		Weight::from_parts(3_834_433_376, 339803)
			.saturating_add(RocksDbWeight::get().reads(30_u64))
			.saturating_add(RocksDbWeight::get().reads((2_u64).saturating_mul(v.into())))
			.saturating_add(RocksDbWeight::get().writes(21_u64))
			.saturating_add(RocksDbWeight::get().writes((2_u64).saturating_mul(v.into())))
			.saturating_add(Weight::from_parts(0, 16209).saturating_mul(v.into()))
	}
}
