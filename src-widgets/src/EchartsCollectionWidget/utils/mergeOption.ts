/**
 * echarts option merge utilities — the data-wins seam (ADR-0007, supersedes ADR-0005).
 *
 * @module EchartsCollectionWidget/utils/mergeOption
 * @remarks
 * Three layers merge into the final echarts option. The GUI owns all presentation (ADR-0007),
 * so the priority is `themeBase` → `userOverrides` (U) → `generated` (G): G wins every collision
 * with U; U only supplements keys the GUI does not expose.
 *  - `themeBase`        — MUI-derived presentation (text/axis colours, font) from buildEchartsTheme.
 *  - `userOverrides` (U)— demoted supplemental presentation from the Advanced JSON tab (keys the
 *                         GUI does not expose, e.g. `graphic`, exotic `animationEasing`).
 *  - `generated` (G)    — data-driven option built by the family builder: the series DATA +
 *                         series names + coordinate system + axis types, PLUS the GUI-authored
 *                         presentation (per-series styling, chart-wide legend/tooltip/animation/
 *                         dataZoom/thresholds/visualMap). Wins every collision with U.
 *
 * The data-binding keys are force-set after the merge: `series[].data` is written back per index
 * (U may supplement per-series presentation keys it merges UNDER G, but the data points and any
 * GUI-authored styling always come from G), and `legend.data` is forced back to G's series names.
 * `title.text` is injected from the live `titleText` field by the body after this merge.
 */
import type { EChartsOption } from 'echarts';

/**
 * Minimal deep merge: `over` wins, plain objects merged recursively, arrays replaced.
 *
 * @param base - Base object (copied, never mutated).
 * @param over - Overrides applied on top (wins on conflicts).
 * @returns A new merged object.
 */
export const deepMerge = (
    base: Record<string, unknown>,
    over: Record<string, unknown> | null | undefined,
): Record<string, unknown> => {
    if (!over) {
        return { ...base };
    }
    const out: Record<string, unknown> = { ...base };
    for (const key of Object.keys(over)) {
        const b = out[key];
        const o = over[key];
        out[key] =
            b && typeof b === 'object' && !Array.isArray(b) && o && typeof o === 'object' && !Array.isArray(o)
                ? deepMerge(b as Record<string, unknown>, o as Record<string, unknown>)
                : o;
    }
    return out;
};

/**
 * Merges the option layers so the GUI owns all presentation (ADR-0007): the theme base is the
 * floor, the demoted Advanced JSON (U) supplements keys the GUI does not expose, and the
 * generated option (G) wins every collision — so a stale U value can never silently override a
 * GUI control. The data-binding keys are then force-set: `series[].data` is written back per
 * index (U may supplement per-series presentation the GUI does not own, but cannot inject, drop,
 * rebind, or restyle-over-GUI data) and `legend.data` is forced back to G's series names.
 *
 * Layer order, lowest → highest priority: `themeBase` → `userOverrides` → `generated`.
 *
 * @param generated     - G: data-driven option + GUI-authored presentation (family builder output).
 * @param userOverrides - U: supplemental presentation JSON from the Advanced tab.
 * @param themeBase     - MUI-derived presentation base from buildEchartsTheme.
 * @returns The final merged echarts option.
 */
export const mergeOptionForEcharts = (
    generated: EChartsOption,
    userOverrides: Record<string, unknown>,
    themeBase: EChartsOption,
): EChartsOption => {
    // Wholly GUI-owned components (ADR-0044): title/legend/tooltip are configured in their own
    // sections — each carries a raw escape hatch folded UNDER its builder's output — so a U
    // attempt is hard-ignored (deleted, not masked: it cannot merge through on any subkey).
    const u = { ...userOverrides };
    delete u.title;
    delete u.legend;
    delete u.tooltip;

    // GUI wins: U supplements the floor, G is applied on top so every GUI-owned key wins its
    // collisions with U (ADR-0007 "the GUI value wins").
    const merged = deepMerge(deepMerge(themeBase as Record<string, unknown>, u), generated as Record<string, unknown>);

    // Force-set the data-binding keys. `series[].data` is forced per index: U may contribute
    // per-series presentation keys the GUI does not set (deep-merged UNDER G so G wins), but the
    // data points always come from G — U can never inject, drop, rename, or rebind series.
    const gSeries = generated.series as ReadonlyArray<Record<string, unknown>> | undefined;
    const uSeries = (u.series as ReadonlyArray<Record<string, unknown>> | undefined) ?? [];
    if (gSeries !== undefined) {
        merged.series = gSeries.map((g, i) => {
            const entry = uSeries[i] ? deepMerge(uSeries[i], g) : { ...g };
            entry.data = g.data;
            return entry;
        });
    }

    const gLegend = generated.legend as Record<string, unknown> | undefined;
    const mergedLegend = merged.legend as Record<string, unknown> | undefined;
    if (gLegend?.data !== undefined && mergedLegend && !Array.isArray(mergedLegend)) {
        mergedLegend.data = gLegend.data;
    }
    return merged as EChartsOption;
};

/**
 * Apply a per-series raw echarts JSON override (ADR-0015): parse `raw`, deep-merge it UNDER the
 * GUI-authored `entry` (the GUI wins every collision; the data points are force-set afterwards by
 * the caller). Invalid or non-object JSON is silently ignored. Used by the cartesian/pie builders to
 * fold the card-level escape hatch into G — so it wins over a chart-level U `series` entry (G > U).
 */
export const applyRawOverride = (
    entry: Record<string, unknown>,
    raw: string | undefined | null,
): Record<string, unknown> => {
    const trimmed = (raw ?? '').trim();
    if (!trimmed) {
        return entry;
    }
    let parsed: Record<string, unknown> = {};
    try {
        const v = JSON.parse(trimmed);
        if (v && typeof v === 'object' && !Array.isArray(v)) {
            parsed = v as Record<string, unknown>;
        }
    } catch {
        /* invalid raw override — ignored (the validity is surfaced in the editor) */
    }
    return deepMerge(parsed, entry);
};
