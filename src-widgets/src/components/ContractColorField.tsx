/**
 * Vertrags-Adapter — renders a contract colour field (`createColorField`) in the vis-2 attribute panel.
 *
 * @module components/ContractColorField
 * @remarks
 * The one place that resolves the Auflösungskaskade for the editor (ADR-0004, ADR-0102): the
 * effective colour comes from the shared resolver (`resolveEffectiveColor`, stages at
 * `cascadeCandidates`) over the widget data, the Collection theme (the theme the widget runs
 * under) and the vis-2 widget style of the selected widget. It hands the stored value, that
 * effective colour and the translated field name (Farbwähler title) to the Textfeld-Zeile
 * (`ColorTextFieldRow`, variant standard, "erbt" placeholder) and writes every change back as a
 * one-field patch — `null` removes the override, the field inherits again.
 *
 * The row renders under the vis-2 HOST theme: the attribute editor is a vis-2 surface (text,
 * placeholder, borders, popover follow vis-2); the Collection theme is used only for the swatch,
 * a preview of what the widget renders.
 */

import { ThemeProvider } from '@mui/material';
import { useMemo } from 'react';
import type React from 'react';
import type { RxWidgetInfoCustomComponentProperties, VisTheme, WidgetData } from '@iobroker/types-vis-2';
import useCollectionTheme from '../hooks/useCollectionTheme';
import { resolveEffectiveColor, type StyleColor } from '../lib/helper/resolveEffectiveColor';
import type { ExtendedField } from '../types/field-definitions/extended-field';
import ColorTextFieldRow from './ColorTextFieldRow';
import { useColorFieldBinding } from './useColorFieldBinding';

/** Props for {@link ContractColorField} — the vis-2 custom-field contract. */
export interface ContractColorFieldProps {
    /** Field definition (name, label, fallbackFields, terminal, inheritTextStyle, noGradient). */
    field: ExtendedField;
    /** Current editor data map. */
    data: WidgetData;
    /** Receives one-field patches (`{ [field.name]: value | null }`). */
    onDataChange: (patch: WidgetData) => void;
    /** vis-2 editor context (socket, theme, views, selected widget, …). */
    props: RxWidgetInfoCustomComponentProperties;
}

/**
 * Reads the vis-2 widget CSS `color` of the widget being edited.
 *
 * The custom-field props do not expose the widget directly; its style is reached through the
 * project map (`context.views[selectedView].widgets[selectedWidget]`). Undefined when the path is
 * unavailable — the resolver then skips the vis-2-style stage.
 *
 * @param props - vis-2 editor context.
 * @returns The widget style fragment carrying `color`, or undefined.
 */
function readWidgetStyleColor(props: RxWidgetInfoCustomComponentProperties): StyleColor {
    const ctx = props.context as unknown as {
        views?: Record<string, { widgets?: Record<string, { style?: { color?: string } }> }>;
    };
    const widgetId = props.selectedWidgets?.[0] ?? props.selectedWidget;
    return widgetId ? ctx?.views?.[props.selectedView]?.widgets?.[widgetId as string]?.style : undefined;
}

/**
 * Renders a contract colour field: the Textfeld-Zeile fed with the resolved cascade.
 *
 * @param props - See {@link ContractColorFieldProps}.
 * @param props.field - Field definition with its Field-Vertrag.
 * @param props.data - Current editor data map.
 * @param props.onDataChange - Receives one-field patches.
 * @param props.props - vis-2 editor context.
 * @returns The field row under the vis-2 host theme.
 */
function ContractColorField({ field, data, onDataChange, props }: ContractColorFieldProps): React.JSX.Element {
    const { value, title, onChange } = useColorFieldBinding(field, data, onDataChange);
    const hostTheme = props.context.theme;
    const collectionTheme = useCollectionTheme(props.context.socket, props.context.theme) as VisTheme;
    const styleColor = useMemo(() => readWidgetStyleColor(props), [props]);

    const effectiveColor = useMemo(
        () => resolveEffectiveColor(field, data, collectionTheme, styleColor),
        [field, data, collectionTheme, styleColor],
    );

    return (
        <ThemeProvider theme={hostTheme}>
            <ColorTextFieldRow
                value={value}
                onChange={onChange}
                effectiveColor={effectiveColor}
                placeholder="inherit"
                allowGradient={field.noGradient !== true}
                title={title}
                socket={props.context.socket}
            />
        </ThemeProvider>
    );
}

export default ContractColorField;
