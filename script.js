let playerScore = 0;
let computerScore = 0;

playGame();

function playGame() {
  for (let round = 1; round <= 5; round++) {
    const player = prompt(`Round ${round}: Please enter ROCK, PAPER, or SCISSORS`);
    const computer = getComputerChoice();
    console.log(playRound(player, computer));
  }
  if (playerScore > computerScore) {
    console.log('The Winner is Player!');
  } else if (playerScore < computerScore) {
    console.log('The Winner is Computer!');
  } else {
    console.log('Tie!');
  }
}

function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randNum = Math.floor(Math.random() * 3);
  return choices[randNum];
}

function playRound(playerSelection, computerSelection) {
  const ps = playerSelection.toLowerCase();
  const cs = computerSelection.toLowerCase();
  if (ps === cs) {
    return 'Tie!'
  } else if (
    ps === 'rock' && cs === 'scissors' ||
    ps === 'paper' && cs === 'rock' ||
    ps === 'scissors' && cs === 'paper'
  ) {
    playerScore++;
    return `You Win! ${capitalize(ps)} beats ${capitalize(cs)}`;
  } else {
    computerScore++;
    return `You Lose! ${capitalize(cs)} beats ${capitalize(ps)}`;
  }
}

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
