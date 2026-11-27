/**
 * How the heating family writes its numbers: in the host language, with the data point's unit.
 *
 * @module lib/heating/readingFormat
 * @remarks
 * Temperatures carry one decimal („21,0 °C“), humidity and valve level are whole percent, any other
 * level (battery) shows as reported, up to two decimals. Without a unit in the stored object a
 * temperature reads °C and a humidity or valve level %, the units of the design. A value the
 * widget does not know shows „–“ ({@link NO_VALUE}).
 */

/** What an element shows for a bound Bedeutung without a reported value. */
export const NO_VALUE = '–';

/** How a reading is written. */
export type ReadingKind = 'temperature' | 'percent' | 'level';

/** Decimals and the design unit per kind. */
const FORMATS: Readonly<Record<ReadingKind, { digits: [number, number]; unit: string | undefined }>> = {
    temperature: { digits: [1, 1], unit: '°C' },
    percent: { digits: [0, 0], unit: '%' },
    level: { digits: [0, 2], unit: undefined },
};

/**
 * Writes a number in the host language with its unit.
 *
 * @param value - The number.
 * @param kind - How to write it.
 * @param lang - The host language (`zh-cn` and the like are BCP 47 tags as well).
 * @param unit - The stored object's unit; none: the design unit of the kind.
 * @returns The text, e.g. `21.0 °C`.
 */
export function formatReading(value: number, kind: ReadingKind, lang: string, unit?: string): string {
    const { digits, unit: designUnit } = FORMATS[kind];
    let number: string;
    try {
        number = new Intl.NumberFormat(lang, {
            minimumFractionDigits: digits[0],
            maximumFractionDigits: digits[1],
        }).format(value);
    } catch {
        number = value.toFixed(digits[1]);
    }
    const shown = unit || designUnit;
    return shown ? `${number} ${shown}` : number;
}

/**
 * Writes a remaining time as the design does: `m:ss`, from one hour on `h:mm:ss`. A started second
 * counts as a whole one, so the time shows `0:00` only once it has run out.
 *
 * @param ms - The remaining time in milliseconds; below 0 counts as 0.
 * @returns The text, e.g. `9:59`.
 */
export function formatDuration(ms: number): string {
    const total = Math.max(0, Math.ceil(ms / 1000));
    const seconds = String(total % 60).padStart(2, '0');
    const minutes = Math.floor(total / 60) % 60;
    const hours = Math.floor(total / 3600);
    return hours ? `${hours}:${String(minutes).padStart(2, '0')}:${seconds}` : `${minutes}:${seconds}`;
}

/** Writes a point in time with the given parts in the host language. */
function formatTime(time: number, lang: string, options: Intl.DateTimeFormatOptions): string {
    try {
        return new Intl.DateTimeFormat(lang, options).format(time);
    } catch {
        return new Intl.DateTimeFormat(undefined, options).format(time);
    }
}

/** Hours and minutes, two digits each. */
const CLOCK: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit' };

/**
 * Writes since when something holds: today only the time, else day, month and time — without an
 * age, in the host language.
 *
 * @param time - The point in time (ms).
 * @param now - The current time (ms).
 * @param lang - The host language.
 * @returns E.g. `13:52`, or `24.11., 13:52` on another day (German).
 */
export function formatSince(time: number, now: number, lang: string): string {
    const day = new Date(time);
    const today = new Date(now);
    const sameDay =
        day.getFullYear() === today.getFullYear() &&
        day.getMonth() === today.getMonth() &&
        day.getDate() === today.getDate();
    return formatTime(time, lang, sameDay ? CLOCK : { day: '2-digit', month: '2-digit', ...CLOCK });
}

/**
 * Writes until when something holds: weekday, day, month and time, in the host language.
 *
 * @param time - The point in time (ms).
 * @param lang - The host language.
 * @returns E.g. `So., 29.11., 18:00` (German).
 */
export function formatUntil(time: number, lang: string): string {
    return formatTime(time, lang, { weekday: 'short', day: '2-digit', month: '2-digit', ...CLOCK });
}
