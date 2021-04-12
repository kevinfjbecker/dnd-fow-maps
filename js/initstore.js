dndFowMap.store = (function(dfm) {
  const store = dfm.createStore(dfm.reducer, dfm.staticState);
  delete dfm.staticState;
  return store;
})(dndFowMap);
