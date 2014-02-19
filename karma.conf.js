var sharedConfig = require('pipe/karma');

module.exports = function(config) {
  sharedConfig(config);

  config.set({
    // list of files / patterns to load in the browser
    files: [
      //'test-main.js',
      'url-resolver.js',
      {pattern: 'test/**/*.js', included: false},
      {pattern: 'node_modules/es6-shim/es6-shim.js', included: false}
    ],

    preprocessors: {
      'url-resolver.js': ['traceur'],
      'test/**/*.js': ['traceur']
    }
  });

  config.sauceLabs.testName = 'url-resolver.js';
};
