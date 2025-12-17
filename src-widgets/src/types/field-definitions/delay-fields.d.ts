/**
 * Delay field definitions for vis-2 Collection widgets.
 * Controls write delays and sample intervals for state changes.
 */
export interface DelayFieldsRxData {
    /**
     * Enable sample interval mode instead of delay.
     *
     * @default false
     * @remarks When true, `sampleIntervalValue` is used and `delay` is ignored/hidden.
     */
    sampleInterval?: boolean;

    /**
     * Sample interval value in milliseconds.
     *
     * @default 200
     * @remarks Valid range: 0-10000; effective only when `sampleInterval` is true.
     */
    sampleIntervalValue?: number;

    /**
     * Delay before writing value in milliseconds.
     *
     * @default 300
     * @remarks Valid range: 0-10000; effective only when `sampleInterval` is false (default mode).
     */
    delay?: number;
}
