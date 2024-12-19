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
    `The word tried is: ${document.getElementById("word-to-check").value}`;
  document.getElementById("word-to-check").value = "";
}

function reportHints(wordTried) {
  document.getElementById("letters-well-placed").innerHTML =
    `The letters placed in the right spots are: ${wordTried.arrayOfLettersPlacedInRightSpot.join(", ")}`;
  document.getElementById("misplaced-letters").innerHTML =
    `The misplaced letters are: ${wordTried.arrayOfMisplacedLetters.join(", ")}`;
  document.getElementById("letters-not-in-word").innerHTML =
    `The letters not in the word to guess are: ${wordTried.arrayOfLettersNotInWordToGuess.join(", ")}`;
}

function guess() {
  let wordToGuess = "dictionnaire";
  let wordTried = tryWord(
    document.getElementById("word-to-check").value,
    wordToGuess,
  );

  if (checkIfUserHasFoundRightWord(wordTried, wordToGuess)) {
    reportVerdict();
  }

  reportWordTriedByUserAndEmptyInputField();
  reportHints(wordTried);
}

export { setAppHtmlContent, guess };
