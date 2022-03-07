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
