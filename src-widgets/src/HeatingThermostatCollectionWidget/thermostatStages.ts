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
 * „Maßstab und Anordnungswahl“ Nr. 6, `vollHolds`): Mittel from 247 × 317 px, Groß from
 * 360 × 603 px, Breit from 664 × 299 px — the narrowest grid section (296 px, 272 px inside the
 * standard Inhaltsabstand) stays Voll. The box after the frame
 * counts without correction (Nr. 4): a large padding, Rahmenvorgabe or Inhaltsabstand may move the
 * widget one stage down.
 *
 * The content draws by one plan (`thermostatPlan`): the helpers below are its pieces, each size
 * computed once there. The plan names the arrangement's Maßstab (ADR-0122 Nachtrag „Maßstab und
 * Anordnungswahl“, `lib/heating/scaleRule`) and the sizes of every part from it
 * (`thermostatSizes`): ±, set-point, actual temperature, Kartenkopf and hint line (damped), pills,
 * readings and gaps; the parts set no size of their own.
 *
 * Voll (see „Voll“ below): Groß, Breit and Mittel each draw at the largest Maßstab their whole
 * content fits; Voll holds while one of them fits at its least Maßstab, of Groß and Breit the one
 * with the larger Maßstab draws, Mittel only when neither holds. The dial fills the room the other
 * parts leave at that Maßstab.
 *
 * Einfach (`thermostatEinfachPlan`): Quer and Kompakt each take the largest Maßstab at which their
 * parts fit the box (`querNeed`, `kompaktNeed`); Einfach holds while one of them fits at its least
 * Maßstab (± 40 px), and of the two the one with the larger Maßstab draws. Quer shows the
 * operating-mode segment as soon as it fits at its least Maßstab (the pills' text 11 px) and then
 * takes its Maßstab with the segment below the head.
 *
 * The tile (`thermostatTile`) follows the same rule in the area the hull leaves it: ± as soon as they
 * fit at 40 px, the footer line as soon as it fits at its least Maßstab, then the largest Maßstab
 * the area holds; the set-point fills its row, the hull's head row grows damped (`tileHeadScale`).
 */

import {
    KARTENKOPF_DESIGN,
    kartenkopfSizes,
    PILL_DESIGN,
    pillSizes,
    type KartenkopfSizes,
    type PillSizes,
} from '../lib/heating/partSizes';
import { fittingScale, headScale, leastScale, SCALE_BOUNDS, scaled } from '../lib/heating/scaleRule';
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
 * The tile's parts: ± 44 px, the footer line 28 px, the set-point 32 px — the hull's head row and
 * gaps come with its area (`TileArea`). Sizes in px are the design's; the fits (`querNeed`,
 * `kompaktNeed`, the tile's) take them times the Maßstab.
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
    /** The tile's set-point at the design: two thirds of the big one. */
    tileFont: 32,
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
    /**
     * The readings bar: value, icon and label fonts, its gaps, the top padding above the line. The
     * label is 12 px (the design canvas: 11.5): with it Groß holds its texts at 11 px down to the
     * start size's Maßstab (ADR-0122 Nachtrag „Maßstab und Anordnungswahl“ Nr. 2, 11).
     */
    readings: {
        value: 16,
        icon: 16,
        label: 12,
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
    // Whether a part holds is asked at its exact least Maßstab; the found Maßstab is rounded down.
    if (fits(querNeed(EINFACH_LEAST, writable, false)) && quer >= kompakt) {
        const modes = fits(querNeed(QUER_MODES_LEAST, writable, true));
        const scale = modes ? fittingScale(at => fits(querNeed(at, writable, true))) : quer;
        return { arrangement: 'quer', modes, scale: Math.max(modes ? QUER_MODES_LEAST : EINFACH_LEAST, scale) };
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

/** An arrangement of Voll. */
export type VollArrangement = 'gross' | 'breit' | 'mittel';

/** An arrangement of the Raumthermostat within its stage. */
export type ThermostatArrangement = VollArrangement | 'quer' | 'kompakt';

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
    if (thermostatEinfachHolds(box)) {
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
 * @param writable - Whether the set-point is writable (Einfach compares with or without ±).
 * @returns The arrangement to draw.
 */
export function thermostatArrangement(stage: 'voll', box: MeasuredBox, writable?: boolean): VollArrangement;
export function thermostatArrangement(stage: 'einfach', box: MeasuredBox, writable?: boolean): 'quer' | 'kompakt';
export function thermostatArrangement(stage: DrawnStage, box: MeasuredBox, writable?: boolean): ThermostatArrangement;
export function thermostatArrangement(stage: DrawnStage, box: MeasuredBox, writable = true): ThermostatArrangement {
    if (stage === 'voll') {
        return vollArrangement(box);
    }
    return thermostatEinfachChoice(box, writable).arrangement;
}

/*
 * Voll (ADR-0122 Nachtrag „Maßstab und Anordnungswahl“ Nr. 1–6, 8): each arrangement needs a box for
 * its whole content at a Maßstab — the dial at 320 px × Maßstab, the other parts at their sizes from
 * `thermostatSizes`, the column of Groß (below the dial) and of Breit (beside it, with the
 * Kartenkopf and the hint line) at its design width × Maßstab. An arrangement draws at the largest
 * Maßstab its box holds (at most 2.0); it holds while its content fits at its least Maßstab
 * (`VOLL_LEAST`: ± 40 px and no text below 11 px). The dial then
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

/** The line height of the theme text the parts draw without a line height of their own. */
const TEXT_LINE = 1.5;

/**
 * The ring's scale labels: their size in the ring's units at the design (px at the dial's factor 1;
 * the design canvas: 11.5 — at 12 they still show at the start size's dial).
 * They are a part of the dial shown while they keep 11 px at the dial's factor — like the
 * operating-mode segment in Quer — so they never bound the Maßstab.
 */
export const DIAL_LABEL = 12;

/** The dial's factor from which its scale labels keep 11 px. */
export const DIAL_LABELS_LEAST = leastScale({ controls: [], texts: [DIAL_LABEL] });

/** The damped texts of the Kartenkopf and the hint line at the design. */
const HEAD_TEXTS = [KARTENKOPF_DESIGN.name, KARTENKOPF_DESIGN.second, KARTENKOPF_DESIGN.chipFont];

/**
 * The least Maßstab of each arrangement of Voll (ADR-0122 Nachtrag Nr. 2): ± keep 40 px and none of
 * its texts falls below 11 px — those it draws at the Maßstab in full, the Kartenkopf and the hint
 * line at their damped factor. Groß and Breit carry the pills and the readings; Mittel only its
 * Kartenkopf row and the hint line (the set-point in the dial is far larger).
 */
export const VOLL_LEAST: Readonly<Record<VollArrangement, number>> = (() => {
    const design = THERMOSTAT_DESIGN;
    const controls = [design.step.stage];
    const damped = [...HEAD_TEXTS, design.hint.line.font];
    const full = leastScale({
        controls,
        texts: [PILL_DESIGN.font, design.readings.value, design.readings.label],
        damped,
    });
    return { gross: full, breit: full, mittel: leastScale({ controls, texts: [], damped }) };
})();

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
    const nameLine = head.name * NAME_LINE;
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
    const column = VOLL_COLUMN * scale;
    // The whole content beside the dial: Kartenkopf, hint line, pills, modes, readings.
    const content = part.headFull + part.hint + part.pills + part.modes + part.readings;
    switch (arrangement) {
        case 'gross': {
            // Kartenkopf, dial, hint line and the column below one another — five gaps.
            const beside = content + 5 * part.gap;
            return {
                width: Math.max(dial, column),
                height: beside + dial,
                dialRoom: box => ({ width: box.width, height: box.height - beside }),
            };
        }
        case 'breit': {
            // The dial, a gap and the column beside it; the column's five parts with four gaps.
            const beside = part.gap + column;
            return {
                width: dial + beside,
                height: Math.max(dial, content + 4 * part.gap),
                dialRoom: box => ({ width: box.width - beside, height: box.height }),
            };
        }
        default: {
            const beside = part.headRow + part.hint + 2 * part.gap;
            return {
                width: dial,
                height: beside + dial,
                dialRoom: box => ({ width: box.width, height: box.height - beside }),
            };
        }
    }
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
    return holds(box)(vollNeed(arrangement, scale));
}

/**
 * The Maßstab an arrangement of Voll draws at in a box: the largest its box holds, at most 2.0, to a
 * thousandth (`fittingScale`).
 *
 * @param arrangement - The arrangement.
 * @param box - The box.
 * @returns The Maßstab (below the least when the arrangement does not hold).
 */
export function vollScale(arrangement: VollArrangement, box: MeasuredBox): number {
    return fittingScale(scale => vollFits(arrangement, box, scale));
}

/**
 * The least box of an arrangement of Voll: its need at the least Maßstab, to the px above.
 *
 * @param arrangement - The arrangement.
 * @returns The least box.
 */
export function vollLeastBox(arrangement: VollArrangement): LeastBox {
    const need = vollNeed(arrangement, VOLL_LEAST[arrangement]);
    return { width: Math.ceil(need.width), height: Math.ceil(need.height) };
}

/** The arrangements of Voll that show the whole content, besides Mittel. */
const VOLL_FULL: readonly VollArrangement[] = ['gross', 'breit'];

/**
 * Whether a box holds Voll: one of its arrangements holds its whole content at the least Maßstab.
 *
 * @param box - The measured box.
 * @returns `true` for Voll.
 */
function vollHolds(box: MeasuredBox): boolean {
    return [...VOLL_FULL, 'mittel' as const].some(arrangement => vollFits(arrangement, box, VOLL_LEAST[arrangement]));
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
        if (vollFits(arrangement, box, VOLL_LEAST[arrangement]) && scale > bestScale) {
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
        // Exactly at the least factor: the dial's size is not rounded.
        labels: k >= DIAL_LABELS_LEAST,
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
    return arrangement === 'mittel'
        ? { arrangement, sizes, dial }
        : { arrangement, sizes, dial, column: VOLL_COLUMN * scale };
}

/** The optional parts of the Raumthermostat tile. */
export interface ThermostatTileParts {
    /** The ± beside the set-point. */
    buttons: boolean;
    /** The footer line (actual temperature or Meldung). */
    footer: boolean;
}

/** The tile's parts and the Maßstab it draws them at. */
export interface ThermostatTileFit extends ThermostatTileParts {
    /** The Maßstab: 0 when not even the set-point fits at the smallest. */
    readonly scale: number;
}

/** The least Maßstab of the tile's ±: they keep 40 px (44 px at the design). */
export const TILE_BUTTONS_LEAST = leastScale({ controls: [THERMOSTAT_DESIGN.step.tile], texts: [] });

/** The least Maßstab of the tile's footer line: its 12 px keep 11 px. */
export const TILE_FOOTER_LEAST = leastScale({ controls: [], texts: [THERMOSTAT_DESIGN.hint.tile.font] });

/**
 * The factor of the tile hull's head row at the tile's Maßstab: damped, and never below the hull's
 * design — the tile is the smallest step, its name and open symbol do not shrink.
 *
 * @param scale - The tile's Maßstab.
 * @returns The head row's factor.
 */
export const tileHeadScale = (scale: number): number => headScale(Math.max(1, scale));

/**
 * What the tile's parts need of its area at a Maßstab: the set-point at the tile's design font, ±
 * with the hull's gap where they show, the footer line below the hull's row gap, and the head row's
 * growth over the design the area already left.
 *
 * @param scale - The Maßstab.
 * @param area - The area the hull leaves the tile.
 * @param parts - Which optional parts show.
 * @returns The box the parts need in px.
 */
function tileNeed(scale: number, area: TileArea, parts: ThermostatTileParts): LeastBox {
    const fit = SETPOINT_FIT;
    const step = parts.buttons ? fit.stepTile * scale : 0;
    const font = fit.tileFont * scale;
    return {
        width: (parts.buttons ? 2 * (step + area.controlGap) : 0) + fit.glyphsPerFontPx * font,
        height:
            area.head * (tileHeadScale(scale) - 1) +
            Math.max(step, fit.lineHeight * font) +
            (parts.footer ? area.rowGap + fit.tileLine * scale : 0),
    };
}

/**
 * The parts the tile's area holds and its Maßstab (ADR-0122 Nachtrag „Maßstab und Anordnungswahl“
 * Nr. 9): ± as soon as they fit at 40 px, then the footer line as soon as it fits beside them at
 * its least Maßstab; the tile then draws them at the largest Maßstab its area holds.
 *
 * @param area - The area the hull leaves the tile's content.
 * @param stepping - Whether the set-point has ± at all (writable).
 * @returns Which optional parts to show and the Maßstab.
 */
export function thermostatTile(area: TileArea, stepping = true): ThermostatTileFit {
    const fits = holds(area);
    // Whether a part holds is asked at its exact least Maßstab; the found Maßstab is rounded down.
    const buttons = stepping && fits(tileNeed(TILE_BUTTONS_LEAST, area, { buttons: true, footer: false }));
    const footer = fits(tileNeed(TILE_FOOTER_LEAST, area, { buttons, footer: true }));
    const scale = fittingScale(at => fits(tileNeed(at, area, { buttons, footer })));
    const least = Math.max(buttons ? TILE_BUTTONS_LEAST : 0, footer ? TILE_FOOTER_LEAST : 0);
    return { buttons, footer, scale: Math.max(least, scale) };
}

/**
 * The set-point's font size in the tile: as large as the row of its area beside ± and the height
 * the head row and the footer line leave hold it, at most the big set-point's 48 px times the
 * Maßstab and at least 12 px (ADR-0122: the stage's box holds its parts).
 *
 * @param area - The area the hull leaves the tile.
 * @param tile - Its parts and Maßstab as {@link thermostatTile} decided them, not decided again here.
 * @returns The font size in px.
 */
export function thermostatSetpointFont(area: TileArea, tile: ThermostatTileFit): number {
    const fit = SETPOINT_FIT;
    const { buttons, footer, scale } = tile;
    const width = area.width - (buttons ? 2 * (fit.stepTile * scale + area.controlGap) : 0);
    const height =
        area.height - area.head * (tileHeadScale(scale) - 1) - (footer ? area.rowGap + fit.tileLine * scale : 0);
    const font = Math.min(width / fit.glyphsPerFontPx, height / fit.lineHeight);
    return Math.max(fit.minFont, Math.min(fit.maxFont * scale, Math.floor(font)));
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
    /** Whether the scale labels show: while they keep 11 px at the dial's factor. */
    readonly labels: boolean;
}

/** The Raumthermostat tile's parts, the set-point's font size beside them and the hull's head factor. */
export interface ThermostatTilePlan extends ThermostatTileParts {
    readonly setpointFont: number;
    /** The factor the hull draws its head row at (damped). */
    readonly headScale: number;
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
        | {
              readonly arrangement: 'breit';
              readonly dial: ThermostatDial;
              /** The column beside the dial: Kartenkopf, hint line, pills, operating modes, readings, in px. */
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
            sizes: thermostatSizes(tile.scale, 'tile'),
            tile: {
                buttons: tile.buttons,
                footer: tile.footer,
                setpointFont: thermostatSetpointFont(area, tile),
                headScale: tileHeadScale(tile.scale),
            },
        };
    }
    if (stage === 'einfach') {
        return thermostatEinfachPlan(box, writable);
    }
    return vollPlan(box);
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
