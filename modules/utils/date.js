export function randomDate({
        yearFilter,
        monthFilter,
        dayFilter,
    }) {
    const filteredDates = allDates.filter((date) => {
        return (yearFilter?.includes(date.getFullYear() % 100) ?? true)
            && (monthFilter?.includes(date.getMonth()) ?? true)
            && (dayFilter?.includes(date.getDate()) ?? true)
    });
    return randomFromArray(filteredDates);
}

export function dateToString(date, {
        useYear,
        useMonth,
        useDay,
        monthFormat,
        dayFormat,
    }) {
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

export function parseDays(str) {
    return str
        .replaceAll(" ", "")
        .split(",")
        .map((dayStr) => parseInt(dayStr, 10))
        .filter((day) => day !== NaN);
}

export function parseMonths(str) {
    return str
        .replaceAll(" ", "")
        .toLowerCase()
        .split(",")
        .map((monthName) => monthNames.indexOf(monthName) % 12)
        .filter((monthIndex) => monthIndex !== -1)
}

export function parseYears(str) {
    return str
        .replaceAll(" ", "")
        .split(",")
        .map((yearStr) => parseInt(yearStr, 10) % 100)
        .filter((year) => year !== NaN)
}

export function reformatDaysString(str, dayFormat) {
    return parseDays(str)
        .map((day) => dateToString(
            new Date(defaults.year, defaults.monthIndex, day),
            {
                useYear: false,
                useMonth: false,
                useDay: true,
                dayFormat,
            }
        ))
        .join(", ");
}

export function reformatMonthsString(str, monthFormat) {
    return parseMonths(str)
        .map((monthIndex) => dateToString(
            new Date(defaults.year, monthIndex),
            {
                useYear: false,
                useMonth: true,
                useDay: false,
                monthFormat,
            }
        ))
        .join(", ");
}

export function getDayIndex(date) {
    return date?.getDay();
}

export function getDayString(date) {
    return date?.toLocaleDateString(undefined, {weekday: "long"});
}

export const monthNames = [
    "january", "february", "march", "april", "may", "june",
    "july", "august", "september", "october", "november", "december",
    "jan", "feb", "mar", "apr", "may", "jun",
    "jul", "aug", "sep", "oct", "nov", "dec",
    "01", "02", "03", "04", "05", "06",
    "07", "08", "09", "10", "11", "12",
    "1", "2", "3", "4", "5", "6",
    "7", "8", "9",
];

const monthLengths = [
    31, 28, 31, 30, 31, 30,
    31, 31, 30, 31, 30, 31,
];

const defaults = {
    year: 1700,
    monthIndex: monthNames.indexOf("march"),
    day: 7,
};

const allDates = (() => {
    const allDates = [];

    for (let year = 1583; year <= 3000; ++year) {
        for (let monthIndex = 0; monthIndex <= 11; ++monthIndex) {
            for (let day = 1; day <= monthLengths[monthIndex]; ++day) {
                allDates.push(new Date(year, monthIndex, day));
            }
        }
    }

    return allDates;
})();

function randomFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}