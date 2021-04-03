
// ////////////////////////////////////////////////////////////// controls.js //

// ////////////////////////////////////////////////////////////////// Utility //

const centerOfRoom = (room) => d3.polygonCentroid(room.vertices);

// //////////////////////////////////////////////////////////// Form Controls //

// eslint-disable-next-line no-unused-vars
const hideControls = () => {
  document.querySelector('#control-panel').setAttribute('hidden', true);
};

// eslint-disable-next-line no-unused-vars
const showControls = () => {
  document.querySelector('#control-panel').removeAttribute('hidden');
};

// //////////////////////////////////////////////////////// Element Selection //

d3.select('svg').on('click', () => {
  if (state === 'stop') { // not editiing room geometry
    currentRoom = geometry.filter((room) => {
      return d3.polygonContains(room.vertices,
          [d3.event.pageX, d3.event.pageY]);
    })[0];
    document.getElementById('room-name').value =
        currentRoom && currentRoom.name || '';
    updatePaths();
    updateVertexHandles();
  }
});

// NB: Token Selection is in Token Dragging (as of writing)

// /////////////////////////////////////////////////////// Wandering Monsters //

// assumes the naming pattern: {name}.{index}
const nextMonsterNameSuffix = (name) =>
  combatants.filter((c) => c.name.split('.')[0] === name).length;

// eslint-disable-next-line no-unused-vars
const addWanderingMonstersToCurrentRoom = () => {
  if (!currentRoom) {
    return;
  }
  const c = centerOfRoom(currentRoom);
  const monsters = getWanderingMonsters(c[0], c[1]);
  const indexOffset = nextMonsterNameSuffix(monsters[0].name);
  monsters.forEach((m, i) => m.name = `${m.name}.${i + indexOffset}`);
  combatants.push(...monsters);
  updateCombatants();
};

// ///////////////////////////////////////////////// Populate Monsters & NPCs //

// eslint-disable-next-line no-unused-vars
const addMonsterToCurrentRoom = (name, imgFileType = 'jpg') => {
  const c = centerOfRoom(currentRoom);
  combatants.push({
    alignment: 'hostile',
    hidden: false,
    imgSrc: tokenSet[name] || `img/${name}.${imgFileType}`,
    name: `${name}.${nextMonsterNameSuffix(name)}`,
    x: c[0],
    y: c[1],
  });
  updateCombatants();
};

// eslint-disable-next-line no-unused-vars
const removeCurrentToken = () => {
  combatants.splice(combatants.indexOf(currentToken), 1);
  updateCombatants();
};
