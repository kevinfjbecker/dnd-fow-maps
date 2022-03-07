dndFowMap.staticState.tokenSet = ((dfm)=>{
  // todo: move this to an initialization file

  const tokenSetKey = dfm.staticState.mapDetails.tokenSetKey;
  return dfm.getFromLocalStorage(tokenSetKey) || [];
})(dndFowMap);
