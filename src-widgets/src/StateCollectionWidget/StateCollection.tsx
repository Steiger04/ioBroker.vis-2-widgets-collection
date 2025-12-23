/**
 * Renderer for the State Collection widget.
 *
 * @module widgets/StateCollection
 * @remarks
 * Depending on configuration, the widget either:
 * - toggles between a small number of configured states directly, or
 * - opens {@link module:components/CollectionChangeDialog.default} for selection.
 */

import { Avatar, Box, Button, Typography } from '@mui/material';
import React, { useCallback, useState, useContext } from 'react';
import CollectionBase from '../components/CollectionBase';
import CollectionBaseImage from '../components/CollectionBaseImage';
import CollectionChangeDialog from '../components/CollectionChangeDialog';
import { CollectionContext } from '../components/CollectionProvider';
import useData from '../hooks/useData';
import useHtmlValue from '../hooks/useHtmlValue';
import useStyles from '../hooks/useStyles';
import useValueState from '../hooks/useValueState';
import { getIconColorStyles } from '../lib/helper/getIconColorStyles';
import type { StateCollectionContextProps } from '../types';

/**
 * State widget body.
 *
 * @returns Widget body element.
 */
function StateCollection(): React.ReactElement {
    // const contentRef = useRef<HTMLDivElement>(null);
    // const [setContentRef] = useState<HTMLSpanElement | null>(null);
    // This component is only used from StateCollectionWidget, so the cast is safe.
    const context = useContext(CollectionContext) as StateCollectionContextProps;
    const { widget } = context;
    const oidObject = widget.data.oidObject;
    const { textStyles, fontStyles } = useStyles(widget.style);
    const { data, widgetStates } = useData('oid');
    const { value: oidValue, updateValue: setOidValueState } = useValueState('oid');
    const [open, setOpen] = useState(false);

    const oidType = oidObject?.type;
    // const oidType = widget.data.oidType;

    const onlyStates = widget.data.onlyStates;

    const htmlValue = useHtmlValue(oidValue, widget, data);
    const contentValue = htmlValue !== undefined && htmlValue !== null ? String(htmlValue) : '';

    const downHandler = (): void => {
        const value1 = widget.data.value1;
        if (
            onlyStates &&
            Number(widget.data.values_count) === 2 &&
            widget.data.statePushButton &&
            value1 !== undefined
        ) {
            setTimeout(() => setOidValueState(value1), 0);
        }
    };

    const upHandler = (): void => {
        const value2 = widget.data.value2;
        if (
            onlyStates &&
            Number(widget.data.values_count) === 2 &&
            widget.data.statePushButton &&
            value2 !== undefined
        ) {
            setTimeout(() => setOidValueState(value2), 0);
        }
    };

    const clickHandler = useCallback(() => {
        if (!onlyStates) {
            setOpen(true);
            return;
        }

        switch (Number(widget.data.values_count)) {
            case 1:
                if (widget.data.value1 !== undefined) {
                    setOidValueState(widget.data.value1);
                }
                break;
            case 2:
                if (widget.data.value1 !== undefined && widget.data.value2 !== undefined) {
                    !widget.data.statePushButton && String(oidValue) === String(widget.data.value1)
                        ? setOidValueState(widget.data.value2)
                        : setOidValueState(widget.data.value1);
                }
                break;
            default:
                setOpen(true);
                break;
        }
    }, [
        oidValue,
        onlyStates,
        widget.data.values_count,
        widget.data.statePushButton,
        widget.data.value1,
        widget.data.value2,
        setOidValueState,
    ]);

    const StateButton = (
        <Button
            disabled={widget.data.onlyDisplay}
            onClick={clickHandler}
            onMouseDown={downHandler}
            onMouseUp={upHandler}
            onMouseOut={upHandler}
            onTouchStart={downHandler}
            onTouchEnd={upHandler}
            sx={{
                width: '100%',
                height: '100%',

                color:
                    data.iconColorActive || data.iconColor || data.textColorActive || data.textColor || 'primary.main',
                '&:hover': {
                    bgcolor: 'transparent',
                    filter:
                        (data.iconHoverActive && `brightness(${data.iconHoverActive})`) ||
                        (data.iconHover && `brightness(${data.iconHover})`),
                },
            }}
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
                {!widget.data.noIcon && (data.iconActive || data.icon) && (
                    <Box
                        sx={{
                            // overflow: "hidden",

                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexGrow: 1,

                            width: '100%',
                            height: '100%',
                        }}
                    >
                        <Avatar
                            variant="square"
                            src={data.iconActive || data.icon || undefined}
                            imgProps={{
                                style: {
                                    objectFit: 'contain',
                                },
                            }}
                            sx={{
                                overflow: 'hidden',

                                width:
                                    (typeof data.iconSizeOnly === 'number' &&
                                        `calc(100% * ${data.iconSizeOnly} / 100)`) ||
                                    '100%',
                                height:
                                    (typeof data.iconSizeOnly === 'number' &&
                                        `calc(100% * ${data.iconSizeOnly} / 100)`) ||
                                    '100%',

                                left: `calc(0px + ${data.iconXOffset})`,
                                top: `calc(0px - ${data.iconYOffset})`,

                                bgcolor: 'transparent',
                                ...getIconColorStyles(
                                    data.iconActive || data.icon,
                                    data.iconColorActive || data.iconColor || 'primary.main',
                                ),
                            }}
                        />
                    </Box>
                )}

                {!widget.data.noValue && (
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexGrow: 1,

                            width: '100%',
                            height: '100%',
                        }}
                    >
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
                                pr: 1,
                                width: '100%',
                                height: '100%',
                                flexGrow: 1,
                                display: 'flex',
                                alignItems: 'center', // Vertikale Zentrierung
                                justifyContent: 'center', // Horizontale Zentrierung des Textblocks
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
                                __html: `<div style="text-align: left; display: inline-block;">${contentValue || ''}</div>`,
                            }}
                        />
                    </Box>
                )}
            </Box>
        </Button>
    );

    const isValidType = oidType === 'boolean' || oidType === 'number' || oidType === 'string' || oidType === 'mixed';

    return (
        <>
            {open && (
                <CollectionChangeDialog
                    data={{ sampleInterval: false, sampleIntervalValue: 200, delay: 100 }}
                    widgetStates={widgetStates}
                    open={open}
                    closeHandler={() => setOpen(false)}
                />
            )}
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
                    {StateButton}
                </Box>
            </CollectionBase>
        </>
    );
}

export default StateCollection;
