//var webpack = require('webpack');
module.exports = function (config) {
    config.set({
      browsers: [ 'ChromeDebugging' ],
      customLaunchers: {
            ChromeDebugging: {
                base: 'Chrome',
                flags: [ '--remote-debugging-port=9222' ]
            }
        },
        
      // karma only needs to know about the test bundle
      files: [
        './src/tests.bundle.js'
      ],
      frameworks: ['jasmine'],
      // run the bundle through the webpack and sourcemap plugins
      preprocessors: {
        './src/tests.bundle.js': ['webpack','sourcemap' ]
      },
      reporters: ['progress', 'kjhtml'],
      logLevel: config.LOG_INFO,
      client: {
        clearContext: false // leave Jasmine Spec Runner output visible in browser
      },
      singleRun: false,
      // webpack config object
      webpack: {
        devtool: 'inline-source-map',
        module: {
          rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader"
              }
            },
          ]
        }
      },
      
      webpackMiddleware: {
        noInfo: true,
      }
    });
  };