Package.describe({
  name: 'smartunit:autoform-files',
  summary: 'File upload for AutoForm using ostrio:files',
  description: 'File upload for AutoForm using ostrio:files',
  version: '1.0.13',
  git: 'https://github.com/alopex-smartunit/meteor-autoform-file.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4');

  api.use([
    'check',
    'underscore',
    'reactive-var',
    'templating',
    'aldeed:autoform',
    'ostrio:files'
  ]);

  api.addFiles([
    'lib/client/autoform.js',
    'lib/client/fileUpload.html',
    'lib/client/fileUpload.js',
    'lib/client/uploadImageDemo.html',
    'lib/client/uploadFileDemo.html'
  ], 'client');
});
