import { Box, ButtonBase, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useRef, useContext, useState, useEffect, useCallback } from 'react';
import CollectionBase from '../components/CollectionBase';
import { CollectionContext } from '../components/CollectionProvider';
import useData from '../hooks/useData';
import useHtmlValue from '../hooks/useHtmlValue';
import useStyles from '../hooks/useStyles';
import ViewDialog from './ViewDialog';

const ImageHtmlButton = styled(ButtonBase)({
    width: '100% !important', // Overrides inline-style
    height: '100% !important',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

function DialogCollection() {
    const [open, setOpen] = useState(false);
    const hideTimeout = useRef(null);
    const [contentRef, setContentRef] = useState(null);
    const {
        widget: {
            data: { oidObject },
        },
        widget,
        getWidgetView,
        setValue,
    } = useContext(CollectionContext);
    const { textStyles, fontStyles } = useStyles(widget.style);
    const { data, oidValue } = useData('oid');

    const oid = oidObject?._id;
    const oidType = oidObject?.type;

    const isValidType = oidType === 'boolean' || !widget.data.oid || widget.data.oid === 'nothing_selected';

    const handleClickOpen = useCallback(() => {
        if (hideTimeout.current) return;

        let timeout = widget.data.dialogAutoClose;

        if (timeout === null || timeout === undefined || timeout === '') {
            setOpen(true);
            return;
        }

        if (timeout === true || timeout === 'true') {
            timeout = 10000;
        }

        timeout = parseInt(timeout, 10);
        if (timeout < 60) {
            // maybe this is seconds
            timeout *= 1000;
        }
        timeout = timeout || 1000;

        hideTimeout.current = setTimeout(() => {
            hideTimeout.current = null;
            setValue(oid, false);
            setOpen(false);
        }, timeout);

        setOpen(true);
    }, [oid, setValue, widget.data.dialogAutoClose]);

    const handleClose = useCallback(() => {
        if (hideTimeout.current) {
            clearTimeout(hideTimeout.current);
            hideTimeout.current = null;
        }

        setValue(oid, false);
        setOpen(false);
    }, [oid, setValue]);

    useHtmlValue(contentRef, '', oidObject?.unit, data);

    useEffect(() => {
        if (oidValue === undefined || oidValue === null) {
            return;
        }

        if (oidValue) handleClickOpen();
        else handleClose();
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
                            setValue(oid, true);
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
                                        top: `calc(0px - ${widget.data.iconYOffset})`,
                                        right: `calc(0px - ${widget.data.iconXOffset})`,
                                        width:
                                            (typeof data.iconSizeOnly === 'number' &&
                                                `calc(100% * ${data.iconSizeOnly} / 100)`) ||
                                            '100%',
                                        height:
                                            (typeof data.iconSizeOnly === 'number' &&
                                                `calc(100% * ${data.iconSizeOnly} / 100)`) ||
                                            '100%',
                                        color: data.iconColor,
                                        filter: data.iconColor ? 'drop-shadow(0px 10000px 0)' : null,
                                        transform: data.iconColor ? 'translateY(-10000px)' : null,
                                    }}
                                />
                            </Box>
                        ) : null}
                        {widget.data.onlyText || (!widget.data.onlyText && !widget.data.onlyIcon) ? (
                            <Typography
                                ref={setContentRef}
                                variant="body2"
                                sx={{
                                    overflow: 'hidden',

                                    width: '100%',
                                    height: '100%',

                                    p: 0.5,

                                    display: 'flex',
                                    flexDirection: 'column',
                                    /* justifyContent: widget.data.onlyText
										? "center"
										: "flex-start", */
                                    justifyContent: 'center',
                                    alignItems: 'center',

                                    ...fontStyles,
                                    ...textStyles,
                                    fontSize: data.valueSize,
                                    color: data.textColor,
                                    textTransform: 'none',
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
