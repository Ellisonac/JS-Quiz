var ansList = document.querySelector("#answer-list");
var qText = document.querySelector("#question");
var qNumber = document.querySelector("#q-number");
var quizSel = document.querySelector("#quiz-select");
var startButton = document.querySelector("#start");
var coverPage = document.querySelector("#cover-page");
var initialsEl = document.querySelector("#save-score");

var quizType = "HTML";
var shuffledQuiz; // Currently ordered quiz
var qi = -1; // quiz question index
var penalty = 3; // Number of seconds to penalize wrong guess
var timer; // Initialize timer as global to streamline access
var timerEl = document.querySelector("#timer");
var quizTime = 30;
var curTime = quizTime;

var gameState = false;

var results = {
  correct: 0,
  wrong: 0,
  skips: 0,
  highScore: 0,
  initials: "",
};

// Stores missed questions to show on next cover page
var missedQ = []; 

// Full quiz stored in a list of question objects in a separate JS file quizzes.js
// question object: {question:"",choices:""}, with choice 1 being correct
// Default to HTML quiz
var quiz = quizzes[quizType];

// Initialize basic callbacks and prep quiz with initQuiz
function init() {

  for (let ii = 0; ii < quizSel.childElementCount; ii++) {
    quizSel.children[ii].addEventListener("click",selectQuiz);
  }

  for (let ii = 0; ii < ansList.childElementCount; ii++) {
    let button = ansList.children[ii].children[0] 
    button.addEventListener("click",answerClicked)
  }

  startButton.addEventListener("click",startQuiz);

  initialsEl.children[1].addEventListener("keyup",setInitials);

  initQuiz();

}

// callback for Quiz Type selectors. pulls quiz from quizzes.js
function selectQuiz(event) {

  quizType = event.target.textContent;
  quiz = quizzes[quizType];

  if (gameState) {
    // curTime = 0;
    endQuiz("new");
  }

  initQuiz();

  startButton.textContent = "Start " + quizType + " Quiz";

}

// Prepare quiz state by shuffling questions and defaulting scoreboard
function initQuiz() {
  // Shuffle quiz question list: courtesy of user superluminary on stackoverflow
  shuffledQuiz = quiz
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  results.correct = 0;
  results.wrong = 0;
  results.skips = 0;
  setScoreboard();

  timerEl.textContent = "";

  missedQ = [];

  // Display cover-page over play area until start
  coverPage.setAttribute("Style","visibility:visible;");

  initialsEl.setAttribute("Style","display:none;");

}

function startQuiz() {

  initQuiz()

  qi = -1;
  nextQuestion();

  setTimer()

  gameState = true;
  // Display cover-page over play area until start
  coverPage.setAttribute("Style","visibility:hidden;")

  missedQ = [];
}

// Start main timer and stop if time runs out
function setTimer() {
  
  clearInterval(timer);
  curTime = quizTime;
  timerEl.textContent = curTime;
  timer = setInterval(function(){
    curTime = Math.max(curTime-1,0);
    timerEl.textContent = curTime;

    if (curTime <= 0) {
      clearInterval(timer);
      endQuiz("timeout");
    }
  },1000);

}

// Change buttons to current question, reset default state, and assign whether the answer is correct through a user-attribute
function populateQuestion(qObj,number) {
  // qObj = question object: {question:"",answer:"",choices:""}
  qNumber.textContent = "Question " + (number+1) + " of " + quiz.length + ":";
  qText.textContent = qObj.question;

  // Shuffle choices: courtesy of user superluminary on stackoverflow
  let shuffled = qObj.choices
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  for (let ii = 0; ii < ansList.childElementCount; ii++) {
    // Current button
    let button = ansList.children[ii].children[0] 
    button.textContent = shuffled[ii];

    // answer is always stored as choice 1, set user attribute to flag which button is the correct answer
    if (shuffled[ii] == qObj.choices[0]) {
      button.setAttribute('data-correct',"true")
    } else {
      button.setAttribute('data-correct',"false")
    }
  }

}

// Basic on click callback for answer buttons, if button is tagged as the right answer progress questions, else penalize time
function answerClicked(event) {
  let button = event.target;

  if (!button.disabled) {
    button.disabled = true;

    if (button.getAttribute('data-correct')=="true") {
      button.classList = button.classList + " right-answer";
      
      results.correct++;

      buttonCycle(true);

      // Call next question on a timeout 1s
      setTimeout(nextQuestion,1000);

    } else {
      button.classList = button.classList + " wrong-answer";
      results.wrong++;

      // Decrement timer by penalty
      curTime = Math.max(curTime-penalty,0);

      if (!(missedQ.includes(qText.textContent))) {
        missedQ.push(qText.textContent);
      }
      
    }
    setScoreboard()

  }

}

// Load next question from randomized quiz array or end game if at last question
function nextQuestion() {

  if (qi < quiz.length-1) {
    qi++
    buttonCycle(false)
    populateQuestion(shuffledQuiz[qi],qi)
  } else {
    // Out of questions, end game
    endQuiz("complete")
  }
  
  

}

function buttonCycle(disableBool) {
  for (let ii = 0; ii < ansList.childElementCount; ii++) {
    // Current button
    let button = ansList.children[ii].children[0];

    button.disabled = disableBool;

    if (!disableBool) {
      // reset classes between questions
      button.classList = "answer"
    }
    
  }
}

// Function to update text fields of scoreboard card
function setScoreboard() {

  document.querySelector("#correct").textContent = "Correct: " + results.correct;
  document.querySelector("#wrong").textContent = "Wrong: " + results.wrong;
  document.querySelector("#skips").textContent = "Skipped: " + results.skips;

  if (results.initials.length > 0) {
    document.querySelector("#high-score").textContent = "High Score: " + results.highScore + " : " + results.initials;
  } else {
    document.querySelector("#high-score").textContent = "High Score: ";
  }
  
}

// Logic for handling cleanup of gamestate after game ends. Condition is either "complete", "timeout", "new"
function endQuiz(condition) {

  // stop timer
  clearInterval(timer);

  // set high score if applicable
  if (curTime > results.highScore) {
    results.highScore = curTime

    initialsEl.setAttribute("Style","display:block;")

  }

  setScoreboard();

  gameState = false;

  changeCover(condition)
  
  // Display cover-page over play area until new game
  coverPage.setAttribute("Style","visibility:visible;")

}

// Modify items shown on between game cover page based on game end conditions
function changeCover(condition) {

  if (condition == "complete") {
    coverPage.children[0].textContent = "Success! Score: " + curTime;
  } else if (condition == "timeout") {
    coverPage.children[0].textContent = "Out of Time...";
  } else {
    coverPage.children[0].textContent = "New Quiz";
  }

  let missedList = coverPage.children[3];
  while(missedList.firstChild){
    missedList.removeChild(missedList.firstChild);
  };

  if (missedQ.length > 0) {
    coverPage.children[2].textContent = "Missed Questions:";

    for (let ii = 0; ii < missedQ.length; ii++) {
      let li = document.createElement("li");
      li.textContent = missedQ[ii];
      missedList.appendChild(li);
    }
  } else {
    coverPage.children[2].textContent = "No Missed Questions";
  }
  

}

// Accept initials on enter keyup
function setInitials(event) {

  if (event.keyCode === 13) {
    event.preventDefault();
    results.initials = initialsEl.children[1].value;
    setScoreboard();
  }
  
}

init();
