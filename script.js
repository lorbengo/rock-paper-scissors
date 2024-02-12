const player = 'ROCK';
const computer = getComputerChoice();

console.log(playRound(player, computer));

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
    return `You Win! ${capitalize(ps)} beats ${capitalize(cs)}`;
  } else {
    return `You Lose! ${capitalize(cs)} beats ${capitalize(ps)}`;
  }
}

function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randNum = Math.floor(Math.random() * 3);
  return choices[randNum];
}

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
