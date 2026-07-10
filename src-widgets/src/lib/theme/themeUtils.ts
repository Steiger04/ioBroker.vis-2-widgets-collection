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

import type { UserTheme } from './themeTypes';

/**
 * Checks whether a value is a plain object (not an array and not `null`).
 */
export function isPlainObject(value: unknown): value is Record<string, unknown> {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
}

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
    return root as UserTheme;
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
