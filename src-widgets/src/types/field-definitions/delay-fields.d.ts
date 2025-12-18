/**
 * Delay field definitions for vis-2 Collection widgets.
 * Controls debouncing of write operations or periodic sampling intervals.
 */
export interface DelayFieldsRxData {
    /**
     * Enable sample interval mode to poll at a fixed interval instead of delaying writes.
     *
     * @default false
     * @example
     * ```typescript
     * const data: DelayFieldsRxData = {
     *     sampleInterval: true,
     *     sampleIntervalValue: 500
     * };
     * ```
     * @remarks
     * When true, `sampleIntervalValue` is respected and `delay` is ignored. Ideal for read-most scenarios.
     */
    sampleInterval?: boolean;

    /**
     * Interval in milliseconds for sampling values when `sampleInterval` is enabled.
     *
     * @default 200
     * @example
     * ```typescript
     * const data: DelayFieldsRxData = {
     *     sampleInterval: true,
     *     sampleIntervalValue: 1000
     * };
     * ```
     * @remarks
     * Valid range: 0-10000. Lower values increase backend load; choose based on device update rate.
     */
    sampleIntervalValue?: number;

    /**
     * Debounce delay in milliseconds before writing a new value.
     *
     * @default 300
     * @example
     * ```typescript
     * const data: DelayFieldsRxData = {
     *     delay: 750
     * };
     * ```
     * @remarks
     * Valid range: 0-10000. Used when `sampleInterval` is false (default). Helps avoid rapid state toggling.
     */
    delay?: number;
}
