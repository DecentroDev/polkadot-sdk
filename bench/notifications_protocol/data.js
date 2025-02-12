window.BENCHMARK_DATA = {
  "lastUpdate": 1739345170143,
  "repoUrl": "https://github.com/paritytech/polkadot-sdk",
  "entries": {
    "notifications_protocol": [
      {
        "commit": {
          "author": {
            "email": "eresav@me.com",
            "name": "Andrei Eres",
            "username": "AndreiEres"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "6bfe4523acf597ef47dfdcefd11b0eee396bc5c5",
          "message": "networking-bench: Update benchmarks payload (#7056)\n\n# Description\n\n- Used 10 notifications and requests within the benchmarks. After moving\nthe network workers' initialization out of the benchmarks, it is\nacceptable to use this small number without losing precision.\n- Removed the 128MB payload that consumed most of the execution time.",
          "timestamp": "2025-01-09T18:20:07Z",
          "tree_id": "903477b959e883dd8daeff00beda8441cd55d58d",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/6bfe4523acf597ef47dfdcefd11b0eee396bc5c5"
        },
        "date": 1736449887214,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3916300,
            "range": "± 57754",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 283693,
            "range": "± 6562",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4003301,
            "range": "± 35743",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 366026,
            "range": "± 3913",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4724657,
            "range": "± 53664",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 835324,
            "range": "± 20276",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9633809,
            "range": "± 57526",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4512822,
            "range": "± 70469",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 42344498,
            "range": "± 388186",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 36003389,
            "range": "± 312116",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 337147226,
            "range": "± 2607089",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 276402224,
            "range": "± 2220892",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2481566683,
            "range": "± 10727894",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2747053851,
            "range": "± 75963977",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2894391,
            "range": "± 37626",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1473478,
            "range": "± 8135",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2989574,
            "range": "± 32068",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1545840,
            "range": "± 29535",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3525168,
            "range": "± 24478",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1854878,
            "range": "± 18338",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7546160,
            "range": "± 58380",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4764178,
            "range": "± 54826",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 39565327,
            "range": "± 497901",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 38070475,
            "range": "± 418339",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 374627042,
            "range": "± 3003944",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 432991245,
            "range": "± 7068816",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3352563084,
            "range": "± 19260000",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3727272264,
            "range": "± 74032644",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "franciscoaguirreperez@gmail.com",
            "name": "Francisco Aguirre",
            "username": "franciscoaguirre"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "e051f3edd3d6a0699a9261c8f8985d2e8e95c276",
          "message": "Add XCM benchmarks to collectives-westend (#6820)\n\nCollectives-westend was using `FixedWeightBounds`, meaning the same\nweight per instruction. Added proper benchmarks.\n\n---------\n\nCo-authored-by: GitHub Action <action@github.com>\nCo-authored-by: Branislav Kontur <bkontur@gmail.com>",
          "timestamp": "2025-01-10T02:20:01Z",
          "tree_id": "442535aa9d038b646a8bc597f5baf489661c544a",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/e051f3edd3d6a0699a9261c8f8985d2e8e95c276"
        },
        "date": 1736478653735,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3785082,
            "range": "± 30766",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 278670,
            "range": "± 3772",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 3863373,
            "range": "± 25614",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 357720,
            "range": "± 7479",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4637444,
            "range": "± 43625",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 826093,
            "range": "± 8227",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9524602,
            "range": "± 207704",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4466046,
            "range": "± 41512",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 41131784,
            "range": "± 460295",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 36342742,
            "range": "± 430185",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 340356980,
            "range": "± 5667950",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 267097769,
            "range": "± 1221957",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2400086727,
            "range": "± 10230591",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2531966857,
            "range": "± 222159352",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2836970,
            "range": "± 15922",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1465755,
            "range": "± 4714",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2949665,
            "range": "± 21477",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1547295,
            "range": "± 16287",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3376120,
            "range": "± 13909",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1826528,
            "range": "± 11738",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7347416,
            "range": "± 84314",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4665120,
            "range": "± 44519",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 38427468,
            "range": "± 356990",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 36773068,
            "range": "± 686590",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 351498438,
            "range": "± 3261252",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 410714529,
            "range": "± 7095047",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3176017676,
            "range": "± 16156027",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3530794982,
            "range": "± 58367052",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "git@kchr.de",
            "name": "Bastian Köcher",
            "username": "bkchr"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "738282a2c4127f5e6a1c8d50235ba126b9f05025",
          "message": "Fix incorrected deprecated message (#7118)",
          "timestamp": "2025-01-11T10:32:50Z",
          "tree_id": "b2498b9f12218fdc6dbd1e34243d44889f118bc3",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/738282a2c4127f5e6a1c8d50235ba126b9f05025"
        },
        "date": 1736594621203,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3777912,
            "range": "± 41955",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 278483,
            "range": "± 6752",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 3903445,
            "range": "± 41102",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 357833,
            "range": "± 2926",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4654831,
            "range": "± 45626",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 821936,
            "range": "± 9611",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9623963,
            "range": "± 114007",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4688239,
            "range": "± 93981",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 42871373,
            "range": "± 639785",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 36800224,
            "range": "± 536026",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 340617095,
            "range": "± 2779158",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 282491378,
            "range": "± 2432804",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2445503995,
            "range": "± 10094502",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2648461022,
            "range": "± 69472381",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2866970,
            "range": "± 18888",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1497736,
            "range": "± 6924",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2987006,
            "range": "± 46028",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1537401,
            "range": "± 9781",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3487528,
            "range": "± 49041",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1868171,
            "range": "± 12893",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7505754,
            "range": "± 91872",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4646896,
            "range": "± 21833",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 40973995,
            "range": "± 616592",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 38726724,
            "range": "± 1074630",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 363568750,
            "range": "± 4193204",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 391030553,
            "range": "± 19672552",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3264920051,
            "range": "± 20627455",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3584889904,
            "range": "± 51205389",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "git@kchr.de",
            "name": "Bastian Köcher",
            "username": "bkchr"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d8e3a434ea1e760190456e8df1359aa8137e16a",
          "message": "reference-docs: Start `state` and mention well known keys (#7037)\n\nCloses: https://github.com/paritytech/polkadot-sdk/issues/7033",
          "timestamp": "2025-01-13T12:32:01Z",
          "tree_id": "3dd18660d4fd66b37863cb6862e37aa0dcd4908c",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/7d8e3a434ea1e760190456e8df1359aa8137e16a"
        },
        "date": 1736775152465,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3788422,
            "range": "± 43329",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 274065,
            "range": "± 2392",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 3905402,
            "range": "± 32611",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 356337,
            "range": "± 5312",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4550270,
            "range": "± 45624",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 814899,
            "range": "± 9212",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9385030,
            "range": "± 65390",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4426854,
            "range": "± 54914",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 40669559,
            "range": "± 1189532",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 35189263,
            "range": "± 553040",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 321680072,
            "range": "± 2736674",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 268884974,
            "range": "± 1198140",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2408236629,
            "range": "± 8798457",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2573485851,
            "range": "± 111008013",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2773971,
            "range": "± 15740",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1444141,
            "range": "± 10543",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2875450,
            "range": "± 18210",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1510887,
            "range": "± 12370",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3361692,
            "range": "± 18941",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1805270,
            "range": "± 8374",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7310480,
            "range": "± 78677",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4656035,
            "range": "± 43242",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 38281469,
            "range": "± 369278",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 36499492,
            "range": "± 564993",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 354958906,
            "range": "± 2396803",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 384781835,
            "range": "± 5316347",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3193235041,
            "range": "± 19041708",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3585031363,
            "range": "± 51348732",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pgherveou@gmail.com",
            "name": "PG Herveou",
            "username": "pgherveou"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ba572ae892d4e4fae89ca053d8a137117b0f3a17",
          "message": "[pallet-revive] Update gas encoding (#6689)\n\nUpdate the current approach to attach the `ref_time`, `pov` and\n`deposit` parameters to an Ethereum transaction.\nPreviously we will pass these 3 parameters along with the signed\npayload, and check that the fees resulting from `gas x gas_price` match\nthe actual fees paid by the user for the extrinsic.\n\nThis approach unfortunately can be attacked. A malicious actor could\nforce such a transaction to fail by injecting low values for some of\nthese extra parameters as they are not part of the signed payload.\n\nThe new approach encodes these 3 extra parameters in the lower digits of\nthe transaction gas, approximating the the log2 of the actual values to\nencode each components on 2 digits\n\n---------\n\nCo-authored-by: GitHub Action <action@github.com>\nCo-authored-by: command-bot <>",
          "timestamp": "2025-01-13T14:49:37Z",
          "tree_id": "4a9a0a7887bb994eca8d3e08360d73900bc2f4d3",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/ba572ae892d4e4fae89ca053d8a137117b0f3a17"
        },
        "date": 1736784063662,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3914493,
            "range": "± 61714",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 278163,
            "range": "± 2388",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 3970971,
            "range": "± 19791",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 360002,
            "range": "± 2853",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4637518,
            "range": "± 52517",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 821699,
            "range": "± 13360",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9496174,
            "range": "± 137079",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4471868,
            "range": "± 46559",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 40865860,
            "range": "± 546530",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 34809056,
            "range": "± 485831",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 318946176,
            "range": "± 1682352",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 272147733,
            "range": "± 1354031",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2425309343,
            "range": "± 17954470",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2491571101,
            "range": "± 54253669",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2793668,
            "range": "± 19046",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1451941,
            "range": "± 5218",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2910049,
            "range": "± 15039",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1513224,
            "range": "± 6703",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3409809,
            "range": "± 27989",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1828645,
            "range": "± 12198",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7366001,
            "range": "± 125380",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4700843,
            "range": "± 62399",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 39937122,
            "range": "± 537998",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 38393368,
            "range": "± 992753",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 357171014,
            "range": "± 4447318",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 419904164,
            "range": "± 8638884",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3339569999,
            "range": "± 61671096",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3576125308,
            "range": "± 100016903",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1728078+michalkucharczyk@users.noreply.github.com",
            "name": "Michal Kucharczyk",
            "username": "michalkucharczyk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0e0fa4782e2872ea74d8038ebedb9f6e6be53457",
          "message": "`fatxpool`: rotator cache size now depends on pool's limits (#7102)\n\n# Description\n\nThis PR modifies the hard-coded size of extrinsics cache within\n[`PoolRotator`](https://github.com/paritytech/polkadot-sdk/blob/cdf107de700388a52a17b2fb852c98420c78278e/substrate/client/transaction-pool/src/graph/rotator.rs#L36-L45)\nto be inline with pool limits.\n\nThe problem was, that due to small size (comparing to number of txs in\nsingle block) of hard coded size:\n\nhttps://github.com/paritytech/polkadot-sdk/blob/cdf107de700388a52a17b2fb852c98420c78278e/substrate/client/transaction-pool/src/graph/rotator.rs#L34\nexcessive number of unnecessary verification were performed in\n`prune_tags`:\n\nhttps://github.com/paritytech/polkadot-sdk/blob/cdf107de700388a52a17b2fb852c98420c78278e/substrate/client/transaction-pool/src/graph/pool.rs#L369-L370\n\nThis was resulting in quite long durations of `prune_tags` execution\ntime (which was ok for 6s, but becomes noticable for 2s blocks):\n```\nPruning at HashAndNumber { number: 83, ... }. Resubmitting transactions: 6142, reverification took: 237.818955ms    \nPruning at HashAndNumber { number: 84, ... }. Resubmitting transactions: 5985, reverification took: 222.118218ms    \nPruning at HashAndNumber { number: 85, ... }. Resubmitting transactions: 5981, reverification took: 215.546847ms\n```\n\nThe fix reduces the overhead:\n```\nPruning at HashAndNumber { number: 92, ... }. Resubmitting transactions: 6325, reverification took: 14.728354ms    \nPruning at HashAndNumber { number: 93, ... }. Resubmitting transactions: 7030, reverification took: 23.973607ms    \nPruning at HashAndNumber { number: 94, ... }. Resubmitting transactions: 4465, reverification took: 9.532472ms    \n```\n\n## Review Notes\nI decided to leave the hardocded `EXPECTED_SIZE` for the legacy\ntransaction pool. Removing verification of transactions during\nre-submission may negatively impact the behavior of the legacy\n(single-state) pool. As in long-term we probably want to deprecate old\npool, I did not invest time to assess the impact of rotator change in\nbehavior of the legacy pool.\n\n---------\n\nCo-authored-by: command-bot <>\nCo-authored-by: Iulian Barbu <14218860+iulianbarbu@users.noreply.github.com>",
          "timestamp": "2025-01-13T17:42:22Z",
          "tree_id": "206d7c3d681e324e45101018e7b758dffe9f5f15",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/0e0fa4782e2872ea74d8038ebedb9f6e6be53457"
        },
        "date": 1736793198012,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3734911,
            "range": "± 31342",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 274936,
            "range": "± 2016",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 3876095,
            "range": "± 29009",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 355482,
            "range": "± 2689",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4548339,
            "range": "± 26648",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 822370,
            "range": "± 5805",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9402587,
            "range": "± 118327",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4469250,
            "range": "± 59395",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 41289052,
            "range": "± 699709",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 35854881,
            "range": "± 249541",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 332496844,
            "range": "± 2581891",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 282012526,
            "range": "± 2955561",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2456053953,
            "range": "± 14679658",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2614989431,
            "range": "± 83732455",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2777261,
            "range": "± 12137",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1441013,
            "range": "± 3835",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2854816,
            "range": "± 17374",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1504493,
            "range": "± 5385",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3396667,
            "range": "± 32761",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1816543,
            "range": "± 10746",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7485032,
            "range": "± 129628",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4651820,
            "range": "± 36115",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 40557397,
            "range": "± 954001",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 38498746,
            "range": "± 946873",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 367330810,
            "range": "± 4796012",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 422829357,
            "range": "± 7633587",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3329300563,
            "range": "± 17091682",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3754738650,
            "range": "± 73573634",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alin@parity.io",
            "name": "Alin Dima",
            "username": "alindima"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ddffa027d7b78af330a2d3d18b7dfdbd00e431f0",
          "message": "forbid v1 descriptors with UMP signals (#7127)",
          "timestamp": "2025-01-14T08:40:50Z",
          "tree_id": "b2e6007a7f07c47680adfebdb3e238ecd4482c7f",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/ddffa027d7b78af330a2d3d18b7dfdbd00e431f0"
        },
        "date": 1736847200709,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3871753,
            "range": "± 48785",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 275027,
            "range": "± 2977",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 3998102,
            "range": "± 33586",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 355855,
            "range": "± 3879",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4660396,
            "range": "± 42504",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 808024,
            "range": "± 11508",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9552954,
            "range": "± 174720",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4411878,
            "range": "± 107959",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 41157289,
            "range": "± 470381",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 35039037,
            "range": "± 445404",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 315341389,
            "range": "± 2670638",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 267898761,
            "range": "± 2648146",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2386868361,
            "range": "± 7503806",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2582841862,
            "range": "± 57979993",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2842648,
            "range": "± 17498",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1442775,
            "range": "± 9272",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2892428,
            "range": "± 28574",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1497197,
            "range": "± 6370",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3439682,
            "range": "± 26722",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1800000,
            "range": "± 10739",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7416363,
            "range": "± 105421",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4598205,
            "range": "± 75000",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 38912023,
            "range": "± 806770",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 37646309,
            "range": "± 1079662",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 351779870,
            "range": "± 3251384",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 409732430,
            "range": "± 6642406",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3251790150,
            "range": "± 37814858",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3632578924,
            "range": "± 44997241",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "60601340+lexnv@users.noreply.github.com",
            "name": "Alexandru Vasile",
            "username": "lexnv"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "105c5b94f5d3bf394a3ddf1d10ab0932ce93181b",
          "message": "litep2p: Sufix litep2p to the identify agent version for visibility (#7133)\n\nThis PR adds the `(litep2p)` suffix to the agent version (user agent) of\nthe identify protocol.\n\nThe change is needed to gain visibility into network backends and\ndetermine exactly the number of validators that are running litep2p.\nUsing tools like subp2p-explorer, we can determine if the validators are\nrunning litep2p nodes.\n\nThis reflects on the identify protocol:\n\n```\ninfo=Identify {\n  protocol_version: Some(\"/substrate/1.0\"),\n  agent_version: Some(\"polkadot-parachain/v1.17.0-967989c5d94 (kusama-node-name-01) (litep2p)\")\n  ...\n}\n```\n\ncc @paritytech/networking\n\n---------\n\nSigned-off-by: Alexandru Vasile <alexandru.vasile@parity.io>",
          "timestamp": "2025-01-14T13:30:05Z",
          "tree_id": "ce6a5b4d320c19e7d556b2046408e9e26f92cc72",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/105c5b94f5d3bf394a3ddf1d10ab0932ce93181b"
        },
        "date": 1736865023944,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 4038927,
            "range": "± 62217",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 294604,
            "range": "± 4362",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4173081,
            "range": "± 29138",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 377610,
            "range": "± 6949",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4965777,
            "range": "± 78848",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 863414,
            "range": "± 6139",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 10155264,
            "range": "± 142177",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4711848,
            "range": "± 187779",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 45200542,
            "range": "± 1078302",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 37469983,
            "range": "± 399459",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 347112151,
            "range": "± 1882762",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 285141556,
            "range": "± 1518194",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2528555591,
            "range": "± 21963166",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2761085238,
            "range": "± 72124785",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 3027302,
            "range": "± 28799",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1497281,
            "range": "± 7779",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 3113076,
            "range": "± 42853",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1556170,
            "range": "± 11326",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3728366,
            "range": "± 61527",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1909315,
            "range": "± 17921",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7936613,
            "range": "± 93051",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4959558,
            "range": "± 48236",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 42449242,
            "range": "± 854797",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 40549332,
            "range": "± 773211",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 393213675,
            "range": "± 4802109",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 457749119,
            "range": "± 4710554",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3523023289,
            "range": "± 49905393",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3857670926,
            "range": "± 59902907",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pgherveou@gmail.com",
            "name": "PG Herveou",
            "username": "pgherveou"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "023763da2043333c3524bd7f12ac6c7b2d084b39",
          "message": "[pallet-revive-eth-rpc] persist eth transaction hash (#6836)\n\nAdd an option to persist EVM transaction hash to a SQL db.\nThis should make it possible to run a full archive ETH RPC node\n(assuming the substrate node is also a full archive node)\n\nSome queries such as eth_getTransactionByHash,\neth_getBlockTransactionCountByHash, and other need to work with a\ntransaction hash indexes, which are not stored in Substrate and need to\nbe stored by the eth-rpc proxy.\n\nThe refactoring break down the Client into a `BlockInfoProvider` and\n`ReceiptProvider`\n- BlockInfoProvider does not need any persistence data, as we can fetch\nall block info from the source substrate chain\n- ReceiptProvider comes in two flavor, \n  - An in memory cache implementation - This is the one we had so far.\n- A DB implementation - This one persist rows with the block_hash, the\ntransaction_index and the transaction_hash, so that we can later fetch\nthe block and extrinsic for that receipt and reconstruct the ReceiptInfo\nobject.\n\nThis PR also adds a new binary eth-indexer, that iterate past and new\nblocks and write the receipt hashes to the DB using the new\nReceiptProvider.\n\n---------\n\nCo-authored-by: GitHub Action <action@github.com>\nCo-authored-by: command-bot <>",
          "timestamp": "2025-01-14T13:41:24Z",
          "tree_id": "94241c9c7ef55673e81804dca424fbf2ece937d7",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/023763da2043333c3524bd7f12ac6c7b2d084b39"
        },
        "date": 1736866672784,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 4174471,
            "range": "± 38928",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 296888,
            "range": "± 5716",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4250518,
            "range": "± 36044",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 371113,
            "range": "± 3569",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 5010433,
            "range": "± 55406",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 884387,
            "range": "± 13178",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 10038446,
            "range": "± 186127",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4652014,
            "range": "± 62875",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 43414561,
            "range": "± 584895",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 36576338,
            "range": "± 408270",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 341958747,
            "range": "± 3074440",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 278175048,
            "range": "± 1404879",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2704768794,
            "range": "± 46465899",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2658162185,
            "range": "± 39296412",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2878692,
            "range": "± 41351",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1468428,
            "range": "± 12703",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2929185,
            "range": "± 62495",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1514063,
            "range": "± 5726",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3522224,
            "range": "± 43209",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1859933,
            "range": "± 29434",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7980716,
            "range": "± 149825",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 5022007,
            "range": "± 44779",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 44715796,
            "range": "± 840204",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 44100661,
            "range": "± 1209925",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 430780227,
            "range": "± 10369054",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 507325621,
            "range": "± 13053933",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3747868103,
            "range": "± 106311594",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3873528121,
            "range": "± 114776326",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49718502+alexggh@users.noreply.github.com",
            "name": "Alexandru Gheorghe",
            "username": "alexggh"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6878ba1f399b628cf456ad3abfe72f2553422e1f",
          "message": "Retry approval on availability failure if the check is still needed (#6807)\n\nRecovering the POV can fail in situation where the node just restart and\nthe DHT topology wasn't fully discovered yet, so the current node can't\nconnect to most of its Peers. This is bad because for gossiping the\nassignment you need to be connected to just a few peers, so because we\ncan't approve the candidate and other nodes will see this as a no show.\n\nThis becomes bad in the scenario where you've got a lot of nodes\nrestarting at the same time, so you end up having a lot of no-shows in\nthe network that are never covered, in that case it makes sense for\nnodes to actually retry approving the candidate at a later data in time\nand retry several times if the block containing the candidate wasn't\napproved.\n\n## TODO\n- [x] Add a subsystem test.\n\n---------\n\nSigned-off-by: Alexandru Gheorghe <alexandru.gheorghe@parity.io>",
          "timestamp": "2025-01-14T14:52:49Z",
          "tree_id": "a840a94db44fe19bd889ebdf7f2861865680ee1a",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/6878ba1f399b628cf456ad3abfe72f2553422e1f"
        },
        "date": 1736869526636,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 4232036,
            "range": "± 73802",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 308274,
            "range": "± 7909",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4331431,
            "range": "± 36098",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 389100,
            "range": "± 4402",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 5070129,
            "range": "± 80934",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 914525,
            "range": "± 24697",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 10548211,
            "range": "± 125160",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4892260,
            "range": "± 161365",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 50358941,
            "range": "± 1171008",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 38217720,
            "range": "± 508905",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 363457606,
            "range": "± 1991306",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 292274530,
            "range": "± 3238906",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2586770841,
            "range": "± 8478961",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2745712758,
            "range": "± 38865908",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 3124126,
            "range": "± 36784",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1528706,
            "range": "± 13490",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 3315580,
            "range": "± 27791",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1615740,
            "range": "± 10794",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3919305,
            "range": "± 23896",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1960575,
            "range": "± 12378",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 8229694,
            "range": "± 234017",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 5054233,
            "range": "± 61603",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 42955837,
            "range": "± 448451",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 44402531,
            "range": "± 1096881",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 436417352,
            "range": "± 8608039",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 482390048,
            "range": "± 13887428",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3762777194,
            "range": "± 101235227",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3838172579,
            "range": "± 83878706",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49718502+alexggh@users.noreply.github.com",
            "name": "Alexandru Gheorghe",
            "username": "alexggh"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d38bb9533b70abb7eff4e8770177d7840899ca86",
          "message": "approval-voting: Fix sending of assignments after restart (#6973)\n\nThere is a problem on restart where nodes will not trigger their needed\nassignment if they were offline while the time of the assignment passed.\n\nThat happens because after restart we will hit this condition\nhttps://github.com/paritytech/polkadot-sdk/blob/4e805ca05067f6ed970f33f9be51483185b0cc0b/polkadot/node/core/approval-voting/src/lib.rs#L2495\nand considered will be `tick_now` which is already higher than the tick\nof our assignment.\n\nThe fix is to schedule a wakeup for untriggered assignments at restart\nand let the logic of processing an wakeup decide if it needs to trigger\nthe assignment or not.\n\nOne thing that we need to be careful here is to make sure we don't\nschedule the wake up immediately after restart because, the node would\nstill be behind with all the assignments that should have received and\nmight make it wrongfully decide it needs to trigger its assignment, so I\nadded a `RESTART_WAKEUP_DELAY: Tick = 12` which should be more than\nenough for the node to catch up.\n\n---------\n\nSigned-off-by: Alexandru Gheorghe <alexandru.gheorghe@parity.io>\nCo-authored-by: ordian <write@reusable.software>\nCo-authored-by: Andrei Eres <eresav@me.com>",
          "timestamp": "2025-01-14T17:10:27Z",
          "tree_id": "5f3c488550900117e030d5e7268c0775e4479292",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/d38bb9533b70abb7eff4e8770177d7840899ca86"
        },
        "date": 1736877676812,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 4015816,
            "range": "± 61287",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 281659,
            "range": "± 3107",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4074094,
            "range": "± 52880",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 363933,
            "range": "± 5437",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4837073,
            "range": "± 43703",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 843672,
            "range": "± 12941",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9947825,
            "range": "± 186008",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4705275,
            "range": "± 262306",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 44183324,
            "range": "± 357631",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 37020356,
            "range": "± 377470",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 338000807,
            "range": "± 1709426",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 278742096,
            "range": "± 2886690",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2423116651,
            "range": "± 11889586",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2430628565,
            "range": "± 279933504",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2857450,
            "range": "± 16400",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1472957,
            "range": "± 7385",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2981769,
            "range": "± 26971",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1539909,
            "range": "± 7383",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3580638,
            "range": "± 32763",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1878296,
            "range": "± 17340",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 8165085,
            "range": "± 121796",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 5026547,
            "range": "± 105017",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 43953709,
            "range": "± 689016",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 42824378,
            "range": "± 933113",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 405598081,
            "range": "± 7412349",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 449542201,
            "range": "± 5896897",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3660587969,
            "range": "± 63141382",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3945801505,
            "range": "± 47906396",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "skunert49@gmail.com",
            "name": "Sebastian Kunert",
            "username": "skunert"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ba36b2d2293d72d087072254e6371d9089f192b7",
          "message": "CI: Only format umbrella crate during umbrella check (#7139)\n\nThe umbrella crate quick-check was always failing whenever there was\nsomething misformated in the whole codebase.\nThis leads to an error that indicates that a new crate was added, even\nwhen it was not.\n\nAfter this PR we only apply `cargo fmt` to the newly generated umbrella\ncrate `polkadot-sdk`. This results in this check being independent from\nthe fmt job which should check the entire codebase.",
          "timestamp": "2025-01-14T17:56:30Z",
          "tree_id": "4c9d54a88060cf1ed429532b9096d0521c6d6278",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/ba36b2d2293d72d087072254e6371d9089f192b7"
        },
        "date": 1736880372737,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 4016625,
            "range": "± 40764",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 282999,
            "range": "± 4125",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4134841,
            "range": "± 27863",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 365232,
            "range": "± 3368",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4822952,
            "range": "± 30716",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 835976,
            "range": "± 10224",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9861727,
            "range": "± 63988",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4525443,
            "range": "± 33302",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 43071614,
            "range": "± 384803",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 35928671,
            "range": "± 402072",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 334118929,
            "range": "± 5139951",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 275147659,
            "range": "± 1855929",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2428400611,
            "range": "± 8917765",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2669118833,
            "range": "± 39228540",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2875864,
            "range": "± 46878",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1472197,
            "range": "± 15172",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 3006159,
            "range": "± 17616",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1549248,
            "range": "± 8191",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3422340,
            "range": "± 37209",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1817379,
            "range": "± 21656",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7347512,
            "range": "± 80908",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4701345,
            "range": "± 38383",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 41755688,
            "range": "± 388206",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 39903805,
            "range": "± 887285",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 369455499,
            "range": "± 1381953",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 407079631,
            "range": "± 6965634",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3273634133,
            "range": "± 14660973",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3583290801,
            "range": "± 87903276",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "carlosalag@protonmail.com",
            "name": "Carlo Sala",
            "username": "carlosala"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "85c244f6e6e59db23bdfcfef903fd9145f0546ad",
          "message": "xcm: convert properly assets in xcmpayment apis (#7134)\n\nPort #6459 changes to relays as well, which were probably forgotten in\nthat PR.\nThanks!\n\n---------\n\nCo-authored-by: Francisco Aguirre <franciscoaguirreperez@gmail.com>\nCo-authored-by: command-bot <>",
          "timestamp": "2025-01-14T19:57:05Z",
          "tree_id": "8a81e263b00e7faaa9ef4265fa398e217a9717f4",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/85c244f6e6e59db23bdfcfef903fd9145f0546ad"
        },
        "date": 1736887755915,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3833416,
            "range": "± 33871",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 278954,
            "range": "± 5236",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 3930345,
            "range": "± 48097",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 352851,
            "range": "± 8782",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4647497,
            "range": "± 49160",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 824195,
            "range": "± 6443",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9499072,
            "range": "± 119437",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4433691,
            "range": "± 54592",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 41103699,
            "range": "± 355922",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 35352595,
            "range": "± 390252",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 320169924,
            "range": "± 1902824",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 273435476,
            "range": "± 1678245",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2441079639,
            "range": "± 12322871",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2183838695,
            "range": "± 176497893",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2778597,
            "range": "± 22292",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1431994,
            "range": "± 9607",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2897054,
            "range": "± 19594",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1497712,
            "range": "± 8799",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3374378,
            "range": "± 21904",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1798444,
            "range": "± 8147",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7341660,
            "range": "± 93788",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4673742,
            "range": "± 55825",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 40130216,
            "range": "± 695638",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 39073287,
            "range": "± 627795",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 367017865,
            "range": "± 4573380",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 417550682,
            "range": "± 8419759",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3375268134,
            "range": "± 31363478",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3619228326,
            "range": "± 113985699",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "git@kchr.de",
            "name": "Bastian Köcher",
            "username": "bkchr"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "5f391db8af50a79db83acfe37f73c7202177d71c",
          "message": "PRDOC: Document `validate: false` (#7117)",
          "timestamp": "2025-01-14T20:22:52Z",
          "tree_id": "b90cddafe7426e86d589d89aed6845397d18d474",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/5f391db8af50a79db83acfe37f73c7202177d71c"
        },
        "date": 1736889212699,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 4180671,
            "range": "± 62200",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 294153,
            "range": "± 10331",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4206131,
            "range": "± 50305",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 378220,
            "range": "± 3182",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 5044520,
            "range": "± 60556",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 873283,
            "range": "± 8736",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 10134223,
            "range": "± 124915",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4630219,
            "range": "± 50024",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 44602717,
            "range": "± 660741",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 36285380,
            "range": "± 335697",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 348610703,
            "range": "± 4252385",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 283662692,
            "range": "± 2309433",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2540649530,
            "range": "± 8856026",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2818058246,
            "range": "± 54683294",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 3092209,
            "range": "± 48834",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1491452,
            "range": "± 8009",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 3152361,
            "range": "± 27259",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1576144,
            "range": "± 10145",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3753041,
            "range": "± 52866",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1909707,
            "range": "± 19579",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7865499,
            "range": "± 61341",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4896906,
            "range": "± 127982",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 40824947,
            "range": "± 536637",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 39102417,
            "range": "± 803881",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 386535154,
            "range": "± 6079732",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 395275803,
            "range": "± 8435450",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3351445151,
            "range": "± 9099317",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3627295078,
            "range": "± 52204781",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "skunert49@gmail.com",
            "name": "Sebastian Kunert",
            "username": "skunert"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d5539aa63edc8068eff9c4cbb78214c3a5ab66b2",
          "message": "Parachains: Use relay chain slot for velocity measurement (#6825)\n\ncloses #3967 \n\n## Changes\nWe now use relay chain slots to measure velocity on chain. Previously we\nwere storing the current parachain slot. Then in `on_state_proof` of the\n`ConsensusHook` we were checking how many blocks were athored in the\ncurrent parachain slot. This works well when the parachain slot time and\nrelay chain slot time is the same. With elastic scaling, we can have\nparachain slot times lower than that of the relay chain. In these cases\nwe want to measure velocity in relation to the relay chain. This PR\nadjusts that.\n\n\n##  Migration\nThis PR includes a migration. Storage item `SlotInfo` of pallet\n`aura-ext` is renamed to `RelaySlotInfo` to better reflect its new\ncontent. A migration has been added that just kills the old storage\nitem. `RelaySlotInfo` will be `None` initially but its value will be\nadjusted after one new relay chain slot arrives.\n\n---------\n\nCo-authored-by: command-bot <>\nCo-authored-by: Bastian Köcher <git@kchr.de>",
          "timestamp": "2025-01-14T22:47:19Z",
          "tree_id": "cbcdcd56a70e6bd67dc20a556f4fa69acba96164",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/d5539aa63edc8068eff9c4cbb78214c3a5ab66b2"
        },
        "date": 1736897805194,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3739527,
            "range": "± 149872",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 271938,
            "range": "± 3825",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 3869995,
            "range": "± 11081",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 347067,
            "range": "± 2848",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4485205,
            "range": "± 32817",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 809929,
            "range": "± 6147",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9258310,
            "range": "± 48000",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4353926,
            "range": "± 34280",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 39315338,
            "range": "± 297069",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 34057944,
            "range": "± 204011",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 307540679,
            "range": "± 3071287",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 262840948,
            "range": "± 2035588",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2334678432,
            "range": "± 15785465",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2406341560,
            "range": "± 99512312",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2732180,
            "range": "± 22727",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1422190,
            "range": "± 9896",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2829860,
            "range": "± 10076",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1475203,
            "range": "± 12036",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3318892,
            "range": "± 14266",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1783233,
            "range": "± 13266",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7237214,
            "range": "± 69991",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4587630,
            "range": "± 171445",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 38092580,
            "range": "± 492217",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 36146238,
            "range": "± 372777",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 344931493,
            "range": "± 1958705",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 414667443,
            "range": "± 4475969",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3274453814,
            "range": "± 32133129",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3541528741,
            "range": "± 60309364",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49718502+alexggh@users.noreply.github.com",
            "name": "Alexandru Gheorghe",
            "username": "alexggh"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0d660a420fbc11a90cde5aa4e43ce2027b502162",
          "message": "approval-voting: Make importing of duplicate assignment idempotent (#6971)\n\nNormally, approval-voting wouldn't receive duplicate assignments because\napproval-distribution makes sure of it, however in the situation where\nwe restart we might receive the same assignment again and since\napproval-voting already persisted it we will end up inserting it twice\nin `ApprovalEntry.tranches.assignments` because that's an array.\n\nFix this by making sure duplicate assignments are a noop if the\nvalidator already had an assignment imported at the same tranche.\n\n---------\n\nSigned-off-by: Alexandru Gheorghe <alexandru.gheorghe@parity.io>\nCo-authored-by: ordian <write@reusable.software>",
          "timestamp": "2025-01-15T09:13:23Z",
          "tree_id": "65fbb6d76e92ed10477d288c458b69c0ad8e281a",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/0d660a420fbc11a90cde5aa4e43ce2027b502162"
        },
        "date": 1736935742386,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 4007734,
            "range": "± 32740",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 290769,
            "range": "± 3874",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4090512,
            "range": "± 44967",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 363278,
            "range": "± 6778",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4790900,
            "range": "± 23175",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 838748,
            "range": "± 9030",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9954977,
            "range": "± 36375",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4560481,
            "range": "± 66638",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 42220129,
            "range": "± 644697",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 36037608,
            "range": "± 195625",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 339908197,
            "range": "± 3214521",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 278115930,
            "range": "± 908362",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2472258639,
            "range": "± 15707592",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2688877557,
            "range": "± 117709611",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2944167,
            "range": "± 38125",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1495605,
            "range": "± 9094",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 3085727,
            "range": "± 15698",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1558794,
            "range": "± 7338",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3694359,
            "range": "± 25425",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1891656,
            "range": "± 9865",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7741601,
            "range": "± 75625",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4853241,
            "range": "± 39941",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 40224143,
            "range": "± 512258",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 38792039,
            "range": "± 712816",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 378266059,
            "range": "± 3465971",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 409746059,
            "range": "± 5514226",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3379600303,
            "range": "± 11133795",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3661297627,
            "range": "± 69608676",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "skunert49@gmail.com",
            "name": "Sebastian Kunert",
            "username": "skunert"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f798111afc15f464a772cd7ed37910cc6208b713",
          "message": "Fix reversed error message in DispatchInfo (#7170)\n\nFix error message in `DispatchInfo` where post-dispatch and pre-dispatch\nweight was reversed.\n\n---------\n\nCo-authored-by: command-bot <>\nCo-authored-by: Bastian Köcher <git@kchr.de>",
          "timestamp": "2025-01-15T10:08:49Z",
          "tree_id": "609eaa12121e35ad653cd4c11d114adb537eb683",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/f798111afc15f464a772cd7ed37910cc6208b713"
        },
        "date": 1736939179337,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3806774,
            "range": "± 26047",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 273609,
            "range": "± 3969",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 3927061,
            "range": "± 24566",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 354810,
            "range": "± 2892",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4607200,
            "range": "± 20306",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 798739,
            "range": "± 5548",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9105546,
            "range": "± 75931",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4243508,
            "range": "± 48000",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 38914541,
            "range": "± 303881",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 33123939,
            "range": "± 369291",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 296417293,
            "range": "± 2036700",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 261993454,
            "range": "± 1580985",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2336801276,
            "range": "± 14214383",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2127946047,
            "range": "± 15494203",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2758413,
            "range": "± 11994",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1437835,
            "range": "± 3366",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2843344,
            "range": "± 14141",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1490152,
            "range": "± 5839",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3347714,
            "range": "± 10492",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1777432,
            "range": "± 7349",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7221351,
            "range": "± 59574",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4585072,
            "range": "± 33151",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 37649829,
            "range": "± 291324",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 35936675,
            "range": "± 307022",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 338102452,
            "range": "± 3521794",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 381402557,
            "range": "± 8480626",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3039921053,
            "range": "± 19422349",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3453719962,
            "range": "± 69851318",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "60601340+lexnv@users.noreply.github.com",
            "name": "Alexandru Vasile",
            "username": "lexnv"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ef064a357c97c2635f05295aac1698a91fa2f4fd",
          "message": "req-resp/litep2p: Reject inbound requests from banned peers (#7158)\n\nThis PR rejects inbound requests from banned peers (reputation is below\nthe banned threshold).\n\nThis mirrors the request-response implementation from the libp2p side.\nI won't expect this to get triggered too often, but we'll monitor this\nmetric.\n\nWhile at it, have registered a new inbound failure metric to have\nvisibility into this.\n\nDiscovered during the investigation of:\nhttps://github.com/paritytech/polkadot-sdk/issues/7076#issuecomment-2589613046\n\ncc @paritytech/networking\n\n---------\n\nSigned-off-by: Alexandru Vasile <alexandru.vasile@parity.io>",
          "timestamp": "2025-01-15T11:04:37Z",
          "tree_id": "9d3ca09a7c9aa59dab2d7fb614d4ab978d516a2c",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/ef064a357c97c2635f05295aac1698a91fa2f4fd"
        },
        "date": 1736944075341,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3821816,
            "range": "± 27412",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 278010,
            "range": "± 2173",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 3975701,
            "range": "± 26673",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 364665,
            "range": "± 3849",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4655931,
            "range": "± 125711",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 828138,
            "range": "± 9690",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9515735,
            "range": "± 70862",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4509752,
            "range": "± 32896",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 41512992,
            "range": "± 574256",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 35934065,
            "range": "± 884833",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 336979257,
            "range": "± 5076129",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 275985743,
            "range": "± 2396478",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2428726428,
            "range": "± 7895245",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2630879526,
            "range": "± 128050513",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2791132,
            "range": "± 12660",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1457870,
            "range": "± 10483",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2938541,
            "range": "± 72255",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1516066,
            "range": "± 6569",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3443669,
            "range": "± 18736",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1839359,
            "range": "± 20490",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7431429,
            "range": "± 73070",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4733240,
            "range": "± 36957",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 40758859,
            "range": "± 1360243",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 39482669,
            "range": "± 662902",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 371270150,
            "range": "± 3098292",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 399610890,
            "range": "± 7073138",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3332974880,
            "range": "± 20790905",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3611302171,
            "range": "± 45364107",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alexandre.balde@parity.io",
            "name": "Alexandre R. Baldé",
            "username": "rockbmb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "cb0d8544dc8828c7b5e7f6a5fc20ce8c6ef9bbb4",
          "message": "Remove 0 as a special case in gas/storage meters (#6890)\n\nCloses #6846 .\n\n---------\n\nSigned-off-by: xermicus <cyrill@parity.io>\nCo-authored-by: command-bot <>\nCo-authored-by: Alexander Theißen <alex.theissen@me.com>\nCo-authored-by: xermicus <cyrill@parity.io>",
          "timestamp": "2025-01-15T13:14:54Z",
          "tree_id": "7962b0041a87ad5b6b5a3dbb5c26e4703b291285",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/cb0d8544dc8828c7b5e7f6a5fc20ce8c6ef9bbb4"
        },
        "date": 1736950830271,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3895044,
            "range": "± 28674",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 283685,
            "range": "± 4153",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4008113,
            "range": "± 35459",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 364561,
            "range": "± 15785",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4615393,
            "range": "± 26687",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 825392,
            "range": "± 8044",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9552068,
            "range": "± 91252",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4463801,
            "range": "± 35871",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 41053461,
            "range": "± 559801",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 35493376,
            "range": "± 249622",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 330191334,
            "range": "± 3351492",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 275178902,
            "range": "± 2156541",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2443739069,
            "range": "± 4822358",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2668549433,
            "range": "± 269185369",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2845986,
            "range": "± 28221",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1471427,
            "range": "± 6503",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2908156,
            "range": "± 21381",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1512563,
            "range": "± 10376",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3451150,
            "range": "± 29668",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1835512,
            "range": "± 9584",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7341448,
            "range": "± 71510",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4672384,
            "range": "± 42391",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 39173703,
            "range": "± 364161",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 37773083,
            "range": "± 491831",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 361334177,
            "range": "± 2461557",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 410316641,
            "range": "± 11044254",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3432271446,
            "range": "± 48610130",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3588250847,
            "range": "± 70150226",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pgherveou@gmail.com",
            "name": "PG Herveou",
            "username": "pgherveou"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d822e07d51dda41982291dc6582a8c4a34821e94",
          "message": "[pallet-revive] Bump asset-hub westend spec version (#7176)\n\nBump asset-hub westend spec version\n\n---------\n\nCo-authored-by: command-bot <>",
          "timestamp": "2025-01-15T13:48:38Z",
          "tree_id": "e10cbef466384a55cb70d8a06279b92e9e89f55d",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/d822e07d51dda41982291dc6582a8c4a34821e94"
        },
        "date": 1736952501945,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3963094,
            "range": "± 23347",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 282304,
            "range": "± 3489",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4021572,
            "range": "± 26391",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 361903,
            "range": "± 7241",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4692414,
            "range": "± 31152",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 829667,
            "range": "± 8466",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9565576,
            "range": "± 162246",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4476704,
            "range": "± 39910",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 41392677,
            "range": "± 344166",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 35802184,
            "range": "± 359592",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 334346345,
            "range": "± 1785141",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 276404886,
            "range": "± 2446708",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2432911500,
            "range": "± 19128989",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2583873469,
            "range": "± 57225900",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2840052,
            "range": "± 15544",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1456171,
            "range": "± 5146",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2967442,
            "range": "± 35607",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1527613,
            "range": "± 8496",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3494668,
            "range": "± 24682",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1833554,
            "range": "± 10098",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7543782,
            "range": "± 38095",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4692964,
            "range": "± 214766",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 39224263,
            "range": "± 488630",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 37981252,
            "range": "± 566994",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 369994391,
            "range": "± 2683359",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 445465000,
            "range": "± 6449332",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3486515801,
            "range": "± 71045991",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3561083817,
            "range": "± 62662569",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "60601340+lexnv@users.noreply.github.com",
            "name": "Alexandru Vasile",
            "username": "lexnv"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "77c78e1561bbe5ee0ecf414312bae82396ae6d11",
          "message": "litep2p: Provide partial results to speedup GetRecord queries (#7099)\n\nThis PR provides the partial results of the `GetRecord` kademlia query.\n\nThis significantly improves the authority discovery records, from ~37\nminutes to ~2/3 minutes.\nIn contrast, libp2p discovers authority records in around ~10 minutes. \n\nThe authority discovery was slow because litep2p provided the records\nonly after the Kademlia query was completed. A normal Kademlia query\ncompletes in around 40 seconds to a few minutes.\nIn this PR, partial records are provided as soon as they are discovered\nfrom the network.\n\n### Testing Done\n\nStarted a node in Kusama with `--validator` and litep2p backend.\nThe node discovered 996/1000 authority records in ~ 1 minute 45 seconds.\n\n![Screenshot 2025-01-09 at 12 26\n08](https://github.com/user-attachments/assets/b618bf7c-2bba-43a0-a021-4047e854c075)\n\n\n### Before & After\n\nIn this image, on the left side is libp2p, in the middle litep2p without\nthis PR, on the right litep2p with this PR\n\n![Screenshot 2025-01-07 at 17 57\n56](https://github.com/user-attachments/assets/a8d467f7-8dc7-461c-bcff-163b94d01ae8)\n\n\n\nCloses: https://github.com/paritytech/polkadot-sdk/issues/7077\n\ncc @paritytech/networking\n\n---------\n\nSigned-off-by: Alexandru Vasile <alexandru.vasile@parity.io>",
          "timestamp": "2025-01-15T16:50:42Z",
          "tree_id": "7e25e855bc84370c8ec5f64dea5cd0c82a1c93b9",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/77c78e1561bbe5ee0ecf414312bae82396ae6d11"
        },
        "date": 1736963091003,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3760286,
            "range": "± 30821",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 274344,
            "range": "± 2384",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 3854864,
            "range": "± 52209",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 346154,
            "range": "± 3163",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4532613,
            "range": "± 37708",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 811719,
            "range": "± 10610",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9385580,
            "range": "± 96904",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4425847,
            "range": "± 64088",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 43316368,
            "range": "± 624182",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 35989771,
            "range": "± 636018",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 332989186,
            "range": "± 2869818",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 277602375,
            "range": "± 1813426",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2356186945,
            "range": "± 12320105",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2664694305,
            "range": "± 60055833",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2746969,
            "range": "± 17150",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1414758,
            "range": "± 5307",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2878911,
            "range": "± 17338",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1474374,
            "range": "± 10460",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3350263,
            "range": "± 54818",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1786617,
            "range": "± 11363",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7277083,
            "range": "± 82700",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4567806,
            "range": "± 39352",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 38667342,
            "range": "± 680539",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 37655456,
            "range": "± 673599",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 346069975,
            "range": "± 2803659",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 416738283,
            "range": "± 5848734",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3169494305,
            "range": "± 24832679",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3582881999,
            "range": "± 70025827",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pgherveou@gmail.com",
            "name": "PG Herveou",
            "username": "pgherveou"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ece32e38a1a37aa354d51b16c07a42c66f23976e",
          "message": "[pallet-revive] Remove debug buffer (#7163)\n\nRemove the `debug_buffer` feature\n\n---------\n\nCo-authored-by: command-bot <>\nCo-authored-by: Cyrill Leutwiler <cyrill@parity.io>\nCo-authored-by: Alexander Theißen <alex.theissen@me.com>",
          "timestamp": "2025-01-15T17:37:59Z",
          "tree_id": "7d68de4fdbfafcb85dea33ba480521078b4fdd6b",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/ece32e38a1a37aa354d51b16c07a42c66f23976e"
        },
        "date": 1736965648105,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3779756,
            "range": "± 54716",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 275675,
            "range": "± 3536",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 3852609,
            "range": "± 54016",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 354959,
            "range": "± 2059",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4512820,
            "range": "± 52721",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 817597,
            "range": "± 8537",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9375324,
            "range": "± 109328",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4392146,
            "range": "± 66639",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 40098605,
            "range": "± 662972",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 34319642,
            "range": "± 390895",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 308666271,
            "range": "± 2710776",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 268129623,
            "range": "± 2326565",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2385080741,
            "range": "± 11889992",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2126540428,
            "range": "± 19244747",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2783398,
            "range": "± 21627",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1419300,
            "range": "± 20848",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2869678,
            "range": "± 28076",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1478060,
            "range": "± 10361",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3343238,
            "range": "± 31859",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1780798,
            "range": "± 10199",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7243036,
            "range": "± 72259",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4603917,
            "range": "± 74796",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 37020999,
            "range": "± 738986",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 36405313,
            "range": "± 617972",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 341669377,
            "range": "± 6465012",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 384106356,
            "range": "± 7672214",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3124751060,
            "range": "± 33235010",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3440993120,
            "range": "± 52187287",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pgherveou@gmail.com",
            "name": "PG Herveou",
            "username": "pgherveou"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "5be65872188a4ac1bf76333af3958b65f2a9629e",
          "message": "[pallet-revive] Remove revive events (#7164)\n\nRemove all pallet::events except for the `ContractEmitted` event that is\nemitted by contracts\n\n---------\n\nCo-authored-by: command-bot <>\nCo-authored-by: Alexander Theißen <alex.theissen@me.com>",
          "timestamp": "2025-01-15T19:23:54Z",
          "tree_id": "b90c0c104eba03064ac578fc573c153eb3bec52e",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/5be65872188a4ac1bf76333af3958b65f2a9629e"
        },
        "date": 1736972002969,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3900460,
            "range": "± 54779",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 284374,
            "range": "± 5168",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 3969454,
            "range": "± 26849",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 359565,
            "range": "± 3657",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4621025,
            "range": "± 77458",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 823057,
            "range": "± 7114",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9745795,
            "range": "± 150564",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4497266,
            "range": "± 64820",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 42368656,
            "range": "± 989586",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 35658171,
            "range": "± 414004",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 331420669,
            "range": "± 4331734",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 279609113,
            "range": "± 3168696",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2631812051,
            "range": "± 30755362",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2497214638,
            "range": "± 152259085",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2849402,
            "range": "± 13400",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1446902,
            "range": "± 7757",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2933319,
            "range": "± 19744",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1509737,
            "range": "± 9124",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3475677,
            "range": "± 33580",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1810849,
            "range": "± 7933",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7424893,
            "range": "± 60598",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4655780,
            "range": "± 53342",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 40540938,
            "range": "± 872886",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 38724746,
            "range": "± 868926",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 369729957,
            "range": "± 2966515",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 418923560,
            "range": "± 7610763",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3292880549,
            "range": "± 25261552",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3586510889,
            "range": "± 81740771",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "liam.aharon@hotmail.com",
            "name": "liamaharon",
            "username": "liamaharon"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "be2404cccd9923c41e2f16bfe655f19574f1ae0e",
          "message": "Implement `pallet-asset-rewards` (#3926)\n\nCloses #3149 \n\n## Description\n\nThis PR introduces `pallet-asset-rewards`, which allows accounts to be\nrewarded for freezing `fungible` tokens. The motivation for creating\nthis pallet is to allow incentivising LPs.\n\nSee the pallet docs for more info about the pallet.\n\n## Runtime changes\n\nThe pallet has been added to\n- `asset-hub-rococo`\n- `asset-hub-westend`\n\nThe `NativeAndAssets` `fungibles` Union did not contain `PoolAssets`, so\nit has been renamed `NativeAndNonPoolAssets`\n\nA new `fungibles` Union `NativeAndAllAssets` was created to encompass\nall assets and the native token.\n\n## TODO\n- [x] Emulation tests\n- [x] Fill in Freeze logic (blocked\nhttps://github.com/paritytech/polkadot-sdk/issues/3342) and re-run\nbenchmarks\n\n---------\n\nCo-authored-by: command-bot <>\nCo-authored-by: Oliver Tale-Yazdi <oliver.tale-yazdi@parity.io>\nCo-authored-by: muharem <ismailov.m.h@gmail.com>\nCo-authored-by: Guillaume Thiolliere <gui.thiolliere@gmail.com>",
          "timestamp": "2025-01-16T06:26:59Z",
          "tree_id": "aa90529d06d73e2ad5d12708830213302e23ac6a",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/be2404cccd9923c41e2f16bfe655f19574f1ae0e"
        },
        "date": 1737012021703,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 4937617,
            "range": "± 254069",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 340718,
            "range": "± 15125",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 5051422,
            "range": "± 230201",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 444220,
            "range": "± 15753",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 5575760,
            "range": "± 145728",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 964916,
            "range": "± 16807",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 11569973,
            "range": "± 454092",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 5587236,
            "range": "± 173071",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 57997903,
            "range": "± 2762030",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 46906729,
            "range": "± 1395923",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 404319772,
            "range": "± 7474556",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 327980053,
            "range": "± 6334929",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2776393508,
            "range": "± 51214302",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2959647145,
            "range": "± 216545449",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 3767562,
            "range": "± 93334",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1629561,
            "range": "± 17127",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 3342512,
            "range": "± 51183",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1616494,
            "range": "± 9155",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3988110,
            "range": "± 53433",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 2155679,
            "range": "± 39200",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 9319969,
            "range": "± 132469",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 5957532,
            "range": "± 567695",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 49509853,
            "range": "± 1264756",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 47836691,
            "range": "± 689893",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 483372379,
            "range": "± 12838617",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 488730089,
            "range": "± 20394492",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 4014776000,
            "range": "± 106017652",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 4419331599,
            "range": "± 109249309",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giuseppe.re@parity.io",
            "name": "Giuseppe Re",
            "username": "re-gius"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "64abc745d9a7e7d6bea471e7bd2e895c503199c2",
          "message": "Update `parity-publish` to v0.10.4 (#7193)\n\nThe changes from v0.10.3 are only related to dependencies version. This\nshould fix some failing CIs.\n\nThis PR also updates the Rust cache version in CI.",
          "timestamp": "2025-01-16T14:00:59Z",
          "tree_id": "0ae678c987baad6fd5d34d15ec036bf49638c7a8",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/64abc745d9a7e7d6bea471e7bd2e895c503199c2"
        },
        "date": 1737039018769,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3803949,
            "range": "± 20125",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 275864,
            "range": "± 3675",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 3934415,
            "range": "± 27013",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 359343,
            "range": "± 2982",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4608962,
            "range": "± 27216",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 812440,
            "range": "± 6381",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9417591,
            "range": "± 66790",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4416353,
            "range": "± 34554",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 40490832,
            "range": "± 309014",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 35027760,
            "range": "± 290836",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 317888831,
            "range": "± 3022130",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 270660796,
            "range": "± 1597487",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2399059232,
            "range": "± 11654353",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2616155596,
            "range": "± 69192975",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2794674,
            "range": "± 12887",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1441093,
            "range": "± 6804",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2891152,
            "range": "± 24997",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1495576,
            "range": "± 18040",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3399272,
            "range": "± 27684",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1800366,
            "range": "± 8684",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7258788,
            "range": "± 51617",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4611200,
            "range": "± 54472",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 38560874,
            "range": "± 388538",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 36640577,
            "range": "± 417140",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 350855771,
            "range": "± 1980040",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 397461754,
            "range": "± 7929477",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3197165737,
            "range": "± 12867379",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3520338314,
            "range": "± 83642549",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "88332432+dastansam@users.noreply.github.com",
            "name": "Dastan",
            "username": "dastansam"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "f7baa84f48aa72b96e8c9a9ec8a1934431de6709",
          "message": "[FRAME] `pallet_asset_tx_payment`: replace `AssetId` bound from `Copy` to `Clone` (#7194)\n\ncloses https://github.com/paritytech/polkadot-sdk/issues/6911",
          "timestamp": "2025-01-16T15:12:41Z",
          "tree_id": "76e82138f2681d38c1837774260368084f3321d0",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/f7baa84f48aa72b96e8c9a9ec8a1934431de6709"
        },
        "date": 1737044352258,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 4221073,
            "range": "± 44951",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 302881,
            "range": "± 2106",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4350683,
            "range": "± 18847",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 394402,
            "range": "± 6528",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 5609163,
            "range": "± 337954",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 1052777,
            "range": "± 48910",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 11113405,
            "range": "± 189486",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 5284973,
            "range": "± 175889",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 51786840,
            "range": "± 1998776",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 40468115,
            "range": "± 541505",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 382663130,
            "range": "± 5982742",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 298633212,
            "range": "± 4112767",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2667677040,
            "range": "± 45869358",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2764365952,
            "range": "± 103615016",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 3163948,
            "range": "± 35071",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1531143,
            "range": "± 5591",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 3359178,
            "range": "± 63463",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1620130,
            "range": "± 20771",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3911056,
            "range": "± 67539",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 2032098,
            "range": "± 37711",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 8884340,
            "range": "± 93888",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 5773430,
            "range": "± 196310",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 49182356,
            "range": "± 1283676",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 48486824,
            "range": "± 1147112",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 471240492,
            "range": "± 10652444",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 523219448,
            "range": "± 12861325",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 4089643188,
            "range": "± 81536808",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 4341854996,
            "range": "± 72556787",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "363911+pepoviola@users.noreply.github.com",
            "name": "Javier Viola",
            "username": "pepoviola"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "77ad8abb4a3aada3362fc4d5780db1844cc2e15d",
          "message": "Migrate substrate zombienet test poc (#7178)\n\nZombienet substrate tests PoC (using native provider).\n\ncc: @emamihe @alvicsam",
          "timestamp": "2025-01-16T16:09:24Z",
          "tree_id": "60adef081ef6ce5f5746930839f47c859bb25317",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/77ad8abb4a3aada3362fc4d5780db1844cc2e15d"
        },
        "date": 1737046680892,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3901976,
            "range": "± 65096",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 279243,
            "range": "± 6498",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4046956,
            "range": "± 63659",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 362123,
            "range": "± 4194",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4712479,
            "range": "± 84038",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 825286,
            "range": "± 8640",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9678052,
            "range": "± 110025",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4559491,
            "range": "± 63275",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 43429036,
            "range": "± 1150997",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 36064590,
            "range": "± 470035",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 336001223,
            "range": "± 4130001",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 276519310,
            "range": "± 1386167",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2414923812,
            "range": "± 9803692",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2667513329,
            "range": "± 46503333",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2857015,
            "range": "± 21783",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1457641,
            "range": "± 8519",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2955104,
            "range": "± 23428",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1519884,
            "range": "± 16145",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3524508,
            "range": "± 45670",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1827124,
            "range": "± 23393",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7559073,
            "range": "± 92497",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4699789,
            "range": "± 62005",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 41379749,
            "range": "± 1138498",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 39417741,
            "range": "± 932848",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 366005297,
            "range": "± 4224809",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 439107922,
            "range": "± 7692279",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3385406687,
            "range": "± 32990507",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3631402594,
            "range": "± 92253906",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gui.thiolliere@gmail.com",
            "name": "Guillaume Thiolliere",
            "username": "gui1117"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4b2febe18c6f2180a31a902433c00c30f8903ef7",
          "message": "Make frame crate not use the feature experimental (#7177)\n\nWe already use it for lots of pallet.\n\nKeeping it feature gated by experimental means we lose the information\nof which pallet was using experimental before the migration to frame\ncrate usage.\n\nWe can consider `polkadot-sdk-frame` crate unstable but let's not use\nthe feature `experimental`.\n\n---------\n\nCo-authored-by: command-bot <>",
          "timestamp": "2025-01-17T11:46:28Z",
          "tree_id": "d3c04961bfcb06080b83e764b72bd06a609a2c84",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/4b2febe18c6f2180a31a902433c00c30f8903ef7"
        },
        "date": 1737118293976,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3867709,
            "range": "± 36148",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 277761,
            "range": "± 3575",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 3994795,
            "range": "± 16464",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 363014,
            "range": "± 3677",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4654774,
            "range": "± 20767",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 828456,
            "range": "± 9923",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9606958,
            "range": "± 96843",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4528426,
            "range": "± 44915",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 41895112,
            "range": "± 549259",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 35381585,
            "range": "± 284110",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 325762556,
            "range": "± 3402875",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 272861780,
            "range": "± 1772810",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2381644235,
            "range": "± 11768593",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2639124225,
            "range": "± 73109276",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2766900,
            "range": "± 16448",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1433526,
            "range": "± 6360",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2844057,
            "range": "± 20179",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1484869,
            "range": "± 8946",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3370514,
            "range": "± 42942",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1805458,
            "range": "± 27220",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7355274,
            "range": "± 113049",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4678525,
            "range": "± 53022",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 39230341,
            "range": "± 505188",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 38248316,
            "range": "± 917568",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 370527715,
            "range": "± 7488685",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 386735905,
            "range": "± 6990432",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3347908407,
            "range": "± 62539035",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3638668107,
            "range": "± 92374511",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alex.theissen@me.com",
            "name": "Alexander Theißen",
            "username": "athei"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d62a90c8c729acd98c7e9a5cab9803b8b211ffc5",
          "message": "pallet_revive: Bump PolkaVM (#7203)\n\nUpdate to PolkaVM `0.19`. This version renumbers the opcodes in order to\nbe in-line with the grey paper. Hopefully, for the last time. This means\nthat it breaks existing contracts.\n\n---------\n\nSigned-off-by: xermicus <cyrill@parity.io>\nCo-authored-by: command-bot <>\nCo-authored-by: xermicus <cyrill@parity.io>",
          "timestamp": "2025-01-17T14:36:28Z",
          "tree_id": "968e43038c8fb4da1fd52c21631862be5ec7491f",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/d62a90c8c729acd98c7e9a5cab9803b8b211ffc5"
        },
        "date": 1737128827151,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 4009474,
            "range": "± 43928",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 294139,
            "range": "± 4008",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4106833,
            "range": "± 35846",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 370397,
            "range": "± 4033",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4900814,
            "range": "± 95596",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 857546,
            "range": "± 9430",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 10047125,
            "range": "± 209403",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4627567,
            "range": "± 52128",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 43633913,
            "range": "± 957283",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 36924427,
            "range": "± 404963",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 339970348,
            "range": "± 5141640",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 282185908,
            "range": "± 2936000",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2456515525,
            "range": "± 9803114",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2722608828,
            "range": "± 94040651",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2872142,
            "range": "± 31978",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1469326,
            "range": "± 11712",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 3092030,
            "range": "± 49429",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1553857,
            "range": "± 7730",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3613707,
            "range": "± 86190",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1875648,
            "range": "± 22463",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7797202,
            "range": "± 74729",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4774242,
            "range": "± 49408",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 43142196,
            "range": "± 671878",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 41714102,
            "range": "± 1169425",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 397820356,
            "range": "± 8548441",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 424951027,
            "range": "± 8335966",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3391184885,
            "range": "± 38641854",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3730659693,
            "range": "± 84600852",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "0@mcornholio.ru",
            "name": "Yuri Volkov",
            "username": "mutantcornholio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "c2531dc12dedfb345c16200229038ef8d04972cc",
          "message": "review-bot upgrade (#7214)\n\nUpgrading PAPI in review-bot:\nhttps://github.com/paritytech/review-bot/issues/140",
          "timestamp": "2025-01-17T17:00:04Z",
          "tree_id": "aba80af7d686cb9ce7a7c829d22c93e3f3cdd9f3",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/c2531dc12dedfb345c16200229038ef8d04972cc"
        },
        "date": 1737136341698,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3963475,
            "range": "± 35860",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 289353,
            "range": "± 3353",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4089124,
            "range": "± 42186",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 367696,
            "range": "± 6755",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4803869,
            "range": "± 45763",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 852706,
            "range": "± 16509",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9814936,
            "range": "± 116162",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4657096,
            "range": "± 116576",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 43916620,
            "range": "± 510170",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 36867142,
            "range": "± 490970",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 342172483,
            "range": "± 4456332",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 281158099,
            "range": "± 3021634",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2472964096,
            "range": "± 9933890",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2699637454,
            "range": "± 142044202",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2888955,
            "range": "± 21131",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1472389,
            "range": "± 6748",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2955656,
            "range": "± 17198",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1529650,
            "range": "± 9670",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3391746,
            "range": "± 18247",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1834791,
            "range": "± 9038",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7431540,
            "range": "± 81434",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4651888,
            "range": "± 49133",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 40443910,
            "range": "± 902157",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 38627568,
            "range": "± 1110765",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 362244937,
            "range": "± 5757801",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 400667651,
            "range": "± 5824866",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3262377403,
            "range": "± 28070894",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3635123817,
            "range": "± 63120774",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pgherveou@gmail.com",
            "name": "PG Herveou",
            "username": "pgherveou"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "7702fdd1bd869e518bf176ccf0268f83f8927f9b",
          "message": "[pallet-revive] Add  tracing support (1/3) (#7166)\n\nAdd foundation for supporting call traces in pallet_revive\n\nFollow up:\n- PR #7167 Add changes to eth-rpc to introduce debug endpoint that will\nuse pallet-revive tracing features\n- PR #6727 Add new RPC to the client and implement tracing runtime API\nthat can capture traces on previous blocks\n\n---------\n\nCo-authored-by: Alexander Theißen <alex.theissen@me.com>",
          "timestamp": "2025-01-17T18:21:38Z",
          "tree_id": "c83fae415391294d96d84614537a8454d6a2a84b",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/7702fdd1bd869e518bf176ccf0268f83f8927f9b"
        },
        "date": 1737147584699,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3918080,
            "range": "± 43288",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 284609,
            "range": "± 2832",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4076249,
            "range": "± 41053",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 367155,
            "range": "± 3715",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4801888,
            "range": "± 56465",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 842357,
            "range": "± 13888",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9910885,
            "range": "± 116813",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4619993,
            "range": "± 81008",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 43476569,
            "range": "± 1019808",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 36883627,
            "range": "± 475270",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 342405552,
            "range": "± 4489264",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 280829934,
            "range": "± 1823404",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2450815408,
            "range": "± 10647834",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2483949071,
            "range": "± 70645602",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2845798,
            "range": "± 24423",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1441813,
            "range": "± 11033",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2917303,
            "range": "± 20518",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1516620,
            "range": "± 29982",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3475954,
            "range": "± 27643",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1847617,
            "range": "± 9545",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7483577,
            "range": "± 90710",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4695191,
            "range": "± 59628",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 40586832,
            "range": "± 693182",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 37780173,
            "range": "± 902638",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 356547543,
            "range": "± 3178317",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 363968521,
            "range": "± 5837111",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3253201809,
            "range": "± 18024711",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3577424051,
            "range": "± 31669201",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "32275622+seemantaggarwal@users.noreply.github.com",
            "name": "seemantaggarwal",
            "username": "seemantaggarwal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "4937f779068d1ab947c9eada8e1d3f5b7191eb94",
          "message": "Use docify export for parachain template hardcoded configuration and embed it in its README #6333 (#7093)\n\nUse docify export for parachain template hardcoded configuration and\nembed it in its README #6333\n\nDocify currently has a limitation of not being able to embed a\nvariable/const in its code, without embedding it's definition, even if\ndo something in a string like\n\n\"this is a sample string ${sample_variable}\"\n\nIt will embed the entire string \n\"this is a sample string ${sample_variable}\"\nwithout replacing the value of sample_variable from the code\n\nHence, the goal was just to make it obvious in the README where the\nPARACHAIN_ID value is coming from, so a note has been added at the start\nfor the same, so whenever somebody is running these commands, they will\nbe aware about the value and replace accordingly.\n\nTo make it simpler, we added a \nrust ignore block so the user can just look it up in the readme itself\nand does not have to scan through the runtime directory for the value.\n\n---------\n\nCo-authored-by: Iulian Barbu <14218860+iulianbarbu@users.noreply.github.com>",
          "timestamp": "2025-01-20T10:21:29Z",
          "tree_id": "bf73d3be67c48f088a2d8ea09a7f98b9d05ef959",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/4937f779068d1ab947c9eada8e1d3f5b7191eb94"
        },
        "date": 1737372809550,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 4381186,
            "range": "± 138336",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 315198,
            "range": "± 7554",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4897348,
            "range": "± 149647",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 398366,
            "range": "± 9834",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 5389963,
            "range": "± 138640",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 937361,
            "range": "± 20675",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 11235928,
            "range": "± 220404",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 5227909,
            "range": "± 100896",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 53718391,
            "range": "± 1537648",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 42091422,
            "range": "± 603624",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 387229039,
            "range": "± 6052762",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 306810862,
            "range": "± 4723741",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2734037805,
            "range": "± 40834905",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2978418580,
            "range": "± 149962888",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 3250411,
            "range": "± 83063",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1558172,
            "range": "± 12962",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 3340003,
            "range": "± 20174",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1608140,
            "range": "± 9154",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3775718,
            "range": "± 56772",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1968391,
            "range": "± 18347",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 8231024,
            "range": "± 119232",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 5242900,
            "range": "± 102148",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 45142458,
            "range": "± 553294",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 43302727,
            "range": "± 814651",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 398763397,
            "range": "± 5025846",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 441415645,
            "range": "± 6641576",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3422190819,
            "range": "± 41871997",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3874817559,
            "range": "± 143936078",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "skunert49@gmail.com",
            "name": "Sebastian Kunert",
            "username": "skunert"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "d5d9b1276a088a6bd7a8c2c698320dad3d0ee2c4",
          "message": "Stabilize `ensure_execute_processes_have_correct_num_threads` test (#7253)\n\nSaw this test flake a few times, last time\n[here](https://github.com/paritytech/polkadot-sdk/actions/runs/12834432188/job/35791830215).\n\nWe first fetch all processes in the test, then query `/proc/<pid>/stat`\nfor every one of them. When the file was not found, we would error. Now\nwe tolerate not finding this file. Ran 200 times locally without error,\nbefore would fail a few times, probably depending on process fluctuation\n(which I expect to be high on CI runners).",
          "timestamp": "2025-01-20T11:02:59Z",
          "tree_id": "ae157145721731ae535a6f5633902334e6ce545a",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/d5d9b1276a088a6bd7a8c2c698320dad3d0ee2c4"
        },
        "date": 1737374151977,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 4014664,
            "range": "± 47597",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 289650,
            "range": "± 3268",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4192660,
            "range": "± 21167",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 370977,
            "range": "± 5444",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4788254,
            "range": "± 43141",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 846025,
            "range": "± 9979",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9954634,
            "range": "± 108809",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4581569,
            "range": "± 51786",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 42281904,
            "range": "± 329559",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 36410569,
            "range": "± 105415",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 343625972,
            "range": "± 2765840",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 280228870,
            "range": "± 2112583",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2510116625,
            "range": "± 15164274",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2834169075,
            "range": "± 30621389",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2987924,
            "range": "± 30438",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1505466,
            "range": "± 9033",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 3211036,
            "range": "± 19156",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1599957,
            "range": "± 9018",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3679247,
            "range": "± 60095",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1918473,
            "range": "± 12666",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7708026,
            "range": "± 101337",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4954908,
            "range": "± 89257",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 40670111,
            "range": "± 289335",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 39396435,
            "range": "± 273316",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 395894187,
            "range": "± 5998674",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 405850627,
            "range": "± 4710664",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3317708125,
            "range": "± 29489867",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3610025644,
            "range": "± 96071459",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pgherveou@gmail.com",
            "name": "PG Herveou",
            "username": "pgherveou"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ea27696aeed8e76cfb82492f6f3665948d766fe5",
          "message": "[pallet-revive] eth-rpc error logging (#7251)\n\nLog error instead of failing with an error when block processing fails\n\n---------\n\nCo-authored-by: command-bot <>",
          "timestamp": "2025-01-20T11:47:29Z",
          "tree_id": "e73af823265c0bd183ed33d3d4170ee727a2b722",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/ea27696aeed8e76cfb82492f6f3665948d766fe5"
        },
        "date": 1737376844163,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 4101723,
            "range": "± 49839",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 285960,
            "range": "± 2825",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4100375,
            "range": "± 42672",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 365304,
            "range": "± 3527",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4846674,
            "range": "± 54346",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 851390,
            "range": "± 10686",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9851390,
            "range": "± 117308",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4581872,
            "range": "± 51865",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 43257823,
            "range": "± 615759",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 35846226,
            "range": "± 479943",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 335046202,
            "range": "± 2095984",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 275893026,
            "range": "± 2238876",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2445761174,
            "range": "± 12897250",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2531484066,
            "range": "± 131545334",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2887039,
            "range": "± 17311",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1479481,
            "range": "± 6458",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2996513,
            "range": "± 17071",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1535489,
            "range": "± 11519",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3488474,
            "range": "± 39196",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1822847,
            "range": "± 8154",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7258451,
            "range": "± 34474",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4649549,
            "range": "± 37693",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 38061497,
            "range": "± 610370",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 36545167,
            "range": "± 569290",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 343898378,
            "range": "± 3639873",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 409189374,
            "range": "± 6516615",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3093701099,
            "range": "± 29743482",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3492630085,
            "range": "± 71201015",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yrong1997@gmail.com",
            "name": "Ron",
            "username": "yrong"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "569ce71e2c759b26601608f145d9b5efcb906919",
          "message": "Migrate pallet-mmr to umbrella crate (#7081)\n\nPart of https://github.com/paritytech/polkadot-sdk/issues/6504",
          "timestamp": "2025-01-20T14:16:57Z",
          "tree_id": "92132f125d5f9934b551da362af5b39250a3c53f",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/569ce71e2c759b26601608f145d9b5efcb906919"
        },
        "date": 1737385948314,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3829264,
            "range": "± 38048",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 275751,
            "range": "± 4288",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 3929790,
            "range": "± 32834",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 352642,
            "range": "± 3682",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4685581,
            "range": "± 37846",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 814927,
            "range": "± 18706",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9627523,
            "range": "± 113202",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4421642,
            "range": "± 68054",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 40610198,
            "range": "± 746755",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 35262228,
            "range": "± 156350",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 314132450,
            "range": "± 2129836",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 267339779,
            "range": "± 1727804",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2352350605,
            "range": "± 24541076",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2455656133,
            "range": "± 181779592",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2768081,
            "range": "± 16519",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1461573,
            "range": "± 6777",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2901770,
            "range": "± 36221",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1511137,
            "range": "± 9464",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3430426,
            "range": "± 37639",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1816299,
            "range": "± 7219",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7315023,
            "range": "± 142052",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4588356,
            "range": "± 56190",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 38086550,
            "range": "± 399093",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 36430761,
            "range": "± 567972",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 342160323,
            "range": "± 2787117",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 409976491,
            "range": "± 13928625",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3213007082,
            "range": "± 76465184",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3734468395,
            "range": "± 78166767",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "runcomet@protonmail.com",
            "name": "runcomet",
            "username": "runcomet"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "711e6ff33373bc08b026446ce19b73920bfe068c",
          "message": "Migrate `pallet-assets-freezer` to umbrella crate (#6599)\n\nPart of https://github.com/paritytech/polkadot-sdk/issues/6504\n\n### Added modules\n\n- `utility`: Traits not tied to any direct operation in the runtime.\n\npolkadot address: 14SRqZTC1d8rfxL8W1tBTnfUBPU23ACFVPzp61FyGf4ftUFg\n\n---------\n\nCo-authored-by: Giuseppe Re <giuseppe.re@parity.io>",
          "timestamp": "2025-01-20T16:12:44Z",
          "tree_id": "4f4b01b3189d08a7662c4986bcd35a0cdf12aac6",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/711e6ff33373bc08b026446ce19b73920bfe068c"
        },
        "date": 1737393305089,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3897950,
            "range": "± 71912",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 287383,
            "range": "± 16071",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4007614,
            "range": "± 73804",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 365548,
            "range": "± 7411",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4711266,
            "range": "± 95537",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 839733,
            "range": "± 9272",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9752721,
            "range": "± 126577",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4523784,
            "range": "± 66588",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 40937147,
            "range": "± 807824",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 35901632,
            "range": "± 730107",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 325456586,
            "range": "± 6390657",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 272190019,
            "range": "± 2961869",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2477934427,
            "range": "± 22961391",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2561223706,
            "range": "± 150679791",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2907814,
            "range": "± 98396",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1443704,
            "range": "± 15758",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 3046795,
            "range": "± 73414",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1528757,
            "range": "± 16745",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3491497,
            "range": "± 60573",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1827151,
            "range": "± 38272",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7427567,
            "range": "± 92084",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4650839,
            "range": "± 66206",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 39615897,
            "range": "± 952114",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 38586644,
            "range": "± 696482",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 373964804,
            "range": "± 7301737",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 416763667,
            "range": "± 11563153",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3465221451,
            "range": "± 37344766",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3727062454,
            "range": "± 89017838",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "benjamin@gallois.cc",
            "name": "Benjamin Gallois",
            "username": "bgallois"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2c4ceccebe2c338029eef243645455d525a5a78b",
          "message": "Fix `frame-benchmarking-cli` not buildable without rocksdb (#7263)\n\n## Description\n\nThe `frame-benchmarking-cli` crate has not been buildable without the\n`rocksdb` feature since version 1.17.0.\n\n**Error:**  \n```rust\nself.database()?.unwrap_or(Database::RocksDb),\n                             ^^^^^^^ variant or associated item not found in `Database`\n```\n\nThis issue is also related to the `rocksdb` feature bleeding (#3793),\nwhere the `rocksdb` feature was always activated even when compiling\nthis crate with `--no-default-features`.\n\n**Fix:**  \n- Resolved the error by choosing `paritydb` as the default database when\ncompiled without the `rocksdb` feature.\n- Fixed the issue where the `sc-cli` crate's `rocksdb` feature was\nalways active, even compiling `frame-benchmarking-cli` with\n`--no-default-features`.\n\n## Review Notes\n\nFix the crate to be built without rocksdb, not intended to solve #3793.\n\n---------\n\nCo-authored-by: command-bot <>",
          "timestamp": "2025-01-20T21:19:48Z",
          "tree_id": "42c3bf3888529a0b4b0b85c87a9d5814dfb30c18",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/2c4ceccebe2c338029eef243645455d525a5a78b"
        },
        "date": 1737410975504,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3950985,
            "range": "± 52496",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 283257,
            "range": "± 2339",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 3985618,
            "range": "± 22464",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 365568,
            "range": "± 5797",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4739317,
            "range": "± 47813",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 827601,
            "range": "± 20470",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9593306,
            "range": "± 111744",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4545487,
            "range": "± 66688",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 42207411,
            "range": "± 633325",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 36106023,
            "range": "± 330472",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 339324765,
            "range": "± 5429182",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 277764038,
            "range": "± 2129010",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2418864170,
            "range": "± 14302719",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2179338054,
            "range": "± 254851763",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2876791,
            "range": "± 13502",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1485325,
            "range": "± 11469",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2920854,
            "range": "± 61713",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1530864,
            "range": "± 14380",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3467016,
            "range": "± 20563",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1868159,
            "range": "± 16532",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7564338,
            "range": "± 38557",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4748378,
            "range": "± 55294",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 41904455,
            "range": "± 888451",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 39308917,
            "range": "± 612827",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 375947602,
            "range": "± 3647240",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 417454845,
            "range": "± 7557906",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3337470990,
            "range": "± 17946546",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3639742855,
            "range": "± 49242725",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pgherveou@gmail.com",
            "name": "PG Herveou",
            "username": "pgherveou"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cbf3925e1fe1383b998cfb428038c46da1577501",
          "message": "[eth-indexer] subscribe to finalize blocks instead of best blocks (#7260)\n\nFor eth-indexer, it's probably safer to use `subscribe_finalized` and\nindex these blocks into the DB rather than `subscribe_best`\n\n---------\n\nCo-authored-by: command-bot <>",
          "timestamp": "2025-01-20T22:58:21Z",
          "tree_id": "27475d6dbd249e2e1b4b930038f1a1cd4be00564",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/cbf3925e1fe1383b998cfb428038c46da1577501"
        },
        "date": 1737417123721,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3813266,
            "range": "± 20375",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 279486,
            "range": "± 2764",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 3932553,
            "range": "± 26372",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 357216,
            "range": "± 14494",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4592626,
            "range": "± 32502",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 814641,
            "range": "± 8850",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9388377,
            "range": "± 66450",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4399702,
            "range": "± 34315",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 39825151,
            "range": "± 293838",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 34672808,
            "range": "± 393535",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 319783327,
            "range": "± 2028053",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 269154115,
            "range": "± 1087577",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2376481993,
            "range": "± 7932922",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2506270368,
            "range": "± 88183301",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2796962,
            "range": "± 18951",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1454178,
            "range": "± 8136",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2856853,
            "range": "± 10687",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1508051,
            "range": "± 12332",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3369412,
            "range": "± 19701",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1808722,
            "range": "± 5808",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7207049,
            "range": "± 29797",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4569383,
            "range": "± 36340",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 38049994,
            "range": "± 309213",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 36088012,
            "range": "± 290222",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 339594472,
            "range": "± 3535551",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 387938194,
            "range": "± 8190656",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3141405903,
            "range": "± 41791723",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3472832150,
            "range": "± 92925401",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jose@blockdeep.io",
            "name": "José Molina Colmenero",
            "username": "Moliholy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "12ed0f4ffe4dcf3a8fe8928e3791141a110fad8b",
          "message": "Add an extra_constant to pallet-collator-selection (#7206)\n\nCurrently `pallet-collator-selection` does not expose a way to query the\nassigned pot account derived from the `PotId` configuration item.\nWithout it, it is not possible to transfer the existential deposit to\nit.\n\nThis PR addresses this issue by exposing an extra constant.\n\n---------\n\nCo-authored-by: Bastian Köcher <git@kchr.de>",
          "timestamp": "2025-01-21T09:49:09Z",
          "tree_id": "606f8c7eb20cf23b7b299cdde264f8503415b819",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/12ed0f4ffe4dcf3a8fe8928e3791141a110fad8b"
        },
        "date": 1737456389591,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3879807,
            "range": "± 54010",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 284596,
            "range": "± 4637",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4018686,
            "range": "± 44256",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 361399,
            "range": "± 2177",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4723095,
            "range": "± 27360",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 834414,
            "range": "± 9330",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9545625,
            "range": "± 71265",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4437129,
            "range": "± 38844",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 40417887,
            "range": "± 463863",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 35208811,
            "range": "± 375253",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 323475274,
            "range": "± 3019162",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 271558010,
            "range": "± 1498402",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2592279338,
            "range": "± 30597587",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2755650788,
            "range": "± 48249804",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2899180,
            "range": "± 14434",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1463618,
            "range": "± 8074",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2996068,
            "range": "± 16600",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1536081,
            "range": "± 10989",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3511803,
            "range": "± 31722",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1849552,
            "range": "± 33314",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7348914,
            "range": "± 68508",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4694699,
            "range": "± 56429",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 38372049,
            "range": "± 448139",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 37008450,
            "range": "± 340543",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 355974991,
            "range": "± 3452884",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 397244493,
            "range": "± 11020713",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3162833259,
            "range": "± 16667572",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3440477064,
            "range": "± 54429715",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "claravanstaden64@gmail.com",
            "name": "Clara van Staden",
            "username": "claravanstaden"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c0c0632c2efca435e973a1f6788e24235fe0e2a6",
          "message": "Snowbridge - Copy Rococo integration tests to Westend (#7108)\n\nCopies all the integration tests from Rococo to Westend.\n\nCloses: https://github.com/paritytech/polkadot-sdk/issues/6389",
          "timestamp": "2025-01-21T14:11:50Z",
          "tree_id": "245cc885df6e82b498175778a667548dce9f9a09",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/c0c0632c2efca435e973a1f6788e24235fe0e2a6"
        },
        "date": 1737471702283,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3832608,
            "range": "± 27605",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 287342,
            "range": "± 3027",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 3976491,
            "range": "± 39297",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 367699,
            "range": "± 3481",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4737315,
            "range": "± 55073",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 845605,
            "range": "± 12609",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9747450,
            "range": "± 51810",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4584643,
            "range": "± 55646",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 43608727,
            "range": "± 567350",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 36354869,
            "range": "± 584805",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 340033425,
            "range": "± 5114837",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 281607543,
            "range": "± 1694339",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2466957439,
            "range": "± 20485872",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2597039385,
            "range": "± 103081688",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2824694,
            "range": "± 12030",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1479534,
            "range": "± 6994",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2960275,
            "range": "± 31645",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1533963,
            "range": "± 9955",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3424825,
            "range": "± 20401",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1839049,
            "range": "± 11590",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7501092,
            "range": "± 83467",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4617614,
            "range": "± 29518",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 39336542,
            "range": "± 499117",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 38024591,
            "range": "± 672559",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 353781028,
            "range": "± 4534014",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 415990198,
            "range": "± 7898915",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3199568411,
            "range": "± 8548661",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3574178882,
            "range": "± 69221458",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ludovic.domingues96@gmail.com",
            "name": "Ludovic_Domingues",
            "username": "Krayt78"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9edaef09a69e39b0785f8339f93a3ed6a1f6e023",
          "message": "Migrate pallet-paged-list-fuzzer to umbrella crate (#6930)\n\nPart of  #6504\n\n---------\n\nCo-authored-by: Bastian Köcher <git@kchr.de>\nCo-authored-by: Giuseppe Re <giuseppe.re@parity.io>",
          "timestamp": "2025-01-21T17:36:04Z",
          "tree_id": "8f4410fe7bbfba61ebfee9ff25593496596d86d9",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/9edaef09a69e39b0785f8339f93a3ed6a1f6e023"
        },
        "date": 1737484304353,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3941632,
            "range": "± 42666",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 281762,
            "range": "± 4009",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4082427,
            "range": "± 31731",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 363737,
            "range": "± 5806",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4689280,
            "range": "± 73778",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 829596,
            "range": "± 9981",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9697517,
            "range": "± 153229",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4583153,
            "range": "± 89666",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 43096846,
            "range": "± 860577",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 37128798,
            "range": "± 667954",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 345773300,
            "range": "± 4461663",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 282017483,
            "range": "± 2329784",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2486905625,
            "range": "± 16757609",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2627752599,
            "range": "± 122872293",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2899039,
            "range": "± 24137",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1465496,
            "range": "± 9682",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2973509,
            "range": "± 21038",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1532190,
            "range": "± 7638",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3477394,
            "range": "± 25692",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1834754,
            "range": "± 8647",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7410276,
            "range": "± 110675",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4628678,
            "range": "± 46070",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 40120544,
            "range": "± 567828",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 38139486,
            "range": "± 701162",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 361818185,
            "range": "± 3248506",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 427648004,
            "range": "± 11346013",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3227773955,
            "range": "± 14441531",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3591971688,
            "range": "± 66453652",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "363911+pepoviola@users.noreply.github.com",
            "name": "Javier Viola",
            "username": "pepoviola"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2345eb9a5b5e2145ac1c04fd9cf1fcf12b7278b6",
          "message": "Bump zombienet version to `v1.3.119` (#7283)\n\nThis version include a fix that make test\n`zombienet-polkadot-malus-0001-dispute-valid` green again.\nThx!",
          "timestamp": "2025-01-21T21:24:05Z",
          "tree_id": "79041ea24648703c8978b3b5268e00f102249ee6",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/2345eb9a5b5e2145ac1c04fd9cf1fcf12b7278b6"
        },
        "date": 1737497695049,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3782896,
            "range": "± 21842",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 272034,
            "range": "± 2998",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 3895763,
            "range": "± 36576",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 355777,
            "range": "± 4474",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4622625,
            "range": "± 48254",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 821747,
            "range": "± 7371",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9337027,
            "range": "± 79295",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4455797,
            "range": "± 100766",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 42099018,
            "range": "± 420035",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 35479018,
            "range": "± 373212",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 328460294,
            "range": "± 3352958",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 276221760,
            "range": "± 1748834",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2401992853,
            "range": "± 17261309",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2620368507,
            "range": "± 70979448",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2791223,
            "range": "± 26116",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1435925,
            "range": "± 11377",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2892794,
            "range": "± 16045",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1490203,
            "range": "± 5807",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3380747,
            "range": "± 24081",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1798406,
            "range": "± 14412",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7407598,
            "range": "± 114593",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4647701,
            "range": "± 81905",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 40950329,
            "range": "± 1019972",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 38077708,
            "range": "± 1107514",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 352429961,
            "range": "± 2024737",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 389918979,
            "range": "± 8892931",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3263347997,
            "range": "± 47589299",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3475837016,
            "range": "± 59365765",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "serban@parity.io",
            "name": "Serban Iorga",
            "username": "serban300"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "1bdb817f2b140b0c2573396146fd7bbfb936af10",
          "message": "Enable BEEFY `report_fork_voting()` (#6856)\n\nRelated to https://github.com/paritytech/polkadot-sdk/issues/4523\n\nFollow-up for: https://github.com/paritytech/polkadot-sdk/pull/5188\n\nReopening https://github.com/paritytech/polkadot-sdk/pull/6732 as a new\nPR\n\n---------\n\nCo-authored-by: command-bot <>",
          "timestamp": "2025-01-22T10:01:28Z",
          "tree_id": "a014a8246dab85d5b371f306aac68609b4ac6947",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/1bdb817f2b140b0c2573396146fd7bbfb936af10"
        },
        "date": 1737543115428,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3749818,
            "range": "± 40296",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 272762,
            "range": "± 3034",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 3877012,
            "range": "± 18113",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 350815,
            "range": "± 5309",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4573980,
            "range": "± 23409",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 802781,
            "range": "± 7750",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9386997,
            "range": "± 95375",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4393868,
            "range": "± 30620",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 39550324,
            "range": "± 273055",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 33797958,
            "range": "± 367177",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 303951520,
            "range": "± 1319321",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 263662772,
            "range": "± 1115833",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2354614675,
            "range": "± 8185510",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2520362535,
            "range": "± 107202351",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2744258,
            "range": "± 19159",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1435692,
            "range": "± 8088",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2880800,
            "range": "± 15859",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1505261,
            "range": "± 3998",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3377369,
            "range": "± 21902",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1809489,
            "range": "± 13976",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7350379,
            "range": "± 103082",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4628905,
            "range": "± 18188",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 38621870,
            "range": "± 441533",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 36381828,
            "range": "± 593078",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 351811251,
            "range": "± 2922684",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 386959214,
            "range": "± 5550254",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3193282550,
            "range": "± 25815270",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3498847197,
            "range": "± 64300263",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "59443568+sw10pa@users.noreply.github.com",
            "name": "Stephane Gurgenidze",
            "username": "sw10pa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4eb9228840be0abef1c45cf8fa8bc44b5f95200a",
          "message": "collation-generation: resolve mismatch between descriptor and commitments core index (#7104)\n\n## Issue\n[[#7107] Core Index Mismatch in Commitments and\nDescriptor](https://github.com/paritytech/polkadot-sdk/issues/7107)\n\n## Description\nThis PR resolves a bug where normal (non-malus) undying collators failed\nto generate and submit collations, resulting in the following error:\n\n`ERROR tokio-runtime-worker parachain::collation-generation: Failed to\nconstruct and distribute collation: V2 core index check failed: The core\nindex in commitments doesn't match the one in descriptor.`\n\nMore details about the issue and reproduction steps are described in the\n[related issue](https://github.com/paritytech/polkadot-sdk/issues/7107).\n\n## Summary of Fix\n- When core selectors are provided in the UMP signals, core indexes will\nbe chosen using them;\n- The fix ensures that functionality remains unchanged for parachains\nnot using UMP signals;\n- Added checks to stop processing if the same core is selected\nrepeatedly.\n\n## TODO\n- [X] Implement the fix;\n- [x] Add tests;\n- [x] Add PRdoc.",
          "timestamp": "2025-01-22T11:00:50Z",
          "tree_id": "73f36ea0a295d0adf3f15e8201dc0dddb9de2443",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/4eb9228840be0abef1c45cf8fa8bc44b5f95200a"
        },
        "date": 1737547200874,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3883572,
            "range": "± 37280",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 279469,
            "range": "± 1966",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 3991431,
            "range": "± 27971",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 358103,
            "range": "± 4232",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4659112,
            "range": "± 44639",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 824207,
            "range": "± 11301",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9538512,
            "range": "± 155005",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4553187,
            "range": "± 250853",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 42289118,
            "range": "± 853874",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 37075858,
            "range": "± 531031",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 345137642,
            "range": "± 3005599",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 281642978,
            "range": "± 2677507",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2460319063,
            "range": "± 24962418",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2620401199,
            "range": "± 66885944",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2865419,
            "range": "± 24082",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1453414,
            "range": "± 10185",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2949134,
            "range": "± 23308",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1532567,
            "range": "± 6394",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3492019,
            "range": "± 36345",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1860719,
            "range": "± 11287",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7521960,
            "range": "± 98859",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4763762,
            "range": "± 56716",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 42538050,
            "range": "± 841745",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 40534611,
            "range": "± 798223",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 373839323,
            "range": "± 3712712",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 450624257,
            "range": "± 6984509",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3354528310,
            "range": "± 16263646",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3733786563,
            "range": "± 70523057",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "69342343+MrishoLukamba@users.noreply.github.com",
            "name": "Mrisho Lukamba",
            "username": "MrishoLukamba"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "634a17b6f67c71e589f921b0ddd4c23bbed883f1",
          "message": "Unify Import verifier usage across parachain template and omninode (#7195)\n\nCloses #7055\n\n@skunert @bkchr\n\n---------\n\nCo-authored-by: Bastian Köcher <git@kchr.de>\nCo-authored-by: command-bot <>\nCo-authored-by: Sebastian Kunert <skunert49@gmail.com>",
          "timestamp": "2025-01-22T15:06:18Z",
          "tree_id": "7730c1e3bb98148039a8322f04aef3fa9dfcd179",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/634a17b6f67c71e589f921b0ddd4c23bbed883f1"
        },
        "date": 1737561420049,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3787081,
            "range": "± 36486",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 277257,
            "range": "± 2749",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 3909043,
            "range": "± 20218",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 353261,
            "range": "± 3532",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4642655,
            "range": "± 58905",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 835747,
            "range": "± 6407",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9698926,
            "range": "± 159929",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4503320,
            "range": "± 44471",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 41514484,
            "range": "± 941224",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 36156231,
            "range": "± 287945",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 327430198,
            "range": "± 2862827",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 273232850,
            "range": "± 1959120",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2389117227,
            "range": "± 7234988",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2491818475,
            "range": "± 73516338",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2862068,
            "range": "± 15524",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1464503,
            "range": "± 8865",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2979660,
            "range": "± 18051",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1532769,
            "range": "± 9840",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3492664,
            "range": "± 28351",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1826137,
            "range": "± 12815",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7433624,
            "range": "± 60915",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4717168,
            "range": "± 27661",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 39501237,
            "range": "± 447401",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 38101127,
            "range": "± 622748",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 366402542,
            "range": "± 2515013",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 385154837,
            "range": "± 6084363",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3279767725,
            "range": "± 24572954",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3600879874,
            "range": "± 56431406",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "60601340+lexnv@users.noreply.github.com",
            "name": "Alexandru Vasile",
            "username": "lexnv"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "fd64a1e7768ba6e8676cbbf25c4e821a901c0a7f",
          "message": "net/libp2p: Enforce outbound request-response timeout limits (#7222)\n\nThis PR enforces that outbound requests are finished within the\nspecified protocol timeout.\n\nThe stable2412 version running libp2p 0.52.4 contains a bug which does\nnot track request timeouts properly:\n- https://github.com/libp2p/rust-libp2p/pull/5429\n\nThe issue has been detected while submitting libp2p -> litep2p requests\nin kusama. This aims to check that pending outbound requests have not\ntimedout. Although the issue has been fixed in libp2p, there might be\nother cases where this may happen. For example:\n- https://github.com/libp2p/rust-libp2p/pull/5417\n\nFor more context see:\nhttps://github.com/paritytech/polkadot-sdk/issues/7076#issuecomment-2596085096\n\n\n1. Ideally, the force-timeout mechanism in this PR should never be\ntriggered in production. However, origin/stable2412 occasionally\nencounters this issue. When this happens, 2 warnings may be generated:\n- one warning introduced by this PR wrt force timeout terminating the\nrequest\n- possible one warning when the libp2p decides (if at all) to provide\nthe response back to substrate (as mentioned by @alexggh\n[here](https://github.com/paritytech/polkadot-sdk/pull/7222/files#diff-052aeaf79fef3d9a18c2cfd67006aa306b8d52e848509d9077a6a0f2eb856af7L769)\nand\n[here](https://github.com/paritytech/polkadot-sdk/pull/7222/files#diff-052aeaf79fef3d9a18c2cfd67006aa306b8d52e848509d9077a6a0f2eb856af7L842)\n\n2. This implementation does not propagate to the substrate service the\n`RequestFinished { error: .. }`. That event is only used internally by\nsubstrate to increment metrics. However, we don't have the peer\ninformation available to propagate the event properly when we\nforce-timeout the request. Considering this should most likely not\nhappen in production (origin/master) and that we'll be able to extract\ninformation by warnings, I would say this is a good tradeoff for code\nsimplicity:\n\n\nhttps://github.com/paritytech/polkadot-sdk/blob/06e3b5c6a7696048d65f1b8729f16b379a16f501/substrate/client/network/src/service.rs#L1543\n\n\n### Testing\n\nAdded a new test to ensure the timeout is reached properly, even if\nlibp2p does not produce a response in due time.\n\nI've also transitioned the tests to using `tokio::test` due to a\nlimitation of\n[CI](https://github.com/paritytech/polkadot-sdk/actions/runs/12832055737/job/35784043867)\n\n```\n--- TRY 1 STDERR:        sc-network request_responses::tests::max_response_size_exceeded ---\nthread 'request_responses::tests::max_response_size_exceeded' panicked at /usr/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/tokio-1.40.0/src/time/interval.rs:139:26:\nthere is no reactor running, must be called from the context of a Tokio 1.x runtime\n```\n\n\n\ncc @paritytech/networking\n\n---------\n\nSigned-off-by: Alexandru Vasile <alexandru.vasile@parity.io>\nCo-authored-by: Bastian Köcher <git@kchr.de>",
          "timestamp": "2025-01-22T16:51:59Z",
          "tree_id": "17935494a17a9360cc2d6485a7009724bcb76fef",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/fd64a1e7768ba6e8676cbbf25c4e821a901c0a7f"
        },
        "date": 1737567847240,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3948391,
            "range": "± 53255",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 284114,
            "range": "± 7661",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4084333,
            "range": "± 21985",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 364742,
            "range": "± 3688",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4762384,
            "range": "± 37968",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 822546,
            "range": "± 9157",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9733860,
            "range": "± 118586",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4437691,
            "range": "± 42813",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 42212517,
            "range": "± 320741",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 35356243,
            "range": "± 351118",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 329593001,
            "range": "± 934218",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 271446118,
            "range": "± 797977",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2417977158,
            "range": "± 5973257",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2568112484,
            "range": "± 68432149",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2808632,
            "range": "± 16899",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1451490,
            "range": "± 6606",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2901907,
            "range": "± 23505",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1497136,
            "range": "± 8254",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3401133,
            "range": "± 18505",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1796511,
            "range": "± 9025",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7233214,
            "range": "± 23795",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4629427,
            "range": "± 44425",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 37868822,
            "range": "± 474565",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 36307028,
            "range": "± 460800",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 347757895,
            "range": "± 2761383",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 373691124,
            "range": "± 7153573",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3226897712,
            "range": "± 31739219",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3554282055,
            "range": "± 43443375",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "FereMouSiopi@proton.me",
            "name": "FereMouSiopi",
            "username": "FereMouSiopi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "89b022842c7ab922de5bf026cd45e43b9cd8c654",
          "message": "Migrate `pallet-insecure-randomness-collective-flip` to umbrella crate (#6738)\n\nPart of https://github.com/paritytech/polkadot-sdk/issues/6504\n\n---------\n\nCo-authored-by: command-bot <>\nCo-authored-by: Bastian Köcher <git@kchr.de>",
          "timestamp": "2025-01-22T18:08:59Z",
          "tree_id": "cc44d8d5ba3fdf2339d181c13dcd627e344d1111",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/89b022842c7ab922de5bf026cd45e43b9cd8c654"
        },
        "date": 1737572742158,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3866962,
            "range": "± 47639",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 279559,
            "range": "± 4033",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 3966647,
            "range": "± 42447",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 352388,
            "range": "± 2473",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4613544,
            "range": "± 48814",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 812850,
            "range": "± 4034",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9543589,
            "range": "± 43464",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4352669,
            "range": "± 21428",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 39658566,
            "range": "± 559234",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 33909070,
            "range": "± 366820",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 312334837,
            "range": "± 2845868",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 264212967,
            "range": "± 1166948",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2353731448,
            "range": "± 9732346",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2605485786,
            "range": "± 130035766",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2728336,
            "range": "± 12921",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1426011,
            "range": "± 5602",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2836224,
            "range": "± 15487",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1480119,
            "range": "± 5787",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3318518,
            "range": "± 8888",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1772372,
            "range": "± 9935",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7166447,
            "range": "± 34415",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4585342,
            "range": "± 42121",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 37687826,
            "range": "± 415727",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 36046179,
            "range": "± 218499",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 347922648,
            "range": "± 2299882",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 392563204,
            "range": "± 4575588",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3142229789,
            "range": "± 13629501",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3536869928,
            "range": "± 45394962",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pgherveou@gmail.com",
            "name": "PG Herveou",
            "username": "pgherveou"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "5772b9dbde8f88718ec5c6409f444d6e5b4e4e03",
          "message": "[pallet-revive] fee estimation fixes (#7281)\n\n- Fix the EVM fee cost estimation.\nThe estimation shown in EVM wallet was using Native instead of EVM\ndecimals\n- Remove the precise code length estimation in dry run call.\nOver-estimating is fine, since extra gas is refunded anyway.\n- Ensure that the estimated fee calculated from gas_price x gas use the\nencoded weight & deposit limit instead of the exact one calculated by\nthe dry-run. Else we can end up with a fee that is lower than the actual\nfee paid by the user\n\n---------\n\nCo-authored-by: command-bot <>",
          "timestamp": "2025-01-23T09:57:06Z",
          "tree_id": "b25a28f13b631208eec39649193f984dbb68820e",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/5772b9dbde8f88718ec5c6409f444d6e5b4e4e03"
        },
        "date": 1737629802464,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 4034705,
            "range": "± 63896",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 298814,
            "range": "± 3706",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4136826,
            "range": "± 27908",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 379726,
            "range": "± 6096",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4902011,
            "range": "± 65477",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 894827,
            "range": "± 12619",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 10176032,
            "range": "± 116062",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4997814,
            "range": "± 237713",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 48025902,
            "range": "± 1539486",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 40278428,
            "range": "± 522908",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 368337958,
            "range": "± 2653495",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 297931382,
            "range": "± 2560784",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2564286238,
            "range": "± 16468413",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2774508227,
            "range": "± 41597254",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2979780,
            "range": "± 28808",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1499015,
            "range": "± 8608",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 3026156,
            "range": "± 18595",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1566346,
            "range": "± 5120",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3605291,
            "range": "± 42485",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1938255,
            "range": "± 21495",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 8152884,
            "range": "± 118156",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 5269488,
            "range": "± 199222",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 47175622,
            "range": "± 1181651",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 47056406,
            "range": "± 1017605",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 432867868,
            "range": "± 27560780",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 491391210,
            "range": "± 8075797",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3646436369,
            "range": "± 32559554",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 4226418605,
            "range": "± 108010311",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "runcomet@protonmail.com",
            "name": "runcomet",
            "username": "runcomet"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "04847d515ef56da4d0801c9b89a4241dfa827b33",
          "message": "Balances: Configurable Number of Genesis Accounts with Specified Balances for Benchmarking (#6267)\n\n# Derived Dev Accounts\n\nResolves https://github.com/paritytech/polkadot-sdk/issues/6040\n\n## Description\nThis update introduces support for creating an arbitrary number of\ndeveloper accounts at the genesis block based on a specified derivation\npath. This functionality is gated by the runtime-benchmarks feature,\nensuring it is only enabled during benchmarking scenarios.\n\n### Key Features\n- Arbitrary Dev Accounts at Genesis: Developers can now specify any\nnumber of accounts to be generated at genesis using a hard derivation\npath.\n\n- Default Derivation Path: If no derivation path is provided (i.e., when\n`Option<dev_accounts: (..., None)>` is set to `Some` at genesis), the\nsystem will default to the path `//Sender//{}`.\n\n- No Impact on Total Token Issuance: Developer accounts are excluded\nfrom the total issuance of the token supply at genesis, ensuring they do\nnot affect the overall balance or token distribution.\n\npolkadot address: 14SRqZTC1d8rfxL8W1tBTnfUBPU23ACFVPzp61FyGf4ftUFg\n\n---------\n\nCo-authored-by: Sebastian Kunert <skunert49@gmail.com>",
          "timestamp": "2025-01-23T10:38:15Z",
          "tree_id": "2e6227b4cd51ae9aad6ed4b03538e4eb4ed049f5",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/04847d515ef56da4d0801c9b89a4241dfa827b33"
        },
        "date": 1737632185772,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 4320739,
            "range": "± 128822",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 310520,
            "range": "± 4805",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4398166,
            "range": "± 35141",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 397258,
            "range": "± 6054",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 5237818,
            "range": "± 64987",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 927615,
            "range": "± 23061",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 10768090,
            "range": "± 222177",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 5165378,
            "range": "± 100096",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 52004968,
            "range": "± 1166349",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 40562194,
            "range": "± 436404",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 389353328,
            "range": "± 3971408",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 305370152,
            "range": "± 3166181",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2794320990,
            "range": "± 12092462",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2950684714,
            "range": "± 95218190",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 3165844,
            "range": "± 21905",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1530947,
            "range": "± 7782",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 3299786,
            "range": "± 17190",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1601825,
            "range": "± 12465",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3788710,
            "range": "± 36205",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1968082,
            "range": "± 21487",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 8603989,
            "range": "± 124584",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 5420721,
            "range": "± 126856",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 46991793,
            "range": "± 763482",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 45644421,
            "range": "± 895995",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 445189718,
            "range": "± 4486734",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 510645559,
            "range": "± 12559963",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3915616054,
            "range": "± 39294139",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 4223690664,
            "range": "± 55136831",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "a.khssnv@gmail.com",
            "name": "Alisher A. Khassanov",
            "username": "khssnv"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "66bd26d35c21ad260120129776c86870ff1dd220",
          "message": "Add `offchain_localStorageClear` RPC method (#7266)\n\n# Description\n\nCloses https://github.com/paritytech/polkadot-sdk/issues/7265.\n\n## Integration\n\nRequires changes in\n`https://github.com/polkadot-js/api/packages/{rpc-augment,types-support,types}`\nto be visible in Polkadot\\Substrate Portal and in other libraries where\nwe should explicitly state RPC methods.\n\nAccompany PR to `polkadot-js/api`:\nhttps://github.com/polkadot-js/api/pull/6070.\n\n## Review Notes\n\nPlease put the right label on my PR.\n\n---------\n\nCo-authored-by: command-bot <>\nCo-authored-by: Bastian Köcher <git@kchr.de>",
          "timestamp": "2025-01-23T11:01:55Z",
          "tree_id": "a68a17a4e6d0a5320ce2ea2e0421515e4421751a",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/66bd26d35c21ad260120129776c86870ff1dd220"
        },
        "date": 1737633444779,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 4104558,
            "range": "± 42446",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 300303,
            "range": "± 3018",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4190803,
            "range": "± 30910",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 384518,
            "range": "± 3784",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4995412,
            "range": "± 53594",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 886689,
            "range": "± 13849",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 10425220,
            "range": "± 85336",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 5059578,
            "range": "± 151477",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 48908772,
            "range": "± 1253181",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 39212614,
            "range": "± 409932",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 378104800,
            "range": "± 4190789",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 303276877,
            "range": "± 2524234",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2621974010,
            "range": "± 15970824",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2837865767,
            "range": "± 87480641",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 3218446,
            "range": "± 31104",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1556362,
            "range": "± 8631",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 3359920,
            "range": "± 66876",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1613521,
            "range": "± 10386",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3929782,
            "range": "± 29803",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1976106,
            "range": "± 12861",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 8400986,
            "range": "± 112322",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 5061174,
            "range": "± 176635",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 45670986,
            "range": "± 1024702",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 44501058,
            "range": "± 572935",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 400563793,
            "range": "± 5039879",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 456108313,
            "range": "± 9814602",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3503674890,
            "range": "± 61994982",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3761785507,
            "range": "± 92847468",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bkontur@gmail.com",
            "name": "Branislav Kontur",
            "username": "bkontur"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "085da479dee8e09ad3de83dbc59b304bd36b4ebe",
          "message": "Bridges small nits/improvements (#7307)\n\nThis PR contains small fixes identified during work on the larger PR:\nhttps://github.com/paritytech/polkadot-sdk/issues/6906.\n\n---------\n\nCo-authored-by: command-bot <>",
          "timestamp": "2025-01-23T11:55:14Z",
          "tree_id": "36c525ca26c1e465f4fe088589d1e30b3f02fe2a",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/085da479dee8e09ad3de83dbc59b304bd36b4ebe"
        },
        "date": 1737636743614,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3980227,
            "range": "± 25527",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 292401,
            "range": "± 4965",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4108208,
            "range": "± 29939",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 374565,
            "range": "± 3214",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4880465,
            "range": "± 58544",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 877972,
            "range": "± 10600",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 10228069,
            "range": "± 104523",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4851936,
            "range": "± 80471",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 45729285,
            "range": "± 1360766",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 37945799,
            "range": "± 494524",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 369350098,
            "range": "± 2897837",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 296007412,
            "range": "± 2879928",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2555970510,
            "range": "± 14365607",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2301256173,
            "range": "± 21049803",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 3005216,
            "range": "± 18297",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1498263,
            "range": "± 6477",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 3076918,
            "range": "± 19659",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1577593,
            "range": "± 30545",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3675441,
            "range": "± 56751",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1928586,
            "range": "± 13073",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7968089,
            "range": "± 98301",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4858487,
            "range": "± 99349",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 43908658,
            "range": "± 1245381",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 42609354,
            "range": "± 1047276",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 391538781,
            "range": "± 7136871",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 454996328,
            "range": "± 12547159",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3548255872,
            "range": "± 41457206",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3816096204,
            "range": "± 39511169",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alin@parity.io",
            "name": "Alin Dima",
            "username": "alindima"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "cfc5b6f59a1fa46aa55144bff5eb7fca14e27e2b",
          "message": "bump lookahead to 3 for testnet genesis (#7252)\n\nThis is the right value after\nhttps://github.com/paritytech/polkadot-sdk/pull/4880, which corresponds\nto an allowedAncestryLen of 2 (which is the default)\n\nWIll fix https://github.com/paritytech/polkadot-sdk/issues/7105",
          "timestamp": "2025-01-23T13:00:31Z",
          "tree_id": "7f68012322ae7652b91643eedd929cdded5937be",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/cfc5b6f59a1fa46aa55144bff5eb7fca14e27e2b"
        },
        "date": 1737640489388,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3935279,
            "range": "± 31359",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 282407,
            "range": "± 12789",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4107730,
            "range": "± 53408",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 361979,
            "range": "± 5094",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4823745,
            "range": "± 40485",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 838357,
            "range": "± 9497",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9839070,
            "range": "± 114711",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4638242,
            "range": "± 150450",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 44183916,
            "range": "± 712290",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 37405384,
            "range": "± 528558",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 357622658,
            "range": "± 4203559",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 287532455,
            "range": "± 2417500",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2484687650,
            "range": "± 8519599",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2699275665,
            "range": "± 233562846",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2904423,
            "range": "± 18233",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1467249,
            "range": "± 7192",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2960077,
            "range": "± 20584",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1533770,
            "range": "± 9627",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3554491,
            "range": "± 32502",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1869079,
            "range": "± 11851",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7785192,
            "range": "± 153899",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4794811,
            "range": "± 157226",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 43272958,
            "range": "± 938931",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 41685569,
            "range": "± 644678",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 393479492,
            "range": "± 6374457",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 461955372,
            "range": "± 11630342",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3504826460,
            "range": "± 68979048",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3704167736,
            "range": "± 83408624",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1177472+mordamax@users.noreply.github.com",
            "name": "Maksym H",
            "username": "mordamax"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "6091330ae6d799bcf34d366acda7aff91c609ab1",
          "message": "Refactor command bot and drop rejecting non paritytech members (#7231)\n\nAims to \n- close #7049 \n- close https://github.com/paritytech/opstooling/issues/449\n- close https://github.com/paritytech/opstooling/issues/463\n\nWhat's changed:\n- removed is paritytech member check as required prerequisite to run a\ncommand\n- run the cmd.py script taking it from master, if someone who run this\nis not a member of paritytech, and from current branch, if is a member.\nThat keeps the developer experience & easy testing if paritytech members\nare contributing to cmd.py\n- isolate the cmd job from being able to access GH App token or PR\ntoken- currently the fmt/bench/prdoc are being run with limited\npermissions scope, just to generate output, which then is uploaded to\nartifacts, and then the other job which doesn't run any files from repo,\ndoes a commit/push more securely",
          "timestamp": "2025-01-23T13:30:26Z",
          "tree_id": "da45e8f46110ea08661552bbc0795a8fa2c5a8a5",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/6091330ae6d799bcf34d366acda7aff91c609ab1"
        },
        "date": 1737642022365,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 4057495,
            "range": "± 35430",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 291433,
            "range": "± 4061",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4164494,
            "range": "± 42743",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 371244,
            "range": "± 3854",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4858616,
            "range": "± 37722",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 856729,
            "range": "± 6087",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 10163459,
            "range": "± 86054",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4686957,
            "range": "± 60522",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 44341863,
            "range": "± 631508",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 38331869,
            "range": "± 585167",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 358229480,
            "range": "± 3176508",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 294473881,
            "range": "± 1803586",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2517337234,
            "range": "± 9562309",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2557234818,
            "range": "± 81415186",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2950589,
            "range": "± 21348",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1493450,
            "range": "± 8402",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 3128995,
            "range": "± 23583",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1562184,
            "range": "± 7444",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3632099,
            "range": "± 18896",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1905245,
            "range": "± 16411",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7809225,
            "range": "± 155624",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4849913,
            "range": "± 87023",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 43823212,
            "range": "± 1039899",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 44842561,
            "range": "± 829975",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 420739589,
            "range": "± 10284914",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 460406411,
            "range": "± 16067409",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3521481439,
            "range": "± 37127719",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3914669951,
            "range": "± 61707000",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1177472+mordamax@users.noreply.github.com",
            "name": "Maksym H",
            "username": "mordamax"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3a7f3c0af63b1a7566ca29c59fa4ac274bd911f1",
          "message": "Fix setting the image properly (#7315)\n\nFixed condition which sets weights/large images",
          "timestamp": "2025-01-23T16:08:32Z",
          "tree_id": "ddf15c0baa7aad24dfe8dde9c77711bbf57959c7",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/3a7f3c0af63b1a7566ca29c59fa4ac274bd911f1"
        },
        "date": 1737651562957,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3893967,
            "range": "± 81146",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 295697,
            "range": "± 5782",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4037558,
            "range": "± 24934",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 371271,
            "range": "± 6004",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4788354,
            "range": "± 42565",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 857808,
            "range": "± 9827",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9952495,
            "range": "± 167643",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4774970,
            "range": "± 100413",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 43856819,
            "range": "± 426603",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 37334335,
            "range": "± 772675",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 354230338,
            "range": "± 4337470",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 285788836,
            "range": "± 3059984",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2536058941,
            "range": "± 10057453",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2543840672,
            "range": "± 253567241",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2898039,
            "range": "± 22051",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1470755,
            "range": "± 6824",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 3026933,
            "range": "± 18266",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1531135,
            "range": "± 5379",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3574075,
            "range": "± 20665",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1890583,
            "range": "± 39466",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7823973,
            "range": "± 87508",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4795131,
            "range": "± 45847",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 42974256,
            "range": "± 562315",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 41810320,
            "range": "± 588029",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 387429148,
            "range": "± 4995058",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 442711232,
            "range": "± 6054603",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3517611403,
            "range": "± 54115253",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3655111944,
            "range": "± 126918329",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bkontur@gmail.com",
            "name": "Branislav Kontur",
            "username": "bkontur"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "23600076de203dad498d815ff4b7ed2968217c10",
          "message": "Nits for collectives-westend XCM benchmarks setup (#7215)\n\nCloses: https://github.com/paritytech/polkadot-sdk/issues/2904\n\n---------\n\nCo-authored-by: command-bot <>",
          "timestamp": "2025-01-24T12:32:19Z",
          "tree_id": "1ab71e2b09edd1f19fb9eb5b7bea0f4a189d5e9c",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/23600076de203dad498d815ff4b7ed2968217c10"
        },
        "date": 1737724816834,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3835828,
            "range": "± 18278",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 280798,
            "range": "± 5902",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4005129,
            "range": "± 53914",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 361933,
            "range": "± 3144",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4652599,
            "range": "± 56669",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 826862,
            "range": "± 13380",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9548238,
            "range": "± 56494",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4460377,
            "range": "± 39426",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 40346957,
            "range": "± 618206",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 35156148,
            "range": "± 239796",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 317655524,
            "range": "± 2240661",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 270981034,
            "range": "± 1397040",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2424374814,
            "range": "± 14715045",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2655064286,
            "range": "± 77726495",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2854660,
            "range": "± 27990",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1462507,
            "range": "± 5626",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2957564,
            "range": "± 20005",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1530569,
            "range": "± 7762",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3468592,
            "range": "± 43719",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1828511,
            "range": "± 32256",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7306491,
            "range": "± 109283",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4715663,
            "range": "± 330144",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 38615430,
            "range": "± 657191",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 36846786,
            "range": "± 394643",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 384301212,
            "range": "± 21931875",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 439654066,
            "range": "± 15883727",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3304595286,
            "range": "± 304920465",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3585167039,
            "range": "± 104329474",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "14218860+iulianbarbu@users.noreply.github.com",
            "name": "Iulian Barbu",
            "username": "iulianbarbu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "a2c63e8d8a512eca28ed24c3c58ea7609c28b9ee",
          "message": "fix(cmd bench-omni): build omni-bencher with production profile (#7299)\n\n# Description\n\nThis PR builds frame-omni-bencher with `production` profile when calling\n`/cmd bench-omni` to compute benchmarks for pallets.\nFix proposed by @bkchr , thanks!\n\nCloses #6797.\n\n## Integration\n\nN/A\n\n## Review Notes\n\nMore info on #6797, and related to how the fix was tested:\nhttps://github.com/paritytech/polkadot-sdk/issues/6797#issuecomment-2611903102.\n\n---------\n\nSigned-off-by: Iulian Barbu <iulian.barbu@parity.io>\nCo-authored-by: command-bot <>",
          "timestamp": "2025-01-24T13:29:25Z",
          "tree_id": "93aa5d24fb63b13db179ce2b696deb7f7d4f2ba1",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/a2c63e8d8a512eca28ed24c3c58ea7609c28b9ee"
        },
        "date": 1737728364623,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3772944,
            "range": "± 26929",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 279897,
            "range": "± 3445",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 3927779,
            "range": "± 30519",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 356956,
            "range": "± 4905",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4667806,
            "range": "± 28023",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 817139,
            "range": "± 6387",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9450833,
            "range": "± 53961",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4399001,
            "range": "± 17559",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 39484696,
            "range": "± 196343",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 34535406,
            "range": "± 240635",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 318367461,
            "range": "± 1829758",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 266699481,
            "range": "± 1048501",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2377698038,
            "range": "± 9027526",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2537836226,
            "range": "± 51095330",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2823328,
            "range": "± 25913",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1442671,
            "range": "± 9782",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2864737,
            "range": "± 27476",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1481862,
            "range": "± 3572",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3335092,
            "range": "± 33977",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1780831,
            "range": "± 10953",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7028277,
            "range": "± 25302",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4741703,
            "range": "± 36825",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 39486595,
            "range": "± 440347",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 36060035,
            "range": "± 313730",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 324312794,
            "range": "± 4453526",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 375206615,
            "range": "± 4982311",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3214514661,
            "range": "± 78714491",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3399510125,
            "range": "± 63802611",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bkontur@gmail.com",
            "name": "Branislav Kontur",
            "username": "bkontur"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7710483541ce273df892c77a6e300aaa2efa1dca",
          "message": "Bridges: emulated tests small nits/improvements (#7322)\n\nThis PR includes minor fixes identified during work on the larger PR:\n[https://github.com/paritytech/polkadot-sdk/issues/6906](https://github.com/paritytech/polkadot-sdk/issues/6906).\n\nSpecifically, this PR removes the use of\n`open_bridge_between_asset_hub_rococo_and_asset_hub_westend`, which is\nno longer relevant for BridgeHubs, as bridges are now created with\ngenesis settings. This function was used in the generic\n`test_dry_run_transfer_across_pk_bridge` macro, which could cause\ncompilation issues when used in other contexts (e.g. fellows repo).\n\n---------\n\nCo-authored-by: cmd[bot] <41898282+github-actions[bot]@users.noreply.github.com>",
          "timestamp": "2025-01-24T15:05:36Z",
          "tree_id": "2598c5e554465a1a38bd317b69c21942a0a9174f",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/7710483541ce273df892c77a6e300aaa2efa1dca"
        },
        "date": 1737735345279,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 4128776,
            "range": "± 31465",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 304272,
            "range": "± 5259",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4256941,
            "range": "± 20002",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 385806,
            "range": "± 7329",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4918804,
            "range": "± 39373",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 846532,
            "range": "± 9539",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 10027629,
            "range": "± 90214",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4601782,
            "range": "± 39666",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 42821642,
            "range": "± 438151",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 35840424,
            "range": "± 587818",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 339255184,
            "range": "± 1658191",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 278913699,
            "range": "± 1960851",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2503342628,
            "range": "± 16904657",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2629459644,
            "range": "± 98195985",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 3006063,
            "range": "± 27365",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1477544,
            "range": "± 5591",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 3115242,
            "range": "± 43132",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1561909,
            "range": "± 11494",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3556160,
            "range": "± 22855",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1837014,
            "range": "± 12449",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7416487,
            "range": "± 51167",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4716898,
            "range": "± 31601",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 42119142,
            "range": "± 424502",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 40582748,
            "range": "± 589665",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 401817901,
            "range": "± 2156242",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 414456501,
            "range": "± 13775246",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3480537279,
            "range": "± 54597387",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3741739031,
            "range": "± 94223076",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "14218860+iulianbarbu@users.noreply.github.com",
            "name": "Iulian Barbu",
            "username": "iulianbarbu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "ccd6337f1bfef8ff9da9020fefc25db5a6508da7",
          "message": "sync-templates: enable syncing from stable release patches (#7227)\n\n# Description\n\nWe're unable to sync templates repos with what's in\npolkadot-sdk/templates for stable2412 because the tag which references\nthe release (`polkadot-stable2412`) is missing the Plan.toml file, which\nis needed by PSVM, ran when syncing, to update the templates\ndependencies versions in Cargo.tomls. This PR adds a workflow `patch`\ninput, to enable the workflow to use PSVM with a tag corresponding to a\npatch stable release (e.g. `polkadot-stable2412-1`), which will contain\nthe `Plan.toml` file.\n\n## Integration\n\nThis enables the templates repos update with the contents of latest\nstable2412 release, in terms of polkadot-sdk/templates, which is\nrelevant for getting-started docs.\n\n## Review Notes\n\nThis PR adds a `patch` input for the `misc-sync-templates.yml` workflow,\nwhich if set will be used with `psvm` accordingly to update templates\nrepos' dependencies versions based on upcomming patch stable2412-1,\nwhich contains the `Plan.toml`. The workflow will be ran manually after\nstable2412-1 is out and this work is tracked under #6329 .\n\nSigned-off-by: Iulian Barbu <iulian.barbu@parity.io>",
          "timestamp": "2025-01-24T16:29:17Z",
          "tree_id": "adb23e6ebd52248f86ca4a252dc335d5510a50d8",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/ccd6337f1bfef8ff9da9020fefc25db5a6508da7"
        },
        "date": 1737739249958,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3892119,
            "range": "± 54017",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 290621,
            "range": "± 11154",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4026922,
            "range": "± 46295",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 364409,
            "range": "± 4534",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4704172,
            "range": "± 64862",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 828817,
            "range": "± 9176",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9717132,
            "range": "± 61096",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4500159,
            "range": "± 39846",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 41277704,
            "range": "± 331697",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 35368034,
            "range": "± 363975",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 332634777,
            "range": "± 2199893",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 275435374,
            "range": "± 2583618",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2453691500,
            "range": "± 15365129",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2715294766,
            "range": "± 57670931",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2889798,
            "range": "± 28550",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1465844,
            "range": "± 12938",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2987191,
            "range": "± 22051",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1534558,
            "range": "± 11011",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3473189,
            "range": "± 22629",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1828323,
            "range": "± 17971",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7344977,
            "range": "± 61292",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4684434,
            "range": "± 41993",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 39331191,
            "range": "± 1004025",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 37012489,
            "range": "± 308731",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 363347619,
            "range": "± 3382433",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 437163848,
            "range": "± 5675625",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3427926123,
            "range": "± 52119464",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3616654150,
            "range": "± 44958407",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pgherveou@gmail.com",
            "name": "PG Herveou",
            "username": "pgherveou"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "223bd28896cfa7ece1068c70da9f433a08da5554",
          "message": "[pallet-revive] eth-rpc minor fixes (#7325)\n\n- Add option to specify database_url using DATABASE_URL environment\nvariable\n- Add a eth-rpc-tester rust bin that can be used to test deployment\nbefore releasing eth-rpc\n- make evm_block non fallible so that it can return an Ok response for\nolder blocks when the runtime API is not available\n- update cargo.lock to integrate changes from\nhttps://github.com/paritytech/subxt/pull/1904\n\n---------\n\nCo-authored-by: cmd[bot] <41898282+github-actions[bot]@users.noreply.github.com>",
          "timestamp": "2025-01-24T16:34:15Z",
          "tree_id": "e4cb0c9a140ced6d3db9021c0ff6c4142e4d2e7a",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/223bd28896cfa7ece1068c70da9f433a08da5554"
        },
        "date": 1737741154719,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3861559,
            "range": "± 21374",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 289166,
            "range": "± 3345",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4031469,
            "range": "± 37813",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 361500,
            "range": "± 3054",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4687394,
            "range": "± 64441",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 827857,
            "range": "± 5914",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9609484,
            "range": "± 89760",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4485009,
            "range": "± 253823",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 40978859,
            "range": "± 345304",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 35353790,
            "range": "± 290814",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 328159755,
            "range": "± 2670573",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 269182995,
            "range": "± 2311939",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2377418601,
            "range": "± 22273454",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2603757816,
            "range": "± 47993409",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2860735,
            "range": "± 26267",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1428989,
            "range": "± 7589",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2921111,
            "range": "± 17321",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1487570,
            "range": "± 7618",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3369788,
            "range": "± 18022",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1798380,
            "range": "± 11009",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7172641,
            "range": "± 50430",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4610585,
            "range": "± 22335",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 36761993,
            "range": "± 591846",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 36346335,
            "range": "± 516657",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 347726499,
            "range": "± 4748645",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 380767924,
            "range": "± 7124995",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3264399058,
            "range": "± 41131183",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3510788756,
            "range": "± 75388251",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alex.theissen@me.com",
            "name": "Alexander Theißen",
            "username": "athei"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dcbea60cc7a280f37986f2f815ec3fcff4758be5",
          "message": "revive: Fix compilation of `uapi` crate when `unstable-hostfn` is not set (#7318)\n\nThis regression was introduced with some of the recent PRs. Regression\nfixed and test added.\n\n---------\n\nCo-authored-by: cmd[bot] <41898282+github-actions[bot]@users.noreply.github.com>",
          "timestamp": "2025-01-24T18:20:09Z",
          "tree_id": "4394d8c652cb545eeade1843252669d35df034aa",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/dcbea60cc7a280f37986f2f815ec3fcff4758be5"
        },
        "date": 1737745755608,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3927922,
            "range": "± 28534",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 285170,
            "range": "± 1963",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4042333,
            "range": "± 25284",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 364758,
            "range": "± 4676",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4769473,
            "range": "± 69114",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 847365,
            "range": "± 8997",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9808750,
            "range": "± 130821",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4606879,
            "range": "± 83416",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 44026801,
            "range": "± 600635",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 38042521,
            "range": "± 508242",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 358329088,
            "range": "± 3915335",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 292138857,
            "range": "± 1454125",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2497123516,
            "range": "± 11148268",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2546560885,
            "range": "± 97558823",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2860352,
            "range": "± 14588",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1466719,
            "range": "± 10786",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2954324,
            "range": "± 18268",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1528064,
            "range": "± 13524",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3502028,
            "range": "± 28382",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1872659,
            "range": "± 25243",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7829140,
            "range": "± 154441",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4745867,
            "range": "± 65902",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 43660902,
            "range": "± 1140230",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 43131563,
            "range": "± 1204910",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 381391986,
            "range": "± 4103878",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 443622979,
            "range": "± 6684128",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3509408315,
            "range": "± 41538701",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3669696553,
            "range": "± 49107837",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gui.thiolliere@gmail.com",
            "name": "Guillaume Thiolliere",
            "username": "gui1117"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "682f8cd22f5bcb76d1b98820b62be49d11deae10",
          "message": "`set_validation_data` register weight manually, do not use refund when the pre dispatch is zero. (#7327)\n\nRelated https://github.com/paritytech/polkadot-sdk/issues/6772\n\nFor an extrinsic, in the post dispatch info, the actual weight is only\nused to reclaim unused weight. If the actual weight is more than the pre\ndispatch weight, then the extrinsic is using the minimum, e.g., the\nweight used registered in pre dispatch.\n\nIn parachain-system pallet one call is `set_validation_data`. This call\nis returning an actual weight, but the pre-dispatch weight is 0.\n\nThis PR fix the disregard of actual weight of `set_validation_data` by\nregistering it manually.",
          "timestamp": "2025-01-25T03:04:45Z",
          "tree_id": "6ae4f129204d616ae2ed51523c5be5354ef1f203",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/682f8cd22f5bcb76d1b98820b62be49d11deae10"
        },
        "date": 1737777356698,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3784473,
            "range": "± 46035",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 272492,
            "range": "± 4479",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 3891541,
            "range": "± 32966",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 345473,
            "range": "± 3136",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4552982,
            "range": "± 28911",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 808080,
            "range": "± 6794",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9273837,
            "range": "± 44632",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4271388,
            "range": "± 186049",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 40400501,
            "range": "± 257429",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 34526620,
            "range": "± 179170",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 308280046,
            "range": "± 2127455",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 262773819,
            "range": "± 973734",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2338285573,
            "range": "± 3703959",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2560443415,
            "range": "± 98637083",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2764103,
            "range": "± 7784",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1410626,
            "range": "± 4832",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2886019,
            "range": "± 56616",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1484475,
            "range": "± 11206",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3319476,
            "range": "± 36432",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1761095,
            "range": "± 12894",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7190795,
            "range": "± 43900",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4588506,
            "range": "± 54653",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 37956433,
            "range": "± 321139",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 36552920,
            "range": "± 612071",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 345314090,
            "range": "± 3246376",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 374374407,
            "range": "± 4301453",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3139060167,
            "range": "± 13267060",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3573570745,
            "range": "± 41383794",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bkontur@gmail.com",
            "name": "Branislav Kontur",
            "username": "bkontur"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c95e49c4c9848c42d5cbfd261de0d22eec9c2bf6",
          "message": "Removed unused dependencies (partial progress) (#7329)\n\nPart of: https://github.com/paritytech/polkadot-sdk/issues/6906",
          "timestamp": "2025-01-26T21:18:43Z",
          "tree_id": "943db5ce05aa4d97b3c5e7ea5869fcacd90d22cd",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/c95e49c4c9848c42d5cbfd261de0d22eec9c2bf6"
        },
        "date": 1737929293027,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3919752,
            "range": "± 49189",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 280101,
            "range": "± 3198",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 3983911,
            "range": "± 36953",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 359116,
            "range": "± 3890",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4678385,
            "range": "± 77840",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 822950,
            "range": "± 69411",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9559938,
            "range": "± 68736",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4395628,
            "range": "± 25420",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 40325515,
            "range": "± 436644",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 33852860,
            "range": "± 377542",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 316271953,
            "range": "± 1759294",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 265696703,
            "range": "± 1829900",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2378080030,
            "range": "± 11473007",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2538804901,
            "range": "± 43060319",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2770374,
            "range": "± 14137",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1416043,
            "range": "± 4369",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2864819,
            "range": "± 37157",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1474195,
            "range": "± 13650",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3303583,
            "range": "± 18209",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1754104,
            "range": "± 12474",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7082311,
            "range": "± 45447",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4539499,
            "range": "± 15745",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 37443406,
            "range": "± 430209",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 35575547,
            "range": "± 358610",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 338749116,
            "range": "± 3483754",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 384299049,
            "range": "± 7200873",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3132091659,
            "range": "± 40152414",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3507482037,
            "range": "± 75183231",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dmitry@markin.tech",
            "name": "Dmitry Markin",
            "username": "dmitry-markin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "ee30ec723ee22e247014217e48513a2e7690c953",
          "message": "[sync] Let new subscribers know about already connected peers (backward-compatible) (#7344)\n\nRevert https://github.com/paritytech/polkadot-sdk/pull/7011 and replace\nit with a backward-compatible solution suitable for backporting to a\nrelease branch.\n\n### Review notes\nIt's easier to review this PR per commit: the first commit is just a\nrevert, so it's enough to review only the second one, which is almost a\none-liner.\n\n---------\n\nCo-authored-by: cmd[bot] <41898282+github-actions[bot]@users.noreply.github.com>",
          "timestamp": "2025-01-27T12:29:49Z",
          "tree_id": "baef02a556e3f6c8de2d365edc34fca484ab88c1",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/ee30ec723ee22e247014217e48513a2e7690c953"
        },
        "date": 1737984520726,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3852689,
            "range": "± 51286",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 274869,
            "range": "± 2610",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 3975913,
            "range": "± 20489",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 352019,
            "range": "± 4713",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4607511,
            "range": "± 26081",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 813523,
            "range": "± 11367",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9217928,
            "range": "± 76795",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4307541,
            "range": "± 169343",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 39085163,
            "range": "± 231530",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 33205901,
            "range": "± 330907",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 296954060,
            "range": "± 2317878",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 262203933,
            "range": "± 1108642",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2352486072,
            "range": "± 8913784",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2139623497,
            "range": "± 18743837",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2762419,
            "range": "± 6416",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1444526,
            "range": "± 7328",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2859663,
            "range": "± 43647",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1499559,
            "range": "± 12101",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3357280,
            "range": "± 27064",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1780982,
            "range": "± 10722",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7256129,
            "range": "± 176290",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4594364,
            "range": "± 54533",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 37786921,
            "range": "± 516240",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 35778822,
            "range": "± 362132",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 337085606,
            "range": "± 3231597",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 383871706,
            "range": "± 9775222",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3134251397,
            "range": "± 40553734",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3480118729,
            "range": "± 73772831",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "30932534+EleisonC@users.noreply.github.com",
            "name": "christopher k",
            "username": "EleisonC"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d85147d013e112feae5000816932d0543aee95da",
          "message": "Add development chain-spec file for minimal/parachain templates for Omni Node compatibility (#6529)\n\n# Description\n\nThis PR adds development chain specs for the minimal and parachain\ntemplates.\n[#6334](https://github.com/paritytech/polkadot-sdk/issues/6334)\n\n\n## Integration\n\nThis PR adds development chain specs for the minimal and para chain\ntemplate runtimes, ensuring synchronization with runtime code. It\nupdates zombienet-omni-node.toml, zombinet.toml files to include valid\nchain spec paths, simplifying configuration for zombienet in the\nparachain and minimal template.\n\n## Review Notes\n\n1. Overview of Changes:\n- Added development chain specs for use in the minimal and parachain\ntemplate.\n- Updated zombienet-omni-node.toml and zombinet.toml files in the\nminimal and parachain templates to include paths to the new dev chain\nspecs.\n\n2. Integration Guidance:\n**NB: Follow the templates' READMEs from the polkadot-SDK master branch.\nPlease build the binaries and runtimes based on the polkadot-SDK master\nbranch.**\n- Ensure you have set up your runtimes `parachain-template-runtime` and\n`minimal-template-runtime`\n- Ensure you have installed the nodes required ie\n`parachain-template-node` and `minimal-template-node`\n- Set up [Zombinet](https://paritytech.github.io/zombienet/intro.html)\n- For running the parachains, you will need to install the polkadot\n`cargo install --path polkadot` remember from the polkadot-SDK master\nbranch.\n- Inside the template folders minimal or parachain, run the command to\nstart with `Zombienet with Omni Node`, `Zombienet with\nminimal-template-node` or `Zombienet with parachain-template-node`\n\n*Include your leftover TODOs, if any, here.*\n* [ ] Test the syncing of chain specs with runtime's code.\n\n---------\n\nSigned-off-by: EleisonC <ckalule7@gmail.com>\nCo-authored-by: Iulian Barbu <14218860+iulianbarbu@users.noreply.github.com>\nCo-authored-by: Alexander Samusev <41779041+alvicsam@users.noreply.github.com>",
          "timestamp": "2025-01-27T13:01:49Z",
          "tree_id": "bb0c4f4d2dc63c5625bb9d9f83eb433b8841ccfd",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/d85147d013e112feae5000816932d0543aee95da"
        },
        "date": 1737986880020,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3898137,
            "range": "± 28656",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 289166,
            "range": "± 4702",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4036043,
            "range": "± 43248",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 362282,
            "range": "± 3856",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4732134,
            "range": "± 26824",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 825140,
            "range": "± 5937",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9536877,
            "range": "± 110448",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4479206,
            "range": "± 25764",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 40910896,
            "range": "± 433821",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 35344639,
            "range": "± 464272",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 326313989,
            "range": "± 2574186",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 271498268,
            "range": "± 1038156",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2409864513,
            "range": "± 10528143",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2605723440,
            "range": "± 60697443",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2842100,
            "range": "± 17635",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1453274,
            "range": "± 11646",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2914556,
            "range": "± 11911",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1509815,
            "range": "± 8060",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3401835,
            "range": "± 11988",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1808521,
            "range": "± 9084",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7303200,
            "range": "± 68447",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4670017,
            "range": "± 23721",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 38669222,
            "range": "± 594847",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 37484970,
            "range": "± 762697",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 356583863,
            "range": "± 3086188",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 428217459,
            "range": "± 6326993",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3241403853,
            "range": "± 16111732",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3501521446,
            "range": "± 52904063",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ludovic.domingues96@gmail.com",
            "name": "Ludovic_Domingues",
            "username": "Krayt78"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "db3ff60b5af2a9017cb968a4727835f3d00340f0",
          "message": "Migrating polkadot-runtime-common slots benchmarking to v2 (#6614)\n\n#Description\nMigrated polkadot-runtime-parachains slots benchmarking to the new\nbenchmarking syntax v2.\nThis is part of #6202\n\n---------\n\nCo-authored-by: Giuseppe Re <giuseppe.re@parity.io>\nCo-authored-by: seemantaggarwal <32275622+seemantaggarwal@users.noreply.github.com>\nCo-authored-by: Bastian Köcher <git@kchr.de>",
          "timestamp": "2025-01-27T14:37:00Z",
          "tree_id": "030b3f496c64e746f2206b1a93b3c9c7355e9d32",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/db3ff60b5af2a9017cb968a4727835f3d00340f0"
        },
        "date": 1737991932001,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3884222,
            "range": "± 21346",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 284053,
            "range": "± 3589",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 3997504,
            "range": "± 19628",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 361655,
            "range": "± 2740",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4695330,
            "range": "± 39580",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 849156,
            "range": "± 49753",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9677893,
            "range": "± 108911",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4615852,
            "range": "± 40834",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 42721160,
            "range": "± 591072",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 37390526,
            "range": "± 498421",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 353606458,
            "range": "± 4891988",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 288330225,
            "range": "± 1894229",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2465449205,
            "range": "± 11561527",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2502490663,
            "range": "± 115845020",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2813676,
            "range": "± 20045",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1466708,
            "range": "± 9110",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2944826,
            "range": "± 7983",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1521607,
            "range": "± 17803",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3458913,
            "range": "± 46436",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1867440,
            "range": "± 9231",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7700203,
            "range": "± 99594",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4784897,
            "range": "± 90846",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 43518764,
            "range": "± 627454",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 42188243,
            "range": "± 1230369",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 373529204,
            "range": "± 4312164",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 418560726,
            "range": "± 5558776",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3356900059,
            "range": "± 20463187",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3742358934,
            "range": "± 71449091",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yrong1997@gmail.com",
            "name": "Ron",
            "username": "yrong"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b30aa3193048d6bbdf21408bd0cc4503010fe3f8",
          "message": "xcm: fix for DenyThenTry Barrier (#7169)\n\nResolves (partially):\nhttps://github.com/paritytech/polkadot-sdk/issues/7148 (see _Problem 1 -\n`ShouldExecute` tuple implementation and `Deny` filter tuple_)\n\nThis PR changes the behavior of `DenyThenTry` from the pattern\n`DenyIfAllMatch` to `DenyIfAnyMatch` for the tuple.\n\nI would expect the latter is the right behavior so make the fix in\nplace, but we can also add a dedicated Impl with the legacy one\nuntouched.\n\n## TODO\n- [x] add unit-test for `DenyReserveTransferToRelayChain`\n- [x] add test and investigate/check `DenyThenTry` as discussed\n[here](https://github.com/paritytech/polkadot-sdk/pull/6838#discussion_r1914553990)\nand update documentation if needed\n\n---------\n\nCo-authored-by: Branislav Kontur <bkontur@gmail.com>\nCo-authored-by: Francisco Aguirre <franciscoaguirreperez@gmail.com>\nCo-authored-by: command-bot <>\nCo-authored-by: Clara van Staden <claravanstaden64@gmail.com>\nCo-authored-by: Adrian Catangiu <adrian@parity.io>",
          "timestamp": "2025-01-27T17:31:05Z",
          "tree_id": "7fa236a2b3152a85bc32cfbff3e0d953f468640f",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/b30aa3193048d6bbdf21408bd0cc4503010fe3f8"
        },
        "date": 1738002136228,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 4046533,
            "range": "± 31177",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 291341,
            "range": "± 5013",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4154494,
            "range": "± 63069",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 374200,
            "range": "± 7361",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4887553,
            "range": "± 30669",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 845751,
            "range": "± 5478",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 10083626,
            "range": "± 159994",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4569908,
            "range": "± 52539",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 43354233,
            "range": "± 739396",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 36353221,
            "range": "± 319264",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 340485577,
            "range": "± 5826097",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 278056133,
            "range": "± 2114109",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2487226074,
            "range": "± 21692899",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2656989338,
            "range": "± 106078467",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2958131,
            "range": "± 20209",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1475367,
            "range": "± 10309",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 3008513,
            "range": "± 28178",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1545362,
            "range": "± 10534",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3570902,
            "range": "± 32111",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1841865,
            "range": "± 23348",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7522334,
            "range": "± 44598",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4728582,
            "range": "± 133440",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 40427150,
            "range": "± 649617",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 38215962,
            "range": "± 691416",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 370483811,
            "range": "± 5339499",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 434377005,
            "range": "± 6451612",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3361529579,
            "range": "± 20090401",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3590952941,
            "range": "± 56884516",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alin@parity.io",
            "name": "Alin Dima",
            "username": "alindima"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "e6aad5b010e630dbac7d86873fef45580630b406",
          "message": "cumulus: bump PARENT_SEARCH_DEPTH and add test for 12-core elastic scaling (#6983)\n\nOn top of https://github.com/paritytech/polkadot-sdk/pull/6757\n\nFixes https://github.com/paritytech/polkadot-sdk/issues/6858 by bumping\nthe `PARENT_SEARCH_DEPTH` constant to a larger value (30) and adds a\nzombienet-sdk test that exercises the 12-core scenario.\n\nThis is a node-side limit that restricts the number of allowed pending\navailability candidates when choosing the parent parablock during\nauthoring.\nThis limit is rather redundant, as the parachain runtime already\nrestricts the unincluded segment length to the configured value in the\n[FixedVelocityConsensusHook](https://github.com/paritytech/polkadot-sdk/blob/88d900afbff7ebe600dfe5e3ee9f87fe52c93d1f/cumulus/pallets/aura-ext/src/consensus_hook.rs#L35)\n(which ideally should be equal to this `PARENT_SEARCH_DEPTH`).\n\nFor 12 cores, a value of 24 should be enough, but I bumped it to 30 to\nhave some extra buffer.\n\nThere are two other potential ways of fixing this:\n- remove this constant altogether, as the parachain runtime already\nmakes those guarantees. Chose not to do this, as it can't hurt to have\nan extra safeguard\n- set this value to be equal to the uninlcuded segment size. This value\nhowever is not exposed to the node-side and would require a new runtime\nAPI, which seems overkill for a redundant check.\n\n---------\n\nCo-authored-by: Javier Viola <javier@parity.io>",
          "timestamp": "2025-01-28T08:32:00Z",
          "tree_id": "04f7690e702bfca2ab234b18b2575a391c81bc75",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/e6aad5b010e630dbac7d86873fef45580630b406"
        },
        "date": 1738056962686,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3993686,
            "range": "± 45890",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 292174,
            "range": "± 4079",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4182681,
            "range": "± 56920",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 377901,
            "range": "± 7817",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4884869,
            "range": "± 38260",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 859518,
            "range": "± 10416",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9901437,
            "range": "± 176261",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4670466,
            "range": "± 60608",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 43813894,
            "range": "± 409770",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 37012296,
            "range": "± 202780",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 347971672,
            "range": "± 3139556",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 286095978,
            "range": "± 2885423",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2503466597,
            "range": "± 20084281",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2540274525,
            "range": "± 90817381",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2980481,
            "range": "± 20513",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1484797,
            "range": "± 8259",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 3097966,
            "range": "± 259784",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1549618,
            "range": "± 5094",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3589557,
            "range": "± 63304",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1872652,
            "range": "± 8210",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7625773,
            "range": "± 120384",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4819568,
            "range": "± 55541",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 43253363,
            "range": "± 890637",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 43356196,
            "range": "± 977888",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 392709898,
            "range": "± 5395188",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 447580686,
            "range": "± 6105576",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3568360707,
            "range": "± 49386682",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3713811577,
            "range": "± 57225363",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cyrill@parity.io",
            "name": "xermicus",
            "username": "xermicus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4302f74f7874e6a894578731142a7b310a1449b0",
          "message": "[pallet-revive] pack exceeding syscall arguments into registers (#7319)\n\nThis PR changes how we call runtime API methods with more than 6\narguments: They are no longer spilled to the stack but packed into\nregisters instead. Pointers are 32 bit wide so we can pack two of them\ninto a single 64 bit register. Since we mostly pass pointers, this\ntechnique effectively increases the number of arguments we can pass\nusing the available registers.\n\nTo make this work for `instantiate` too we now pass the code hash and\nthe call data in the same buffer, akin to how the `create` family\nopcodes work in the EVM. The code hash is fixed in size, implying the\nstart of the constructor call data.\n\n---------\n\nSigned-off-by: xermicus <cyrill@parity.io>\nSigned-off-by: Cyrill Leutwiler <bigcyrill@hotmail.com>\nCo-authored-by: command-bot <>\nCo-authored-by: cmd[bot] <41898282+github-actions[bot]@users.noreply.github.com>\nCo-authored-by: Alexander Theißen <alex.theissen@me.com>",
          "timestamp": "2025-01-28T09:03:21Z",
          "tree_id": "f6c41a646675532e87a6cd6ee428fe7a14feb512",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/4302f74f7874e6a894578731142a7b310a1449b0"
        },
        "date": 1738058044588,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3866059,
            "range": "± 40827",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 279477,
            "range": "± 4369",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 3989110,
            "range": "± 37904",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 367552,
            "range": "± 3507",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4733258,
            "range": "± 61339",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 837410,
            "range": "± 13274",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9716920,
            "range": "± 84146",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4482242,
            "range": "± 45107",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 41548910,
            "range": "± 518938",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 35509958,
            "range": "± 281465",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 316718010,
            "range": "± 2208333",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 270287390,
            "range": "± 1380455",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2386556390,
            "range": "± 7244179",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2615394057,
            "range": "± 36322602",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2809474,
            "range": "± 28287",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1421882,
            "range": "± 6215",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2892058,
            "range": "± 108286",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1492791,
            "range": "± 8091",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3399642,
            "range": "± 18536",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1795780,
            "range": "± 12639",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7340380,
            "range": "± 66337",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4651184,
            "range": "± 31418",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 38440475,
            "range": "± 1545438",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 36815984,
            "range": "± 282336",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 351057714,
            "range": "± 2069983",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 417155317,
            "range": "± 5808968",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3256864051,
            "range": "± 45879271",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3682262559,
            "range": "± 60264397",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ascjones@gmail.com",
            "name": "Andrew Jones",
            "username": "ascjones"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0b8d744109a3c29d97a28e768a027e3438c8a69a",
          "message": "Implement pallet view function queries (#4722)\n\nCloses #216.\n\nThis PR allows pallets to define a `view_functions` impl like so:\n\n```rust\n#[pallet::view_functions]\nimpl<T: Config> Pallet<T>\nwhere\n\tT::AccountId: From<SomeType1> + SomeAssociation1,\n{\n\t/// Query value no args.\n\tpub fn get_value() -> Option<u32> {\n\t\tSomeValue::<T>::get()\n\t}\n\n\t/// Query value with args.\n\tpub fn get_value_with_arg(key: u32) -> Option<u32> {\n\t\tSomeMap::<T>::get(key)\n\t}\n}\n```\n### `QueryId`\n\nEach view function is uniquely identified by a `QueryId`, which for this\nimplementation is generated by:\n\n```twox_128(pallet_name) ++ twox_128(\"fn_name(fnarg_types) -> return_ty\")```\n\nThe prefix `twox_128(pallet_name)` is the same as the storage prefix for pallets and take into account multiple instances of the same pallet.\n\nThe suffix is generated from the fn type signature so is guaranteed to be unique for that pallet impl. For one of the view fns in the example above it would be `twox_128(\"get_value_with_arg(u32) -> Option<u32>\")`. It is a known limitation that only the type names themselves are taken into account: in the case of type aliases the signature may have the same underlying types but a different id; for generics the concrete types may be different but the signatures will remain the same.\n\nThe existing Runtime `Call` dispatchables are addressed by their concatenated indices `pallet_index ++ call_index`, and the dispatching is handled by the SCALE decoding of the `RuntimeCallEnum::PalletVariant(PalletCallEnum::dispatchable_variant(payload))`. For `view_functions` the runtime/pallet generated enum structure is replaced by implementing the `DispatchQuery` trait on the outer (runtime) scope, dispatching to a pallet based on the id prefix, and the inner (pallet) scope dispatching to the specific function based on the id suffix.\n\nFuture implementations could also modify/extend this scheme and routing to pallet agnostic queries.\n\n### Executing externally\n\nThese view functions can be executed externally via the system runtime api:\n\n```rust\npub trait ViewFunctionsApi<QueryId, Query, QueryResult, Error> where\n\tQueryId: codec::Codec,\n\tQuery: codec::Codec,\n\tQueryResult: codec::Codec,\n\tError: codec::Codec,\n{\n\t/// Execute a view function query.\nfn execute_query(query_id: QueryId, query: Query) -> Result<QueryResult,\nError>;\n}\n```\n### `XCQ`\nCurrently there is work going on by @xlc to implement [`XCQ`](https://github.com/open-web3-stack/XCQ/) which may eventually supersede this work.\n\nIt may be that we still need the fixed function local query dispatching in addition to XCQ, in the same way that we have chain specific runtime dispatchables and XCM.\n\nI have kept this in mind and the high level query API is agnostic to the underlying query dispatch and execution. I am just providing the implementation for the `view_function` definition.\n\n### Metadata\nCurrently I am utilizing the `custom` section of the frame metadata, to avoid modifying the official metadata format until this is standardized.\n\n### vs `runtime_api`\nThere are similarities with `runtime_apis`, some differences being:\n- queries can be defined directly on pallets, so no need for boilerplate declarations and implementations\n- no versioning, the `QueryId` will change if the signature changes. \n- possibility for queries to be executed from smart contracts (see below)\n\n### Calling from contracts\nFuture work would be to add `weight` annotations to the view function queries, and a host function to `pallet_contracts` to allow executing these queries from contracts.\n\n### TODO\n\n- [x] Consistent naming (view functions pallet impl, queries, high level api?)\n- [ ] End to end tests via `runtime_api`\n- [ ] UI tests\n- [x] Mertadata tests\n- [ ] Docs\n\n---------\n\nCo-authored-by: kianenigma <kian@parity.io>\nCo-authored-by: James Wilson <james@jsdw.me>\nCo-authored-by: Giuseppe Re <giuseppe.re@parity.io>\nCo-authored-by: Guillaume Thiolliere <guillaume.thiolliere@parity.io>",
          "timestamp": "2025-01-28T11:52:43Z",
          "tree_id": "8ea2b6aefaeb17d6c3f8fd7ddb6062f79faf963e",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/0b8d744109a3c29d97a28e768a027e3438c8a69a"
        },
        "date": 1738069498339,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3978473,
            "range": "± 50988",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 289486,
            "range": "± 9389",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4115843,
            "range": "± 17533",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 371295,
            "range": "± 5297",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4825874,
            "range": "± 35169",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 849425,
            "range": "± 13003",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 10006192,
            "range": "± 80838",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4578455,
            "range": "± 27274",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 42537107,
            "range": "± 508219",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 35640836,
            "range": "± 376439",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 337253108,
            "range": "± 2962152",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 280619237,
            "range": "± 2445557",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2489764289,
            "range": "± 16742770",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2798016899,
            "range": "± 102363355",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2871779,
            "range": "± 20093",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1447487,
            "range": "± 4220",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2889180,
            "range": "± 12773",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1493268,
            "range": "± 5338",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3398916,
            "range": "± 11476",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1799819,
            "range": "± 9119",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7237051,
            "range": "± 32175",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4634437,
            "range": "± 35051",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 39175113,
            "range": "± 468806",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 39301543,
            "range": "± 587351",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 376354307,
            "range": "± 3587236",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 420169068,
            "range": "± 8645658",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3256180654,
            "range": "± 24981249",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3597970894,
            "range": "± 95939179",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dmitry@markin.tech",
            "name": "Dmitry Markin",
            "username": "dmitry-markin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "758db43c524605bd81c39777de6c402ee5e0a5e3",
          "message": "[net/libp2p] Use raw `Identify` observed addresses to discover external addresses (#7338)\n\nInstead of using libp2p-provided external address candidates,\nsusceptible to address translation issues, use litep2p-backend approach\nbased on confirming addresses observed by multiple peers as external.\n\nFixes https://github.com/paritytech/polkadot-sdk/issues/7207.\n\n---------\n\nCo-authored-by: cmd[bot] <41898282+github-actions[bot]@users.noreply.github.com>",
          "timestamp": "2025-01-28T15:01:36Z",
          "tree_id": "52e0ef38f16211c70bc3826722aff7b7754ec0b7",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/758db43c524605bd81c39777de6c402ee5e0a5e3"
        },
        "date": 1738079527774,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3817969,
            "range": "± 26418",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 276969,
            "range": "± 2147",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 3961776,
            "range": "± 47903",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 361734,
            "range": "± 3799",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4637131,
            "range": "± 23459",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 816763,
            "range": "± 7105",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9548042,
            "range": "± 44732",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4441091,
            "range": "± 43292",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 40774026,
            "range": "± 644175",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 34728433,
            "range": "± 126806",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 320520640,
            "range": "± 3053023",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 267414412,
            "range": "± 1496131",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2403107530,
            "range": "± 12015197",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2547658626,
            "range": "± 63424853",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2839575,
            "range": "± 9809",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1446554,
            "range": "± 6644",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2912938,
            "range": "± 16312",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1504704,
            "range": "± 6320",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3396553,
            "range": "± 15075",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1808956,
            "range": "± 3357",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7150412,
            "range": "± 45824",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4647490,
            "range": "± 26932",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 38343768,
            "range": "± 316274",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 36170549,
            "range": "± 431174",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 339406026,
            "range": "± 4190196",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 370737449,
            "range": "± 6175264",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3124854508,
            "range": "± 24153935",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3542260774,
            "range": "± 64892125",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "41779041+alvicsam@users.noreply.github.com",
            "name": "Alexander Samusev",
            "username": "alvicsam"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0dcb580e3012c2ee61a91390c5f69451a096a820",
          "message": "ci: fix workflow permissions (#7366)\n\ncc https://github.com/paritytech/ci_cd/issues/1101",
          "timestamp": "2025-01-28T17:12:18Z",
          "tree_id": "ffb6f41b530b33a3d146c91f5a7c8236c521324c",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/0dcb580e3012c2ee61a91390c5f69451a096a820"
        },
        "date": 1738087333028,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3876926,
            "range": "± 28249",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 281216,
            "range": "± 4773",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 3984865,
            "range": "± 20958",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 362389,
            "range": "± 5768",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4652019,
            "range": "± 20080",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 821689,
            "range": "± 31385",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9625004,
            "range": "± 75623",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4468214,
            "range": "± 31205",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 40995239,
            "range": "± 559001",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 35774125,
            "range": "± 232276",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 335486483,
            "range": "± 2009033",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 279838062,
            "range": "± 1268369",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2447653033,
            "range": "± 12312500",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2487159479,
            "range": "± 66909190",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2897134,
            "range": "± 11827",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1472868,
            "range": "± 9962",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2964637,
            "range": "± 10313",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1537588,
            "range": "± 14313",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3493051,
            "range": "± 37440",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1839827,
            "range": "± 8032",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7490534,
            "range": "± 75023",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4739372,
            "range": "± 53333",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 39957497,
            "range": "± 632697",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 38005406,
            "range": "± 404615",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 363905504,
            "range": "± 3952042",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 419598385,
            "range": "± 7495934",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3408405396,
            "range": "± 44154258",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3727662475,
            "range": "± 105096201",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1177472+mordamax@users.noreply.github.com",
            "name": "Maksym H",
            "username": "mordamax"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9ab00b15b2e98d008822fe6addaaad148f513bea",
          "message": "remove old bench & revert the frame-weight-template (#7362)\n\n- remove old bench from cmd.py and left alias for backward compatibility\n- reverted the frame-wight-template as the problem was that it umbrella\ntemplate wasn't picked correctly in the old benchmarks, in\nframe-omni-bench it correctly identifies the dependencies and uses\ncorrect template\n\n---------\n\nCo-authored-by: cmd[bot] <41898282+github-actions[bot]@users.noreply.github.com>",
          "timestamp": "2025-01-28T19:32:46Z",
          "tree_id": "32c65a77194bfad2b966d1d9371feba6b395693c",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/9ab00b15b2e98d008822fe6addaaad148f513bea"
        },
        "date": 1738096010677,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 4679143,
            "range": "± 111338",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 337272,
            "range": "± 13596",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4771992,
            "range": "± 61020",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 420753,
            "range": "± 7669",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 5755851,
            "range": "± 103549",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 972712,
            "range": "± 18467",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 11795350,
            "range": "± 318695",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 5431553,
            "range": "± 126671",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 54509101,
            "range": "± 2172698",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 43683618,
            "range": "± 837387",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 404634692,
            "range": "± 6469666",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 327256140,
            "range": "± 3525646",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2837937553,
            "range": "± 37446158",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2957736016,
            "range": "± 175656951",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 3664443,
            "range": "± 136303",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1642862,
            "range": "± 32036",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 3659913,
            "range": "± 105969",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1735204,
            "range": "± 41462",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 4304255,
            "range": "± 134885",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 2063849,
            "range": "± 22447",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 9159570,
            "range": "± 85420",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 5790209,
            "range": "± 369840",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 48950147,
            "range": "± 1582112",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 49295289,
            "range": "± 988649",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 506850191,
            "range": "± 11279451",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 502481349,
            "range": "± 9799808",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 4246433096,
            "range": "± 130199235",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 4384726612,
            "range": "± 126186620",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "v@lery.dev",
            "name": "Valery Gantchev",
            "username": "vgantchev"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f373af0d1c1e296c1b07486dd74710b40089250e",
          "message": "Use checked math in frame-balances named_reserve (#7365)\n\nThis PR modifies `named_reserve()` in frame-balances to use checked math\ninstead of defensive saturating math.\n\nThe use of saturating math relies on the assumption that the sum of the\nvalues will always fit in `u128::MAX`. However, there is nothing\npreventing the implementing pallet from passing a larger value which\noverflows. This can happen if the implementing pallet does not validate\nuser input and instead relies on `named_reserve()` to return an error\n(this saves an additional read)\n\nThis is not a security concern, as the method will subsequently return\nan error thanks to `<Self as ReservableCurrency<_>>::reserve(who,\nvalue)?;`. However, the `defensive_saturating_add` will panic in\n`--all-features`, creating false positive crashes in fuzzing operations.\n\n---------\n\nCo-authored-by: cmd[bot] <41898282+github-actions[bot]@users.noreply.github.com>",
          "timestamp": "2025-01-29T09:11:04Z",
          "tree_id": "9f39b6fef5a83298029fc92ace7de587549fff02",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/f373af0d1c1e296c1b07486dd74710b40089250e"
        },
        "date": 1738145031534,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 4181580,
            "range": "± 47481",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 301483,
            "range": "± 5703",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4309102,
            "range": "± 39360",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 387226,
            "range": "± 4542",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4999047,
            "range": "± 53610",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 879039,
            "range": "± 14646",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 10464840,
            "range": "± 226827",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4728544,
            "range": "± 66765",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 45789610,
            "range": "± 756286",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 38329222,
            "range": "± 475952",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 368207106,
            "range": "± 3700643",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 299287344,
            "range": "± 1834105",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2594453722,
            "range": "± 33302204",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2700046867,
            "range": "± 184501586",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 3259607,
            "range": "± 34321",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1521477,
            "range": "± 6921",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 3297257,
            "range": "± 45110",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1600958,
            "range": "± 12086",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3855501,
            "range": "± 36991",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1925247,
            "range": "± 10311",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 8148473,
            "range": "± 117866",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 5017303,
            "range": "± 38074",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 44817763,
            "range": "± 733397",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 43512533,
            "range": "± 707743",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 416649769,
            "range": "± 5794748",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 470793291,
            "range": "± 12183465",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3611978720,
            "range": "± 61671189",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3986792409,
            "range": "± 79065145",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ludovic.domingues96@gmail.com",
            "name": "Ludovic_Domingues",
            "username": "Krayt78"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "57f0b95978a0eed283cc894724a4ba1c5d4ca258",
          "message": "Migrating cumulus-pallet-session-benchmarking to Benchmarking V2  (#6564)\n\n# Description\n\nMigrating cumulus-pallet-session-benchmarking to the new benchmarking\nsyntax v2.\nThis is a part of #6202\n\n---------\n\nCo-authored-by: seemantaggarwal <32275622+seemantaggarwal@users.noreply.github.com>\nCo-authored-by: Bastian Köcher <git@kchr.de>",
          "timestamp": "2025-01-29T11:13:56Z",
          "tree_id": "a9541d14e5745408a36a5cf4acedc08ab3370a9f",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/57f0b95978a0eed283cc894724a4ba1c5d4ca258"
        },
        "date": 1738152546400,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 4037725,
            "range": "± 35788",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 294543,
            "range": "± 4089",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4184007,
            "range": "± 49011",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 372592,
            "range": "± 7046",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 5035804,
            "range": "± 83260",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 912530,
            "range": "± 90782",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 10163632,
            "range": "± 107769",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4947701,
            "range": "± 94531",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 46771130,
            "range": "± 1645134",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 38224482,
            "range": "± 828628",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 350809820,
            "range": "± 3202927",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 290543736,
            "range": "± 3338836",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2516025692,
            "range": "± 8852251",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2571478568,
            "range": "± 162078409",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2921148,
            "range": "± 35093",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1470393,
            "range": "± 8775",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 3035142,
            "range": "± 21513",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1556535,
            "range": "± 11148",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3613683,
            "range": "± 45723",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1896319,
            "range": "± 14061",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 8280072,
            "range": "± 142840",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 5056818,
            "range": "± 242151",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 44601219,
            "range": "± 1258975",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 43271105,
            "range": "± 821191",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 398447815,
            "range": "± 5806449",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 460103528,
            "range": "± 17259456",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3738794600,
            "range": "± 41611119",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 4035600136,
            "range": "± 52934766",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bkontur@gmail.com",
            "name": "Branislav Kontur",
            "username": "bkontur"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ada12be652a4fa8f60fc54e8cfe9ca81e09ad28b",
          "message": "Bridges small nits/improvements (#7383)\n\nThis PR contains small fixes and backwards compatibility issues\nidentified during work on the larger PR:\nhttps://github.com/paritytech/polkadot-sdk/issues/6906.\n\n---------\n\nCo-authored-by: cmd[bot] <41898282+github-actions[bot]@users.noreply.github.com>",
          "timestamp": "2025-01-29T14:33:08Z",
          "tree_id": "b81dbda9d653a05c991f6e994b685def500719ac",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/ada12be652a4fa8f60fc54e8cfe9ca81e09ad28b"
        },
        "date": 1738164227760,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3925395,
            "range": "± 45019",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 284491,
            "range": "± 4809",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4032372,
            "range": "± 38975",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 360080,
            "range": "± 3391",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4718269,
            "range": "± 40925",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 840837,
            "range": "± 9392",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9574349,
            "range": "± 71021",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4508342,
            "range": "± 34445",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 41990781,
            "range": "± 722605",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 35725452,
            "range": "± 368706",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 324985372,
            "range": "± 4165218",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 276978470,
            "range": "± 1385027",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2397131269,
            "range": "± 18248540",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2645348997,
            "range": "± 76055325",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2812952,
            "range": "± 6653",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1454137,
            "range": "± 7392",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2944393,
            "range": "± 14858",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1522638,
            "range": "± 5829",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3460035,
            "range": "± 64894",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1824464,
            "range": "± 12082",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7452249,
            "range": "± 74495",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4690510,
            "range": "± 75785",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 39136228,
            "range": "± 408275",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 38538757,
            "range": "± 515359",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 356076132,
            "range": "± 4402507",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 384435598,
            "range": "± 16183340",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3253323291,
            "range": "± 26501195",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3592145703,
            "range": "± 61349841",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "manuel.mauro@protonmail.com",
            "name": "Manuel Mauro",
            "username": "manuelmauro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "80e30ec3cdccae8e9099bd67840ff8737b043496",
          "message": "Add support for feature `pallet_balances/insecure_zero_ed` in benchmarks and testing (#7379)\n\n# Description\n\nCurrently benchmarks and tests on pallet_balances would fail when the\nfeature insecure_zero_ed is enabled. This PR allows to run such\nbenchmark and tests keeping into account the fact that accounts would\nnot be deleted when their balance goes below a threshold.\n\n## Integration\n\n*In depth notes about how this PR should be integrated by downstream\nprojects. This part is mandatory, and should be\nreviewed by reviewers, if the PR does NOT have the `R0-Silent` label. In\ncase of a `R0-Silent`, it can be ignored.*\n\n## Review Notes\n\n*In depth notes about the **implementation** details of your PR. This\nshould be the main guide for reviewers to\nunderstand your approach and effectively review it. If too long, use\n\n[`<details>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)*.\n\n*Imagine that someone who is depending on the old code wants to\nintegrate your new code and the only information that\nthey get is this section. It helps to include example usage and default\nvalue here, with a `diff` code-block to show\npossibly integration.*\n\n*Include your leftover TODOs, if any, here.*\n\n# Checklist\n\n* [x] My PR includes a detailed description as outlined in the\n\"Description\" and its two subsections above.\n* [x] My PR follows the [labeling requirements](\n\nhttps://github.com/paritytech/polkadot-sdk/blob/master/docs/contributor/CONTRIBUTING.md#Process\n) of this project (at minimum one label for `T` required)\n* External contributors: ask maintainers to put the right label on your\nPR.\n* [x] I have made corresponding changes to the documentation (if\napplicable)\n* [x] I have added tests that prove my fix is effective or that my\nfeature works (if applicable)\n\nYou can remove the \"Checklist\" section once all have been checked. Thank\nyou for your contribution!\n\n✄\n-----------------------------------------------------------------------------\n\n---------\n\nCo-authored-by: Rodrigo Quelhas <rodrigo_quelhas@outlook.pt>",
          "timestamp": "2025-01-29T22:11:52Z",
          "tree_id": "2c966a8913ba0f6518561501ee0c5ee85dabe1d1",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/80e30ec3cdccae8e9099bd67840ff8737b043496"
        },
        "date": 1738191858615,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 4014014,
            "range": "± 32339",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 289071,
            "range": "± 3214",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4120635,
            "range": "± 42101",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 367501,
            "range": "± 6633",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4898200,
            "range": "± 51418",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 857943,
            "range": "± 9828",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 10067414,
            "range": "± 152911",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4644272,
            "range": "± 129323",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 43726591,
            "range": "± 691069",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 37028554,
            "range": "± 736754",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 346320365,
            "range": "± 4644003",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 282497881,
            "range": "± 3048086",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2454362699,
            "range": "± 9649641",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2613489414,
            "range": "± 48974538",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2874103,
            "range": "± 26158",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1467154,
            "range": "± 9094",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2991759,
            "range": "± 24854",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1542141,
            "range": "± 7647",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3551682,
            "range": "± 50017",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1877815,
            "range": "± 12228",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7964588,
            "range": "± 144153",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4896672,
            "range": "± 107601",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 42181468,
            "range": "± 1262990",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 41234779,
            "range": "± 678425",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 387095567,
            "range": "± 5248334",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 461360357,
            "range": "± 5551872",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3666114195,
            "range": "± 65019399",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3890799403,
            "range": "± 42439013",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1177472+mordamax@users.noreply.github.com",
            "name": "Maksym H",
            "username": "mordamax"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e9e425175e9db6b84f3ed2fd96f0326d798c25b2",
          "message": "Improvements for Weekly bench (#7390)\n\n- added 3 links for subweight comparison - now, ~1 month ago release, ~3\nmonth ago release tag\n- added `--3way --ours` flags for `git apply` to resolve potential\nconflict\n- stick to the weekly branch from the start until the end, to prevent\nrace condition with conflicts",
          "timestamp": "2025-01-30T11:46:36Z",
          "tree_id": "6c09ea8ab8d141712e8be35575592597e75de84d",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/e9e425175e9db6b84f3ed2fd96f0326d798c25b2"
        },
        "date": 1738240610329,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 4081338,
            "range": "± 18655",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 295062,
            "range": "± 5400",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4209884,
            "range": "± 23517",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 376424,
            "range": "± 4171",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4967818,
            "range": "± 48129",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 876534,
            "range": "± 22773",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 10149296,
            "range": "± 110027",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4880570,
            "range": "± 73422",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 44633374,
            "range": "± 685807",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 38335882,
            "range": "± 652842",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 369899377,
            "range": "± 3351612",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 297838175,
            "range": "± 2396734",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2640524096,
            "range": "± 9914803",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2725893938,
            "range": "± 150630897",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 3016827,
            "range": "± 28075",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1494243,
            "range": "± 7622",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 3106145,
            "range": "± 10697",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1567528,
            "range": "± 11896",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3621468,
            "range": "± 30023",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1884028,
            "range": "± 12022",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7818192,
            "range": "± 80709",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4839512,
            "range": "± 47958",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 41991961,
            "range": "± 621410",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 39519199,
            "range": "± 864792",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 392820490,
            "range": "± 4168404",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 401085483,
            "range": "± 5322915",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3484250582,
            "range": "± 17689185",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3780079153,
            "range": "± 60831428",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "59443568+sw10pa@users.noreply.github.com",
            "name": "Stephane Gurgenidze",
            "username": "sw10pa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "48f69cca47fcb95f65b5a4e4165e9c3bf359e82b",
          "message": "malus-collator: implement malicious collator submitting same collation to all backing groups (#6924)\n\n## Issues\n- [[#5049] Elastic scaling: zombienet\ntests](https://github.com/paritytech/polkadot-sdk/issues/5049)\n- [[#4526] Add zombienet tests for malicious\ncollators](https://github.com/paritytech/polkadot-sdk/issues/4526)\n\n## Description\nModified the undying collator to include a malus mode, in which it\nsubmits the same collation to all assigned backing groups.\n\n## TODO\n* [X] Implement malicious collator that submits the same collation to\nall backing groups;\n* [X] Avoid the core index check in the collation generation subsystem:\nhttps://github.com/paritytech/polkadot-sdk/blob/master/polkadot/node/collation-generation/src/lib.rs#L552-L553;\n* [X] Resolve the mismatch between the descriptor and the commitments\ncore index: https://github.com/paritytech/polkadot-sdk/pull/7104\n* [X] Implement `duplicate_collations` test with zombienet-sdk;\n* [X] Add PRdoc.",
          "timestamp": "2025-01-30T12:42:17Z",
          "tree_id": "306c378f0b701fbf00ec994741b6065288d97bdf",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/48f69cca47fcb95f65b5a4e4165e9c3bf359e82b"
        },
        "date": 1738244189966,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 4057498,
            "range": "± 30337",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 292568,
            "range": "± 6645",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4203582,
            "range": "± 28428",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 374814,
            "range": "± 5606",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4989500,
            "range": "± 35155",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 863035,
            "range": "± 14240",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 10028731,
            "range": "± 67925",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4726520,
            "range": "± 86536",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 44436080,
            "range": "± 565474",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 37362507,
            "range": "± 437933",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 357865507,
            "range": "± 4331372",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 294734127,
            "range": "± 2621728",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2558774096,
            "range": "± 16981274",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2709200863,
            "range": "± 133332214",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2969358,
            "range": "± 15540",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1492127,
            "range": "± 8833",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 3071871,
            "range": "± 20643",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1555489,
            "range": "± 12169",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3593844,
            "range": "± 22988",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1878993,
            "range": "± 11064",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7730465,
            "range": "± 154159",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4779073,
            "range": "± 73475",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 40886676,
            "range": "± 446344",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 39571986,
            "range": "± 763910",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 378116359,
            "range": "± 4504276",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 448274981,
            "range": "± 7209708",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3494260400,
            "range": "± 55666634",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3736587511,
            "range": "± 66243838",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "write@reusable.software",
            "name": "ordian",
            "username": "ordian"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0d35be7bc80a9c375db52585866601f4294b1e3d",
          "message": "fix pre-dispatch PoV underweight for ParasInherent (#7378)\n\nThis should fix the error log related to PoV pre-dispatch weight being\nlower than post-dispatch for `ParasInherent`:\n```\nERROR tokio-runtime-worker runtime::frame-support: Post dispatch weight is greater than pre dispatch weight. Pre dispatch weight may underestimating the actual weight. Greater post dispatch weight components are ignored.\n                                        Pre dispatch weight: Weight { ref_time: 47793353978, proof_size: 1019 },\n                                        Post dispatch weight: Weight { ref_time: 5030321719, proof_size: 135395 }\n```\n\n---------\n\nCo-authored-by: cmd[bot] <41898282+github-actions[bot]@users.noreply.github.com>",
          "timestamp": "2025-01-30T14:15:12Z",
          "tree_id": "299d8defabb798b6e6ecf908a253bf8aac6e41f2",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/0d35be7bc80a9c375db52585866601f4294b1e3d"
        },
        "date": 1738249832557,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3878345,
            "range": "± 23751",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 278175,
            "range": "± 2409",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 3960226,
            "range": "± 25278",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 353315,
            "range": "± 3905",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4606232,
            "range": "± 19905",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 804640,
            "range": "± 24173",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9212683,
            "range": "± 74229",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4260505,
            "range": "± 38955",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 38567110,
            "range": "± 140948",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 32774993,
            "range": "± 247574",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 295227159,
            "range": "± 1320832",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 263707830,
            "range": "± 2009221",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2350437521,
            "range": "± 6294852",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2574400997,
            "range": "± 75924454",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2803478,
            "range": "± 7742",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1423489,
            "range": "± 4100",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2895195,
            "range": "± 12090",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1481054,
            "range": "± 3469",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3365212,
            "range": "± 31799",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1777991,
            "range": "± 13776",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7213316,
            "range": "± 57977",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4604216,
            "range": "± 30930",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 37365334,
            "range": "± 416772",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 35298575,
            "range": "± 298330",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 339576751,
            "range": "± 2017730",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 389334556,
            "range": "± 5263373",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3017705647,
            "range": "± 11549924",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3516633927,
            "range": "± 47112301",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "egor@parity.io",
            "name": "Egor_P",
            "username": "EgorPopelyaev"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "698d9ae5b32785d3a5a55b770e973bbdb59ad271",
          "message": "[Backport] Version bumps from stable2412-1 + prdocs reorg (#7401)\n\nThis PR backports regular version bumps and prdoc reorganization from\nstable release branch back to master",
          "timestamp": "2025-01-31T09:25:44Z",
          "tree_id": "7f4bfd29059cb41939b169de88b552717b7fe607",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/698d9ae5b32785d3a5a55b770e973bbdb59ad271"
        },
        "date": 1738318501705,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3830275,
            "range": "± 44426",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 279824,
            "range": "± 15111",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 3961058,
            "range": "± 28699",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 353845,
            "range": "± 4543",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4592869,
            "range": "± 19799",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 816867,
            "range": "± 5732",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9439994,
            "range": "± 48695",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4386673,
            "range": "± 48457",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 40055940,
            "range": "± 246426",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 33998372,
            "range": "± 142510",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 307941019,
            "range": "± 3010871",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 265628895,
            "range": "± 1121543",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2356855446,
            "range": "± 8778721",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2127797850,
            "range": "± 17468415",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2820943,
            "range": "± 21848",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1442554,
            "range": "± 8443",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2923104,
            "range": "± 15504",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1498085,
            "range": "± 7266",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3374984,
            "range": "± 16986",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1798010,
            "range": "± 10840",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7212897,
            "range": "± 38283",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4605945,
            "range": "± 31233",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 37207758,
            "range": "± 143081",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 36013643,
            "range": "± 452158",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 336816950,
            "range": "± 2200435",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 391559342,
            "range": "± 8152849",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3161738694,
            "range": "± 63604861",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3480130249,
            "range": "± 48304426",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "git@kchr.de",
            "name": "Bastian Köcher",
            "username": "bkchr"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "23833ccee9c1c2062123e60901e6dc1076e0697d",
          "message": "Remove warnings by cleaning up the `Cargo.toml` (#7416)",
          "timestamp": "2025-01-31T22:47:28Z",
          "tree_id": "598b03b65537f6ebea91fc5510ac5377f25177ea",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/23833ccee9c1c2062123e60901e6dc1076e0697d"
        },
        "date": 1738366690570,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3898820,
            "range": "± 47336",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 280624,
            "range": "± 2235",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4056652,
            "range": "± 20692",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 361791,
            "range": "± 6544",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4713490,
            "range": "± 33003",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 818447,
            "range": "± 6652",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9703905,
            "range": "± 241599",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4427234,
            "range": "± 47776",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 39929857,
            "range": "± 451130",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 34830229,
            "range": "± 314428",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 323587633,
            "range": "± 7361885",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 275957845,
            "range": "± 2899461",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2519339503,
            "range": "± 60726498",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2649496076,
            "range": "± 275666458",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2987254,
            "range": "± 28499",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1496983,
            "range": "± 8333",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 3114826,
            "range": "± 20612",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1565899,
            "range": "± 4505",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3671181,
            "range": "± 17936",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1925694,
            "range": "± 9732",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7828295,
            "range": "± 93827",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4846965,
            "range": "± 76870",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 44967121,
            "range": "± 475161",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 44338753,
            "range": "± 790608",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 392312790,
            "range": "± 4704986",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 470033206,
            "range": "± 10063429",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3654843062,
            "range": "± 57985866",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3815720692,
            "range": "± 77777901",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alin@parity.io",
            "name": "Alin Dima",
            "username": "alindima"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4cd07c56378291fddb9fceab3b508cf99034126a",
          "message": "deprecate AsyncBackingParams (#7254)\n\nPart of https://github.com/paritytech/polkadot-sdk/issues/5079.\n\nRemoves all usage of the static async backing params, replacing them\nwith dynamically computed equivalent values (based on the claim queue\nand scheduling lookahead).\n\nAdds a new runtime API for querying the scheduling lookahead value. If\nnot present, falls back to 3 (the default value that is backwards\ncompatible with values we have on production networks for\nallowed_ancestry_len)\n\nAlso resolves most of\nhttps://github.com/paritytech/polkadot-sdk/issues/4447, removing code\nthat handles async backing not yet being enabled.\nWhile doing this, I removed the support for collation protocol version 1\non collators, as it only worked for leaves not supporting async backing\n(which are none).\nI also unhooked the legacy v1 statement-distribution (for the same\nreason as above). That subsystem is basically dead code now, so I had to\nremove some of its tests as they would no longer pass (since the\nsubsystem no longer sends messages to the legacy variant). I did not\nremove the entire legacy subsystem yet, as that would pollute this PR\ntoo much. We can remove the entire v1 and v2 validation protocols in a\nfollow up PR.\n\nIn another PR: remove test files with names `prospective_parachains`\n(it'd pollute this PR if we do now)\n\nTODO:\n- [x] add deprecation warnings\n- [x] prdoc\n\n---------\n\nCo-authored-by: cmd[bot] <41898282+github-actions[bot]@users.noreply.github.com>",
          "timestamp": "2025-02-03T09:01:15Z",
          "tree_id": "59d7a1f1357bdfdea64825e74e9e190c719369b1",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/4cd07c56378291fddb9fceab3b508cf99034126a"
        },
        "date": 1738576629963,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3782329,
            "range": "± 33623",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 285260,
            "range": "± 3146",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 3906353,
            "range": "± 48245",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 364005,
            "range": "± 4850",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4592510,
            "range": "± 34558",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 821729,
            "range": "± 9288",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9606595,
            "range": "± 186377",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4411746,
            "range": "± 36466",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 40306929,
            "range": "± 424892",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 35158320,
            "range": "± 213229",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 324687916,
            "range": "± 1772431",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 273151290,
            "range": "± 1779962",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2425962684,
            "range": "± 11977582",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2550935247,
            "range": "± 69124171",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2792309,
            "range": "± 26348",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1373717,
            "range": "± 5418",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2877887,
            "range": "± 29284",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1420553,
            "range": "± 5341",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3295939,
            "range": "± 18388",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1741077,
            "range": "± 13469",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7309001,
            "range": "± 131598",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4595902,
            "range": "± 19625",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 39879502,
            "range": "± 387886",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 37048129,
            "range": "± 629676",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 360659244,
            "range": "± 3551499",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 396448075,
            "range": "± 8745209",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3266388846,
            "range": "± 25271508",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3473703675,
            "range": "± 54701133",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1177472+mordamax@users.noreply.github.com",
            "name": "Maksym H",
            "username": "mordamax"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4f4f6f82bd54748231384128c8d8b37e51bd8367",
          "message": "add allow(dead_code) to substrate weight templates (#7408)\n\naddress failed CI after full regeneration\n\nExample https://github.com/paritytech/polkadot-sdk/pull/7406\nFailed CI\nhttps://github.com/paritytech/polkadot-sdk/actions/runs/13070646240\n\nMonkey-patched weights which have been overridden by automation\n\n![image](https://github.com/user-attachments/assets/ecf69173-f4dd-4113-a319-4f29d779ecae)",
          "timestamp": "2025-02-03T12:25:21Z",
          "tree_id": "f05c358e926a472916d44609a3427998ab630799",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/4f4f6f82bd54748231384128c8d8b37e51bd8367"
        },
        "date": 1738588412298,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3657787,
            "range": "± 20538",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 278170,
            "range": "± 5629",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 3780782,
            "range": "± 30314",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 351214,
            "range": "± 13276",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4472607,
            "range": "± 27244",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 800163,
            "range": "± 7141",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9361927,
            "range": "± 62517",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4348130,
            "range": "± 49977",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 39353364,
            "range": "± 443840",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 34115377,
            "range": "± 387497",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 305677990,
            "range": "± 1723029",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 263860090,
            "range": "± 1984333",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2325554877,
            "range": "± 11215510",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2070080268,
            "range": "± 283045170",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2688018,
            "range": "± 13230",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1344711,
            "range": "± 5842",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2796985,
            "range": "± 53750",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1413802,
            "range": "± 9773",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3242742,
            "range": "± 29184",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1700689,
            "range": "± 10221",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7054182,
            "range": "± 31128",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4472554,
            "range": "± 24534",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 38326714,
            "range": "± 338282",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 35634102,
            "range": "± 404332",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 342231377,
            "range": "± 2331738",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 390051756,
            "range": "± 8518501",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3096927398,
            "range": "± 11029006",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3339312737,
            "range": "± 74198187",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cyrill@parity.io",
            "name": "xermicus",
            "username": "xermicus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "274a781e8ca1a9432c7ec87593bd93214abbff50",
          "message": "[pallet-revive] do not trap the caller on instantiations with duplicate contracts (#7414)\n\nThis PR changes the behavior of `instantiate` when the resulting\ncontract address already exists (because the caller tried to instantiate\nthe same contract with the same salt multiple times): Instead of\ntrapping the caller, return an error code.\n\nSolidity allows `catch`ing this, which doesn't work if we are trapping\nthe caller. For example, the change makes the following snippet work:\n\n```Solidity\ntry new Foo{salt: hex\"00\"}() returns (Foo) {\n    // Instantiation was successful (contract address was free and constructor did not revert)\n} catch {\n    // This branch is expected to be taken if the instantiation failed because of a duplicate salt\n}\n```\n\n`revive` PR: https://github.com/paritytech/revive/pull/188\n\n---------\n\nSigned-off-by: Cyrill Leutwiler <bigcyrill@hotmail.com>\nCo-authored-by: cmd[bot] <41898282+github-actions[bot]@users.noreply.github.com>",
          "timestamp": "2025-02-03T15:59:39Z",
          "tree_id": "bba40945cfb044e8b8752fd3493329ea7900a423",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/274a781e8ca1a9432c7ec87593bd93214abbff50"
        },
        "date": 1738601304222,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3724659,
            "range": "± 33732",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 276484,
            "range": "± 4199",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 3839472,
            "range": "± 25157",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 350128,
            "range": "± 2259",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4487813,
            "range": "± 18386",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 806775,
            "range": "± 6879",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9221645,
            "range": "± 58120",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4355134,
            "range": "± 45241",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 39825989,
            "range": "± 388188",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 34109993,
            "range": "± 248215",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 308657476,
            "range": "± 3402551",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 263467135,
            "range": "± 1272544",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2347535929,
            "range": "± 15737915",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2450823720,
            "range": "± 65507373",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2688978,
            "range": "± 15968",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1350391,
            "range": "± 7644",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2776381,
            "range": "± 16776",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1416582,
            "range": "± 11343",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3254321,
            "range": "± 11689",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1709510,
            "range": "± 8879",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7088339,
            "range": "± 76948",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4485374,
            "range": "± 27833",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 37494671,
            "range": "± 464478",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 35352716,
            "range": "± 428623",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 341576622,
            "range": "± 2319651",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 364327556,
            "range": "± 8595130",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3189872048,
            "range": "± 42738422",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3348390648,
            "range": "± 72729665",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "14218860+iulianbarbu@users.noreply.github.com",
            "name": "Iulian Barbu",
            "username": "iulianbarbu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "0e386bed464b37b20c3e0c3d27b7f92d1a476a88",
          "message": "fix(sync-templates): keep parachain-template's workspace Cargo.toml (#7439)\n\n# Description\n\nAnother small fix for sync-templates. We're copying the `polkadot-sdk`'s\n`parachain-template` files (including the `parachain-template-docs`'s\nCargo.toml) to the directory where we're creating the workspace with all\n`parachain-template` members crates, and workspace's toml. The error is\nthat in this directory for the workspace we first create the workspace's\nCargo.toml, and then copy the files of the `polkadot-sdk`'s\n`parachain-template`, including the `Cargo.toml` of the\n`parachain-template-docs` crate, which overwrites the workspace\nCargo.toml. In the end we delete the `Cargo.toml` (which we assume it is\nof the `parachain-template-docs` crate), forgetting that previously\nthere should've been a workspace Cargo.toml, which should still be kept\nand committed to the template's repository.\n\nThe error happens here:\nhttps://github.com/paritytech/polkadot-sdk/actions/runs/13111697690/job/36577834127\n\n## Integration\n\nN/A\n\n## Review Notes\n\nOnce again, merging this into master requires re-running sync templates\nbased on latest version on master. Hopefully this will be the last issue\nrelated to the workflow itself.\n\n---------\n\nSigned-off-by: Iulian Barbu <iulian.barbu@parity.io>",
          "timestamp": "2025-02-04T09:35:22Z",
          "tree_id": "6d46731b2cc2fe15bf064c61d358d3768accade8",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/0e386bed464b37b20c3e0c3d27b7f92d1a476a88"
        },
        "date": 1738665011722,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3686735,
            "range": "± 29080",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 277648,
            "range": "± 3000",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 3814068,
            "range": "± 31396",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 351761,
            "range": "± 2152",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4462382,
            "range": "± 26562",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 809494,
            "range": "± 8136",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9244777,
            "range": "± 71438",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4338870,
            "range": "± 26221",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 39437486,
            "range": "± 333919",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 33809311,
            "range": "± 257118",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 309906184,
            "range": "± 3963845",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 262641929,
            "range": "± 1432083",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2344610415,
            "range": "± 11248508",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2472540163,
            "range": "± 140387074",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2707991,
            "range": "± 31074",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1351082,
            "range": "± 9631",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2801421,
            "range": "± 14639",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1392308,
            "range": "± 3802",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3287071,
            "range": "± 23380",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1705672,
            "range": "± 3217",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7170089,
            "range": "± 45188",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4474414,
            "range": "± 37187",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 38240418,
            "range": "± 396586",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 35846879,
            "range": "± 415553",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 349757106,
            "range": "± 2438843",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 405344270,
            "range": "± 4713231",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3199171772,
            "range": "± 21049487",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3532655729,
            "range": "± 94113855",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "serban@parity.io",
            "name": "Serban Iorga",
            "username": "serban300"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "d6aa157888902fdfcee3995e5ff209847977c696",
          "message": "Fix Message codec indexes (#7437)\n\nFixes https://github.com/paritytech/polkadot-sdk/issues/7400",
          "timestamp": "2025-02-04T10:02:45Z",
          "tree_id": "b6bb1dd7d23dfab61aedc83640af615e7f5a7e60",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/d6aa157888902fdfcee3995e5ff209847977c696"
        },
        "date": 1738666308399,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3737104,
            "range": "± 33278",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 278525,
            "range": "± 1947",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 3852162,
            "range": "± 26375",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 357249,
            "range": "± 4172",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4532177,
            "range": "± 51781",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 818092,
            "range": "± 10068",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9448650,
            "range": "± 49026",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4505661,
            "range": "± 110539",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 42711443,
            "range": "± 682146",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 35340402,
            "range": "± 276005",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 341914990,
            "range": "± 2742986",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 280785955,
            "range": "± 2696112",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2444084052,
            "range": "± 12279032",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2651200039,
            "range": "± 84985955",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2710641,
            "range": "± 16454",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1348923,
            "range": "± 4511",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2811518,
            "range": "± 17191",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1418587,
            "range": "± 9289",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3296970,
            "range": "± 30892",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1748008,
            "range": "± 9465",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7438286,
            "range": "± 120964",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4544417,
            "range": "± 58014",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 42888341,
            "range": "± 533747",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 39397292,
            "range": "± 1038135",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 362408384,
            "range": "± 3513716",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 383650504,
            "range": "± 7993993",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3295550739,
            "range": "± 16985301",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3573463272,
            "range": "± 58070314",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1728078+michalkucharczyk@users.noreply.github.com",
            "name": "Michal Kucharczyk",
            "username": "michalkucharczyk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "aa42debebaf3bf8e6979497256bc1fbad2db0e11",
          "message": "`fatxpool`: do not use individual transaction listeners (#7316)\n\n#### Description\nDuring 2s block investigation it turned out that\n[ForkAwareTxPool::register_listeners](https://github.com/paritytech/polkadot-sdk/blob/master/substrate/client/transaction-pool/src/fork_aware_txpool/fork_aware_txpool.rs#L1036)\ncall takes significant amount of time.\n```\nregister_listeners: at HashAndNumber { number: 12, hash: 0xe9a1...0b1d2 } took 200.041933ms\nregister_listeners: at HashAndNumber { number: 13, hash: 0x5eb8...a87c6 } took 264.487414ms\nregister_listeners: at HashAndNumber { number: 14, hash: 0x30cb...2e6ec } took 340.525566ms\nregister_listeners: at HashAndNumber { number: 15, hash: 0x0450...4f05c } took 405.686659ms\nregister_listeners: at HashAndNumber { number: 16, hash: 0xfa6f...16c20 } took 477.977836ms\nregister_listeners: at HashAndNumber { number: 17, hash: 0x5474...5d0c1 } took 483.046029ms\nregister_listeners: at HashAndNumber { number: 18, hash: 0x3ca5...37b78 } took 482.715468ms\nregister_listeners: at HashAndNumber { number: 19, hash: 0xbfcc...df254 } took 484.206999ms\nregister_listeners: at HashAndNumber { number: 20, hash: 0xd748...7f027 } took 414.635236ms\nregister_listeners: at HashAndNumber { number: 21, hash: 0x2baa...f66b5 } took 418.015897ms\nregister_listeners: at HashAndNumber { number: 22, hash: 0x5f1d...282b5 } took 423.342397ms\nregister_listeners: at HashAndNumber { number: 23, hash: 0x7a18...f2d03 } took 472.742939ms\nregister_listeners: at HashAndNumber { number: 24, hash: 0xc381...3fd07 } took 489.625557ms\n```\n\nThis PR implements the idea outlined in #7071. Instead of having a\nseparate listener for every transaction in each view, we now use a\nsingle stream of aggregated events per view, with each stream providing\nevents for all transactions in that view. Each event is represented as a\ntuple: (transaction-hash, transaction-status). This significantly reduce\nthe time required for `maintain`.\n\n#### Review Notes\n- single aggregated stream, provided by the individual view delivers\nevents in form of `(transaction-hash, transaction-status)`,\n- `MultiViewListener` now has a task. This task is responsible for:\n- polling the stream map (which consists of individual view's aggregated\nstreams) and the `controller_receiver` which provides side-channel\n[commands](https://github.com/paritytech/polkadot-sdk/blob/2b18e080cfcd6b56ee638c729f891154e566e52e/substrate/client/transaction-pool/src/fork_aware_txpool/multi_view_listener.rs#L68-L95)\n(like `AddView` or `FinalizeTransaction`) sent from the _transaction\npool_.\n- dispatching individual transaction statuses and control commands into\nthe external (created via API, e.g. over RPC) listeners of individual\ntransactions,\n- external listener is responsible for status handling _logic_ (e.g.\ndeduplication of events, or ignoring some of them) and triggering\nstatuses to external world (_this was not changed_).\n- level of debug messages was adjusted (per-tx messages shall be\n_trace_),\n\nCloses #7071\n\n---------\n\nCo-authored-by: Sebastian Kunert <skunert49@gmail.com>",
          "timestamp": "2025-02-04T12:18:04Z",
          "tree_id": "1f096529c55a66eabfa7b44d957e89929ba57029",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/aa42debebaf3bf8e6979497256bc1fbad2db0e11"
        },
        "date": 1738675184282,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3915965,
            "range": "± 58718",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 283354,
            "range": "± 3425",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4019592,
            "range": "± 54861",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 366326,
            "range": "± 5401",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4745932,
            "range": "± 61672",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 837169,
            "range": "± 12839",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9718581,
            "range": "± 77550",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4546096,
            "range": "± 78521",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 44151596,
            "range": "± 781761",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 37179624,
            "range": "± 516200",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 352001355,
            "range": "± 4029037",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 285888543,
            "range": "± 2029876",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2487779894,
            "range": "± 27254182",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2618579134,
            "range": "± 63699786",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2757487,
            "range": "± 23277",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1392199,
            "range": "± 8918",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2853275,
            "range": "± 15832",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1464073,
            "range": "± 4728",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3367330,
            "range": "± 22890",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1782746,
            "range": "± 9859",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7633247,
            "range": "± 230004",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4633121,
            "range": "± 67574",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 42796384,
            "range": "± 491990",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 41230279,
            "range": "± 865791",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 380710587,
            "range": "± 3275491",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 436687354,
            "range": "± 5724287",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3462293277,
            "range": "± 36052133",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3582431108,
            "range": "± 47069512",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "claravanstaden64@gmail.com",
            "name": "Clara van Staden",
            "username": "claravanstaden"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "8834a9bf7dcb1e5a7498b7148787c544136609b2",
          "message": "Snowbridge: Remove fee amount check from tests (#7436)\n\nRemove the specific fee amount checks in integration tests, since it\nchanges every time weights are regenerated.",
          "timestamp": "2025-02-04T12:55:44Z",
          "tree_id": "0190e4e4cae113a163a5e44b5cf5abe61e883076",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/8834a9bf7dcb1e5a7498b7148787c544136609b2"
        },
        "date": 1738676669242,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3836518,
            "range": "± 28718",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 281040,
            "range": "± 2536",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 3977396,
            "range": "± 47882",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 360681,
            "range": "± 3239",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4686188,
            "range": "± 42008",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 843335,
            "range": "± 12554",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9749917,
            "range": "± 94026",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4638698,
            "range": "± 103467",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 43097018,
            "range": "± 1064129",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 36026391,
            "range": "± 531394",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 340787506,
            "range": "± 3031655",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 281294005,
            "range": "± 1733475",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2430341237,
            "range": "± 9218925",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2568280248,
            "range": "± 90517311",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2735333,
            "range": "± 12471",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1372270,
            "range": "± 7395",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2830004,
            "range": "± 24391",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1429307,
            "range": "± 8836",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3364581,
            "range": "± 25896",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1737629,
            "range": "± 29567",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7369957,
            "range": "± 59852",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4576355,
            "range": "± 64112",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 40835227,
            "range": "± 795737",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 37714110,
            "range": "± 824223",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 363274909,
            "range": "± 4141382",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 418667796,
            "range": "± 7918422",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3404589537,
            "range": "± 22601604",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3550994870,
            "range": "± 82654557",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alexandre.balde@parity.io",
            "name": "Alexandre R. Baldé",
            "username": "rockbmb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a883475944b26c24704df7f0ff329121e396a6bb",
          "message": "Add missing events to nomination pool extrinsincs (#7377)\n\nFound via\nhttps://github.com/open-web3-stack/polkadot-ecosystem-tests/pull/165.\n\nCloses #7370 .\n\n# Description\n\nSome extrinsics from `pallet_nomination_pools` were not emitting events:\n* `set_configs`\n* `set_claim_permission`\n* `set_metadata`\n* `chill`\n* `nominate`\n\n## Integration\n\nN/A\n\n## Review Notes\n\nN/A\n\n---------\n\nCo-authored-by: Ankan <10196091+Ank4n@users.noreply.github.com>",
          "timestamp": "2025-02-04T16:04:23Z",
          "tree_id": "aae1d07ef8a941d519f3fea9bdacc4ad5bcd5219",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/a883475944b26c24704df7f0ff329121e396a6bb"
        },
        "date": 1738687923670,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3811755,
            "range": "± 45846",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 284806,
            "range": "± 6044",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 3941332,
            "range": "± 53030",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 362801,
            "range": "± 3565",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4605595,
            "range": "± 47667",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 818256,
            "range": "± 9998",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9653572,
            "range": "± 85363",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4518961,
            "range": "± 54430",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 42172531,
            "range": "± 674883",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 36375589,
            "range": "± 324251",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 343802088,
            "range": "± 3226643",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 278919819,
            "range": "± 2587285",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2445453138,
            "range": "± 6200599",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2163719321,
            "range": "± 155278894",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2781153,
            "range": "± 30301",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1373045,
            "range": "± 4774",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2872610,
            "range": "± 24959",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1435644,
            "range": "± 7487",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3381329,
            "range": "± 36032",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1767641,
            "range": "± 10750",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7501142,
            "range": "± 92990",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4671395,
            "range": "± 52193",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 41853977,
            "range": "± 597036",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 39383477,
            "range": "± 970961",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 375478563,
            "range": "± 3721243",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 412994466,
            "range": "± 7544500",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3455027776,
            "range": "± 46112838",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3604037966,
            "range": "± 89879761",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alex.theissen@me.com",
            "name": "Alexander Theißen",
            "username": "athei"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "4c28354be1f5eec875d116a1ab7d9429023ef83b",
          "message": "revive: Include immutable storage deposit into the contracts `storage_base_deposit` (#7230)\n\nThis PR is centered around a main fix regarding the base deposit and a\nbunch of drive by or related fixtures that make sense to resolve in one\ngo. It could be broken down more but I am constantly rebasing this PR\nand would appreciate getting those fixes in as-one.\n\n**This adds a multi block migration to Westend AssetHub that wipes the\npallet state clean. This is necessary because of the changes to the\n`ContractInfo` storage item. It will not delete the child storage\nthough. This will leave a tiny bit of garbage behind but won't cause any\nproblems. They will just be orphaned.**\n\n## Record the deposit for immutable data into the `storage_base_deposit`\n\nThe `storage_base_deposit` are all the deposit a contract has to pay for\nexisting. It included the deposit for its own metadata and a deposit\nproportional (< 1.0x) to the size of its code. However, the immutable\ncode size was not recorded there. This would lead to the situation where\non terminate this portion wouldn't be refunded staying locked into the\ncontract. It would also make the calculation of the deposit changes on\n`set_code_hash` more complicated when it updates the immutable data (to\nbe done in #6985). Reason is because it didn't know how much was payed\nbefore since the storage prices could have changed in the mean time.\n\nIn order for this solution to work I needed to delay the deposit\ncalculation for a new contract for after the contract is done executing\nis constructor as only then we know the immutable data size. Before, we\njust charged this eagerly in `charge_instantiate` before we execute the\nconstructor. Now, we merely send the ED as free balance before the\nconstructor in order to create the account. After the constructor is\ndone we calculate the contract base deposit and charge it. This will\nmake `set_code_hash` much easier to implement.\n\nAs a side effect it is now legal to call `set_immutable_data` multiple\ntimes per constructor (even though I see no reason to do so). It simply\noverrides the immutable data with the new value. The deposit accounting\nwill be done after the constructor returns (as mentioned above) instead\nof when setting the immutable data.\n\n## Don't pre-charge for reading immutable data\n\nI noticed that we were pre-charging weight for the max allowable\nimmutable data when reading those values and then refunding after read.\nThis is not necessary as we know its length without reading the storage\nas we store it out of band in contract metadata. This makes reading it\nfree. Less pre-charging less problems.\n\n## Remove delegate locking\n\nFixes #7092\n\nThis is also in the spirit of making #6985 easier to implement. The\nlocking complicates `set_code_hash` as we might need to block settings\nthe code hash when locks exist. Check #7092 for further rationale.\n\n## Enforce \"no terminate in constructor\" eagerly\n\nWe used to enforce this rule after the contract execution returned. Now\nwe error out early in the host call. This makes it easier to be sure to\nargue that a contract info still exists (wasn't terminated) when a\nconstructor successfully returns. All around this his just much simpler\nthan dealing this check.\n\n## Moved refcount functions to `CodeInfo`\n\nThey never really made sense to exist on `Stack`. But now with the\nlocking gone this makes even less sense. The refcount is stored inside\n`CodeInfo` to lets just move them there.\n\n## Set `CodeHashLockupDepositPercent` for test runtime\n\nThe test runtime was setting `CodeHashLockupDepositPercent` to zero.\nThis was trivializing many code paths and excluded them from testing. I\nset it to `30%` which is our default value and fixed up all the tests\nthat broke. This should give us confidence that the lockup doeposit\ncollections properly works.\n\n## Reworked the `MockExecutable` to have both a `deploy` and a `call`\nentry point\n\nThis type used for testing could only have either entry points but not\nboth. In order to fix the `immutable_data_set_overrides` I needed to a\nnew function `add_both` to `MockExecutable` that allows to have both\nentry points. Make sure to make use of it in the future :)\n\n---------\n\nCo-authored-by: command-bot <>\nCo-authored-by: cmd[bot] <41898282+github-actions[bot]@users.noreply.github.com>\nCo-authored-by: PG Herveou <pgherveou@gmail.com>\nCo-authored-by: Bastian Köcher <git@kchr.de>\nCo-authored-by: Oliver Tale-Yazdi <oliver.tale-yazdi@parity.io>",
          "timestamp": "2025-02-04T21:20:20Z",
          "tree_id": "41b307281d8f8a96e38748949c7a6d35b45114dc",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/4c28354be1f5eec875d116a1ab7d9429023ef83b"
        },
        "date": 1738706996720,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 4060401,
            "range": "± 94331",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 302698,
            "range": "± 4629",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4311332,
            "range": "± 68112",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 391142,
            "range": "± 4511",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 5146401,
            "range": "± 115950",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 874899,
            "range": "± 14667",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 10443962,
            "range": "± 181939",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4660571,
            "range": "± 116691",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 45738218,
            "range": "± 1765537",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 37149077,
            "range": "± 542242",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 357271594,
            "range": "± 7290202",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 294902253,
            "range": "± 6388623",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2456217321,
            "range": "± 29811276",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2635492116,
            "range": "± 67463814",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 3029458,
            "range": "± 78691",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1442525,
            "range": "± 19555",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2981350,
            "range": "± 49060",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1463578,
            "range": "± 13639",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3534254,
            "range": "± 31657",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1814811,
            "range": "± 17026",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7612993,
            "range": "± 124081",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4817874,
            "range": "± 96939",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 44980275,
            "range": "± 1409477",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 41511255,
            "range": "± 892440",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 396069381,
            "range": "± 8254873",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 430722095,
            "range": "± 10878819",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3538974072,
            "range": "± 76247749",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3614680807,
            "range": "± 118712382",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alex.theissen@me.com",
            "name": "Alexander Theißen",
            "username": "athei"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "31abe6117f2deed5928816b1606b9a42aab8838d",
          "message": "Remove pallet_revive benchmarks from Westend AssetHub (#7454)\n\nWe are using the substrate weights on the test net. Removing the benches\nso that they are not generated by accident and then not used.",
          "timestamp": "2025-02-05T09:56:28Z",
          "tree_id": "4e690dea8f1cd88d928fdaa87711785394855f39",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/31abe6117f2deed5928816b1606b9a42aab8838d"
        },
        "date": 1738752189093,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3934265,
            "range": "± 43836",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 291514,
            "range": "± 2808",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4079006,
            "range": "± 35510",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 375523,
            "range": "± 4032",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4817346,
            "range": "± 36786",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 841277,
            "range": "± 6991",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9787721,
            "range": "± 60500",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4512780,
            "range": "± 35324",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 42415822,
            "range": "± 517553",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 36380749,
            "range": "± 357501",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 348516517,
            "range": "± 2620900",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 281596597,
            "range": "± 1440345",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2479263257,
            "range": "± 12925576",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2649524711,
            "range": "± 250737174",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2862346,
            "range": "± 17305",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1390690,
            "range": "± 10711",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2990383,
            "range": "± 20677",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1459819,
            "range": "± 12035",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3554964,
            "range": "± 44513",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1784279,
            "range": "± 7396",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7542819,
            "range": "± 135721",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4663123,
            "range": "± 162343",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 40483102,
            "range": "± 469148",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 39013553,
            "range": "± 891900",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 376685921,
            "range": "± 3008379",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 427673761,
            "range": "± 18085588",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3378025610,
            "range": "± 28545058",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3656763062,
            "range": "± 82605877",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "skunert49@gmail.com",
            "name": "Sebastian Kunert",
            "username": "skunert"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9c474d5452a855adc843785c71fc842f81eeed56",
          "message": "omni-node: Adjust manual seal parameters (#7451)\n\nThis PR will make omni-node dev-mode once again compatible with older\nruntimes.\n\nThe changes introduced in\nhttps://github.com/paritytech/polkadot-sdk/pull/6825 changed constraints\nthat are enforced in the runtime. For normal chains this should work\nfine, since we have real parameters there, like relay chain slots and\nparachain slots.\n\nFor these manual seal parameters we need to respect the constraints,\nwhile faking all the parameters. This PR should fix manual seal in\nomni-node to work with runtime build before and after\nhttps://github.com/paritytech/polkadot-sdk/pull/6825 (I tested that).\n\nIn the future, we should look into improving the parameterization here,\npossibly by introducing proper aura pre-digests so that the parachain\nslot moves forward. This will require quite a bit of refactoring on the\nmanual seal node side however. Issue:\nhttps://github.com/paritytech/polkadot-sdk/issues/7453\n\nAlso, the dev chain spec in parachain template is updated. This makes it\nwork with stable2412-1 and master omni-node. Once the changes here are\nbackported and in a release, all combinations will work again.\n\nfixes https://github.com/paritytech/polkadot-sdk/issues/7341\n\n---------\n\nCo-authored-by: cmd[bot] <41898282+github-actions[bot]@users.noreply.github.com>",
          "timestamp": "2025-02-05T14:53:36Z",
          "tree_id": "8dc156f5199bc4cd7ab1c87438688c6a6a842c9b",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/9c474d5452a855adc843785c71fc842f81eeed56"
        },
        "date": 1738770318320,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3829661,
            "range": "± 19693",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 290676,
            "range": "± 2258",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 3948508,
            "range": "± 35396",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 364959,
            "range": "± 3455",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4546285,
            "range": "± 71965",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 818513,
            "range": "± 14652",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9415952,
            "range": "± 174624",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4490312,
            "range": "± 56417",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 43111084,
            "range": "± 916231",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 35935998,
            "range": "± 420754",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 340348943,
            "range": "± 5156208",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 282639710,
            "range": "± 4147520",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2461881611,
            "range": "± 11627321",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2691962518,
            "range": "± 73800726",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2870480,
            "range": "± 29791",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1384838,
            "range": "± 13449",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2982393,
            "range": "± 26803",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1453789,
            "range": "± 12205",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3486962,
            "range": "± 50363",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1774180,
            "range": "± 18741",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7605768,
            "range": "± 158144",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4690158,
            "range": "± 26642",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 41087659,
            "range": "± 717114",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 38777230,
            "range": "± 933539",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 376021997,
            "range": "± 4204991",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 425375510,
            "range": "± 8270342",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3452992993,
            "range": "± 54232929",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3646235836,
            "range": "± 73905350",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "14218860+iulianbarbu@users.noreply.github.com",
            "name": "Iulian Barbu",
            "username": "iulianbarbu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "87f4f3f0df5fc0cc72f69e612909d4d213965820",
          "message": "omni-node: add offchain worker (#7479)\n\n# Description\n\nCopy pasted the `parachain-template-node` offchain worker setup to\nomni-node-lib for both aura and manual seal nodes.\n\nCloses #7447 \n\n## Integration\n\nEnabled offchain workers for both `polkadot-omni-node` and\n`polkadot-parachain` nodes. This would allow executing offchain logic in\nthe runtime and considering it on the node side.\n\n---------\n\nSigned-off-by: Iulian Barbu <iulian.barbu@parity.io>\nCo-authored-by: cmd[bot] <41898282+github-actions[bot]@users.noreply.github.com>",
          "timestamp": "2025-02-05T19:17:15Z",
          "tree_id": "82637de79a33cbf7f3f057f8f1f391847419b821",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/87f4f3f0df5fc0cc72f69e612909d4d213965820"
        },
        "date": 1738785975732,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 4161100,
            "range": "± 47736",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 301756,
            "range": "± 4772",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4348090,
            "range": "± 63947",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 388156,
            "range": "± 7597",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 5074270,
            "range": "± 77780",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 900566,
            "range": "± 11031",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 10406039,
            "range": "± 192411",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 5111083,
            "range": "± 106741",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 47417330,
            "range": "± 1899536",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 40007473,
            "range": "± 436048",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 374844050,
            "range": "± 3821341",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 299702327,
            "range": "± 1709615",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2571762283,
            "range": "± 21179327",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2290835053,
            "range": "± 25680126",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 3019878,
            "range": "± 38213",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1434479,
            "range": "± 4900",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 3184884,
            "range": "± 17738",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1511567,
            "range": "± 16252",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3745613,
            "range": "± 75265",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1869477,
            "range": "± 32168",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 8539801,
            "range": "± 229901",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 5324725,
            "range": "± 160037",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 46922913,
            "range": "± 1104429",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 46026577,
            "range": "± 583060",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 444635221,
            "range": "± 5859515",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 487461265,
            "range": "± 9920226",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3758943839,
            "range": "± 27406055",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3962624055,
            "range": "± 75121998",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "60601340+lexnv@users.noreply.github.com",
            "name": "Alexandru Vasile",
            "username": "lexnv"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2f44779a54ebdf068496a1c1b651cf11434c8740",
          "message": "litep2p: Increase keep-alive to 10 seconds to mirror libp2p (#7488)\n\nThis PR ensures that litep2p will keep an idle connection alive for 10\nseconds.\n\nThe bump from 5 seconds is done to mirror the libp2p behavior and\npotentially improve connection stability:\n\nhttps://github.com/paritytech/polkadot-sdk/blob/a07fb323bc0cfb5c2fb4c8fbe9d20e344cc8eeaf/substrate/client/network/src/service.rs#L542-L549\n\ncc @paritytech/networking\n\n---------\n\nSigned-off-by: Alexandru Vasile <alexandru.vasile@parity.io>",
          "timestamp": "2025-02-06T11:42:40Z",
          "tree_id": "964d93f847b24ae933d6310580ceaeda21af0b9a",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/2f44779a54ebdf068496a1c1b651cf11434c8740"
        },
        "date": 1738845093014,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3974715,
            "range": "± 29484",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 291042,
            "range": "± 4292",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4075801,
            "range": "± 43344",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 371188,
            "range": "± 2632",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4774816,
            "range": "± 36000",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 837340,
            "range": "± 19332",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9772687,
            "range": "± 59879",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4503359,
            "range": "± 41769",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 41168870,
            "range": "± 821564",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 35728016,
            "range": "± 313312",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 333433038,
            "range": "± 3819242",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 273667143,
            "range": "± 1282283",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2447194010,
            "range": "± 25695928",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2222953057,
            "range": "± 204219493",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2846718,
            "range": "± 26173",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1391740,
            "range": "± 7010",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2980760,
            "range": "± 15551",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1464747,
            "range": "± 4775",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3465519,
            "range": "± 33881",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1772230,
            "range": "± 8919",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7484407,
            "range": "± 278410",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4722634,
            "range": "± 46132",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 39118099,
            "range": "± 326712",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 38081871,
            "range": "± 897183",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 369924988,
            "range": "± 3962369",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 406879376,
            "range": "± 6237102",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3334685477,
            "range": "± 50296295",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3656925897,
            "range": "± 58617823",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pgherveou@gmail.com",
            "name": "PG Herveou",
            "username": "pgherveou"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "917052e58fbcd22f4320e2b722631ddf8ac74960",
          "message": "[pallet-revive] tx fee fixes (#7463)\n\nApply some fixes to properly estimate ethereum tx fees:\n\n- Set the `extension_weight` on the dispatch_info to properly calculate\nthe fee with pallet_transaction_payment\n- Expose the gas_price through Runtime API, just in case we decide to\ntweak the value in future updates, it should be read from the chain\nrather than be a shared constant exposed by the crate\n- add a `evm_gas_to_fee` utility function to properly convert gas to\nsubstrate fee\n- Fix some minor gas encoding for edge cases\n\n---------\n\nCo-authored-by: cmd[bot] <41898282+github-actions[bot]@users.noreply.github.com>",
          "timestamp": "2025-02-06T16:56:51Z",
          "tree_id": "61e74e9cf200dba354367f8c94021e6984384210",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/917052e58fbcd22f4320e2b722631ddf8ac74960"
        },
        "date": 1738864028155,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 4342818,
            "range": "± 36245",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 317192,
            "range": "± 5809",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4488327,
            "range": "± 52802",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 414269,
            "range": "± 5038",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 5386982,
            "range": "± 59092",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 941777,
            "range": "± 10954",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 11296647,
            "range": "± 68956",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 5200466,
            "range": "± 70290",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 54027804,
            "range": "± 1762950",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 40915076,
            "range": "± 378443",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 406792981,
            "range": "± 4667212",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 318531882,
            "range": "± 2059688",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2926458259,
            "range": "± 12912319",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 3084929099,
            "range": "± 75023232",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 3242365,
            "range": "± 27699",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1466445,
            "range": "± 8492",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 3328775,
            "range": "± 50313",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1542304,
            "range": "± 7675",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3958244,
            "range": "± 26886",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1910698,
            "range": "± 13037",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 8465934,
            "range": "± 88546",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 5136415,
            "range": "± 51671",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 45999718,
            "range": "± 994653",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 45527044,
            "range": "± 1132660",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 452570571,
            "range": "± 5419154",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 513910549,
            "range": "± 14045440",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 4054824583,
            "range": "± 39075696",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 4311206620,
            "range": "± 119838867",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dharjeezy@gmail.com",
            "name": "dharjeezy",
            "username": "dharjeezy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "f08bf1a1ff0a891c1a06ca6ff4d4be679e7346e0",
          "message": "Update Pallet Referenda to support  Block Number Provider (#6338)\n\nThis PR introduces BlockNumberProvider config for the referenda pallet.\ncloses part of https://github.com/paritytech/polkadot-sdk/issues/6297\n\nPolkadot address: 12GyGD3QhT4i2JJpNzvMf96sxxBLWymz4RdGCxRH5Rj5agKW\n\n---------\n\nCo-authored-by: muharem <ismailov.m.h@gmail.com>",
          "timestamp": "2025-02-07T07:59:51Z",
          "tree_id": "4c4a414b869a7d6c04d00e75ad2cf10f63726ff3",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/f08bf1a1ff0a891c1a06ca6ff4d4be679e7346e0"
        },
        "date": 1738918101383,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 4153470,
            "range": "± 53329",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 301490,
            "range": "± 5053",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4252072,
            "range": "± 49424",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 390044,
            "range": "± 3966",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4998614,
            "range": "± 86176",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 886579,
            "range": "± 14706",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 10536199,
            "range": "± 167313",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4707269,
            "range": "± 49509",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 45803115,
            "range": "± 508178",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 37671724,
            "range": "± 561122",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 363517812,
            "range": "± 4292293",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 296016226,
            "range": "± 2763715",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2508023447,
            "range": "± 16662304",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2560277932,
            "range": "± 54319877",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 3086646,
            "range": "± 40669",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1426513,
            "range": "± 11652",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 3090894,
            "range": "± 28919",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1498993,
            "range": "± 9232",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3704576,
            "range": "± 63456",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1833673,
            "range": "± 19472",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7882478,
            "range": "± 119204",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4805640,
            "range": "± 144383",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 43668795,
            "range": "± 739382",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 42141951,
            "range": "± 1220315",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 408684356,
            "range": "± 5555575",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 451004061,
            "range": "± 5405497",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3608796453,
            "range": "± 51132292",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3816598744,
            "range": "± 78891938",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dharjeezy@gmail.com",
            "name": "dharjeezy",
            "username": "dharjeezy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "fddb6a2c36042cf896d3006492bb15d2e2b56bae",
          "message": "Update pallet society to support Block Number Provider (#6623)\n\nThis PR introduces BlockNumberProvider config for pallet society.\ncloses part of https://github.com/paritytech/polkadot-sdk/issues/6297",
          "timestamp": "2025-02-07T08:41:18Z",
          "tree_id": "d49648e9d8da408dfc4d4c97b69f101206f4c70a",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/fddb6a2c36042cf896d3006492bb15d2e2b56bae"
        },
        "date": 1738922627146,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 4016640,
            "range": "± 61628",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 290074,
            "range": "± 3800",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4157056,
            "range": "± 30136",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 380254,
            "range": "± 8768",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4919575,
            "range": "± 150031",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 854435,
            "range": "± 21797",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 10085058,
            "range": "± 140313",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4729298,
            "range": "± 83890",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 45105014,
            "range": "± 934414",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 37573891,
            "range": "± 565918",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 350746173,
            "range": "± 10145278",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 287104235,
            "range": "± 3183633",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2541439836,
            "range": "± 42654479",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2557118901,
            "range": "± 74013739",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2918236,
            "range": "± 83779",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1410163,
            "range": "± 6603",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 3168786,
            "range": "± 84437",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1507118,
            "range": "± 18605",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3553877,
            "range": "± 39609",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1808905,
            "range": "± 15598",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7762552,
            "range": "± 79609",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4733990,
            "range": "± 75156",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 42323388,
            "range": "± 848835",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 40356163,
            "range": "± 936052",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 391240603,
            "range": "± 4361371",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 424395942,
            "range": "± 17391593",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3519371584,
            "range": "± 51698900",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3760060734,
            "range": "± 90261591",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pgherveou@gmail.com",
            "name": "PG Herveou",
            "username": "pgherveou"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "4ec221eb92a17eb682bf4124b5157d65208775bd",
          "message": "[pallet-revive] fix eth-rpc indexing (#7493)\n\n- Fix a deadlock on the RWLock cache\n- Remove eth-indexer, we won't need it anymore, the indexing will be\nstarted from within eth-rpc directly\n\n---------\n\nCo-authored-by: cmd[bot] <41898282+github-actions[bot]@users.noreply.github.com>",
          "timestamp": "2025-02-07T15:32:14Z",
          "tree_id": "c51b2735dc55f194b5f34a920215feba290be6b2",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/4ec221eb92a17eb682bf4124b5157d65208775bd"
        },
        "date": 1738945924029,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3762949,
            "range": "± 17254",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 275553,
            "range": "± 2816",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 3917545,
            "range": "± 24470",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 362824,
            "range": "± 6836",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4684737,
            "range": "± 56669",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 826572,
            "range": "± 7489",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9605722,
            "range": "± 89315",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4518125,
            "range": "± 45994",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 41725133,
            "range": "± 437430",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 35942938,
            "range": "± 228453",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 344271697,
            "range": "± 6006645",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 279885771,
            "range": "± 2180991",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2415860415,
            "range": "± 19138431",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2497583754,
            "range": "± 99045983",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2718191,
            "range": "± 11813",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1347057,
            "range": "± 11990",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2822863,
            "range": "± 19258",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1402664,
            "range": "± 17834",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3267684,
            "range": "± 11764",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1744766,
            "range": "± 17331",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7125685,
            "range": "± 140151",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4486720,
            "range": "± 42521",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 37433969,
            "range": "± 174318",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 34946476,
            "range": "± 371366",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 337271036,
            "range": "± 5010715",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 354235668,
            "range": "± 7983852",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3076315252,
            "range": "± 39214726",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3355765639,
            "range": "± 38236258",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "363911+pepoviola@users.noreply.github.com",
            "name": "Javier Viola",
            "username": "pepoviola"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "135b7183626e4ac675fe368cf11496050b9e7821",
          "message": "Zombienet gha substrate migration (#7217)\n\nMigrate subtrate's zombienet test from gitlab to gha.\n\n---------\n\nCo-authored-by: alvicsam <alvicsam@gmail.com>",
          "timestamp": "2025-02-07T16:48:31Z",
          "tree_id": "443d3e39a34ee1f6b6f14649ed62816887704c38",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/135b7183626e4ac675fe368cf11496050b9e7821"
        },
        "date": 1738950688152,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3910322,
            "range": "± 13410",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 286612,
            "range": "± 2850",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4039140,
            "range": "± 18576",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 361087,
            "range": "± 4285",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4766292,
            "range": "± 26960",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 844863,
            "range": "± 54153",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9908367,
            "range": "± 122450",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4612083,
            "range": "± 55000",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 42233032,
            "range": "± 505538",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 37439661,
            "range": "± 452206",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 349672517,
            "range": "± 4701949",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 285651466,
            "range": "± 2269765",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2453036988,
            "range": "± 8087828",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2512331077,
            "range": "± 75409464",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2780163,
            "range": "± 11404",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1375752,
            "range": "± 5417",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2856272,
            "range": "± 13220",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1436308,
            "range": "± 5600",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3410251,
            "range": "± 32505",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1754866,
            "range": "± 9551",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7446837,
            "range": "± 121366",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4596177,
            "range": "± 62139",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 41759380,
            "range": "± 475508",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 39625176,
            "range": "± 689664",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 366656909,
            "range": "± 3538820",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 398874052,
            "range": "± 6735951",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3307302515,
            "range": "± 13269884",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3595900900,
            "range": "± 74965442",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pgherveou@gmail.com",
            "name": "PG Herveou",
            "username": "pgherveou"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "49e381a959e4573b0856608576a5e81ce9ee1184",
          "message": "Fix compilation warnings  (#7507)\n\nThis should fix some compilation warnings discovered under rustc 1.83\n\n---------\n\nCo-authored-by: cmd[bot] <41898282+github-actions[bot]@users.noreply.github.com>",
          "timestamp": "2025-02-07T21:08:31Z",
          "tree_id": "8f808890daf1fac5dc67944fdd6f8a7a0c06ff0e",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/49e381a959e4573b0856608576a5e81ce9ee1184"
        },
        "date": 1738965598094,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 4050440,
            "range": "± 104208",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 288431,
            "range": "± 3712",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4198050,
            "range": "± 58070",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 385018,
            "range": "± 4011",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4937225,
            "range": "± 87952",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 841785,
            "range": "± 8801",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9916151,
            "range": "± 303078",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4486723,
            "range": "± 59552",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 42597447,
            "range": "± 1306593",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 36900230,
            "range": "± 623505",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 350556724,
            "range": "± 5215513",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 278788676,
            "range": "± 2997614",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2452080497,
            "range": "± 26994916",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2506873682,
            "range": "± 149865858",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2835620,
            "range": "± 107345",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1376863,
            "range": "± 12374",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2864698,
            "range": "± 26124",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1431183,
            "range": "± 8677",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3360383,
            "range": "± 50764",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1727042,
            "range": "± 19013",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7233281,
            "range": "± 139110",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4550271,
            "range": "± 61648",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 39290354,
            "range": "± 389904",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 37484566,
            "range": "± 714705",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 357203320,
            "range": "± 6735942",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 400603302,
            "range": "± 15806395",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3269111287,
            "range": "± 68459703",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3534793416,
            "range": "± 107321093",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dharjeezy@gmail.com",
            "name": "dharjeezy",
            "username": "dharjeezy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "10b77c95429c98412a2bb0a39436519cbf3b0950",
          "message": "Update pallet nomination pool to support Block Number Provider (#6715)\n\nThis PR introduces BlockNumberProvider config for the nomination pool\npallet.\ncloses part of https://github.com/paritytech/polkadot-sdk/issues/6297",
          "timestamp": "2025-02-08T04:44:46Z",
          "tree_id": "46b7c67c0eaf8444e6b0a2d25336cefff2a6c2f9",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/10b77c95429c98412a2bb0a39436519cbf3b0950"
        },
        "date": 1738993112872,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3838927,
            "range": "± 24047",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 278533,
            "range": "± 2852",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 3972546,
            "range": "± 30354",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 359761,
            "range": "± 3063",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4743828,
            "range": "± 36351",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 836562,
            "range": "± 9847",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9763436,
            "range": "± 131004",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4729685,
            "range": "± 38080",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 44402186,
            "range": "± 898275",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 36226803,
            "range": "± 576187",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 349466547,
            "range": "± 2844417",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 284716909,
            "range": "± 2090254",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2489634284,
            "range": "± 14206580",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2654154461,
            "range": "± 87197803",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2778335,
            "range": "± 26287",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1385240,
            "range": "± 4457",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2927658,
            "range": "± 26471",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1458661,
            "range": "± 11834",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3454525,
            "range": "± 40964",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1777141,
            "range": "± 15276",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7736383,
            "range": "± 127240",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4659103,
            "range": "± 85103",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 42822013,
            "range": "± 857540",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 40689585,
            "range": "± 1203411",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 379222910,
            "range": "± 3202928",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 444062325,
            "range": "± 8343886",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3548172317,
            "range": "± 52995782",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3646821927,
            "range": "± 95004259",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "git@kchr.de",
            "name": "Bastian Köcher",
            "username": "bkchr"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ea51bbf996c6e79f674f751491292309eb9eead9",
          "message": "pallet-revive-fixtures: Support compilation on stable (#7419)\n\nLet's burry out the old `RUSTC_BOOTSTRAP` hack. This is required when\nyou don't use `rustup` which automatically switches to the nightly\ntoolchain when it detects nightly CLI args.\n\nCo-authored-by: Alexander Theißen <alex.theissen@me.com>",
          "timestamp": "2025-02-08T12:03:02Z",
          "tree_id": "f4c9595774d53f40151c614aa8fd43c4826c3159",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/ea51bbf996c6e79f674f751491292309eb9eead9"
        },
        "date": 1739019825427,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 4324945,
            "range": "± 60280",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 318162,
            "range": "± 3620",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4523964,
            "range": "± 63786",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 404469,
            "range": "± 8446",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 5247918,
            "range": "± 56625",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 949655,
            "range": "± 22809",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 11278906,
            "range": "± 205537",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 5156551,
            "range": "± 116616",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 52100533,
            "range": "± 957917",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 40867416,
            "range": "± 283600",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 403795690,
            "range": "± 2421206",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 311140490,
            "range": "± 2266330",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2779223328,
            "range": "± 14741687",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2860667135,
            "range": "± 278981029",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 3171117,
            "range": "± 50153",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1462302,
            "range": "± 9371",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 3342621,
            "range": "± 55253",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1545316,
            "range": "± 10036",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3971684,
            "range": "± 33517",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1941791,
            "range": "± 15401",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 8585162,
            "range": "± 110078",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 5478086,
            "range": "± 169860",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 48793397,
            "range": "± 458499",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 48760954,
            "range": "± 1614051",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 465852393,
            "range": "± 7400429",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 506433532,
            "range": "± 7530427",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3970693511,
            "range": "± 82444445",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 4066116634,
            "range": "± 60642559",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "109800286+StackOverflowExcept1on@users.noreply.github.com",
            "name": "StackOverflowExcept1on",
            "username": "StackOverflowExcept1on"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2970ab151402a94c146800c769953cf6fdb6ef1d",
          "message": "feat(wasm-builder): add support for new `wasm32v1-none` target (#7008)\n\n# Description\n\nResolves #5777\n\nPreviously `wasm-builder` used hacks such as `-Zbuild-std` (required\n`rust-src` component) and `RUSTC_BOOTSTRAP=1` to build WASM runtime\nwithout WASM features: `sign-ext`, `multivalue` and `reference-types`,\nbut since Rust 1.84 (will be stable on 9 January, 2025) the situation\nhas improved as there is new\n[`wasm32v1-none`](https://doc.rust-lang.org/beta/rustc/platform-support/wasm32v1-none.html)\ntarget that disables all \"post-MVP\" WASM features except\n`mutable-globals`.\n\nPreviously, your `rust-toolchain.toml` looked like this:\n\n```toml\n[toolchain]\nchannel = \"stable\"\ncomponents = [\"rust-src\"]\ntargets = [\"wasm32-unknown-unknown\"]\nprofile = \"default\"\n```\n\nIt should now be updated to something like this:\n\n```toml\n[toolchain]\nchannel = \"stable\"\ntargets = [\"wasm32v1-none\"]\nprofile = \"default\"\n```\n\nTo build the runtime:\n\n```bash\ncargo build --package minimal-template-runtime --release\n```\n\n## Integration\n\nIf you are using Rust 1.84 and above, then install the `wasm32v1-none`\ntarget instead of `wasm32-unknown-unknown` as shown above. You can also\nremove the unnecessary `rust-src` component.\n\nAlso note the slight differences in conditional compilation:\n- `wasm32-unknown-unknown`: `#[cfg(all(target_family = \"wasm\", target_os\n= \"unknown\"))]`\n- `wasm32v1-none`: `#[cfg(all(target_family = \"wasm\", target_os =\n\"none\"))]`\n\nAvoid using `target_os = \"unknown\"` in `#[cfg(...)]` or\n`#[cfg_attr(...)]` and instead use `target_family = \"wasm\"` or\n`target_arch = \"wasm32\"` in the runtime code.\n\n## Review Notes\n\nWasm builder requires the following prerequisites for building the WASM\nbinary:\n- Rust >= 1.68 and Rust < 1.84:\n  - `wasm32-unknown-unknown` target\n  - `rust-src` component\n- Rust >= 1.84:\n  - `wasm32v1-none` target\n- no more `-Zbuild-std` and `RUSTC_BOOTSTRAP=1` hacks and `rust-src`\ncomponent requirements!\n\n---------\n\nCo-authored-by: Bastian Köcher <git@kchr.de>\nCo-authored-by: Bastian Köcher <info@kchr.de>",
          "timestamp": "2025-02-09T00:08:41Z",
          "tree_id": "4a43522910c91f653ac69fa4718807e18edf15a3",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/2970ab151402a94c146800c769953cf6fdb6ef1d"
        },
        "date": 1739063837951,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3898052,
            "range": "± 29705",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 285688,
            "range": "± 3834",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 3983704,
            "range": "± 53819",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 373630,
            "range": "± 7801",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4695904,
            "range": "± 40208",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 839656,
            "range": "± 12282",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9640009,
            "range": "± 66674",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4555480,
            "range": "± 44290",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 42046622,
            "range": "± 612888",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 35760163,
            "range": "± 496891",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 337760137,
            "range": "± 3965095",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 277561017,
            "range": "± 1677526",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2498739747,
            "range": "± 17085143",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2502409332,
            "range": "± 155962902",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2947380,
            "range": "± 32734",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1408412,
            "range": "± 4498",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 3044842,
            "range": "± 25846",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1482763,
            "range": "± 10344",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3560882,
            "range": "± 31049",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1807378,
            "range": "± 19476",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7706737,
            "range": "± 76738",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4731721,
            "range": "± 51226",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 40612418,
            "range": "± 390795",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 39504332,
            "range": "± 547014",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 384732411,
            "range": "± 4566616",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 406997521,
            "range": "± 8472702",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3396197691,
            "range": "± 28403717",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3718760642,
            "range": "± 65258792",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pgherveou@gmail.com",
            "name": "PG Herveou",
            "username": "pgherveou"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "7b0ac746e4fc26a9959b0dc1aeac2db32d3f289f",
          "message": "[pallet-revive] Add eth_get_logs (#7506)\n\nAdd support for eth_get_logs rpc method\n\n---------\n\nCo-authored-by: cmd[bot] <41898282+github-actions[bot]@users.noreply.github.com>\nCo-authored-by: xermicus <cyrill@parity.io>",
          "timestamp": "2025-02-10T15:33:16Z",
          "tree_id": "6c995cfd7bfa5866f034e7366f2f7109d9e6ae4e",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/7b0ac746e4fc26a9959b0dc1aeac2db32d3f289f"
        },
        "date": 1739204477820,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3981232,
            "range": "± 19841",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 290959,
            "range": "± 4047",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4143155,
            "range": "± 19436",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 376461,
            "range": "± 5288",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4736516,
            "range": "± 65671",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 840132,
            "range": "± 9580",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9827436,
            "range": "± 142488",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4576532,
            "range": "± 64931",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 42732525,
            "range": "± 500531",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 36436957,
            "range": "± 378237",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 346252885,
            "range": "± 2616973",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 284010627,
            "range": "± 1912551",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2470796268,
            "range": "± 12243180",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2503741816,
            "range": "± 66923214",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2876529,
            "range": "± 42747",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1408265,
            "range": "± 12075",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 3036598,
            "range": "± 38347",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1468574,
            "range": "± 12932",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3551354,
            "range": "± 64646",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1799327,
            "range": "± 19420",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7805275,
            "range": "± 98467",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4744471,
            "range": "± 50216",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 43615608,
            "range": "± 726432",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 40424150,
            "range": "± 231025",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 377743402,
            "range": "± 3818010",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 423791261,
            "range": "± 8842955",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3353988803,
            "range": "± 20654877",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3690662665,
            "range": "± 88743113",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dhiraj.kumar2990@gmail.com",
            "name": "Dhiraj Sah",
            "username": "dhirajs0"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f96da6f3c37318568a1a662f39511afa76c13791",
          "message": "transfer function Preservation is changed to Expendable  (#7243)\n\n# Description\n\nFixes #7039\n\nThe Preservation of transfer method of fungible and fungibles adapters\nis changed from Preserve to Expendable. So the behavior of the\nTransferAsset will be consistent with the WithdrawAsset function, as in\n[fungible](https://github.com/paritytech/polkadot-sdk/blob/f3ab3854e1df9e0498599f01ba4f9f152426432a/polkadot/xcm/xcm-builder/src/fungible_adapter.rs#L217)\nand [fungibles](https://github.com/paritytech/polkadot-sdk/issues/url)\nadapter.\n\nThis pull request includes changes to the `fungible_adapter.rs` and\n`fungibles_adapter.rs` files in the `polkadot/xcm/xcm-builder`\ndirectory. The main change involves modifying the transfer method to use\nthe `Expendable` strategy instead of the `Preserve` strategy.\n\nChanges to transfer strategy:\n\n*\n[`polkadot/xcm/xcm-builder/src/fungible_adapter.rs`](diffhunk://#diff-6ebd77385441f2c8b023c480e818a01c4b43ae892c73ca30144cd64ee960bd66L67-R67):\nChanged the transfer method to use `Expendable` instead of `Preserve`.\n*\n[`polkadot/xcm/xcm-builder/src/fungibles_adapter.rs`](diffhunk://#diff-82221429de4c4c88be3d2976ece6475ef4fa56a32abc70290911bd47191f8e17L61-R61):\nChanged the transfer method to use `Expendable` instead of `Preserve`.\n\n---------\n\nCo-authored-by: Francisco Aguirre <franciscoaguirreperez@gmail.com>\nCo-authored-by: Adrian Catangiu <adrian@parity.io>",
          "timestamp": "2025-02-10T16:10:47Z",
          "tree_id": "4a2e65443eece20df30b63234a762f525207ed16",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/f96da6f3c37318568a1a662f39511afa76c13791"
        },
        "date": 1739207244923,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 4119251,
            "range": "± 82463",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 306769,
            "range": "± 9513",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4274459,
            "range": "± 115407",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 406760,
            "range": "± 14907",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 5137454,
            "range": "± 113884",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 891000,
            "range": "± 14522",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 10701730,
            "range": "± 569478",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4879099,
            "range": "± 86020",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 46103395,
            "range": "± 1892816",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 39124534,
            "range": "± 1453708",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 364694673,
            "range": "± 4657628",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 299245148,
            "range": "± 5287764",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2665425129,
            "range": "± 26402126",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2753764216,
            "range": "± 59755216",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 3076463,
            "range": "± 66920",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1455411,
            "range": "± 19519",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 3172825,
            "range": "± 63104",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1562288,
            "range": "± 51506",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3866802,
            "range": "± 89987",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1852047,
            "range": "± 28788",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 8535749,
            "range": "± 306715",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 5063438,
            "range": "± 86942",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 43366115,
            "range": "± 1059180",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 42648204,
            "range": "± 989510",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 419306138,
            "range": "± 8660542",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 463294008,
            "range": "± 6467347",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3618453188,
            "range": "± 42748836",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3794886665,
            "range": "± 75165674",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "5588131+kianenigma@users.noreply.github.com",
            "name": "Kian Paimani",
            "username": "kianenigma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "bd1b02f15a65227266540df48ac22e32f90ebc34",
          "message": "update readme to link to the new polkadot-docs (#7411)\n\ncloses https://github.com/polkadot-developers/polkadot-docs/issues/238\n\n---------\n\nCo-authored-by: Guillaume Thiolliere <gui.thiolliere@gmail.com>",
          "timestamp": "2025-02-10T17:43:09Z",
          "tree_id": "ba50ca6abeea5f67bc9ae7d530c2302210e87598",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/bd1b02f15a65227266540df48ac22e32f90ebc34"
        },
        "date": 1739212362878,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 4911569,
            "range": "± 236699",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 469042,
            "range": "± 65659",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4992462,
            "range": "± 328022",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 515265,
            "range": "± 46625",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 6181920,
            "range": "± 536387",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 1203603,
            "range": "± 54068",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 12352833,
            "range": "± 845372",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 6103145,
            "range": "± 235549",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 62023310,
            "range": "± 3206844",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 46776238,
            "range": "± 1469208",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 417060952,
            "range": "± 12318350",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 318746002,
            "range": "± 7190820",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2823572552,
            "range": "± 24215365",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2915518756,
            "range": "± 76986674",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 3131401,
            "range": "± 127242",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1455312,
            "range": "± 16040",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 3155241,
            "range": "± 35684",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1523609,
            "range": "± 24237",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3751320,
            "range": "± 39215",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1931406,
            "range": "± 34270",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 8249389,
            "range": "± 135866",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 5434447,
            "range": "± 122157",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 47420707,
            "range": "± 1024998",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 47807260,
            "range": "± 829551",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 445782339,
            "range": "± 9925079",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 482607141,
            "range": "± 7363697",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3853760967,
            "range": "± 38606865",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 4037658397,
            "range": "± 83255543",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "serban@parity.io",
            "name": "Serban Iorga",
            "username": "serban300"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "71c19e4c7ca2b411722ec7d9c1392e1bd81b5681",
          "message": "Use rpc_port in bridge tests (#7520)\n\nUse `rpc_port` instead of `ws_port` in bridge tests since `ws_port` is\ndeprecated.",
          "timestamp": "2025-02-10T19:59:03Z",
          "tree_id": "96c4647f75e0df500deb6ee9124dc02bcb7e51a5",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/71c19e4c7ca2b411722ec7d9c1392e1bd81b5681"
        },
        "date": 1739220408915,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3819778,
            "range": "± 42678",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 278015,
            "range": "± 3749",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 3945264,
            "range": "± 20144",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 354586,
            "range": "± 3031",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4599620,
            "range": "± 60005",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 828447,
            "range": "± 15591",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 9479760,
            "range": "± 100600",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4473013,
            "range": "± 58632",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 41051875,
            "range": "± 577166",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 35903807,
            "range": "± 219476",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 333482575,
            "range": "± 2736187",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 273895949,
            "range": "± 1406410",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2403962328,
            "range": "± 9892481",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2588188250,
            "range": "± 91769929",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2778858,
            "range": "± 23573",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1371097,
            "range": "± 16324",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2904585,
            "range": "± 14157",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1416667,
            "range": "± 20734",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3381030,
            "range": "± 31145",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1740479,
            "range": "± 9360",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7379598,
            "range": "± 76128",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4566685,
            "range": "± 51711",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 40022840,
            "range": "± 524272",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 37542519,
            "range": "± 381700",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 360934882,
            "range": "± 5846524",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 387449165,
            "range": "± 5876442",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3285863494,
            "range": "± 31725047",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3500510946,
            "range": "± 35089666",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gui.thiolliere@gmail.com",
            "name": "Guillaume Thiolliere",
            "username": "gui1117"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6786bbcba95e1c2cc634f38d7276c077f8087f4a",
          "message": "Warn about cargo remote not copying hidden file by default (#7429)\n\nadd a warning about hidden file not transfered.\n\ncargo remote is not really configurable so I just use my own fork for\nnow: https://github.com/sgeisler/cargo-remote/pull/25",
          "timestamp": "2025-02-12T06:38:10Z",
          "tree_id": "7f6cf22c06218f727ea8421253c26cda6d320e3e",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/6786bbcba95e1c2cc634f38d7276c077f8087f4a"
        },
        "date": 1739345153258,
        "tool": "cargo",
        "benches": [
          {
            "name": "notifications_protocol/libp2p/serially/64B",
            "value": 3954026,
            "range": "± 45020",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64B",
            "value": 290379,
            "range": "± 3547",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/512B",
            "value": 4105457,
            "range": "± 27598",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/512B",
            "value": 375084,
            "range": "± 3880",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/4KB",
            "value": 4954430,
            "range": "± 67938",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/4KB",
            "value": 885767,
            "range": "± 13541",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/64KB",
            "value": 10190967,
            "range": "± 106522",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/64KB",
            "value": 4938845,
            "range": "± 88658",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/256KB",
            "value": 46890636,
            "range": "± 871363",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/256KB",
            "value": 38306894,
            "range": "± 701139",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/2MB",
            "value": 363583853,
            "range": "± 3544853",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/2MB",
            "value": 292319950,
            "range": "± 3383369",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/serially/16MB",
            "value": 2546592749,
            "range": "± 11556984",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/libp2p/with_backpressure/16MB",
            "value": 2732492822,
            "range": "± 54341225",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64B",
            "value": 2793023,
            "range": "± 11312",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64B",
            "value": 1379031,
            "range": "± 11099",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/512B",
            "value": 2904365,
            "range": "± 18513",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/512B",
            "value": 1447139,
            "range": "± 10122",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/4KB",
            "value": 3469666,
            "range": "± 28364",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/4KB",
            "value": 1787449,
            "range": "± 10080",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/64KB",
            "value": 7823609,
            "range": "± 110487",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/64KB",
            "value": 4859560,
            "range": "± 59579",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/256KB",
            "value": 44813807,
            "range": "± 425305",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/256KB",
            "value": 43667968,
            "range": "± 1319893",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/2MB",
            "value": 392579400,
            "range": "± 5484516",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/2MB",
            "value": 455571045,
            "range": "± 7601123",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/serially/16MB",
            "value": 3612908097,
            "range": "± 43304079",
            "unit": "ns/iter"
          },
          {
            "name": "notifications_protocol/litep2p/with_backpressure/16MB",
            "value": 3845040514,
            "range": "± 64175436",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}