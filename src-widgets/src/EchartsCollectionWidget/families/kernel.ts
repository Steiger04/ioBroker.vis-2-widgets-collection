/**
 * Membership-Kernel — the ONE table of chart-type → family membership (ADR-0083).
 *
 * @module EchartsCollectionWidget/families/kernel
 * @remarks
 * Before the family registry, "family" (cartesian | pie) was a switch pattern scattered over
 * a dozen sites. This kernel is the single source every family-aware consumer reads:
 * `familyOf` answers the membership question, the family records (`FAMILY_CORES`,
 * `FAMILY_EDITORIAL`) are keyed by the family union. A third family lands as one kernel row
 * plus the two record entries — the records are typed over the full family union, so the
 * compiler walks the author through every place membership matters.
 *
 * The kernel is RUNTIME vocabulary (no editor imports): it sits below the editor, the option
 * builder and the pipeline, so everything may read it and it may read nothing above itself.
 */
import type {
    EchartsChartFamily,
    EchartsChartType,
    LegacyChartType,
} from '../../types/field-definitions/echarts-fields';

/**
 * The membership table: which concrete {@link EchartsChartType}s belong to which family.
 * Exhaustive over the family union by type — a new family does not compile without its row.
 */
export const FAMILY_CHART_TYPES: Record<EchartsChartFamily, readonly EchartsChartType[]> = {
    cartesian: ['line', 'bar', 'scatter'],
    pie: ['pie'],
};

/**
 * Derive the coordinate-system family from the concrete {@link EchartsChartType} (ADR-0008
 * addendum r4). line/bar/scatter → cartesian; pie → itself. The `default` arm also covers
 * legacy values still stored by older widgets (no auto-migration): the family-only
 * `'cartesian'`, the removed `'area'` type (r4 — area is a per-series fill mode now) AND the
 * removed gauge/radar families (ADR-0071 — healed to `'line'` on editor load) all render as
 * the cartesian family (default line).
 */
export const familyOf = (chartType: LegacyChartType): EchartsChartFamily => {
    for (const [family, types] of Object.entries(FAMILY_CHART_TYPES) as [
        EchartsChartFamily,
        readonly EchartsChartType[],
    ][]) {
        if (types.includes(chartType as EchartsChartType)) {
            return family;
        }
    }
    // line / bar / scatter / legacy 'cartesian' / legacy 'area' / legacy 'gauge'/'radar' / undefined → cartesian
    return 'cartesian';
};
