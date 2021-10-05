
// Storing whole quizzes as lists of objects variables, selected by a onclick callback from the nav bar

// HTML questions
var htmlQuiz = [
  {
    question: "What does HTML stand for?",
    choices: ["HyperText Markup Language","High Toughness Metal Life","Hi This is My Language","HTML TML ML L"],
  },
  {
    question: "Which of the following tags needs no closing tag?",
    choices: ["br","h1","nav","section"],
  },
  {
    question: "What is the current version of HTML?",
    choices: ["5","2","4","7"],
  },
  {
    question: "When was HTML created?",
    choices: ["1993","1987","2000","1862"],
  },
  {
    question: "Which is an important component of making images accessible?",
    choices: ["alt tags","interesting graphics","diversity","braille support"],
  },
];

// CSS questions
var cssQuiz = [
  {
    question: "What does CSS stand for?",
    choices: ["Cascading Stylesheets","Common Style Selector","Can Style Something","CSS SS S"],
  },
  {
    question: "An article element has a class id of 'foo', which selector will affect this element?",
    choices: [".foo","#foo bar","article .foo","#foo"],
  },
  {
    question: "What is the current version of CSS?",
    choices: ["3","2","4","5"],
  },
  {
    question: "Which line will correctly load 'style.css'?",
    choices: ["<link rel='stylesheet' href='./style.css'>","<link type='text/css' href='./style.css'>","<link src='./style.css'>","<script src='./style.css'>"],
  },
  {
    question: "Which line correctly sets the font color to the user variable '--mycolor'?",
    choices: ["{ color: var(--mycolor); }","{ color: --mycolor; }","{ font-color: var(--mycolor); }","{ font-color: --mycolor; }"],
  },
]

// JS questions
var jsQuiz = [
  {
    question: "Which of the following creates a JS comment?",
    choices: ["//","/*   */","<!--   -->","#"],
  },
  {
    question: "Which of these queries properly refers to the second element of an unordered list with class 'list'?",
    choices: ["document.querySelector('.list').children[1]","document.querySelector('.list li')","document.getElementsByClassName('.list').children[1]","document['.list'].children[2]"],
  },
  {
    question: "What is the difference between 'let' and 'var' when declaring variables?",
    choices: ["'let' indicates a limited block scope while 'var' allows variables to exist after the defining block.","'let' is used to define strings while 'var' is used for numbers'","'let' and 'var' are just personal preference","'var' is used primarily for backwards compatibility"],
  },
  {
    question: "Which type of code structure can be used to create similar functions with different parameters?",
    choices: ["Closures","Constructors","addEventListener(...)",".datasets"],
  },
  {
    question: "Which type of code structure would be best for reading user input until a stop button is pressed?",
    choices: ["while loop","for loop","object","Array.forEach()"],
  },
]

quizzes = {
  HTML: htmlQuiz,
  CSS: cssQuiz,
  JS: jsQuiz,
}
