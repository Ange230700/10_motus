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
  arrayOfLettersPlacedInRightSpot,
  wordSubmittedByUser,
  frequencyMap,
  wordToGuess,
) {
  for (let i = 0; i < wordSubmittedByUser.toLowerCase().split("").length; i++) {
    if (
      wordSubmittedByUser.toLowerCase().split("")[i] ===
      wordToGuess.toLowerCase()[i]
    ) {
      arrayOfLettersPlacedInRightSpot.push(
        wordSubmittedByUser.toLowerCase().split("")[i],
      );
      frequencyMap[wordSubmittedByUser.toLowerCase().split("")[i]] =
        frequencyMap[wordSubmittedByUser.toLowerCase().split("")[i]] - 1;
    }
  }

  return arrayOfLettersPlacedInRightSpot;
}

function identifyMisplacedLetters(
  arrayOfMisplacedLetters,
  wordSubmittedByUser,
  frequencyMap,
  wordToGuess,
) {
  console.log(wordSubmittedByUser.toLowerCase().split(""));
  console.log(wordToGuess.toLowerCase());
  for (let i = 0; i < wordSubmittedByUser.toLowerCase().split("").length; i++) {
    if (
      wordSubmittedByUser.toLowerCase().split("")[i] !==
        wordToGuess.toLowerCase()[i] &&
      frequencyMap[wordSubmittedByUser.toLowerCase().split("")[i]] &&
      frequencyMap[wordSubmittedByUser.toLowerCase().split("")[i]] > 0
    ) {
      arrayOfMisplacedLetters.push(
        wordSubmittedByUser.toLowerCase().split("")[i],
      );
      frequencyMap[wordSubmittedByUser.toLowerCase().split("")[i]] =
        frequencyMap[wordSubmittedByUser.toLowerCase().split("")[i]] - 1;
    }
  }

  return arrayOfMisplacedLetters;
}

function identifyLettersNotInBase(
  arrayOfLettersNotInWordToGuess,
  wordSubmittedByUser,
  frequencyMap,
  wordToGuess,
) {
  for (let i = 0; i < wordSubmittedByUser.toLowerCase().split("").length; i++) {
    if (
      wordSubmittedByUser.toLowerCase().split("")[i] !==
        wordToGuess.toLowerCase()[i] &&
      (!frequencyMap[wordSubmittedByUser.toLowerCase().split("")[i]] ||
        frequencyMap[wordSubmittedByUser.toLowerCase().split("")[i]] <= 0)
    ) {
      arrayOfLettersNotInWordToGuess.push(
        wordSubmittedByUser.toLowerCase().split("")[i],
      );
    }
  }

  return arrayOfLettersNotInWordToGuess;
}

function BuildFrequencyMapOfTargetWordLetters(wordToGuess) {
  const frequencyMap = {};
  for (const letter of wordToGuess.toLowerCase()) {
    frequencyMap[letter] = (frequencyMap[letter] || 0) + 1;
  }

  return frequencyMap;
}

function tryWord(wordSubmittedByUser, wordToGuess) {
  if (
    checkIfUserHasFoundRightWord(
      wordSubmittedByUser.toLowerCase(),
      wordToGuess.toLowerCase(),
    )
  ) {
    return {
      arrayOfLettersPlacedInRightSpot: wordSubmittedByUser
        .toLowerCase()
        .split(""),
      arrayOfMisplacedLetters: [],
      arrayOfLettersNotInWordToGuess: [],
    };
  }

  const frequencyMap = BuildFrequencyMapOfTargetWordLetters(wordToGuess);
  console.log(frequencyMap);

  let arrayOfLettersPlacedInRightSpot = [];
  let arrayOfMisplacedLetters = [];
  let arrayOfLettersNotInWordToGuess = [];

  arrayOfLettersPlacedInRightSpot = identifyWellPlacedLetters(
    arrayOfLettersPlacedInRightSpot,
    wordSubmittedByUser,
    frequencyMap,
    wordToGuess,
  );
  arrayOfMisplacedLetters = identifyMisplacedLetters(
    arrayOfMisplacedLetters,
    wordSubmittedByUser,
    frequencyMap,
    wordToGuess,
  );
  arrayOfLettersNotInWordToGuess = identifyLettersNotInBase(
    arrayOfLettersNotInWordToGuess,
    wordSubmittedByUser,
    frequencyMap,
    wordToGuess,
  );

  return {
    arrayOfLettersPlacedInRightSpot,
    arrayOfMisplacedLetters,
    arrayOfLettersNotInWordToGuess,
  };
}

export { tryWord, checkIfUserHasFoundRightWord };
