/**
 * Dialog collection renderer.
 *
 * @module widgets/DialogCollection
 */

import { Box, ButtonBase, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useRef, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import CollectionBase from '../components/CollectionBase';
import { CollectionContext } from '../components/CollectionProvider';
import useData from '../hooks/useData/useData';
import { getIconColorStyles } from '../lib/helper/getIconColorStyles';
import ViewDialog from './ViewDialog';
import { gradientColor } from '../lib/helper/gradientColor';
import CollectionBaseImage from '../components/CollectionBaseImage';
import SafeImg from '../components/SafeImg';

import type { DialogCollectionContextProps } from '../types';

/** Default auto-close timeout when `dialogAutoClose` is just `true`. */
const DEFAULT_AUTO_CLOSE_MS = 10_000;
/** Values below this threshold are treated as seconds and converted to ms. */
const SECONDS_THRESHOLD = 60;
/** Fallback timeout when parsing yields 0 or NaN. */
const MIN_TIMEOUT_MS = 1_000;

const ImageHtmlButton = styled(ButtonBase)({
    width: '100% !important', // Overrides inline-style
    height: '100% !important',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

/** Static sx for the icon container. */
const iconContainerSx = {
    overflow: 'hidden',
    p: 0.5,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
} as const;

/** Static sx for the outer flex wrapper. */
const outerBoxSx = {
    width: '100%',
    height: '100%',
    display: 'flex',
} as const;

/**
 * Parses the dialogAutoClose config value into a millisecond timeout.
 *
 * Accepts `"true"` (→ default), numeric strings in ms or seconds (< 60 → s).
 * Returns `0` when auto-close is disabled.
 */
function parseAutoCloseTimeout(value: unknown): number {
    const str = String(value);

    if (!value || str === '' || str === '0') {
        return 0;
    }
    if (str === 'true') {
        return DEFAULT_AUTO_CLOSE_MS;
    }

    let timeout = parseInt(str, 10);
    if (timeout < SECONDS_THRESHOLD) {
        // Small numbers are assumed to be seconds.
        timeout *= 1_000;
    }

    return timeout || MIN_TIMEOUT_MS;
}

/**
 * Renders a button that opens a modal dialog containing a vis view.
 *
 * @remarks
 * - If a boolean `oid` is configured, `true` opens the dialog and `false` closes it.
 * - Auto-close supports values in milliseconds and (for small numbers) seconds.
 */
function DialogCollection(): React.ReactElement {
    const [open, setOpen] = useState(false);
    const hideTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

    // DialogCollection is only used by DialogCollectionWidget, so the cast is safe.
    const context = useContext(CollectionContext) as DialogCollectionContextProps;
    const {
        widget,
        widget: { data: rxData },
        getWidgetView,
        setValue,
    } = context;
    const { data, oidValue } = useData('dialogId');

    const oid = widget.data.dialogIdObject?._id;
    const oidType = widget.data.dialogIdObject?.type;

    const isValidType = oidType === 'boolean' || !widget.data.oid || widget.data.oid === 'nothing_selected';

    // Clean up pending auto-close timeout on unmount to prevent late state updates.
    useEffect(() => {
        return () => {
            if (hideTimeout.current) {
                clearTimeout(hideTimeout.current);
            }
        };
    }, []);

    const handleClickOpen = useCallback(() => {
        if (hideTimeout.current) {
            return;
        }

        const timeout = parseAutoCloseTimeout(widget.data.dialogAutoClose);

        if (timeout === 0) {
            setOpen(true);
            return;
        }

        hideTimeout.current = setTimeout(() => {
            hideTimeout.current = null;
            if (oid) {
                setValue(oid, false);
            }
            setOpen(false);
        }, timeout);

        setOpen(true);
    }, [oid, setValue, widget.data.dialogAutoClose]);

    const handleClose = useCallback(() => {
        if (hideTimeout.current) {
            clearTimeout(hideTimeout.current);
            hideTimeout.current = null;
        }

        if (oid) {
            setValue(oid, false);
        }
        setOpen(false);
    }, [oid, setValue]);

    // Synchronize dialog open/close state with the backend OID value.
    // Both handleClickOpen and handleClose are stable callbacks (deps only change
    // when oid/setValue change), so including them here is safe and correct.
    useEffect(() => {
        if (oidValue == null) {
            return;
        }

        if (oidValue) {
            handleClickOpen();
        } else {
            handleClose();
        }
    }, [oidValue, handleClickOpen, handleClose]);

    const handleButtonClick = useCallback(() => {
        if (oid) {
            setValue(oid, true);
        }
        handleClickOpen();
    }, [oid, setValue, handleClickOpen]);

    // Pre-compute visibility booleans once instead of duplicating the condition.
    const showIcon = useMemo(
        () => widget.data.onlyIcon || (!widget.data.onlyText && !widget.data.onlyIcon),
        [widget.data.onlyIcon, widget.data.onlyText],
    );
    const showText = useMemo(
        () => widget.data.onlyText || (!widget.data.onlyText && !widget.data.onlyIcon),
        [widget.data.onlyText, widget.data.onlyIcon],
    );

    const rippleSx = useMemo(
        () => ({
            '& .MuiTouchRipple-root span': {
                color: data.iconColor,
            },
        }),
        [data.iconColor],
    );

    const iconStyle = useMemo(
        () => ({
            position: 'relative' as const,
            objectFit: 'contain' as const,
            top: `calc(0px - ${data.iconYOffset})`,
            right: `calc(0px - ${data.iconXOffset})`,
            width: data.iconSizeOnly,
            height: data.iconSizeOnly,
            ...getIconColorStyles(data.icon, data.iconColor, data.forceColorMask ?? false),
        }),
        [data.iconYOffset, data.iconXOffset, data.iconSizeOnly, data.icon, data.iconColor, data.forceColorMask],
    );

    const textSx = useMemo(
        () => ({
            overflow: 'hidden',
            width: '100%',
            height: '100%',
            p: 0.5,
            display: 'flex',
            flexDirection: 'column' as const,
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: data.valueSize,
            textTransform: 'none' as const,
            background: gradientColor(data.textColorActive || data.textColor),
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: gradientColor(data.textColor) ? 'transparent' : data.textColor,
        }),
        [data.valueSize, data.textColorActive, data.textColor],
    );

    return (
        <>
            <ViewDialog
                open={open}
                handleClose={handleClose}
                widget={widget}
                data={data}
                getWidgetView={getWidgetView}
            />
            <CollectionBase
                isValidType={isValidType}
                data={data}
            >
                <CollectionBaseImage
                    data={data}
                    widget={widget}
                />
                <Box sx={outerBoxSx}>
                    <ImageHtmlButton
                        onClick={handleButtonClick}
                        sx={rippleSx}
                    >
                        {showIcon ? (
                            <Box sx={iconContainerSx}>
                                <SafeImg
                                    alt=""
                                    src={data.icon}
                                    style={iconStyle}
                                />
                            </Box>
                        ) : null}
                        {showText ? (
                            <Typography
                                variant="body2"
                                sx={textSx}
                                dangerouslySetInnerHTML={{
                                    __html: rxData.dialogText || '',
                                }}
                            />
                        ) : null}
                    </ImageHtmlButton>
                </Box>
            </CollectionBase>
        </>
    );
}

export default React.memo(DialogCollection);
