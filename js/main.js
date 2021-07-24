/* eslint-disable no-unused-vars */ // command line functions

const {
  addMonsterToCurrentRoom,
  hideControls,
  removeCurrentToken,
  showControls,
} = dndFowMap.controls;

const {
  toggleFogOfWar,
  updateFog,
} = dndFowMap.fogOfWar;

const {
  printGeometry,
  ready,
  setRoomName,
  stop,
  togglePaths,
} = dndFowMap.geometryEditor;

const {
  printCombatants,
  updateCombatants,
} = dndFowMap.tacticalMap;

// todo: make a model view dispatch as an update
const getCurrentRoom = dndFowMap.stateUtilities.getCurrentRoom;
const getCurrentToken = dndFowMap.stateUtilities.getCurrentToken;

const init = () => {
  dndFowMap.geometryEditor.updatePaths();
  dndFowMap.geometryEditor.updateVertexHandles();
  dndFowMap.tacticalMap.updateCombatants(); // todo: move to an init script
};

init();
