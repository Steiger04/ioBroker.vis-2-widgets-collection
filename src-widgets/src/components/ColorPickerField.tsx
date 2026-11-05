/**
 * Label row of a colour: label, optional hex text and swatch, opening the Farbwähler.
 *
 * @module components/ColorPickerField
 * @remarks
 * Renders a label and a color swatch in a two-column grid (label left, swatch right) so swatches
 * align across stacked fields regardless of label length. A click on the row opens the
 * Farbwähler (`colorPicker/CollectionColorPicker`, ADR-0102) with the label as title; its
 * debounced, normalized picks reach `onChange`. The swatch always shows the effective (resolved)
 * color on a checkerboard (`swatchCheckerboard`): an opaque colour covers it, a translucent one
 * lies on it, `transparent` (or no colour) shows it alone. The Farbwähler starts on the value,
 * else on the swatch colour, else on alpha 0 (`transparent`). The reset button (trash can)
 * appears only when an explicit override exists (resetting reverts to the resolved value).
 *
 * Two flavours: the JsonTable editors keep Solid/Gradient (`allowGradient`) and get the Collection
 * theme colours read through `socket` as presets. The theme-studio variant (ADR-0020) is solid
 * (`allowGradient={false}`: theme palette slots are solid colours) and passes `presets` (the
 * current draft colours). The
 * studio's own field validation judges every value — this row passes picks and typed text on as
 * they come. Independently, `hexInput` shows the value as editable, copyable monospace text next
 * to the swatch (theme studio; off by default).
 */

import type { Connection } from '@iobroker/adapter-react-v5';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, IconButton, InputBase, Typography, useTheme } from '@mui/material';
import { useCallback, useEffect, useId, useState } from 'react';
import type React from 'react';
import Generic from '../Generic';
import CollectionColorPicker from './colorPicker/CollectionColorPicker';
import { CheckerboardSwatch, TRANSPARENT } from './swatchCheckerboard';

/** Props for {@link ColorPickerField}. */
interface ColorPickerFieldProps {
    /** Effective color to display (explicit override or resolved default). */
    value: string;
    /** Called with the new color string whenever the user picks or resets a color. */
    onChange: (color: string) => void;
    /** Label displayed left of the swatch. */
    label: string;
    /** When true, an explicit override exists and the "reset to default" button is shown. */
    overridden?: boolean;
    /** Whether the Farbwähler offers Solid/Gradient (JsonTable editors); default true. */
    allowGradient?: boolean;
    /** Preset colours of the Farbwähler (theme studio: the draft colours); win over `socket`. */
    presets?: string[];
    /**
     * Connection the Farbwähler reads the Collection theme colours from as presets while open —
     * only without `presets` (JsonTable editors). Without both, the preset row stays off.
     */
    socket?: Connection;
    /** Field-level validation message (ADR-0020) rendered under the row; also marks the row. */
    error?: string;
    /**
     * Shows the colour value as editable monospace text next to the swatch (theme studio). An
     * edit commits on Enter or blur — as typed, invalid values included (the caller's field
     * validation judges them); an emptied field commits `''` (reset). Escape restores the value.
     * Off by default.
     */
    hexInput?: boolean;
    /**
     * Colour the swatch shows while the user is not editing, when it differs from `value` — the
     * theme studio passes the resolved colour, so a stored value the resolution drops shows the
     * inherited colour (what the canvas paints) while the hex text keeps the stored one. The
     * JsonTable editors pass the colour the table paints without a value (`cellColors`).
     * Defaults to `value`.
     */
    swatchValue?: string;
}

/**
 * Label row of a colour: label + swatch (+ hex text), opening the Farbwähler.
 *
 * @param props - Component props.
 * @param props.value - Effective color value to display.
 * @param props.onChange - Callback when color changes.
 * @param props.label - Label displayed left of the swatch.
 * @param props.overridden - Whether an explicit override exists (shows reset button).
 * @param props.allowGradient - Whether the Farbwähler offers Solid/Gradient (default true).
 * @param props.presets - Farbwähler presets (theme studio).
 * @param props.socket - Connection for the Collection theme presets (without `presets`).
 * @param props.error - Field-level validation message.
 * @param props.hexInput - Shows the value as editable monospace text next to the swatch.
 * @param props.swatchValue - Colour the swatch shows instead of the value (defaults to it).
 * @returns Rendered field UI.
 */
