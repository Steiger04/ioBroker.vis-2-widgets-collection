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
 * simply does not trigger. Toggle matching goes through the `sameStateValue`
 * string-coercion contract (String `"true"` meets configured `true`).
 *
 * Push-button correctness is suppression, not a timer race: press/release write
 * synchronously in the wiring, and the trailing browser click after release returns
 * `none` — "release wins" holds by construction. A keyboard click (Enter/Space fires
 * click only, no mouse events) is an honest no-op instead of latching the press
 * value on a momentary control.
 */
import { sameStateValue } from '../hooks/useData/stateValueEquality';

/** What the transition carries from step to step: the Taster-Betätigung (CONTEXT), once one is open. */
export interface TriggerPress {
    /** Whether a press is open. */
    pressOpen: boolean;
}

/** What the widget starts from and each press returns to when it ends. */
export const NO_PRESS: TriggerPress = { pressOpen: false };

/** One event the wiring delivers to the trigger. */
export type TriggerEvent =
    /** Mouse or touch down. */
    | { kind: 'press' }
    /** Mouse or touch up, or the mouse leaving. */
    | { kind: 'release' }
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
}

/** Decision inputs the wiring extracts from the widget context. */
export interface StateTriggerConfig {
    /** Resolved states from useData (blank rows absent). */
    states: readonly TriggerState[];
    /** "Nur Zuständen" — restrict interaction to the configured states. */
    onlyStates?: boolean;
    /** Push-button (momentary) mode. */
    statePushButton?: boolean;
}

/** Push-button condition: `onlyStates` AND exactly two states AND the flag set. */
const isPushButtonMode = ({ states, onlyStates, statePushButton }: StateTriggerConfig): boolean =>
    Boolean(onlyStates && states.length === 2 && statePushButton);

/** A state without a value (statically possible, skipped by useData at runtime) never triggers. */
const writeState = (state: TriggerState | undefined): TriggerAction =>
    state?.value === undefined ? { type: 'none' } : { type: 'write', value: state.value };

/** What a click does. It leaves the open press alone: a click neither starts nor ends one. */
const clickAction = (
    config: StateTriggerConfig,
    currentValue: string | number | boolean | undefined | null,
): TriggerAction => {
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
            return sameStateValue(currentValue, states[0].value) ? writeState(states[1]) : writeState(states[0]);
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
 * @param currentValue - Current OID value (used for the toggle direction only).
 * @returns The press after this event and the action for the wiring to execute.
 * @example
 * ```ts
 * triggerStep(NO_PRESS, { kind: 'click' }, { states: [{ value: 0 }, { value: 1 }], onlyStates: true }, 0);
 * // → { press: NO_PRESS, action: { type: 'write', value: 1 } } — toggle to Wert[2]
 * ```
 */
export function triggerStep(
    press: TriggerPress,
    event: TriggerEvent,
    config: StateTriggerConfig,
    currentValue: string | number | boolean | undefined | null,
): TriggerStep {
    switch (event.kind) {
        case 'press':
            return isPushButtonMode(config)
                ? { press: { pressOpen: true }, action: writeState(config.states[0]) }
                : { press: NO_PRESS, action: { type: 'none' } };
        case 'release':
            return {
                press: NO_PRESS,
                action: isPushButtonMode(config) ? writeState(config.states[1]) : { type: 'none' },
            };
        case 'click':
            return { press, action: clickAction(config, currentValue) };
    }
}
