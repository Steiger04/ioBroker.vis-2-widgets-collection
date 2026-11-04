/**
 * Input row of the Farbwähler: HEX (HEXA below an alpha byte of ff) · R · G · B · A (ADR-0102).
 *
 * @module components/colorPicker/ColorInputRow
 * @remarks
 * Replaces the library's own inputs (they clamp on every keystroke, turn a cleared field into 0
 * and read "1" as 100 % — upstream issue #126). Built on the library's exported
 * `useColorPicker` hook, so inside a gradient the selected stop is the one edited.
 *
 * Each field keeps its raw text while the user types and applies it on Enter or blur; an invalid
 * or empty text is not applied, the field shows the current value again. Escape with an open
 * edit resets the field and stops the event (the Farbwähler stays open); without an open edit
 * Escape travels on and closes the Farbwähler.
 *
 * A is the opacity in percent (0–100), as in the library; R, G, B are 0–255. Numbers outside
 * the range are clamped when applied.
 */
import { Box, TextField, Tooltip } from '@mui/material';
import { useState } from 'react';
import type React from 'react';
import { useColorPicker } from 'react-best-gradient-color-picker';
import Generic from '../../Generic';
import { clamp, parseHexColor, rgbaToHex } from '../../lib/helper/colorInputRules';

/** Props for {@link ColorInputRow}. */
export interface ColorInputRowProps {
    /** The Farbwähler's current raw value (solid colour or gradient). */
    value: string;
    /** Receives the edited raw value — handled like a library change. */
    onChange: (raw: string) => void;
}

/** Channel of the selected colour: r, g, b 0–255, a 0–1. */
interface Rgba {
    r: number;
    g: number;
    b: number;
    a: number;
}

/** A number as typed (integer or decimal, optional surrounding blanks). */
const NUMBER_RE = /^\s*\d+(?:[.,]\d+)?\s*$/;

/** Parses a typed number (`,` as decimal separator too); `null` when it is none. */
function parseNumber(text: string): number | null {
    return NUMBER_RE.test(text) ? Number(text.trim().replace(',', '.')) : null;
}

/** The library's own colour notation. */
function toRgbaString({ r, g, b, a }: Rgba): string {
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

/** Parses typed hex (the `#` optional); a 3/6-digit hex keeps the current alpha. `null` when invalid. */
function parseHex(text: string, current: Rgba): Rgba | null {
    const trimmed = text.trim();
    const hex = parseHexColor(trimmed.startsWith('#') ? trimmed : `#${trimmed}`);
    if (!hex) {
        return null;
    }
    return {
        r: hex.r,
        g: hex.g,
        b: hex.b,
        a: hex.alpha === undefined ? current.a : Math.round(hex.alpha * 1000) / 1000,
    };
}

/** Props of one channel field. */
interface ChannelFieldProps {
    channel: 'hex' | 'r' | 'g' | 'b' | 'a';
    label: string;
    /** Current value, formatted. */
    shown: string;
    /** Turns typed text into the new colour; `null` = invalid, nothing is applied. */
    parse: (text: string) => Rgba | null;
    onApply: (next: Rgba) => void;
}

/**
 * One field of the row: raw text while editing, applied on Enter / blur, reset on Escape.
 *
 * @param props - Component props.
 * @param props.channel - Channel name, set as `data-channel` on the input.
 * @param props.label - Visible label.
 * @param props.shown - Current value, formatted.
 * @param props.parse - Turns typed text into the new colour (`null` = invalid).
 * @param props.onApply - Receives the new colour.
 * @returns The field.
 */
function ChannelField({ channel, label, shown, parse, onApply }: ChannelFieldProps): React.JSX.Element {
    // Raw text of an open edit; null = the field shows the current value.
    const [edit, setEdit] = useState<string | null>(null);

    const apply = (): void => {
        if (edit === null) {
            return;
        }
        setEdit(null);
        if (edit.trim() === shown) {
            return;
        }
        const next = parse(edit);
        if (next !== null) {
            onApply(next);
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
        if (event.key === 'Enter') {
            apply();
        } else if (event.key === 'Escape' && edit !== null) {
            // Keep the Farbwähler open: this Escape only takes back the open edit.
            event.stopPropagation();
            setEdit(null);
        }
    };

    return (
        <TextField
            size="small"
            label={label}
            value={edit ?? shown}
            onChange={(event): void => setEdit(event.target.value)}
            onBlur={apply}
            onKeyDown={handleKeyDown}
            slotProps={{
                inputLabel: { shrink: true },
                htmlInput: {
                    'data-channel': channel,
                    spellCheck: false,
                    autoComplete: 'off',
                    inputMode: channel === 'hex' ? 'text' : 'decimal',
                },
            }}
            sx={{
                minWidth: 0,
                '& .MuiInputBase-input': { px: 0.75, py: 0.75, fontSize: '0.8125rem' },
            }}
        />
    );
}

/**
 * The input row HEX · R · G · B · A for the colour (or selected gradient stop) of `value`.
 *
 * @param props - Component props.
 * @param props.value - The Farbwähler's raw value.
 * @param props.onChange - Receives the edited raw value.
 * @returns The input row.
 */
function ColorInputRow({ value, onChange }: ColorInputRowProps): React.JSX.Element {
    const { rgbaArr, handleChange } = useColorPicker(value, onChange);
    const [r, g, b, a] = rgbaArr;
    const current: Rgba = { r, g, b, a };
    // Same hex as the Regeln für Farbeingaben store for a pick (one source for the alpha byte).
    const hex = rgbaToHex(r, g, b, a);
    // The hook writes the selected stop of a gradient, else the solid colour.
    const applyRgba = (next: Rgba): void => handleChange(toRgbaString(next));
    const channel =
        (key: 'r' | 'g' | 'b') =>
        (text: string): Rgba | null => {
            const n = parseNumber(text);
            return n === null ? null : { ...current, [key]: Math.round(clamp(n, 0, 255)) };
        };

    return (
        <Box
            data-picker-inputs
            sx={{ display: 'grid', gridTemplateColumns: '2fr repeat(4, 1fr)', gap: '6px', mt: 1.5 }}
        >
            <ChannelField
                channel="hex"
                label={hex.length > 7 ? 'HEXA' : 'HEX'}
                shown={hex}
                parse={(text): Rgba | null => parseHex(text, current)}
                onApply={applyRgba}
            />
            <ChannelField
                channel="r"
                label="R"
                shown={String(r)}
                parse={channel('r')}
                onApply={applyRgba}
            />
            <ChannelField
                channel="g"
                label="G"
                shown={String(g)}
                parse={channel('g')}
                onApply={applyRgba}
            />
            <ChannelField
                channel="b"
                label="B"
                shown={String(b)}
                parse={channel('b')}
                onApply={applyRgba}
            />
            <Tooltip
                title={Generic.t('color_picker_alpha_hint')}
                disableFocusListener
            >
                <Box sx={{ minWidth: 0, display: 'grid' }}>
                    <ChannelField
                        channel="a"
                        label="A"
                        shown={String(Math.round(a * 100))}
                        parse={(text): Rgba | null => {
                            const n = parseNumber(text);
                            return n === null ? null : { ...current, a: clamp(n, 0, 100) / 100 };
                        }}
                        onApply={applyRgba}
                    />
                </Box>
            </Tooltip>
        </Box>
    );
}

export default ColorInputRow;
