import { dateElement } from "elements";
import { 
    UpdateFormatEvent,
    getDateString,
} from "utils";

export const dayFormatElement = document.querySelector("[data-day-format]");

dayFormatElement.addEventListener("change", () => {
    event.target.dispatchEvent(UpdateFormatEvent);
});