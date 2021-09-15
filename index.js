var readlineSync = require("readline-sync");
const chalk = require("chalk");
var score = 0;

var userName = readlineSync.question("May I have your name? ");
console.log("Welcome " + userName + "!");

var players = [
  { name: "Tanay", score: 4 },
  { name: "Akash", score: 2 },
];

console.log("DO YOU KNOW ROSHAN? Let's see...");

quesarray = [
  {
    question: "Who is my favorite superhero? ",
    answer: "Ironman",
  },
  {
    question: "Which is my favorite sad song? ",
    answer: "Channa Meraya",
  },

  {
    question: "Which day of the month is my birthdate? ",
    answer: "24",
  },

  {
    question: "What is my zodiac sign? ",
    answer: "Libra",
  },
  {
    question: "What is my mother tongue? ",
    answer: "Malayalam",
  },
  {
    question: "Where do i live?",
    answer: "Thane",
  },
];

function askques(quesobj) {
  var useranswer = readlineSync.question(quesobj.question);

  if (useranswer.toLowerCase() === quesobj.answer.toLowerCase()) {
    console.log(chalk.green("right!"));

    score++;
    console.log("-------------------------");
  } else {
    console.log(chalk.red("wrong!"));

    console.log("Correct answer: " + quesobj.answer);

    console.log("-------------------------");
  }

  console.log("Your score: " + score);
}

for (var i = 0; i < quesarray.length; i++) {
  askques(quesarray[i]);
}

players.push({ name: userName, score: score });

console.log("---------------------------------------");

console.log(chalk.blue("Player scores: "));

for (var i = 0; i < players.length; i++) {
  console.log(players[i].name + "'s score:" + chalk.yellow(players[i].score));
}
