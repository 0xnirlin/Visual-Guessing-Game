
let randomNumber = Math.floor(Math.random() * 100) + 1;
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");
const lastguesses = document.querySelector(".lastguesses");
const high = document.querySelector(".high");
const low = document.querySelector(".low");
const correct = document.querySelector(".correct");
let guessCount = 0;
let resetButton;
function checkGuess() {
  let userGuess = Number(guessField.value);

  if (guessCount == 0) {
    lastguesses.textContent = "Last Guesses: ";
  }
  lastguesses.textContent += userGuess + " ";

  if (guessCount == 11) {
    lastguesses.textContent = "Game Over! You Took More Than 10 Turns";
    lastguesses.style.backgroundColor = "red";
    Gameover();
  }

  if (userGuess === randomNumber) {
    high.style.backgroundColor = "white";
    correct.style.backgroundColor = "#76DC52";
    low.style.backgroundColor = "white";

    guessField.value = "";
    Gameover();
  } else if (userGuess > randomNumber) {
    high.style.backgroundColor = "#E72828";
    correct.style.backgroundColor = "white";
    low.style.backgroundColor = "white";

    guessField.value = "";
  } else if (userGuess < randomNumber) {
    low.style.backgroundColor = "#F9C540";
    correct.style.backgroundColor = "white";
    high.style.backgroundColor = "white";

    guessField.value = "";
    guessField.focus();
    guessCount++;
  }
}
guessSubmit.addEventListener("click", checkGuess);

function Gameover() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game";
  document.getElementById("addbutton").appendChild(resetButton);
  resetButton.addEventListener("click", resetGame);
}

function resetGame() {
  guessCount = 0;
  resetButton.parentNode.removeChild(resetButton);
  correct.style.backgroundColor = "white";

  guessField.disabled = false;
  guessSubmit.disabled = false;
  lastguesses.textContent = "";
  guessField.focus();
  randomNumber = Math.floor(Math.random() * 100) + 1;
}
