/**
 * Whether an OID should be treated as read-only (no user writes) for a collection widget.
 *
 * @module lib/helper/isOidReadOnly
 * @remarks
 * Centralises the writability guard so every interactive widget disables its control the same way.
 *
 * Semantics (decided against the ioBroker state-roles convention — switches/values are writable,
 * only sensors/indicators set `write:false` explicitly):
 * - **Missing `write`** (`undefined`) → writable. The widget targets are conventionally writable
 *   states; a mere omission of `common.write` must not lock the control (that was the original bug:
 *   `!write` treated `undefined` as non-writable).
 * - **Explicit `write === false`** → read-only (sensors/indicators).
 * - **`onlyDisplay === true`** → read-only, regardless of `write` (user forced display-only, or the
 *   OID-change handler set it because `write === false`).
 *
 * The handler {@link module:lib/commonObjectFields} sets `onlyDisplay = (common.write === false)`
 * on OID change, so `onlyDisplay` already encodes the non-writable case for freshly selected OIDs.
 * The `write === false` fallback keeps the guard correct for widgets whose `onlyDisplay` is not
 * (yet) populated.
 */

/** Minimal slice of widget data the guard consumes. */
interface ReadOnlyData {
    /** User-forced display-only flag (set on OID change to `common.write === false`). */
    onlyDisplay?: boolean;
    /** Raw `common.write` of the selected OID (`undefined` when the field is absent). */
    write?: boolean;
}

/**
 * @param data - Widget data slice with `onlyDisplay` / `write` (usually `widget.data`).
 * @returns `true` when the control must be disabled (no user writes).
 * @example
 * ```ts
 * const isReadOnly = isOidReadOnly(widget.data);
 * <Radio disabled={isReadOnly} />
 * ```
 */
export function isOidReadOnly(data: ReadOnlyData | undefined | null): boolean {
    return Boolean(data?.onlyDisplay) || data?.write === false;
}

export default isOidReadOnly;
