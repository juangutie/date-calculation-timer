import { StartGameEvent } from "../events.js";

export const newDateButtonElement = document.querySelector(
    "[data-new-date-button]",
);

let enterKeyHeld = false;
newDateButtonElement.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        enterKeyHeld = event.repeat;
    }
});

newDateButtonElement.addEventListener("click", (event) => {
    if (!enterKeyHeld) {
        event.target.dispatchEvent(StartGameEvent);
    }
});
