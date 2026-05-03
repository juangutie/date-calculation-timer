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
    dateToString,
    disableControl,
    enableControl,
    getDayIndex,
    getDayString,
    monthNames,
    randomDate,
    startTimer,
    stopTimer,
} from "utils";

let date;

document.addEventListener(StartGameEvent.type, () => {
    disableControl(newDateButtonElement);
    enableControl(guessElement);
    disableControl(settingsElement);
    guessElement.focus();
    date = randomDate(getSettings());
    dateElement.textContent = dateToString(date, getSettings());
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
    resultElement.textContent = getDayIndex(date) === parseInt(guessElement.value)
        ? "✅"
        : `❌ ${getDayString(date)}`;
});

document.addEventListener(UpdateFormatEvent.type, () => {
    dateElement.textContent = dateToString(date, getSettings());
    monthFilterElement.textContent = getMonthFilterValues()
        .map((monthIndex) => new Date(1700, monthIndex, 7))
        .map((date) => dateToString(date, {
            ...getSettings(),
            useYear: false,
            useMonth: true,
            useDay: false,
        })).join(", ");
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
        .map((monthName) => monthNames.indexOf(monthName) % 12);
}