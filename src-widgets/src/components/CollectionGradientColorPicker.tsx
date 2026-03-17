/**
 * Color picker field component for the vis-2 widget editor.
 *
 * @module components/CollectionGradientColorPicker
 * @remarks
 * This component is used inside widget attribute editors to edit gradient/background fields.
 * Supports multiple color formats:
 * - Hex colors: #fff, #ffffff, #ffffffff (with alpha)
 * - RGB/RGBA: rgb(255, 255, 255), rgba(255, 255, 255, 0.5)
 * - Gradients: linear-gradient(...), radial-gradient(...)
 *
 * Fallback initialization:
 * - When opening the picker for the first time with an empty field, the component
 *   checks `field.fallbackFields` (optional string array) for valid color values.
 * - Uses the first valid fallback value found, or falls back to `theme.palette.primary.main`.
 * - Example: `fallbackFields: ['sliderColor']` → uses sliderColor if available.
 * - To disable all fallbacks (including theme.palette.primary.main), use an empty array: `fallbackFields: []`.
 * - If `fallbackFields` is undefined, the picker defaults to `theme.palette.primary.main`.
 *
 * Validation is performed in real-time. Invalid inputs are marked with an error state
 * and do not trigger onDataChange callbacks. Empty values are treated as null.
 */

import DeleteIcon from '@mui/icons-material/Delete';
import { Box, IconButton, Popover, TextField, ThemeProvider } from '@mui/material';
import { useCallback, useEffect, useRef, useState } from 'react';
import type React from 'react';
import ColorPicker from 'react-best-gradient-color-picker';
import Generic from '../Generic';
import { extractColorFromValue } from '../lib/helper/extractColorFromValue';
import { validateColorInput } from '../lib/helper/colorValidation';
import { usePopoverPositioning } from '../hooks/usePopoverPositioning';
import type { ExtendedField } from '../types/field-definitions/extended-field';
import type { RxWidgetInfoCustomComponentProperties, WidgetData, VisTheme } from '@iobroker/types-vis-2';

/**
 * Props for CollectionGradientColorPicker component.
 *
 * @interface CollectionGradientColorPickerProps
 * @property {ExtendedField} field - Field definition with optional `fallbackFields` array.
 * @property {WidgetData} data - Current editor data map.
 * @property {(patch: WidgetData) => void} onDataChange - Callback invoked with partial updates.
 * @property {RxWidgetInfoCustomComponentProperties} props - Additional properties (e.g., socket, projectName, instance, adapterName, selectedView, selectedWidgets, project, widgetID).
 */
interface CollectionGradientColorPickerProps {
    field: ExtendedField;
    data: WidgetData;
    onDataChange: (patch: WidgetData) => void;
    props: RxWidgetInfoCustomComponentProperties;
}

/**
 * Resolves the initial color from fallback fields or theme.
 *
 * @param field - Field definition with optional fallbackFields
 * @param data - Current widget data
 * @param primaryColor - Theme primary color to use as final fallback
 * @returns The resolved initial color or null if no valid fallback found
 */
function resolveInitialColor(field: ExtendedField, data: WidgetData, primaryColor: string): string | null {
    // 1. Check fallbackFields (if defined)
    if (field.fallbackFields && Array.isArray(field.fallbackFields) && field.fallbackFields.length > 0) {
        for (const fallbackFieldName of field.fallbackFields) {
            const fallbackValue = data[fallbackFieldName];
            if (fallbackValue && typeof fallbackValue === 'string') {
                const validation = validateColorInput(fallbackValue);
                if (validation.isValid && validation.normalizedValue.trim() !== '') {
                    return validation.normalizedValue;
                }
            }
        }
    }

    // 2. Fallback to theme.palette.primary.main (only if fallbackFields is undefined or non-empty)
    if (!field.fallbackFields || field.fallbackFields.length > 0) {
        return primaryColor;
    }

    return null;
}

/**
 * Renders a compact gradient picker with a popover editor.
 *
 * Component behavior:
 * - TextField allows manual color input with real-time validation
 * - Visual color preview box opens the gradient picker on click
 * - Delete button clears the current value (sets to null)
 * - Invalid inputs show error state but are NOT saved to parent data
 * - Valid inputs immediately trigger onDataChange callbacks
 * - Empty values are normalized to null for consistency
 *
 * @param props - Component props.
 * @param props.field - Field definition (expects `name` property).
 * @param props.data - Current editor data map.
 * @param props.onDataChange - Callback invoked with partial updates.
 * @param props.props - Additional properties (e.g., socket, context, theme).
 * @returns Rendered field UI.
 */
