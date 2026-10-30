/**
 * Select collection renderer.
 *
 * @module widgets/SelectCollection
 */

import { Box, MenuItem, Select, Stack, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import React, { useCallback, useContext, useMemo, useRef } from 'react';
import CollectionBase from '../components/CollectionBase';
import CollectionBaseImage from '../components/CollectionBaseImage';
import { CollectionContext } from '../components/CollectionProvider';
import useData, { sameStateValue } from '../hooks/useData';
import useStyles from '../hooks/useStyles';
import { ANY_VALUE_TYPES, isAllowedOidType } from '../lib/allowedOidTypes';
import useElementDimensions from '../hooks/useElementDimensions';
import useValueState from '../hooks/useValueState';
import SafeImg from '../components/SafeImg';
import { getIconColorStyles } from '../lib/helper/getIconColorStyles';
import { gradientColor } from '../lib/helper/gradientColor';
import { gradientTextSx } from '../lib/helper/gradientTextSx';
import { extractColorFromValue } from '../lib/helper/extractColorFromValue';
import { resolveWriteTarget } from '../lib/writeTarget';

import type { SelectChangeEvent } from '@mui/material/Select';
import type { SelectCollectionContextProps } from '../types';
import { cleanSx } from '../lib/helper/sxUtils';

/** Computes background color styles for a menu item, handling both gradient and solid backgrounds. */
function getMenuItemColorStyles(bgColor: string | null | undefined): Record<string, unknown> {
    const gradient = gradientColor(bgColor);
    const extractedColor = gradient ? extractColorFromValue(bgColor) : undefined;
    const hoverBg = extractedColor ? alpha(extractedColor, 0.5) : bgColor ? alpha(bgColor, 0.5) : undefined;

    return {
        background: gradient,
        bgcolor: gradient ? 'transparent' : bgColor,

        '&.Mui-selected': {
            background: gradient,
            bgcolor: gradient ? undefined : bgColor,
        },

        '&.Mui-selected:hover': {
            background: gradient ? hoverBg : undefined,
            bgcolor: gradient ? undefined : hoverBg,
        },
        '&:hover': {
            background: gradient ? hoverBg : undefined,
            bgcolor: gradient ? undefined : hoverBg,
        },
    };
}

function SelectCollection(): React.ReactElement {
    const contentRef = useRef<HTMLDivElement>(null);
    const { width = 300 } = useElementDimensions(contentRef.current);

    const context = useContext(CollectionContext) as SelectCollectionContextProps;
    const { widget } = context;
    const { borderStyles } = useStyles(widget.style);
    const oidObject = widget.data.oidObject;
    // The display follows the main OID's status alone (oidValue).
    const { data, states, oidValue } = useData('oid');

    // Schreibziel (ADR-0090): the control ID when set, else the main OID — written alone,
    // no optimistic patch of the main OID; the lock follows the same target.
    const { idName, readOnly } = resolveWriteTarget(widget.data);
    const { updateValue } = useValueState(idName);

    const oidType = oidObject?.type;

    const isValidType = isAllowedOidType(ANY_VALUE_TYPES, oidType);

    const valueIndex = useMemo(() => {
        if (oidValue === null || oidValue === undefined) {
            return -1;
        }
        return states.findIndex(state => sameStateValue(state.value, oidValue));
    }, [states, oidValue]);

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
                ref={contentRef}
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
                    value={valueIndex !== -1 ? valueIndex : ''}
                    onChange={changeHandler}
                    disabled={readOnly}
                    MenuProps={{
                        PaperProps: {
                            sx: {
                                overflow: 'hidden',
                                '& .MuiMenu-list': {
                                    maxHeight: '100vh',
                                    overflowY: 'auto',
                                },
                                ...(widget.data.noCard && {
                                    '--Paper-overlay': 'none !important',
                                    '--Paper-shadow': 'none !important',
                                    boxShadow: 'none !important',
                                }),
                                background: data.frameBackground || (widget.data.noCard ? 'transparent' : undefined),
                                ...cleanSx(borderStyles),
                            },
                        },
                        slotProps: {
                            backdrop: {
                                style: { backgroundColor: 'transparent !important' },
                            },
                            root: {
                                sx: {
                                    maxWidth: width,
                                    mt: 0.5,

                                    '& .MuiList-root': {
                                        py: 0,
                                    },
                                },
                            },
                        },
                    }}
                    sx={{
                        width: '100%',
                        height: '100%',
                        maxWidth: `calc(${width}px - 10%)`,

                        '& .MuiSelect-icon': {
                            color: extractColorFromValue(widget.data.arrowColor || data.textColor || data.iconColor),
                        },
                    }}
                >
                    {states.map((state, idx) => (
                        <MenuItem
                            key={String(state.value)}
                            value={idx}
                            sx={getMenuItemColorStyles(state.background)}
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
