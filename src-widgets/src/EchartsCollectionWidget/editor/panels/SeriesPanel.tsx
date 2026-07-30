/**
 * Series tab — per-series styling, family-aware (ADR-0007/0008, Q4).
 *
 * @module EchartsCollectionWidget/editor/panels/SeriesPanel
 * @remarks
 * Cartesian series get the full knob set (type/width/style/area/stack/step/symbol/label/
 * connectNulls/bar-gap/corner-radius) with type-sensitive visibility — a knob appears only when
 * its series type uses it. Pie slices are name+colour only. Gauge/Radar show the single
 * polygon's label + colour (+ area for radar).
 *
 * Series colour is edited via the shared `CollectionGradientColorPicker` (ColorField) with the
 * resolved palette slot as the fallback — so a series with no explicit colour inherits the
 * palette, and changing the palette source/preset visibly recolours it (the v2 "palette has no
 * effect" bug is fixed by NOT materialising a palette colour into each series on add).
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
import { CheckField, FieldLabel, LabeledSelect, NumberField, TextField2 } from '../controls';
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

    const series = state.series;
    const update = (i: number, patch: Partial<EditorSeries>): void =>
        set({ series: series.map((s, idx) => (idx === i ? { ...s, ...patch } : s)) });
    const remove = (i: number): void => set({ series: series.filter((_, idx) => idx !== i) });
    // No explicit colour on add → the series inherits its palette slot (palette changes take effect).
    const add = (): void =>
        set({
            series: [...series, { oid: '', name: `Series ${series.length + 1}`, type: 'line', yAxisIndex: 0 }],
        });

    // Gauge/Radar: a single polygon/label — edit series[0] only (name + colour + radar area).
    if (isGauge || isRadar) {
        const s0 = series[0] ?? { oid: '', name: '' };
        return (
            <Box>
                <FieldLabel>{isGauge ? Generic.t('echarts_gauge_label') : Generic.t('echarts_radar_label')}</FieldLabel>
                <Box sx={{ display: 'grid', gap: 1.5 }}>
                    <Box>
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
                    {isRadar && (
                        <CheckField
                            label={Generic.t('echarts_radar_area')}
                            value={state.radar.area ?? true}
                            onChange={v => set({ radar: { ...state.radar, area: v } })}
                        />
                    )}
                </Box>
            </Box>
        );
    }

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
                            {!isPie && (
                                <LabeledSelect
                                    label={Generic.t('echarts_editor_series_type')}
                                    value={s.type ?? 'line'}
                                    onChange={v => update(i, { type: v as EditorSeries['type'] })}
                                    options={[
                                        ['line', Generic.t('echarts_type_line')],
                                        ['bar', Generic.t('echarts_type_bar')],
                                        ['area', Generic.t('echarts_type_area')],
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
                        {!isPie && (s.type ?? 'line') !== 'bar' && (
                            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 1.5 }}>
                                <CheckField
                                    label={Generic.t('echarts_series_smooth')}
                                    value={s.smooth ?? true}
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
                                <TextField2
                                    label={Generic.t('echarts_series_stack')}
                                    value={s.stack ?? ''}
                                    onChange={v => update(i, { stack: v })}
                                />
                                <CheckField
                                    label={Generic.t('echarts_series_symbol')}
                                    value={s.symbol ?? false}
                                    onChange={v => update(i, { symbol: v })}
                                />
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
                                <CheckField
                                    label={Generic.t('echarts_series_area')}
                                    value={s.area ?? s.type === 'area'}
                                    onChange={v => update(i, { area: v })}
                                />
                            </Box>
                        )}
                        {!isPie && (s.type ?? 'line') === 'bar' && (
                            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5 }}>
                                <NumberField
                                    label={Generic.t('echarts_series_bar_gap')}
                                    value={s.barGap ?? 0}
                                    step={0.1}
                                    onChange={v => update(i, { barGap: v })}
                                />
                                <NumberField
                                    label={Generic.t('echarts_series_corner_radius')}
                                    value={s.cornerRadius ?? 0}
                                    onChange={v => update(i, { cornerRadius: v })}
                                />
                                <CheckField
                                    label={Generic.t('echarts_series_label')}
                                    value={s.label ?? false}
                                    onChange={v => update(i, { label: v })}
                                />
                                <TextField2
                                    label={Generic.t('echarts_series_stack')}
                                    value={s.stack ?? ''}
                                    onChange={v => update(i, { stack: v })}
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
