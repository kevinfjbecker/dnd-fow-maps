
// ////////////////////////////////////////////////////////// consolesave.js //

// src: https://stackoverflow.com/questions/11849562/how-to-save-the-output-of-a-console-logobject-to-a-file

(function(console) {
  console.save = function(data, filename, variableName) {
    if (!data) {
      console.error('Console.save: No data');
      return;
    }

    if (!filename) filename = 'console.json';

    if (typeof data === 'object') {
      data = `${variableName} = ${JSON.stringify(data, undefined, 2)};`;
    }

    const blob = new Blob([data], {type: 'text/json'});
    const e = document.createEvent('MouseEvents');
    const a = document.createElement('a');

    a.download = filename;
    a.href = window.URL.createObjectURL(blob);
    a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
    e.initMouseEvent(
        'click',
        true,
        false,
        window,
        0,
        0,
        0,
        0,
        0,
        false,
        false,
        false,
        false,
        0,
        null,
    );
    a.dispatchEvent(e);
  };
})(console);
