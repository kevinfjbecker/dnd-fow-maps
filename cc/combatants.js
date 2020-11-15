const combatants = [
    {
        "name": "Random",
        "alignment": "friendly",
        "imgSrc": "img/random.jpeg",
        "x": 280,
        "y": 272,
        "hidden": false
    },
    {
        "name": "GoblinOne",
        "alignment": "hostile",
        "imgSrc": "img/goblin.jpg",
        "x": 97,
        "y": 697,
        "hidden": false
    },
    {
        "name": "GoblinTwo",
        "alignment": "hostile",
        "imgSrc": "img/goblin.jpg",
        "x": 134,
        "y": 698,
        "hidden": false
    },
    {
        "name": "GoblinThree",
        "alignment": "hostile",
        "imgSrc": "img/goblin.jpg",
        "x": 100,
        "y": 625,
        "hidden": false
    },
    {
        "name": "GoblinFour",
        "alignment": "hostile",
        "imgSrc": "img/goblin.jpg",
        "x": 134,
        "y": 625,
        "hidden": false
    },
    {
        "name": "GoblinFive",
        "alignment": "hostile",
        "imgSrc": "img/goblin.jpg",
        "x": 98,
        "y": 661,
        "hidden": false
    },
    {
        "name": "GoblinSix",
        "alignment": "hostile",
        "imgSrc": "img/goblin.jpg",
        "x": 171,
        "y": 698,
        "hidden": false
    },
    {
        "name": "GoblinSeven",
        "alignment": "hostile",
        "imgSrc": "img/goblin.jpg",
        "x": 134,
        "y": 660,
        "hidden": false
    },
    {
        "name": "HobgoblinOne",
        "alignment": "hostile",
        "imgSrc": "img/hobgoblin.png",
        "x": 241,
        "y": 661,
        "hidden": false
    },
    {
        "name": "HobgoblinTwo",
        "alignment": "hostile",
        "imgSrc": "img/hobgoblin.png",
        "x": 274,
        "y": 659,
        "hidden": false
    },
    {
        "name": "HobgoblinThree",
        "alignment": "hostile",
        "imgSrc": "img/hobgoblin.png",
        "x": 207,
        "y": 660,
        "hidden": false
    },
    {
        "name": "HobgoblinFour",
        "alignment": "hostile",
        "imgSrc": "img/hobgoblin.png",
        "x": 170,
        "y": 659,
        "hidden": false
    },
    {
        "name": "GoblinEight",
        "alignment": "hostile",
        "imgSrc": "img/goblin.jpg",
        "x": 428,
        "y": 649,
        "hidden": false
    },
    {
        "name": "GoblinNine",
        "alignment": "hostile",
        "imgSrc": "img/goblin.jpg",
        "x": 337,
        "y": 658,
        "hidden": false
    },
    {
        "name": "GoblinTen",
        "alignment": "hostile",
        "imgSrc": "img/goblin.jpg",
        "x": 392,
        "y": 645,
        "hidden": false
    },
    {
        "name": "GoblinEleven",
        "alignment": "hostile",
        "imgSrc": "img/goblin.jpg",
        "x": 240,
        "y": 697,
        "hidden": false
    },
    {
        "name": "GoblinTwelve",
        "alignment": "hostile",
        "imgSrc": "img/goblin.jpg",
        "x": 390,
        "y": 616,
        "hidden": false
    },
    {
        "name": "GoblinThirteen",
        "alignment": "hostile",
        "imgSrc": "img/goblin.jpg",
        "x": 204,
        "y": 697,
        "hidden": false
    },
    {
        "name": "GoblinFourteen",
        "alignment": "hostile",
        "imgSrc": "img/goblin.jpg",
        "x": 358,
        "y": 615,
        "hidden": false
    },
    {
        "name": "Yegg",
        "alignment": "boss",
        "imgSrc": "img/goblin.jpg",
        "x": 409,
        "y": 676,
        "hidden": false
    },
    {
        "name": "Grick",
        "alignment": "hostile",
        "imgSrc": "img/grick.png",
        "x": 1033,
        "y": 697,
        "hidden": false
    },
    {
        "name": "GoblinFifteen",
        "alignment": "hostile",
        "imgSrc": "img/goblin.jpg",
        "x": 418,
        "y": 162,
        "hidden": true
    },
    {
        "name": "GoblinSixteen",
        "alignment": "hostile",
        "imgSrc": "img/goblin.jpg",
        "x": 453,
        "y": 163,
        "hidden": true
    },
    {
        "name": "Lhupo",
        "alignment": "boss",
        "imgSrc": "img/goblin.jpg",
        "x": 421,
        "y": 89,
        "hidden": true
    },
    {
        "name": "HobgoblinFive",
        "alignment": "hostile",
        "imgSrc": "img/hobgoblin.png",
        "x": 848,
        "y": 485,
        "hidden": false
    },
    {
        "name": "HobgoblinSix",
        "alignment": "hostile",
        "imgSrc": "img/hobgoblin.png",
        "x": 852,
        "y": 446,
        "hidden": false
    },
    {
        "name": "HobgoblinSeven",
        "alignment": "hostile",
        "imgSrc": "img/hobgoblin.png",
        "x": 791,
        "y": 4,
        "hidden": false
    },
    {
        "name": "HobgoblinEight",
        "alignment": "hostile",
        "imgSrc": "img/hobgoblin.png",
        "x": 752,
        "y": 2,
        "hidden": false
    },
    {
        "name": "Owlbear",
        "alignment": "hostile",
        "imgSrc": "img/owlbear.png",
        "x": 373,
        "y": 710,
        "hidden": false
    },
    {
        "name": "KingGrol",
        "alignment": "boss",
        "imgSrc": "img/grol.jpg",
        "x": 900,
        "y": 368,
        "hidden": false
    },
    {
        "name": "Snarl",
        "alignment": "hostile",
        "imgSrc": "img/wolf.jpg",
        "x": 969,
        "y": 309,
        "hidden": false
    },
    {
        "name": "Doppleganger",
        "alignment": "boss",
        "imgSrc": "img/drow.jpeg",
        "x": 948,
        "y": 349,
        "hidden": false
    },
    {
        "name": "Gundrun",
        "alignment": "friendly",
        "imgSrc": "img/gundrun.jpeg",
        "x": 273,
        "y": 376,
        "hidden": false
    },
    {
        "name": "Belimore",
        "alignment": "friendly",
        "imgSrc": "img/belimore.jpg",
        "x": 248,
        "y": 270,
        "hidden": false
    },
    {
        "name": "Cire",
        "alignment": "friendly",
        "imgSrc": "img/cire.jpg",
        "x": 279,
        "y": 304,
        "hidden": false
    },
    {
        "name": "Panther",
        "alignment": "friendly",
        "imgSrc": "img/panther.jpg",
        "x": 247,
        "y": 301,
        "hidden": false
    },
    {
        "name": "Rew",
        "alignment": "friendly",
        "imgSrc": "img/rew.jpg",
        "x": 273,
        "y": 340,
        "hidden": false
    },
    {
        "name": "Speeder",
        "alignment": "friendly",
        "imgSrc": "img/speeder.jpg",
        "x": 246,
        "y": 379,
        "hidden": false
    },
    {
        "name": "Wolf",
        "alignment": "friendly",
        "imgSrc": "img/wolf.jpg",
        "x": 244,
        "y": 339,
        "hidden": false
    }
]
