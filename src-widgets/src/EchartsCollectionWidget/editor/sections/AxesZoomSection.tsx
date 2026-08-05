/**
 * Axes & zoom section — cartesian-only multi-axis + interaction config (ADR-0007/0010/0012;
 * control-kit layout per ADR-0019).
 *
 * @module EchartsCollectionWidget/editor/sections/AxesZoomSection
 * @remarks
 * The **Axis manager** (ADR-0012): one collapsible {@link EditorCard} per configured Y-axis (same
 * shell as the series cards). The body is organised into {@link SubGroup}s — basis (name/position/
 * colour), value range (min/max/format), scale & ticks (the five booleans as a SwitchList +
 * splitNumber/minInterval/offset), presentation (name rotation) — replacing the flat ~360 px
 * label-over-switch wall. Cards start collapsed. Further axes render side-by-side via
 * position/offset; `alignTicks` + per-axis colour are smart-defaulted in the cartesian builder.
 * Plus X splitlines, dataZoom (slider + inside as a SwitchList), and the threshold mark-lines.
 * min≥max carries advisory validation.
 */
import { useState, type FC } from 'react';
import { Box, Button, IconButton, Typography, useTheme } from '@mui/material';
import { Add as AddIcon, DeleteOutline as DeleteIcon } from '@mui/icons-material';

import Generic from '../../../Generic';
import { echartsPalette } from '../../echartsTheme';
import { resolvePalette } from '../../presentation';
import { FieldLabel, LabeledSelect, NumberField, OptionalNumberField, TextField2 } from '../controls';
import { EditorCard, FieldGrid, SliderField, SubGroup, SwitchList, SwitchRow } from '../layout';
import ColorField from '../colorFields';
import type { OidPickerCtx } from '../OidPicker';
import type { EchartsAxisConfig, EchartsMarkLine } from '../../../types/field-definitions/echarts-fields';
import type { EditorState, SetEditor } from '../editorState';
import { axisLayout, axisPosition, isOneToOne } from '../axisLayout';
import { nextStableId } from '../identity';

interface AxesZoomSectionProps {
    state: EditorState;
    set: SetEditor;
    pickerCtx: OidPickerCtx;
}

/** One Y-axis card: the shared EditorCard shell, body in SubGroups (ADR-0019). */
const AxisCard: FC<{
    axis: EchartsAxisConfig;
    index: number;
    total: number;
    open: boolean;
    onToggle: () => void;
    onChange: (patch: Partial<EchartsAxisConfig>) => void;
    onRemove: () => void;
    pickerCtx: OidPickerCtx;
    /** Effective colour of the first bound series — the axis-colour default shown in the swatch (ADR-0018). */
    seriesColor?: string;
    /** Effective name of the first bound series — the axis-name default shown as placeholder (ADR-0018). */
    seriesName?: string;
}> = ({ axis: a, index: i, total, open, onToggle, onChange, onRemove, pickerCtx, seriesColor, seriesName }) => {
    const axisInvalid = typeof a.min === 'number' && typeof a.max === 'number' && a.min >= a.max;
    // alignTicks smart-defaults on for multi-axis (ADR-0012); the switch reflects the effective value
    // and an explicit toggle overrides the smart default.
    const alignTicksEffective = a.alignTicks ?? total > 1;
    // axisTick defaults to shown (echarts default); the switch reflects it.
    const axisTickEffective = a.axisTick ?? true;

    return (
        <EditorCard
            open={open}
            onToggle={onToggle}
            swatch={
                <Box
                    sx={{
                        width: 16,
                        height: 16,
                        borderRadius: '4px',
                        backgroundColor: seriesColor ?? a.color ?? '#999',
                        border: '1px solid',
                        borderColor: 'divider',
                        flexShrink: 0,
                    }}
                />
            }
            title={a.name || seriesName || `Achse ${i + 1}`}
            subtitle={
                (a.position ?? (i === 0 ? 'left' : 'right')) === 'left'
                    ? Generic.t('echarts_axis_left')
                    : Generic.t('echarts_axis_right')
            }
            actions={
                <IconButton
                    size="small"
                    onClick={onRemove}
                    aria-label={Generic.t('echarts_axis_delete')}
                    sx={{ p: 0.25 }}
                >
                    <DeleteIcon fontSize="small" />
                </IconButton>
            }
        >
            <SubGroup title={Generic.t('echarts_grp_basis')}>
                <FieldGrid>
                    {/* '' → undefined so a cleared name inherits the bound series' name instead of
                        freezing it out (cartesian builder treats '' as unset). */}
                    <TextField2
                        label={Generic.t('echarts_axis_name')}
                        value={a.name ?? ''}
                        placeholder={seriesName}
                        onChange={v => onChange({ name: v || undefined })}
                    />
                    <LabeledSelect
                        label={Generic.t('echarts_axis_position')}
                        value={a.position ?? (i === 0 ? 'left' : 'right')}
                        onChange={v => onChange({ position: v as 'left' | 'right' })}
                        options={[
                            ['left', Generic.t('echarts_axis_left')],
                            ['right', Generic.t('echarts_axis_right')],
                        ]}
                    />
                    {/* Colour sits in the grid like a series colour — swatch + inherit placeholder.
                        Inherited = the bound series' effective colour (ADR-0018). */}
                    <Box>
                        <FieldLabel>{Generic.t('echarts_editor_series_color')}</FieldLabel>
                        <ColorField
                            value={a.color ?? ''}
                            fallback={seriesColor ?? ''}
                            onChange={v => onChange({ color: v ?? undefined })}
                            ctx={pickerCtx}
                        />
                    </Box>
                </FieldGrid>
            </SubGroup>

            <SubGroup title={Generic.t('echarts_grp_range')}>
                <FieldGrid min={110}>
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
                </FieldGrid>
            </SubGroup>

            <SubGroup title={Generic.t('echarts_grp_scale_ticks')}>
                <SwitchList sx={{ mb: 1.5 }}>
                    <SwitchRow
                        label={Generic.t('echarts_y_log')}
                        checked={a.log ?? false}
                        onChange={v => onChange({ log: v })}
                    />
                    <SwitchRow
                        label={Generic.t('echarts_axis_splitline')}
                        checked={a.splitLine ?? i === 0}
                        onChange={v => onChange({ splitLine: v })}
                    />
                    <SwitchRow
                        label={Generic.t('echarts_axis_scale')}
                        checked={a.scale ?? false}
                        onChange={v => onChange({ scale: v })}
                    />
                    <SwitchRow
                        label={Generic.t('echarts_axis_align_ticks')}
                        checked={alignTicksEffective}
                        onChange={v => onChange({ alignTicks: v })}
                    />
                    <SwitchRow
                        label={Generic.t('echarts_axis_tick_show')}
                        checked={axisTickEffective}
                        onChange={v => onChange({ axisTick: v })}
                    />
                </SwitchList>
                <FieldGrid min={110}>
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
                </FieldGrid>
            </SubGroup>

            <SubGroup title={Generic.t('echarts_grp_presentation')}>
                <FieldGrid>
                    <SliderField
                        label={Generic.t('echarts_axis_name_rotate')}
                        value={a.nameRotate ?? 0}
                        min={-90}
                        max={90}
                        step={5}
                        onChange={v => onChange({ nameRotate: v })}
                    />
                </FieldGrid>
            </SubGroup>
        </EditorCard>
    );
};

