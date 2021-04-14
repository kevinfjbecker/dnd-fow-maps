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

      case dfm.actions.REMOVE_CURRENT_TOKEN:
        const currentToken = dfm.store.getState().currentToken;
        if (currentToken) {
          return state.filter((combatant)=>combatant !== currentToken);
        }
        return state;

      case dfm.actions.SHOW_ROOM_WITH_COMBATANTS:
        const room = dfm.store.getState().geometry
            .filter((r) => r.name === action.roomName)[0];
        return state.map((combatant)=>{
          if (d3.polygonContains(room.vertices, [combatant.x, combatant.y])) {
            combatant.hidden = !action.shown;
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

  const currentTokenReducer = (state = null, action) => {
    switch (action.type) {
      case dfm.actions.REMOVE_CURRENT_TOKEN:
        return null;
      default:
        return state;
    }
  };

  const geometryReducer = (state = null, action) => {
    switch (action.type) {
      case dfm.actions.SHOW_ROOM_WITH_COMBATANTS:
        return state.map((room) => {
          if (room.name === action.roomName) {
            room.isExplored = action.shown;
          }
          return room;
        });

      default:
        return state;
    }
  };

  // todo: do something about this.
  return function(state = {}, action) {
    state.combatants = combatantsReducer(state.combatants, action);
    state.currentRoom = currentRoomReducer(state.currentRoom, action);
    state.currentToken = currentTokenReducer(state.currentToken, action);
    state.geometry = geometryReducer(state.geometry, action);
    return state;
  };
})(dndFowMap);
