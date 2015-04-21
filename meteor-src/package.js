var
  where = 'client' // Adds files only to the client
;

Package.describe({
  name    : 'centiq:theme',
  summary : 'Semantic UI - CSS Release of Semantic UI',
  version : '1.8.1',
});

Package.onUse(function(api) {

  api.versionsFrom('1.0');

  api.use('jquery', 'client');

  api.addFiles([
    // icons
    'themes/centiq/assets/fonts/icons.eot',
    'themes/centiq/assets/fonts/icons.svg',
    'themes/centiq/assets/fonts/icons.ttf',
    'themes/centiq/assets/fonts/icons.woff',
    'themes/centiq/assets/fonts/icons.woff2',

    // flags
    'themes/centiq/assets/images/flags.png',

    // release
    'semantic.css',
    'semantic.js'
  ], 'client');

});
