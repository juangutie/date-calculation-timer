import {
    newDateButtonElement,
    resultElement,
    settingsElement,
} from "elements";
import {
    disableControl,
    enableControl,
    getDayIndex,
    getDayString,
    stopTimer,
} from "utils";

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
    enableControl(newDateButtonElement);
    disableControl(guessElement);
    enableControl(settingsElement);
    newDateButtonElement.focus();
    resultElement.textContent = getDayIndex() === parseInt(guessElement.value)
        ? "✅"
        : `❌ ${getDayString()}`; 
}