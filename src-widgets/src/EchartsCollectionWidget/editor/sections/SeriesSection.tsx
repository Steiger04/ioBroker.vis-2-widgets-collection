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
import { useEffect, useState, type FC, type ReactElement } from 'react';
import { Alert, Box, Button, Collapse, IconButton, Typography, useTheme } from '@mui/material';
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
import type {
    EchartsAreaFill,
    EchartsCartesianType,
    EchartsSeriesMeta,
} from '../../../types/field-definitions/echarts-fields';
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
    /** JSON mode (ADR-0011): the payload series names, in payload order. Drives the card list. */
    jsonSeriesNames?: string[];
    /** JSON mode: parse error from the jsonOid payload (shown instead of a silent blank). */
    jsonError?: string;
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

/**
 * The type-sensitive cartesian knob grid (line / area / bar) — shared by the cartesian series card
 * (history/live, bound to `state.series[i]`) and the JSON-mode series card (bound to the name-keyed
 * overlay entry, ADR-0011 parity). Purely meta-driven; the caller owns the binding (onPatch).
 */
const CartesianSeriesKnobs: FC<{
    meta: EchartsSeriesMeta;
    defaultType: EchartsCartesianType;
    onPatch: (patch: Partial<EchartsSeriesMeta>) => void;
    pickerCtx: OidPickerCtx;
}> = ({ meta, defaultType, onPatch, pickerCtx }) => {
    const renderedType: EchartsCartesianType =
        meta.type === 'bar' ? 'bar' : meta.type === 'line' ? 'line' : defaultType;
    return (
        <>
            {renderedType !== 'bar' && (
                <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 1.5, mb: 1.5 }}>
                    <CheckField
                        label={Generic.t('echarts_series_smooth')}
                        value={meta.smooth ?? false}
                        onChange={v => onPatch({ smooth: v })}
                    />
                    <NumberField
                        label={Generic.t('echarts_series_line_width')}
                        value={meta.lineWidth ?? 2}
                        step={0.5}
                        onChange={v => onPatch({ lineWidth: v })}
                    />
                    <LabeledSelect
                        label={Generic.t('echarts_series_line_style')}
                        value={meta.lineStyle ?? 'solid'}
                        onChange={v => onPatch({ lineStyle: v as 'solid' | 'dashed' | 'dotted' })}
                        options={[
                            ['solid', Generic.t('echarts_style_solid')],
                            ['dashed', Generic.t('echarts_style_dashed')],
                            ['dotted', Generic.t('echarts_style_dotted')],
                        ]}
                    />
                    <LabeledSelect
                        label={Generic.t('echarts_series_step')}
                        value={meta.step ?? 'none'}
                        onChange={v => onPatch({ step: v as EchartsSeriesMeta['step'] })}
                        options={[
                            ['none', Generic.t('echarts_step_none')],
                            ['start', Generic.t('echarts_step_start')],
                            ['middle', Generic.t('echarts_step_middle')],
                            ['end', Generic.t('echarts_step_end')],
                        ]}
                    />
                    <LabeledSelect
                        label={Generic.t('echarts_series_stack')}
                        value={meta.stack ?? ''}
                        onChange={v => onPatch({ stack: v })}
                        options={[
                            ['', Generic.t('echarts_stack_none')],
                            ['A', Generic.t('echarts_stack_group_a')],
                            ['B', Generic.t('echarts_stack_group_b')],
                            ['C', Generic.t('echarts_stack_group_c')],
                        ]}
                    />
                    <CheckField
                        label={Generic.t('echarts_series_symbol')}
                        value={meta.symbol ?? false}
                        onChange={v => onPatch({ symbol: v })}
                    />
                    {meta.symbol && (
                        <NumberField
                            label={Generic.t('echarts_series_symbol_size')}
                            value={meta.symbolSize ?? 6}
                            onChange={v => onPatch({ symbolSize: v })}
                        />
                    )}
                    <CheckField
                        label={Generic.t('echarts_series_label')}
                        value={meta.label ?? false}
                        onChange={v => onPatch({ label: v })}
                    />
                    <CheckField
                        label={Generic.t('echarts_series_connect_nulls')}
                        value={meta.connectNulls ?? false}
                        onChange={v => onPatch({ connectNulls: v })}
                    />
                    <LabeledSelect
                        label={Generic.t('echarts_series_area')}
                        value={meta.area ?? 'off'}
                        onChange={v => onPatch({ area: v as EchartsAreaFill })}
                        options={[
                            ['off', Generic.t('echarts_area_off')],
                            ['flat', Generic.t('echarts_area_flat')],
                            ['gradient', Generic.t('echarts_area_gradient')],
                        ]}
                    />
                    {(meta.area ?? 'off') !== 'off' && (
                        <NumberField
                            label={Generic.t('echarts_series_area_opacity')}
                            value={meta.areaOpacity ?? (meta.area === 'gradient' ? 0.8 : 0.15)}
                            step={0.05}
                            onChange={v => onPatch({ areaOpacity: v })}
                        />
                    )}
                </Box>
            )}
            {renderedType !== 'bar' && meta.area === 'gradient' && (
                <Box sx={{ mb: 1.5, maxWidth: 260 }}>
                    <FieldLabel>{Generic.t('echarts_series_area_gradient')}</FieldLabel>
                    <ColorField
                        value={meta.areaGradient}
                        onChange={v => onPatch({ areaGradient: v ?? undefined })}
                        ctx={pickerCtx}
                        allowGradient
                    />
                </Box>
            )}
            {renderedType === 'bar' && (
                <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5, mb: 1.5 }}>
                    <NumberField
                        label={Generic.t('echarts_series_bar_gap')}
                        value={meta.barGap ?? 0}
                        step={0.1}
                        onChange={v => onPatch({ barGap: v })}
                    />
                    <NumberField
                        label={Generic.t('echarts_series_bar_category_gap')}
                        value={meta.barCategoryGap ?? 0}
                        step={0.1}
                        onChange={v => onPatch({ barCategoryGap: v })}
                    />
                    <NumberField
                        label={Generic.t('echarts_series_corner_radius')}
                        value={meta.cornerRadius ?? 0}
                        onChange={v => onPatch({ cornerRadius: v })}
                    />
                    <LabeledSelect
                        label={Generic.t('echarts_series_stack')}
                        value={meta.stack ?? ''}
                        onChange={v => onPatch({ stack: v })}
                        options={[
                            ['', Generic.t('echarts_stack_none')],
                            ['A', Generic.t('echarts_stack_group_a')],
                            ['B', Generic.t('echarts_stack_group_b')],
                            ['C', Generic.t('echarts_stack_group_c')],
                        ]}
                    />
                    <CheckField
                        label={Generic.t('echarts_series_label')}
                        value={meta.label ?? false}
                        onChange={v => onPatch({ label: v })}
                    />
                </Box>
            )}
        </>
    );
};

