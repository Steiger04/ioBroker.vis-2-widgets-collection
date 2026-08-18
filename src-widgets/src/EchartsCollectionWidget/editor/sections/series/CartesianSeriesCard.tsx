/**
 * Cartesian series cards (history/live) + the shared cartesian card internals (ADR-0019, WS5).
 *
 * @module EchartsCollectionWidget/editor/sections/series/CartesianSeriesCard
 * @remarks
 *  - {@link CartesianBasisFields} — the "Basics" SubGroup (OID / history instance (Verlauf,
 *    ADR-0039) / name / colour / type / y-axis
 *    binding) shared by the history/live card and the JSON-mode card (ADR-0011 parity). The JSON
 *    card omits the OID row (the payload owns the data) and clears names to `undefined`.
 *  - {@link CartesianSeriesKnobs} — the type-sensitive knob cluster (line / bar / area SubGroups),
 *    purely meta-driven; the caller owns the binding. Bounded numerics are SliderFields, booleans
 *    live in SwitchLists (ADR-0019).
 *  - {@link CartesianSeriesList} — the history/live card list: EditorCards with swatch, name/OID,
 *    ↑↓ reorder, duplicate, delete + the OID-first add affordances.
 */
import type { FC } from 'react';
import { Box, IconButton } from '@mui/material';
import {
    ContentCopy as DuplicateIcon,
    DeleteOutline as DeleteIcon,
    KeyboardArrowDown as DownIcon,
    KeyboardArrowUp as UpIcon,
} from '@mui/icons-material';

import Generic from '../../../../Generic';
import type {
    EchartsAreaFill,
    EchartsAxisConfig,
    EchartsCartesianType,
    EchartsSeriesMeta,
} from '../../../../types/field-definitions/echarts-fields';
import {
    EditorCard,
    FieldGrid,
    FieldLabel,
    LabeledSelect,
    OptionalSliderField,
    SliderField,
    SubGroup,
    SwitchList,
    SwitchRow,
    TextField2,
} from '../../../../components/controls';
import ColorField from '../../colorFields';
import OidPicker from '../../OidPicker';
import type { OidPickerCtx } from '../../OidPicker';
import { hostsMarkLines } from '../../seriesRawAnalysis';
import type { SeriesTemplateSlot } from '../../seriesTemplates';
import type { EditorSeries, EditorState } from '../../editorState';
import { effectiveAxisName } from '../../axisLayout';
import { AddSeriesViaOid, EmptyState, SeriesRawOverride, Swatch } from './shared';
import { snippetPatch } from '../../snippetComposition';

/**
 * The "Basics" SubGroup of a cartesian series card — identity + binding. Shared by the
 * history/live card (bound to `state.series[i]`, with OID row) and the JSON-mode card (bound to
 * the name-keyed overlay entry, no OID row — the payload owns the data).
 */
