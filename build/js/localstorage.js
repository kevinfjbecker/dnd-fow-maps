// ////////////////////////////////////////////////////////// localstorage.js //

dndFowMap.saveMapsToLocalStorage = function(mapList) {
  dndFowMap.saveToLocalStorage('MapList', mapList);
};

dndFowMap.saveToLocalStorage = function(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
};

dndFowMap.getFromLocalStorage = function(key) {
  return JSON.parse(localStorage.getItem(key));
};

dndFowMap.getMapsFromLocalStorage = function() {
  return dndFowMap.getFromLocalStorage('MapList');
};

dndFowMap.exportMap = (pMapID) => {
  const map = dndFowMap.getMapsFromLocalStorage()
      .filter((m) => m.id === pMapID)[0];

  map.tokenSetExport = {
    key: map.tokenSetKey,
    data: JSON.parse(localStorage.getItem(map.tokenSetKey)),
  };
  map.combatantsExport = {
    key: map.combatantsKey,
    data: JSON.parse(localStorage.getItem(map.combatantsKey)),
  };
  map.geometryExport = {
    key: map.geometryKey,
    data: JSON.parse(localStorage.getItem(map.geometryKey)),
  };
  return map;
};

// todo: this probably needs to be more robust
// What if there aren't data for tokenSet, combatants or geometry
// What if there were just a URI
dndFowMap.importMap = (pMap) => {
  const mapList = dndFowMap.getMapsFromLocalStorage() || [];
  mapList.push({
    title: pMap.title,
    xlinkHref: pMap.xlinkHref,
    id: pMap.id,
    svgWidth: pMap.svgWidth,
    svgHeight: pMap.svgHeight,
    imgWidth: pMap.imgWidth,
    imgHeight: pMap.imgHeight,
    xOffset: pMap.xOffset,
    yOffset: pMap.yOffset,
    squareWidth: pMap.squareWidth,
    key: pMap.key,
    tokenSetKey: pMap.tokenSetKey,
    geometryKey: pMap.geometryKey,
    combatantsKey: pMap.combatantsKey,
  });
  dndFowMap.saveMapsToLocalStorage(mapList);
  dndFowMap.saveToLocalStorage(pMap.tokenSetKey, pMap.tokenSetExport.data);
  dndFowMap.saveToLocalStorage(pMap.combatantsKey, pMap.combatantsExport.data);
  dndFowMap.saveToLocalStorage(pMap.geometryKey, pMap.geometryExport.data);
};
