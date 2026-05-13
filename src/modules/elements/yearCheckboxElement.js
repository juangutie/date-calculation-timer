import { UpdateFormatEvent } from "../events.js";

export const yearCheckboxElement = document.querySelector(
    "[data-year-checkbox]",
);

yearCheckboxElement.addEventListener("change", () => {
    event.target.dispatchEvent(UpdateFormatEvent);
});
