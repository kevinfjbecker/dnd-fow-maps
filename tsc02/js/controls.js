
// ///////////////////////////////////////////////////////////// controls.js //

dndFowMap.controls = (function(dfm) {
  // //////////////////////////////////////////////////////////////// Import //

  // const updateCombatants = dfm.tacticalMap.updateCombatants;
  // const updatePaths = dfm.geometryEditor.updatePaths;
  // const updateVertexHandles = dfm.geometryEditor.updateVertexHandles;
  const store = dfm.store;
  const tokenSet = dfm.store.getState().tokenSet;
  const addSetCurrentRoomAction = dfm.actions.addSetCurrentRoomAction;
  const addRemoveCurrentTokenAction = dfm.actions.addRemoveCurrentTokenAction;
  const addMonsterToCurrentRoomAction =
    dfm.actions.addMonsterToCurrentRoomAction;

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

  const getRoomHit = (xy) => {
    return store.getState().geometry.filter((room) =>
      d3.polygonContains(room.vertices, [d3.event.pageX, d3.event.pageY]),
    )[0] || null;
  };

  d3.select('svg').on('click', () => {
    if (store.getState().geometryEditorState === 'stop') { // NOT editiing
      const room = getRoomHit([d3.event.pageX, d3.event.pageY]);
      store.dispatch(addSetCurrentRoomAction(room && room.id || null));
    }
  });

  store.subscribe(()=>{
    const id = store.getState().currentRoom;
    const room = store.getState().geometry.filter((r) => r.id === id)[0];
    document.getElementById('room-name').value = room && room.name || '';
    // updatePaths(); // cruft
    // updateVertexHandles(); // cruft
    // updateCombatants(); // cruft
  });

  // NB: Token Selection is in Token Dragging (as of writing)

  // //////////////////////////////////////////////////// Wandering Monsters //

  // assumes the naming pattern: {name}.{index}
  const nextMonsterNameSuffix = (name) =>
    store.getState().combatants
        .filter((c) => c.name.split('.')[0] === name).length;

  // ////////////////////////////////////////////// Populate Monsters & NPCs //

  const getTokenIdByName = (name) =>
    tokenSet.filter((t) => t.name === name)[0].id;

  const addMonsterToCurrentRoom = (name) => {
    const c = centerOfRoom(dfm.stateUtilities.getCurrentRoom());
    store.dispatch(addMonsterToCurrentRoomAction({
      alignment: 'hostile',
      hidden: false,
      id: dfm.getUuid(),
      name: `${name}.${nextMonsterNameSuffix(name)}`,
      tokenRef: getTokenIdByName(name.toLowerCase()),
      x: c[0],
      y: c[1],
    }));
  };

  const removeCurrentToken = () => {
    const id = dfm.store.getState().currentToken;
    store.dispatch(addRemoveCurrentTokenAction(id));
  };

  return {
    addMonsterToCurrentRoom,
    hideControls,
    removeCurrentToken,
    showControls,
  };
})(dndFowMap);
