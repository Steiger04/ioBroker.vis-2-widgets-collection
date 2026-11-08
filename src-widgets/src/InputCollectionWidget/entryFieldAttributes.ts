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

import optionalNumber from '../lib/helper/optionalNumber';

import type { InputCollectionContextProps } from '../types';

type InputData = InputCollectionContextProps['widget']['data'];

/** Parameters for {@link buildEntryFieldAttributes}. */
export interface BuildEntryFieldAttributesParams {
    /** The range fields of the widget data. */
    fields: Pick<InputData, 'minValue' | 'maxValue' | 'step'>;
    /** The bound object, absent while no OID is resolved. */
    object: Pick<NonNullable<InputData['oidObject']>, 'type' | 'unit'> | undefined;
    /** The text in the field. It alone decides whether a limit has been crossed (ADR-0109 Nr. 6). */
    draft: string;
}

/** What the TextField takes. */
export interface EntryFieldAttributes {
    /** The input type: only a `number` OID gets a number field, `mixed` and `string` stay text. */
    type: 'number' | 'text';
    /** The object's unit for the adornment, `undefined` when there is none to show. */
    unit: string | undefined;
    /** The spinner attributes of a number field, `undefined` on a text field. A hint, not a write limit. */
    htmlInput: { step: number | undefined; min: number | undefined; max: number | undefined } | undefined;
}

/**
 * Builds the Eingabefeld-Attribute.
 *
 * @param params - See {@link BuildEntryFieldAttributesParams}.
 */
export function buildEntryFieldAttributes(params: BuildEntryFieldAttributesParams): EntryFieldAttributes {
    const { fields, object, draft } = params;
    const isNumberField = object?.type === 'number';
    const min = optionalNumber(fields.minValue);
    const max = optionalNumber(fields.maxValue);

    // Limit rule: the browser's spinner jumps onto a limit the value has crossed, and live mode would
    // write that jump. So only the crossed limit drops; the other keeps the step base stable.
    const draftNumber = optionalNumber(draft);
    const belowMin = draftNumber !== undefined && min !== undefined && draftNumber < min;
    const aboveMax = draftNumber !== undefined && max !== undefined && draftNumber > max;

    return {
        type: isNumberField ? 'number' : 'text',
        unit: object?.unit || undefined,
        htmlInput: isNumberField
            ? {
                  step: optionalNumber(fields.step),
                  min: belowMin ? undefined : min,
                  max: aboveMax ? undefined : max,
              }
            : undefined,
    };
}
