/**
 * The ONE source of the allowed-OID-types contract per widget family.
 *
 * @module lib/allowedOidTypes
 * @remarks
 * Which OID types a widget may bind is spelled TWICE per widget — as the
 * `commonObjectFields(…)` editor filter (the OID picker + onChange) and as the
 * renderer's `isValidType` guard. Before this module those two spellings were
 * hand-synchronised literals in three different idioms (Set, array-arg,
 * includes-chain); drifting them makes the editor offer OIDs the renderer
 * rejects with "invalid type". Both sides now consume these constants, and
 * `allowedOidTypes.parity.test.ts` pins the editor side by introspecting
 * `getWidgetInfo()` (the oid field carries an introspectable `allowedTypes`
 * mirror). The same list filters the field's object dialog ({@link oidTypeFilter}).
 *
 * Scope: only widgets with MULTI-type lists live here — a list long enough to
 * drift silently. Single-type guards (`Checkbox`/`Switch`/`Template`:
 * 'boolean', `Gauge`/`Slider`: 'number') stay as one loud literal token at
 * each site (the ADR-0001 no-shallow-factory spirit). Light2 and Dialog keep
 * their own OID semantics entirely.
 */

/** Supported value type hints an OID picker may filter on. */
export type AllowedType = 'boolean' | 'number' | 'string' | 'mixed' | 'json';

/** All four value types — widgets that bind any writable value (State, Select, RadioGroup, ButtonGroup). */
export const ANY_VALUE_TYPES = ['boolean', 'number', 'string', 'mixed'] as const satisfies readonly AllowedType[];

/** Free-form entry types — the Input widget's boundary (ADR-0002). */
export const INPUT_ENTRY_TYPES = ['string', 'number', 'mixed'] as const satisfies readonly AllowedType[];

/** Table payload types — the JsonTable widget. */
export const JSON_TABLE_TYPES = ['string', 'mixed', 'json'] as const satisfies readonly AllowedType[];

/**
 * The object dialog's filter for an OID field: the host hands `field.filter` to the object browser,
 * which keeps only objects whose `common.type` is listed (ADR-0111 Nr. 4). States without
 * `common.type` leave the dialog; the pick would refuse them anyway. Typing an id stays possible.
 *
 * @param types - The field's allowed types.
 * @returns The field's `filter`.
 */
export function oidTypeFilter(types: readonly AllowedType[]): { common: { type: ioBroker.CommonType[] } } {
    // A cast: `json` is a real common.type the ioBroker typings do not list.
    return { common: { type: [...types] as ioBroker.CommonType[] } };
}

/**
 * Renderer-side type guard over one of the allowed-types constants.
 *
 * @param types - The widget family's constant (e.g. {@link ANY_VALUE_TYPES}).
 * @param oidType - `oidObject.type` of the bound OID (`undefined` while unbound).
 * @returns `true` when the renderer may display/edit this OID.
 */
export function isAllowedOidType(types: readonly AllowedType[], oidType: string | undefined): boolean {
    return oidType !== undefined && (types as readonly string[]).includes(oidType);
}
