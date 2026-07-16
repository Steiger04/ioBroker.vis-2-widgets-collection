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
 * One inlined woff2 face of a Google Font loaded by name in the wizard.
 *
 * @remarks
 * The configurator fetches the font from `fonts.googleapis.com` once, base64-
 * encodes the latin 400/700 woff2, and stores it here so it is permanent,
 * shared across clients, and offline-capable after the one-time fetch.
 */
export interface GoogleFontFace {
    /** Numeric CSS font-weight (e.g. `400`, `700`). */
    weight: number;
    /** Inlined woff2 data URI (`data:font/woff2;base64,…`). */
    data: string;
}

/**
 * Map of Google Font family name → its inlined woff2 faces.
 *
 * @remarks
 * Keyed by the family name (e.g. `"Roboto"`); the runtime injects a `@font-face`
 * per entry. Lives on {@link UserTheme.googleFonts} so it persists in the ioBroker
 * theme state alongside the rest of the theme.
 */
export type GoogleFontsMap = Record<string, GoogleFontFace[]>;

/**
 * A user-supplied partial MUI theme, edited via the structured form.
 *
 * @remarks
 * Mirrors MUI's `ThemeOptions` but every field is optional — the form only
 * ever produces a subset, and cleared fields are pruned before serialization.
 * `googleFonts` is a non-MUI extension holding Google Fonts loaded by name.
 */
export type UserTheme = Partial<ThemeOptions> & {
    /** Google Fonts loaded by name, stored as inlined woff2 data URIs. */
    googleFonts?: GoogleFontsMap;
};

/**
 * One issue found while validating a {@link UserTheme}.
 */
export interface ThemeValidationIssue {
    /** Dot-separated path into the theme object, e.g. `"palette.primary.main"`. */
    path: string;
    /** `error` blocks saving / falls back to `{}`; `warning` is non-blocking. */
    severity: 'error' | 'warning';
    /** Human-readable message (English, used as a fallback). */
    message: string;
    /** Machine-readable code for localized mapping in the UI (e.g. `invalid-color`). */
    code?: string;
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
