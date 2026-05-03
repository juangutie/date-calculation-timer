import "elements";
import {
    dateElement,
    dayCheckboxElement,
    dayFormatElement,
    guessElement,
    monthCheckboxElement,
    monthFilterElement,
    monthFilterCheckboxElement,
    monthFormatElement,
    newDateButtonElement,
    resultElement,
    settingsElement,
    timerElement,
    yearCheckboxElement,
} from "elements";
import {
    StartGameEvent,
    StopGameEvent,
    UpdateFormatEvent,
} from "events";
import {
    disableControl,
    enableControl,
    getDateString,
    getDayIndex,
    getDayString,
    getRandomDateString,
    monthNames,
    startTimer,
    stopTimer,
} from "utils";

document.addEventListener(StartGameEvent.type, () => {
    disableControl(newDateButtonElement);
    enableControl(guessElement);
    disableControl(settingsElement);
    guessElement.focus();
    dateElement.textContent = getRandomDateString(getSettings());
    resultElement.textContent = "";
    guessElement.value = "";
    startTimer((timeString) => timerElement.textContent = timeString);
});

document.addEventListener(StopGameEvent.type, () => {
    stopTimer();
    enableControl(newDateButtonElement);
    disableControl(guessElement);
    enableControl(settingsElement);
    newDateButtonElement.focus();
    resultElement.textContent = getDayIndex() === parseInt(guessElement.value)
        ? "✅"
        : `❌ ${getDayString()}`;
});

document.addEventListener(UpdateFormatEvent.type, () => {
    dateElement.textContent = getDateString(getSettings());
});

function getSettings() {
    return {
        useYear: yearCheckboxElement.checked,
        useMonth: monthCheckboxElement.checked,
        useDay: dayCheckboxElement.checked,
        monthFormat: monthFormatElement.value,
        dayFormat: dayFormatElement.value,
        ...(monthFilterCheckboxElement.checked ? {monthFilter: getMonthFilterValues()} : {}),
    }
}

function getMonthFilterValues() {
    return monthFilterElement
        .value
        .replaceAll(" ", "")
        .toLowerCase()
        .split(",")
        .filter((monthName) => monthNames.includes(monthName))
        .map((monthName) => monthNames.indexOf(monthName));
}