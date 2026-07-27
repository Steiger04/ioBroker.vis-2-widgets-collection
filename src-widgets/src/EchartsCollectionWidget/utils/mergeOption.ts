/**
 * echarts option merge utilities — the data-wins seam (map decision 03).
 *
 * @module EchartsCollectionWidget/utils/mergeOption
 * @remarks
 * Four layers merge into the final echarts option, lowest to highest presentation priority:
 *  - `themeBase`        — MUI-derived presentation (text/axis colours, font) from buildEchartsTheme
 *  - `templateDefaults` — presentation defaults for the template (tooltip trigger, grid, …)
 *  - `generated` (G)    — data-driven option (owns `series`, `xAxis`/`yAxis` type+bounds, `legend.data`)
 *  - `userOverrides` (U)— user presentation overrides from the Advanced JSON tab
 *
 * `series` and `legend.data` are the protected data keys: after the merge they are forced
 * back to G, so a user cannot inject/drop data points or rename the legend from the Advanced
 * box (user-wins power mode is deferred past v1). The rest of `legend` (position, show, …)
 * and `xAxis`/`yAxis` stay deep-merged — G contributes type/bounds and series names, U
 * contributes styling — exactly the hybrid described in decision 03.
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
 * Merges theme base, template presentation defaults and the generated data option (G),
 * layers the user overrides (U) on top, then forces the generated `series` back so the
 * data binding cannot be broken (data-wins, map decision 03).
 *
 * @param generated       - G: data-driven option (series, axes, legend.data).
 * @param templateDefaults - Template presentation defaults (tooltip, grid, …).
 * @param userOverrides   - U: user presentation JSON from the Advanced tab.
 * @param themeBase       - MUI-derived presentation base from buildEchartsTheme.
 * @returns The final merged echarts option.
 */
export const mergeOptionForEcharts = (
    generated: EChartsOption,
    templateDefaults: Record<string, unknown>,
    userOverrides: Record<string, unknown>,
    themeBase: EChartsOption,
): EChartsOption => {
    const merged = deepMerge(
        deepMerge(
            deepMerge(themeBase as Record<string, unknown>, templateDefaults),
            generated as Record<string, unknown>,
        ),
        userOverrides,
    );
    // Protect the data binding: the generated `series` (data points) and `legend.data`
    // (series names) always win — U must not be able to inject/drop data or rename the
    // legend from the Advanced box (user-wins power mode is deferred past v1). The rest of
    // `legend` (position, show, …) and the axes stay deep-merged: G owns type/bounds/names,
    // U owns styling.
    if (generated.series !== undefined) {
        merged.series = generated.series;
    }
    const gLegend = generated.legend as Record<string, unknown> | undefined;
    const mergedLegend = merged.legend as Record<string, unknown> | undefined;
    if (gLegend?.data !== undefined && mergedLegend && !Array.isArray(mergedLegend)) {
        mergedLegend.data = gLegend.data;
    }
    return merged as EChartsOption;
};
