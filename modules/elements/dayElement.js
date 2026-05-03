import { dateString } from "../date.js";
import { dateElement } from "../elements.js";

export const dayElement = document.querySelector("[data-day]");

dayElement.addEventListener("change", () => {
    dateElement.textContent = dateString({useDay: dayElement.checked});
});