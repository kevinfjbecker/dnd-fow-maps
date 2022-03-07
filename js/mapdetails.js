dndFowMap.staticState.mapDetails = ((dfm)=>{
  // todo: check route (maybe in its own module)
  // hashRoute.length === 2 && hashRoute[0] === 'maps'
  // throw an error if shit isn't right

  const maps = dfm.getMapsFromLocalStorage();
  const hashRoute = document.location.hash.slice(1).split('/');
  const mapId = hashRoute[1];
  return maps.filter((m) => {
    return m.id === mapId;
  })[0];
})(dndFowMap);
