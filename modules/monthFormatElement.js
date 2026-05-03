import { dateElement } from "elements";
import { 
    UpdateFormatEvent,
    getDateString,
} from "utils";

export const monthFormatElement = document.querySelector("[data-month-format]");

monthFormatElement.addEventListener("change", () => {
    event.target.dispatchEvent(UpdateFormatEvent);
});