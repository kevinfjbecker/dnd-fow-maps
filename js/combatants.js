dndFowMap.staticState.combatants = ((dfm)=>{
  // todo: move this to an initialization file

  const combatantsKey = dfm.staticState.mapDetails.combatantsKey;
  return dfm.getFromLocalStorage(combatantsKey) || [];
})(dndFowMap);
