/**
 * Generic bounded undo/redo history for configurator working copies (ADR-0038).
 *
 * @module lib/useEditorHistory
 * @remarks
 * Generalised from the theme studio's draft history (ADR-0020): a bounded linear snapshot
 * stack over an immutable working copy — the theme studio's `UserTheme` draft and the echarts
 * configurator's `EditorState` both use it. Snapshots are cheap references (callers update
 * immutably), past/present/future live in ONE state object so every transition is a single
 * atomic update (StrictMode-safe: no nested setState calls inside updaters).
 *
 * Continuous edits (slider drags, text typing) would flood the stack with one entry per
 * intermediate value. Callers therefore pass a `coalesceKey`: consecutive `set` calls with the
 * same key inside {@link COALESCE_WINDOW_MS} replace the present snapshot instead of pushing,
 * so one drag = one undo step. Discrete edits (preset apply, reset, toggle clicks) pass no key
 * and always push. A fresh `set` clears the redo branch (standard linear history).
 *
 * The transitions live in the pure {@link historyReducer} — tested directly, the hook is a thin
 * useState wrapper around it.
 */

import { useCallback, useEffect, useRef, useState } from 'react';

/** Maximum number of undo steps kept. */
export const HISTORY_LIMIT = 50;

/** Time window in which same-key edits coalesce into one history entry. */
export const COALESCE_WINDOW_MS = 800;

/** Past/present/future as one atomic state object. */
export interface HistoryState<T> {
    past: T[];
    present: T;
    future: T[];
}

/** Bookkeeping for coalescing — write-only, never rendered. */
export interface LastEdit {
    key: string;
    time: number;
}

/** A new value, or an updater computing it from the previous present. */
export type EditorHistoryInput<T> = T | ((prev: T) => T);

/** Pure history transitions — the reducer is the tested seam, the hook only feeds it. */
export type HistoryAction<T> =
    | { type: 'set'; next: EditorHistoryInput<T>; coalesce: boolean }
    | { type: 'undo' }
    | { type: 'redo' }
    | { type: 'rebase'; value: T };

/**
 * True when this edit coalesces into the previous one: same key, within the window.
 * Pure so the window logic is testable without timers.
 */
export const shouldCoalesce = (lastEdit: LastEdit | null, key: string, now: number): boolean =>
    lastEdit !== null && lastEdit.key === key && now - lastEdit.time < COALESCE_WINDOW_MS;

/** One bounded, linear-history transition. */
export function historyReducer<T>(state: HistoryState<T>, action: HistoryAction<T>): HistoryState<T> {
    switch (action.type) {
        case 'set': {
            const resolved =
                typeof action.next === 'function' ? (action.next as (prev: T) => T)(state.present) : action.next;
            return action.coalesce
                ? { ...state, present: resolved }
                : {
                      past: [...state.past.slice(-(HISTORY_LIMIT - 1)), state.present],
                      present: resolved,
                      future: [],
                  };
        }
        case 'undo': {
            if (state.past.length === 0) {
                return state;
            }
            return {
                past: state.past.slice(0, -1),
                present: state.past[state.past.length - 1],
                future: [state.present, ...state.future],
            };
        }
        case 'redo': {
            if (state.future.length === 0) {
                return state;
            }
            return {
                past: [...state.past.slice(-(HISTORY_LIMIT - 1)), state.present],
                present: state.future[0],
                future: state.future.slice(1),
            };
        }
        case 'rebase':
            return { past: [], present: action.value, future: [] };
    }
}

/** Result of {@link useEditorHistory}. */
export interface EditorHistory<T> {
    /** The current working copy. */
    present: T;
    /**
     * Commits a new value (a value or an updater — the updater form is safe for rapid
     * back-to-back edits like slider drags, where a captured value could go stale).
     * Same `coalesceKey` within the window replaces instead of pushing.
     */
    set: (next: EditorHistoryInput<T>, coalesceKey?: string) => void;
    /** Steps one entry back (no-op at the stack floor). */
    undo: () => void;
    /** Steps one entry forward (no-op at the stack top). */
    redo: () => void;
    /** Whether an undo step is available. */
    canUndo: boolean;
    /** Whether a redo step is available. */
    canRedo: boolean;
    /** Rebases the history to a fresh value without an entry (load/hydrate). */
    rebase: (value: T) => void;
}

/**
 * ⚠ The hook's RESULT OBJECT has a new identity every render — only its callbacks
 * (`set`/`undo`/`redo`/`rebase`) are stable. Never put the result object into an effect's
 * dependency array: the effect would re-run after every edit (a `rebase` there would wipe
 * each edit). Depend on the callbacks, or on nothing with an explanatory lint disable.
 */

/**
 * True when a keyboard event originates from an editable element — configurators skip their
 * Ctrl+Z/Ctrl+Y shortcuts there so the field's own native undo wins.
 */
export const isEditableTarget = (target: EventTarget | null): boolean => {
    if (!(target instanceof HTMLElement)) {
        return false;
    }
    const tag = target.tagName;
    return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || target.isContentEditable;
};

/**
 * The configurators' shared Ctrl+Z / Ctrl+Shift+Z / Ctrl+Y binding over an editor history —
 * the keyboard half of the undo/redo contract both configurators share (ADR-0038). While the
 * user types in an input the field's own native undo wins (see {@link isEditableTarget}).
 *
 * @param history - The history to drive.
 * @param active - Whether the owning editor is open (no listener while closed).
 */
export function useEditorHistoryKeys<T>(history: EditorHistory<T>, active: boolean): void {
    const { undo, redo } = history;
    useEffect(() => {
        if (!active) {
            return;
        }
        const onKey = (event: KeyboardEvent): void => {
            if (isEditableTarget(event.target)) {
                return;
            }
            const mod = event.ctrlKey || event.metaKey;
            if (mod && !event.altKey && event.key.toLowerCase() === 'z') {
                event.preventDefault();
                if (event.shiftKey) {
                    redo();
                } else {
                    undo();
                }
            } else if (mod && !event.altKey && event.key.toLowerCase() === 'y') {
                event.preventDefault();
                redo();
            }
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [active, undo, redo]);
}

/**
 * Manages the undo/redo stacks for a configurator working copy.
 *
 * @param initial - The working copy value before the first load resolves.
 * @returns The history API (see {@link EditorHistory}).
 */
export function useEditorHistory<T>(initial: T): EditorHistory<T> {
    const [state, setState] = useState<HistoryState<T>>({ past: [], present: initial, future: [] });

    // Coalescing state lives in a ref — it is write-only bookkeeping, not render data.
    const lastEdit = useRef<LastEdit | null>(null);

    const set = useCallback((next: EditorHistoryInput<T>, coalesceKey?: string): void => {
        const now = Date.now();
        const coalesce = coalesceKey !== undefined && shouldCoalesce(lastEdit.current, coalesceKey, now);
        lastEdit.current = coalesceKey !== undefined ? { key: coalesceKey, time: now } : null;

        setState(prev => historyReducer(prev, { type: 'set', next, coalesce }));
    }, []);

    const undo = useCallback((): void => {
        lastEdit.current = null;
        setState(prev => historyReducer(prev, { type: 'undo' }));
    }, []);

    const redo = useCallback((): void => {
        lastEdit.current = null;
        setState(prev => historyReducer(prev, { type: 'redo' }));
    }, []);

    const rebase = useCallback((value: T): void => {
        lastEdit.current = null;
        setState(prev => historyReducer(prev, { type: 'rebase', value }));
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

export default useEditorHistory;
