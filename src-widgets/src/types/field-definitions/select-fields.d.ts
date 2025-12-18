/**
 * Select field definitions for vis-2 Collection widgets.
 * Controls dropdown affordance styling and the control object used for selection.
 */
export interface SelectFieldsRxData {
    /**
     * CSS color applied to the dropdown arrow indicator.
     *
     * @example
     * ```typescript
     * const data: SelectFieldsRxData = {
     *     arrowColor: '#ffffff'
     * };
     * ```
     * @remarks
     * Align this color with the surrounding input or app bar for consistency.
     */
    arrowColor?: string;

    /**
     * Control object ID (OID) that stores the selected option value.
     *
     * @example
     * ```typescript
     * const data: SelectFieldsRxData = {
     *     cid: 'javascript.0.dropdown.value'
     * };
     * ```
     * @remarks
     * Use when the select should write to a dedicated control state instead of the primary oid.
     */
    cid?: string;
}
