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
import { coreOf } from '../families/cores';
import { familyOf } from '../families/kernel';
import { editorialOf, type FAMILY_EDITORIAL } from '../families/editorial';
import type { FamilyBoundaryLoss } from '../families/types';
import { pruneSnippetIds } from './snippetComposition';
import { SERIES_TEMPLATES, seriesSlotOf, type SeriesTemplateSlot } from './seriesTemplates';
import type { EditorState } from './editorState';

/** The rail's family-agnostic base section keys — hand-written, every family carries them. */
export type BaseSectionKey =
    | 'series'
    | 'dataSource'
    | 'title'
    | 'legend'
    | 'tooltip'
    | 'colors'
    | 'behavior'
    | 'toolbox';

/**
 * The family share of the section keys — DERIVED from the editorial record (ADR-0083): each
 * family's rail-slot keys. A type-only import (the runtime graph stays acyclic); a third
 * family's slots join the union automatically.
 */
export type FamilySectionKey = (typeof FAMILY_EDITORIAL)[keyof typeof FAMILY_EDITORIAL]['railSlots'][number]['key'];

/** The section keys of the v3 rail (family-aware inventory is computed in EchartsEditorSections). */
export type SectionKey = BaseSectionKey | FamilySectionKey;

/** Validation findings grouped by the section they surface in. */
export type SectionIssues = Partial<Record<SectionKey, ValidationIssue[]>>;

// The ADR-0073 tab addressing lives in the ./issueTabs leaf (the sections' import — keeps the
// family-profile module graph acyclic, ADR-0083); re-exported here so import sites stay stable.
export { tabOfIssue, issueCountsByTab } from './issueTabs';
export type { ValidationIssue } from './issueTabs';
import { tabOfIssue, type ValidationIssue } from './issueTabs';

/**
 * The section's FIRST issue's tab (ADR-0073) — the Problems button / preview placeholder glue:
 * the jump carries this tab so the addressed section's tab row selects it. Undefined = no tab
 * to address. NOTE: validation is SECTION-granular today, so CARD tabs (a Y-axis card's Werte
 * tab) get no dots — the section jump lands beside the card; per-card dots wait for per-card
 * validation granularity (documented limit, spec ticket 08).
 */
export const firstIssueTabOf = (issues: SectionIssues | undefined, key: SectionKey): string | undefined => {
    const first = issues?.[key]?.[0];
    return first ? tabOfIssue(first) : undefined;
};

/**
 * validateEditor's external sight (ADR-0075 ticket 04): the socket-resolved facts the pure
 * state cannot know. `tableColumns` is the CHOSEN rows array's schema (the modal's
 * `useJsonTableSchema` subscription) — absent while no payload/schema exists (then the drift
 * checks stay silent; the Zuordnung tab owns that honest empty state).
 */
export interface ValidateEditorInputs {
    tableColumns?: readonly { path: string; type?: string }[];
}

/**
 * Validate the working state.
 *
 * @param state - Current editor state.
 * @param table - The socket-resolved table schema (ADR-0075), when the family is tabellarisch.
 * @returns Issues grouped by section (absent key = section is clean).
 */
export const validateEditor = (state: EditorState, table?: ValidateEditorInputs): SectionIssues => {
    const issues: SectionIssues = {};
    const push = (section: SectionKey, key: string, ...args: string[]): void => {
        (issues[section] ??= []).push({ key, args: args.length ? args : undefined });
    };
    // The tabellarische family binds yPath columns, not OIDs (`oid` stays '') — the OID check
    // is serien-förmig/Verlauf-only, the drift checks below are its table twin (decision 9).
    const isTable = state.mode === 'json' && state.jsonKind === 'table';

    state.series.forEach((s, i) => {
        if (!isTable && !s.oid) {
            push('series', 'echarts_val_oid_missing', s.name || `${i + 1}`);
        }
    });

    if (isTable && table?.tableColumns?.length) {
        const typeOf = (path: string): string | undefined => table.tableColumns!.find(c => c.path === path)?.type;
        state.series.forEach(s => {
            if (!s.yPath) {
                return; // an unset yPath is the authoring state — the picker owns that hint
            }
            const label = s.name || s.yPath;
            const type = typeOf(s.yPath);
            if (type === undefined) {
                // Drift (decision 9): the card STAYS (authored identity), the series renders
                // empty (the pipeline's null points) — this is the ⚠ that says why.
                push('series', 'echarts_val_ypath_missing', label);
            } else if (type === 'string') {
                // Advisory: a string Y column plots null points only (toPlottableNumber) — the
                // type badge said it at pick time, this says it at a distance.
                push('series', 'echarts_val_ypath_string', label);
            }
        });
    }

    // The family branch is the profile's (ADR-0083): the cartesian editorial owns the stale
    // series→axis binding, Y min≥max and visualMap range checks (it may address base sections
    // — series and colours — beside its own slot). The profile's issues APPEND to the base
    // findings in profile order, so each section's list stays byte-identical.
    const familyIssues = editorialOf(state.chartType).validate?.(state, table);
    if (familyIssues) {
        for (const [section, list] of Object.entries(familyIssues) as [
            SectionKey,
            NonNullable<SectionIssues[SectionKey]>,
        ][]) {
            (issues[section] ??= []).push(...list);
        }
    }

    return issues;
};

