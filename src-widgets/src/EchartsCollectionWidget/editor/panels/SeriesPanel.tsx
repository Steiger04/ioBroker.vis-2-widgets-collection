/**
 * Series tab — OID binding + per-item styling for EVERY family (ADR-0007/0008 r3, Q2/Q4).
 *
 * @module EchartsCollectionWidget/editor/panels/SeriesPanel
 * @remarks
 * The single home for "what data, and how each item looks", consistent across families:
 *  - cartesian — a series list (Accordion): OID + name + colour + (type override ONLY at ≥2 series)
 *    + the full type-sensitive knob set.
 *  - pie — a slice list (one OID = one slice): name + colour.
 *  - gauge — the dial: scalar OID + min/max/target/progress/unit + label + colour.
 *  - radar — the indicator-OID list (the axes) + polygon shape/area + label/colour.
 *
 * The cartesian series TYPE is NOT set per-series for a single-series chart — the top chart-type
 * selector owns it (a non-overridden series inherits `chartType`). Only at ≥2 series does a
 * per-series type selector appear, as an explicit "mixed" override; setting it back to the chart
 * type clears the override (back to inheriting).
 *
 * Series colour is edited via the shared `CollectionGradientColorPicker` (ColorField) with the
 * resolved palette slot as the fallback — so a series with no explicit colour inherits the
 * palette, and changing the palette source/preset visibly recolours it.
 */
import type { FC } from 'react';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    IconButton,
    Typography,
    useTheme,
} from '@mui/material';
import { Add as AddIcon, DeleteOutline as DeleteIcon, ExpandMore as ExpandIcon } from '@mui/icons-material';

import Generic from '../../../Generic';
import { echartsPalette } from '../../echartsTheme';
import { resolvePalette } from '../../presentation';
import type { EchartsAreaFill } from '../../../types/field-definitions/echarts-fields';
import { CheckField, FieldLabel, LabeledSelect, NumberField, OptionalNumberField, TextField2 } from '../controls';
import ColorField from '../colorFields';
import OidPicker from '../OidPicker';
import type { OidPickerCtx } from '../OidPicker';
import type { EditorSeries, EditorState, SetEditor } from '../editorState';

interface PanelProps {
    state: EditorState;
    set: SetEditor;
    pickerCtx: OidPickerCtx;
}

/** Read-only swatch showing a series' effective colour (explicit → palette slot). */
const ReadOnlySwatch: FC<{ color: string }> = ({ color }) => (
    <Box
        sx={{
            width: 18,
            height: 18,
            borderRadius: '3px',
            backgroundColor: color,
            border: '1px solid',
            borderColor: 'divider',
            flexShrink: 0,
        }}
    />
);

