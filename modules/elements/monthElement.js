import { UpdateFormatEvent } from "events";

export const monthElement = document.querySelector("[data-month]");

monthElement.addEventListener("change", () => {
    event.target.dispatchEvent(UpdateFormatEvent);
});