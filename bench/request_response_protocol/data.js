window.BENCHMARK_DATA = {
  "lastUpdate": 1739220450083,
  "repoUrl": "https://github.com/paritytech/polkadot-sdk",
  "entries": {
    "request_response_protocol": [
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
        "date": 1736449911762,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 17163862,
            "range": "± 170203",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 17446070,
            "range": "± 164252",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 18730101,
            "range": "± 98579",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 22547421,
            "range": "± 293148",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 50727588,
            "range": "± 643035",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 300331693,
            "range": "± 3948705",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2091391647,
            "range": "± 54342059",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14256263,
            "range": "± 109675",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14412977,
            "range": "± 77653",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 14771320,
            "range": "± 98653",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 18936940,
            "range": "± 137625",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 49662562,
            "range": "± 413487",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 291586625,
            "range": "± 4639808",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2308878584,
            "range": "± 8781236",
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
        "date": 1736478677328,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 17513611,
            "range": "± 231894",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 17747614,
            "range": "± 158066",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19342746,
            "range": "± 92774",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 23054691,
            "range": "± 164988",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 52100650,
            "range": "± 407725",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 313787855,
            "range": "± 2904933",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2337544694,
            "range": "± 119956966",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14631080,
            "range": "± 84241",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14840693,
            "range": "± 117272",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15424874,
            "range": "± 209023",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 19730480,
            "range": "± 136949",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 50191870,
            "range": "± 441053",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 299081098,
            "range": "± 1880044",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2405092455,
            "range": "± 9514900",
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
        "date": 1736594645848,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 18044700,
            "range": "± 153767",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 18331354,
            "range": "± 167473",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 20147906,
            "range": "± 344420",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 23977172,
            "range": "± 319112",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 53129643,
            "range": "± 635022",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 317087858,
            "range": "± 4521386",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2413386156,
            "range": "± 31594654",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 15036676,
            "range": "± 118681",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 15074889,
            "range": "± 104668",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15857748,
            "range": "± 235167",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 20039519,
            "range": "± 173065",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 50820511,
            "range": "± 692420",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 308376455,
            "range": "± 3036490",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2460718408,
            "range": "± 6624429",
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
        "date": 1736775176661,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 17639219,
            "range": "± 234844",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 17906936,
            "range": "± 188639",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19398134,
            "range": "± 139774",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 23110768,
            "range": "± 179179",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 55345609,
            "range": "± 1069731",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 320737970,
            "range": "± 8971466",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2344482664,
            "range": "± 65530518",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14592616,
            "range": "± 191900",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14855276,
            "range": "± 112557",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15342068,
            "range": "± 151346",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 19772082,
            "range": "± 159814",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 52121899,
            "range": "± 296503",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 318478991,
            "range": "± 3338407",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2513740445,
            "range": "± 22113207",
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
        "date": 1736784087882,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 18018663,
            "range": "± 273071",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 17634888,
            "range": "± 67745",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19368755,
            "range": "± 298109",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 23258470,
            "range": "± 289207",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 51975347,
            "range": "± 470598",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 291360469,
            "range": "± 2392874",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2433093474,
            "range": "± 17063120",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14358250,
            "range": "± 67345",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14626759,
            "range": "± 124568",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 14901564,
            "range": "± 137575",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 18956808,
            "range": "± 86040",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 50747715,
            "range": "± 593781",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 292926166,
            "range": "± 3960874",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2370491534,
            "range": "± 41198195",
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
        "date": 1736793223534,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 17037566,
            "range": "± 91575",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 17227602,
            "range": "± 113959",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 18721782,
            "range": "± 91561",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 22471893,
            "range": "± 186497",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 50006160,
            "range": "± 1505467",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 289683491,
            "range": "± 2550640",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2228352738,
            "range": "± 112499268",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14104640,
            "range": "± 97418",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14108451,
            "range": "± 58367",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 14556976,
            "range": "± 92937",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 18683920,
            "range": "± 127622",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 47644153,
            "range": "± 318348",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 281509357,
            "range": "± 1293849",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2244328548,
            "range": "± 11468921",
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
        "date": 1736847226606,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 19462857,
            "range": "± 598925",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 20225289,
            "range": "± 1177085",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 21414985,
            "range": "± 516276",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 26637736,
            "range": "± 1089928",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 58545195,
            "range": "± 1893684",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 356625882,
            "range": "± 4046990",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2354886616,
            "range": "± 147484564",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14799189,
            "range": "± 145343",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 15280767,
            "range": "± 64215",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15823890,
            "range": "± 133161",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 24771051,
            "range": "± 853048",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 61867496,
            "range": "± 3128815",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 392129254,
            "range": "± 18397344",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2952516885,
            "range": "± 51666969",
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
        "date": 1736865049178,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 18258120,
            "range": "± 168392",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 18475138,
            "range": "± 261401",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 20109765,
            "range": "± 141889",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 23463644,
            "range": "± 281495",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 52862185,
            "range": "± 447627",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 311528806,
            "range": "± 9209973",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2378817914,
            "range": "± 95238790",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14930493,
            "range": "± 115190",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 15193451,
            "range": "± 79032",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15605536,
            "range": "± 122620",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 19487293,
            "range": "± 278402",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 50674982,
            "range": "± 478004",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 301902494,
            "range": "± 3710570",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2434776357,
            "range": "± 25814766",
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
        "date": 1736866697263,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 18334732,
            "range": "± 117265",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 18478726,
            "range": "± 201625",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 20085042,
            "range": "± 234649",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 23438229,
            "range": "± 146186",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 52948075,
            "range": "± 702613",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 316621583,
            "range": "± 7963195",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2525076169,
            "range": "± 103338396",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14845301,
            "range": "± 114393",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14939408,
            "range": "± 122964",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15419460,
            "range": "± 157795",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 19386973,
            "range": "± 224999",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 50332012,
            "range": "± 248799",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 300579505,
            "range": "± 3167964",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2453529695,
            "range": "± 21238059",
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
        "date": 1736869550482,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 19779909,
            "range": "± 439717",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 19894140,
            "range": "± 312859",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 21667174,
            "range": "± 294044",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 25449483,
            "range": "± 304446",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 61802876,
            "range": "± 1301090",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 380588393,
            "range": "± 5535300",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2594898336,
            "range": "± 80868651",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 16271569,
            "range": "± 190294",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 16417142,
            "range": "± 135317",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 16976098,
            "range": "± 138724",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 21446072,
            "range": "± 379223",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 55648752,
            "range": "± 750986",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 341691336,
            "range": "± 2639587",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2675359995,
            "range": "± 26922907",
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
        "date": 1736877700755,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 17175140,
            "range": "± 144091",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 18112687,
            "range": "± 313904",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19316438,
            "range": "± 86244",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 23070150,
            "range": "± 117672",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 53363617,
            "range": "± 2016094",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 314185597,
            "range": "± 8152695",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2318622229,
            "range": "± 62064152",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14991231,
            "range": "± 229294",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 15276196,
            "range": "± 137495",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15675463,
            "range": "± 301759",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 20346687,
            "range": "± 164529",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 51042604,
            "range": "± 383701",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 304804620,
            "range": "± 2184821",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2420487989,
            "range": "± 11266299",
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
        "date": 1736880397020,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 18165065,
            "range": "± 190980",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 18286268,
            "range": "± 210677",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 20021115,
            "range": "± 392823",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 23443791,
            "range": "± 150845",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 53241323,
            "range": "± 410480",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 306596809,
            "range": "± 2418646",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2533432411,
            "range": "± 43407896",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14947791,
            "range": "± 96630",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 15258953,
            "range": "± 136218",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15845731,
            "range": "± 164053",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 19511629,
            "range": "± 138963",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 51047941,
            "range": "± 1254996",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 307126744,
            "range": "± 2700022",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2426136602,
            "range": "± 16201609",
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
        "date": 1736887781488,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 19326492,
            "range": "± 192239",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 19568984,
            "range": "± 237771",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 21620253,
            "range": "± 195700",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 25280870,
            "range": "± 198142",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 55589853,
            "range": "± 621510",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 362998845,
            "range": "± 8023013",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2565082540,
            "range": "± 118976847",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 15942265,
            "range": "± 114508",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 15985412,
            "range": "± 79738",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 16293529,
            "range": "± 146380",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 20539328,
            "range": "± 187988",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 52601713,
            "range": "± 427856",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 332849201,
            "range": "± 2675278",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2550310247,
            "range": "± 11374664",
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
        "date": 1736889236001,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 18706619,
            "range": "± 165714",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 19255104,
            "range": "± 345992",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 20911502,
            "range": "± 164935",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 25370905,
            "range": "± 475262",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 63313080,
            "range": "± 1410083",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 406209658,
            "range": "± 7306113",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2504138350,
            "range": "± 106585985",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 15681205,
            "range": "± 449218",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 15945439,
            "range": "± 119874",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 16523680,
            "range": "± 134349",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 21422392,
            "range": "± 180345",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 59244545,
            "range": "± 1008938",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 363103114,
            "range": "± 10768721",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2817715625,
            "range": "± 46035714",
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
        "date": 1736897829845,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 17722201,
            "range": "± 116282",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 18012556,
            "range": "± 177550",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19381997,
            "range": "± 109964",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 22946110,
            "range": "± 181601",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 51386664,
            "range": "± 435439",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 292305767,
            "range": "± 4514382",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2352164298,
            "range": "± 65310014",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14230879,
            "range": "± 107403",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14377533,
            "range": "± 96294",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15098952,
            "range": "± 112444",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 19361823,
            "range": "± 184034",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 50307501,
            "range": "± 409590",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 297428866,
            "range": "± 1987586",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2470574263,
            "range": "± 17857659",
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
        "date": 1736935766797,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 18408807,
            "range": "± 355811",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 18457808,
            "range": "± 263289",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19801345,
            "range": "± 292748",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 24000614,
            "range": "± 260191",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 53346613,
            "range": "± 493793",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 315930032,
            "range": "± 6811735",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2596476385,
            "range": "± 28124692",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14977752,
            "range": "± 526668",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 15249615,
            "range": "± 241734",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15739770,
            "range": "± 150608",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 19654452,
            "range": "± 197491",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 50821643,
            "range": "± 225568",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 304634582,
            "range": "± 3193676",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2454352580,
            "range": "± 10160829",
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
        "date": 1736944100208,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 17611124,
            "range": "± 168550",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 17922403,
            "range": "± 90481",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19266958,
            "range": "± 261691",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 22983394,
            "range": "± 234550",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 51394167,
            "range": "± 442708",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 292396407,
            "range": "± 2873177",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2323722628,
            "range": "± 75890400",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14422717,
            "range": "± 174704",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14605702,
            "range": "± 104698",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15182823,
            "range": "± 149796",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 18811332,
            "range": "± 188290",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 49651859,
            "range": "± 261695",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 293475543,
            "range": "± 2014055",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2379715345,
            "range": "± 13962787",
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
        "date": 1736950854839,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 18128549,
            "range": "± 117859",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 18179551,
            "range": "± 176411",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19698538,
            "range": "± 211171",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 23526145,
            "range": "± 216141",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 52949353,
            "range": "± 783449",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 309730096,
            "range": "± 6435843",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2310416654,
            "range": "± 67131835",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14746141,
            "range": "± 265145",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14624380,
            "range": "± 151870",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15303350,
            "range": "± 171911",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 19004387,
            "range": "± 115996",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 49388843,
            "range": "± 535637",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 296602487,
            "range": "± 4244718",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2402669328,
            "range": "± 26473664",
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
        "date": 1736952526432,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 18254286,
            "range": "± 121382",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 18609699,
            "range": "± 316668",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19709322,
            "range": "± 175699",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 23949767,
            "range": "± 242271",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 53978128,
            "range": "± 543126",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 316571212,
            "range": "± 4624985",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2421168844,
            "range": "± 58228106",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 15287954,
            "range": "± 166398",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 15295784,
            "range": "± 178520",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15771912,
            "range": "± 189753",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 20025963,
            "range": "± 331182",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 51565054,
            "range": "± 781983",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 309242359,
            "range": "± 4312550",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2474618025,
            "range": "± 21670842",
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
        "date": 1736965673094,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 17939690,
            "range": "± 156078",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 18148230,
            "range": "± 187454",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19709998,
            "range": "± 140061",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 23489686,
            "range": "± 220391",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 53548192,
            "range": "± 529866",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 298153051,
            "range": "± 3285810",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2452752745,
            "range": "± 66316983",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14627982,
            "range": "± 97753",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14801115,
            "range": "± 102672",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15265155,
            "range": "± 187311",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 19238177,
            "range": "± 206352",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 49708940,
            "range": "± 622625",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 298148610,
            "range": "± 3889401",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2414731202,
            "range": "± 22682292",
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
        "date": 1736972027688,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 18372717,
            "range": "± 210143",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 18462748,
            "range": "± 117987",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19652310,
            "range": "± 121453",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 23562077,
            "range": "± 162544",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 53478752,
            "range": "± 1090746",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 316001707,
            "range": "± 3132883",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2331506604,
            "range": "± 110256047",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14653478,
            "range": "± 173976",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14731829,
            "range": "± 125117",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15386650,
            "range": "± 139801",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 19365751,
            "range": "± 213118",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 49751117,
            "range": "± 398216",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 294616068,
            "range": "± 2625649",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2408988939,
            "range": "± 28171907",
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
        "date": 1737012046386,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 19157804,
            "range": "± 203729",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 19553379,
            "range": "± 170674",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 21033152,
            "range": "± 248042",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 25787654,
            "range": "± 625285",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 65422726,
            "range": "± 1271536",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 407165643,
            "range": "± 9054261",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2538724429,
            "range": "± 165946431",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 16091513,
            "range": "± 213653",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 16174168,
            "range": "± 190838",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 16682004,
            "range": "± 181863",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 21732154,
            "range": "± 861978",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 53994686,
            "range": "± 3273159",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 374258182,
            "range": "± 21142073",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2830854255,
            "range": "± 83814457",
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
        "date": 1737039043274,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 17584553,
            "range": "± 248876",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 17675994,
            "range": "± 83401",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19180723,
            "range": "± 112837",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 22694589,
            "range": "± 103193",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 50526010,
            "range": "± 410379",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 287769114,
            "range": "± 1719335",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2196478209,
            "range": "± 21133490",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14319864,
            "range": "± 141768",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14407371,
            "range": "± 91929",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 14886917,
            "range": "± 71010",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 18950257,
            "range": "± 253863",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 49476953,
            "range": "± 218857",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 294394284,
            "range": "± 2003880",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2349405061,
            "range": "± 37038070",
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
        "date": 1737044377210,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 19945056,
            "range": "± 426716",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 20032928,
            "range": "± 425297",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 22292701,
            "range": "± 643098",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 28099924,
            "range": "± 1394811",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 68451246,
            "range": "± 2794289",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 428333459,
            "range": "± 9289883",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2574827317,
            "range": "± 213720637",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 16584153,
            "range": "± 336899",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 16546325,
            "range": "± 237883",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 17876652,
            "range": "± 307422",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 23219119,
            "range": "± 1084064",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 63226169,
            "range": "± 894853",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 395282150,
            "range": "± 13401989",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2857880129,
            "range": "± 66590516",
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
        "date": 1737046705925,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 18168708,
            "range": "± 121752",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 18533278,
            "range": "± 137708",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 20148580,
            "range": "± 497248",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 23597340,
            "range": "± 191963",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 52244377,
            "range": "± 471469",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 301079748,
            "range": "± 2459829",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2495852104,
            "range": "± 42486797",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 15064551,
            "range": "± 90439",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 15126610,
            "range": "± 210687",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15605269,
            "range": "± 113899",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 19447320,
            "range": "± 195116",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 50621768,
            "range": "± 394179",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 306056897,
            "range": "± 3453280",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2435107403,
            "range": "± 17259492",
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
        "date": 1737118318915,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 18088388,
            "range": "± 228949",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 18042711,
            "range": "± 141304",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19455012,
            "range": "± 170870",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 23911112,
            "range": "± 467793",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 56609937,
            "range": "± 1310417",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 336995393,
            "range": "± 6659536",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2778740486,
            "range": "± 103991073",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14889067,
            "range": "± 244241",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 15126065,
            "range": "± 212413",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 16249191,
            "range": "± 354192",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 20056750,
            "range": "± 450755",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 52206620,
            "range": "± 1214898",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 321376342,
            "range": "± 9783716",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2606503249,
            "range": "± 67805264",
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
        "date": 1737128852258,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 18364193,
            "range": "± 881274",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 18608187,
            "range": "± 162908",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 20405683,
            "range": "± 633656",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 24566062,
            "range": "± 315871",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 57668950,
            "range": "± 1268082",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 354008420,
            "range": "± 8009030",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2572046074,
            "range": "± 109938897",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 15443759,
            "range": "± 183487",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 15350356,
            "range": "± 130783",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15940296,
            "range": "± 164453",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 19961632,
            "range": "± 259145",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 52153794,
            "range": "± 660727",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 316226044,
            "range": "± 5220342",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2523189047,
            "range": "± 20851527",
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
        "date": 1737136366940,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 18304738,
            "range": "± 191073",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 18527236,
            "range": "± 281673",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 20043720,
            "range": "± 226665",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 23781324,
            "range": "± 162492",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 54567179,
            "range": "± 817817",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 313420659,
            "range": "± 4555487",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2605308384,
            "range": "± 45571261",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14677700,
            "range": "± 141201",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14765049,
            "range": "± 86961",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15236255,
            "range": "± 124141",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 19210241,
            "range": "± 115039",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 51714726,
            "range": "± 831038",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 307169871,
            "range": "± 2961139",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2438498238,
            "range": "± 11898175",
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
        "date": 1737147608745,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 17979571,
            "range": "± 229661",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 18244692,
            "range": "± 150519",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19763823,
            "range": "± 132968",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 23496696,
            "range": "± 504601",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 52131354,
            "range": "± 457737",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 309407290,
            "range": "± 2527716",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2406364477,
            "range": "± 86731526",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14765115,
            "range": "± 105120",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14854341,
            "range": "± 119648",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15258502,
            "range": "± 72031",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 19361630,
            "range": "± 242393",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 50663308,
            "range": "± 489173",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 304482389,
            "range": "± 3026713",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2386263416,
            "range": "± 31593728",
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
        "date": 1737372833952,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 21112001,
            "range": "± 726247",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 20952942,
            "range": "± 1053150",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 21958949,
            "range": "± 332781",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 26553717,
            "range": "± 641259",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 63482603,
            "range": "± 2311791",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 430378516,
            "range": "± 15308694",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2896325497,
            "range": "± 235769895",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 15668955,
            "range": "± 485238",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 16594168,
            "range": "± 423578",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 17661021,
            "range": "± 438277",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 22989128,
            "range": "± 895428",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 60803065,
            "range": "± 1734343",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 409673043,
            "range": "± 12780549",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2947073658,
            "range": "± 63584767",
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
        "date": 1737374176727,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 17422732,
            "range": "± 119219",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 17708208,
            "range": "± 100861",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19427012,
            "range": "± 141533",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 22912638,
            "range": "± 170760",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 52536572,
            "range": "± 770324",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 325779334,
            "range": "± 5149128",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2300108714,
            "range": "± 72743446",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14426000,
            "range": "± 142949",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14492808,
            "range": "± 97496",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15027981,
            "range": "± 91093",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 19263461,
            "range": "± 116918",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 50104357,
            "range": "± 590082",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 293283706,
            "range": "± 1721853",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2420889348,
            "range": "± 11376355",
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
        "date": 1737376869300,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 18771338,
            "range": "± 242423",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 18791059,
            "range": "± 256843",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 20144976,
            "range": "± 291039",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 23690349,
            "range": "± 153020",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 52603663,
            "range": "± 2269605",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 319913688,
            "range": "± 9578750",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2538452292,
            "range": "± 105117903",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 15262462,
            "range": "± 171255",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 15562067,
            "range": "± 177331",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 16148001,
            "range": "± 245144",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 20052853,
            "range": "± 200616",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 51687520,
            "range": "± 573038",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 308609914,
            "range": "± 5033150",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2434308809,
            "range": "± 13042974",
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
        "date": 1737385973042,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 16879660,
            "range": "± 165255",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 17188718,
            "range": "± 101153",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 18712548,
            "range": "± 170822",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 22439961,
            "range": "± 179765",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 50331570,
            "range": "± 432563",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 295769453,
            "range": "± 1602481",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2300071111,
            "range": "± 21113938",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14220818,
            "range": "± 153346",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14293497,
            "range": "± 67882",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 14745967,
            "range": "± 124850",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 18616681,
            "range": "± 137998",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 47651938,
            "range": "± 472286",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 282228495,
            "range": "± 1470248",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2247880839,
            "range": "± 7725470",
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
        "date": 1737393330228,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 18055831,
            "range": "± 359936",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 18157697,
            "range": "± 399030",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19826214,
            "range": "± 426007",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 23375077,
            "range": "± 590290",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 53265825,
            "range": "± 830529",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 311195248,
            "range": "± 7229491",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2508621951,
            "range": "± 37513773",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 15123148,
            "range": "± 247343",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 15039146,
            "range": "± 340111",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15525050,
            "range": "± 253736",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 19459771,
            "range": "± 317878",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 51177997,
            "range": "± 1324533",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 314552697,
            "range": "± 10126109",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2504317267,
            "range": "± 15786540",
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
        "date": 1737410999170,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 18488390,
            "range": "± 123986",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 18795468,
            "range": "± 144980",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 20219790,
            "range": "± 116871",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 23654992,
            "range": "± 75707",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 53554239,
            "range": "± 427420",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 319764511,
            "range": "± 5692119",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2472618270,
            "range": "± 27808887",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 15085718,
            "range": "± 109104",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14982627,
            "range": "± 95447",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15703470,
            "range": "± 171769",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 19530417,
            "range": "± 185213",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 50712341,
            "range": "± 358775",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 305581430,
            "range": "± 1468290",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2442363349,
            "range": "± 23000516",
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
        "date": 1737417148279,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 17271208,
            "range": "± 78850",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 17734759,
            "range": "± 303563",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 18990916,
            "range": "± 92565",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 22585603,
            "range": "± 132385",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 51221295,
            "range": "± 562658",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 283401812,
            "range": "± 2346370",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2249084970,
            "range": "± 66563554",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14261144,
            "range": "± 85620",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14359887,
            "range": "± 56477",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 14723154,
            "range": "± 83250",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 18532906,
            "range": "± 390122",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 48480680,
            "range": "± 387844",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 286442338,
            "range": "± 1784820",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2304917879,
            "range": "± 6397679",
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
        "date": 1737456413662,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 20306283,
            "range": "± 256890",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 20767347,
            "range": "± 297831",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 21873982,
            "range": "± 301200",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 26871701,
            "range": "± 451244",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 66525852,
            "range": "± 1640230",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 421653578,
            "range": "± 20746923",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 3071179289,
            "range": "± 36423565",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 16236375,
            "range": "± 315976",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 16315818,
            "range": "± 202432",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 16626545,
            "range": "± 246160",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 20993207,
            "range": "± 257717",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 57320684,
            "range": "± 1201455",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 358290060,
            "range": "± 4793232",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2707290220,
            "range": "± 28684018",
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
        "date": 1737471726801,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 17536198,
            "range": "± 121212",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 17822261,
            "range": "± 158020",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19370525,
            "range": "± 182193",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 23222848,
            "range": "± 297414",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 53059338,
            "range": "± 931496",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 298218217,
            "range": "± 4239266",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2425768999,
            "range": "± 143731600",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14610346,
            "range": "± 100562",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14753882,
            "range": "± 175556",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15126000,
            "range": "± 63805",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 19213816,
            "range": "± 239018",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 50386080,
            "range": "± 454901",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 293042735,
            "range": "± 3270371",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2402432828,
            "range": "± 19039944",
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
        "date": 1737484329186,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 18168111,
            "range": "± 277561",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 18310431,
            "range": "± 223262",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19844693,
            "range": "± 340508",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 23443474,
            "range": "± 272682",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 53665757,
            "range": "± 906228",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 329267549,
            "range": "± 7203906",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2294490715,
            "range": "± 15736389",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14754657,
            "range": "± 102915",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 15044332,
            "range": "± 204200",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15471691,
            "range": "± 234583",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 20123475,
            "range": "± 213903",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 51503133,
            "range": "± 1159902",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 304912064,
            "range": "± 4478959",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2438996186,
            "range": "± 18266391",
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
        "date": 1737497719905,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 17484087,
            "range": "± 99771",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 17653061,
            "range": "± 152585",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19324279,
            "range": "± 181899",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 23097042,
            "range": "± 248508",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 52763241,
            "range": "± 787546",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 301224907,
            "range": "± 2977872",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2238912573,
            "range": "± 206256952",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14594413,
            "range": "± 304915",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14864407,
            "range": "± 103757",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15766852,
            "range": "± 126979",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 20077951,
            "range": "± 141129",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 52139893,
            "range": "± 814045",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 308676962,
            "range": "± 4359186",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2496544685,
            "range": "± 13279994",
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
        "date": 1737543139601,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 17224821,
            "range": "± 116992",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 17448861,
            "range": "± 99986",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 18817058,
            "range": "± 153966",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 22614653,
            "range": "± 149322",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 50725963,
            "range": "± 743826",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 296387354,
            "range": "± 1899947",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2285090349,
            "range": "± 88699847",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14238295,
            "range": "± 90789",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14374416,
            "range": "± 148270",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 14936959,
            "range": "± 112108",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 18747434,
            "range": "± 150100",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 49110568,
            "range": "± 509353",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 287227092,
            "range": "± 2175720",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2350864227,
            "range": "± 15553045",
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
        "date": 1737547225841,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 17591905,
            "range": "± 77275",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 17730249,
            "range": "± 104764",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19462014,
            "range": "± 179451",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 23200596,
            "range": "± 635097",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 54191053,
            "range": "± 918803",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 318372087,
            "range": "± 6020272",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2513454153,
            "range": "± 88076012",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14662274,
            "range": "± 228111",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14750960,
            "range": "± 143480",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15411144,
            "range": "± 143059",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 19954494,
            "range": "± 209327",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 51675146,
            "range": "± 785096",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 297467984,
            "range": "± 10443551",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2431374621,
            "range": "± 8103863",
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
        "date": 1737561444305,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 18108598,
            "range": "± 165680",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 18310336,
            "range": "± 140417",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19678926,
            "range": "± 302175",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 23109195,
            "range": "± 268722",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 52575587,
            "range": "± 716830",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 306634454,
            "range": "± 5461515",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2333421654,
            "range": "± 140510288",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14288670,
            "range": "± 96746",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14420693,
            "range": "± 72385",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 14965166,
            "range": "± 153477",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 18890398,
            "range": "± 273190",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 48738512,
            "range": "± 616012",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 291343607,
            "range": "± 3171234",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2367260950,
            "range": "± 27798952",
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
        "date": 1737567871593,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 17332101,
            "range": "± 115518",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 17632435,
            "range": "± 101645",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 18894011,
            "range": "± 137294",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 22823920,
            "range": "± 195523",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 50696494,
            "range": "± 448459",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 294930390,
            "range": "± 3920965",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2129239854,
            "range": "± 51248077",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14267666,
            "range": "± 106998",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14283890,
            "range": "± 49221",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 14761581,
            "range": "± 117305",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 18980312,
            "range": "± 141705",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 49340374,
            "range": "± 277101",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 291494936,
            "range": "± 2458394",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2325664147,
            "range": "± 22865042",
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
        "date": 1737572766849,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 17237123,
            "range": "± 106362",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 17671202,
            "range": "± 177271",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19406711,
            "range": "± 185884",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 23367225,
            "range": "± 597672",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 52198169,
            "range": "± 646307",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 305708857,
            "range": "± 3552246",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2361844739,
            "range": "± 89160907",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14173896,
            "range": "± 229627",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14449298,
            "range": "± 173353",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15026028,
            "range": "± 253742",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 19080091,
            "range": "± 130106",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 49440458,
            "range": "± 287564",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 293193870,
            "range": "± 2678446",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2404568047,
            "range": "± 50529481",
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
        "date": 1737629826349,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 18781640,
            "range": "± 179580",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 19050687,
            "range": "± 175550",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 20798941,
            "range": "± 177402",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 24204258,
            "range": "± 295582",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 58562282,
            "range": "± 760222",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 358961761,
            "range": "± 6718371",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2721471337,
            "range": "± 120880540",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 15383674,
            "range": "± 112010",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 15589071,
            "range": "± 144749",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 16359587,
            "range": "± 88849",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 20643808,
            "range": "± 181466",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 53042867,
            "range": "± 1177312",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 336537600,
            "range": "± 6918551",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2604747510,
            "range": "± 16206172",
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
        "date": 1737632211537,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 18932331,
            "range": "± 151984",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 19281512,
            "range": "± 185162",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 20812886,
            "range": "± 143042",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 24880598,
            "range": "± 250352",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 60380771,
            "range": "± 1167993",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 375000230,
            "range": "± 6402899",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2787588806,
            "range": "± 95369334",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 15338349,
            "range": "± 149803",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 15580666,
            "range": "± 183796",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15935156,
            "range": "± 181187",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 20625851,
            "range": "± 125753",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 56529413,
            "range": "± 1499200",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 362834088,
            "range": "± 5877065",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2714415511,
            "range": "± 60071106",
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
        "date": 1737633469336,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 17793999,
            "range": "± 126295",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 18105917,
            "range": "± 110302",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19539554,
            "range": "± 266454",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 23535606,
            "range": "± 163742",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 53388152,
            "range": "± 3292138",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 321196958,
            "range": "± 4978903",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2480094138,
            "range": "± 45485034",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14253662,
            "range": "± 54257",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14291859,
            "range": "± 193633",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 14835416,
            "range": "± 118965",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 18904611,
            "range": "± 157572",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 49232196,
            "range": "± 623740",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 288564137,
            "range": "± 2429554",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2360878487,
            "range": "± 14353806",
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
        "date": 1737636767248,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 18789188,
            "range": "± 132891",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 19169474,
            "range": "± 151668",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 20735723,
            "range": "± 207118",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 24751662,
            "range": "± 427873",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 57624261,
            "range": "± 1444681",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 369108787,
            "range": "± 8881839",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2738784992,
            "range": "± 85629670",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 15402871,
            "range": "± 64531",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 15659988,
            "range": "± 104368",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 16207852,
            "range": "± 207429",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 20314007,
            "range": "± 141289",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 52159553,
            "range": "± 545489",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 338681235,
            "range": "± 5778508",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2584877417,
            "range": "± 61762454",
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
        "date": 1737640514895,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 19348123,
            "range": "± 223452",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 19550012,
            "range": "± 175021",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 20966958,
            "range": "± 316762",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 25330550,
            "range": "± 562622",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 57067195,
            "range": "± 1862717",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 368858853,
            "range": "± 5529146",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2731726867,
            "range": "± 60806804",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 15425503,
            "range": "± 107234",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 15459858,
            "range": "± 167566",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15937410,
            "range": "± 178311",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 20663978,
            "range": "± 182366",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 52456608,
            "range": "± 760680",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 330437967,
            "range": "± 3329495",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2524818790,
            "range": "± 12921281",
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
        "date": 1737642047643,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 17646943,
            "range": "± 279730",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 17874774,
            "range": "± 162539",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19354280,
            "range": "± 142041",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 23000629,
            "range": "± 114160",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 51387600,
            "range": "± 744773",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 295605833,
            "range": "± 4715702",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2111008169,
            "range": "± 62805932",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14047498,
            "range": "± 90950",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14265292,
            "range": "± 201824",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 14677955,
            "range": "± 32615",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 18979005,
            "range": "± 98397",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 49091699,
            "range": "± 292918",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 292106444,
            "range": "± 1461272",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2278335567,
            "range": "± 13883628",
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
        "date": 1737651588012,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 17764904,
            "range": "± 151591",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 17906625,
            "range": "± 98109",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19295712,
            "range": "± 81280",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 22717280,
            "range": "± 185742",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 51590228,
            "range": "± 536510",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 310371598,
            "range": "± 2513197",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2396185613,
            "range": "± 80891417",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14477255,
            "range": "± 139053",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14676122,
            "range": "± 55407",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 14915548,
            "range": "± 227341",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 19285700,
            "range": "± 111626",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 50536645,
            "range": "± 168011",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 303567042,
            "range": "± 5384957",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2391610028,
            "range": "± 36893923",
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
        "date": 1737724841001,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 17473009,
            "range": "± 320867",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 17936649,
            "range": "± 238976",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19345985,
            "range": "± 113839",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 23209482,
            "range": "± 215900",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 51683620,
            "range": "± 496347",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 291500929,
            "range": "± 3401467",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2276206301,
            "range": "± 53558901",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14536212,
            "range": "± 118408",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14487537,
            "range": "± 97065",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15424759,
            "range": "± 106552",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 19356225,
            "range": "± 92541",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 49665002,
            "range": "± 239212",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 300639653,
            "range": "± 10178373",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2417398906,
            "range": "± 7877540",
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
        "date": 1737728389007,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 17994941,
            "range": "± 209909",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 18502222,
            "range": "± 305355",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19725907,
            "range": "± 178657",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 23687299,
            "range": "± 315762",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 54516118,
            "range": "± 1274550",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 356218003,
            "range": "± 5036676",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2548213776,
            "range": "± 179747240",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 15019952,
            "range": "± 251372",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 15198984,
            "range": "± 306715",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15498005,
            "range": "± 233856",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 20412934,
            "range": "± 1009217",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 54354828,
            "range": "± 2342088",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 300197674,
            "range": "± 4267982",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2423662945,
            "range": "± 51811157",
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
        "date": 1737735369351,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 19148256,
            "range": "± 117629",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 19858520,
            "range": "± 141843",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 20938779,
            "range": "± 305929",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 24758946,
            "range": "± 306548",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 53560409,
            "range": "± 565962",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 324506386,
            "range": "± 2687549",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2412081602,
            "range": "± 96594616",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 15259724,
            "range": "± 105672",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 15217990,
            "range": "± 102013",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15792854,
            "range": "± 196497",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 19996642,
            "range": "± 324071",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 50838364,
            "range": "± 376307",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 311810507,
            "range": "± 3665689",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2509459781,
            "range": "± 37029672",
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
        "date": 1737739274216,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 17989872,
            "range": "± 96767",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 18030381,
            "range": "± 199197",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19599614,
            "range": "± 110390",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 23213848,
            "range": "± 172393",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 51806173,
            "range": "± 543681",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 305101961,
            "range": "± 3064762",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2282159735,
            "range": "± 114146463",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14811018,
            "range": "± 117986",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14879800,
            "range": "± 71008",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15445769,
            "range": "± 141927",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 19323631,
            "range": "± 162473",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 50181179,
            "range": "± 272971",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 302392649,
            "range": "± 2396137",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2395376793,
            "range": "± 7045855",
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
        "date": 1737741178862,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 18766548,
            "range": "± 177375",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 18843713,
            "range": "± 106638",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 20305541,
            "range": "± 147758",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 23957624,
            "range": "± 259766",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 52919702,
            "range": "± 595440",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 300688644,
            "range": "± 6034894",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2553907638,
            "range": "± 91466770",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14826069,
            "range": "± 131739",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14978212,
            "range": "± 101041",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15178576,
            "range": "± 133191",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 19407594,
            "range": "± 163535",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 50369022,
            "range": "± 136603",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 295892540,
            "range": "± 2755675",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2385374718,
            "range": "± 19082449",
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
        "date": 1737745781134,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 18519448,
            "range": "± 181558",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 18651701,
            "range": "± 223661",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 20117667,
            "range": "± 144822",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 23976890,
            "range": "± 371256",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 52533035,
            "range": "± 680890",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 310029347,
            "range": "± 2946867",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2344511282,
            "range": "± 25542703",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14875225,
            "range": "± 85450",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14985258,
            "range": "± 103168",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15554057,
            "range": "± 184086",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 19432891,
            "range": "± 136395",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 50381632,
            "range": "± 421111",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 302236759,
            "range": "± 2468129",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2423896450,
            "range": "± 16039820",
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
        "date": 1737777381965,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 18912233,
            "range": "± 185987",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 19422943,
            "range": "± 142004",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 21039592,
            "range": "± 214317",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 24946168,
            "range": "± 360245",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 56396812,
            "range": "± 644627",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 357928141,
            "range": "± 6654997",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2349414602,
            "range": "± 118998794",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 15633374,
            "range": "± 190602",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 15761837,
            "range": "± 228526",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 16197987,
            "range": "± 113316",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 20574813,
            "range": "± 237079",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 53506831,
            "range": "± 643230",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 320152054,
            "range": "± 3254518",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2560653792,
            "range": "± 29546124",
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
        "date": 1737929318171,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 17687776,
            "range": "± 110092",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 17884789,
            "range": "± 106254",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19274166,
            "range": "± 93613",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 22901890,
            "range": "± 141621",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 51170624,
            "range": "± 673932",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 305106656,
            "range": "± 2788383",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2169934372,
            "range": "± 49386154",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14455115,
            "range": "± 107618",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14510624,
            "range": "± 157945",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 14991726,
            "range": "± 93740",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 18915683,
            "range": "± 183350",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 49045989,
            "range": "± 412726",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 288318186,
            "range": "± 1627277",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2332909330,
            "range": "± 10469725",
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
        "date": 1737984545865,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 17526977,
            "range": "± 82215",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 17777856,
            "range": "± 75036",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19153537,
            "range": "± 111124",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 22797406,
            "range": "± 115553",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 51207521,
            "range": "± 613208",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 281927743,
            "range": "± 2645068",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2197573218,
            "range": "± 60137326",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14231024,
            "range": "± 158609",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14300696,
            "range": "± 92234",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 14785617,
            "range": "± 144625",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 18637523,
            "range": "± 118355",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 48374998,
            "range": "± 216277",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 285183024,
            "range": "± 6294103",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2240049866,
            "range": "± 5150239",
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
        "date": 1737986904681,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 17532848,
            "range": "± 75845",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 17840417,
            "range": "± 88265",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19082205,
            "range": "± 188877",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 22674127,
            "range": "± 219360",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 50550666,
            "range": "± 550212",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 289806509,
            "range": "± 1409440",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2212678529,
            "range": "± 53106097",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14234407,
            "range": "± 424445",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14430245,
            "range": "± 121524",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 14872095,
            "range": "± 83990",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 18958523,
            "range": "± 114787",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 49365651,
            "range": "± 455691",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 283256394,
            "range": "± 1302441",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2252443633,
            "range": "± 14833984",
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
        "date": 1737991956222,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 19039262,
            "range": "± 316116",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 19703668,
            "range": "± 248963",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 21454237,
            "range": "± 349142",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 25634866,
            "range": "± 387429",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 60722428,
            "range": "± 1405052",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 392761009,
            "range": "± 6347830",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2593888993,
            "range": "± 238548391",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 15663939,
            "range": "± 171528",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 16219740,
            "range": "± 147638",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15850638,
            "range": "± 108392",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 20266253,
            "range": "± 159007",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 54089026,
            "range": "± 1474414",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 347010832,
            "range": "± 7133089",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2655118948,
            "range": "± 43590682",
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
        "date": 1738002160859,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 19057756,
            "range": "± 240746",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 19385610,
            "range": "± 201914",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 21116234,
            "range": "± 181567",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 24447847,
            "range": "± 300767",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 55453511,
            "range": "± 787528",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 344712904,
            "range": "± 6068170",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2602381207,
            "range": "± 91929769",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 15305235,
            "range": "± 282369",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 15482347,
            "range": "± 130456",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15970249,
            "range": "± 123239",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 20275916,
            "range": "± 136522",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 52533449,
            "range": "± 681248",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 316827719,
            "range": "± 2646875",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2491906245,
            "range": "± 19724829",
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
        "date": 1738056986238,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 18873383,
            "range": "± 124739",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 19182615,
            "range": "± 193243",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 21315067,
            "range": "± 422890",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 24621128,
            "range": "± 295102",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 58959309,
            "range": "± 1302129",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 370100525,
            "range": "± 6197056",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2687361918,
            "range": "± 146904065",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 15282910,
            "range": "± 99839",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 15775035,
            "range": "± 257471",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15983792,
            "range": "± 155563",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 20563914,
            "range": "± 387928",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 57486725,
            "range": "± 1332872",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 327580929,
            "range": "± 10257178",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2582603547,
            "range": "± 41273481",
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
        "date": 1738058069481,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 18320678,
            "range": "± 251106",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 18596163,
            "range": "± 142344",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 20100255,
            "range": "± 191673",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 23693472,
            "range": "± 265744",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 53710714,
            "range": "± 937672",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 310448795,
            "range": "± 2869645",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2445689604,
            "range": "± 52490864",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14980713,
            "range": "± 163517",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14954285,
            "range": "± 145291",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15836339,
            "range": "± 146787",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 19879774,
            "range": "± 192166",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 51619258,
            "range": "± 2601436",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 304231458,
            "range": "± 4066503",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2440813504,
            "range": "± 18495773",
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
        "date": 1738069524562,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 18588949,
            "range": "± 118208",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 18716675,
            "range": "± 253287",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 20345091,
            "range": "± 75331",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 24155868,
            "range": "± 254381",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 53220559,
            "range": "± 516115",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 305909091,
            "range": "± 3900803",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2291607050,
            "range": "± 152270682",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 15594917,
            "range": "± 98181",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 15626624,
            "range": "± 159037",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 16413063,
            "range": "± 128568",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 20436633,
            "range": "± 343335",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 52542817,
            "range": "± 738231",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 306787514,
            "range": "± 2778379",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2482806302,
            "range": "± 14526712",
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
        "date": 1738079551530,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 18185303,
            "range": "± 140152",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 18407208,
            "range": "± 161341",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19980357,
            "range": "± 77900",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 23783758,
            "range": "± 304670",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 53081543,
            "range": "± 340450",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 310321415,
            "range": "± 3793622",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2597584959,
            "range": "± 124083946",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14794710,
            "range": "± 184057",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 15117423,
            "range": "± 136474",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15714765,
            "range": "± 149885",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 19733332,
            "range": "± 131143",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 51319725,
            "range": "± 535754",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 310561285,
            "range": "± 3073102",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2451232713,
            "range": "± 26310496",
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
        "date": 1738087358252,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 19919252,
            "range": "± 1005983",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 22642536,
            "range": "± 512734",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 24074646,
            "range": "± 1421374",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 29638504,
            "range": "± 715851",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 67674746,
            "range": "± 1435350",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 481552871,
            "range": "± 11163632",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2725405505,
            "range": "± 66336200",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 17269628,
            "range": "± 217682",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 17541415,
            "range": "± 276150",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 17911403,
            "range": "± 292062",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 23375408,
            "range": "± 252263",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 61169543,
            "range": "± 2173096",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 427448211,
            "range": "± 5748993",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2989494934,
            "range": "± 117995070",
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
        "date": 1738096035807,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 21080392,
            "range": "± 543286",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 20179438,
            "range": "± 501048",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 22297576,
            "range": "± 829511",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 26064828,
            "range": "± 497345",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 63050651,
            "range": "± 2563665",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 457473568,
            "range": "± 15678258",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2818007918,
            "range": "± 209595760",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 16988780,
            "range": "± 633541",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 17085191,
            "range": "± 514925",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 18366026,
            "range": "± 633296",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 22719978,
            "range": "± 408447",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 58100354,
            "range": "± 1079915",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 396459112,
            "range": "± 12313142",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2765952434,
            "range": "± 62285113",
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
        "date": 1738145055878,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 18383998,
            "range": "± 174513",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 18855389,
            "range": "± 200752",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 20670575,
            "range": "± 146587",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 24183981,
            "range": "± 747237",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 53759449,
            "range": "± 860246",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 332367385,
            "range": "± 10252029",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2476034886,
            "range": "± 20377312",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 15297137,
            "range": "± 155959",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 15407758,
            "range": "± 244170",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15851092,
            "range": "± 204035",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 20563324,
            "range": "± 379446",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 52298041,
            "range": "± 605129",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 325274705,
            "range": "± 6822607",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2531492282,
            "range": "± 33491179",
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
        "date": 1738152570583,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 18196840,
            "range": "± 119271",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 18209776,
            "range": "± 97156",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19924752,
            "range": "± 136784",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 23827875,
            "range": "± 191723",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 54684366,
            "range": "± 603665",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 323847988,
            "range": "± 3572691",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2484463672,
            "range": "± 83498964",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14995104,
            "range": "± 154582",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 15144572,
            "range": "± 136593",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15535801,
            "range": "± 85181",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 19948983,
            "range": "± 139430",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 52405835,
            "range": "± 871079",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 312976799,
            "range": "± 1914813",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2454262599,
            "range": "± 44887496",
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
        "date": 1738164251861,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 19988279,
            "range": "± 284652",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 20358986,
            "range": "± 256375",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 21504455,
            "range": "± 405024",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 25358822,
            "range": "± 1233829",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 55348457,
            "range": "± 674909",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 361470012,
            "range": "± 6635033",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2382522018,
            "range": "± 23599191",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 16026454,
            "range": "± 272515",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 16168098,
            "range": "± 277781",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 16989771,
            "range": "± 264112",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 21169823,
            "range": "± 358849",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 54397430,
            "range": "± 767347",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 335382456,
            "range": "± 5211204",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2583129549,
            "range": "± 30927017",
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
        "date": 1738191882110,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 18491560,
            "range": "± 294221",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 18591258,
            "range": "± 176414",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 20176753,
            "range": "± 161509",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 24236155,
            "range": "± 275971",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 56281190,
            "range": "± 1004761",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 363778697,
            "range": "± 4949512",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2384941034,
            "range": "± 207063680",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 15202601,
            "range": "± 274578",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 15258162,
            "range": "± 156030",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15865030,
            "range": "± 170177",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 20050148,
            "range": "± 143554",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 53145612,
            "range": "± 1085925",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 326434516,
            "range": "± 6641801",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2590711174,
            "range": "± 20205537",
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
        "date": 1738240636708,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 18759515,
            "range": "± 171491",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 18821252,
            "range": "± 133765",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 20424271,
            "range": "± 132917",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 24576631,
            "range": "± 240502",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 56535335,
            "range": "± 1548966",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 335812232,
            "range": "± 11496025",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2367400086,
            "range": "± 36351349",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 15211683,
            "range": "± 149199",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 15207600,
            "range": "± 198150",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15851553,
            "range": "± 91666",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 19931194,
            "range": "± 233915",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 52676211,
            "range": "± 897189",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 311842346,
            "range": "± 4854517",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2536761564,
            "range": "± 14675189",
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
        "date": 1738244214292,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 18614231,
            "range": "± 203435",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 18738877,
            "range": "± 221722",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 20483864,
            "range": "± 175232",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 24406252,
            "range": "± 234607",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 56063792,
            "range": "± 872454",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 348090252,
            "range": "± 7000361",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2722067233,
            "range": "± 51565476",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 15604985,
            "range": "± 163024",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 15776732,
            "range": "± 116346",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 16425221,
            "range": "± 104093",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 20739460,
            "range": "± 217008",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 53113203,
            "range": "± 2068108",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 320590045,
            "range": "± 3215370",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2518022768,
            "range": "± 19308525",
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
        "date": 1738249856580,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 17719376,
            "range": "± 284124",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 17819333,
            "range": "± 120561",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19491074,
            "range": "± 64236",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 23176207,
            "range": "± 148340",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 51500221,
            "range": "± 639735",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 283377191,
            "range": "± 2338955",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2161390029,
            "range": "± 104197880",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14424634,
            "range": "± 167620",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14640386,
            "range": "± 98097",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15230192,
            "range": "± 111105",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 19014124,
            "range": "± 137495",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 49043193,
            "range": "± 396536",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 287688955,
            "range": "± 1032827",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2274671651,
            "range": "± 11386467",
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
        "date": 1738318525252,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 17571216,
            "range": "± 66281",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 17820416,
            "range": "± 116090",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19391714,
            "range": "± 140495",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 23180450,
            "range": "± 220676",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 51606746,
            "range": "± 517856",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 281643876,
            "range": "± 2687722",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2209798017,
            "range": "± 14023580",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14625407,
            "range": "± 98757",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14768972,
            "range": "± 151965",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15241097,
            "range": "± 68287",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 19128589,
            "range": "± 86506",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 49546038,
            "range": "± 342320",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 290224484,
            "range": "± 2559268",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2337080112,
            "range": "± 20426357",
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
        "date": 1738366713975,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 18298571,
            "range": "± 42834",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 18599005,
            "range": "± 200978",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 20185896,
            "range": "± 100699",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 24175254,
            "range": "± 260492",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 56491099,
            "range": "± 619664",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 364679788,
            "range": "± 5032156",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2691488175,
            "range": "± 68717654",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 15063679,
            "range": "± 103753",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 15313021,
            "range": "± 132087",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15894250,
            "range": "± 74578",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 20556891,
            "range": "± 288447",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 51986149,
            "range": "± 761601",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 316657391,
            "range": "± 3597564",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2555486379,
            "range": "± 31068912",
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
        "date": 1738576654321,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 19161830,
            "range": "± 225404",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 19211005,
            "range": "± 248252",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 20595357,
            "range": "± 228179",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 25249681,
            "range": "± 181885",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 57348263,
            "range": "± 1163996",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 363240048,
            "range": "± 7752350",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2516448991,
            "range": "± 174750024",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 15187923,
            "range": "± 190366",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 15234033,
            "range": "± 183770",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15559085,
            "range": "± 209272",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 20313902,
            "range": "± 152045",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 52335229,
            "range": "± 1105592",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 334219922,
            "range": "± 3983897",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2525541799,
            "range": "± 19920480",
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
        "date": 1738588436370,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 18254533,
            "range": "± 69172",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 18444588,
            "range": "± 121746",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 20089489,
            "range": "± 118387",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 23710658,
            "range": "± 184739",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 53123898,
            "range": "± 837581",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 339460004,
            "range": "± 5087973",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2468318970,
            "range": "± 167253844",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14922583,
            "range": "± 85090",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14803702,
            "range": "± 104048",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15413288,
            "range": "± 57396",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 19751385,
            "range": "± 183172",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 51061139,
            "range": "± 448223",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 314036201,
            "range": "± 3268249",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2299951396,
            "range": "± 81687971",
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
        "date": 1738601329122,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 17108468,
            "range": "± 200699",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 17352423,
            "range": "± 83027",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 18676278,
            "range": "± 81456",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 22253857,
            "range": "± 78032",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 50033011,
            "range": "± 565403",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 299412604,
            "range": "± 3125253",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2166004946,
            "range": "± 68346575",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 13854550,
            "range": "± 83076",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 13972928,
            "range": "± 121053",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 14442676,
            "range": "± 73897",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 18202123,
            "range": "± 200356",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 46594466,
            "range": "± 421451",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 276843280,
            "range": "± 3102891",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2212415722,
            "range": "± 9351694",
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
        "date": 1738665036745,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 17183604,
            "range": "± 141405",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 17508243,
            "range": "± 98384",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19108828,
            "range": "± 237448",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 22694578,
            "range": "± 190960",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 51265417,
            "range": "± 541930",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 315057053,
            "range": "± 3231663",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2505053867,
            "range": "± 54592651",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14019224,
            "range": "± 68717",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14239358,
            "range": "± 82562",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 14697149,
            "range": "± 57769",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 19033573,
            "range": "± 94061",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 47974483,
            "range": "± 291013",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 284807490,
            "range": "± 3745939",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2297630052,
            "range": "± 23722380",
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
        "date": 1738666332273,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 18995345,
            "range": "± 350626",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 19098306,
            "range": "± 251977",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 21083338,
            "range": "± 226485",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 24976534,
            "range": "± 513456",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 57040156,
            "range": "± 994729",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 336804204,
            "range": "± 5016611",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2647136191,
            "range": "± 100589986",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 15201626,
            "range": "± 92262",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 15502481,
            "range": "± 424301",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 16237478,
            "range": "± 242045",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 20718887,
            "range": "± 356345",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 52981474,
            "range": "± 432222",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 326760797,
            "range": "± 4835449",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2574330732,
            "range": "± 24969898",
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
        "date": 1738675209380,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 18332381,
            "range": "± 163011",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 18444365,
            "range": "± 120891",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 20104777,
            "range": "± 157369",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 23318108,
            "range": "± 414724",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 55176838,
            "range": "± 1001803",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 348842046,
            "range": "± 5447214",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2560968954,
            "range": "± 195609442",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14612539,
            "range": "± 132285",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14717740,
            "range": "± 127478",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15209345,
            "range": "± 126240",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 19756409,
            "range": "± 139850",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 49312412,
            "range": "± 561656",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 292119992,
            "range": "± 8291465",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2403101085,
            "range": "± 26711463",
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
        "date": 1738676694050,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 19111990,
            "range": "± 157497",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 19479525,
            "range": "± 541876",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 21385708,
            "range": "± 634502",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 25570026,
            "range": "± 483730",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 61971032,
            "range": "± 1807242",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 371750805,
            "range": "± 10093760",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2476047504,
            "range": "± 247584347",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 15204729,
            "range": "± 264706",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 15190263,
            "range": "± 211046",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 16014681,
            "range": "± 312206",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 20237694,
            "range": "± 290647",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 51993638,
            "range": "± 921961",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 326780004,
            "range": "± 7124765",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2554076057,
            "range": "± 16711381",
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
        "date": 1738687947554,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 17696986,
            "range": "± 134575",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 18331507,
            "range": "± 198489",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19815581,
            "range": "± 226253",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 23632211,
            "range": "± 438442",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 56400269,
            "range": "± 1135508",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 329356543,
            "range": "± 9564315",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2526506870,
            "range": "± 112734335",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14797460,
            "range": "± 138988",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14954809,
            "range": "± 152639",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15320011,
            "range": "± 242542",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 19644431,
            "range": "± 198215",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 51138744,
            "range": "± 489762",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 306157824,
            "range": "± 4630452",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2501599884,
            "range": "± 15188473",
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
        "date": 1738707023961,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 18628091,
            "range": "± 357524",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 18833054,
            "range": "± 171009",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19970801,
            "range": "± 121299",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 24043717,
            "range": "± 175090",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 55391941,
            "range": "± 1046241",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 383998348,
            "range": "± 8690056",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2620868532,
            "range": "± 106589377",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14959405,
            "range": "± 98830",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 15002662,
            "range": "± 176659",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15342416,
            "range": "± 182747",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 19767620,
            "range": "± 177523",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 51074348,
            "range": "± 829954",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 318208175,
            "range": "± 4910716",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2518987971,
            "range": "± 40154787",
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
        "date": 1738752213194,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 18276046,
            "range": "± 442383",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 18936878,
            "range": "± 189083",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 20563831,
            "range": "± 340711",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 24270332,
            "range": "± 320989",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 57354424,
            "range": "± 1793775",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 353219969,
            "range": "± 8712440",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2632476504,
            "range": "± 194899086",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14934277,
            "range": "± 147094",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 15129956,
            "range": "± 142507",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15712314,
            "range": "± 154901",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 20347510,
            "range": "± 213139",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 51537852,
            "range": "± 778449",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 322586237,
            "range": "± 4274460",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2525596551,
            "range": "± 17326014",
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
        "date": 1738770344195,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 17706165,
            "range": "± 204452",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 17847458,
            "range": "± 236778",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19562072,
            "range": "± 239902",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 23173817,
            "range": "± 538527",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 52907836,
            "range": "± 612245",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 326633228,
            "range": "± 5907073",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2468624155,
            "range": "± 77819724",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14420794,
            "range": "± 233274",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14497851,
            "range": "± 161787",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 14809024,
            "range": "± 109447",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 19247918,
            "range": "± 235724",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 49943680,
            "range": "± 1855438",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 292451054,
            "range": "± 3869357",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2372247471,
            "range": "± 13340884",
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
        "date": 1738786000038,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 17567153,
            "range": "± 215373",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 17896432,
            "range": "± 173096",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19378233,
            "range": "± 203515",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 22607933,
            "range": "± 205433",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 54846312,
            "range": "± 1205344",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 320798028,
            "range": "± 3157450",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2542409736,
            "range": "± 111184035",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14222516,
            "range": "± 147897",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14200981,
            "range": "± 229130",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 14989409,
            "range": "± 122456",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 19478265,
            "range": "± 220913",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 48803858,
            "range": "± 977086",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 290728282,
            "range": "± 3493594",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2367845896,
            "range": "± 14454988",
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
        "date": 1738845118986,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 17473254,
            "range": "± 130317",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 17611370,
            "range": "± 102972",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19345738,
            "range": "± 415317",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 22728141,
            "range": "± 211790",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 51564189,
            "range": "± 449657",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 292322357,
            "range": "± 3078529",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2235582652,
            "range": "± 61135720",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14116246,
            "range": "± 178218",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14181613,
            "range": "± 128125",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 14504844,
            "range": "± 70493",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 18440290,
            "range": "± 112129",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 47879127,
            "range": "± 440859",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 281225188,
            "range": "± 2476583",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2307007349,
            "range": "± 30646947",
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
        "date": 1738864054392,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 18386869,
            "range": "± 163768",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 18500326,
            "range": "± 222659",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 20327358,
            "range": "± 209062",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 24333263,
            "range": "± 378893",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 56872169,
            "range": "± 922372",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 360727226,
            "range": "± 10301849",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2691809542,
            "range": "± 74153275",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14759705,
            "range": "± 117733",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 15144359,
            "range": "± 67696",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15569351,
            "range": "± 112805",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 19827802,
            "range": "± 266731",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 51485795,
            "range": "± 923777",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 321997647,
            "range": "± 4257218",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2527146488,
            "range": "± 14502221",
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
        "date": 1738918125062,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 19815185,
            "range": "± 173543",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 20273649,
            "range": "± 244803",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 21974297,
            "range": "± 135866",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 25663909,
            "range": "± 189277",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 60186094,
            "range": "± 1043538",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 385589598,
            "range": "± 4494384",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2771296871,
            "range": "± 43092304",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 15933656,
            "range": "± 178922",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 16030651,
            "range": "± 186182",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 16234218,
            "range": "± 192161",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 20941753,
            "range": "± 155334",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 53440630,
            "range": "± 629735",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 343584875,
            "range": "± 4731357",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2608348815,
            "range": "± 21640464",
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
        "date": 1738922651516,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 19481556,
            "range": "± 129197",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 19556663,
            "range": "± 181222",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 21310456,
            "range": "± 231651",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 25496292,
            "range": "± 361509",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 61973612,
            "range": "± 2829009",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 387242254,
            "range": "± 9668890",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2628107847,
            "range": "± 117951788",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 16138782,
            "range": "± 551958",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 16072688,
            "range": "± 384316",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 16819476,
            "range": "± 173945",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 22184161,
            "range": "± 796543",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 58039873,
            "range": "± 2471581",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 368697558,
            "range": "± 11393294",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2634713403,
            "range": "± 48345214",
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
        "date": 1738945948202,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 17274486,
            "range": "± 122923",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 17635240,
            "range": "± 135653",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19276139,
            "range": "± 137081",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 22764620,
            "range": "± 249100",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 50833108,
            "range": "± 279295",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 291480046,
            "range": "± 2515722",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2313499016,
            "range": "± 70324547",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14085689,
            "range": "± 102934",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14204158,
            "range": "± 229214",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 14645913,
            "range": "± 146528",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 18303835,
            "range": "± 63624",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 47772716,
            "range": "± 661305",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 280277943,
            "range": "± 1814195",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2342376144,
            "range": "± 7425673",
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
        "date": 1738950712306,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 17794544,
            "range": "± 178298",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 18159511,
            "range": "± 142444",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19633212,
            "range": "± 189111",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 23650965,
            "range": "± 270736",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 55294429,
            "range": "± 1058008",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 348999413,
            "range": "± 5716493",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2601124641,
            "range": "± 242034710",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14674137,
            "range": "± 212378",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14939281,
            "range": "± 183864",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15497429,
            "range": "± 211050",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 20083877,
            "range": "± 276670",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 51109426,
            "range": "± 1084804",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 309349244,
            "range": "± 6217310",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2543888017,
            "range": "± 20065290",
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
        "date": 1738965622742,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 19484390,
            "range": "± 415962",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 19967367,
            "range": "± 178326",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19881647,
            "range": "± 283086",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 24060256,
            "range": "± 392020",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 56564580,
            "range": "± 1974038",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 318136923,
            "range": "± 24911910",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2450618271,
            "range": "± 71286507",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14215787,
            "range": "± 223857",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14557004,
            "range": "± 173892",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 14980677,
            "range": "± 192544",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 18770578,
            "range": "± 150492",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 48357088,
            "range": "± 571107",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 282493201,
            "range": "± 1760011",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2353371475,
            "range": "± 26165368",
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
        "date": 1738993136760,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 17761463,
            "range": "± 142727",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 18110432,
            "range": "± 195917",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19815378,
            "range": "± 232779",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 23871802,
            "range": "± 438517",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 56803617,
            "range": "± 1390798",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 338220823,
            "range": "± 10059263",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2692888568,
            "range": "± 76946720",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14895500,
            "range": "± 130563",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 15158172,
            "range": "± 186828",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15823488,
            "range": "± 107936",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 20188914,
            "range": "± 192117",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 52935352,
            "range": "± 1371834",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 321007234,
            "range": "± 4184245",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2521447032,
            "range": "± 27863895",
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
        "date": 1739019848352,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 20376459,
            "range": "± 271806",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 20170477,
            "range": "± 216206",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 22244807,
            "range": "± 371914",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 27050681,
            "range": "± 340753",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 63141318,
            "range": "± 1288835",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 428187974,
            "range": "± 4396824",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2689699252,
            "range": "± 147211172",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 16100479,
            "range": "± 150115",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 16389755,
            "range": "± 135579",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 17011985,
            "range": "± 274795",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 22398559,
            "range": "± 256854",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 56436482,
            "range": "± 717009",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 392755308,
            "range": "± 8149834",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2820618038,
            "range": "± 30185221",
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
        "date": 1739063861416,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 17769129,
            "range": "± 196785",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 18194721,
            "range": "± 105413",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19551680,
            "range": "± 166894",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 23536341,
            "range": "± 468552",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 55130805,
            "range": "± 934768",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 311959506,
            "range": "± 5782290",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2445777212,
            "range": "± 124159665",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14350933,
            "range": "± 186322",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14656613,
            "range": "± 147626",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 14921955,
            "range": "± 149577",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 19036707,
            "range": "± 169221",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 48920198,
            "range": "± 470613",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 290449378,
            "range": "± 3303479",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2393788258,
            "range": "± 6190253",
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
        "date": 1739204501701,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 17305835,
            "range": "± 68415",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 17757999,
            "range": "± 110722",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19401288,
            "range": "± 114544",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 22941082,
            "range": "± 239785",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 51348854,
            "range": "± 917495",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 321380355,
            "range": "± 3636831",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2277699152,
            "range": "± 60680389",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14247916,
            "range": "± 112141",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14171477,
            "range": "± 117200",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 14768848,
            "range": "± 184299",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 19192291,
            "range": "± 254721",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 48461334,
            "range": "± 362952",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 286243349,
            "range": "± 2292241",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2356729213,
            "range": "± 18357815",
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
        "date": 1739207269189,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 18700718,
            "range": "± 1188991",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 18552025,
            "range": "± 164362",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 20046234,
            "range": "± 220819",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 24028222,
            "range": "± 308850",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 57495423,
            "range": "± 957353",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 344989742,
            "range": "± 6484948",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2509979862,
            "range": "± 141471467",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14740868,
            "range": "± 130049",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14890443,
            "range": "± 160096",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15571617,
            "range": "± 222818",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 19720389,
            "range": "± 151858",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 51957406,
            "range": "± 740276",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 310016355,
            "range": "± 6688160",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2512605474,
            "range": "± 25739482",
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
        "date": 1739212386840,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 25352371,
            "range": "± 1780026",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 25569013,
            "range": "± 2512495",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 25160521,
            "range": "± 1950659",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 33917021,
            "range": "± 3254009",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 82336596,
            "range": "± 4766442",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 481039617,
            "range": "± 15964107",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2896248388,
            "range": "± 411492631",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 17453107,
            "range": "± 697001",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 18577581,
            "range": "± 857239",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 18882596,
            "range": "± 1480233",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 24606624,
            "range": "± 930495",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 71280404,
            "range": "± 4255336",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 453746718,
            "range": "± 34298853",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 3616276605,
            "range": "± 154839424",
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
        "date": 1739220433471,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 18639933,
            "range": "± 127735",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 19200320,
            "range": "± 162195",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 20552098,
            "range": "± 163354",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 25032827,
            "range": "± 336341",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 59414977,
            "range": "± 1085523",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 368204463,
            "range": "± 7413210",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2558992008,
            "range": "± 149879931",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 15440844,
            "range": "± 188777",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 15361692,
            "range": "± 284661",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 16074619,
            "range": "± 186510",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 21100268,
            "range": "± 192435",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 54762255,
            "range": "± 769641",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 331816409,
            "range": "± 3485331",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2645787474,
            "range": "± 15877082",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}