import { dateElement } from "elements";
import { 
    UpdateFormatEvent,
    getDateString,
} from "utils";

export const dayElement = document.querySelector("[data-day]");

dayElement.addEventListener("change", (event) => {
    event.target.dispatchEvent(UpdateFormatEvent);
});