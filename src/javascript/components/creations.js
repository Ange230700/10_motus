// src\javascript\components\creations.js

function createApp() {
  return `
    <section id="container">
      <input id="word" />
      <button type="button" onclick="guess()">Ok</button>
    </section>
    <p id="try"></p>
    <p id="well"></p>
    <p id="miss"></p>
    <p id="not"></p>
    <p id="win"></p>
  `;
}

export { createApp };
