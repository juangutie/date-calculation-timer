import { dateElement } from "elements";
import { getDateString } from "utils";

export const dayElement = document.querySelector("[data-day]");

dayElement.addEventListener("change", () => {
    dateElement.textContent = getDateString({useDay: dayElement.checked});
});