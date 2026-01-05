/**
 * Select collection renderer.
 *
 * @module widgets/SelectCollection
 */

import { Box, MenuItem, Select, Stack, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import React, { useContext, useRef } from 'react';
import type { SelectChangeEvent } from '@mui/material/Select';
import CollectionBase from '../components/CollectionBase';
import CollectionBaseImage from '../components/CollectionBaseImage';
import { CollectionContext } from '../components/CollectionProvider';
import useData from '../hooks/useData';
import useElementDimensions from '../hooks/useElementDimensions';
import useValueState from '../hooks/useValueState';
import SafeImg from '../components/SafeImg';
import { getIconColorStyles } from '../lib/helper/getIconColorStyles';
import type { SelectCollectionContextProps } from '../types';

// const emptyIcon = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

function SelectCollection(): React.ReactElement {
    const contentRef = useRef<HTMLDivElement>(null);
    const { width } = useElementDimensions(contentRef?.current);
    // SelectCollection is only used by SelectCollectionWidget, so the cast is safe.
    const context = useContext(CollectionContext) as SelectCollectionContextProps;
    const { widget, theme } = context;
    const cidObject = widget.data.cidObject;
    const oidObject = widget.data.oidObject;
    const { data, states } = useData('oid');
    const { value: oidValue, updateValue: setOidValueState } = useValueState('oid');
    const { updateValue: setCidValueState } = useValueState('cid');

    const oidType = oidObject?.type;

    const isValidType = oidType === 'boolean' || oidType === 'number' || oidType === 'string' || oidType === 'mixed';

    const valueIndex = states.findIndex(state => String(state.value) === String(oidValue));

    const changeHandler = (event: SelectChangeEvent<string | number>): void => {
        const selectedIndex = event.target.value;
        const selectedState = states[selectedIndex as number];
        const value = selectedState.value;

        if (cidObject) {
            setCidValueState(value);
        }

        setOidValueState(value);
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
                        MenuListProps: {
                            sx: {
                                background: data.backgroundColor ? alpha(data.backgroundColor, 0.7) : data.background,
                            },
                        },
                    }}
                    sx={{
                        width: '100%',
                        height: '100%',
                        maxWidth: `calc(${width}px - 10%)`,

                        '& .MuiSelect-select': {
                            backgroundColor: alpha(
                                valueIndex !== -1
                                    ? (() => {
                                          // Determine whether an icon is available for the selected value.
                                          const currentImgSrc =
                                              widget.data[`iconSmall${valueIndex + 1}`] ||
                                              widget.data[`icon${valueIndex + 1}`] ||
                                              widget.data.iconSmall ||
                                              widget.data.icon;

                                          // If an icon exists: use icon color; otherwise: use text color.
                                          return currentImgSrc
                                              ? widget.data[`iconColor${valueIndex + 1}`] ||
                                                    widget.data.iconColor ||
                                                    data.iconColor ||
                                                    theme.palette.primary.main
                                              : widget.data[`textColor${valueIndex + 1}`] ||
                                                    widget.data.textColor ||
                                                    data.textColor ||
                                                    theme.palette.primary.main;
                                      })()
                                    : widget.data.iconColor || data.textColor || theme.palette.primary.main,
                                0.15,
                            ),
                            paddingLeft: 1,
                        },

                        '& .MuiSelect-icon': {
                            color:
                                valueIndex !== -1
                                    ? (() => {
                                          // Determine whether an icon is available for the selected value.
                                          const currentImgSrc =
                                              widget.data[`iconSmall${valueIndex + 1}`] ||
                                              widget.data[`icon${valueIndex + 1}`] ||
                                              widget.data.iconSmall ||
                                              widget.data.icon;

                                          // If an icon exists: use icon color; otherwise: use text color.
                                          return currentImgSrc
                                              ? widget.data[`iconColor${valueIndex + 1}`] ||
                                                    widget.data.iconColor ||
                                                    data.iconColor ||
                                                    theme.palette.primary.main
                                              : widget.data[`textColor${valueIndex + 1}`] ||
                                                    widget.data.textColor ||
                                                    data.textColor ||
                                                    theme.palette.primary.main;
                                      })()
                                    : widget.data.arrowColor ||
                                      widget.data.iconColor ||
                                      data.textColor ||
                                      theme.palette.primary.main,
                        },

                        '&.Mui-focused': {
                            ariaHidden: 'true',
                            '& .MuiSelect-select': {
                                backgroundColor: alpha(
                                    valueIndex !== -1
                                        ? (() => {
                                              // Determine whether an icon is available for the selected value.
                                              const currentImgSrc =
                                                  widget.data[`iconSmall${valueIndex + 1}`] ||
                                                  widget.data[`icon${valueIndex + 1}`] ||
                                                  widget.data.iconSmall ||
                                                  widget.data.icon;

                                              // If an icon exists: use icon color; otherwise: use text color.
                                              return currentImgSrc
                                                  ? widget.data[`iconColor${valueIndex + 1}`] ||
                                                        widget.data.iconColor ||
                                                        data.iconColor ||
                                                        theme.palette.primary.main
                                                  : widget.data[`textColor${valueIndex + 1}`] ||
                                                        widget.data.textColor ||
                                                        data.textColor ||
                                                        theme.palette.primary.main;
                                          })()
                                        : widget.data.iconColor || data.textColor || theme.palette.primary.main,
                                    0.2,
                                ),
                                paddingLeft: 1,
                            },
                        },
                    }}
                >
                    {states.map((state, idx) => {
                        const imgSrc =
                            widget.data[`iconSmall${idx + 1}`] ||
                            widget.data[`icon${idx + 1}`] ||
                            widget.data.iconSmall ||
                            widget.data.icon;

                        // Pick the color based on icon/text availability.
                        const getColorForItem = (): string => {
                            return imgSrc
                                ? // Icon present: use icon color.
                                  widget.data[`iconColor${idx + 1}`] ||
                                      widget.data.iconColor ||
                                      data.iconColor ||
                                      theme.palette.primary.main
                                : // No icon: use text color.
                                  widget.data[`textColor${idx + 1}`] ||
                                      widget.data.textColor ||
                                      data.textColor ||
                                      theme.palette.primary.main;
                        };

                        const itemColor = getColorForItem();

                        return (
                            <MenuItem
                                key={String(state.value)}
                                value={idx}
                                sx={{
                                    '& .MuiTouchRipple-root': {
                                        color: itemColor,
                                    },

                                    '&.Mui-selected': {
                                        backgroundColor: alpha(itemColor, 0.16),
                                    },

                                    '&.Mui-selected:hover': {
                                        backgroundColor: alpha(itemColor, 0.24),
                                    },
                                    '&:hover': {
                                        backgroundColor: alpha(itemColor, 0.08),
                                    },

                                    background:
                                        (widget.data[`backgroundColor${idx + 1}`] &&
                                            `${widget.data[`backgroundColor${idx + 1}`]}!important`) ||
                                        `${widget.data[`background${idx + 1}`]}!important`,
                                }}
                            >
                                <Stack
                                    direction="row"
                                    spacing={imgSrc ? 1 : 0}
                                    sx={{
                                        alignItems: 'center',
                                    }}
                                >
                                    <SafeImg
                                        alt=""
                                        src={
                                            typeof imgSrc === 'string'
                                                ? imgSrc
                                                : typeof imgSrc === 'number'
                                                  ? imgSrc.toString()
                                                  : undefined
                                        }
                                        style={{
                                            position: 'relative',

                                            top: `calc(0px - ${widget.data[`iconYOffset${idx + 1}`]})`,
                                            right: `calc(0px - ${widget.data[`iconXOffset${idx + 1}`]})`,

                                            /* width:
                                                (!imgSrc && '0px') ||
                                                (typeof widget.data[`iconSize${idx + 1}`] === 'number'
                                                    ? `calc(24px * ${widget.data[`iconSize${idx + 1}`]} / 100)`
                                                    : typeof widget.data.iconSize === 'number'
                                                      ? `calc(24px * ${widget.data.iconSize} / 100)`
                                                      : '24px'), */
                                            height:
                                                (!imgSrc && '0px') ||
                                                (typeof widget.data[`iconSize${idx + 1}`] === 'number'
                                                    ? `calc(24px * ${widget.data[`iconSize${idx + 1}`]} / 100)`
                                                    : typeof widget.data.iconSize === 'number'
                                                      ? `calc(24px * ${widget.data.iconSize} / 100)`
                                                      : '24px'),
                                            ...getIconColorStyles(
                                                typeof imgSrc === 'string'
                                                    ? imgSrc
                                                    : typeof imgSrc === 'number'
                                                      ? imgSrc.toString()
                                                      : undefined,
                                                (String(oidValue) === String(widget.data[`value${idx + 1}`]) &&
                                                    widget.data.iconColorActive) ||
                                                    widget.data[`iconColor${idx + 1}`] ||
                                                    widget.data.iconColor ||
                                                    data.iconColor ||
                                                    theme.palette.primary.main,
                                            ),
                                        }}
                                    />
                                    <Typography
                                        component={Box}
                                        variant="subtitle2"
                                        sx={{
                                            whiteSpace: 'pre-wrap',
                                            fontSize: widget.data[`valueSize${idx + 1}`] || data.valueSize,
                                            textAlign: 'left',
                                            bgcolor: 'transparent',
                                            color:
                                                widget.data[`textColor${idx + 1}`] ||
                                                widget.data.textColor ||
                                                data.textColor ||
                                                theme.palette.primary.main,
                                            textTransform: 'none',

                                            width: '100%',
                                            height: '100%',

                                            // px: 1,

                                            flexGrow: 1,
                                            alignContent: 'center',
                                        }}
                                        contentEditable="false"
                                        dangerouslySetInnerHTML={{
                                            __html:
                                                (widget.data[`alias${idx + 1}`] &&
                                                    widget.data[`alias${idx + 1}`]?.replace(/(\r\n|\n|\r)/gm, '')) ||
                                                (widget.data[`value${idx + 1}`] &&
                                                    `${widget.data[`value${idx + 1}`]}${oidObject?.unit}`) ||
                                                '',
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
