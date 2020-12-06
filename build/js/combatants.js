const combatants = [
    {
        "name": "Random",
        "alignment": "friendly",
        "imgSrc": "img/random.jpeg",
        "x": 226,
        "y": 1939,
        "hidden": false
    },
    {
        "name": "Belimore",
        "alignment": "friendly",
        "imgSrc": "img/belimore.jpg",
        "x": 197,
        "y": 1939,
        "hidden": false
    },
    {
        "name": "Cire",
        "alignment": "friendly",
        "imgSrc": "img/cire.jpg",
        "x": 226,
        "y": 1969,
        "hidden": false
    },
    {
        "name": "Panther",
        "alignment": "friendly",
        "imgSrc": "img/panther.jpg",
        "x": 198,
        "y": 1967,
        "hidden": false
    },
    {
        "name": "Rew",
        "alignment": "friendly",
        "imgSrc": "img/rew.jpg",
        "x": 256,
        "y": 1970,
        "hidden": false
    },
    {
        "name": "Speeder",
        "alignment": "friendly",
        "imgSrc": "img/speeder.jpg",
        "x": 257,
        "y": 1942,
        "hidden": false
    },
    {
        "name": "Wolf",
        "alignment": "friendly",
        "imgSrc": "img/wolf.jpg",
        "x": 195,
        "y": 1909,
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
        "x": 316.50760018091364,
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
        "x": 1158.0633516608875,
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
        "hidden": true,
        "imgSrc": "img/ghoul.png",
        "name": "ghoul.3",
        "x": 587.3347115716155,
        "y": 1343.6372401717454
    },
    {
        "alignment": "hostile",
        "hidden": true,
        "imgSrc": "img/ghoul.png",
        "name": "ghoul.4",
        "x": 704.3347115716155,
        "y": 1183.6372401717454
    },
    {
        "alignment": "hostile",
        "hidden": true,
        "imgSrc": "img/ghoul.png",
        "name": "ghoul.5",
        "x": 738.3347115716155,
        "y": 1158.6372401717454
    },
    {
        "alignment": "hostile",
        "hidden": true,
        "imgSrc": "img/ghoul.png",
        "name": "ghoul.6",
        "x": 621.3347115716155,
        "y": 1304.6372401717454
    },
    {
        "alignment": "hostile",
        "hidden": true,
        "imgSrc": "img/ghoul.png",
        "name": "ghoul.7",
        "x": 763.3347115716155,
        "y": 1125.6372401717454
    },
    {
        "alignment": "hostile",
        "hidden": true,
        "imgSrc": "img/ghoul.png",
        "name": "ghoul.8",
        "x": 643.3347115716155,
        "y": 1278.6372401717454
    },
    {
        "alignment": "hostile",
        "hidden": true,
        "imgSrc": "img/ghoul.png",
        "name": "ghoul.9",
        "x": 582.3347115716155,
        "y": 1280.6372401717454
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
        "hidden": true,
        "imgSrc": "img/flameskull.png",
        "name": "flameskull.0",
        "x": 1425.2712900575432,
        "y": 864.3626356491518
    },
    {
        "alignment": "hostile",
        "hidden": true,
        "imgSrc": "img/zombie.jpeg",
        "name": "zombie.0",
        "x": 1402.2712900575432,
        "y": 981.3626356491518
    },
    {
        "alignment": "hostile",
        "hidden": true,
        "imgSrc": "img/zombie.jpeg",
        "name": "zombie.1",
        "x": 1343.2712900575432,
        "y": 979.3626356491518
    },
    {
        "alignment": "hostile",
        "hidden": true,
        "imgSrc": "img/zombie.jpeg",
        "name": "zombie.2",
        "x": 1366.2712900575432,
        "y": 1002.3626356491518
    },
    {
        "alignment": "hostile",
        "hidden": true,
        "imgSrc": "img/zombie.jpeg",
        "name": "zombie.3",
        "x": 1188.2712900575432,
        "y": 858.3626356491518
    },
    {
        "alignment": "hostile",
        "hidden": true,
        "imgSrc": "img/zombie.jpeg",
        "name": "zombie.4",
        "x": 1164.2712900575432,
        "y": 826.3626356491518
    },
    {
        "alignment": "hostile",
        "hidden": true,
        "imgSrc": "img/zombie.jpeg",
        "name": "zombie.5",
        "x": 1185.2712900575432,
        "y": 797.3626356491518
    },
    {
        "alignment": "hostile",
        "hidden": true,
        "imgSrc": "img/zombie.jpeg",
        "name": "zombie.6",
        "x": 1169.2712900575432,
        "y": 884.3626356491518
    },
    {
        "alignment": "hostile",
        "hidden": true,
        "imgSrc": "img/zombie.jpeg",
        "name": "zombie.7",
        "x": 1426.2712900575432,
        "y": 1005.3626356491518
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
    }
]
