
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
    question: "Which of the following tags needs no closing tag?",
    choices: ["br","h1","nav","section"],
    answer: "br",
  },
  {
    question: "What is the current version of HTML?",
    choices: ["5","2","4","7"],
    answer: "5",
  },
  {
    question: "When was HTML created?",
    choices: ["1993","1987","2000","1862"],
    answer: "1993",
  },
  {
    question: "Which is an important component of making images accessible?",
    choices: ["alt tags","interesting graphics","diversity","braille support"],
    answer: "alt tags",
  },
]

// JS questions
var jsQuiz = [
  {
    question: "What does HTML stand for?",
    choices: ["HyperText Markup Language","High Toughness Metal Life","Hi This is My Language","HTML TML ML L"],
    answer: "HyperText Markup Language",
  },
  {
    question: "Which of the following tags needs no closing tag?",
    choices: ["br","h1","nav","section"],
    answer: "br",
  },
  {
    question: "What is the current version of HTML?",
    choices: ["5","2","4","7"],
    answer: "5",
  },
  {
    question: "When was HTML created?",
    choices: ["1993","1987","2000","1862"],
    answer: "1993",
  },
  {
    question: "Which is an important component of making images accessible?",
    choices: ["alt tags","interesting graphics","diversity","braille support"],
    answer: "alt tags",
  },
]

// meme quiz
var memeQuiz = [
  {
    question: "What does HTML stand for?",
    choices: ["HyperText Markup Language","High Toughness Metal Life","Hi This is My Language","HTML TML ML L"],
    answer: "HyperText Markup Language",
  },
  {
    question: "Which of the following tags needs no closing tag?",
    choices: ["br","h1","nav","section"],
    answer: "br",
  },
  {
    question: "What is the current version of HTML?",
    choices: ["5","2","4","7"],
    answer: "5",
  },
  {
    question: "When was HTML created?",
    choices: ["1993","1987","2000","1862"],
    answer: "1993",
  },
  {
    question: "Which is an important component of making images accessible?",
    choices: ["alt tags","interesting graphics","diversity","braille support"],
    answer: "alt tags",
  },
]



quizzes = {
  HTML: htmlQuiz,
  CSS: cssQuiz,
  JS: jsQuiz,
  Memes: memeQuiz
}
