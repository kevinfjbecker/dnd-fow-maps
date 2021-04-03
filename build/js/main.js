
// in geometryeditor.js
// in fogofwar.js
// eslint-disable-next-line no-unused-vars
const pathString = (aa, stop) => {
  return `M ${aa.map(function(a) {
    return a.join(' ');
  }).join(' L ')} ${stop ? ' z' : ''}`;
};

// eslint-disable-next-line no-unused-vars, prefer-const
let currentRoom = undefined; // Global Varialble =c@

// eslint-disable-next-line prefer-const, no-unused-vars
let currentToken = undefined; // Global Variable =c@
