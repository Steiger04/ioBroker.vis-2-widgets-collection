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
    const { widget } = context;

    const oidObject = widget.data.oidObject;
    const { data: styleData, statesNew: buttonStates, activeIndex } = useData('oid');
    const { value: oidValue, updateValue: setOidValueState } = useValueState('oid');

    const buttonGroupVariant = widget.data.buttonGroupVariant;
    const buttonGroupOrientation = widget.data.buttonGroupOrientation;
    const oidType = oidObject?.type;
    const isValidType = oidType === 'boolean' || oidType === 'number' || oidType === 'string' || oidType === 'mixed';
    const isVertical = buttonGroupOrientation === 'vertical';
    const isOutlined = buttonGroupVariant === 'outlined';

    const handleButtonClick = useCallback(
        (selectedValue: string | number | boolean) => {
            setOidValueState(selectedValue);
        },
        [setOidValueState],
    );

    return (
        <CollectionBase
            isValidType={isValidType}
            data={styleData}
            oidValue={oidValue}
            bgActive={false}
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
                        // For non-outlined mode every edge is collapsed to 0 except
                        // where a separator line between buttons is desired.
                        '& .MuiToggleButtonGroup-firstButton': {
                            ...(!isOutlined && {
                                borderTopWidth: 0,
                                borderLeftWidth: 0,
                                ...(isVertical ? { borderRightWidth: 0 } : { borderBottomWidth: 0 }),
                            }),
                            borderColor: widget.data.buttonGroupColor && alpha(widget.data.buttonGroupColor, 0.2),
                            borderRadius: !widget.data.basePadding ? 0 : undefined,
                        },
                        '& .MuiToggleButtonGroup-middleButton': {
                            ...(!isOutlined && {
                                borderLeftWidth: 0,
                                borderRightWidth: 0,
                                ...(isVertical ? {} : { borderTopWidth: 0, borderBottomWidth: 0 }),
                            }),
                            borderColor: widget.data.buttonGroupColor && alpha(widget.data.buttonGroupColor, 0.2),
                        },
                        '& .MuiToggleButtonGroup-lastButton': {
                            ...(!isOutlined && {
                                borderLeftWidth: 0,
                                borderRightWidth: 0,
                                borderBottomWidth: 0,
                                ...(!isVertical && { borderTopWidth: 0 }),
                            }),
                            borderColor: widget.data.buttonGroupColor && alpha(widget.data.buttonGroupColor, 0.2),
                            borderRadius: !widget.data.basePadding ? 0 : undefined,
                        },
                    }}
                >
                    {buttonStates.map(({ value, ...state }, index) => {
                        // activeIndex is 1-based (0 / undefined = no selection)
                        const isActive = activeIndex === index + 1;
                        const bgColor = state.background;
                        const { hasGradient, hoverBackground, selectedBackground } = getButtonColorStyles(bgColor);
                        const textGradient = gradientColor(state.textColor);

                        return (
                            <ToggleButton
                                value={value!}
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
                                        background: bgColor,

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
