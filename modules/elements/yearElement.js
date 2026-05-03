import { UpdateFormatEvent } from "events";

export const yearElement = document.querySelector("[data-year]");

yearElement.addEventListener("change", () => {
    event.target.dispatchEvent(UpdateFormatEvent);
});