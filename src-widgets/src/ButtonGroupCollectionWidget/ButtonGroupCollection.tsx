/**
 * Button-group collection renderer.
 *
 * @module widgets/ButtonGroupCollection
 */

import { Box, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import React, { useContext } from 'react';
import CollectionBase from '../components/CollectionBase';
import CollectionBaseImage from '../components/CollectionBaseImage';
import { CollectionContext } from '../components/CollectionProvider';
import useData from '../hooks/useData';
import useStyles from '../hooks/useStyles';
import useValueState from '../hooks/useValueState';
import SafeImg from '../components/SafeImg';
import type { ButtonGroupCollectionContextProps } from '../types';

function ButtonGroupCollection(): React.JSX.Element {
    // ButtonGroupCollection is only used by ButtonGroupCollectionWidget.
    const context = useContext(CollectionContext) as ButtonGroupCollectionContextProps;
    const { widget, theme } = context;

    // Safe access to optional properties.
    const oidObject = widget.data.oidObject;
    const { data, states, activeIndex } = useData('oid');
    const { fontStyles, textStyles } = useStyles(widget.style);
    const { value: oidValue, updateValue: setOidValueState } = useValueState('oid');

    const buttonGroupVariant = widget.data.buttonGroupVariant;
    const buttonGroupOrientation = widget.data.buttonGroupOrientation;

    const oidType = oidObject?.type;

    const isValidType = oidType === 'boolean' || oidType === 'number' || oidType === 'string' || oidType === 'mixed';

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

            <Box
                sx={{
                    width: '100%',
                    height: '100%',

                    display: 'flex',
                }}
            >
                <ToggleButtonGroup
                    exclusive
                    value={oidValue}
                    disabled={
                        oidType !== 'number' && oidType !== 'string' && oidType !== 'boolean' && oidType !== 'mixed'
                    }
                    fullWidth
                    orientation={buttonGroupOrientation}
                    sx={{
                        display: 'flex',
                        flexDirection: buttonGroupOrientation === 'vertical' ? 'column' : 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        // Height constraints only apply for vertical orientation.
                        height: buttonGroupOrientation === 'vertical' ? '100%' : 'auto',
                        maxHeight: buttonGroupOrientation === 'vertical' ? '100%' : 'none',

                        '&.MuiToggleButtonGroup-root': {
                            // color: widget.data.buttonGroupColor || "background.default",
                        },
                        // For vertical orientation: distribute all buttons evenly.
                        ...(buttonGroupOrientation === 'vertical' && {
                            '& .MuiToggleButton-root': {
                                flex: '1 1 0',
                                minHeight: 0,
                                maxHeight: `calc(100% / ${states.length})`,
                            },
                        }),
                        '& .MuiToggleButtonGroup-firstButton': {
                            borderTopWidth: buttonGroupVariant === 'outlined' ? null : 0,
                            borderLeftWidth: buttonGroupVariant === 'outlined' ? null : 0,
                            borderRightWidth:
                                buttonGroupVariant === 'outlined'
                                    ? null
                                    : widget.data.buttonGroupOrientation === 'horizontal'
                                      ? null
                                      : 0,
                            borderBottomWidth:
                                buttonGroupVariant === 'outlined'
                                    ? null
                                    : widget.data.buttonGroupOrientation === 'horizontal'
                                      ? 0
                                      : null,
                            borderColor: widget.data.buttonGroupColor && alpha(widget.data.buttonGroupColor, 0.2),
                            borderRadius: !!widget.data.basePadding === false ? 0 : undefined,
                        },
                        '& .MuiToggleButtonGroup-middleButton': {
                            borderTopWidth:
                                buttonGroupVariant === 'outlined'
                                    ? null
                                    : widget.data.buttonGroupOrientation === 'horizontal'
                                      ? 0
                                      : null,
                            borderLeftWidth:
                                buttonGroupVariant === 'outlined'
                                    ? null
                                    : widget.data.buttonGroupOrientation === 'horizontal'
                                      ? null
                                      : 0,
                            borderRightWidth:
                                buttonGroupVariant === 'outlined'
                                    ? null
                                    : widget.data.buttonGroupOrientation === 'horizontal'
                                      ? null
                                      : 0,
                            borderBottomWidth:
                                buttonGroupVariant === 'outlined'
                                    ? null
                                    : widget.data.buttonGroupOrientation === 'horizontal'
                                      ? 0
                                      : null,
                            borderColor: widget.data.buttonGroupColor && alpha(widget.data.buttonGroupColor, 0.2),
                        },
                        '& .MuiToggleButtonGroup-lastButton': {
                            borderTopWidth:
                                buttonGroupVariant === 'outlined'
                                    ? null
                                    : widget.data.buttonGroupOrientation === 'horizontal'
                                      ? 0
                                      : null,
                            borderLeftWidth: buttonGroupVariant === 'outlined' ? null : 0,
                            borderRightWidth: buttonGroupVariant === 'outlined' ? null : 0,
                            borderBottomWidth: buttonGroupVariant === 'outlined' ? null : 0,
                            borderColor: widget.data.buttonGroupColor && alpha(widget.data.buttonGroupColor, 0.2),
                            borderRadius: !!widget.data.basePadding === false ? 0 : undefined,
                        },
                    }}
                >
                    {states.map(({ value }, index) => {
                        return (
                            <ToggleButton
                                // disableRipple
                                value={value}
                                key={index}
                                sx={{
                                    width: '100%',
                                    height: '100%',

                                    p: 0,

                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',

                                    color:
                                        widget.data.iconColorActive ||
                                        widget.data[`iconColor${index + 1}`] ||
                                        widget.data.textColorActive ||
                                        data.textColor ||
                                        theme.palette.primary.main,

                                    // Ripple effect: use the same color logic as hover/selection.
                                    '& .MuiTouchRipple-root': {
                                        color:
                                            !widget.data.onlyText && !widget.data.onlyIcon
                                                ? // Icon + text visible: use icon color.
                                                  (activeIndex === index + 1 &&
                                                      String(oidValue) === String(widget.data[`value${index + 1}`]) &&
                                                      widget.data.iconColorActive) ||
                                                  widget.data[`iconColor${index + 1}`] ||
                                                  widget.data.iconColor ||
                                                  data.iconColor ||
                                                  theme.palette.primary.main
                                                : widget.data.onlyIcon
                                                  ? // Icon only: use icon color.
                                                    (activeIndex === index + 1 &&
                                                        String(oidValue) === String(widget.data[`value${index + 1}`]) &&
                                                        widget.data.iconColorActive) ||
                                                    widget.data[`iconColor${index + 1}`] ||
                                                    widget.data.iconColor ||
                                                    data.iconColor ||
                                                    theme.palette.primary.main
                                                  : // Text only: use text color.
                                                    (activeIndex === index + 1 &&
                                                        String(oidValue) === String(widget.data[`value${index + 1}`]) &&
                                                        widget.data.textColorActive) ||
                                                    widget.data[`textColor${index + 1}`] ||
                                                    widget.data.textColor ||
                                                    data.textColor ||
                                                    theme.palette.primary.main,
                                    },

                                    background:
                                        // Selected button: same color logic as hover.
                                        String(oidValue) === String(value)
                                            ? !widget.data.onlyText && !widget.data.onlyIcon
                                                ? // Icon + text visible: use icon color.
                                                  alpha(
                                                      (activeIndex === index + 1 &&
                                                          String(oidValue) ===
                                                              String(widget.data[`value${index + 1}`]) &&
                                                          widget.data.iconColorActive) ||
                                                          widget.data[`iconColor${index + 1}`] ||
                                                          widget.data.iconColor ||
                                                          data.iconColor ||
                                                          theme.palette.primary.main,
                                                      0.1,
                                                  )
                                                : widget.data.onlyIcon
                                                  ? // Icon only: use icon color.
                                                    alpha(
                                                        (activeIndex === index + 1 &&
                                                            String(oidValue) ===
                                                                String(widget.data[`value${index + 1}`]) &&
                                                            widget.data.iconColorActive) ||
                                                            widget.data[`iconColor${index + 1}`] ||
                                                            widget.data.iconColor ||
                                                            data.iconColor ||
                                                            theme.palette.primary.main,
                                                        0.1,
                                                    )
                                                  : // Text only: use text color.
                                                    alpha(
                                                        (activeIndex === index + 1 &&
                                                            String(oidValue) ===
                                                                String(widget.data[`value${index + 1}`]) &&
                                                            widget.data.textColorActive) ||
                                                            widget.data[`textColor${index + 1}`] ||
                                                            widget.data.textColor ||
                                                            data.textColor ||
                                                            theme.palette.primary.main,
                                                        0.1,
                                                    )
                                            : 'transparent',

                                    '&.MuiToggleButton-root.Mui-selected': {
                                        background:
                                            // Selected button: same color logic as hover.
                                            !widget.data.onlyText && !widget.data.onlyIcon
                                                ? // Icon + text visible: use icon color.
                                                  alpha(
                                                      (activeIndex === index + 1 &&
                                                          String(oidValue) ===
                                                              String(widget.data[`value${index + 1}`]) &&
                                                          widget.data.iconColorActive) ||
                                                          widget.data[`iconColor${index + 1}`] ||
                                                          widget.data.iconColor ||
                                                          data.iconColor ||
                                                          theme.palette.primary.main,
                                                      0.1,
                                                  )
                                                : widget.data.onlyIcon
                                                  ? // Icon only: use icon color.
                                                    alpha(
                                                        (activeIndex === index + 1 &&
                                                            String(oidValue) ===
                                                                String(widget.data[`value${index + 1}`]) &&
                                                            widget.data.iconColorActive) ||
                                                            widget.data[`iconColor${index + 1}`] ||
                                                            widget.data.iconColor ||
                                                            data.iconColor ||
                                                            theme.palette.primary.main,
                                                        0.1,
                                                    )
                                                  : // Text only: use text color.
                                                    alpha(
                                                        (activeIndex === index + 1 &&
                                                            String(oidValue) ===
                                                                String(widget.data[`value${index + 1}`]) &&
                                                            widget.data.textColorActive) ||
                                                            widget.data[`textColor${index + 1}`] ||
                                                            widget.data.textColor ||
                                                            data.textColor ||
                                                            theme.palette.primary.main,
                                                        0.1,
                                                    ),
                                    },

                                    '&:hover': {
                                        filter:
                                            (activeIndex === index + 1 &&
                                                String(oidValue) === String(widget.data[`value${index + 1}`]) &&
                                                widget.data.iconHoverActive &&
                                                `brightness(${widget.data.iconHoverActive}%)`) ||
                                            (widget.data[`iconHover${index + 1}`] &&
                                                `brightness(${widget.data[`iconHover${index + 1}`]}%)`) ||
                                            (data.iconHover && `brightness(${data.iconHover || '100%'})`),

                                        background:
                                            // Hover background depends on visible elements.
                                            !widget.data.onlyText && !widget.data.onlyIcon
                                                ? // Icon + text visible: use icon color.
                                                  alpha(
                                                      (activeIndex === index + 1 &&
                                                          String(oidValue) ===
                                                              String(widget.data[`value${index + 1}`]) &&
                                                          widget.data.iconColorActive) ||
                                                          widget.data[`iconColor${index + 1}`] ||
                                                          widget.data.iconColor ||
                                                          data.iconColor ||
                                                          theme.palette.primary.main,
                                                      0.1,
                                                  )
                                                : widget.data.onlyIcon
                                                  ? // Icon only: use icon color.
                                                    alpha(
                                                        (activeIndex === index + 1 &&
                                                            String(oidValue) ===
                                                                String(widget.data[`value${index + 1}`]) &&
                                                            widget.data.iconColorActive) ||
                                                            widget.data[`iconColor${index + 1}`] ||
                                                            widget.data.iconColor ||
                                                            data.iconColor ||
                                                            theme.palette.primary.main,
                                                        0.1,
                                                    )
                                                  : // Text only: use text color.
                                                    alpha(
                                                        (activeIndex === index + 1 &&
                                                            String(oidValue) ===
                                                                String(widget.data[`value${index + 1}`]) &&
                                                            widget.data.textColorActive) ||
                                                            widget.data[`textColor${index + 1}`] ||
                                                            widget.data.textColor ||
                                                            data.textColor ||
                                                            theme.palette.primary.main,
                                                        0.1,
                                                    ),
                                    },
                                }}
                                onClick={() => setOidValueState(value)}
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
                                    {!widget.data.onlyText &&
                                        ((activeIndex === index + 1 &&
                                            String(oidValue) === String(widget.data[`value${index + 1}`]) &&
                                            (widget.data.iconActive || widget.data.iconSmallActive)) ||
                                            widget.data[`icon${index + 1}`] ||
                                            widget.data[`iconSmall${index + 1}`] ||
                                            data.icon) && (
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
                                                    src={(() => {
                                                        const srcValue =
                                                            (activeIndex === index + 1 &&
                                                                String(oidValue) ===
                                                                    String(widget.data[`value${index + 1}`]) &&
                                                                (widget.data.iconActive ||
                                                                    widget.data.iconSmallActive)) ||
                                                            widget.data[`icon${index + 1}`] ||
                                                            widget.data[`iconSmall${index + 1}`] ||
                                                            data.icon;
                                                        return typeof srcValue === 'string'
                                                            ? srcValue
                                                            : typeof srcValue === 'number'
                                                              ? srcValue.toString()
                                                              : undefined;
                                                    })()}
                                                    style={{
                                                        position: 'relative',

                                                        left:
                                                            (activeIndex === index + 1 &&
                                                                !!widget.data.iconXOffsetActive &&
                                                                widget.data.iconXOffsetActive !== '0px' &&
                                                                `${widget.data.iconXOffsetActive}`) ||
                                                            (!!widget.data[`iconXOffset${index + 1}`] &&
                                                                widget.data[`iconXOffset${index + 1}`] !== '0px' &&
                                                                `${widget.data[`iconXOffset${index + 1}`]}`) ||
                                                            (!!widget.data.iconXOffset &&
                                                                widget.data.iconXOffset !== '0px' &&
                                                                `${widget.data.iconXOffset}`) ||
                                                            '0px',

                                                        bottom:
                                                            (activeIndex === index + 1 &&
                                                                !!widget.data.iconYOffsetActive &&
                                                                widget.data.iconYOffsetActive !== '0px' &&
                                                                `${widget.data.iconYOffsetActive}`) ||
                                                            (!!widget.data[`iconYOffset${index + 1}`] &&
                                                                widget.data[`iconYOffset${index + 1}`] !== '0px' &&
                                                                `${widget.data[`iconYOffset${index + 1}`]}`) ||
                                                            (!!widget.data.iconYOffset &&
                                                                widget.data.iconYOffset !== '0px' &&
                                                                `${widget.data.iconYOffset}`) ||
                                                            '0px',

                                                        objectFit: 'contain',

                                                        width:
                                                            (activeIndex === index + 1 &&
                                                                String(oidValue) ===
                                                                    String(widget.data[`value${index + 1}`]) &&
                                                                typeof widget.data.iconSizeActive === 'number' &&
                                                                `calc(100% * ${widget.data.iconSizeActive} / 100)`) ||
                                                            (typeof widget.data[`iconSize${index + 1}`] === 'number' &&
                                                                `calc(100% * ${widget.data[`iconSize${index + 1}`]} / 100)`) ||
                                                            (typeof widget.data.iconSize === 'number' &&
                                                                `calc(100% * ${widget.data.iconSize} / 100)`) ||
                                                            '100%',
                                                        height:
                                                            (activeIndex === index + 1 &&
                                                                String(oidValue) ===
                                                                    String(widget.data[`value${index + 1}`]) &&
                                                                typeof widget.data.iconSizeActive === 'number' &&
                                                                `calc(100% * ${widget.data.iconSizeActive} / 100)`) ||
                                                            (typeof widget.data[`iconSize${index + 1}`] === 'number' &&
                                                                `calc(100% * ${widget.data[`iconSize${index + 1}`]} / 100)`) ||
                                                            (typeof widget.data.iconSize === 'number' &&
                                                                `calc(100% * ${widget.data.iconSize} / 100)`) ||
                                                            '100%',
                                                        color:
                                                            (activeIndex === index + 1 &&
                                                                String(oidValue) ===
                                                                    String(widget.data[`value${index + 1}`]) &&
                                                                widget.data.iconColorActive) ||
                                                            widget.data[`iconColor${index + 1}`] ||
                                                            widget.data.buttonGroupColor ||
                                                            data.iconColor ||
                                                            theme.palette.primary.main,
                                                        filter:
                                                            (activeIndex === index + 1 &&
                                                                String(oidValue) ===
                                                                    String(widget.data[`value${index + 1}`]) &&
                                                                widget.data.iconColorActive) ||
                                                            widget.data[`iconColor${index + 1}`] ||
                                                            widget.data.buttonGroupColor ||
                                                            data.iconColor ||
                                                            theme.palette.primary.main
                                                                ? 'drop-shadow(0px 10000px 0)'
                                                                : undefined,
                                                        transform:
                                                            (activeIndex === index + 1 &&
                                                                String(oidValue) ===
                                                                    String(widget.data[`value${index + 1}`]) &&
                                                                widget.data.iconColorActive) ||
                                                            widget.data[`iconColor${index + 1}`] ||
                                                            widget.data.buttonGroupColor ||
                                                            data.iconColor ||
                                                            theme.palette.primary.main
                                                                ? 'translateY(-10000px)'
                                                                : undefined,
                                                    }}
                                                />
                                                {/* <img
                                                    src={
                                                        (activeIndex === index + 1 &&
                                                            String(oidValue) ===
                                                                String(widget.data[`value${index + 1}`]) &&
                                                            (widget.data.iconActive || widget.data.iconSmallActive)) ||
                                                        widget.data[`icon${index + 1}`] ||
                                                        widget.data[`iconSmall${index + 1}`] ||
                                                        data.icon
                                                    }
                                                    alt=""
                                                    style={{
                                                        position: 'relative',

                                                        left:
                                                            (activeIndex === index + 1 &&
                                                                !!widget.data.iconXOffsetActive &&
                                                                widget.data.iconXOffsetActive !== '0px' &&
                                                                `${widget.data.iconXOffsetActive}`) ||
                                                            (!!widget.data[`iconXOffset${index + 1}`] &&
                                                                widget.data[`iconXOffset${index + 1}`] !== '0px' &&
                                                                `${widget.data[`iconXOffset${index + 1}`]}`) ||
                                                            (!!widget.data.iconXOffset &&
                                                                widget.data.iconXOffset !== '0px' &&
                                                                `${widget.data.iconXOffset}`) ||
                                                            '0px',

                                                        bottom:
                                                            (activeIndex === index + 1 &&
                                                                !!widget.data.iconYOffsetActive &&
                                                                widget.data.iconYOffsetActive !== '0px' &&
                                                                `${widget.data.iconYOffsetActive}`) ||
                                                            (!!widget.data[`iconYOffset${index + 1}`] &&
                                                                widget.data[`iconYOffset${index + 1}`] !== '0px' &&
                                                                `${widget.data[`iconYOffset${index + 1}`]}`) ||
                                                            (!!widget.data.iconYOffset &&
                                                                widget.data.iconYOffset !== '0px' &&
                                                                `${widget.data.iconYOffset}`) ||
                                                            '0px',

                                                        objectFit: 'contain',

                                                        width:
                                                            (activeIndex === index + 1 &&
                                                                String(oidValue) ===
                                                                    String(widget.data[`value${index + 1}`]) &&
                                                                typeof widget.data.iconSizeActive === 'number' &&
                                                                `calc(100% * ${widget.data.iconSizeActive} / 100)`) ||
                                                            (typeof widget.data[`iconSize${index + 1}`] === 'number' &&
                                                                `calc(100% * ${widget.data[`iconSize${index + 1}`]} / 100)`) ||
                                                            (typeof widget.data.iconSize === 'number' &&
                                                                `calc(100% * ${widget.data.iconSize} / 100)`) ||
                                                            '100%',
                                                        height:
                                                            (activeIndex === index + 1 &&
                                                                String(oidValue) ===
                                                                    String(widget.data[`value${index + 1}`]) &&
                                                                typeof widget.data.iconSizeActive === 'number' &&
                                                                `calc(100% * ${widget.data.iconSizeActive} / 100)`) ||
                                                            (typeof widget.data[`iconSize${index + 1}`] === 'number' &&
                                                                `calc(100% * ${widget.data[`iconSize${index + 1}`]} / 100)`) ||
                                                            (typeof widget.data.iconSize === 'number' &&
                                                                `calc(100% * ${widget.data.iconSize} / 100)`) ||
                                                            '100%',
                                                        color:
                                                            (activeIndex === index + 1 &&
                                                                String(oidValue) ===
                                                                    String(widget.data[`value${index + 1}`]) &&
                                                                widget.data.iconColorActive) ||
                                                            widget.data[`iconColor${index + 1}`] ||
                                                            widget.data.buttonGroupColor ||
                                                            data.iconColor ||
                                                            theme.palette.primary.main,
                                                        filter:
                                                            (activeIndex === index + 1 &&
                                                                String(oidValue) ===
                                                                    String(widget.data[`value${index + 1}`]) &&
                                                                widget.data.iconColorActive) ||
                                                            widget.data[`iconColor${index + 1}`] ||
                                                            widget.data.buttonGroupColor ||
                                                            data.iconColor ||
                                                            theme.palette.primary.main
                                                                ? 'drop-shadow(0px 10000px 0)'
                                                                : undefined,
                                                        transform:
                                                            (activeIndex === index + 1 &&
                                                                String(oidValue) ===
                                                                    String(widget.data[`value${index + 1}`]) &&
                                                                widget.data.iconColorActive) ||
                                                            widget.data[`iconColor${index + 1}`] ||
                                                            widget.data.buttonGroupColor ||
                                                            data.iconColor ||
                                                            theme.palette.primary.main
                                                                ? 'translateY(-10000px)'
                                                                : undefined,
                                                    }}
                                                /> */}
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
                                                    __html:
                                                        (activeIndex === index + 1 &&
                                                            String(oidValue) ===
                                                                String(widget.data[`value${index + 1}`]) &&
                                                            widget.data.aliasActive) ||
                                                        widget.data[`alias${index + 1}`]?.replace(
                                                            /(\r\n|\n|\r)/gm,
                                                            '',
                                                        ) ||
                                                        (widget.data[`value${index + 1}`] &&
                                                            `${widget.data[`value${index + 1}`]}${oidObject?.unit}`) ||
                                                        '',
                                                }}
                                                noWrap
                                                variant="body2"
                                                sx={{
                                                    ...fontStyles,
                                                    ...textStyles,
                                                    textTransform: 'none',
                                                    fontSize:
                                                        (activeIndex === index + 1 &&
                                                            String(oidValue) ===
                                                                String(widget.data[`value${index + 1}`]) &&
                                                            typeof widget.data.valueSizeActive === 'number' &&
                                                            `${widget.data.valueSizeActive}%`) ||
                                                        (typeof widget.data[`valueSize${index + 1}`] === 'number' &&
                                                            `${widget.data[`valueSize${index + 1}`]}%`) ||
                                                        data.valueSize,
                                                    color:
                                                        (activeIndex === index + 1 &&
                                                            String(oidValue) ===
                                                                String(widget.data[`value${index + 1}`]) &&
                                                            widget.data.textColorActive) ||
                                                        widget.data[`textColor${index + 1}`] ||
                                                        widget.data.buttonGroupColor ||
                                                        data.textColor ||
                                                        theme.palette.primary.main,
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
