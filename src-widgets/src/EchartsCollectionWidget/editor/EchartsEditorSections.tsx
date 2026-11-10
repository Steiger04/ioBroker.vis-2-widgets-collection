/**
 * Sections rail for the v3 echarts configurator (ADR-0010) — replaces the v2 tabs.
 *
 * @module EchartsCollectionWidget/editor/EchartsEditorSections
 * @remarks
 * Pinned selectors on top (chart type, data mode, payload family — the three selections only;
 * the mode hints live in the Data source section and a crossing's loss reports AFTER the switch
 * through the modal's undo snackbar, ADR-0067 addendum 2026-11-03); below, the family-aware stack of collapsible SectionCards (the shared configurator
 * section shell, ADR-0038). Every section starts collapsed on open with a summary line (reverses
 * the ADR-0010 "Series starts expanded" default). Validation rolls up into the section
 * headers (⚠ count). The modal can steer a section via `focusSection` (expand + scroll into
 * view) — used by the clickable preview placeholder and the footer's problems button.
 */
import { useEffect, useMemo, useRef, useState, type FC } from 'react';
import { Box } from '@mui/material';

import Generic from '../../Generic';
import { translate } from '../../lib/translate';
import { editorialOf, FAMILY_EDITORIAL, type RailSlotProps } from '../families/editorial';
import SectionCard from '../../components/SectionCard';
import { ChartTypePicker, JsonKindSelect, ModeSelect } from './controls';
import BehaviorSection from './sections/BehaviorSection';
import ColorsSection from './sections/ColorsSection';
import DataSourceSection from './sections/DataSourceSection';
import SeriesSection from './sections/SeriesSection';
import TitleSection from './sections/TitleSection';
import LegendSection from './sections/LegendSection';
import ToolboxSection from './sections/ToolboxSection';
import TooltipSection from './sections/TooltipSection';
import { sectionSummaries } from './summaries';
import type { StructureAdvisory } from './structureEvents';
import type { BaseSectionKey, SectionIssues, SectionKey } from './validation';
import type { SectionTabsFocus } from '../../components/controls';
import type { JsonTableColumn } from '../../hooks/useJsonTableAnalysis';
import type { OidPickerCtx } from './OidPicker';
import type { JsonTableSchema } from './useJsonTableSchema';
import type { EditorState, SetEditor } from './editorState';

/** A steering request from outside (modal / preview placeholder): expand + scroll into view. */
export interface FocusSectionRequest {
    key: SectionKey;
    /** Monotonic token so repeated requests for the same section re-trigger. */
    token: number;
    /**
     * The section TAB of the first issue (ADR-0073) — derived from field placement; the
     *  affected section's tab row jumps to it. Absent = no tab to address (tab-less body or
     *  an issue that lives outside any tab).
     */
    tab?: string;
}

interface EchartsEditorSectionsProps {
    state: EditorState;
    set: SetEditor;
    /** Validation findings for the state — computed once by the modal, shared with the chips. */
    issues: SectionIssues;
    pickerCtx: OidPickerCtx;
    focusSection?: FocusSectionRequest | null;
    /** JSON mode (ADR-0011): payload series names + parse error, driving the Series-section cards. */
    jsonSeriesNames?: string[];
    jsonError?: string;
    /** Tabellarisch (ADR-0075): the chosen rows array's columns — the Series-section yPath pickers. */
    tableColumns?: JsonTableColumn[];
    /**
     * Tabellarisch: the modal's SHARED schema sight (one subscription + one analysis per payload
     * tick) — handed to the Data source section so it never opens a second one. Absent (tests,
     * standalone mounts): the section subscribes its own.
     */
    tableSchema?: JsonTableSchema;
    /** Tabellarisch: the schema's rows/JSON error surface. */
    tableSchemaError?: string;
    /**
     * The effective X is a CATEGORY axis (ADR-0075 ticket 05): json-table with a non-date X
     * column (or none/drifted — the index fallback). The X-Karte hides its Time format.
     */
    xIsCategory?: boolean;
    /**
     * The modal's notice host (ADR-0067 addendum 2026-11-03): every structure-event advisory of
     * the pickers and sections (axis death, unit mismatch, data-path loss) lands here.
     */
    onAdvisory?: (advisory: StructureAdvisory) => void;
}

