import { UpdateFormatEvent } from "events";

export const yearCheckboxElement = document.querySelector("[data-year-checkbox]");

yearCheckboxElement.addEventListener("change", () => {
    event.target.dispatchEvent(UpdateFormatEvent);
});