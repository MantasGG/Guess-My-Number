"use strict";

var score = 20;
var highscore = 0;
var guessed = false;

var secretnumber = Math.trunc(Math.random(20) * 20 + 1);
console.log(secretnumber);

var a = document.querySelector(".guess").value;

document.querySelector(".check").addEventListener("click", function () {
  var a = document.querySelector(".guess").value;
  console.log(a);
  check(a);
});

function check(a) {
  if (secretnumber != a && !guessed) {
    score--;
    if (score >= 0) document.querySelector(".score").textContent = score;
    if (score <= 0) {
      document.querySelector(".message").textContent = "💥 You lost the game!";
    } else if (a > secretnumber) {
      document.querySelector(".message").textContent = "📈 Too high!";
    } else {
      document.querySelector(".message").textContent = "📉 Too low!";
    }
  } else {
    if (highscore < score) {
      guessed = true;
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    if (score > 0) {
      document.querySelector(".message").textContent = "🎉 Correct Number!";
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").textContent = secretnumber;
      document.querySelector(".number").style.width = "30rem";
    }
  }
}

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretnumber = Math.trunc(Math.random(20) * 20 + 1);
  guessed = false;

  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
