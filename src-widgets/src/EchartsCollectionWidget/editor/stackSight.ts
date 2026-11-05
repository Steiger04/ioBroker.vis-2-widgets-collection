/**
 * Stack sight — the editor's READ of the runtime stack plan (ADR-0084, ADR-0103 K2): which
 * series render SHARES, by the SAME rule the chart normalizes and formats with.
 *
 * @module EchartsCollectionWidget/editor/stackSight
 * @remarks
 * The plan needs the whole series list — whether a series renders shares can depend on its
 * neighbours (a raw-authored stack key that names a mode-resolved 100 % stack joins it). The
 * editor has no legend selection: every series counts as visible, the configuration's view.
 */
import { resolveAxisPlan } from '../axisResolution';
import { normalizeStackMode, resolveStackPlan, stackPlanSeriesOf } from '../stackMode';
import type {
    EchartsAxisConfig,
    EchartsCartesianType,
    EchartsSeriesMeta,
    EchartsStackMode,
} from '../../types/field-definitions/echarts-fields';

/**
 * Per series: renders shares (a visible member of a 100 % stack) — the series card reads its
 * Farbskala bounds as displayed percent for exactly these (ADR-0101 ticket 08).
 *
 * @param metas - The series the chart renders, in series order (JSON: the visible payload names).
 * @param defaultType - The chart's default cartesian type.
 * @param mode - The chart-level Stapelmodus.
 * @param yAxes - The configured Y axes.
 */
export const percentStackedSeries = (
    metas: readonly (EchartsSeriesMeta | undefined)[],
    defaultType: EchartsCartesianType,
    mode: EchartsStackMode,
    yAxes: readonly EchartsAxisConfig[],
): readonly boolean[] => {
    // No selection, no legend-only fallback: every entry is active (an unnamed entry counts as
    // active in the axis plan) — the bindings alone place the series on their emitted axes.
    const axes = resolveAxisPlan({
        axes: yAxes,
        entries: metas.map(m => ({ yAxisIndex: m?.yAxisIndex })),
        meta: [],
        series: [],
        selection: undefined,
    });
    return resolveStackPlan({
        series: metas.map(m => stackPlanSeriesOf(m, defaultType)),
        names: metas.map(() => ''),
        mode: normalizeStackMode(mode),
        axes,
    }).percent;
};
