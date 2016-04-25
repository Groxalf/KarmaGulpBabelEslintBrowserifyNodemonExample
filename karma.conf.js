module.exports = function(config) {
  config.set({

    frameworks: ['jasmine'],

    files: [
      'dist/sampleTest.js'
    ],

    plugins: [
     'karma-phantomjs-launcher',
     'karma-jasmine'
   ],

   customLaunchers: {
      'PhantomJS_WebSecurityDisabled': {
        base: 'PhantomJS',
        flags : ['--web-security=no']
      }
    },

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    browsers: ['PhantomJS_WebSecurityDisabled']

  })
}
