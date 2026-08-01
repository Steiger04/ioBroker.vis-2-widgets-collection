/**
 * Series section — OID binding + per-item styling for EVERY family (ADR-0007/0008 r3, ADR-0010).
 *
 * @module EchartsCollectionWidget/editor/sections/SeriesSection
 * @remarks
 *  - cartesian — **series cards**: a quiet header (swatch, name, OID, ↑↓ reorder, duplicate,
 *    delete) that expands inline to the full type-sensitive knob grid.
 *  - pie — **slice rows**: name + OID + colour + delete inline, no expand. (The OID picker was
 *    missing in v2 — slices could never bind data; fixed here.)
 *  - gauge — the binding only (scalar OID + label + colour); the dial presentation lives in the
 *    Gauge options section.
 *  - radar — the indicator-OID list + polygon label/colour; shape/split/area live in Radar options.
 *
 * An empty list renders an honest empty state with a first-item CTA. Validation issues surface as
 * a compact warning list on top (they are item-scoped, not field-scoped).
 */
import { useEffect, useState, type FC } from 'react';
import { Box, Button, Collapse, IconButton, Typography, useTheme } from '@mui/material';
import {
    Add as AddIcon,
    ContentCopy as DuplicateIcon,
    DeleteOutline as DeleteIcon,
    ExpandMore as ExpandIcon,
    KeyboardArrowDown as DownIcon,
    KeyboardArrowUp as UpIcon,
} from '@mui/icons-material';

import Generic from '../../../Generic';
import { echartsPalette } from '../../echartsTheme';
import { resolvePalette } from '../../presentation';
import type { EchartsAreaFill } from '../../../types/field-definitions/echarts-fields';
import { CheckField, FieldLabel, LabeledSelect, NumberField, TextField2 } from '../controls';
import ColorField from '../colorFields';
import OidPicker from '../OidPicker';
import type { OidPickerCtx } from '../OidPicker';
import type { ValidationIssue } from '../validation';
import type { EditorSeries, EditorState, SetEditor } from '../editorState';

interface SeriesSectionProps {
    state: EditorState;
    set: SetEditor;
    pickerCtx: OidPickerCtx;
    /** Issues for this section (item-scoped: missing OID, radar max). */
    issues?: ValidationIssue[];
    /** Autofocus the first series' OID field (skeleton card on first open, ADR-0010). */
    autoFocusFirstOid?: boolean;
}

/** Read-only swatch showing a series' effective colour (explicit → palette slot). */
const Swatch: FC<{ color: string }> = ({ color }) => (
    <Box
        sx={{
            width: 16,
            height: 16,
            borderRadius: '4px',
            backgroundColor: color,
            border: '1px solid',
            borderColor: 'divider',
            flexShrink: 0,
        }}
    />
);

/** Dashed empty state with a first-item CTA (the deleted-all case; first open gets the skeleton). */
const EmptyState: FC<{ text: string; cta: string; onAdd: () => void }> = ({ text, cta, onAdd }) => (
    <Box
        sx={{
            border: '1px dashed',
            borderColor: 'divider',
            borderRadius: 1.5,
            p: 2,
            textAlign: 'center',
        }}
    >
        <Typography
            variant="caption"
            color="text.secondary"
            sx={{ display: 'block', mb: 1 }}
        >
            {text}
        </Typography>
        <Button
            size="small"
            variant="outlined"
            startIcon={<AddIcon />}
            onClick={onAdd}
            sx={{ textTransform: 'none' }}
        >
            {cta}
        </Button>
    </Box>
);

/** Item-scoped validation issues as a compact warning list on top of the section. */
const IssueList: FC<{ issues: ValidationIssue[] }> = ({ issues }) => (
    <Box
        sx={{
            mb: 1.5,
            p: 1,
            bgcolor: 'action.hover',
            borderLeft: 3,
            borderColor: 'warning.main',
            borderRadius: 0.5,
        }}
    >
        {issues.map((issue, i) => (
            <Typography
                key={i}
                variant="caption"
                color="text.secondary"
                component="div"
            >
                • {issue.args?.length ? `${issue.args[0]}: ` : ''}
                {Generic.t(issue.key, ...(issue.args ?? []).slice(1))}
            </Typography>
        ))}
    </Box>
);

