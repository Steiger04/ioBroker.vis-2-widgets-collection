/**
 * Select collection renderer.
 *
 * @module widgets/SelectCollection
 */

import { Box, MenuItem, Select, Stack, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import React, { useContext, useRef } from 'react';
import CollectionBase from '../components/CollectionBase';
import CollectionBaseImage from '../components/CollectionBaseImage';
import { CollectionContext } from '../components/CollectionProvider';
import useDataNew from '../hooks/useDataNew';
import useElementDimensions from '../hooks/useElementDimensions';
import useValueState from '../hooks/useValueState';
import SafeImg from '../components/SafeImg';
import { getIconColorStyles } from '../lib/helper/getIconColorStyles';
import { gradientColor } from '../lib/helper/gradientColor';

import type { SelectChangeEvent } from '@mui/material/Select';
import type { SelectCollectionContextProps } from '../types';
import { extractColorFromValue } from '../lib/helper/extractColorFromValue';

function SelectCollection(): React.ReactElement {
    const contentRef = useRef<HTMLDivElement>(null);
    const { width } = useElementDimensions(contentRef?.current);
    // SelectCollection is only used by SelectCollectionWidget, so the cast is safe.
    const context = useContext(CollectionContext) as SelectCollectionContextProps;
    const { widget } = context;
    const cidObject = widget.data.cidObject;
    const oidObject = widget.data.oidObject;
    const { data, statesNew } = useDataNew('oid');
    const { value: oidValue, updateValue: setOidValueState } = useValueState('oid');
    const { updateValue: setCidValueState } = useValueState('cid');

    const oidType = oidObject?.type;

    const isValidType = ['boolean', 'number', 'string', 'mixed'].includes(oidType || '');

    const valueIndex = statesNew.findIndex(state => String(state.value) === String(oidValue));

    const changeHandler = (event: SelectChangeEvent<string | number>): void => {
        const selectedIndex = event.target.value;
        const selectedState = statesNew[selectedIndex as number];
        const value = selectedState.value;

        if (cidObject) {
            setCidValueState(value!);
        }

        setOidValueState(value!);
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
                        },
                    }}
                    sx={{
                        width: '100%',
                        height: '100%',
                        maxWidth: `calc(${width}px - 10%)`,

                        '& .MuiSelect-icon': {
                            color: widget.data.arrowColor || data.textColor || data.iconColor,
                        },
                    }}
                >
                    {statesNew.map((state, idx) => {
                        return (
                            <MenuItem
                                key={String(state.value)}
                                value={idx}
                                sx={{
                                    background: gradientColor(state.background),
                                    bgcolor: gradientColor(state.background) ? 'transparent' : state.background,

                                    '& .MuiTouchRipple-root': {
                                        /* color: gradientColor(state.background)
                                            ? alpha(extractColorFromValue(state.background)!, 0.3)
                                            : state.background
                                              ? alpha(state.background, 0.3)
                                              : undefined, */
                                    },

                                    '&.Mui-selected': {
                                        background: gradientColor(state.background),
                                        bgcolor: gradientColor(state.background) ? undefined : state.background,
                                    },

                                    '&.Mui-selected:hover': {
                                        background: gradientColor(state.background)
                                            ? alpha(extractColorFromValue(state.background)!, 0.5)
                                            : undefined,
                                        bgcolor: gradientColor(state.background)
                                            ? undefined
                                            : state.background
                                              ? alpha(state.background, 0.5)
                                              : undefined,
                                    },
                                    '&:hover': {
                                        background: gradientColor(state.background)
                                            ? alpha(extractColorFromValue(state.background)!, 0.5)
                                            : undefined,
                                        bgcolor: gradientColor(state.background)
                                            ? undefined
                                            : state.background
                                              ? alpha(state.background, 0.5)
                                              : undefined,
                                    },
                                }}
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
