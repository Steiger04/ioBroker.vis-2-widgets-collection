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
 * of Content-Box, 392 × 612 px inside the inset) starts in Voll/Groß as in the design. Voll holds
 * while one of its arrangements holds its whole content at the least Maßstab (ADR-0122 Nachtrag
 * „Maßstab und Anordnungswahl“ Nr. 6, `vollHolds`): Mittel from 247 × 317 px — the narrowest grid
 * section (296 px, 272 px inside the standard Inhaltsabstand) stays Voll. The box after the frame
 * counts without correction (Nr. 4): a large padding, Rahmenvorgabe or Inhaltsabstand may move the
 * widget one stage down.
 *
 * The content draws by one plan (`thermostatPlan`): the helpers below are its pieces, each size
 * computed once there. The plan names the arrangement's Maßstab (ADR-0122 Nachtrag „Maßstab und
 * Anordnungswahl“, `lib/heating/scaleRule`) and the sizes of every part from it
 * (`thermostatSizes`): ±, set-point, actual temperature, Kartenkopf and hint line (damped), pills,
 * readings and gaps; the parts set no size of their own. Voll draws at the largest Maßstab its box
 * holds, its dial filling the room the other parts leave (see „Voll“ below); Einfach and the tile
 * draw at Maßstab 1 for now — the design's sizes.
 */

import { kartenkopfSizes, pillSizes, type KartenkopfSizes, type PillSizes } from '../lib/heating/partSizes';
import { headScale, leastScale, legible, SCALE_BOUNDS, scaled } from '../lib/heating/scaleRule';
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
 * (`TileArea`).
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

/** The hint line with its text held legible. */
const legibleHint = (hint: HintLineSizes): HintLineSizes => ({ ...hint, font: legible(hint.font) });

/** The readings bar with its texts held legible. */
const legibleReadings = (readings: ReadingSizes): ReadingSizes => ({
    ...readings,
    value: legible(readings.value),
    label: legible(readings.label),
});

/**
 * The sizes of all parts at a Maßstab: the instrument (±, set-point, actual temperature), pills,
 * readings and gaps at the Maßstab, the Kartenkopf and the hint line damped (`headScale`) — the
 * tile's footer line grows with the Maßstab (ADR-0122 Nachtrag „Maßstab und Anordnungswahl“ Nr. 1,
 * 9). No text falls below 11 px (`legible`, Nr. 2).
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
        hint: legibleHint(place === 'tile' ? scaled(design.hint.tile, scale) : scaled(design.hint.line, head)),
        pills: pillSizes(scale),
        readings: legibleReadings(scaled(design.readings, scale)),
        gaps: scaled(design.gaps, scale),
    };
}

/** The Maßstab every arrangement draws at for now: the design's. */
const DESIGN_SCALE = 1;

/** The design's outer thresholds of Einfach and the tile, converted to the Content-Box. */
export const THERMOSTAT_THRESHOLDS = {
    /** Einfach, arrangement Quer (design 480 × 180). */
    quer: { width: 456, height: 116 },
    /** Einfach, arrangement Kompakt (design 280 × 210). */
    kompakt: { width: 256, height: 146 },
    /** Quer with the operating-mode segment (design height 300). */
    querModes: { width: 0, height: 236 },
    /**
     * The tile's ± (design width 220), in the tile's area: from the spec's width on, and as high as
     * ± (ADR-0122: the box holds what the stage shows).
     */
    tileButtons: { width: 196, height: SETPOINT_FIT.stepTile },
} as const satisfies Record<string, LeastBox>;

/** Where a set-point sized by its box stands: Kompakt's row beside ±, or the tile. */
type SetpointPlace = 'kompakt' | 'tile';

/**
 * The set-point's font size in a place that sizes it by its box: the design's 48 px while there is
 * room, else as large as the place holds it (ADR-0122: the stage's box holds its parts) — in
 * Kompakt the row of the Content-Box beside ±, in the tile the row of its area beside ± and the
 * height the footer line leaves.
 *
 * @param place - The place.
 * @param box - Kompakt: the measured Content-Box; the tile: the area the hull leaves it.
 * @param parts - Kompakt: whether ± stand beside the set-point; the tile: its parts as
 *   {@link thermostatTile} decided them (± and the footer line), not decided again here.
 * @returns The font size in px.
 */
