import { dateElement } from "elements";
import { 
    UpdateFormatEvent,
    getDateString,
} from "utils";

export const monthElement = document.querySelector("[data-month]");

monthElement.addEventListener("change", () => {
    event.target.dispatchEvent(UpdateFormatEvent);
});