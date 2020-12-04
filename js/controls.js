
//////////////////////////////////////////////////////////////// controls.js //

const hideControls = () => {
    document.querySelector('#control-panel').setAttribute('hidden', true);
};

const showControls = () => {
    document.querySelector('#control-panel').removeAttribute('hidden');
};

let currentRoom = undefined;
d3.select('svg').on('click', () => {
    currentRoom = geometry.filter(room => {
        return d3.polygonContains(room.vertices, [d3.event.pageX, d3.event.pageY])
    })[0];
});

const centerOfRoom = (room) => d3.polygonCentroid(room.vertices);

// assumes the pattern: {name}.{index}
const nextMonsterNameSuffix = name =>
    combatants.filter(c => c.name.split('.')[0] === name).length;

function addWanderingMonstersToCurrentRoom() {
    if (!currentRoom)
        return;
    const c = centerOfRoom(currentRoom);
    const monsters = getWanderingMonsters(c[0], c[1]);
    const indexOffset = nextMonsterNameSuffix(monsters[0].name);
    monsters.forEach((m, i) => m.name = `${m.name}.${i + indexOffset}`);
    combatants.push(...monsters);
    updateCombatants();
}

const addMonsterToCurrentRoom = (name, fileType = 'jpg') => {
    const c = centerOfRoom(currentRoom);
    combatants.push({
        alignment: "hostile",
        hidden: false,
        imgSrc: `img/${name}.${fileType}`,
        name: `${name}.${nextMonsterNameSuffix(name)}`,
        x: c[0],
        y: c[1]
    });
    updateCombatants();
}