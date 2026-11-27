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
    /** The tile's ± (design 220 × 110). */
    tileButtons: { width: 196, height: 46 },
    /** The tile's footer line (design height 130). */
    tileFooter: { width: 0, height: 66 },
} as const satisfies Record<string, LeastBox>;

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
 * @returns Which optional parts to show.
 */
export const thermostatTile = (box: MeasuredBox): ThermostatTileParts => ({
    buttons: reaches(box, THERMOSTAT_THRESHOLDS.tileButtons),
    footer: reaches(box, THERMOSTAT_THRESHOLDS.tileFooter),
});
