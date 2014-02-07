var assert = require('assert');
var connect = require('connect');
var request = require('supertest');

var compress = require('./');

describe('gito()', function(){

  it('should observe commandline arguments', function(done){

    gito(process.argv,function(err,argvs){

      assert.equal(process.argv.length, 2);

      done();

    });

  });

});