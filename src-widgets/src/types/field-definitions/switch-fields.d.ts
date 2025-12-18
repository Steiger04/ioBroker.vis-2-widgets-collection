/**
 * Switch field definitions for vis-2 Collection widgets.
 * Controls thumb sizing, coloring, and track styling for toggle switches.
 */
export interface SwitchFieldsRxData {
    /**
     * Thumb (handle) diameter in pixels.
     *
     * @default 62
     * @example
     * ```typescript
     * const data: SwitchFieldsRxData = {
     *     thumbSize: 48 // slightly smaller thumb
     * };
     * ```
     * @remarks
     * Valid range: 0-500. Larger values increase the control footprint and touch target.
     */
    thumbSize?: number;

    /**
     * Thumb color when the switch is on.
     *
     * @example
     * ```typescript
     * const data: SwitchFieldsRxData = {
     *     thumbColorTrue: '#4caf50'
     * };
     * ```
     * @remarks
     * Accepts any CSS color value. Align with brand or theme primary color.
     * @see {@link thumbColorFalse}
     */
    thumbColorTrue?: string;

    /**
     * Thumb color when the switch is off.
     *
     * @example
     * ```typescript
     * const data: SwitchFieldsRxData = {
     *     thumbColorFalse: '#9e9e9e'
     * };
     * ```
     * @remarks
     * Use a neutral or disabled color to indicate inactive state.
     * @see {@link thumbColorTrue}
     */
    thumbColorFalse?: string;

    /**
     * Track (background) thickness in pixels.
     *
     * @default 10
     * @example
     * ```typescript
     * const data: SwitchFieldsRxData = {
     *     trackSize: 12
     * };
     * ```
     * @remarks
     * Valid range: 0-100. Impacts the perceived prominence of the control.
     */
    trackSize?: number;

    /**
     * Track color for both on and off states when no gradient is desired.
     *
     * @example
     * ```typescript
     * const data: SwitchFieldsRxData = {
     *     trackColor: 'rgba(255,255,255,0.25)'
     * };
     * ```
     * @remarks
     * Provide a color with sufficient contrast against the background.
     */
    trackColor?: string;
}
