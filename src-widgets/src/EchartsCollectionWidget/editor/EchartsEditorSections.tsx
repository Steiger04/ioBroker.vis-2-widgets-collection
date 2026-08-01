/**
 * Sections rail for the v3 echarts configurator (ADR-0010) — replaces the v2 tabs.
 *
 * @module EchartsCollectionWidget/editor/EchartsEditorSections
 * @remarks
 * Pinned selectors on top (chart type + data mode, plus the non-blocking family-switch warning
 * chip); below, the family-aware stack of collapsible {@link Section}s. `Series` starts expanded,
 * everything else starts collapsed with a summary line. Validation rolls up into the section
 * headers (⚠ count). The modal can steer a section via `focusSection` (expand + scroll into
 * view) — used by the clickable preview placeholder.
 */
import { useEffect, useMemo, useRef, useState, type FC } from 'react';
import { Alert, Box, Typography } from '@mui/material';

import Generic from '../../Generic';
import { familyOf } from '../optionBuilder';
import { ChartTypePicker, FieldLabel, ModeSelect } from './controls';
import Section from './Section';
import AxesZoomSection from './sections/AxesZoomSection';
import BehaviorSection from './sections/BehaviorSection';
import ColorsSection from './sections/ColorsSection';
import DataSourceSection from './sections/DataSourceSection';
import { GaugeOptionsSection, PieOptionsSection, RadarOptionsSection } from './sections/FamilySections';
import SeriesSection from './sections/SeriesSection';
import TitleLegendSection from './sections/TitleLegendSection';
import TooltipSection from './sections/TooltipSection';
import { sectionSummaries } from './summaries';
import { familySwitchLoss, validateEditor, type SectionKey } from './validation';
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
    userText: string;
    setUserText: (value: string) => void;
    pickerCtx: OidPickerCtx;
    focusSection?: FocusSectionRequest | null;
    /** Autofocus the first series' OID field (skeleton card on first open, ADR-0010). */
    autoFocusFirstOid?: boolean;
}

/** The family-aware section inventory (ADR-0010). */
const inventory = (chartType: EditorState['chartType']): SectionKey[] => {
    const family = familyOf(chartType);
    if (family === 'cartesian') {
        return ['series', 'dataSource', 'titleLegend', 'tooltip', 'axesZoom', 'colors', 'behavior'];
    }
    if (family === 'pie') {
        return ['series', 'dataSource', 'titleLegend', 'tooltip', 'family', 'colors', 'behavior'];
    }
    // gauge / radar: no data source (always current value), no axes
    return ['series', 'titleLegend', 'tooltip', 'family', 'colors', 'behavior'];
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
        case 'titleLegend':
            return Generic.t('echarts_sec_title_legend');
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
    }
};

const EchartsEditorSections: FC<EchartsEditorSectionsProps> = ({
    state,
    set,
    userText,
    setUserText,
    pickerCtx,
    focusSection,
    autoFocusFirstOid,
}) => {
    const family = familyOf(state.chartType);
    const modeRelevant = family === 'cartesian' || family === 'pie';
    const sections = inventory(state.chartType);
    const issues = useMemo(() => validateEditor(state), [state]);
    const summaries = useMemo(() => sectionSummaries(state, Generic.t.bind(Generic)), [state]);
    const loss = familySwitchLoss(state);

    // Expansion: Series starts open, everything else collapsed (ADR-0010).
    const [open, setOpen] = useState<Partial<Record<SectionKey, boolean>>>({ series: true });
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
                        autoFocusFirstOid={autoFocusFirstOid}
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
            case 'titleLegend':
                return (
                    <TitleLegendSection
                        state={state}
                        set={set}
                    />
                );
            case 'tooltip':
                return (
                    <TooltipSection
                        state={state}
                        set={set}
                    />
                );
            case 'axesZoom':
                return (
                    <AxesZoomSection
                        state={state}
                        set={set}
                        pickerCtx={pickerCtx}
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
                        userText={userText}
                        setUserText={setUserText}
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
                        <Typography
                            variant="caption"
                            color="text.secondary"
                            sx={{ display: 'block' }}
                        >
                            {Generic.t('echarts_mode_current_value')}
                        </Typography>
                    </Box>
                )}
                {loss > 0 && (
                    <Alert
                        severity="warning"
                        variant="outlined"
                        sx={{ py: 0 }}
                    >
                        {Generic.t('echarts_family_loss', Generic.t(`echarts_type_${state.chartType}`), String(loss))}
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
                    <Section
                        title={sectionTitle(key, state.chartType)}
                        summary={summaries[key]}
                        issueCount={issues[key]?.length ?? 0}
                        expanded={!!open[key]}
                        onToggle={() => toggle(key)}
                    >
                        {renderBody(key)}
                    </Section>
                </Box>
            ))}
        </Box>
    );
};

export default EchartsEditorSections;
