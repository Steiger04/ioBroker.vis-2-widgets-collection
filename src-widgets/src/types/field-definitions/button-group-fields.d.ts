/**
 * Button group field definitions for vis-2 Collection widgets.
 * Controls visibility of labels/icons, visual variant, orientation, and accent color.
 */
export interface ButtonGroupFieldsRxData {
    /**
     * Render buttons with icons only, hiding text labels.
     *
     * @default false
     * @example
     * ```typescript
     * const data: ButtonGroupFieldsRxData = {
     *     onlyIcon: true
     * };
     * ```
     * @remarks
     * Ideal for compact toolbars when icons are self-explanatory.
     * @see {@link onlyText}
     */
    onlyIcon?: boolean;

    /**
     * Render buttons with text only, hiding icons.
     *
     * @default false
     * @see {@link onlyIcon}
     */
    onlyText?: boolean;

    /**
     * Visual variant for the Material UI button group.
     *
     * @default 'text'
     * @example
     * ```typescript
     * const data: ButtonGroupFieldsRxData = {
     *     buttonGroupVariant: 'outlined'
     * };
     * ```
     */
    buttonGroupVariant?: 'text' | 'outlined';

    /**
     * Layout orientation of the button group.
     *
     * @default 'horizontal'
     * @example
     * ```typescript
     * const data: ButtonGroupFieldsRxData = {
     *     buttonGroupOrientation: 'vertical'
     * };
     * ```
     * @remarks
     * Vertical orientation suits sidebars or stacked action lists.
     */
    buttonGroupOrientation?: 'horizontal' | 'vertical';

    /**
     * Accent color applied to the button group.
     *
     * @example
     * ```typescript
     * const data: ButtonGroupFieldsRxData = {
     *     buttonGroupColor: '#1976d2'
     * };
     * ```
     * @remarks
     * Provide a color that keeps sufficient contrast for both variants.
     */
    buttonGroupColor?: string;
}
