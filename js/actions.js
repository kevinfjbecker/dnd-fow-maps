dndFowMap.actions = (function(dfm) {
  // ////////////////////////////////////////////////////////// action types //
  const MOVE_TOKEN = 'MOVE_TOKEN';
  const SET_CURRENT_ROOM = 'SET_CURRENT_ROOM';

  // ///////////////////////////////////////////////////// action generators //
  const addMoveTokenAction = (tokenName, location) => ({
    type: MOVE_TOKEN,
    tokenName,
    location,
  });

  const addSetCurrentRoomAction = (roomName) => ({
    type: SET_CURRENT_ROOM,
    roomName,
  });

  // //////////////////////////////////////////////////////////////// expose //
  return {
    MOVE_TOKEN,
    SET_CURRENT_ROOM,

    addMoveTokenAction,
    addSetCurrentRoomAction,
  };
}(dndFowMap));

