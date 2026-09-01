/**
 * Cartesian series cards (history) + the shared cartesian card internals (ADR-0019, WS5).
 *
 * @module EchartsCollectionWidget/editor/sections/series/CartesianSeriesCard
 * @remarks
 *  - {@link CartesianBasisFields} — the Basis tab content (OID / history instance (Verlauf,
 *    ADR-0039) / name / colour / type / y-axis
 *    binding) shared by the Verlauf card and the JSON-mode card (ADR-0011 parity). The JSON
 *    card omits the OID row (the payload owns the data) and clears names to `undefined`.
 *  - {@link CartesianSeriesKnobs} — the type-sensitive knob cluster (line / bar / area SubGroups),
 *    purely meta-driven; the caller owns the binding. Bounded numerics are SliderFields, booleans
 *    live in SwitchLists (ADR-0019). „Nur in Legende" rides here too (presentation, ADR-0072).
 *  - {@link SeriesDataFields} — the Daten tab content (ADR-0072): the per-series acquisition
 *    knobs as Erben-Overrides over the Data source Voreinstellung (aggregate + params, diff
 *    tristate, X offset seconds/calendar) plus the value transforms — Verlauf cards only.
 *  - {@link SeriesValueFormatFields} / {@link SeriesTransformFields} — the Werte tab content
 *    (shared) and the JSON card's slim transform rest (its Transformation tab).
 *  - {@link CartesianSeriesList} — the Verlauf card list: EditorCards with swatch, name/OID,
 *    ↑↓ reorder, duplicate, delete + the OID-first add affordances.
 */
import type { FC } from 'react';
import { Box, Button, IconButton } from '@mui/material';
import {
    ContentCopy as DuplicateIcon,
    DeleteOutline as DeleteIcon,
    KeyboardArrowDown as DownIcon,
    KeyboardArrowUp as UpIcon,
} from '@mui/icons-material';

import Generic from '../../../../Generic';
import type {
    EchartsAggregate,
    EchartsAreaFill,
    EchartsAxisConfig,
    EchartsBarLabelPos,
    EchartsCartesianType,
    EchartsOffsetKey,
    EchartsSeriesMeta,
} from '../../../../types/field-definitions/echarts-fields';
import {
    AGGREGATE_VALUES,
    effectiveAggregate,
    inheritedIntegralInterpolation,
    inheritedIntegralUnit,
    inheritedPercentileLevel,
} from '../../../seriesDataOverrides';
import {
    EditorCard,
    FieldGrid,
    FieldLabel,
    InfoBox,
    LabeledSelect,
    OptionalNumberField,
    OptionalSliderField,
    SectionTabs,
    SliderField,
    SubGroup,
    SwitchList,
    SwitchRow,
    TextField2,
} from '../../../../components/controls';
import { formulaIsInvalid } from '../../../seriesTransform';
import ColorField from '../../colorFields';
import OidPicker from '../../OidPicker';
import type { OidPickerCtx } from '../../OidPicker';
import type { SeriesTemplateSlot } from '../../seriesTemplates';
import type { EditorSeries, EditorState } from '../../editorState';
import { axisOptionLabel, displayAxisIndex } from '../../axisLayout';
import { AddSeriesViaOid, EmptyState, SeriesRawOverride, Swatch } from './shared';
import { snippetPatch } from '../../snippetComposition';

/**
 * The cartesian card list's field ownership (ADR-0049 slice) — read-only: every write goes
 * through the dispatcher callbacks (update / remove / move / duplicate / rebind). The four
 * data-setting keys (ADR-0072) feed the Daten cluster's Erben-Override UI: the chart-level
 * aggregate + params are every series' inherit target.
 */
export type CartesianSeriesListSlice = Pick<
    EditorState,
    | 'chartType'
    | 'mode'
    | 'series'
    | 'yAxes'
    | 'aggregate'
    | 'percentileValue'
    | 'integralUnit'
    | 'integralInterpolation'
>;

/** The X-offset calendar keys (ADR-0072) — the adapter's offset union minus its numeric members. */
const OFFSET_MODE_KEYS: readonly EchartsOffsetKey[] = [
    '1m',
    '2m',
    '3m',
    '6m',
    '1y',
    '2y',
    '-1m',
    '-2m',
    '-3m',
    '-6m',
    '-1y',
    '-2y',
];

