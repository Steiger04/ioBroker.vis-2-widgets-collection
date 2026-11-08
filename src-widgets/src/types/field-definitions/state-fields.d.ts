/**
 * State field definitions for vis-2 Collection widgets.
 * Controls state display and interaction modes.
 */
export interface StateFieldsRxData {
    /**
     * Only allow predefined state values.
     *
     * @default false
     */
    onlyStates?: boolean;

    /**
     * Push button mode: a press sends the first state's value, its end the second state's value. It does
     * not return to the value the OID had before the press. Applies with `onlyStates` and exactly two states.
     *
     * @default false
     */
    statePushButton?: boolean;

    /**
     * Display-only mode (no interaction).
     *
     * @default false
     */
    onlyDisplay?: boolean;

    /**
     * Hide icon display.
     *
     * @default false
     */
    noIcon?: boolean;

    /**
     * Hide value display.
     *
     * @default false
     */
    noValue?: boolean;
}