function ColorPickerField({
    value,
    onChange,
    label,
    overridden,
    allowGradient = true,
    presets,
    socket,
    error,
    hexInput,
    swatchValue,
}: ColorPickerFieldProps): React.JSX.Element {
    const theme = useTheme();
    const errorId = useId();
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    // Local cached value: shows a pick or typed value at once, before the caller's value follows.
    const [cachedValue, setCachedValue] = useState<string>(value);

    // Hex input text while editing; follows the displayed value (picker drags included).
    const [hexText, setHexText] = useState<string>(value);
    useEffect(() => {
        setHexText(cachedValue);
    }, [cachedValue]);

    // The swatch follows a local edit at once (picker drag, typed hex); otherwise it shows
    // the caller's swatch colour, if any.
    const swatchColor = swatchValue !== undefined && cachedValue === value ? swatchValue : cachedValue;

    // Sync cachedValue when the external value prop changes
    useEffect(() => {
        setCachedValue(value);
    }, [value]);

    // The Farbwähler commits debounced and normalized already.
    const handlePickerCommit = useCallback(
        (color: string): void => {
            setCachedValue(color);
            onChange(color);
        },
        [onChange],
    );

    const handleReset = useCallback(
        (e: React.MouseEvent): void => {
            // The reset sits on the row, whose click opens the Farbwähler.
            e.stopPropagation();
            onChange('');
        },
        [onChange],
    );

    // Commits the typed text (Enter / blur) unless it is the displayed value already.
    const commitHex = useCallback((): void => {
        const next = hexText.trim();
        if (next === cachedValue) {
            setHexText(cachedValue);
            return;
        }
        if (next === '') {
            // A reset: the caller supplies the inherited value, show the current one meanwhile.
            setHexText(cachedValue);
        } else {
            setCachedValue(next);
        }
        onChange(next);
    }, [hexText, cachedValue, onChange]);

    const handleHexKeyDown = useCallback(
        (event: React.KeyboardEvent<HTMLInputElement>): void => {
            if (event.key === 'Enter') {
                event.preventDefault();
                commitHex();
            } else if (event.key === 'Escape') {
                // Restore only: the Escape must not also close a surrounding panel or dialog.
                event.stopPropagation();
                setHexText(cachedValue);
            }
        },
        [commitHex, cachedValue],
    );

    return (
        <Box data-theme-error={error ? true : undefined}>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: '1fr auto',
                    alignItems: 'center',
                    gap: 1,
                    py: 0.5,
                    cursor: 'pointer',
                    borderRadius: '6px',
                    '&:hover': { backgroundColor: theme.palette.action.hover },
                    transition: 'background-color 150ms',
                }}
                onClick={(e: React.MouseEvent<HTMLDivElement>): void => setAnchorEl(e.currentTarget)}
            >
                <Typography
                    variant="body2"
                    color={error ? 'error' : 'text.secondary'}
                    sx={{ userSelect: 'none', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
                >
                    {label}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    {hexInput ? (
                        <InputBase
                            value={hexText}
                            onChange={event => setHexText(event.target.value)}
                            onBlur={commitHex}
                            onKeyDown={handleHexKeyDown}
                            // Typing and selecting (copying) the value must not open the picker.
                            onClick={(event: React.MouseEvent): void => event.stopPropagation()}
                            error={Boolean(error)}
                            inputProps={{
                                'data-hex-input': true,
                                'aria-label': label,
                                // The field's error names what is wrong with the typed value.
                                'aria-describedby': error ? errorId : undefined,
                                spellCheck: false,
                            }}
                            sx={{
                                width: '10ch',
                                fontSize: '0.75rem',
                                color: error ? 'error.main' : 'text.primary',
                                borderRadius: '4px',
                                border: 1,
                                borderColor: 'transparent',
                                cursor: 'text',
                                transition: 'border-color 150ms',
                                '&:hover, &.Mui-focused': { borderColor: 'divider' },
                                '& .MuiInputBase-input': { fontFamily: 'monospace', py: 0.25, px: 0.5 },
                            }}
                        />
                    ) : null}
                    <CheckerboardSwatch
                        swatchColor={swatchColor}
                        fill={swatchColor}
                        sx={{
                            width: 22,
                            height: 22,
                            overflow: 'hidden',
                            borderRadius: '4px',
                            border: `1px solid ${error ? theme.palette.error.main : theme.palette.divider}`,
                        }}
                    />
                    {overridden ? (
                        <IconButton
                            size="small"
                            onClick={handleReset}
                            title={Generic.t('theme_studio_reset_color')}
                            sx={{ p: 0.25 }}
                        >
                            <DeleteIcon fontSize="inherit" />
                        </IconButton>
                    ) : null}
                </Box>
            </Box>

            {error ? (
                <Typography
                    id={errorId}
                    variant="caption"
                    color="error"
                    sx={{ display: 'block', mt: -0.25, pb: 0.5 }}
                >
                    {error}
                </Typography>
            ) : null}

            <CollectionColorPicker
                anchorEl={anchorEl}
                onClose={(): void => setAnchorEl(null)}
                title={label}
                value={cachedValue || swatchColor || TRANSPARENT}
                onCommit={handlePickerCommit}
                allowGradient={allowGradient}
                presets={presets}
                socket={socket}
            />
        </Box>
    );
}

export default ColorPickerField;
