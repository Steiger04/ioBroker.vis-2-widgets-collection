/**
 * The Studio session — one editing run of the Theme Studio, from opening to Save or discard
 * (ADR-0020 addendum 2026-11-02, glossary "Studio session").
 *
 * @module ThemeConfigWizard/useStudioSession
 * @remarks
 * Owns the draft lifecycle the studio panel only renders: the seed from the last known theme,
 * the background load (rebased onto the draft only while it is untouched), the canvas mirror
 * through {@link module:lib/theme/draftThemeStore} with the session's SINGLE throttle (100 ms,
 * leading + trailing — the store itself only guards against tearing), dirty against the last
 * loaded/saved snapshot, save and discard, the browser's leave-page warning while dirty, and
 * the undo/redo keyboard binding over the draft's editor history (ADR-0038).
 *
 * The session lives exactly as long as the component calling this hook: mount starts it,
 * unmount ends it — fresh state per session. Invariant: **when the session ends, the draft
 * leaves the canvas** (discard, unmount). The one exception is a successful save: the
 * per-widget save handoff in {@link module:hooks/useCollectionTheme.useCollectionTheme}
 * retires the draft once the stored state echoes it (clearing earlier would flicker the
 * canvas back to the old theme first). The decisions live in
 * {@link module:ThemeConfigWizard/studioSessionSteps}; this hook owns the firing conditions.
 *
 * ⚠ The RESULT OBJECT has a new identity every render (only its callbacks are stable) — never
 * put it into a dependency array (same contract as `useEditorHistory`).
 */

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { Connection } from '@iobroker/adapter-react-v5';

import { THEME_STATE_ID } from '../lib/constants';
import { clearDraftTheme, setDraftTheme } from '../lib/theme/draftThemeStore';
import { getLastKnownTheme, setLastKnownTheme } from '../lib/theme/lastKnownTheme';
import type { ThemeValidationResult, UserTheme } from '../lib/theme/themeTypes';
import { setNestedValue } from '../lib/theme/themeUtils';
import { useEditorHistory, useEditorHistoryKeys } from '../lib/useEditorHistory';
import { canSave as canSaveStep, isDirty, parseStoredTheme, shouldRebase, validateDraft } from './studioSessionSteps';

/** Minimum gap between two draft pushes to the canvas (the session's single throttle, ADR-0020). */
const DRAFT_FLUSH_MS = 100;

/** The session's public surface — everything the studio chrome reads or triggers. */
export interface StudioSession {
    /** The current draft (the present of the editor history). */
    draft: UserTheme;
    /** The draft's validation result (re-run on every change). */
    validation: ThemeValidationResult;
    /** Whether the draft differs from the last loaded/saved theme (undo-to-start is clean). */
    dirty: boolean;
    /** Whether Save is allowed: valid, dirty and no save in flight. */
    canSave: boolean;
    /** True while the first load runs without a seed (nothing to show yet). */
    loading: boolean;
    /** True while a save is in flight. */
    saving: boolean;
    /** Whether the last save attempt failed (reset by the next attempt). */
    saveFailed: boolean;
    /** Sets one theme path; consecutive edits of the same path coalesce (one drag = one undo step). */
    edit: (path: string, value: unknown) => void;
    /** Applies a whole-draft transformation as ONE discrete undo step (presets, reset). */
    apply: (next: (prev: UserTheme) => UserTheme) => void;
    /**
     * Writes the draft to the theme state. Resolves `true` on success (the session's work is
     * done — the caller closes), `false` when refused or failed.
     */
    save: () => Promise<boolean>;
    /** Ends the session without saving: the draft leaves the canvas, no further pushes. */
    discard: () => void;
    canUndo: boolean;
    canRedo: boolean;
    undo: () => void;
    redo: () => void;
}

/** The canvas mirror's imperative bookkeeping (no render data). */
interface CanvasMirror {
    /** `Date.now()` of the last push to the draft store. */
    lastPush: number;
    /** The pending trailing push, if any. */
    timer: ReturnType<typeof setTimeout> | null;
    /** The session ended — nothing reaches the canvas any more. */
    ended: boolean;
    /** The last push was the saved draft; the save handoff retires it, not the session end. */
    handedOff: boolean;
}

/**
 * Runs one Studio session over the theme state.
 *
 * @param socket - ioBroker connection for reading and writing the theme state.
 */
