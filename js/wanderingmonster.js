
// 1–3    Stirges (2d4)
// 4–5    Ghouls (1d4)
// 6      Gricks (1d4)
// 7–8    Bugbears (1d4)
// 9      Skeletons (1d6)
// 10     Zombies (1d6)
// 11–12  Ochre Jelly (1)

const rollD = (sides) => Math.floor(Math.random() * sides) + 1;

const monsterTemplates = [
  {
    'name': 'bugbear',
    'alignment': 'hostile',
    'imgSrc': 'img/bugbear.jpg',
    'hidden': false,
  },
  {
    'name': 'ghoul',
    'alignment': 'hostile',
    'imgSrc': 'img/ghoul.png',
    'hidden': false,
  },
  {
    'name': 'grick',
    'alignment': 'hostile',
    'imgSrc': 'img/grick.png',
    'hidden': false,
  },
  {
    'name': 'ochrejelly',
    'alignment': 'hostile',
    'imgSrc': 'img/ochrejelly.png',
    'hidden': false,
  },
  {
    'name': 'skeleton',
    'alignment': 'hostile',
    'imgSrc': 'img/skeleton.png',
    'hidden': false,
  },
  {
    'name': 'stirge',
    'alignment': 'hostile',
    'imgSrc': 'img/stirge.jpg',
    'hidden': false,
  },
  {
    'name': 'zombie',
    'alignment': 'hostile',
    'imgSrc': 'img/zombie.jpeg',
    'hidden': false,
  },
];

const getMonsterTemplate = (name) =>
  monsterTemplates.filter((m) => m.name === name)[0];

const wanderingMonsters = [
  'nothing here',
  {count: () => rollD(4) + rollD(4), name: 'stirge'},
  {count: () => rollD(4) + rollD(4), name: 'stirge'},
  {count: () => rollD(4) + rollD(4), name: 'stirge'},
  {count: () => rollD(4), name: 'ghoul'},
  {count: () => rollD(4), name: 'ghoul'},
  {count: () => rollD(4), name: 'grick'},
  {count: () => rollD(4), name: 'bugbear'},
  {count: () => rollD(4), name: 'bugbear'},
  {count: () => rollD(6), name: 'skeleton'},
  {count: () => rollD(6), name: 'zombie'},
  {count: () => 1, name: 'ochrejelly'},
  {count: () => 1, name: 'ochrejelly'},
];


// eslint-disable-next-line no-unused-vars
const deepCopy = (obj) => JSON.parse(JSON.stringify(obj)); // cruft?

// eslint-disable-next-line no-unused-vars
const getWanderingMonsters = (x, y) => {
  const tableResult = wanderingMonsters[rollD(12)];
  const template = getMonsterTemplate(tableResult.name);
  return d3.range(tableResult.count()).map(() => ({
    'name': template.name,
    'alignment': template.alignment,
    'imgSrc': template.imgSrc,
    'hidden': template.hidden,
    'x': x,
    'y': y,
  }));
};