/**
 * What a boundary crossing deletes — the numbers of the warning chip (ADR-0067 + F10: the reset
 * wipes more than series and axes, and the chip must say so — markings and a set JSON data point
 * fall with it too). The shape lives with the family profiles since ADR-0083
 * (`FamilyBoundaryLoss`); this alias keeps the editor-side import site stable.
 */
export type BoundaryLoss = FamilyBoundaryLoss;

/**
 * What a chart-FAMILY crossing (cartesian↔pie, ADR-0067) deletes from the current state —
 * the numbers of the type-picker warning chip. Delegates to the family profile's data-path
 * loss (ADR-0083): the crossing resets the whole data path, so the loss is the ENTIRE
 * series/axis set of the current family (the pre-ADR-0067 survival model — cartesian→pie
 * keeping the series as slices — is pensioned with it); line↔bar↔scatter cross nothing and
 * never ask. Zero across the board loses nothing — no chip.
 */
export const familyBoundaryLoss = (state: EditorState): BoundaryLoss => coreOf(state.chartType).dataPath.loss(state);

/** How many names survive the deny-list — the VISIBLE payload series count both chips share. */
const unhiddenCount = (state: EditorState, names: readonly string[]): number =>
    names.filter(n => !state.jsonHidden.includes(n)).length;

/**
 * What the NEXT JSON-boundary crossing (into or out of JSON, ADR-0067) deletes from the current
 * state — the numbers of the mode-toggle warning chip. History/Live counts the authored series
 * and axes that fall on JSON entry; JSON counts the VISIBLE payload series (the live-resolved
 * names, falling back to the stored unhidden overlay entries when no payload preview exists) and
 * the axes. Zero across the board loses nothing — no chip. Verlauf↔Live crosses nothing and
 * never asks.
 */
export const jsonBoundaryLoss = (state: EditorState, jsonSeriesNames: readonly string[] = []): BoundaryLoss => {
    // The marks share is the profile's (ADR-0083) — cartesian counts its markings, pie has none.
    const marks = coreOf(state.chartType).dataPath.marksOf(state);
    const dataPoint = !!state.jsonOid;
    if (state.mode === 'json') {
        // A live payload preview is authoritative (ALL visible names counted — zero when every
        // name is hidden); the stored overlay entries are the fallback while no preview exists.
        const series = jsonSeriesNames.length
            ? unhiddenCount(state, jsonSeriesNames)
            : unhiddenCount(state, Object.keys(state.jsonSeriesStyle));
        return { series, axes: state.yAxes.length, marks, dataPoint };
    }
    return { series: state.series.length, axes: state.yAxes.length, marks, dataPoint };
};

/**
 * What the NEXT payload-family crossing (serien-förmig↔tabellarisch, ADR-0075) deletes — the
 * numbers of the family-switch chip. Same F10 scope as the other boundary chips with ONE
 * difference: `dataPoint` is always `false` — the crossing KEEPS jsonOid (the same state, read
 * the other way). Tabellarisch counts the AUTHORED series (`state.series`); serien-förmig the
 * visible payload names exactly like {@link jsonBoundaryLoss}'s json arm.
 */
export const jsonKindBoundaryLoss = (state: EditorState, jsonSeriesNames: readonly string[] = []): BoundaryLoss => {
    // The marks share is the profile's (ADR-0083) — cartesian counts its markings, pie has none.
    const marks = coreOf(state.chartType).dataPath.marksOf(state);
    if (state.jsonKind === 'table') {
        return { series: state.series.length, axes: state.yAxes.length, marks, dataPoint: false };
    }
    const series = jsonSeriesNames.length
        ? unhiddenCount(state, jsonSeriesNames)
        : unhiddenCount(state, Object.keys(state.jsonSeriesStyle));
    return { series, axes: state.yAxes.length, marks, dataPoint: false };
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
    return state.series.reduce(
        (total, s) => total + stale(s.snippets, seriesSlotOf(family, state.chartType, s, state.jsonKind)),
        0,
    );
};
