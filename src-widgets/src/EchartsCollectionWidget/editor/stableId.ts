/**
 * The single stable-id strategy for every keyed editor card list (series, axes, threshold
 * mark-lines, radar indicators).
 *
 * @module EchartsCollectionWidget/editor/stableId
 * @remarks
 * Card lists render one card per item and must reconcile by stable identity, not array index —
 * `key={i}` unmounts the WRONG card when a middle item is deleted. This module replaced three
 * generators with identical internals (identity.ts, seriesIdentity.ts, axisLayout's id helpers)
 * that differed only in prefix; now one crypto check + one counter fallback is maintained here,
 * and every list passes its prefix (`sr-` series, `ax-` axes, default `id-` everything else). The
 * prefix only decorates the counter fallback — with `crypto.randomUUID` available it never
 * appears. The id is editor-only — every option builder reads its item type field-by-field, so it
 * never reaches echarts.
 */

/**
 * Generate a stable identity. `crypto.randomUUID` (modern browsers / vis-2 WebView) gives a
 * globally-unique id with no collision risk across reloads; a monotonic counter with the list's
 * prefix is the fallback.
 */
let _idSeq = 0;
export const nextStableId = (prefix = 'id-'): string => {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
        return crypto.randomUUID();
    }
    return `${prefix}${++_idSeq}`;
};

/**
 * Backfill a stable `id` on any item missing one — the migration path for items created before the
 * id existed (decoded blobs) or whose save path drops it (gauge/radar series persist only
 * name+colour). Items that already carry an id are returned unchanged (same reference).
 */
export const withStableIds = <T extends { id?: string }>(items: readonly T[], prefix = 'id-'): T[] =>
    items.map(item => (item.id ? item : { ...item, id: nextStableId(prefix) }));
