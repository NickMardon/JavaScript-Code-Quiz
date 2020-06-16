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
//right answers are in index 1
var questionArr = [
    {question: "How do you write an IF statement in JavaScript?",
    answers: ["if = 5 then", "if(i==5)","if i == 5 then", "if i = 5"]
    },
    {question: "How does a WHILE loop start?",
    answers: ["while i < 5", "while (i<5)", "while(i)<5", "(while i < 5)"]
    },
    {question: "What HTML tag links JavaScript to HTML?",
    answers: ["<JavaScript>", "<script>", "<script.js>", "<Java>"]
    },
    {question: "Which of the following is NOT part of a for loop",
    answers: ["variable", "boolean", "condition", "increment"]
    },
    {question: "How do you test for two conditions",
    answers: ["while i < 5 || i > 9", "while (i < 5 && i > 9)", "while [i<5 && i >9]", "while(5 < i < 9)"]
    },
    {question: "Which of the following is NOT a JavaScript framework?",
    answers: ["React.js", "Go.js", "Vue.js", "Node.js"]
    },
    {question: "How do you add a comment in JavaScript?",
    answers: ["/*This is my comment*/", "//This is my comment", "<!--This is my comment-->", "!this is my comment!"]
    },
    {question: "How do you write an Array in JavaScript?",
    answers: ["let arr = ()", "let arr = []", "let arr = ()", "let arr([])"]
    },
    {question: "JavaScript and Java...",
    answers: ["Are the Same", "Are different programming languages", "Are built off of eachother", "were created by the same person"]
    },
    {question: "Which of the following type of variable is visible everywhere in your JavaScript code?",
    answers: ["Local Variable", "Global Variable", "Both", "Neither"]
    },
    {question: "Which of the following is a JavaScript method?",
    answers: ["let", ".toUpperCase", "break", ".Math"]
    },
    {question: "Which of the following functions turns a string into an array?",
    answers: [".slice()", ".split()", ".parse()", ".stringify()"]
    },
]
//Defining DOM variables
var questionText = document.querySelector("#question");
var answerBtns = document.querySelectorAll("answerBtn");
var timer = document.querySelector("#timerSpan");
var confirmAnswer = document.querySelector(".confirmAnswer");
var score = 0;
