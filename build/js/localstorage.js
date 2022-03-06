// ////////////////////////////////////////////////////////// localstorage.js //

dndFowMap.saveMapsToLocalStorage = function(mapList) {
  localStorage.setItem('MapList', JSON.stringify(mapList));
};

dndFowMap.getMapsFromLocalStorage = function() {
  return JSON.parse(localStorage.getItem('MapList'));
};
