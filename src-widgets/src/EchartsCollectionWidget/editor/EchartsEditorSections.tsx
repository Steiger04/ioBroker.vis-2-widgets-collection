/**
 * Sections rail for the v3 echarts configurator (ADR-0010) — replaces the v2 tabs.
 *
 * @module EchartsCollectionWidget/editor/EchartsEditorSections
 * @remarks
 * Pinned selectors on top (chart type + data mode, plus the non-blocking family-switch warning
 * chip); below, the family-aware stack of collapsible SectionCards (the shared configurator
 * section shell, ADR-0038). Every section starts collapsed on open with a summary line (reverses
 * the ADR-0010 "Series starts expanded" default). Validation rolls up into the section
 * headers (⚠ count). The modal can steer a section via `focusSection` (expand + scroll into
 * view) — used by the clickable preview placeholder and the footer's problems button.
 */
import { useEffect, useMemo, useRef, useState, type FC } from 'react';
import { Alert, Box } from '@mui/material';

import Generic from '../../Generic';
import { familyOf } from '../optionBuilder';
import SectionCard from '../../components/SectionCard';
import { ChartTypePicker, JsonKindSelect, ModeSelect } from './controls';
import AxesZoomSection from './sections/AxesZoomSection';
import BehaviorSection from './sections/BehaviorSection';
import ColorsSection from './sections/ColorsSection';
import DataSourceSection from './sections/DataSourceSection';
import { PieOptionsSection } from './sections/FamilySections';
import SeriesSection from './sections/SeriesSection';
import TitleSection from './sections/TitleSection';
import LegendSection from './sections/LegendSection';
import ToolboxSection from './sections/ToolboxSection';
import TooltipSection from './sections/TooltipSection';
import { sectionSummaries } from './summaries';
import {
    familyBoundaryLoss,
    type BoundaryLoss,
    familySwitchSnippetLoss,
    jsonBoundaryLoss,
    jsonKindBoundaryLoss,
    type SectionIssues,
    type SectionKey,
} from './validation';
import type { SectionTabsFocus } from '../../components/controls';
import type { JsonTableColumn } from '../../hooks/useJsonTableAnalysis';
import type { OidPickerCtx } from './OidPicker';
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
    /** Tabellarisch: the schema's rows/JSON error surface. */
    tableSchemaError?: string;
    /**
     * The effective X is a CATEGORY axis (ADR-0075 ticket 05): json-table with a non-date X
     * column (or none/drifted — the index fallback). The X-Karte hides its Time format.
     */
    xIsCategory?: boolean;
    /** The editor's undo — passed through to the Series section's ADR-0069 death snackbar. */
    undo?: () => void;
}

/**
 * The family-aware section inventory (ADR-0010; Title/Legend split ADR-0021; Toolbox replaces the
 * retired chart-level Advanced JSON, ADR-0045).
 *
 * Order (top → bottom): data source → behavior → title → series → (axes or family
 * options) → legend → tooltip → colors → toolbox. `family` (the pie options) takes the
 * slot cartesian reserves for axes — both are the per-family layout block sitting right
 * after the series.
 *
 * Exported because the modal's footer problems button needs the same order to find the
 * FIRST section carrying issues (the scroll target matches what the user sees on screen).
 */
export const sectionInventory = (chartType: EditorState['chartType']): SectionKey[] => {
    const family = familyOf(chartType);
    if (family === 'cartesian') {
        return ['dataSource', 'behavior', 'title', 'series', 'axesZoom', 'legend', 'tooltip', 'colors', 'toolbox'];
    }
    // pie
    return ['dataSource', 'behavior', 'title', 'series', 'family', 'legend', 'tooltip', 'colors', 'toolbox'];
};

const sectionTitle = (key: SectionKey): string => {
    switch (key) {
        case 'series':
            return Generic.t('echarts_series');
        case 'dataSource':
            return Generic.t('echarts_data_source');
        case 'title':
            return Generic.t('echarts_sec_title');
        case 'legend':
            return Generic.t('echarts_sec_legend');
        case 'tooltip':
            return Generic.t('echarts_appearance_tooltip');
        case 'axesZoom':
            return Generic.t('echarts_sec_axes_zoom');
        case 'family':
            return Generic.t('echarts_sec_pie_options');
        case 'colors':
            return Generic.t('echarts_sec_colors');
        case 'behavior':
            return Generic.t('echarts_sec_behavior');
        case 'toolbox':
            return Generic.t('echarts_sec_toolbox');
    }
};

/**
 * The non-blocking boundary-reset warning chip (ADR-0067), shared by both crossing selectors —
 * the chart-type picker (family boundary) and the mode toggle (JSON boundary). Rendered while the
 * CURRENT state holds a data path the next crossing would delete; nothing to lose renders nothing.
 * F10: the chip names the FULL reset scope — markings and a set JSON data point fall with the
 * series/axes; the two segment keys append only when their count is non-zero.
 */