/**
 * The family-aware section inventory (ADR-0010; Title/Legend split ADR-0021; Toolbox replaces the
 * retired chart-level Advanced JSON, ADR-0045).
 *
 * Order (top → bottom, ADR-0010 addendum 2026-11-03 — working order): data source → series →
 * the family's rail slots (cartesian: axes & zoom · pie: pie options, ADR-0083) → title →
 * legend → tooltip → colors → toolbox → behavior. The family slots take exactly the block
 * right after the series; the rarely touched Verhalten closes the stack.
 *
 * Exported because the modal's footer problems button needs the same order to find the
 * FIRST section carrying issues (the scroll target matches what the user sees on screen).
 */
export const sectionInventory = (chartType: EditorState['chartType']): SectionKey[] => [
    'dataSource',
    'series',
    ...editorialOf(chartType).railSlots.map(slot => slot.key),
    'title',
    'legend',
    'tooltip',
    'colors',
    'toolbox',
    'behavior',
];

/** The base sections' i18n title keys — the family slots title via their profile's titleKey. */
const BASE_SECTION_TITLES: Record<BaseSectionKey, string> = {
    series: 'echarts_series',
    dataSource: 'echarts_data_source',
    title: 'echarts_sec_title',
    legend: 'echarts_sec_legend',
    tooltip: 'echarts_appearance_tooltip',
    colors: 'echarts_sec_colors',
    behavior: 'echarts_sec_behavior',
    toolbox: 'echarts_sec_toolbox',
};

/** Every rail slot's titleKey, keyed by its section key (slot keys are disjoint across families). */
const SLOT_TITLE_KEYS: Partial<Record<SectionKey, string>> = Object.fromEntries(
    Object.values(FAMILY_EDITORIAL).flatMap(editorial => editorial.railSlots.map(slot => [slot.key, slot.titleKey])),
);

/** Every rail slot's renderer, keyed by its section key — the render dispatch (ADR-0083). */
const SLOT_RENDERERS: Partial<Record<SectionKey, FC<RailSlotProps>>> = Object.fromEntries(
    Object.values(FAMILY_EDITORIAL).flatMap(editorial => editorial.railSlots.map(slot => [slot.key, slot.render])),
);

const sectionTitle = (key: SectionKey): string => {
    const slotTitleKey = SLOT_TITLE_KEYS[key];
    // A slot key always carries its profile's titleKey; every other key is a base section
    // (the cast is that documented invariant, not an escape hatch).
    return slotTitleKey !== undefined ? Generic.t(slotTitleKey) : Generic.t(BASE_SECTION_TITLES[key as BaseSectionKey]);
};

