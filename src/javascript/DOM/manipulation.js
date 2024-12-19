// src\javascript\DOM\manipulation.js

import { createApp } from "../components/creations.js";
import { checkIfUserHasFoundRightWord, tryWord } from "../helpers/utilities.js";

function setAppHtmlContent() {
  document.querySelector("#app").innerHTML = `
    ${createApp()}
  `;
}

function reportVerdict() {
  document.getElementById("verdict").innerHTML = "You won!";
}

function reportWordTriedByUserAndEmptyInputField() {
  document.getElementById("word-tried").innerHTML =
    `The word tried is: <strong>${document.getElementById("word-to-check").value}</strong>`;
  document.getElementById("word-to-check").value = "";
}

function reportHints(wordTried) {
  document.getElementById("letters-well-placed").innerHTML =
    `The letters placed in the right spots are: <strong>${wordTried.arrayOfLettersPlacedInRightSpot.join(", ")}</strong>`;
  document.getElementById("misplaced-letters").innerHTML =
    `The misplaced letters are: <strong>${wordTried.arrayOfMisplacedLetters.join(", ")}</strong>`;
  document.getElementById("letters-not-in-word").innerHTML =
    `The letters not in the word to guess are: <strong>${wordTried.arrayOfLettersNotInWordToGuess.join(", ")}</strong>`;
}

function showHintsSection() {
  document.getElementById("hints").style.display = "block";
}

function showResultSection() {
  document.getElementById("result").style.display = "block";
}

function guess() {
  let wordToGuess = "dictionnaire";
  let wordTried = tryWord(
    document.getElementById("word-to-check").value,
    wordToGuess,
  );

  if (
    checkIfUserHasFoundRightWord(
      document.getElementById("word-to-check").value,
      wordToGuess,
    )
  ) {
    showResultSection();
    reportVerdict();
  }

  showHintsSection();
  reportWordTriedByUserAndEmptyInputField();
  reportHints(wordTried);
}

export { setAppHtmlContent, guess };
