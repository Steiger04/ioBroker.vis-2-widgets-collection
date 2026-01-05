/**
 * Radio group field definitions for vis-2 Collection widgets.
 * Controls layout, icon coloring, and interaction mode for grouped radio inputs.
 */
export interface RadioGroupFieldsRxData {
    /**
     * Layout orientation for the radio options.
     *
     * @default 'horizontal'
     * @example
     * ```typescript
     * const data: RadioGroupFieldsRxData = {
     *     radioOrientation: 'vertical'
     * };
     * ```
     * @remarks
     * Use vertical orientation for longer option lists or narrow columns.
     */
    radioOrientation?: 'horizontal' | 'vertical';

    /**
     * Label placement orientation for the radio options.
     *
     * @default 'end'
     * @example
     * ```typescript
     * const data: RadioGroupFieldsRxData = {
     *     labelPlacement: 'end'
     * };
     * ```
     * @remarks
     * Use label placement to adjust the position of labels relative to radio buttons.
     */
    labelPlacement?: 'start' | 'end';

    /**
     * Hide text labels, showing only radio button icons.
     *
     * @default false
     * @example
     * ```typescript
     * const data: RadioGroupFieldsRxData = {
     *     hideLabels: true
     * };
     * ```
     * @remarks
     * Useful for icon-only radio groups or when space is limited.
     */
    hideLabels?: boolean;

    /**
     * Icon color for unchecked radio options.
     *
     * @example
     * ```typescript
     * const data: RadioGroupFieldsRxData = {
     *     radioGroupUncheckedIconColor: '#b0bec5'
     * };
     * ```
     * @remarks
     * Helps differentiate inactive options when the primary color is reserved for the active state.
     */
    radioGroupUncheckedIconColor?: string;

    /**
     * Render the radio group as read-only while still showing the current selection.
     *
     * @default false
     * @example
     * ```typescript
     * const data: RadioGroupFieldsRxData = {
     *     onlyDisplay: true
     * };
     * ```
     */
    onlyDisplay?: boolean;
}
