/**
 * Compact color picker field with swatch preview and popover editor.
 *
 * @module components/ColorPickerField
 * @remarks
 * Renders a label and a clickable color swatch in a two-column grid (label left,
 * swatch right) so swatches align across stacked fields regardless of label
 * length. Clicking the swatch opens a popover with `react-best-gradient-color-picker`.
 * The swatch always shows the effective (resolved) color; the reset button
 * appears only when an explicit override exists (resetting reverts to the
 * resolved value). Uses the shared usePopoverPositioning hook for popover
 * positioning.
 *
 * Two flavours: the default keeps the picker minimal (visual picking only — used by
 * the JsonTable editors). Passing `presets` upgrades it to the theme-studio variant
 * (ADR-0020): hex/rgba inputs, the eyedropper and a preset swatch row (fed with the
 * current theme colours) become visible, and the solid/gradient toggle is hidden —
 * theme palette slots are solid colours. Independently, `hexInput` shows the value as
 * editable, copyable monospace text next to the swatch (theme studio; off by default).
 */

import ClearIcon from '@mui/icons-material/Clear';
import { Box, IconButton, InputBase, Popover, Typography, useTheme } from '@mui/material';
import { useCallback, useEffect, useId, useRef, useState } from 'react';
import type React from 'react';
import ColorPicker from 'react-best-gradient-color-picker';
import Generic from '../Generic';
import { usePopoverPositioning } from '../hooks/usePopoverPositioning';

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
    /**
     * Theme-studio variant (ADR-0020): preset swatches shown in the popover; also enables the
     * hex/rgba inputs and the eyedropper, and hides the solid/gradient toggle. Omit for the
     * minimal visual-only picker.
     */
    presets?: string[];
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
     * inherited colour (what the canvas paints) while the hex text keeps the stored one.
     * Defaults to `value`.
     */
    swatchValue?: string;
}

/**
 * Minimal color picker field: label + swatch + popover, laid out as a grid row.
 *
 * @param props - Component props.
 * @param props.value - Effective color value to display.
 * @param props.onChange - Callback when color changes.
 * @param props.label - Label displayed left of the swatch.
 * @param props.overridden - Whether an explicit override exists (shows reset button).
 * @param props.presets - Theme-studio variant: preset swatches + inputs + eyedropper.
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
    presets,
    error,
    hexInput,
    swatchValue,
}: ColorPickerFieldProps): React.JSX.Element {
    const theme = useTheme();
    const errorId = useId();
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    // Local cached value for immediate UI feedback during picker drag
    const [cachedValue, setCachedValue] = useState<string>(value);

    // Hex input text while editing; follows the displayed value (picker drags included).
    const [hexText, setHexText] = useState<string>(value);
    useEffect(() => {
        setHexText(cachedValue);
    }, [cachedValue]);

    // Debounce timer for picker-originated onChange calls
    const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Dynamic popover placement + content resize tracking
    const { anchorOrigin, transformOrigin, maxHeight, setContentRef, popoverActionRef } = usePopoverPositioning(
        anchorEl,
        Boolean(anchorEl),
    );

    const open = Boolean(anchorEl);

    // The swatch follows a local edit at once (picker drag, typed hex); otherwise it shows
    // the caller's swatch colour, if any.
    const swatchColor = swatchValue !== undefined && cachedValue === value ? swatchValue : cachedValue;

    // Sync cachedValue when the external value prop changes
    useEffect(() => {
        setCachedValue(value);
    }, [value]);

    // Clean up debounce timer on unmount
    useEffect(() => {
        return (): void => {
            if (debounceRef.current !== null) {
                clearTimeout(debounceRef.current);
            }
        };
    }, []);

    // Debounced handler for picker drag events
    const handlePickerChange = useCallback(
        (color: string): void => {
            setCachedValue(color);

            if (debounceRef.current !== null) {
                clearTimeout(debounceRef.current);
            }

            debounceRef.current = setTimeout(() => {
                debounceRef.current = null;
                onChange(color);
            }, 150);
        },
        [onChange],
    );

    const handleReset = useCallback(
        (e: React.MouseEvent): void => {
            e.stopPropagation();
            if (debounceRef.current !== null) {
                clearTimeout(debounceRef.current);
                debounceRef.current = null;
            }
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
        if (debounceRef.current !== null) {
            clearTimeout(debounceRef.current);
            debounceRef.current = null;
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
                    <Box
                        data-swatch-color={swatchColor}
                        sx={{
                            width: 22,
                            height: 22,
                            borderRadius: '4px',
                            background: swatchColor || 'transparent',
                            border: swatchColor
                                ? `1px solid ${error ? theme.palette.error.main : theme.palette.divider}`
                                : `1px dashed ${theme.palette.text.disabled}`,
                        }}
                    />
                    {overridden ? (
                        <IconButton
                            size="small"
                            onClick={handleReset}
                            title={Generic.t('theme_studio_reset_color')}
                            sx={{ p: 0.25 }}
                        >
                            <ClearIcon fontSize="inherit" />
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

            <Popover
                action={popoverActionRef}
                open={open}
                anchorEl={anchorEl}
                onClose={(): void => setAnchorEl(null)}
                anchorOrigin={anchorOrigin}
                transformOrigin={transformOrigin}
                slotProps={{
                    paper: {
                        elevation: 0,
                        sx: {
                            p: '9px',
                            borderRadius: '6px',
                            backgroundColor: 'rgb(32,32,32)',
                            boxSizing: 'border-box',
                            maxHeight,
                            overflowX: 'hidden',
                            overflowY: 'auto',
                        },
                    },
                }}
            >
                <Box
                    ref={setContentRef}
                    sx={{ borderRadius: '6px' }}
                >
                    <ColorPicker
                        value={cachedValue || '#ffffff'}
                        onChange={handlePickerChange}
                        hidePresets={!presets}
                        presets={presets}
                        hideInputs={!presets}
                        hideEyeDrop={!presets}
                        hideInputType={!presets}
                        // Studio variant only: palette slots are solid colours, so the
                        // gradient machinery stays hidden. The default (JsonTable) path
                        // keeps every control it had before ADR-0020.
                        hideColorTypeBtns={Boolean(presets)}
                        hideGradientControls={Boolean(presets)}
                        hideAdvancedSliders={Boolean(presets)}
                        hideColorGuide={Boolean(presets)}
                    />
                </Box>
            </Popover>
        </Box>
    );
}

export default ColorPickerField;
