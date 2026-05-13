import { UpdateFormatEvent } from "../events.js";

export const dayCheckboxElement = document.querySelector("[data-day-checkbox]");

dayCheckboxElement.addEventListener("change", (event) => {
    event.target.dispatchEvent(UpdateFormatEvent);
});
