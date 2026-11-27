/**
 * Points in time as a Wertezuordnung stores their format (ADR-0120): `timestamp`, `iso` or a
 * pattern such as `YYYY_MM_DD HH:mm`.
 *
 * @module lib/heating/timePoint
 * @remarks
 * A pattern knows the tokens `YYYY`, `MM`, `DD`, `HH`, `mm` and `ss`; every other character stands
 * for itself. A pattern time carries no zone and reads as local time. A `timestamp` below 10^11
 * reads as seconds (10^11 s lie in the year 5138, 10^11 ms in 1973), else as milliseconds — the
 * ioBroker convention. Anything that does not read as a point in time gives `undefined`.
 */

/** The tokens of a pattern and the date part each sets. */
const TOKENS = {
    YYYY: 'year',
    MM: 'month',
    DD: 'day',
    HH: 'hour',
    mm: 'minute',
    ss: 'second',
} as const;

type Part = (typeof TOKENS)[keyof typeof TOKENS];

/** Below this a timestamp counts in seconds. */
const SECONDS_BELOW = 1e11;

/** A pattern as a regular expression with the date part of each group, in order. */
function patternOf(format: string): { regex: RegExp; parts: Part[] } {
    const parts: Part[] = [];
    let source = '';
    let rest = format;
    while (rest) {
        const token = (Object.keys(TOKENS) as (keyof typeof TOKENS)[]).find(name => rest.startsWith(name));
        if (token) {
            parts.push(TOKENS[token]);
            source += token === 'YYYY' ? '(\\d{4})' : '(\\d{1,2})';
            rest = rest.slice(token.length);
        } else {
            source += rest[0].replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            rest = rest.slice(1);
        }
    }
    return { regex: new RegExp(`^\\s*${source}\\s*$`), parts };
}

/** A local time from its parts; `undefined` when a part is out of its range (e.g. month 13). */
function localTime(values: Partial<Record<Part, number>>): number | undefined {
    const { year = 1970, month = 1, day = 1, hour = 0, minute = 0, second = 0 } = values;
    const date = new Date(year, month - 1, day, hour, minute, second);
    const fits =
        date.getFullYear() === year &&
        date.getMonth() === month - 1 &&
        date.getDate() === day &&
        date.getHours() === hour &&
        date.getMinutes() === minute &&
        date.getSeconds() === second;
    return fits ? date.getTime() : undefined;
}

/**
 * Reads a reported value as a point in time.
 *
 * @param value - The reported device value.
 * @param format - The stored time format: `timestamp`, `iso` or a pattern.
 * @returns Milliseconds since the epoch; `undefined` when the value does not read in that format.
 */
export function parseTimePoint(value: unknown, format: string): number | undefined {
    if (format === 'timestamp') {
        const number = typeof value === 'string' && value.trim() !== '' ? Number(value) : value;
        if (typeof number !== 'number' || !Number.isFinite(number)) {
            return undefined;
        }
        return Math.abs(number) < SECONDS_BELOW ? number * 1000 : number;
    }
    if (typeof value !== 'string' || value.trim() === '') {
        return undefined;
    }
    if (format === 'iso') {
        const time = Date.parse(value);
        return Number.isNaN(time) ? undefined : time;
    }
    const { regex, parts } = patternOf(format);
    const match = regex.exec(value);
    if (!match || !parts.length) {
        return undefined;
    }
    const values: Partial<Record<Part, number>> = {};
    parts.forEach((part, index) => {
        values[part] = Number(match[index + 1]);
    });
    return localTime(values);
}
