// src\javascript\helpers\utilities.js

function checkIfUserHasFoundRightWord(wordSubmittedByUser, wordToGuess) {
  return (
    typeof wordToGuess === "string" &&
    typeof wordToGuess === typeof wordSubmittedByUser &&
    wordToGuess.length === wordSubmittedByUser.length &&
    wordSubmittedByUser.toLowerCase() === wordToGuess.toLowerCase()
  );
}

function identifyWellPlacedLetters(
  arrayOfLettersInWordToGuess,
  arrayOfLettersInSubmittedWord,
  arrayOfLettersPlacedInRightSpot,
) {
  for (
    let letterPosition = 0;
    letterPosition < arrayOfLettersInWordToGuess.length;
    letterPosition++
  ) {
    if (
      arrayOfLettersInWordToGuess[letterPosition] ===
      arrayOfLettersInSubmittedWord[letterPosition]
    ) {
      arrayOfLettersPlacedInRightSpot.push(
        arrayOfLettersInSubmittedWord[letterPosition],
      );
    }
  }

  return arrayOfLettersPlacedInRightSpot;
}

function identifyMisplacedLetters(
  wordToGuess,
  arrayOfLettersInSubmittedWord,
  arrayOfMisplacedLetters,
  arrayOfLettersPlacedInRightSpot,
) {
  arrayOfLettersInSubmittedWord.forEach((letter) => {
    if (
      !arrayOfLettersPlacedInRightSpot.includes(letter) ||
      wordToGuess.split(letter).length - 1 > 1
    ) {
      if (wordToGuess.includes(letter)) {
        arrayOfMisplacedLetters.push(letter);
      }
    }
  });

  return arrayOfMisplacedLetters;
}

function identifyLettersNotInBase(
  arrayOfLettersPlacedInRightSpot,
  arrayOfMisplacedLetters,
  arrayOfLettersNotInWordToGuess,
  arrayOfLettersInSubmittedWord,
) {
  arrayOfLettersInSubmittedWord.forEach((letter) => {
    if (
      !arrayOfLettersPlacedInRightSpot.includes(letter) &&
      !arrayOfMisplacedLetters.includes(letter)
    ) {
      arrayOfLettersNotInWordToGuess.push(letter);
    }
  });

  return arrayOfLettersNotInWordToGuess;
}

function tryWord(wordSubmittedByUser, wordToGuess) {
  let arrayOfLettersPlacedInRightSpot = [];
  let arrayOfMisplacedLetters = [];
  let arrayOfLettersNotInWordToGuess = [];

  if (checkIfUserHasFoundRightWord(wordSubmittedByUser, wordToGuess)) {
    return {
      arrayOfLettersPlacedInRightSpot: wordSubmittedByUser.split(""),
      arrayOfMisplacedLetters,
      arrayOfLettersNotInWordToGuess,
    };
  }

  let arrayOfLettersInWordToGuess = wordToGuess.split("");
  let arrayOfLettersInSubmittedWord = wordSubmittedByUser.split("");

  arrayOfLettersPlacedInRightSpot = identifyWellPlacedLetters(
    arrayOfLettersInWordToGuess,
    arrayOfLettersInSubmittedWord,
    arrayOfLettersPlacedInRightSpot,
  );
  arrayOfMisplacedLetters = identifyMisplacedLetters(
    wordToGuess,
    arrayOfLettersInSubmittedWord,
    arrayOfMisplacedLetters,
    arrayOfLettersPlacedInRightSpot,
  );
  arrayOfLettersNotInWordToGuess = identifyLettersNotInBase(
    arrayOfLettersPlacedInRightSpot,
    arrayOfMisplacedLetters,
    arrayOfLettersNotInWordToGuess,
    arrayOfLettersInSubmittedWord,
  );

  return {
    arrayOfLettersPlacedInRightSpot,
    arrayOfMisplacedLetters,
    arrayOfLettersNotInWordToGuess,
  };
}

export { tryWord, checkIfUserHasFoundRightWord };
