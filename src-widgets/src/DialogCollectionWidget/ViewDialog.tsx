/**
 * Dialog modal view (DialogCollectionWidget).
 *
 * @module widgets/ViewDialog
 */

import CloseIcon from '@mui/icons-material/Close';
import { Box, Divider, IconButton, Modal, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import React, { useRef, useState, useEffect } from 'react';
import CollectionBase, { type CollectionBaseHandle } from '../components/CollectionBase';
import { gradientColor } from '../lib/helper/gradientColor';

import type { StyleData } from '../hooks/useData/types';
import type { DialogCollectionContextProps } from '../types';

interface ViewDialogProps {
    /** Whether the modal is visible. */
    open: boolean;
    /** Closes the dialog and clears any pending auto-close timer. */
    handleClose: () => void;
    /** Widget configuration and style provided by the collection context. */
    widget: DialogCollectionContextProps['widget'];
    /** Derived style data from {@link module:hooks/useData}. */
    data: StyleData;
    /** vis-2 view renderer callback. */
    getWidgetView: DialogCollectionContextProps['getWidgetView'];
}

/**
 * Modal dialog that renders an embedded vis view.
 */
export default function ViewDialog({
    open,
    handleClose,
    widget,
    data,
    getWidgetView,
}: ViewDialogProps): React.ReactElement {
    const baseRef = useRef<CollectionBaseHandle>(null);
    const [titleRef, setTitleRef] = useState<HTMLElement | null>(null);

    const header = baseRef.current?.header;

    useEffect(() => {
        if (!widget.data.dialogHeaderAsTitle) {
            return;
        }

        if (header && titleRef) {
            if (widget.data.dialogHeaderAsTitle) {
                header.style.width = '0px';
                header.style.height = '0px';
            }

            titleRef.innerHTML = data.header!;
            titleRef.style.height = 'auto';
            titleRef.style.width = 'auto';
        }
    }, [header, titleRef, data.header, widget.data.dialogHeaderAsTitle]);

    const iconButton = (
        <IconButton
            sx={{
                alignSelf: 'flex-end',

                filter: 'brightness(1.5)',
                color: theme =>
                    widget.data.dialogCloseButtonColor || data.frameBackgroundColor || theme.palette.background.default,
            }}
            aria-label="delete"
            onClick={handleClose}
        >
            <CloseIcon />
        </IconButton>
    );

    return (
        <Modal
            onClose={handleClose}
            open={open}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

                background: widget.data.dialogBackgroundColor || 'inherit',
            }}
        >
            <Box
                sx={{
                    width: widget.data.dialogInPixel ? `${widget.data.dialogWidth}px` : `${widget.data.dialogWidth}%`,
                    height: widget.data.dialogInPixel
                        ? `${widget.data.dialogHeight}px`
                        : `${widget.data.dialogHeight}%`,
                }}
            >
                <CollectionBase
                    ref={baseRef}
                    data={data}
                    sx={{
                        flexDirection: 'column',
                        background: data.backgroundColor || data.background,
                    }}
                >
                    <Box
                        sx={{
                            position: 'relative',
                            width: '100%',
                            height: 'auto',
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            p: widget.data.dialogCloseButtonTop || !widget.data.dialogHeaderAsTitle ? 0 : 2,
                        }}
                    >
                        <Box
                            sx={{
                                position: 'absolute',
                                left: 0,
                                width: '100%',
                            }}
                        >
                            <Typography
                                ref={setTitleRef}
                                noWrap
                                variant="body2"
                                sx={{
                                    fontSize: data.headerSize,
                                    px: widget.data.dialogCloseButtonTop ? 4 : 0,

                                    background: gradientColor(data.textColor),
                                    WebkitBackgroundClip: 'text',
                                    backgroundClip: 'text',
                                    color: gradientColor(data.textColor) ? 'transparent' : data.textColor,
                                }}
                            />
                        </Box>

                        {widget.data.dialogCloseButtonTop && iconButton}
                    </Box>

                    <>
                        {widget.data.dialogCloseButtonTop && (
                            <Divider
                                sx={{
                                    width: '100%',
                                    opacity: '0.5',
                                    background: theme => data.frameBackgroundColor || theme.palette.background.default,
                                }}
                            />
                        )}
                    </>
                    <Box
                        sx={{
                            '::-webkit-scrollbar-track': {
                                background: data.frameBackgroundColor && alpha(data.frameBackgroundColor, 0.5),
                            },
                            '::-webkit-scrollbar-thumb': {
                                opacity: '0.5',
                                background: data.frameBackgroundColor && alpha(data.frameBackgroundColor, 0.7),
                            },
                            position: 'relative',
                            overflow: 'auto',

                            width: '100%',
                            height: '100%',
                        }}
                    >
                        {getWidgetView!(widget.data.view || '', {
                            style: {
                                // "background-color": "inherit",
                            },
                        })}
                    </Box>

                    <>
                        {widget.data.dialogCloseButtonBottom && (
                            <Divider
                                sx={{
                                    width: '100%',
                                    opacity: '0.5',
                                    background: theme => data.frameBackgroundColor || theme.palette.background.default,
                                }}
                            />
                        )}

                        {widget.data.dialogCloseButtonBottom && iconButton}
                    </>
                </CollectionBase>
            </Box>
        </Modal>
    );
}
