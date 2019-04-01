/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {

        let phraseArray = this.phrase.split("");
        let phraseBody = document.getElementById("phrase")
        let arrayNew = phraseArray.map(letter => {
            if (letter !== " ") {
                return `<li class="hide letter ${letter}">${letter}</li>`
            }
            else {
                return `<li class="space"> </li>`
            }
        })
        phraseBody.innerHTML = '<ul>' + arrayNew.join("") + '</ul>';
    }

    checkLetter(letter) {
        //checks to see if the letter selected by the player matches a letter in the phrase
        return this.phrase.includes(letter)
    }

    showMatchedLetter(letter) {
        let matchingLetterNodes = document.querySelectorAll(`li.hide.letter.${letter}`)
        console.log(matchingLetterNodes);
        for (let node of matchingLetterNodes) {
            node.className = node.className.replace("hide", "show");
        }
    }


}

