/**
 * Color inputs for the echarts configurator, all rendered as the Textfeld-Zeile
 * ({@link ColorTextFieldRow}) — the same row the vis-2 attribute panel uses (ADR-0102).
 *
 * @module EchartsCollectionWidget/editor/colorFields
 * @remarks
 * The fields talk to the row in the modal's working-state terms: the explicit value, its change
 * (`null` = back to inherit) and an optional `fallback` — the colour the field inherits (its
 * palette slot, the theme token the builder draws, a derived scale). The swatch shows the stored
 * value while it is a colour, else the fallback; there is no vis-2 attribute contract and no
 * Auflösungskaskade here (ADR-0102: the configurator does not pretend to be an attribute field).
 *
 * The row renders under the ambient MUI theme: the configurator modal provides the editor theme
 * (`EchartsConfigEditorModal`'s `ThemeProvider`), so the row and its Farbwähler follow the
 * configurator's light / dark mode. The editor socket reaches the Farbwähler for the Collection
 * theme presets, read only while it is open.
 *
 * The row renders its OWN clear (trash) button when a colour is set (ADR-0004) — that single
 * affordance is the "remove colour / back to inherit" control. There is no second external trash:
 * the ADR-0018 per-field trash duplicated the picker's and has been removed.
 */
import type { FC } from 'react';
import { Box, Button } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';

import ColorTextFieldRow from '../../components/ColorTextFieldRow';
import Generic from '../../Generic';
import { readStoredColor } from '../../lib/helper/colorInputRules';
import type { OidPickerCtx } from './OidPicker';

interface ColorFieldProps {
    /** Current explicit colour (`null`/`undefined` = inherit the fallback). */
    value: string | null | undefined;
    /** Called with the new explicit colour, or `null` when cleared back to inherit. */
    onChange: (value: string | null) => void;
    /** Editor context; its socket gives the Farbwähler the Collection theme presets. */
    ctx: OidPickerCtx;
    /** Optional colour shown in the swatch when no explicit value is set. */
    fallback?: string;
    /** Allow gradients (default false = solid only, matching echarts series colours). */
    allowGradient?: boolean;
    /**
     * Greyed out and inert (ADR-0019 „deaktiviert statt ausgeblendet"): the value stays visible,
     * neither the input nor the picker swatch takes focus or clicks.
     */
    disabled?: boolean;
    /** Farbwähler header title — the translated label the field sits under. */
    title?: string;
}

/**
 * The colour the swatch shows: the stored value while it is a colour (Regeln für Farbeingaben,
 * as typed, gradients allowed), else the fallback, else none (`''`, the dashed empty swatch).
 *
 * @param value - Stored explicit colour.
 * @param fallback - The inherited colour.
 * @returns The swatch colour.
 */
function swatchColorOf(value: string | null | undefined, fallback: string | undefined): string {
    return readStoredColor(value) ?? readStoredColor(fallback) ?? '';
}

/**
 * Single colour input: the outlined Textfeld-Zeile. The swatch resolves to the `fallback` when
 * the value is empty (the "inherit" state), and clearing returns to inherit.
 */
const ColorField: FC<ColorFieldProps> = ({ value, onChange, ctx, fallback, allowGradient, disabled, title }) => (
    <ColorTextFieldRow
        value={value}
        onChange={onChange}
        effectiveColor={swatchColorOf(value, fallback)}
        placeholder="inherit"
        // One field variant across the configurator (B10, review 2026-11-03): the colour
        // input matches the outlined TextField2/LabeledSelect neighbours.
        variant="outlined"
        allowGradient={allowGradient === true}
        title={title}
        disabled={disabled}
        socket={ctx.socket}
    />
);

interface ColorListFieldProps {
    /** `;`-separated colour list. */
    value: string;
    onChange: (value: string) => void;
    ctx: OidPickerCtx;
    /** Farbwähler header title of every stop — the translated label of the list. */
    title?: string;
}

/**
 * Multi-stop colour list (palette stops) — one ColorField per stop. Removing a
 * stop is done via the row's own clear (clearing a stop's colour splices it; an empty-colour stop is
 * meaningless in a list) — there is no separate per-stop remove button.
 */
const ColorListField: FC<ColorListFieldProps> = ({ value, onChange, ctx, title }) => {
    const colors = value
        .split(';')
        .map(s => s.trim())
        .filter(Boolean);
    const set = (i: number, c: string | null): void => {
        const next = colors.slice();
        if (c === null || c === '') {
            next.splice(i, 1);
        } else {
            next[i] = c;
        }
        onChange(next.join(';'));
    };
    const add = (): void => onChange([...colors, '#000000'].join(';'));

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
            {colors.map((c, i) => (
                <ColorField
                    key={i}
                    value={c}
                    onChange={v => set(i, v)}
                    ctx={ctx}
                    title={title}
                />
            ))}
            <Button
                startIcon={<AddIcon />}
                size="small"
                onClick={add}
                sx={{ alignSelf: 'flex-start' }}
            >
                {Generic.t('echarts_color_add')}
            </Button>
        </Box>
    );
};

export default ColorField;
export { ColorListField };
