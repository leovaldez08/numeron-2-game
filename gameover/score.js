// Iteration 8: Making scoreboard functional
let score = localStorage.getItem("score");
const playAgain = document.getElementById("play-again-button");
var scoreBoard = document.getElementById("score-board");
scoreBoard.innerText = score;

playAgain.onclick = () => {
    location.href = "../gameplay/game.html"
}

