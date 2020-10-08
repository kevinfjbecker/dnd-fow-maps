const combatants = [
    {
        "name": "Random",
        "alignment": "friendly",
        "imgSrc": "img/random.jpeg",
        "x": 632,
        "y": 91,
        "hidden": false
    },
    {
        "name": "GoblinOne",
        "alignment": "hostile",
        "imgSrc": "img/goblin.jpg",
        "x": 203,
        "y": 302,
        "hidden": true
    },
    {
        "name": "GoblinTwo",
        "alignment": "hostile",
        "imgSrc": "img/goblin.jpg",
        "x": 168,
        "y": 271,
        "hidden": true
    },
    {
        "name": "GoblinThree",
        "alignment": "hostile",
        "imgSrc": "img/goblin.jpg",
        "x": 203,
        "y": 517,
        "hidden": true
    },
    {
        "name": "GoblinFour",
        "alignment": "hostile",
        "imgSrc": "img/goblin.jpg",
        "x": 171,
        "y": 517,
        "hidden": true
    },
    {
        "name": "GoblinFive",
        "alignment": "hostile",
        "imgSrc": "img/goblin.jpg",
        "x": 205,
        "y": 556,
        "hidden": true
    },
    {
        "name": "GoblinSix",
        "alignment": "hostile",
        "imgSrc": "img/goblin.jpg",
        "x": 241,
        "y": 554,
        "hidden": true
    },
    {
        "name": "GoblinSeven",
        "alignment": "hostile",
        "imgSrc": "img/goblin.jpg",
        "x": 205,
        "y": 588,
        "hidden": true
    },
    {
        "name": "HobgoblinOne",
        "alignment": "hostile",
        "imgSrc": "img/hobgoblin.png",
        "x": 204,
        "y": 160,
        "hidden": true
    },
    {
        "name": "HobgoblinTwo",
        "alignment": "hostile",
        "imgSrc": "img/hobgoblin.png",
        "x": 169,
        "y": 160,
        "hidden": true
    },
    {
        "name": "HobgoblinThree",
        "alignment": "hostile",
        "imgSrc": "img/hobgoblin.png",
        "x": 135,
        "y": 196,
        "hidden": true
    },
    {
        "name": "HobgoblinFour",
        "alignment": "hostile",
        "imgSrc": "img/hobgoblin.png",
        "x": 134,
        "y": 230,
        "hidden": true
    },
    {
        "name": "GoblinEight",
        "alignment": "hostile",
        "imgSrc": "img/goblin.jpg",
        "x": 420,
        "y": 448,
        "hidden": true
    },
    {
        "name": "GoblinNine",
        "alignment": "hostile",
        "imgSrc": "img/goblin.jpg",
        "x": 490,
        "y": 483,
        "hidden": true
    },
    {
        "name": "GoblinTen",
        "alignment": "hostile",
        "imgSrc": "img/goblin.jpg",
        "x": 385,
        "y": 412,
        "hidden": true
    },
    {
        "name": "GoblinEleven",
        "alignment": "hostile",
        "imgSrc": "img/goblin.jpg",
        "x": 351,
        "y": 447,
        "hidden": true
    },
    {
        "name": "GoblinTwelve",
        "alignment": "hostile",
        "imgSrc": "img/goblin.jpg",
        "x": 420,
        "y": 483,
        "hidden": true
    },
    {
        "name": "GoblinThirteen",
        "alignment": "hostile",
        "imgSrc": "img/goblin.jpg",
        "x": 385,
        "y": 518,
        "hidden": true
    },
    {
        "name": "GoblinFourteen",
        "alignment": "hostile",
        "imgSrc": "img/goblin.jpg",
        "x": 454,
        "y": 516,
        "hidden": true
    },
    {
        "name": "Yegg",
        "alignment": "boss",
        "imgSrc": "img/goblin.jpg",
        "x": 456,
        "y": 414,
        "hidden": true
    },
    {
        "name": "Grick",
        "alignment": "hostile",
        "imgSrc": "img/grick.png",
        "x": 333,
        "y": 284,
        "hidden": true
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
        "x": 742,
        "y": 341,
        "hidden": true
    },
    {
        "name": "HobgoblinSix",
        "alignment": "hostile",
        "imgSrc": "img/hobgoblin.png",
        "x": 742,
        "y": 411,
        "hidden": true
    },
    {
        "name": "HobgoblinSeven",
        "alignment": "hostile",
        "imgSrc": "img/hobgoblin.png",
        "x": 598,
        "y": 195,
        "hidden": false
    },
    {
        "name": "HobgoblinEight",
        "alignment": "hostile",
        "imgSrc": "img/hobgoblin.png",
        "x": 599,
        "y": 232,
        "hidden": false
    },
    {
        "name": "Owlbear",
        "alignment": "hostile",
        "imgSrc": "img/owlbear.png",
        "x": 708,
        "y": 555,
        "hidden": true
    },
    {
        "name": "KingGrol",
        "alignment": "boss",
        "imgSrc": "img/grol.jpg",
        "x": 885,
        "y": 196,
        "hidden": true
    },
    {
        "name": "Snarl",
        "alignment": "hostile",
        "imgSrc": "img/wolf.jpg",
        "x": 886,
        "y": 232,
        "hidden": true
    },
    {
        "name": "Doppleganger",
        "alignment": "boss",
        "imgSrc": "img/drow.jpeg",
        "x": 851,
        "y": 232,
        "hidden": true
    },
    {
        "name": "Gundrun",
        "alignment": "friendly",
        "imgSrc": "img/gundrun.jpeg",
        "x": 816,
        "y": 126,
        "hidden": true
    },
    {
        "name": "Belimore",
        "alignment": "friendly",
        "imgSrc": "img/belimore.jpg",
        "x": 597,
        "y": 54,
        "hidden": false
    },
    {
        "name": "Cire",
        "alignment": "friendly",
        "imgSrc": "img/cire.jpg",
        "x": 632,
        "y": 53,
        "hidden": false
    },
    {
        "name": "Panther",
        "alignment": "friendly",
        "imgSrc": "img/panther.jpg",
        "x": 635,
        "y": 234,
        "hidden": false
    },
    {
        "name": "Rew",
        "alignment": "friendly",
        "imgSrc": "img/rew.jpg",
        "x": 598,
        "y": 90,
        "hidden": false
    },
    {
        "name": "Speeder",
        "alignment": "friendly",
        "imgSrc": "img/speeder.jpg",
        "x": 634,
        "y": 197,
        "hidden": false
    },
    {
        "name": "Wolf",
        "alignment": "friendly",
        "imgSrc": "img/wolf.jpg",
        "x": 601,
        "y": 162,
        "hidden": false
    }
]