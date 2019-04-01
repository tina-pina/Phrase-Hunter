/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase("Great"),
            new Phrase("Superstar"),
            new Phrase("Hello"),
            new Phrase("How are you"),
            new Phrase("Good morning")
        ];
        this.activePhrase = null;

    }

    startGame() {
        /* remove overlay when start game */
        document.getElementById("overlay").style.visibility = "hidden"
        /* get a random phrase for the game */
        let randomPhrase = this.getRandomPhrase();
        this.activePhrase = randomPhrase;
        this.activePhrase.addPhraseToDisplay();

    }

    getRandomPhrase() {
        let randomIndex = Math.floor(Math.random() * 5);
        return this.phrases[randomIndex];
    }

    handleInteraction(letterDom) {

        letterDom.disabled = true;
        let phrase = this.activePhrase;

        if (phrase.checkLetter(letterDom.innerText)) {
            letterDom.className += " chosen";
            phrase.showMatchedLetter(letterDom.innerText)
            if (this.checkForWin()) {
                this.gameOver()
            }
        }
        else {
            letterDom.className += " wrong";
            this.removeLife();
        }
    }

    removeLife() {
        let heartImgs = document.querySelectorAll(".tries img")
        heartImgs[this.missed].src = heartImgs[this.missed].src.replace("liveHeart.png", "lostHeart.png")
        this.missed += 1;
        if (this.missed === 5) {
            console.log("lost")
            this.gameOver()
        }
    }

    checkForWin() {
        let numberHiddenLettersNodes = document.querySelectorAll(".hide")
        /* if game is won */
        console.log("won")
        return this.missed < 5 && numberHiddenLettersNodes.length === 0;
    }

    gameOver() {
        console.log("game over")
        let overlay = document.getElementById("overlay")
        overlay.style.visibility = "visible";
        if (this.missed === 5) {
            document.getElementById("game-over-message").innerHTML = "You lost, try again!";
            overlay.className = overlay.className.replace("start", "lose")
        }
        else {
            document.getElementById("game-over-message").innerHTML = "You won!";
            overlay.className = overlay.className.replace("start", "win")
        }
        /* After a game is completed, the gameboard needs to be reset */
        /* Remove all li elements from the Phrase ul */
        document.querySelector("#phrase ul").innerHTML = '';
        let boardButtonUpdate = document.querySelectorAll(".key");
        for (let button of boardButtonUpdate) {
            button.className = "key";
            button.disabled = false;
        }
        let heartImgs = document.querySelectorAll(".tries img")
        for (let img of heartImgs) {
            img.src = "images/liveHeart.png"
        }
        this.missed = 0;
    }

}