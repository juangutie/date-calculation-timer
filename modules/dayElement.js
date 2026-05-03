import { dateString } from "utils";
import { dateElement } from "elements";

export const dayElement = document.querySelector("[data-day]");

dayElement.addEventListener("change", () => {
    dateElement.textContent = dateString({useDay: dayElement.checked});
});