'use strict';

var os = require('os');
var gulp = require('gulp');
var open = require('../');


// Default usage:
// Open one file with default application

gulp.task('open', function(){
  gulp.src('./index.html')
  .pipe(open());
});


var browser = os.platform() === 'linux' ? 'google-chrome' : (
  os.platform() === 'darwin' ? 'google chrome' : (
  os.platform() === 'win32' ? 'chrome' : 'firefox'));

gulp.task('browser', function(){
  gulp.src('./*.html')
  .pipe(open({app: browser}));
});

// Simple usage, no options.
// This will use the uri in the default browser

gulp.task('uri', function(){
  gulp.src('')
  .pipe(open({uri: 'http://www.google.com'}));
});

// Open an URL in a given browser:

gulp.task('app', function(){
  var options = {
    uri: 'localhost:3000',
    app: 'firefox'
  };
  gulp.src(__filename)
  .pipe(open(options));
});

// Run the task with gulp

gulp.task('default', ['open', 'uri', 'app', 'browser']);
