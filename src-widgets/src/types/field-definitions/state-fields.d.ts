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
     * Push button mode (returns to original value).
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
