const combatants = [
    {
        "name": "AscydiaAdderBanklin",
        "alignment": "friendly",
        "imgSrc": "img/AscydiaAdderBanklin.png",
        "x": 1841,
        "y": 1442,
        "hidden": false
    },
    {
        "name": "Belvias",
        "alignment": "friendly",
        "imgSrc": "img/Belvias.jpeg",
        "x": 502,
        "y": 969,
        "hidden": false
    },
    {
        "name": "BiggsChunks",
        "alignment": "friendly",
        "imgSrc": "img/BiggsChunks.jpeg",
        "x": 443,
        "y": 993,
        "hidden": false,
        "defeated": false
    },
    {
        "name": "Florry",
        "alignment": "friendly",
        "imgSrc": "img/Florry.jpeg",
        "x": 446,
        "y": 911,
        "hidden": false
    },
    {
        "name": "MoreAle",
        "alignment": "friendly",
        "imgSrc": "img/MoreAle.png",
        "x": 412,
        "y": 932,
        "hidden": false
    },
    {
        "name": "ProfessorBlue",
        "alignment": "friendly",
        "imgSrc": "img/ProfessorBlue.jpeg",
        "x": 409,
        "y": 972,
        "hidden": false
    },
    {
        "name": "SLAMMER",
        "alignment": "friendly",
        "imgSrc": "img/SLAMMER.jpeg",
        "x": 456,
        "y": 951,
        "hidden": false
    },
    {
        "alignment": "boss",
        "hidden": false,
        "imgSrc": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/378/35/35/636252780449831836.jpeg",
        "name": "Meepo",
        "x": 373.8419466216153,
        "y": 919.6702855402
    },
    {
        "alignment": "boss",
        "hidden": false,
        "imgSrc": "img/Yusdrayl.jpeg",
        "name": "Yusdrayl",
        "x": 336.8419466216153,
        "y": 950.6702855402
    },
    {
        "alignment": "hostile",
        "hidden": false,
        "imgSrc": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/378/35/35/636252780449831836.jpeg",
        "name": "kobold.0",
        "x": 658.137681606725,
        "y": 983.072334049753
    },
    {
        "alignment": "hostile",
        "hidden": false,
        "imgSrc": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/378/35/35/636252780449831836.jpeg",
        "name": "kobold.1",
        "x": 662.137681606725,
        "y": 917.072334049753
    },
    {
        "alignment": "hostile",
        "hidden": false,
        "imgSrc": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/378/35/35/636252780449831836.jpeg",
        "name": "kobold.2",
        "x": 587.137681606725,
        "y": 985.072334049753
    },
    {
        "alignment": "hostile",
        "hidden": false,
        "imgSrc": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/378/35/35/636252780449831836.jpeg",
        "name": "kobold.3",
        "x": 591.137681606725,
        "y": 916.072334049753
    },
    {
        "alignment": "hostile",
        "hidden": false,
        "imgSrc": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/378/35/35/636252780449831836.jpeg",
        "name": "kobold.4",
        "x": 336.28587344028523,
        "y": 910.2379679144387
    },
    {
        "alignment": "hostile",
        "hidden": false,
        "imgSrc": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/378/35/35/636252780449831836.jpeg",
        "name": "kobold.5",
        "x": 332.28587344028523,
        "y": 992.2379679144387
    },
    {
        "alignment": "hostile",
        "hidden": false,
        "imgSrc": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/471/35/35/636376294572614519.jpeg",
        "name": "skeleton.1",
        "x": 1404.153160198104,
        "y": 998.1914365285152,
        "defeated": true
    },
    {
        "alignment": "hostile",
        "hidden": false,
        "imgSrc": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/471/35/35/636376294572614519.jpeg",
        "name": "skeleton.2",
        "x": 1476.153160198104,
        "y": 898.1914365285152,
        "defeated": true
    },
    {
        "alignment": "hostile",
        "hidden": false,
        "imgSrc": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/471/35/35/636376294572614519.jpeg",
        "name": "skeleton.3",
        "x": 1445.153160198104,
        "y": 899.1914365285152,
        "defeated": true
    },
    {
        "alignment": "hostile",
        "hidden": false,
        "imgSrc": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/471/35/35/636376294572614519.jpeg",
        "name": "skeleton.4",
        "x": 1479.153160198104,
        "y": 996.1914365285152,
        "defeated": true
    },
    {
        "alignment": "hostile",
        "hidden": false,
        "imgSrc": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/471/35/35/636376294572614519.jpeg",
        "name": "skeleton.5",
        "x": 1404.153160198104,
        "y": 898.1914365285152,
        "defeated": true
    },
    {
        "alignment": "hostile",
        "hidden": false,
        "imgSrc": "img/Goblin.jpeg",
        "name": "Goblin.0",
        "x": 1442.9473527662105,
        "y": 484.5634542930793,
        "defeated": true
    },
    {
        "alignment": "hostile",
        "hidden": false,
        "imgSrc": "img/Goblin.jpeg",
        "name": "Goblin.1",
        "x": 1273.2383114040142,
        "y": 448.6463734052277,
        "defeated": true
    },
    {
        "alignment": "hostile",
        "hidden": false,
        "imgSrc": "img/Goblin.jpeg",
        "name": "Goblin.2",
        "x": 1300.2383114040142,
        "y": 451.6463734052277,
        "defeated": true
    },
    {
        "alignment": "hostile",
        "hidden": false,
        "imgSrc": "img/Goblin.jpeg",
        "name": "Goblin.3",
        "x": 1234.2383114040142,
        "y": 448.6463734052277,
        "defeated": true
    },
    {
        "alignment": "friendly",
        "hidden": false,
        "imgSrc": "img/ErkyTimbers.png",
        "name": "ErkyTimbers.0",
        "x": 507.24529721595195,
        "y": 926.058690744921
    },
    {
        "alignment": "hostile",
        "hidden": false,
        "imgSrc": "img/WhiteDragonWyrmling.jpeg",
        "name": "WhiteDragonWyrmling.0",
        "x": 372.24529721595195,
        "y": 998.058690744921
    },
    {
        "alignment": "boss",
        "hidden": true,
        "imgSrc": "img/Hobgoblin.jpeg",
        "name": "Durnn",
        "x": 208,
        "y": 170
    },
    {
        "name": "Grenl",
        "alignment": "boss",
        "imgSrc": "img/Goblin.jpeg",
        "x": 199,
        "y": 209,
        "hidden": true
    },
    {
        "name": "Hobgoblin.0",
        "alignment": "hostile",
        "imgSrc": "img/Hobgoblin.jpeg",
        "x": 199,
        "y": 247,
        "hidden": true
    },
    {
        "name": "Hobgoblin.1",
        "alignment": "hostile",
        "imgSrc": "img/Hobgoblin.jpeg",
        "x": 279,
        "y": 167,
        "hidden": true
    },
    {
        "name": "Hobgoblin.2",
        "alignment": "hostile",
        "imgSrc": "img/Hobgoblin.jpeg",
        "x": 319,
        "y": 169,
        "hidden": true
    }
]