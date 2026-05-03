import { UpdateFormatEvent } from "events";

export const monthCheckboxElement = document.querySelector("[data-month-checkbox]");

monthCheckboxElement.addEventListener("change", () => {
    event.target.dispatchEvent(UpdateFormatEvent);
});