/**
 * The Raumthermostat's size-stage rule, its arrangements and the arrangement plan of a box
 * (ADR-0122 Nr. 1, 9, Nachtrag K7).
 *
 * @module HeatingThermostatCollectionWidget/thermostatStages
 * @remarks
 * The design's thresholds (`layout()` of the design canvas) are outer widget sizes. Here they are
 * converted to the Content-Box with the frame of the standard configuration: 24 px of width (card
 * inset 8 px, base padding 2 × 8 px) and 64 px of height (the same plus the header and the footer
 * line flat at 2 × 20 px). The rule reads the box inside the Inhaltsabstand (ADR-0122 Nachtrag
 * 2026-11-27, standard 2 × 12 px), so a widget dropped at the start size 440 × 700 px (≈ 416 × 636 px
 * of Content-Box, 392 × 612 px inside the inset) starts in Voll/Groß as in the design. Voll begins
 * at Mittel, 272 × 376 px — the narrowest grid section (296 px) inside the standard Inhaltsabstand,
 * narrower than the design's 300 px outer, and 11 grid rows (632 px). The box after the frame counts
 * without correction (Nr. 4): a large padding, Rahmenvorgabe or Inhaltsabstand may move the widget
 * one stage down.
 *
 * The content draws by one plan (`thermostatPlan`): the helpers below are its pieces, each size
 * computed once there. The plan names the arrangement's Maßstab (ADR-0122 Nachtrag „Maßstab und
 * Anordnungswahl“, `lib/heating/scaleRule`) and the sizes of every part from it
 * (`thermostatSizes`): ±, set-point, actual temperature, Kartenkopf and hint line (damped), pills,
 * readings and gaps; the parts set no size of their own.
 *
 * Einfach (`thermostatEinfachPlan`): Quer and Kompakt each take the largest Maßstab at which their
 * parts fit the box (`querNeed`, `kompaktNeed`); Einfach holds while one of them fits at its least
 * Maßstab (± 40 px), and of the two the one with the larger Maßstab draws. Quer shows the
 * operating-mode segment as soon as it fits at its least Maßstab (the pills' text 11 px) and then
 * takes its Maßstab with the segment below the head.
 */

import {
    KARTENKOPF_DESIGN,
    kartenkopfSizes,
    PILL_DESIGN,
    pillSizes,
    type KartenkopfSizes,
    type PillSizes,
} from '../lib/heating/partSizes';
import { fittingScale, headScale, leastScale, scaled } from '../lib/heating/scaleRule';
import type { TileArea } from '../lib/heating/SizeStages';
import type { DrawnStage, MeasuredBox, SizeStage } from '../lib/heating/stageRule';

/** A least box in px (both sizes reached). */
interface LeastBox {
    readonly width: number;
    readonly height: number;
}

/**
 * The drawn sizes the set-point's fit counts with (measured in the browser at the design's 48 px):
 * „21,0 °C“ is 161 px wide (≈ 3.35 px per px of font; 3.6 keeps a reserve for wider digits, °F and
 * other theme fonts), its line 1.2 × the font; ± 52 px beside the big set-point with 12 px of gap.
 * The tile's parts: ± 44 px, the footer line 28 px — the hull's head row and gaps come with its area
 * (`TileArea`). Sizes in px are the design's; the Einfach fits (`querNeed`, `kompaktNeed`) take them
 * times the Maßstab.
 */
export const SETPOINT_FIT = {
    glyphsPerFontPx: 3.6,
    lineHeight: 1.2,
    /** The design size of the set-point. */
    maxFont: 48,
    /** Below this the set-point no longer shrinks. */
    minFont: 12,
    stepFlat: 52,
    flatGap: 12,
    stepTile: 44,
    tileLine: 28,
    /** The least set-point line the tile keeps beside its footer (a 20 px set-point). */
    tileMainLine: 24,
    /** The dial (320-unit box): the ring's inner edge (radius 118 − half the stroke of 14). */
    dialInner: 111,
    /** The dial: the bottom padding of its centred column, and the gap and actual line below the set-point. */
    dialPadding: 26,
    dialBelow: 4 + 28,
} as const;

