let score = JSON.parse(localStorage.getItem("score")) || {
  win: 0,
  lose: 0,
  tie: 0,
};

updateScoreElement();

const conformReset = document.querySelector(".js-conform-msg");

document.querySelector(".js-reset-btn").addEventListener("click", () => {
  conformReset.innerHTML = `Are you sure you want to reset the score?<button class="js-yesBtn btn">Yes</button><button class="js-NoBtn btn">No</button>`;
  document.querySelector(".js-yesBtn").addEventListener("click", () => {
    score.win = 0;
    score.lose = 0;
    score.tie = 0;
    localStorage.removeItem("score");
    updateScoreElement();
    conformReset.innerHTML = "";
  });
  document.querySelector(".js-NoBtn").addEventListener("click", () => {
    conformReset.innerHTML = "";
  });
});

// document.querySelector(".js-reset-btn").addEventListener("click", () => {
//   score.win = 0;
//   score.lose = 0;
//   score.tie = 0;
//   localStorage.removeItem("score");
//   updateScoreElement();
// });

document.body.addEventListener("keydown", (event) => {
  if (event.key === "Backspace") {
    score.win = 0;
    score.lose = 0;
    score.tie = 0;
    localStorage.removeItem("score");
    updateScoreElement();
  }
});

document.querySelector(".js-auto-play-btn").addEventListener("click", () => {
  autoPlay();
});

const autoPlayBtn = document.querySelector(".js-auto-play-btn");

let isAutoPlaying = false;
let intervalId;

document.body.addEventListener("keydown", (event) => {
  if (event.key === "a") {
    autoPlay();
  }
});

function autoPlay() {
  if (autoPlayBtn.textContent === "Auto Play") {
    autoPlayBtn.textContent = "Stop Playing";
  } else {
    autoPlayBtn.textContent = "Auto Play";
  }

  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 2000);

    isAutoPlaying = true;
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}

document.querySelector(".js-rock-btn").addEventListener("click", () => {
  playGame("rock");
});

document.querySelector(".js-paper-btn").addEventListener("click", () => {
  playGame("paper");
});

document.querySelector(".js-scissor-btn").addEventListener("click", () => {
  playGame("scissors");
});

document.body.addEventListener("keydown", (event) => {
  if (event.key === "r") {
    playGame("rock");
  } else if (event.key === "p") {
    playGame("paper");
  } else if (event.key === "s") {
    playGame("scissors");
  }
});

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
