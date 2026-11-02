/**
 * The Radio's colour rules — the unchecked icon contract, declared once for the field and
 * the runtime, plus the state rules the renderer applies on top.
 *
 * @module lib/radioColorContract
 * @remarks
 * ADR-0004, the Chrome-Farbvertrag pattern: the `radioGroupUncheckedIconColor` field
 * (radioGroupFields) spreads this contract, so the editor swatch resolves it, and the
 * RadioGroup renderer resolves the same contract at runtime. For a chrome slot the field
 * follows the runtime: without a value the unchecked icon has always drawn MUI's Radio
 * default `text.secondary`, so the contract's terminal is `textSecondary`. No fallback
 * field and no `inheritTextStyle` — the runtime reads neither `textColor` nor the vis-2 CSS
 * colour.
 *
 * `resolveRadioColors` keeps all of the Radio's colour rules in one place: the contract for
 * the unchecked icon plus two state rules on top — checked follows the state's icon colour,
 * and disabled unchecked draws `action.active` instead of the terminal (documented
 * divergence, ADR-0004 Nachtrag „Chrome-Slots").
 *
 * Kept free of components: the field list pulls editor components (Generic), which the
 * runtime and its node tests must not import.
 */
import type { Theme } from '@mui/material';
import { resolveEffectiveColor } from './helper/resolveEffectiveColor';
import type { ColorFieldContract } from './helper/resolveEffectiveColor';
import type { RadioGroupFieldsRxData } from '../types/field-definitions/radio-group-fields';

/**
 * The unchecked icon colour cascade: explicit `radioGroupUncheckedIconColor` → theme
 * secondary text (terminal). An invalid explicit colour counts as unset.
 */
export const radioUncheckedIconColorContract = {
    name: 'radioGroupUncheckedIconColor',
    fallbackFields: [],
    terminal: 'textSecondary',
} satisfies ColorFieldContract;

/** The unchecked contract without its terminal — resolves to the valid explicit value or `''`. */
const UNCHECKED_EXPLICIT_ONLY: ColorFieldContract = { ...radioUncheckedIconColorContract, terminal: undefined };

/** The widget data the radio colour rules read. */
export type RadioColorData = Pick<RadioGroupFieldsRxData, 'radioGroupUncheckedIconColor'>;

/** The radio icon colours of one state, as concrete CSS colours. */
export interface RadioColors {
    /** Unchecked icon, enabled: the contract resolved. */
    unchecked: string;
    /** Checked icon: the state's resolved icon colour, else theme primary. */
    checked: string;
    /** Unchecked icon while the group is disabled (Sperre). */
    disabledUnchecked: string;
}

/**
 * Resolves the radio icon colours of one state.
 *
 * @param data - Widget data carrying the explicit `radioGroupUncheckedIconColor`.
 * @param activeIconColor - The state's resolved icon colour (`state.iconColor`).
 * @param theme - Effective MUI theme.
 * @returns The icon colours for the enabled unchecked, checked and disabled unchecked icon.
 */
export function resolveRadioColors(
    data: RadioColorData,
    activeIconColor: string | undefined,
    theme: Theme,
): RadioColors {
    // The same cascade without its terminal: the valid explicit value, else ''.
    const explicit = resolveEffectiveColor(UNCHECKED_EXPLICIT_ONLY, data, theme, undefined);
    return {
        unchecked: resolveEffectiveColor(radioUncheckedIconColorContract, data, theme, undefined),
        checked: activeIconColor || theme.palette.primary.main,
        // State rule: disabled deliberately does not follow the terminal — MUI's own
        // disabled grey (`action.disabled`) is overridden by `action.active`, not by text.secondary.
        disabledUnchecked: explicit || theme.palette.action.active,
    };
}