export const CartesianBasisFields: FC<{
    meta: EchartsSeriesMeta;
    defaultType: EchartsCartesianType;
    onPatch: (patch: Partial<EchartsSeriesMeta>) => void;
    pickerCtx: OidPickerCtx;
    /** Palette slot the colour picker falls back to (the inherit preview). */
    colorFallback: string;
    /** Show the per-series type override (history/live: only when ≥2 series; JSON: always). */
    showType: boolean;
    yAxes: EchartsAxisConfig[];
    /**
     * Effective display name per axis (explicit → inherited-from-bound-series → index, ADR-0025)
     * for the binding-dropdown labels. Omitted by the JSON card (its axis select is hidden).
     */
    axisDisplayNames?: string[];
    /** OID binding row (history/live only — the JSON payload owns the data). */
    oid?: { value: string; onChange: (oid: string) => void; historyOnly: boolean };
    /** Verlauf: show the per-series history-instance select (first field under the OID, ADR-0039). */
    showInstance?: boolean;
    /** Verlauf: selectable history instances (empty list = none installed → Auto only). */
    historyInstances?: string[];
    /** JSON overlay semantics: clearing the name writes `undefined` (fall back to the payload name). */
    nameClearsToUndefined?: boolean;
    /**
     * Show the per-series Y-axis binding select. Hidden in JSON mode (ADR-XXXX): the modal's
     * auto-1:1 axis effect forces `yAxisIndex = position` whenever the payload changes, so the
     * select's free choice is not robust — auto-1:1 is the truth there.
     *
     * @default true
     */
    showAxis?: boolean;
}> = ({
    meta,
    defaultType,
    onPatch,
    pickerCtx,
    colorFallback,
    showType,
    yAxes,
    axisDisplayNames,
    oid,
    showInstance,
    historyInstances,
    nameClearsToUndefined,
    showAxis = true,
}) => (
    <SubGroup title={Generic.t('echarts_grp_basis')}>
        <FieldGrid>
            {oid && (
                <Box sx={{ gridColumn: '1 / -1' }}>
                    <FieldLabel>{Generic.t('oid')}</FieldLabel>
                    <OidPicker
                        value={oid.value}
                        onChange={oid.onChange}
                        ctx={pickerCtx}
                        historyOnly={oid.historyOnly}
                    />
                </Box>
            )}
            {showInstance && (
                <LabeledSelect
                    label={Generic.t('echarts_instance')}
                    value={meta.instance ?? ''}
                    onChange={v => onPatch({ instance: v || undefined })}
                    options={[
                        ['', Generic.t('echarts_instance_auto')],
                        ...(historyInstances ?? []).map(id => [id, id] as [string, string]),
                    ]}
                />
            )}
            <TextField2
                label={Generic.t('echarts_editor_series_name')}
                value={meta.name ?? ''}
                onChange={v => onPatch({ name: nameClearsToUndefined ? v || undefined : v })}
            />
            <Box>
                <FieldLabel>{Generic.t('echarts_editor_series_color')}</FieldLabel>
                <ColorField
                    value={meta.color}
                    fallback={colorFallback}
                    onChange={v => onPatch({ color: v ?? undefined })}
                    ctx={pickerCtx}
                />
            </Box>
            {showType && (
                <LabeledSelect
                    label={Generic.t('echarts_editor_series_type')}
                    value={meta.type ?? defaultType}
                    onChange={v => onPatch({ type: v === defaultType ? undefined : (v as EchartsCartesianType) })}
                    options={[
                        ['line', Generic.t('echarts_type_line')],
                        ['bar', Generic.t('echarts_type_bar')],
                    ]}
                />
            )}
            {showAxis && (
                <LabeledSelect
                    label={Generic.t('echarts_editor_series_yaxis')}
                    value={String(Math.min(Number(meta.yAxisIndex ?? 0), Math.max(0, yAxes.length - 1)))}
                    onChange={v => onPatch({ yAxisIndex: Number(v) })}
                    options={
                        yAxes.length
                            ? yAxes.map((ax, ai) => {
                                  // Effective name (explicit → inherited → index, ADR-0025) when the
                                  // caller resolves it; else the legacy "N · name" / "N" fallback.
                                  const label =
                                      axisDisplayNames?.[ai] ?? (ax.name ? `${ai + 1} · ${ax.name}` : String(ai + 1));
                                  return [String(ai), label] as [string, string];
                              })
                            : [['0', '1'] as [string, string]]
                    }
                />
            )}
        </FieldGrid>
    </SubGroup>
);

/**
 * The type-sensitive cartesian knob cluster (line / area / bar SubGroups) — shared by the
 * cartesian series card (history/live, bound to `state.series[i]`) and the JSON-mode series card
 * (bound to the name-keyed overlay entry, ADR-0011 parity). Purely meta-driven; the caller owns
 * the binding (onPatch).
 */
