import {
    newDateButtonElement,
    resultElement,
    settingsElement,
} from "elements";
import {
    dayIndex,
    dayString,
    disable,
    enable,
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
    enable(newDateButtonElement);
    disable(guessElement);
    enable(settingsElement);
    newDateButtonElement.focus();
    resultElement.textContent = dayIndex() === parseInt(guessElement.value)
        ? "✅"
        : `❌ ${dayString()}`; 
}