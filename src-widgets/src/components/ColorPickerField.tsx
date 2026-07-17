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
 */

import ClearIcon from '@mui/icons-material/Clear';
import { Box, IconButton, Popover, Typography, useTheme } from '@mui/material';
import { useCallback, useEffect, useRef, useState } from 'react';
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
}

/**
 * Minimal color picker field: label + swatch + popover, laid out as a grid row.
 *
 * @param props - Component props.
 * @param props.value - Effective color value to display.
 * @param props.onChange - Callback when color changes.
 * @param props.label - Label displayed left of the swatch.
 * @param props.overridden - Whether an explicit override exists (shows reset button).
 * @returns Rendered field UI.
 */
function ColorPickerField({ value, onChange, label, overridden }: ColorPickerFieldProps): React.JSX.Element {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    // Local cached value for immediate UI feedback during picker drag
    const [cachedValue, setCachedValue] = useState<string>(value);

    // Debounce timer for picker-originated onChange calls
    const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Dynamic popover placement + content resize tracking
    const { anchorOrigin, transformOrigin, maxHeight, setContentRef, popoverActionRef } = usePopoverPositioning(
        anchorEl,
        Boolean(anchorEl),
    );

    const open = Boolean(anchorEl);

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

    return (
        <Box>
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
                    color="text.secondary"
                    sx={{ userSelect: 'none', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
                >
                    {label}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Box
                        sx={{
                            width: 22,
                            height: 22,
                            borderRadius: '4px',
                            background: cachedValue || 'transparent',
                            border: cachedValue
                                ? `1px solid ${theme.palette.divider}`
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
                        hidePresets
                        hideInputs
                        hideEyeDrop
                        hideInputType
                    />
                </Box>
            </Popover>
        </Box>
    );
}

export default ColorPickerField;
