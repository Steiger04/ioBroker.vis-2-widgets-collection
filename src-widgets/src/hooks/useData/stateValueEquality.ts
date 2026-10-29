/**
 * State value equality contract.
 *
 * @module hooks/useData/stateValueEquality
 */

/**
 * Named contract for deciding whether a configured state value and a backend
 * OID value describe the same state.
 *
 * Two values count as "the same state" exactly when their string coercions are
 * equal (`String(configured) === String(backend)`). ioBroker delivers the
 * same logical value as `1` or `'1'` depending on source and state type, so
 * every activity check — the state loop and index search inside `useData`,
 * the button-group value matching, the radio `checked` comparison — must go
 * through this function instead of a type-strict comparison. A strict `===`
 * would mark `1` and `'1'` as different states.
 *
 * **Edge cases** (frozen legacy behavior, characterized in
 * `stateValueEquality.test.ts`):
 * - `null` and `undefined` are different states (`'null'` vs `'undefined'`),
 *   and each matches its own literal string form.
 * - A number state configured with non-numeric input coerces to `NaN`, whose
 *   string form is `'NaN'`. Real backend values never stringify to `'NaN'`
 *   (ioBroker serializes `NaN` as `null`), so such a state can never become
 *   active. The comparison itself stays purely string-based — there is no
 *   `NaN` special-casing, so a backend value whose string form is literally
 *   `'NaN'` would match. This quirk is deliberately not "fixed".
 *
 * @param configured - The configured state value (e.g. a button's value)
 * @param backend - The current backend OID value
 * @returns true when both values share the same string coercion
 * @example
 * ```typescript
 * sameStateValue(1, '1'); // true — number state matches string backend value
 * sameStateValue(null, undefined); // false — 'null' vs 'undefined'
 * ```
 */
export function sameStateValue(configured: unknown, backend: unknown): boolean {
    return String(configured) === String(backend);
}
