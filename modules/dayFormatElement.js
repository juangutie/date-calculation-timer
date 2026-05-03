import { dateElement } from "elements";
import { getDateString } from "utils";

export const dayFormatElement = document.querySelector("[data-day-format]");

dayFormatElement.addEventListener("change", () => {
    dateElement.textContent = getDateString({dayFormat: dayFormatElement.value});
});