function CollectionGradientColorPicker({
    field,
    data,
    onDataChange,
    props,
}: CollectionGradientColorPickerProps): React.JSX.Element {
    const fieldName: string = field.name!;
    const fieldValue = data[fieldName];
    const [cachedValue, setCachedValue] = useState<string>(fieldValue || '');
    const [error, setError] = useState<boolean>(false);
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const hasInitializedRef = useRef<boolean>(false);

    // Track the last prop value to detect external changes only
    const lastPropValueRef = useRef<string | null | undefined>(fieldValue);

    // Debounce timer for picker-originated onDataChange calls
    const pickerDebounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const theme: VisTheme = props.context.theme;
    const primaryColor = theme.palette.primary.main;

    // Dynamic popover placement + content resize tracking
    const { anchorOrigin, transformOrigin, maxHeight, setContentRef, popoverActionRef } = usePopoverPositioning(
        anchorEl,
        Boolean(anchorEl),
    );

    // Clean up debounce timer on unmount
    useEffect(() => {
        return (): void => {
            if (pickerDebounceRef.current !== null) {
                clearTimeout(pickerDebounceRef.current);
            }
        };
    }, []);

    /**
     * Handles color value changes with validation.
     * Uses guard clauses for cleaner control flow.
     *
     * @param newValue - The new color value
     * @param debounce - If true, debounce onDataChange (used for picker drag events)
     */
    const handleChange = useCallback(
        (newValue: string | null | undefined, debounce = false): void => {
            // Cancel any pending debounced update
            if (pickerDebounceRef.current !== null) {
                clearTimeout(pickerDebounceRef.current);
                pickerDebounceRef.current = null;
            }

            // Guard 1: Handle null/undefined - treat as empty and clear error
            if (newValue === null || newValue === undefined) {
                setCachedValue('');
                setError(false);
                lastPropValueRef.current = null;
                onDataChange({ [fieldName]: null });
                hasInitializedRef.current = false;
                return;
            }

            // Guard 2: Type check - reject non-string inputs with error state
            if (typeof newValue !== 'string') {
                setError(true);
                return;
            }

            // Guard 3: Handle empty string (after trimming) - clear value and error
            const trimmedValue = newValue.trim();
            if (trimmedValue === '') {
                setCachedValue('');
                setError(false);
                lastPropValueRef.current = null;
                onDataChange({ [fieldName]: null });
                hasInitializedRef.current = false;
                return;
            }

            // Validate non-empty string values
            const validation = validateColorInput(newValue);

            // Always update cachedValue to reflect user input (even if invalid)
            setCachedValue(newValue);

            // Guard 4: Handle invalid input - set error but do NOT call onDataChange
            if (!validation.isValid) {
                setError(true);
                return;
            }

            // Valid input - clear error
            setError(false);

            // Resolve the final value to persist
            let finalValue: string | null;
            if (field.noGradient === true) {
                const extractedColor = extractColorFromValue(validation.normalizedValue);
                if (extractedColor === null) {
                    setError(true);
                    return;
                }
                finalValue = extractedColor;
            } else {
                finalValue = validation.normalizedValue || null;
            }

            // Update lastPropValueRef BEFORE onDataChange to prevent
            // the sync effect from overwriting cachedValue during rapid updates
            lastPropValueRef.current = finalValue;

            if (debounce) {
                // Debounce picker-originated changes to ensure the final drag
                // value is always persisted (trailing edge fires after drag ends)
                pickerDebounceRef.current = setTimeout(() => {
                    pickerDebounceRef.current = null;
                    onDataChange({ [fieldName]: finalValue });
                }, 150);
            } else {
                onDataChange({ [fieldName]: finalValue });
            }
        },
        [fieldName, field.noGradient, onDataChange],
    );

    const handlePickerChange = useCallback((gradient: string): void => handleChange(gradient, true), [handleChange]);

    const handleTextChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>): void => handleChange(event.target.value),
        [handleChange],
    );

    const handleClear = useCallback((): void => handleChange(null), [handleChange]);

    const open = Boolean(anchorEl);

    // Synchronize with external prop changes (e.g., undo/redo, preset loading)
    useEffect(() => {
        // Only update if the prop value has actually changed from the outside
        if (fieldValue !== lastPropValueRef.current) {
            lastPropValueRef.current = fieldValue;

            const normalizedPropValue = fieldValue || '';
            setCachedValue(normalizedPropValue);
            setError(false);

            // Reset initialization flag on external changes
            if (!normalizedPropValue || normalizedPropValue.trim() === '') {
                hasInitializedRef.current = false;
            }
        }
    }, [fieldValue]);

    // Initialize fallback color on first popover open
    useEffect(() => {
        // Guard: Initialize only on first popover open
        if (!open || hasInitializedRef.current) {
            return;
        }

        // Guard: Check if field already has a value
        if (fieldValue && fieldValue.trim() !== '') {
            hasInitializedRef.current = true;
            return;
        }

        // Resolve initial color from fallback chain
        const initialColor = resolveInitialColor(field, data, primaryColor);

        // Validate and set initial color (only if a value was found)
        if (initialColor) {
            const validation = validateColorInput(initialColor);
            if (validation.isValid) {
                if (field.noGradient === true) {
                    const extractedColor = extractColorFromValue(validation.normalizedValue);
                    if (extractedColor !== null) {
                        setCachedValue(initialColor);
                        setError(false);
                        lastPropValueRef.current = extractedColor;
                        onDataChange({ [fieldName]: extractedColor });
                    }
                } else {
                    setCachedValue(initialColor);
                    setError(false);
                    onDataChange({ [fieldName]: initialColor });
                }
            }
        }
        hasInitializedRef.current = true;
    }, [open, data, fieldName, field, fieldValue, primaryColor, onDataChange]);

    return (
        <>
            <ThemeProvider theme={theme}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 0.5, mt: 1 }}>
                    <TextField
                        variant="standard"
                        fullWidth
                        value={cachedValue}
                        error={error}
                        helperText={error ? 'Invalid color format (use Hex, RGB, RGBA, or Gradient)' : ''}
                        onChange={handleTextChange}
                        slotProps={{
                            htmlInput: {
                                style: {
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    paddingBottom: '2px',
                                    fontSize: '80%',
                                } as React.CSSProperties,
                            },
                        }}
                    />
                    {cachedValue && (
                        <IconButton
                            onClick={handleClear}
                            title={Generic.t('clear_color')}
                            size="large"
                            sx={{ mt: -1, mr: -1.5 }}
                        >
                            <DeleteIcon />
                        </IconButton>
                    )}

                    <Box
                        onClick={(e: React.MouseEvent<HTMLDivElement>): void => setAnchorEl(e.currentTarget)}
                        title={Generic.t('choose_color')}
                        sx={{
                            mt: cachedValue ? '4px' : '-2px',
                            px: '4px',
                            py: cachedValue ? '4px' : '3px',
                            backgroundColor: cachedValue
                                ? theme.name === 'light'
                                    ? theme.palette.common.white
                                    : '#121212'
                                : 'transparent',
                            borderRadius: '1px',
                            display: 'inline-block',
                            cursor: 'pointer',
                            verticalAlign: 'middle',
                            boxSizing: 'border-box',
                            border: error
                                ? `1px solid ${theme.palette.error.main}`
                                : cachedValue
                                  ? `1px solid ${theme.name === 'light' ? theme.palette.grey['400'] : theme.palette.common.black}`
                                  : `1px dashed ${theme.name === 'light' ? theme.palette.grey['400'] : theme.palette.text.secondary}`,
                            opacity: error ? 0.6 : 1,
                        }}
                    >
                        <Box
                            sx={{
                                width: cachedValue ? '36px' : '38px',
                                height: cachedValue ? '14px' : '18px',
                                borderRadius: '2px',
                                background: error
                                    ? 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,0,0,0.1) 2px, rgba(255,0,0,0.1) 4px)'
                                    : cachedValue
                                      ? cachedValue
                                      : 'transparent',
                            }}
                        />
                    </Box>
                </Box>

                <Popover
                    action={popoverActionRef}
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
                    open={open}
                    anchorEl={anchorEl}
                    onClose={(): void => setAnchorEl(null)}
                    transformOrigin={transformOrigin}
                    anchorOrigin={anchorOrigin}
                >
                    <Box
                        ref={setContentRef}
                        sx={{ borderRadius: '6px' }}
                    >
                        <ColorPicker
                            value={cachedValue || theme.palette.primary.main}
                            onChange={handlePickerChange}
                            hidePresets
                            hideInputs
                            hideEyeDrop
                            hideInputType
                        />
                    </Box>
                </Popover>
            </ThemeProvider>
        </>
    );
}

export default CollectionGradientColorPicker;
