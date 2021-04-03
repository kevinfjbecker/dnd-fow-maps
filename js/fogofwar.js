
//////////////////////////////////////////////////////////////// fogofwar.js //

//(function setupMap() {
// 0. setup groups
// ----------------------------------
var svg = d3.select('svg');
var wrapper = svg.append('g').classed('map-wrapper', true);
var background = wrapper.append('g').classed('background', true);
var characters = wrapper.append('g').classed('characters', true); // cruft?

// 1. Setup the mask
// ----------------------------------
var maskGroup = svg.append('mask')
    .attr('id', 'map-mask');

maskGroup.append('rect')
    .attr('width', '100%')
    .attr('height', '100%')
    .style('opacity', 1.0)
    .style('fill', '#fff');

background.append("image")
    .datum(mapDetails)
    .classed('visibleArea', true)
    .attr('xlink:href', d => d.xlinkHref)
    .attr('preserveAspectRatio', 'none')
    .attr('x', d => d.xOffset)
    .attr('y', d => d.yOffset)
    .attr('height', d => d.height)
    .attr('width', d => d.width);

addFogOfWarLayer();

// 3. create a masked path to show visible nodes
// ----------------------------------

function updateFog() {

    var masks = maskGroup.selectAll('.break-fog')
        .data(geometry.filter(r => r.isExplored === true));

    masks.enter()
        .append('path')
        .classed('break-fog', true)
        .attr('d', d => pathString(d.vertices, true))
        .style('fill', '#000000')
        .style('opacity', 1.0)
        .attr('filter', 'url(#filter-map)');

    masks.attr('d', d => pathString(d.vertices, true));

    masks.exit().remove();

};

// Call it immediately 
updateFog();

function toggleFogOfWar() {
    var fow = d3.select('#fog-of-war');
    if (fow.empty()) {
        addFogOfWarLayer();
    } else {
        fow.remove();
    }
}

function addFogOfWarLayer() {
    background.append('rect')
        .attr('id', 'fog-of-war')
        .attr('width', '100%')
        .attr('height', '100%')
        .attr('mask', 'url(#map-mask)');
}

//})();