export const CartesianSeriesKnobs: FC<{
    meta: EchartsSeriesMeta;
    defaultType: EchartsCartesianType;
    onPatch: (patch: Partial<EchartsSeriesMeta>) => void;
    pickerCtx: OidPickerCtx;
    /** Palette-slot colour of this series — the area-gradient inherit preview (ADR-0027). */
    colorFallback: string;
}> = ({ meta, defaultType, onPatch, pickerCtx, colorFallback }) => {
    const renderedType: EchartsCartesianType =
        meta.type === 'bar' ? 'bar' : meta.type === 'line' ? 'line' : defaultType;
    return (
        <>
            {renderedType !== 'bar' && (
                <>
                    <SubGroup title={Generic.t('echarts_grp_line')}>
                        <SwitchList sx={{ mb: 1.5 }}>
                            <SwitchRow
                                label={Generic.t('echarts_series_smooth')}
                                checked={meta.smooth ?? false}
                                onChange={v => onPatch({ smooth: v })}
                            />
                            <SwitchRow
                                label={Generic.t('echarts_series_symbol')}
                                checked={meta.symbol ?? false}
                                onChange={v => onPatch({ symbol: v })}
                            />
                            <SwitchRow
                                label={Generic.t('echarts_series_label')}
                                checked={meta.label ?? false}
                                onChange={v => onPatch({ label: v })}
                            />
                            <SwitchRow
                                label={Generic.t('echarts_series_connect_nulls')}
                                checked={meta.connectNulls ?? false}
                                onChange={v => onPatch({ connectNulls: v })}
                            />
                        </SwitchList>
                        <FieldGrid min={140}>
                            <SliderField
                                label={Generic.t('echarts_series_line_width')}
                                value={meta.lineWidth ?? 2}
                                min={0.5}
                                max={8}
                                step={0.5}
                                onChange={v => onPatch({ lineWidth: v })}
                            />
                            <SliderField
                                label={Generic.t('echarts_series_symbol_size')}
                                value={meta.symbolSize ?? 6}
                                min={2}
                                max={20}
                                disabled={!meta.symbol}
                                onChange={v => onPatch({ symbolSize: v })}
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
                        </FieldGrid>
                    </SubGroup>
                    <SubGroup title={Generic.t('echarts_grp_area')}>
                        <FieldGrid min={140}>
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
                            <SliderField
                                label={Generic.t('echarts_series_area_opacity')}
                                value={meta.areaOpacity ?? (meta.area === 'gradient' ? 0.8 : 0.15)}
                                min={0}
                                max={1}
                                step={0.05}
                                disabled={(meta.area ?? 'off') === 'off'}
                                onChange={v => onPatch({ areaOpacity: v })}
                            />
                            {meta.area === 'gradient' && (
                                <Box>
                                    <FieldLabel>{Generic.t('echarts_series_area_gradient')}</FieldLabel>
                                    <ColorField
                                        value={meta.areaGradient}
                                        fallback={meta.color ?? colorFallback}
                                        onChange={v => onPatch({ areaGradient: v ?? undefined })}
                                        ctx={pickerCtx}
                                        allowGradient
                                    />
                                </Box>
                            )}
                        </FieldGrid>
                    </SubGroup>
                </>
            )}
            {renderedType === 'bar' && (
                <SubGroup title={Generic.t('echarts_grp_bar')}>
                    <SwitchList sx={{ mb: 1.5 }}>
                        <SwitchRow
                            label={Generic.t('echarts_series_label')}
                            checked={meta.label ?? false}
                            onChange={v => onPatch({ label: v })}
                        />
                    </SwitchList>
                    <FieldGrid min={140}>
                        <OptionalSliderField
                            label={Generic.t('echarts_series_bar_gap')}
                            value={meta.barGap}
                            fallback={0.1} // echarts default barGap = 10%
                            min={0}
                            max={1}
                            step={0.05}
                            onChange={v => onPatch({ barGap: v })}
                        />
                        <OptionalSliderField
                            label={Generic.t('echarts_series_bar_category_gap')}
                            value={meta.barCategoryGap}
                            fallback={0.2} // echarts default ≈ 20% (dynamic: max(35−4·stacks,15)%)
                            min={0}
                            max={1}
                            step={0.05}
                            onChange={v => onPatch({ barCategoryGap: v })}
                        />
                        <SliderField
                            label={Generic.t('echarts_series_corner_radius')}
                            value={meta.cornerRadius ?? 0}
                            min={0}
                            max={30}
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
                    </FieldGrid>
                </SubGroup>
            )}
        </>
    );
};

interface CartesianSeriesListProps {
    state: EditorState;
    pickerCtx: OidPickerCtx;
    /** Palette-slot colour of series i (the inherit fallback). */
    slot: (i: number) => string;
    /** Verlauf: selectable history instances (empty = none installed / not Verlauf). */
    historyInstances?: string[];
    expanded: Record<number, boolean>;
    onToggleCard: (i: number) => void;
    onUpdate: (i: number, patch: Partial<EditorSeries>) => void;
    onRemove: (i: number) => void;
    onMove: (i: number, dir: -1 | 1) => void;
    onDuplicate: (i: number) => void;
    onAddWithOid: (oid: string) => void;
    /** Rebind a series to a different axis (orphan-cleans the old axis, ADR-0025). */
    onRebindAxis: (i: number, yAxisIndex: number) => void;
}

