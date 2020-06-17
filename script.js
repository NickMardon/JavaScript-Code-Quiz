//Pseudo Code
//TODO: create array of questions +1
//TODO: assign variables to the question text and answer buttons +1
//TODO: assign variable to correct/wrong h3 tag +1
//TODO: create nested array of answers for each question +1
//TODO: use for loop and math radom math floor methods to pick random questions
//TODO: use nested for loop to randomly display coresponding answers in buttons
//TODO: create score variable +1
//TODO: create timer
//TODO: when timer hits 0 game is over 
//TODO: if user clicks correct answer add to score
//TODO: if user picks incorrect answer subtract time from clock
//TODO: when the game is over create input for user to enter score
//TODO: use local storage to save user scores

//Array of questions and answers 
var questionArr = [
    {question: "How do you write an IF statement in JavaScript?",
    answers: ["if = 5 then","if i == 5 then", "if i = 5", "if(i==5)"],
    correct: "if(i==5)"
    },
    {question: "How does a WHILE loop start?",
    answers: ["while i &lt; 5", "while (i &lt; 5)", "while(i) &lt; 5", "(while i &lt; 5)"],
    correct: "while (i &lt; 5)"
    },
    {question: "Which of the following is NOT part of a for loop",
    answers: ["variable", "condition", "increment", "boolean"],
    correct: "boolean"
    },
    {question: "What HTML tag links JavaScript to HTML?",
    answers: ["&lt;script.js&gt;", "&lt;JavaScript&gt;", "&lt;script&gt;", "&lt;Java&gt;"],
    correct: "&lt;script.js&gt;"
    },
    // {question: "How do you test for two conditions",
    // answers: ["while i &lt; 5 || i &gt; 9", "while (i &lt; 5 && i &gt; 9)", "while [i &lt; 5 && i &gt; 9]", "while(5 &lt; i &lt; 9)"],
    // correct: "while (i &lt; 5 && i &gt; 9)"
    // },
    {question: "Which of the following is NOT a JavaScript framework?",
    answers: ["Node.js", "React.js", "Go.js", "Vue.js"],
    correct: "Go.js"
    },
    // {question: "How do you add a comment in JavaScript?",
    // answers: ["//This is my comment", "/*This is my comment*/", "<!--This is my comment-->", "!this is my comment!"],
    // correct: "//This is my comment"
    // },
    {question: "How do you write an Array in JavaScript?",
    answers: ["let arr = ()", "let arr = []", "let arr = ()", "let arr([])"],
    correct: "let arr = []"
    },
    {question: "JavaScript and Java...",
    answers: ["Are the Same", "Are built off of eachother", "were created by the same person", "Are different programming languages"],
    correct: "Are different programming languages"
    },
    {question: "Which of the following type of variable is visible everywhere in your JavaScript code?",
    answers: ["Local Variable", "Global Variable", "Both", "Neither"],
    correct: "Global Variable" 
    },
    {question: "Which of the following is a JavaScript method?",
    answers: [".toUpperCase","let", "break", ".Math"],
    correct: ".toUpperCase"
    },
    {question: "Which of the following functions turns a string into an array?",
    answers: [".slice()", ".parse()", ".stringify()", ".split()"],
    correct: ".split()"
    },
]

//Defining DOM variables
var questionText = document.querySelector("#question");
var timerDisplay = document.querySelector("#timerSpan");
var confirmAnswer = document.querySelector(".confirmAnswer");
var startBtn = document.querySelector("#startBtn");
//Answer Buttons
var answerButtons = document.querySelector(".answers");
var answerBtn0 = document.querySelector("#answerBtn0");
var answerBtn1 = document.querySelector("#answerBtn1");
var answerBtn2 = document.querySelector("#answerBtn2");
var answerBtn3 = document.querySelector("#answerBtn3");
//other variables
var score = 0;
var index = 0;
var timeLeft = 90;
// let correctAnswer = questionArr[index].correct;
// var answerIndex = 0;

//add click listener to start button to start quiz
startBtn.addEventListener("click", startQuiz)
// Start button disapears, questions and answers display on HTML, Timer starts
function startQuiz(){
    startTimer();
    startBtn.classList.add("hide")
    answerButtons.classList.remove("hide");
    generateQuestion();
}

//Start timer 
function startTimer() {
    timer = setInterval(function() {
      timerDisplay.innerHTML = timeLeft;
      timeLeft--;
      if (timeLeft < 0) {
        //go to high scores
        function myStopFunction() {
        clearInterval(timer);
    }
        myStopFunction();   
      }
    }, 1000);
  }


function generateQuestion(){
    // debugger;
    if(index<questionArr.length){
    //display question on page
    questionText.innerHTML = questionArr[index].question;
    //display answers in coresponding buttons
    answerBtn0.innerHTML = questionArr[index].answers[0];
    answerBtn1.innerHTML = questionArr[index].answers[1];
    answerBtn2.innerHTML = questionArr[index].answers[2];
    answerBtn3.innerHTML = questionArr[index].answers[3];
    }
    // else dislay game over
}
// function answerClickSetUp() {
    //Answer Buttons
    var answerBtn0 = document.querySelector("#answerBtn0");
    var answerBtn1 = document.querySelector("#answerBtn1");
    var answerBtn2 = document.querySelector("#answerBtn2");
    var answerBtn3 = document.querySelector("#answerBtn3");

    // add event listeners to answers
    answerBtn0.addEventListener("click", function() {goToNextQuestion(answerBtn0.innerHTML)});
    answerBtn1.addEventListener("click", function() {goToNextQuestion(answerBtn1.innerHTML)});
    answerBtn2.addEventListener("click", function() {goToNextQuestion(answerBtn2.innerHTML)});
    answerBtn3.addEventListener("click", function() {goToNextQuestion(answerBtn3.innerHTML)});
//   }

//Checks if answer was right and moves to next question
function goToNextQuestion(userChoice){
    debugger;
    console.log("goToNextQuestion has been called");
    var correctAnswer = questionArr[index].correct;
    if(userChoice == correctAnswer){
        confirmAnswer.textContent = "Correct";
        score = score + 1;
        console.log("score is " + score);
        index = index + 1;
        console.log("index is " + index);
        generateQuestion();
    } 
    
    if(userChoice !== correctAnswer){
        confirmAnswer.textContent = "False";
        // timeLeft = timeLeft - 5;
        index = index + 1;
        console.log("index is " + index);
        generateQuestion();
    }
}


        


