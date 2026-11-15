/**
 * Object / path utilities for the structured theme form.
 *
 * @module lib/theme/themeUtils
 * @remarks
 * The form reads and writes deeply nested values inside a {@link UserTheme}
 * via dot-separated paths (e.g. `"palette.primary.main"`). These helpers keep
 * the in-memory object immutable and pruned: clearing a field removes the key
 * and any now-empty parent objects, so an empty form serializes to `{}`.
 */

import type { CornerRadii, UserTheme } from './themeTypes';

/**
 * Checks whether a value is a plain object (not an array and not `null`).
 */
export function isPlainObject(value: unknown): value is Record<string, unknown> {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
}

/** The keys of an object that hold a value: what its JSON text would list. */
const heldKeys = (obj: Record<string, unknown>): string[] => Object.keys(obj).filter(key => obj[key] !== undefined);

/** Content equality of two JSON values; the sequence counts in a list, not among the keys of an object. */
function sameValue(a: unknown, b: unknown): boolean {
    if (isPlainObject(a) && isPlainObject(b)) {
        const keys = heldKeys(a);
        return keys.length === heldKeys(b).length && keys.every(key => sameValue(a[key], b[key]));
    }
    if (Array.isArray(a) && Array.isArray(b)) {
        return a.length === b.length && a.every((one, index) => sameValue(one, b[index]));
    }
    return a === b;
}

/**
 * Content equality of two themes (themes are plain JSON objects): the one notion of "the same
 * theme" — whether the studio's draft is changed, and whether a Theme-Auftrag has to write.
 * The sequence of the keys does not count: a theme written by hand lists them in its own.
 */
export const sameTheme = (a: UserTheme, b: UserTheme): boolean => sameValue(a, b);

/**
 * Reads a deeply nested value by dot-separated path.
 *
 * @returns The value at `path`, or `undefined` when any segment is missing.
 * @example
 * getNestedValue({ palette: { primary: { main: '#fff' } } }, 'palette.primary.main')
 * // → '#fff'
 */
export function getNestedValue<T>(obj: unknown, path: string): T | undefined {
    if (!isPlainObject(obj) || !path) {
        return undefined;
    }
    const segments = path.split('.');
    let current: unknown = obj;
    for (const segment of segments) {
        if (!isPlainObject(current) || !(segment in current)) {
            return undefined;
        }
        current = current[segment];
    }
    return current as T;
}

/**
 * The single corner-radius ceiling shared by the studio sliders and the theme
 * schema. One constant, one truth: an
 * out-of-range radius is a validation ERROR — it blocks Save, and a stored one
 * falls away at load — so slider and schema must never drift apart (they once
 * did: 32 vs. 64).
 */
export const CORNER_RADIUS_MAX = 96;

/**
 * The ranges (px) of the number controls of the Theme Studio — the one place they are written.
 *
 * @remarks
 * Read by the studio's sliders, by the Theme-Auftrag (it takes what the studio would save,
 * {@link module:ThemeConfigWizard/themeOrder}) and by the test that holds the KI-Leitfaden and
 * the description of the theme state to them. The theme schema is wider on purpose where a
 * hand-written theme may go further (`typography.fontSize` 1–100, any `spacing`); only the
 * radius ends where the schema ends ({@link CORNER_RADIUS_MAX}).
 */
export const THEME_CONTROL_RANGES = {
    fontSize: { min: 8, max: 24 },
    cornerRadius: { min: 0, max: CORNER_RADIUS_MAX },
    spacing: { min: 0, max: 16 },
} as const;

/** The radius (px) of a corner without a stored value — resolution and studio alike. */
export const DEFAULT_CORNER_RADIUS = 4;

/**
 * Builds a CSS 4-value `border-radius` string (`TL TR BR BL`) from corner radii.
 *
 * @returns The CSS string, or `undefined` when `corners` is unset (so no override
 * is applied and MUI's `shape.borderRadius` governs). Missing individual radii
 * default to {@link DEFAULT_CORNER_RADIUS}.
 */
export function buildCornerRadiusCss(corners: CornerRadii | undefined): string | undefined {
    if (!corners) {
        return undefined;
    }
    const tl = corners.topLeft ?? DEFAULT_CORNER_RADIUS;
    const tr = corners.topRight ?? DEFAULT_CORNER_RADIUS;
    const br = corners.bottomRight ?? DEFAULT_CORNER_RADIUS;
    const bl = corners.bottomLeft ?? DEFAULT_CORNER_RADIUS;
    return `${tl}px ${tr}px ${br}px ${bl}px`;
}

/**
 * Returns a shallow-cloned {@link UserTheme} with `path` set to `value`.
 *
 * @remarks
 * When `value` is `undefined`, the key is removed and now-empty parent objects
 * are pruned — so clearing the last value in a branch yields a clean `{}` and
 * never serializes to `{ "palette": { "primary": { "main": undefined } } }`.
 *
 * Only the object nodes along the path are cloned (copy-on-write); sibling
 * branches keep their identity.
 */
export function setNestedValue(obj: UserTheme, path: string, value: unknown): UserTheme {
    if (!path) {
        return obj;
    }
    const root: Record<string, unknown> = isPlainObject(obj) ? { ...obj } : {};
    if (value === undefined) {
        deletePath(root, path.split('.'));
    } else {
        setPath(root, path.split('.'), value);
    }
    return root;
}

/** Sets a value at a list of segments, cloning each object node along the way. */
function setPath(target: Record<string, unknown>, segments: string[], value: unknown): void {
    const [head, ...rest] = segments;
    if (rest.length === 0) {
        target[head] = value;
        return;
    }
    const existing = target[head];
    const child = isPlainObject(existing) ? { ...existing } : {};
    target[head] = child;
    setPath(child, rest, value);
}

/** Removes the value at a list of segments and prunes empty parent objects. */
function deletePath(target: Record<string, unknown>, segments: string[]): void {
    const [head, ...rest] = segments;
    if (rest.length === 0) {
        delete target[head];
        return;
    }
    const existing = target[head];
    if (!isPlainObject(existing)) {
        return;
    }
    const child = { ...existing };
    deletePath(child, rest);
    // Prune the branch when it became empty after the deletion.
    if (Object.keys(child).length === 0) {
        delete target[head];
    } else {
        target[head] = child;
    }
}