/** The history/live cartesian card list: EditorCards + the OID-first add affordances. */
export const CartesianSeriesList: FC<CartesianSeriesListProps> = ({
    state,
    pickerCtx,
    slot,
    historyInstances,
    expanded,
    onToggleCard,
    onUpdate,
    onRemove,
    onMove,
    onDuplicate,
    onAddWithOid,
    onRebindAxis,
}) => {
    const series = state.series;
    const defaultType = state.chartType as EchartsCartesianType;
    // Effective axis names for the per-series binding dropdown (ADR-0025): explicit name → inherited
    // from the first bound series → 1-based index. Matches the chart + the Axis-card title.
    const axisDisplayNames = state.yAxes.map((a, ai) => effectiveAxisName(a, ai, series));
    return (
        <Box>
            {series.length === 0 && (
                <EmptyState text={Generic.t('echarts_series_empty')}>
                    <AddSeriesViaOid
                        pickerCtx={pickerCtx}
                        historyOnly={state.mode === 'history'}
                        onPick={onAddWithOid}
                        variant="cta"
                        label={Generic.t('echarts_series_add_first')}
                    />
                </EmptyState>
            )}
            {series.map((s, i) => (
                <EditorCard
                    key={s.id ?? i}
                    open={!!expanded[i]}
                    onToggle={() => onToggleCard(i)}
                    swatch={<Swatch color={s.color ?? slot(i)} />}
                    title={s.name || `Series ${i + 1}`}
                    subtitle={
                        <Box
                            component="span"
                            sx={{ color: s.oid ? 'text.secondary' : 'warning.main' }}
                        >
                            {s.oid || Generic.t('echarts_val_oid_missing')}
                        </Box>
                    }
                    actions={
                        <>
                            <IconButton
                                size="small"
                                disabled={i === 0}
                                onClick={() => onMove(i, -1)}
                                aria-label={Generic.t('echarts_editor_series_move_up')}
                                sx={{ p: 0.25 }}
                            >
                                <UpIcon fontSize="small" />
                            </IconButton>
                            <IconButton
                                size="small"
                                disabled={i === series.length - 1}
                                onClick={() => onMove(i, 1)}
                                aria-label={Generic.t('echarts_editor_series_move_down')}
                                sx={{ p: 0.25 }}
                            >
                                <DownIcon fontSize="small" />
                            </IconButton>
                            <IconButton
                                size="small"
                                onClick={() => onDuplicate(i)}
                                aria-label={Generic.t('echarts_editor_series_duplicate')}
                                sx={{ p: 0.25 }}
                            >
                                <DuplicateIcon sx={{ fontSize: 16 }} />
                            </IconButton>
                            <IconButton
                                size="small"
                                onClick={() => onRemove(i)}
                                aria-label={Generic.t('echarts_editor_series_remove')}
                                sx={{ p: 0.25 }}
                            >
                                <DeleteIcon fontSize="small" />
                            </IconButton>
                        </>
                    }
                >
                    <CartesianBasisFields
                        meta={s}
                        defaultType={defaultType}
                        onPatch={p =>
                            // A yAxisIndex change rebinds (orphan-cleans the old axis, ADR-0025);
                            // every other field updates in place.
                            p.yAxisIndex !== undefined ? onRebindAxis(i, p.yAxisIndex) : onUpdate(i, p)
                        }
                        pickerCtx={pickerCtx}
                        colorFallback={slot(i)}
                        showType={series.length >= 2}
                        yAxes={state.yAxes}
                        axisDisplayNames={axisDisplayNames}
                        showInstance={state.mode === 'history'}
                        historyInstances={historyInstances}
                        oid={{
                            value: s.oid,
                            onChange: oid => onUpdate(i, { oid }),
                            historyOnly: state.mode === 'history',
                        }}
                    />
                    <CartesianSeriesKnobs
                        meta={s}
                        defaultType={defaultType}
                        onPatch={p => onUpdate(i, p)}
                        pickerCtx={pickerCtx}
                        colorFallback={slot(i)}
                    />
                    <SeriesRawOverride
                        slot={`cartesian-${s.type ?? defaultType}` as SeriesTemplateSlot}
                        raw={s.raw}
                        onChange={v => onUpdate(i, { raw: v || undefined })}
                        snippets={s.snippets}
                        onToggle={r => onUpdate(i, snippetPatch(r))}
                        analysis={{
                            slot: `cartesian-${s.type ?? defaultType}` as SeriesTemplateSlot,
                            meta: s,
                            // Threshold markLines attach to the first series ON their axis
                            // (builder grouping, markLineOption) — hostsMarkLines mirrors it.
                            markLineHost: hostsMarkLines(
                                state.markLines,
                                series.map(x => x.yAxisIndex ?? 0),
                                i,
                                state.yAxes.length,
                            ),
                        }}
                    />
                </EditorCard>
            ))}
            {series.length > 0 && (
                <AddSeriesViaOid
                    pickerCtx={pickerCtx}
                    historyOnly={state.mode === 'history'}
                    onPick={onAddWithOid}
                    variant="button"
                    label={Generic.t('echarts_editor_series_add')}
                />
            )}
        </Box>
    );
};
