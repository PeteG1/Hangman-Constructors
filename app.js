var fs = require('file-system');
var Word = require('./word.js');
var Letter = require('./letter.js');
var inquirer = require('inquirer');

var lettersOfTheWord = [];
var matchedLetters = [];
var guessedLetters = [];
var guessesLeft = 10;
var totalGuesses = 0;

var questions = [
  {
    type: 'input',
    name: 'letter',
    message: "Guess a letter!"
  },
];

inquirer.prompt(questions).then(answers => {
  console.log(JSON.stringify(answers.letter, null, '  '));
});
