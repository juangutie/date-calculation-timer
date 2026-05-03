import { dateElement } from "elements";
import { getDateString } from "utils";

export const monthFormatElement = document.querySelector("[data-month-format]");

monthFormatElement.addEventListener("change", () => {
    dateElement.textContent = getDateString({monthFormat: monthFormatElement.value});
});