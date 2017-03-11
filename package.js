Package.describe({
  name: 'smartunit:autoform-files',
  summary: 'File upload for AutoForm using ostrio:files (for AutoForm 6.0)',
  description: 'File upload for AutoForm using ostrio:files (for AutoForm 6.0)',
  version: '1.0.12',
  git: 'https://github.com/alopex-smartunit/meteor-autoform-file.git'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.4');

  api.use([
    'check',
    'underscore',
    'reactive-var',
    'templating',
    'aldeed:autoform@6.0.0',
    'ostrio:files@1.7.11'
  ]);

  api.addFiles([
    'lib/client/autoform.js',
    'lib/client/fileUpload.html',
    'lib/client/fileUpload.js',
    'lib/client/uploadImageDemo.html',
    'lib/client/uploadFileDemo.html'
  ], 'client');
});
