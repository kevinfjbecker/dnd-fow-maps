
// in geometryeditor.js
// in fogofwar.js
function pathString(aa, stop) {
    return `M ${aa.map(function (a) {
        return a.join(' ');
    }).join(' L ')} ${stop ? ' z' : ''}`;
}

let currentRoom = undefined; // Global Varialble =c@

let currentToken = undefined; // Global Variable =c@