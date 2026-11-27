/**
 * The size-stage module of the heating family (ADR-0122 Nr. 5): from the measured Content-Box and a
 * type's rule to Voll, Einfach or the Mini tile.
 *
 * @module lib/heating/SizeStages
 * @remarks
 * Interface: a type hands over its pure rule `(box, own data) → stage`, draws Voll and Einfach itself
 * (`renderStage`) and fills the tile (`renderTile`: main value, line, optional controls) in the area
 * the hull leaves it (`TileArea`: the box below the head row and its gap, with the gaps the hull
 * sets between the type's parts — computed, not measured again; Nachtrag K3). It names
 * itself (`typeName`, `name`), its status (`status`: the chip's tone or a Meldung) and its Voll
 * design size (`fullSize`) for the Mini-Dialog.
 *
 * Hidden behind it:
 * - the measuring: the frame's Content-Box (`useContentBox`, ADR-0098); before the first measurement
 *   the content area stays empty (Nr. 3);
 * - the `ansicht` cap: the effective stage is the lower of the box's stage and `ansicht` (Nr. 2);
 * - the tile hull and its measures: the whole surface is one button (keyboard by the platform), the
 *   name, the open symbol and the status dot — the warning triangle in the Meldungsfarbe for a Meldung (Störung
 *   full, Hinweis tinted), else a dot in the chip's tone (ADR-0124 Nr. 4) — and the status in the
 *   accessible name;
 * - the Mini-Dialog the tile opens (`lib/heating/MiniDialog`, Nr. 6, 7): its open state lives here,
 *   above the stages, so it survives the widget growing out of Mini; it shows this module again,
 *   which inside the dialog draws the stage of the dialog's own box, without the `ansicht` cap and
 *   never below Einfach; on closing the focus returns to the tile.
 *
 * In the editor Mini shows the tile; a locked widget opens the dialog as at runtime — there is no
 * edit path of its own (Nr. 8). The host drops its edit overlay only for a locked widget here: it
 * hides its helpers for can.js widgets alone, so that way does not reach a React widget.
 */
import OpenInFull from '@mui/icons-material/OpenInFull';
import { Box, ButtonBase, Typography, keyframes, useTheme } from '@mui/material';
import { useContext, useEffect, useRef, useState, type ReactElement, type ReactNode, type Ref } from 'react';

import useContentBox from '../../hooks/useContentBox';
import MiniDialog, { InMiniDialogContext } from './MiniDialog';
import { useReducedMotion } from './motion';
import { cappedStage, dialogStage, measuredBoxOf, type DrawnStage, type MeasuredBox, type SizeRule } from './stageRule';
import { toneColors, type HeatingTone } from './tones';

/** The status a type names for its tile: the chip's tone, a Meldung over it, and its words. */
export interface TileStatus {
    /** The tone of the type's chip. */
    tone: Extract<HeatingTone, 'neutral' | 'heizt' | 'kühl'>;
    /** A Meldung, which wins over the tone. */
    message?: Extract<HeatingTone, 'störung' | 'hinweis'>;
    /** The status in words, for the accessible name (the chip's or the Meldung's text). */
    label?: string;
}

/**
 * The tile hull's drawn sizes in px at the theme's standard spacing of 8 px (the gaps are set below
 * as 0.5 and 0.75 spacing units): the head row, the gap between the tile's rows, the gap between
 * a control and the main value. Only the hull knows them; a type computes in its {@link TileArea}.
 */
const TILE_HULL = { head: 20, rowGap: 4, controlGap: 6 } as const;

/** The area a type fills in its tile, below the hull's head row and the gap under it. */
export interface TileArea extends MeasuredBox {
    /** The gap the hull sets between the main row and the footer line, in px. */
    readonly rowGap: number;
    /** The gap the hull sets between a control and the main value, in px. */
    readonly controlGap: number;
}

/**
 * The area the tile hull leaves a type in a box: the same width, the height below the head row and
 * its gap (never below 0), and the hull's gaps between the type's parts.
 *
 * @param box - The measured Content-Box of the Mini stage.
 * @returns The area of the type's tile content.
 */
export function tileArea(box: MeasuredBox): TileArea {
    return {
        width: box.width,
        height: Math.max(0, box.height - TILE_HULL.head - TILE_HULL.rowGap),
        rowGap: TILE_HULL.rowGap,
        controlGap: TILE_HULL.controlGap,
    };
}

