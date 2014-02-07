
/**
 * Module dependencies.
 */

var type = require('./lib/type');
var exec = require('child_process').exec;
var spawn = require('child_process').spawn;

/**
 * Module exports.
 */

module.exports = function(argvs,cb){

  if (type(argvs[2]) == 'string') {

    exec('git add -A && git commit --message "'+argvs[2]+'"'
      , function (err,stdout,stderr){
      if(err)throw err;
      console.log(stdout);
      
      var push = spawn('git',['push']);
      
      push.on('data',function(data){
        //console.log(process);
      });
      
      push.on('close',function(code){
        console.log('success. pushed up to current remote branch')
      });

    });
  
  }
}