/**
 * Vertrags-Adapter — renders a contract colour field (`createColorField`) in the vis-2 attribute panel.
 *
 * @module components/ContractColorField
 * @remarks
 * The one place that resolves the Auflösungskaskade for the editor (ADR-0004, ADR-0102): the
 * effective colour comes from the shared resolver (`resolveEffectiveColor`, stages at
 * `cascadeCandidates`) over the widget data, the Collection theme (the theme the widget runs
 * under, whose Rahmenvorgaben an unset frame setting reads, ADR-0117) and the vis-2 widget style
 * of the first selected widget (`readSelectedWidgets`), whose stored data also give the frame
 * (noCard …) under a multi-selection. It hands the stored value, that effective colour and the
 * translated field name (Farbwähler title) to the Textfeld-Zeile (`ColorTextFieldRow`, variant
 * standard, "erbt" placeholder) and writes every change back as a one-field patch — `null`
 * removes the override, the field inherits again.
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
import { resolveEffectiveColor } from '../lib/helper/resolveEffectiveColor';
import { storedWidgetFrame, WIDGET_FRAME_KEYS, widgetFramePresetsOf } from '../lib/widgetFrame';
import type { ExtendedField } from '../types/field-definitions/extended-field';
import ColorTextFieldRow from './ColorTextFieldRow';
import { readSelectedWidgets } from './selectedWidgets';
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
    // The first selected widget: its vis-2 CSS `color` (undefined skips the vis-2-style stage) and
    // its stored data, from which the frame is read — under a multi-selection the field data are
    // vis-2's `commonValues`, where a differing noCard is null and would read as inherited.
    const firstSelected = useMemo(() => readSelectedWidgets(data, props)[0], [data, props]);
    const styleColor = firstSelected.style;

    // The cascade reads the frame as the widget renders it (ADR-0117): noCard — the terminal
    // without card — by the Rückfall-Regel (ADR-0114), and an unset one reads the Rahmenvorgabe of
    // the collection theme, else its standard, through the widget's own cascade. Every placeable
    // widget offers all eight frame settings of Allgemein (pinned by `aiCatalogView.parity.test`,
    // "offers all eight frame settings"), so the adapter, which does not know the widget's fields,
    // reads them all. Only the frame comes from the first selected widget; the field's own value
    // and its fallback fields stay those of the field data, which the text field shows.
    const effectiveColor = useMemo(() => {
        const frame = storedWidgetFrame(firstSelected.data, widgetFramePresetsOf(collectionTheme));
        const framed: Record<string, unknown> = { ...data };
        for (const key of WIDGET_FRAME_KEYS) {
            framed[key] = frame[key];
        }
        return resolveEffectiveColor(field, framed, collectionTheme, styleColor);
    }, [field, data, firstSelected, collectionTheme, styleColor]);

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
