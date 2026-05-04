import { StopGameEvent } from "../events.js";

export const guessElement = document.querySelector("[data-guess]");

guessElement.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.repeat) {
        event.target.dispatchEvent(StopGameEvent);
        event.preventDefault();
    }
});

guessElement.addEventListener("change", (event) => {
    event.target.dispatchEvent(StopGameEvent);
});