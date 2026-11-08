/**
 * Inline-Edit-Sitzung core — what each event of the session does.
 *
 * @module InputCollectionWidget/inlineEditSession
 * @remarks
 * ADR-0109 Nr. 1: the pure transition behind `useInlineEdit`, as `lampSync` is behind `useLampSync`.
 * From the session, one event and the inputs of this moment (mode, Sperre, conversion) it decides the
 * next session and the value to write, if any. It writes nothing itself: the hook carries the value
 * out through `updateValue`, which also converts it to the OID type and drops what does not convert.
 * The conversion it reads is that same rule, handed in so the core stays free of React.
 *
 * - **Sperre**: decides the start only. A running session survives a lock arriving later.
 * - **Draft**: exists only during a session. The start seeds it from the backend value, from then
 *   on it ignores the backend.
 * - **Outside a session** only the start does anything: no field is mounted that could send the
 *   other events, and a late one must not write.
 * - **Escape** leaves without a write: in OK mode the buffered draft is discarded (nothing was
 *   written), in live mode it equals a blur, because the keystrokes are already on their way
 *   through the debounce.
 * - **Sitzungskonflikt** (ADR-0109 Nr. 3): a significant backend change observed since the start,
 *   held until the session ends. `hasBackendChange` is a state and not an event: it can still be
 *   true from before the session, and it can stay true over a follow-up change without switching
 *   (the trap of `backendSyncKey`). So an observation counts only when the backend value also
 *   differs from the reference: the value at the start, in live mode the last own value as the OID
 *   receives it. The conflict warns, it decides no write. In live mode the own keystroke ends it,
 *   unless `updateValue` drops that keystroke, because then the value is not in the backend.
 * - **A blur is no command** (ADR-0109 Nr. 4): in OK mode it commits only a draft that differs from
 *   the one at the start, so it cannot write an untouched draft over a foreign change. Enter and the
 *   OK button are explicit: they commit a changed draft, and re-send an unchanged one when the OID
 *   would receive exactly the value of the start. They compare with the start, not with the current
 *   backend value, so a deliberate re-send also works on a red field. All of them end the session,
 *   so the blur a browser fires when the field unmounts finds none and writes nothing.
 */

/** The state of the session. */
export interface InlineEditSession {
    /** Whether the session is running. */
    editing: boolean;
    /** The text in the field. */
    draft: string;
    /** The Sitzungskonflikt. */
    conflict: boolean;
    /** The backend value at the start. */
    startValue: ioBroker.StateValue | undefined;
    /** Live mode: the last keystroke as the OID receives it, once there is one. */
    ownValue?: string | number | boolean;
}

/** What each session starts from and returns to when it ends: not editing, no draft, no conflict. */
export const NO_SESSION: InlineEditSession = { editing: false, draft: '', conflict: false, startValue: undefined };

/** One event of the session. */
export type InlineEditEvent =
    /** Click on the display, with the backend value of that moment. */
    | { kind: 'start'; value: ioBroker.StateValue | undefined }
    /** New text in the field. */
    | { kind: 'input'; value: string }
    /** The field lost the focus. */
    | { kind: 'blur' }
    /** A key pressed in the field. */
    | { kind: 'key'; key: string }
    /** Click on the OK button. */
    | { kind: 'ok' }
    /** The backend value and `hasBackendChange` of a render in which one of them changed. */
    | { kind: 'backend'; value: ioBroker.StateValue | undefined; significant: boolean };

/** What the transition reads besides the session and the event. */
export interface InlineEditInputs {
    /** OK mode: the draft buffers until a commit. Otherwise live mode: every keystroke writes. */
    showOkButton: boolean;
    /** The Sperre of the OID binding. */
    locked: boolean;
    /** What the OID receives for a raw value (`convertToOidType`); `undefined` drops the write. */
    convert: (raw: string) => string | number | boolean | undefined;
}

/** The outcome of one transition. */
export interface InlineEditStep {
    /** The next session. */
    session: InlineEditSession;
    /** The raw value to write, `''` included; absent when nothing is to be written. */
    write?: string;
}

/** The text a backend value shows as a draft. */
const draftOf = (value: ioBroker.StateValue | undefined): string => String(value ?? '');

/** Ends the session and writes its draft. */
const commitStep = (session: InlineEditSession): InlineEditStep => ({ session: NO_SESSION, write: session.draft });

/** Ends the session without a write. */
const LEAVE: InlineEditStep = { session: NO_SESSION };

/** Whether the draft differs from the one the session started with. */
const isChanged = (session: InlineEditSession): boolean => session.draft !== draftOf(session.startValue);

/** A blur: OK mode commits only a changed draft, live mode only leaves. */
const blurStep = (session: InlineEditSession, inputs: InlineEditInputs): InlineEditStep =>
    inputs.showOkButton && isChanged(session) ? commitStep(session) : LEAVE;

/**
 * Enter or the OK button in OK mode: commits a changed draft. An unchanged one goes out again only
 * when the OID would receive the value of the start; what the conversion alters or drops just leaves.
 */
const explicitStep = (session: InlineEditSession, inputs: InlineEditInputs): InlineEditStep => {
    if (isChanged(session)) {
        return commitStep(session);
    }
    const converted = inputs.convert(session.draft);

    return converted !== undefined && converted === session.startValue ? commitStep(session) : LEAVE;
};

/** Whether the backend holds the same value, the way `isSignificantBackendChange` reads it first. */
const sameValue = (a: ioBroker.StateValue | undefined, b: ioBroker.StateValue | undefined): boolean =>
    String(a ?? '') === String(b ?? '');

/** The new text of the field: live mode writes it, and what the OID receives is the new reference. */
const inputStep = (session: InlineEditSession, raw: string, inputs: InlineEditInputs): InlineEditStep => {
    const next = { ...session, draft: raw };
    if (inputs.showOkButton) {
        return { session: next };
    }
    const ownValue = inputs.convert(raw);

    return {
        session: ownValue === undefined ? next : { ...next, conflict: false, ownValue },
        write: raw,
    };
};

/** A backend observation. Without a new conflict the session stays the same object: nothing to render. */
const backendStep = (
    session: InlineEditSession,
    event: { value: ioBroker.StateValue | undefined; significant: boolean },
): InlineEditStep =>
    event.significant && !session.conflict && !sameValue(event.value, session.ownValue ?? session.startValue)
        ? { session: { ...session, conflict: true } }
        : { session };

/**
 * The next session and the value to write after one event.
 *
 * @param session The session before the event.
 * @param event The event.
 * @param inputs The mode, the Sperre and the conversion of this moment.
 * @returns The next session, and the raw value to write if there is one.
 */
export function sessionStep(
    session: InlineEditSession,
    event: InlineEditEvent,
    inputs: InlineEditInputs,
): InlineEditStep {
    if (!session.editing) {
        return event.kind === 'start' && !inputs.locked
            ? { session: { editing: true, draft: draftOf(event.value), conflict: false, startValue: event.value } }
            : { session };
    }

    switch (event.kind) {
        case 'start':
            return { session };
        case 'input':
            return inputStep(session, event.value, inputs);
        case 'backend':
            return backendStep(session, event);
        case 'blur':
            return blurStep(session, inputs);
        case 'key':
            if (event.key === 'Enter') {
                return inputs.showOkButton ? explicitStep(session, inputs) : LEAVE;
            }
            return event.key === 'Escape' ? LEAVE : { session };
        case 'ok':
            return inputs.showOkButton ? explicitStep(session, inputs) : commitStep(session);
    }
}
