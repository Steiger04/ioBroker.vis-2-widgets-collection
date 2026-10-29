/**
 * Pure thumb-geometry computation for the Switch collection widget.
 *
 * @module widgets/SwitchCollectionWidget/geometry
 * @remarks
 * Extracted from the styled() callback in MaterialUISwitch.tsx so the travel
 * math (the clamp against the available height, the checked/unchecked sign
 * flip, the invisible input's offset) is testable without mounting the widget.
 * The caller passes the measured dimensions in — this module stays free of
 * React, the styled engine and context (the marks/chrome pattern of the
 * Slider widget). Behaviour is frozen: every formula reproduces the legacy
 * inline computation verbatim; the tests pin the results.
 */

/**
 * Legacy inset subtracted from the thumb travel.
 *
 * Inherited from the original inline styling; its exact derivation (the MUI
 * track's inner edge) is no longer verifiable. The value is frozen — the
 * geometry tests pin it.
 */
const TRAVEL_INSET_PX = 4;

/**
 * Horizontal travel magnitude of the switch base in px.
 *
 * @param thumbSize - Configured thumb size (px).
 * @param maxHeight - Available content height (px) or `undefined` while unmeasured.
 * @returns Travel magnitude; negate for the checked side. May go negative when
 *   the available height undercuts twice the inset (legacy formula, frozen).
 * @remarks
 * While the thumb fits (`maxHeight >= thumbSize`) it travels half its own size
 * minus the inset; once the available height caps the thumb, it travels half
 * the CAP minus the inset. An unmeasured height counts as `0` (first render).
 */
export function resolveThumbTravel(thumbSize: number, maxHeight: number | undefined): number {
    const effectiveHeight = maxHeight || 0;
    const travelBase = effectiveHeight >= thumbSize ? thumbSize : effectiveHeight;
    return travelBase / 2 - TRAVEL_INSET_PX;
}

/**
 * Left offset of the invisible a11y input in the checked state, in px.
 *
 * @param width - Measured container width (px) or `undefined` while unmeasured.
 * @param thumbSize - Configured thumb size (px).
 * @returns Offset from the container's left edge; keeps the native input
 *   covering the interactive area as the base slides to the right end.
 */
export function resolveCheckedInputLeft(width: number | undefined, thumbSize: number): number {
    return -(width || 0) + thumbSize;
}
