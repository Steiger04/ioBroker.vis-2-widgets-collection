/**
 * Input field definitions for vis-2 Collection widgets.
 *
 * @module field-definitions/input-fields
 * @remarks
 * Controls text/number input behavior for the Input widget: whether a value is
 * committed per keystroke (debounced) or only via an explicit OK button, plus the
 * numeric range and step used when the bound OID is a number.
 */
export interface InputFieldsRxData {
    /**
     * Show an OK button and commit the value only on blur/Enter/button click.
     *
     * @default false
     * @remarks
     * When `false` (default), every keystroke is forwarded to {@link module:hooks/useValueState},
     * which debounces the backend write according to the delay fields. When `true`, the
     * widget keeps a local draft and writes only when the user commits.
     */
    showOkButton?: boolean;

    /**
     * Visual variant of the editable TextField.
     *
     * @default 'standard'
     * @remarks
     * Only affects the inline TextField in edit mode; the display (Typography) is unaffected.
     */
    inputVariant?: 'outlined' | 'filled' | 'standard';

    /**
     * Horizontal padding (left/right) of the editable TextField, in MUI spacing units.
     *
     * @default 1
     */
    inputPadding?: number;

    /**
     * Step increment for numeric input.
     *
     * @default 1
     * @remarks
     * Only applies when the bound OID type is `number`. Mirrors the native
     * `<input type="number">` `step` attribute.
     */
    step?: number;

    /**
     * Minimum value for numeric input.
     *
     * @remarks
     * Populated from `common.min` of the selected OID on change, but can be overridden.
     * Only applies when the bound OID type is `number`.
     */
    minValue?: number;

    /**
     * Maximum value for numeric input.
     *
     * @remarks
     * Populated from `common.max` of the selected OID on change, but can be overridden.
     * Only applies when the bound OID type is `number`.
     */
    maxValue?: number;
}
