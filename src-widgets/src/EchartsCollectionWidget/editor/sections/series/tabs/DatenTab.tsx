/**
 * The Daten tab of the series card (ADR-0072/0100) — two bodies, chosen by the Kartenquelle:
 * {@link SeriesDataFields} for the FETCHING source (Verlauf: acquisition Erben-Overrides over the
 * Data source Voreinstellung + the transforms) and {@link SeriesTransformFields} for the
 * transform-only sources (JSON, Tabelle: the payload needs no fetch, the pipeline still applies
 * the transforms). The Wert-Zuordnung rows ride both.
 *
 * @module EchartsCollectionWidget/editor/sections/series/tabs/DatenTab
 */
import type { FC } from 'react';
import { Box, Button, IconButton, TextField } from '@mui/material';
import { DeleteOutlineOutlined as DeleteIcon } from '@mui/icons-material';
import Generic from '../../../../../Generic';
import type {
    EchartsAggregate,
    EchartsOffsetKey,
    EchartsSeriesMeta,
} from '../../../../../types/field-definitions/echarts-fields';
import {
    effectiveAggregate,
    effectiveNullMode,
    inheritedIntegralInterpolation,
    inheritedIntegralUnit,
    inheritedPercentileLevel,
    AGGREGATE_VALUES,
} from '../../../../seriesDataOverrides';
import {
    FieldGrid,
    FieldLabel,
    InfoBox,
    LabeledSelect,
    noSpinnerSx,
    OptionalNumberField,
    OptionalSliderField,
    SwitchList,
    SwitchRow,
    TextField2,
} from '../../../../../components/controls';
import { formulaIsInvalid } from '../../../../seriesTransform';

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
 * The NULL-Behandlung select's option list — the inherit entry NAMES its effective chart
 * target (the ADR-0072 aggregate pattern): the value is effective in every mode since the
 * toter-Regler fix, so naming it stays honest even where the chart-level field has no UI
 * (the JSON families inherit the persisted Verlauf-authored setting). The named target
 * resolves through the pipeline's own rule ({@link effectiveNullMode}): a persisted
 * non-canonical chart value is named 'keep', exactly what the fill does with it.
 */
const nullModeOptions = (chartNullMode?: 'keep' | 'forward' | 'zero'): [string, string][] => [
    [
        '',
        Generic.t(
            'echarts_series_null_inherit',
            Generic.t(`echarts_ignore_null_${effectiveNullMode(undefined, chartNullMode)}`),
        ),
    ],
    ['keep', Generic.t('echarts_ignore_null_keep')],
    ['forward', Generic.t('echarts_ignore_null_forward')],
    ['zero', Generic.t('echarts_ignore_null_zero')],
];

/**
 * The Wert-Zuordnung editor (ticket 02, the ADR-0077 value chain's intake stage) — rows
 * „Von" (raw value) → „Nach" (number, empty = a deliberate gap). The Zustandsnamen editor's
 * controlled pattern: every edit rewrites `meta.valueMap`; a cleared „Von" drops the row; the
 * fresh row is a next-free-integer IDENTITY mapping (`1 → 1`) — an auto-committed integer key
 * with a gap target would swallow that raw value's points on arrival. „Nach" is a NATIVE number
 * input (the OptionalNumberField discipline): only a number or empty can ever reach the map —
 * garbage text cannot silently authorize a never-fillable gap.
 */
