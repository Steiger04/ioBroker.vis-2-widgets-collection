/**
 * Data tab — mode + mode-options + family-aware data binding (ADR-0008, Q9).
 *
 * @module EchartsCollectionWidget/editor/panels/DataPanel
 * @remarks
 * Content swaps by family × mode: cartesian/pie show history options (or a jsonOid picker in
 * json mode); gauge shows the scalar OID + min/max/target/unit; radar shows the indicator-OID
 * list + shape/split/area. The jsonOid picker here is the fix for the v1 bug where the JSON OID
 * was unconfigurable from the UI.
 */
import type { FC } from 'react';
import { Box, Button, IconButton } from '@mui/material';
import { Add as AddIcon, DeleteOutline as DeleteIcon } from '@mui/icons-material';

import Generic from '../../../Generic';
import OidPicker from '../OidPicker';
import type { OidPickerCtx } from '../OidPicker';
import { FieldLabel, LabeledSelect, NumberField, OptionalNumberField, SectionLabel, TextField2 } from '../controls';
import { useHistoryInstances } from '../useHistoryInstances';
import type { EditorSeries, EditorState, SetEditor } from '../editorState';

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
    const isNonCartesian = state.chartType === 'pie' || state.chartType === 'gauge' || state.chartType === 'radar';
    const isGauge = state.chartType === 'gauge';
    const isRadar = state.chartType === 'radar';
    const isHistory = state.mode === 'history' && !isGauge && !isRadar;
    const isJson = state.mode === 'json' && !isGauge && !isRadar;
    const instances = useHistoryInstances(pickerCtx.socket);

    // ── radar indicator list helpers ──
    const setIndicator = (i: number, patch: Partial<EditorState['radar']['indicators'][number]>): void => {
        const indicators = state.radar.indicators.map((ind, idx) => (idx === i ? { ...ind, ...patch } : ind));
        set({ radar: { ...state.radar, indicators } });
    };
    const addIndicator = (): void => {
        const indicators = [
            ...state.radar.indicators,
            { name: `Ind ${state.radar.indicators.length + 1}`, max: 100, oid: '' },
        ];
        set({ radar: { ...state.radar, indicators } });
    };
    const removeIndicator = (i: number): void => {
        set({ radar: { ...state.radar, indicators: state.radar.indicators.filter((_, idx) => idx !== i) } });
    };
    const setGauge = (patch: Partial<EditorState['gauge']>): void => set({ gauge: { ...state.gauge, ...patch } });

    return (
        <Box>
            <SectionLabel hint={Generic.t('echarts_editor_data_hint')}>{Generic.t('echarts_editor_data')}</SectionLabel>

            <TextField2
                label={Generic.t('echarts_editor_title_text')}
                value={state.titleText}
                onChange={v => set({ titleText: v })}
                placeholder={'Living room: {0.0.temperature.val} °C'}
            />

            {/* Gauge: scalar OID + range/target/unit */}
            {isGauge && (
                <Box sx={{ mt: 2, display: 'grid', gap: 1.5 }}>
                    <Box>
                        <FieldLabel>{Generic.t('echarts_data_value_oid')}</FieldLabel>
                        <OidPicker
                            value={state.series[0]?.oid ?? ''}
                            onChange={async oid => {
                                set({ series: [{ ...(state.series[0] ?? { oid: '' }), oid }] as EditorSeries[] });
                                // Auto-fill the unit from the OID's common.unit when none is set.
                                if (oid && !state.gauge.unit) {
                                    try {
                                        const objs = (await pickerCtx.socket.getForeignObjects(oid)) as Record<
                                            string,
                                            { common?: { unit?: string } }
                                        >;
                                        const u = objs[oid]?.common?.unit;
                                        if (u) {
                                            setGauge({ unit: u });
                                        }
                                    } catch {
                                        /* ignore — unit stays manual */
                                    }
                                }
                            }}
                            ctx={pickerCtx}
                        />
                    </Box>
                    <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5 }}>
                        <NumberField
                            label={Generic.t('echarts_gauge_min')}
                            value={state.gauge.min ?? 0}
                            onChange={v => setGauge({ min: v })}
                        />
                        <NumberField
                            label={Generic.t('echarts_gauge_max')}
                            value={state.gauge.max ?? 100}
                            onChange={v => setGauge({ max: v })}
                        />
                        <OptionalNumberField
                            label={Generic.t('echarts_gauge_target')}
                            value={state.gauge.target}
                            onChange={v => setGauge({ target: v })}
                        />
                        <NumberField
                            label={Generic.t('echarts_gauge_progress_width')}
                            value={state.gauge.progressWidth ?? 14}
                            onChange={v => setGauge({ progressWidth: v })}
                        />
                    </Box>
                    <TextField2
                        label={Generic.t('echarts_gauge_unit')}
                        value={state.gauge.unit ?? ''}
                        onChange={v => setGauge({ unit: v })}
                    />
                </Box>
            )}

            {/* Radar: indicator-OID list + shape */}
            {isRadar && (
                <Box sx={{ mt: 2, display: 'grid', gap: 1.5 }}>
                    <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5 }}>
                        <LabeledSelect
                            label={Generic.t('echarts_radar_shape')}
                            value={state.radar.shape ?? 'polygon'}
                            onChange={v => set({ radar: { ...state.radar, shape: v as 'polygon' | 'circle' } })}
                            options={[
                                ['polygon', Generic.t('echarts_radar_polygon')],
                                ['circle', Generic.t('echarts_radar_circle')],
                            ]}
                        />
                        <NumberField
                            label={Generic.t('echarts_radar_split')}
                            value={state.radar.splitNumber ?? 5}
                            onChange={v => set({ radar: { ...state.radar, splitNumber: v } })}
                        />
                    </Box>
                    {state.radar.indicators.map((ind, i) => (
                        <Box
                            key={i}
                            sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, alignItems: 'center' }}
                        >
                            <TextField2
                                label={Generic.t('echarts_radar_indicator_name')}
                                value={ind.name}
                                onChange={v => setIndicator(i, { name: v })}
                            />
                            <Box sx={{ width: 90 }}>
                                <NumberField
                                    label={Generic.t('echarts_radar_indicator_max')}
                                    value={ind.max ?? 100}
                                    onChange={v => setIndicator(i, { max: v })}
                                />
                            </Box>
                            <OidPicker
                                value={ind.oid}
                                onChange={oid => setIndicator(i, { oid })}
                                ctx={pickerCtx}
                            />
                            <IconButton
                                size="small"
                                onClick={() => removeIndicator(i)}
                                aria-label={Generic.t('echarts_editor_series_remove')}
                            >
                                <DeleteIcon fontSize="small" />
                            </IconButton>
                        </Box>
                    ))}
                    <Button
                        startIcon={<AddIcon />}
                        onClick={addIndicator}
                    >
                        {Generic.t('echarts_radar_add_indicator')}
                    </Button>
                </Box>
            )}

            {/* Cartesian/pie history options */}
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

            {/* json mode (cartesian/pie): the JSON-OID picker (v1 bug fix) */}
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

            {!isNonCartesian && !isHistory && !isJson && (
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
