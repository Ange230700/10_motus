// src\javascript\events\handlers.js

import { setAppHtmlContent, guess } from "../DOM/manipulation.js";
import { waitForWordSubmission } from "./listeners.js";

const handleDOMContentLoading = () => {
  setAppHtmlContent();
  waitForWordSubmission();
};

const handleWordSubmission = () => {
  guess();
};

export { handleDOMContentLoading, handleWordSubmission };
