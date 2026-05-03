import { UpdateFormatEvent } from "events";

export const monthFormatElement = document.querySelector("[data-month-format]");

monthFormatElement.addEventListener("change", () => {
    event.target.dispatchEvent(UpdateFormatEvent);
});