const EchartsEditorSections: FC<EchartsEditorSectionsProps> = ({
    state,
    set,
    issues,
    pickerCtx,
    focusSection,
    jsonSeriesNames,
    jsonError,
    tableColumns,
    tableSchema,
    tableSchemaError,
    xIsCategory,
    onAdvisory,
}) => {
    const sections = useMemo(() => sectionInventory(state.chartType), [state.chartType]);
    const summaries = useMemo(() => sectionSummaries(state, translate, jsonSeriesNames), [state, jsonSeriesNames]);
    // Expansion: every section starts COLLAPSED on open — nothing pre-expanded (reverses the
    // ADR-0010 "Series starts open" default on user request; the user opens the section to edit).
    const [open, setOpen] = useState<Partial<Record<SectionKey, boolean>>>({});
    const toggle = (key: SectionKey): void => setOpen(o => ({ ...o, [key]: !o[key] }));

    // External steering: expand the target section while rendering, then scroll it into view.
    const [expandedFor, setExpandedFor] = useState<FocusSectionRequest | null | undefined>(null);
    if (expandedFor !== focusSection) {
        setExpandedFor(focusSection);
        if (focusSection) {
            setOpen(o => ({ ...o, [focusSection.key]: true }));
        }
    }
    const sectionRefs = useRef<Partial<Record<SectionKey, HTMLDivElement | null>>>({});
    useEffect(() => {
        if (!focusSection) {
            return;
        }
        sectionRefs.current[focusSection.key]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, [focusSection]);

    const renderBody = (key: SectionKey): React.JSX.Element => {
        // The ADR-0073 tab addressing: the focus request's TAB flows to the addressed
        // section's tab row; every tabbed section also receives its issues (the ⚠ dot feed —
        // the header rollup chip stays).
        const focusTab: SectionTabsFocus | undefined =
            focusSection?.key === key && focusSection.tab
                ? { key: focusSection.tab, token: focusSection.token }
                : undefined;
        const sectionIssues = issues[key];
        // The family slots render via their profile's renderer (ADR-0083) — the fat slot
        // props bundle is the same object for every slot; each section picks its fields.
        const SlotRenderer = SLOT_RENDERERS[key];
        if (SlotRenderer) {
            return (
                <SlotRenderer
                    state={state}
                    set={set}
                    pickerCtx={pickerCtx}
                    focusTab={focusTab}
                    issues={sectionIssues}
                    jsonSeriesNames={jsonSeriesNames}
                    xIsCategory={xIsCategory}
                    onAdvisory={onAdvisory}
                />
            );
        }
        switch (key) {
            case 'series':
                return (
                    <SeriesSection
                        state={state}
                        set={set}
                        pickerCtx={pickerCtx}
                        issues={sectionIssues}
                        jsonSeriesNames={jsonSeriesNames}
                        jsonError={jsonError}
                        tableColumns={tableColumns}
                        tableSchemaError={tableSchemaError}
                        onAdvisory={onAdvisory}
                        focusTab={focusTab}
                    />
                );
            case 'dataSource':
                return (
                    <DataSourceSection
                        state={state}
                        set={set}
                        pickerCtx={pickerCtx}
                        focusTab={focusTab}
                        issues={sectionIssues}
                        schema={tableSchema}
                    />
                );
            case 'title':
                return (
                    <TitleSection
                        state={state}
                        set={set}
                        pickerCtx={pickerCtx}
                        focusTab={focusTab}
                        issues={sectionIssues}
                    />
                );
            case 'legend':
                return (
                    <LegendSection
                        state={state}
                        set={set}
                        pickerCtx={pickerCtx}
                        focusTab={focusTab}
                        issues={sectionIssues}
                    />
                );
            case 'tooltip':
                return (
                    <TooltipSection
                        state={state}
                        set={set}
                        pickerCtx={pickerCtx}
                        focusTab={focusTab}
                        issues={sectionIssues}
                    />
                );
            case 'colors':
                return (
                    <ColorsSection
                        state={state}
                        set={set}
                        pickerCtx={pickerCtx}
                        focusTab={focusTab}
                        issues={sectionIssues}
                    />
                );
            case 'behavior':
                return (
                    <BehaviorSection
                        state={state}
                        set={set}
                        focusTab={focusTab}
                        issues={sectionIssues}
                    />
                );
            case 'toolbox':
                return (
                    <ToolboxSection
                        state={state}
                        set={set}
                        pickerCtx={pickerCtx}
                        focusTab={focusTab}
                        issues={sectionIssues}
                    />
                );
            default:
                // Slot keys never reach the switch — every family slot renders via its
                // profile's renderer above; the arm only satisfies the compiler.
                return <></>;
        }
    };

    return (
        <Box>
            {/* Pinned selectors (ADR-0010): never collapsible, always visible — the three
                selections only (ADR-0010 addendum 2026-11-03: the rail shows sections on open). */}
            <Box sx={{ display: 'grid', gap: 2, mb: 1.5 }}>
                <ChartTypePicker
                    state={state}
                    set={set}
                    payloadNames={jsonSeriesNames}
                    onAdvisory={onAdvisory}
                />
                <ModeSelect
                    state={state}
                    set={set}
                    payloadNames={jsonSeriesNames}
                    onAdvisory={onAdvisory}
                />
                {/* The payload-family toggle (ADR-0075): pinned under the mode toggle — only
                    while JSON is active (a property OF the json mode, not a mode). */}
                <JsonKindSelect
                    state={state}
                    set={set}
                    payloadNames={jsonSeriesNames}
                    onAdvisory={onAdvisory}
                />
            </Box>

            {/* The section stack. */}
            {sections.map(key => (
                <Box
                    key={key}
                    ref={(el: HTMLDivElement | null) => {
                        sectionRefs.current[key] = el;
                    }}
                >
                    <SectionCard
                        title={sectionTitle(key)}
                        summary={summaries[key]}
                        issueCount={issues[key]?.length ?? 0}
                        expanded={!!open[key]}
                        onExpandedChange={() => toggle(key)}
                    >
                        {renderBody(key)}
                    </SectionCard>
                </Box>
            ))}
        </Box>
    );
};

export default EchartsEditorSections;