const SeriesPanel: FC<PanelProps> = ({ state, set, pickerCtx }) => {
    const theme = useTheme();
    const themePalette = echartsPalette(theme);
    // The resolved palette drives each series' fallback colour — recolours series on palette change.
    const palette = resolvePalette(state.paletteSource, state.palettePreset, state.paletteCustom, themePalette);
    const slot = (i: number): string => palette[i % palette.length];
    const isPie = state.chartType === 'pie';
    const isGauge = state.chartType === 'gauge';
    const isRadar = state.chartType === 'radar';
    const isCartesian = !isPie && !isGauge && !isRadar;
    // The cartesian chart type is the default a non-overridden series inherits (ADR-0008 r3).
    const defaultType = state.chartType;

    const series = state.series;
    const update = (i: number, patch: Partial<EditorSeries>): void =>
        set({ series: series.map((s, idx) => (idx === i ? { ...s, ...patch } : s)) });
    const remove = (i: number): void => set({ series: series.filter((_, idx) => idx !== i) });
    // No explicit colour/type on add → the series inherits its palette slot and the chart type.
    const add = (): void =>
        set({
            series: [...series, { oid: '', name: `Series ${series.length + 1}`, yAxisIndex: 0 }],
        });

    const setGauge = (patch: Partial<EditorState['gauge']>): void => set({ gauge: { ...state.gauge, ...patch } });
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

    // ── gauge: scalar OID + range/target/unit + label/colour ──
    if (isGauge) {
        const s0 = series[0] ?? { oid: '', name: '' };
        return (
            <Box>
                <FieldLabel>{Generic.t('echarts_gauge_label')}</FieldLabel>
                <Box sx={{ display: 'grid', gap: 1.5 }}>
                    <Box>
                        <FieldLabel>{Generic.t('echarts_data_value_oid')}</FieldLabel>
                        <OidPicker
                            value={s0.oid ?? ''}
                            onChange={async oid => {
                                set({ series: [{ ...(series[0] ?? { oid: '' }), oid }] as EditorSeries[] });
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
                    <Box sx={{ maxWidth: 260 }}>
                        <FieldLabel>{Generic.t('echarts_editor_series_color')}</FieldLabel>
                        <ColorField
                            value={s0.color}
                            fallback={slot(0)}
                            onChange={v => set({ series: [{ ...s0, color: v ?? undefined }] })}
                            ctx={pickerCtx}
                        />
                    </Box>
                    <TextField2
                        label={Generic.t('echarts_editor_series_name')}
                        value={s0.name ?? ''}
                        onChange={v => set({ series: [{ ...s0, name: v }] })}
                    />
                </Box>
            </Box>
        );
    }

    // ── radar: indicator-OID list + polygon shape/area + label/colour ──
    if (isRadar) {
        const s0 = series[0] ?? { name: '' };
        return (
            <Box>
                <FieldLabel>{Generic.t('echarts_radar_label')}</FieldLabel>
                <Box sx={{ display: 'grid', gap: 1.5 }}>
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
                    <Box sx={{ maxWidth: 260 }}>
                        <FieldLabel>{Generic.t('echarts_editor_series_color')}</FieldLabel>
                        <ColorField
                            value={s0.color}
                            fallback={slot(0)}
                            onChange={v => set({ series: [{ ...s0, color: v ?? undefined }] })}
                            ctx={pickerCtx}
                        />
                    </Box>
                    <TextField2
                        label={Generic.t('echarts_editor_series_name')}
                        value={s0.name ?? ''}
                        onChange={v => set({ series: [{ ...s0, name: v }] })}
                    />
                    <CheckField
                        label={Generic.t('echarts_radar_area')}
                        value={state.radar.area ?? true}
                        onChange={v => set({ radar: { ...state.radar, area: v } })}
                    />
                </Box>
            </Box>
        );
    }

    // ── cartesian / pie: series (slice) list ──
    return (
        <Box>
            {isCartesian && <FieldLabel>{Generic.t('echarts_editor_series_hint_cartesian')}</FieldLabel>}
            {series.map((s, i) => (
                <Accordion
                    key={i}
                    disableGutters
                    sx={{ '&:before': { display: 'none' } }}
                >
                    <AccordionSummary expandIcon={<ExpandIcon />}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, width: '100%', pr: 1 }}>
                            <ReadOnlySwatch color={s.color ?? slot(i)} />
                            <Typography
                                noWrap
                                sx={{ flex: 1, minWidth: 0 }}
                            >
                                {s.name || `Series ${i + 1}`}{' '}
                                <Typography
                                    component="span"
                                    variant="caption"
                                    color="text.secondary"
                                >
                                    {s.oid ? `· ${s.oid}` : ''}
                                </Typography>
                            </Typography>
                            {/* Delete on the summary so no expand is needed; stopPropagation keeps
                                the click from toggling the accordion. */}
                            <IconButton
                                size="small"
                                onClick={e => {
                                    e.stopPropagation();
                                    remove(i);
                                }}
                                aria-label={Generic.t('echarts_editor_series_remove')}
                            >
                                <DeleteIcon fontSize="small" />
                            </IconButton>
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                        {/* Series colour: inherits the palette slot unless overridden. */}
                        <Box sx={{ mb: 1.5, maxWidth: 260 }}>
                            <FieldLabel>{Generic.t('echarts_editor_series_color')}</FieldLabel>
                            <ColorField
                                value={s.color}
                                fallback={slot(i)}
                                onChange={v => update(i, { color: v ?? undefined })}
                                ctx={pickerCtx}
                            />
                        </Box>

                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, alignItems: 'center', mb: 1.5 }}>
                            <TextField2
                                label={Generic.t('echarts_editor_series_name')}
                                value={s.name ?? ''}
                                onChange={v => update(i, { name: v })}
                            />
                            {!isPie && (
                                <OidPicker
                                    value={s.oid}
                                    onChange={oid => update(i, { oid })}
                                    ctx={pickerCtx}
                                    historyOnly={state.mode === 'history'}
                                />
                            )}
                            {/* The per-series type override appears only for a multi-series cartesian
                                chart (a single-series chart is typed by the top selector). Selecting
                                the chart type clears the override → back to inheriting. */}
                            {isCartesian && series.length >= 2 && (
                                <LabeledSelect
                                    label={Generic.t('echarts_editor_series_type')}
                                    value={s.type ?? defaultType}
                                    onChange={v =>
                                        update(i, {
                                            type: v === defaultType ? undefined : (v as EditorSeries['type']),
                                        })
                                    }
                                    options={[
                                        ['line', Generic.t('echarts_type_line')],
                                        ['bar', Generic.t('echarts_type_bar')],
                                    ]}
                                />
                            )}
                            {!isPie && (
                                <LabeledSelect
                                    label={Generic.t('echarts_editor_series_yaxis')}
                                    value={String(s.yAxisIndex ?? 0)}
                                    onChange={v => update(i, { yAxisIndex: Number(v) as 0 | 1 })}
                                    options={[
                                        ['0', Generic.t('echarts_editor_series_left')],
                                        ['1', Generic.t('echarts_editor_series_right')],
                                    ]}
                                />
                            )}
                        </Box>

                        {/* Type-sensitive presentation knobs (cartesian only). */}
                        {!isPie && (s.type ?? defaultType) !== 'bar' && (
                            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 1.5, mb: 1.5 }}>
                                <CheckField
                                    label={Generic.t('echarts_series_smooth')}
                                    value={s.smooth ?? false}
                                    onChange={v => update(i, { smooth: v })}
                                />
                                <NumberField
                                    label={Generic.t('echarts_series_line_width')}
                                    value={s.lineWidth ?? 2}
                                    step={0.5}
                                    onChange={v => update(i, { lineWidth: v })}
                                />
                                <LabeledSelect
                                    label={Generic.t('echarts_series_line_style')}
                                    value={s.lineStyle ?? 'solid'}
                                    onChange={v => update(i, { lineStyle: v as 'solid' | 'dashed' | 'dotted' })}
                                    options={[
                                        ['solid', Generic.t('echarts_style_solid')],
                                        ['dashed', Generic.t('echarts_style_dashed')],
                                        ['dotted', Generic.t('echarts_style_dotted')],
                                    ]}
                                />
                                <LabeledSelect
                                    label={Generic.t('echarts_series_step')}
                                    value={s.step ?? 'none'}
                                    onChange={v => update(i, { step: v as EditorSeries['step'] })}
                                    options={[
                                        ['none', Generic.t('echarts_step_none')],
                                        ['start', Generic.t('echarts_step_start')],
                                        ['middle', Generic.t('echarts_step_middle')],
                                        ['end', Generic.t('echarts_step_end')],
                                    ]}
                                />
                                {/* D4: stack via a group dropdown (not free text) — series sharing a
                                    group stack. None = no stack. */}
                                <LabeledSelect
                                    label={Generic.t('echarts_series_stack')}
                                    value={s.stack ?? ''}
                                    onChange={v => update(i, { stack: v })}
                                    options={[
                                        ['', Generic.t('echarts_stack_none')],
                                        ['A', Generic.t('echarts_stack_group_a')],
                                        ['B', Generic.t('echarts_stack_group_b')],
                                        ['C', Generic.t('echarts_stack_group_c')],
                                    ]}
                                />
                                <CheckField
                                    label={Generic.t('echarts_series_symbol')}
                                    value={s.symbol ?? false}
                                    onChange={v => update(i, { symbol: v })}
                                />
                                {/* D6: symbol size only meaningful when symbols are shown. */}
                                {s.symbol && (
                                    <NumberField
                                        label={Generic.t('echarts_series_symbol_size')}
                                        value={s.symbolSize ?? 6}
                                        onChange={v => update(i, { symbolSize: v })}
                                    />
                                )}
                                <CheckField
                                    label={Generic.t('echarts_series_label')}
                                    value={s.label ?? false}
                                    onChange={v => update(i, { label: v })}
                                />
                                <CheckField
                                    label={Generic.t('echarts_series_connect_nulls')}
                                    value={s.connectNulls ?? false}
                                    onChange={v => update(i, { connectNulls: v })}
                                />
                                {/* D3: area is a per-series fill mode (ADR-0008 r4), not a type. */}
                                <LabeledSelect
                                    label={Generic.t('echarts_series_area')}
                                    value={s.area ?? 'off'}
                                    onChange={v => update(i, { area: v as EchartsAreaFill })}
                                    options={[
                                        ['off', Generic.t('echarts_area_off')],
                                        ['flat', Generic.t('echarts_area_flat')],
                                        ['gradient', Generic.t('echarts_area_gradient')],
                                    ]}
                                />
                                {(s.area ?? 'off') !== 'off' && (
                                    <NumberField
                                        label={Generic.t('echarts_series_area_opacity')}
                                        value={s.areaOpacity ?? (s.area === 'gradient' ? 0.8 : 0.15)}
                                        step={0.05}
                                        onChange={v => update(i, { areaOpacity: v })}
                                    />
                                )}
                            </Box>
                        )}
                        {/* D5: gradient area fill — one gradient picker supplies the area colour. */}
                        {!isPie && (s.type ?? defaultType) !== 'bar' && s.area === 'gradient' && (
                            <Box sx={{ mb: 1.5, maxWidth: 260 }}>
                                <FieldLabel>{Generic.t('echarts_series_area_gradient')}</FieldLabel>
                                <ColorField
                                    value={s.areaGradient}
                                    onChange={v => update(i, { areaGradient: v ?? undefined })}
                                    ctx={pickerCtx}
                                    allowGradient
                                />
                            </Box>
                        )}
                        {!isPie && (s.type ?? defaultType) === 'bar' && (
                            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5, mb: 1.5 }}>
                                {/* D7: both echarts bar gaps — between-bar and between-category. */}
                                <NumberField
                                    label={Generic.t('echarts_series_bar_gap')}
                                    value={s.barGap ?? 0}
                                    step={0.1}
                                    onChange={v => update(i, { barGap: v })}
                                />
                                <NumberField
                                    label={Generic.t('echarts_series_bar_category_gap')}
                                    value={s.barCategoryGap ?? 0}
                                    step={0.1}
                                    onChange={v => update(i, { barCategoryGap: v })}
                                />
                                <NumberField
                                    label={Generic.t('echarts_series_corner_radius')}
                                    value={s.cornerRadius ?? 0}
                                    onChange={v => update(i, { cornerRadius: v })}
                                />
                                <LabeledSelect
                                    label={Generic.t('echarts_series_stack')}
                                    value={s.stack ?? ''}
                                    onChange={v => update(i, { stack: v })}
                                    options={[
                                        ['', Generic.t('echarts_stack_none')],
                                        ['A', Generic.t('echarts_stack_group_a')],
                                        ['B', Generic.t('echarts_stack_group_b')],
                                        ['C', Generic.t('echarts_stack_group_c')],
                                    ]}
                                />
                                <CheckField
                                    label={Generic.t('echarts_series_label')}
                                    value={s.label ?? false}
                                    onChange={v => update(i, { label: v })}
                                />
                            </Box>
                        )}
                    </AccordionDetails>
                </Accordion>
            ))}
            <Button
                startIcon={<AddIcon />}
                onClick={add}
                sx={{ mt: 1 }}
            >
                {Generic.t('echarts_editor_series_add')}
            </Button>
        </Box>
    );
};

export default SeriesPanel;
