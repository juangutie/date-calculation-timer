import {
    dateElement,
    guessElement,
    resultElement,
    settingsElement,
    timerElement,
} from "elements";
import { 
    disableControl,
    enableControl,
    getRandomDateString,
    startTimer,
    stopTimer,
} from "utils";

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
    disableControl(newDateButtonElement);
    enableControl(guessElement)
    disableControl(settingsElement);
    guessElement.focus();
    dateElement.textContent = getRandomDateString();
    resultElement.textContent = ""; 
    guessElement.value = "";
    startTimer((timeString) => timerElement.textContent = timeString);
}