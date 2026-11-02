/**
 * Dialog collection renderer.
 *
 * @module widgets/DialogCollection
 */

import { Box, ButtonBase, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useContext, useMemo } from 'react';
import CollectionBase from '../components/CollectionBase';
import { CollectionContext } from '../components/CollectionProvider';
import useData from '../hooks/useData/useData';
import { getIconColorStyles } from '../lib/helper/getIconColorStyles';
import ViewDialog from './ViewDialog';
import { gradientColor } from '../lib/helper/gradientColor';
import { gradientTextSx } from '../lib/helper/gradientTextSx';
import SafeImg from '../components/SafeImg';
import useDialogSession from './useDialogSession';

import type { DialogCollectionContextProps } from '../types';

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
 * Renders a button that opens a modal dialog containing a vis view.
 *
 * @remarks
 * Wiring only: the open state, the auto-close timer and the Sitzungs-OID (`dialogId`) are
 * the Dialog-Sitzung ({@link module:widgets/DialogCollectionWidget/useDialogSession}) — the
 * button's click and the dialog's close request are its events.
 */
function DialogCollection(): React.ReactElement {
    // DialogCollection is only used by DialogCollectionWidget, so the cast is safe.
    const context = useContext(CollectionContext) as DialogCollectionContextProps;
    const {
        widget,
        widget: { data: rxData },
        getWidgetView,
        setValue,
    } = context;
    const { data, oidValue } = useData('dialogId');

    const { open, onClick, onClose } = useDialogSession({
        oidValue,
        dialogIdObject: rxData.dialogIdObject,
        autoClose: rxData.dialogAutoClose,
        setValue,
    });

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
            ...gradientTextSx(data.textColor),
            // frozen local deviation: the background resolves through the
            // active-fallback colour, the text colour only through the plain
            // one (legacy split, kept verbatim)
            background: gradientColor(data.textColorActive || data.textColor),
        }),
        [data.valueSize, data.textColorActive, data.textColor],
    );

    return (
        <>
            <ViewDialog
                open={open}
                handleClose={onClose}
                widget={widget}
                data={data}
                getWidgetView={getWidgetView}
            />
            <CollectionBase data={data}>
                <Box sx={outerBoxSx}>
                    <ImageHtmlButton
                        onClick={onClick}
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
