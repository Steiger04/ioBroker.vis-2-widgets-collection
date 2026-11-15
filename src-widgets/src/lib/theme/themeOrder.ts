/**
 * The reckoning of a Theme-Auftrag: what an order may set, and the theme that results (ADR-0115).
 *
 * @module lib/theme/themeOrder
 * @remarks
 * A Theme-Auftrag is the one-time instruction of the Bauzeit-KI to change the user theme. It
 * names only what should change and is worked into the stored theme: what it does not name
 * stays. This module is the one list of what an order can name ({@link THEME_ORDER_SETTINGS})
 * — the fields the assistant fills are built from it ({@link module:lib/themeOrderFields}) —
 * and the pure step from a theme and an order's data to the next theme
 * ({@link applyThemeOrder}). When an order is carried out, and what happens to it afterwards,
 * is not decided here ({@link module:ThemeConfigWizard/carryOutThemeOrder}).
 *
 * An order follows the Rückfall-Regel: a value that cannot be used is skipped, the rest holds.
 * What counts as usable is decided by the theme validator alone
 * ({@link module:lib/theme/validateTheme.validateThemeOptions}), as it is when the stored theme
 * is read ({@link module:lib/theme/storedTheme}).
 */

import type { UserTheme } from './themeTypes';
import { setNestedValue } from './themeUtils';
import { validateThemeOptions } from './validateTheme';

/** One thing a Theme-Auftrag can set. */
export interface ThemeOrderSetting {
    /** The key in the order's data, and the name of the field the assistant fills. */
    name: string;
    /** Translation key of the field's label — the Theme Studio's label of the same setting. */
    labelKey: string;
    /** The values the assistant picks from. */
    options: readonly string[];
    /**
     * Works a set value into a theme.
     *
     * @param theme - The theme so far; never changed.
     * @param value - The value as the order holds it, unchecked.
     * @returns The theme with the value; whether the value is usable is checked on the result.
     */
    apply: (theme: UserTheme, value: unknown) => UserTheme;
}

/** What a Theme-Auftrag can set, in the order the settings are worked in. */
export const THEME_ORDER_SETTINGS: readonly ThemeOrderSetting[] = [
    {
        name: 'mode',
        labelKey: 'theme_wizard_palette_mode',
        options: ['light', 'dark'],
        apply: (theme, value) => setNestedValue(theme, 'palette.mode', value),
    },
];

/**
 * Works the data of a Theme-Auftrag into a theme.
 *
 * @param theme - A valid user theme (the stored theme as read); never changed.
 * @param order - The order's data as the assistant wrote it: unchecked, with keys that are no
 *   setting (the host adds `bindings`).
 * @returns The theme with every usable setting of the order. A setting the order does not name
 *   (`undefined`, `null`) and a value the theme validator rejects leave the theme as it was.
 *   Applying the same order to the result again yields the same theme.
 */
export function applyThemeOrder(theme: UserTheme, order: Readonly<Record<string, unknown>>): UserTheme {
    let next = theme;
    for (const setting of THEME_ORDER_SETTINGS) {
        const value = order[setting.name];
        if (value === undefined || value === null) {
            continue;
        }
        const candidate = setting.apply(next, value);
        // `next` is valid, so an error in the candidate comes from this value: it is skipped.
        if (validateThemeOptions(candidate).isValid) {
            next = candidate;
        }
    }
    return next;
}
