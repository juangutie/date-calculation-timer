import { dateElement } from "elements";
import { 
    UpdateFormatEvent,
    getDateString,
} from "utils";

export const yearElement = document.querySelector("[data-year]");

yearElement.addEventListener("change", () => {
    event.target.dispatchEvent(UpdateFormatEvent);
});