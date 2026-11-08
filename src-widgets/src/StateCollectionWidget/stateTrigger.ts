/**
 * Zustands-Auslöser — the State widget's pure trigger transition.
 *
 * @module widgets/StateCollectionWidget/stateTrigger
 * @remarks
 * ADR-0110 Nr. 1: event + open press → action + next open press, the pure core behind
 * {@link module:widgets/StateCollectionWidget/useStateTrigger}, as `lampSync` is behind
 * `useLampSync`. All guards live here (ADR-0089): the `onlyStates` exception, the state-count
 * dispatch (1 write, 2 toggle, >2 dialog) and the push-button condition (`onlyStates` AND exactly
 * two states AND `statePushButton`).
 *
 * The config carries the RESOLVED `states[]` from useData — never the raw `value1`/
 * `value2` fields. Blank rows are already absent there, so a blank configured row
 * simply does not trigger. The toggle reads the first state's `active` flag, the one
 * match decision of useData (ADR-0110 Nr. 8, ADR-0105), and compares no values itself.
 *
 * Push-button correctness is suppression, not a timer race: press/release write
 * synchronously in the wiring, and the trailing browser click after release returns
 * `none` — "release wins" holds by construction. A keyboard click (Enter/Space fires
 * click only, no mouse events) is an honest no-op instead of latching the press
 * value on a momentary control.
 *
 * Wert[2] is written only out of an open press, and only once (ADR-0110 Nr. 2, CONTEXT
 * "Taster-Betätigung"): a release ends the press, so passing the mouse over the button writes
 * nothing, and coming back still pressed starts nothing until a new press.
 *
 * The events are those of the Pointer Events the wiring reads (ADR-0110 Nr. 3): the main button,
 * touch and pen start a press, only the first pointer counts and only its release ends the press.
 * The Sperre starts none: React holds back pointer events on a disabled button neither on press nor
 * on release, and MUI's `pointer-events: none` is styling, not a guard (ADR-0089 Nr. 1).
 */

/** What the transition carries from step to step: the Taster-Betätigung (CONTEXT), once one is open. */
export type TriggerPress =
    /** No press is open. */
    | { pressOpen: false }
    /** A press is open, and it belongs to the first pointer. */
    | { pressOpen: true; pointerId: number };

/** What the widget starts from and each press returns to when it ends. */
export const NO_PRESS: TriggerPress = { pressOpen: false };

/** One event the wiring delivers to the trigger. */
export type TriggerEvent =
    /** A pointer down, with the button it went down with (touch and pen contact report the main button). */
    | { kind: 'press'; pointerId: number; button: number }
    /** A pointer up, cancelled or leaving the whole button. */
    | { kind: 'release'; pointerId: number }
    /** The browser click, of a mouse or of the keyboard. */
    | { kind: 'click' };

/** What the wiring must do for an event. */
export type TriggerAction =
    | { type: 'write'; value: string | number | boolean }
    | { type: 'open-dialog' }
    | { type: 'none' };

/** The outcome of one transition. */
export interface TriggerStep {
    /** The press after this event. */
    press: TriggerPress;
    /** What the wiring must do. */
    action: TriggerAction;
}

/** Minimal state slice the decision reads — useData's resolved states satisfy it. */
export interface TriggerState {
    /**
     * Converted state value (already type-converted by useData). Typed optional because
     * useData's static state type allows `undefined`; at runtime rows without a value
     * are skipped there. A valueless row never triggers (see {@link writeState}).
     */
    value?: string | number | boolean;
    /** Aktiver Zustand: whether the OID value matches this state, as useData decided it. */
    active: boolean;
}

/** Decision inputs the wiring extracts from the widget context. */
export interface StateTriggerConfig {
    /** Resolved states from useData (blank rows absent). */
    states: readonly TriggerState[];
    /** Sperre (CONTEXT): no new press starts. */
    locked?: boolean;
    /** "Nur Zuständen" — restrict interaction to the configured states. */
    onlyStates?: boolean;
    /** Push-button (momentary) mode. */
    statePushButton?: boolean;
}

/** `PointerEvent.button` of the main mouse button, a touch contact and a pen contact. */
const MAIN_BUTTON = 0;

/** Push-button condition: `onlyStates` AND exactly two states AND the flag set. */
const isPushButtonMode = ({ states, onlyStates, statePushButton }: StateTriggerConfig): boolean =>
    Boolean(onlyStates && states.length === 2 && statePushButton);

/** A state without a value (statically possible, skipped by useData at runtime) never triggers. */
const writeState = (state: TriggerState | undefined): TriggerAction =>
    state?.value === undefined ? { type: 'none' } : { type: 'write', value: state.value };

/** What a click does. It leaves the open press alone: a click neither starts nor ends one. */
const clickAction = (config: StateTriggerConfig): TriggerAction => {
    const { states, onlyStates } = config;

    if (!onlyStates) {
        return { type: 'open-dialog' };
    }

    switch (states.length) {
        case 1:
            return writeState(states[0]);
        case 2:
            if (isPushButtonMode(config)) {
                // Suppressed, not outrun (ADR-0089): press/release already wrote
                // synchronously; the trailing click must not overwrite the release.
                return { type: 'none' };
            }
            return states[0].active ? writeState(states[1]) : writeState(states[0]);
        default:
            return { type: 'open-dialog' };
    }
};

/**
 * One transition of the trigger.
 *
 * @param press - The press after the last step.
 * @param event - The fired event.
 * @param config - Widget trigger configuration with the RESOLVED states from useData.
 * @returns The press after this event and the action for the wiring to execute.
 * @example
 * ```ts
 * const states = [{ value: 0, active: true }, { value: 1, active: false }];
 * triggerStep(NO_PRESS, { kind: 'click' }, { states, onlyStates: true });
 * // → { press: NO_PRESS, action: { type: 'write', value: 1 } } — toggle to Wert[2]
 * ```
 */
export function triggerStep(press: TriggerPress, event: TriggerEvent, config: StateTriggerConfig): TriggerStep {
    switch (event.kind) {
        case 'press':
            if (!isPushButtonMode(config)) {
                return { press: NO_PRESS, action: { type: 'none' } };
            }
            if (press.pressOpen || event.button !== MAIN_BUTTON || config.locked) {
                return { press, action: { type: 'none' } };
            }
            return {
                press: { pressOpen: true, pointerId: event.pointerId },
                action: writeState(config.states[0]),
            };
        case 'release':
            if (press.pressOpen && press.pointerId !== event.pointerId) {
                return { press, action: { type: 'none' } };
            }
            return {
                press: NO_PRESS,
                action: press.pressOpen && isPushButtonMode(config) ? writeState(config.states[1]) : { type: 'none' },
            };
        case 'click':
            return { press, action: clickAction(config) };
    }
}
