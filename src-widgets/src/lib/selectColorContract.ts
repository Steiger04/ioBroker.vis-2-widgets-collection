/**
 * The Select's arrow colour contract — declared once for the field and the runtime.
 *
 * @module lib/selectColorContract
 * @remarks
 * ADR-0004, the Slider's Chrome-Farbvertrag pattern: a colour field's cascade is declared
 * once and resolved through `resolveEffectiveColor`. The `arrowColor` field (selectFields)
 * spreads this contract, so the editor swatch resolves it, and the Select-Chrome
 * (`buildSelectChrome`) resolves the same contract at runtime. The two resolve it over
 * different data: the swatch over the BASE fields (`textColor` = the widget's base text
 * colour), the runtime over the ACTIVE state's resolved text colour. That difference is
 * deliberate: a state with its own text colour draws its arrow in it, while the swatch shows
 * the base cascade.
 *
 * Kept free of components: the field list pulls editor components (Generic), which the
 * runtime and its node tests must not import.
 */
import type { ColorFieldContract } from './helper/resolveEffectiveColor';

/**
 * The arrow colour cascade: explicit `arrowColor` → `textColor` → vis-2 CSS colour
 * (`inheritTextStyle`) → theme text (terminal). An invalid explicit colour counts as unset.
 */
export const arrowColorContract = {
    name: 'arrowColor',
    fallbackFields: ['textColor'],
    terminal: 'text',
    inheritTextStyle: true,
} satisfies ColorFieldContract;
