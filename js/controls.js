
//////////////////////////////////////////////////////////////// controls.js //

const hideControls = () => {
    document.querySelector('#control-panel').setAttribute('hidden', true);
};

const showControls = () => {
    document.querySelector('#control-panel').removeAttribute('hidden');
};
