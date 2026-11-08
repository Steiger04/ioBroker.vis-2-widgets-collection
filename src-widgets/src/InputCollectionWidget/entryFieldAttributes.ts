/**
 * The Eingabefeld-Attribute of the Input collection widget: input type, unit, step and limits of
 * the TextField behind one interface.
 *
 * @module InputCollectionWidget/entryFieldAttributes
 * @remarks
 * Pure (ADR-0109 Nr. 6): the body hands in the range fields of the widget data, the bound object
 * and the draft, and paints the result. Which OID types may bind at all stays the rule of
 * {@link module:lib/allowedOidTypes}; this module only tells a number field from a text field. The
 * text style is not an attribute, it stays in the body's `sx`.
 */

import type { InputCollectionContextProps } from '../types';

type InputData = InputCollectionContextProps['widget']['data'];

/** Parameters for {@link buildEntryFieldAttributes}. */
export interface BuildEntryFieldAttributesParams {
    /** The range fields of the widget data. */
    fields: Pick<InputData, 'minValue' | 'maxValue' | 'step'>;
    /** The bound object, absent while no OID is resolved. */
    object: Pick<NonNullable<InputData['oidObject']>, 'type' | 'unit'> | undefined;
    /** The text in the field. Part of the input for the limit rule of ADR-0109 Nr. 6; no rule reads it yet. */
    draft: string;
}

/** What the TextField takes. */
export interface EntryFieldAttributes {
    /** The input type: only a `number` OID gets a number field, `mixed` and `string` stay text. */
    type: 'number' | 'text';
    /** The object's unit for the adornment, `undefined` when there is none to show. */
    unit: string | undefined;
    /** The spinner attributes of a number field, `undefined` on a text field. */
    htmlInput: { step: number | undefined; min: number | undefined; max: number | undefined } | undefined;
}

/** Reads a stored number field; vis-2 may store number inputs as strings. */
const readNumber = (value: unknown): number | undefined => (value !== undefined ? Number(value) : undefined);

/**
 * Builds the Eingabefeld-Attribute.
 *
 * @param params - See {@link BuildEntryFieldAttributesParams}.
 */
export function buildEntryFieldAttributes(params: BuildEntryFieldAttributesParams): EntryFieldAttributes {
    const { fields, object } = params;
    const isNumber = object?.type === 'number';

    return {
        type: isNumber ? 'number' : 'text',
        unit: object?.unit || undefined,
        htmlInput: isNumber
            ? {
                  step: readNumber(fields.step),
                  min: readNumber(fields.minValue),
                  max: readNumber(fields.maxValue),
              }
            : undefined,
    };
}
