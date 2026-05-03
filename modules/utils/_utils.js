export * from "utils/date.js";
export * from "utils/timer.js";

export function enableControl(element) {
    element.removeAttribute("disabled");
}

export function disableControl(element) {
    element.setAttribute("disabled", "disabled");
}