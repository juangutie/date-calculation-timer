import "elements";
import {
    dateElement,
    dayCheckboxElement,
    dayFormatElement,
    guessElement,
    monthCheckboxElement,
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
    startTimer,
    stopTimer,
} from "utils";

document.addEventListener(StartGameEvent.type, () => {
    disableControl(newDateButtonElement);
    enableControl(guessElement);
    disableControl(settingsElement);
    guessElement.focus();
    dateElement.textContent = getRandomDateString();
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
    dateElement.textContent = getDateString({
        useYear: yearCheckboxElement.checked,
        useMonth: monthCheckboxElement.checked,
        useDay: dayCheckboxElement.checked,
        monthFormat: monthFormatElement.value,
        dayFormat: dayFormatElement.value,
    });
});