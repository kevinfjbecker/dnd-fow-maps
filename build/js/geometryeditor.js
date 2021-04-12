
// /////////////////////////////////////////////////////// geometryeditor.js //

dndFowMap.geometryEditor = (function(dfm) {
// todo: encapsulate variables!!!
  dfm.store.getState().geometryEditorState = 'stop'; // ready | reading | stop
  dfm.store.getState().geometryEditorShowPaths = false;

  const wrapper = d3.select('g.map-wrapper');

  const geometryEdit = wrapper
      .append('g')
      .classed('geometry-edit', true);

  const ready = () => {
    dfm.store.getState().geometryEditorState = 'ready';
  };

  const stop = () => {
    dfm.store.getState().geometryEditorState = 'stop';
    dfm.store.getState().currentRoom.isComplete = true;
    updatePaths();
    updateVertexHandles();
  };

  const clickAction = {
    'ready': function(element) {
      const coordinates = d3.mouse(element);
      const x = coordinates[0];
      const y = coordinates[1];

      dfm.store.getState().currentRoom = {
        name: 'your_name_here',
        isComplete: false,
        isExplored: true,
        vertices: [[x, y]],
      };

      updateVertexHandles();

      dfm.store.getState().geometry.push(dfm.store.getState().currentRoom);

      dfm.store.getState().geometryEditorState = 'reading';
    },
    'reading': function(element) {
      const coordinates = d3.mouse(element);
      const x = coordinates[0];
      const y = coordinates[1];

      dfm.store.getState().currentRoom.vertices.push([x, y]);
    },
    'stop': function() { },
  };


  /* eslint-disable-next-line require-jsdoc */ // doesn't work with arrow fn
  function clickHandler() {
    clickAction[dfm.store.getState().geometryEditorState](this);
    updatePaths();
    updateVertexHandles();
  }

  wrapper.on('click', clickHandler);

  const setRoomName = () => {
    const name = d3.select('#room-name').property('value');
    getCurrentRoom().name = name;
    updateRoomName();
  };

  const updateRoomName = () => {
    d3.select('#room-name')
        .datum(getCurrentRoom)
        .property('value', (d) => d.name);
  };

  const getCurrentRoom = () => {
    return dfm.store.getState().currentRoom;
  };

  const updatePaths = () => {
    const pathData =
      dfm.store.getState().geometryEditorShowPaths && dfm.store.getState().geometry || [];
    const paths = geometryEdit.selectAll('path')
        .data(pathData);

    paths.enter().append('path')
        .attr('d', function(d) {
          return dfm.pathString(
              d.vertices, dfm.store.getState().geometryEditorState === 'stop');
        });

    paths.attr('d', function(d) {
      return dfm.pathString(
          d.vertices, dfm.store.getState().geometryEditorState === 'stop');
    });

    paths.exit().remove();
  };

  updatePaths();

  const togglePaths = () => {
    dfm.store.getState().geometryEditorShowPaths = !dfm.store.getState().geometryEditorShowPaths;
    updatePaths();
    updateVertexHandles();
  };


  const printGeometry = () => {
    console.log(JSON.stringify(dfm.store.getState().geometry, null, 4));
  };

  const dragHandle = (v) => {
    /* eslint-disable-next-line require-jsdoc */ // doesn't work with arrow fn
    function dragstarted(v) { }

    /* eslint-disable-next-line require-jsdoc */ // doesn't work with arrow fn
    function dragged(v) {
      d3.select(this)
          .attr('cx', (v[0] = d3.event.x))
          .attr('cy', (v[1] = d3.event.y));
      updatePaths();
    }

    /* eslint-disable-next-line require-jsdoc */ // doesn't work with arrow fn
    function dragended(v) { };

    return d3.drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended);
  };

  const updateVertexHandles = () =>{
    handles = geometryEdit.selectAll('.vertex-handle')
        .data(dfm.store.getState().geometryEditorShowPaths &&
          dfm.store.getState().currentRoom &&
          dfm.store.getState().currentRoom.vertices || []);

    handles.enter()
        .append('circle')
        .classed('vertex-handle', true)
        .attr('cx', (v) => v[0])
        .attr('cy', (v) => v[1])
        .attr('r', 5)
        .style('fill', '#fff')
        .style('stroke', 'green')
        .call(dragHandle());

    handles
        .attr('cx', (v) => v[0])
        .attr('cy', (v) => v[1]);

    handles.exit().remove();
  };

  updateVertexHandles();

  return {
    printGeometry: printGeometry,
    ready: ready,
    setRoomName: setRoomName,
    stop: stop,
    togglePaths: togglePaths,
    updatePaths: updatePaths,
    updateVertexHandles: updateVertexHandles,
  };
})(dndFowMap);
