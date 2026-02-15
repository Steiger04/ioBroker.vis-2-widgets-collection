/**
 * Checkbox collection renderer.
 *
 * @module widgets/CheckboxCollection
 */

import { Box, Checkbox, FormControlLabel, Typography } from '@mui/material';
import React, { useContext } from 'react';
import CollectionBase from '../components/CollectionBase';
import CollectionBaseImage from '../components/CollectionBaseImage';
import { CollectionContext } from '../components/CollectionProvider';
import useData from '../hooks/useData/useData';
import useHtmlValue from '../hooks/useHtmlValue';
import useValueState from '../hooks/useValueState';
import { getIconColorStyles } from '../lib/helper/getIconColorStyles';
import { gradientColor } from '../lib/helper/gradientColor';
import SafeImg from '../components/SafeImg';
import { useJsonTableAnalysis } from '../hooks/useJsonTableAnalysis';
import { testJson } from '../hooks/useJsonTableAnalysis/testJson';

import type { CheckboxCollectionContextProps } from '../types';

const defaultIconTrue =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSAzSDVhMiAyIDAgMCAwLTIgMnYxNGEyIDIgMCAwIDAgMiAyaDE0YTIgMiAwIDAgMCAyLTJWNWEyIDIgMCAwIDAtMi0yem0tOSAxNGwtNS01bDEuNDEtMS40MUwxMCAxNC4xN2w3LjU5LTcuNTlMMTkgOGwtOSA5eiIvPjwvc3ZnPg==';
const defaultIconFalse =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSA1djE0SDVWNWgxNG0wLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yeiIvPjwvc3ZnPg==';

function CheckboxCollection(): React.JSX.Element {
    const context = useContext(CollectionContext) as CheckboxCollectionContextProps;
    const { widget, theme } = context;

    const { columns, rows, meta } = useJsonTableAnalysis(JSON.parse(testJson));

    console.log('CheckboxCollection - columns:', columns);
    console.log('CheckboxCollection - rows:', rows);
    console.log('CheckboxCollection - meta:', meta);

    const oidObject = widget.data.oidObject;

    const { data } = useData('oid');
    const { value: oidValue, updateValue: setOidValueState } = useValueState('oid');

    const oidType = oidObject?.type;

    const isValidType = oidType === 'boolean';

    const contentValue = useHtmlValue(oidValue, widget, data);

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
                sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {oidValue !== undefined && (
                    <FormControlLabel
                        labelPlacement={widget.data.checkboxLabelPlacement}
                        sx={{
                            width: '100%',
                            height: '100%',

                            display: 'flex',

                            '&.MuiFormControlLabel-labelPlacementStart': {
                                m: 0,
                            },
                            '&.MuiFormControlLabel-labelPlacementEnd': {
                                m: 0,
                            },
                            '&.MuiFormControlLabel-labelPlacementTop': {
                                m: 0,
                            },
                            '&.MuiFormControlLabel-labelPlacementBottom': {
                                m: 0,
                            },
                        }}
                        control={
                            <Checkbox
                                disabled={widget.data.onlyDisplay}
                                disableRipple
                                checked={Boolean(oidValue)}
                                onChange={() => setOidValueState(!oidValue)}
                                checkedIcon={
                                    <SafeImg
                                        alt=""
                                        src={data.icon || defaultIconTrue}
                                        style={{
                                            objectFit: 'contain',
                                            width: `calc(100% * (${data.iconSize} / 24px))`,
                                            height: `calc(100% * (${data.iconSize} / 24px))`,

                                            ...getIconColorStyles(
                                                data.icon || defaultIconTrue,
                                                data.iconColor || theme.palette.primary.main,
                                                data.forceColorMask,
                                            ),
                                        }}
                                    />
                                }
                                icon={
                                    <SafeImg
                                        alt=""
                                        src={data.icon || defaultIconFalse}
                                        style={{
                                            objectFit: 'contain',
                                            width: `calc(100% * (${data.iconSize} / 24px))`,
                                            height: `calc(100% * (${data.iconSize} / 24px))`,

                                            ...getIconColorStyles(
                                                data.icon || defaultIconFalse,
                                                data.iconColor || theme.palette.primary.main,
                                                data.forceColorMask,
                                            ),
                                        }}
                                    />
                                }
                                sx={{
                                    left: data.iconXOffset,
                                    bottom: data.iconYOffset,
                                    objectFit: 'contain',
                                    width: '100%',
                                    height: '100%',

                                    flexGrow: 1,

                                    p: 0,

                                    '& .MuiSvgIcon-root': {
                                        width: '100%',
                                        height: '100%',
                                    },
                                }}
                            />
                        }
                        label={
                            !widget.data.withoutLabel && (
                                <Typography
                                    component={Box}
                                    variant="body2"
                                    sx={{
                                        fontSize: data.valueSize,
                                        textAlign: 'center',
                                        bgcolor: 'transparent',

                                        background: gradientColor(data.textColor),
                                        WebkitBackgroundClip: 'text',
                                        backgroundClip: 'text',
                                        color: gradientColor(data.textColor) ? 'transparent' : data.textColor,

                                        textTransform: 'none',
                                        px: 1,
                                        pl: 0,
                                        pr: 2,
                                        width: '100%',
                                        height: '100%',
                                        flexGrow: 1,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        overflowWrap: 'break-word',
                                        wordBreak: 'break-word',
                                        whiteSpace: 'normal',
                                        hyphens: 'auto',
                                        '& > div': {
                                            textAlign: 'left',
                                            display: 'inline-block',
                                        },
                                    }}
                                    dangerouslySetInnerHTML={{
                                        __html: `<div style="text-align: left; display: inline-block; width: 100%;">${contentValue || ''}</div>`,
                                    }}
                                />
                            )
                        }
                    />
                )}
            </Box>
        </CollectionBase>
    );
}

export default CheckboxCollection;