/** What a type puts into its tile below the hull's head. */
export interface TileContent {
    /** The main value. */
    main: ReactNode;
    /** The footer line. */
    line?: ReactNode;
    /** A control before the main value, raised above the tile's button. */
    start?: ReactNode;
    /** A control after the main value, raised above the tile's button. */
    end?: ReactNode;
}

/** Props of {@link SizeStages}. */
export interface SizeStagesProps<Data> {
    /** The type's pure rule. */
    rule: SizeRule<Data>;
    /** The type's own data the rule reads. */
    data: Data;
    /** The stored `ansicht`: the cap of the stage. */
    ansicht: unknown;
    /** Draws Voll or Einfach for the measured box. */
    renderStage: (stage: DrawnStage, box: MeasuredBox) => ReactNode;
    /** Fills the tile in the area the hull leaves it. */
    renderTile: (area: TileArea) => TileContent;
    /** The Bezeichnung; empty shows no name line. */
    name: string | undefined;
    /** The translated type name: the dialog's title, the accessible name without a Bezeichnung. */
    typeName: string;
    /** The status of the tile's dot and accessible name. */
    status: TileStatus;
    /** The type's Voll design size of the content (the dialog's size). */
    fullSize: MeasuredBox;
}

/** The heating dot's pulse (the design's `hzPulse`). */
const pulse = keyframes`
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.35; transform: scale(0.7); }
`;

/** Props of {@link StatusSign}. */
interface StatusSignProps {
    status: TileStatus;
    reducedMotion: boolean;
}

/**
 * The tile's status sign: precedence Störung > Hinweis > the chip's tone (ADR-0124 Nr. 4).
 *
 * @param props - Component props.
 * @param props.status - The type's status.
 * @param props.reducedMotion - Whether the user asked for less motion.
 * @returns The triangle in the Meldungsfarbe, else a dot in the chip's tone.
 */
function StatusSign({ status, reducedMotion }: StatusSignProps): ReactElement {
    const theme = useTheme();

    if (status.message) {
        const colors = toneColors(theme, status.message);
        return (
            <Box
                component="span"
                aria-hidden
                data-heating-status="triangle"
                data-tone={status.message}
                sx={{
                    width: 10,
                    height: 9,
                    flex: 'none',
                    // A Störung fills the triangle, a Hinweis tints it.
                    bgcolor: status.message === 'störung' ? colors.surface : colors.text,
                    clipPath: 'polygon(50% 0, 100% 100%, 0 100%)',
                }}
            />
        );
    }

    const pulsing = status.tone === 'heizt' && !reducedMotion;
    return (
        <Box
            component="span"
            aria-hidden
            data-heating-status="dot"
            data-tone={status.tone}
            data-pulse={pulsing ? '' : undefined}
            sx={{
                width: 8,
                height: 8,
                flex: 'none',
                borderRadius: '50%',
                bgcolor: toneColors(theme, status.tone).text,
                animation: pulsing ? `${pulse} 1.8s ease-in-out infinite` : 'none',
            }}
        />
    );
}

/** Props of {@link Tile}. */
interface TileProps {
    content: TileContent;
    name: string | undefined;
    typeName: string;
    status: TileStatus;
    open: boolean;
    onOpen: () => void;
    buttonRef: Ref<HTMLButtonElement>;
}

/**
 * The Mini tile: the type's content under the hull's head, the whole surface one button.
 *
 * @param props - Component props.
 * @param props.content - What the type puts into the tile.
 * @param props.name - The Bezeichnung.
 * @param props.typeName - The translated type name.
 * @param props.status - The type's status.
 * @param props.open - Whether the dialog is open.
 * @param props.onOpen - Opens the dialog.
 * @param props.buttonRef - The tile's button, where the focus returns when the dialog closes.
 * @returns The tile.
 */
