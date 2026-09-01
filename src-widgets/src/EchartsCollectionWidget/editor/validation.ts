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
import { pruneSnippetIds } from './snippetComposition';
import { SERIES_TEMPLATES, seriesSlotOf, type SeriesTemplateSlot } from './seriesTemplates';
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
    | 'toolbox';

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

    state.series.forEach((s, i) => {
        if (!s.oid) {
            push('series', 'echarts_val_oid_missing', s.name || `${i + 1}`);
        }
    });

    if (family === 'cartesian') {
        // Stale series→axis binding (Q6): a stored `yAxisIndex` beyond the axis array (reachable
        // via hand-edit blobs or an axis-delete race) silently renders on axis 1 — the builder
        // clamps `yi >= total` to 0, and the card's dropdown display clamps the same way. The
        // warning says WHY the dropdown disagrees with the stored value. Deliberately NO warning
        // in the 0-axes state: deleting every axis is legal, the builder's empty-fallback catches
        // it, and a chorus of per-series warnings would drown the real cases.
        if (state.yAxes.length) {
            state.series.forEach((s, i) => {
                if (typeof s.yAxisIndex === 'number' && s.yAxisIndex >= state.yAxes.length) {
                    push('series', 'echarts_val_stale_yaxis', s.name || `${i + 1}`);
                }
            });
        }
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
 * What a boundary crossing deletes — the numbers of the warning chip (ADR-0067 + F10: the reset
 * wipes more than series and axes, and the chip must say so — markings and a set JSON data point
 * fall with it too).
 */
export interface BoundaryLoss {
    series: number;
    axes: number;
    /** Cartesian markings (markLines) the reset wipes — markings are cartesian-only (F10). */
    marks: number;
    /** The JSON data point (`jsonOid`) falls with the crossing when one is set (F10). */
    dataPoint: boolean;
}

/**
 * What a chart-FAMILY crossing (cartesian↔pie, ADR-0067) deletes from the current
 * state — the numbers of the type-picker warning chip. The crossing resets the whole data path,
 * so the loss is the ENTIRE series/axis set of the current family (the pre-ADR-0067 survival
 * model — cartesian→pie keeping the series as slices — is pensioned with it). Radar's data path
 * is its INDICATOR list (the polygon series is presentation); line↔bar↔scatter cross nothing and
 * never ask. Zero across the board loses nothing — no chip.
 */
export const familyBoundaryLoss = (state: EditorState): BoundaryLoss => {
    const family = familyOf(state.chartType);
    return {
        series: state.series.length,
        axes: state.yAxes.length,
        marks: family === 'cartesian' ? state.markLines.length : 0,
        dataPoint: !!state.jsonOid,
    };
};

/**
 * What the NEXT JSON-boundary crossing (into or out of JSON, ADR-0067) deletes from the current
 * state — the numbers of the mode-toggle warning chip. History/Live counts the authored series
 * and axes that fall on JSON entry; JSON counts the VISIBLE payload series (the live-resolved
 * names, falling back to the stored unhidden overlay entries when no payload preview exists) and
 * the axes. Zero across the board loses nothing — no chip. Verlauf↔Live crosses nothing and
 * never asks.
 */
export const jsonBoundaryLoss = (state: EditorState, jsonSeriesNames: readonly string[] = []): BoundaryLoss => {
    const unhidden = (names: readonly string[]): number => names.filter(n => !state.jsonHidden.includes(n)).length;
    const cartesian = familyOf(state.chartType) === 'cartesian';
    const marks = cartesian ? state.markLines.length : 0;
    const dataPoint = !!state.jsonOid;
    if (state.mode === 'json') {
        // A live payload preview is authoritative (ALL visible names counted — zero when every
        // name is hidden); the stored overlay entries are the fallback while no preview exists.
        const series = jsonSeriesNames.length
            ? unhidden(jsonSeriesNames)
            : unhidden(Object.keys(state.jsonSeriesStyle));
        return { series, axes: state.yAxes.length, marks, dataPoint };
    }
    return { series: state.series.length, axes: state.yAxes.length, marks, dataPoint };
};

/**
 * Count the ACTIVE template activations (ADR-0042) a chart-family switch would prune on Apply.
 * The LAST family-switch loss advice (the bound-OID share died with ADR-0067's data-path reset):
 * between the switch and Apply the stale ids sit inert in the working copy, and the prune rides
 * Apply.
 *
 * ADR-0067 note: since the family crossing RESETS every series, the historical survivor model
 * below (slot-stale activations on survivors) can only bite on
 * a working copy that never actually crossed — the post-switch case is vacuous (no series left).
 * Kept verbatim per the ticket ("die Snippet-Prune-Warnung bleibt unberührt"); the slot-stale
 * machinery still guards the load path over hand-edited blobs.
 */
export const familySwitchSnippetLoss = (state: EditorState): number => {
    const family = familyOf(state.chartType);
    const stale = (ids: string[] | undefined, slot: SeriesTemplateSlot): number =>
        ids ? ids.length - pruneSnippetIds(SERIES_TEMPLATES[slot], ids).length : 0;
    return state.series.reduce((total, s) => total + stale(s.snippets, seriesSlotOf(family, state.chartType, s)), 0);
};
