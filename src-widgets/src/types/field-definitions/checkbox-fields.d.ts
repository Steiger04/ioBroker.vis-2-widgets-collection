/**
 * Checkbox field definitions for vis-2 Collection widgets.
 * Controls label placement, visibility, and interaction state for checkbox controls.
 */
export interface CheckboxFieldsRxData {
    /**
     * Hide the checkbox label text to render an icon-only or compact control.
     *
     * @default false
     * @example
     * ```typescript
     * const data: CheckboxFieldsRxData = {
     *     withoutLabel: true
     * };
     * ```
     * @remarks
     * Useful when the surrounding layout already provides context (e.g., grid of icons).
     */
    withoutLabel?: boolean;

    /**
     * Position of the label relative to the checkbox control.
     *
     * @default 'end'
     * @example
     * ```typescript
     * const data: CheckboxFieldsRxData = {
     *     checkboxLabelPlacement: 'start' // label on the left
     * };
     * ```
     * @remarks
     * Matches the Material UI `FormControlLabel` placement options.
     */
    checkboxLabelPlacement?: 'top' | 'bottom' | 'start' | 'end';

    /**
     * Render the checkbox in display-only mode and disable user interaction.
     *
     * @default false
     * @example
     * ```typescript
     * const data: CheckboxFieldsRxData = {
     *     onlyDisplay: true // show state without allowing toggles
     * };
     * ```
     * @remarks
     * Use when the underlying ioBroker state is read-only or should not be modified from this view.
     */
    onlyDisplay?: boolean;
}
