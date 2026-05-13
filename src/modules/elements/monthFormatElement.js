import { UpdateFormatEvent } from "../events.js";
import { reformatMonthsString } from "../utils/_utils.js";
import { monthFilterElement } from "./_elements.js";

export const monthFormatElement = document.querySelector("[data-month-format]");

monthFormatElement.addEventListener("change", () => {
    monthFilterElement.value = reformatMonthsString(
        monthFilterElement.value,
        monthFormatElement.value,
    );
    event.target.dispatchEvent(UpdateFormatEvent);
});
