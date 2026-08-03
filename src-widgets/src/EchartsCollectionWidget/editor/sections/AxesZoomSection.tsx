/**
 * Axes & zoom section — cartesian-only multi-axis + interaction config (ADR-0007/0010/0012).
 *
 * @module EchartsCollectionWidget/editor/sections/AxesZoomSection
 * @remarks
 * The **Axis manager** (ADR-0012): one card per configured Y-axis. Core knobs (name/position/colour/
 * min/max/log/format/splitLine) are always visible; Advanced knobs (scale/splitNumber/minInterval/
 * offset/alignTicks/axisTick/nameRotate) are collapsible. Further axes render side-by-side via
 * position/offset; `alignTicks` + per-axis colour are smart-defaulted in the cartesian builder. Plus
 * X splitlines, dataZoom (slider + inside), and the threshold mark-lines. min≥max carries advisory
 * validation.
 */
import { useState, type FC } from 'react';
import { Box, Button, Collapse, IconButton, useTheme } from '@mui/material';
import { Add as AddIcon, DeleteOutline as DeleteIcon } from '@mui/icons-material';

import Generic from '../../../Generic';
import { echartsPalette } from '../../echartsTheme';
import { resolvePalette } from '../../presentation';
import {
    CheckField,
    FieldLabel,
    LabeledSelect,
    NumberField,
    OptionalNumberField,
    SectionLabel,
    TextField2,
} from '../controls';
import ColorField from '../colorFields';
import type { OidPickerCtx } from '../OidPicker';
import type { EchartsAxisConfig, EchartsMarkLine } from '../../../types/field-definitions/echarts-fields';
import type { EditorState, SetEditor } from '../editorState';

interface AxesZoomSectionProps {
    state: EditorState;
    set: SetEditor;
    pickerCtx: OidPickerCtx;
}

