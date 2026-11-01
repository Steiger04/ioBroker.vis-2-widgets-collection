/**
 * The Button-Group separator colour contract — declared once for the field and the runtime.
 *
 * @module lib/buttonGroupColorContract
 * @remarks
 * ADR-0004, the Slider's Chrome-Farbvertrag pattern: the `buttonGroupColor` field
 * (buttonGroupFields) spreads this contract, so the editor swatch resolves it, and the
 * Button-Group-Chrome (`buildGroupChrome`) resolves the same contract at runtime. For a
 * chrome slot the field follows the runtime: the separator has always fallen back to the
 * theme text colour, never to `textColor`, so the contract declares no fallback field.
 * No `inheritTextStyle` either — the runtime does not read the vis-2 CSS colour.
 *
 * Kept free of components: the field list pulls editor components (Generic), which the
 * runtime and its node tests must not import.
 */
import type { ColorFieldContract } from './helper/resolveEffectiveColor';

/**
 * The separator colour cascade: explicit `buttonGroupColor` → theme text (terminal).
 * An invalid explicit colour counts as unset.
 */
export const buttonGroupColorContract = {
    name: 'buttonGroupColor',
    fallbackFields: [],
    terminal: 'text',
} satisfies ColorFieldContract;