export function thermostatSetpointFont(place: 'kompakt', box: MeasuredBox, parts: boolean): number;
export function thermostatSetpointFont(place: 'tile', box: TileArea, parts: ThermostatTileParts): number;
export function thermostatSetpointFont(
    place: SetpointPlace,
    box: MeasuredBox | TileArea,
    parts: boolean | ThermostatTileParts,
): number {
    const fit = SETPOINT_FIT;
    let font: number;
    if (place === 'kompakt') {
        font = (box.width - (parts ? 2 * fit.stepFlat + 2 * fit.flatGap : 0)) / fit.glyphsPerFontPx;
    } else {
        const area = box as TileArea;
        const { buttons, footer } = parts as ThermostatTileParts;
        const width = area.width - (buttons ? 2 * fit.stepTile + 2 * area.controlGap : 0);
        const footerLine = footer ? area.rowGap + fit.tileLine : 0;
        font = Math.min(width / fit.glyphsPerFontPx, (area.height - footerLine) / fit.lineHeight);
    }
    return Math.max(fit.minFont, Math.min(fit.maxFont, Math.floor(font)));
}

/** An arrangement of Voll. */
export type VollArrangement = 'gross' | 'mittel';

/** An arrangement of the Raumthermostat within its stage. */
export type ThermostatArrangement = VollArrangement | 'quer' | 'kompakt';

/**
 * Whether a box reaches a least box.
 *
 * @param box - The measured box.
 * @param least - The least box.
 * @returns `true` when both sizes reach it.
 */
const reaches = (box: MeasuredBox, least: LeastBox): boolean => box.width >= least.width && box.height >= least.height;

/**
 * The Raumthermostat's size-stage rule: Voll while one of its arrangements holds its whole content at
 * the least Maßstab (`vollHolds`), Einfach from Quer or Kompakt on, else Mini. It reads none of its
 * own data.
 *
 * @param box - The measured Content-Box.
 * @param _data - The type's own data (unused).
 * @returns The stage the box allows.
 */
export function thermostatStage(box: MeasuredBox, _data: unknown): SizeStage {
    if (vollHolds(box)) {
        return 'voll';
    }
    if (reaches(box, THERMOSTAT_THRESHOLDS.quer) || reaches(box, THERMOSTAT_THRESHOLDS.kompakt)) {
        return 'einfach';
    }
    return 'mini';
}

/**
 * The arrangement of a drawn stage: in Voll by `vollArrangement`, Quer or Kompakt in Einfach. A box too
 * small for its stage — capped by `ansicht` it never is, floored in the dialog it may be — takes the
 * smaller arrangement.
 *
 * @param stage - The effective stage.
 * @param box - The measured Content-Box.
 * @returns The arrangement to draw.
 */
export function thermostatArrangement(stage: 'voll', box: MeasuredBox): VollArrangement;
export function thermostatArrangement(stage: 'einfach', box: MeasuredBox): 'quer' | 'kompakt';
export function thermostatArrangement(stage: DrawnStage, box: MeasuredBox): ThermostatArrangement;
export function thermostatArrangement(stage: DrawnStage, box: MeasuredBox): ThermostatArrangement {
    if (stage === 'voll') {
        return vollArrangement(box);
    }
    return reaches(box, THERMOSTAT_THRESHOLDS.quer) ? 'quer' : 'kompakt';
}

/**
 * Whether Quer is tall enough for the operating-mode segment.
 *
 * @param box - The measured Content-Box.
 * @returns `true` from the threshold on.
 */
export const thermostatQuerModes = (box: MeasuredBox): boolean => reaches(box, THERMOSTAT_THRESHOLDS.querModes);

