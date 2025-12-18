/**
 * Dialog field definitions for vis-2 Collection widgets.
 * Configures the embedded view, sizing, close behavior, and dialog chrome.
 *
 * @remarks
 * All properties are optional to keep widget composition flexible. Prefer importing
 * this interface from the types package rather than legacy runtime definitions.
 */
export interface DialogFieldsRxData {
    /**
     * Name of the vis-2 view to render inside the dialog.
     *
     * @example
     * ```typescript
     * const data: DialogFieldsRxData = {
     *     view: 'DetailView'
     * };
     * ```
     */
    view?: string;

    /**
     * Milliseconds after which the dialog closes automatically. Set to 0 to disable.
     *
     * @default 0
     * @example
     * ```typescript
     * const data: DialogFieldsRxData = {
     *     dialogAutoClose: 5000 // close after 5 seconds
     * };
     * ```
     * @remarks
     * Valid range: 0-30000. Useful for transient notifications.
     */
    dialogAutoClose?: number;

    /**
     * Object ID that should be written when the dialog opens.
     *
     * @example
     * ```typescript
     * const data: DialogFieldsRxData = {
     *     oid: 'javascript.0.dialog.opened'
     * };
     * ```
     */
    oid?: string;

    /**
     * Reuse the widget header text as the dialog title.
     *
     * @default false
     * @example
     * ```typescript
     * const data: DialogFieldsRxData = {
     *     dialogHeaderAsTitle: true
     * };
     * ```
     */
    dialogHeaderAsTitle?: boolean;

    /**
     * Dialog width value. Interpreted as percentage unless `dialogInPixel` is true.
     *
     * @default 100
     * @example
     * ```typescript
     * const data: DialogFieldsRxData = {
     *     dialogWidth: 80 // 80% of viewport or container
     * };
     * ```
     * @remarks
     * Valid range: 1-100 when used as percentage.
     */
    dialogWidth?: number;

    /**
     * Dialog height value. Interpreted as percentage unless `dialogInPixel` is true.
     *
     * @default 100
     * @example
     * ```typescript
     * const data: DialogFieldsRxData = {
     *     dialogHeight: 60
     * };
     * ```
     * @remarks
     * Valid range: 1-100 when used as percentage.
     */
    dialogHeight?: number;

    /**
     * Use pixel units for `dialogWidth` and `dialogHeight` instead of percentages.
     *
     * @default false
     * @example
     * ```typescript
     * const data: DialogFieldsRxData = {
     *     dialogInPixel: true,
     *     dialogWidth: 640,
     *     dialogHeight: 360
     * };
     * ```
     */
    dialogInPixel?: boolean;

    /**
     * Dialog background color.
     *
     * @example
     * ```typescript
     * const data: DialogFieldsRxData = {
     *     dialogBackgroundColor: '#101522'
     * };
     * ```
     */
    dialogBackgroundColor?: string;

    /**
     * Show a close button in the dialog header area.
     *
     * @default false
     * @example
     * ```typescript
     * const data: DialogFieldsRxData = {
     *     dialogCloseButtonTop: true
     * };
     * ```
     */
    dialogCloseButtonTop?: boolean;

    /**
     * Show a close button below the dialog content.
     *
     * @default false
     */
    dialogCloseButtonBottom?: boolean;

    /**
     * Color for the close button icon/text.
     *
     * @example
     * ```typescript
     * const data: DialogFieldsRxData = {
     *     dialogCloseButtonColor: 'var(--vis2-primary)'
     * };
     * ```
     */
    dialogCloseButtonColor?: string;

    /**
     * Render the control using only an icon (no text label).
     *
     * @default false
     * @example
     * ```typescript
     * const data: DialogFieldsRxData = {
     *     onlyIcon: true
     * };
     * ```
     * @see {@link onlyText}
     */
    onlyIcon?: boolean;

    /**
     * Render the control using only text (no icon).
     *
     * @default false
     * @see {@link onlyIcon}
     */
    onlyText?: boolean;
}
