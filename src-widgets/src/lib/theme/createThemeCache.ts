/**
 * Process-wide `createTheme` cache keyed by options signature (ADR-0020).
 *
 * @module lib/theme/createThemeCache
 * @remarks
 * Every canvas widget runs {@link module:hooks/useCollectionTheme} and, on each
 * draft-store flush, builds the effective theme via `createTheme(deepmerge(…))` —
 * N widgets × identical inputs × an expensive theme factory. All widgets merge the
 * SAME host theme, overrides and user draft, so the results are identical too:
 * cache on the stringified options and let the whole canvas share one `Theme`
 * object per signature.
 *
 * Sharing is safe: MUI's `ThemeProvider` treats the theme as immutable. Function
 * values inside the options (e.g. `styleOverrides` callbacks) are part of the key
 * via their source text, so two structurally-different option sets cannot collide.
 * Bounded LRU: at {@link CACHE_LIMIT} entries the oldest is evicted — a slider
 * drag explores many signatures, but only the trailing values stay cached.
 */

import { createTheme } from '@mui/material';
import type { Theme, ThemeOptions } from '@mui/material/styles';

/** Maximum cached themes (oldest evicted beyond this). */
const CACHE_LIMIT = 32;

/** Insertion-ordered signature → theme map (Map doubles as the LRU structure). */
const cache = new Map<string, Theme>();

/** Signature: JSON with function sources inlined (functions would otherwise vanish). */
const signatureOf = (options: ThemeOptions): string =>
    JSON.stringify(options, (_key, value: unknown) => (typeof value === 'function' ? String(value) : value));

/**
 * Like {@link createTheme}, but returns a shared cached instance for structurally
 * identical options. Callers must treat the result as immutable (MUI does).
 *
 * @param options - The merged theme options.
 * @returns The created (or cached) theme.
 */
export function createThemeCached(options: ThemeOptions): Theme {
    const key = signatureOf(options);
    const hit = cache.get(key);
    if (hit) {
        // Refresh recency: delete + re-set moves the entry to the tail.
        cache.delete(key);
        cache.set(key, hit);
        return hit;
    }
    const theme = createTheme(options);
    cache.set(key, theme);
    if (cache.size > CACHE_LIMIT) {
        const oldest = cache.keys().next().value;
        if (oldest !== undefined) {
            cache.delete(oldest);
        }
    }
    return theme;
}

/** Test hook: empties the cache. */
export function clearThemeCache(): void {
    cache.clear();
}
