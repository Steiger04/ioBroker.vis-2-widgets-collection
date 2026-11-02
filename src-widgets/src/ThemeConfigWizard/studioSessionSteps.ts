/**
 * The pure decisions of the Studio session (ADR-0020 addendum 2026-11-02).
 *
 * @module ThemeConfigWizard/studioSessionSteps
 * @remarks
 * Policy only, no React and no IO: {@link module:ThemeConfigWizard/useStudioSession} owns the
 * firing conditions (when to load, mirror, save) and calls these steps for the answers —
 * the split the echarts editor lifecycle uses (`lifecycleGuards`, ADR-0048).
 */

import { reservedCssVarPrefixIssues, uncomputableColorIssues } from '../lib/theme/resolveCollectionTheme';
import type { ThemeValidationResult, UserTheme } from '../lib/theme/themeTypes';
import { validateThemeOptions } from '../lib/theme/validateTheme';

/** Content equality of two drafts (the drafts are plain JSON objects). */
const sameTheme = (a: UserTheme, b: UserTheme): boolean => JSON.stringify(a) === JSON.stringify(b);

/**
 * Whether the theme loaded from the state may replace the draft: only while the draft still
 * equals the seed it started from (untouched) — otherwise edits made during the round-trip
 * would be clobbered.
 *
 * @param draft - The current draft.
 * @param seed - The session's seed (the last known theme), `null` when there was none.
 */
export const shouldRebase = (draft: UserTheme, seed: UserTheme | null): boolean => sameTheme(draft, seed ?? {});

/**
 * Whether the draft differs from the last loaded/saved snapshot — undoing back to the start
 * reads clean again.
 */
export const isDirty = (draft: UserTheme, snapshot: UserTheme): boolean => !sameTheme(draft, snapshot);

/** Save needs a valid draft with something to commit, and no save already in flight. */
export const canSave = ({ valid, dirty, saving }: { valid: boolean; dirty: boolean; saving: boolean }): boolean =>
    valid && dirty && !saving;

/**
 * Validates a draft: the theme schema plus the values the canvas resolution would replace
 * although the schema accepts them — an accent `main` MUI cannot compute with (the field
 * inherits) and the CSS-variables prefix `mui`, owned by the vis-2 editor (the collection uses
 * `vis2c` instead). A value the canvas silently replaces must not pass as valid — it shows as an
 * error and blocks Save. Stricter than the runtime on purpose: a stored theme with such a value
 * still loads (the resolution replaces it there), the studio only refuses to save one.
 *
 * @param draft - The current draft.
 */
export function validateDraft(draft: UserTheme): ThemeValidationResult {
    const schema = validateThemeOptions(draft);
    const replaced = [...uncomputableColorIssues(draft), ...reservedCssVarPrefixIssues(draft)];
    if (replaced.length === 0) {
        return schema;
    }
    return { isValid: false, issues: [...schema.issues, ...replaced] };
}

/**
 * Turns a stored state value into a draft. An unset, corrupt or invalid state yields the
 * empty theme — the studio must open on any state.
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
