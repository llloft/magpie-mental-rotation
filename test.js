//requiring path and fs modules
var path = require('path');
var fs = require('fs');
var re = /(.*?)\.(.*?)$/;

function create_trial_info() {
  var trial_info = {
      key_press: []
      };

  //https://stackfame.com/list-all-files-in-a-directory-nodejs
  //joining path of directory
  var directoryPath = 'C:\\Users\\sarah\\Documents\\Documents\\Uni\\Experimental_psychology_lab\\my-exp\\05-mental-rotation-images';
  //passsing directoryPath and callback function
  fs.readdir(directoryPath, function (err, files) {
      //handling error
      if (err) {
          return console.log('Unable to scan directory: ' + err);
      }
      //listing all files using forEach
      files.forEach(function (file) {
          // Do whatever you want to do with the file
          var fname = re.exec(file)[1];
          trial_info.key_press.push({
            question: "Are both objects the same or different?",
            picture: path.join(directoryPath, file),
            key1: 'q',
            key2: 'p',
            q: 'same',
            p: 'different',
            expected: fname.endsWith("same") ? "same" : "different"
          });
      });
  });
  console.log(trial_info);
  return trial_info
}