const SeriesSection: FC<SeriesSectionProps> = ({
    state,
    set,
    pickerCtx,
    issues = [],
    autoFocusFirstOid,
    jsonSeriesNames = [],
    jsonError,
}) => {
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
    const isJson = state.mode === 'json';
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
    // JSON mode: per-series presentation lives in the name-keyed overlay (ADR-0011), not state.series.
    // The payload owns series identity (count + data); the overlay re-attaches style by name.
    const updateJson = (name: string, patch: Partial<EchartsSeriesMeta>): void =>
        set({
            jsonSeriesStyle: {
                ...state.jsonSeriesStyle,
                [name]: { ...state.jsonSeriesStyle[name], ...patch },
            },
        });

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

    // ── json mode (cartesian + pie): one editable card per payload series, keyed by name.
    // The payload owns series identity (count + data); the overlay owns presentation (ADR-0011).
    if (isJson) {
        const dashed = (text: string): ReactElement => (
            <Box sx={{ border: '1px dashed', borderColor: 'divider', borderRadius: 1.5, p: 2, textAlign: 'center' }}>
                <Typography
                    variant="caption"
                    color="text.secondary"
                >
                    {text}
                </Typography>
            </Box>
        );
        return (
            <Box>
                {issues.length > 0 && <IssueList issues={issues} />}
                <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ display: 'block', mb: 1.5 }}
                >
                    {Generic.t('echarts_json_series_hint')}
                </Typography>
                {jsonError ? (
                    <Alert
                        severity="error"
                        variant="outlined"
                        sx={{ py: 0 }}
                    >
                        {Generic.t('echarts_json_parse_error')}: {jsonError}
                    </Alert>
                ) : !state.jsonOid ? (
                    dashed(Generic.t('echarts_json_no_oid'))
                ) : jsonSeriesNames.length === 0 ? (
                    dashed(Generic.t('echarts_json_series_empty'))
                ) : isPie ? (
                    // pie-json: slice rows (name + colour, no OID, no expand).
                    jsonSeriesNames.map((name, i) => {
                        const m = state.jsonSeriesStyle[name] ?? {};
                        return (
                            <Box
                                key={name}
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
                                <Swatch color={m.color ?? slot(i)} />
                                <Typography
                                    variant="body2"
                                    noWrap
                                    sx={{ minWidth: 120 }}
                                >
                                    {name}
                                </Typography>
                                <Box sx={{ width: 170 }}>
                                    <ColorField
                                        value={m.color}
                                        fallback={slot(i)}
                                        onChange={v => updateJson(name, { color: v ?? undefined })}
                                        ctx={pickerCtx}
                                    />
                                </Box>
                            </Box>
                        );
                    })
                ) : (
                    // cartesian-json: full cards (style editable; no add/delete — payload is king).
                    jsonSeriesNames.map((name, i) => {
                        const m = state.jsonSeriesStyle[name] ?? {};
                        const open = !!expanded[i];
                        return (
                            <Box
                                key={name}
                                sx={{
                                    border: 1,
                                    borderColor: open ? 'primary.main' : 'divider',
                                    borderRadius: 1.5,
                                    mb: 1,
                                    overflow: 'hidden',
                                }}
                            >
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
                                        <Swatch color={m.color ?? slot(i)} />
                                        <Box sx={{ flex: 1, minWidth: 0 }}>
                                            <Typography
                                                variant="body2"
                                                noWrap
                                            >
                                                {m.name || name}
                                            </Typography>
                                            <Typography
                                                variant="caption"
                                                noWrap
                                                sx={{ display: 'block', color: 'text.secondary' }}
                                            >
                                                {name}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                                <Collapse in={open}>
                                    <Box sx={{ px: 1.5, pb: 1.5, pt: 0.5 }}>
                                        <Box sx={{ mb: 1.5, maxWidth: 260 }}>
                                            <FieldLabel>{Generic.t('echarts_editor_series_color')}</FieldLabel>
                                            <ColorField
                                                value={m.color}
                                                fallback={slot(i)}
                                                onChange={v => updateJson(name, { color: v ?? undefined })}
                                                ctx={pickerCtx}
                                            />
                                        </Box>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexWrap: 'wrap',
                                                gap: 1,
                                                alignItems: 'center',
                                                mb: 1.5,
                                            }}
                                        >
                                            <TextField2
                                                label={Generic.t('echarts_editor_series_name')}
                                                value={m.name ?? ''}
                                                onChange={v => updateJson(name, { name: v || undefined })}
                                            />
                                            <LabeledSelect
                                                label={Generic.t('echarts_editor_series_type')}
                                                value={m.type ?? defaultType}
                                                onChange={v =>
                                                    updateJson(name, {
                                                        type:
                                                            v === defaultType ? undefined : (v as EchartsCartesianType),
                                                    })
                                                }
                                                options={[
                                                    ['line', Generic.t('echarts_type_line')],
                                                    ['bar', Generic.t('echarts_type_bar')],
                                                ]}
                                            />
                                            <LabeledSelect
                                                label={Generic.t('echarts_editor_series_yaxis')}
                                                value={String(m.yAxisIndex ?? 0)}
                                                onChange={v => updateJson(name, { yAxisIndex: Number(v) as 0 | 1 })}
                                                options={[
                                                    ['0', Generic.t('echarts_editor_series_left')],
                                                    ['1', Generic.t('echarts_editor_series_right')],
                                                ]}
                                            />
                                        </Box>
                                        <CartesianSeriesKnobs
                                            meta={m}
                                            defaultType={defaultType as EchartsCartesianType}
                                            onPatch={p => updateJson(name, p)}
                                            pickerCtx={pickerCtx}
                                        />
                                    </Box>
                                </Collapse>
                            </Box>
                        );
                    })
                )}
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

                                <CartesianSeriesKnobs
                                    meta={s}
                                    defaultType={defaultType as EchartsCartesianType}
                                    onPatch={p => update(i, p)}
                                    pickerCtx={pickerCtx}
                                />
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
