import { dateElement } from "elements";
import { getDateString } from "utils";

export const yearElement = document.querySelector("[data-year]");

yearElement.addEventListener("change", () => {
    dateElement.textContent = getDateString({useYear: yearElement.checked});
});