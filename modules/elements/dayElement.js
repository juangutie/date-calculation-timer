import { date } from "../date.js";
import { dateElement } from "../elements.js";

export const dayElement = document.querySelector("[data-day]");

dayElement.addEventListener("change", () => {
    dateElement.textContent = date.string() ?? dateElement.textContent;
});