/**
 * The one number reading of a field: which number a field holds, else unset (ADR-0109 Nr. 7).
 *
 * @module lib/helper/optionalNumber
 * @remarks
 * vis-2 stores a number field as a number or a string and keeps `''` when the user empties it, so
 * `Number(value)` would read an emptied field as the limit 0 (ADR-0109 Nr. 7). The numeric rule stays
 * {@link module:lib/helper/isNumber}; on top of it only numbers and strings count, and only finite
 * results: a stored `Infinity` is no usable limit either, the marks of the Skala would never reach it.
 *
 * Every reader of a field's number reads through it — runtime and configurator alike, so a
 * configurator that reads the raw data reads what the widget reads, and a bound text that names no
 * number never reaches the render as `NaN` — and the Rückfall-Regel's `number` rule
 * (`lib/usableWidgetData`) is this reading: a value it reads as a number is usable.
 * A reader that gives `0` or `''` its own meaning keeps that meaning on top (`|| D` for "0 is
 * unset", `?? D` for "0 is a value").
 *
 * The one exception: the runtime reader of a field that declares `emptiedReadsUnset` and has a
 * default converts with `Number`. The reading layer hands it only this reading's numbers — `''`,
 * `null` and every value the rule rejects, stored or bound, read as the default there — so a
 * fallback on top would be a second copy of the default.
 * @param value Stored value of a number field.
 * @returns The number, including `0` and `'0'`; `undefined` for `''`, blanks, `null`, `undefined`,
 * `NaN`, `Infinity` and every other non-number.
 * @example
 * const min = optionalNumber(fields.minValue) ?? stateMin;
 */
import isNumber from './isNumber';

function optionalNumber(value: unknown): number | undefined {
    if ((typeof value !== 'number' && typeof value !== 'string') || !isNumber(value)) {
        return undefined;
    }

    const number = Number(value);

    return Number.isFinite(number) ? number : undefined;
}

export default optionalNumber;
