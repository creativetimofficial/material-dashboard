'use strict';

var date = require('dateformat');

var log = require('..');
require('should');
require('mocha');

describe('log()', function(){
  it('should work i guess', function(done){
    var count = 0;
    var writtenValue = '';

    // Stub process.stdout.write
    var stdout_write = process.stdout.write;
    process.stdout.write = function(value) {
      writtenValue += value;
      if(++count > 2){
        // Restore process.stdout.write after test
        process.stdout.write = stdout_write;
      }
    };

    log(1, 2, 3, 4, 'five');
    var time = date(new Date(), 'HH:MM:ss');
    writtenValue.should.eql('[' + log.colors.grey(time) + '] 1 2 3 4 \'five\'\n');

    done();
  });

  it('should accept formatting', function(done){
    var count = 0;
    var writtenValue = '';

    // Stub process.stdout.write
    var stdout_write = process.stdout.write;
    process.stdout.write = function(value) {
      writtenValue += value;
      if(++count > 2){
        // Restore process.stdout.write after test
        process.stdout.write = stdout_write;
      }
    };

    log('%s %d %j', 'something', 0.1, {key: 'value'});
    var time = date(new Date(), 'HH:MM:ss');
    writtenValue.should.eql(
      '[' + log.colors.grey(time) + '] '+
      'something 0.1 {\"key\":\"value\"}\n'
    );

    done();
  });
});
