import { dayIndex, dayString } from "../date.js";
import {
    newDateButtonElement,
    resultElement,
    settingsElement,
} from "../elements.js";
import { stopTimer } from "../timer.js";
import { enable, disable } from "../utils.js";

export const guessElement = document.querySelector("[data-guess]");

guessElement.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.repeat) {
        stopGame();
        event.preventDefault();
    }
});

guessElement.addEventListener("change", () => {
    stopGame();
});

function stopGame() {
    stopTimer();
    enable(newDateButtonElement);
    disable(guessElement);
    enable(settingsElement);
    newDateButtonElement.focus();
    resultElement.textContent = dayIndex() === parseInt(guessElement.value)
        ? "✅"
        : `❌ ${dayString()}`; 
}