// declare global variables
const headerElement = document.querySelector("header");
const highScore = document.getElementById('hs');
const timeClock = document.getElementById('timer');
const displayQuiz = document.getElementById('quiz');
const questionElement = document.getElementById('question');
const answerChoices = document.getElementById('choice');
const displayAnswer = document.getElementById('answer');
const startButton = document.getElementById("startbutton");
let intervalId;

//variables for timer

let countDown = 60;
let currentIndex = 0;

//what user first sees when opening webpage 

questionElement.textContent = "Welcome to the Coding Quiz Challenge!";
answerChoices.textContent = "This is a game to test your coding knowledge. Once you press the start button you will be prompted with a series of questions. Note, you are timed and the more answers you get wrong, the less time you have! Good luck!";
startButton.textContent = "START";

//quiz question array
const quizQuestions = [
    {
        question: "Which tag do you insert CSS link?",
        choices: ["body", "head", "header", "none"],
        answer: "head",
    },
    {
        question: "Can you link the javascript file in both the head and the body?",
        choices: ["yes", "no"],
        answer: "yes",
    },
    {
        question: "How can you assign a variable?",
        choices: ["var", "const", "let", "all the above"],
        answer: "all the above",
    },
    {
        question: "does the user see what is displayed on an HTML file?",
        choices: ["yes", "no"],
        answer: "yes",
    },
    {
        question: "CSS an HTML languages are back-end languages?",
        choices: ["true", "false"],
        answer: "false",
    },
    {
        question: "Coding is hard?",
        choices: ["true", "flase"],
        answer: "true",
    },
    {
        question: "Javascript, HTML, and CSS all use the same syntax?",
        choices: ["duh it's all code", "no, I wish"],
        answer: "no, I wish",
    },
]
//display question function

const displayQuestion = function(){
    const currentQuestion = quizQuestions[currentIndex];
    questionElement.textContent = currentQuestion.question;

    answerChoices.textContent = "";
    currentQuestion.choices.forEach(function(choice){
        const button = document.createElement("button");
        button.textContent = choice;
        answerChoices.appendChild(button);

          // Attach an event listener to each answer choice button so that when the user clicks a button, it calls the checkAnswer function.
          button.addEventListener("click", function() {
            checkAnswer(choice);
        });
    })
}

//function to see if answer is correct or not?

const checkAnswer = function(inputAnswer) {
    const currentQuestion = quizQuestions[currentIndex];
    console.log(inputAnswer, currentQuestion.answer);
    if(inputAnswer === currentQuestion.answer) {
        answer.textContent = "Yes! Correct!";
    } else {
        countDown -= 10;
        answerChoices.textContent = "OH, NO! Incorrect";
    };

    //next question
    currentIndex++;

    if(currentIndex >= quizQuestions.length){
        endGame();
    } else {
        displayQuestion();
    };
    };


//function for start game button
const startQuiz = function (){
    //gets rid of intial content
    questionElement.textContent = "";
    answerChoices.textContent = "";
    startButton.style.display = "none";

    //starts timer
    const timerStart = function() {
        intervalId = setInterval(function() {
            countDown--;
            timeClock.textContent = "Time: " + countDown + " seconds left";

            if(countDown <= 0) {
                timeClock.textContent = "OOPS! Time is up!"
                endGame();
            };

        }, 1000);
    };
    // countdown();
    displayQuestion();
};

//function to end game

function endGame() {
    const button = document.createElement("button");
    clearInterval(intervalId);
    if(countDown >= 1){
        timeClock.textContent = "Time: " + countDown + " seconds left";
        questionElement.textContent = "GREAT JOB! You finished the quiz.";
        answerChoices.textContent = "Your final score is: " + countDown + " point(s)";
    } else {
        questionElement.textContent = "Sorry! You did not finish the quiz in time.";
        answerChoices.textContent = "Your final score is: " + countDown + " point(s)";
    };
}

//eventlistener for start button
startButton.addEventListener("click", function() {
    startQuiz();
    console.log("click")
});

//event listener for highschore button

// highScore.addEventListener("click", function(){

// });



