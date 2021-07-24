dndFowMap.reducer = (function(dfm) {
  const combatantsReducer = (state = [], action) => {
    switch (action.type) {
      case dfm.actions.MONSTER_TO_CURRENT_ROOM:
        return state.concat([action.monster]);

      case dfm.actions.MOVE_TOKEN:
        return state.map((combatant) => {
          if (combatant.name === action.tokenName) {
            combatant.x = action.location.x;
            combatant.y = action.location.y;
          }
          return combatant;
        });

      case dfm.actions.REMOVE_CURRENT_TOKEN:
        if (action.id) {
          return state.filter((combatant)=>combatant.id !== action.id);
        }
        return state;

      case dfm.actions.SHOW_ROOMS_WITH_COMBATANTS:
        return state.map((combatant) => {
          if (action.combatants.includes(combatant.id)) {
            combatant.hidden = false;
          }
          return combatant;
        });

      default:
        return state;
    }
  };

  const currentRoomReducer = (state = null, action) => {
    switch (action.type) {
      case dfm.actions.INITIALIZE_NEW_ROOM:
        return action.room.id;

      case dfm.actions.SET_CURRENT_ROOM:
        return action.id;

      default:
        return state;
    }
  };

  const currentTokenReducer = (state = null, action) => {
    switch (action.type) {
      case dfm.actions.REMOVE_CURRENT_TOKEN:
        return null;

      case dfm.actions.SET_CURRENT_TOKEN:
        return action.id;

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

      case dfm.actions.END_EDIT:
        return state.map((room) => {
          if (room.id === action.id) {
            room.isComplete = true;
          }
          return room;
        });

      case dfm.actions.MOVE_VETEX:
        return state.map((room) => {
          if (room.id === action.id) {
            room.vertices = room.vertices.map((v) => {
              if (v === action.vertex) {
                v[0] = action.location.x;
                v[1] = action.location.y;
              }
              return v;
            });
          }
          return room;
        });

      case dfm.actions.NEW_VERTEX:
        return state.map((room) => {
          if (room.id === action.id) {
            room.vertices = room.vertices.concat([action.vertex]);
          }
          return room;
        });

      case dfm.actions.SET_CURRENT_ROOM_NAME:
        return state.map((room) => {
          if (room.id === action.id) {
            room.name = action.roomName;
          }
          return room;
        });


      case dfm.actions.SHOW_ROOMS_WITH_COMBATANTS:
        return state.map((room) => {
          if (action.rooms.includes(room.id)) {
            room.isExplored = true;
          }
          return room;
        });

      default:
        return state;
    }
  };

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
