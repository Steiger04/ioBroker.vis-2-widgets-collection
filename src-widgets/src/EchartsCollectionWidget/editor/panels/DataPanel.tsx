/**
 * Data tab — the GLOBAL data source (ADR-0008 r3). OID binding lives in the Series tab for every
 * family now; this tab holds only what is shared across all of a chart's series: the title text,
 * and — for the time-series families (cartesian / pie) — the data mode + its options
 * (history / live / json). Gauge / radar bind per-item in the Series tab, so this tab points the
 * user there.
 *
 * @module EchartsCollectionWidget/editor/panels/DataPanel
 */
import type { FC } from 'react';
import { Box } from '@mui/material';

import Generic from '../../../Generic';
import OidPicker from '../OidPicker';
import type { OidPickerCtx } from '../OidPicker';
import { FieldLabel, LabeledSelect, NumberField, SectionLabel, TextField2 } from '../controls';
import { useHistoryInstances } from '../useHistoryInstances';
import type { EditorState, SetEditor } from '../editorState';

interface PanelProps {
    state: EditorState;
    set: SetEditor;
    pickerCtx: OidPickerCtx;
}

/** Tiny caption helper to avoid pulling Typography into every panel. */
const GenericCaption: FC<{ text: string }> = ({ text }) => (
    <Box
        component="span"
        sx={{ typography: 'caption' }}
    >
        {text}
    </Box>
);

const DataPanel: FC<PanelProps> = ({ state, set, pickerCtx }) => {
    // Time-series families share the history/live/json pipeline (cartesian + pie). Gauge/radar read
    // the current value per-item, bound in the Series tab.
    const isTimeSeries = state.chartType !== 'gauge' && state.chartType !== 'radar';
    const isHistory = state.mode === 'history' && isTimeSeries;
    const isJson = state.mode === 'json' && isTimeSeries;
    const instances = useHistoryInstances(pickerCtx.socket);

    return (
        <Box>
            <SectionLabel hint={Generic.t('echarts_editor_data_hint')}>{Generic.t('echarts_editor_data')}</SectionLabel>

            <TextField2
                label={Generic.t('echarts_editor_title_text')}
                value={state.titleText}
                onChange={v => set({ titleText: v })}
                placeholder={'Living room: {0.0.temperature.val} °C'}
            />

            {/* Gauge / radar bind per-item in the Series tab — point the user there. */}
            {!isTimeSeries && (
                <Box
                    sx={{
                        mt: 2,
                        p: 1,
                        bgcolor: 'action.hover',
                        borderLeft: 3,
                        borderColor: 'primary.main',
                        borderRadius: 0.5,
                    }}
                >
                    <GenericCaption text={Generic.t('echarts_editor_data_in_series')} />
                </Box>
            )}

            {/* Cartesian/pie history options (shared across all series). */}
            {isHistory && (
                <Box sx={{ mt: 2, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5 }}>
                    <LabeledSelect
                        label={Generic.t('echarts_time_range')}
                        value={state.timeRange}
                        onChange={v => set({ timeRange: v as EditorState['timeRange'] })}
                        options={[
                            ['24h', '24h'],
                            ['7d', '7d'],
                            ['30d', '30d'],
                        ]}
                    />
                    <LabeledSelect
                        label={Generic.t('echarts_aggregate')}
                        value={state.aggregate}
                        onChange={v => set({ aggregate: v as EditorState['aggregate'] })}
                        options={[
                            ['average', 'average'],
                            ['minmax', 'minmax'],
                            ['min', 'min'],
                            ['max', 'max'],
                            ['total', 'total'],
                            ['count', 'count'],
                            ['onchange', 'onchange'],
                            ['none', 'none'],
                        ]}
                    />
                    <NumberField
                        label={Generic.t('echarts_count')}
                        value={state.count}
                        onChange={v => set({ count: v })}
                    />
                    <NumberField
                        label={Generic.t('echarts_refresh')}
                        value={state.refreshMs}
                        step={1000}
                        onChange={v => set({ refreshMs: v })}
                    />
                    {instances.length > 0 ? (
                        <LabeledSelect
                            label={Generic.t('echarts_instance')}
                            value={state.instance}
                            onChange={v => set({ instance: v })}
                            options={[
                                ['', Generic.t('echarts_instance_auto')],
                                ...instances.map(id => [id, id] as [string, string]),
                            ]}
                        />
                    ) : (
                        <Box>
                            <FieldLabel>{Generic.t('echarts_instance')}</FieldLabel>
                            <GenericCaption text={Generic.t('echarts_instance_missing')} />
                        </Box>
                    )}
                    <LabeledSelect
                        label={Generic.t('echarts_ignore_null')}
                        value={state.ignoreNull}
                        onChange={v => set({ ignoreNull: v as EditorState['ignoreNull'] })}
                        options={[
                            ['keep', Generic.t('echarts_ignore_null_keep')],
                            ['forward', Generic.t('echarts_ignore_null_forward')],
                            ['zero', Generic.t('echarts_ignore_null_zero')],
                        ]}
                    />
                </Box>
            )}

            {/* json mode (cartesian/pie): the JSON-OID picker (v1 bug fix). */}
            {isJson && (
                <Box sx={{ mt: 2 }}>
                    <FieldLabel>{Generic.t('echarts_json_oid')}</FieldLabel>
                    <OidPicker
                        value={state.jsonOid}
                        onChange={oid => set({ jsonOid: oid })}
                        ctx={pickerCtx}
                    />
                    <Box
                        sx={{
                            mt: 1,
                            p: 1,
                            bgcolor: 'action.hover',
                            borderLeft: 3,
                            borderColor: 'primary.main',
                            borderRadius: 0.5,
                        }}
                    >
                        <GenericCaption text={Generic.t('echarts_editor_info_json')} />
                    </Box>
                </Box>
            )}

            {/* live mode hint (cartesian/pie). */}
            {isTimeSeries && !isHistory && !isJson && (
                <Box
                    sx={{
                        mt: 2,
                        p: 1,
                        bgcolor: 'action.hover',
                        borderLeft: 3,
                        borderColor: 'primary.main',
                        borderRadius: 0.5,
                    }}
                >
                    <GenericCaption text={Generic.t('echarts_editor_mode_hint_live')} />
                </Box>
            )}
        </Box>
    );
};

export default DataPanel;
