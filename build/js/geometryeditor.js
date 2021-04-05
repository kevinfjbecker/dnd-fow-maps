
// /////////////////////////////////////////////////////// geometryeditor.js //

dndFowMap.geometryEditor = (function(dfm) {
// todo: encapsulate variables!!!
  dfm.state.geometryEditorState = 'stop'; // ready | reading | stop
  dfm.state.geometryEditorShowPaths = false;

  const wrapper = d3.select('g.map-wrapper');

  const geometryEdit = wrapper
      .append('g')
      .classed('geometry-edit', true);

  const ready = () => {
    dfm.state.geometryEditorState = 'ready';
  };

  const stop = () => {
    dfm.state.geometryEditorState = 'stop';
    dfm.state.currentRoom.isComplete = true;
    updatePaths();
    updateVertexHandles();
  };

  const clickAction = {
    'ready': function(element) {
      const coordinates = d3.mouse(element);
      const x = coordinates[0];
      const y = coordinates[1];

      dfm.state.currentRoom = {
        name: 'your_name_here',
        isComplete: false,
        isExplored: true,
        vertices: [[x, y]],
      };

      updateVertexHandles();

      dfm.state.geometry.push(dfm.state.currentRoom);

      dfm.state.geometryEditorState = 'reading';
    },
    'reading': function(element) {
      const coordinates = d3.mouse(element);
      const x = coordinates[0];
      const y = coordinates[1];

      dfm.state.currentRoom.vertices.push([x, y]);
    },
    'stop': function() { },
  };


  /* eslint-disable-next-line require-jsdoc */ // doesn't work with arrow fn
  function clickHandler() {
    clickAction[dfm.state.geometryEditorState](this);
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
    return dfm.state.currentRoom;
  };

  const updatePaths = () => {
    const pathData =
      dfm.state.geometryEditorShowPaths && dfm.state.geometry || [];
    const paths = geometryEdit.selectAll('path')
        .data(pathData);

    paths.enter().append('path')
        .attr('d', function(d) {
          return dfm.pathString(
              d.vertices, dfm.state.geometryEditorState === 'stop');
        });

    paths.attr('d', function(d) {
      return dfm.pathString(
          d.vertices, dfm.state.geometryEditorState === 'stop');
    });

    paths.exit().remove();
  };

  updatePaths();

  const togglePaths = () => {
    dfm.state.geometryEditorShowPaths = !dfm.state.geometryEditorShowPaths;
    updatePaths();
    updateVertexHandles();
  };


  const printGeometry = () => {
    console.log(JSON.stringify(dfm.state.geometry, null, 4));
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
        .data(dfm.state.geometryEditorShowPaths &&
          dfm.state.currentRoom &&
          dfm.state.currentRoom.vertices || []);

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