const AxesZoomSection: FC<AxesZoomSectionProps> = ({ state, set, pickerCtx }) => {
    const axes = state.yAxes;
    const theme = useTheme();

    // Expanded axis cards — same pattern as SeriesSection cartesian cards.
    const [expanded, setExpanded] = useState<Record<number, boolean>>({});
    const toggleCard = (i: number): void => setExpanded(e => ({ ...e, [i]: !e[i] }));

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
    // Manual "add axis" uses the same 1:1 layout helper as series-add (ADR-0018): alternating side,
    // 80 px stagger, splitLine on axis 0 only — so a new axis never overlaps an existing one.
    const addAxis = (): void => set({ yAxes: [...axes, axisLayout(axes.length)] });
    const removeAxis = (i: number): void => {
        // JSON mode: `state.series` is empty — the payload owns the series, and the axes are DERIVED
        // 1:1 from the visible payload names (the modal axis effect rebuilds `yAxes` whenever the
        // visible set changes). Removing an axis config directly would leave `jsonSeriesStyle.yAxisIndex`
        // stale, so the builder clamps the orphaned series to axis 0 (the "wrong axis gone + line
        // lingers" chaos). The only sane "delete this axis" here is to HIDE its bound payload series
        // (jsonHidden, ADR-0011) — the axis effect then drops the axis automatically. Symmetric to the
        // history/live pair-delete below.
        if (state.mode === 'json') {
            const boundName = Object.entries(state.jsonSeriesStyle).find(([, m]) => m.yAxisIndex === i)?.[0];
            if (boundName && !state.jsonHidden.includes(boundName)) {
                set({ jsonHidden: [...state.jsonHidden, boundName] });
            } else {
                // No bound payload series (orphan axis, or already hidden) — just drop the config.
                set({ yAxes: axes.filter((_, idx) => idx !== i) });
            }
            return;
        }
        // Dense 1:1 (the auto-layout): deleting an axis removes it AND its bound series as a PAIR —
        // symmetric to deleting a series (which removes the orphaned axis). Surviving series re-index,
        // surviving axes re-stagger so no gap is left (mirrors `remove` in SeriesSection). The user
        // never sees the deleted axis' series linger on another axis ("gelöschte Achse noch sichtbar").
        const dense = isOneToOne(state.series) && axes.length === state.series.length;
        if (dense) {
            set({
                yAxes: axes.filter((_, idx) => idx !== i).map((a, idx) => ({ ...a, ...axisPosition(idx) })),
                series: state.series
                    .filter(s => s.yAxisIndex !== i)
                    .map(s => ({
                        ...s,
                        yAxisIndex:
                            typeof s.yAxisIndex === 'number' && s.yAxisIndex > i ? s.yAxisIndex - 1 : s.yAxisIndex,
                    })),
            });
            return;
        }
        // Shared/manual layout (not 1:1): remove only the axis; rebind its series to axis 0 and
        // re-index the rest (Gap-E fix, ADR-0018). DON'T re-stagger — preserve manual positions/offsets.
        set({
            yAxes: axes.filter((_, idx) => idx !== i),
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
    };

    const setMark = (i: number, patch: Partial<EchartsMarkLine>): void =>
        set({ markLines: state.markLines.map((m, idx) => (idx === i ? { ...m, ...patch } : m)) });
    const addMark = (): void =>
        set({
            markLines: [...state.markLines, { id: nextStableId(), value: 0, label: '', color: '#888', dashed: true }],
        });
    const removeMark = (i: number): void => set({ markLines: state.markLines.filter((_, idx) => idx !== i) });

    return (
        <Box>
            <SubGroup
                title={Generic.t('echarts_axes')}
                hint={Generic.t('echarts_axes_hint')}
            >
                {axes.length === 0 && (
                    <Box
                        sx={{
                            mb: 1.5,
                            p: 1.5,
                            border: '1px dashed',
                            borderColor: 'divider',
                            borderRadius: 1,
                            textAlign: 'center',
                        }}
                    >
                        <Typography
                            variant="caption"
                            color="text.secondary"
                        >
                            {Generic.t('echarts_axes_empty')}
                        </Typography>
                    </Box>
                )}
                {axes.map((a, i) => (
                    <AxisCard
                        key={a.id ?? i}
                        axis={a}
                        index={i}
                        total={axes.length}
                        open={!!expanded[i]}
                        onToggle={() => toggleCard(i)}
                        onChange={patch => setAxis(i, patch)}
                        onRemove={() => removeAxis(i)}
                        pickerCtx={pickerCtx}
                        seriesColor={boundAxisColor(i)}
                        seriesName={boundAxisName(i)}
                    />
                ))}
                <Button
                    size="small"
                    startIcon={<AddIcon />}
                    onClick={addAxis}
                >
                    {Generic.t('echarts_axis_add')}
                </Button>
                {/* X splitlines are chart-level (the single x axis), not per-y-axis — one quiet row. */}
                <SwitchList sx={{ mt: 1.5 }}>
                    <SwitchRow
                        label={Generic.t('echarts_x_split')}
                        checked={state.xSplit}
                        onChange={v => set({ xSplit: v })}
                    />
                </SwitchList>
            </SubGroup>

            <SubGroup title={Generic.t('echarts_zoom')}>
                <SwitchList>
                    <SwitchRow
                        label={Generic.t('echarts_zoom_slider')}
                        checked={state.dataZoomSlider}
                        onChange={v => set({ dataZoomSlider: v })}
                    />
                    <SwitchRow
                        label={Generic.t('echarts_zoom_inside')}
                        checked={state.dataZoomInside}
                        onChange={v => set({ dataZoomInside: v })}
                    />
                </SwitchList>
            </SubGroup>

            <SubGroup
                title={Generic.t('echarts_thresholds')}
                hint={Generic.t('echarts_thresholds_hint')}
            >
                {state.markLines.map((m, i) => (
                    <Box
                        key={m.id ?? i}
                        sx={{ border: 1, borderColor: 'divider', borderRadius: 1.5, p: 1.5, mb: 1 }}
                    >
                        <FieldGrid min={110}>
                            <NumberField
                                label={Generic.t('echarts_threshold_value')}
                                value={m.value}
                                onChange={v => setMark(i, { value: v })}
                            />
                            <TextField2
                                label={Generic.t('echarts_threshold_label')}
                                value={m.label ?? ''}
                                onChange={v => setMark(i, { label: v })}
                            />
                            <Box>
                                <FieldLabel>{Generic.t('echarts_editor_series_color')}</FieldLabel>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                    <Box sx={{ flex: 1, minWidth: 0 }}>
                                        <ColorField
                                            value={m.color}
                                            fallback="#888888"
                                            onChange={v => setMark(i, { color: v ?? undefined })}
                                            ctx={pickerCtx}
                                        />
                                    </Box>
                                    <IconButton
                                        size="small"
                                        onClick={() => removeMark(i)}
                                        aria-label={Generic.t('echarts_editor_series_remove')}
                                        sx={{ flexShrink: 0 }}
                                    >
                                        <DeleteIcon fontSize="small" />
                                    </IconButton>
                                </Box>
                            </Box>
                        </FieldGrid>
                        <SwitchList sx={{ mt: 1.5 }}>
                            <SwitchRow
                                label={Generic.t('echarts_threshold_dashed')}
                                checked={m.dashed ?? false}
                                onChange={v => setMark(i, { dashed: v })}
                            />
                        </SwitchList>
                    </Box>
                ))}
                <Button
                    size="small"
                    startIcon={<AddIcon />}
                    onClick={addMark}
                >
                    {Generic.t('echarts_threshold_add')}
                </Button>
            </SubGroup>
        </Box>
    );
};

export default AxesZoomSection;
