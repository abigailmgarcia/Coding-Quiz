// declare global variables
const headerElement = document.querySelector("header");
const highScoreElement = document.getElementById('hs');
const timeClock = document.getElementById('timer');
const displayQuiz = document.getElementById('quiz');
const questionElement = document.getElementById('question');
const answerChoices = document.getElementById('choice');
const displayAnswer = document.getElementById('answer');
const startButton = document.getElementById("startbutton");
const formEl = document.createElement("form");
let intervalId;

//variables for timer

let countDown = 60;
let currentIndex = 0;

// style
headerElement.setAttribute("style", "font-family: Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif display: flex; flex-direction: row; justify-content: space-between; color: pink;")
answerChoices.setAttribute("style", "display: flex; flex-direction: column; justify-content:center; align-items:center;");
startButton.setAttribute("style", "background-color: pink; color: black; border-radius: 25px; margin: 10px;");
displayQuiz.setAttribute("style", "font-family: Arial, sans-serif; display: flex; flex-direction: column; justify-content: center; align-items: center;");

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
];

//display question function

const displayQuestion = function(){
    let currentQuestion = quizQuestions[currentIndex];
    questionElement.textContent = currentQuestion.question;

    answerChoices.textContent = "";
    currentQuestion.choices.forEach(function(choice){
        let button = document.createElement("button");
        button.textContent = choice;
        answerChoices.appendChild(button);

        answerChoices.setAttribute("style", "display: flex; flex-direction: column; justify-content: center; align-items: center;");
        button.setAttribute("style", "background-color: pink; color: black; border-radius: 25px; margin: 10px;");


          // Attach an event listener to each answer choice button so that when the user clicks a button, it calls the checkAnswer function.
          button.addEventListener("click", function() {
            checkAnswer(choice);
        });
    })
}

//function to see if answer is correct or not?

let checkAnswer = function(inputAnswer) {
    const currentQuestion = quizQuestions[currentIndex];
    console.log(inputAnswer, currentQuestion.answer);
    if(inputAnswer === currentQuestion.answer) {
        answer.textContent = "Yes! Correct!";
    } else {
        countDown -= 10;
        answer.textContent = "OH, NO! Incorrect";
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
                // clearInterval(intervalId);
                endGame();
            };

        }, 1000);
    };
    timerStart();
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
    //user enter their initails 
    formEl.innerHTML = `
    <label for='initials'>Enter your initials:
    </label>
    <input type='text' id='initials' name='initials'></input>
    <button type='sumbit'>Save Score</button>
    `;
    displayQuiz.appendChild(formEl);
}

//eventlistener for start button
startButton.addEventListener("click", function() {
    startQuiz();
    console.log("click")
});



    var renderHighScores = function(){
         let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    const HighScoresList = document.getElementById("highscores-list");

        HighScoresList.innerHTML = "";

    highScores.forEach(function(highScore) {

        let highScoreItem = document.createElement('ol');
        highScoreItem.textContent = "Initials:" + highScore.initials + "Score:" + highScore.score;

        HighScoresList.appendChild(highScoreItem);

        console.log(highScore);
    });
};

    highScoreElement.addEventListener("click", function(){
        renderHighScores();
    });

   formEl.addEventListener("submit", function(event) {
    event.preventDefault();
    const initialsInput = document.getElementById("initials");
    const initials = initialsInput.value.trim();
    if (initials === "") {
      alert("Please enter your initials.");
      return;
};

    
let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
highScores.push({ initials, score: countDown });
highScores.sort((a, b) => b.score - a.score);
localStorage.setItem("highScores", JSON.stringify(highScores));
alert("Your score has been saved!")

initialsInput.value = "";
renderHighScores();
});



