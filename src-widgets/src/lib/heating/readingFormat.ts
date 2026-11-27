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
