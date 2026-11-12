/**
 * Determine whether a value can be safely treated as a numeric input.
 *
 * @module lib/helper/isNumber
 * @remarks
 * The one numeric rule. A field's number reads through {@link module:lib/helper/optionalNumber},
 * which builds on it; this check alone serves the conversion of state values (`useValueState`), where
 * a boolean written to a number OID becomes its number.
 * @param value Value to check for numeric coercion.
 * @returns True when the value is defined, not blank, and converts to a number without resulting in NaN.
 * @example
 * if (isNumber(userInput)) {
 *     const level = Number(userInput);
 *     // use level in calculations
 * }
 */
function isNumber(value: unknown): boolean {
    // eslint-disable-next-line @typescript-eslint/no-base-to-string
    if (value == null || String(value).trim() === '' || Number.isNaN(+value)) {
        return false;
    }

    return true;
}

export default isNumber;
