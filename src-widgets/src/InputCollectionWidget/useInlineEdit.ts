/**
 * Inline-edit session for the Input collection widget.
 *
 * @module widgets/InputCollectionWidget/useInlineEdit
 * @remarks
 * One truth for the display-first inline edit: the optimistic backend binding from
 * {@link module:hooks/useValueState} plus the draft/editing state machine around
 * it. The session rules are pure and exported for tests (the useOptimisticNumber /
 * useEditorHistory pattern); the hook itself is a thin React shell. The autofocus
 * effect stays in the component — presentational, it needs the input ref.
 */

import { useCallback, useEffect, useState } from 'react';

import useValueState, { type UseValueStateReturn } from '../hooks/useValueState';

/**
 * Draft sync: adopt the backend value only while NOT editing.
 *
 * @param local - Current local draft.
 * @param rawValue - Raw OID value as plain string.
 * @param editing - Whether the edit session is active.
 * @returns The next draft (the old one when the case does not apply).
 */
export function syncDraft(local: string, rawValue: string, editing: boolean): string {
    return editing ? local : rawValue;
}

/**
 * Blur decision: OK-button mode commits the draft, live mode only leaves.
 *
 * @param showOkButton - Whether the widget shows the OK button (commit mode).
 * @returns The action to take on blur.
 */
export function blurAction(showOkButton: boolean): 'commit' | 'leave' {
    return showOkButton ? 'commit' : 'leave';
}

/**
 * Key decision for the edit session.
 *
 * @param key - The pressed key.
 * @returns `'commit'` for Enter (runs the blur path), `'none'` otherwise.
 * @remarks
 * STATUS QUO (pinned): Escape does nothing yet — the follow-up feat commit turns
 * it into `'cancel'` (leave without committing; the draft then resyncs from the
 * backend value via {@link syncDraft}).
 */
export function keyAction(key: string): 'commit' | 'none' {
    return key === 'Enter' ? 'commit' : 'none';
}

/** Options controlling the session mode. */
export interface UseInlineEditOptions {
    /** OK-button mode: draft commits on blur/Enter/OK; otherwise every keystroke writes (live). */
    showOkButton: boolean;
}

/** Return type for {@link useInlineEdit}. */
export interface UseInlineEditReturn {
    /** Optimistic backend value (raw, may be non-string). */
    value: UseValueStateReturn['value'];
    /** Significant foreign backend change (see ADR-0087). */
    hasBackendChange: boolean;
    /** Whether the edit session is active. */
    editing: boolean;
    /** Current local draft (the TextField value while editing). */
    draft: string;
    /** Starts the session — only when the widget is editable. */
    enterEdit: (editable: boolean) => void;
    /** Draft change: live mode writes through per keystroke, OK mode buffers. */
    handleChange: (value: string) => void;
    /** Blur path: OK mode commits, live mode just leaves. */
    handleBlur: () => void;
    /** Key path: Enter runs the blur path. */
    handleKeyDown: (key: string) => void;
    /** Explicit commit (the OK button). */
    commit: () => void;
}

/** Raw OID value as plain string for the editable TextField. */
const toRawString = (value: UseValueStateReturn['value']): string =>
    value === undefined || value === null ? '' : String(value);

/**
 * Binds the display-first inline edit to an ioBroker state.
 *
 * @param idName - Name of the OID property (e.g. `"oid"`).
 * @param options - Session mode options.
 * @returns The backend value, the session state and the event handlers.
 * @remarks
 * The sync cases, in the order they apply:
 * 1. **Draft sync** — while editing, the draft ignores backend changes (a foreign
 *    change surfaces as `hasBackendChange` instead); after leaving, the draft
 *    adopts the backend value ({@link syncDraft}).
 * 2. **Live mode** — every keystroke goes straight to `updateValue` (optimistic
 *    plus debounced write); OK mode buffers in the draft and commits on
 *    blur/Enter/OK ({@link blurAction}).
 */
const useInlineEdit = (idName: string, options: UseInlineEditOptions): UseInlineEditReturn => {
    const { value: oidValue, updateValue, hasBackendChange } = useValueState(idName);

    const rawValue = toRawString(oidValue);

    const [draft, setDraft] = useState(rawValue);
    const [editing, setEditing] = useState(false);

    // Draft sync: adopt the backend value while not editing.
    useEffect(() => {
        setDraft(prev => syncDraft(prev, rawValue, editing));
    }, [rawValue, editing]);

    const enterEdit = useCallback((editable: boolean): void => {
        if (editable) {
            setEditing(true);
        }
    }, []);

    const commit = useCallback((): void => {
        setEditing(false);
        updateValue(draft);
    }, [draft, updateValue]);

    const handleChange = useCallback(
        (value: string): void => {
            setDraft(value);
            // Live mode writes per keystroke; OK mode writes only on commit.
            if (!options.showOkButton) {
                updateValue(value);
            }
        },
        [options.showOkButton, updateValue],
    );

    const handleBlur = useCallback((): void => {
        if (blurAction(options.showOkButton) === 'commit') {
            commit();
        } else {
            setEditing(false);
        }
    }, [commit, options.showOkButton]);

    const handleKeyDown = useCallback(
        (key: string): void => {
            if (keyAction(key) === 'commit') {
                handleBlur();
            }
        },
        [handleBlur],
    );

    return {
        value: oidValue,
        hasBackendChange,
        editing,
        draft,
        enterEdit,
        handleChange,
        handleBlur,
        handleKeyDown,
        commit,
    };
};

export default useInlineEdit;
