/**
 * Whether two string lists hold the same entries, in any order.
 *
 * @module lib/helper/sameItems
 * @param a The one list.
 * @param b The other list.
 * @returns `true` when both have the same length and, sorted, the same entries.
 * @example
 * sameItems(['title', 'header2'], ['header2', 'title']); // true
 */
function sameItems(a: readonly string[], b: readonly string[]): boolean {
    return a.length === b.length && [...a].sort().join('\n') === [...b].sort().join('\n');
}

export default sameItems;
