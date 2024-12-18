// src\javascript\DOM\manipulation.js

import { createApp } from "../components/creations.js";
import { tryWord } from "../helpers/utilities.js";

function setAppHtmlContent() {
  document.querySelector("#app").innerHTML = `
    ${createApp()}
  `;
}

function guess() {
  let base = "dictionnaire";
  let result = tryWord(document.getElementById("word").value, base);

  if (result.wellPlaced.length === base.length) {
    document.getElementById("win").innerText = "Vous avez gagné";
  }

  document.getElementById("try").innerText =
    document.getElementById("word").value;
  document.getElementById("word").value = "";

  document.getElementById("well").innerText =
    "Bien placé: " + result.wellPlaced.join(", ");
  document.getElementById("miss").innerText =
    "Mal placé: " + result.misplaced.join(", ");
  document.getElementById("not").innerText =
    "Pas dans le mot: " + result.notInWord.join(", ");
}

export { setAppHtmlContent, guess };
