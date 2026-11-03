/**
 * The notice host's state (ADR-0067 addendum 2026-11-03, ADR-0099): ONE current advisory, bound
 * to the editor step that raised it.
 *
 * @module EchartsCollectionWidget/editor/useEditorNotice
 * @remarks
 * „Rückgängig" on the snackbar calls the history's plain `undo()` — which reverts the LATEST
 * step. The notice therefore lives only as long as its step is the latest one: it remembers the
 * working copy its step produced and dismisses itself on the first later change (an edit, a
 * keyboard undo/redo, another event). Undo can never hit a foreign step.
 *
 * A new advisory replaces the previous one; the token re-keys the snackbar so its auto-hide
 * restarts.
 */
import { useCallback, useEffect, useRef, useState } from 'react';

import type { StructureAdvisory } from './structureEvents';

/** The current notice: the advisory plus the re-key token. */
export interface NoticeEntry {
    advisory: StructureAdvisory;
    token: number;
}

export interface EditorNoticeHost {
    notice: NoticeEntry | null;
    /** Receives a structure event's advisory — call it right after the event's `set()`. */
    push: (advisory: StructureAdvisory) => void;
    /** Dismiss (closed, undone, or a fresh load). */
    clear: () => void;
}

/**
 * @param state - The working copy (identity changes on every committed step).
 */
export function useEditorNotice<S>(state: S): EditorNoticeHost {
    const [notice, setNotice] = useState<NoticeEntry | null>(null);
    // The working copy right after the notice's step (null while no notice is shown).
    const stepState = useRef<S | null>(null);
    const push = useCallback(
        (advisory: StructureAdvisory): void => setNotice(n => ({ advisory, token: (n?.token ?? 0) + 1 })),
        [],
    );
    const clear = useCallback((): void => setNotice(null), []);
    const token = notice?.token;
    // Capture the step's result. The event's set() and push() batch into the same render, so the
    // state seen with a new token IS the state the step produced. Declared BEFORE the dismissal
    // effect: on that render the capture runs first and the comparison below sees no change.
    useEffect(() => {
        stepState.current = token === undefined ? null : state;
        // eslint-disable-next-line react-hooks/exhaustive-deps -- only a new notice re-captures
    }, [token]);
    // Any later change makes the notice's step no longer the latest one — dismiss.
    useEffect(() => {
        if (stepState.current !== null && state !== stepState.current) {
            stepState.current = null;
            setNotice(null);
        }
    }, [state]);
    return { notice, push, clear };
}
