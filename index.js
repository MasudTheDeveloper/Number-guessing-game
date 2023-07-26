const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const userGuessElement = document.getElementById("userGuess");
  const messageElement = document.getElementById("message");

  const userGuess = parseInt(userGuessElement.value);
  attempts++;

  if (userGuess === secretNumber) {
    messageElement.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
    messageElement.style.color = "green";
    userGuessElement.disabled = true;
  } else if (userGuess < secretNumber) {
    messageElement.textContent = "Try again! The secret number is higher.";
    messageElement.style.color = "red";
  } else {
    messageElement.textContent = "Try again! The secret number is lower.";
    messageElement.style.color = "red";
  }

  userGuessElement.value = "";
}
