import { disableControl, enableControl } from "../utils/_utils.js";
import { yearFilterElement } from "./_elements.js";

export const yearFilterCheckboxElement = document.querySelector(
    "[data-year-filter-checkbox]",
);

yearFilterCheckboxElement.addEventListener("change", () => {
    if (yearFilterCheckboxElement.checked) {
        enableControl(yearFilterElement);
    } else {
        disableControl(yearFilterElement);
    }
});
