/**
 * Compact color picker field with swatch preview and popover editor.
 *
 * @module components/ColorPickerField
 * @remarks
 * Renders a label, a clickable color swatch, and an optional clear button.
 * Clicking the swatch opens a popover with `react-best-gradient-color-picker`.
 * Uses the shared usePopoverResizeObserver hook for popover positioning.
 */

import ClearIcon from '@mui/icons-material/Clear';
import { Box, IconButton, Popover, Typography, useTheme } from '@mui/material';
import { useCallback, useEffect, useRef, useState } from 'react';
import type React from 'react';
import ColorPicker from 'react-best-gradient-color-picker';
import { usePopoverPositioning } from '../hooks/usePopoverPositioning';

/** Props for {@link ColorPickerField}. */
interface ColorPickerFieldProps {
    /** Current color value (hex, rgb, rgba, gradient, or empty string). */
    value: string;
    /** Called with the new color string whenever the user picks or clears a color. */
    onChange: (color: string) => void;
    /** Label displayed above the swatch. */
    label: string;
}

/**
 * Minimal color picker field: label + swatch + popover.
 *
 * @param props - Component props.
 * @param props.value - Current color value.
 * @param props.onChange - Callback when color changes.
 * @param props.label - Label displayed above the swatch.
 * @returns Rendered field UI.
 */
function ColorPickerField({ value, onChange, label }: ColorPickerFieldProps): React.JSX.Element {
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

    return (
        <Box sx={{ flex: 1, minWidth: 0 }}>
            <Box
                sx={{
                    display: 'flex',
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
                    sx={{ flexShrink: 0, userSelect: 'none' }}
                >
                    {label}
                </Typography>

                <Box
                    sx={{
                        width: 22,
                        height: 22,
                        borderRadius: '4px',
                        flexShrink: 0,
                        background: cachedValue || 'transparent',
                        border: cachedValue
                            ? `1px solid ${theme.palette.divider}`
                            : `1px dashed ${theme.palette.text.disabled}`,
                    }}
                />

                {cachedValue && (
                    <IconButton
                        size="small"
                        onClick={(e: React.MouseEvent) => {
                            e.stopPropagation();
                            if (debounceRef.current !== null) {
                                clearTimeout(debounceRef.current);
                                debounceRef.current = null;
                            }
                            setCachedValue('');
                            onChange('');
                        }}
                        sx={{ p: 0.25, ml: -0.5 }}
                    >
                        <ClearIcon fontSize="inherit" />
                    </IconButton>
                )}
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
