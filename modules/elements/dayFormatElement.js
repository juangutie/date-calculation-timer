import { dayFilterElement } from "elements";
import { UpdateFormatEvent } from "events";
import { reformatDaysString } from "utils";

export const dayFormatElement = document.querySelector("[data-day-format]");

dayFormatElement.addEventListener("change", () => {
    dayFilterElement.value = reformatDaysString(dayFilterElement.value, dayFormatElement.value);
    event.target.dispatchEvent(UpdateFormatEvent);
});