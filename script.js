//Defining DOM variables
var questionText = document.querySelector("#question");
var timerDisplay = document.querySelector("#timerSpan");
var confirmAnswer = document.querySelector(".confirmAnswer");
var startBtn = document.querySelector("#startBtn");
var submitBox = document.querySelector(".submitBox")
var submitInput = document.querySelector("#submitInput");
var submitBtn = document.querySelector("#submitBtn");
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
var userArray = [];


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
      //if the user runs out of time
      if (timeLeft < 0) {
        gameOver();
      }
    }, 1000);
  }

  function gameOver(){
    timerDisplay.innerHTML = 0;
    clearInterval(timer);
    submitBox.classList.remove("hide");
    questionText.classList.add("hide");
    answerButtons.classList.add("hide");
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
    } else if(index >= questionArr.length){
        gameOver();
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
    // debugger;
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

//add click listener for submit button
submitBtn.addEventListener("click", saveScores);


//Save the users score to local storage
function saveScores() {
    var scoreName = submitInput.value;
    console.log(scoreName);
    var highScores = scoreName + " : " + score;
    userArray.push(highScores);
  
    // + add sort method to the array to show higher score first
  
    userArray.sort(function(a, b){return b-a}); 
    localStorage.setItem("listOfItems", JSON.stringify(userArray));
  }


        


