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

var quizQuestions = [
    "What syntax is used for an array?", "What does CSS stand for?", "How long did it take for JavaScript to be created?", 
    "How do you save your work using Git?", "Which syntax would you use to reference an element's ID?"
];

var quizAnswersOne = ["{}","()","<>"];
var quizAnswersTwo = ["Cool Styling Standards","Crazy Sick Stunts","Close-Captioning Software"];
var quizAnswersThree = ["6 months","3 days","30 weeks"];
var correctAnswers = ["[]","Cascading Style Sheets", "10 days"];
var wrongAnswers = [];

var startButtonEl = document.querySelector(".start-btn");
var quizQuestionEl = document.querySelector(".main-title");

var quizAnswerEl = document.querySelector(".answer");
var firstAnswerEl = document.querySelector("#first");
var secondAnswerEl = document.querySelector("#second");
var thirdAnswerEl = document.querySelector("#third");
var fourthAnswerEl = document.querySelector("#fourth");
var fifthAnswerEl = document.querySelector("#fifth");
var timerEl = document.querySelector("#timer");

var questionCount = 0;
var wrongCount = 0;
var correctCount = 0;
var countDown;
var timeRemaining = 99;

var displayedAnswers = function (){
    if (answerCount < questionCount || wrongCount < questionCount || correctCount < questionCount) {
        answerCount++;
        wrongCount++;
        correctCount++;
    }

}


var quizOne= {
    question: quizQuestions[questionCount],
    answer1: quizAnswersOne[0],
    answer2: quizAnswersOne[1],
    answer3: quizAnswersOne[2], //correct answer - maybe create a separate array for correct answers to choose from
    answer4: quizAnswersOne[3]
}

// var quizTwo= {
//     question: quizQuestions[questionCount],
//     answer1: quizAnswersTwo[0],
//     answer2: quizAnswersTwo[1],
//     answer3: quizAnswersTwo[2], //correct answer
//     answer4: quizAnswersTwo[3]
// }

// var quizThree = {
//     question: quizQuestions[questionCount],
//     answer1: quizAnswersThree[0], // correct answer
//     answer2: quizAnswersThree[1],
//     answer3: quizAnswersThree[2],
//     answer4: quizAnswersThree[3]
// }

var switchText = function() {
    // if count becomes larger than array.length, call upon endQuiz() function
    if (questionCount > quizQuestions.length) {
        console.log("end quiz");
        endQuiz();
    }

    quizQuestionEl.textContent = quizQuestions[questionCount];
    console.log(quizOne.question);
    secondAnswerEl.textContent = quizOne.answer1;
    secondAnswerEl.onclick = function(event) {
        questionCount++;
        var targetEl = event.target;
        // check if answer is correct - if not correct, decrement 15 seconds off clock
        console.log(secondAnswerEl.innerText);
        if (targetEl === "data-correct-answer") {
            console.log("correct");
            switchText();
        } else {
            // decrement 15 seconds from the timer
            console.log("incorrect")
            timeRemaining -= 15;
            displayedAnswers();
            switchText();
        }
        // increment questionCount variable
        // run next function
    }
    secondAnswerEl.className = "btn answer-btn";

    thirdAnswerEl.textContent = quizOne.answer2;
    thirdAnswerEl.className = "btn answer-btn";

    fourthAnswerEl.textContent = quizOne.answer3;
    fourthAnswerEl.className = "btn answer-btn";

    fifthAnswerEl.textContent = quizOne.answer4;
    fifthAnswerEl.className = "btn answer-btn";

    startButtonEl.textContent = "Next";
    startButtonEl.className = "btn next-btn";


    // for (var i=0; i < quizAnswersOne.length; i++) {
    //     var answerButtonEl = document.createElement("button");
    //      answerButtonEl = quizOne.answer3;

    //     //  Maybe event.target instead of if? Or if (event.target != quizOne.answer3)? But I need an event function. Can I turn the for loop into a function?
    //       if (quizOne.answer3 != [2]) {
    //          console.log("false");
    //      } else {
    //          console.log("true");
    //      }
    // }
}

var endQuiz = function() {
    clearInterval(countDown);
    // needs a fucntion called JSON.stringify() - pass in data object which includes initials and score (time remaining)
    // to retrieve localStorage, need JSON.parse() - when we get getLocalStorage(), pass in initials and score
}


var timer = function() {
    countDown = setInterval(function(){
        console.log(timeRemaining);
        timerEl.innerText = timeRemaining--;
        if (timeRemaining < 0) {
            console.log("end quiz");
            endQuiz();
        }
    }, 1000);
}

var startQuiz = function(){
    timer();
    switchText();
}

// Example Code (from the module): I need an idCounter or something for my arrays so I can increment the id and the quiz will know to display
// the next question and answers. Also need a "data-" attribute for the separate divs that make up the answers.
//  createAnswerEl = function(what gets plugged in here?){

// }

// var createTaskEl = function(taskDataObj) {
//     var listItemEl = document.createElement("li");
//     listItemEl.className = "task-item";
  
//     // add task id as a custom attribute
//     listItemEl.setAttribute("data-task-id", taskIdCounter);
  
//     var taskInfoEl = document.createElement("div");
//     taskInfoEl.className = "task-info";
//     taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
//     listItemEl.appendChild(taskInfoEl);
  
//     tasksToDoEl.appendChild(listItemEl);
  
//     // increase task counter for next unique id
//     taskIdCounter++;
//   };


startButtonEl.addEventListener('click', startQuiz);


// Need to prevent the user from selecting text, as in highlighting it, also give the answers more of a button appearance

    // When the user clicks an answer, (another event listener) it should display correct or incorrect - a true value should be assigned to the correct
    // answer and a false value should be applied to incorrect. (or vice versa, as long as it returns a boolean value).
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