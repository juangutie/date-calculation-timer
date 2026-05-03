import { UpdateFormatEvent } from "events";

export const dayCheckboxElement = document.querySelector("[data-day-checkbox]");

dayCheckboxElement.addEventListener("change", (event) => {
    event.target.dispatchEvent(UpdateFormatEvent);
});