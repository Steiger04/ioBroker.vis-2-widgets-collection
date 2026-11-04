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
    colorScaleCss,
    deriveColorScaleColors,
    resolveColorScaleRange,
    type ColorScaleBound,
    type ValueExtent,
} from '../../../../seriesColorScale';
import { resolveHostLang } from '../../../../timeFormat';
import type { OidPickerCtx } from '../../../OidPicker';

/** The empty Min/Max placeholder (Erben-Override idiom): the source always, the value only when known. */
const boundPlaceholder = (bound: ColorScaleBound): string => {
    const fmt = (n: number): string =>
        new Intl.NumberFormat(resolveHostLang(), { maximumFractionDigits: 3, useGrouping: false }).format(n);
    if (bound.source === 'axis' && bound.value !== undefined) {
        return Generic.t('echarts_color_scale_inherit_axis', fmt(bound.value));
    }
    return bound.value === undefined
        ? Generic.t('echarts_color_scale_inherit_data_unknown')
        : Generic.t('echarts_color_scale_inherit_data', fmt(bound.value));
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
}> = ({ meta, onPatch, pickerCtx, seriesColor, yAxes, dataExtent, areaGradient }) => {
    const on = meta.colorScale === true;
    // The builder's axis clamp: a stale index binds axis 0.
    const yi = meta.yAxisIndex ?? 0;
    const axis = yAxes[yi < yAxes.length ? yi : 0];
    // Only the inherited bounds feed the placeholders — an entered bound shows as the value.
    const range = resolveColorScaleRange(undefined, axis, dataExtent);
    const derived = deriveColorScaleColors(seriesColor);
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
                    placeholder={boundPlaceholder(range.min)}
                    disabled={!on}
                />
                <OptionalNumberField
                    label={Generic.t('echarts_series_color_scale_max')}
                    value={meta.colorScaleMax}
                    onChange={v => onPatch({ colorScaleMax: v })}
                    placeholder={boundPlaceholder(range.max)}
                    disabled={!on}
                />
                <Box>
                    <FieldLabel>{Generic.t('echarts_series_color_scale_colors')}</FieldLabel>
                    <ColorField
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
    /** Palette-slot colour of this series — the area-gradient inherit preview (ADR-0027). */
    colorFallback: string;
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
}> = ({
    meta,
    defaultType,
    onPatch,
    pickerCtx,
    colorFallback,
    labelColorFallback,
    stackMode,
    yAxes = [],
    dataExtent = null,
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
                                        value={meta.areaGradient}
                                        // Inherit swatch + picker start value = the derived
                                        // Flächen-Verlauf the builder draws (ADR-0101) — the
                                        // solid colour only when none can be derived.
                                        fallback={
                                            deriveAreaGradient(meta.color ?? colorFallback)?.css ??
                                            meta.color ??
                                            colorFallback
                                        }
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
                seriesColor={meta.color ?? colorFallback}
                yAxes={yAxes}
                dataExtent={dataExtent}
                areaGradient={renderedType === 'line' && meta.area === 'gradient'}
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
