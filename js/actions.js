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

  const addEndEditAction = () => ({
    type: END_EDIT,
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

  const addMoveVetexAction = (vertex, location) => ({
    type: MOVE_VETEX,
    vertex,
    location,
  });

  const addNewVertexAction = (vertex) => ({
    type: NEW_VERTEX,
    vertex,
  });

  const addRemoveCurrentTokenAction = () => ({
    type: REMOVE_CURRENT_TOKEN,
  });

  const addSetCurrentRoomAction = (roomName) => ({
    type: SET_CURRENT_ROOM,
    roomName,
  });

  const addSetCurrentRoomNameAction = (roomName) => ({
    type: SET_CURRENT_ROOM_NAME,
    roomName,
  });

  const addSetCurrentTokenAction = (token) => ({
    type: SET_CURRENT_TOKEN,
    token,
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

