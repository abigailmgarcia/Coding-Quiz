// declare global variables
const headerElement = document.querySelector("header");
const highScore = document.getElementById('hs');
const timeClock = document.getElementById('timer');
const displayQuiz = document.getElementById('quiz');
const questionElement = document.getElementById('question');
const answerChoices = document.getElementById('choice');
const displayAnswer = document.getElementById('answer');
const startButton = document.getElementById("startbutton");


//variables for timer

// const countDown = 

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

//function to see if answer is correct or not?

//function for start game button
let startQuiz = function (){

}
//eventlistener for start button

startButton.addEventListener("click", function() {
    startQuiz();
    console.log("click")
})

//event listener for highschore button

// highScore.addEventListener("click", function(){

// });