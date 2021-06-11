// In this file you can specify the trial data for your experiment

function range(start, end) {
    var ans = [];
    var path = '05-mental-rotation-images';
    for (let i = start; i <= end; i++) {
        ans.push(path+"/"+i+"_50_same.jpg");
        ans.push(path+"/"+i+"_50_different.jpg");
        ans.push(path+"/"+i+"_150_same.jpg");
        ans.push(path+"/"+i+"_150_different.jpg");
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
      if (file.indexOf("50")== 102) {
        angle = 50;
      }  else {
        angle = 150;
      };
      trial_info.key_press.push({
        question: "Are both objects the same or different?",
        picture: file,
        key1: 'q',
        key2: 'p',
        q: 'same',
        p: 'different',
        expected: file.endsWith("same.jpg") ? "same" : "different",
        angle: angle,
      });
  });

  return trial_info;
}



// https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#key-press
const trial_info = get_trials();

const trial_info_practice = {
    key_press: [
        {
            question: "Are both objects the same or different?",
            picture: "C:\\Users\\sarah\\Documents\\Documents\\Uni\\Experimental_psychology_lab\\my-exp\\05-mental-rotation-images\\13_50_same.jpg",
            item: 13,
            key1: 'q',
            key2: 'p',
            q: 'same',
            p: 'different',
            expected: "same",
            angle: 50,
        },
        {
            question: "Are both objects the same or different?",
            picture: "C:\\Users\\sarah\\Documents\\Documents\\Uni\\Experimental_psychology_lab\\my-exp\\05-mental-rotation-images\\13_50_different.jpg",
            item: 13,
            key1: 'q',
            key2: 'p',
            q: 'same',
            p: 'different',
            expected: "different",
            angle: 50,
        },
        {
            question: "Are both objects the same or different?",
            picture: "C:\\Users\\sarah\\Documents\\Documents\\Uni\\Experimental_psychology_lab\\my-exp\\05-mental-rotation-images\\13_150_same.jpg",
            item: 13,
            key1: 'q',
            key2: 'p',
            q: 'same',
            p: 'different',
            expected: "same",
            angle: 150,
        },
        {
            question: "Are both objects the same or different?",
            picture: "C:\\Users\\sarah\\Documents\\Documents\\Uni\\Experimental_psychology_lab\\my-exp\\05-mental-rotation-images\\13_150_different.jpg",
            item: 13,
            key1: 'q',
            key2: 'p',
            q: 'same',
            p: 'different',
            expected: "different",
            angle: 150,
        },
        {
            question: "Are both objects the same or different?",
            picture: "C:\\Users\\sarah\\Documents\\Documents\\Uni\\Experimental_psychology_lab\\my-exp\\05-mental-rotation-images\\14_50_same.jpg",
            item: 14,
            key1: 'q',
            key2: 'p',
            q: 'same',
            p: 'different',
            expected: "same",
            angle: 50,
        },
        {
            question: "Are both objects the same or different?",
            picture: "C:\\Users\\sarah\\Documents\\Documents\\Uni\\Experimental_psychology_lab\\my-exp\\05-mental-rotation-images\\14_50_different.jpg",
            item: 14,
            key1: 'q',
            key2: 'p',
            q: 'same',
            p: 'different',
            expected: "different",
            angle: 50,
        },
        {
            question: "Are both objects the same or different?",
            picture: "C:\\Users\\sarah\\Documents\\Documents\\Uni\\Experimental_psychology_lab\\my-exp\\05-mental-rotation-images\\14_150_same.jpg",
            item: 14,
            key1: 'q',
            key2: 'p',
            q: 'same',
            p: 'different',
            expected: "same",
            angle: 150
        },
        {
            question: "Are both objects the same or different?",
            picture: "C:\\Users\\sarah\\Documents\\Documents\\Uni\\Experimental_psychology_lab\\my-exp\\05-mental-rotation-images\\14_150_different.jpg",
            item: 14,
            key1: 'q',
            key2: 'p',
            q: 'same',
            p: 'different',
            expected: "different",
            angle: 150
        },
        {
            question: "Are both objects the same or different?",
            picture: "C:\\Users\\sarah\\Documents\\Documents\\Uni\\Experimental_psychology_lab\\my-exp\\05-mental-rotation-images\\15_50_same.jpg",
            item: 15,
            key1: 'q',
            key2: 'p',
            q: 'same',
            p: 'different',
            expected: "same",
            angle: 50
        },
        {
            question: "Are both objects the same or different?",
            picture: "C:\\Users\\sarah\\Documents\\Documents\\Uni\\Experimental_psychology_lab\\my-exp\\05-mental-rotation-images\\15_50_different.jpg",
            item: 15,
            key1: 'q',
            key2: 'p',
            q: 'same',
            p: 'different',
            expected: "different",
            angle: 50
        },
        {
            question: "Are both objects the same or different?",
            picture: "C:\\Users\\sarah\\Documents\\Documents\\Uni\\Experimental_psychology_lab\\my-exp\\05-mental-rotation-images\\15_150_same.jpg",
            item: 15,
            key1: 'q',
            key2: 'p',
            q: 'same',
            p: 'different',
            expected: "same",
            angle: 150
        },
        {
            question: "Are both objects the same or different?",
            picture: "C:\\Users\\sarah\\Documents\\Documents\\Uni\\Experimental_psychology_lab\\my-exp\\05-mental-rotation-images\\15_150_different.jpg",
            item: 15,
            key1: 'q',
            key2: 'p',
            q: 'same',
            p: 'different',
            expected: "different",
            angle: 150
        },
    ],
};

//         {
//             question: "Are both objects the same or different?",
//             picture: "C:\Users\sarah\Documents\Documents\Uni\Experimental psychology lab\my-exp\05-mental-rotation-images\8_50_different.jpg",
//             option1: "same",
//             option2: "different",
//             correct: "same"
//         },
//         {
//             question: "Are both objects the same or different?",
//             picture: "C:\Users\sarah\Documents\Documents\Uni\Experimental psychology lab\my-exp\05-mental-rotation-images\3_50_same.jpg",
//             option1: "same",
//             option2: "different",
//             correct: "same"
//         },
//         {
//             question: "Are both objects the same or different?",
//             picture: "C:\Users\sarah\Documents\Documents\Uni\Experimental psychology lab\my-exp\05-mental-rotation-images\1_150_same.jpg",
//             option1: "same",
//             option2: "different",
//             correct: "same"
//         },
//         {
//             question: "Are both objects the same or different?",
//             picture: "C:\Users\sarah\Documents\Documents\Uni\Experimental psychology lab\my-exp\05-mental-rotation-images\4_50_different.jpg",
//             option1: "same",
//             option2: "different",
//             correct: "different"
//         }
//     ]
// };
// const trial_info_practice = {
//     key_press: [
//         {
//             question: "Are both objects the same or different?",
//             picture: "C:\Users\sarah\Documents\Documents\Uni\Experimental psychology lab\my-exp\05-mental-rotation-images\7_150_same.jpg",
//             option1: 'same',
//             option2: 'different',
//             correct: 'same'
//         },
//         {
//             question: "Are both objects the same or different?",
//             picture: "C:\Users\sarah\Documents\Documents\Uni\Experimental psychology lab\my-exp\05-mental-rotation-images\14_150_different.jpg",
//             option1: "same",
//             option2: "different",
//             correct: "different"
//         }
//     ]
// };
