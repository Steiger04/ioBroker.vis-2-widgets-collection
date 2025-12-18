/**
 * Gradient color picker field component for the vis-2 widget editor.
 *
 * @module components/CollectionGradientColorPicker
 * @remarks
 * This component is used inside widget attribute editors to edit gradient/background fields.
 */

import DeleteIcon from '@mui/icons-material/Delete';
import { Box, IconButton, Popover } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React, { useRef, useEffect, useState } from 'react';

import ColorPicker, { useColorPicker } from 'react-best-gradient-color-picker';

/**
 * @typedef {Object} CollectionGradientColorPickerProps
 * @property {{ name?: string }=} field Field definition (expects `name`).
 * @property {Record<string, any>=} data Current editor data map.
 * @property {(patch: Record<string, any>) => void} onDataChange Callback invoked with partial updates.
 */

/**
 * Renders a compact gradient picker with a popover editor.
 *
 * @param {CollectionGradientColorPickerProps} props Component props.
 * @returns {JSX.Element} Rendered field UI.
 */
function CollectionGradientColorPicker({ field, data, onDataChange }) {
    const fieldName = field?.name;
    const theme = useTheme();
    const refOnDataChange = useRef(onDataChange);
    const [color, setColor] = useState(data[fieldName] || null);
    const { setGradient } = useColorPicker(color, setColor);

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
        color ? setGradient(color) : setGradient();
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const onChangeHandler = gradient => {
        setColor(gradient);
        onDataChange({ [fieldName]: color });
    };

    const open = Boolean(anchorEl);

    useEffect(() => {
        if (fieldName) refOnDataChange.current({ [fieldName]: color });
    }, [color, fieldName]);

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                }}
            >
                {!!color && (
                    <IconButton
                        edge="start"
                        onClick={() => {
                            onDataChange({ [fieldName]: null });
                            setColor(null);
                        }}
                    >
                        <DeleteIcon />
                    </IconButton>
                )}

                <Box
                    sx={{
                        mt: '7px',
                        boxSizing: 'border-box',
                        overflow: 'hidden',
                        borderRadius: '2px',
                        width: '46px',
                        height: '24px',
                        border: !color ? '1px dashed' : '5px solid rgb(18, 18, 18)',
                        borderColor: theme.name === 'light' && 'action.disabledBackground',
                    }}
                >
                    <Box
                        onClick={handleClick}
                        sx={{
                            p: '5px',
                            background: color || 'transparent',
                            cursor: 'pointer',
                            width: '100%',
                            height: '100%',
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
                        // hideInputs
                        hideEyeDrop
                        hideAdvancedSliders
                        hideColorGuide
                        hideInputType
                        hideColorTypeBtns
                    />
                </Box>
            </Popover>
        </>
    );
}

export default CollectionGradientColorPicker;
