export * from "./date.js";
export * from "./timer.js";

export function enableControl(element) {
    element.removeAttribute("disabled");
}

export function disableControl(element) {
    element.setAttribute("disabled", "disabled");
}
