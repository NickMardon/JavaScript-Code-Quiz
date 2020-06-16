//Pseudo Code
//TODO: create array of questions 
//TODO: assign variables to the question text and answer buttons
//TODO: assign variable to correct/wrong h3 tag 
//TODO: create nested array of answers for each question
//TODO: give answers boolean values
//TODO: use for loop and math radom math floor methods to pick random questions
//TODO: use nested for loop to randomly display coresponding answers in buttons
//TODO: create score variable
//TODO: create timer
//TODO: when timer hits 0 game is over 
//TODO: if user clicks correct answer add to score
//TODO: if user picks incorrect answer subtract time from clock
//TODO: when the game is over create input for user to enter score
//TODO: use local storage to save user scores

var questionArr = [
    {question: "How do you write an IF statement in JavaScript?",
    answers: ["if = 5 then", "if i == 5 then", "if(i==5)", "if i = 5"]
    },
    {question: "How does a WHILE loop start?",
    answers: ["while i < 5", "while [i<5]", "while(i)<5", "(while i < 5)"]
    },
    {question: "What HTML tag links JavaScript to HTML?",
    answers: ["<JavaScript>", "<script.js>", "<script>", "<Java>"]
    },
    {question: "Which of the following is NOT part of a for loop",
    answers: ["variable", "condition", "increment", "boolean"]
    },
    {question: "How do you test for two conditions",
    answers: ["while i < 5 || i > 9", "while [i<5 && i >9]", "while(5 < i < 9)", "while (i < 5 && i > 9)"]
    },
    {question: "Which of the following is NOT a JavaScript framework?",
    answers: ["React.js", "Vue.js", "Go.js", "Node.js"]
    },
    {question: "How do you add a comment in JavaScript?",
    answers: ["/*This is my comment*/", "<!--This is my comment-->", "!this is my comment!", "//This is my comment"]
    },
    {question: "How do you write an Array in JavaScript?",
    answers: ["let arr = ()", "let arr = ()", "let arr = []", "let arr([])"]
    },
    {question: "",
    answers: ["let arr = ()", "let arr = ()", "let arr = []", "let arr([])"]
    },
]

console.log(questionArr[4].answers[2]);