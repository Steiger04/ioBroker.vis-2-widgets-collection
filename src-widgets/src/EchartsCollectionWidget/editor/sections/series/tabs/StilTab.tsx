/**
 * The Stil tab of the series card (ADR-0100; formerly „Darstellung") — the type-sensitive knob
 * cluster (line / bar / area SubGroups), purely meta-driven; the caller owns the binding.
 * Bounded numerics are SliderFields, booleans live in SwitchLists (ADR-0019). „Nur in Legende"
 * rides here too (presentation, ADR-0072). The bar stack-group select names its inherit target
 * (the Stapelmodus, ADR-0084).
 *
 * @module EchartsCollectionWidget/editor/sections/series/tabs/StilTab
 */
import type { FC } from 'react';
import { Box } from '@mui/material';
import Generic from '../../../../../Generic';
import type {
    EchartsAreaFill,
    EchartsAxisConfig,
    EchartsBarLabelPos,
    EchartsCartesianType,
    EchartsSeriesMeta,
    EchartsStackMode,
} from '../../../../../types/field-definitions/echarts-fields';
import {
    FieldGrid,
    FieldLabel,
    InfoBox,
    LabeledSelect,
    OptionalNumberField,
    OptionalSliderField,
    SliderField,
    SubGroup,
    SwitchList,
    SwitchRow,
    TextField2,
} from '../../../../../components/controls';
import ColorField from '../../../colorFields';
import { deriveAreaGradient } from '../../../../seriesColorDerive';
import {
    colorScaleAxis,
    colorScaleCss,
    colorScaleDisplayValue,
    colorScaleRangeInvalid,
    deriveColorScaleColors,
    resolveColorScaleRange,
    type ColorScaleBound,
    type ValueExtent,
} from '../../../../seriesColorScale';
import { resolveHostLang } from '../../../../timeFormat';
import type { OidPickerCtx } from '../../../OidPicker';
import { COLOR_SCALE_RANGE_ISSUE } from '../../../seriesIssues';

/**
 * The empty Min/Max field's inherit texts (Erben-Override idiom): the source always, the value
 * only when known — in the user's unit (displayed percent for a percent-stacked bar, ticket 08).
 * The half-column field shows the SHORT form („→ Daten: 6,54", the empty field already reads as
 * „erbt"); the full „Erben (→ Daten: 6,54)" rides as tooltip and accessible name (ticket 07).
 */
const boundTexts = (bound: ColorScaleBound, percent: boolean): { placeholder: string; title: string } => {
    const fmt = (n: number): string =>
        new Intl.NumberFormat(resolveHostLang(), { maximumFractionDigits: 3, useGrouping: false }).format(
            colorScaleDisplayValue(n, percent),
        );
    const pick = (
        kind: 'axis' | 'data' | 'data_unknown',
        ...args: string[]
    ): { placeholder: string; title: string } => ({
        placeholder: Generic.t(`echarts_color_scale_placeholder_${kind}`, ...args),
        title: Generic.t(`echarts_color_scale_inherit_${kind}`, ...args),
    });
    if (bound.source === 'axis' && bound.value !== undefined) {
        return pick('axis', fmt(bound.value));
    }
    return bound.value === undefined ? pick('data_unknown') : pick('data', fmt(bound.value));
};

/**
 * The Farbskala SubGroup (ADR-0101) — type-independent like „Nur in Legende": switch, Min/Max
 * (empty = inherit per bound from the bound axis, else the data) and the colour gradient
 * (empty = the scale derived from the effective series colour). Off = the fields stay visible
 * but disabled (ADR-0019). Placeholders and the colour preview come from the SAME pure
 * resolution the builder runs (seriesColorScale), so the editor never shows another scale.
 */
