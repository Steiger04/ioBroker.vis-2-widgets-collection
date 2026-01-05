/**
 * Radio-group collection renderer.
 *
 * @module widgets/RadioGroupCollection
 */

import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { Box, FormControlLabel, Radio, Stack, Typography } from '@mui/material';
import React, { useState, useContext } from 'react';
import CollectionBase from '../components/CollectionBase';
import CollectionBaseImage from '../components/CollectionBaseImage';
import { CollectionContext } from '../components/CollectionProvider';
import useData from '../hooks/useData';
import useValueState from '../hooks/useValueState';
import useElementDimensions from '../hooks/useElementDimensions';
import { getIconColorStyles } from '../lib/helper/getIconColorStyles';
import type { RadioGroupCollectionContextProps } from '../types';

/**
 * Renders the configured values as a radio group and writes back the selected value.
 */
function RadioGroupCollection(): React.ReactElement {
    const [stackRef, setStackRef] = useState<HTMLDivElement | null>(null);
    const { height: radioGroupHeight } = useElementDimensions(stackRef);

    // RadioGroupCollection is only used by RadioGroupCollectionWidget, so the cast is safe.
    const context = useContext(CollectionContext) as RadioGroupCollectionContextProps;
    const {
        widget: {
            data: { oidObject },
        },
        widget,
    } = context;
    const { data, states } = useData('oid');
    const { value: oidValue, updateValue: updateOidValue } = useValueState('oid');

    const oidType = oidObject?.type;

    const isValidType = oidType === 'boolean' || oidType === 'number' || oidType === 'string' || oidType === 'mixed';

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        updateOidValue(event.target.value);
    };

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
                    width: 'auto',
                    height: '100%',
                    // For horizontal: space-around centers buttons nicely
                    // For vertical: flex-start allows flex children to distribute equally
                    justifyContent: widget.data.radioOrientation === 'horizontal' ? 'space-around' : 'flex-start',
                    alignItems: widget.data.radioOrientation === 'horizontal' ? 'center' : 'stretch',
                }}
            >
                {states.map(({ value, label: alias, ...state }, index) => (
                    <FormControlLabel
                        key={index}
                        // labelPlacement="top"

                        sx={{
                            // m: 0,
                            display: 'flex',
                            alignItems: 'center',

                            // For vertical orientation: equal height distribution
                            ...(widget.data.radioOrientation === 'vertical' && {
                                flex: '1 1 0',
                                minHeight: 0,
                            }),
                            // For horizontal orientation: auto sizing based on content
                            ...(widget.data.radioOrientation === 'horizontal' && {
                                height: '100%',
                            }),

                            '& .MuiButtonBase-root': {
                                // For horizontal orientation: enforce square shape
                                ...(widget.data.radioOrientation === 'horizontal' && {
                                    aspectRatio: '1',
                                    maxWidth: radioGroupHeight || undefined,
                                    maxHeight: radioGroupHeight || undefined,
                                    width: 'auto',
                                    flexShrink: 0,
                                }),
                                // For vertical orientation: fixed size per button
                                ...(widget.data.radioOrientation === 'vertical' && {
                                    width: radioGroupHeight ? `${radioGroupHeight / states.length}px` : 'auto',
                                    height: radioGroupHeight ? `${radioGroupHeight / states.length}px` : 'auto',
                                    maxWidth: radioGroupHeight ? `${radioGroupHeight / states.length}px` : undefined,
                                    maxHeight: radioGroupHeight ? `${radioGroupHeight / states.length}px` : undefined,
                                    flexShrink: 0,
                                }),

                                '&.Mui-disabled': {
                                    '&.Mui-checked': {
                                        color: state.iconColor || 'primary.main',
                                    },
                                    color: widget.data.radioGroupUncheckedIconColor || 'action.active',
                                },
                            },

                            // Label styling - ensure it has defined width for text-align
                            '& .MuiFormControlLabel-label': {
                                flex: '1 1 auto',
                                minWidth: 0,
                                overflow: 'hidden',
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

                                                        ...getIconColorStyles(state.icon, state.iconColor),
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
                                            ? radioGroupHeight || undefined
                                            : radioGroupHeight
                                              ? radioGroupHeight / states.length
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
                                                ? radioGroupHeight || undefined
                                                : radioGroupHeight
                                                  ? radioGroupHeight / states.length
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
                                sx={{
                                    width: '100%',
                                    display: '-webkit-box',
                                    WebkitBoxOrient: 'vertical',
                                    WebkitLineClamp: 2,
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    wordBreak: 'break-word',
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
