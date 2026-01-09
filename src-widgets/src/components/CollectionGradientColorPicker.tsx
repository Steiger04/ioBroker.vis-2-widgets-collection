/**
 * Gradient color picker field component for the vis-2 widget editor.
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
import { useEffect, useRef, useState } from 'react';
import type React from 'react';
import ColorPicker from 'react-best-gradient-color-picker';
import Generic from '../Generic';
import type {
    RxWidgetInfoAttributesField,
    RxWidgetInfoCustomComponentProperties,
    WidgetData,
    VisTheme,
} from '@iobroker/types-vis-2';

/**
 * Validates color input string and returns normalized value.
 *
 * Validation rules:
 * - Empty or whitespace-only strings are considered valid and normalized to ''
 * - Hex colors must match #RGB, #RRGGBB, or #RRGGBBAA format (case-insensitive)
 * - RGB/RGBA must have valid syntax with numeric components
 * - Gradients must start with linear-gradient or radial-gradient
 * - All valid inputs are trimmed and returned as normalizedValue
 *
 * @param value - Input string to validate.
 * @returns Validation result with isValid flag and normalized value.
 */
function validateColorInput(value: string): { isValid: boolean; normalizedValue: string } {
    if (!value || value.trim() === '') {
        return { isValid: true, normalizedValue: '' };
    }

    const trimmedValue: string = value.trim();

    // Hex color validation: #RGB, #RRGGBB, #RRGGBBAA
    const hexRegex = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/;
    if (hexRegex.test(trimmedValue)) {
        return { isValid: true, normalizedValue: trimmedValue };
    }

    // RGB/RGBA validation: rgb(r, g, b) or rgba(r, g, b, a)
    const rgbRegex = /^rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*(,\s*[\d.]+\s*)?\)$/i;
    if (rgbRegex.test(trimmedValue)) {
        return { isValid: true, normalizedValue: trimmedValue };
    }

    // Gradient validation: linear-gradient(...) or radial-gradient(...)
    const gradientRegex = /^(linear-gradient|radial-gradient)\(.*\)$/i;
    if (gradientRegex.test(trimmedValue)) {
        return { isValid: true, normalizedValue: trimmedValue };
    }

    return { isValid: false, normalizedValue: trimmedValue };
}

/**
 * Extended field definition with optional fallbackFields array.
 *
 * @typedef ExtendedField
 * @type {RxWidgetInfoAttributesField & { fallbackFields?: string[] }}
 * @property {string[]} [fallbackFields] - Optional array of field names to use as fallbacks during initialization.
 */
