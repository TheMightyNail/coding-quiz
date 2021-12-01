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

var quizQuestions = [
    "What syntax is used for an array?", "What does CSS stand for?", "How long did it take for JavaScript to be created?", 
    "How do you save your work using Git?", "Which syntax would you use to reference an element's ID?"
];
var quizAnswersOne = ["{}","()","<>"];
var quizAnswersTwo = ["Cool Styling Standards","Crazy Sick Stunts","Close-Captioning Software"];
var quizAnswersThree = ["6 months","3 days","30 weeks"];
var correctAnswers = ["[]","Cascading Style Sheets", "10 days"];

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
var countDown;
var timeRemaining = 99;

// FIRST QUIZ START !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

var firstQuiz = function() {
    // if count becomes larger than array.length, call upon endQuiz() function
    if (questionCount > quizQuestions.length) {
        endQuiz();
    }
    
    // Display Question and Answer options
    quizQuestionEl.textContent = quizQuestions[questionCount];
    secondAnswerEl.textContent = quizAnswersOne[0];
    secondAnswerEl.onclick = function() {
        alert("Incorrect. You lose fifteen seconds.")
        questionCount++;
        // decrement 15 seconds from the timer
        timeRemaining -= 15;
        secondQuiz();
    }
    secondAnswerEl.className = "btn answer-btn";

    thirdAnswerEl.textContent = quizAnswersOne[1];
    thirdAnswerEl.onclick = function() {
        alert("Incorrect. You lose 15 seconds")
        questionCount++;
        timeRemaining -= 15;
        secondQuiz();
    }

    thirdAnswerEl.className = "btn answer-btn";

    fourthAnswerEl.textContent = correctAnswers[0];
    fourthAnswerEl.onclick = function() {
        
        // check if answer is correct - if not correct, decrement 15 seconds off clock
        if (fourthAnswerEl.textContent = correctAnswers[0]) {
            alert("Correct!");
            questionCount++;
            secondQuiz();
        } else {
            alert("Incorrect. You lose 15 seconds.")
            // decrement 15 seconds from the timer
            timeRemaining -= 15;
            questionCount++;
            secondQuiz();
        }
    }
    fourthAnswerEl.className = "btn answer-btn";

    fifthAnswerEl.textContent = quizAnswersOne[2];
    fifthAnswerEl.onclick = function() {
        alert("Incorrect. You lose 15 seconds.")
        questionCount++;
        // decrement 15 seconds from the timer
        timeRemaining -= 15;
        secondQuiz(); 
    }
    fifthAnswerEl.className = "btn answer-btn";
}

// FIRST QUIZ END !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// SECOND QUIZ START !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

var secondQuiz = function() {
    // if count becomes larger than array.length, call upon endQuiz() function
    if (questionCount > quizQuestions.length) {
        endQuiz();
    }
    
    quizQuestionEl.textContent = quizQuestions[questionCount];
    secondAnswerEl.textContent = quizAnswersTwo[0];
    secondAnswerEl.onclick = function() {
        alert("Incorrect. You lose fifteen seconds.")
        questionCount++;
        timeRemaining -= 15;
        thirdQuiz();
    }
    secondAnswerEl.className = "btn answer-btn";

    thirdAnswerEl.textContent = quizAnswersTwo[1];
    thirdAnswerEl.onclick = function() {
        alert("Incorrect. You lose 15 seconds")
        questionCount++;
        timeRemaining -= 15;
        thirdQuiz();
    }

    thirdAnswerEl.className = "btn answer-btn";

    fourthAnswerEl.textContent = correctAnswers[1];
    fourthAnswerEl.onclick = function() {
        
        // check if answer is correct - if not correct, decrement 15 seconds off clock
        if (fourthAnswerEl.textContent = correctAnswers[1]) {
            alert("Correct!");
            questionCount++;
            thirdQuiz();
        } else {
            // decrement 15 seconds from the timer
            alert("Incorrect. You lose 15 seconds.")
            timeRemaining -= 15;
            questionCount++;
            thirdQuiz();
        }
    }
    fourthAnswerEl.className = "btn answer-btn";

    fifthAnswerEl.textContent = quizAnswersTwo[2];
    fifthAnswerEl.onclick = function() {
        alert("Incorrect. You lose 15 seconds.")
        questionCount++;
        // decrement 15 seconds from the timer
        timeRemaining -= 15;
        thirdQuiz();
    }
    fifthAnswerEl.className = "btn answer-btn";
}

// SECOND QUIZ END !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// THIRD QUIZ START !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

var thirdQuiz = function() {
    // if count becomes larger than array.length, call upon endQuiz() function
    if (questionCount > quizQuestions.length) {
        endQuiz();
    }
    
    quizQuestionEl.textContent = quizQuestions[questionCount];
    secondAnswerEl.textContent = correctAnswers[2];
    secondAnswerEl.onclick = function() {
        // check if answer is correct - if not correct, decrement 15 seconds off clock
        if (secondAnswerEl.textContent = correctAnswers[2]) {
            alert("Correct!");
            questionCount++;
            endQuiz();
        } else {
            // decrement 15 seconds from the timer
            alert("Incorrect. You lose 15 seconds.")
            timeRemaining -= 15;
            questionCount++;
            endQuiz();
        }
    }
    secondAnswerEl.className = "btn answer-btn";

    thirdAnswerEl.textContent = quizAnswersThree[0];
    thirdAnswerEl.onclick = function() {
        alert("Incorrect. You lose 15 seconds")
        questionCount++;
        timeRemaining -= 15;
        endQuiz();
    }

    thirdAnswerEl.className = "btn answer-btn";

    fourthAnswerEl.textContent = quizAnswersThree[1];
    fourthAnswerEl.onclick = function() {
        alert("Incorrect. You lose 15 seconds")
        questionCount++;
        timeRemaining -= 15;
        endQuiz();
    }
    fourthAnswerEl.className = "btn answer-btn";

    fifthAnswerEl.textContent = quizAnswersThree[2];
    fifthAnswerEl.onclick = function() {
        alert("Incorrect. You lose 15 seconds.")
        questionCount++;
        // decrement 15 seconds from the timer
        timeRemaining -= 15;
        endQuiz();
    }
    fifthAnswerEl.className = "btn answer-btn";
}

// THIRD QUIZ END !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

var endQuiz = function() {
    clearInterval(countDown);
    alert("Game Over! Your final score is " + timeRemaining + "!");
    // needs a function called JSON.stringify() - pass in data object which includes initials and score (time remaining)
    // to retrieve localStorage, need JSON.parse() - when we get getLocalStorage(), pass in initials and score
}


var timer = function() {
    countDown = setInterval(function(){
        timerEl.innerText = timeRemaining--;
        if (timeRemaining < 0) {
            endQuiz();
        }
    }, 1000);
}

var startQuiz = function(){
    timer();
    firstQuiz();
}

startButtonEl.addEventListener('click', startQuiz);

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

    // When the quiz is complete, stop and remove the timer. 
        // Most likely as simple as removing the element. 
    // When the quiz is complete, alert the player and display their score and input their initals. Using localStorage, save their score. 
        // Maybe an alert box for coding ease. If I have time, display it as a string. localStorage.setItem(playerScore)??
    // Use localStorage to display a highscore, or, the top 3 scores if time allows. (god willing)