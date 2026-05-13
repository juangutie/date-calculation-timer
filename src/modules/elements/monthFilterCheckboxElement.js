import { disableControl, enableControl } from "../utils/_utils.js";
import { monthFilterElement } from "./_elements.js";

export const monthFilterCheckboxElement = document.querySelector(
    "[data-month-filter-checkbox]",
);

monthFilterCheckboxElement.addEventListener("change", () => {
    if (monthFilterCheckboxElement.checked) {
        enableControl(monthFilterElement);
    } else {
        disableControl(monthFilterElement);
    }
});
