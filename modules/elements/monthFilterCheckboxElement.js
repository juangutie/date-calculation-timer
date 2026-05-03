import { monthFilterElement } from "elements";
import {
    disableControl,
    enableControl,
} from "utils";

export const monthFilterCheckboxElement = document.querySelector("[data-month-filter-checkbox]");

monthFilterCheckboxElement.addEventListener("change", () => {
    if (monthFilterCheckboxElement.checked) {
        enableControl(monthFilterElement);
    } else {
        disableControl(monthFilterElement);
    }
});