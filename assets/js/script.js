var quizQuestions = [
    "What syntax is used for an array?", "What does CSS stand for?", "How long did it take for JavaScript to be created?", 
    "How do you save your work using Git?", "Which syntax would you use to reference an element's ID?"
];

var quizAnswersOne = ["{}","()","[]","<>"]

// What syntax is used for an array?
// {}
// ()
// [] << true
// <>

// What does CSS stand for?
// Cool Styling Standards
// Crazy Sick Stunts
// Cascading Style Sheets << true
// Close-Captioning Software

// How long did it take for JavaScript to be created?
// 3 days
// 6 months
// 10 days << true
// 30 weeks

// How do you save your work using Git?
// git checkout -b
// git commit -m << true
// git remote add origin
// git pull

// Which syntax would you use to reference an element's ID?
// .
// *
// # << true
// $

// Where to start? I NEED: 
    // The start button to function. Use an eventListener - when Start Quiz is clicked, clear the text from the screen. 
        // event.preventDefault(); so that the page doesn't reload whenever a button is clicked/submitted, if necessary
        // So maybe startButton.addEventListener('click', function());? Need to make a declaration var startButton = function() {}
    // Start and display timer. 
        // Research. Don't know the first thing about timers. 
    // Display new text - The first question, along with a multiple choice answer. 
        // Replace .answer text (quizAnswerEl.textContent = []) with the answers to the quiz. Replace .main-title text (quizQuestionEl.textContent=[]) with the next question. 
        // Store the questions/answers in an array(s) somehow?
        // But how do I replace text? Do I need to create new elements for the question? Or do I have to somehow replace it?

var startButtonEl = document.querySelector(".start-btn");
var quizQuestionEl = document.querySelector(".main-title");
var quizAnswerEl = document.querySelector(".answer");
var firstAnswerEl = document.querySelector("#first");
var secondAnswerEl = document.querySelector("#second");
var thirdAnswerEl = document.querySelector("#third");
var fourthAnswerEl = document.querySelector("#fourth");
var fifthAnswerEl = document.querySelector("#fifth");

var quizOne= {
    question: quizQuestions[0],
    answer1: quizAnswersOne[0],
    answer2: quizAnswersOne[1],
    answer3: quizAnswersOne[2],
    answer4: quizAnswersOne[3]
}

var switchText = function() {
    quizQuestionEl.textContent = quizOne.question;

    secondAnswerEl.textContent = quizOne.answer1;
    secondAnswerEl.className = "btn answer-btn";

    thirdAnswerEl.textContent = quizOne.answer2;
    thirdAnswerEl.className = "btn answer-btn";

    fourthAnswerEl.textContent = quizOne.answer3;
    fourthAnswerEl.className = "btn answer-btn";

    fifthAnswerEl.textContent = quizOne.answer4;
    fifthAnswerEl.className = "btn answer-btn";

    for (var i=0; i < quizAnswersOne.length; i++) {
        var answerButtonEl = document.createElement("button");
         answerButtonEl = quizOne.answer3;

          if (quizOne.answer[i] != [2]) {
             console.log("false");
         }
     }
}

var startQuiz = function(){
    console.log("Ya started the dang quiz!");
    switchText();
}


startButtonEl.addEventListener('click', startQuiz);


// Need to prevent the user from selecting text, as in highlighting it, also give the answers more of a button appearance

    // When the user clicks an answer, (another event listener) it should display correct or incorrect - a true value should be assigned to the correct
    // answer and a false value should be applied to incorrect. (or vice versa, as long as it returns a boolean value)
        //answerButton.addEventListener('click',function())      
        // Think I need a loop here, where the function that runs proceeds with what's needed down below based on where the user clicks


    // Alert the user when answer is correct or false, if false, display the correct answer. 
        // alert box or a string that gets displayed?? OR Would be cool if I can figure out the boxes to display colors, red, green etc. 
    // When a correct answer is chosen, the player receives points towards there score. 
    // When an answer is chosen, the user will be unable to click any other answers and the timer will stop. 
        // stopTimer();
        // if (answerButton === true) {
            // then what? if true is correct, add points, (playerScore = playerScore + 10;) alert player, create next button. 
        // } else {
            // if false is the wrong answer, alert player, create next button. 
        // }


    // Need to createElement for a Next button after the user chooses an answer.
    // When the user proceeds to the next question, the timer resets and begins to count down again. 
        // nextButton.addEventListener('click', function()); - the function restarts the loop (timer counting down from 30 seconds, new question and answers displayed)


    // This process repeats for all 5 questions. ( a loop needed here, presumably)


    // When the quiz is complete, stop and remove the timer. 
        // Most likely as simple as removing the element. 
    // When the quiz is complete, alert the player and display their score and input their initals. Using localStorage, save their score. 
        // Maybe an alert box for coding ease. If I have time, display it as a string. localStorage.setItem(playerScore)??
    // Use localStorage to display a highscore, or, the top 3 scores if time allows. (god willing)
