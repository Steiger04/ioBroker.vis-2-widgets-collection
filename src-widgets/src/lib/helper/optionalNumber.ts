/**
 * The empty rule of stored number fields: what is not a number counts as not set.
 *
 * @module lib/helper/optionalNumber
 * @remarks
 * vis-2 stores a number field as a number or a string and keeps `''` when the user empties it, so
 * `Number(value)` would read an emptied field as the limit 0 (ADR-0109 Nr. 7). The numeric rule stays
 * {@link module:lib/helper/isNumber}; on top of it only numbers and strings count, and only finite
 * results: a stored `Infinity` is no usable limit either, the marks of the Skala would never reach it.
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