/** One Y-axis card: core knobs + a collapsible Advanced row (ADR-0012). */
const AxisCard: FC<{
    axis: EchartsAxisConfig;
    index: number;
    total: number;
    canDelete: boolean;
    onChange: (patch: Partial<EchartsAxisConfig>) => void;
    onRemove: () => void;
    pickerCtx: OidPickerCtx;
    /** Effective colour of the first bound series — the axis-colour default shown in the swatch (ADR-0018). */
    seriesColor?: string;
    /** Effective name of the first bound series — the axis-name default shown as placeholder (ADR-0018). */
    seriesName?: string;
}> = ({ axis: a, index: i, total, canDelete, onChange, onRemove, pickerCtx, seriesColor, seriesName }) => {
    const [advanced, setAdvanced] = useState(false);
    const axisInvalid = typeof a.min === 'number' && typeof a.max === 'number' && a.min >= a.max;
    // alignTicks smart-defaults on for multi-axis (ADR-0012); the checkbox reflects the effective value
    // and an explicit toggle overrides the smart default.
    const alignTicksEffective = a.alignTicks ?? total > 1;
    // axisTick defaults to shown (echarts default); the checkbox reflects it.
    const axisTickEffective = a.axisTick ?? true;

    return (
        <Box sx={{ mb: 1.5, p: 1.5, border: 1, borderColor: 'divider', borderRadius: 1 }}>
            {/* Colour on its own row so the picker renders like a series colour — swatch + "erbt"
                placeholder — instead of being crammed into a 48 px header cell. Inherited = the bound
                series' effective colour (ADR-0018). */}
            <Box sx={{ mb: 1.5, maxWidth: 260 }}>
                <FieldLabel>{Generic.t('echarts_editor_series_color')}</FieldLabel>
                <ColorField
                    value={a.color ?? ''}
                    fallback={seriesColor ?? ''}
                    onChange={v => onChange({ color: v ?? undefined })}
                    ctx={pickerCtx}
                />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 1, mb: 1.5 }}>
                <Box sx={{ flex: 1 }}>
                    <TextField2
                        label={Generic.t('echarts_axis_name')}
                        value={a.name ?? ''}
                        placeholder={seriesName}
                        shrinkLabel={!!seriesName}
                        onChange={v => onChange({ name: v })}
                    />
                </Box>
                <Box sx={{ width: 130 }}>
                    <LabeledSelect
                        label={Generic.t('echarts_axis_position')}
                        value={a.position ?? (i === 0 ? 'left' : 'right')}
                        onChange={v => onChange({ position: v as 'left' | 'right' })}
                        options={[
                            ['left', Generic.t('echarts_axis_left')],
                            ['right', Generic.t('echarts_axis_right')],
                        ]}
                    />
                </Box>
                {canDelete && (
                    <IconButton
                        size="small"
                        onClick={onRemove}
                        aria-label={Generic.t('echarts_axis_delete')}
                    >
                        <DeleteIcon fontSize="small" />
                    </IconButton>
                )}
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 1.5 }}>
                <OptionalNumberField
                    label={Generic.t('echarts_y_min')}
                    value={a.min}
                    onChange={v => onChange({ min: v })}
                    error={axisInvalid}
                    helperText={axisInvalid ? Generic.t('echarts_val_yminmax') : undefined}
                />
                <OptionalNumberField
                    label={Generic.t('echarts_y_max')}
                    value={a.max}
                    onChange={v => onChange({ max: v })}
                    error={axisInvalid}
                />
                <TextField2
                    label={Generic.t('echarts_y_format')}
                    value={a.format ?? ''}
                    onChange={v => onChange({ format: v })}
                    placeholder="{value} kW"
                />
                <Box sx={{ display: 'flex', gap: 1.5 }}>
                    <CheckField
                        label={Generic.t('echarts_y_log')}
                        value={a.log ?? false}
                        onChange={v => onChange({ log: v })}
                    />
                    <CheckField
                        label={Generic.t('echarts_axis_splitline')}
                        value={a.splitLine ?? i === 0}
                        onChange={v => onChange({ splitLine: v })}
                    />
                </Box>
            </Box>
            <Box sx={{ mt: 0.5 }}>
                <Button
                    size="small"
                    onClick={() => setAdvanced(v => !v)}
                    sx={{ textTransform: 'none', color: 'text.secondary', minWidth: 0 }}
                >
                    {advanced ? '−' : '+'} {Generic.t('echarts_axis_advanced')}
                </Button>
                <Collapse in={advanced}>
                    <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 1.5, mt: 1 }}>
                        <CheckField
                            label={Generic.t('echarts_axis_scale')}
                            value={a.scale ?? false}
                            onChange={v => onChange({ scale: v })}
                        />
                        <CheckField
                            label={Generic.t('echarts_axis_align_ticks')}
                            value={alignTicksEffective}
                            onChange={v => onChange({ alignTicks: v })}
                        />
                        <CheckField
                            label={Generic.t('echarts_axis_tick_show')}
                            value={axisTickEffective}
                            onChange={v => onChange({ axisTick: v })}
                        />
                        <OptionalNumberField
                            label={Generic.t('echarts_axis_split_number')}
                            value={a.splitNumber}
                            onChange={v => onChange({ splitNumber: v })}
                        />
                        <OptionalNumberField
                            label={Generic.t('echarts_axis_min_interval')}
                            value={a.minInterval}
                            onChange={v => onChange({ minInterval: v })}
                        />
                        <NumberField
                            label={Generic.t('echarts_axis_offset')}
                            value={a.offset ?? 0}
                            onChange={v => onChange({ offset: v })}
                        />
                        <OptionalNumberField
                            label={Generic.t('echarts_axis_name_rotate')}
                            value={a.nameRotate}
                            onChange={v => onChange({ nameRotate: v })}
                        />
                    </Box>
                </Collapse>
            </Box>
        </Box>
    );
};