/*
 * Voll (ADR-0122 Nachtrag „Maßstab und Anordnungswahl“ Nr. 1–6, 8): each arrangement needs a box for
 * its whole content at a Maßstab — the dial at 320 px × Maßstab, the other parts at their sizes from
 * `thermostatSizes`, Groß's column at its design width × Maßstab. An arrangement draws at the largest
 * Maßstab its box holds (at most 2.0); it holds while that reaches the least Maßstab. The dial then
 * takes the room the arrangement leaves it at that Maßstab — never less than 320 px × Maßstab, at
 * most twice the design — and its instrument (set-point, ±, actual temperature) follows the dial.
 */

/** The design's dial edge in px (the ring's 320-unit box at Maßstab 1). */
const DIAL_DESIGN = 320;

/**
 * The design width of Groß's column of pills, operating modes and readings in px: the content width
 * of the start size 440 px inside the frame and the standard Inhaltsabstand (440 − 24 − 24), where
 * „Absenk 17,0 °C“ and „Komfort 21,0 °C“ hold their pill without being cut.
 */
export const VOLL_COLUMN = 392;

/** One spacing unit of the standard theme in px; the plan counts the parts' gaps by it. */
const SPACING_PX = 8;

/** The line height of the theme text the parts draw without a line height of their own. */
const TEXT_LINE = 1.5;

/** The ± edge of the design bounds Voll from below; its texts stay legible on their own (`legible`). */
export const VOLL_LEAST_SCALE = leastScale({ controls: [THERMOSTAT_DESIGN.step.stage], texts: [] });

/**
 * The heights of the parts beside the dial at a Maßstab, in px.
 *
 * @param sizes - The sizes at the Maßstab.
 * @returns The heights: the Kartenkopf full (symbol and Unterzeile) and in its short row, the hint
 *   line with a Meldung, the pills, the operating modes with the Urlaub row, the readings bar and
 *   one gap between regions.
 */
function partHeights(sizes: ThermostatSizes): {
    headFull: number;
    headRow: number;
    hint: number;
    pills: number;
    modes: number;
    readings: number;
    gap: number;
} {
    const { head, hint, pills, readings, gaps } = sizes;
    const nameLine = head.name * 1.3;
    return {
        headFull: Math.max(
            head.symbol,
            nameLine + head.textGapUnits * SPACING_PX + head.second * TEXT_LINE,
            head.chipHeight,
        ),
        headRow: Math.max(nameLine, head.chipHeight),
        hint: Math.max(hint.font * TEXT_LINE, hint.sign) + 2 * hint.padYUnits * SPACING_PX,
        pills: pills.height,
        modes: 2 * pills.height + gaps.modes * SPACING_PX,
        // The bar's top line of 1 px does not scale.
        readings:
            readings.topUnits * SPACING_PX +
            1 +
            Math.max(readings.value * TEXT_LINE, readings.icon) +
            readings.itemGapUnits * SPACING_PX +
            readings.label * TEXT_LINE,
        gap: gaps.region * SPACING_PX,
    };
}

/** What an arrangement of Voll needs at a Maßstab: its box, and the room it leaves the dial. */
interface VollNeed extends LeastBox {
    /** The room for the dial: the box less every other part. */
    readonly dialRoom: (box: MeasuredBox) => LeastBox;
}

/**
 * The box an arrangement of Voll needs for its whole content at a Maßstab — a Meldung and the Urlaub
 * row counted, so the dial does not jump when they come.
 *
 * @param arrangement - The arrangement.
 * @param scale - The Maßstab.
 * @returns The need.
 */
function vollNeed(arrangement: VollArrangement, scale: number): VollNeed {
    const part = partHeights(thermostatSizes(scale, 'stage'));
    const dial = DIAL_DESIGN * scale;
    // Groß: Kartenkopf, dial, hint line, column (pills, modes, readings) — five gaps.
    const beside =
        arrangement === 'gross'
            ? part.headFull + part.hint + part.pills + part.modes + part.readings + 5 * part.gap
            : part.headRow + part.hint + 2 * part.gap;
    return {
        width: arrangement === 'gross' ? Math.max(dial, VOLL_COLUMN * scale) : dial,
        height: beside + dial,
        dialRoom: box => ({ width: box.width, height: box.height - beside }),
    };
}

