/**
 * Zustands-Auslöser — the State widget's pure trigger transition.
 *
 * @module widgets/StateCollectionWidget/stateTrigger
 * @remarks
 * ADR-0110 Nr. 1: event + open press → action + next open press, the pure core behind
 * {@link module:widgets/StateCollectionWidget/useStateTrigger}, as `lampSync` is behind
 * `useLampSync`. All guards live here (ADR-0089): the `onlyStates` exception, the state-count
 * dispatch (1 write, 2 toggle, >2 dialog), the push-button condition (`onlyStates` AND exactly
 * two states AND `statePushButton`) and the slider gate, so one module sees whether the dialog
 * has anything to show (ADR-0110 Nr. 9).
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
 */

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
    /** Aktiver Zustand: whether the OID value matches this state, as useData decided it. */
    active: boolean;
}

/** Minimal slice of the object copy the slider gate reads — `widget.data.oidObject` satisfies it. */
export interface TriggerOidObject {
    /** The OID's type. */
    type?: string;
    /** Lower bound; the copy is pre-filled with 0 on the OID pick (ADR-0109 Nr. 8). */
    minValue?: number;
    /** Upper bound; the copy is pre-filled with 100 on the OID pick (ADR-0109 Nr. 8). */
    maxValue?: number;
    /** `common.step`, only on a pick of an object that has one (ADR-0110 Nr. 12). */
    step?: number;
}

/** Decision inputs the wiring extracts from the widget context. */
export interface StateTriggerConfig {
    /** Resolved states from useData (blank rows absent). */
    states: readonly TriggerState[];
    /** "Nur Zuständen" — restrict interaction to the configured states. */
    onlyStates?: boolean;
    /** Push-button (momentary) mode. */
    statePushButton?: boolean;
    /** The object copy, the dialog's range source (ADR-0109 Nr. 8). */
    oidObject?: TriggerOidObject;
}

/** The range of the dialog's slider. */
export interface SliderRange {
    /** Lower bound. */
    min: number;
    /** Upper bound, above `min`. */
    max: number;
    /** The step of the object copy, above 0; without one the dialog's slider steps by 1. */
    step?: number;
}

/**
 * The slider gate: what range, if any, earns the change dialog a slider (ADR-0110 Nr. 9).
 *
 * @param config - The inputs of the gate: the object copy and `onlyStates`.
 * @param config.oidObject - The object copy; a number OID without a real range has 0..100 there.
 * @param config.onlyStates - "Nur Zuständen"; restricts the dialog to the list.
 * @returns The range for a number OID without `onlyStates` and with `min` below `max`, else nothing.
 */
export const sliderRange = ({
    oidObject,
    onlyStates,
}: Pick<StateTriggerConfig, 'oidObject' | 'onlyStates'>): SliderRange | undefined => {
    if (oidObject?.type !== 'number' || onlyStates) {
        return undefined;
    }

    const { minValue: min, maxValue: max, step } = oidObject;

    // A step of 0 would round a drag to NaN in MUI; it is no raster, so it falls back like a missing one.
    return min !== undefined && max !== undefined && min < max
        ? { min, max, step: step !== undefined && step > 0 ? step : undefined }
        : undefined;
};

/** The dialog opens only with something to show: without a list and without a slider it would be empty. */
const dialogAction = (config: StateTriggerConfig): TriggerAction =>
    config.states.length > 0 || sliderRange(config) ? { type: 'open-dialog' } : { type: 'none' };

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
        return dialogAction(config);
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
            return dialogAction(config);
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
            return isPushButtonMode(config)
                ? { press: { pressOpen: true }, action: writeState(config.states[0]) }
                : { press: NO_PRESS, action: { type: 'none' } };
        case 'release':
            return {
                press: NO_PRESS,
                action: press.pressOpen && isPushButtonMode(config) ? writeState(config.states[1]) : { type: 'none' },
            };
        case 'click':
            return { press, action: clickAction(config) };
    }
}