const ColorScaleGroup: FC<{
    meta: EchartsSeriesMeta;
    onPatch: (patch: Partial<EchartsSeriesMeta>) => void;
    pickerCtx: OidPickerCtx;
    seriesColor: string;
    yAxes: readonly EchartsAxisConfig[];
    dataExtent: ValueExtent | null;
    /** The area knob is „Verlauf" — the area keeps its own gradient, only the line follows. */
    areaGradient: boolean;
    /** A percent-stacked bar: the bounds read and inherit in displayed percent (ticket 08). */
    percent: boolean;
}> = ({ meta, onPatch, pickerCtx, seriesColor, yAxes, dataExtent, areaGradient, percent }) => {
    const on = meta.colorScale === true;
    // Only the inherited bounds feed the placeholders — an entered bound shows as the value.
    const range = resolveColorScaleRange(undefined, colorScaleAxis(yAxes, meta.yAxisIndex), dataExtent, percent);
    const minTexts = boundTexts(range.min, percent);
    const maxTexts = boundTexts(range.max, percent);
    const derived = deriveColorScaleColors(seriesColor);
    // The input error (ticket 05) — the SAME predicate the builder and the validation run: both
    // fields flag, ONE helper text names the consequence (the AxisCard min≥max idiom).
    const invalid = colorScaleRangeInvalid(meta);
    return (
        <SubGroup title={Generic.t('echarts_grp_color_scale')}>
            <SwitchList sx={{ mb: 1.5 }}>
                <SwitchRow
                    label={Generic.t('echarts_series_color_scale')}
                    checked={on}
                    // Sparse (ADR-0101 data model): off = the key is absent.
                    onChange={v => onPatch({ colorScale: v ? true : undefined })}
                />
            </SwitchList>
            <FieldGrid min={140}>
                <OptionalNumberField
                    label={Generic.t('echarts_series_color_scale_min')}
                    value={meta.colorScaleMin}
                    onChange={v => onPatch({ colorScaleMin: v })}
                    placeholder={minTexts.placeholder}
                    placeholderTitle={minTexts.title}
                    disabled={!on}
                    error={invalid}
                    helperText={invalid ? Generic.t(COLOR_SCALE_RANGE_ISSUE) : undefined}
                />
                <OptionalNumberField
                    label={Generic.t('echarts_series_color_scale_max')}
                    value={meta.colorScaleMax}
                    onChange={v => onPatch({ colorScaleMax: v })}
                    placeholder={maxTexts.placeholder}
                    placeholderTitle={maxTexts.title}
                    disabled={!on}
                    error={invalid}
                />
                <Box>
                    <FieldLabel>{Generic.t('echarts_series_color_scale_colors')}</FieldLabel>
                    <ColorField
                        title={Generic.t('echarts_series_color_scale_colors')}
                        value={meta.colorScaleColors}
                        // Inherit swatch + picker start value = the derived scale the builder
                        // draws; the solid colour only when none can be derived.
                        fallback={derived ? colorScaleCss(derived) : seriesColor}
                        onChange={v => onPatch({ colorScaleColors: v ?? undefined })}
                        ctx={pickerCtx}
                        allowGradient
                        disabled={!on}
                    />
                </Box>
            </FieldGrid>
            <InfoBox text={Generic.t('echarts_color_scale_hint')} />
            {on && areaGradient && <InfoBox text={Generic.t('echarts_color_scale_area_hint')} />}
        </SubGroup>
    );
};

/**
 * The type-sensitive cartesian knob cluster (line / area / bar SubGroups) — shared by the
 * cartesian series card (history, bound to `state.series[i]`) and the JSON-mode series card
 * (bound to the name-keyed overlay entry, ADR-0011 parity). Purely meta-driven; the caller owns
 * the binding (onPatch).
 */
