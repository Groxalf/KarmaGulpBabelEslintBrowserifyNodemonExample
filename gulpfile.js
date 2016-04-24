'use strict'

const gulp = require('gulp');
const karma = require('karma');
const nodemon = require('nodemon');
const fs = require('fs');
const browserify = require('browserify');
const vinylSource = require('vinyl-source-stream');
const babelify = require('babelify');
const eslint = require('gulp-eslint');

const sourceSampleTestFile = 'test/sampleTest.js';
const distFolder = 'dist/';
const outputSampleTestFile = 'sampleTest.js';
const fakeServerFileName = 'app.js';
const fakeServerPort = '3000';

gulp.task('default', ['lint', 'build', 'test']);


gulp.task('lint', () => {
	return gulp.src(sourceSampleTestFile)
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
});

gulp.task('build', ['lint'], () => {
	return browserify(sourceSampleTestFile)
  		.transform(babelify, {presets: ['es2015']})
  		.bundle()
		.pipe(vinylSource(outputSampleTestFile))
  		.pipe(gulp.dest(distFolder));
});

gulp.task('test', ['lint', 'build'], () => {
	setUpFakeServer();
    return new karma.Server({
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
