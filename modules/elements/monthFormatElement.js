import { date } from "../date.js";
import { dateElement } from "../elements.js";

export const monthFormatElement = document.querySelector("[data-month-format]");

monthFormatElement.addEventListener("change", () => {
    dateElement.textContent = date.string() ?? dateElement.textContent;
});