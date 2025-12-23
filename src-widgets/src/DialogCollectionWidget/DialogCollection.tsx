/**
 * Dialog collection renderer.
 *
 * @module widgets/DialogCollection
 */

import { Box, ButtonBase, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useRef, useContext, useState, useEffect, useCallback } from 'react';
import CollectionBase from '../components/CollectionBase';
import { CollectionContext } from '../components/CollectionProvider';
import type { DialogCollectionContextProps } from '../types';
import useData from '../hooks/useData';
import useHtmlValue from '../hooks/useHtmlValue';
import useStyles from '../hooks/useStyles';
import { getIconColorStyles } from '../lib/helper/getIconColorStyles';
import ViewDialog from './ViewDialog';

const ImageHtmlButton = styled(ButtonBase)({
    width: '100% !important', // Overrides inline-style
    height: '100% !important',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

/**
 * Renders a button that opens a modal dialog containing a vis view.
 *
 * @remarks
 * - If a boolean `oid` is configured, `true` opens the dialog and `false` closes it.
 * - Auto-close supports values in milliseconds and (for small numbers) seconds.
 */
function DialogCollection(): React.ReactElement {
    const [open, setOpen] = useState<boolean>(false);
    const hideTimeout = useRef<NodeJS.Timeout | null>(null);

    // DialogCollection is only used by DialogCollectionWidget, so the cast is safe.
    const context = useContext(CollectionContext) as DialogCollectionContextProps;
    const { widget, getWidgetView, setValue } = context;
    const { textStyles, fontStyles } = useStyles(widget.style);
    const { data, oidValue } = useData('oid');

    // Safe access to the optional oidObject.
    const oidObject = widget.data.oidObject;

    const oid = oidObject?._id;
    const oidType = oidObject?.type;

    const isValidType = oidType === 'boolean' || !widget.data.oid || widget.data.oid === 'nothing_selected';

    const handleClickOpen = useCallback(() => {
        if (hideTimeout.current) {
            return;
        }

        const timeoutValue = widget.data.dialogAutoClose;

        // Handle multiple input formats by normalizing to string.
        const timeoutStr = String(timeoutValue);

        if (!timeoutValue || timeoutStr === '' || timeoutStr === '0') {
            setOpen(true);
            return;
        }

        let timeout: number;
        if (timeoutStr === 'true') {
            timeout = 10000;
        } else {
            timeout = parseInt(timeoutStr, 10);
        }
        if (timeout < 60) {
            // maybe this is seconds
            timeout *= 1000;
        }
        timeout = timeout || 1000;

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

    // HTML value formatting.
    const htmlValue = useHtmlValue(oidValue, widget, data);

    useEffect(() => {
        if (oidValue === undefined || oidValue === null) {
            return;
        }

        if (oidValue) {
            handleClickOpen();
        } else {
            handleClose();
        }
    }, [oidValue, handleClickOpen, handleClose]);

    return (
        <>
            <ViewDialog
                {...{
                    open,
                    handleClose,
                    widget,
                    data,
                    getWidgetView,
                    fontStyles,
                    textStyles,
                }}
            />
            <CollectionBase
                isValidType={isValidType}
                data={data}
            >
                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                    }}
                >
                    <ImageHtmlButton
                        onClick={() => {
                            if (oid) {
                                setValue(oid, true);
                            }
                            handleClickOpen();
                        }}
                        sx={{
                            '& .MuiTouchRipple-root span': {
                                color: data.iconColor,
                            },
                        }}
                    >
                        {widget.data.onlyIcon || (!widget.data.onlyText && !widget.data.onlyIcon) ? (
                            <Box
                                sx={{
                                    overflow: 'hidden',

                                    p: 0.5,

                                    width: '100%',
                                    height: '100%',

                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <img
                                    alt=""
                                    src={
                                        data.icon ||
                                        'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
                                    }
                                    style={{
                                        position: 'relative',

                                        objectFit: 'contain',
                                        top: `calc(0px - ${data.iconYOffset})`,
                                        right: `calc(0px - ${data.iconXOffset})`,
                                        width:
                                            (typeof data.iconSizeOnly === 'number' &&
                                                `calc(100% * ${data.iconSizeOnly} / 100)`) ||
                                            '100%',
                                        height:
                                            (typeof data.iconSizeOnly === 'number' &&
                                                `calc(100% * ${data.iconSizeOnly} / 100)`) ||
                                            '100%',
                                        ...getIconColorStyles(data.icon, data.iconColor),
                                    }}
                                />
                            </Box>
                        ) : null}
                        {widget.data.onlyText || (!widget.data.onlyText && !widget.data.onlyIcon) ? (
                            <Typography
                                variant="body2"
                                sx={{
                                    overflow: 'hidden',

                                    width: '100%',
                                    height: '100%',

                                    p: 0.5,

                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',

                                    ...fontStyles,
                                    ...textStyles,
                                    fontSize: data.valueSize,
                                    color: data.textColor,
                                    textTransform: 'none',
                                }}
                                dangerouslySetInnerHTML={{
                                    __html: htmlValue !== undefined ? String(htmlValue) : '',
                                }}
                            />
                        ) : null}
                    </ImageHtmlButton>
                </Box>
            </CollectionBase>
        </>
    );
}

export default DialogCollection;
