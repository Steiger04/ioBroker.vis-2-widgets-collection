/**
 * Determine whether a value can be safely treated as a numeric input.
 *
 * @module lib/helper/isNumber
 * @param {unknown} value Value to check for numeric coercion.
 * @returns {boolean} True when the value is defined, not blank, and converts to a number without resulting in NaN.
 * @example
 * if (isNumber(userInput)) {
 *     const level = Number(userInput);
 *     // use level in calculations
 * }
 */
function isNumber(value) {
    if (value == null || `${value}`.trim() === '' || Number.isNaN(+value)) {
        return false;
    }

    return true;
}

export default isNumber;
