import { UpdateFormatEvent } from "../events.js";
import { reformatDaysString } from "../utils/_utils.js";
import { dayFilterElement } from "./_elements.js";

export const dayFormatElement = document.querySelector("[data-day-format]");

dayFormatElement.addEventListener("change", () => {
    dayFilterElement.value = reformatDaysString(
        dayFilterElement.value,
        dayFormatElement.value,
    );
    event.target.dispatchEvent(UpdateFormatEvent);
});
