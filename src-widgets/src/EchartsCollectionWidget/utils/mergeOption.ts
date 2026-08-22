/**
 * echarts option merge utilities — the theme-floor seam (ADR-0007, supersedes ADR-0005; the
 * three-layer U merge retired with the chart-level Advanced JSON, ADR-0045).
 *
 * @module EchartsCollectionWidget/utils/mergeOption
 * @remarks
 * The GUI owns all presentation (ADR-0007), so the layering is now two tiers:
 *  - `themeBase`     — MUI-derived presentation (text/axis colours, font) from buildEchartsTheme.
 *  - `generated` (G) — data-driven option built by the family builders: the series DATA +
 *                      series names + coordinate system + axis types, PLUS the GUI-authored
 *                      presentation (per-series styling, chart-wide legend/tooltip/animation/
 *                      dataZoom/thresholds/toolbox). Wins every collision with the floor.
 *
 * The former data-wins force-backs (`series[].data`, `legend.data`) existed only to guard
 * against a U contribution layering under G — with U gone they are structurally dead
 * ({@link deepMerge} already gives G every key it emits).
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
 * Layer the theme base UNDER the generated option (ADR-0007): G wins every collision, the theme
 * only floors the keys G does not emit. `title.text` is injected from the live `titleText` field
 * by the body after this merge.
 *
 * @param generated - G: data-driven option + GUI-authored presentation (family builder output).
 * @param themeBase - MUI-derived presentation base from buildEchartsTheme.
 * @returns The final merged echarts option.
 */
export const mergeGeneratedOverTheme = (generated: EChartsOption, themeBase: EChartsOption): EChartsOption =>
    deepMerge(themeBase as Record<string, unknown>, generated as Record<string, unknown>) as EChartsOption;

/**
 * Apply a per-series raw echarts JSON override (ADR-0015): parse `raw`, deep-merge it UNDER the
 * GUI-authored `entry` (the GUI wins every collision; the data points are force-set afterwards by
 * the caller). Invalid or non-object JSON is silently ignored. Used by the family builders to
 * fold the card/section-level escape hatches into G.
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
