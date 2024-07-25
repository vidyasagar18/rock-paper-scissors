const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';

const choices = [ROCK, PAPER, SCISSORS];

const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const playerScoreDisplay = document.getElementById('playerScoreDisplay');
const computerScoreDisplay = document.getElementById('computerScoreDisplay');

let playerScore = 0;
let computerScore = 0;

const playGame = playerChoice => {
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  // console.log(computerChoice);

  if (playerChoice === computerChoice) {
    result = "IT'S A TIE!";
  }
  else {
    switch (playerChoice) {
      case ROCK:
        result = (computerChoice === SCISSORS ? 'YOU WON!' : 'YOU LOST!');
        break;
      case PAPER:
        result = (computerChoice === ROCK ? 'YOU WON!' : 'YOU LOST!');
      case SCISSORS:
        result = (computerChoice === PAPER ? 'YOU WON!' : 'YOU LOST!');
    }
  }

  playerDisplay.textContent = `PLAYER: ${playerChoice}`;
  computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
  resultDisplay.textContent = result;

  switch (result) {
    case 'YOU WON!':
      resultDisplay.classList.add('greenText');
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      break;
    case 'YOU LOST!':
      resultDisplay.classList.add('redText');
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      break;
    case "IT'S A TIE!":
      resultDisplay.classList.remove('greenText', 'redText');
      break;
  }
}