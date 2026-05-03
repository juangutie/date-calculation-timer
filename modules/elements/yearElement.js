import { dateString } from "../date.js";
import { dateElement } from "../elements.js";

export const yearElement = document.querySelector("[data-year]");

yearElement.addEventListener("change", () => {
    dateElement.textContent = dateString({useYear: yearElement.checked});
});