/** The Raumthermostat's own parts' design measures (`…Units` in the theme's spacing units, else px). */
export const THERMOSTAT_DESIGN = {
    /** The ± edge: beside the big set-point and below the dial, and in the tile. */
    step: { stage: SETPOINT_FIT.stepFlat, tile: SETPOINT_FIT.stepTile },
    /** The ± symbol: the theme's icon size (24 px of the standard theme, in rem). */
    stepIcon: 24,
    /** The actual temperature: the surrounding text's size, in em. */
    actual: 1,
    /** The hint line: its own and the tile footer's smaller one. */
    hint: {
        line: { font: 13, sign: 16, gapUnits: 0.75, padXUnits: 1.25, padYUnits: 0.5, radius: 10 },
        tile: { font: 12, sign: 14, gapUnits: 0.75, padXUnits: 0.75, padYUnits: 0.25, radius: 10 },
    },
    /** The readings bar: value, icon and label fonts, its gaps, the top padding above the line. */
    readings: {
        value: 16,
        icon: 16,
        label: 11.5,
        gapUnits: 1,
        topUnits: 1.75,
        itemGapUnits: 0.375,
        valueGapUnits: 0.75,
        markPadUnits: 1,
    },
    /**
     * The gaps: between the regions, ± beside the set-point (`SETPOINT_FIT.flatGap` in the standard
     * theme), in Quer between the head column and the set-point and below the head, between the
     * operating-mode segment and the Urlaub row, between the dial's set-point and actual line, between
     * the word „Ist“ and the actual temperature.
     */
    gaps: { region: 1.5, step: 1.5, querHead: 2, querText: 1, modes: 1, dial: 0.5, actual: 1 },
} as const;

/** The hint line's sizes. */
export type HintLineSizes = { readonly [Key in keyof typeof THERMOSTAT_DESIGN.hint.line]: number };

/** The readings bar's sizes. */
export type ReadingSizes = { readonly [Key in keyof typeof THERMOSTAT_DESIGN.readings]: number };

/** The gaps between the parts, in the theme's spacing units. */
export type ThermostatGaps = { readonly [Key in keyof typeof THERMOSTAT_DESIGN.gaps]: number };

/** Where the parts stand: an arrangement of Voll or Einfach, or the tile. */
type SizePlace = 'stage' | 'tile';

/** The sizes of all parts the Raumthermostat draws with, at one Maßstab. */
export interface ThermostatSizes {
    /** The Maßstab: the factor relative to the design. */
    readonly scale: number;
    /** The ± edge in px. */
    readonly step: number;
    /** The ± symbol in px (drawn in the theme's rem). */
    readonly stepIcon: number;
    /** The actual temperature's size in em of the surrounding text. */
    readonly actual: number;
    /** The Kartenkopf, damped. */
    readonly head: KartenkopfSizes;
    /** The hint line: damped beside the arrangement, at the Maßstab in the tile's footer. */
    readonly hint: HintLineSizes;
    readonly pills: PillSizes;
    readonly readings: ReadingSizes;
    readonly gaps: ThermostatGaps;
}

/**
 * The sizes of all parts at a Maßstab: the instrument (±, set-point, actual temperature), pills,
 * readings and gaps at the Maßstab, the Kartenkopf and the hint line damped (`headScale`) — the
 * tile's footer line grows with the Maßstab (ADR-0122 Nachtrag „Maßstab und Anordnungswahl“ Nr. 1,
 * 9).
 *
 * @param scale - The Maßstab.
 * @param place - An arrangement of Voll or Einfach, or the tile.
 * @returns The sizes.
 */
export function thermostatSizes(scale: number, place: SizePlace): ThermostatSizes {
    const design = THERMOSTAT_DESIGN;
    const head = headScale(scale);
    return {
        scale,
        step: design.step[place] * scale,
        stepIcon: design.stepIcon * scale,
        actual: design.actual * scale,
        head: kartenkopfSizes(head),
        hint: place === 'tile' ? scaled(design.hint.tile, scale) : scaled(design.hint.line, head),
        pills: pillSizes(scale),
        readings: scaled(design.readings, scale),
        gaps: scaled(design.gaps, scale),
    };
}

/** The Maßstab every arrangement draws at for now: the design's. */
const DESIGN_SCALE = 1;

