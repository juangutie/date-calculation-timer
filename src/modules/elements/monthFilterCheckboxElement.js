import { monthFilterElement } from "./_elements.js";
import {
    disableControl,
    enableControl,
} from "../utils/_utils.js";

export const monthFilterCheckboxElement = document.querySelector("[data-month-filter-checkbox]");

monthFilterCheckboxElement.addEventListener("change", () => {
    if (monthFilterCheckboxElement.checked) {
        enableControl(monthFilterElement);
    } else {
        disableControl(monthFilterElement);
    }
});