export const StilTab: FC<{
    meta: EchartsSeriesMeta;
    defaultType: EchartsCartesianType;
    onPatch: (patch: Partial<EchartsSeriesMeta>) => void;
    pickerCtx: OidPickerCtx;
    /**
     * The series' effective colour (explicit → palette slot, ADR-0027), resolved once by the card —
     * the Flächen-Verlauf and Farbskala inherit previews derive from it.
     */
    seriesColor: string;
    /** Theme text-primary — the BAR label colour's inherit preview (ADR-0027 one-hook rule). */
    labelColorFallback: string;
    /**
     * The chart-level Stapelmodus (ADR-0084) — the BAR select's inherit entry names its
     * resolution (erben (→ Gestapelt)); absent = none (the JSON families carry the blob field
     * unevaluated — inherit honestly resolves to „Kein Stapel" there).
     */
    stackMode?: EchartsStackMode;
    /** The chart's Y axes — the Farbskala bounds inherit the bound axis' fixed min/max. */
    yAxes?: readonly EchartsAxisConfig[];
    /**
     * The series' loaded preview data extent — the Farbskala's data-inherited bounds name a value
     * only when it is known; absent/`null` = source only, never an invented value.
     */
    dataExtent?: ValueExtent | null;
    /**
     * The series is a percent-stacked bar (`isPercentStackedBar`, resolved by the card) —
     * the Farbskala bounds are entered and shown in displayed percent (ticket 08).
     */
    colorScalePercent?: boolean;
}> = ({
    meta,
    defaultType,
    onPatch,
    pickerCtx,
    seriesColor,
    labelColorFallback,
    stackMode,
    yAxes = [],
    dataExtent = null,
    colorScalePercent = false,
}) => {
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
                                // LINES never inherit (ADR-0084 decision 2): hand-set groups
                                // only — „Kein Stapel" stays SPARSE (undefined; a bar→line type
                                // flip may leave a stored 'none', which shows and means the same).
                                value={meta.stack ?? 'none'}
                                onChange={v => onPatch({ stack: v === 'none' ? undefined : (v as 'A' | 'B' | 'C') })}
                                options={[
                                    ['none', Generic.t('echarts_stack_opt_out')],
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
                                        title={Generic.t('echarts_series_area_gradient')}
                                        value={meta.areaGradient}
                                        // Inherit swatch + picker start value = the derived
                                        // Flächen-Verlauf the builder draws (ADR-0101) — the
                                        // solid colour only when none can be derived.
                                        fallback={deriveAreaGradient(seriesColor)?.css ?? seriesColor}
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
                                title={Generic.t('echarts_bar_label_color')}
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
                        {/* Stapelgruppe, three-valued since ADR-0084 (decision 2, the Erben
                            idiom): the inherit entry NAMES its resolution — at mode none that
                            is honestly „Kein Stapel". Groups are mode-independent. */}
                        <LabeledSelect
                            label={Generic.t('echarts_series_stack')}
                            value={meta.stack ?? ''}
                            onChange={v =>
                                onPatch({
                                    stack: v === '' ? undefined : (v as 'none' | 'A' | 'B' | 'C'),
                                })
                            }
                            options={[
                                [
                                    '',
                                    Generic.t(
                                        'echarts_stack_inherit',
                                        Generic.t(
                                            stackMode === 'stack'
                                                ? 'echarts_stack_mode_stack'
                                                : stackMode === 'percent'
                                                  ? 'echarts_stack_mode_percent'
                                                  : 'echarts_stack_opt_out',
                                        ),
                                    ),
                                ],
                                ['none', Generic.t('echarts_stack_opt_out')],
                                ['A', Generic.t('echarts_stack_group_a')],
                                ['B', Generic.t('echarts_stack_group_b')],
                                ['C', Generic.t('echarts_stack_group_c')],
                            ]}
                        />
                    </FieldGrid>
                </SubGroup>
            )}
            <ColorScaleGroup
                meta={meta}
                onPatch={onPatch}
                pickerCtx={pickerCtx}
                seriesColor={seriesColor}
                yAxes={yAxes}
                dataExtent={dataExtent}
                areaGradient={renderedType === 'line' && meta.area === 'gradient'}
                percent={colorScalePercent}
            />
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
