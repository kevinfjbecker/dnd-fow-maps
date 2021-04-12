dndFowMap.reducer = (function(dfm) {
  const combatantsReducer = (state = [], action) => {
    switch (action.type) {
      case dfm.actions.MOVE_TOKEN:
        return state.map((combatant)=> {
          if (combatant.name === action.tokenName) {
            combatant.x = action.location.x;
            combatant.y = action.location.y;
          }
          return combatant;
        });
      default:
        return state;
    }
  };

  const currentRoomReducer = (state = null, action) => {
    switch (action.type) {
      case dfm.actions.SET_CURRENT_ROOM:
        return dfm.store.getState().geometry
            .filter((room) => room.name === action.roomName)[0] || null;
      default:
        return state;
    }
  };

  // todo: do something about this.
  return function(state = {}, action) {
    state.currentRoom = currentRoomReducer(state.currentRoom, action);
    state.combatants = combatantsReducer(state.combatants, action);
    return state;
  };
})(dndFowMap);
