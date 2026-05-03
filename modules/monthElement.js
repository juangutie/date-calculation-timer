import { dateString } from "utils";
import { dateElement } from "elements";

export const monthElement = document.querySelector("[data-month]");

monthElement.addEventListener("change", () => {
    dateElement.textContent = dateString({useMonth: monthElement.checked});
});