/** The design's outer thresholds, converted to the Content-Box. */
export const THERMOSTAT_THRESHOLDS = {
    /** Voll, arrangement Groß (design 400 × 640). */
    gross: { width: 376, height: 576 },
    /**
     * Voll, arrangement Mittel (design 300 × 440) — the least box of Voll. Its width is the
     * narrowest grid section (296 px) inside the standard Inhaltsabstand, not the design's
     * (ADR-0122 Nachtrag 2026-11-27); the dial stays bound by the height there.
     */
    mittel: { width: 272, height: 376 },
    /**
     * The tile's ± (design width 220), in the tile's area: from the spec's width on, and as high as
     * ± (ADR-0122: the box holds what the stage shows).
     */
    tileButtons: { width: 196, height: SETPOINT_FIT.stepTile },
} as const satisfies Record<string, LeastBox>;

/**
 * The set-point's font size in the tile: the design's 48 px while there is room, else as large as
 * the row of its area beside ± and the height the footer line leaves hold it (ADR-0122: the stage's
 * box holds its parts).
 *
 * @param area - The area the hull leaves the tile.
 * @param parts - Its parts as {@link thermostatTile} decided them (± and the footer line), not
 *   decided again here.
 * @returns The font size in px.
 */
export function thermostatSetpointFont(area: TileArea, parts: ThermostatTileParts): number {
    const fit = SETPOINT_FIT;
    const { buttons, footer } = parts;
    const width = area.width - (buttons ? 2 * fit.stepTile + 2 * area.controlGap : 0);
    const footerLine = footer ? area.rowGap + fit.tileLine : 0;
    const font = Math.min(width / fit.glyphsPerFontPx, (area.height - footerLine) / fit.lineHeight);
    return Math.max(fit.minFont, Math.min(fit.maxFont, Math.floor(font)));
}

/** One spacing unit of the standard theme in px: the fits count the gaps with it. */
const SPACING_PX = 8;

/** The Kartenkopf's name line: its font times its line height (`Kartenkopf`). */
const NAME_LINE = 1.3;

/**
 * The Einfach arrangements' measures beyond their parts' design (px at the design): Quer's head
 * column — the room the stacked Kartenkopf keeps beside the set-point, damped like the head — and
 * the line below the head (Quer) or the set-point (Kompakt): the actual temperature at the Maßstab,
 * a Meldung's hint line damped and no higher.
 */
export const EINFACH_FIT = { querColumn: 140, line: 28 } as const;

/**
 * The least Maßstab of Einfach: ± keep 40 px. The damped texts (the Kartenkopf's 12.5 px, the hint
 * line's 13 px) stay above 11 px there; the set-point is far larger.
 */
export const EINFACH_LEAST = leastScale({ controls: [THERMOSTAT_DESIGN.step.stage], texts: [] });

/** The least Maßstab of Quer with the operating-mode segment: its pills' 13.5 px keep 11 px as well. */
export const QUER_MODES_LEAST = leastScale({
    controls: [THERMOSTAT_DESIGN.step.stage],
    texts: [PILL_DESIGN.font],
});

/**
 * The big set-point's row at a Maßstab: the set-point at the design's 48 px, ± with their gap
 * beside it where it is writable.
 *
 * @param scale - The Maßstab.
 * @param writable - Whether ± stand beside the set-point.
 * @returns Its width and height in px.
 */
function setpointRow(scale: number, writable: boolean): LeastBox {
    const fit = SETPOINT_FIT;
    const step = writable ? fit.stepFlat * scale : 0;
    const gap = writable ? fit.flatGap * scale : 0;
    return {
        width: 2 * (step + gap) + fit.glyphsPerFontPx * fit.maxFont * scale,
        height: Math.max(step, fit.lineHeight * fit.maxFont * scale),
    };
}

/**
 * The line below the head or the set-point at a Maßstab: the actual temperature grows with it, a
 * Meldung damped — the higher of both.
 *
 * @param scale - The Maßstab.
 * @returns Its height in px.
 */
const lineAt = (scale: number): number => EINFACH_FIT.line * Math.max(scale, headScale(scale));

/**
 * What Quer needs at a Maßstab: the head block — the stacked Kartenkopf and the line below it in a
 * column beside the set-point row — and, with the segment, the operating-mode pills below it. A
 * running Urlaub adds a row the segment's region scrolls to.
 *
 * @param scale - The Maßstab.
 * @param writable - Whether ± stand beside the set-point.
 * @param modes - Whether the operating-mode segment stands below.
 * @returns The box Quer needs in px.
 */
