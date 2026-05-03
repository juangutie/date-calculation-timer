import { dateString } from "utils";
import { dateElement } from "elements";

export const monthFormatElement = document.querySelector("[data-month-format]");

monthFormatElement.addEventListener("change", () => {
    dateElement.textContent = dateString({monthFormat: monthFormatElement.value});
});