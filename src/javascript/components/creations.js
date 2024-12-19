// src\javascript\components\creations.js

function createApp() {
  return `
    <section id="word-submission">
      <h2>Word Submission</h2>
      <input id="word-to-check" />
      <button type="button">Try</button>
    </section>
    <section id="hints">
      <h2>Hints</h2>
      <p id="word-tried"></p>
      <p id="letters-well-placed"></p>
      <p id="misplaced-letters"></p>
      <p id="letters-not-in-word"></p>
    </section>
    <section id="result">
      <h1>Result</h1>
      <h2 id="verdict"></h2>
    </section>
  `;
}

export { createApp };
