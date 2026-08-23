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
import { FieldLabel, InfoBox } from '../../components/controls';
import { ChartTypePicker, ModeSelect } from './controls';
import AxesZoomSection from './sections/AxesZoomSection';
import BehaviorSection from './sections/BehaviorSection';
import ColorsSection from './sections/ColorsSection';
import DataSourceSection from './sections/DataSourceSection';
import { GaugeOptionsSection, PieOptionsSection, RadarOptionsSection } from './sections/FamilySections';
import SeriesSection from './sections/SeriesSection';
import TitleSection from './sections/TitleSection';
import LegendSection from './sections/LegendSection';
import ToolboxSection from './sections/ToolboxSection';
import TooltipSection from './sections/TooltipSection';
import { sectionSummaries } from './summaries';
import { familySwitchLoss, familySwitchSnippetLoss, type SectionIssues, type SectionKey } from './validation';
import type { OidPickerCtx } from './OidPicker';
import type { EditorState, SetEditor } from './editorState';

/** A steering request from outside (modal / preview placeholder): expand + scroll into view. */
export interface FocusSectionRequest {
    key: SectionKey;
    /** Monotonic token so repeated requests for the same section re-trigger. */
    token: number;
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
}

/**
 * The family-aware section inventory (ADR-0010; Title/Legend split ADR-0021; Toolbox replaces the
 * retired chart-level Advanced JSON, ADR-0045).
 *
 * Order (top → bottom): data source → behavior → title → series → (axes or family
 * options) → legend → tooltip → colors → toolbox. `family` (pie / gauge / radar
 * options) takes the slot cartesian reserves for axes — both are the per-family layout
 * block sitting right after the series.
 *
 * Exported because the modal's footer problems button needs the same order to find the
 * FIRST section carrying issues (the scroll target matches what the user sees on screen).
 */
export const sectionInventory = (chartType: EditorState['chartType']): SectionKey[] => {
    const family = familyOf(chartType);
    if (family === 'cartesian') {
        return ['dataSource', 'behavior', 'title', 'series', 'axesZoom', 'legend', 'tooltip', 'colors', 'toolbox'];
    }
    if (family === 'pie') {
        return ['dataSource', 'behavior', 'title', 'series', 'family', 'legend', 'tooltip', 'colors', 'toolbox'];
    }
    // gauge / radar: no data source (always current value), no axes
    return ['behavior', 'title', 'series', 'family', 'legend', 'tooltip', 'colors', 'toolbox'];
};

const sectionTitle = (key: SectionKey, chartType: EditorState['chartType']): string => {
    switch (key) {
        case 'series':
            return chartType === 'gauge'
                ? Generic.t('echarts_sec_value')
                : chartType === 'radar'
                  ? Generic.t('echarts_sec_indicators')
                  : Generic.t('echarts_series');
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
            return chartType === 'gauge'
                ? Generic.t('echarts_sec_gauge_options')
                : chartType === 'pie'
                  ? Generic.t('echarts_sec_pie_options')
                  : Generic.t('echarts_sec_radar_options');
        case 'colors':
            return Generic.t('echarts_sec_colors');
        case 'behavior':
            return Generic.t('echarts_sec_behavior');
        case 'toolbox':
            return Generic.t('echarts_sec_toolbox');
    }
};

const EchartsEditorSections: FC<EchartsEditorSectionsProps> = ({
    state,
    set,
    issues,
    pickerCtx,
    focusSection,
    jsonSeriesNames,
    jsonError,
}) => {
    const family = familyOf(state.chartType);
    const modeRelevant = family === 'cartesian' || family === 'pie';
    const sections = useMemo(() => sectionInventory(state.chartType), [state.chartType]);
    const summaries = useMemo(() => sectionSummaries(state, Generic.t.bind(Generic)), [state]);
    const loss = familySwitchLoss(state);
    // ADR-0042: activations the family switch would prune on Apply — advised beside the bound-OID
    // loss; the prune itself rides Apply (nothing is dropped at switch time).
    const snippetLoss = familySwitchSnippetLoss(state);

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
        switch (key) {
            case 'series':
                return (
                    <SeriesSection
                        state={state}
                        set={set}
                        pickerCtx={pickerCtx}
                        issues={issues.series}
                        jsonSeriesNames={jsonSeriesNames}
                        jsonError={jsonError}
                    />
                );
            case 'dataSource':
                return (
                    <DataSourceSection
                        state={state}
                        set={set}
                        pickerCtx={pickerCtx}
                    />
                );
            case 'title':
                return (
                    <TitleSection
                        state={state}
                        set={set}
                        pickerCtx={pickerCtx}
                    />
                );
            case 'legend':
                return (
                    <LegendSection
                        state={state}
                        set={set}
                        pickerCtx={pickerCtx}
                    />
                );
            case 'tooltip':
                return (
                    <TooltipSection
                        state={state}
                        set={set}
                        pickerCtx={pickerCtx}
                    />
                );
            case 'axesZoom':
                return (
                    <AxesZoomSection
                        state={state}
                        set={set}
                        pickerCtx={pickerCtx}
                        jsonSeriesNames={jsonSeriesNames}
                    />
                );
            case 'family':
                return family === 'gauge' ? (
                    <GaugeOptionsSection
                        state={state}
                        set={set}
                    />
                ) : family === 'pie' ? (
                    <PieOptionsSection
                        state={state}
                        set={set}
                    />
                ) : (
                    <RadarOptionsSection
                        state={state}
                        set={set}
                    />
                );
            case 'colors':
                return (
                    <ColorsSection
                        state={state}
                        set={set}
                        pickerCtx={pickerCtx}
                    />
                );
            case 'behavior':
                return (
                    <BehaviorSection
                        state={state}
                        set={set}
                    />
                );
            case 'toolbox':
                return (
                    <ToolboxSection
                        state={state}
                        set={set}
                        pickerCtx={pickerCtx}
                    />
                );
        }
    };

    return (
        <Box>
            {/* Pinned selectors (ADR-0010): never collapsible, always visible. */}
            <Box sx={{ display: 'grid', gap: 2, mb: 1.5 }}>
                <ChartTypePicker
                    state={state}
                    set={set}
                />
                {modeRelevant ? (
                    <ModeSelect
                        state={state}
                        set={set}
                    />
                ) : (
                    <Box>
                        <FieldLabel>{Generic.t('echarts_editor_data_mode')}</FieldLabel>
                        <InfoBox text={Generic.t('echarts_mode_current_value')} />
                    </Box>
                )}
                {(loss > 0 || snippetLoss > 0) && (
                    <Alert
                        severity="warning"
                        variant="outlined"
                        sx={{ py: 0 }}
                    >
                        {loss > 0 && (
                            <Box component="div">
                                {Generic.t(
                                    'echarts_family_loss',
                                    Generic.t(`echarts_type_${state.chartType}`),
                                    String(loss),
                                )}
                            </Box>
                        )}
                        {snippetLoss > 0 && (
                            <Box component="div">{Generic.t('echarts_family_loss_snippets', String(snippetLoss))}</Box>
                        )}
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
                        title={sectionTitle(key, state.chartType)}
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
