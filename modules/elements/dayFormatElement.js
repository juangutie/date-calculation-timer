import { dateString } from "../date.js";
import { dateElement } from "../elements.js";

export const dayFormatElement = document.querySelector("[data-day-format]");

dayFormatElement.addEventListener("change", () => {
    dateElement.textContent = dateString({dayFormat: dayFormatElement.value});
});