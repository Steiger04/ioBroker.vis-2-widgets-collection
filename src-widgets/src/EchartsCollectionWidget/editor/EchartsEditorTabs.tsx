/**
 * Tabs body for the v2 echarts configurator (ADR-0007/0008, Q3).
 *
 * @module EchartsCollectionWidget/editor/EchartsEditorTabs
 * @remarks
 * Chart-type + data-mode pinned in a wrapping top row; the five tabs below. `Achsen & Zoom` is
 * cartesian-only (hidden for pie/gauge/radar). The split layout's right-hand preview is owned by
 * the modal, not this component — this is purely the left-hand config column.
 */
import { useEffect, useState, type FC } from 'react';
import { Box, Tab, Tabs, Typography } from '@mui/material';

import Generic from '../../Generic';
import { ChartTypePicker, FieldLabel, ModeSelect } from './controls';
import AdvancedPanel from './panels/AdvancedPanel';
import AppearancePanel from './panels/AppearancePanel';
import AxesZoomPanel from './panels/AxesZoomPanel';
import DataPanel from './panels/DataPanel';
import SeriesPanel from './panels/SeriesPanel';
import type { OidPickerCtx } from './OidPicker';
import type { EditorState, SetEditor } from './editorState';

interface EchartsEditorTabsProps {
    state: EditorState;
    set: SetEditor;
    userText: string;
    setUserText: (value: string) => void;
    pickerCtx: OidPickerCtx;
}

const GAP = 2;

type TabKey = 'data' | 'series' | 'appearance' | 'axes' | 'advanced';

const isCartesian = (chartType: EditorState['chartType']): boolean =>
    chartType === 'line' || chartType === 'bar' || chartType === 'area';

const EchartsEditorTabs: FC<EchartsEditorTabsProps> = ({ state, set, userText, setUserText, pickerCtx }) => {
    const [tab, setTab] = useState<TabKey>('data');
    const cartesian = isCartesian(state.chartType);
    // Mode is only meaningful for the time-series families (cartesian/pie). Gauge/radar always read
    // the current value, so the toggle is replaced by a static caption there (ADR-0008).
    const modeRelevant = cartesian || state.chartType === 'pie';

    // If the chart type flips away from cartesian while the cartesian-only 'axes' tab is active,
    // fall back to 'appearance' so the content area never goes blank.
    useEffect(() => {
        if (!cartesian && tab === 'axes') {
            setTab('appearance');
        }
    }, [cartesian, tab]);

    return (
        <Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: GAP, alignItems: 'flex-start', mb: 1 }}>
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
            </Box>
            <Tabs
                value={cartesian ? tab : tab === 'axes' ? 'appearance' : tab}
                onChange={(_, v: TabKey) => setTab(v)}
                variant="scrollable"
                scrollButtons="auto"
            >
                <Tab
                    label={Generic.t('echarts_editor_data')}
                    value="data"
                />
                <Tab
                    label={Generic.t('echarts_series')}
                    value="series"
                />
                <Tab
                    label={Generic.t('echarts_editor_appearance')}
                    value="appearance"
                />
                {cartesian && (
                    <Tab
                        label={Generic.t('echarts_editor_axes_zoom')}
                        value="axes"
                    />
                )}
                <Tab
                    label={Generic.t('echarts_editor_advanced')}
                    value="advanced"
                />
            </Tabs>
            <Box sx={{ mt: GAP }}>
                {tab === 'data' && (
                    <DataPanel
                        state={state}
                        set={set}
                        pickerCtx={pickerCtx}
                    />
                )}
                {tab === 'series' && (
                    <SeriesPanel
                        state={state}
                        set={set}
                        pickerCtx={pickerCtx}
                    />
                )}
                {tab === 'appearance' && (
                    <AppearancePanel
                        state={state}
                        set={set}
                        pickerCtx={pickerCtx}
                    />
                )}
                {tab === 'axes' && cartesian && (
                    <AxesZoomPanel
                        state={state}
                        set={set}
                        pickerCtx={pickerCtx}
                    />
                )}
                {tab === 'advanced' && (
                    <AdvancedPanel
                        userText={userText}
                        setUserText={setUserText}
                    />
                )}
            </Box>
        </Box>
    );
};

export default EchartsEditorTabs;
