
///////////////////////////////////////////////////////////// tacticalmap.js //

const squarWidth = 24;

// combatants array is defined in combatants.js

const drag = () => {

    function dragstarted(d) {
        d3.select(this).raise().style('border-width', `${3}px`);
    }

    function dragged(d) {
        d3.select(this)
            .style("left", (d.x = d3.event.x) + 'px')
            .style("top", (d.y = d3.event.y) + 'px');
    }

    function dragended(d) {
        d3.select(this).style('border-width', `${2}px`);
        
        geometry.filter(room => {
            return d3.polygonContains(room.vertices, [d.x, d.y]);
        }).forEach(room => {
            showRoomWithCombatants(room.name, true)
        });

    }

    return d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
}

const updateCombatants = () => {
    let tokens = d3.select('#game-board').selectAll('.token')
    .data(combatants.filter(c => c.hidden === false), c => c.name);
    
    tokens.enter()
    .append('div')
    .attr('class', d => `token ${d.alignment}`)
    .style('background-image', d => `url(${d.imgSrc})`)
    .style('width', d => `${d.size === 'large' ? 2 * squarWidth : squarWidth}px`)
    .style('height', d => `${d.size === 'large' ? 2 * squarWidth : squarWidth}px`)
    .style('left', d => d.x + 'px')
    .style('top', d => d.y + 'px')
    .call(drag());
    
    tokens.exit().remove();
}

updateCombatants();

const hideCombatants = (hide, ...list) => {
    combatants
        .filter(c => list.includes(c.name))
        .forEach(c => { c.hidden = hide; });
    updateCombatants();
};


function printCombatants() {
    console.log(JSON.stringify(combatants, null, 4));
}

function showRoomWithCombatants(name, shown) {
    let room = geometry.filter(r => r.name === name)[0];
    room.isExplored = shown;
    combatants
        .filter(c => d3.polygonContains(room.vertices, [c.x, c.y]))
        .forEach(c => { c.hidden = !shown });
    updateFog();
    updateCombatants();
}