import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { Box, FormControlLabel, Radio, Stack, Typography } from '@mui/material';
import React, { useState, useContext, useEffect } from 'react';
import CollectionBase from '../components/CollectionBase';
import CollectionBaseImage from '../components/CollectionBaseImage';
import { CollectionContext } from '../components/CollectionProvider';
import useData from '../hooks/useData';
import useStyles from '../hooks/useStyles';
import useValueState from '../hooks/useValueState';
import type { RadioGroupCollectionContextProps } from 'src';

function RadioGroupCollection(): React.ReactElement {
    const [stackRef, setStackRef] = useState<HTMLDivElement | null>(null);
    const [clientHeight, setClientHeight] = useState<number | null>(null);
    // RadioGroupCollection wird nur im RadioGroupCollectionWidget verwendet, daher ist der Cast sicher
    const context = useContext(CollectionContext) as RadioGroupCollectionContextProps;
    const {
        widget: {
            data: { oidObject },
        },
        widget,
    } = context;
    const { data, states } = useData('oid');
    const { fontStyles, textStyles } = useStyles(widget.style);
    const { value: oidValue, updateValue: updateOidValue } = useValueState('oid');

    const oidType = oidObject?.type;

    const isValidType = oidType === 'boolean' || oidType === 'number' || oidType === 'string' || oidType === 'mixed';

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        updateOidValue(event.target.value);
    };

    useEffect(() => {
        if (stackRef?.clientHeight) {
            setClientHeight(stackRef.clientHeight);
        }
    }, [stackRef?.clientHeight]);

    return (
        <CollectionBase
            isValidType={isValidType}
            data={data}
            oidValue={oidValue}
        >
            <CollectionBaseImage
                data={data}
                widget={widget}
            />

            <Stack
                ref={setStackRef}
                direction={widget.data.radioOrientation === 'vertical' ? 'column' : 'row'}
                sx={{
                    width: '100%',
                    height: '100%',
                    justifyContent: 'space-around',
                    alignItems: 'stretch',
                }}
            >
                {states.map(({ value, label: alias, ...state }, index) => (
                    <FormControlLabel
                        key={index}
                        // labelPlacement="top"

                        sx={{
                            // width: "100%",
                            height: '100%',

                            m: 0,

                            '& .MuiButtonBase-root': {
                                flexBasis: 'fit-content',
                                flexShrink: 0,
                                width: '100%',
                                height: '100%',

                                '&.Mui-disabled': {
                                    '&.Mui-checked': {
                                        color: state.iconColor || 'primary.main',
                                    },
                                    color: widget.data.radioGroupUncheckedIconColor || 'action.active',
                                },
                            },
                        }}
                        control={
                            <Radio
                                disabled={widget.data.onlyDisplay}
                                // disableRipple
                                checkedIcon={
                                    (state.icon && (
                                        <Box
                                            sx={{
                                                overflow: 'hidden',
                                                position: 'relative',
                                                width: '100%',
                                                height: '100%',
                                                display: 'flex',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <RadioButtonUncheckedIcon
                                                sx={{
                                                    color: state.iconColor,
                                                    position: 'relative',

                                                    width: '100%',
                                                    height: '100%',
                                                }}
                                            />
                                            <Box
                                                sx={{
                                                    position: 'absolute',
                                                    width: '100%',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignSelf: 'center',
                                                }}
                                            >
                                                <img
                                                    alt=""
                                                    src={state.icon}
                                                    style={{
                                                        position: 'relative',
                                                        left: `calc(0px + ${data.iconXOffset})`,
                                                        top: `calc(0px - ${data.iconYOffset})`,

                                                        /* width:
															(state.iconSize && `${state.iconSize}%`) || "50%", */

                                                        width:
                                                            (typeof data.iconSizeOnly === 'number' &&
                                                                `calc(100% * ${data.iconSizeOnly} / 100)`) ||
                                                            '50%',

                                                        color: state.iconColor || undefined,
                                                        filter: state.iconColor
                                                            ? 'drop-shadow(0px 10000px 0)'
                                                            : undefined,
                                                        transform: state.iconColor ? 'translateY(-10000px)' : undefined,
                                                    }}
                                                />
                                            </Box>
                                        </Box>
                                    )) || (
                                        <RadioButtonCheckedIcon
                                            sx={{
                                                color: state.iconColor,
                                            }}
                                        />
                                    )
                                }
                                icon={<RadioButtonUncheckedIcon />}
                                sx={{
                                    color: widget.data.radioGroupUncheckedIconColor,
                                    width: '100%',
                                    height: '100%',
                                    maxHeight:
                                        widget.data.radioOrientation === 'horizontal'
                                            ? clientHeight || undefined
                                            : clientHeight
                                              ? clientHeight / states.length
                                              : undefined,

                                    '& .MuiTouchRipple-root': {
                                        color:
                                            widget.data[`iconColor${index + 1}`] ||
                                            widget.data.iconColor ||
                                            data.textColor,
                                    },

                                    '& .MuiSvgIcon-root': {
                                        width: '100%',
                                        height: '100%',
                                        maxHeight:
                                            widget.data.radioOrientation === 'horizontal'
                                                ? clientHeight || undefined
                                                : clientHeight
                                                  ? clientHeight / states.length
                                                  : undefined,
                                    },
                                }}
                                checked={String(value) === String(oidValue)}
                                onChange={handleChange}
                                value={value}
                            />
                        }
                        label={
                            <Typography
                                component={Box}
                                variant="body2"
                                noWrap
                                sx={{
                                    whiteSpace: 'pre-wrap',
                                    ...fontStyles,
                                    ...textStyles,
                                    fontSize: state.fontSize || data.valueSize,
                                    textAlign: 'left',

                                    color: state.textColor || data.textColor,
                                }}
                                contentEditable="false"
                                dangerouslySetInnerHTML={{
                                    __html:
                                        (alias && alias.replace(/(\r\n|\n|\r)/gm, '')) ||
                                        (value && `${value}${oidObject?.unit}`) ||
                                        '',
                                }}
                            />
                        }
                    />
                ))}
            </Stack>
        </CollectionBase>
    );
}

export default RadioGroupCollection;
