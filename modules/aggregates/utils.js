export * from "../utils/date.js";
export * from "../utils/timer.js";

export function enable(element) {
    element.removeAttribute("disabled");
}

export function disable(element) {
    element.setAttribute("disabled", "disabled");
}