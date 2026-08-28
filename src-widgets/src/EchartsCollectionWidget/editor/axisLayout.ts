/**
 * Cartesian axis-layout + series↔axis coupling helpers: the 1:1 auto-layout assigned to an
 * auto-created axis + the predicate telling whether every series still owns its axis (ADR-0018,
 * bound-aware since ADR-0066); and the axis-as-independent-citizen coupling — rebind target, the
 * sticky JSON reconcile, and the effective axis name (ADR-0025/0026). Since ADR-0066 a series
 * leaving its axis keeps it as an unbound axis in EVERY mode: nothing prunes anymore, only an
 * explicit axis-delete removes an axis.
 *
 * @module EchartsCollectionWidget/editor/axisLayout
 */
import { nextStableId } from './stableId';
import type { EchartsAxisConfig } from '../../types/field-definitions/echarts-fields';

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
 * Default layout for the i-th auto-created axis: a stable id (`nextStableId('ax-')` from
 * {@link module:EchartsCollectionWidget/editor/stableId} — for React reconciliation only, the
 * cartesian builder never emits it to echarts) + {@link axisPosition} geometry + splitlines on
 * axis 0 only. Used on series creation (history/live + duplicate), the JSON-mode editor sync,
 * manual "add axis", and to re-stagger after a delete (via {@link axisPosition},
 * non-destructive).
 *
 * Colour and name are NOT written here (ADR-0018): an axis inherits both from its bound series at
 * runtime (the cartesian builder's `a.color ?? seriesColor` / `a.name ?? seriesName`), so they track
 * the series across theme changes and renames. An explicit axis colour/name wins as an override. Writing
 * them as creation-time snapshots would freeze values that go stale the moment the series is recoloured
 * or renamed.
 */
export const axisLayout = (i: number): EchartsAxisConfig => ({
    id: nextStableId('ax-'),
    ...axisPosition(i),
    splitLine: i === 0,
});

/**
 * The axis indices at least one series binds — the **bound set** (ADR-0066). A series with
 * `yAxisIndex === undefined` counts as bound to axis 0 (mirrors the builder's `e.yAxisIndex ?? 0`).
 * Every configured axis OUTSIDE this set is an unbound axis: kept in the editor with its config,
 * never emitted to the chart.
 */
export const boundAxisIndices = (series: readonly { yAxisIndex?: number }[]): Set<number> => {
    const bound = new Set<number>();
    for (const s of series) {
        bound.add(typeof s.yAxisIndex === 'number' ? s.yAxisIndex : 0);
    }
    return bound;
};

/**
 * True when every series sits on its OWN bound axis — a bijection between series and bound axes,
 * i.e. the dense 1:1 layout MODULO unbound axes (ADR-0066 supersedes the positional
 * `series j → axis j` reading of ADR-0018's dense check). A rebound series that left a hole still
 * owns its axis, so duplicating still yields a fresh axis; only a genuinely shared axis (2+ series
 * on it) is non-dense and makes the copy inherit the source binding.
 */
export const isOneToOneBound = (series: readonly { yAxisIndex?: number }[]): boolean =>
    boundAxisIndices(series).size === series.length;

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
 * - **Unbound axes persist (ADR-0066):** a name no longer visible (hidden or gone) is cleared; the
 *   freed axis STAYS as an unbound axis — selectable in the dropdown, deletable on its card, never
 *   rendered. Same rule as a manual rebind in history/live: only an explicit axis-delete removes an
 *   axis, so the reconcile never drops or re-indexes anything.
 *
 * Pure — the caller (the modal effect on payload/mode change) writes the result back. Not a hook.
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
    // 2. Clear yAxisIndex on entries no longer visible (hidden or gone) so they don't anchor an axis
    //    (its axis rests unbound instead — the builder never renders it).
    for (const key of Object.keys(next)) {
        if (!visibleNames.includes(key) && next[key].yAxisIndex !== undefined) {
            next[key] = { ...next[key], yAxisIndex: undefined };
        }
    }
    return { yAxes: packStaggeredAxes(axes), overlay: next };
};
