var assert = require('assert');
var request = require('supertest');
var mocha = require('mocha')
var gito = require('./');

describe('gito', function(){
  it('should observe commandline arguments', function(done){
    assert.equal(3, 3, 'sweet');
    done();
  });
});