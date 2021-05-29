dndFowMap.actions = (function(dfm) {
  // ////////////////////////////////////////////////////////// action types //
  const END_EDIT = 'END_EDIT';
  const INITIALIZE_NEW_ROOM = 'INITIALIZE_NEW_ROOM';
  const MONSTER_TO_CURRENT_ROOM = 'MONSTER_TO_CURRENT_ROOM';
  const MOVE_TOKEN = 'MOVE_TOKEN';
  const MOVE_VETEX = 'MOVE_VETEX';
  const NEW_VERTEX = 'NEW_VERTEX';
  const REMOVE_CURRENT_TOKEN = 'REMOVE_CURRENT_TOKEN';
  const SET_CURRENT_ROOM = 'SET_CURRENT_ROOM';
  const SET_CURRENT_ROOM_NAME = 'SET_CURRENT_ROOM_NAME';
  const SET_CURRENT_TOKEN = 'SET_CURRENT_TOKEN';
  const SET_EDITOR_STATE_READY = 'SET_EDITOR_STATE_READY';
  const SHOW_ROOM_WITH_COMBATANTS = 'SHOW_ROOM_WITH_COMBATANTS';
  const TOGGLE_PATHS = 'TOGGLE_PATHS';

  // ///////////////////////////////////////////////////// action generators //

  const addEndEditAction = (id) => ({
    type: END_EDIT,
    id,
  });

  const addInitializeNewRoomAction = (room) => ({
    type: INITIALIZE_NEW_ROOM,
    room,
  });

  const addMonsterToCurrentRoomAction = (monster) => ({
    type: MONSTER_TO_CURRENT_ROOM,
    monster,
  });

  const addMoveTokenAction = (tokenName, location) => ({
    type: MOVE_TOKEN,
    tokenName,
    location,
  });

  const addMoveVetexAction = (id, vertex, location) => ({
    type: MOVE_VETEX,
    id,
    vertex,
    location,
  });

  const addNewVertexAction = (id, vertex) => ({
    type: NEW_VERTEX,
    id,
    vertex,
  });

  const addRemoveCurrentTokenAction = (id) => ({
    type: REMOVE_CURRENT_TOKEN,
    id,
  });

  const addSetCurrentRoomAction = (id) => ({
    type: SET_CURRENT_ROOM,
    id,
  });

  const addSetCurrentRoomNameAction = (id, roomName) => ({
    type: SET_CURRENT_ROOM_NAME,
    id,
    roomName,
  });

  const addSetCurrentTokenAction = (id) => ({
    type: SET_CURRENT_TOKEN,
    id,
  });

  const addSetEditorStateReadyAction = () => ({
    type: SET_EDITOR_STATE_READY,
  });

  const addShowRoomWithCombatantsAction = (roomName, shown) => ({
    type: SHOW_ROOM_WITH_COMBATANTS,
    roomName,
    shown,
  });

  const addTogglePathsAction = () => ({
    type: TOGGLE_PATHS,
  });

  // //////////////////////////////////////////////////////////////// expose //
  return {
    END_EDIT,
    INITIALIZE_NEW_ROOM,
    MONSTER_TO_CURRENT_ROOM,
    MOVE_TOKEN,
    MOVE_VETEX,
    NEW_VERTEX,
    REMOVE_CURRENT_TOKEN,
    SET_CURRENT_ROOM,
    SET_CURRENT_ROOM_NAME,
    SET_CURRENT_TOKEN,
    SET_EDITOR_STATE_READY,
    SHOW_ROOM_WITH_COMBATANTS,
    TOGGLE_PATHS,
    addEndEditAction,
    addInitializeNewRoomAction,
    addMonsterToCurrentRoomAction,
    addMoveTokenAction,
    addMoveVetexAction,
    addNewVertexAction,
    addRemoveCurrentTokenAction,
    addSetCurrentRoomAction,
    addSetCurrentRoomNameAction,
    addSetCurrentTokenAction,
    addSetEditorStateReadyAction,
    addShowRoomWithCombatantsAction,
    addTogglePathsAction,
  };
}(dndFowMap));

