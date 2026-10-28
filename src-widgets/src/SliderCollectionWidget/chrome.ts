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

import { extractColorFromValue } from '../lib/helper/extractColorFromValue';
import { resolveEffectiveColor, type ColorFieldContract } from '../lib/helper/resolveEffectiveColor';
import { sliderColorContracts } from '../lib/sliderFields';
import type { SliderFieldsRxData } from '../types';

/** Resolved chrome colors for one slider render. */
export interface SliderChromeStyles {
    /** Thumb background — may carry a gradient. */
    thumbBackground: string;
    /** Solid representative of the thumb cascade; base for hover/active shadows. */
    thumbShadowBase: string;
    /** Thumb border color — solid. */
    thumbBorder: string;
    /** Track background — may carry a gradient. */
    trackBackground: string;
    /** Track border color — solid. */
    trackBorder: string;
    /** Rail background — may carry a gradient. */
    railBackground: string;
    /** Rail border color — solid. */
    railBorder: string;
    /** Mark background (active marks reuse it) — may carry a gradient. */
    markBackground: string;
}

/**
 * Resolves one chrome slot through its field contract.
 *
 * `undefined` as textStyles: chrome fields never inherit the vis-2 text color
 * (no `inheritTextStyle` among them).
 */
const resolveChrome = (field: string, rxData: Record<string, unknown>, theme: Theme): string => {
    const contract: ColorFieldContract | undefined = sliderColorContracts[field];

    if (!contract) {
        throw new Error(`buildSliderChromeStyles: unknown chrome color field '${field}'`);
    }

    return resolveEffectiveColor(contract, rxData, theme, undefined);
};

/** Solid representative of a resolved color (gradients → 50% interpolation). */
const solidOf = (color: string): string => extractColorFromValue(color) ?? color;

/**
 * Builds the chrome colors for the slider from the widget data.
 *
 * @param rxData - Widget data (slider color fields).
 * @param theme - Effective MUI theme (for the terminal defaults).
 * @returns The resolved chrome colors, one slot per styled part.
 * @remarks
 * Backgrounds keep their raw resolved value (validateColorInput accepts
 * gradients, and the thumb/track/rail/mark surfaces may render them); border
 * and shadow slots go through `extractColorFromValue` because CSS needs a
 * solid there.
 *
 * Behavior delta vs. the legacy hand-rolled cascade (ADR-0004 intention):
 * invalid explicit colors (e.g. historic free-text entries) now fall through
 * to the fallback/terminal instead of flowing into CSS unchecked — the picker
 * only ever stores validated values.
 */
export function buildSliderChromeStyles(rxData: SliderFieldsRxData, theme: Theme): SliderChromeStyles {
    const data = rxData as Record<string, unknown>;

    const thumb = resolveChrome('thumbColor', data, theme);

    return {
        thumbBackground: thumb,
        thumbShadowBase: solidOf(thumb),
        thumbBorder: solidOf(resolveChrome('thumbBorderColor', data, theme)),
        trackBackground: resolveChrome('trackBackgroundColor', data, theme),
        trackBorder: solidOf(resolveChrome('trackBorderColor', data, theme)),
        railBackground: resolveChrome('railBackgroundColor', data, theme),
        railBorder: solidOf(resolveChrome('railBorderColor', data, theme)),
        markBackground: resolveChrome('markBackgroundColor', data, theme),
    };
}
