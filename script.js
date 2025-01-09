let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  displayResult(playerChoice, computerChoice);
}

function cheat() {
  const choices = ['rock', 'paper', 'scissors'];

  // Cheat: Always pick the winning move
  const playerChoice = 'rock'; // Default (can be anything; it will always win)
  let computerChoice;

  if (playerChoice === 'rock') {
    computerChoice = 'scissors';
  } else if (playerChoice === 'paper') {
    computerChoice = 'rock';
  } else if (playerChoice === 'scissors') {
    computerChoice = 'paper';
  }

  displayResult(playerChoice, computerChoice);
}

function displayResult(playerChoice, computerChoice) {
  const resultDisplay = document.getElementById('result');
  let result = '';

  if (playerChoice === computerChoice) {
    result = `It's a tie! You both chose ${playerChoice}`;
    resultDisplay.className = 'result tie';
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = `You win! ${playerChoice} beats ${computerChoice}`;
    resultDisplay.className = 'result win';
    playerScore++;
  } else {
    result = `You lose! ${computerChoice} beats ${playerChoice}`;
    resultDisplay.className = 'result lose';
    computerScore++;
  }

  // Update the result text
  resultDisplay.textContent = result;

  // Update the scoreboard
  document.getElementById('playerScore').textContent = playerScore;
  document.getElementById('computerScore').textContent = computerScore;
}
