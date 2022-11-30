'use strict';

var gulpopen = require('../');
var os = require('os');
require('mocha');

describe('gulp-open', function() {

  var browser = os.platform() === 'linux' ? 'google-chrome' : (
    os.platform() === 'darwin' ? 'google chrome' : (
    os.platform() === 'win32' ? 'chrome' : 'firefox'));
 
  describe('opening files', function() {
    it('should open a stream of files with the default application', function(done) {
      gulpopen('<%= file.path%>', {}, done());
    });

    it('should open a stream of files with a defined application', function(done) {
      gulpopen('<%= file.path%>', {app: browser}, done());
    });

    it('should open a stream of files with a browser using the options', function(done) {
      gulpopen({}, {uri: __dirname + '/../package.json', app: browser}, done());
    });
  });

  describe('opening urls', function() {
    it('should open a website in a browser using the options', function(done) {
      gulpopen({}, {uri:'http://localhost:3000'}, done());
    });

    it('should open a website in a browser using chrome or firefox', function(done) {
     gulpopen({}, {uri:'https://www.google.com', app: browser}, done());
    });
  });
});