function Tile({ content, name, typeName, status, open, onOpen, buttonRef }: TileProps): ReactElement {
    const reducedMotion = useReducedMotion();
    const label = [name || typeName, status.label].filter(Boolean).join(', ');
    const raised = (node: ReactNode): ReactNode =>
        node == null ? null : <Box sx={{ position: 'relative', zIndex: 1, display: 'flex' }}>{node}</Box>;
    const hasControls = content.start != null || content.end != null;

    return (
        <Box
            data-heating-tile=""
            sx={{
                position: 'relative',
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                // TILE_HULL.rowGap
                gap: 0.5,
                minWidth: 0,
                overflow: 'hidden',
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, minWidth: 0 }}>
                <StatusSign
                    status={status}
                    reducedMotion={reducedMotion}
                />
                {name ? (
                    <Typography
                        data-heating-tile-name=""
                        variant="body2"
                        noWrap
                        sx={{ flex: 1, minWidth: 0, fontWeight: 500 }}
                    >
                        {name}
                    </Typography>
                ) : (
                    <Box sx={{ flex: 1 }} />
                )}
                <OpenInFull
                    data-heating-open=""
                    aria-hidden
                    sx={{ fontSize: 16, flex: 'none', color: 'text.secondary' }}
                />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: hasControls ? 'space-between' : 'flex-start',
                    // TILE_HULL.controlGap
                    gap: 0.75,
                    minWidth: 0,
                }}
            >
                {raised(content.start)}
                {content.main}
                {raised(content.end)}
            </Box>
            {content.line == null ? null : <Box sx={{ minWidth: 0 }}>{content.line}</Box>}
            <ButtonBase
                ref={buttonRef}
                aria-label={label}
                aria-haspopup="dialog"
                aria-expanded={open}
                disableRipple={reducedMotion}
                onClick={onOpen}
                sx={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 0,
                    borderRadius: 'inherit',
                    transition: reducedMotion ? 'none' : 'background-color 150ms',
                    '&:hover': { bgcolor: 'action.hover' },
                    '&.Mui-focusVisible': { outline: '2px solid', outlineColor: 'primary.main', outlineOffset: -2 },
                }}
            />
        </Box>
    );
}

/**
 * The content of a heating type by its size stage.
 *
 * @param props - Component props, see {@link SizeStagesProps}; the Mini-Dialog shows the module
 * again with the same props.
 * @param props.rule - The type's pure rule.
 * @param props.data - The type's own data the rule reads.
 * @param props.ansicht - The stored `ansicht`.
 * @param props.renderStage - Draws Voll or Einfach.
 * @param props.renderTile - Fills the tile in the area the hull leaves it.
 * @param props.name - The Bezeichnung.
 * @param props.typeName - The translated type name.
 * @param props.status - The tile's status.
 * @param props.fullSize - The Voll design size of the content: the dialog's size.
 * @returns Nothing before the first measurement, else the type's stage or the tile (and the
 * Mini-Dialog, while open).
 */
export default function SizeStages<Data>(props: SizeStagesProps<Data>): ReactElement | null {
    const { rule, data, ansicht, renderStage, renderTile, name, typeName, status, fullSize } = props;
    const box = measuredBoxOf(useContentBox());
    const inDialog = useContext(InMiniDialogContext);
    // Above the stages: an open dialog stays open when the widget grows out of Mini (Nr. 7).
    const [open, setOpen] = useState(false);
    const tileButton = useRef<HTMLButtonElement>(null);

    // Closing returns the focus to the tile (Nr. 6) — after the dialog's focus trap has let go, and
    // also when the tile was tapped without taking the focus; a widget grown out of Mini has none.
    const wasOpen = useRef(false);
    useEffect(() => {
        if (wasOpen.current && !open) {
            tileButton.current?.focus();
        }
        wasOpen.current = open;
    }, [open]);

    if (!box) {
        return null;
    }

    const stage = inDialog ? dialogStage(rule(box, data)) : cappedStage(rule(box, data), ansicht);

    return (
        <Box
            data-heating-stage={stage}
            // The collection theme's font for all of the content: chips, hint line and dial labels are
            // no Typography and would take the host page's font (the dialog renders this Box again).
            sx={{ width: '100%', height: '100%', minWidth: 0, minHeight: 0, fontFamily: t => t.typography.fontFamily }}
        >
            {stage === 'mini' ? (
                <Tile
                    content={renderTile(tileArea(box))}
                    name={name}
                    typeName={typeName}
                    status={status}
                    open={open}
                    onOpen={() => setOpen(true)}
                    buttonRef={tileButton}
                />
            ) : (
                renderStage(stage, box)
            )}
            {inDialog ? null : (
                <MiniDialog
                    open={open}
                    onClose={() => setOpen(false)}
                    title={typeName}
                    label={name || typeName}
                    size={fullSize}
                >
                    <SizeStages {...props} />
                </MiniDialog>
            )}
        </Box>
    );
}
