const combatants = [
    {
        "name": "Random",
        "alignment": "friendly",
        "imgSrc": "img/random.jpeg",
        "x": 1182,
        "y": 1427,
        "hidden": false
    },
    {
        "name": "Belimore",
        "alignment": "friendly",
        "imgSrc": "img/belimore.jpg",
        "x": 1098,
        "y": 1369,
        "hidden": false
    },
    {
        "name": "Cire",
        "alignment": "friendly",
        "imgSrc": "img/cire.jpg",
        "x": 1100,
        "y": 1425,
        "hidden": false
    },
    {
        "name": "Panther",
        "alignment": "friendly",
        "imgSrc": "img/panther.jpg",
        "x": 1125,
        "y": 1308,
        "hidden": false
    },
    {
        "name": "Rew",
        "alignment": "friendly",
        "imgSrc": "img/rew.jpg",
        "x": 1157,
        "y": 1337,
        "hidden": false
    },
    {
        "name": "Speeder",
        "alignment": "friendly",
        "imgSrc": "img/speeder.jpg",
        "x": 1125,
        "y": 1338,
        "hidden": false
    },
    {
        "name": "Wolf",
        "alignment": "friendly",
        "imgSrc": "img/wolf.jpg",
        "x": 1159,
        "y": 1308,
        "hidden": false
    },
    {
        "alignment": "boss",
        "hidden": true,
        "imgSrc": "img/nezznar.jpeg",
        "name": "nezznar.0",
        "x": 271.54807444739305,
        "y": 265.4643160317837
    },
    {
        "alignment": "hostile",
        "hidden": true,
        "imgSrc": "img/spider.jfif",
        "name": "spider.0",
        "size": "large",
        "x": 373.54807444739305,
        "y": 493.4643160317837
    },
    {
        "alignment": "hostile",
        "hidden": true,
        "imgSrc": "img/spider.jfif",
        "name": "spider.1",
        "size": "large",
        "x": 136.54807444739305,
        "y": 494.4643160317837
    },
    {
        "alignment": "hostile",
        "hidden": true,
        "imgSrc": "img/spider.jfif",
        "name": "spider.2",
        "size": "large",
        "x": 373.54807444739305,
        "y": 255.4643160317837
    },
    {
        "alignment": "hostile",
        "hidden": true,
        "imgSrc": "img/spider.jfif",
        "name": "spider.3",
        "size": "large",
        "x": 137.54807444739305,
        "y": 256.4643160317837
    },
    {
        "alignment": "hostile",
        "hidden": false,
        "imgSrc": "img/ochrejelly.png",
        "name": "ochrejelly.0",
        "size": "large",
        "x": 315.50760018091364,
        "y": 1944.488180913614
    },
    {
        "alignment": "hostile",
        "hidden": true,
        "imgSrc": "img/stirge.jpg",
        "name": "stirge.0",
        "x": 1158.556942190626,
        "y": 2366.0159613287656
    },
    {
        "alignment": "hostile",
        "hidden": true,
        "imgSrc": "img/stirge.jpg",
        "name": "stirge.1",
        "x": 1101.556942190626,
        "y": 2366.0159613287656
    },
    {
        "alignment": "hostile",
        "hidden": true,
        "imgSrc": "img/stirge.jpg",
        "name": "stirge.2",
        "x": 1097.556942190626,
        "y": 2304.0159613287656
    },
    {
        "alignment": "hostile",
        "hidden": true,
        "imgSrc": "img/stirge.jpg",
        "name": "stirge.3",
        "x": 1039.556942190626,
        "y": 2304.0159613287656
    },
    {
        "alignment": "hostile",
        "hidden": true,
        "imgSrc": "img/stirge.jpg",
        "name": "stirge.4",
        "x": 1157.556942190626,
        "y": 2309.0159613287656
    },
    {
        "alignment": "hostile",
        "hidden": true,
        "imgSrc": "img/stirge.jpg",
        "name": "stirge.5",
        "x": 1125.556942190626,
        "y": 2273.0159613287656
    },
    {
        "alignment": "hostile",
        "hidden": true,
        "imgSrc": "img/stirge.jpg",
        "name": "stirge.6",
        "x": 1183.556942190626,
        "y": 2334.0159613287656
    },
    {
        "alignment": "hostile",
        "hidden": true,
        "imgSrc": "img/stirge.jpg",
        "name": "stirge.7",
        "x": 1125.556942190626,
        "y": 2335.0159613287656
    },
    {
        "alignment": "hostile",
        "hidden": true,
        "imgSrc": "img/stirge.jpg",
        "name": "stirge.8",
        "x": 1065.556942190626,
        "y": 2332.0159613287656
    },
    {
        "alignment": "hostile",
        "hidden": true,
        "imgSrc": "img/stirge.jpg",
        "name": "stirge.9",
        "x": 1065.556942190626,
        "y": 2273.0159613287656
    },
    {
        "alignment": "hostile",
        "hidden": true,
        "imgSrc": "img/skeleton.png",
        "name": "skeleton.0",
        "x": 882.6665556175013,
        "y": 2572.525641025641
    },
    {
        "alignment": "hostile",
        "hidden": true,
        "imgSrc": "img/skeleton.png",
        "name": "skeleton.1",
        "x": 1034.6665556175012,
        "y": 2608.525641025641
    },
    {
        "alignment": "hostile",
        "hidden": true,
        "imgSrc": "img/skeleton.png",
        "name": "skeleton.2",
        "x": 1003.6665556175013,
        "y": 2513.525641025641
    },
    {
        "alignment": "hostile",
        "hidden": true,
        "imgSrc": "img/skeleton.png",
        "name": "skeleton.3",
        "x": 941.6665556175013,
        "y": 2628.525641025641
    },
    {
        "alignment": "hostile",
        "hidden": true,
        "imgSrc": "img/skeleton.png",
        "name": "skeleton.4",
        "x": 944.6665556175013,
        "y": 2574.525641025641
    },
    {
        "alignment": "hostile",
        "hidden": true,
        "imgSrc": "img/skeleton.png",
        "name": "skeleton.5",
        "x": 884.6665556175013,
        "y": 2512.525641025641
    },
    {
        "alignment": "hostile",
        "hidden": true,
        "imgSrc": "img/skeleton.png",
        "name": "skeleton.6",
        "x": 1039.6665556175012,
        "y": 2515.525641025641
    },
    {
        "alignment": "hostile",
        "hidden": true,
        "imgSrc": "img/skeleton.png",
        "name": "skeleton.7",
        "x": 823.6665556175013,
        "y": 2513.525641025641
    },
    {
        "alignment": "hostile",
        "hidden": true,
        "imgSrc": "img/skeleton.png",
        "name": "skeleton.8",
        "x": 857.6665556175013,
        "y": 2486.525641025641
    },
    {
        "alignment": "hostile",
        "hidden": true,
        "imgSrc": "img/ghoul.png",
        "name": "ghoul.0",
        "x": 1157.0633516608875,
        "y": 1731.6339729173405
    },
    {
        "alignment": "hostile",
        "hidden": true,
        "imgSrc": "img/ghoul.png",
        "name": "ghoul.1",
        "x": 1160.0633516608875,
        "y": 1790.6339729173405
    },
    {
        "alignment": "hostile",
        "hidden": true,
        "imgSrc": "img/ghoul.png",
        "name": "ghoul.2",
        "x": 1099.0633516608875,
        "y": 1789.6339729173405
    },
    {
        "alignment": "hostile",
        "hidden": false,
        "imgSrc": "img/ghoul.png",
        "name": "ghoul.3",
        "x": 736.3347115716155,
        "y": 1639.6372401717454
    },
    {
        "alignment": "hostile",
        "hidden": false,
        "imgSrc": "img/ghoul.png",
        "name": "ghoul.4",
        "x": 763.3347115716155,
        "y": 1668.6372401717454
    },
    {
        "alignment": "hostile",
        "hidden": false,
        "imgSrc": "img/ghoul.png",
        "name": "ghoul.5",
        "x": 764.3347115716155,
        "y": 1580.6372401717454
    },
    {
        "alignment": "hostile",
        "hidden": false,
        "imgSrc": "img/ghoul.png",
        "name": "ghoul.6",
        "x": 765.3347115716155,
        "y": 1640.6372401717454
    },
    {
        "alignment": "hostile",
        "hidden": false,
        "imgSrc": "img/ghoul.png",
        "name": "ghoul.7",
        "x": 765.3347115716155,
        "y": 1608.6372401717454
    },
    {
        "alignment": "hostile",
        "hidden": false,
        "imgSrc": "img/ghoul.png",
        "name": "ghoul.8",
        "x": 736.3347115716155,
        "y": 1608.6372401717454
    },
    {
        "alignment": "hostile",
        "hidden": false,
        "imgSrc": "img/ghoul.png",
        "name": "ghoul.9",
        "x": 737.3347115716155,
        "y": 1669.6372401717454
    },
    {
        "alignment": "hostile",
        "hidden": true,
        "imgSrc": "img/bugbear.jpg",
        "name": "bugbear.0",
        "x": 702.6444278712977,
        "y": 977.9091365390532
    },
    {
        "alignment": "hostile",
        "hidden": true,
        "imgSrc": "img/bugbear.jpg",
        "name": "bugbear.1",
        "x": 855.6444278712977,
        "y": 919.9091365390532
    },
    {
        "alignment": "hostile",
        "hidden": true,
        "imgSrc": "img/bugbear.jpg",
        "name": "bugbear.2",
        "x": 821.6444278712977,
        "y": 884.9091365390532
    },
    {
        "alignment": "hostile",
        "hidden": true,
        "imgSrc": "img/bugbear.jpg",
        "name": "bugbear.3",
        "x": 764.6444278712977,
        "y": 977.9091365390532
    },
    {
        "alignment": "hostile",
        "hidden": true,
        "imgSrc": "img/bugbear.jpg",
        "name": "bugbear.4",
        "x": 764.6444278712977,
        "y": 884.9091365390532
    },
    {
        "alignment": "hostile",
        "hidden": false,
        "imgSrc": "img/flameskull.png",
        "name": "flameskull.0",
        "x": 1400.2712900575432,
        "y": 1340.3626356491518
    },
    {
        "alignment": "hostile",
        "hidden": false,
        "imgSrc": "img/zombie.jpeg",
        "name": "zombie.0",
        "x": 1368.2712900575432,
        "y": 1400.6958876022768
    },
    {
        "alignment": "hostile",
        "hidden": false,
        "imgSrc": "img/zombie.jpeg",
        "name": "zombie.1",
        "x": 1368.2712900575432,
        "y": 1431.3626356491518
    },
    {
        "alignment": "hostile",
        "hidden": false,
        "imgSrc": "img/zombie.jpeg",
        "name": "zombie.2",
        "x": 1338.2712900575432,
        "y": 1399.3626356491518
    },
    {
        "alignment": "hostile",
        "hidden": false,
        "imgSrc": "img/zombie.jpeg",
        "name": "zombie.3",
        "x": 1007.2712900575432,
        "y": 1173.3626356491518
    },
    {
        "alignment": "hostile",
        "hidden": false,
        "imgSrc": "img/zombie.jpeg",
        "name": "zombie.4",
        "x": 1066.2712900575432,
        "y": 1186.3626356491518
    },
    {
        "alignment": "hostile",
        "hidden": false,
        "imgSrc": "img/zombie.jpeg",
        "name": "zombie.5",
        "x": 1038.2712900575432,
        "y": 1158.3626356491518
    },
    {
        "alignment": "hostile",
        "hidden": false,
        "imgSrc": "img/zombie.jpeg",
        "name": "zombie.6",
        "x": 1036.2712900575432,
        "y": 1187.3626356491518
    },
    {
        "alignment": "hostile",
        "hidden": false,
        "imgSrc": "img/zombie.jpeg",
        "name": "zombie.7",
        "x": 1338.2712900575432,
        "y": 1428.3626356491518
    },
    {
        "alignment": "hostile",
        "hidden": true,
        "imgSrc": "img/wraith.png",
        "name": "wraith.0",
        "x": 2004.6906592507771,
        "y": 1671.5774578766564
    },
    {
        "alignment": "hostile",
        "hidden": true,
        "imgSrc": "img/spectator.png",
        "name": "spectator.0",
        "x": 1945.9097685492695,
        "y": 1246.6219680852773
    },
    {
        "alignment": "hostile",
        "hidden": true,
        "imgSrc": "img/bugbear.jpg",
        "name": "bugbear.5",
        "x": 822.1120553021922,
        "y": 579.7464050876579
    },
    {
        "alignment": "hostile",
        "hidden": true,
        "imgSrc": "img/doppleganger.jpeg",
        "name": "doppleganger.0",
        "x": 800.1120553021922,
        "y": 555.7464050876579
    },
    {
        "alignment": "hostile",
        "hidden": true,
        "imgSrc": "img/bugbear.jpg",
        "name": "bugbear.6",
        "x": 943.1120553021922,
        "y": 579.7464050876579
    },
    {
        "alignment": "hostile",
        "hidden": true,
        "imgSrc": "img/bugbear.jpg",
        "name": "bugbear.7",
        "x": 918.1120553021922,
        "y": 555.7464050876579
    },
    {
        "alignment": "friendly",
        "hidden": true,
        "imgSrc": "img/nundro.jpeg",
        "name": "nundro.0",
        "x": 557.4378490753382,
        "y": 255.5314943527369
    },
    {
        "alignment": "friendly",
        "hidden": false,
        "imgSrc": "img/rat.jpeg",
        "name": "rat.0",
        "x": 1066.5076001809136,
        "y": 1368.488180913614
    },
    {
        "name": "stirge.10",
        "alignment": "hostile",
        "imgSrc": "img/stirge.jpg",
        "hidden": false,
        "x": 277.9452761674205,
        "y": 1427.731887904978
    },
    {
        "name": "stirge.11",
        "alignment": "hostile",
        "imgSrc": "img/stirge.jpg",
        "hidden": false,
        "x": 313.9452761674205,
        "y": 1486.731887904978
    },
    {
        "name": "stirge.12",
        "alignment": "hostile",
        "imgSrc": "img/stirge.jpg",
        "hidden": false,
        "x": 314.9452761674205,
        "y": 1458.731887904978
    },
    {
        "name": "stirge.13",
        "alignment": "hostile",
        "imgSrc": "img/stirge.jpg",
        "hidden": false,
        "x": 283.9452761674205,
        "y": 1488.731887904978
    },
    {
        "name": "stirge.14",
        "alignment": "hostile",
        "imgSrc": "img/stirge.jpg",
        "hidden": false,
        "x": 310.9452761674205,
        "y": 1428.731887904978
    },
    {
        "name": "stirge.15",
        "alignment": "hostile",
        "imgSrc": "img/stirge.jpg",
        "hidden": false,
        "x": 281.9452761674205,
        "y": 1457.731887904978
    },
    {
        "name": "skeleton.9",
        "alignment": "hostile",
        "imgSrc": "img/skeleton.png",
        "hidden": false,
        "x": 1246.1063407584752,
        "y": 1548.3762341534962
    },
    {
        "name": "skeleton.10",
        "alignment": "hostile",
        "imgSrc": "img/skeleton.png",
        "hidden": false,
        "x": 1279.1063407584752,
        "y": 1548.3762341534962
    },
    {
        "name": "skeleton.11",
        "alignment": "hostile",
        "imgSrc": "img/skeleton.png",
        "hidden": false,
        "x": 1277.1063407584752,
        "y": 1518.3762341534962
    }
]