const BoundaryLossAlert: FC<{ lossKey: string; loss: BoundaryLoss }> = ({ lossKey, loss }) =>
    loss.series > 0 || loss.axes > 0 || loss.marks > 0 || loss.dataPoint ? (
        <Alert
            severity="warning"
            variant="outlined"
            sx={{ py: 0, mt: 1 }}
        >
            {Generic.t(lossKey, String(loss.series), String(loss.axes))}
            {loss.marks > 0 && ` ${Generic.t('echarts_boundary_loss_marks', String(loss.marks))}`}
            {loss.dataPoint && ` ${Generic.t('echarts_boundary_loss_datapoint')}`}
        </Alert>
    ) : null;

const EchartsEditorSections: FC<EchartsEditorSectionsProps> = ({
    state,
    set,
    issues,
    pickerCtx,
    focusSection,
    jsonSeriesNames,
    jsonError,
    tableColumns,
    tableSchemaError,
    xIsCategory,
    undo,
}) => {
    const sections = useMemo(() => sectionInventory(state.chartType), [state.chartType]);
    const summaries = useMemo(() => sectionSummaries(state, Generic.t.bind(Generic)), [state]);
    // ADR-0042: activations the family switch would prune on Apply — advised below; the prune
    // itself rides Apply (nothing is dropped at switch time). The pre-ADR-0067 bound-OID loss
    // beside it is pensioned: a family crossing now RESETS the data path (chip at the picker).
    const snippetLoss = familySwitchSnippetLoss(state);
    // The family-boundary reset warning (ADR-0067): a non-blocking chip at the type picker,
    // shown BEFORE the crossing — what the next family switch deletes from the current state.
    const familyLoss = familyBoundaryLoss(state);
    // The JSON-boundary reset warning (ADR-0067): a non-blocking chip at the mode toggle, shown
    // BEFORE the crossing — what the next into/out-of-JSON switch deletes from the current state.
    const boundaryLoss = jsonBoundaryLoss(state, jsonSeriesNames ?? []);
    // The payload-family reset warning (ADR-0075): a non-blocking chip at the family toggle,
    // shown BEFORE the crossing — what the next serien-förmig↔tabellarisch switch deletes
    // (jsonOid never falls: the chip's dataPoint segment stays off).
    const jsonKindLoss = jsonKindBoundaryLoss(state, jsonSeriesNames ?? []);

    // Expansion: every section starts COLLAPSED on open — nothing pre-expanded (reverses the
    // ADR-0010 "Series starts open" default on user request; the user opens the section to edit).
    const [open, setOpen] = useState<Partial<Record<SectionKey, boolean>>>({});
    const toggle = (key: SectionKey): void => setOpen(o => ({ ...o, [key]: !o[key] }));

    // External steering: expand the target section and scroll it into view.
    const sectionRefs = useRef<Partial<Record<SectionKey, HTMLDivElement | null>>>({});
    useEffect(() => {
        if (!focusSection) {
            return;
        }
        setOpen(o => ({ ...o, [focusSection.key]: true }));
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
                        undo={undo}
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
            case 'axesZoom':
                return (
                    <AxesZoomSection
                        state={state}
                        set={set}
                        pickerCtx={pickerCtx}
                        jsonSeriesNames={jsonSeriesNames}
                        xIsCategory={xIsCategory}
                        focusTab={focusTab}
                        issues={sectionIssues}
                    />
                );
            case 'family':
                return (
                    <PieOptionsSection
                        state={state}
                        set={set}
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
        }
    };

    return (
        <Box>
            {/* Pinned selectors (ADR-0010): never collapsible, always visible. */}
            <Box sx={{ display: 'grid', gap: 2, mb: 1.5 }}>
                <Box>
                    <ChartTypePicker
                        state={state}
                        set={set}
                    />
                    <BoundaryLossAlert
                        lossKey="echarts_family_boundary_loss"
                        loss={familyLoss}
                    />
                </Box>
                <Box>
                    <ModeSelect
                        state={state}
                        set={set}
                    />
                    <BoundaryLossAlert
                        lossKey="echarts_mode_boundary_loss"
                        loss={boundaryLoss}
                    />
                </Box>
                {state.mode === 'json' && (
                    <Box>
                        {/* The payload-family toggle (ADR-0075): pinned under the mode toggle —
                            only while JSON is active (a property OF the json mode, not a mode). */}
                        <JsonKindSelect
                            state={state}
                            set={set}
                        />
                        <BoundaryLossAlert
                            lossKey="echarts_json_kind_boundary_loss"
                            loss={jsonKindLoss}
                        />
                    </Box>
                )}
                {/* Snippet-prune advice (ADR-0042) — the ONLY family-switch warning left: the
                    pre-ADR-0067 bound-OID loss share is pensioned (the family crossing resets the
                    data path now, advised by the chip at the type picker above). */}
                {snippetLoss > 0 && (
                    <Alert
                        severity="warning"
                        variant="outlined"
                        sx={{ py: 0 }}
                    >
                        <Box component="div">{Generic.t('echarts_family_loss_snippets', String(snippetLoss))}</Box>
                    </Alert>
                )}
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
