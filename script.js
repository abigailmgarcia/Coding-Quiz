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

const countDown = ;

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

//eventlistener for start button

//event listener for highschore button