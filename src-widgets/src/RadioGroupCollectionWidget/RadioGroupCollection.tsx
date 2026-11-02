/**
 * Radio-group collection renderer.
 *
 * @module widgets/RadioGroupCollection
 */

import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { Box, FormControlLabel, Radio, Stack, Typography } from '@mui/material';
import { useContext } from 'react';
import CollectionBase from '../components/CollectionBase';
import CollectionBaseImage from '../components/CollectionBaseImage';
import { CollectionContext } from '../components/CollectionProvider';
import useData, { sameStateValue } from '../hooks/useData';
import { ANY_VALUE_TYPES, isAllowedOidType } from '../lib/allowedOidTypes';
import useValueState from '../hooks/useValueState';
import useContentBox from '../hooks/useContentBox';
import { getIconColorStyles } from '../lib/helper/getIconColorStyles';
import { gradientTextSx } from '../lib/helper/gradientTextSx';
import type { RadioGroupCollectionContextProps } from '../types';
import type { StateStyleData } from '../hooks/useData/types';
import SafeImg from '../components/SafeImg';

/**
 * Renders the checked radio icon: the custom state image layered over the
 * unchecked dot when one is configured, otherwise the plain MUI checked dot.
 */
function renderCheckedIcon(state: StateStyleData): React.JSX.Element {
    return state.icon ? (
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
                <SafeImg
                    alt=""
                    src={state.icon}
                    style={{
                        position: 'relative',
                        left: `calc(0px + ${state.iconXOffset})`,
                        top: `calc(0px - ${state.iconYOffset})`,
                        width: `calc(${state.iconSizeOnly} * 0.5)`,
                        ...getIconColorStyles(state.icon, state.iconColor, state.forceColorMask),
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
    );
}

/** Props for {@link RadioStack}. */
interface RadioStackProps {
    /** The resolved state rows, one radio each. */
    states: StateStyleData[];
    /** The bound OID's current value — the checked radio. */
    oidValue: unknown;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    disabled: boolean;
}

/**
 * The radios, sized by the frame's Content-Box (ADR-0098) — a child of CollectionBase, where
 * the box is published: stacked, the height is split evenly between the items; side by side,
 * every item is capped at the full height. Unsized until the first measurement.
 */
function RadioStack({ states, oidValue, onChange, disabled }: RadioStackProps): React.ReactElement {
    const { widget } = useContext(CollectionContext) as RadioGroupCollectionContextProps;
    const { height: radioGroupHeight } = useContentBox();

    // Extract orientation-dependent values for clarity
    const isHorizontal = widget.data.radioOrientation === 'horizontal';
    const itemSize = radioGroupHeight && states.length > 0 ? radioGroupHeight / states.length : undefined;

    return (
        <Stack
            spacing={0}
            direction={isHorizontal ? 'row' : 'column'}
            sx={{
                width: isHorizontal ? '100%' : 'auto',
                height: '100%',
                justifyContent: isHorizontal ? 'space-around' : 'flex-start',
                alignItems: isHorizontal ? 'center' : 'stretch',
            }}
        >
            {states.map((state, index) => {
                return (
                    <FormControlLabel
                        key={`${String(state.value)}-${index}`}
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
                                disabled={disabled}
                                checkedIcon={renderCheckedIcon(state)}
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
                                        color: state.iconColor,
                                    },
                                    '& .MuiSvgIcon-root': {
                                        width: '100%',
                                        height: '100%',
                                        maxHeight: isHorizontal ? radioGroupHeight || undefined : itemSize,
                                    },
                                }}
                                checked={sameStateValue(state.value, oidValue)}
                                onChange={onChange}
                                value={state.value}
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
                                        fontSize: state.valueSize,
                                        textAlign: 'left',
                                        ...gradientTextSx(state.textColor),
                                    }}
                                    contentEditable="false"
                                    dangerouslySetInnerHTML={{
                                        __html: state.label!,
                                    }}
                                />
                            ) : undefined
                        }
                    />
                );
            })}
        </Stack>
    );
}

function RadioGroupCollection(): React.ReactElement {
    const context = useContext(CollectionContext);
    if (!context) {
        throw new Error('RadioGroupCollection must be used within a CollectionProvider');
    }
    const {
        widget: {
            data: { oidObject },
        },
        widget,
    } = context as RadioGroupCollectionContextProps;
    const { data, states } = useData('oid');

    const { value: oidValue, updateValue: updateOidValue, locked } = useValueState('oid');

    const oidType = oidObject?.type;
    const isValidType = isAllowedOidType(ANY_VALUE_TYPES, oidType);

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

            <RadioStack
                states={states}
                oidValue={oidValue}
                onChange={handleChange}
                disabled={locked}
            />
        </CollectionBase>
    );
}

export default RadioGroupCollection;
