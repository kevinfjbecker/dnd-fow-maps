
// /////////////////////////////////////////////////////// geometryeditor.js //

dndFowMap.geometryEditor = (function(dfm) {
  const wrapper = d3.select('g.map-wrapper');

  const geometryEdit = wrapper
      .append('g')
      .classed('geometry-edit', true);

  const ready = () => {
    dfm.store.dispatch(dfm.actions.addSetEditorStateReadyAction());
  };

  const stop = () => {
    dfm.store.dispatch(dfm.actions.addEndEditAction());
  };

  const clickAction = {
    'ready': function(element) {
      const coordinates = d3.mouse(element);
      const x = coordinates[0];
      const y = coordinates[1];
      const room = {
        name: 'your_name_here',
        isComplete: false,
        isExplored: true,
        vertices: [[x, y]],
      };

      dfm.store.dispatch(dfm.actions.addInitializeNewRoomAction(room));
    },
    'reading': function(element) {
      const coordinates = d3.mouse(element);
      const x = coordinates[0];
      const y = coordinates[1];

      dfm.store.dispatch(dfm.actions.addNewVertexAction([x, y]));
    },
    'stop': function() { },
  };

  dfm.store.subscribe(() => {
    updatePaths();
    updateVertexHandles();
    updateRoomName();
  });

  /* eslint-disable-next-line require-jsdoc */ // doesn't work with arrow fn
  function clickHandler() {
    clickAction[dfm.store.getState().geometryEditorState](this);
  }

  wrapper.on('click', clickHandler);

  const setRoomName = () => {
    const name = d3.select('#room-name').property('value');
    dfm.store.dispatch(dfm.actions.addSetCurrentRoomNameAction(name));
  };

  const updateRoomName = () => {
    d3.select('#room-name')
        .datum(dfm.store.getState().currentRoom)
        .property('value', (d) => d.name);
  };

  const updatePaths = () => {
    const pathData =
      dfm.store.getState().geometryEditorShowPaths &&
        dfm.store.getState().geometry || [];

    const paths = geometryEdit.selectAll('path')
        .data(pathData);

    paths.enter().append('path')
        .attr('d', function(d) {
          return dfm.pathString(
              d.vertices, d.isComplete);
        });

    paths.attr('d', function(d) {
      return dfm.pathString(
          d.vertices, d.isComplete);
    });

    paths.exit().remove();
  };

  updatePaths(); // todo: move to an init script

  const togglePaths = () => {
    dfm.store.dispatch(dfm.actions.addTogglePathsAction());
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
          .attr('cx', d3.event.x)
          .attr('cy', d3.event.y);
      dfm.store.dispatch(dfm.actions.addMoveVetexAction(
          v,
          {x: d3.event.x, y: d3.event.y}),
      );
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

  updateVertexHandles(); // todo: move to an init script

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
