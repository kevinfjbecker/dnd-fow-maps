dndFowMap.staticState = (function() {
  return {
    currentRoom: null,
    currentToken: null,
    geometryEditorState: 'stop', // ready | reading | stop
    geometryEditorShowPaths: false,
  };
})(dndFowMap);
