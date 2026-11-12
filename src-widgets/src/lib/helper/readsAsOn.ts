/**
 * Whether a boolean attribute value reads as on — the one reading of a checkbox attribute that may
 * carry the text a vis-2 binding resolves to.
 *
 * @module lib/helper/readsAsOn
 * @remarks
 * vis-2 replaces a binding in any string attribute with text (`Vis/visFormatUtils.tsx`
 * `formatBinding`: `false` becomes `'false'`, `0` becomes `'0'`), checkbox fields included (the
 * host's own note: "Bindings can deliver only strings"). Read here: `'false'`, `'0'` and every
 * falsy value are off, every other value is on. The Sperre reads `onlyDisplay` with it
 * ({@link module:lib/helper/isOidReadOnly}); the Rückfall-Regel reads every bound checkbox field
 * with it ({@link module:lib/usableWidgetData}).
 */

/**
 * @param value - The attribute value: a boolean, or the host's text for a bound attribute.
 * @returns `true` when the value reads as on.
 */
export const readsAsOn = (value: unknown): boolean => Boolean(value) && value !== 'false' && value !== '0';

export default readsAsOn;
