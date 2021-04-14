dndFowMap.actions = (function(dfm) {
  // ////////////////////////////////////////////////////////// action types //
  const MOVE_TOKEN = 'MOVE_TOKEN';
  const REMOVE_CURRENT_TOKEN = 'REMOVE_CURRENT_TOKEN';
  const SET_CURRENT_ROOM = 'SET_CURRENT_ROOM';
  const SHOW_ROOM_WITH_COMBATANTS = 'SHOW_ROOM_WITH_COMBATANTS';

  // ///////////////////////////////////////////////////// action generators //
  const addMoveTokenAction = (tokenName, location) => ({
    type: MOVE_TOKEN,
    tokenName,
    location,
  });

  const addRemoveCurrentTokenAction = () => ({
    type: REMOVE_CURRENT_TOKEN,
  });

  const addSetCurrentRoomAction = (roomName) => ({
    type: SET_CURRENT_ROOM,
    roomName,
  });

  const addShowRoomWithCombatantsAction = (roomName, shown) => ({
    type: SHOW_ROOM_WITH_COMBATANTS,
    roomName,
    shown,
  });

  // //////////////////////////////////////////////////////////////// expose //
  return {
    MOVE_TOKEN,
    REMOVE_CURRENT_TOKEN,
    SET_CURRENT_ROOM,
    SHOW_ROOM_WITH_COMBATANTS,
    addMoveTokenAction,
    addRemoveCurrentTokenAction,
    addSetCurrentRoomAction,
    addShowRoomWithCombatantsAction,
  };
}(dndFowMap));

