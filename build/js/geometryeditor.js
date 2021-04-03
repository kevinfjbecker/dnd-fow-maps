
// /////////////////////////////////////////////////// Geometry Editor //

// todo: encapsulate variables!!!
let state = 'stop'; // ready | reading | stop
let showPaths = false;

const geometryEdit = wrapper
    .append('g')
    .classed('geometry-edit', true); // cruft?

// eslint-disable-next-line no-unused-vars
const ready = () => {
  state = 'ready';
};

// eslint-disable-next-line no-unused-vars
const stop = () => {
  state = 'stop';
  currentRoom.isComplete = true;
  updatePaths();
  updateVertexHandles();
};

const clickAction = {
  'ready': function(element) {
    const coordinates = d3.mouse(element);
    const x = coordinates[0];
    const y = coordinates[1];

    currentRoom = {
      name: 'your_name_here',
      isComplete: false,
      isExplored: true,
      vertices: [[x, y]],
    };

    updateVertexHandles();

    geometry.push(currentRoom);

    state = 'reading';
  },
  'reading': function(element) {
    const coordinates = d3.mouse(element);
    const x = coordinates[0];
    const y = coordinates[1];

    currentRoom.vertices.push([x, y]);
  },
  'stop': function() { },
};

const clickHandler = () => {
  clickAction[state](this);
  updatePaths();
  updateVertexHandles();
};

wrapper.on('click', clickHandler);

// eslint-disable-next-line no-unused-vars
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
  return currentRoom;
};

const updatePaths = () => {
  const pathData = showPaths && geometry || [];
  const paths = geometryEdit.selectAll('path')
      .data(pathData);

  paths.enter().append('path')
      .attr('d', function(d) {
        return pathString(d.vertices, state === 'stop');
      });

  paths.attr('d', function(d) {
    return pathString(d.vertices, state === 'stop');
  });

  paths.exit().remove();
};

updatePaths();

// eslint-disable-next-line no-unused-vars
const togglePaths = () => {
  showPaths = !showPaths;
  updatePaths();
  updateVertexHandles();
};

// eslint-disable-next-line no-unused-vars
const printGeometry = () => { // cruft?
  console.log(JSON.stringify(geometry, null, 4));
};

const dragHandle = (v) => {
  const dragstarted = (v) => { };

  const dragged = (v) => {
    d3.select(this)
        .attr('cx', (v[0] = d3.event.x))
        .attr('cy', (v[1] = d3.event.y));
    updatePaths();
  };

  const dragended = (v) => { };

  return d3.drag()
      .on('start', dragstarted)
      .on('drag', dragged)
      .on('end', dragended);
};

const updateVertexHandles = () =>{
  handles = geometryEdit.selectAll('.vertex-handle')
      .data(showPaths && currentRoom && currentRoom.vertices || []);

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
