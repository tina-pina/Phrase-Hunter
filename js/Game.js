/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


class Game {

    constructor() {
        /* number of wrong guesses */
        this.missed = 0;
        this.phrases = [
            new Phrase("Great"),
            new Phrase("Superstar"),
            new Phrase("Hello"),
            new Phrase("How are you"),
            new Phrase("Good morning")
        ];
        /* Phrase object that’s currently in play */
        this.activePhrase = null;
    }

    /* triggers when game starts */
    startGame() {
        /* hide overlay when start game */
        document.getElementById("overlay").style.visibility = "hidden"
        /* get a random phrase for the game from the phrases array */
        const randomPhrase = this.getRandomPhrase();
        this.activePhrase = randomPhrase;
        /* add letter placeholders to the active phrase */
        this.activePhrase.addPhraseToDisplay();
    }

    /* select a random phrase from the phrases array */
    getRandomPhrase() {
        const randomIndex = Math.floor(Math.random() * 5);
        return this.phrases[randomIndex];
    }

    /* decide next action based on user input */
    handleInteraction(letterDom) {

        /* disable the key already clicked */
        letterDom.disabled = true;

        /* check if button clicked by player matches a letter in the phrase */
        const phrase = this.activePhrase;

        /* when matches */
        if (phrase.checkLetter(letterDom.innerText)) {
            letterDom.className += " chosen";
            phrase.showMatchedLetter(letterDom.innerText)
            if (this.checkForWin()) {
                this.gameOver()
            }
        }

        /* when does NOT match  */
        else {
            letterDom.className += " wrong";
            this.removeLife();
        }
    }

    /* triggers when incorrect guess */
    removeLife() {
        const heartImgs = document.querySelectorAll(".tries img")
        heartImgs[this.missed].src = heartImgs[this.missed].src.replace("liveHeart.png", "lostHeart.png")
        /* increment lostHeart by 1 */
        this.missed += 1;
        if (this.missed === 5) {
            console.log("lost")
            this.gameOver()
        }
    }

    /* check if game is won */
    checkForWin() {
        const numberHiddenLettersNodes = document.querySelectorAll(".hide")
        /* if game is won */
        return this.missed < 5 && numberHiddenLettersNodes.length === 0;
    }

    /* game is over */
    gameOver() {
        /* show the overlay again */
        const overlay = document.getElementById("overlay")
        overlay.style.visibility = "visible";
        /* when lost show message */
        if (this.missed === 5) {
            document.getElementById("game-over-message").innerHTML = "You lost, try again!";
            overlay.className = overlay.className.replace("start", "lose")
        }
        /* when won show message */
        else {
            document.getElementById("game-over-message").innerHTML = "You won!";
            overlay.className = overlay.className.replace("start", "win")
        }
        /* After a game is completed, the gameboard needs to be reset */
        /* Remove all li elements from the Phrase ul */
        document.querySelector("#phrase ul").innerHTML = '';

        /* Enable all of the onscreen keyboard buttons and update each */
        const boardButtonUpdate = document.querySelectorAll(".key");
        for (let button of boardButtonUpdate) {
            button.className = "key";
            button.disabled = false;
        }

        /* Reset all of the heart images and display the liveHeart.png image */
        const heartImgs = document.querySelectorAll(".tries img")
        for (let img of heartImgs) {
            img.src = "images/liveHeart.png"
        }
        /* reset the lost lives to 0 */
        this.missed = 0;
    }

}