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
      <h2>Result</h2>
      <h3 id="verdict"></h3>
    </section>
  `;
}

export { createApp };
