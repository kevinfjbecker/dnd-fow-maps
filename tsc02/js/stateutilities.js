dndFowMap.stateUtilities = (function(dfm) {
  const getCurrentRoom = () =>
    dfm.store.getState().geometry
        .filter((room) =>
          room.id === dfm.store.getState().currentRoom)[0];

  const getCurrentToken = () =>
    dfm.store.getState().combatants
        .filter((token) =>
          token.id === dfm.store.getState().currentToken)[0];

  return {
    getCurrentRoom,
    getCurrentToken,
  };
})(dndFowMap);
