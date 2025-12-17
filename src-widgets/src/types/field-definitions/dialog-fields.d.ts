/**
 * Dialog field definitions for vis-2 Collection widgets.
 * Controls dialog appearance, dimensions, and behavior.
 *
 * @remarks
 * **Important:** All properties in this interface are optional for maximum flexibility
 * in widget configuration and type composition. This is the new type system standard.
 *
 * **Legacy Compatibility:** The interface with the same name in `src/lib/dialogFields.tsx`
 * may have required properties. That is a legacy runtime definition maintained for backward
 * compatibility and will be removed in Phase 10. New widget code should always import from
 * `vis-2-widgets-collection/newTypes` instead.
 *
 * @example
 * ```typescript
 * // ✅ Recommended: Import from newTypes
 * import type { DialogFieldsRxData } from 'vis-2-widgets-collection/newTypes';
 *
 * interface MyDialogWidget extends DialogFieldsRxData {
 *     customProp: string;
 * }
 * ```
 */
export interface DialogFieldsRxData {
    /**
     * View to display in dialog.
     */
    view?: string;

    /**
     * Auto-close delay in milliseconds (0 = disabled).
     * @default 0
     * @remarks Valid range: 0-30000
     */
    dialogAutoClose?: number;

    /**
     * Object ID to set when dialog opens.
     */
    oid?: string;

    /**
     * Use header as dialog title.
     * @default false
     */
    dialogHeaderAsTitle?: boolean;

    /**
     * Dialog width (percentage or pixels).
     * @default 100
     * @remarks Valid range: 1-100
     */
    dialogWidth?: number;

    /**
     * Dialog height (percentage or pixels).
     * @default 100
     * @remarks Valid range: 1-100
     */
    dialogHeight?: number;

    /**
     * Use pixels instead of percentage for dimensions.
     * @default false
     */
    dialogInPixel?: boolean;

    /**
     * Dialog background color (CSS color).
     */
    dialogBackgroundColor?: string;

    /**
     * Show close button at top.
     * @default false
     */
    dialogCloseButtonTop?: boolean;

    /**
     * Show close button at bottom.
     * @default false
     */
    dialogCloseButtonBottom?: boolean;

    /**
     * Close button color (CSS color).
     */
    dialogCloseButtonColor?: string;

    /**
     * Show only icon (no text).
     * @default false
     */
    onlyIcon?: boolean;

    /**
     * Show only text (no icon).
     * @default false
     */
    onlyText?: boolean;
}