const AxesZoomSection: FC<AxesZoomSectionProps> = ({ state, set, pickerCtx }) => {
    const axes = state.yAxes;
    const theme = useTheme();
    const palette = resolvePalette(
        state.paletteSource,
        state.palettePreset,
        state.paletteCustom,
        echartsPalette(theme),
    );
    /**
     * Effective colour of the first series bound to axis i — the axis-colour default (ADR-0018).
     * History/live: the positional `state.series`. JSON: the name-keyed overlay (`state.series` is
     * empty there — the payload owns the series); the modal axis effect writes `yAxisIndex` onto each
     * visible overlay entry, so a lookup-by-index finds it.
     */
    const boundAxisColor = (i: number): string | undefined => {
        if (state.mode === 'json') {
            const found = Object.values(state.jsonSeriesStyle).find(m => m.yAxisIndex === i);
            return found ? (found.color ?? palette[i % palette.length]) : undefined;
        }
        const idx = state.series.findIndex(s => s.yAxisIndex === i);
        if (idx < 0) {
            return undefined;
        }
        const s = state.series[idx];
        return s.color ?? palette[idx % palette.length];
    };
    /** Effective name of the first series bound to axis i — the axis-name default (ADR-0018). */
    const boundAxisName = (i: number): string | undefined => {
        if (state.mode === 'json') {
            const found = Object.entries(state.jsonSeriesStyle).find(([, m]) => m.yAxisIndex === i);
            if (!found) {
                return undefined;
            }
            return found[1].name || found[0] || `Series ${i + 1}`;
        }
        const idx = state.series.findIndex(s => s.yAxisIndex === i);
        if (idx < 0) {
            return undefined;
        }
        return state.series[idx].name || `Series ${idx + 1}`;
    };
    const setAxis = (i: number, patch: Partial<EchartsAxisConfig>): void =>
        set({ yAxes: axes.map((a, idx) => (idx === i ? { ...a, ...patch } : a)) });
    const addAxis = (): void => set({ yAxes: [...axes, { position: 'right', splitLine: false }] });
    const removeAxis = (i: number): void =>
        set({
            yAxes: axes.filter((_, idx) => idx !== i),
            // Re-index the series' yAxisIndex so nothing points at a removed/shifted axis (Gap-E fix,
            // ADR-0018): a series on the deleted axis rebinds to 0; series beyond it shift down.
            series: state.series.map(s => {
                if (typeof s.yAxisIndex !== 'number') {
                    return s;
                }
                if (s.yAxisIndex === i) {
                    return { ...s, yAxisIndex: 0 };
                }
                if (s.yAxisIndex > i) {
                    return { ...s, yAxisIndex: s.yAxisIndex - 1 };
                }
                return s;
            }),
        });

    const setMark = (i: number, patch: Partial<EchartsMarkLine>): void =>
        set({ markLines: state.markLines.map((m, idx) => (idx === i ? { ...m, ...patch } : m)) });
    const addMark = (): void =>
        set({ markLines: [...state.markLines, { value: 0, label: '', color: '#888', dashed: true }] });
    const removeMark = (i: number): void => set({ markLines: state.markLines.filter((_, idx) => idx !== i) });

    return (
        <Box>
            <SectionLabel hint={Generic.t('echarts_axes_hint')}>{Generic.t('echarts_axes')}</SectionLabel>
            {axes.map((a, i) => (
                <AxisCard
                    key={i}
                    axis={a}
                    index={i}
                    total={axes.length}
                    canDelete={axes.length > 1}
                    onChange={patch => setAxis(i, patch)}
                    onRemove={() => removeAxis(i)}
                    pickerCtx={pickerCtx}
                    seriesColor={boundAxisColor(i)}
                    seriesName={boundAxisName(i)}
                />
            ))}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3, flexWrap: 'wrap' }}>
                <Button
                    startIcon={<AddIcon />}
                    onClick={addAxis}
                >
                    {Generic.t('echarts_axis_add')}
                </Button>
                <CheckField
                    label={Generic.t('echarts_x_split')}
                    value={state.xSplit}
                    onChange={v => set({ xSplit: v })}
                />
            </Box>

            <SectionLabel>{Generic.t('echarts_zoom')}</SectionLabel>
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5, mb: 2 }}>
                <CheckField
                    label={Generic.t('echarts_zoom_slider')}
                    value={state.dataZoomSlider}
                    onChange={v => set({ dataZoomSlider: v })}
                />
                <CheckField
                    label={Generic.t('echarts_zoom_inside')}
                    value={state.dataZoomInside}
                    onChange={v => set({ dataZoomInside: v })}
                />
            </Box>

            <SectionLabel hint={Generic.t('echarts_thresholds_hint')}>{Generic.t('echarts_thresholds')}</SectionLabel>
            {state.markLines.map((m, i) => (
                <Box
                    key={i}
                    sx={{ mb: 1.5 }}
                >
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, alignItems: 'center' }}>
                        <Box sx={{ width: 110 }}>
                            <NumberField
                                label={Generic.t('echarts_threshold_value')}
                                value={m.value}
                                onChange={v => setMark(i, { value: v })}
                            />
                        </Box>
                        <Box sx={{ width: 130 }}>
                            <TextField2
                                label={Generic.t('echarts_threshold_label')}
                                value={m.label ?? ''}
                                onChange={v => setMark(i, { label: v })}
                            />
                        </Box>
                        <CheckField
                            label={Generic.t('echarts_threshold_dashed')}
                            value={m.dashed ?? false}
                            onChange={v => setMark(i, { dashed: v })}
                        />
                        <IconButton
                            size="small"
                            onClick={() => removeMark(i)}
                            aria-label={Generic.t('echarts_editor_series_remove')}
                            sx={{ mt: 1.5 }}
                        >
                            <DeleteIcon fontSize="small" />
                        </IconButton>
                    </Box>
                    <Box sx={{ maxWidth: 260, mt: 0.5 }}>
                        <FieldLabel>{Generic.t('echarts_editor_series_color')}</FieldLabel>
                        <ColorField
                            value={m.color}
                            fallback="#888888"
                            onChange={v => setMark(i, { color: v ?? undefined })}
                            ctx={pickerCtx}
                        />
                    </Box>
                </Box>
            ))}
            <Button
                startIcon={<AddIcon />}
                onClick={addMark}
            >
                {Generic.t('echarts_threshold_add')}
            </Button>
        </Box>
    );
};

export default AxesZoomSection;
