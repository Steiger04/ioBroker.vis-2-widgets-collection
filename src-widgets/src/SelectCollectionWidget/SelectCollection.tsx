import { Box, MenuItem, Select, Stack, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import React, { useContext, useRef } from 'react';
import CollectionBase from '../components/CollectionBase';
import CollectionBaseImage from '../components/CollectionBaseImage';
import { CollectionContext } from '../components/CollectionProvider';
import useData from '../hooks/useData';
import useElementDimensions from '../hooks/useElementDimensions';
import useStyles from '../hooks/useStyles';
import useValueState from '../hooks/useValueState';
import type { SelectCollectionContextProps } from 'src';

const emptyIcon = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

function SelectCollection(): React.ReactElement {
    const contentRef = useRef<HTMLDivElement>(null);
    const { width } = useElementDimensions(contentRef?.current);
    // SelectCollection wird nur im SelectCollectionWidget verwendet, daher ist der Cast sicher
    const context = useContext(CollectionContext) as SelectCollectionContextProps;
    const { widget } = context;
    const cidObject = widget.data.cidObject;
    const oidObject = widget.data.oidObject;
    const { textStyles, fontStyles } = useStyles(widget.style);
    const { data, states } = useData('oid');
    const { value: oidValue, updateValue: setOidValueState } = useValueState('oid');
    const { updateValue: setCidValueState } = useValueState('cid');

    const oidType = oidObject?.type;

    const isValidType = oidType === 'boolean' || oidType === 'number' || oidType === 'string' || oidType === 'mixed';

    const valueIndex = states.findIndex(state => String(state.value) === String(oidValue));

    const changeHandler = (event: any): void => {
        const selectedIndex = event.target.value;
        const selectedState = states[selectedIndex];
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

                        '& .MuiSelect-icon': {
                            color: (widget.data as any).arrowColor,
                        },

                        '&.Mui-focused': {
                            ariaHidden: 'false',
                            background:
                                data.backgroundColorActive ||
                                data.backgroundColor ||
                                data.backgroundActive ||
                                data.background,
                        },
                    }}
                >
                    {states.map((state, idx) => {
                        const widgetData = widget.data as any; // Sichere Zugriffe auf dynamische Properties
                        const imgSrc =
                            widgetData[`iconSmall${idx + 1}`] ||
                            widgetData[`icon${idx + 1}`] ||
                            widgetData.iconSmall ||
                            widgetData.icon;

                        return (
                            <MenuItem
                                key={String(state.value)} // Sicherer Key-Cast
                                value={idx} // Index als value verwenden
                                sx={{
                                    '& .MuiTouchRipple-root': {
                                        color:
                                            widgetData[`iconColor${idx + 1}`] ||
                                            widgetData.iconColor ||
                                            widgetData.textColorActive ||
                                            data.textColor,
                                    },

                                    '&.Mui-selected': {
                                        backgroundColor:
                                            (widgetData[`iconColor${idx + 1}`] &&
                                                alpha(widgetData[`iconColor${idx + 1}`], 0.16)) ||
                                            (widgetData.iconColor && alpha(widgetData.iconColor, 0.16)) ||
                                            (data.textColor && alpha(data.textColor, 0.16)),
                                    },

                                    '&.Mui-selected:hover': {
                                        backgroundColor:
                                            (widgetData[`iconColor${idx + 1}`] &&
                                                alpha(widgetData[`iconColor${idx + 1}`], 0.16)) ||
                                            (widgetData.iconColor && alpha(widgetData.iconColor, 0.16)) ||
                                            (data.textColor && alpha(data.textColor, 0.16)),
                                    },
                                    '&:hover': {
                                        backgroundColor:
                                            (widgetData[`iconColor${idx + 1}`] &&
                                                alpha(widgetData[`iconColor${idx + 1}`], 0.16)) ||
                                            (widgetData.iconColor && alpha(widgetData.iconColor, 0.16)) ||
                                            (data.textColor && alpha(data.textColor, 0.16)),
                                    },

                                    background:
                                        (widgetData[`backgroundColor${idx + 1}`] &&
                                            `${widgetData[`backgroundColor${idx + 1}`]}!important`) ||
                                        `${widgetData[`background${idx + 1}`]}!important`,
                                }}
                            >
                                <Stack
                                    direction="row"
                                    spacing={imgSrc ? 1 : 0}
                                    sx={{
                                        alignItems: 'center',
                                    }}
                                >
                                    <img
                                        alt=""
                                        src={imgSrc || emptyIcon}
                                        style={{
                                            position: 'relative',

                                            top: `calc(0px - ${widgetData[`iconYOffset${idx + 1}`]})`,
                                            right: `calc(0px - ${widgetData[`iconXOffset${idx + 1}`]})`,

                                            width:
                                                (!imgSrc && '0px') ||
                                                (typeof widgetData[`iconSize${idx + 1}`] === 'number'
                                                    ? `calc(24px * ${widgetData[`iconSize${idx + 1}`]} / 100)`
                                                    : typeof widgetData.iconSize === 'number'
                                                      ? `calc(24px * ${widgetData.iconSize} / 100)`
                                                      : '24px'),
                                            height:
                                                (!imgSrc && '0px') ||
                                                (typeof widgetData[`iconSize${idx + 1}`] === 'number'
                                                    ? `calc(24px * ${widgetData[`iconSize${idx + 1}`]} / 100)`
                                                    : typeof widgetData.iconSize === 'number'
                                                      ? `calc(24px * ${widgetData.iconSize} / 100)`
                                                      : '24px'),
                                            color:
                                                (String(oidValue) === String(widgetData[`value${idx + 1}`]) &&
                                                    widgetData.iconColorActive) ||
                                                widgetData[`iconColor${idx + 1}`] ||
                                                widgetData.buttonGroupColor ||
                                                data.iconColor,
                                            filter:
                                                (String(oidValue) === String(widgetData[`value${idx + 1}`]) &&
                                                    widgetData.iconColorActive) ||
                                                widgetData[`iconColor${idx + 1}`] ||
                                                widgetData.buttonGroupColor ||
                                                data.iconColor
                                                    ? ('drop-shadow(0px 10000px 0)' as any)
                                                    : undefined,
                                            transform:
                                                (String(oidValue) === String(widgetData[`value${idx + 1}`]) &&
                                                    widgetData.iconColorActive) ||
                                                widgetData[`iconColor${idx + 1}`] ||
                                                widgetData.buttonGroupColor ||
                                                data.iconColor
                                                    ? ('translateY(-10000px)' as any)
                                                    : undefined,
                                        }}
                                    />
                                    <Typography
                                        component={Box}
                                        variant="subtitle2"
                                        sx={{
                                            whiteSpace: 'pre-wrap',
                                            ...fontStyles,
                                            ...textStyles,
                                            fontSize: widgetData[`valueSize${idx + 1}`] || data.valueSize,
                                            textAlign: 'left',
                                            bgcolor: 'transparent',
                                            color: widgetData[`textColor${idx + 1}`] || data.textColor,
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
                                                (widgetData[`alias${idx + 1}`] &&
                                                    widgetData[`alias${idx + 1}`].replace(/(\r\n|\n|\r)/gm, '')) ||
                                                (widgetData[`value${idx + 1}`] &&
                                                    `${widgetData[`value${idx + 1}`]}${oidObject?.unit}`) ||
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
