/**
 * The Mini-Dialog of the heating family (ADR-0122 Nr. 6, 7; ADR-0123 Nr. 6): the full layout a Mini
 * tile opens, in a hull of its own.
 *
 * @module lib/heating/MiniDialog
 * @remarks
 * No Collection frame: a title line (the translated type name, the close button) above the content
 * area. The area is measured here and published through the same `ContentBoxContext` the frame uses
 * (ADR-0098: a widget part without the frame measures itself), so the content reads one hook; before
 * the first measurement it shows nothing. Inside, {@link InMiniDialogContext} tells the size-stage
 * module that it draws in the dialog: no `ansicht` cap, never below Einfach, no dialog of its own.
 *
 * The dialog is a MUI `Dialog`: focus trap, Escape and backdrop close come with it, and its portal
 * keeps the collection theme and context, which travel through React context. Returning the focus
 * to the tile is the opener's part (the tile may be gone by then). The content is any node — in
 * stage 2 a house type opens one entry's Raumthermostat here.
 */
import Close from '@mui/icons-material/Close';
import { Box, Dialog, IconButton, Typography, useTheme } from '@mui/material';
import { createContext, useMemo, useState, type ReactElement, type ReactNode } from 'react';

import { ContentBoxContext, type ContentBox } from '../../hooks/useContentBox';
import useElementDimensions from '../../hooks/useElementDimensions';
import { translate } from '../translate';
import { useReducedMotion } from './motion';
import { measuredBoxOf, type MeasuredBox } from './stageRule';
import { neutralColors } from './tones';

/** Whether the content draws inside the Mini-Dialog; provided by {@link MiniDialog} only. */
export const InMiniDialogContext = createContext(false);

/** Height of the title line in px (the design's). */
const TITLE_HEIGHT = 56;

/** How far the title text stands in from the content area's edge, in px (the design's). */
const TITLE_INDENT = 12;

/** Distance of the dialog from the screen edges in px. */
const SCREEN_MARGIN = 16;

/** Props of {@link MiniDialog}. */
export interface MiniDialogProps {
    /** Whether the dialog is open. */
    open: boolean;
    /** Closes the dialog (close button, Escape, backdrop). */
    onClose: () => void;
    /** The title line: the translated type name. */
    title: string;
    /** The dialog's accessible name: the Bezeichnung, else the type name. */
    label: string;
    /** The type's Voll design size of the content area: the dialog's size within the screen. */
    size: MeasuredBox;
    /**
     * The content area's inner spacing in px, at the sides and below: the type's Inhaltsabstand
     * (ADR-0122 Nachtrag 2026-11-27), so the dialog keeps the same space as the widget.
     */
    inset: number;
    /** The content, drawn once the area is measured. */
    children: ReactNode;
}

/**
 * The Mini-Dialog.
 *
 * @param props - Component props, see {@link MiniDialogProps}.
 * @param props.open - Whether the dialog is open.
 * @param props.onClose - Closes the dialog.
 * @param props.title - The translated type name.
 * @param props.label - The accessible name.
 * @param props.size - The Voll design size of the content area.
 * @param props.inset - The content area's inner spacing in px.
 * @param props.children - The content.
 * @returns The dialog.
 */
export default function MiniDialog({
    open,
    onClose,
    title,
    label,
    size,
    inset,
    children,
}: MiniDialogProps): ReactElement {
    const reducedMotion = useReducedMotion();
    const quiet = neutralColors(useTheme());
    const [area, setArea] = useState<HTMLElement | null>(null);
    const { width, height } = useElementDimensions(area);
    const box = useMemo<ContentBox>(() => ({ width, height }), [width, height]);

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth={false}
            disableRestoreFocus
            transitionDuration={reducedMotion ? 0 : undefined}
            slotProps={{
                paper: {
                    'aria-label': label,
                    // The title line names the type; the Bezeichnung labels the dialog (ADR-0123 Nr. 6).
                    'aria-labelledby': undefined,
                    sx: {
                        width: size.width,
                        maxWidth: `calc(100% - ${2 * SCREEN_MARGIN}px)`,
                        maxHeight: `calc(100% - ${2 * SCREEN_MARGIN}px)`,
                        m: `${SCREEN_MARGIN}px`,
                        overflow: 'hidden',
                    },
                },
            }}
        >
            <Box
                sx={{
                    flex: 'none',
                    height: TITLE_HEIGHT,
                    boxSizing: 'border-box',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 1,
                    p: `6px 8px 0 ${inset + TITLE_INDENT}px`,
                }}
            >
                <Typography
                    data-heating-dialog-title=""
                    variant="subtitle2"
                    noWrap
                    sx={{ color: quiet.label, letterSpacing: '0.04em' }}
                >
                    {title}
                </Typography>
                <IconButton
                    aria-label={translate('heating_dialog_close')}
                    onClick={onClose}
                    disableRipple={reducedMotion}
                    sx={{ width: 44, height: 44, color: 'text.primary' }}
                >
                    <Close sx={{ fontSize: 20 }} />
                </IconButton>
            </Box>
            <Box
                ref={setArea}
                data-heating-dialog-box=""
                sx={{
                    flex: '0 1 auto',
                    height: size.height,
                    minHeight: 0,
                    boxSizing: 'border-box',
                    p: `0 ${inset}px ${inset}px`,
                    overflow: 'hidden',
                }}
            >
                {measuredBoxOf(box) ? (
                    <InMiniDialogContext.Provider value>
                        <ContentBoxContext.Provider value={box}>{children}</ContentBoxContext.Provider>
                    </InMiniDialogContext.Provider>
                ) : null}
            </Box>
        </Dialog>
    );
}
