
///////////////////////////////////////////////////// Geometry Editor //

// todo: encapsulate variables!!!
var i = geometry.length - 1;
var state = 'stop'; // ready | reading | stop
var showPaths = false;

var geometryEdit = wrapper.append('g').classed('geometry-edit', true); // cruft?

function ready() {
    state = 'ready';
}

function stop() {
    state = 'stop';
    geometry[i].isComplete = true;
    updatePaths();
    updateVertexHandles();
}

var clickAction = {
    'ready': function (element) {

        var coordinates = d3.mouse(element);
        var x = coordinates[0];
        var y = coordinates[1];

        i = i + 1;
        updateVertexHandles();

        geometry.push({
            name: 'your_name_here',
            isComplete: false,
            isExplored: true,
            vertices: [[x, y]]
        });
        
        state = 'reading';
    },
    'reading': function (element) {
        var coordinates = d3.mouse(element);
        var x = coordinates[0];
        var y = coordinates[1];

        geometry[i].vertices.push([x, y]);
    },
    'stop': function () { }
}

wrapper.on('click', clickHandler);

function clickHandler() {

    clickAction[state](this);
    updatePaths();
    updateVertexHandles();

}

function setRoomName() {
    const name = d3.select('#room-name').property("value");
    getCurrentRoom().name = name;
    updateRoomName();
}

function updateRoomName() {
    d3.select('#room-name')
        .datum(getCurrentRoom)
        .property("value", d => d.name)
}

function getCurrentRoom() { return geometry[i]; } // todo support "selected room"

// updateRoomName(); // cruft?

function updatePaths() {
    var pathData = showPaths && geometry || [];
    var paths = geometryEdit.selectAll('path')
        .data(pathData);

    paths.enter().append('path')
        .attr('d', function (d) {
            return pathString(d.vertices, state === 'stop');
        })

    paths.attr('d', function (d) {
        return pathString(d.vertices, state === 'stop');
    });

    paths.exit().remove();

}

updatePaths();

const togglePaths = () => {
    showPaths = !showPaths;
    updatePaths();
    updateVertexHandles();
};

function printGeometry() { // cruft?
    console.log(JSON.stringify(geometry, null, 4));
}

const dragHandle = (v) => {

    function dragstarted(v) { }

    function dragged(v) {
        d3.select(this)
            .attr("cx", (v[0] = d3.event.x))
            .attr("cy", (v[1] = d3.event.y));
        updatePaths();
    }

    function dragended(v) { }

    return d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
}

function updateVertexHandles() {

    handles = geometryEdit.selectAll('.vertex-handle')
        .data(showPaths && geometry[i] && geometry[i].vertices || []);

    handles.enter()
        .append('circle')
        .classed('vertex-handle', true)
        .attr('cx', v => v[0])
        .attr('cy', v => v[1])
        .attr('r', 5)
        .style('fill', '#fff')
        .style('stroke', 'green')
        .call(dragHandle());

    handles.exit().remove();
}

updateVertexHandles();
