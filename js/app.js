/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game = null;

/* add event listener for the start button */
let startButton = document.getElementById("btn__reset");
startButton.addEventListener("click", () => {
    game = new Game()
    game.startGame()
});

/* add event listener for onscreen keyboard buttons */
let keyboardButtonParent = document.getElementById("qwerty");
keyboardButtonParent.addEventListener("click", function (e) {

    /* trigger only when keyboard is clicked */
    if (e.target.innerText.length === 1) {
        game.handleInteraction(e.target)
    }

});
