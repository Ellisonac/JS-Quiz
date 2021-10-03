var ansList = document.querySelector("#answer-list");
var qText = document.querySelector("#question");
var qNumber = document.querySelector("#q-number");


// Store full quizzes in object of objects in a separate JS file

var results = {
  correct: 0,
  wrong: 0,
  skips: 0,
  highScore: 0
};

// question object: {question:"",choices:"",answer:""}, with choice 1 being correct
// quiz object array of questions

// Change to selector based on nav clicks
var quiz = htmlQuiz;

function init() {

  populateQuestion(quiz[Math.floor(Math.random()*quiz.length)],1)

  setScoreboard()

}

function populateQuestion(qObj,number) {
  // qObj = question object: {question:"",answer:"",choices:""}
  qNumber.textContent = "Question " + number + ":";
  qText.textContent = qObj.question;

  // Shuffle choices: courtesy of user superluminary on stackoverflow
  let shuffled = qObj.choices
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  for (let ii = 0; ii < ansList.childElementCount; ii++) {
    ansList.children[ii].children[0].textContent = shuffled[ii];
  }

}

function setScoreboard() {

  document.querySelector("#correct").textContent = "Correct: " + results.correct;
  document.querySelector("#wrong").textContent = "Wrong: " + results.wrong;
  document.querySelector("#skips").textContent = "Skipped: " + results.skips;
  document.querySelector("#high-score").textContent = "High Score: " + results.highScore;

}



init();