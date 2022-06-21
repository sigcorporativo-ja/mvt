var fs = require('fs')
var fse = require('fs-extra')
const path = require('path')

var projectRoot


module.exports = function (context) {
    console.log(context.hook + ': Importing external libraries')
    projectRoot = path.resolve(path.dirname(context.scriptLocation), '..')
    console.log('Project root directory:', projectRoot)
    
    var sourceDir = path.join(projectRoot, 'lib');;
    console.log('sourceDir:',sourceDir);
    var destDir = path.join(projectRoot,'www/lib');
    console.log('destDir:',destDir);
    
    
    // if folder doesn't exists create it
    if (!fs.existsSync(destDir)){
        fs.mkdirSync(destDir, { recursive: true });
    }
    
    //copy directory content including subfolders
    fse.copy(sourceDir, destDir, function (err) {
      if (err) {
        console.error(err);
      } else {
        console.log("success!");
      }
    }); 
}