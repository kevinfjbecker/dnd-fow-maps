
// /////////////////////////////////////////////////////////// tacticalmap.js //

dndFowMap.tacticalMap = (function(dfm) {
  const squareWidth = () => dfm.store.getState().mapDetails.squareWidth;
  const updateFog = dfm.fogOfWar.updateFog; // todo: fogOfWar should listen
  const tokenSet = () => dfm.store.getState().tokenSet;
  const addMoveTokenAction = dfm.actions.addMoveTokenAction;
  const addSetCurrentTokenAction = dfm.actions.addSetCurrentTokenAction;
  const addShowRoomsWithCombatantsAction =
    dfm.actions.addShowRoomsWithCombatantsAction;

  /* eslint-disable-next-line require-jsdoc */ // doesn't work with arrow fn
  function drag() {
    /* eslint-disable-next-line require-jsdoc */ // doesn't work with arrow fn
    function dragstarted(d) {
      d3.select(this).raise().style('border-width', `${3}px`);
    }

    /* eslint-disable-next-line require-jsdoc */ // doesn't work with arrow fn
    function dragged(d) {
      d3.select(this)
          .style('left', d3.event.x + 'px')
          .style('top', d3.event.y + 'px');
    }

    /* eslint-disable-next-line require-jsdoc */ // doesn't work with arrow fn
    function dragended(d) {
      d3.select(this).style('border-width', `${2}px`);

      // todo: THREE dispatches, really?
      dfm.store.dispatch(addMoveTokenAction(d.name,
          {x: d3.event.x, y: d3.event.y}));

      // todo: THREE dispatches, really?
      dfm.store.dispatch(addSetCurrentTokenAction(d.id));

      const rooms = dfm.store.getState().geometry
          .filter((room) => {
            return d3.polygonContains(room.vertices, [d.x, d.y]);
          });
      const combatants = dfm.store.getState().combatants
          .filter((combatant) => {
            return rooms
                .map((room) =>
                  d3.polygonContains(room.vertices, [combatant.x, combatant.y]))
                .some((b) => true);
          })
          .map((combatant) => combatant.id);
      roomIds = rooms.map((room) => room.id);
      dfm.store.dispatch(addShowRoomsWithCombatantsAction(roomIds, combatants));
    };

    return d3.drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended);
  }

  const tokenClass = (d) =>
    `token ${d.alignment}${d.defeated?' defeated':''}`;

  const getImageSrc = (tokenRef) =>
    `url(${tokenSet().filter((t) => t.id === tokenRef)[0].src})`;

  const updateCombatants = () => {
    const tokens = d3.select('#game-board').selectAll('.token')
        .data(
            dfm.store.getState().combatants.filter((c) => c.hidden === false),
            (c) => c.name,
        );

    tokens.enter()
        .append('div')
        .attr('class', tokenClass)
        .style('background-image', (d) => getImageSrc(d.tokenRef))
        .style('width', (d) =>
          `${d.size === 'large' ? 2 * squareWidth() : squareWidth()}px`)
        .style('height', (d) =>
          `${d.size === 'large' ? 2 * squareWidth() : squareWidth()}px`)
        .style('left', (d) => d.x + 'px')
        .style('top', (d) => d.y + 'px')
        .call(drag());

    tokens.attr('class', tokenClass);

    tokens.exit().remove();
  };

  const printCombatants = () => {
    console.log(JSON.stringify(dfm.store.getState().combatants, null, 4));
  };


  dfm.store.subscribe(()=>{
    updateFog(); // todo: this should be handled somewhere else
    updateCombatants();
  });

  return {
    printCombatants: printCombatants,
    updateCombatants: updateCombatants,
  };
})(dndFowMap);
