/**
 * The X-Karte — the Axis manager's shared time-axis card + its Time-format combobox (ADR-0035;
 * extracted from AxesZoomSection per ADR-0051: concept name = file name).
 *
 * @module EchartsCollectionWidget/editor/sections/axes/XCard
 * @remarks
 *  - `XFormatCombo` — the editable moment Time-format combobox (ADR-0052): the 26 ioBroker.echarts
 *    presets grouped by intent as dropdown offers, freeSolo input, live example.
 *  - `XCard` (default export) — the single, non-deletable card configuring the shared time axis;
 *    flat presentation config, never a list, never series-bound.
 */
import type { FC } from 'react';
import { Autocomplete, Box, Link, TextField } from '@mui/material';

import Generic from '../../../../Generic';
import {
    EditorCard,
    FieldGrid,
    FieldLabel,
    InfoBox,
    LabeledSelect,
    NumberField,
    OptionalNumberField,
    OptionalSliderField,
    SectionTabs,
    SliderField,
    SwitchList,
    SwitchRow,
    TextField2,
} from '../../../../components/controls';
import ColorField from '../../colorFields';
import type { OidPickerCtx } from '../../OidPicker';
import type { EchartsXAxisConfig } from '../../../../types/field-definitions/echarts-fields';
import RawJsonSection from '../RawJsonSection';
import { X_AXIS_CATALOG } from '../../xAxisTemplates';
import { snippetPatch } from '../../snippetComposition';
import {
    SAMPLE_TS,
    TIME_FORMAT_PRESETS,
    formatAxisLabel,
    resolveHostLang,
    type TimeFormatGroupId,
    type TimeFormatPreset,
} from '../../../timeFormat';

/** Intent-group i18n keys for the Time-format dropdown (ADR-0052). */
const FORMAT_GROUP_I18N: Record<TimeFormatGroupId, string> = {
    auto: 'echarts_x_fmt_grp_auto',
    time: 'echarts_x_fmt_grp_time',
    date: 'echarts_x_fmt_grp_date',
    dateTime: 'echarts_x_fmt_grp_datetime',
    twoLine: 'echarts_x_fmt_grp_twoline',
    international: 'echarts_x_fmt_grp_international',
    weekday: 'echarts_x_fmt_grp_weekday',
};

/**
 * Editable moment Time-format combobox (ADR-0052): the 26 ioBroker.echarts presets grouped by
 * intent as dropdown OFFERS, the input freeSolo — the format string is the single state, so a
 * pattern typed to equal a preset is simply that preset. `''` = Auto (unset — the adaptive
 * labelling; explained in the caption instead of a sample). An authored pattern shows the demo
 * timestamp as a LIVE EXAMPLE (`whiteSpace:pre-line` renders the two-line `\n` for real), so the
 * locale effect (weekday names) is visible before committing. The caption below points at the
 * moment token vocabulary.
 */
const XFormatCombo: FC<{
    value: string | undefined;
    onChange: (format: string | undefined) => void;
}> = ({ value, onChange }) => (
    <Box sx={{ gridColumn: '1 / -1' }}>
        <FieldLabel>{Generic.t('echarts_x_format')}</FieldLabel>
        <Autocomplete<TimeFormatPreset, false, false, true>
            freeSolo
            size="small"
            options={TIME_FORMAT_PRESETS as TimeFormatPreset[]}
            groupBy={o => Generic.t(FORMAT_GROUP_I18N[o.group])}
            inputValue={value ?? ''}
            // Typing ('input') and the clear button ('clear') write straight through; picking an
            // option arrives via onChange (reason 'reset' would double-fire every selection).
            onInputChange={(_, v, reason) => {
                if (reason === 'input' || reason === 'clear') {
                    onChange(v || undefined);
                }
            }}
            onChange={(_, v) => onChange(typeof v === 'string' ? v || undefined : v?.value || undefined)}
            getOptionLabel={o =>
                typeof o === 'string' ? o : o.value === '' ? Generic.t('echarts_x_fmt_auto') : o.value
            }
            renderOption={(props, option) => (
                <li
                    {...props}
                    key={option.value || 'auto'}
                >
                    {option.value === '' ? Generic.t('echarts_x_fmt_auto') : option.value}
                </li>
            )}
            renderInput={params => (
                <TextField
                    {...params}
                    placeholder={Generic.t('echarts_x_fmt_auto')}
                    fullWidth
                />
            )}
        />
        {/* Info callout (the renderer-info idiom): the live example / Auto explanation plus the
            moment token vocabulary — one box, structured children. */}
        <InfoBox>
            <Box sx={{ whiteSpace: 'pre-line' }}>
                {value ? (
                    <>
                        {Generic.t('echarts_x_format_sample')}:{' '}
                        <Box
                            component="code"
                            sx={{ color: 'text.primary' }}
                        >
                            {formatAxisLabel(value, SAMPLE_TS, resolveHostLang())}
                        </Box>
                    </>
                ) : (
                    Generic.t('echarts_x_fmt_auto_hint')
                )}
            </Box>
            <Box sx={{ mt: 0.5 }}>
                {/* The link words are their own i18n key so every language can phrase them. */}
                <Link
                    href="https://momentjs.com/docs/#/displaying/format/"
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="none"
                >
                    {Generic.t('echarts_x_format_link')}
                </Link>
                {': '}
                {Generic.t('echarts_x_format_tokens')}
            </Box>
        </InfoBox>
    </Box>
);

