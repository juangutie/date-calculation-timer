import { dayFilterElement } from "elements";
import {
    disableControl,
    enableControl,
} from "utils";

export const dayFilterCheckboxElement = document.querySelector("[data-day-filter-checkbox]");

dayFilterCheckboxElement.addEventListener("change", () => {
    if (dayFilterCheckboxElement.checked) {
        enableControl(dayFilterElement);
    } else {
        disableControl(dayFilterElement);
    }
});