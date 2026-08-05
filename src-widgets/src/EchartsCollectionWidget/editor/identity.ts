/**
 * Shared stable-id helpers for editor card lists (mark-lines, radar indicators).
 *
 * @module EchartsCollectionWidget/editor/identity
 * @remarks
 * Several editor lists (axes, series, threshold mark-lines, radar indicators) render one card per
 * item and must reconcile by stable identity, not array index — `key={i}` unmounts the WRONG card
 * when a middle item is deleted. Axes and series each have a dedicated module
 * (`axisLayout.nextAxisId` / `seriesIdentity.nextSeriesId`); this module is the shared helper for
 * the smaller lists (mark-lines, indicators) so they don't each need their own generator. The id is
 * editor-only — every option builder reads its item type field-by-field, so it never reaches echarts.
 */

/**
 * Generate a stable identity. `crypto.randomUUID` (modern browsers / vis-2 WebView) gives a
 * globally-unique id with no collision risk across reloads; a monotonic counter is the fallback.
 */
let _idSeq = 0;
export const nextStableId = (): string => {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
        return crypto.randomUUID();
    }
    return `id-${++_idSeq}`;
};

/**
 * Backfill a stable `id` on any item missing one — the migration path for items created before the
 * id existed (decoded blobs) or whose save path drops it. Items that already carry an id are returned
 * unchanged (same reference).
 */
export const withStableIds = <T extends { id?: string }>(items: readonly T[]): T[] =>
    items.map(item => (item.id ? item : { ...item, id: nextStableId() }));
