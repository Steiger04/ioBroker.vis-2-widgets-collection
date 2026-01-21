/**
 * Button-group collection renderer.
 *
 * @module widgets/ButtonGroupCollection
 */

import { Box, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { alpha, lighten } from '@mui/material/styles';
import React, { useContext, useMemo } from 'react';
import CollectionBase from '../components/CollectionBase';
import CollectionBaseImage from '../components/CollectionBaseImage';
import { CollectionContext } from '../components/CollectionProvider';
import SafeImg from '../components/SafeImg';
import useData, { type StateItem } from '../hooks/useData';
import useValueState from '../hooks/useValueState';
import { extractColorFromValue } from '../lib/helper/extractColorFromValue';
import { formatSizeRem } from '../lib/helper/formatSizeRem';
import { getIconColorStyles } from '../lib/helper/getIconColorStyles';
import { gradientColor } from '../lib/helper/gradientColor';

import type { ButtonGroupCollectionContextProps } from '../types';

function ButtonGroupCollection(): React.JSX.Element {
    const context = useContext(CollectionContext) as ButtonGroupCollectionContextProps;
    const { widget, theme } = context;

    const oidObject = widget.data.oidObject;
    const { data, states, activeIndex } = useData('oid');
    const { value: oidValue, updateValue: setOidValueState } = useValueState('oid');

    const buttonGroupVariant = widget.data.buttonGroupVariant;
    const buttonGroupOrientation = widget.data.buttonGroupOrientation;
    const oidType = oidObject?.type;
    const isValidType = oidType === 'boolean' || oidType === 'number' || oidType === 'string' || oidType === 'mixed';
    const isVertical = buttonGroupOrientation === 'vertical';
    const isOutlined = buttonGroupVariant === 'outlined';

    // Memoized helpers that accept isActive parameter to avoid recalculation
    const helpers = useMemo(
        () => ({
            getBackgroundColor: (isActive: boolean, state: Omit<StateItem, 'value'>) => {
                return isActive ? widget.data.backgroundActive || state.backgroundActive : state.backgroundActive;
            },

            getIcon: (isActive: boolean, state: Omit<StateItem, 'value'>) => {
                return isActive
                    ? widget.data.iconActive || widget.data.iconSmallActive || state.icon || data.icon
                    : state.icon || data.icon;
            },

            getIconColor: (isActive: boolean, state: Omit<StateItem, 'value'>) => {
                return isActive
                    ? widget.data.iconColorActive ||
                          state.iconColor ||
                          widget.data.buttonGroupColor ||
                          data.iconColor ||
                          theme.palette.primary.main
                    : state.iconColor || widget.data.buttonGroupColor || data.iconColor || theme.palette.primary.main;
            },

            getTextColor: (isActive: boolean, state: Omit<StateItem, 'value'>) => {
                return isActive
                    ? widget.data.textColorActive ||
                          state.textColor ||
                          widget.data.buttonGroupColor ||
                          data.textColor ||
                          theme.palette.primary.main
                    : state.textColor || widget.data.buttonGroupColor || data.textColor || theme.palette.primary.main;
            },

            getIconSize: (isActive: boolean, state: Omit<StateItem, 'value'>) => {
                const size =
                    isActive && typeof widget.data.iconSizeActive === 'number'
                        ? widget.data.iconSizeActive
                        : typeof state.iconSize === 'number'
                          ? state.iconSize
                          : typeof widget.data.iconSize === 'number'
                            ? widget.data.iconSize
                            : 100;
                return `calc(100% * ${size} / 100)`;
            },

            getIconOffset: (isActive: boolean, state: Omit<StateItem, 'value'>, axis: 'X' | 'Y') => {
                const offsetProp = axis === 'X' ? 'iconXOffset' : 'iconYOffset';
                const activeOffsetProp = axis === 'X' ? 'iconXOffsetActive' : 'iconYOffsetActive';

                const activeOffset = isActive ? widget.data[activeOffsetProp] : undefined;
                const stateOffset = state[offsetProp];

                return activeOffset && activeOffset !== '0px'
                    ? activeOffset
                    : stateOffset && stateOffset !== '0px'
                      ? stateOffset
                      : '0px';
            },

            getTextContent: (
                isActive: boolean,
                state: Omit<StateItem, 'value'>,
                value: Pick<StateItem, 'value'>['value'],
            ) => {
                return isActive && widget.data.aliasActive
                    ? widget.data.aliasActive
                    : state.alias?.replace(/(\r\n|\n|\r)/gm, '') || (value && `${value}${oidObject?.unit}`) || '';
            },

            getTextSize: (isActive: boolean, state: Omit<StateItem, 'value'>) => {
                return isActive && typeof widget.data.valueSizeActive === 'number'
                    ? formatSizeRem(widget.data.valueSizeActive)
                    : typeof state.valueSize === 'string'
                      ? `${state.valueSize}`
                      : data.valueSize;
            },
        }),
        [widget.data, data, oidObject, theme.palette.primary.main],
    );

    return (
        <CollectionBase
            isValidType={isValidType}
            data={data}
            oidValue={oidValue}
            bgActive={false}
        >
            <CollectionBaseImage
                data={data}
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
                                maxHeight: `calc(100% / ${states.length})`,
                            },
                        }),

                        '& .MuiToggleButtonGroup-firstButton': {
                            borderTopWidth: isOutlined ? null : 0,
                            borderLeftWidth: isOutlined ? null : 0,
                            borderRightWidth: isOutlined ? null : isVertical ? 0 : null,
                            borderBottomWidth: isOutlined ? null : isVertical ? null : 0,
                            borderColor: widget.data.buttonGroupColor && alpha(widget.data.buttonGroupColor, 0.2),
                            borderRadius: !widget.data.basePadding ? 0 : undefined,
                        },
                        '& .MuiToggleButtonGroup-middleButton': {
                            borderTopWidth: isOutlined ? null : isVertical ? null : 0,
                            borderLeftWidth: isOutlined ? null : 0,
                            borderRightWidth: isOutlined ? null : 0,
                            borderBottomWidth: isOutlined ? null : isVertical ? null : 0,
                            borderColor: widget.data.buttonGroupColor && alpha(widget.data.buttonGroupColor, 0.2),
                        },
                        '& .MuiToggleButtonGroup-lastButton': {
                            borderTopWidth: isOutlined ? null : isVertical ? null : 0,
                            borderLeftWidth: isOutlined ? null : 0,
                            borderRightWidth: isOutlined ? null : 0,
                            borderBottomWidth: isOutlined ? null : 0,
                            borderColor: widget.data.buttonGroupColor && alpha(widget.data.buttonGroupColor, 0.2),
                            borderRadius: !widget.data.basePadding ? 0 : undefined,
                        },
                    }}
                >
                    {states.map(({ value, ...state }, index) => {
                        const isActive = activeIndex === index + 1;
                        const bgColor = helpers.getBackgroundColor(isActive, state);
                        const hasGradient = gradientColor(bgColor);
                        const hasColor = extractColorFromValue(bgColor);
                        const icon = helpers.getIcon(isActive, state);

                        console.log(
                            'index, icon, helpers.getIconColor(isActive, state), state.forceColorMask',
                            index,
                            icon,
                            helpers.getIconColor(isActive, state),
                            state.forceColorMask,
                        );

                        return (
                            <ToggleButton
                                value={value}
                                onClick={() => setOidValueState(value)}
                                key={index}
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    p: 0,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',

                                    '&.MuiToggleButton-root': {
                                        filter: isActive && hasGradient ? 'opacity(80%)' : undefined,
                                        background: isActive ? bgColor : state.backgroundActive,

                                        '&:hover': {
                                            filter: hasGradient ? 'opacity(80%)' : undefined,
                                            background: hasGradient
                                                ? undefined
                                                : hasColor && bgColor
                                                  ? lighten(bgColor, 0.5)
                                                  : undefined,
                                        },

                                        '&.Mui-selected': {
                                            background: hasGradient
                                                ? undefined
                                                : hasColor && bgColor
                                                  ? lighten(bgColor, 0.3)
                                                  : undefined,
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
                                    {!widget.data.onlyText && icon && (
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
                                                src={icon}
                                                style={{
                                                    position: 'relative',
                                                    left: helpers.getIconOffset(isActive, state, 'X'),
                                                    bottom: helpers.getIconOffset(isActive, state, 'Y'),
                                                    objectFit: 'contain',
                                                    width: helpers.getIconSize(isActive, state),
                                                    height: helpers.getIconSize(isActive, state),
                                                    ...getIconColorStyles(
                                                        icon,
                                                        helpers.getIconColor(isActive, state),
                                                        isActive
                                                            ? widget.data.enableIconColorMaskActive ||
                                                                  state.forceColorMask
                                                            : state.forceColorMask,
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
                                                    __html: helpers.getTextContent(isActive, state, value),
                                                }}
                                                noWrap
                                                variant="body2"
                                                sx={{
                                                    textTransform: 'none',
                                                    fontSize: helpers.getTextSize(isActive, state),
                                                    background: gradientColor(helpers.getTextColor(isActive, state)),
                                                    WebkitBackgroundClip: 'text',
                                                    backgroundClip: 'text',
                                                    color: gradientColor(helpers.getTextColor(isActive, state))
                                                        ? 'transparent'
                                                        : helpers.getTextColor(isActive, state),
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
