let date;

export function getRandomDateString(settings) {
    const {
        useYear,
        useMonth,
        useDay,
        yearFilter,
        monthFilter,
        dayFilter
    } = settings;
    if (!useYear) {
        yearFilter = defaults.year;
    }
    if (!useMonth) {
        monthFilter = defaults.monthIndex;
    }
    if (!useDay) {
        dayFilter = defaults.monthIndex;
    }
    date = randomDate({
        yearFilter,
        monthFilter,
        dayFilter,
    });
    return getDateString(settings);
}

export function getDateString({
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

export function getDayIndex() {
    return date?.getDay();
}

export function getDayString() {
    return date?.toLocaleDateString(undefined, {weekday: "long"});
}

export const monthNames = [
    "january", "february", "march", "april", "may", "june",
    "july", "august", "september", "october", "november", "december",
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

function randomDate({
        yearFilter,
        monthFilter,
        dayFilter,
    }) {
    const filteredDates = allDates.filter((date) => {
        return (yearFilter?.includes(date.getFullYear()) ?? true)
            && (monthFilter?.includes(date.getMonth()) ?? true)
            && (dayFilter?.includes(date.getDate()) ?? true)
    });
    return randomFromArray(filteredDates);
}

function randomFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}