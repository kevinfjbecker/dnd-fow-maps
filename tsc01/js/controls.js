
// ///////////////////////////////////////////////////////////// controls.js //

dndFowMap.controls = (function(dfm) {
  // //////////////////////////////////////////////////////////////// Import //

  const updateCombatants = dfm.tacticalMap.updateCombatants;
  const updatePaths = dfm.geometryEditor.updatePaths;
  const updateVertexHandles = dfm.geometryEditor.updateVertexHandles;
  const store = dfm.store;
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

  const getRoomHit = (xy) => store.getState().geometry.filter((room) =>
    d3.polygonContains(room.vertices, [d3.event.pageX, d3.event.pageY]),
  )[0] || null;

  d3.select('svg').on('click', () => {
    if (dfm.store.getState().geometryEditorState === 'stop') { // NOT editiing
      const room = (getRoomHit([d3.event.pageX, d3.event.pageY]));
      store.dispatch(addSetCurrentRoomAction(room && room.name || null));
    }
  });

  store.subscribe(()=>{
    document.getElementById('room-name').value =
    store.getState().currentRoom && store.getState().currentRoom.name || '';
    updatePaths();
    updateVertexHandles();
    updateCombatants();
  });

  // NB: Token Selection is in Token Dragging (as of writing)

  // //////////////////////////////////////////////////// Wandering Monsters //

  // assumes the naming pattern: {name}.{index}
  const nextMonsterNameSuffix = (name) =>
    store.getState().combatants
        .filter((c) => c.name.split('.')[0] === name).length;

  // ////////////////////////////////////////////// Populate Monsters & NPCs //

  const addMonsterToCurrentRoom = (name) => {
    const c = centerOfRoom(store.getState().currentRoom);
    store.dispatch(addMonsterToCurrentRoomAction({
      alignment: 'hostile',
      hidden: false,
      tokenRef: name.toLowerCase(),
      name: `${name}.${nextMonsterNameSuffix(name)}`,
      x: c[0],
      y: c[1],
    }));
  };

  const removeCurrentToken = () => {
    store.dispatch(addRemoveCurrentTokenAction());
  };

  return {
    addMonsterToCurrentRoom,
    hideControls,
    removeCurrentToken,
    showControls,
  };
})(dndFowMap);
