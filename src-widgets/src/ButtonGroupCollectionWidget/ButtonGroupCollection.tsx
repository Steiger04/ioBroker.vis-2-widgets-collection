/**
 * Button-group collection renderer.
 *
 * @module widgets/ButtonGroupCollection
 */

import { Box, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { alpha, lighten } from '@mui/material/styles';
import React, { useContext } from 'react';
import CollectionBase from '../components/CollectionBase';
import CollectionBaseImage from '../components/CollectionBaseImage';
import { CollectionContext } from '../components/CollectionProvider';
import SafeImg from '../components/SafeImg';
import useDataNew from '../hooks/useDataNew';
import useValueState from '../hooks/useValueState';
import { extractColorFromValue } from '../lib/helper/extractColorFromValue';
import { getIconColorStyles } from '../lib/helper/getIconColorStyles';
import { gradientColor } from '../lib/helper/gradientColor';

import type { ButtonGroupCollectionContextProps } from '../types';

function ButtonGroupCollection(): React.JSX.Element {
    const context = useContext(CollectionContext) as ButtonGroupCollectionContextProps;
    const { widget } = context;

    const oidObject = widget.data.oidObject;
    const { data, statesNew, activeIndex } = useDataNew('oid');
    const { value: oidValue, updateValue: setOidValueState } = useValueState('oid');

    const buttonGroupVariant = widget.data.buttonGroupVariant;
    const buttonGroupOrientation = widget.data.buttonGroupOrientation;
    const oidType = oidObject?.type;
    const isValidType = oidType === 'boolean' || oidType === 'number' || oidType === 'string' || oidType === 'mixed';
    const isVertical = buttonGroupOrientation === 'vertical';
    const isOutlined = buttonGroupVariant === 'outlined';

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
                                maxHeight: `calc(100% / ${statesNew.length})`,
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
                    {statesNew.map(({ value, ...state }, index) => {
                        const isActive = activeIndex === index + 1;
                        const bgColor = state.background;
                        const hasGradient = gradientColor(bgColor);
                        const hasColor = extractColorFromValue(bgColor);

                        return (
                            <ToggleButton
                                value={value!}
                                onClick={() => setOidValueState(value!)}
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
                                        background: bgColor,

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

                                                    background: gradientColor(state.textColor),
                                                    WebkitBackgroundClip: 'text',
                                                    backgroundClip: 'text',
                                                    color: gradientColor(state.textColor)
                                                        ? 'transparent'
                                                        : state.textColor,
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
