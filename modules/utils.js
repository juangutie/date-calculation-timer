export function enable(element) {
    element.removeAttribute("disabled");
}

export function disable(element) {
    element.setAttribute("disabled", "disabled");
}