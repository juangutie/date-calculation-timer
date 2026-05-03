import { dateString } from "utils";
import { dateElement } from "elements";

export const dayFormatElement = document.querySelector("[data-day-format]");

dayFormatElement.addEventListener("change", () => {
    dateElement.textContent = dateString({dayFormat: dayFormatElement.value});
});