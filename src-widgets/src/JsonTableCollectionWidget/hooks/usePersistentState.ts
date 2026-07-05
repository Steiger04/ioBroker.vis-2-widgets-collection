/**
 * useState backed by localStorage.
 *
 * @module JsonTableCollectionWidget/hooks/usePersistentState
 * @remarks
 * Drop-in replacement for useState that transparently persists the value to
 * localStorage under `key`. The value is restored on mount (surviving a reload
 * such as F5 / Shift+F5) and written through on every change.
 */

import { useState, useEffect, useRef, type Dispatch, type SetStateAction } from 'react';

/** Resolves a useState-style initial value that may be a lazy initializer. */
function resolveInitial<T>(initial: T | (() => T)): T {
    return typeof initial === 'function' ? (initial as () => T)() : initial;
}

/**
 * Persistent state hook.
 *
 * @param key - localStorage key (include a per-widget prefix for isolation).
 * @param initialValue - fallback value or lazy initializer (like useState).
 * @param enabled - when false, neither reads nor writes storage and the hook
 *   degrades to plain useState. Used so that temporarily disabling a feature
 *   (e.g. turning global sorting off) does not overwrite the saved state: while
 *   disabled the hook stops persisting, and on the next false→true transition it
 *   restores from storage instead of overwriting it.
 * @returns The stateful value and its setter (identical shape to useState).
 */
export function usePersistentState<T>(
    key: string,
    initialValue: T | (() => T),
    enabled: boolean = true,
): [T, Dispatch<SetStateAction<T>>] {
    const [state, setState] = useState<T>(() => {
        if (!enabled) {
            return resolveInitial(initialValue);
        }
        try {
            const stored = localStorage.getItem(key);
            if (stored !== null) {
                return JSON.parse(stored) as T;
            }
        } catch {
            // Corrupt JSON or unavailable storage → fall back to initial value.
        }
        return resolveInitial(initialValue);
    });

    // Tracks the previous `enabled` so a false→true transition restores from
    // storage instead of writing the (possibly reset) in-memory value over it.
    const prevEnabledRef = useRef(enabled);

    useEffect(() => {
        const wasEnabled = prevEnabledRef.current;
        prevEnabledRef.current = enabled;

        if (!enabled) {
            return;
        }

        if (!wasEnabled) {
            // Feature (re-)enabled: pick up the persisted value.
            try {
                const stored = localStorage.getItem(key);
                if (stored !== null) {
                    setState(JSON.parse(stored) as T);
                }
            } catch {
                // ignore
            }
            return;
        }

        try {
            localStorage.setItem(key, JSON.stringify(state));
        } catch {
            // Quota exceeded or storage disabled → keep state in memory only.
        }
    }, [key, state, enabled]);

    return [state, setState];
}

export default usePersistentState;
