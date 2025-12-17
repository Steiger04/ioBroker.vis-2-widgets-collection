/**
 * Button group field definitions for vis-2 Collection widgets.
 * Controls button group appearance and layout.
 */
export interface ButtonGroupFieldsRxData {
    /**
     * Show only icons (no text).
     * @default false
     */
    onlyIcon?: boolean;

    /**
     * Show only text (no icons).
     * @default false
     */
    onlyText?: boolean;

    /**
     * Button visual style variant.
     * @default 'text'
     */
    buttonGroupVariant?: 'text' | 'outlined';

    /**
     * Button group layout orientation.
     * @default 'horizontal'
     */
    buttonGroupOrientation?: 'horizontal' | 'vertical';

    /**
     * Button group color (CSS color).
     */
    buttonGroupColor?: string;
}
