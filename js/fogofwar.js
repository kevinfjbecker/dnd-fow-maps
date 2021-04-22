
// ///////////////////////////////////////////////////////////// fogofwar.js //

dndFowMap.fogOfWar = (function(dfm) {
  const addFogOfWarLayer = () => {
    background.append('rect')
        .attr('id', 'fog-of-war')
        .attr('width', '100%')
        .attr('height', '100%')
        .attr('mask', 'url(#map-mask)');
  };

  // (function setupMap() {
  // 0. setup groups
  // ----------------------------------
  const svg = d3.select('svg')
      .attr('height', 2080)
      .attr('width', 2008);
  const wrapper = svg.append('g').classed('map-wrapper', true);
  const background = wrapper.append('g').classed('background', true);

  // 1. Setup the mask
  // ----------------------------------
  const maskGroup = svg.append('mask')
      .attr('id', 'map-mask');

  maskGroup.append('rect')
      .attr('width', '100%')
      .attr('height', '100%')
      .style('opacity', 1.0)
      .style('fill', '#fff');

  background.append('image')
      .datum(dfm.store.getState().mapDetails)
      .classed('visibleArea', true)
      .attr('xlink:href', (d) => d.xlinkHref)
      .attr('preserveAspectRatio', 'none')
      .attr('x', (d) => d.xOffset)
      .attr('y', (d) => d.yOffset)
      .attr('width', (d) => d.imgWidth + 'px')
      .attr('height', (d) => d.imgHeight + 'px');

  addFogOfWarLayer();

  // 3. create a masked path to show visible nodes
  // ----------------------------------

  const updateFog = () => {
    const masks = maskGroup.selectAll('.break-fog')
        .data(dfm.store.getState().geometry
            .filter((r) => r.isExplored === true));

    masks.enter()
        .append('path')
        .classed('break-fog', true)
        .attr('d', (d) => dfm.pathString(d.vertices, true))
        .style('fill', '#000000')
        .style('opacity', 1.0)
        .attr('filter', 'url(#filter-map)');

    masks.attr('d', (d) => dfm.pathString(d.vertices, true));

    masks.exit().remove();
  };

  // Call it immediately
  updateFog();

  const toggleFogOfWar = () => {
    const fow = d3.select('#fog-of-war');
    if (fow.empty()) {
      addFogOfWarLayer();
    } else {
      fow.remove();
    }
  };

  return {
    toggleFogOfWar: toggleFogOfWar,
    updateFog: updateFog,
  };
})(dndFowMap);
