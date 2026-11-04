/**
 * Chrome color resolution for the Slider collection widget.
 *
 * @module widgets/SliderCollectionWidget/chrome
 * @remarks
 * Implements the Chrome-Farbvertrag (CONTEXT.md): the color cascade of the
 * slider's chrome parts (thumb, track, rail, marks) is DECLARED by the field
 * definitions (`sliderFields` → `sliderColorContracts`) and resolved here
 * through `resolveEffectiveColor` — no hand-rolled `a || b || theme.x` chains
 * in the styled/sx layer. Label chains (valueLabel, markLabel) are NOT chrome:
 * they stay in the state-resolver system (useData/StyleData).
 */

import type { Theme } from '@mui/material';

import {
    resolveEffectiveColor,
    resolveEffectiveSolidColor,
    type ColorFieldContract,
} from '../lib/helper/resolveEffectiveColor';
import { sliderColorContracts } from '../lib/sliderFields';
import type { SliderFieldsRxData } from '../types';

/**
 * Resolved chrome colors for one slider render. Solid slots are `undefined`
 * only when no stage of their cascade has a Repräsentative Vollfarbe — with
 * the `primary` terminal of every slider chrome field that needs an unreadable
 * theme primary.
 */
export interface SliderChromeStyles {
    /** Thumb background — may carry a gradient. */
    thumbBackground: string;
    /** Solid representative of the thumb cascade; base for hover/active shadows. */
    thumbShadowBase: string | undefined;
    /** Thumb border color — solid. */
    thumbBorder: string | undefined;
    /** Track background — may carry a gradient. */
    trackBackground: string;
    /** Track border color — solid. */
    trackBorder: string | undefined;
    /** Rail background — may carry a gradient. */
    railBackground: string;
    /** Rail border color — solid. */
    railBorder: string | undefined;
    /** Mark background (active marks reuse it) — may carry a gradient. */
    markBackground: string;
}

/** The field contract of one chrome slot (`sliderColorContracts`). */
const contractOf = (field: string): ColorFieldContract => {
    const contract: ColorFieldContract | undefined = sliderColorContracts[field];

    if (!contract) {
        throw new Error(`buildSliderChromeStyles: unknown chrome color field '${field}'`);
    }

    return contract;
};

/**
 * Builds the chrome colors for the slider from the widget data.
 *
 * Each slot resolves its field contract without textStyles: chrome
 * fields never inherit the vis-2 text color (no `inheritTextStyle` among them).
 *
 * @param rxData - Widget data (slider color fields).
 * @param theme - Effective MUI theme (for the terminal defaults).
 * @returns The resolved chrome colors, one slot per styled part.
 * @remarks
 * Backgrounds keep their raw resolved value (the cascade accepts every CSS
 * colour and gradients, and the thumb/track/rail/mark surfaces render them). Border
 * and shadow slots need a solid, so they resolve through
 * `resolveEffectiveSolidColor`: a gradient yields its midpoint color, and a
 * stage without a Repräsentative Vollfarbe (a gradient with named stops)
 * falls through the cascade — e.g. to `sliderColor`, then the primary terminal.
 *
 * Behavior delta vs. the legacy hand-rolled cascade (ADR-0004 intention):
 * invalid explicit colors (e.g. historic free-text entries) now fall through
 * to the fallback/terminal instead of flowing into CSS unchecked — the picker
 * only ever stores validated values.
 */
export function buildSliderChromeStyles(rxData: SliderFieldsRxData, theme: Theme): SliderChromeStyles {
    const data = rxData as Record<string, unknown>;

    const background = (field: string): string => resolveEffectiveColor(contractOf(field), data, theme);
    const solid = (field: string): string | undefined => resolveEffectiveSolidColor(contractOf(field), data, theme);

    return {
        thumbBackground: background('thumbColor'),
        thumbShadowBase: solid('thumbColor'),
        thumbBorder: solid('thumbBorderColor'),
        trackBackground: background('trackBackgroundColor'),
        trackBorder: solid('trackBorderColor'),
        railBackground: background('railBackgroundColor'),
        railBorder: solid('railBorderColor'),
        markBackground: background('markBackgroundColor'),
    };
}
