/**
 * 1:1 cartesian axis-layout helpers (ADR-0018): the default layout assigned to an auto-created axis
 * and the predicate telling whether the series are still in the default 1:1 binding.
 *
 * @module EchartsCollectionWidget/editor/axisLayout
 */
import type { EchartsAxisConfig } from '../../types/field-definitions/echarts-fields';

/**
 * Generate a stable axis identity. `crypto.randomUUID` (modern browsers / vis-2 WebView) gives a
 * globally-unique id with no collision risk across reloads; a monotonic counter is the fallback.
 * The id is for React reconciliation only — the cartesian builder never emits it to echarts.
 */
let _axisIdSeq = 0;
export const nextAxisId = (): string => {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
        return crypto.randomUUID();
    }
    return `ax-${++_axisIdSeq}`;
};

/**
 * Backfill a stable {@link EchartsAxisConfig.id} on any axis missing one — the migration path for
 * axes created before the id existed (decoded blobs, legacy-synthesised axes). Called on editor load.
 * Axes that already carry an id are returned unchanged.
 */
export const normalizeAxes = (axes: readonly EchartsAxisConfig[]): EchartsAxisConfig[] =>
    axes.map(a => (a.id ? a : { ...a, id: nextAxisId() }));

/**
 * Position + offset for the i-th auto-created axis: alternate left/right, 80 px stagger per side
 * (`even → left`, `odd → right`, `offset = ⌊i/2⌋ × 80`). Geometry only — safe to re-apply on re-stagger
 * without clobbering the rest of an axis config (id/name/colour/min/max/…).
 */
export const axisPosition = (i: number): Pick<EchartsAxisConfig, 'position' | 'offset'> => ({
    position: i % 2 ? 'right' : 'left',
    offset: Math.floor(i / 2) * 80,
});

/**
 * Default layout for the i-th auto-created axis: a stable {@link nextAxisId id} + {@link axisPosition}
 * geometry + splitlines on axis 0 only. Used on series creation (history/live + duplicate), the
 * JSON-mode editor sync, manual "add axis", and to re-stagger after a delete (via {@link axisPosition},
 * non-destructive).
 *
 * Colour and name are NOT written here (ADR-0018): an axis inherits both from its bound series at
 * runtime (the cartesian builder's `a.color ?? seriesColor` / `a.name ?? seriesName`), so they track
 * the series across theme changes and renames. An explicit axis colour/name wins as an override. Writing
 * them as creation-time snapshots would freeze values that go stale the moment the series is recoloured
 * or renamed.
 */
export const axisLayout = (i: number): EchartsAxisConfig => ({
    id: nextAxisId(),
    ...axisPosition(i),
    splitLine: i === 0,
});

/** True when the series are in the default 1:1 binding (series j → axis j) — the auto-layout is intact. */
export const isOneToOne = (series: readonly { yAxisIndex?: number }[]): boolean =>
    series.every((s, idx) => s.yAxisIndex === idx);
