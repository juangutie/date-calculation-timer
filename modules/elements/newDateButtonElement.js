import { randomDateString } from "../date.js";
import {
    dateElement,
    guessElement,
    resultElement,
    settingsElement,
    timerElement,
} from "../elements.js";
import { startTimer, stopTimer } from "../timer.js";
import { enable, disable } from "../utils.js";

export const newDateButtonElement = document.querySelector("[data-new-date-button]");

let enterKeyHeld = false;
newDateButtonElement.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        enterKeyHeld = event.repeat;
    }
});

newDateButtonElement.addEventListener("click", () => {
    if (!enterKeyHeld) {
        startGame();
    }
});

function startGame() {
    disable(newDateButtonElement);
    enable(guessElement)
    disable(settingsElement);
    guessElement.focus();
    dateElement.textContent = randomDateString();
    resultElement.textContent = ""; 
    guessElement.value = "";
    startTimer((timeString) => timerElement.textContent = timeString);
}