import { date } from "../date.js";
import { dateElement } from "../elements.js";

export const monthElement = document.querySelector(".js-month");

monthElement.addEventListener("change", () => {
    dateElement.textContent = date.string() ?? dateElement.textContent;
});