import { dateString } from "../date.js";
import { dateElement } from "../elements.js";

export const monthElement = document.querySelector("[data-month]");

monthElement.addEventListener("change", () => {
    dateElement.textContent = dateString({useMonth: monthElement.checked});
});