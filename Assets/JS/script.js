//Defining DOM variables
var questionText = document.querySelector("#question");
var timerDisplay = document.querySelector("#timerSpan");
var confirmAnswer = document.querySelector(".confirmAnswer");
var startBtn = document.querySelector("#startBtn");
var submitBox = document.querySelector(".submitBox")
var submitInput = document.querySelector("#submitInput");
var submitBtn = document.querySelector("#submitBtn");
var tryAgain = document.querySelector("#tryAgain");
var rightOrWrong = document.querySelector(".wrongCorrect");
var highScoresList = document.querySelector(".highscoreList");
var highScoresBox = document.querySelector(".highScoresBox");
var highScoreBtn = document.querySelector("#highScore");
var playAgain = document.querySelector("#playAgainBtn");
//Answer Buttons
var answerButtons = document.querySelector(".answers");
var answerBtn0 = document.querySelector("#answerBtn0");
var answerBtn1 = document.querySelector("#answerBtn1");
var answerBtn2 = document.querySelector("#answerBtn2");
var answerBtn3 = document.querySelector("#answerBtn3");
//counter variables
var score = 0;
var index = 0;
var timeLeft = 90;
//user scores
var userArray = JSON.parse(localStorage.getItem("userScore")) || [];
// var userArray = [];
var savedScores = JSON.parse(localStorage.getItem("userScore")) || [];
//display scores variables
var displayUserScore;
var displayLi;

//view high score button
highScoreBtn.addEventListener("click", function(){ 
  this.onclick = null;
  startBtn.classList.add("hide");
  highScoresBox.classList.remove("hide");
  questionText.classList.add("hide");
  rightOrWrong.classList.add("hide");
  showScores();
  //fix the code here 
})

//add click listener to start button to start quiz
startBtn.addEventListener("click", startQuiz);
// Start button disapears, questions and answers display on HTML, Timer starts
function startQuiz(){
    startTimer();
    startBtn.classList.add("hide");
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
//Game Over Function
  function gameOver(){
    timerDisplay.innerHTML = 0;
    clearInterval(timer);
    submitBox.classList.remove("hide");
    questionText.classList.add("hide");
    answerButtons.classList.add("hide");
    rightOrWrong.classList.add("hide");
  }
//Generate questions on to HTML
function generateQuestion(){
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
}
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

//Checks if answer was right and moves to next question
function goToNextQuestion(userChoice){
    rightOrWrong.classList.remove("hide");
    var correctAnswer = questionArr[index].correct;
    if(userChoice == correctAnswer){
        confirmAnswer.textContent = "Correct";
        confirmAnswer.style.color = "green";
        score = score + 1;
        index = index + 1;
        generateQuestion();
    } 
    
    if(userChoice !== correctAnswer){
        confirmAnswer.textContent = "False";
        confirmAnswer.style.color = "red";
        timeLeft = timeLeft - 5;
        index = index + 1;
        generateQuestion();
    }
}

//Try again button click listener 
tryAgain.addEventListener("click", resetGame);

//resetGame function
function resetGame(){
    index = 0;
    score = 0;
    questionText.classList.remove("hide");
    questionText.innerHTML = "Click the start button to begin the quiz"
    submitBox.classList.add("hide");
    startBtn.classList.remove("hide");

}

//add click listener for submit button
submitBtn.addEventListener("click", saveScores);

if(submitBtn.clicked === true){
  showScores();
}
//Save the users score to local storage
function saveScores() {
    var scoreName = submitInput.value;
  //add username and score as properties of an object in an array
    var scoreObj = {};
    scoreObj["name"]=scoreName;
    scoreObj["score"]=score;
    userArray.push(scoreObj);
    //sort scores from high to low before saving
    userArray.sort(function(a, b){return b.score-a.score}); 
    //save the objects in userArray into local storage
    localStorage.setItem("userScore", JSON.stringify(userArray));
    //call show scores to display high scores box
    showScores();
  }
  //  create a new list item for each score and append to ol 
function showScores() {
  highScoresBox.classList.remove("hide");
  submitBox.classList.add("hide");
    for (i = 0; i < userArray.length; i++) {
        var displayUserScore = document.createElement("li");
        displayLi = `${userArray[i].name}---${userArray[i].score}`;
        displayUserScore.innerHTML = displayLi;
        highScoresList.appendChild(displayUserScore);  
    }
  }
  //play again button
playAgain.addEventListener("click", function(){
  location.reload();
})

  