type ExtendedField = RxWidgetInfoAttributesField & {
    fallbackFields?: string[];
};

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
    const [cachedValue, setCachedValue] = useState<string>(data[fieldName] || '');
    const [error, setError] = useState<boolean>(false);
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const popoverActionRef = useRef<{ updatePosition: () => void }>(null);
    // State for the ColorPicker container element (callback-ref pattern)
    const [colorPickerContainer, setColorPickerContainer] = useState<HTMLDivElement | null>(null);
    const hasInitializedRef = useRef<boolean>(false);

    // Track the last prop value to detect external changes only
    const lastPropValueRef: React.MutableRefObject<string | null | undefined> = useRef<string | null | undefined>(
        data[fieldName],
    );

    const theme: VisTheme = props.context.theme;

    const handleChange = (newValue: string | null | undefined): void => {
        // Step 1: Handle null/undefined - treat as empty and clear error
        if (newValue === null || newValue === undefined) {
            setCachedValue('');
            setError(false);
            onDataChange({ [fieldName]: null });
            hasInitializedRef.current = false;
            return;
        }

        // Step 2: Type check - reject non-string inputs with error state
        if (typeof newValue !== 'string') {
            setError(true);
            // Do NOT call onDataChange for invalid type
            return;
        }

        // Step 3: Handle empty string (after trimming) - clear value and error
        const trimmedValue: string = newValue.trim();
        if (trimmedValue === '') {
            setCachedValue('');
            setError(false);
            onDataChange({ [fieldName]: null });
            hasInitializedRef.current = false;
            return;
        }

        // Step 4: Validate non-empty string values
        const validation: { isValid: boolean; normalizedValue: string } = validateColorInput(newValue);

        // Always update cachedValue to reflect user input (even if invalid)
        setCachedValue(newValue);

        // Step 5: Handle validation result
        if (validation.isValid) {
            // Valid input: clear error and save normalized value
            setError(false);
            onDataChange({ [fieldName]: validation.normalizedValue || null });
        } else {
            // Invalid input: set error but do NOT call onDataChange
            // This prevents saving invalid data while preserving user input for correction
            setError(true);
        }
    };

    const handlePickerChange = (gradient: string): void => handleChange(gradient);
    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>): void => handleChange(event.target.value);
    const handleClear = (): void => handleChange(null);

    const open = Boolean(anchorEl);

    // Synchronize with external prop changes (e.g., undo/redo, preset loading)
    // Only react to actual prop changes, not user input changes
    useEffect(() => {
        const propValue: string | null | undefined = data[fieldName];

        // Only update if the prop value has actually changed from the outside
        // (not as a result of user input via onDataChange)
        if (propValue !== lastPropValueRef.current) {
            lastPropValueRef.current = propValue;

            const normalizedPropValue: string = propValue || '';
            setCachedValue(normalizedPropValue);
            setError(false); // Clear error on external update

            // Reset initialization flag on external changes
            if (!normalizedPropValue || normalizedPropValue.trim() === '') {
                hasInitializedRef.current = false;
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data[fieldName]]);

    useEffect(() => {
        // Wait until the Popover is open AND the container element exists
        if (!open || !colorPickerContainer) {
            return;
        }

        const resizeObserver = new ResizeObserver(() => {
            popoverActionRef.current?.updatePosition();
        });

        resizeObserver.observe(colorPickerContainer);

        return () => {
            resizeObserver.disconnect();
        };
    }, [open, colorPickerContainer]);

    useEffect(() => {
        // Initialize only on first popover open
        if (!open || hasInitializedRef.current) {
            return;
        }

        // Check if field already has a value
        const currentValue = data[fieldName];
        if (currentValue && currentValue.trim() !== '') {
            hasInitializedRef.current = true;
            return;
        }

        // Fallback chain: fallbackFields > theme.palette.primary.main
        let initialColor: string | null = null;

        // 1. Check fallbackFields (if defined)
        if (field.fallbackFields && Array.isArray(field.fallbackFields) && field.fallbackFields.length > 0) {
            for (const fallbackFieldName of field.fallbackFields) {
                const fallbackValue = data[fallbackFieldName];
                if (fallbackValue && typeof fallbackValue === 'string') {
                    const validation = validateColorInput(fallbackValue);
                    if (validation.isValid && validation.normalizedValue.trim() !== '') {
                        initialColor = validation.normalizedValue;
                        break; // Use first valid fallback
                    }
                }
            }
        }

        // 2. Fallback to theme.palette.primary.main
        if (!initialColor && (!field.fallbackFields || field.fallbackFields.length > 0)) {
            initialColor = theme.palette.primary.main;
        }

        // Validate and set initial color (only if a value was found)
        if (initialColor) {
            const validation = validateColorInput(initialColor);
            if (validation.isValid) {
                setCachedValue(initialColor);
                setError(false);
                onDataChange({ [fieldName]: initialColor });
            }
        }
        hasInitializedRef.current = true;
    }, [open, data, fieldName, field.fallbackFields, theme.palette.primary.main, onDataChange]);

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
                                    // color: theme.palette.text.primary,
                                } as React.CSSProperties,
                            },
                        }}
                    />
                    {cachedValue && (
                        <IconButton
                            onClick={handleClear}
                            title={Generic.t('clear_color')}
                            size="large"
                            sx={{
                                mt: -1,
                                mr: -1.5,
                            }}
                        >
                            <DeleteIcon />
                        </IconButton>
                    )}

                    <Box
                        onClick={(e: React.MouseEvent<HTMLDivElement>): void => {
                            setAnchorEl(e.currentTarget);
                        }}
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
                            // Show error border in red when validation fails
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
                                // Only show color preview if valid, otherwise show striped error pattern
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
                    aria-hidden={!open}
                    slotProps={{
                        paper: {
                            elevation: 0,
                            sx: {
                                p: '9px',
                                borderRadius: '6px',
                                backgroundColor: 'rgb(32,32,32)',
                                maxHeight: 'calc(100vh - 100px)',
                                overflow: 'auto',
                            },
                        },
                    }}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={(): void => setAnchorEl(null)}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                >
                    <Box
                        ref={setColorPickerContainer}
                        sx={{
                            borderRadius: '6px',
                        }}
                    >
                        <ColorPicker
                            value={cachedValue || ''}
                            onChange={handlePickerChange}
                            hidePresets
                            hideInputs
                            // hideEyeDrop
                            hideAdvancedSliders={false}
                            hideColorGuide={false}
                            hideInputType
                            // hideColorTypeBtns
                        />
                    </Box>
                </Popover>
            </ThemeProvider>
        </>
    );
}

export default CollectionGradientColorPicker;