export const SeriesValueMapField: FC<{
    meta: EchartsSeriesMeta;
    onPatch: (patch: Partial<EchartsSeriesMeta>) => void;
}> = ({ meta, onPatch }) => {
    /** Rewrite the map with one row's „Von"/„Nach" edited — a cleared „Von" drops the row. */
    const patchRow = (key: string, next: { key?: string; number?: number | null }): void => {
        const out: Record<string, number | null> = {};
        for (const [k, v] of Object.entries(meta.valueMap ?? {})) {
            if (k === key) {
                const nk = (next.key ?? k).trim();
                if (nk) {
                    out[nk] = next.number !== undefined ? next.number : v;
                } // a cleared Von DROPS the mapping (delete affordance for typos)
            } else {
                out[k] = v;
            }
        }
        onPatch({ valueMap: Object.keys(out).length ? out : undefined });
    };
    return (
        <Box sx={{ mt: 1.5 }}>
            <FieldLabel>{Generic.t('echarts_series_value_map')}</FieldLabel>
            {Object.entries(meta.valueMap ?? {}).map(([key, target], row) => (
                // Positional key (the Zustandsnamen discipline): the mapping key CHANGES while
                // the user types in either field — keying by it would remount (and defocus) the
                // row on every keystroke.
                <Box
                    key={row}
                    sx={{ display: 'flex', gap: 1, alignItems: 'flex-end', mb: 1 }}
                >
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                        <TextField2
                            label={Generic.t('echarts_series_value_map_from')}
                            value={key}
                            onChange={v => patchRow(key, { key: v })}
                        />
                    </Box>
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                        <FieldLabel>{Generic.t('echarts_series_value_map_to')}</FieldLabel>
                        <TextField
                            size="small"
                            type="number"
                            value={target === null ? '' : String(target)}
                            slotProps={{ htmlInput: { step: 'any' } }}
                            onChange={e => {
                                // Empty = the deliberate gap (null); the native control only
                                // ever delivers a number or empty here.
                                patchRow(key, { number: e.target.value === '' ? null : Number(e.target.value) });
                            }}
                            fullWidth
                            sx={noSpinnerSx}
                        />
                    </Box>
                    <IconButton
                        size="small"
                        aria-label={Generic.t('echarts_editor_series_remove')}
                        onClick={() => patchRow(key, { key: '' })}
                        sx={{ mb: 0.5 }}
                    >
                        <DeleteIcon fontSize="small" />
                    </IconButton>
                </Box>
            ))}
            <Button
                size="small"
                onClick={() => {
                    // The next free integer key, mapped to ITSELF — the fresh row is real but
                    // changes nothing until the user edits it (a gap-target fresh row would eat
                    // that value's points from the first second).
                    const max = Math.max(
                        -1,
                        ...Object.keys(meta.valueMap ?? {})
                            .map(Number)
                            .filter(Number.isFinite),
                    );
                    onPatch({ valueMap: { ...(meta.valueMap ?? {}), [String(max + 1)]: max + 1 } });
                }}
            >
                {Generic.t('echarts_series_value_map_add')}
            </Button>
            <InfoBox text={Generic.t('echarts_series_value_map_help')} />
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
    /**
     * The chart-level NULL-Behandlung the per-series select inherits (its entry names the
     * target — the ADR-0072 aggregate pattern; the value is effective in EVERY mode since the
     * toter-Regler fix, so naming it stays honest even where the chart field has no UI).
     */
    chartNullMode?: 'keep' | 'forward' | 'zero';
    /** The diff tristate shows only on an effective BAR chart (category-bar-only, ADR-0072). */
    isBarChart: boolean;
}> = ({
    meta,
    onPatch,
    chartAggregate,
    chartPercentile,
    chartIntegralUnit,
    chartIntegralInterpolation,
    chartNullMode,
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
                        // value travels with every Voreinstellung change (spec decision 6); the
                        // value LABELS are translated, the raw keys stay the STORED values.
                        ['', Generic.t('echarts_series_agg_inherit', Generic.t(`echarts_agg_${chartAggregate}`))],
                        ...AGGREGATE_VALUES.map(a => [a, Generic.t(`echarts_agg_${a}`)] as [string, string]),
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
                    options={nullModeOptions(chartNullMode)}
                />
                {/* Smoothing window (ticket 04): the switch AUTHORS (on → 5, the Default-Autorung)
                    — the slider only ever shows an authored value, never a fake resting position
                    (unset = OFF; a fallback thumb would lie about that). Odd-only via step 2. */}
                {meta.smoothWindow !== undefined && (
                    <OptionalSliderField
                        label={Generic.t('echarts_series_smooth_window')}
                        value={meta.smoothWindow}
                        min={3}
                        max={51}
                        step={2}
                        fallback={5}
                        onChange={v => onPatch({ smoothWindow: v })}
                    />
                )}
            </FieldGrid>
            <SeriesValueMapField
                meta={meta}
                onPatch={onPatch}
            />
            <SwitchList sx={{ mt: 1.5 }}>
                <SwitchRow
                    label={Generic.t('echarts_series_no_future')}
                    checked={meta.noFuture ?? false}
                    onChange={v => onPatch({ noFuture: v })}
                />
                <SwitchRow
                    label={Generic.t('echarts_series_smooth_window')}
                    checked={meta.smoothWindow !== undefined}
                    onChange={v => onPatch({ smoothWindow: v ? (meta.smoothWindow ?? 5) : undefined })}
                />
                <SwitchRow
                    label={Generic.t('echarts_series_cumulative')}
                    checked={meta.cumulative ?? false}
                    onChange={v => onPatch({ cumulative: v })}
                />
            </SwitchList>
            <InfoBox text={Generic.t('echarts_series_data_preset_hint')} />
            {isBarChart && <InfoBox text={Generic.t('echarts_series_xoffset_bar_limit')} />}
            <InfoBox text={Generic.t('echarts_series_formula_help')} />
            <InfoBox text={Generic.t('echarts_series_smooth_window_help')} />
            <InfoBox text={Generic.t('echarts_series_cumulative_help')} />
        </Box>
    );
};

/**
 * The Transformation tab content of a JSON-mode series card — the slim value-transform rest of
 * the former Verlauf group (ADR-0072 pulled the acquisition knobs into {@link SeriesDataFields},
 * Verlauf-only): the conversion FORMULA over `val` (expr-eval; an invalid formula is visibly
 * flagged and the chart keeps the raw values), the Y offset (feeds the formula:
 * `f(val + yOffset)`), the per-series NULL handling and „Keine Zukunft" — the pipeline applies
 * these in every mode (NULL handling included since the toter-Regler fix: the JSON parse paths
 * fill their intake nulls per the effective mode, mapped gaps immune). No X offset (no fetch
 * to shift) and no „Nur in Legende" (that lives with the presentation knobs,
 * the Stil tab).
 */
export const SeriesTransformFields: FC<{
    meta: EchartsSeriesMeta;
    onPatch: (patch: Partial<EchartsSeriesMeta>) => void;
    /**
     * The chart-level NULL-Behandlung the per-series select inherits (its entry names the
     * target — see {@link nullModeOptions}); effective in JSON since the toter-Regler fix.
     */
    chartNullMode?: 'keep' | 'forward' | 'zero';
}> = ({ meta, onPatch, chartNullMode }) => {
    const invalid = formulaIsInvalid(meta.formula);
    return (
        <Box>
            <SwitchList sx={{ mb: 1.5 }}>
                <SwitchRow
                    label={Generic.t('echarts_series_no_future')}
                    checked={meta.noFuture ?? false}
                    onChange={v => onPatch({ noFuture: v })}
                />
                <SwitchRow
                    label={Generic.t('echarts_series_smooth_window')}
                    checked={meta.smoothWindow !== undefined}
                    onChange={v => onPatch({ smoothWindow: v ? (meta.smoothWindow ?? 5) : undefined })}
                />
                <SwitchRow
                    label={Generic.t('echarts_series_cumulative')}
                    checked={meta.cumulative ?? false}
                    onChange={v => onPatch({ cumulative: v })}
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
                    options={nullModeOptions(chartNullMode)}
                />
                {/* Smoothing window (ticket 04): the switch AUTHORS (on → 5, the Default-Autorung)
                    — the slider only ever shows an authored value, never a fake resting position
                    (unset = OFF; a fallback thumb would lie about that). Odd-only via step 2. */}
                {meta.smoothWindow !== undefined && (
                    <OptionalSliderField
                        label={Generic.t('echarts_series_smooth_window')}
                        value={meta.smoothWindow}
                        min={3}
                        max={51}
                        step={2}
                        fallback={5}
                        onChange={v => onPatch({ smoothWindow: v })}
                    />
                )}
            </FieldGrid>
            <SeriesValueMapField
                meta={meta}
                onPatch={onPatch}
            />
            <InfoBox text={Generic.t('echarts_series_formula_help')} />
            <InfoBox text={Generic.t('echarts_series_smooth_window_help')} />
            <InfoBox text={Generic.t('echarts_series_cumulative_help')} />
        </Box>
    );
};
