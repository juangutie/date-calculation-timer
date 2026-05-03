import { UpdateFormatEvent } from "events";

export const dayFormatElement = document.querySelector("[data-day-format]");

dayFormatElement.addEventListener("change", () => {
    event.target.dispatchEvent(UpdateFormatEvent);
});