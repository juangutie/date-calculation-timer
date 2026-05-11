import { centuryFilterElement } from "./_elements.js";
import {
    disableControl,
    enableControl,
} from "../utils/_utils.js";

export const centuryFilterCheckboxElement = document.querySelector("[data-century-filter-checkbox]");

centuryFilterCheckboxElement.addEventListener("change", () => {
    if (centuryFilterCheckboxElement.checked) {
        enableControl(centuryFilterElement);
    } else {
        disableControl(centuryFilterElement);
    }
});