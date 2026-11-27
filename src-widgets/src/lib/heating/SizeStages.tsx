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
 * - the Inhaltsabstand (`inset`, Nachtrag 2026-11-27): the type's inner spacing in the theme's
 *   spacing units, kept all round Voll and Einfach, half of it in the tile, all of it in the
 *   Mini-Dialog; the rule reads the box without it, so a large one lowers the stage;
 * - the tile hull and its measures (a `body2` head row, gaps in spacing units — the area's
 *   arithmetic reads them from the theme it draws in): the whole surface is one button (keyboard by
 *   the platform), the name, the open symbol and the status sign — the warning triangle in the
 *   Meldungsfarbe for a Meldung (Störung full, Hinweis tinted), else no sign (ADR-0124 Nr. 4,
 *   Nachtrag 2 2026-11-27: no dots) — and the status in the accessible name;
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
import { Box, ButtonBase, Typography, useTheme, type Theme } from '@mui/material';
import { useContext, useEffect, useRef, useState, type ReactElement, type ReactNode, type Ref } from 'react';

import useContentBox from '../../hooks/useContentBox';
import MiniDialog, { InMiniDialogContext } from './MiniDialog';
import { useReducedMotion } from './motion';
import { contentInsetUnits } from './contentInset';
import { cappedStage, dialogStage, measuredBoxOf, type DrawnStage, type MeasuredBox, type SizeRule } from './stageRule';
import { neutralColors, toneColors, type HeatingTone } from './tones';

/** The status a type names for its tile: the chip's tone, a Meldung over it, and its words. */
export interface TileStatus {
    /** The tone of the type's chip. */
    tone: Extract<HeatingTone, 'neutral' | 'heizt' | 'kühl'>;
    /** A Meldung, which wins over the tone. */
    message?: Extract<HeatingTone, 'störung' | 'hinweis'>;
    /** The status in words, for the accessible name (the chip's or the Meldung's text). */
    label?: string;
}

/** The tile hull's gaps in spacing units: between the tile's rows, between a control and the main value. */
const TILE_GAP_UNITS = { row: 0.5, control: 0.75 } as const;

/** The open symbol's size in px: the head row is never lower. */
const OPEN_SYMBOL_SIZE = 16;

/** The tile hull's drawn sizes in px: the head row and the two gaps it sets. */
export interface TileHullMeasures {
    readonly head: number;
    readonly rowGap: number;
    readonly controlGap: number;
}

/**
 * The hull's measures in the standard theme (spacing 8 px, a `body2` line of 20 px) — also what a
 * theme value stands in for that does not read as px (e.g. a spacing in em or a CSS variable
 * without the theme's value).
 */
const STANDARD_TILE_HULL: TileHullMeasures = { head: 20, rowGap: 4, controlGap: 6 };

/**
 * A CSS length in px, if it reads as one: a number, `…px`, or `…rem` at the theme's root size.
 *
 * @param value - The CSS value.
 * @param rootPx - The px of one rem.
 * @returns The px, or `undefined`.
 */
const pxOf = (value: unknown, rootPx: number): number | undefined => {
    if (typeof value === 'number') {
        return value;
    }
    const match = typeof value === 'string' ? /^\s*(-?\d*\.?\d+)(px|rem)\s*$/.exec(value) : null;
    if (!match) {
        return undefined;
    }
    return parseFloat(match[1]) * (match[2] === 'rem' ? rootPx : 1);
};

/**
 * A spacing with CSS variables on: `calc(0.5 * var(--vis2c-spacing))`, or the bare `var(…)` for one
 * unit — with the theme's value as fallback when the theme is fresh from `createTheme`, without once
 * a ThemeProvider has rebuilt it.
 */
const CSS_VAR_SPACING = /^\s*(?:calc\(\s*(-?\d*\.?\d+)\s*\*\s*)?var\(\s*(--[\w-]+)\s*(?:,\s*([^()]+?)\s*)?\)\s*\)?\s*$/;

/** A theme with CSS variables on: it writes its variables' values into style sheets. */
type CssVarsSheets = { generateStyleSheets?: () => Array<Record<string, unknown>> };

/**
 * The value a theme with CSS variables gives a variable: the first style sheet that sets it.
 *
 * @param theme - The theme.
 * @param name - The variable, e.g. `--vis2c-spacing`.
 * @returns The value, or `undefined`.
 */
const cssVarValueOf = (theme: Theme, name: string): unknown => {
    for (const sheet of (theme as CssVarsSheets).generateStyleSheets?.() ?? []) {
        for (const css of Object.values(sheet)) {
            if (css && typeof css === 'object' && name in css) {
                return (css as Record<string, unknown>)[name];
            }
        }
    }
    return undefined;
};

