/**
 * The one place where the stored user theme is read (ADR-0020, ADR-0115).
 *
 * @module lib/theme/storedTheme
 * @remarks
 * The theme lives as JSON text in one ioBroker state
 * ({@link module:lib/constants.THEME_STATE_ID}). Whoever holds that state's value — the canvas
 * widgets ({@link module:hooks/useCollectionTheme}), the Studio session
 * ({@link module:ThemeConfigWizard/useStudioSession}) — turns it into a user theme here, and
 * only here, so they never read the same state differently. JSON is touched only at this
 * boundary; what counts as a usable value is decided by
 * {@link module:lib/theme/validateTheme.validateThemeOptions} alone.
 */

import type { UserTheme } from './themeTypes';
import { validateThemeOptions } from './validateTheme';

/**
 * Turns the value of the theme state into a user theme. An unset, corrupt or invalid state
 * yields the empty theme — reading must never fail, whatever the state holds.
 *
 * @param raw - The state's `val`.
 */
export function parseStoredTheme(raw: unknown): UserTheme {
    if (typeof raw !== 'string' || !raw) {
        return {};
    }
    try {
        const result = validateThemeOptions(JSON.parse(raw));
        return result.isValid ? (result.theme ?? {}) : {};
    } catch {
        return {};
    }
}
