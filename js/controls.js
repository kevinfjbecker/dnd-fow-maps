
// ///////////////////////////////////////////////////////////// controls.js //

dndFowMap.controls = (function(dfm) {
  // //////////////////////////////////////////////////////////////// Import //

  const updateCombatants = dfm.tacticalMap.updateCombatants;
  const updatePaths = dfm.geometryEditor.updatePaths;
  const updateVertexHandles = dfm.geometryEditor.updateVertexHandles;
  const getWanderingMonsters = dfm.wanderingMonster.getWanderingMonsters;

  // /////////////////////////////////////////////////////////////// Utility //

  const centerOfRoom = (room) => d3.polygonCentroid(room.vertices);

  // ///////////////////////////////////////////////////////// Form Controls //

  const hideControls = () => {
    document.querySelector('#control-panel').setAttribute('hidden', true);
  };

  const showControls = () => {
    document.querySelector('#control-panel').removeAttribute('hidden');
  };

  // ///////////////////////////////////////////////////// Element Selection //

  d3.select('svg').on('click', () => {
    if (dfm.state.geometryEditorState === 'stop') { // NOT editiing geometry
      dfm.state.currentRoom = dfm.state.geometry.filter((room) => {
        return d3.polygonContains(room.vertices,
            [d3.event.pageX, d3.event.pageY]);
      })[0];
      document.getElementById('room-name').value =
      dfm.state.currentRoom && dfm.state.currentRoom.name || '';
      updatePaths();
      updateVertexHandles();
    }
  });

  // NB: Token Selection is in Token Dragging (as of writing)

  // //////////////////////////////////////////////////// Wandering Monsters //

  // assumes the naming pattern: {name}.{index}
  const nextMonsterNameSuffix = (name) =>
    dfm.state.combatants.filter((c) => c.name.split('.')[0] === name).length;

  const addWanderingMonstersToCurrentRoom = () => {
    if (!dfm.state.currentRoom) {
      return;
    }
    const c = centerOfRoom(dfm.state.currentRoom);
    const monsters = getWanderingMonsters(c[0], c[1]);
    const indexOffset = nextMonsterNameSuffix(monsters[0].name);
    monsters.forEach((m, i) => m.name = `${m.name}.${i + indexOffset}`);
    dfm.state.combatants.push(...monsters);
    updateCombatants();
  };

  // ////////////////////////////////////////////// Populate Monsters & NPCs //

  const addMonsterToCurrentRoom = (name, imgFileType = 'jpg') => {
    const c = centerOfRoom(dfm.state.currentRoom);
    dfm.state.combatants.push({
      alignment: 'hostile',
      hidden: false,
      imgSrc: dfm.state.tokenSet[name] || `img/${name}.${imgFileType}`,
      name: `${name}.${nextMonsterNameSuffix(name)}`,
      x: c[0],
      y: c[1],
    });
    updateCombatants();
  };

  const removeCurrentToken = () => {
    dfm.state.combatants.splice(
        dfm.state.combatants.indexOf(dfm.state.currentToken), 1);
    updateCombatants();
  };

  return {
    addWanderingMonstersToCurrentRoom: addWanderingMonstersToCurrentRoom,
    addMonsterToCurrentRoom: addMonsterToCurrentRoom,
    hideControls: hideControls,
    removeCurrentToken: removeCurrentToken,
    showControls: showControls,
  };
})(dndFowMap);
