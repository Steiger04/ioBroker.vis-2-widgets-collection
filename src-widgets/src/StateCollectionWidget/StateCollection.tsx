import { Avatar, Box, Button, Typography } from '@mui/material';
import React, { useCallback, useState, useContext } from 'react';
import CollectionBase from '../components/CollectionBase';
import CollectionBaseImage from '../components/CollectionBaseImage';
import CollectionChangeDialog from '../components/CollectionChangeDialog';
import { CollectionContext } from '../components/CollectionProvider';
import useData from '../hooks/useData';
import useHtmlValue from '../hooks/useHtmlValue';
import useValueState from '../hooks/useValueState';
import { getIconColorStyles } from '../lib/helper/getIconColorStyles';
import { gradientColor } from '../lib/helper/gradientColor';
import type { StateCollectionContextProps } from '../types';

/**
 * State widget body.
 *
 * @returns Widget body element.
 */
function StateCollection(): React.ReactElement {
    const context = useContext(CollectionContext) as StateCollectionContextProps;
    const { widget, theme } = context;
    const oidObject = widget.data.oidObject;
    const { data, widgetStates } = useData('oid');
    const { value: oidValue, updateValue: setOidValueState } = useValueState('oid');
    const [open, setOpen] = useState(false);

    const oidType = oidObject?.type;

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

                color: data.iconColor || data.textColor || 'primary.main',
                '&:hover': {
                    bgcolor: 'transparent',
                    /* filter:
                        (data.iconHoverActive && `brightness(${data.iconHoverActive})`) ||
                        (data.iconHover && `brightness(${data.iconHover})`), */
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
                {!widget.data.noIcon &&
                    data.icon &&
                    (() => {
                        // Pre-calculate icon styles
                        const iconSrc = data.icon;
                        const iconColor = data.iconColor || theme.palette.primary.main;
                        const forceMask = data.forceColorMask;
                        const iconStyles = getIconColorStyles(iconSrc, iconColor, forceMask);

                        return (
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
                                <Avatar
                                    variant="square"
                                    src={iconSrc || undefined}
                                    slotProps={{
                                        img: {
                                            style: {
                                                objectFit: 'contain',
                                                ...iconStyles,
                                            },
                                        },
                                    }}
                                    sx={{
                                        overflow: 'visible',

                                        width: data.iconSizeOnly,
                                        height: data.iconSizeOnly,

                                        left: `calc(0px + ${data.iconXOffset})`,
                                        top: `calc(0px - ${data.iconYOffset})`,
                                    }}
                                />
                            </Box>
                        );
                    })()}

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
                                fontSize: data.valueSize,
                                textAlign: 'center', // For HTML content with tags
                                bgcolor: 'transparent',

                                background: gradientColor(data.textColor),
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                color: gradientColor(data.textColor) ? 'transparent' : data.textColor,

                                textTransform: 'none',
                                px: 1,
                                pl: 0,
                                pr: 1,
                                width: '100%',
                                height: '100%',
                                flexGrow: 1,
                                display: 'flex',
                                alignItems: 'center', // Vertical centering
                                justifyContent: 'center', // Horizontal centering of text block
                                overflowWrap: 'break-word', // Modern CSS property for word wrapping
                                wordBreak: 'break-word', // Additional protection for long words
                                whiteSpace: 'normal', // Allows line breaks
                                hyphens: 'auto', // Automatic hyphenation when supported
                                '& > div': {
                                    textAlign: 'left', // Left-aligned lines for breaks in HTML
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

    const isValidType = ['boolean', 'number', 'string', 'mixed'].includes(oidType ?? '');

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
