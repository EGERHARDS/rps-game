const buttons = document.querySelectorAll("button");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const lose = document.querySelector("#lose");
const win = document.querySelector("#win");
const draw = document.querySelector("#draw");

buttons.forEach(button => {
  button.addEventListener("click", e => {
    const player1Choice = e.target.className;
    const player2Choice = getComputerChoice();
    player1.className = `player ${player1Choice}`;
    player2.className = `player ${player2Choice}`;

    const result = getResult(player1Choice, player2Choice);
    hideAll();
    if (result === "win") {
      win.classList.remove("hidden");
    } else if (result === "lose") {
      lose.classList.remove("hidden");
    } else {
      draw.classList.remove("hidden");
    }
  });
});

function hideAll() {
  lose.classList.add("hidden");
  win.classList.add("hidden");
  draw.classList.add("hidden");
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function getResult(player1Choice, player2Choice) {
  if (player1Choice === player2Choice) {
    return "draw";
  } else if (
    (player1Choice === "rock" && player2Choice === "scissors") ||
    (player1Choice === "paper" && player2Choice === "rock") ||
    (player1Choice === "scissors" && player2Choice === "paper")
  ) {
    return "win";
  } else {
    return "lose";
  }
}