/**
 * Whether an arrangement of Voll holds its whole content in a box at a Maßstab.
 *
 * @param arrangement - The arrangement.
 * @param box - The box.
 * @param scale - The Maßstab.
 * @returns `true` when the need fits.
 */
function vollFits(arrangement: VollArrangement, box: MeasuredBox, scale: number): boolean {
    return reaches(box, vollNeed(arrangement, scale));
}

/**
 * The Maßstab an arrangement of Voll draws at in a box: the largest its box holds, at most 2.0, to a
 * thousandth.
 *
 * @param arrangement - The arrangement.
 * @param box - The box.
 * @returns The Maßstab (below the least when the arrangement does not hold).
 */
export function vollScale(arrangement: VollArrangement, box: MeasuredBox): number {
    if (vollFits(arrangement, box, SCALE_BOUNDS.max)) {
        return SCALE_BOUNDS.max;
    }
    let low = 0;
    let high: number = SCALE_BOUNDS.max;
    for (let step = 0; step < 32; step++) {
        const middle = (low + high) / 2;
        if (vollFits(arrangement, box, middle)) {
            low = middle;
        } else {
            high = middle;
        }
    }
    return Math.floor(low * 1000) / 1000;
}

/**
 * The least box of an arrangement of Voll: its need at the least Maßstab, to the px above.
 *
 * @param arrangement - The arrangement.
 * @returns The least box.
 */
export function vollLeastBox(arrangement: VollArrangement): LeastBox {
    const need = vollNeed(arrangement, VOLL_LEAST_SCALE);
    return { width: Math.ceil(need.width), height: Math.ceil(need.height) };
}

/** The arrangements of Voll that show the whole content, besides Mittel. */
const VOLL_FULL: readonly VollArrangement[] = ['gross'];

/**
 * Whether a box holds Voll: one of its arrangements holds its whole content at the least Maßstab.
 *
 * @param box - The measured box.
 * @returns `true` for Voll.
 */
function vollHolds(box: MeasuredBox): boolean {
    return [...VOLL_FULL, 'mittel' as const].some(arrangement => vollFits(arrangement, box, VOLL_LEAST_SCALE));
}

/**
 * The arrangement of Voll for a box: of the arrangements with the whole content the one with the
 * largest Maßstab, Mittel only when none holds at the least Maßstab (Nr. 5).
 *
 * @param box - The measured box.
 * @returns The arrangement.
 */
function vollArrangement(box: MeasuredBox): VollArrangement {
    let best: VollArrangement = 'mittel';
    let bestScale = -1;
    for (const arrangement of VOLL_FULL) {
        const scale = vollScale(arrangement, box);
        if (vollFits(arrangement, box, VOLL_LEAST_SCALE) && scale > bestScale) {
            best = arrangement;
            bestScale = scale;
        }
    }
    return best;
}

/**
 * The dial of an arrangement of Voll in a box at its Maßstab: as large as the room the other parts
 * leave it, at most twice the design, with its instrument at the dial's factor.
 *
 * @param need - The arrangement's need at its Maßstab.
 * @param box - The box.
 * @returns The dial.
 */
function vollDial(need: VollNeed, box: MeasuredBox): ThermostatDial {
    const room = need.dialRoom(box);
    // Not rounded: a dial rounded down would draw ± below 40 px at the least Maßstab.
    const size = Math.min(room.width, room.height, SCALE_BOUNDS.max * DIAL_DESIGN);
    const k = size / DIAL_DESIGN;
    const design = THERMOSTAT_DESIGN;
    return {
        size,
        font: thermostatDialFont(size),
        step: design.step.stage * k,
        stepIcon: design.stepIcon * k,
        actual: design.actual * k,
        gap: design.gaps.dial * k,
        actualGap: design.gaps.actual * k,
    };
}

/**
 * The plan of Voll for a box.
 *
 * @param box - The measured box.
 * @returns The plan of its arrangement.
 */
