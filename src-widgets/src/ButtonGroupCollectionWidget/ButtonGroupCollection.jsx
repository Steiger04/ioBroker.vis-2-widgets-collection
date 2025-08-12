import { Box, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import React, { useContext } from 'react';
import CollectionBase from '../components/CollectionBase';
import CollectionBaseImage from '../components/CollectionBaseImage';
import { CollectionContext } from '../components/CollectionProvider';
import useData from '../hooks/useData';
import useStyles from '../hooks/useStyles';
import useValueState from '../hooks/useValueState';

function ButtonGroupCollection() {
    const {
        widget: {
            data: { oidObject },
        },
        widget,
    } = useContext(CollectionContext);
    const { data, states, activeIndex } = useData('oid');
    const { fontStyles, textStyles } = useStyles(widget.style);
    const { value: oidValue, setValueState: setOidValueState } = useValueState('oid');

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
                    variant={buttonGroupVariant}
                    orientation={buttonGroupOrientation}
                    sx={{
                        display: 'flex',
                        flexDirection: buttonGroupOrientation === 'vertical' ? 'column' : 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',

                        '&.MuiToggleButtonGroup-root': {
                            // color: widget.data.buttonGroupColor || "background.default",
                        },
                        '& .MuiToggleButtonGroup-firstButton': {
                            borderTopWidth: widget.data.buttonGroupVariant === 'outlined' ? null : 0,
                            borderLeftWidth: widget.data.buttonGroupVariant === 'outlined' ? null : 0,
                            borderRightWidth:
                                widget.data.buttonGroupVariant === 'outlined'
                                    ? null
                                    : widget.data.buttonGroupOrientation === 'horizontal'
                                      ? null
                                      : 0,
                            borderBottomWidth:
                                widget.data.buttonGroupVariant === 'outlined'
                                    ? null
                                    : widget.data.buttonGroupOrientation === 'horizontal'
                                      ? 0
                                      : null,
                            borderColor: widget.data.buttonGroupColor && alpha(widget.data.buttonGroupColor, 0.2),
                            borderRadius: !!widget.data.basePadding === false ? 0 : undefined,
                        },
                        '& .MuiToggleButtonGroup-middleButton': {
                            borderTopWidth:
                                widget.data.buttonGroupVariant === 'outlined'
                                    ? null
                                    : widget.data.buttonGroupOrientation === 'horizontal'
                                      ? 0
                                      : null,
                            borderLeftWidth:
                                widget.data.buttonGroupVariant === 'outlined'
                                    ? null
                                    : widget.data.buttonGroupOrientation === 'horizontal'
                                      ? null
                                      : 0,
                            borderRightWidth:
                                widget.data.buttonGroupVariant === 'outlined'
                                    ? null
                                    : widget.data.buttonGroupOrientation === 'horizontal'
                                      ? null
                                      : 0,
                            borderBottomWidth:
                                widget.data.buttonGroupVariant === 'outlined'
                                    ? null
                                    : widget.data.buttonGroupOrientation === 'horizontal'
                                      ? 0
                                      : null,
                            borderColor: widget.data.buttonGroupColor && alpha(widget.data.buttonGroupColor, 0.2),
                        },
                        '& .MuiToggleButtonGroup-lastButton': {
                            borderTopWidth:
                                widget.data.buttonGroupVariant === 'outlined'
                                    ? null
                                    : widget.data.buttonGroupOrientation === 'horizontal'
                                      ? 0
                                      : null,
                            borderLeftWidth: widget.data.buttonGroupVariant === 'outlined' ? null : 0,
                            borderRightWidth: widget.data.buttonGroupVariant === 'outlined' ? null : 0,
                            borderBottomWidth: widget.data.buttonGroupVariant === 'outlined' ? null : 0,
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
                                        data.textColor,

                                    background:
                                        (activeIndex === index + 1 &&
                                            String(oidValue) === String(widget.data[`value${index + 1}`]) &&
                                            widget.data.backgroundColorActive) ||
                                        widget.data[`backgroundColor${index + 1}`] ||
                                        data.backgroundColor ||
                                        (activeIndex === index + 1 &&
                                            String(oidValue) === String(widget.data[`value${index + 1}`]) &&
                                            widget.data.backgroundActive) ||
                                        widget.data[`background${index + 1}`] ||
                                        data.background,

                                    '&.MuiToggleButton-root.Mui-selected': {
                                        background:
                                            (activeIndex === index + 1 &&
                                                String(oidValue) === String(widget.data[`value${index + 1}`]) &&
                                                widget.data.backgroundColorActive) ||
                                            widget.data[`backgroundColor${index + 1}`] ||
                                            data.backgroundColor ||
                                            (activeIndex === index + 1 &&
                                                String(oidValue) === String(widget.data[`value${index + 1}`]) &&
                                                widget.data.backgroundActive) ||
                                            widget.data[`background${index + 1}`] ||
                                            data.background,
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
                                            (activeIndex === index + 1 &&
                                                String(oidValue) === String(widget.data[`value${index + 1}`]) &&
                                                widget.data.backgroundColorActive) ||
                                            widget.data[`backgroundColor${index + 1}`] ||
                                            data.backgroundColor ||
                                            (activeIndex === index + 1 &&
                                                String(oidValue) === String(widget.data[`value${index + 1}`]) &&
                                                widget.data.backgroundActive) ||
                                            widget.data[`background${index + 1}`] ||
                                            data.background,
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
                                                <img
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
                                                            data.iconColor,
                                                        filter:
                                                            (activeIndex === index + 1 &&
                                                                String(oidValue) ===
                                                                    String(widget.data[`value${index + 1}`]) &&
                                                                widget.data.iconColorActive) ||
                                                            widget.data[`iconColor${index + 1}`] ||
                                                            widget.data.buttonGroupColor ||
                                                            data.iconColor
                                                                ? 'drop-shadow(0px 10000px 0)'
                                                                : null,
                                                        transform:
                                                            (activeIndex === index + 1 &&
                                                                String(oidValue) ===
                                                                    String(widget.data[`value${index + 1}`]) &&
                                                                widget.data.iconColorActive) ||
                                                            widget.data[`iconColor${index + 1}`] ||
                                                            widget.data.buttonGroupColor ||
                                                            data.iconColor
                                                                ? 'translateY(-10000px)'
                                                                : null,
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
                                                    __html:
                                                        (activeIndex === index + 1 &&
                                                            String(oidValue) ===
                                                                String(widget.data[`value${index + 1}`]) &&
                                                            widget.data.aliasActive) ||
                                                        (widget.data[`alias${index + 1}`] &&
                                                            widget.data[`alias${index + 1}`].replace(
                                                                /(\r\n|\n|\r)/gm,
                                                                '',
                                                            )) ||
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
                                                        data.textColor,
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
