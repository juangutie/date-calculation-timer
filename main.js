import date from "./modules/date.js"
import timer from "./modules/timer.js"
import {
    dateElement,
    newDateButtonElement,
    guessElement,
    resultElement,
    settingsElement,
    monthElement,
    dayElement,
    yearElement,
    monthFormatElement,
    dayFormatElement,
} from "./modules/elements.js"

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

guessElement.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.repeat) {
        stopGame();
        event.preventDefault();
    }
});

guessElement.addEventListener("change", () => {
    stopGame();
});

monthElement.addEventListener("change", () => {
    dateElement.textContent = date.string() ?? dateElement.textContent;
});

dayElement.addEventListener("change", () => {
    dateElement.textContent = date.string() ?? dateElement.textContent;
});

yearElement.addEventListener("change", () => {
    dateElement.textContent = date.string() ?? dateElement.textContent;
});

monthFormatElement.addEventListener("change", () => {
    dateElement.textContent = date.string() ?? dateElement.textContent;
});

dayFormatElement.addEventListener("change", () => {
    dateElement.textContent = date.string() ?? dateElement.textContent;
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

function enable(element) {
    element.removeAttribute("disabled");
}

function disable(element) {
    element.setAttribute("disabled", "disabled");
}