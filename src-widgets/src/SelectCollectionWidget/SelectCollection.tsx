/**
 * Select collection renderer.
 *
 * @module widgets/SelectCollection
 */

import { Box, MenuItem, Select, Stack, Typography } from '@mui/material';
import React, { useCallback, useContext, useState } from 'react';
import CollectionBase from '../components/CollectionBase';
import CollectionBaseImage from '../components/CollectionBaseImage';
import { CollectionContext } from '../components/CollectionProvider';
import useData from '../hooks/useData';
import useStyles from '../hooks/useStyles';
import { ANY_VALUE_TYPES, isAllowedOidType } from '../lib/allowedOidTypes';
import useElementDimensions from '../hooks/useElementDimensions';
import useValueState from '../hooks/useValueState';
import SafeImg from '../components/SafeImg';
import { getIconColorStyles } from '../lib/helper/getIconColorStyles';
import { gradientTextSx } from '../lib/helper/gradientTextSx';
import { resolveWriteTarget } from '../lib/writeTarget';
import { buildMenuChrome, buildMenuItemChrome, buildSelectChrome } from './chrome';

import type { SelectChangeEvent } from '@mui/material/Select';
import type { SelectCollectionContextProps } from '../types';

function SelectCollection(): React.ReactElement {
    // Callback ref: the element lands in state on mount, so the measurement starts at once
    // instead of waiting for a later re-render to read a filled ref.
    const [contentRef, setContentRef] = useState<HTMLDivElement | null>(null);
    const { width } = useElementDimensions(contentRef);

    const context = useContext(CollectionContext) as SelectCollectionContextProps;
    const { widget } = context;
    const { borderStyles } = useStyles(widget.style);
    const oidObject = widget.data.oidObject;
    // The display follows the main OID's status alone: activeFieldNumber is the 1-based
    // state field suffix (value1, value2, …) matching it; undefined = no matching state.
    const { data, states, oidValue, activeFieldNumber } = useData('oid');

    // Schreibziel (ADR-0090): the control ID when set, else the main OID — written alone,
    // no optimistic patch of the main OID; the lock follows the same target.
    const { idName, readOnly } = resolveWriteTarget(widget.data);
    const { updateValue } = useValueState(idName);

    const oidType = oidObject?.type;

    const isValidType = isAllowedOidType(ANY_VALUE_TYPES, oidType);

    // MUI's value is the 0-based entry index; '' is its "nothing selected".
    const activeIndex = activeFieldNumber === undefined ? '' : activeFieldNumber - 1;

    const changeHandler = useCallback(
        (event: SelectChangeEvent<string | number>): void => {
            const selectedIndex = Number(event.target.value);

            if (selectedIndex < 0 || selectedIndex >= states.length) {
                return;
            }

            const selectedState = states[selectedIndex];
            if (selectedState?.value === undefined) {
                return;
            }

            updateValue(selectedState.value);
        },
        [states, updateValue],
    );

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

            <Box
                ref={setContentRef}
                sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Select
                    variant="standard"
                    disableUnderline
                    value={activeIndex}
                    onChange={changeHandler}
                    disabled={readOnly}
                    // Select-Chrome: the popup follows the EXPLICIT noCard, never wrappedContent.
                    MenuProps={buildMenuChrome({
                        width,
                        noCard: widget.data.noCard,
                        frameBackground: data.frameBackground,
                        borderStyles,
                    })}
                    sx={buildSelectChrome({
                        width,
                        arrowColor: widget.data.arrowColor,
                        textColor: data.textColor,
                    })}
                >
                    {states.map((state, index) => (
                        <MenuItem
                            key={`${String(state.value)}-${index}`}
                            value={index}
                            sx={buildMenuItemChrome(state.background)}
                        >
                            <Stack
                                direction="row"
                                spacing={state.icon ? 1 : 0}
                                sx={{
                                    alignItems: 'center',
                                }}
                            >
                                <SafeImg
                                    alt=""
                                    src={state.icon}
                                    style={{
                                        position: 'relative',
                                        top: `calc(0px - ${state.iconYOffset})`,
                                        right: `calc(0px - ${state.iconXOffset})`,
                                        height: state.iconSize,
                                        ...getIconColorStyles(state.icon, state.iconColor, state.forceColorMask),
                                    }}
                                />
                                <Typography
                                    component={Box}
                                    variant="subtitle2"
                                    sx={{
                                        whiteSpace: 'pre-wrap',
                                        fontSize: state.valueSize,
                                        textAlign: 'left',
                                        ...gradientTextSx(state.textColor),
                                        textTransform: 'none',
                                        width: '100%',
                                        height: '100%',
                                        flexGrow: 1,
                                        alignContent: 'center',
                                    }}
                                    contentEditable="false"
                                    dangerouslySetInnerHTML={{
                                        __html: state.label ?? '',
                                    }}
                                />
                            </Stack>
                        </MenuItem>
                    ))}
                </Select>
            </Box>
        </CollectionBase>
    );
}

export default SelectCollection;
