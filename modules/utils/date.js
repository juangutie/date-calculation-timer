let date;
let useYear = true;
let useMonth = true;
let useDay = true;
let monthFormat = "long";
let dayFormat = "numeric";

export function getRandomDateString() {
    const year = useYear ? randomYear() : defaults.year;
    const monthIndex = useMonth ? randomMonthIndex(year) : defaults.monthIndex;
    const day = useDay ? randomDay(year, monthIndex) : defaults.day;
    date = new Date(year, monthIndex, day);
    return getDateString();
}

export function getDateString({
        useYear: _useYear = useYear,
        useMonth: _useMonth = useMonth,
        useDay: _useDay = useDay,
        monthFormat: _monthFormat = monthFormat,
        dayFormat: _dayFormat = dayFormat,
    } = {}) {
    useYear = _useYear;
    useMonth = _useMonth;
    useDay = _useDay;
    monthFormat = _monthFormat;
    dayFormat = _dayFormat;
    return date?.toLocaleDateString(undefined, {
        ...(useYear ? {year: "numeric"} : {}),
        ...(useMonth ? {month: monthFormat} : {}),
        ...(useDay ? {day: dayFormat} : {}),
    }) ?? [
        ...(useMonth ? ["Month"] : []),
        ...(useDay ? ["Day"] : []),
        ...(useYear ? ["Year"] : []),
    ].join(" ");
}

export function getDayIndex() {
    return date?.getDay();
}

export function getDayString() {
    return date?.toLocaleDateString(undefined, {weekday: "long"});
}

const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
];

const monthLengths = [
    31, 28, 31, 30, 31, 30,
    31, 31, 30, 31, 30, 31,
];

const defaults = {
    year: 1700,
    monthIndex: monthNames.indexOf("March"),
    day: 7,
};

function randomYear() {
    return randomRangeInclusive(1583, 3000);
}

function randomMonthIndex(year) {
    return randomRangeInclusive(0, monthNames.length - 1);
}
function randomDay(year, monthIndex) {
    if (monthIndex === monthNames.indexOf("February") && isLeapYear(year)) {
        return randomRangeInclusive(1, monthLengths[monthIndex] + 1);
    } else {
        return randomRangeInclusive(1, monthLengths[monthIndex]);
    }
}

function randomRangeInclusive(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1));
}

function isLeapYear(year) {
    return (year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0);
}