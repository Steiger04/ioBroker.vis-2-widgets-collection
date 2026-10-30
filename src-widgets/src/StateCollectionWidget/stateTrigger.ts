/**
 * Zustands-Auslöser — the State widget's pure trigger decision.
 *
 * @module widgets/StateCollectionWidget/stateTrigger
 * @remarks
 * ONE function decides what a press, a release or a click does (ADR-0089); the React
 * body is wiring over this decision. All guards live here: the `onlyStates` exception,
 * the state-count dispatch (1 write, 2 toggle, >2 dialog) and the push-button
 * condition (`onlyStates` AND exactly two states AND `statePushButton`).
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

/** Event kinds the body wiring delivers to the trigger. */
export type TriggerEvent = 'press' | 'release' | 'click';

/** What the wiring must do for an event. */
export type TriggerAction =
    | { type: 'write'; value: string | number | boolean }
    | { type: 'open-dialog' }
    | { type: 'none' };

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

/**
 * Decides what an event does to the widget.
 *
 * @param event - The fired event kind (`press`/`release` from mouse/touch down/up,
 * `click` from the browser click).
 * @param config - Widget trigger configuration with the RESOLVED states from useData.
 * @param currentValue - Current OID value (used for the toggle direction only).
 * @returns The action for the wiring to execute.
 * @example
 * ```ts
 * decideTriggerAction('click', { states: [{ value: 0 }, { value: 1 }], onlyStates: true }, 0);
 * // → { type: 'write', value: 1 } — toggle to Wert[2]
 * ```
 */
export function decideTriggerAction(
    event: TriggerEvent,
    config: StateTriggerConfig,
    currentValue: string | number | boolean | undefined | null,
): TriggerAction {
    const { states, onlyStates } = config;

    if (event === 'press' || event === 'release') {
        if (!isPushButtonMode(config)) {
            return { type: 'none' };
        }
        // Exactly two states are guaranteed by the push-button condition.
        return writeState(event === 'press' ? states[0] : states[1]);
    }

    // click
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
}
