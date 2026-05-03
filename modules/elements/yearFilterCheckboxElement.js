import { yearFilterElement } from "elements";
import {
    disableControl,
    enableControl,
} from "utils";

export const yearFilterCheckboxElement = document.querySelector("[data-year-filter-checkbox]");

yearFilterCheckboxElement.addEventListener("change", () => {
    if (yearFilterCheckboxElement.checked) {
        enableControl(yearFilterElement);
    } else {
        disableControl(yearFilterElement);
    }
});