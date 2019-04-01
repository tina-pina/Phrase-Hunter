/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game = new Game();


let startButton = document.getElementById("btn__reset");
startButton.addEventListener("click", () => { game.startGame() });
let keyboardButtonParent = document.getElementById("qwerty");
keyboardButtonParent.addEventListener("click", function (e) {
    if (e.target.innerText.length === 1) {
        game.handleInteraction(e.target)
    }
});
