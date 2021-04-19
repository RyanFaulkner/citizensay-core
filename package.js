Package.describe({
  name: 'citizensay:core'
});

Package.onUse(api => {
  api.versionsFrom('1.10.2');
  api.use('ecmascript');

  api.mainModule('client.js', 'client');
  api.mainModule('server.js', 'server');

  api.addAssets([
      "img/cs-logo.png",
      "img/n4c-logo.png"
  ], "client");

  Npm.depends({
      "i18next": "19.8.4",
      "react-bootstrap": "1.4.0",
      "@fortawesome/react-fontawesome": "0.1.13",
  });
});