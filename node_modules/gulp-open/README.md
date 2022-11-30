# gulp-open

> Version 3.0.0+ removes support for node < v4

[![Build Status](https://travis-ci.org/stevelacy/gulp-open.png?branch=master)](https://travis-ci.org/stevelacy/gulp-open)
[![NPM version](https://badge.fury.io/js/gulp-open.png)](http://badge.fury.io/js/gulp-open)

## Information

<table>
<tr>
<td>Package</td><td>gulp-open</td>
</tr>
<tr>
<td>Description</td>
<td>Open files and URLs with gulp</td>
</tr>
<tr>
<td>Node Version</td>
<td>>= 4</td>
</tr>
<tr>
<td>Gulp Version</td>
<td>3.x</td>
</tr>
</table>

## Usage

#### Install
    npm install gulp-open --save

## Example

```javascript
'use strict';

var os = require('os');
var gulp = require('gulp');
var open = require('gulp-open');


// Default usage:
// Open one file with default application

gulp.task('open', function(){
  gulp.src('./index.html')
  .pipe(open());
});


var browser = os.platform() === 'linux' ? 'google-chrome' : (
  os.platform() === 'darwin' ? 'google chrome' : (
  os.platform() === 'win32' ? 'chrome' : 'firefox'));

gulp.src('./package.json').pipe(open({app: 'chrome'}));

gulp.task('browser', function(){
  gulp.src('./second.html')
  .pipe(open({app: browser}));
});

// Simple usage, no options.
// This will use the uri in the default browser

gulp.task('uri', function(){
  gulp.src(__filename)
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

```
#### You can view more examples in the [example folder.](https://github.com/stevelacy/gulp-open/tree/master/examples)


## Options
`Object, {app, uri}`

`.pipe(open(options))`

### Options.app
`String, local application`

NOTE: If the ``options.app`` is not defined, the Default application will be used for the filetype/URL.

```javascript

'google-chrome' // Linux
'chrome' // Windows
'google chrome' or 'Google Chrome' // OSX
'firefox'

// Example:

.pipe(open({uri: 'file:///etc/resolv.conf', app: 'google-chrome'}));

```

#### Note for OSX-Users:
You might have to use an absolute path.

```javascript
var options = {
  uri: 'localhost:3000',
  app: '/Applications/Google\ Chrome.app'
};
gulp.src('./')
  .pipe(open(options));
```

### Options.uri
`String, any valid uri (url, file protocol, or full path)`

#### Note for windows users:
URLs may not have a default application. If the task is running without opening in a browser try setting the options.app.
Google Chrome: "chrome"
Firefox: "firefox"

```javascript

'http://localhost:3000'

// Example:
gulp.src('')
.pipe(open({app: 'google-chrome', uri: 'http://localhost:3000'}));
```
## LICENSE

(MIT License)

Copyright (c) 2015 Steve Lacy slacy.me

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
