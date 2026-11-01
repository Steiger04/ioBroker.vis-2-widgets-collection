/**
 * Dialog-Sitzung — the Dialog widget's pure open-state decision.
 *
 * @module widgets/DialogCollectionWidget/dialogSession
 * @remarks
 * ONE function decides every transition of the session (ADR-0095): a click, a backend
 * observation of the Sitzungs-OID (the value present at view load included), a close
 * request (X, backdrop, Escape) and the auto-close timer expiry. It returns the next open
 * state, the write and the timer action; the hook {@link module:widgets/DialogCollectionWidget/useDialogSession}
 * is wiring over this decision. All guards live here:
 *
 * - **Only own actions write.** Click → `true`; close request and timer expiry → `false`.
 *   An observation opens or closes but never writes — no view-load write, no echo write.
 * - **Only real booleans count.** Any other observed value is ignored.
 * - **Read-only is followed, never written** (`canWrite: false`).
 * - **Timer guard.** The timer starts only when a session opens (whoever opened it) and
 *   auto-close is on; an already open session keeps its running timer and its duration.
 */

/** Default auto-close timeout when `dialogAutoClose` is just `true`. */
const DEFAULT_AUTO_CLOSE_MS = 10_000;
/** Values below this threshold are treated as seconds and converted to ms. */
const SECONDS_THRESHOLD = 60;
/** Fallback timeout when parsing yields 0 or NaN. */
const MIN_TIMEOUT_MS = 1_000;

/**
 * Parses the dialogAutoClose config value into a millisecond timeout.
 *
 * Accepts `"true"` (→ default), numeric strings in ms or seconds (< 60 → s).
 * Returns `0` when auto-close is disabled.
 *
 * @remarks
 * The legacy branches (`"true"`, seconds) are only reachable through a binding — the slider
 * yields 0–30000 ms — but stay so existing bindings do not break silently (ADR-0095 §6).
 */
export function parseAutoCloseTimeout(value: unknown): number {
    const str = String(value);

    if (!value || str === '' || str === '0') {
        return 0;
    }
    if (str === 'true') {
        return DEFAULT_AUTO_CLOSE_MS;
    }

    let timeout = parseInt(str, 10);
    if (timeout < SECONDS_THRESHOLD) {
        // Small numbers are assumed to be seconds.
        timeout *= 1_000;
    }

    return timeout || MIN_TIMEOUT_MS;
}

/** Events the wiring delivers to the session. */
export type DialogSessionEvent =
    | { type: 'click' }
    /** A backend value of the Sitzungs-OID — the one present at view load included. */
    | { type: 'observe'; value: unknown }
    /** A close request: X button, backdrop or Escape. */
    | { type: 'close' }
    | { type: 'timer-expired' };

/** Object metadata of the Sitzungs-OID (`dialogIdObject`), as far as the session reads it. */
export interface SessionOidObject {
    _id?: string;
    write?: boolean;
}

/**
 * Whether the widget may write the Sitzungs-OID: it is resolved (non-empty `_id`) AND its
 * object is not read-only (`write !== false`).
 *
 * @param object - The Sitzungs-OID's object metadata; `undefined` when none is bound.
 */
export function canWriteSessionOid(object: SessionOidObject | undefined): boolean {
    return !!object?._id && object.write !== false;
}

/** Decision inputs the wiring extracts from the widget context. */
export interface DialogSessionConfig {
    /** Auto-close timeout in ms (from {@link parseAutoCloseTimeout}); `0` = off. */
    autoCloseMs: number;
    /** Whether the Sitzungs-OID may be written — {@link canWriteSessionOid}. */
    canWrite: boolean;
}

/** What the wiring must do for an event. */
export interface DialogTransition {
    /** The next open state. */
    open: boolean;
    /** The value to write to the Sitzungs-OID; `null` = no write. */
    write: boolean | null;
    /** The auto-close timer action. */
    timer: 'start' | 'clear' | 'keep';
}

/**
 * Decides what an event does to the session.
 *
 * @param event - The event.
 * @param config - Auto-close timeout and write permission.
 * @param open - The current open state.
 * @returns The transition for the wiring to execute.
 * @example
 * ```ts
 * decideDialogTransition({ type: 'observe', value: false }, { autoCloseMs: 0, canWrite: true }, true);
 * // → { open: false, write: null, timer: 'clear' } — closes, no echo write
 * ```
 */
export function decideDialogTransition(
    event: DialogSessionEvent,
    config: DialogSessionConfig,
    open: boolean,
): DialogTransition {
    const { autoCloseMs, canWrite } = config;
    const unchanged: DialogTransition = { open, write: null, timer: 'keep' };
    const openTimer = autoCloseMs > 0 ? 'start' : 'keep';

    switch (event.type) {
        case 'observe':
            if (typeof event.value !== 'boolean' || event.value === open) {
                return unchanged;
            }
            return event.value
                ? { open: true, write: null, timer: openTimer }
                : { open: false, write: null, timer: 'clear' };
        case 'click':
            return open ? unchanged : { open: true, write: canWrite ? true : null, timer: openTimer };
        case 'close':
        case 'timer-expired':
            return open ? { open: false, write: canWrite ? false : null, timer: 'clear' } : unchanged;
        default:
            return unchanged;
    }
}
