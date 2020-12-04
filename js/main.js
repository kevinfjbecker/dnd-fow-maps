
// in geometryeditor.js
// in fogofwar.js
function pathString(aa, stop) {
    return `M ${aa.map(function (a) {
        return a.join(' ');
    }).join(' L ')} ${stop ? ' z' : ''}`;
}