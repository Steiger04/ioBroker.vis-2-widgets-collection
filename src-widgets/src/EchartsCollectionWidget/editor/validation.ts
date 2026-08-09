/**
 * Advisory validation for the v3 echarts configurator (ADR-0010).
 *
 * @module EchartsCollectionWidget/editor/validation
 * @remarks
 * Pure functions over the editor's working {@link EditorState}. The UI consumes them twice:
 * field-level helper texts inside a section, and the **warning roll-up** chip in a collapsed
 * section header (the only honest answer to collapsed content). Validation NEVER blocks Apply —
 * it warns, it does not patronise. Anything that must be enforced belongs in `saveEditorState`
 * (normalisation), not here.
 */
import { familyOf } from '../optionBuilder';
import type { EditorState } from './editorState';

/** The section keys of the v3 rail (family-aware inventory is computed in EchartsEditorSections). */
export type SectionKey =
    | 'series'
    | 'dataSource'
    | 'title'
    | 'legend'
    | 'tooltip'
    | 'axesZoom'
    | 'family'
    | 'colors'
    | 'behavior'
    | 'advancedJson';

/** One validation finding: an i18n key plus optional `%s` interpolation args. */
export interface ValidationIssue {
    key: string;
    args?: string[];
}

/** Validation findings grouped by the section they surface in. */
export type SectionIssues = Partial<Record<SectionKey, ValidationIssue[]>>;

/**
 * Validate the working state.
 *
 * @param state - Current editor state.
 * @returns Issues grouped by section (absent key = section is clean).
 */
export const validateEditor = (state: EditorState): SectionIssues => {
    const issues: SectionIssues = {};
    const push = (section: SectionKey, key: string, ...args: string[]): void => {
        (issues[section] ??= []).push({ key, args: args.length ? args : undefined });
    };
    const family = familyOf(state.chartType);

    if (family === 'cartesian' || family === 'pie') {
        state.series.forEach((s, i) => {
            if (!s.oid) {
                push('series', 'echarts_val_oid_missing', s.name || `${i + 1}`);
            }
        });
    } else if (family === 'gauge') {
        if (!state.series[0]?.oid) {
            push('series', 'echarts_val_oid_missing', state.series[0]?.name || '1');
        }
        if ((state.gauge.min ?? 0) >= (state.gauge.max ?? 100)) {
            push('family', 'echarts_val_gauge_range');
        }
    } else if (family === 'radar') {
        state.radar.indicators.forEach((ind, i) => {
            if (!ind.oid) {
                push('series', 'echarts_val_oid_missing', ind.name || `${i + 1}`);
            }
            if (!(typeof ind.max === 'number' && ind.max > 0)) {
                push('series', 'echarts_val_radar_max', ind.name || `${i + 1}`);
            }
        });
    }

    if (family === 'cartesian') {
        if (state.yAxes.some(ax => typeof ax.min === 'number' && typeof ax.max === 'number' && ax.min >= ax.max)) {
            push('axesZoom', 'echarts_val_yminmax');
        }
        if (state.visualMap.enabled && state.visualMap.min >= state.visualMap.max) {
            push('colors', 'echarts_val_vmap_range');
        }
    }

    return issues;
};

/**
 * Count the bound items a chart-family switch would silently drop on Apply (ADR-0010).
 * The warning chip under the type picker appears when this is > 0.
 *
 * Survival rules per target family: cartesian/pie keep all series OIDs (radar indicators are
 * dropped); gauge keeps only the first series OID (and drops any radar indicators); radar keeps
 * the indicator OIDs (all series OIDs are dropped).
 *
 * @param state - Current editor state (with the TARGET chart type already selected).
 */
export const familySwitchLoss = (state: EditorState): number => {
    const family = familyOf(state.chartType);
    const boundSeries = state.series.filter(s => s.oid).length;
    const boundIndicators = state.radar.indicators.filter(i => i.oid).length;
    if (family === 'gauge') {
        return Math.max(0, boundSeries - 1) + boundIndicators;
    }
    if (family === 'radar') {
        return boundSeries;
    }
    return boundIndicators;
};
