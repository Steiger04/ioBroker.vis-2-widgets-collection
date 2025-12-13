/**
 * Checkbox field definitions for vis-2 Collection widgets.
 * Controls checkbox appearance and behavior.
 */
export interface CheckboxFieldsRxData {
    /**
     * Hide label text.
     * @default false
     */
    withoutLabel?: boolean;

    /**
     * Label placement relative to checkbox.
     * @default 'end'
     */
    checkboxLabelPlacement?: 'top' | 'bottom' | 'start' | 'end';

    /**
     * Display-only mode (no interaction).
     * @default false
     */
    onlyDisplay?: boolean;
}
