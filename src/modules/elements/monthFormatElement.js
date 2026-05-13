import { monthFilterElement } from "./_elements.js";
import { UpdateFormatEvent } from "../events.js";
import { reformatMonthsString } from "../utils/_utils.js";

export const monthFormatElement = document.querySelector("[data-month-format]");

monthFormatElement.addEventListener("change", () => {
    monthFilterElement.value = reformatMonthsString(monthFilterElement.value, monthFormatElement.value);
    event.target.dispatchEvent(UpdateFormatEvent);
});