/**
 * The X-Karte (ADR-0035): the single, non-deletable first card of the Axis manager configuring
 * the shared time axis — flat presentation config (never a list, never series-bound). Absorbs
 * the old chart-level `xSplit` row (now the Splitlinien switch in Ticks & Gitter, ADR-0073).
 */
const XCard: FC<{
    x: EchartsXAxisConfig;
    open: boolean;
    onToggle: () => void;
    onChange: (patch: Partial<EchartsXAxisConfig>) => void;
    pickerCtx: OidPickerCtx;
    /** Theme text token — the axis colour's inherit value (the theme's label colour; ADR-0027/0035). */
    fallbackColor: string;
    /** Theme divider token — the grid + tick colours' inherit value (the theme's axis-line floor). */
    dividerColor: string;
    /**
     * The effective X is a CATEGORY axis (ADR-0075: json-table with a non-date X column): the
     * Time format has nothing to label — the field hides. Absent/false = the time axis
     * (Verlauf + serien-förmig always; the field always visible there).
     */
    isCategory?: boolean;
}> = ({ x, open, onToggle, onChange, pickerCtx, fallbackColor, dividerColor, isCategory = false }) => {
    // Splitlines default off on a time axis (the echarts default) — the grid colour rides this state.
    const splitLineEffective = x.splitLine ?? false;
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
                        // Effective axis colour: explicit wins, else the theme's label colour (the
                        // theme floor paints line+labels; textSecondary is the dominant one).
                        backgroundColor: x.color ?? fallbackColor,
                        border: '1px solid',
                        borderColor: 'divider',
                        flexShrink: 0,
                    }}
                />
            }
            title={Generic.t('echarts_x_title')}
        >
            {/* Karten-Tabs (ADR-0073): Basis | Beschriftung | Ticks & Gitter | Erweitert —
                the spec's X inventory: the Zeitformat lives in Beschriftung (with the axis
                colour, which paints the labels), the Feinjustur sheet (name rotation) in
                Ticks & Gitter, the raw escape hatch in Erweitert. */}
            <SectionTabs
                tabs={[
                    { key: 'basis', label: Generic.t('echarts_grp_basis') },
                    { key: 'labels', label: Generic.t('echarts_grp_labels') },
                    { key: 'ticks', label: Generic.t('echarts_tab_ticks_grid') },
                    { key: 'advanced', label: Generic.t('echarts_tab_advanced') },
                ]}
            >
                <Box>
                    <FieldGrid>
                        {/* '' → undefined so a cleared name is unset (the builder omits it). */}
                        <TextField2
                            label={Generic.t('echarts_axis_name')}
                            value={x.name ?? ''}
                            onChange={v => onChange({ name: v || undefined })}
                        />
                        {/* The X sibling of the Y-axis Versatz: moves the WHOLE axis away from the grid
                    in the position's direction (down at 'bottom', up at 'top' — a label-crowding
                    fine-adjustment). No stagger machinery here — a single axis — so the value is
                    purely manual; `outerBoundsContain:'all'` (ADR-0024) reserves the space, and
                    the builder detaches the line from the Y-zero (axisLine.onZero:false) so
                    line+ticks+labels move together. 0 → undefined: a cleared field restores the
                    full default (incl. onZero). */}
                        <NumberField
                            label={Generic.t('echarts_axis_offset')}
                            value={x.offset ?? 0}
                            onChange={v => onChange({ offset: v || undefined })}
                        />
                        {/* X position (parity Build D, ADR-0055): the adapter's "axis on top" layout
                    variant. 'bottom' is the echarts default — an authored choice emits verbatim,
                    unset stays key-free. 'top' ALSO detaches the line from the Y-zero
                    (axisLine.onZero:false, same as the offset above): the default onZero:true
                    pins the line at y=0 while the labels escape via their labelOffset — only the
                    axis labels would move. */}
                        <LabeledSelect
                            label={Generic.t('echarts_x_position')}
                            value={x.position ?? 'bottom'}
                            onChange={v => onChange({ position: v as 'bottom' | 'top' })}
                            options={[
                                ['bottom', Generic.t('echarts_pos_bottom')],
                                ['top', Generic.t('echarts_pos_top')],
                            ]}
                        />
                    </FieldGrid>
                </Box>
                <Box>
                    {/* The axis colour paints line + labels (the axis belongs to no series) —
                    inherited = the theme's label token. Lives with the labelling per the
                    spec's X inventory. */}
                    <Box sx={{ mb: 1.5 }}>
                        <FieldLabel>{Generic.t('echarts_editor_series_color')}</FieldLabel>
                        <ColorField
                            value={x.color ?? ''}
                            fallback={fallbackColor}
                            onChange={v => onChange({ color: v ?? undefined })}
                            ctx={pickerCtx}
                        />
                    </Box>
                    {/* String categories label themselves (ADR-0075) — no moment format to
                        author; the field hides rather than lying inert. */}
                    {!isCategory && (
                        <XFormatCombo
                            value={x.format}
                            onChange={v => onChange({ format: v })}
                        />
                    )}
                    {/* Angled tick labels for narrow widgets; unset = 0° horizontal (no emit). Distinct
                from Namen-Drehung above — this rotates the time labels, not the axis name. The
                label SIZE (parity Build D) sits beside it — unset defers to echarts' 12. */}
                    <FieldGrid
                        sx={{ mt: 1.5 }}
                        min={170}
                    >
                        <SliderField
                            label={Generic.t('echarts_x_label_rotate')}
                            value={x.labelRotate ?? 0}
                            min={-90}
                            max={90}
                            step={5}
                            onChange={v => onChange({ labelRotate: v })}
                        />
                        <OptionalSliderField
                            label={Generic.t('echarts_axis_label_font_size')}
                            value={x.labelFontSize}
                            min={6}
                            max={32}
                            fallback={12}
                            onChange={v => onChange({ labelFontSize: v })}
                        />
                    </FieldGrid>
                </Box>
                <Box>
                    <SwitchList sx={{ mb: 1.5 }}>
                        <SwitchRow
                            label={Generic.t('echarts_axis_tick_show')}
                            checked={x.axisTick ?? true}
                            onChange={v => onChange({ axisTick: v })}
                        />
                        <SwitchRow
                            label={Generic.t('echarts_axis_splitline')}
                            checked={splitLineEffective}
                            onChange={v => onChange({ splitLine: v })}
                        />
                    </SwitchList>
                    {/* Grid colour (parity Build D, ADR-0055) — offered only while the splitlines switch
                is on (the zoom-idle precedent: a dependent control renders under its switch).
                Inherit swatch = the theme's divider token (the theme floor's splitline colour);
                the value persists when the grid goes back off. */}
                    {splitLineEffective && (
                        <Box sx={{ mb: 1.5 }}>
                            <FieldLabel>{Generic.t('echarts_axis_grid_color')}</FieldLabel>
                            <ColorField
                                value={x.gridColor ?? ''}
                                fallback={dividerColor}
                                onChange={v => onChange({ gridColor: v ?? undefined })}
                                ctx={pickerCtx}
                            />
                        </Box>
                    )}
                    {/* Same optional-number pair as the Y-cards; unset = the echarts time-axis default
                (splitNumber 6, no interval floor). The tick colour (parity Build D) colours the
                tick MARKS separately from the labels; inherit = the axis line's colour. */}
                    <FieldGrid min={110}>
                        <OptionalNumberField
                            label={Generic.t('echarts_axis_split_number')}
                            value={x.splitNumber}
                            onChange={v => onChange({ splitNumber: v })}
                        />
                        <OptionalNumberField
                            label={Generic.t('echarts_axis_min_interval')}
                            value={x.minInterval}
                            onChange={v => onChange({ minInterval: v })}
                        />
                        <Box>
                            <FieldLabel>{Generic.t('echarts_axis_tick_color')}</FieldLabel>
                            <ColorField
                                value={x.tickColor ?? ''}
                                fallback={x.color ?? dividerColor}
                                onChange={v => onChange({ tickColor: v ?? undefined })}
                                ctx={pickerCtx}
                            />
                        </Box>
                    </FieldGrid>
                    <InfoBox text={Generic.t('echarts_x_min_interval_hint')} />
                    {/* Feinjustur (the spec X inventory puts the fine-justure sheet here): the
                    Y-card ??90 is wrong on X — echarts null nameRotate renders VERTICAL on a side
                    axis but HORIZONTAL (0°) on a bottom axis — the X name default. Unset stays
                    unset (no emit) until the user explicitly rotates. */}
                    <FieldGrid>
                        <SliderField
                            label={Generic.t('echarts_axis_name_rotate')}
                            value={x.nameRotate ?? 0}
                            min={-90}
                            max={90}
                            step={5}
                            onChange={v => onChange({ nameRotate: v })}
                        />
                    </FieldGrid>
                </Box>

                {/* The X-Karte's own raw escape hatch (ADR-0037 addendum — X joins the axis anatomy):
            the same section the Y cards carry, fed by the X catalog (`xAxisTemplates.ts`);
            deep-merged UNDER the built entry, the card wins collisions. */}
                <RawJsonSection
                    raw={x.raw}
                    onChange={v => onChange({ raw: v || undefined })}
                    catalog={X_AXIS_CATALOG}
                    snippets={x.snippets}
                    onCommit={r => onChange(snippetPatch(r))}
                />
            </SectionTabs>
        </EditorCard>
    );
};

export default XCard;
