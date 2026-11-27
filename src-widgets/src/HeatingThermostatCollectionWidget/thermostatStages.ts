/**
 * The Raumthermostat's size-stage rule and its arrangements (ADR-0122 Nr. 1, 9).
 *
 * @module HeatingThermostatCollectionWidget/thermostatStages
 * @remarks
 * The design's thresholds (`layout()` of the design canvas) are outer widget sizes. Here they are
 * converted to the Content-Box with the frame of the standard configuration: 24 px of width (card
 * inset 8 px, base padding 2 × 8 px) and 64 px of height (the same plus the header and the footer
 * line flat at 2 × 20 px). So a widget dropped at the start size 420 × 700 px (≈ 396 × 636 px of
 * Content-Box) starts in Voll/Groß as in the design. Voll begins at Mittel, 276 × 376 px — within
 * the narrowest grid section (296 px) and 11 grid rows (632 px). The box after the frame counts
 * without correction (Nr. 4): a large padding or Rahmenvorgabe may move the widget one stage down.
 */

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
 * The tile: its head row 20 px, ± 44 px with 6 px of gap, the footer line 28 px, 4 px between rows.
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
    tileHead: 20,
    stepTile: 44,
    tileGap: 6,
    tileLine: 28,
    tileRowGap: 4,
    /** The least set-point line the tile keeps beside its footer (a 20 px set-point). */
    tileMainLine: 24,
    /** The dial (320-unit box): the ring's inner edge (radius 118 − half the stroke of 14). */
    dialInner: 111,
    /** The dial: the bottom padding of its centred column, and the gap and actual line below the set-point. */
    dialPadding: 26,
    dialBelow: 4 + 28,
} as const;

/** The design's outer thresholds, converted to the Content-Box. */
export const THERMOSTAT_THRESHOLDS = {
    /** Voll, arrangement Groß (design 400 × 640). */
    gross: { width: 376, height: 576 },
    /** Voll, arrangement Mittel (design 300 × 440) — the least box of Voll. */
    mittel: { width: 276, height: 376 },
    /** Einfach, arrangement Quer (design 480 × 180). */
    quer: { width: 456, height: 116 },
    /** Einfach, arrangement Kompakt (design 280 × 210). */
    kompakt: { width: 256, height: 146 },
    /** Quer with the operating-mode segment (design height 300). */
    querModes: { width: 0, height: 236 },
    /**
     * The tile's ± (design width 220): from the spec's width on, and as high as the head row and ±
     * need (ADR-0122: the box holds what the stage shows).
     */
    tileButtons: {
        width: 196,
        height: SETPOINT_FIT.tileHead + SETPOINT_FIT.tileRowGap + SETPOINT_FIT.stepTile,
    },
    /** The tile's footer line: below the head row and the least set-point line. */
    tileFooter: {
        width: 0,
        height:
            SETPOINT_FIT.tileHead +
            SETPOINT_FIT.tileRowGap +
            SETPOINT_FIT.tileMainLine +
            SETPOINT_FIT.tileRowGap +
            SETPOINT_FIT.tileLine,
    },
    /** The tile's footer line beside ±: the main row is as high as ±. */
    tileFooterButtons: {
        width: 0,
        height:
            SETPOINT_FIT.tileHead +
            SETPOINT_FIT.tileRowGap +
            SETPOINT_FIT.stepTile +
            SETPOINT_FIT.tileRowGap +
            SETPOINT_FIT.tileLine,
    },
} as const satisfies Record<string, LeastBox>;

/** Where a set-point sized by its box stands: Kompakt's row beside ±, or the tile. */
export type SetpointPlace = 'kompakt' | 'tile';

/**
 * The set-point's font size in a place that sizes it by its box: the design's 48 px while there is
 * room, else as large as the place holds it (ADR-0122: the stage's box holds its parts) — in
 * Kompakt the row beside ±, in the tile the row beside ± and the height left by the head row and
 * the footer line.
 *
 * @param place - The place.
 * @param box - The measured Content-Box.
 * @param buttons - Whether ± stand beside the set-point.
 * @returns The font size in px.
 */
export function thermostatSetpointFont(place: SetpointPlace, box: MeasuredBox, buttons: boolean): number {
    const fit = SETPOINT_FIT;
    let font: number;
    if (place === 'kompakt') {
        font = (box.width - (buttons ? 2 * fit.stepFlat + 2 * fit.flatGap : 0)) / fit.glyphsPerFontPx;
    } else {
        const width = box.width - (buttons ? 2 * fit.stepTile + 2 * fit.tileGap : 0);
        const footer = thermostatTile(box, buttons).footer ? fit.tileRowGap + fit.tileLine : 0;
        const height = box.height - fit.tileHead - fit.tileRowGap - footer;
        font = Math.min(width / fit.glyphsPerFontPx, height / fit.lineHeight);
    }
    return Math.max(fit.minFont, Math.min(fit.maxFont, Math.floor(font)));
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
    if (reaches(box, THERMOSTAT_THRESHOLDS.quer) || reaches(box, THERMOSTAT_THRESHOLDS.kompakt)) {
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
 * @returns The arrangement to draw.
 */
export function thermostatArrangement(stage: DrawnStage, box: MeasuredBox): ThermostatArrangement {
    if (stage === 'voll') {
        return reaches(box, THERMOSTAT_THRESHOLDS.gross) ? 'gross' : 'mittel';
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

/** The optional parts of the Raumthermostat tile. */
export interface ThermostatTileParts {
    /** The ± beside the set-point. */
    buttons: boolean;
    /** The footer line (actual temperature or Meldung). */
    footer: boolean;
}

/**
 * The parts the tile's box holds.
 *
 * @param box - The measured Content-Box.
 * @param stepping - Whether the set-point has ± at all (writable); without, the footer needs less.
 * @returns Which optional parts to show.
 */
export function thermostatTile(box: MeasuredBox, stepping = true): ThermostatTileParts {
    const buttons = stepping && reaches(box, THERMOSTAT_THRESHOLDS.tileButtons);
    return {
        buttons,
        footer: reaches(box, buttons ? THERMOSTAT_THRESHOLDS.tileFooterButtons : THERMOSTAT_THRESHOLDS.tileFooter),
    };
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
