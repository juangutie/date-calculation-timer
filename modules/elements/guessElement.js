import { date } from "../date.js";
import {
    newDateButtonElement,
    settingsElement,
    resultElement,
} from "../elements.js";
import { timer } from "../timer.js";
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
    timer.stop();
    enable(newDateButtonElement);
    disable(guessElement);
    enable(settingsElement);
    newDateButtonElement.focus();
    resultElement.textContent = date.day() === parseInt(guessElement.value)
        ? "✅"
        : `❌ ${date.dayString()}`; 
}