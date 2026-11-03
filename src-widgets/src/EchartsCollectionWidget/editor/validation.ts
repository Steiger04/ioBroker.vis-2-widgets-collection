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
import { editorialOf, type FAMILY_EDITORIAL } from '../families/editorial';
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