/**
 * A theme spacing in px, if it reads as one: a length ({@link pxOf}) or, with CSS variables on, the
 * variable's value in the theme (its fallback when the theme sets none), times the factor.
 *
 * @param theme - The theme.
 * @param units - The spacing units.
 * @param rootPx - The px of one rem.
 * @returns The px, or `undefined`.
 */
const spacingPxOf = (theme: Theme, units: number, rootPx: number): number | undefined => {
    const value: unknown = theme.spacing(units);
    const match = typeof value === 'string' ? CSS_VAR_SPACING.exec(value) : null;
    if (!match) {
        return pxOf(value, rootPx);
    }
    const unit = pxOf(cssVarValueOf(theme, match[2]) ?? match[3], rootPx);
    return unit === undefined ? undefined : unit * (match[1] === undefined ? 1 : parseFloat(match[1]));
};

/** The Inhaltsabstand in px per theme and spacing units: a theme with CSS variables builds its style sheets to answer. */
const insetPxCache = new WeakMap<Theme, Map<number, number>>();

/**
 * The Inhaltsabstand in px in the theme it draws in.
 *
 * @param theme - The theme.
 * @param stored - The stored Inhaltsabstand ({@link contentInsetUnits} reads it).
 * @returns The px; for a spacing that does not read as px, 8 px a unit (the standard theme's).
 */
export function contentInsetPx(theme: Theme, stored: unknown): number {
    const units = contentInsetUnits(stored);
    let perTheme = insetPxCache.get(theme);
    if (!perTheme) {
        perTheme = new Map();
        insetPxCache.set(theme, perTheme);
    }
    let px = perTheme.get(units);
    if (px === undefined) {
        px = spacingPxOf(theme, units, theme.typography.htmlFontSize ?? 16) ?? units * 8;
        perTheme.set(units, px);
    }
    return px;
}

/** The box inside an inset on every side (never below 0). */
const insideInset = (box: MeasuredBox, inset: number): MeasuredBox => ({
    width: Math.max(0, box.width - 2 * inset),
    height: Math.max(0, box.height - 2 * inset),
});

/** The hull's measures per theme: a theme with CSS variables builds its style sheets to answer. */
const tileHullCache = new WeakMap<Theme, TileHullMeasures>();

/**
 * The tile hull's measures in the theme it draws in: the head row is one `body2` line (the name),
 * at least the open symbol; the gaps are the theme's spacing units.
 *
 * @param theme - The theme the hull draws in.
 * @returns The measures in px; the standard one for a value that does not read as px.
 */
export function tileHullMeasures(theme: Theme): TileHullMeasures {
    const cached = tileHullCache.get(theme);
    if (cached) {
        return cached;
    }
    const rootPx = theme.typography.htmlFontSize ?? 16;
    const { fontSize, lineHeight } = theme.typography.body2;
    const fontPx = pxOf(fontSize, rootPx);
    const linePx =
        fontPx === undefined
            ? undefined
            : typeof lineHeight === 'number' || /^\s*\d*\.?\d+\s*$/.test(String(lineHeight))
              ? Number(lineHeight) * fontPx
              : pxOf(lineHeight, rootPx);
    const measures: TileHullMeasures = {
        head: linePx === undefined ? STANDARD_TILE_HULL.head : Math.round(Math.max(linePx, OPEN_SYMBOL_SIZE)),
        rowGap: spacingPxOf(theme, TILE_GAP_UNITS.row, rootPx) ?? STANDARD_TILE_HULL.rowGap,
        controlGap: spacingPxOf(theme, TILE_GAP_UNITS.control, rootPx) ?? STANDARD_TILE_HULL.controlGap,
    };
    tileHullCache.set(theme, measures);
    return measures;
}

/** The area a type fills in its tile, below the hull's head row and the gap under it. */
export interface TileArea extends MeasuredBox {
    /** The gap the hull sets between the main row and the footer line, in px. */
    readonly rowGap: number;
    /** The gap the hull sets between a control and the main value, in px. */
    readonly controlGap: number;
}

/**
 * The area the tile hull leaves a type in a box: the same width, the height below the head row and
 * its gap (never below 0), and the hull's gaps between the type's parts — computed, no second
 * measurement.
 *
 * @param box - The measured Content-Box of the Mini stage.
 * @param hull - The hull's measures ({@link tileHullMeasures}); those of the standard theme by default.
 * @returns The area of the type's tile content.
 */
