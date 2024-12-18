// src\javascript\helpers\utilities.js

function checkIfUserHasFoundRightWord(word, base) {
  return (
    typeof base === "string" &&
    typeof base === typeof word &&
    base.length === word.length &&
    word.toLowerCase() === base.toLowerCase()
  );
}

function identifyWellPlacedLetters(arrayBase, arrayWord, wellPlaced) {
  for (let index = 0; index < arrayBase.length; index++) {
    if (arrayBase[index] === arrayWord[index]) {
      wellPlaced.push(arrayWord[index]);
    }
  }

  return wellPlaced;
}

function identifyMisplacedLetters(base, arrayWord, misplaced, wellPlaced) {
  arrayWord.forEach((letter) => {
    if (!wellPlaced.includes(letter) || base.split(letter).length - 1 > 1) {
      if (base.includes(letter)) {
        misplaced.push(letter);
      }
    }
  });

  return misplaced;
}

function identifyLettersNotInBase(wellPlaced, misplaced, notInWord, arrayWord) {
  arrayWord.forEach((letter) => {
    if (!wellPlaced.includes(letter) && !misplaced.includes(letter)) {
      notInWord.push(letter);
    }
  });

  return notInWord;
}

function tryWord(word, base) {
  let wellPlaced = [];
  let misplaced = [];
  let notInWord = [];

  if (checkIfUserHasFoundRightWord(word, base)) {
    return {
      wellPlaced: word.split(""),
      misplaced,
      notInWord,
    };
  }

  let arrayBase = base.split("");
  let arrayWord = word.split("");

  wellPlaced = identifyWellPlacedLetters(arrayBase, arrayWord, wellPlaced);
  misplaced = identifyMisplacedLetters(base, arrayWord, misplaced, wellPlaced);
  notInWord = identifyLettersNotInBase(
    wellPlaced,
    misplaced,
    notInWord,
    arrayWord,
  );

  return {
    wellPlaced,
    misplaced,
    notInWord,
  };
}

export { tryWord };
