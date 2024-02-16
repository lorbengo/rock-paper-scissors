const score = document.getElementById("score");
const display = document.getElementById("display");
const newGameButton = document.querySelector(".new-game");
const playerSelection = document.getElementById("player-selection");
const rock = playerSelection.firstElementChild;
const paper = rock.nextElementSibling;
const scissors = playerSelection.lastElementChild;
let playerScore = 0;
let computerScore = 0;

updateScore();

playerSelection.addEventListener("click", playGame);
playerSelection.addEventListener("keydown", moveFocus);
newGameButton.addEventListener("click", newGame);

function playGame(event) {
  const playerChoice = event.target.id;
  if (display.classList.contains("hidden")) {
    display.classList.remove("hidden");
  }
  playRound(playerChoice, getComputerChoice());
  if (playerScore === 5 || computerScore === 5) {
    if (playerScore === 5) {
      display.innerHTML =
        "<p>Game Over!</p><p>The Winner is Player! 🎉🥳👏</p>";
    } else {
      display.innerHTML =
        "<p>Game Over!</p><p>The Winner is... Computer! 🤦‍♂️🤦🤦‍♀️🙈</p>";
    }
    disablePlayerSelectionButtons();
    newGameButton.classList.toggle("new-game");
  }
}

function moveFocus(event) {
  if (event.key === "ArrowRight" || event.key === "ArrowUp") {
    if (event.target.id === "rock") {
      paper.focus();
    } else if (event.target.id === "paper") {
      scissors.focus();
    } else if (event.target.id === "scissors") {
      rock.focus();
    }
  } else if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
    if (event.target.id === "scissors") {
      paper.focus();
    } else if (event.target.id === "paper") {
      rock.focus();
    } else if (event.target.id === "rock") {
      scissors.focus();
    }
  }
}

function newGame() {
  newGameButton.classList.add("new-game");
  display.textContent = "";
  display.classList.add("hidden");
  playerScore = 0;
  computerScore = 0;
  updateScore();
  enablePlayerSelectionButtons();
}

function updateScore() {
  score.firstElementChild.textContent = playerScore;
  score.lastElementChild.textContent = computerScore;
}

function playRound(player, computer) {
  if (player === computer) {
    display.textContent = "Tie!";
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    playerScore++;
    display.textContent = `You Win! ${capitalize(player)} beats ${capitalize(
      computer,
    )}`;
  } else {
    computerScore++;
    display.textContent = `You Lose! ${capitalize(computer)} beats ${capitalize(
      player,
    )}`;
  }
  updateScore();
}

function disablePlayerSelectionButtons() {
  for (let item of playerSelection.children) {
    item.disabled = true;
  }
}

function enablePlayerSelectionButtons() {
  for (let item of playerSelection.children) {
    item.disabled = false;
  }
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randNum = Math.floor(Math.random() * 3);
  return choices[randNum];
}

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}
