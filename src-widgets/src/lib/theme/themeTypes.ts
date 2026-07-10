/**
 * Type definitions for the user-supplied MUI theme.
 *
 * @module lib/theme/themeTypes
 * @remarks
 * The structured theme wizard edits a plain {@link UserTheme} object (a partial
 * MUI `ThemeOptions`). These types describe that object model plus the
 * structured result returned by the deep validator
 * ({@link module:lib/theme/validateTheme}).
 */

import type { ThemeOptions } from '@mui/material/styles';

/**
 * A user-supplied partial MUI theme, edited via the structured form.
 *
 * @remarks
 * Mirrors MUI's `ThemeOptions` but every field is optional — the form only
 * ever produces a subset, and cleared fields are pruned before serialization.
 */
export type UserTheme = Partial<ThemeOptions>;

/**
 * One issue found while validating a {@link UserTheme}.
 */
export interface ThemeValidationIssue {
    /** Dot-separated path into the theme object, e.g. `"palette.primary.main"`. */
    path: string;
    /** `error` blocks saving / falls back to `{}`; `warning` is non-blocking. */
    severity: 'error' | 'warning';
    /** Human-readable message (English). */
    message: string;
}

/**
 * Structured result returned by `validateThemeOptions`.
 */
export interface ThemeValidationResult {
    /** `true` when there are no `error`-severity issues. */
    isValid: boolean;
    /** The validated plain object, present only when `isValid` is `true`. */
    theme?: UserTheme;
    /** All issues (errors and warnings), possibly empty. */
    issues: ThemeValidationIssue[];
}

/**
 * Props shared by every structured theme form section.
 */
export interface ThemeFormSectionProps {
    /** Current theme object (immutable; edits go through `onChange`). */
    theme: UserTheme;
    /**
     * Sets a nested value at `path` (dot-separated). A `value` of `undefined`
     * clears the field and prunes now-empty parent objects.
     */
    onChange: (path: string, value: unknown) => void;
    /** Whether the section's accordion is expanded on first render. */
    defaultExpanded?: boolean;
}
