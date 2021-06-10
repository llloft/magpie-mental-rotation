function range(start, end) {
    var ans = [];
    var path = 'C:\\Users\\sarah\\Documents\\Documents\\Uni\\Experimental_psychology_lab\\my-exp\\05-mental-rotation-images';
    for (let i = start; i <= end; i++) {
        ans.push(path+"\\"+i+"_50_same");
        ans.push(path+"\\"+i+"_50_different");
        ans.push(path+"\\"+i+"_150_same");
        ans.push(path+"\\"+i+"_150_different");
    }
    return ans;
}

function get_trials() {
  var trial_info = {
      key_press: []
      };
  var files = range(1,15);
  // console.log(files);
  files.forEach(function (file) {
      trial_info.key_press.push({
        question: "Are both objects the same or different?",
        picture: file,
        key1: 'q',
        key2: 'p',
        q: 'same',
        p: 'different',
        expected: file.endsWith("same.jpg") ? "same" : "different"
      });
  });
  return trial_info;
}

console.log(get_trials())