export function querNeed(scale: number, writable: boolean, modes: boolean): LeastBox {
    const head = headScale(scale);
    const gaps = scaled(THERMOSTAT_DESIGN.gaps, scale * SPACING_PX);
    const k = KARTENKOPF_DESIGN;
    const stacked = (k.name * NAME_LINE + k.stackGapUnits * SPACING_PX + k.chipHeight) * head;
    const column = stacked + gaps.querText + lineAt(scale);
    const row = setpointRow(scale, writable);
    return {
        width: EINFACH_FIT.querColumn * head + gaps.querHead + row.width,
        height: Math.max(column, row.height) + (modes ? gaps.region + PILL_DESIGN.height * scale : 0),
    };
}

/**
 * What Kompakt needs at a Maßstab: the Kartenkopf as a row, the set-point row and the line below,
 * one region gap between each.
 *
 * @param scale - The Maßstab.
 * @param writable - Whether ± stand beside the set-point.
 * @returns The box Kompakt needs in px.
 */
export function kompaktNeed(scale: number, writable: boolean): LeastBox {
    const k = KARTENKOPF_DESIGN;
    const head = Math.max(k.name * NAME_LINE, k.chipHeight) * headScale(scale);
    const row = setpointRow(scale, writable);
    const region = THERMOSTAT_DESIGN.gaps.region * SPACING_PX * scale;
    return { width: row.width, height: head + region + row.height + region + lineAt(scale) };
}

/**
 * Whether a box holds a need.
 *
 * @param box - The measured box.
 * @returns The test of a need against the box.
 */
const holds =
    (box: MeasuredBox) =>
    (need: LeastBox): boolean =>
        need.width <= box.width && need.height <= box.height;

/** Einfach's arrangement in a box and the Maßstab it draws at. */
export type EinfachChoice =
    | { readonly arrangement: 'quer'; readonly modes: boolean; readonly scale: number }
    | { readonly arrangement: 'kompakt'; readonly scale: number };

/**
 * Einfach's arrangement (ADR-0122 Nachtrag „Maßstab und Anordnungswahl“ Nr. 5, 7): Quer or Kompakt,
 * the one whose parts fit at the larger Maßstab — Quer only while it holds at the least Maßstab.
 * Both compare the step's content without the segment; Quer then shows the segment as soon as it
 * fits at its least Maßstab and takes the Maßstab the head leaves above it. A box too small for
 * Einfach — floored in the dialog — draws at the least Maßstab.
 *
 * @param box - The measured Content-Box.
 * @param writable - Whether the set-point is writable: only then ± stand beside it.
 * @returns The arrangement, the segment in Quer and the Maßstab.
 */
export function thermostatEinfachChoice(box: MeasuredBox, writable: boolean): EinfachChoice {
    const fits = holds(box);
    const quer = fittingScale(scale => fits(querNeed(scale, writable, false)));
    const kompakt = fittingScale(scale => fits(kompaktNeed(scale, writable)));
    if (quer >= EINFACH_LEAST && quer >= kompakt) {
        const modes = fits(querNeed(QUER_MODES_LEAST, writable, true));
        const scale = modes ? fittingScale(at => fits(querNeed(at, writable, true))) : quer;
        return { arrangement: 'quer', modes, scale };
    }
    return { arrangement: 'kompakt', scale: Math.max(EINFACH_LEAST, kompakt) };
}

/**
 * Whether a box holds Einfach: Quer or Kompakt fits at the least Maßstab with ± — the rule reads no
 * writability.
 *
 * @param box - The measured Content-Box.
 * @returns `true` while one of them fits.
 */
export function thermostatEinfachHolds(box: MeasuredBox): boolean {
    const fits = holds(box);
    return fits(querNeed(EINFACH_LEAST, true, false)) || fits(kompaktNeed(EINFACH_LEAST, true));
}

/** An arrangement of the Raumthermostat within its stage. */
export type ThermostatArrangement = 'gross' | 'mittel' | 'quer' | 'kompakt';

/**
 * Whether a box reaches a least box.
 *
 * @param box - The measured box.
 * @param least - The least box.
 * @returns `true` when both sizes reach it.
 */
