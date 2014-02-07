var assert = require('assert');
var request = require('supertest');
var mocha = require('mocha')
var gito = require('./');

describe('gito()', function(){
  it('should observe commandline arguments', function(done){
    gito(process.argv,function(err,argvs){
      assert.equal(process.argv.length, 3);
      done();
    });
  });
});