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
 * divergence, ADR-0004 addendum "Chrome-Slots"). The explicit value is drawn raw, as
 * before the contract: swatch and runtime agree for every colour (the cascade reads stored
 * values with the Regeln für Farbeingaben — colour names, `var(…)`, `transparent` included);
 * only a legacy value that is no colour at all keeps painting raw while the swatch counts it
 * as unset (the spec allows rendering changes only for values that used to crash).
 *
 * Kept free of components: the field list pulls editor components (Generic), which the
 * runtime and its node tests must not import.
 */
import type { Theme } from '@mui/material';
import { terminalColor } from './helper/resolveEffectiveColor';
import type { ColorFieldContract } from './helper/resolveEffectiveColor';
import type { RadioGroupFieldsRxData } from '../types/field-definitions/radio-group-fields';

/**
 * The unchecked icon colour cascade: explicit `radioGroupUncheckedIconColor` → theme
 * secondary text (terminal). For the swatch an invalid explicit colour counts as unset;
 * the runtime draws it raw ({@link resolveRadioColors}).
 */
export const radioUncheckedIconColorContract = {
    name: 'radioGroupUncheckedIconColor',
    fallbackFields: [],
    terminal: 'textSecondary',
} satisfies ColorFieldContract;

/** The widget data the radio colour rules read. */
export type RadioColorData = Pick<RadioGroupFieldsRxData, 'radioGroupUncheckedIconColor'>;

/** The radio icon colours of one state, as concrete CSS colours. */
export interface RadioColors {
    /** Unchecked icon, enabled: the explicit value as stored, else the contract's terminal. */
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
    // The explicit stage raw, as before the contract — never validated away.
    const explicit = data.radioGroupUncheckedIconColor || '';
    return {
        unchecked: explicit || terminalColor(radioUncheckedIconColorContract.terminal, theme),
        checked: activeIconColor || theme.palette.primary.main,
        // State rule: disabled deliberately does not follow the terminal — MUI's own
        // disabled grey (`action.disabled`) is overridden by `action.active`, not by text.secondary.
        disabledUnchecked: explicit || theme.palette.action.active,
    };
}
