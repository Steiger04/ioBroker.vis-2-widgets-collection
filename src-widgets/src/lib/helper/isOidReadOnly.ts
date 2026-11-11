/**
 * Whether an OID should be treated as read-only (no user writes) for a collection widget.
 *
 * @module lib/helper/isOidReadOnly
 * @remarks
 * Centralises the writability guard so every interactive widget disables its control the same way.
 * The internal pure rule behind the Sperre (CONTEXT): widgets read it as `locked` from the OID
 * binding ({@link module:hooks/useValueState}); the Select applies it to its Schreibziel
 * ({@link module:lib/writeTarget}). Widgets never call it themselves.
 *
 * Semantics (decided against the ioBroker state-roles convention — switches/values are writable,
 * only sensors/indicators set `write:false` explicitly):
 * - **Missing `write`** (`undefined`) → writable. The widget targets are conventionally writable
 *   states; a mere omission of `common.write` must not lock the control (that was the original bug:
 *   `!write` treated `undefined` as non-writable).
 * - **Explicit `write === false`** → read-only (sensors/indicators).
 * - **`onlyDisplay === true`** → read-only, regardless of `write` (user forced display-only, or the
 *   OID-change handler set it because `write === false`). A binding on the attribute resolves to
 *   text, so `'false'` and `'0'` read as off ({@link module:lib/helper/readsAsOn}).
 *
 * The handler {@link module:lib/commonObjectFields} sets `onlyDisplay = (common.write === false)`
 * on OID change, so `onlyDisplay` already encodes the non-writable case for freshly selected OIDs.
 * The `write === false` fallback keeps the guard correct for widgets whose `onlyDisplay` is not
 * (yet) populated.
 */

import readsAsOn from './readsAsOn';

/** Minimal slice of widget data the guard consumes. */
interface ReadOnlyData {
    /** User-forced display-only flag (set on OID change to `common.write === false`); text when bound. */
    onlyDisplay?: boolean | string;
    /** Raw `common.write` of the selected OID (`undefined` when the field is absent). */
    write?: boolean;
}

/**
 * @param data - Slice with the widget's `onlyDisplay` and the BOUND object's `write`.
 * @returns `true` when the control must be disabled (no user writes).
 * @example
 * ```ts
 * const locked = isOidReadOnly({ onlyDisplay: widget.data.onlyDisplay, write: oidObject?.write });
 * ```
 */
export function isOidReadOnly(data: ReadOnlyData | undefined | null): boolean {
    return readsAsOn(data?.onlyDisplay) || data?.write === false;
}

export default isOidReadOnly;
