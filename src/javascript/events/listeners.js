// src\javascript\events\listeners.js

import { handleDOMContentLoading, handleWordSubmission } from "./handlers.js";

function waitForDOMContentLoading() {
  document.addEventListener("DOMContentLoaded", handleDOMContentLoading);
}

function waitForWordSubmission() {
  document
    .querySelector("#container button")
    .addEventListener("click", handleWordSubmission);
}

export { waitForDOMContentLoading, waitForWordSubmission };
