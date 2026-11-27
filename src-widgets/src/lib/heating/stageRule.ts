/**
 * The three shared size stages of the heating family (ADR-0122): the vocabulary a type's rule
 * speaks and the `ansicht` cap.
 *
 * @module lib/heating/stageRule
 * @remarks
 * A type hands the size-stage module (`lib/heating/SizeStages`) a pure rule `(box, own data) → stage`.
 * Arrangements within a stage and all thresholds belong to the type. The effective stage is the
 * lower of the box's stage and `ansicht` (Nr. 2); the cap never raises a stage.
 */

import type { ContentBox } from '../../hooks/useContentBox';

/** The three shared stages, largest first. */
export const SIZE_STAGES = ['voll', 'einfach', 'mini'] as const;

/** A size stage. */
export type SizeStage = (typeof SIZE_STAGES)[number];

/** The stages a type draws itself; Mini is the module's tile. */
export type DrawnStage = Exclude<SizeStage, 'mini'>;

/** A measured Content-Box in px. */
export interface MeasuredBox {
    readonly width: number;
    readonly height: number;
}

/**
 * A type's size-stage rule: pure, from the measured box and the type's own data (e.g. its entry
 * count) to the stage the box allows.
 */
export type SizeRule<Data> = (box: MeasuredBox, data: Data) => SizeStage;

/**
 * The measured box, or `undefined` before the first measurement (ADR-0122 Nr. 3: no stage is
 * guessed then).
 *
 * @param box - The published Content-Box.
 * @returns The box with both sizes, else `undefined`.
 */
export function measuredBoxOf(box: ContentBox): MeasuredBox | undefined {
    const { width, height } = box;
    return typeof width === 'number' && typeof height === 'number' ? { width, height } : undefined;
}

/**
 * The stage `ansicht` caps at: `einfach` stops at Einfach, anything else (`voll`, unset) allows
 * every stage.
 *
 * @param ansicht - The stored `ansicht`.
 * @returns The highest stage allowed.
 */
const capOf = (ansicht: unknown): SizeStage => (ansicht === 'einfach' ? 'einfach' : 'voll');

/**
 * The lower of two stages.
 *
 * @param a - One stage.
 * @param b - The other.
 * @returns The smaller one.
 */
export const lowerStage = (a: SizeStage, b: SizeStage): SizeStage =>
    SIZE_STAGES.indexOf(a) >= SIZE_STAGES.indexOf(b) ? a : b;

/**
 * The effective stage: the lower of the box's stage and `ansicht` (ADR-0122 Nr. 2).
 *
 * @param boxStage - The stage the type's rule gives the box.
 * @param ansicht - The stored `ansicht`.
 * @returns The stage to draw.
 */
export const cappedStage = (boxStage: SizeStage, ansicht: unknown): SizeStage => lowerStage(boxStage, capOf(ansicht));
