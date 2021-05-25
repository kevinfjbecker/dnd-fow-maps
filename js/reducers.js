dndFowMap.reducer = (function(dfm) {
  const combatantsReducer = (state = [], action) => {
    switch (action.type) {
      case dfm.actions.MONSTER_TO_CURRENT_ROOM:
        return state.concat([action.monster]);

      case dfm.actions.MOVE_TOKEN:
        return state.map((combatant)=> {
          if (combatant.name === action.tokenName) {
            combatant.x = action.location.x;
            combatant.y = action.location.y;
          }
          return combatant;
        });

      case dfm.actions.REMOVE_CURRENT_TOKEN:
        const currentToken = dfm.store.getState().currentToken; // impure?
        if (currentToken) {
          return state.filter((combatant)=>combatant !== currentToken);
        }
        return state;

      case dfm.actions.SHOW_ROOM_WITH_COMBATANTS:
        const room = dfm.store.getState().geometry // impure?
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
      case dfm.actions.END_EDIT:
        state.isComplete = true;
        return state; // maintain identity with room in geometry

      case dfm.actions.INITIALIZE_NEW_ROOM:
        return action.room;

      case dfm.actions.MOVE_VETEX:
        state.vertices = state.vertices.map((v) => {
          if (v === action.vertex) {
            v[0] = action.location.x;
            v[1] = action.location.y;
          }
          return v;
        });
        return state; // maintain identity with room in geometry

      case dfm.actions.NEW_VERTEX:
        state.vertices = state.vertices.concat([action.vertex]);
        return state; // maintain identity with room in geometry

      case dfm.actions.SET_CURRENT_ROOM:
        return dfm.store.getState().geometry // impure?
            .filter((room) => room.name === action.roomName)[0] || null;

      case dfm.actions.SET_CURRENT_ROOM_NAME:
        state.name = action.roomName;
        return state; // maintain identity with room in geometry

      default:
        return state;
    }
  };

  const currentTokenReducer = (state = null, action) => {
    switch (action.type) {
      case dfm.actions.REMOVE_CURRENT_TOKEN:
        return null;

      case dfm.actions.SET_CURRENT_TOKEN:
        return action.token;

      default:
        return state;
    }
  };

  const geometryEditorShowPathsReducer = (state = false, action) => {
    switch (action.type) {
      case dfm.actions.TOGGLE_PATHS:
        return !state;

      default:
        return state;
    }
  };

  const geometryEditorStateReducer = (state = 'stop', action) => {
    switch (action.type) {
      case dfm.actions.END_EDIT:
        return 'stop';

      case dfm.actions.SET_EDITOR_STATE_READY:
        return 'ready';

      case dfm.actions.INITIALIZE_NEW_ROOM:
        return 'reading';

      default:
        return state;
    }
  };

  const geometryReducer = (state = null, action) => {
    switch (action.type) {
      case dfm.actions.INITIALIZE_NEW_ROOM:
        return state.concat([action.room]);

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
    state.geometryEditorShowPaths = geometryEditorShowPathsReducer(
        state.geometryEditorShowPaths, action);
    state.geometryEditorState = geometryEditorStateReducer(
        state.geometryEditorState, action);
    state.geometry = geometryReducer(state.geometry, action);
    return state;
  };
})(dndFowMap);
