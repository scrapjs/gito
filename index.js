
/**
 * Module dependencies.
 */

var type = require('./lib/type')
var exec = require('child_process').exec;


/**
 * Module exports.
 */

module.exports = function(argvs,cb){

  if (type(argvs[2]) == 'string') {
    
    exec('git add -A && git commit --message "'+argvs[2]+'"'
      , function (err,stdout,stderr){
      
      if(err)throw err;


      return;
    
    });
    
    setImmediate(function(){

      exec('git push', function (err,stdout,stderr){
        
        if(err)throw err;

        return cb(null,stdout);
      
      });
    
    });
  }

}