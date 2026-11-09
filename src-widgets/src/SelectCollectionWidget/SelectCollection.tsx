/**
 * Select collection renderer.
 *
 * @module widgets/SelectCollection
 */

import { Box, MenuItem, Select, Stack, Typography } from '@mui/material';
import React, { useCallback, useContext } from 'react';
import CollectionBase from '../components/CollectionBase';
import { CollectionContext } from '../components/CollectionProvider';
import useData from '../hooks/useData';
import useStyles from '../hooks/useStyles';
import { ANY_VALUE_TYPES, isAllowedOidType } from '../lib/allowedOidTypes';
import useContentBox from '../hooks/useContentBox';
import useValueState from '../hooks/useValueState';
import SafeImg from '../components/SafeImg';
import { getIconColorStyles } from '../lib/helper/getIconColorStyles';
import { gradientTextSx } from '../lib/helper/gradientTextSx';
import { resolveWriteTarget } from '../lib/writeTarget';
import { buildMenuChrome, buildMenuItemChrome, buildSelectChrome, menuPropsOf } from './chrome';

import type { SelectChangeEvent } from '@mui/material/Select';
import type { SelectCollectionContextProps } from '../types';
import type { MenuChromeInput, SelectChromeInput } from './chrome';

/** Props for {@link BoundedSelect}: the field, and its Select-Chrome inputs without the width. */
interface BoundedSelectProps {
    /** MUI's value: the 0-based entry index, '' for "nothing selected". */
    value: number | '';
    onChange: (event: SelectChangeEvent<string | number>) => void;
    disabled: boolean;
    /** The popup's chrome inputs ({@link buildMenuChrome}); the width comes from the Content-Box. */
    menuChrome: Omit<MenuChromeInput, 'width'>;
    /** The field's chrome inputs ({@link buildSelectChrome}); the width comes from the Content-Box. */
    fieldChrome: Omit<SelectChromeInput, 'width'>;
    /** The menu entries. */
    children: React.ReactNode;
}

/**
 * The select field and its popup, bounded by the frame's Content-Box (ADR-0098) — a child of
 * CollectionBase, where the box is published; `undefined` until the first measurement.
 */
function BoundedSelect({
    value,
    onChange,
    disabled,
    menuChrome,
    fieldChrome,
    children,
}: BoundedSelectProps): React.ReactElement {
    const { width } = useContentBox();

    return (
        <Select
            variant="standard"
            disableUnderline
            value={value}
            onChange={onChange}
            disabled={disabled}
            MenuProps={menuPropsOf(buildMenuChrome({ ...menuChrome, width }))}
            sx={buildSelectChrome({ ...fieldChrome, width })}
        >
            {children}
        </Select>
    );
}

function SelectCollection(): React.ReactElement {
    const context = useContext(CollectionContext) as SelectCollectionContextProps;
    const { widget, theme } = context;
    const { borderStyles, textStyles } = useStyles(widget.style);
    const oidObject = widget.data.oidObject;
    // The display follows the main OID's status alone: activePosition indexes `states`
    // (not a Feldnummer); undefined = no matching state.
    const { data, states, oidValue, activePosition } = useData('oid');

    // Schreibziel (ADR-0090): the control ID when set, else the main OID — written alone,
    // no optimistic patch of the main OID; the lock follows the same target.
    const { idName, readOnly } = resolveWriteTarget(widget.data);
    const { updateValue } = useValueState(idName);

    const oidType = oidObject?.type;

    const isValidType = isAllowedOidType(ANY_VALUE_TYPES, oidType);

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
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <BoundedSelect
                    // MUI's value is the 0-based entry index = the active list position;
                    // '' is its "nothing selected".
                    value={activePosition ?? ''}
                    onChange={changeHandler}
                    disabled={readOnly}
                    // Select-Chrome: the popup follows the EXPLICIT noCard, never wrappedContent.
                    menuChrome={{
                        noCard: widget.data.noCard,
                        frameBackground: data.frameBackground,
                        borderStyles,
                    }}
                    fieldChrome={{
                        arrowColor: widget.data.arrowColor,
                        textColor: data.textColor,
                        textStyles,
                        theme,
                    }}
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
                </BoundedSelect>
            </Box>
        </CollectionBase>
    );
}

export default SelectCollection;