const SeriesSection: FC<SeriesSectionProps> = ({ state, set, pickerCtx, issues = [], autoFocusFirstOid }) => {
    const theme = useTheme();
    const palette = resolvePalette(
        state.paletteSource,
        state.palettePreset,
        state.paletteCustom,
        echartsPalette(theme),
    );
    const slot = (i: number): string => palette[i % palette.length];
    const isPie = state.chartType === 'pie';
    const isGauge = state.chartType === 'gauge';
    const isRadar = state.chartType === 'radar';
    const defaultType = state.chartType;

    const series = state.series;
    const update = (i: number, patch: Partial<EditorSeries>): void =>
        set({ series: series.map((s, idx) => (idx === i ? { ...s, ...patch } : s)) });
    const remove = (i: number): void => set({ series: series.filter((_, idx) => idx !== i) });
    const move = (i: number, dir: -1 | 1): void => {
        const j = i + dir;
        if (j < 0 || j >= series.length) {
            return;
        }
        const next = series.slice();
        [next[i], next[j]] = [next[j], next[i]];
        set({ series: next });
    };
    // No explicit colour/type on add → the series inherits its palette slot and the chart type.
    const add = (): void =>
        set({ series: [...series, { oid: '', name: `Series ${series.length + 1}`, yAxisIndex: 0 }] });
    const duplicate = (i: number): void => {
        const copy = {
            ...series[i],
            name: `${series[i].name || `Series ${i + 1}`} (${Generic.t('echarts_editor_series_copy_suffix')})`,
        };
        set({ series: [...series.slice(0, i + 1), copy, ...series.slice(i + 1)] });
    };

    // Expanded cards (cartesian only). The skeleton card starts expanded + OID-focused (ADR-0010).
    const [expanded, setExpanded] = useState<Record<number, boolean>>(autoFocusFirstOid ? { 0: true } : {});
    const toggleCard = (i: number): void => setExpanded(e => ({ ...e, [i]: !e[i] }));
    // The dialog mounts before its open-effect flips the flag — react to the late arrival too.
    useEffect(() => {
        if (autoFocusFirstOid) {
            setExpanded(e => ({ ...e, 0: true }));
        }
    }, [autoFocusFirstOid]);

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

    // ── gauge: scalar OID + label/colour (dial presentation lives in Gauge options) ──
    if (isGauge) {
        const s0 = series[0] ?? { oid: '', name: '' };
        return (
            <Box>
                {issues.length > 0 && <IssueList issues={issues} />}
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
                                            set({ gauge: { ...state.gauge, unit: u } });
                                        }
                                    } catch {
                                        /* ignore — unit stays manual */
                                    }
                                }
                            }}
                            ctx={pickerCtx}
                        />
                    </Box>
                    <TextField2
                        label={Generic.t('echarts_editor_series_name')}
                        value={s0.name ?? ''}
                        onChange={v => set({ series: [{ ...s0, name: v }] })}
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
                </Box>
            </Box>
        );
    }

    // ── radar: indicator-OID list + polygon label/colour ──
    if (isRadar) {
        const s0 = series[0] ?? { name: '' };
        return (
            <Box>
                {issues.length > 0 && <IssueList issues={issues} />}
                <Box sx={{ display: 'grid', gap: 1.5 }}>
                    {state.radar.indicators.length === 0 && (
                        <EmptyState
                            text={Generic.t('echarts_radar_empty')}
                            cta={Generic.t('echarts_radar_add_first')}
                            onAdd={addIndicator}
                        />
                    )}
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
                                autoFocus={autoFocusFirstOid && i === 0}
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
                    {state.radar.indicators.length > 0 && (
                        <Button
                            startIcon={<AddIcon />}
                            onClick={addIndicator}
                            sx={{ alignSelf: 'flex-start' }}
                        >
                            {Generic.t('echarts_radar_add_indicator')}
                        </Button>
                    )}
                    <TextField2
                        label={Generic.t('echarts_editor_series_name')}
                        value={s0.name ?? ''}
                        onChange={v => set({ series: [{ ...s0, name: v }] })}
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
                </Box>
            </Box>
        );
    }

    // ── pie: slice rows (name + OID + colour + delete, no expand) ──
    if (isPie) {
        return (
            <Box>
                {issues.length > 0 && <IssueList issues={issues} />}
                {series.length === 0 && (
                    <EmptyState
                        text={Generic.t('echarts_series_empty')}
                        cta={Generic.t('echarts_series_add_first')}
                        onAdd={add}
                    />
                )}
                {series.map((s, i) => (
                    <Box
                        key={i}
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 1,
                            alignItems: 'center',
                            mb: 1,
                            p: 1,
                            border: 1,
                            borderColor: 'divider',
                            borderRadius: 1.5,
                        }}
                    >
                        <Swatch color={s.color ?? slot(i)} />
                        <Box sx={{ width: 150 }}>
                            <TextField2
                                label={Generic.t('echarts_editor_series_name')}
                                value={s.name ?? ''}
                                onChange={v => update(i, { name: v })}
                            />
                        </Box>
                        <OidPicker
                            value={s.oid}
                            onChange={oid => update(i, { oid })}
                            ctx={pickerCtx}
                            historyOnly={state.mode === 'history'}
                            autoFocus={autoFocusFirstOid && i === 0}
                        />
                        <Box sx={{ width: 170 }}>
                            <ColorField
                                value={s.color}
                                fallback={slot(i)}
                                onChange={v => update(i, { color: v ?? undefined })}
                                ctx={pickerCtx}
                            />
                        </Box>
                        <IconButton
                            size="small"
                            onClick={() => remove(i)}
                            aria-label={Generic.t('echarts_editor_series_remove')}
                            sx={{ ml: 'auto' }}
                        >
                            <DeleteIcon fontSize="small" />
                        </IconButton>
                    </Box>
                ))}
                {series.length > 0 && (
                    <Button
                        startIcon={<AddIcon />}
                        onClick={add}
                        sx={{ mt: 0.5 }}
                    >
                        {Generic.t('echarts_editor_series_add')}
                    </Button>
                )}
            </Box>
        );
    }

    // ── cartesian: series cards with inline expand ──
    return (
        <Box>
            {issues.length > 0 && <IssueList issues={issues} />}
            {series.length === 0 && (
                <EmptyState
                    text={Generic.t('echarts_series_empty')}
                    cta={Generic.t('echarts_series_add_first')}
                    onAdd={add}
                />
            )}
            {series.map((s, i) => {
                const open = !!expanded[i];
                return (
                    <Box
                        key={i}
                        sx={{
                            border: 1,
                            borderColor: open ? 'primary.main' : 'divider',
                            borderRadius: 1.5,
                            mb: 1,
                            overflow: 'hidden',
                        }}
                    >
                        {/* Card header: swatch + name/OID + reorder/duplicate/delete */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, pl: 1, pr: 0.5, py: 0.5 }}>
                            <Box
                                component="button"
                                type="button"
                                onClick={() => toggleCard(i)}
                                aria-expanded={open}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 0.75,
                                    flex: 1,
                                    minWidth: 0,
                                    border: 0,
                                    p: 0,
                                    bgcolor: 'transparent',
                                    color: 'inherit',
                                    font: 'inherit',
                                    textAlign: 'left',
                                    cursor: 'pointer',
                                }}
                            >
                                <ExpandIcon
                                    sx={{
                                        fontSize: 16,
                                        color: 'text.secondary',
                                        transform: open ? 'rotate(180deg)' : 'none',
                                        transition: 'transform 150ms',
                                        flexShrink: 0,
                                    }}
                                />
                                <Swatch color={s.color ?? slot(i)} />
                                <Box sx={{ flex: 1, minWidth: 0 }}>
                                    <Typography
                                        variant="body2"
                                        noWrap
                                    >
                                        {s.name || `Series ${i + 1}`}
                                    </Typography>
                                    <Typography
                                        variant="caption"
                                        noWrap
                                        sx={{ display: 'block', color: s.oid ? 'text.secondary' : 'warning.main' }}
                                    >
                                        {s.oid || Generic.t('echarts_val_oid_missing')}
                                    </Typography>
                                </Box>
                            </Box>
                            <IconButton
                                size="small"
                                disabled={i === 0}
                                onClick={() => move(i, -1)}
                                aria-label={Generic.t('echarts_editor_series_move_up')}
                                sx={{ p: 0.25 }}
                            >
                                <UpIcon fontSize="small" />
                            </IconButton>
                            <IconButton
                                size="small"
                                disabled={i === series.length - 1}
                                onClick={() => move(i, 1)}
                                aria-label={Generic.t('echarts_editor_series_move_down')}
                                sx={{ p: 0.25 }}
                            >
                                <DownIcon fontSize="small" />
                            </IconButton>
                            <IconButton
                                size="small"
                                onClick={() => duplicate(i)}
                                aria-label={Generic.t('echarts_editor_series_duplicate')}
                                sx={{ p: 0.25 }}
                            >
                                <DuplicateIcon sx={{ fontSize: 16 }} />
                            </IconButton>
                            <IconButton
                                size="small"
                                onClick={() => remove(i)}
                                aria-label={Generic.t('echarts_editor_series_remove')}
                                sx={{ p: 0.25 }}
                            >
                                <DeleteIcon fontSize="small" />
                            </IconButton>
                        </Box>

                        {/* Card body: the type-sensitive knob grid */}
                        <Collapse in={open}>
                            <Box sx={{ px: 1.5, pb: 1.5, pt: 0.5 }}>
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
                                    <OidPicker
                                        value={s.oid}
                                        onChange={oid => update(i, { oid })}
                                        ctx={pickerCtx}
                                        historyOnly={state.mode === 'history'}
                                        autoFocus={autoFocusFirstOid && i === 0}
                                    />
                                    {series.length >= 2 && (
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
                                    <LabeledSelect
                                        label={Generic.t('echarts_editor_series_yaxis')}
                                        value={String(s.yAxisIndex ?? 0)}
                                        onChange={v => update(i, { yAxisIndex: Number(v) as 0 | 1 })}
                                        options={[
                                            ['0', Generic.t('echarts_editor_series_left')],
                                            ['1', Generic.t('echarts_editor_series_right')],
                                        ]}
                                    />
                                </Box>

                                {(s.type ?? defaultType) !== 'bar' && (
                                    <Box
                                        sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 1.5, mb: 1.5 }}
                                    >
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
                                {(s.type ?? defaultType) !== 'bar' && s.area === 'gradient' && (
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
                                {(s.type ?? defaultType) === 'bar' && (
                                    <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5, mb: 1.5 }}>
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
                            </Box>
                        </Collapse>
                    </Box>
                );
            })}
            {series.length > 0 && (
                <Button
                    startIcon={<AddIcon />}
                    onClick={add}
                    sx={{ mt: 0.5 }}
                >
                    {Generic.t('echarts_editor_series_add')}
                </Button>
            )}
        </Box>
    );
};

export default SeriesSection;