const reaches = (box: MeasuredBox, least: LeastBox): boolean => box.width >= least.width && box.height >= least.height;

/**
 * The Raumthermostat's size-stage rule: Voll from Mittel on, Einfach from Quer or Kompakt on, else
 * Mini. It reads none of its own data.
 *
 * @param box - The measured Content-Box.
 * @param _data - The type's own data (unused).
 * @returns The stage the box allows.
 */
export function thermostatStage(box: MeasuredBox, _data: unknown): SizeStage {
    if (reaches(box, THERMOSTAT_THRESHOLDS.mittel)) {
        return 'voll';
    }
    if (thermostatEinfachHolds(box)) {
        return 'einfach';
    }
    return 'mini';
}

/**
 * The arrangement of a drawn stage: Groß or Mittel in Voll, Quer or Kompakt in Einfach. A box too
 * small for its stage — capped by `ansicht` it never is, floored in the dialog it may be — takes the
 * smaller arrangement.
 *
 * @param stage - The effective stage.
 * @param box - The measured Content-Box.
 * @param writable - Whether the set-point is writable (Einfach compares with or without ±).
 * @returns The arrangement to draw.
 */
export function thermostatArrangement(stage: DrawnStage, box: MeasuredBox, writable = true): ThermostatArrangement {
    if (stage === 'voll') {
        return reaches(box, THERMOSTAT_THRESHOLDS.gross) ? 'gross' : 'mittel';
    }
    return thermostatEinfachChoice(box, writable).arrangement;
}

/** The optional parts of the Raumthermostat tile. */
export interface ThermostatTileParts {
    /** The ± beside the set-point. */
    buttons: boolean;
    /** The footer line (actual temperature or Meldung). */
    footer: boolean;
}

/**
 * The parts the tile's area holds: ± from their least box, the footer line below the main row —
 * as high as ±, else the least set-point line — and the hull's gap.
 *
 * @param area - The area the hull leaves the tile's content.
 * @param stepping - Whether the set-point has ± at all (writable); without, the footer needs less.
 * @returns Which optional parts to show.
 */
export function thermostatTile(area: TileArea, stepping = true): ThermostatTileParts {
    const buttons = stepping && reaches(area, THERMOSTAT_THRESHOLDS.tileButtons);
    const mainRow = buttons ? SETPOINT_FIT.stepTile : SETPOINT_FIT.tileMainLine;
    return { buttons, footer: area.height >= mainRow + area.rowGap + SETPOINT_FIT.tileLine };
}

/**
 * The dial's edge length in an arrangement of Voll: the design's dial size, its outer sizes taken
 * back to the Content-Box like the thresholds (width −24, height −64), within the design's bounds.
 *
 * @param arrangement - Groß or Mittel.
 * @param box - The measured Content-Box.
 * @returns The edge length in px.
 */
export function thermostatDialSize(arrangement: 'gross' | 'mittel', box: MeasuredBox): number {
    const clamp = (value: number, low: number, high: number): number => Math.max(low, Math.min(high, value));
    return arrangement === 'gross'
        ? clamp(Math.min(box.width - 76, box.height - 316), 240, 380)
        : clamp(Math.min(box.width - 52, box.height - 168), 200, 320);
}

/**
 * The set-point's font size in the dial: the design's 48 px while it fits, else as large as keeps
 * its far corner inside the ring's inner edge — the set-point, the gap and the actual line stand
 * centred above the dial's bottom padding (ADR-0122: the stage's box holds its parts).
 *
 * @param size - The dial's edge length in px.
 * @returns The font size in px.
 */
export function thermostatDialFont(size: number): number {
    const fit = SETPOINT_FIT;
    const k = size / 320;
    const inside = (font: number): boolean => {
        const top = (fit.dialPadding / 2) * k + (fit.lineHeight * font + fit.dialBelow) / 2;
        return Math.hypot((fit.glyphsPerFontPx * font) / 2, top) <= fit.dialInner * k;
    };
    let font: number = fit.maxFont;
    while (font > fit.minFont && !inside(font)) {
        font -= 1;
    }
    return font;
}

/** The dial of an arrangement of Voll: its edge length and the set-point's font size in it. */
export interface ThermostatDial {
    readonly size: number;
    readonly font: number;
}

/** The Raumthermostat tile's parts and the set-point's font size beside them. */
export interface ThermostatTilePlan extends ThermostatTileParts {
    readonly setpointFont: number;
}

