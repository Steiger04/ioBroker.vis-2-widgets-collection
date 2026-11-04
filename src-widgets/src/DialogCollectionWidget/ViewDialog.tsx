/**
 * Dialog modal view (DialogCollectionWidget).
 *
 * @module widgets/ViewDialog
 */

import CloseIcon from '@mui/icons-material/Close';
import { Box, Divider, IconButton, Modal, Typography } from '@mui/material';
import React from 'react';
import CollectionBase from '../components/CollectionBase';
import { alphaOf } from '../lib/helper/colorDerivation';
import { gradientTextSx } from '../lib/helper/gradientTextSx';

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
    const headerAsTitle = !!widget.data.dialogHeaderAsTitle;

    const iconButton = (
        <IconButton
            sx={{
                alignSelf: 'flex-end',

                filter: 'brightness(1.5)',
                color: theme =>
                    widget.data.dialogCloseButtonColor || data.frameBackgroundColor || theme.palette.background.default,
            }}
            aria-label="close"
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

                // Explicit value raw, else the field's terminal `transparent`: unset paints
                // nothing, so the view shows through the MUI backdrop (ADR-0004, 2026-11-04).
                background: widget.data.dialogBackgroundColor || 'transparent',
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
                    data={data}
                    hideHeader={headerAsTitle}
                    cornerIcon={false}
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
                            p: widget.data.dialogCloseButtonTop || !headerAsTitle ? 0 : 2,
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
                                noWrap
                                variant="body2"
                                sx={{
                                    fontSize: data.headerSize,
                                    px: widget.data.dialogCloseButtonTop ? 4 : 0,

                                    ...gradientTextSx(data.textColor),
                                }}
                                dangerouslySetInnerHTML={{
                                    __html: headerAsTitle ? (data.header ?? '') : '',
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
                            // Tinted from the frame background; a value without a
                            // Repräsentative Vollfarbe leaves the scrollbar untinted.
                            '::-webkit-scrollbar-track': {
                                background: alphaOf(data.frameBackgroundColor, 0.5),
                            },
                            '::-webkit-scrollbar-thumb': {
                                opacity: '0.5',
                                background: alphaOf(data.frameBackgroundColor, 0.7),
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
