/**
 * Binding of a vis-2 colour field to the Textfeld-Zeile — shared by the Vertrags-Adapter
 * (`ContractColorField`) and the Schlichtes-Farbfeld-Adapter (`PlainColorField`).
 *
 * @module components/useColorFieldBinding
 * @remarks
 * Reads the stored value (strings only), translates the field label for the Farbwähler title and
 * writes every change back as a one-field patch — `null` removes the key (vis-2 custom-field
 * contract: a missing key would keep the old value).
 */

import { useCallback } from 'react';
import type { WidgetData } from '@iobroker/types-vis-2';
import Generic from '../Generic';
import type { ExtendedField } from '../types/field-definitions/extended-field';

/** What an adapter hands the Textfeld-Zeile from its field. */
export interface ColorFieldBinding {
    /** Stored value; null when unset or not a string. */
    value: string | null;
    /** Translated field label (Farbwähler title), undefined without a label. */
    title: string | undefined;
    /** Writes `{ [field.name]: value | null }`. */
    onChange: (value: string | null) => void;
}

/**
 * Binds a colour field's stored value, title and patch writer.
 *
 * @param field - Field definition (name, label).
 * @param data - Current editor data map.
 * @param onDataChange - Receives one-field patches.
 * @returns Value, title and change handler for the Textfeld-Zeile.
 */
export function useColorFieldBinding(
    field: ExtendedField,
    data: WidgetData,
    onDataChange: (patch: WidgetData) => void,
): ColorFieldBinding {
    const fieldName: string = field.name!;
    const stored = data[fieldName] as unknown;
    const onChange = useCallback(
        (next: string | null): void => onDataChange({ [fieldName]: next }),
        [fieldName, onDataChange],
    );
    return {
        value: typeof stored === 'string' ? stored : null,
        title: 'label' in field && field.label ? Generic.t(field.label) : undefined,
        onChange,
    };
}
