import {
    monthElement,
    dayElement,
    yearElement,
    monthFormatElement,
    dayFormatElement,
} from "./elements.js"

const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
];

const monthLengths = [
    31, 28, 31, 30, 31, 30,
    31, 31, 30, 31, 30, 31,
];
const calendarStart = {
    year: 1582,
    monthIndex: monthNames.indexOf("October"),
    day: 15,
};

const defaults = {
    year: 1700,
    monthIndex: monthNames.indexOf("March"),
    day: 7,
};

export default {
    randomString: function() {
        const year = yearElement.checked ? randomYear() : defaults.year;
        const monthIndex = monthElement.checked ? randomMonthIndex(year) : defaults.monthIndex;
        const day = dayElement.checked ? randomDay(year, monthIndex) : defaults.day;
        this.date = new Date(year, monthIndex, day);
        return this.string();
    },
    string: function() {
        return this.date?.toLocaleDateString(undefined, {
            ...(yearElement.checked ? {year: "numeric"} : {}),
            ...(monthElement.checked ? {month: monthFormatElement.value} : {}),
            ...(dayElement.checked ? {day: dayFormatElement.value} : {}),
        }) ?? [
            ...(monthElement.checked ? ["Month"] : []),
            ...(dayElement.checked ? ["Day"] : []),
            ...(yearElement.checked ? ["Year"] : []),
        ].join(" ");
    },
    day: function() {
        return this.date?.getDay();
    },
    dayString: function() {
        return this.date?.toLocaleDateString(undefined, {weekday: "long"});
    },
};

function randomYear() {
    return randomRangeInclusive(calendarStart.year, 3000);
}

function randomMonthIndex(year) {
    if (year === calendarStart.year) {
        return randomRangeInclusive(calendarStart.monthIndex, monthNames.length - 1);
    } else {
        return randomRangeInclusive(0, monthNames.length - 1);
    }
}
function randomDay(year, monthIndex) {
    if (year === calendarStart.year) {
        return randomRangeInclusive(calendarStart.day, monthLengths[monthIndex]);
    } else if (monthIndex === monthNames.indexOf("February") && isLeapYear(year)) {
        return randomRangeInclusive(1, monthLengths[monthIndex] + 1);
    } else {
        return randomRangeInclusive(1, monthLengths[monthIndex]);
    }
}

function randomRangeInclusive(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1));
}

function isLeapYear(year) {
    return (year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)
}