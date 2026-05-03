import { dateElement } from "elements";
import { getDateString } from "utils";

export const monthElement = document.querySelector("[data-month]");

monthElement.addEventListener("change", () => {
    dateElement.textContent = getDateString({useMonth: monthElement.checked});
});