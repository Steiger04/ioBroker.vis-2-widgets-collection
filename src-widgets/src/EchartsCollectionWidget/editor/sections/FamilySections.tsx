/**
 * Family options sections — the chart-family-specific knobs that take the axes slot for
 * non-cartesian families (ADR-0010).
 *
 * @module EchartsCollectionWidget/editor/sections/FamilySections
 * @remarks
 *  - Gauge: the dial presentation (min/max/target/progress arc/unit). The OID binding lives in the
 *    Series section. min/max carry field-level validation (min must be below max).
 *  - Pie: slice aggregation (exposes the previously state-only `pie.aggregate` knob), donut inner
 *    radius, slice label mode, rose mode.
 *  - Radar: polygon shape, split rings, area fill. The indicator list lives in the Series section.
 *    Since ADR-0045 the section also hosts the radar raw escape hatch (the 6th RawJsonSection
 *    host, after Y/X/Title/Legend/Tooltip) — the section is radar-only by inventory, so no
 *    family gating is needed inside.
 */
import type { FC } from 'react';
import { Box } from '@mui/material';

import Generic from '../../../Generic';
import {
    FieldGrid,
    LabeledSelect,
    NumberField,
    OptionalNumberField,
    SliderField,
    SwitchList,
    SwitchRow,
    TextField2,
} from '../../../components/controls';
import RawJsonSection from './RawJsonSection';
import { RADAR_CATALOG } from '../radarTemplates';
import type { EditorState, SetEditor } from '../editorState';

interface FamilySectionProps {
    state: EditorState;
    set: SetEditor;
}

export const GaugeOptionsSection: FC<FamilySectionProps> = ({ state, set }) => {
    const setGauge = (patch: Partial<EditorState['gauge']>): void => set({ gauge: { ...state.gauge, ...patch } });
    const rangeInvalid = (state.gauge.min ?? 0) >= (state.gauge.max ?? 100);

    return (
        <FieldGrid>
            <NumberField
                label={Generic.t('echarts_gauge_min')}
                value={state.gauge.min ?? 0}
                onChange={v => setGauge({ min: v })}
                error={rangeInvalid}
                helperText={rangeInvalid ? Generic.t('echarts_val_gauge_range') : undefined}
            />
            <NumberField
                label={Generic.t('echarts_gauge_max')}
                value={state.gauge.max ?? 100}
                onChange={v => setGauge({ max: v })}
                error={rangeInvalid}
            />
            <OptionalNumberField
                label={Generic.t('echarts_gauge_target')}
                value={state.gauge.target}
                onChange={v => setGauge({ target: v })}
            />
            <SliderField
                label={Generic.t('echarts_gauge_progress_width')}
                value={state.gauge.progressWidth ?? 14}
                min={2}
                max={40}
                onChange={v => setGauge({ progressWidth: v })}
            />
            <TextField2
                label={Generic.t('echarts_gauge_unit')}
                value={state.gauge.unit ?? ''}
                onChange={v => setGauge({ unit: v })}
            />
        </FieldGrid>
    );
};

export const PieOptionsSection: FC<FamilySectionProps> = ({ state, set }) => {
    const setPie = (patch: Partial<EditorState['pie']>): void => set({ pie: { ...state.pie, ...patch } });

    return (
        <FieldGrid>
            <LabeledSelect
                label={Generic.t('echarts_pie_aggregate')}
                value={state.pie.aggregate ?? 'latest'}
                onChange={v => setPie({ aggregate: v as EditorState['pie']['aggregate'] })}
                options={[
                    ['latest', Generic.t('echarts_pie_agg_latest')],
                    ['sum', Generic.t('echarts_pie_agg_sum')],
                    ['avg', Generic.t('echarts_pie_agg_avg')],
                    ['min', Generic.t('echarts_pie_agg_min')],
                    ['max', Generic.t('echarts_pie_agg_max')],
                ]}
            />
            <SliderField
                label={Generic.t('echarts_pie_inner_radius')}
                value={state.pie.innerRadius ?? 0}
                min={0}
                max={0.9}
                step={0.05}
                onChange={v => setPie({ innerRadius: v })}
            />
            <LabeledSelect
                label={Generic.t('echarts_pie_label')}
                value={state.pie.label ?? 'namePercent'}
                onChange={v => setPie({ label: v as EditorState['pie']['label'] })}
                options={[
                    ['none', Generic.t('echarts_label_none')],
                    ['name', Generic.t('echarts_label_name')],
                    ['percent', Generic.t('echarts_label_percent')],
                    ['namePercent', Generic.t('echarts_label_name_percent')],
                ]}
            />
            <LabeledSelect
                label={Generic.t('echarts_pie_rose')}
                value={state.pie.rose ?? 'none'}
                onChange={v => setPie({ rose: v as EditorState['pie']['rose'] })}
                options={[
                    ['none', Generic.t('echarts_rose_none')],
                    ['radius', Generic.t('echarts_rose_radius')],
                    ['area', Generic.t('echarts_rose_area')],
                ]}
            />
        </FieldGrid>
    );
};

export const RadarOptionsSection: FC<FamilySectionProps> = ({ state, set }) => (
    <Box>
        <FieldGrid sx={{ mb: 1.5 }}>
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
        </FieldGrid>
        <SwitchList sx={{ mb: 1.5 }}>
            <SwitchRow
                label={Generic.t('echarts_radar_area')}
                checked={state.radar.area ?? true}
                onChange={v => set({ radar: { ...state.radar, area: v } })}
            />
        </SwitchList>
        {/* The radar section's raw escape hatch (ADR-0045) — deep-merged UNDER the built radar
            component (GUI wins); `radar` rides replaceMerge, so deleting the raw reverts. */}
        <RawJsonSection
            raw={state.radarRaw}
            onChange={v => set({ radarRaw: v || '' })}
            catalog={RADAR_CATALOG}
            snippets={state.radarSnippets}
            placeholder={'{\n  "startAngle": 90\n}'}
            onCommit={r => set({ radarRaw: r.text || '', radarSnippets: r.ids })}
        />
    </Box>
);
