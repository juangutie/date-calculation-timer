import { dayFilterElement } from "./_elements.js";
import {
    disableControl,
    enableControl,
} from "../utils/_utils.js";

export const dayFilterCheckboxElement = document.querySelector("[data-day-filter-checkbox]");

dayFilterCheckboxElement.addEventListener("change", () => {
    if (dayFilterCheckboxElement.checked) {
        enableControl(dayFilterElement);
    } else {
        disableControl(dayFilterElement);
    }
});