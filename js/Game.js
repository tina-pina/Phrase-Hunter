/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase("test A"),
            new Phrase("test B"),
            new Phrase("test C"),
            new Phrase("test D"),
            new Phrase("test E")
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
        }
        else {
            letterDom.className += " wrong";
            this.removeLife()
        }
    }

    removeLife() {
        console.log("test")
    }

    checkForWin() {

    }

    gameOver() {

    }

}