export function tileArea(box: MeasuredBox, hull: TileHullMeasures = STANDARD_TILE_HULL): TileArea {
    return {
        width: box.width,
        height: Math.max(0, box.height - hull.head - hull.rowGap),
        rowGap: hull.rowGap,
        controlGap: hull.controlGap,
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
    /** The stored Inhaltsabstand in spacing units; unset or unusable reads the standard. */
    inset: unknown;
    /** Draws Voll or Einfach for the measured box. */
    renderStage: (stage: DrawnStage, box: MeasuredBox) => ReactNode;
    /** Fills the tile in the area the hull leaves it. */
    renderTile: (area: TileArea) => TileContent;
    /** The Bezeichnung; empty shows no name line. */
    name: string | undefined;
    /** The translated type name: the dialog's title, the accessible name without a Bezeichnung. */
    typeName: string;
    /** The status of the tile's sign and accessible name. */
    status: TileStatus;
    /** The type's Voll design size of the content (the dialog's size). */
    fullSize: MeasuredBox;
}

/**
 * The tile's status sign: precedence Störung > Hinweis (ADR-0124 Nr. 4); without a Meldung none
 * (Nachtrag 2 2026-11-27: no dots — the chip's tone stays in the accessible name).
 *
 * @param props - Component props.
 * @param props.status - The type's status.
 * @returns The triangle in the Meldungsfarbe, else nothing.
 */
function StatusSign({ status }: { status: TileStatus }): ReactElement | null {
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
    return null;
}

/** Props of {@link Tile}. */
interface TileProps {
    content: TileContent;
    name: string | undefined;
    typeName: string;
    status: TileStatus;
    /** The tile's inner spacing in px (half the Inhaltsabstand). */
    inset: number;
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
 * @param props.inset - The tile's inner spacing in px.
 * @param props.open - Whether the dialog is open.
 * @param props.onOpen - Opens the dialog.
 * @param props.buttonRef - The tile's button, where the focus returns when the dialog closes.
 * @returns The tile.
 */
function Tile({ content, name, typeName, status, inset, open, onOpen, buttonRef }: TileProps): ReactElement {
    const reducedMotion = useReducedMotion();
    const quiet = neutralColors(useTheme());
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
                boxSizing: 'border-box',
                // The button below covers the padding as well: the whole card stays one button.
                p: `${inset}px`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: TILE_GAP_UNITS.row,
                minWidth: 0,
                overflow: 'hidden',
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, minWidth: 0 }}>
                <StatusSign status={status} />
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
                    sx={{ fontSize: OPEN_SYMBOL_SIZE, flex: 'none', color: quiet.label }}
                />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: hasControls ? 'space-between' : 'flex-start',
                    gap: TILE_GAP_UNITS.control,
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
                    '&:hover': { bgcolor: quiet.hover },
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
 * @param props.inset - The stored Inhaltsabstand.
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
    const { rule, data, ansicht, inset, renderStage, renderTile, name, typeName, status, fullSize } = props;
    const box = measuredBoxOf(useContentBox());
    const theme = useTheme();
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

    // The Mini-Dialog keeps the Inhaltsabstand around its area already; inside it counts none.
    const insetPx = contentInsetPx(theme, inset);
    const ownInset = inDialog ? 0 : insetPx;
    const content = insideInset(box, ownInset);
    const stage = inDialog ? dialogStage(rule(box, data)) : cappedStage(rule(content, data), ansicht);

    return (
        <Box
            data-heating-stage={stage}
            // The collection theme's font for all of the content: chips, hint line and dial labels are
            // no Typography and would take the host page's font (the dialog renders this Box again).
            sx={{ width: '100%', height: '100%', minWidth: 0, minHeight: 0, fontFamily: t => t.typography.fontFamily }}
        >
            {stage === 'mini' ? (
                <Tile
                    content={renderTile(tileArea(insideInset(box, ownInset / 2), tileHullMeasures(theme)))}
                    name={name}
                    typeName={typeName}
                    status={status}
                    inset={ownInset / 2}
                    open={open}
                    onOpen={() => setOpen(true)}
                    buttonRef={tileButton}
                />
            ) : inDialog ? (
                renderStage(stage, box)
            ) : (
                <Box
                    data-heating-inset=""
                    sx={{
                        width: '100%',
                        height: '100%',
                        minWidth: 0,
                        minHeight: 0,
                        boxSizing: 'border-box',
                        p: `${ownInset}px`,
                    }}
                >
                    {renderStage(stage, content)}
                </Box>
            )}
            {inDialog ? null : (
                <MiniDialog
                    open={open}
                    onClose={() => setOpen(false)}
                    title={typeName}
                    label={name || typeName}
                    size={fullSize}
                    inset={insetPx}
                >
                    <SizeStages {...props} />
                </MiniDialog>
            )}
        </Box>
    );
}