/**
 * The X-offset select's mode: a stored calendar key selects itself, everything else (numeric
 * seconds AND unset) is the seconds form — old numeric values keep rendering as numbers
 * (back-compat, ADR-0072 widened the field without migration).
 */
export const xOffsetMode = (xOffset: EchartsSeriesMeta['xOffset']): 'sec' | EchartsOffsetKey =>
    typeof xOffset === 'string' ? xOffset : 'sec';

/**
 * The Basis tab content of a cartesian series card — identity + binding. Shared by the
 * Verlauf card (bound to `state.series[i]`, with OID row) and the JSON-mode card (bound to
 * the name-keyed overlay entry, no OID row — the payload owns the data).
 */
export const CartesianBasisFields: FC<{
    meta: EchartsSeriesMeta;
    defaultType: EchartsCartesianType;
    onPatch: (patch: Partial<EchartsSeriesMeta>) => void;
    pickerCtx: OidPickerCtx;
    /** Palette slot the colour picker falls back to (the inherit preview). */
    colorFallback: string;
    /** Show the per-series type override (history: only when ≥2 series; JSON: always). */
    showType: boolean;
    yAxes: EchartsAxisConfig[];
    /**
     * Effective display name per axis (explicit → inherited-from-bound-series → index, ADR-0025)
     * for the binding-dropdown labels. Resolved by the owning card list (history and JSON
     * alike).
     */
    axisDisplayNames?: string[];
    /** OID binding row (history only — the JSON payload owns the data). */
    oid?: { value: string; onChange: (oid: string) => void; historyOnly: boolean };
    /** Verlauf: show the per-series history-instance select (first field under the OID, ADR-0039). */
    showInstance?: boolean;
    /** Verlauf: selectable history instances (empty list = none installed → Auto only). */
    historyInstances?: string[];
    /** JSON overlay semantics: clearing the name writes `undefined` (fall back to the payload name). */
    nameClearsToUndefined?: boolean;
    /**
     * Show the per-series Y-axis binding select. Shown in every cartesian data mode — incl. JSON,
     * where a manual rebind is sticky and the freed axis dies (ADR-0026/0069). The gate
     * exists for non-cartesian future uses of the shared basis group.
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
    <Box>
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
                        ['scatter', Generic.t('echarts_type_scatter')],
                    ]}
                />
            )}
            {showAxis && (
                // Q6: the DISPLAY clamp mirrors the builder (`yi >= total ? 0 : yi`) — the select
                // shows the render truth (axis 1), the STORED value stays untouched (no silent
                // rewrite; the stale-index validation explains the divergence). The LAST entry is
                // „Neue Achse" (ADR-0069): its value is the append slot — choosing it grows the
                // axis array and binds this series in the rebind handler's single step, the
                // replacement of the retired „Achse hinzufügen" button.
                <LabeledSelect
                    label={Generic.t('echarts_editor_series_yaxis')}
                    value={String(displayAxisIndex(meta.yAxisIndex, yAxes.length))}
                    onChange={v => onPatch({ yAxisIndex: Number(v) })}
                    options={[
                        ...yAxes.map((ax, ai) => {
                            // Effective name (explicit → inherited → index, ADR-0025) when the
                            // caller resolves it; else the legacy "N · name" / "N" fallback.
                            const label =
                                axisDisplayNames?.[ai] ?? (ax.name ? `${ai + 1} · ${ax.name}` : String(ai + 1));
                            return [String(ai), label] as [string, string];
                        }),
                        [String(yAxes.length), Generic.t('echarts_axis_new')] as [string, string],
                    ]}
                />
            )}
        </FieldGrid>
    </Box>
);

/**
 * The Werte tab content of a cartesian series card (ADR-0057/0058, parity Build B) — the
 * per-series Wert-Formatter facts: unit + decimals, plus the adapter's text semantics — „Text bei
 * wahr/falsch" on a BOOLEAN OID, the state-names editor (value → text, prefilled from
 * `common.states`) on an ENUM OID; both gated by the OID type detected on selection. Shared by
 * the Verlauf card and the JSON-mode card (the facts ride the same meta and flow through
 * every cartesian surface: tooltip row, legend value, label values, and the shared-facts axis
 * inheritance).
 */
export const SeriesValueFormatFields: FC<{
    meta: EchartsSeriesMeta;
    onPatch: (patch: Partial<EchartsSeriesMeta>) => void;
}> = ({ meta, onPatch }) => {
    /** Rewrite the states map with one entry's key or value edited (the Zustandsnamen rows). */
    const patchState = (key: string, next: { key?: string; text?: string }): void => {
        const entries = Object.entries(meta.states ?? {});
        const out: Record<string, string> = {};
        for (const [k, v] of entries) {
            if (k === key) {
                const nk = (next.key ?? k).trim();
                if (nk) {
                    out[nk] = next.text ?? v;
                } // a cleared key DROPS the mapping (delete affordance for typos)
            } else {
                out[k] = v;
            }
        }
        onPatch({ states: Object.keys(out).length ? out : undefined });
    };
    const stateRows = Object.entries(meta.states ?? {}).sort(([a], [b]) => Number(a) - Number(b));
    return (
        <Box>
            <FieldGrid min={140}>
                <TextField2
                    label={Generic.t('echarts_series_unit')}
                    value={meta.unit ?? ''}
                    onChange={v => onPatch({ unit: v.trim() || undefined })}
                />
                <OptionalNumberField
                    label={Generic.t('echarts_series_decimals')}
                    value={meta.decimals}
                    onChange={v => onPatch({ decimals: v === undefined || v >= 0 ? v : 0 })}
                />
            </FieldGrid>
            {meta.oidType === 'boolean' && (
                <FieldGrid
                    min={140}
                    sx={{ mt: 1.5 }}
                >
                    <TextField2
                        label={Generic.t('echarts_series_text_true')}
                        value={meta.trueText ?? ''}
                        onChange={v => onPatch({ trueText: v.trim() || undefined })}
                    />
                    <TextField2
                        label={Generic.t('echarts_series_text_false')}
                        value={meta.falseText ?? ''}
                        onChange={v => onPatch({ falseText: v.trim() || undefined })}
                    />
                </FieldGrid>
            )}
            {meta.oidType === 'enum' && (
                <Box sx={{ mt: 1.5 }}>
                    <FieldLabel>{Generic.t('echarts_series_states_title')}</FieldLabel>
                    {stateRows.map(([key, text], row) => (
                        // Positional key: the mapping key CHANGES while the user types in the
                        // value field — keying by it would remount (and defocus) the row on every
                        // keystroke. Only a sort-shifting rename still moves the row.
                        <Box
                            key={row}
                            sx={{ display: 'flex', gap: 1, alignItems: 'flex-end', mb: 1 }}
                        >
                            <Box sx={{ flex: 1, minWidth: 0 }}>
                                <TextField2
                                    label={Generic.t('echarts_series_states_value')}
                                    value={key}
                                    onChange={v => patchState(key, { key: v })}
                                />
                            </Box>
                            <Box sx={{ flex: 1.6, minWidth: 0 }}>
                                <TextField2
                                    label={Generic.t('echarts_series_states_text')}
                                    value={text}
                                    onChange={v => patchState(key, { text: v })}
                                />
                            </Box>
                            <IconButton
                                size="small"
                                aria-label={Generic.t('echarts_editor_series_remove')}
                                onClick={() => patchState(key, { key: '' })}
                                sx={{ mb: 0.5 }}
                            >
                                <DeleteIcon fontSize="small" />
                            </IconButton>
                        </Box>
                    ))}
                    <Button
                        size="small"
                        onClick={() => {
                            // The next free integer key — a fresh row is a real mapping from the
                            // start (an empty key would activate the texts with a dead entry).
                            const max = Math.max(
                                -1,
                                ...Object.keys(meta.states ?? {})
                                    .map(Number)
                                    .filter(Number.isFinite),
                            );
                            onPatch({ states: { ...(meta.states ?? {}), [String(max + 1)]: '' } });
                        }}
                    >
                        {Generic.t('echarts_series_states_add')}
                    </Button>
                </Box>
            )}
        </Box>
    );
};

/**
 * The Daten tab content of a Verlauf series card (ADR-0072) — the per-series acquisition knobs
 * as Erben-Overrides over the Data source section's Voreinstellung: the aggregate with its
 * sparsely gated params (percentile level / integral unit + interpolation), the bar-mode diff
 * tristate, the X offset (numeric seconds or the ±1m…±2y calendar keys) and the value
 * transforms pulled in from the former Transformation group (formula, Y offset, NULL handling,
 * „Keine Zukunft") — one acquisition cluster, no second UI. Verlauf cards only: JSON cards keep
 * the slim {@link SeriesTransformFields} (the payload owns acquisition there — no fetch, no
 * request shape to override).
 */
export const SeriesDataFields: FC<{
    meta: EchartsSeriesMeta;
    onPatch: (patch: Partial<EchartsSeriesMeta>) => void;
    /** The Data source Voreinstellung (ADR-0072): the aggregate every series inherits first. */
    chartAggregate: EchartsAggregate;
    /** Chart-level percentile level — the inherit fallback while the chart aggregate matches. */
    chartPercentile?: number;
    /** Chart-level integral unit (s) — the inherit fallback while the chart aggregate matches. */
    chartIntegralUnit?: number;
    /** Chart-level integral interpolation — the inherit fallback under a matching chart aggregate. */
    chartIntegralInterpolation?: 'none' | 'linear';
    /** The diff tristate shows only on an effective BAR chart (category-bar-only, ADR-0072). */
    isBarChart: boolean;
}> = ({
    meta,
    onPatch,
    chartAggregate,
    chartPercentile,
    chartIntegralUnit,
    chartIntegralInterpolation,
    isBarChart,
}) => {
    const invalid = formulaIsInvalid(meta.formula);
    // The Erben-Override resolvers are SHARED with the pipeline (seriesDataOverrides.ts) — the
    // card gates its fields and fallbacks under exactly the aggregate the fetch and the bar
    // reduction use.
    const agg = effectiveAggregate(meta, chartAggregate);
    // Param inherits resolve through the same module — a chart param rides only while the
    // chart aggregate survives (the fetch seam's rule, mirrored for display).
    const percentileFallback = inheritedPercentileLevel(chartAggregate, chartPercentile);
    const integralUnitPlaceholder = inheritedIntegralUnit(chartAggregate, chartIntegralUnit);
    // The interpolation's inherit entry names its target like the aggregate select does.
    const interpInherit = inheritedIntegralInterpolation(chartAggregate, chartIntegralInterpolation);
    const offMode = xOffsetMode(meta.xOffset);
    return (
        <Box>
            <FieldGrid min={140}>
                <LabeledSelect
                    label={Generic.t('echarts_aggregate')}
                    value={meta.aggregate ?? ''}
                    onChange={v => onPatch({ aggregate: (v || undefined) as EchartsSeriesMeta['aggregate'] })}
                    options={[
                        // The inherit entry names its target dynamically — the effective chart
                        // value travels with every Voreinstellung change (spec decision 6).
                        ['', Generic.t('echarts_series_agg_inherit', chartAggregate)],
                        ...AGGREGATE_VALUES.map(a => [a, a] as [string, string]),
                    ]}
                />
                {agg === 'percentile' && (
                    <OptionalSliderField
                        label={Generic.t('echarts_percentile')}
                        value={meta.percentileValue}
                        min={0}
                        max={100}
                        fallback={percentileFallback}
                        onChange={v => onPatch({ percentileValue: v })}
                    />
                )}
                {agg === 'integral' && (
                    <OptionalNumberField
                        label={Generic.t('echarts_integral_unit')}
                        value={meta.integralUnit}
                        // The inherit fallback shows IN the field (placeholder), matching the
                        // percentile slider's in-control fallback (spec decision 6).
                        placeholder={
                            integralUnitPlaceholder !== undefined ? String(integralUnitPlaceholder) : undefined
                        }
                        onChange={v => onPatch({ integralUnit: v })}
                    />
                )}
                {agg === 'integral' && (
                    <LabeledSelect
                        label={Generic.t('echarts_integral_interpolation')}
                        value={meta.integralInterpolation ?? ''}
                        onChange={v =>
                            onPatch({
                                integralInterpolation: (v || undefined) as EchartsSeriesMeta['integralInterpolation'],
                            })
                        }
                        options={[
                            ['', Generic.t('echarts_series_agg_inherit', interpInherit)],
                            ['none', Generic.t('echarts_interp_none')],
                            ['linear', Generic.t('echarts_interp_linear')],
                        ]}
                    />
                )}
                {isBarChart && (
                    <LabeledSelect
                        label={Generic.t('echarts_series_diff')}
                        value={meta.diffMode ?? ''}
                        onChange={v => onPatch({ diffMode: (v || undefined) as EchartsSeriesMeta['diffMode'] })}
                        options={[
                            ['', Generic.t('echarts_series_inherit')],
                            ['diff', Generic.t('echarts_series_diff_diff')],
                            ['raw', Generic.t('echarts_series_diff_raw')],
                        ]}
                    />
                )}
                <LabeledSelect
                    label={Generic.t('echarts_series_xoffset_mode')}
                    value={offMode}
                    // 'sec' keeps a previously authored numeric value standing (switching to a
                    // calendar key and back must not eat the seconds); both signs are valid
                    // (positive = into the past, the adapter's addTime direction).
                    onChange={v =>
                        onPatch({
                            xOffset:
                                v === 'sec'
                                    ? typeof meta.xOffset === 'number'
                                        ? meta.xOffset
                                        : undefined
                                    : (v as EchartsOffsetKey),
                        })
                    }
                    options={[
                        ['sec', Generic.t('echarts_series_xoffset_seconds')],
                        ...OFFSET_MODE_KEYS.map(k => [k, Generic.t(`echarts_series_xoff_${k}`)] as [string, string]),
                    ]}
                />
                {offMode === 'sec' && (
                    <OptionalNumberField
                        label={Generic.t('echarts_series_xoffset_seconds')}
                        value={typeof meta.xOffset === 'number' ? meta.xOffset : undefined}
                        onChange={v => onPatch({ xOffset: v ?? undefined })}
                    />
                )}
                <TextField2
                    label={Generic.t('echarts_series_formula')}
                    value={meta.formula ?? ''}
                    onChange={v => onPatch({ formula: v.trim() || undefined })}
                    placeholder="val / 1000 + 3"
                    error={invalid}
                    helperText={invalid ? Generic.t('echarts_series_formula_invalid') : undefined}
                />
                <OptionalNumberField
                    label={Generic.t('echarts_series_yoffset')}
                    value={meta.yOffset}
                    step={0.1}
                    onChange={v => onPatch({ yOffset: v ?? undefined })}
                />
                <LabeledSelect
                    label={Generic.t('echarts_series_null_mode')}
                    value={meta.nullMode ?? ''}
                    onChange={v => onPatch({ nullMode: (v || undefined) as EchartsSeriesMeta['nullMode'] })}
                    options={[
                        ['', Generic.t('echarts_series_null_inherit')],
                        ['keep', Generic.t('echarts_ignore_null_keep')],
                        ['forward', Generic.t('echarts_ignore_null_forward')],
                        ['zero', Generic.t('echarts_ignore_null_zero')],
                    ]}
                />
            </FieldGrid>
            <SwitchList sx={{ mt: 1.5 }}>
                <SwitchRow
                    label={Generic.t('echarts_series_no_future')}
                    checked={meta.noFuture ?? false}
                    onChange={v => onPatch({ noFuture: v })}
                />
            </SwitchList>
            <InfoBox text={Generic.t('echarts_series_data_preset_hint')} />
            {isBarChart && <InfoBox text={Generic.t('echarts_series_xoffset_bar_limit')} />}
            <InfoBox text={Generic.t('echarts_series_formula_help')} />
        </Box>
    );
};

/**
 * The Transformation tab content of a JSON-mode series card — the slim value-transform rest of
 * the former Verlauf group (ADR-0072 pulled the acquisition knobs into {@link SeriesDataFields},
 * Verlauf-only): the conversion FORMULA over `val` (expr-eval; an invalid formula is visibly
 * flagged and the chart keeps the raw values), the Y offset (feeds the formula:
 * `f(val + yOffset)`), the per-series NULL handling and „Keine Zukunft" — the pipeline applies
 * these in every mode. No X offset (no fetch to shift) and no „Nur in Legende" (that lives with
 * the presentation knobs, {@link CartesianSeriesKnobs}).
 */
export const SeriesTransformFields: FC<{
    meta: EchartsSeriesMeta;
    onPatch: (patch: Partial<EchartsSeriesMeta>) => void;
}> = ({ meta, onPatch }) => {
    const invalid = formulaIsInvalid(meta.formula);
    return (
        <Box>
            <SwitchList sx={{ mb: 1.5 }}>
                <SwitchRow
                    label={Generic.t('echarts_series_no_future')}
                    checked={meta.noFuture ?? false}
                    onChange={v => onPatch({ noFuture: v })}
                />
            </SwitchList>
            <FieldGrid min={140}>
                <TextField2
                    label={Generic.t('echarts_series_formula')}
                    value={meta.formula ?? ''}
                    onChange={v => onPatch({ formula: v.trim() || undefined })}
                    placeholder="val / 1000 + 3"
                    error={invalid}
                    helperText={invalid ? Generic.t('echarts_series_formula_invalid') : undefined}
                />
                <OptionalNumberField
                    label={Generic.t('echarts_series_yoffset')}
                    value={meta.yOffset}
                    step={0.1}
                    onChange={v => onPatch({ yOffset: v ?? undefined })}
                />
                <LabeledSelect
                    label={Generic.t('echarts_series_null_mode')}
                    value={meta.nullMode ?? ''}
                    onChange={v => onPatch({ nullMode: (v || undefined) as EchartsSeriesMeta['nullMode'] })}
                    options={[
                        ['', Generic.t('echarts_series_null_inherit')],
                        ['keep', Generic.t('echarts_ignore_null_keep')],
                        ['forward', Generic.t('echarts_ignore_null_forward')],
                        ['zero', Generic.t('echarts_ignore_null_zero')],
                    ]}
                />
            </FieldGrid>
            <InfoBox text={Generic.t('echarts_series_formula_help')} />
        </Box>
    );
};

/**
 * The type-sensitive cartesian knob cluster (line / area / bar SubGroups) — shared by the
 * cartesian series card (history, bound to `state.series[i]`) and the JSON-mode series card
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
    /** Theme text-primary — the BAR label colour's inherit preview (ADR-0027 one-hook rule). */
    labelColorFallback: string;
}> = ({ meta, defaultType, onPatch, pickerCtx, colorFallback, labelColorFallback }) => {
    // The builder's own type resolution (ADR-0008 r3 + ADR-0060): an explicit bar/scatter/line
    // override wins, else the chart's default — so a scatter override hides the line/area/bar
    // groups exactly like the builder emits nothing for them.
    const renderedType: EchartsCartesianType =
        meta.type === 'bar' || meta.type === 'scatter' ? meta.type : meta.type === 'line' ? 'line' : defaultType;
    return (
        <>
            {renderedType === 'line' && (
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
                            {/* Line shadow (ADR-0060): blur in the series colour; unset = off. */}
                            <OptionalSliderField
                                label={Generic.t('echarts_series_shadow')}
                                value={meta.shadowBlur}
                                fallback={0}
                                min={0}
                                max={30}
                                onChange={v => onPatch({ shadowBlur: v === undefined || v >= 0 ? v : 0 })}
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
                        {/* Label cluster (parity Build D): the position select carries the adapter's
                            five options — picking "ohne" turns the switch off, picking a position
                            turns it on; the two controls can never disagree. */}
                        <LabeledSelect
                            label={Generic.t('echarts_bar_label_pos')}
                            value={meta.label ? (meta.labelPosition ?? 'top') : ''}
                            onChange={v =>
                                onPatch(
                                    v === ''
                                        ? { label: false }
                                        : {
                                              label: true,
                                              labelPosition: v === 'top' ? undefined : (v as EchartsBarLabelPos),
                                          },
                                )
                            }
                            options={[
                                ['', Generic.t('echarts_bar_label_pos_none')],
                                ['top', Generic.t('echarts_bar_label_top')],
                                ['insideTop', Generic.t('echarts_bar_label_inside_top')],
                                ['insideBottom', Generic.t('echarts_bar_label_inside_bottom')],
                                ['inside', Generic.t('echarts_bar_label_inside_middle')],
                            ]}
                        />
                        <OptionalSliderField
                            label={Generic.t('echarts_bar_label_size')}
                            value={meta.labelFontSize}
                            fallback={12} // echarts' global text default
                            min={6}
                            max={24}
                            onChange={v => onPatch({ labelFontSize: v })}
                        />
                        <Box>
                            <FieldLabel>{Generic.t('echarts_bar_label_color')}</FieldLabel>
                            <ColorField
                                value={meta.labelColor}
                                fallback={labelColorFallback}
                                onChange={v => onPatch({ labelColor: v ?? undefined })}
                                ctx={pickerCtx}
                            />
                        </Box>
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
                        {/* Absolute bar width (parity Build D): px or %, text-typed so both units
                            round-trip one field; empty/invalid = echarts auto (sparse emission). */}
                        <TextField2
                            label={Generic.t('echarts_series_bar_width')}
                            value={meta.barWidth ?? ''}
                            onChange={v => onPatch({ barWidth: v || undefined })}
                            placeholder={Generic.t('echarts_series_bar_width_ph')}
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
            {/* „Nur in Legende" is PRESENTATION, not acquisition (ADR-0072): it stays with the
                type knobs — type-independent, so it renders for line/bar AND scatter, on the
                Verlauf card and the JSON card alike. */}
            <SwitchList sx={{ mt: 1.5 }}>
                <SwitchRow
                    label={Generic.t('echarts_series_legend_only')}
                    checked={meta.legendOnly ?? false}
                    onChange={v => onPatch({ legendOnly: v })}
                />
            </SwitchList>
        </>
    );
};

interface CartesianSeriesListProps {
    state: CartesianSeriesListSlice;
    pickerCtx: OidPickerCtx;
    /** Palette-slot colour of series i (the inherit fallback). */
    slot: (i: number) => string;
    /** Theme text-primary — the bar label colour's inherit preview. */
    labelColorFallback: string;
    /** Verlauf: selectable history instances (empty = none installed / not Verlauf). */
    historyInstances?: string[];
    expanded: Record<number, boolean>;
    onToggleCard: (i: number) => void;
    onUpdate: (i: number, patch: Partial<EditorSeries>) => void;
    onRemove: (i: number) => void;
    onMove: (i: number, dir: -1 | 1) => void;
    onDuplicate: (i: number) => void;
    onAddWithOid: (oid: string) => void;
    /** Rebind a series to a different axis (a value ≥ yAxes.length appends „Neue Achse"; the vacated axis dies, ADR-0069). */
    onRebindAxis: (i: number, yAxisIndex: number) => void;
}

/** The history cartesian card list: EditorCards + the OID-first add affordances. */
export const CartesianSeriesList: FC<CartesianSeriesListProps> = ({
    state,
    pickerCtx,
    slot,
    labelColorFallback,
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
    // Effective axis names for the per-series binding dropdown (ADR-0025): explicit name →
    // inherited from the owner series → 1-based index. The label carries the 1-BASED AXIS
    // NUMBER (B1): unnamed series can share effective labels across axes, and a rebind death
    // re-numbers every follower (ADR-0069) — the number keeps the item identifiable.
    const axisDisplayNames = state.yAxes.map((a, ai) => axisOptionLabel(ai, a, series));
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
                    {/* Karten-Tabs (ADR-0073): Basis | Daten | Darstellung | Werte | Erweitert —
                        the card's fourth navigation level. The card header (swatch, name, OID,
                        reorder, duplicate, delete) stays OUTSIDE; stable ids and reconciliation
                        are untouched (tabs are view-only, the card identity stays id-based).
                        Switching tabs unmounts the inactive content — every field writes into
                        the WORKING COPY on change, so nothing but DOM focus resets. */}
                    <SectionTabs
                        tabs={[
                            { key: 'basis', label: Generic.t('echarts_grp_basis') },
                            { key: 'daten', label: Generic.t('echarts_grp_data') },
                            { key: 'presentation', label: Generic.t('echarts_grp_presentation') },
                            { key: 'values', label: Generic.t('echarts_tab_values') },
                            { key: 'advanced', label: Generic.t('echarts_tab_advanced') },
                        ]}
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
                        {/* The Daten cluster (ADR-0072) — acquisition Erben-Overrides over the
                            Data source Voreinstellung + the pulled-in transforms. This list is
                            Verlauf by construction (JSON cartesians render JsonSeriesCards). */}
                        <SeriesDataFields
                            meta={s}
                            onPatch={p => onUpdate(i, p)}
                            chartAggregate={state.aggregate}
                            chartPercentile={state.percentileValue}
                            chartIntegralUnit={state.integralUnit}
                            chartIntegralInterpolation={state.integralInterpolation}
                            isBarChart={state.chartType === 'bar'}
                        />
                        <CartesianSeriesKnobs
                            meta={s}
                            defaultType={defaultType}
                            onPatch={p => onUpdate(i, p)}
                            pickerCtx={pickerCtx}
                            colorFallback={slot(i)}
                            labelColorFallback={labelColorFallback}
                        />
                        <SeriesValueFormatFields
                            meta={s}
                            onPatch={p => onUpdate(i, p)}
                        />
                        <SeriesRawOverride
                            slot={`cartesian-${s.type ?? defaultType}` as SeriesTemplateSlot}
                            raw={s.raw}
                            onChange={v => onUpdate(i, { raw: v || undefined })}
                            snippets={s.snippets}
                            onCommit={r => onUpdate(i, snippetPatch(r))}
                        />
                    </SectionTabs>
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
