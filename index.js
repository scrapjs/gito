var parse   = require('shell-quote').parse
var spawn   = require('child_process').spawn
var exec    = require('child_process').exec

module.exports = function(argvs){
  exec('git add -A', function (err,so,se){
    if(err)throw err;if(se)throw se;

    exec('git commit -m '+argvs[2], function (err,stdout,stderr){
      if(err)throw err;if(stderr)throw stderr;

      //tighten up shell output on the commit
      var commit = parse(stdout).slice(0,6);
      var branch = commit[0].split(''); branch.shift();
      var shortHash = commit[1].split(''); shortHash.pop();

      //display commit summary information
      console.log('commited ' + shortHash.join('') + ' to ' + branch.join('') + ' branch')

      //share a readable/writable stream that refers to a tty with the child process
      spawn('git', ['push'], { stdio: 'inherit' });
    })
  })
}