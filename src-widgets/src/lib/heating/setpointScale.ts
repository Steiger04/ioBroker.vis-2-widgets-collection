/**
 * The scale a set-point is operated on: its limits, its step and the ring's angles (stage-1 spec
 * „Bedienen → Sollwert“, ticket 01 „nur echte Grenzen“).
 *
 * @module lib/heating/setpointScale
 * @remarks
 * The limits are the set-point object's real range — a Hilfs-ID's pick copies `common.min` /
 * `common.max` only where the object has them (ADR-0109 Nachtrag 2026-11-27). A missing side takes
 * the design scale 5–30 °C, the same for ring and ±. The step is the object's stored step copy
 * (ADR-0110 Nr. 12) where it is a positive number, else 0.5 K, so the widget writes no value the
 * device would round. Values snap to multiples of the step and stay within the limits.
 *
 * The ring runs over 270° from 135° (lower left, the minimum) clockwise to 45° (lower right, the
 * maximum), angles in degrees with 0° pointing right and y pointing down, as in SVG.
 *
 * Pure and component-free.
 */

/** The design scale's lower end (°C), for a set-point without a real minimum. */
export const DESIGN_MIN = 5;
/** The design scale's upper end (°C), for a set-point without a real maximum. */
export const DESIGN_MAX = 30;
/** The step without a stored step copy (K). */
export const DEFAULT_STEP = 0.5;

/** Where the ring starts (the minimum), in degrees. */
export const RING_START = 135;
/** How far the ring runs, in degrees. */
export const RING_SWEEP = 270;

/** The scale of one set-point. */
export interface SetpointScale {
    readonly min: number;
    readonly max: number;
    readonly step: number;
}

/** Floating-point slack when a value sits on the step grid. */
const EPSILON = 1e-9;

const isFiniteNumber = (value: unknown): value is number => typeof value === 'number' && Number.isFinite(value);

/**
 * The scale of a set-point from its stored object.
 *
 * @param object - The set-point's stored object (`sollObject`).
 * @returns Its real limits, a missing side from the design scale, and its step.
 */
export function setpointScale(object: unknown): SetpointScale {
    const { minValue, maxValue, step } = (object ?? {}) as { minValue?: unknown; maxValue?: unknown; step?: unknown };
    const min = isFiniteNumber(minValue) ? minValue : DESIGN_MIN;
    const max = isFiniteNumber(maxValue) ? maxValue : DESIGN_MAX;
    return {
        min,
        max: Math.max(min, max),
        step: isFiniteNumber(step) && step > 0 ? step : DEFAULT_STEP,
    };
}

/** A grid value without floating-point dust. */
const onGrid = (index: number, step: number): number => Number((index * step).toFixed(10));

/** A value within the limits. */
const clamp = (value: number, { min, max }: SetpointScale): number => Math.min(max, Math.max(min, value));

/**
 * The next value up: the next multiple of the step above `value`, at most the maximum.
 *
 * @param value - The current set-point.
 * @param scale - The scale.
 * @returns The value one step up.
 */
export function stepUp(value: number, scale: SetpointScale): number {
    return clamp(onGrid(Math.floor(value / scale.step + EPSILON) + 1, scale.step), scale);
}

/**
 * The next value down: the next multiple of the step below `value`, at least the minimum.
 *
 * @param value - The current set-point.
 * @param scale - The scale.
 * @returns The value one step down.
 */
export function stepDown(value: number, scale: SetpointScale): number {
    return clamp(onGrid(Math.ceil(value / scale.step - EPSILON) - 1, scale.step), scale);
}

/**
 * A value snapped to the step grid and the limits.
 *
 * @param value - Any value.
 * @param scale - The scale.
 * @returns The nearest multiple of the step, within the limits.
 */
export function snap(value: number, scale: SetpointScale): number {
    return clamp(onGrid(Math.round(value / scale.step), scale.step), scale);
}

/**
 * Where a value sits on the ring.
 *
 * @param value - The value.
 * @param scale - The scale.
 * @param scale.min - Its lower limit.
 * @param scale.max - Its upper limit.
 * @returns The share of the sweep, 0 at the minimum, 1 at the maximum.
 */
export function fractionOf(value: number, { min, max }: SetpointScale): number {
    return max > min ? Math.min(1, Math.max(0, (value - min) / (max - min))) : 0;
}

/**
 * The value at a point of the ring.
 *
 * @param angle - The point's angle in degrees (0° right, clockwise, as in SVG).
 * @param scale - The scale.
 * @returns The snapped value; a point in the gap below the ring takes the nearer end.
 */
export function valueAtAngle(angle: number, scale: SetpointScale): number {
    let along = (((angle - RING_START) % 360) + 360) % 360;
    if (along > RING_SWEEP) {
        // The gap: the half towards the start belongs to the minimum, the other to the maximum.
        along = along > RING_SWEEP + (360 - RING_SWEEP) / 2 ? 0 : RING_SWEEP;
    }
    return snap(scale.min + (along / RING_SWEEP) * (scale.max - scale.min), scale);
}
