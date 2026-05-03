import { dateString } from "../date.js";
import { dateElement } from "../elements.js";

export const monthFormatElement = document.querySelector("[data-month-format]");

monthFormatElement.addEventListener("change", () => {
    dateElement.textContent = dateString({monthFormat: monthFormatElement.value});
});