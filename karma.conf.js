module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    files: [
      'dist/sampleTest.js'
    ],

    plugins: [
     'karma-phantomjs-launcher',
     'karma-jasmine'
   ],

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: false,

    browsers: ['PhantomJS'],

    singleRun: false,

    concurrency: Infinity
  })
}
