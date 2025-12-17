/**
 * Radio group field definitions for vis-2 Collection widgets.
 * Controls radio button group appearance and layout.
 */
export interface RadioGroupFieldsRxData {
    /**
     * Radio button layout orientation.
     *
     * @default 'horizontal'
     */
    radioOrientation?: 'horizontal' | 'vertical';

    /**
     * Color for unchecked radio icons (CSS color).
     */
    radioGroupUncheckedIconColor?: string;

    /**
     * Display-only mode (no interaction).
     *
     * @default false
     */
    onlyDisplay?: boolean;
}
