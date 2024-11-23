let message = document.querySelector(".message");
let highscore = document.querySelector(".highscore");
let number = document.querySelector(".number");
let again = document.querySelector(".again");
let check = document.querySelector(".check");
let body = document.querySelector("body");

let secretNumber = Number(Math.trunc(Math.random() * 20 + 1));
console.log(secretNumber);
let scoreValue = 20;
let score = document.querySelector(".score");
score.innerText = scoreValue;

check.addEventListener("click", function () {
  let guess = document.querySelector(".guess").value;

  if (secretNumber == guess) {
    message.innerText = "Correct Number";
    body.style.backgroundColor = "green";
    number.innerText = secretNumber;
    highscore.textContent = scoreValue;
  } else if (secretNumber < guess) {
    if (scoreValue < 0) {
      message.innerText = "📈 Too high";
      scoreValue--;
      score.innerText = scoreValue;
    }
  } else if (secretNumber > guess) {
    if (scoreValue > 0) {
      message.innerText = "📉 Too low";
      scoreValue--;
      score.textContent = scoreValue;
    }
  }

  if (highscore < scoreValue) {
    highscore.innerText = scoreValue;
  }
});

again.addEventListener("click", function () {
  score.innerText = 20;
  message.innerText = "Start guessing...";
  body.style.backgroundColor = "#222";
  number.innerText = "?";
});
