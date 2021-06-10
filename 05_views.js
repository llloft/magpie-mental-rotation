// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

    * More about the properties and functions of the wrapping views - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#wrapping-views

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
  text: `Hello, welcome to this exciting experiment!
            <br />
            <br />
            In this experiment we will investigate a key aspect of visual information processing.
            <br />
            <br />
            `,
  buttonText: 'begin the experiment',
});

// For most tasks, you need instructions views
const instructions1 = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions1',
  title: 'General Instructions',
  text: `What you have to do in the experiment:
            <br />
            <br />
            You will be presented with two 3-dimensional objects and have to decide whether the two objects are the same or different.
            <br />
            <br />
            Press q for same and p for different.
            <br />
            <br />
            First you will get two trials to practice.
            <br />
            <br />
            You should be as fast as possible, do your best!`,
  buttonText: 'go to practice trials',
});
const instructions2 = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions2',
  title: 'Main experiment',
  text: `No the main experiment starts. As a reminder:
            Press q for same and p for different.
            <br />
            <br />
            You should be as fast as possible, do your best!`,
  buttonText: 'go to trials',
});


// In the post test questionnaire you can ask your participants addtional questions
const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Additional information',
  text: 'Answering the following questions is optional, but your answers will help us analyze our results.',

  // You can change much of what appears here, e.g., to present it in a different language, as follows:
  // buttonText: 'Weiter',
  // age_question: 'Alter',
  // gender_question: 'Geschlecht',
  // gender_male: 'männlich',
  // gender_female: 'weiblich',
  // gender_other: 'divers',
  // edu_question: 'Höchster Bildungsabschluss',
  // edu_graduated_high_school: 'Abitur',
  // edu_graduated_college: 'Hochschulabschluss',
  // edu_higher_degree: 'Universitärer Abschluss',
  // languages_question: 'Muttersprache',
  // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
  // comments_question: 'Weitere Kommentare'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Thank you for taking part in this experiment!',
  prolificConfirmText: 'Press the button',
});

/** trial (magpie's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _magpie (e.g. for use with a progress bar)
            and the name of the trial as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
      More about trial life cycle - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

    - hook: object - option to hook and add custom functions to the view
      More about hooks - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

* All about the properties of trial views
* https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#trial-views
*/



// Here, we initialize a normal key_press view
const object_recog_trial = magpieViews.view_generator("key_press", {
  // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value

  trials: 48,
// name should be identical to the variable name
  name: 'object_recog_trial',
  trial_type:'main',
  pause: 250,
  data: trial_info.key_press,
  key1:"q",
  key2:"p",
  q: "same",
  p: "different",

  // you can add custom functions at different stages through a view's life cycle
  // hook: {
  //     after_response_enabled: check_response
  // }
});
const object_recog_practice_trial = magpieViews.view_generator("key_press", {
//   // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
  trials: 12,
  name: 'object_recog_practice',
  trial_type: 'practice',
  pause: 250,
  data: trial_info_practice.key_press,
  key1:"q",
  key2:"p",
  q: "same",
  p: "different",


//   // you can add custom functions at different stages through a view's life cycle
//   // hook: {
//   //     after_response_enabled: check_response
//   // }
});

// There are many more templates available:
// forced_choice, slider_rating, dropdown_choice, testbox_input, rating_scale, image_selection, sentence_choice,
// key_press, self_paced_reading and self_paced_reading_rating_scale
