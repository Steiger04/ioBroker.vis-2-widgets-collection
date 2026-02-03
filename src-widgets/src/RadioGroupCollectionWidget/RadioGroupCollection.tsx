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
import useDataNew from '../hooks/useDataNew';
import useValueState from '../hooks/useValueState';
import useElementDimensions from '../hooks/useElementDimensions';
import { getIconColorStyles } from '../lib/helper/getIconColorStyles';
import { gradientColor } from '../lib/helper/gradientColor';
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
        theme,
    } = context;
    const { data, states, statesNew } = useDataNew('oid');

    console.log('statesNew:', statesNew);
    console.log('states:', states);

    const { value: oidValue, updateValue: updateOidValue } = useValueState('oid');

    const oidType = oidObject?.type;
    const isValidType = ['boolean', 'number', 'string', 'mixed'].includes(oidType ?? '');

    // Extract orientation-dependent values for clarity
    const isHorizontal = widget.data.radioOrientation === 'horizontal';
    const itemSize = radioGroupHeight && states.length > 0 ? radioGroupHeight / states.length : undefined;

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
                spacing={0}
                ref={setStackRef}
                direction={isHorizontal ? 'row' : 'column'}
                sx={{
                    width: isHorizontal ? '100%' : 'auto',
                    height: '100%',
                    justifyContent: isHorizontal ? 'space-around' : 'flex-start',
                    alignItems: isHorizontal ? 'center' : 'stretch',
                }}
            >
                {statesNew.map(({ value, label: alias, ...state }, index) => {
                    const textColorValue = state.textColor || data.textColor;
                    const gradient = gradientColor(textColorValue);

                    return (
                        <FormControlLabel
                            key={index}
                            labelPlacement={widget.data.labelPlacement}
                            sx={{
                                m: 0,
                                pr: widget.data.labelPlacement === 'end' && !widget.data.hideLabels ? 1 : 0,
                                pl: widget.data.labelPlacement === 'start' && !widget.data.hideLabels ? 1 : 0,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: widget.data.hideLabels ? 'center' : 'flex-start',
                                width: '100%',
                                // Vertical: equal height distribution
                                ...(!isHorizontal && {
                                    flex: '1 1 0',
                                    minHeight: 0,
                                }),
                                // Horizontal: auto sizing based on content
                                ...(isHorizontal && {
                                    height: '100%',
                                }),
                                '& .MuiButtonBase-root': {
                                    width: '100%',
                                    padding: 0,
                                    // Horizontal: enforce square shape
                                    ...(isHorizontal && {
                                        aspectRatio: '1',
                                        maxWidth: radioGroupHeight || undefined,
                                        maxHeight: radioGroupHeight || undefined,
                                        flexShrink: 0,
                                    }),
                                    // Vertical: fixed size per button
                                    ...(!isHorizontal && {
                                        height: itemSize ? `${itemSize}px` : 'auto',
                                        maxWidth: itemSize || undefined,
                                        maxHeight: itemSize || undefined,
                                        flexShrink: 0,
                                    }),
                                    '&.Mui-disabled': {
                                        '&.Mui-checked': {
                                            color: state.iconColor || 'primary.main',
                                        },
                                        color: widget.data.radioGroupUncheckedIconColor || 'action.active',
                                    },
                                },
                                '& .MuiFormControlLabel-label': {
                                    flex: '1 1 auto',
                                    minWidth: 0,
                                    overflow: 'hidden',
                                    ...(widget.data.hideLabels && {
                                        display: 'none',
                                    }),
                                },
                            }}
                            control={
                                <Radio
                                    disabled={widget.data.onlyDisplay}
                                    checkedIcon={
                                        state.icon ? (
                                            <Box
                                                sx={{
                                                    overflow: 'hidden',
                                                    position: 'relative',
                                                    width: '100%',
                                                    height: '100%',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
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
                                                        height: '100%',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                    }}
                                                >
                                                    <img
                                                        alt=""
                                                        src={state.icon}
                                                        style={{
                                                            position: 'relative',
                                                            left: `calc(0px + ${state.iconXOffset})`,
                                                            top: `calc(0px - ${state.iconYOffset})`,
                                                            width: `calc(${data.iconSizeOnly} * 0.5)`, // noch aud state.iconSizeOnly umstellen
                                                            ...getIconColorStyles(
                                                                state.icon,
                                                                state.iconColor || theme.palette.primary.main,
                                                                state.forceColorMask,
                                                            ),
                                                        }}
                                                    />
                                                </Box>
                                            </Box>
                                        ) : (
                                            <RadioButtonCheckedIcon
                                                sx={{
                                                    color: state.iconColor,
                                                    width: '100%',
                                                    height: '100%',
                                                }}
                                            />
                                        )
                                    }
                                    icon={
                                        <RadioButtonUncheckedIcon
                                            sx={{
                                                width: '100%',
                                                height: '100%',
                                            }}
                                        />
                                    }
                                    sx={{
                                        color: widget.data.radioGroupUncheckedIconColor,
                                        width: '100%',
                                        height: '100%',
                                        maxHeight: isHorizontal ? radioGroupHeight || undefined : itemSize,
                                        '& .MuiTouchRipple-root': {
                                            color:
                                                widget.data[`iconColor${index + 1}`] ||
                                                widget.data.iconColor ||
                                                data.textColor,
                                        },
                                        '& .MuiSvgIcon-root': {
                                            width: '100%',
                                            height: '100%',
                                            maxHeight: isHorizontal ? radioGroupHeight || undefined : itemSize,
                                        },
                                    }}
                                    checked={String(value) === String(oidValue)}
                                    onChange={handleChange}
                                    value={value}
                                />
                            }
                            label={
                                !widget.data.hideLabels ? (
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
                                            background: gradient,
                                            WebkitBackgroundClip: 'text',
                                            backgroundClip: 'text',
                                            color: gradient ? 'transparent' : textColorValue,
                                        }}
                                        contentEditable="false"
                                        dangerouslySetInnerHTML={{
                                            __html:
                                                (alias && alias.replace(/(\r\n|\n|\r)/gm, '')) ||
                                                (value && `${value}${oidObject?.unit}`) ||
                                                '',
                                        }}
                                    />
                                ) : undefined
                            }
                        />
                    );
                })}
            </Stack>
        </CollectionBase>
    );
}

export default RadioGroupCollection;
