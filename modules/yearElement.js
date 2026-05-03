import { dateString } from "utils";
import { dateElement } from "elements";

export const yearElement = document.querySelector("[data-year]");

yearElement.addEventListener("change", () => {
    dateElement.textContent = dateString({useYear: yearElement.checked});
});