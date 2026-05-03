import { UpdateFormatEvent } from "events";

export const dayElement = document.querySelector("[data-day]");

dayElement.addEventListener("change", (event) => {
    event.target.dispatchEvent(UpdateFormatEvent);
});