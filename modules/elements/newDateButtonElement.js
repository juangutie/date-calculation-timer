import { date } from "../date.js";
import {
    guessElement,
    settingsElement,
    resultElement,
    dateElement,
} from "../elements.js";
import { timer } from "../timer.js";
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
    dateElement.textContent = date.randomString();
    resultElement.textContent = ""; 
    guessElement.value = "";
    timer.start();
}