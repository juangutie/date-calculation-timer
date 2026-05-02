import { date } from "../date.js";
import { dateElement } from "../elements.js";

export const dayFormatElement = document.querySelector(".js-day-format");

dayFormatElement.addEventListener("change", () => {
    dateElement.textContent = date.string() ?? dateElement.textContent;
});