/** A font of the theme's typography at a factor. */
export interface ThemeFont {
    readonly variant: 'h3';
    readonly factor: number;
}

/** The set-point's font: px, or the theme's typography at a factor. */
export type SetpointFont = number | ThemeFont;

/** What every plan names: the sizes of its parts at its Maßstab. */
interface SizedPlan {
    readonly sizes: ThermostatSizes;
}

/** The plan of a drawn stage: an arrangement of Voll or Einfach and the sizes it draws with. */
export type ThermostatStagePlan = SizedPlan &
    (
        | {
              readonly arrangement: 'gross';
              readonly dial: ThermostatDial;
              /** The column of pills, operating modes and readings in px; `null`: the whole width. */
              readonly column: number | null;
          }
        | { readonly arrangement: 'mittel'; readonly dial: ThermostatDial }
        | { readonly arrangement: 'quer'; readonly modes: boolean; readonly setpointFont: ThemeFont }
        | { readonly arrangement: 'kompakt'; readonly setpointFont: number }
    );

/** The plan of the Mini stage: the tile. */
export interface ThermostatMiniPlan extends SizedPlan {
    readonly arrangement: 'mini';
    readonly tile: ThermostatTilePlan;
}

/**
 * The whole plan of the Raumthermostat for a box: the arrangement and every size it draws with,
 * each computed once. The arrangements place the parts by it (`ThermostatStage`).
 */
export type ThermostatPlan = ThermostatStagePlan | ThermostatMiniPlan;

/**
 * The Raumthermostat's arrangement plan (ADR-0122 Nachtrag K7): from the effective stage, the box
 * and whether the set-point is writable to the arrangement, its Maßstab and the sizes of all parts,
 * the operating-mode segment in Quer, the dial's size and font, the set-point's font, the column of
 * Groß and the tile's parts.
 *
 * @param stage - The effective stage (Mini for the tile).
 * @param box - The measured Content-Box; for the tile the area the hull leaves it.
 * @param writable - Whether the set-point is writable: only then it has ±.
 * @returns The plan.
 */
export function thermostatPlan(stage: 'mini', box: TileArea, writable: boolean): ThermostatMiniPlan;
export function thermostatPlan(stage: DrawnStage, box: MeasuredBox, writable: boolean): ThermostatStagePlan;
export function thermostatPlan(stage: SizeStage, box: MeasuredBox | TileArea, writable: boolean): ThermostatPlan {
    if (stage === 'mini') {
        const area = box as TileArea;
        const tile = thermostatTile(area, writable);
        return {
            arrangement: 'mini',
            sizes: thermostatSizes(DESIGN_SCALE, 'tile'),
            tile: { ...tile, setpointFont: thermostatSetpointFont(area, tile) },
        };
    }
    if (stage === 'einfach') {
        return thermostatEinfachPlan(box, writable);
    }
    const arrangement = thermostatArrangement(stage, box);
    const sizes = thermostatSizes(DESIGN_SCALE, 'stage');
    const dialOf = (size: number): ThermostatDial => ({ size, font: thermostatDialFont(size) });
    return arrangement === 'gross'
        ? { arrangement, sizes, dial: dialOf(thermostatDialSize(arrangement, box)), column: null }
        : { arrangement: 'mittel', sizes, dial: dialOf(thermostatDialSize('mittel', box)) };
}

/**
 * The plan of Einfach: Quer or Kompakt at the Maßstab of {@link thermostatEinfachChoice} — Quer's
 * set-point in the theme's h3 at the Maßstab, Kompakt's at the design's 48 px times it.
 *
 * @param box - The measured Content-Box.
 * @param writable - Whether the set-point is writable.
 * @returns The plan.
 */
function thermostatEinfachPlan(box: MeasuredBox, writable: boolean): ThermostatStagePlan {
    const choice = thermostatEinfachChoice(box, writable);
    const sizes = thermostatSizes(choice.scale, 'stage');
    return choice.arrangement === 'quer'
        ? { arrangement: 'quer', sizes, modes: choice.modes, setpointFont: { variant: 'h3', factor: choice.scale } }
        : { arrangement: 'kompakt', sizes, setpointFont: SETPOINT_FIT.maxFont * choice.scale };
}
