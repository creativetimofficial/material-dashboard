'use strict';

var open = require('opn');
var through = require('through2');
var log = require('plugin-log');

var colors = log.colors;

module.exports = function(opts) {
  opts = opts || {};

  return through.obj(function(file, enc, cb) {
    var uri = opts.uri;

    if (file.path && !uri)  {
      uri = file.path;
    }

    if (opts.app) {
      log(colors.blue('Opening', colors.green(uri), 'using the app',
        colors.green(opts.app)));
      // Open with the given app
      open(uri, {app: opts.app, wait: false});
      return cb(null, file);

    }
    log(colors.blue('Opening', colors.green(uri), 'using the',
      colors.green('default OS app')));
    // Open with the default app defined by the os
    open(uri);
    return cb(null, file);

  });
};
