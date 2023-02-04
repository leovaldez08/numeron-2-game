// Iteration 1: Making the play button in the index.html functional.
// Description: When the play button is clicked the game.html page should be opened.

document.getElementById("play-button").addEventListener("click", () => {
    location.href = "./gameplay/game.html"
});

