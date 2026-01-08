/**
 * Gradient color picker field component for the vis-2 widget editor.
 *
 * @module components/CollectionGradientColorPicker
 * @remarks
 * This component is used inside widget attribute editors to edit gradient/background fields.
 */

import { Theme } from '@iobroker/adapter-react-v5';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, IconButton, Popover, TextField, ThemeProvider } from '@mui/material';
import { useRef, useEffect, useState, useContext } from 'react';
import ColorPicker, { useColorPicker } from 'react-best-gradient-color-picker';

/**
 * Validates color input string and returns normalized value.
 *
 * @param {string} value - Input string to validate.
 * @returns {{ isValid: boolean, normalizedValue: string }} Validation result.
 */
function validateColorInput(value) {
    if (!value || value.trim() === '') {
        return { isValid: true, normalizedValue: '' };
    }

    const trimmedValue = value.trim();

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
 * @typedef {Object} CollectionGradientColorPickerProps
 * @property {{ name?: string }=} field Field definition (expects `name`).
 * @property {Record<string, any>=} data Current editor data map.
 * @property {(patch: Record<string, any>) => void} onDataChange Callback invoked with partial updates.
 * @property {Record<string, any>=} props Additional properties (e.g., socket, projectName, instance, adapterName, selectedView, selectedWidgets, project, widgetID).
 */

/**
 * Renders a compact gradient picker with a popover editor.
 *
 * @param {CollectionGradientColorPickerProps} props Component props.
 * @returns {JSX.Element} Rendered field UI.
 */
function CollectionGradientColorPicker({ field, data, onDataChange, props }) {
    const fieldName = field?.name;
    const [color, setColor] = useState(data[fieldName] || null);
    const [textValue, setTextValue] = useState(data[fieldName] || '');
    const [error, setError] = useState(false);
    const { setGradient } = useColorPicker(color, setColor);
    const [anchorEl, setAnchorEl] = useState(null);

    const theme = props.context.theme;

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
        color ? setGradient(color) : setGradient();
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleTextFieldChange = event => {
        setTextValue(event.target.value);
        setError(false);
    };

    const handleTextFieldBlur = () => {
        const validation = validateColorInput(textValue);
        if (validation.isValid) {
            const newColor = validation.normalizedValue || null;
            setColor(newColor);
            setError(false);
            onDataChange({ [fieldName]: newColor });
        } else {
            setError(true);
        }
    };

    const handleClear = () => {
        setColor(null);
        setTextValue('');
        setError(false);
        onDataChange({ [fieldName]: null });
    };

    const onChangeHandler = gradient => {
        setColor(gradient);
        onDataChange({ [fieldName]: gradient });
    };

    const open = Boolean(anchorEl);

    useEffect(() => {
        // Synchronize color to textValue
        setTextValue(color || '');
    }, [color]);

    useEffect(() => {
        console.log('props.context.theme', props?.context?.theme);
    }, [props?.context?.theme]);

    return (
        <>
            <ThemeProvider theme={theme}>
                <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 0.5, mt: '7px' }}>
                    <TextField
                        variant="standard"
                        fullWidth
                        value={textValue}
                        error={error}
                        onChange={handleTextFieldChange}
                        onBlur={handleTextFieldBlur}
                        slotProps={{
                            htmlInput: {
                                style: {
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    paddingBottom: '2px',
                                    fontSize: '80%',
                                    // color: theme.palette.text.primary,
                                },
                            },
                        }}
                    />
                    {color && (
                        <IconButton
                            onClick={handleClear}
                            title="Clear color"
                            size="large"
                            sx={{
                                mb: '-14px',
                                mr: -1.5,
                            }}
                        >
                            <DeleteIcon />
                        </IconButton>
                    )}

                    <Box
                        onClick={handleClick}
                        title="Wähle Farbe"
                        sx={{
                            px: '4px',
                            py: color ? '4px' : '3px',
                            backgroundColor: color
                                ? theme.name === 'light'
                                    ? theme.palette.common.white
                                    : '#121212'
                                : 'transparent',
                            borderRadius: '1px',
                            display: 'inline-block',
                            cursor: 'pointer',
                            verticalAlign: 'middle',
                            boxSizing: 'border-box',
                            border: color
                                ? `1px solid ${theme.name === 'light' ? theme.palette.grey['400'] : theme.palette.common.black}`
                                : `1px dashed ${theme.name === 'light' ? theme.palette.grey['400'] : theme.palette.text.secondary}`,
                        }}
                    >
                        <Box
                            sx={{
                                width: color ? '36px' : '38px',
                                height: color ? '14px' : '18px',
                                borderRadius: '2px',
                                background: color ? color : 'transparent',
                            }}
                        />
                    </Box>
                </Box>

                <Popover
                    slotProps={{
                        paper: {
                            elevation: 0,
                            sx: {
                                p: '9px',
                                borderRadius: '6px',
                                backgroundColor: 'rgb(32,32,32)',
                            },
                        },
                    }}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
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
                        sx={{
                            borderRadius: '6px',
                        }}
                    >
                        <ColorPicker
                            value={color}
                            onChange={onChangeHandler}
                            hidePresets
                            hideInputs
                            hideEyeDrop
                            hideAdvancedSliders
                            hideColorGuide
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
