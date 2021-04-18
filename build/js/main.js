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

const getCurrentRoom = () => dndFowMap.store.getState().currentRoom;
const getCurrentToken = () => dndFowMap.store.getState().currentToken;
