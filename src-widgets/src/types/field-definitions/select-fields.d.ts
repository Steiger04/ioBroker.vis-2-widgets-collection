/**
 * Select field definitions for vis-2 Collection widgets.
 * Controls dropdown affordance styling and the control ID a selection writes.
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
     * Align this color with the surrounding input or app bar for consistency. Unset or invalid,
     * the arrow takes the active state's text colour (CONTEXT "Select-Chrome"). The field and the
     * runtime share one contract (`arrowColorContract`, ADR-0004): `arrowColor`, else `textColor`,
     * else the vis-2 CSS `color`, else the theme text colour — the editor swatch resolves it over
     * the base `textColor`, the runtime over the active state's text colour. Solid colours only:
     * a gradient is reduced to its 50 % colour.
     */
    arrowColor?: string;

    /**
     * Control ID ("Steuer ID"): the state a selection is written to when set.
     *
     * @example
     * ```typescript
     * // `oid` belongs to CommonObjectFieldsRxData, not to the Select fields.
     * const data: SelectFieldsRxData & Pick<CommonObjectFieldsRxData, 'oid'> = {
     *     oid: 'zigbee.0.lamp.mode_status', // status — the display follows it
     *     cid: 'zigbee.0.lamp.mode_set' // command — the only state written
     * };
     * ```
     * @remarks
     * The sole write target when set (ADR-0090, CONTEXT "Schreibziel"): a selection is written
     * only to this state — never also to the primary `oid` — and the display keeps following the
     * primary `oid`'s status, so the Select switches over once the status echo arrives (no
     * optimistic patch). Writability follows this state too: a read-only status `oid` does not
     * lock the Select while a writable control ID is set. Its metadata lives in `cidObject`;
     * picking it leaves the root `icon`/`write`/`minValue`/`maxValue` of the primary `oid` untouched.
     */
    cid?: string;
}