function vollPlan(box: MeasuredBox): ThermostatVollPlan {
    const arrangement = vollArrangement(box);
    const scale = vollScale(arrangement, box);
    const sizes = thermostatSizes(scale, 'stage');
    const dial = vollDial(vollNeed(arrangement, scale), box);
    return arrangement === 'gross'
        ? { arrangement, sizes, dial, column: VOLL_COLUMN * scale }
        : { arrangement, sizes, dial };
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
 * The set-point's font size in the dial: the design's 48 px at the dial's factor (its edge over the
 * design's 320 px) while it fits, else as large as keeps its far corner inside the ring's inner edge
 * — the set-point, the gap and the actual line stand centred above the dial's bottom padding, all at
 * that factor (ADR-0122: the stage's box holds its parts).
 *
 * @param size - The dial's edge length in px.
 * @returns The font size in px.
 */
export function thermostatDialFont(size: number): number {
    const fit = SETPOINT_FIT;
    const k = size / DIAL_DESIGN;
    const inside = (font: number): boolean => {
        const top = (fit.dialPadding / 2) * k + (fit.lineHeight * font + fit.dialBelow * k) / 2;
        return Math.hypot((fit.glyphsPerFontPx * font) / 2, top) <= fit.dialInner * k;
    };
    let font = Math.max(fit.minFont, Math.floor(fit.maxFont * k));
    while (font > fit.minFont && !inside(font)) {
        font -= 1;
    }
    return font;
}

/**
 * The dial of an arrangement of Voll: its edge length, and the instrument inside it at the dial's
 * factor (its edge over the design's 320 px) — the set-point's font, ±, their symbol, the actual
 * temperature and its gaps.
 */
export interface ThermostatDial {
    readonly size: number;
    readonly font: number;
    /** The ± edge in px. */
    readonly step: number;
    /** The ± symbol in px (drawn in the theme's rem). */
    readonly stepIcon: number;
    /** The actual temperature in em of the surrounding text. */
    readonly actual: number;
    /** Between set-point and actual line, in spacing units. */
    readonly gap: number;
    /** Between the word „Ist“ and the actual temperature, in spacing units. */
    readonly actualGap: number;
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
              /** The centred column of pills, operating modes and readings in px. */
              readonly column: number;
          }
        | { readonly arrangement: 'mittel'; readonly dial: ThermostatDial }
        | { readonly arrangement: 'quer'; readonly modes: boolean; readonly setpointFont: ThemeFont }
        | { readonly arrangement: 'kompakt'; readonly setpointFont: number }
    );

/** The plan of Voll: an arrangement with the dial. */
export type ThermostatVollPlan = Extract<ThermostatStagePlan, { readonly dial: ThermostatDial }>;

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
export function thermostatPlan(stage: 'voll', box: MeasuredBox, writable: boolean): ThermostatVollPlan;
export function thermostatPlan(stage: DrawnStage, box: MeasuredBox, writable: boolean): ThermostatStagePlan;
export function thermostatPlan(stage: SizeStage, box: MeasuredBox | TileArea, writable: boolean): ThermostatPlan {
    if (stage === 'mini') {
        const area = box as TileArea;
        const tile = thermostatTile(area, writable);
        return {
            arrangement: 'mini',
            sizes: thermostatSizes(DESIGN_SCALE, 'tile'),
            tile: { ...tile, setpointFont: thermostatSetpointFont('tile', area, tile) },
        };
    }
    if (stage === 'voll') {
        return vollPlan(box);
    }
    const arrangement = thermostatArrangement(stage, box);
    const sizes = thermostatSizes(DESIGN_SCALE, 'stage');
    switch (arrangement) {
        case 'quer':
            return {
                arrangement,
                sizes,
                modes: thermostatQuerModes(box),
                // Quer keeps the set-point in the theme's h3.
                setpointFont: { variant: 'h3', factor: sizes.scale },
            };
        default:
            return { arrangement, sizes, setpointFont: thermostatSetpointFont('kompakt', box, writable) };
    }
}
