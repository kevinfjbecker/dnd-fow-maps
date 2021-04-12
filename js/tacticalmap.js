
// /////////////////////////////////////////////////////////// tacticalmap.js //

dndFowMap.tacticalMap = (function(dfm) {
  const squarWidth = dfm.store.getState().mapDetails.squarWidth;
  const updateFog = dfm.fogOfWar.updateFog;
  const tokenSet = dfm.store.getState().tokenSet;
  const store = dfm.store;
  const addMoveTokenAction = dfm.actions.addMoveTokenAction;

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

      store.dispatch(addMoveTokenAction(d.name,
          {x: d3.event.x, y: d3.event.y}));

      dfm.store.getState().currentToken = d;

      dfm.store.getState().geometry.filter((room) => {
        return d3.polygonContains(room.vertices, [d.x, d.y]);
      }).forEach((room) => {
        showRoomWithCombatants(room.name, true);
      });
    };

    return d3.drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended);
  }

  const tokenClass = (d) =>
    `token ${d.alignment}${d.defeated?' defeated':''}`;

  const updateCombatants = () => {
    const tokens = d3.select('#game-board').selectAll('.token')
        .data(
            dfm.store.getState().combatants.filter((c) => c.hidden === false),
            (c) => c.name,
        );

    tokens.enter()
        .append('div')
        .attr('class', tokenClass)
        .style('background-image', (d) => `url(${tokenSet[d.tokenRef]})`)
        .style('width', (d) =>
          `${d.size === 'large' ? 2 * squarWidth : squarWidth}px`)
        .style('height', (d) =>
          `${d.size === 'large' ? 2 * squarWidth : squarWidth}px`)
        .style('left', (d) => d.x + 'px')
        .style('top', (d) => d.y + 'px')
        .call(drag());

    tokens.attr('class', tokenClass);

    tokens.exit().remove();
  };

  updateCombatants(); // todo move to an init script

  const printCombatants = () => {
    console.log(JSON.stringify(dfm.store.getState().combatants, null, 4));
  };

  const showRoomWithCombatants = (name, shown) => {
    const room =
    dfm.store.getState().geometry.filter((r) => r.name === name)[0];
    room.isExplored = shown;
    dfm.store.getState().combatants
        .filter((c) => d3.polygonContains(room.vertices, [c.x, c.y]))
        .forEach((c) => {
          c.hidden = !shown;
        });
    updateFog();
    updateCombatants();
  };

  return {
    printCombatants: printCombatants,
    updateCombatants: updateCombatants,
  };
})(dndFowMap);
