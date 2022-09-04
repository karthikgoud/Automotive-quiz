
let readlineSync = require("readline-sync");
const chalk = require("chalk")

// Welcome user message

let userName = readlineSync.question("Enter Player name: ").toUpperCase();
console.log()

console.log("Hello " + chalk.cyanBright.bold(userName) + ", Welcome to " + chalk.blue.bold.underline("Auto Quiz 2022"));
console.log()

console.log("All the best...!!!. Let`s begin.");
console.log()
console.log(chalk.red("Instruction") + " : Type" + chalk.greenBright.bold(" a/b/c/d ") + " to choose answer.")
console.log()
console.log(chalk.red("Points") + ": There is negative one mark for wrong answer. ")
console.log("----------------------------");
console.log()
let score = 0;

// function play logic

function play(question, answer) {
  let userAnswer = readlineSync.question(question).toLowerCase();
  if (userAnswer === answer) {
    console.log(chalk.bgGreenBright.black.italic.bold("You`re right"));
    console.log("")
    score = score + 1;
  } else {
    console.log(chalk.bgRed.white("You`re wrong"));
    console.log("")
    score = score - 1;
    console.log("Right answer is: " + answer);
    console.log("")
  };
  console.log(chalk.bgCyan("Total score =" + score));
  console.log()
  console.log("---------------*******------------");
  console.log()
}

// Highscore present check condition
let highestScore = {
  name: 'Sudeer',
  score: 7
}

// Questions array

let questions = [{
  question: "Which animal features in logo of Lamborghini? \n \n " + 'a:' + " Cat \n " + 'b:' + " Horse \n " + 'c:' + " Bull \n " + 'd:' + " Lion \n",
  answer: "c"
}, {
  question: "What is original color of all Ferrari models? \n \n " + 'a:' + " Blue \n " + 'b:' + " Red \n " + 'c:' + " Black \n " + 'd:' + " White \n",
  answer: "b"
}, {
  question: "How many rings are there is Audi logo? \n \n " + 'a:' + " Three \n " + 'b:' + " Four \n " + 'c:' + " Six \n " + 'd:' + " One \n",
  answer: "b"
}, {
  question: "What is the best-selling electric car in history? \n \n " + 'a:' + " Benz \n " + 'b:' + " Waymo \n " + 'c:' + " Lucid Motors \n " + 'd:' + " Tesla \n",
  answer: "d"
}, {
  question: "What is the oldest car company still in business today? \n \n " + 'a:' + " Benz \n " + 'b:' + " BMW \n " + 'c:' + " TATA \n " + 'd:' + " Hyundai \n",
  answer: "a"
}, {
  question: "What does Volkswagen mean? \n \n " + 'a:' + " Peoples car \n " + 'b:' + " German car \n " + 'c:' + " Worlds car \n " + 'd:' + " Its just a name \n",
  answer: "a"
}, {
  question: "What is the car driven by Mr Bean, the hapless character played by Rowan Atkinson? \n \n " + 'a:' + " Astom martin \n " + 'b:' + " Toyota \n " + 'c:' + " Ford \n " + 'd:' + " Mini \n",
  answer: "d"
}, {
  question: "Who bought Rolls Royce in 1998? \n \n " + 'a:' + " BMW \n " + 'b:' + " Toyota \n " + 'c:' + " Land Rover \n " + 'd:' + " Volkswagen \n",
  answer: "a"
}, {
  question: "Motor City is the nickname for which American city? \n \n " + 'a:' + " Chicago \n " + 'b:' + " Detroit \n " + 'c:' + " Michigan \n " + 'd:' + " Texas \n",
  answer: "b"
}, {
  question: "Who started Ford Motor Company? \n \n " + 'a:' + " Karl Benz \n " + 'b:' + " Clara Jane Ford \n " + 'c:' + " Henry Ford \n " + 'd:' + " None of these \n",
  answer: "c"
}]

// loop list

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log(chalk.bgMagenta.bold("Grand score is : " + score));

// last message
if (score >= 6) {
  console.log("Well done");
  console.log("")
} else {
  console.log("")
  console.log("Thank you.. Play again")
}


// Check highest score
if (score > highestScore.score) {
  console.log('Congratulations ' + chalk.cyanBright.bold(userName) + ', Your are Top scorer. Keep it up.\n Please send screenshot to update the scoreboard.\n')
}

// link to play live 

// https://replit.com/@karthikgoud5/markTwo-Auto-Quiz-portfolio?embed=1&output=1
