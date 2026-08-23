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
    NumberField,
    OptionalNumberField,
    SliderField,
    SubGroup,
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
                    href="https://momentjs.com/docs/#/displaying/format"
                    target="_blank"
                    rel="noopener noreferrer"
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
 * the old chart-level `xSplit` row (now the Splitlinien switch in Skala & Ticks).
 */
const XCard: FC<{
    x: EchartsXAxisConfig;
    open: boolean;
    onToggle: () => void;
    onChange: (patch: Partial<EchartsXAxisConfig>) => void;
    pickerCtx: OidPickerCtx;
    /** Theme text token — the axis colour's inherit value (the theme's label colour; ADR-0027/0035). */
    fallbackColor: string;
}> = ({ x, open, onToggle, onChange, pickerCtx, fallbackColor }) => (
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
        <SubGroup title={Generic.t('echarts_grp_basis')}>
            <FieldGrid>
                {/* '' → undefined so a cleared name is unset (the builder omits it). */}
                <TextField2
                    label={Generic.t('echarts_axis_name')}
                    value={x.name ?? ''}
                    onChange={v => onChange({ name: v || undefined })}
                />
                {/* Inherited = the theme's axis colour (text token) — the axis belongs to no series. */}
                <Box>
                    <FieldLabel>{Generic.t('echarts_editor_series_color')}</FieldLabel>
                    <ColorField
                        value={x.color ?? ''}
                        fallback={fallbackColor}
                        onChange={v => onChange({ color: v ?? undefined })}
                        ctx={pickerCtx}
                    />
                </Box>
                {/* The X sibling of the Y-axis Versatz: moves the WHOLE axis down, away from the
                    grid (label-crowding fine-adjustment). No stagger machinery here — a single
                    axis — so the value is purely manual; `outerBoundsContain:'all'` (ADR-0024)
                    reserves the space, and the builder detaches the line from the Y-zero
                    (axisLine.onZero:false) so line+ticks+labels move together. 0 → undefined: a
                    cleared field restores the full default (incl. onZero). */}
                <NumberField
                    label={Generic.t('echarts_axis_offset')}
                    value={x.offset ?? 0}
                    onChange={v => onChange({ offset: v || undefined })}
                />
            </FieldGrid>
        </SubGroup>

        <SubGroup title={Generic.t('echarts_grp_labels')}>
            <XFormatCombo
                value={x.format}
                onChange={v => onChange({ format: v })}
            />
            {/* Angled tick labels for narrow widgets; unset = 0° horizontal (no emit). Distinct
                from Namen-Drehung above — this rotates the time labels, not the axis name. */}
            <FieldGrid sx={{ mt: 1.5 }}>
                <SliderField
                    label={Generic.t('echarts_x_label_rotate')}
                    value={x.labelRotate ?? 0}
                    min={-90}
                    max={90}
                    step={5}
                    onChange={v => onChange({ labelRotate: v })}
                />
            </FieldGrid>
        </SubGroup>

        <SubGroup title={Generic.t('echarts_grp_scale_ticks')}>
            <SwitchList sx={{ mb: 1.5 }}>
                <SwitchRow
                    label={Generic.t('echarts_axis_tick_show')}
                    checked={x.axisTick ?? true}
                    onChange={v => onChange({ axisTick: v })}
                />
                <SwitchRow
                    label={Generic.t('echarts_axis_splitline')}
                    checked={x.splitLine ?? false}
                    onChange={v => onChange({ splitLine: v })}
                />
            </SwitchList>
            {/* Same optional-number pair as the Y-cards; unset = the echarts time-axis default
                (splitNumber 6, no interval floor). */}
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
            </FieldGrid>
            <InfoBox text={Generic.t('echarts_x_min_interval_hint')} />
        </SubGroup>

        <SubGroup title={Generic.t('echarts_grp_presentation')}>
            <FieldGrid>
                {/* The Y-card's `??90` is wrong here: echarts' null nameRotate renders VERTICAL on a
                    side axis but HORIZONTAL (0°) on a bottom axis — the X name's default. Unset stays
                    unset (no emit) so echarts keeps the default until the user explicitly rotates. */}
                <SliderField
                    label={Generic.t('echarts_axis_name_rotate')}
                    value={x.nameRotate ?? 0}
                    min={-90}
                    max={90}
                    step={5}
                    onChange={v => onChange({ nameRotate: v })}
                />
            </FieldGrid>
        </SubGroup>

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
    </EditorCard>
);

export default XCard;
