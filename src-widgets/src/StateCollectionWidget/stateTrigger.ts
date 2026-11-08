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
 * at once in the wiring, past the debounce (ADR-0110 Nr. 5), so a short tap sends both values
 * shortly after each other. The trailing browser click after release returns `none` — "release
 * wins" holds by construction. A keyboard click (Enter/Space fires click only, no pointer events)
 * is an honest no-op instead of latching the press value on a momentary control.
 *
 * Wert[2] is written only out of an open press, and only once (ADR-0110 Nr. 2, CONTEXT
 * "Taster-Betätigung"): a release ends the press, so passing the mouse over the button writes
 * nothing, and coming back still pressed starts nothing until a new press.
 *
 * The events are those of the Pointer Events the wiring reads (ADR-0110 Nr. 3): the main button,
 * touch and pen start a press, only the first pointer counts and only its release ends the press.
 * The Sperre starts none: React holds back pointer events on a disabled button neither on press nor
 * on release, and MUI's `pointer-events: none` is styling, not a guard (ADR-0089 Nr. 1).
 *
 * A press can also end from outside (ADR-0110 Nr. 4): the widget unmounts or the Sperre takes hold.
 * That writes Wert[2] as well; a read-only OID is held back by the guard of the Schreibkette, not here.
 */

/** What the transition carries from step to step: the Taster-Betätigung (CONTEXT), once one is open. */
export type PressState =
    /** No press is open. */
    | { pressOpen: false }
    /** A press is open, and it belongs to the first pointer. */
    | { pressOpen: true; pointerId: number };

/** What the widget starts from and each press returns to when it ends. */
export const NO_OPEN_PRESS: PressState = { pressOpen: false };

/** One event the wiring delivers to the trigger. */
export type TriggerEvent =
    /** A pointer down, with the button it went down with (touch and pen contact report the main button). */
    | { kind: 'press'; pointerId: number; button: number }
    /** A pointer up, cancelled or leaving the whole button. */
    | { kind: 'release'; pointerId: number }
    /** The press ends from outside: the widget unmounts or the Sperre takes hold. No pointer is involved. */
    | { kind: 'end' }
    /** The browser click, of a mouse or of the keyboard. */
    | { kind: 'click' };

/** What the wiring must do for an event. */
export type TriggerAction =
    | {
          type: 'write';
          value: string | number | boolean;
          /** Past the debounce: the values of the push button (ADR-0110 Nr. 5). */
          immediate?: true;
      }
    | { type: 'open-dialog' }
    | { type: 'none' };

/** The outcome of one transition. */
export interface TriggerStep {
    /** The state of the press after this event. */
    pressState: PressState;
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
    /** Sperre (CONTEXT): no new press starts. */
    locked?: boolean;
    /** "Nur Zuständen" — restrict interaction to the configured states. */
    onlyStates?: boolean;
    /** Push-button (momentary) mode. */
    statePushButton?: boolean;
    /** The object copy, the dialog's range source (ADR-0109 Nr. 8). */
    oidObject?: TriggerOidObject;
}

/** `PointerEvent.button` of the main mouse button, a touch contact and a pen contact. */
const MAIN_BUTTON = 0;

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
export const isPushButtonMode = ({ states, onlyStates, statePushButton }: StateTriggerConfig): boolean =>
    Boolean(onlyStates && states.length === 2 && statePushButton);

/** A state without a value (statically possible, skipped by useData at runtime) never triggers. */
const writeState = (state: TriggerState | undefined, options?: { immediate: true }): TriggerAction =>
    state?.value === undefined ? { type: 'none' } : { type: 'write', value: state.value, ...options };

/** The push button writes past the debounce: a short tap would otherwise lose its Wert[1]. */
const AT_ONCE = { immediate: true } as const;

/** Whatever ends a press: Wert[2] comes only out of an open one; a leftover of a former mode ends silently. */
const endPress = (pressState: PressState, config: StateTriggerConfig): TriggerStep => ({
    pressState: NO_OPEN_PRESS,
    action: pressState.pressOpen && isPushButtonMode(config) ? writeState(config.states[1], AT_ONCE) : { type: 'none' },
});

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
 * @param pressState - The state of the press after the last step.
 * @param event - The fired event.
 * @param config - Widget trigger configuration with the RESOLVED states from useData.
 * @returns The press after this event and the action for the wiring to execute.
 * @example
 * ```ts
 * const states = [{ value: 0, active: true }, { value: 1, active: false }];
 * triggerStep(NO_OPEN_PRESS, { kind: 'click' }, { states, onlyStates: true });
 * // → { pressState: NO_OPEN_PRESS, action: { type: 'write', value: 1 } } — toggle to Wert[2]
 * ```
 */
export function triggerStep(pressState: PressState, event: TriggerEvent, config: StateTriggerConfig): TriggerStep {
    switch (event.kind) {
        case 'press':
            if (!isPushButtonMode(config)) {
                return { pressState: NO_OPEN_PRESS, action: { type: 'none' } };
            }
            if (pressState.pressOpen || event.button !== MAIN_BUTTON || config.locked) {
                return { pressState, action: { type: 'none' } };
            }
            return {
                pressState: { pressOpen: true, pointerId: event.pointerId },
                action: writeState(config.states[0], AT_ONCE),
            };
        case 'release':
            if (pressState.pressOpen && pressState.pointerId !== event.pointerId) {
                return { pressState, action: { type: 'none' } };
            }
            return endPress(pressState, config);
        case 'end':
            return endPress(pressState, config);
        case 'click':
            return { pressState, action: clickAction(config) };
    }
}
