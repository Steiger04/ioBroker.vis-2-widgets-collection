/**
 * Stable series identity (the series analogue of {@link module:axisLayout}'s axis-id helpers).
 *
 * @module EchartsCollectionWidget/editor/seriesIdentity
 * @remarks
 * A series card list keyed by array index (`key={i}`) unmounts the WRONG card when a middle series
 * is deleted — React reconciles by position, so the last card disappears and the deleted slot shows
 * the next series' data. A stable `id` on `EchartsSeriesMeta` fixes it (`key={s.id}`). The id is
 * editor-only: every option builder reads meta field-by-field, so it never reaches echarts.
 */
import type { EditorSeries } from './editorState';

/**
 * Generate a stable series identity. `crypto.randomUUID` (modern browsers / vis-2 WebView) gives a
 * globally-unique id with no collision risk across reloads; a monotonic counter is the fallback.
 */
let _seriesIdSeq = 0;
export const nextSeriesId = (): string => {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
        return crypto.randomUUID();
    }
    return `sr-${++_seriesIdSeq}`;
};

/**
 * Backfill a stable {@link EchartsSeriesMeta.id} on any series missing one — the migration path for
 * series created before the id existed (loaded `seriesConfig` blobs) and for families whose save
 * path drops the id (gauge/radar persist only name+colour). Called on editor load. Series that
 * already carry an id are returned unchanged (same reference).
 */
export const normalizeSeries = (series: readonly EditorSeries[]): EditorSeries[] =>
    series.map(s => (s.id ? s : { ...s, id: nextSeriesId() }));
