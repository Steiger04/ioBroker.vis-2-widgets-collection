/**
 * The pure decisions of the Studio session (ADR-0020 addendum 2026-11-02).
 *
 * @module ThemeConfigWizard/studioSessionSteps
 * @remarks
 * Policy only, no React and no IO: {@link module:ThemeConfigWizard/useStudioSession} owns the
 * firing conditions (when to load, mirror, save) and calls these steps for the answers —
 * the split the echarts editor lifecycle uses (`lifecycleGuards`, ADR-0048).
 */

import {
    AUGMENTED_SLOTS,
    HOST_CSS_VAR_PREFIX,
    isComputableColor,
    ownCssVarPrefix,
} from '../lib/theme/resolveCollectionTheme';
import type { ThemeValidationIssue, ThemeValidationResult, UserTheme } from '../lib/theme/themeTypes';
import { isPlainObject } from '../lib/theme/themeUtils';
import { isValidCssColor, validateThemeOptions } from '../lib/theme/validateTheme';

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
 * Field-level issues for the colours the resolution drops although the schema accepts them: an
 * augmented slot's `main` that is a valid CSS colour but not computable by MUI (named colours,
 * `transparent`) — the resolution's own predicate decides. Colours the browser rejects are left
 * to the schema validator, which reports them already — so the two never report the same value
 * twice.
 *
 * @param theme - The user theme (typically the studio draft).
 * @returns One `uncomputable-color` error per such `palette.<slot>.main`.
 */
export function uncomputableColorIssues(theme: UserTheme): ThemeValidationIssue[] {
    const palette: unknown = theme.palette;
    if (!isPlainObject(palette)) {
        return [];
    }
    const issues: ThemeValidationIssue[] = [];
    for (const slot of AUGMENTED_SLOTS) {
        const slotValue = palette[slot];
        const main = isPlainObject(slotValue) ? slotValue.main : undefined;
        if (typeof main === 'string' && isValidCssColor(main) && !isComputableColor(main)) {
            const path = `palette.${slot}.main`;
            issues.push({
                path,
                severity: 'error',
                code: 'uncomputable-color',
                message: `Value at "${path}" is a colour MUI cannot compute with (use hex, rgb() or hsl()).`,
            });
        }
    }
    return issues;
}

/**
 * Field-level issue for the CSS-variables prefix the host editor owns (`mui`): the resolution
 * replaces it by the collection prefix, so the studio must not save it as if it applied.
 *
 * @param theme - The user theme (typically the studio draft).
 * @returns One `reserved-css-var-prefix` error at `cssVariables.cssVarPrefix`, or none.
 */
export function reservedCssVarPrefixIssues(theme: UserTheme): ThemeValidationIssue[] {
    const prefix = ownCssVarPrefix(theme);
    if (prefix !== HOST_CSS_VAR_PREFIX) {
        return [];
    }
    const path = 'cssVariables.cssVarPrefix';
    return [
        {
            path,
            severity: 'error',
            code: 'reserved-css-var-prefix',
            message: `Value at "${path}" is reserved by the vis-2 editor (its own variables use "--${prefix}-").`,
        },
    ];
}

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
