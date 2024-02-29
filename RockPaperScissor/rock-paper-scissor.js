let score = JSON.parse(localStorage.getItem("score")) || {
  win: 0,
  lose: 0,
  tie: 0,
};

updateScoreElement();

function playGame(playerChoice) {
  const computerMove = pickComputerMove();
  let result = "";
  if (playerChoice === "rock") {
    if (computerMove === "rock") {
      result = "Tie";
    } else if (computerMove === "paper") {
      result = "You lose!";
    } else if (computerMove === "scissors") {
      result = "You win!";
    }
  } else if (playerChoice === "paper") {
    if (computerMove === "rock") {
      result = "You win!";
    } else if (computerMove === "paper") {
      result = "Tie";
    } else if (computerMove === "scissors") {
      result = "You lose!";
    }
  } else if (playerChoice === "scissors") {
    if (computerMove === "rock") {
      result = "You lose!";
    } else if (computerMove === "paper") {
      result = "You win!";
    } else if (computerMove === "scissors") {
      result = "Tie";
    }
  }

  if (result === "You win!") {
    score.win += 1;
  } else if (result === "You lose!") {
    score.lose += 1;
  } else if (result === "Tie") {
    score.tie += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  document.querySelector(".js-result").innerHTML = result;

  document.querySelector(
    ".js-move"
  ).innerHTML = `You <img src="./Images/${playerChoice}-emoji.png"> 
      <img src="./Images/${computerMove}-emoji.png"> Computer`;

  updateScoreElement();
}
function pickComputerMove() {
  let randomNumber = Math.random();
  let computerMove = "";

  if (randomNumber >= 0.0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }
  return computerMove;
}

function updateScoreElement() {
  document.querySelector(
    ".js-scoreElement"
  ).innerHTML = `Wins: ${score.win}, Losses: ${score.lose}, Ties: ${score.tie}`;
}
