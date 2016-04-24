'use strict'

const gulp = require('gulp');
const karma = require('karma');
const nodemon = require('nodemon');
const fs = require('fs');
const browserify = require('browserify');
const vinylSource = require('vinyl-source-stream');
const babelify = require('babelify');

const sourceSampleTestFile = 'test/sampleTest.js';
const distFolder = 'dist/';
const outputSampleTestFile = 'sampleTest.js';
const fakeServerFileName = 'app.js';
const fakeServerPort = '3000';

gulp.task('default', () => {
	return browserify(sourceSampleTestFile)
  		.transform(babelify, {presets: ['es2015']})
  		.bundle()
		.pipe(vinylSource(outputSampleTestFile))
  		.pipe(gulp.dest(distFolder));
});

gulp.task('test', ['default'], () => {
	setUpFakeServer();
    new karma.Server({
        configFile : __dirname + '/karma.conf.js',
        singleRun : true
    }, function() {
        nodemon.emit('quit');
    }).start();
});

function setUpFakeServer() {
	nodemon({
            script : fakeServerFileName,
            env :{
                PORT: fakeServerPort
            }
    });
    nodemon.on('exit', function () {
        process.exit();
    });
}
