/**
 * Cartesian axis-layout + series↔axis coupling helpers: the 1:1 auto-layout assigned to an
 * auto-created axis + the predicate telling whether the series are still in the default 1:1 binding
 * (ADR-0018); and the axis-as-independent-citizen coupling — rebind target, orphan-cleanup, and the
 * effective axis name (ADR-0025).
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

/** Pixel stage between stacked axes on the same side (ADR-0018). */
export const AXIS_STAGGER_STAGE = 80;

/**
 * Position + offset for the i-th auto-created axis: alternate left/right, 80 px stagger per side
 * (`even → left`, `odd → right`, `offset = ⌊i/2⌋ × stage`). Geometry only — safe to re-apply on
 * re-stagger without clobbering the rest of an axis config (id/name/colour/min/max/…).
 */
export const axisPosition = (i: number): Pick<EchartsAxisConfig, 'position' | 'offset'> => ({
    position: i % 2 ? 'right' : 'left',
    offset: Math.floor(i / 2) * AXIS_STAGGER_STAGE,
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

/**
 * Re-stagger the axes so both sides sit densely on the 80-px raster with no overlaps (ADR-0028).
 * Each side is repacked independently to 0/80/160… by running order (mirrors {@link axisPosition}'s
 * left/right interleaving). Position is preserved — only the offset is normalised, so manual
 * left/right choices stay intact while gaps close.
 *
 * Runs **unconditionally** — ADR-0028 reversed ADR-0023 #4's raster-only escape hatch. A structural
 * change (an axis flipped left↔right, or one deleted) must resolve the collision the change can
 * create, even when some offsets were hand-tuned. A hand-tuned offset is therefore a fine-justure
 * that survives only until the next structural change; the trigger is `position` (the flip), never a
 * bare offset edit.
 */
export const packStaggeredAxes = (axes: readonly EchartsAxisConfig[]): EchartsAxisConfig[] => {
    let leftSeen = 0;
    let rightSeen = 0;
    return axes.map(a => {
        if (a.position === 'right') {
            return { ...a, offset: rightSeen++ * AXIS_STAGGER_STAGE };
        }
        return { ...a, offset: leftSeen++ * AXIS_STAGGER_STAGE };
    });
};

/**
 * Pick the axis a deleted axis' series should rebind onto (ADR-0025): the first surviving axis
 * (by index) whose `format` matches the deleted axis' — the proxy for "same unit" (empty matches
 * empty). Returns `null` when no survivor shares the format; the caller then falls back to axis 0 +
 * an advisory unit-mismatch toast. `survivors` is the post-delete axis array, so the returned index
 * is already the new `yAxisIndex`.
 */
export const sameFormatSurvivor = (
    deletedFormat: string | undefined,
    survivors: readonly EchartsAxisConfig[],
): number | null => {
    const want = deletedFormat ?? '';
    const idx = survivors.findIndex(a => (a.format ?? '') === want);
    return idx === -1 ? null : idx;
};

/**
 * Whether an axis carries a tick override that makes echarts IGNORE `alignTicks` on it (ADR-0034).
 * echarts only honours `alignTicks` on an axis whose tick interval is auto-computed; setting `min`,
 * `max`, `splitNumber`, or `minInterval` fixes the interval, so alignment silently no-ops. The
 * configurator shows a non-blocking warning when an axis opts into alignment AND sets one of these.
 * Pure — a UI display predicate over an {@link EchartsAxisConfig}.
 */
export const alignTicksDisabledByOverride = (a: EchartsAxisConfig): boolean =>
    a.min !== undefined || a.max !== undefined || a.splitNumber !== undefined || a.minInterval !== undefined;

/**
 * Drop an orphaned axis (no series remains on it) and re-index the survivors (ADR-0025). Pure — the
 * caller owns the re-stagger policy: this returns the de-orphaned `yAxes` with the orphan removed
 * but offsets UNCHANGED, so the caller applies {@link axisPosition} (dense auto-layout) or
 * {@link packStaggeredAxes} (shared/manual) as appropriate. Used by both series-DELETE and series-
 * REBIND — the orphan-check that used to run only on delete now runs whenever a series leaves an
 * axis (the phantom-axis fix).
 *
 * `series` is the POST-change series array (the deleted/rebound series already removed or rebound);
 * `orphanYi` is the PRE-drop axis index. Series with `yAxisIndex > orphanYi` shift down by 1.
 */
export const dropOrphanAxis = <T extends { yAxisIndex?: number }>(
    series: readonly T[],
    yAxes: readonly EchartsAxisConfig[],
    orphanYi: number,
): { series: T[]; yAxes: EchartsAxisConfig[] } => ({
    series: series.map(s => ({
        ...s,
        yAxisIndex: typeof s.yAxisIndex === 'number' && s.yAxisIndex > orphanYi ? s.yAxisIndex - 1 : s.yAxisIndex,
    })),
    yAxes: yAxes.filter((_a, idx) => idx !== orphanYi),
});

/**
 * Drop EVERY orphan axis (no series on it) and re-index the survivors (ADR-0033 — mode-switch orphan-
 * prune). The bulk form of {@link dropOrphanAxis}: a data-mode switch is a *bulk series-leave* — the
 * referencing series set changes wholesale (JSON overlay ↔ `state.series`) — so the same orphan-check
 * that runs on a single series-leave (delete/rebind, ADR-0025) runs here for all orphans at once.
 *
 * **Axis 0 always survives** (when present): it is the canonical axis the cartesian builder always
 * renders (its `[{}]` fallback) and that the load legacy-fallback restores for an empty blob — so a
 * prune must not wipe it either. This keeps a fresh 0-series widget on its single default axis and
 * collapses a 6-ghost JSON→Live switch (0 live series) to 1 axis, not 0. Orphans are axes 1..n that
 * no series references.
 *
 * A series with `yAxisIndex === undefined` counts as bound to axis 0 (mirrors the builder's
 * `e.yAxisIndex ?? 0`), so a never-explicitly-bound series still anchors axis 0. Pure: returns the
 * de-orphaned `series` (re-indexed onto the compacted array) + `yAxes` (survivors in original order);
 * the caller owns the re-stagger policy (this does NOT touch offsets). Series/axis refs are preserved
 * when nothing moved — the no-op case allocates nothing.
 */
export const pruneOrphanAxes = <T extends { yAxisIndex?: number }>(
    series: readonly T[],
    yAxes: readonly EchartsAxisConfig[],
): { series: T[]; yAxes: EchartsAxisConfig[] } => {
    // Indices still referenced by at least one series (undefined → 0), PLUS axis 0 — the canonical
    // default that always survives (see above).
    const bound = new Set<number>([0]);
    for (const s of series) {
        bound.add(typeof s.yAxisIndex === 'number' ? s.yAxisIndex : 0);
    }
    // Keep the referenced axes, preserving order; record the old→new index map as we go.
    const reindex = new Map<number, number>();
    const survivors: EchartsAxisConfig[] = [];
    for (let i = 0; i < yAxes.length; i++) {
        if (bound.has(i)) {
            reindex.set(i, survivors.length);
            survivors.push(yAxes[i]);
        }
    }
    // No axis dropped → nothing to re-index; return the inputs untouched (refs preserved, true no-op).
    if (survivors.length === yAxes.length) {
        return { series: series as T[], yAxes: yAxes as EchartsAxisConfig[] };
    }
    // Re-index the series onto the compacted array. A ref is kept when its axis did not move — incl.
    // an undefined series when axis 0 stayed put (it stays undefined, still implicit-0).
    const nextSeries = series.map(s => {
        if (typeof s.yAxisIndex !== 'number') {
            const mapped = reindex.get(0);
            return mapped === 0 || mapped === undefined ? s : { ...s, yAxisIndex: mapped };
        }
        const mapped = reindex.get(s.yAxisIndex);
        return mapped === s.yAxisIndex ? s : { ...s, yAxisIndex: mapped };
    });
    return { series: nextSeries, yAxes: survivors };
};

/**
 * The effective display name of axis `i` for the per-series binding dropdown (ADR-0025): the explicit
 * axis name, else the name inherited from the first series bound to it, else its 1-based index.
 * Mirrors the cartesian builder's axis-name resolution (`a.name ?? seriesName`) so the dropdown
 * matches what renders on the chart and the Axis-card title.
 */
export const effectiveAxisName = (
    axis: EchartsAxisConfig,
    i: number,
    series: readonly { yAxisIndex?: number; name?: string }[],
): string => {
    if (axis.name) {
        return axis.name;
    }
    const bound = series.find(s => s.yAxisIndex === i);
    return bound?.name ? bound.name : String(i + 1);
};

/**
 * Effective colour of axis `i` for the Axis-card swatch (ADR-0018): the first bound series' colour,
 * else its palette slot by the series' DISPLAY position. Mirrors both the cartesian builder
 * (`a.color ?? seriesColor`) and the Series-card swatch (`s.color ?? palette[seriesIndex]`), so the
 * Axis card matches the Series card of its bound series — the 1:1 colour invariant.
 *
 * `series` MUST be in DISPLAY order: history/live passes `state.series`; JSON passes the VISIBLE
 * payload names mapped through the overlay (in payload order, hidden ones filtered). The palette slot
 * is therefore the series' visible position, NOT the axis index. That distinction matters in JSON:
 * after a rebind OR a payload-name reorder the sticky reconcile keeps `yAxisIndex`, so the axis index
 * drifts off the visible position — indexing the palette by axis would then paint the swatch with the
 * wrong series' colour. The explicit axis colour is resolved by the caller (the swatch does
 * `a.color ?? effectiveAxisColor(...)`), not here.
 */
export const effectiveAxisColor = (
    i: number,
    series: readonly { yAxisIndex?: number; color?: string }[],
    palette: readonly string[],
): string | undefined => {
    const idx = series.findIndex(s => s.yAxisIndex === i);
    if (idx < 0) {
        return undefined;
    }
    return series[idx].color ?? palette[idx % palette.length];
};

/**
 * Reconcile the JSON-mode axes with the visible payload series (ADR-0026 — JSON 1:n). The name-keyed
 * overlay is the single source of truth for which axis a payload series binds to; this keeps it
 * consistent with the axis array as the (dynamic) payload + the user's bindings change:
 *
 * - **Sticky:** a visible name that already carries a VALID `yAxisIndex` (< axes.length) KEEPS it — a
 *   manual rebind survives payload changes (the whole point of JSON 1:n). The old force-`yAxisIndex
 *   = position` effect clobbered manual choice on every payload change.
 * - **1:1 default:** a new name (or one whose stored `yAxisIndex` went stale after axes were lost)
 *   gets a fresh appended axis — so a fresh payload still lands 1:1 (no regression for the common
 *   multi-unit case).
 * - **Orphan-cleanup:** a name no longer visible (hidden or gone) is cleared; axes with no visible
 *   series bound are dropped and the survivors re-indexed (mirrors history/live, ADR-0025).
 *
 * Pure — the caller (the modal effect on payload/mode change, the rebind handler on manual choice)
 * writes the result back. Not a hook.
 */
export const reconcileJsonAxes = <M extends { yAxisIndex?: number }>(
    visibleNames: readonly string[],
    overlay: Readonly<Record<string, M>>,
    yAxes: readonly EchartsAxisConfig[],
): { yAxes: EchartsAxisConfig[]; overlay: Record<string, M> } => {
    const next: Record<string, M> = { ...overlay };
    let axes = yAxes.slice();
    // 1. Ensure every visible name has a VALID yAxisIndex — keep an existing valid one (sticky),
    //    else append a fresh axis (the 1:1 default for new / stale names).
    for (const name of visibleNames) {
        const yi = next[name]?.yAxisIndex;
        if (typeof yi !== 'number' || yi < 0 || yi >= axes.length) {
            const fresh = axes.length;
            axes = [...axes, axisLayout(fresh)];
            next[name] = { ...next[name], yAxisIndex: fresh };
        }
    }
    // 2. Clear yAxisIndex on entries no longer visible (hidden or gone) so they don't anchor an axis.
    for (const key of Object.keys(next)) {
        if (!visibleNames.includes(key) && next[key].yAxisIndex !== undefined) {
            next[key] = { ...next[key], yAxisIndex: undefined };
        }
    }
    // 3. Orphan-cleanup: drop axes with no visible series, re-index the survivors + overlay indices.
    //    Loop — hiding several names at once can free several axes in one reconcile pass.
    let changed = true;
    while (changed) {
        changed = false;
        const bound = new Set(
            visibleNames.map(n => next[n]?.yAxisIndex).filter((v): v is number => typeof v === 'number'),
        );
        const orphan = axes.findIndex((_a, idx) => !bound.has(idx));
        if (orphan !== -1) {
            axes = axes.filter((_a, idx) => idx !== orphan);
            for (const name of visibleNames) {
                const yi = next[name]?.yAxisIndex;
                if (typeof yi === 'number' && yi > orphan) {
                    next[name] = { ...next[name], yAxisIndex: yi - 1 };
                }
            }
            changed = true;
        }
    }
    return { yAxes: packStaggeredAxes(axes), overlay: next };
};
