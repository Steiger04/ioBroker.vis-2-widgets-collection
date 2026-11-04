/**
 * Schlichtes-Farbfeld-Adapter — renders a Schlichtes Farbfeld (`createPlainColorField`) in the
 * vis-2 attribute panel.
 *
 * @module components/PlainColorField
 * @remarks
 * A Schlichtes Farbfeld has no Field-Vertrag (ADR-0102): no Auflösungskaskade, no "erbt". The
 * swatch shows exactly the stored value; an empty field means the widget's own built-in default —
 * the schema default, so swatch and Farbwähler start from it (nothing is stored until a choice).
 * The adapter hands the stored value, the translated field name (Farbwähler title) and the socket
 * (Theme-Presets, read only while the Farbwähler is open) to the Textfeld-Zeile — solid only,
 * through the field's `noGradient` — and writes every change back as a one-field patch (`null`
 * clears the field).
 *
 * Unlike the Vertrags-Adapter (`ContractColorField`) it does not read the Collection theme on
 * mount. The row renders under the vis-2 HOST theme (the attribute editor is a vis-2 surface).
 */

import { ThemeProvider } from '@mui/material';
import type React from 'react';
import type { RxWidgetInfoCustomComponentProperties, WidgetData } from '@iobroker/types-vis-2';
import type { ExtendedField } from '../types/field-definitions/extended-field';
import ColorTextFieldRow from './ColorTextFieldRow';
import { useColorFieldBinding } from './useColorFieldBinding';

/** Props for {@link PlainColorField} — the vis-2 custom-field contract. */
export interface PlainColorFieldProps {
    /** Field definition (name, label). */
    field: ExtendedField;
    /** Current editor data map. */
    data: WidgetData;
    /** Receives one-field patches (`{ [field.name]: value | null }`). */
    onDataChange: (patch: WidgetData) => void;
    /** vis-2 editor context (socket, theme, …). */
    props: RxWidgetInfoCustomComponentProperties;
}

/**
 * Renders a Schlichtes Farbfeld: the Textfeld-Zeile over the stored value.
 *
 * @param props - See {@link PlainColorFieldProps}.
 * @param props.field - Field definition.
 * @param props.data - Current editor data map.
 * @param props.onDataChange - Receives one-field patches.
 * @param props.props - vis-2 editor context.
 * @returns The field row under the vis-2 host theme.
 */
function PlainColorField({ field, data, onDataChange, props }: PlainColorFieldProps): React.JSX.Element {
    const { value, title, onChange } = useColorFieldBinding(field, data, onDataChange);
    // What the widget renders for an empty field (vis-2 showed it in the former `type: 'color'`).
    const schemaDefault = (field as { default?: unknown }).default;
    const effectiveColor = value || (typeof schemaDefault === 'string' ? schemaDefault : '');

    return (
        <ThemeProvider theme={props.context.theme}>
            <ColorTextFieldRow
                value={value}
                onChange={onChange}
                effectiveColor={effectiveColor}
                placeholder="none"
                // The factory always sets noGradient; read like in the contract adapter.
                allowGradient={field.noGradient !== true}
                title={title}
                socket={props.context.socket}
            />
        </ThemeProvider>
    );
}

export default PlainColorField;
