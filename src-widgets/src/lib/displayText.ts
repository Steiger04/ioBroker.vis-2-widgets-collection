/**
 * The Anzeigetext: which text a value shows (CONTEXT, ADR-0111 Nr. 5).
 *
 * @module lib/displayText
 * @remarks
 * One pure rule for the Rahmen-Fußzeile, the Wert-Anzeige, the Checkbox's label and the `value`
 * resolver. It hands back the raw value; shaping is the caller's: the Checkbox leaves its label empty
 * for `false`, State and Input show "false", the footer makes a string of it. The Slider, the Gauge
 * and the Input's adornment format their value themselves.
 *
 * The object copy's `unit` is the Einheit's one source; the root `unit` field only feeds that copy
 * (ADR-0109 Nr. 12).
 */
import { isBlankStateValue } from './filledStateRows';

/** A value that gives a text. */
type TextValue = string | number | boolean;

/** What the Anzeigetext is made of. */
interface DisplayTextInput {
    /** The OID's current value. Backends also deliver what has no text: objects, arrays, `NaN`. */
    value: unknown;
    /** The bound object's Einheit. */
    unit?: string;
    /** The state's alias. */
    alias?: string;
    /** The state's value: the `value` resolver has already added the unit. */
    rowValue?: TextValue;
}

/**
 * A value with its Einheit.
 *
 * @param value The raw value.
 * @param unit The bound object's Einheit.
 * @returns The value with its Einheit, or the raw value without one; `undefined` for what gives no
 *   text (missing, object, `NaN`).
 */
export const valueWithUnit = (value: unknown, unit: string | undefined): TextValue | undefined => {
    if ((typeof value !== 'string' && typeof value !== 'number' && typeof value !== 'boolean') || Number.isNaN(value)) {
        return undefined;
    }

    // A blank value has nothing to carry a unit: no lone "°C".
    return unit && !isBlankStateValue(value) ? `${value}${unit}` : value;
};

/**
 * The text a value shows: the state's alias, else its value, else the current value with its Einheit.
 *
 * @param input What the text is made of.
 * @returns The raw text, `undefined` when there is nothing to show.
 */
export const displayText = (input: DisplayTextInput): TextValue | undefined =>
    // A blank alias names nothing (ADR-0110 Nr. 10).
    (isBlankStateValue(input.alias) ? undefined : input.alias) ||
    input.rowValue ||
    valueWithUnit(input.value, input.unit);
