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
import { CollectionContext } from '../components/CollectionProvider';
import useData from '../hooks/useData';
import { ANY_VALUE_TYPES, isAllowedOidType } from '../lib/allowedOidTypes';
import useValueState from '../hooks/useValueState';
import useContentBox from '../hooks/useContentBox';
import { getIconColorStyles } from '../lib/helper/getIconColorStyles';
import { gradientTextSx } from '../lib/helper/gradientTextSx';
import type { RadioGroupCollectionContextProps } from '../types';
import type { StateStyleData } from '../hooks/useData/types';
import SafeImg from '../components/SafeImg';
import { buildRadioGroupChrome, buildRadioItemChrome } from './chrome';

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
    /** The resolved state rows, one radio each — the active ones checked (every duplicate). */
    states: StateStyleData[];
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    disabled: boolean;
}

/**
 * The radios, sized by the frame's Content-Box (ADR-0098) — a child of CollectionBase, where
 * the box is published: stacked, the height is split evenly between the items; side by side,
 * every item is capped at the full height. Unsized until the first measurement. The layout
 * and colour rules are the Radio-Chrome (`./chrome`); the icon over the dot and the label
 * stay here (ADR-0091).
 */
function RadioStack({ states, onChange, disabled }: RadioStackProps): React.ReactElement {
    const { widget, theme } = useContext(CollectionContext) as RadioGroupCollectionContextProps;
    const { height: contentBoxHeight } = useContentBox();
    const { radioOrientation, hideLabels, labelPlacement } = widget.data;

    const groupChrome = buildRadioGroupChrome({ orientation: radioOrientation });

    return (
        <Stack
            spacing={0}
            direction={groupChrome.direction}
            sx={groupChrome.sx}
        >
            {states.map((state, index) => {
                const itemChrome = buildRadioItemChrome({
                    orientation: radioOrientation,
                    contentBoxHeight,
                    count: states.length,
                    hideLabels,
                    labelPlacement,
                    data: widget.data,
                    iconColor: state.iconColor,
                    locked: disabled,
                    theme,
                });
                return (
                    <FormControlLabel
                        key={`${String(state.value)}-${index}`}
                        labelPlacement={labelPlacement}
                        sx={itemChrome.label}
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
                                sx={itemChrome.radio}
                                checked={state.active}
                                onChange={onChange}
                                value={state.value}
                            />
                        }
                        label={
                            !hideLabels ? (
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
            <RadioStack
                states={states}
                onChange={handleChange}
                disabled={locked}
            />
        </CollectionBase>
    );
}

export default RadioGroupCollection;
