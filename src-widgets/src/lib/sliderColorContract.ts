/**
 * The Slider's colour contracts — the chrome parts, the marker text and the end symbols,
 * declared once for the fields and the runtime.
 *
 * @module lib/sliderColorContract
 * @remarks
 * ADR-0004 (the Chrome-Farbvertrag reference case), ADR-0106 decision 5: the slider colour
 * fields (sliderFields) spread their contract, so the editor swatch resolves it, and the
 * Slider-Chrome (`buildSliderChrome`) resolves the same contract at runtime — ONE
 * declaration site.
 *
 * - Chrome (thumb, track, rail, marks): terminal `primary`; every part falls back to
 *   `sliderColor`, the thumb border first to `thumbColor`.
 * - `markerTextColor` is a label contract that only drives its picker swatch: no chrome slot
 *   reads it — the mark text is rendered by the state-resolver system (useData), whose cascade
 *   (`textColor{n}` → `markerTextColor` → `textColor` → vis-2 text style → theme text) the
 *   contract mirrors.
 * - End symbols (`startIconColor`, `endIconColor`): solid only, NO `sliderColor` fallback; the
 *   runtime colours a Base64 icon without a value in the theme primary, so the terminal is
 *   `primary` (CONTEXT "Endsymbol").
 *
 * Kept free of components: the field list pulls editor components (Generic), which the
 * runtime and its node tests must not import.
 */
import type { ColorFieldContract } from './helper/resolveEffectiveColor';

/** The slider colour contracts, keyed by field name. */
export const sliderColorContracts = {
    /** Base slider colour: explicit `sliderColor` → theme primary. */
    sliderColor: {
        name: 'sliderColor',
        terminal: 'primary',
    },
    /** Thumb background: explicit `thumbColor` → `sliderColor` → theme primary. */
    thumbColor: {
        name: 'thumbColor',
        fallbackFields: ['sliderColor'],
        terminal: 'primary',
    },
    /** Thumb border: explicit `thumbBorderColor` → `thumbColor` → `sliderColor` → theme primary. */
    thumbBorderColor: {
        name: 'thumbBorderColor',
        fallbackFields: ['thumbColor', 'sliderColor'],
        terminal: 'primary',
    },
    /** Track background: explicit `trackBackgroundColor` → `sliderColor` → theme primary. */
    trackBackgroundColor: {
        name: 'trackBackgroundColor',
        fallbackFields: ['sliderColor'],
        terminal: 'primary',
    },
    /** Track border: explicit `trackBorderColor` → `sliderColor` → theme primary. */
    trackBorderColor: {
        name: 'trackBorderColor',
        fallbackFields: ['sliderColor'],
        terminal: 'primary',
    },
    /** Rail background: explicit `railBackgroundColor` → `sliderColor` → theme primary. */
    railBackgroundColor: {
        name: 'railBackgroundColor',
        fallbackFields: ['sliderColor'],
        terminal: 'primary',
    },
    /** Rail border: explicit `railBorderColor` → `sliderColor` → theme primary. */
    railBorderColor: {
        name: 'railBorderColor',
        fallbackFields: ['sliderColor'],
        terminal: 'primary',
    },
    /** Mark background (active marks reuse it): explicit `markBackgroundColor` → `sliderColor` → theme primary. */
    markBackgroundColor: {
        name: 'markBackgroundColor',
        fallbackFields: ['sliderColor'],
        terminal: 'primary',
    },
    /** Mark text (label contract, swatch only): explicit `markerTextColor` → `textColor` → vis-2 CSS colour → theme text. */
    markerTextColor: {
        name: 'markerTextColor',
        fallbackFields: ['textColor'],
        terminal: 'text',
        inheritTextStyle: true,
    },
    /** End symbol at the start (the min icon): explicit `startIconColor` → theme primary. */
    startIconColor: {
        name: 'startIconColor',
        terminal: 'primary',
    },
    /** End symbol at the end (the max icon): explicit `endIconColor` → theme primary. */
    endIconColor: {
        name: 'endIconColor',
        terminal: 'primary',
    },
} satisfies Record<string, ColorFieldContract>;

/** A slider colour field that carries a contract. */
export type SliderColorField = keyof typeof sliderColorContracts;
