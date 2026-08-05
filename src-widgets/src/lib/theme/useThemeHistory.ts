/**
 * Undo/redo history for the theme studio draft (ADR-0020).
 *
 * @module lib/theme/useThemeHistory
 * @remarks
 * A bounded linear snapshot stack over the in-memory `UserTheme` draft. The draft is already
 * updated immutably (`setNestedValue` clones), so snapshots are cheap references — no deep
 * copies are taken. Past/present/future live in ONE state object so every transition is a
 * single atomic update (StrictMode-safe: no nested setState calls inside updaters).
 *
 * Continuous edits (slider drags, text typing) would flood the stack with one entry per
 * intermediate value. Callers therefore pass a `coalesceKey` (the theme path being edited):
 * consecutive `set` calls with the same key inside {@link COALESCE_WINDOW_MS} replace the
 * present snapshot instead of pushing a new one, so one drag = one undo step. Discrete edits
 * (preset apply, reset, toggle clicks) pass no key and always push.
 *
 * A fresh `set` clears the redo branch (standard linear history).
 */

import { useCallback, useRef, useState } from 'react';

import type { UserTheme } from './themeTypes';

/** Maximum number of undo steps kept. */
const HISTORY_LIMIT = 50;

/** Time window in which same-key edits coalesce into one history entry. */
const COALESCE_WINDOW_MS = 800;

/** Past/present/future as one atomic state object. */
interface HistoryState {
    past: UserTheme[];
    present: UserTheme;
    future: UserTheme[];
}

/** A new draft value, or an updater computing it from the previous present. */
export type ThemeDraftInput = UserTheme | ((prev: UserTheme) => UserTheme);

/** Result of {@link useThemeHistory}. */
export interface ThemeHistory {
    /** The current draft. */
    present: UserTheme;
    /**
     * Commits a new draft (a value or an updater — the updater form is safe for rapid
     * back-to-back edits like slider drags, where a captured value could go stale).
     * Same `coalesceKey` within the window replaces instead of pushing.
     */
    set: (next: ThemeDraftInput, coalesceKey?: string) => void;
    /** Steps one entry back (no-op at the stack floor). */
    undo: () => void;
    /** Steps one entry forward (no-op at the stack top). */
    redo: () => void;
    /** Whether an undo step is available. */
    canUndo: boolean;
    /** Whether a redo step is available. */
    canRedo: boolean;
    /** Rebases the history to a fresh value without an entry (load/hydrate). */
    rebase: (value: UserTheme) => void;
}

/**
 * Manages the undo/redo stacks for the studio draft.
 *
 * @param initial - The draft value before the first load resolves.
 * @returns The history API (see {@link ThemeHistory}).
 */
export function useThemeHistory(initial: UserTheme): ThemeHistory {
    const [state, setState] = useState<HistoryState>({ past: [], present: initial, future: [] });

    // Coalescing state lives in a ref — it is write-only bookkeeping, not render data.
    const lastEdit = useRef<{ key: string; time: number } | null>(null);

    const set = useCallback((next: ThemeDraftInput, coalesceKey?: string): void => {
        const now = Date.now();
        const coalesce =
            coalesceKey !== undefined &&
            lastEdit.current !== null &&
            lastEdit.current.key === coalesceKey &&
            now - lastEdit.current.time < COALESCE_WINDOW_MS;
        lastEdit.current = coalesceKey !== undefined ? { key: coalesceKey, time: now } : null;

        setState(prev => {
            const resolved = typeof next === 'function' ? next(prev.present) : next;
            return coalesce
                ? { ...prev, present: resolved }
                : {
                      past: [...prev.past.slice(-(HISTORY_LIMIT - 1)), prev.present],
                      present: resolved,
                      future: [],
                  };
        });
    }, []);

    const undo = useCallback((): void => {
        lastEdit.current = null;
        setState(prev => {
            if (prev.past.length === 0) {
                return prev;
            }
            return {
                past: prev.past.slice(0, -1),
                present: prev.past[prev.past.length - 1],
                future: [prev.present, ...prev.future],
            };
        });
    }, []);

    const redo = useCallback((): void => {
        lastEdit.current = null;
        setState(prev => {
            if (prev.future.length === 0) {
                return prev;
            }
            return {
                past: [...prev.past.slice(-(HISTORY_LIMIT - 1)), prev.present],
                present: prev.future[0],
                future: prev.future.slice(1),
            };
        });
    }, []);

    const rebase = useCallback((value: UserTheme): void => {
        lastEdit.current = null;
        setState({ past: [], present: value, future: [] });
    }, []);

    return {
        present: state.present,
        set,
        undo,
        redo,
        canUndo: state.past.length > 0,
        canRedo: state.future.length > 0,
        rebase,
    };
}

export default useThemeHistory;
