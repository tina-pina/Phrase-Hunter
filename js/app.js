/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/* Create a new instance of the Game class */
let game = new Game();

/* add event listener for the start button */
let startButton = document.getElementById("btn__reset");
startButton.addEventListener("click", () => { game.startGame() });

/* add event listener for onscreen keyboard buttons */
let keyboardButtonParent = document.getElementById("qwerty");
keyboardButtonParent.addEventListener("click", function (e) {

    /* trigger only when keyboard is clicked */
    if (e.target.innerText.length === 1) {
        game.handleInteraction(e.target)
    }

});
