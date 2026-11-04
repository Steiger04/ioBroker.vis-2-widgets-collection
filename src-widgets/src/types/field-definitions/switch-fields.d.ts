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
     * Track color when the switch is on. Unset, the legacy {@link trackColor} applies, else the
     * theme primary color (MUI's checked track).
     *
     * @example
     * ```typescript
     * const data: SwitchFieldsRxData = {
     *     trackColorTrue: '#4caf50'
     * };
     * ```
     * @remarks
     * Drawn with MUI's fixed track opacity (0.5; locked 0.12 light / 0.2 dark).
     * @see {@link trackColorFalse}
     */
    trackColorTrue?: string;

    /**
     * Track color when the switch is off. Unset, the legacy {@link trackColor} applies, else
     * black (light) / white (dark) — MUI's `common.onBackground`.
     *
     * @example
     * ```typescript
     * const data: SwitchFieldsRxData = {
     *     trackColorFalse: '#9e9e9e'
     * };
     * ```
     * @remarks
     * Drawn with MUI's fixed track opacity (0.38 light / 0.3 dark; locked 0.12 / 0.2).
     * @see {@link trackColorTrue}
     */
    trackColorFalse?: string;

    /**
     * Legacy track color for both on and off states.
     *
     * @deprecated Use {@link trackColorTrue} / {@link trackColorFalse}. Still read as their
     * fallback (stored data is never rewritten); the attribute panel shows it only while set.
     */
    trackColor?: string;
}
