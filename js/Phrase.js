/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {

    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /* display phrase in the gameboard */
    addPhraseToDisplay() {

        /* add letter placeholders to the display when the game starts */
        let phraseArray = this.phrase.split("");
        const phraseBody = document.getElementById("phrase")

        let arrayNew = phraseArray.map(letter => {
            /* hide the phrase if it is a letter and not empty space */
            if (letter !== " ") {
                return `<li class="hide letter ${letter}">${letter}</li>`
            }
            else {
                return `<li class="space"> </li>`
            }
        })

        phraseBody.innerHTML = '<ul>' + arrayNew.join("") + '</ul>';
    }

    /* checks to see if the letter selected by the player matches a letter in the phrase */
    checkLetter(letter) {
        return this.phrase.includes(letter)
    }

    /* reveals the letters on the board matching the player's selection */
    showMatchedLetter(letter) {
        const matchingLetterNodes = document.querySelectorAll(`li.hide.letter.${letter}`)
        for (let node of matchingLetterNodes) {
            node.className = node.className.replace("hide", "show");
        }
    }


}

