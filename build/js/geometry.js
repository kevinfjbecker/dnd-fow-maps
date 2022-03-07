dndFowMap.staticState.geometry = ((dfm)=>{
  // todo: move this to an initialization file

  const geometryKey = dfm.staticState.mapDetails.geometryKey;
  return dfm.getFromLocalStorage(geometryKey) || [];
})(dndFowMap);
