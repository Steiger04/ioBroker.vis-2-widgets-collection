/**
 * React hook returning the current in-progress theme draft.
 *
 * @module hooks/useDraftTheme
 * @remarks
 * Thin {@link useSyncExternalStore} wrapper over the
 * {@link module:lib/theme/draftThemeStore} singleton. Returns `null` when no
 * draft is active (studio panel closed) so callers fall back to the persisted
 * theme. The store guarantees a tearing-safe snapshot (see draftThemeStore).
 */

import { useSyncExternalStore } from 'react';
import { getDraftTheme, subscribe } from '../lib/theme/draftThemeStore';
import type { UserTheme } from '../lib/theme/themeTypes';

/**
 * Reads the active theme draft, re-rendering when it changes.
 *
 * @returns The current draft, or `null` when the studio panel is closed.
 */
export function useDraftTheme(): UserTheme | null {
    return useSyncExternalStore(subscribe, getDraftTheme);
}

export default useDraftTheme;