export function useStudioSession(socket: Connection): StudioSession {
    // Instant open (ADR-0020): the last known theme seeds the draft synchronously; without
    // one the session shows a spinner until the first load answers.
    const [seed] = useState(getLastKnownTheme);
    const history = useEditorHistory<UserTheme>(seed ?? {});
    const draft = history.present;
    // Latest draft for imperative readers (load guard, trailing push).
    const draftRef = useRef(draft);
    draftRef.current = draft;
    // The value the draft was last (re)based on — the load replaces only a draft still equal to it.
    const baseRef = useRef<UserTheme | null>(seed);
    const [snapshot, setSnapshot] = useState<UserTheme>(seed ?? {});
    const [loading, setLoading] = useState(!seed);
    const [saving, setSaving] = useState(false);
    const [saveFailed, setSaveFailed] = useState(false);
    // The stable history callbacks (the history result object changes identity every render).
    const { set, rebase } = history;

    // Background load: revalidate against the stored theme.
    useEffect(() => {
        let active = true;
        socket
            .getState(THEME_STATE_ID)
            .then((state: ioBroker.State | null | undefined) => {
                if (!active) {
                    return;
                }
                const loaded = parseStoredTheme(state?.val);
                setLastKnownTheme(loaded);
                setSnapshot(loaded);
                if (shouldRebase(draftRef.current, baseRef.current)) {
                    baseRef.current = loaded;
                    rebase(loaded);
                }
            })
            .catch((e: unknown) => console.error(`Cannot read theme state ${THEME_STATE_ID}: ${e}`))
            .finally(() => {
                if (active) {
                    setLoading(false);
                }
            });
        return () => {
            active = false;
        };
    }, [socket, rebase]);

    const mirrorRef = useRef<CanvasMirror>({ lastPush: 0, timer: null, ended: false, handedOff: false });
    const push = useCallback((value: UserTheme): void => {
        mirrorRef.current.lastPush = Date.now();
        setDraftTheme(value);
    }, []);
    const cancelTrailing = useCallback((): void => {
        const mirror = mirrorRef.current;
        if (mirror.timer) {
            clearTimeout(mirror.timer);
            mirror.timer = null;
        }
    }, []);
    // The end invariant: the draft leaves the canvas — unless the save handoff owns it.
    const end = useCallback((): void => {
        const mirror = mirrorRef.current;
        cancelTrailing();
        if (!mirror.ended) {
            mirror.ended = true;
            if (!mirror.handedOff) {
                clearDraftTheme();
            }
        }
    }, [cancelTrailing]);

    // Unmount ends the session. The reset on mount keeps a StrictMode re-mount alive (declared
    // before the mirror effect, so the re-run mirror pushes again).
    useEffect(() => {
        mirrorRef.current.ended = false;
        return end;
    }, [end]);

    // Canvas mirror: every push re-themes every canvas widget, so a slider drag must not flood
    // the store at pointermove rate — one push per DRAFT_FLUSH_MS, leading + trailing; the
    // trailing push reads the latest draft so the final value always lands.
    useEffect(() => {
        const mirror = mirrorRef.current;
        if (mirror.ended) {
            return;
        }
        // A change after a save is a new edit: the session end owns the canvas again.
        mirror.handedOff = false;
        const wait = DRAFT_FLUSH_MS - (Date.now() - mirror.lastPush);
        if (wait <= 0) {
            push(draft);
        } else if (!mirror.timer) {
            mirror.timer = setTimeout(() => {
                mirror.timer = null;
                push(draftRef.current);
            }, wait);
        }
    }, [draft, push]);

    const validation = useMemo(() => validateDraft(draft), [draft]);
    const dirty = useMemo(() => isDirty(draft, snapshot), [draft, snapshot]);
    const canSave = canSaveStep({ valid: validation.isValid, dirty, saving });

    // Leaving the page (reload, tab close, navigation) would lose unsaved edits without a
    // prompt — the browser's native leave-page warning guards them while the draft is dirty.
    useEffect(() => {
        if (!dirty) {
            return;
        }
        const onBeforeUnload = (event: BeforeUnloadEvent): void => {
            event.preventDefault();
            // Legacy browsers only show the prompt when returnValue is set.
            event.returnValue = '';
        };
        window.addEventListener('beforeunload', onBeforeUnload);
        return () => window.removeEventListener('beforeunload', onBeforeUnload);
    }, [dirty]);

    const edit = useCallback(
        (path: string, value: unknown): void => set(prev => setNestedValue(prev, path, value), path),
        [set],
    );
    const apply = useCallback((next: (prev: UserTheme) => UserTheme): void => set(next), [set]);

    const save = useCallback(async (): Promise<boolean> => {
        if (!canSave) {
            return false;
        }
        setSaving(true);
        setSaveFailed(false);
        // The final draft reaches the canvas NOW, unthrottled: a trailing push still pending
        // would die with the session, stranding the previous draft — which the save handoff
        // never retires, because it only matches the saved value.
        cancelTrailing();
        push(draft);
        try {
            await socket.setState(THEME_STATE_ID, JSON.stringify(draft));
            setLastKnownTheme(draft);
            setSnapshot(draft);
            mirrorRef.current.handedOff = true;
            return true;
        } catch (e: unknown) {
            setSaveFailed(true);
            console.error(`Cannot write theme state ${THEME_STATE_ID}: ${e}`);
            return false;
        } finally {
            setSaving(false);
        }
    }, [canSave, cancelTrailing, push, draft, socket]);

    // The shared configurator undo/redo binding (Ctrl+Z / Ctrl+Shift+Z / Ctrl+Y, ADR-0038) —
    // one holder of the stack: the keyboard lives here too.
    useEditorHistoryKeys(history, true);

    return {
        draft,
        validation,
        dirty,
        canSave,
        loading,
        saving,
        saveFailed,
        edit,
        apply,
        save,
        discard: end,
        canUndo: history.canUndo,
        canRedo: history.canRedo,
        undo: history.undo,
        redo: history.redo,
    };
}

export default useStudioSession;
