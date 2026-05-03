import "elements";
import {
    dateElement,
    dayCheckboxElement,
    dayFilterElement,
    dayFilterCheckboxElement,
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
    parseDays,
    randomDate,
    startTimer,
    stopTimer,
    parseMonths,
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
    resultElement.textContent = getDayIndex(date) === parseInt(guessElement.value, 10)
        ? "✅"
        : `❌ ${getDayString(date)}`;
});

document.addEventListener(UpdateFormatEvent.type, () => {
    dateElement.textContent = dateToString(date, getSettings());
});

function getSettings() {
    return {
        useYear: yearCheckboxElement.checked,
        useMonth: monthCheckboxElement.checked,
        useDay: dayCheckboxElement.checked,
        monthFormat: monthFormatElement.value,
        dayFormat: dayFormatElement.value,
        ...(monthFilterCheckboxElement.checked 
            ? {monthFilter: parseMonths(monthFilterElement.value)}
            : {}
        ),
        ...(dayFilterCheckboxElement.checked 
            ? {dayFilter: parseDays(dayFilterElement.value)}
            : {}
        ),
    }
}