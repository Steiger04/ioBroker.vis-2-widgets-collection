import { Box, Typography, Checkbox, FormControlLabel } from '@mui/material';
import React, { useContext } from 'react';
import CollectionBase from '../components/CollectionBase';
import CollectionBaseImage from '../components/CollectionBaseImage';
import { CollectionContext } from '../components/CollectionProvider';
import useData from '../hooks/useData';
import useHtmlValue from '../hooks/useHtmlValue';
import useStyles from '../hooks/useStyles';
import useValueState from '../hooks/useValueState';
import type { CheckboxCollectionContextProps } from '../types';

const defaultIconTrue =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSAzSDVhMiAyIDAgMCAwLTIgMnYxNGEyIDIgMCAwIDAgMiAyaDE0YTIgMiAwIDAgMCAyLTJWNWEyIDIgMCAwIDAtMi0yem0tOSAxNGwtNS01bDEuNDEtMS40MUwxMCAxNC4xN2w3LjU5LTcuNTlMMTkgOGwtOSA5eiIvPjwvc3ZnPg==';
const defaultIconFalse =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOSA1djE0SDVWNWgxNG0wLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yeiIvPjwvc3ZnPg==';

function CheckboxCollection(): React.JSX.Element {
    // CheckboxCollection wird nur im CheckboxCollectionWidget verwendet
    const context = useContext(CollectionContext) as CheckboxCollectionContextProps;
    const { widget, theme } = context;

    // Sicherer Zugriff auf optionale Properties
    const oidObject = widget.data.oidObject;
    const { textStyles, fontStyles } = useStyles(widget.style);
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
                                    <img
                                        alt=""
                                        src={data.iconActive || defaultIconTrue}
                                        style={{
                                            width:
                                                (typeof data.iconSizeOnly === 'number' &&
                                                    `calc(100% * ${data.iconSizeOnly} / 100)`) ||
                                                '100%',
                                            height:
                                                (typeof data.iconSizeOnly === 'number' &&
                                                    `calc(100% * ${data.iconSizeOnly} / 100)`) ||
                                                '100%',

                                            objectFit: 'contain',

                                            color: data.iconColorActive || data.iconColor || theme.palette.primary.main,
                                            filter:
                                                data.iconColorActive || data.iconColor || theme.palette.primary.main
                                                    ? 'drop-shadow(0px 10000px 0)'
                                                    : undefined,
                                            transform:
                                                data.iconColorActive || data.iconColor || theme.palette.primary.main
                                                    ? 'translateY(-10000px)'
                                                    : undefined,
                                        }}
                                    />
                                }
                                icon={
                                    <img
                                        alt=""
                                        src={data.iconActive || defaultIconFalse}
                                        style={{
                                            width:
                                                (typeof data.iconSizeOnly === 'number' &&
                                                    `calc(100% * ${data.iconSizeOnly} / 100)`) ||
                                                '100%',
                                            height:
                                                (typeof data.iconSizeOnly === 'number' &&
                                                    `calc(100% * ${data.iconSizeOnly} / 100)`) ||
                                                '100%',

                                            objectFit: 'contain',

                                            color: data.iconColorActive || data.iconColor || theme.palette.primary.main,
                                            filter:
                                                data.iconColorActive || data.iconColor || theme.palette.primary.main
                                                    ? 'drop-shadow(0px 10000px 0)'
                                                    : undefined,
                                            transform:
                                                data.iconColorActive || data.iconColor || theme.palette.primary.main
                                                    ? 'translateY(-10000px)'
                                                    : undefined,
                                        }}
                                    />
                                }
                                sx={{
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
                                        ...fontStyles,
                                        ...textStyles,
                                        fontSize: data.valueSizeActive || data.valueSize,
                                        textAlign: 'center', // Für HTML-Inhalt mit Tags
                                        bgcolor: 'transparent',
                                        color: data.textColorActive || data.textColor,
                                        textTransform: 'none',
                                        px: 1,
                                        pl: 0,
                                        pr: 2,
                                        width: '100%',
                                        height: '100%',
                                        flexGrow: 1,
                                        display: 'flex',
                                        alignItems: 'center', // Vertikale Zentrierung
                                        justifyContent: 'flex-start', // Horizontale Zentrierung des Textblocks
                                        overflowWrap: 'break-word', // Moderne CSS-Eigenschaft für Wortumbruch
                                        wordBreak: 'break-word', // Zusätzlicher Schutz für lange Wörter
                                        whiteSpace: 'normal', // Erlaubt Zeilenumbrüche
                                        hyphens: 'auto', // Automatische Silbentrennung wenn unterstützt
                                        '& > div': {
                                            textAlign: 'left', // Linksbündige Zeilen bei Umbrüchen im HTML
                                            display: 'inline-block',
                                        },
                                    }}
                                    dangerouslySetInnerHTML={{
                                        __html: `<div style="text-align: center; display: inline-block; width: 100%;">${contentValue || ''}</div>`,
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
