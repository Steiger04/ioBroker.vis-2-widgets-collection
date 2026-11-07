/**
 * The border colour contract of the Lampen-Bedienelement — declared once for the field and
 * the runtime.
 *
 * @module lib/light2ColorContract
 * @remarks
 * ADR-0004, ADR-0102 (Nachtrag 2026-11-07), ADR-0108 decision 6, the Slider's
 * Chrome-Farbvertrag pattern: the `colorLightBorderColor` field (light2Fields) spreads this
 * contract, so the editor swatch resolves it, and the Lampen-Bedienelement (`Light2Picker`)
 * resolves the same contract at runtime. For a chrome slot the field follows the runtime: an
 * empty border has always been drawn in the theme primary, so the contract declares exactly
 * that as its terminal, with no intermediate stage and no vis-2 CSS colour.
 *
 * The border is a solid slot (iro's `borderColor`, a CSS border): it resolves through
 * `resolveEffectiveSolidColor` — a gradient draws its Repräsentative Vollfarbe, a value
 * without one (a colour name, `transparent`, `var(…)`, no colour at all) and a value of only
 * whitespace count as unset and draw the terminal.
 *
 * Kept free of components: the field list pulls editor components (Generic), which the
 * runtime and its node tests must not import.
 */
import type { Theme } from '@mui/material';
import { resolveEffectiveSolidColor, terminalColor } from './helper/resolveEffectiveColor';
import type { ColorFieldContract } from './helper/resolveEffectiveColor';
import type { Light2FieldsRxData } from '../types';

/** The border colour cascade: explicit `colorLightBorderColor` → theme primary (terminal). */
export const light2BorderColorContract = {
    name: 'colorLightBorderColor',
    fallbackFields: [],
    terminal: 'primary',
} satisfies ColorFieldContract;

/** The widget data the border colour reads. */
export type Light2BorderColorData = Pick<Light2FieldsRxData, 'colorLightBorderColor'>;

/**
 * Resolves the border colour of the Lampen-Bedienelement.
 *
 * @param data - Widget data carrying the explicit border colour.
 * @param theme - Effective MUI theme (the collection theme, ADR-0078).
 * @returns The explicit colour's Repräsentative Vollfarbe, else the theme primary.
 */
export function resolveLight2BorderColor(data: Light2BorderColorData, theme: Theme): string {
    return (
        resolveEffectiveSolidColor(light2BorderColorContract, data, theme) ??
        terminalColor(light2BorderColorContract.terminal, theme)
    );
}
