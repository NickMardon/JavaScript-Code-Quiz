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
    answers: ["while i < 5", "while (i<5)", "while(i)<5", "(while i < 5)"],
    correct: "while (i<5)"
    },
    {question: "What HTML tag links JavaScript to HTML?",
    answers: ["<script.js>", "<JavaScript>", "<script>", "<Java>"],
    correct: "<script>"
    },
    {question: "Which of the following is NOT part of a for loop",
    answers: ["variable", "boolean", "condition", "increment"],
    correct: "boolean"
    },
    {question: "How do you test for two conditions",
    answers: ["while i < 5 || i > 9", "while (i < 5 && i > 9)", "while [i<5 && i >9]", "while(5 < i < 9)"],
    correct: "while (i < 5 && i > 9)"
    },
    {question: "Which of the following is NOT a JavaScript framework?",
    answers: ["Node.js", "React.js", "Go.js", "Vue.js"],
    correct: "Go.js"
    },
    {question: "How do you add a comment in JavaScript?",
    answers: ["//This is my comment", "/*This is my comment*/", "<!--This is my comment-->", "!this is my comment!"],
    correct: "//This is my comment"
    },
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
var timer = document.querySelector("#timerSpan");
var confirmAnswer = document.querySelector(".confirmAnswer");
var startBtn = document.querySelector("#startBtn");
//Answer Buttons
var answerBtn0 = document.querySelector("#answerBtn0");
var answerBtn1 = document.querySelector("#answerBtn1");
var answerBtn2 = document.querySelector("#answerBtn2");
var answerBtn3 = document.querySelector("#answerBtn3");
//other variables
var score = 0;
var index = 0;
// var answerIndex = 0;

//add click listener to start button to start quiz
startBtn.addEventListener("click", generateQuestion)

function generateQuestion(){
//display question on page
    questionText.innerHTML = questionArr[index].question;
    index++;
//display answers in coresponding buttons
    answerBtn0.innerHTML = questionArr[index].answers[0];
    answerBtn1.innerHTML = questionArr[index].answers[1];
    answerBtn2.innerHTML = questionArr[index].answers[2];
    answerBtn3.innerHTML = questionArr[index].answers[3];
}


