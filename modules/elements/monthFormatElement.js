import { monthFilterElement } from "elements";
import { UpdateFormatEvent } from "events";
import { reformatMonthsString } from "utils";

export const monthFormatElement = document.querySelector("[data-month-format]");

monthFormatElement.addEventListener("change", () => {
    monthFilterElement.value = reformatMonthsString(monthFilterElement.value, monthFormatElement.value);
    event.target.dispatchEvent(UpdateFormatEvent);
});