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
import useData from '../hooks/useData';
import useElementDimensions from '../hooks/useElementDimensions';
import useValueState from '../hooks/useValueState';
import SafeImg from '../components/SafeImg';
import { getIconColorStyles } from '../lib/helper/getIconColorStyles';
import { gradientColor } from '../lib/helper/gradientColor';

import type { SelectChangeEvent } from '@mui/material/Select';
import type { SelectCollectionContextProps } from '../types';
import { extractColorFromValue } from '../lib/helper/extractColorFromValue';

/** Computes background color styles for a menu item, handling both gradient and solid backgrounds. */
function getMenuItemColorStyles(bgColor: string | null | undefined): Record<string, unknown> {
    const gradient = gradientColor(bgColor);
    const extractedColor = gradient ? extractColorFromValue(bgColor) : undefined;
    const hoverBg = gradient ? alpha(extractedColor!, 0.5) : bgColor ? alpha(bgColor, 0.5) : undefined;

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
    const { width } = useElementDimensions(contentRef?.current);
    // SelectCollection is only used by SelectCollectionWidget, so the cast is safe.
    const context = useContext(CollectionContext) as SelectCollectionContextProps;
    const { widget } = context;
    const cidObject = widget.data.cidObject;
    const oidObject = widget.data.oidObject;
    const { data, states } = useData('oid');
    const { value: oidValue, updateValue: setOidValueState } = useValueState('oid');
    const { updateValue: setCidValueState } = useValueState('cid');

    const oidType = oidObject?.type;

    const isValidType = ['boolean', 'number', 'string', 'mixed'].includes(oidType || '');

    const valueIndex = useMemo(
        () => states.findIndex(state => String(state.value) === String(oidValue)),
        [states, oidValue],
    );

    const changeHandler = useCallback(
        (event: SelectChangeEvent<string | number>): void => {
            const selectedIndex = event.target.value;
            const selectedState = states[selectedIndex as number];
            const value = selectedState.value;

            if (cidObject) {
                setCidValueState(value!);
            }

            setOidValueState(value!);
        },
        [states, cidObject, setCidValueState, setOidValueState],
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
                    overflow: 'auto',
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
                    MenuProps={{
                        sx: {
                            maxWidth: width,
                            mt: 0.3,

                            '& .MuiList-root': {
                                // bgcolor: data.frameBackground,
                                py: 0,
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
                    {states.map((state, idx) => {
                        return (
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

                                            background: gradientColor(state.textColor),
                                            WebkitBackgroundClip: 'text',
                                            backgroundClip: 'text',
                                            color: gradientColor(state.textColor) ? 'transparent' : state.textColor,

                                            textTransform: 'none',

                                            width: '100%',
                                            height: '100%',

                                            // px: 1,

                                            flexGrow: 1,
                                            alignContent: 'center',
                                        }}
                                        contentEditable="false"
                                        dangerouslySetInnerHTML={{
                                            __html: state.label!,
                                        }}
                                    />
                                </Stack>
                            </MenuItem>
                        );
                    })}
                </Select>
            </Box>
        </CollectionBase>
    );
}

export default SelectCollection;
