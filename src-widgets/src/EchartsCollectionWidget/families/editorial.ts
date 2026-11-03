/**
 * FAMILY_EDITORIAL — the editorial record of the family registry (ADR-0083 ticket 02).
 *
 * @module EchartsCollectionWidget/families/editorial
 * @remarks
 * The editor-facing half of a family profile: the rail slots (where the family's sections sit
 * in the rail), the chart-type picker entries (values, labels, glyphs), the family branch of
 * the advisory validation, and the legacy chart-type heal. Unlike {@link module:EchartsCollectionWidget/families/cores}
 * this record DOES import the section modules — it is editor vocabulary by design, so every
 * test importing it belongs in the DOM pool (DOM_TS_TESTS).
 *
 * The SectionKey union in `editor/validation` derives its family share from this record via a
 * type-only import — the runtime graph stays acyclic (editor → runtime one way).
 */
import type { FC, ReactNode } from 'react';

import type {
    EchartsCartesianType,
    EchartsChartFamily,
    EchartsChartType,
    LegacyChartType,
} from '../../types/field-definitions/echarts-fields';
import { CARTESIAN_EDITORIAL } from './cartesian/editorial';
import { PIE_EDITORIAL } from './pie/editorial';
import { familyOf } from './kernel';
import type { EditorState, SetEditor } from '../editor/editorState';
import type { OidPickerCtx } from '../editor/OidPicker';
import type { SectionTabsFocus } from '../../components/controls';
import type { IssueMap, ValidationIssue } from '../editor/issueTabs';
import type { ValidateEditorInputs } from '../editor/validation';
import type { TFunc } from '../editor/summaries';
import type { StructureAdvisory } from '../editor/structureEvents';

/**
 * The fat, uniform prop bundle every rail-slot renderer receives — deliberately the SUPERSET
 * (the axes slot's need defines it); each section picks the fields it owns. Carries the
 * working copy + setter (slice-typed sections accept both contravariantly, ADR-0049), the
 * picker context, the ADR-0073 tab focus, the section's issues, and the JSON sights the
 * cartesian slot reads.
 */
export interface RailSlotProps {
    state: EditorState;
    set: SetEditor;
    pickerCtx: OidPickerCtx;
    /** External tab jump (ADR-0073): the focus request's tab selects once. */
    focusTab?: SectionTabsFocus;
    /** This section's validation findings — the per-tab warning dot feed. */
    issues?: ValidationIssue[];
    /** JSON-mode payload series names, in payload order (drives the JSON axis sight). */
    jsonSeriesNames?: string[];
    /** The effective X is a CATEGORY axis (ADR-0075 json-table) — hides the X-Karte's Time format. */
    xIsCategory?: boolean;
    /** The modal's notice host (ADR-0067 addendum 2026-11-03) — structure-event advisories. */
    onAdvisory?: (advisory: StructureAdvisory) => void;
}

/**
 * One family-owned section slot of the rail — the position directly after the Series section
 * (n per family; order = rail order). The key is pure runtime addressing (open state, focus
 * requests, issue grouping), never persisted; the titleKey resolves via `Generic.t`.
 */
export interface RailSlot<K extends string = string> {
    key: K;
    titleKey: string;
    render: FC<RailSlotProps>;
    /** The collapsed section's one-line digest (ADR-0010 summary lines). */
    summarize: (state: EditorState, t: TFunc) => string;
}

/** One chart-type picker entry — value, i18n label key, glyph. */
export interface PickerEntry {
    value: EchartsChartType;
    label: string;
    icon: ReactNode;
}

/**
 * The editorial half of a family profile. `validate` may address BASE sections too (the
 * cartesian branch pushes onto series and colours); `healChartType` normalizes the legacy
 * chart-type values older widgets still store (ADR-0008 r4 + ADR-0071) — absent = identity.
 */
export interface FamilyEditorial<K extends string = string> {
    railSlots: ReadonlyArray<RailSlot<K>>;
    picker: ReadonlyArray<PickerEntry>;
    validate?: (state: EditorState, inputs?: ValidateEditorInputs) => IssueMap;
    healChartType?: (
        chartType: Exclude<LegacyChartType, undefined>,
        firstSeriesType?: EchartsCartesianType,
    ) => EchartsChartType;
}

/**
 * Every family's editorial half, keyed by the family union. `satisfies` keeps the
 * compile-locked lockstep (a new family does not compile without its editorial entry) while
 * PRESERVING each profile's literal slot-key types — the SectionKey derivation and every
 * rail dispatcher read the literals from here.
 */
export const FAMILY_EDITORIAL = {
    cartesian: CARTESIAN_EDITORIAL,
    pie: PIE_EDITORIAL,
} satisfies Record<EchartsChartFamily, FamilyEditorial>;

/**
 * The chart-type picker's entries — the profiles' picker entries concatenated in registry
 * order (family by family). The picker renders exactly this list; a third family appends its
 * glyphs automatically.
 */
export const chartTypePickerEntries = (): readonly PickerEntry[] =>
    Object.values(FAMILY_EDITORIAL).flatMap(editorial => editorial.picker);

/**
 * The editorial half of the family a chart type belongs to — the one accessor the editor
 * dispatches through (rail slots, picker, validation, heal), so no site copies the
 * `FAMILY_EDITORIAL[familyOf(...)]` navigation.
 */
export const editorialOf = (chartType: LegacyChartType): (typeof FAMILY_EDITORIAL)[keyof typeof FAMILY_EDITORIAL] =>
    FAMILY_EDITORIAL[familyOf(chartType)];
