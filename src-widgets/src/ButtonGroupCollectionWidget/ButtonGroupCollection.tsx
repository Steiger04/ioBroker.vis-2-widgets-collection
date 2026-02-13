/**
 * Button-group collection renderer.
 *
 * @module widgets/ButtonGroupCollection
 */

import { Box, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { alpha, lighten } from '@mui/material/styles';
import React, { useCallback, useContext } from 'react';
import CollectionBase from '../components/CollectionBase';
import CollectionBaseImage from '../components/CollectionBaseImage';
import { CollectionContext } from '../components/CollectionProvider';
import SafeImg from '../components/SafeImg';
import useData from '../hooks/useData';
import useValueState from '../hooks/useValueState';
import { extractColorFromValue } from '../lib/helper/extractColorFromValue';
import { getIconColorStyles } from '../lib/helper/getIconColorStyles';
import { gradientColor } from '../lib/helper/gradientColor';

import type { ButtonGroupCollectionContextProps } from '../types';

/**
 * Computes color-related styles for a single toggle button.
 *
 * Centralises the gradient/lighten logic that would otherwise be
 * duplicated across hover, selected and base states.
 */
function getButtonColorStyles(bgColor: string | null | undefined): {
    hasGradient: boolean;
    hasColor: string | null;
    hoverBackground: string | undefined;
    selectedBackground: string | undefined;
} {
    const gradient = gradientColor(bgColor);
    const color = extractColorFromValue(bgColor);

    return {
        hasGradient: !!gradient,
        hasColor: color,
        hoverBackground: gradient ? undefined : color && bgColor ? lighten(bgColor, 0.5) : undefined,
        selectedBackground: gradient ? undefined : color && bgColor ? lighten(bgColor, 0.3) : undefined,
    };
}

function ButtonGroupCollection(): React.JSX.Element {
    const context = useContext(CollectionContext) as ButtonGroupCollectionContextProps;
    const { widget, theme } = context;

    const oidObject = widget.data.oidObject;
    const { data: styleData, states: buttonStates, activeIndex } = useData('oid');
    const { value: oidValue, updateValue: setOidValueState } = useValueState('oid');

    const buttonGroupVariant = widget.data.buttonGroupVariant;
    const buttonGroupOrientation = widget.data.buttonGroupOrientation;
    const oidType = oidObject?.type;
    const isValidType = oidType === 'boolean' || oidType === 'number' || oidType === 'string' || oidType === 'mixed';
    const isVertical = buttonGroupOrientation === 'vertical';
    const isOutlined = buttonGroupVariant === 'outlined';

    // Separator color used for inset box-shadow dividers (text variant)
    // and border color (outlined variant).
    const separatorColor = widget.data.buttonGroupColor
        ? alpha(widget.data.buttonGroupColor, 0.2)
        : alpha(theme.palette.text.primary, 0.12);

    const handleButtonClick = useCallback(
        (selectedValue: string | number | boolean) => {
            setOidValueState(selectedValue);
        },
        [setOidValueState],
    );

    return (
        <CollectionBase
            bgActive={false}
            isValidType={isValidType}
            data={styleData}
            oidValue={oidValue}
        >
            <CollectionBaseImage
                data={styleData}
                widget={widget}
            />

            <Box sx={{ width: '100%', height: '100%', display: 'flex' }}>
                <ToggleButtonGroup
                    exclusive
                    value={String(oidValue)}
                    disabled={!isValidType}
                    fullWidth
                    orientation={buttonGroupOrientation}
                    sx={{
                        display: 'flex',
                        flexDirection: isVertical ? 'column' : 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        height: isVertical ? '100%' : 'auto',
                        maxHeight: isVertical ? '100%' : 'none',

                        ...(isVertical && {
                            '& .MuiToggleButton-root': {
                                flex: '1 1 0',
                                minHeight: 0,
                                maxHeight: `calc(100% / ${buttonStates.length})`,
                            },
                        }),

                        // Border styles differ between outlined and borderless variants.
                        // For non-outlined (text) mode, borders are fully removed and
                        // inset box-shadows are used for separator lines so they stay
                        // visible even when buttons have a background colour.
                        '& .MuiToggleButtonGroup-firstButton': {
                            ...(!isOutlined && {
                                border: 'none',
                            }),
                            ...(isOutlined && {
                                borderColor: separatorColor,
                            }),
                            borderRadius: !widget.data.basePadding ? 0 : undefined,
                        },
                        '& .MuiToggleButtonGroup-middleButton': {
                            ...(!isOutlined && {
                                border: 'none',
                                marginLeft: isVertical ? undefined : 0,
                                marginTop: isVertical ? 0 : undefined,
                                boxShadow: isVertical
                                    ? `inset 0 1px 0 0 ${separatorColor}`
                                    : `inset 1px 0 0 0 ${separatorColor}`,
                            }),
                            ...(isOutlined && {
                                borderColor: separatorColor,
                            }),
                        },
                        '& .MuiToggleButtonGroup-lastButton': {
                            ...(!isOutlined && {
                                border: 'none',
                                marginLeft: isVertical ? undefined : 0,
                                marginTop: isVertical ? 0 : undefined,
                                boxShadow: isVertical
                                    ? `inset 0 1px 0 0 ${separatorColor}`
                                    : `inset 1px 0 0 0 ${separatorColor}`,
                            }),
                            ...(isOutlined && {
                                borderColor: separatorColor,
                            }),
                            borderRadius: !widget.data.basePadding ? 0 : undefined,
                        },
                    }}
                >
                    {buttonStates.map(({ value, ...state }, index) => {
                        // activeIndex is 1-based (0 / undefined = no selection)
                        const isActive = activeIndex === index + 1;

                        const { hasGradient, hoverBackground, selectedBackground } = getButtonColorStyles(
                            state.background,
                        );
                        const textGradient = gradientColor(state.textColor);

                        return (
                            <ToggleButton
                                value={String(value!)}
                                onClick={() => handleButtonClick(value!)}
                                key={`${String(value)}-${index}`}
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    p: 0,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',

                                    '&.MuiToggleButton-root': {
                                        filter: isActive && hasGradient ? 'opacity(80%)' : undefined,
                                        background: state.background,

                                        '&:hover': {
                                            filter: hasGradient ? 'opacity(80%)' : undefined,
                                            background: hoverBackground,
                                        },

                                        '&.Mui-selected': {
                                            background: selectedBackground,
                                        },
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        p: 0.5,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-around',
                                        alignItems: 'center',
                                    }}
                                >
                                    {!widget.data.onlyText && state.icon && (
                                        <Box
                                            sx={{
                                                overflow: 'hidden',
                                                width: '100%',
                                                height: '100%',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <SafeImg
                                                src={state.icon}
                                                style={{
                                                    position: 'relative',
                                                    left: state.iconXOffset,
                                                    bottom: state.iconYOffset,
                                                    objectFit: 'contain',
                                                    width: state.iconSizeOnly,
                                                    height: state.iconSizeOnly,
                                                    ...getIconColorStyles(
                                                        state.icon,
                                                        state.iconColor,
                                                        state.forceColorMask,
                                                    ),
                                                }}
                                            />
                                        </Box>
                                    )}
                                    {!widget.data.onlyIcon && (
                                        <Box
                                            sx={{
                                                width: '100%',
                                                pt: 0.5,
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <Typography
                                                contentEditable="false"
                                                dangerouslySetInnerHTML={{
                                                    __html: state.label!,
                                                }}
                                                noWrap
                                                variant="body2"
                                                sx={{
                                                    textTransform: 'none',
                                                    fontSize: state.valueSize,
                                                    background: textGradient,
                                                    WebkitBackgroundClip: 'text',
                                                    backgroundClip: 'text',
                                                    color: textGradient ? 'transparent' : state.textColor,
                                                }}
                                            />
                                        </Box>
                                    )}
                                </Box>
                            </ToggleButton>
                        );
                    })}
                </ToggleButtonGroup>
            </Box>
        </CollectionBase>
    );
}

export default ButtonGroupCollection;
