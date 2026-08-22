/**
 * Axes & zoom section — cartesian-only multi-axis + interaction config (ADR-0007/0010/0012;
 * control-kit layout per ADR-0019).
 *
 * @module EchartsCollectionWidget/editor/sections/AxesZoomSection
 * @remarks
 * The **Axis manager** (ADR-0012): one collapsible {@link EditorCard} per configured Y-axis (same
 * shell as the series cards). The body is organised into {@link SubGroup}s — basis (name/position/
 * colour/offset), value range (min/max/format), scale & ticks (the booleans as a SwitchList —
 * `alignTicks` only on follower axes, axis 0 is the reference, ADR-0034 — + splitNumber/minInterval),
 * presentation (name rotation) — replacing the flat ~360 px label-over-switch wall. Cards start
 * collapsed. Further axes render side-by-side via position/offset; `alignTicks` is an explicit
 * per-axis opt-in (ADR-0034) and per-axis colour is smart-defaulted in the cartesian builder.
 * Above the Y-cards sits the **X-Karte** (ADR-0035) — the single, non-deletable card for the
 * shared time axis (name, label time format, colour, ticks, splitlines; the old chart-level
 * `xSplit` row lives on as its Splitlinien switch). Plus dataZoom (slider + inside as a
 * SwitchList) and the threshold mark-lines. min≥max carries advisory validation.
 */
import { useState, type FC } from 'react';
import { Alert, Autocomplete, Box, Button, IconButton, Snackbar, TextField, Typography } from '@mui/material';
import { Add as AddIcon, DeleteOutline as DeleteIcon } from '@mui/icons-material';

import Generic from '../../../Generic';
import { useEditorTheme } from '../useEditorTheme';
import {
    EditorCard,
    FieldGrid,
    FieldLabel,
    InfoBox,
    LabeledSelect,
    NumberField,
    OptionalNumberField,
    SliderField,
    SubGroup,
    SwitchList,
    SwitchRow,
    TextField2,
} from '../../../components/controls';
import ColorField from '../colorFields';
import type { OidPickerCtx } from '../OidPicker';
import type {
    EchartsAxisConfig,
    EchartsMarkLine,
    EchartsXAxisConfig,
} from '../../../types/field-definitions/echarts-fields';
import type { EditorState, SetEditor } from '../editorState';
import {
    alignTicksDisabledByOverride,
    axisLayout,
    effectiveAxisColor,
    packStaggeredAxes,
    sameFormatSurvivor,
} from '../axisLayout';
import { nextStableId } from '../stableId';
import RawJsonSection from './RawJsonSection';
import { AXIS_CATALOG } from '../axisTemplates';
import { X_AXIS_CATALOG } from '../xAxisTemplates';
import { snippetPatch } from '../snippetComposition';

/**
 * The axes & zoom section's field ownership (ADR-0049 slice) — the widest honest slice: the
 * axis manager reads/writes the axis arrays (`yAxes`, `xAxis`) and the rebind cascade into
 * `series`; JSON mode branches on `mode` + the overlay (`jsonSeriesStyle`) and hides payload
 * series via `jsonHidden`; `markLines` and the two zoom toggles are section-owned; the 4
 * palette/darkMode fields are transitively read via `useEditorTheme` (axis colours).
 */
export type AxesZoomSlice = Pick<
    EditorState,
    | 'mode'
    | 'series'
    | 'yAxes'
    | 'xAxis'
    | 'markLines'
    | 'dataZoomSlider'
    | 'dataZoomInside'
    | 'jsonHidden'
    | 'jsonSeriesStyle'
    | 'paletteSource'
    | 'palettePreset'
    | 'paletteCustom'
    | 'darkMode'
>;

interface AxesZoomSectionProps {
    state: AxesZoomSlice;
    set: SetEditor<AxesZoomSlice>;
    pickerCtx: OidPickerCtx;
    /** JSON-mode payload series names, in payload order (drives the Series-card list). */
    jsonSeriesNames?: string[];
}

/**
 * echarts time-template presets for the X-axis label format (ADR-0035). `''` = auto — echarts'
 * own hierarchical labelling (no formatter emitted). The literal pattern doubles as the label —
 * the pattern IS the format, locale-neutral by construction.
 */
const X_FORMAT_PRESETS: [string, string][] = [
    ['{HH}:{mm}', 'HH:mm'],
    ['{dd}.{MM}.', 'dd.MM.'],
    ['{dd}.{MM} {HH}:{mm}', 'dd.MM HH:mm'],
    ['{HH}:{mm}:{ss}', 'HH:mm:ss'],
    ['{dd}.{MM}.{yyyy}', 'dd.MM.yyyy'],
];
/** The combobox dropdown values: '' (auto) + the preset templates. */
const X_FORMAT_VALUES: string[] = ['', ...X_FORMAT_PRESETS.map(([tpl]) => tpl)];
/** Friendly dropdown label for a value ('' → Auto; presets → their shorthand; else the raw template). */
const xFormatOptionLabel = (value: string): string =>
    value === '' ? Generic.t('echarts_x_fmt_auto') : (X_FORMAT_PRESETS.find(([tpl]) => tpl === value)?.[1] ?? value);

/**
 * Editable time-template combobox for the X-Karte label format (ADR-0035). The presets are
 * dropdown OFFERS, the input is freeSolo — the template string is the single state, so there is
 * no Eigene… sentinel and no custom-mode flag to desync (the rework replaces a select whose
 * "Eigene…" entry could never reveal its free-text field: the seed collided with a preset value,
 * the select snapped back, and the field stayed permanently hidden). A template typed to equal a
 * preset is simply that preset. The caption lists the echarts time-template placeholders so the
 * free text is discoverable.
 */
const XFormatCombo: FC<{
    value: string | undefined;
    onChange: (format: string | undefined) => void;
}> = ({ value, onChange }) => (
    <Box sx={{ gridColumn: '1 / -1' }}>
        <FieldLabel>{Generic.t('echarts_x_format')}</FieldLabel>
        <Autocomplete
            freeSolo
            size="small"
            options={X_FORMAT_VALUES}
            inputValue={value ?? ''}
            // Typing ('input') and the clear button ('clear') write straight through; picking an
            // option arrives via onChange (reason 'reset' would double-fire every selection).
            onInputChange={(_, v, reason) => {
                if (reason === 'input' || reason === 'clear') {
                    onChange(v || undefined);
                }
            }}
            onChange={(_, v) => onChange(v || undefined)}
            getOptionLabel={o => (o === '' ? Generic.t('echarts_x_fmt_auto') : o)}
            renderOption={(props, option) => (
                <li
                    {...props}
                    key={option}
                >
                    {xFormatOptionLabel(option)}
                    {option !== '' && (
                        <Typography
                            component="code"
                            variant="caption"
                            sx={{ ml: 1, color: 'text.secondary' }}
                        >
                            {option}
                        </Typography>
                    )}
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
        <Typography
            variant="caption"
            color="text.secondary"
            sx={{ display: 'block', mt: 0.5 }}
        >
            {Generic.t('echarts_x_format_tokens')}
        </Typography>
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
            <Typography
                variant="caption"
                color="text.secondary"
                sx={{ display: 'block', mt: 0.5 }}
            >
                {Generic.t('echarts_x_min_interval_hint')}
            </Typography>
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

/** One Y-axis card: the shared EditorCard shell, body in SubGroups (ADR-0019). */
const AxisCard: FC<{
    axis: EchartsAxisConfig;
    index: number;
    total: number;
    open: boolean;
    onToggle: () => void;
    onChange: (patch: Partial<EchartsAxisConfig>) => void;
    onRemove: () => void;
    pickerCtx: OidPickerCtx;
    /** Effective colour of the first bound series — the axis-colour default shown in the swatch (ADR-0018). */
    seriesColor?: string;
    /** Effective name of the first bound series — the axis-name default shown as placeholder (ADR-0018). */
    seriesName?: string;
}> = ({ axis: a, index: i, total, open, onToggle, onChange, onRemove, pickerCtx, seriesColor, seriesName }) => {
    const axisInvalid = typeof a.min === 'number' && typeof a.max === 'number' && a.min >= a.max;
    // alignTicks is an explicit per-axis opt-in (ADR-0034): off by default, no smart-default. Only
    // meaningful with 2+ axes; on axis 0 (the reference echarts aligns others to) it is a no-op, so
    // the switch renders only on follower axes (i > 0). An explicit toggle still wins.
    const alignTicksEffective = a.alignTicks ?? false;
    // echarts ignores alignTicks when the tick interval is fixed (min/max/splitNumber/minInterval);
    // surface that as a non-blocking warning on a follower axis that opted in (ADR-0034).
    const alignConflict = i > 0 && total > 1 && alignTicksEffective && alignTicksDisabledByOverride(a);
    // axisTick defaults to shown (echarts default); the switch reflects it.
    const axisTickEffective = a.axisTick ?? true;

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
                        // Effective axis colour: explicit wins, else the bound series' colour, else a
                        // neutral grey (matches the builder's `a.color ?? seriesColor`, ADR-0018/0027).
                        backgroundColor: a.color ?? seriesColor ?? '#999',
                        border: '1px solid',
                        borderColor: 'divider',
                        flexShrink: 0,
                    }}
                />
            }
            title={a.name || seriesName || `Achse ${i + 1}`}
            subtitle={
                (a.position ?? (i === 0 ? 'left' : 'right')) === 'left'
                    ? Generic.t('echarts_axis_left')
                    : Generic.t('echarts_axis_right')
            }
            actions={
                <IconButton
                    size="small"
                    onClick={onRemove}
                    aria-label={Generic.t('echarts_axis_delete')}
                    sx={{ p: 0.25 }}
                >
                    <DeleteIcon fontSize="small" />
                </IconButton>
            }
        >
            <SubGroup title={Generic.t('echarts_grp_basis')}>
                <FieldGrid>
                    {/* '' → undefined so a cleared name inherits the bound series' name instead of
                        freezing it out (cartesian builder treats '' as unset). */}
                    <TextField2
                        label={Generic.t('echarts_axis_name')}
                        value={a.name ?? ''}
                        placeholder={seriesName}
                        onChange={v => onChange({ name: v || undefined })}
                    />
                    <LabeledSelect
                        label={Generic.t('echarts_axis_position')}
                        value={a.position ?? (i === 0 ? 'left' : 'right')}
                        onChange={v => onChange({ position: v as 'left' | 'right' })}
                        options={[
                            ['left', Generic.t('echarts_axis_left')],
                            ['right', Generic.t('echarts_axis_right')],
                        ]}
                    />
                    {/* Colour sits in the grid like a series colour — swatch + inherit placeholder.
                        Inherited = the bound series' effective colour (ADR-0018). */}
                    <Box>
                        <FieldLabel>{Generic.t('echarts_editor_series_color')}</FieldLabel>
                        <ColorField
                            value={a.color ?? ''}
                            fallback={seriesColor ?? ''}
                            onChange={v => onChange({ color: v ?? undefined })}
                            ctx={pickerCtx}
                        />
                    </Box>
                    {/* Per-axis pixel offset: staggers multiple axes on the same side so they do not
                        overlap (ADR-0018/0028). Lives with Position — both steer where the axis sits —
                        not with the tick-density knobs in Skala & Ticks. */}
                    <NumberField
                        label={Generic.t('echarts_axis_offset')}
                        value={a.offset ?? 0}
                        onChange={v => onChange({ offset: v })}
                    />
                </FieldGrid>
            </SubGroup>

            <SubGroup title={Generic.t('echarts_grp_range')}>
                <FieldGrid min={110}>
                    <OptionalNumberField
                        label={Generic.t('echarts_y_min')}
                        value={a.min}
                        onChange={v => onChange({ min: v })}
                        error={axisInvalid}
                        helperText={axisInvalid ? Generic.t('echarts_val_yminmax') : undefined}
                    />
                    <OptionalNumberField
                        label={Generic.t('echarts_y_max')}
                        value={a.max}
                        onChange={v => onChange({ max: v })}
                        error={axisInvalid}
                    />
                    <TextField2
                        label={Generic.t('echarts_y_format')}
                        value={a.format ?? ''}
                        onChange={v => onChange({ format: v })}
                        placeholder="{value} kW"
                    />
                </FieldGrid>
            </SubGroup>

            <SubGroup title={Generic.t('echarts_grp_scale_ticks')}>
                <SwitchList sx={{ mb: 1.5 }}>
                    <SwitchRow
                        label={Generic.t('echarts_y_log')}
                        checked={a.log ?? false}
                        onChange={v => onChange({ log: v })}
                    />
                    <SwitchRow
                        label={Generic.t('echarts_axis_splitline')}
                        checked={a.splitLine ?? i === 0}
                        onChange={v => onChange({ splitLine: v })}
                    />
                    <SwitchRow
                        label={Generic.t('echarts_axis_scale')}
                        checked={a.scale ?? false}
                        onChange={v => onChange({ scale: v })}
                    />
                    {total > 1 && i > 0 && (
                        <SwitchRow
                            label={Generic.t('echarts_axis_align_ticks')}
                            checked={alignTicksEffective}
                            onChange={v => onChange({ alignTicks: v })}
                        />
                    )}
                    <SwitchRow
                        label={Generic.t('echarts_axis_tick_show')}
                        checked={axisTickEffective}
                        onChange={v => onChange({ axisTick: v })}
                    />
                </SwitchList>
                {total > 1 && <InfoBox text={Generic.t('echarts_axis_align_hint')} />}
                {alignConflict && (
                    <InfoBox
                        tone="warning"
                        text={Generic.t('echarts_axis_align_conflict')}
                    />
                )}
                <FieldGrid min={110}>
                    <OptionalNumberField
                        label={Generic.t('echarts_axis_split_number')}
                        value={a.splitNumber}
                        onChange={v => onChange({ splitNumber: v })}
                    />
                    <OptionalNumberField
                        label={Generic.t('echarts_axis_min_interval')}
                        value={a.minInterval}
                        onChange={v => onChange({ minInterval: v })}
                    />
                </FieldGrid>
            </SubGroup>

            <SubGroup title={Generic.t('echarts_grp_presentation')}>
                <FieldGrid>
                    {/* echarts' nameRotate default is null → the y-axis name renders VERTICAL (≈90°) via
                        the AxisBuilder's position-adaptive layout. Show 90 so the slider matches the
                        chart, but keep it unset (no emit) so echarts keeps adapting ±90 per side until
                        the user explicitly overrides. */}
                    <SliderField
                        label={Generic.t('echarts_axis_name_rotate')}
                        value={a.nameRotate ?? 90}
                        min={-90}
                        max={90}
                        step={5}
                        onChange={v => onChange({ nameRotate: v })}
                    />
                    {/* Name placement + gap were builder hard-emits with no card field (ADR-0037
                        promoted them): on a Y-axis 'end' = top, 'start' = bottom. Defaults = the
                        former hard-emit values, so existing widgets render identically. */}
                    <LabeledSelect
                        label={Generic.t('echarts_axis_name_location')}
                        value={a.nameLocation ?? 'middle'}
                        onChange={v => onChange({ nameLocation: v as 'start' | 'middle' | 'end' })}
                        options={[
                            ['start', Generic.t('echarts_axis_nameloc_start')],
                            ['middle', Generic.t('echarts_axis_nameloc_middle')],
                            ['end', Generic.t('echarts_axis_nameloc_end')],
                        ]}
                    />
                    <SliderField
                        label={Generic.t('echarts_axis_name_gap')}
                        value={a.nameGap ?? 18}
                        min={0}
                        max={60}
                        step={1}
                        onChange={v => onChange({ nameGap: v })}
                    />
                </FieldGrid>
            </SubGroup>

            {/* The per-axis raw escape hatch (ADR-0037): template menu + JSON editor. Deep-merged
                UNDER the built entry — the card wins collisions; everything the builder does not
                emit merges through. The activation follows the text (ADR-0042 addendum). */}
            <RawJsonSection
                raw={a.raw}
                onChange={v => onChange({ raw: v || undefined })}
                catalog={AXIS_CATALOG}
                snippets={a.snippets}
                onCommit={r => onChange(snippetPatch(r))}
            />
        </EditorCard>
    );
};

const AxesZoomSection: FC<AxesZoomSectionProps> = ({ state, set, pickerCtx, jsonSeriesNames }) => {
    const axes = state.yAxes;
    // Palette + tokens resolve against the COLLECTION theme (ADR-0027) — matches the canvas.
    const { palette, themeTokens } = useEditorTheme(state, pickerCtx.socket, pickerCtx.theme);

    // Expanded axis cards — same pattern as SeriesSection cartesian cards.
    const [expanded, setExpanded] = useState<Record<number, boolean>>({});
    const toggleCard = (i: number): void => setExpanded(e => ({ ...e, [i]: !e[i] }));
    // The X-Karte has its own expand flag (a single card, no list index).
    const [xExpanded, setXExpanded] = useState(false);
    // Advisory toast for the axis-delete rebind fallback (ADR-0025): shown when a deleted axis'
    // series are rebound to axis 0 because no survivor shares the format (a likely unit mismatch).
    const [toast, setToast] = useState<string | null>(null);
    /**
     * Effective colour of the first series bound to axis i — the axis-colour default (ADR-0018).
     * History/live: the positional `state.series`. JSON: the name-keyed overlay (`state.series` is
     * empty there — the payload owns the series); the modal axis effect writes `yAxisIndex` onto each
     * visible overlay entry, so a lookup-by-index finds it.
     */
    const boundAxisColor = (i: number): string | undefined => {
        // JSON: the "series" for palette-slot purposes is the VISIBLE payload names in payload order
        // (mirrors the Series-card list). The overlay owns each name's yAxisIndex + colour; resolving
        // the slot by visible position — NOT the axis index — keeps the swatch aligned with the Series
        // card after a rebind or a payload-name reorder (ADR-0018; the prior axis-index fallback
        // diverged there). History/live passes state.series directly (already in display order).
        if (state.mode === 'json') {
            const visibleSeries = (jsonSeriesNames ?? [])
                .filter(n => !state.jsonHidden.includes(n))
                .map(n => state.jsonSeriesStyle[n] ?? ({} as { yAxisIndex?: number; color?: string }));
            return effectiveAxisColor(i, visibleSeries, palette);
        }
        return effectiveAxisColor(i, state.series, palette);
    };
    /** Effective name of the first series bound to axis i — the axis-name default (ADR-0018). */
    const boundAxisName = (i: number): string | undefined => {
        if (state.mode === 'json') {
            const found = Object.entries(state.jsonSeriesStyle).find(([, m]) => m.yAxisIndex === i);
            if (!found) {
                return undefined;
            }
            return found[1].name || found[0] || `Series ${i + 1}`;
        }
        const idx = state.series.findIndex(s => s.yAxisIndex === i);
        if (idx < 0) {
            return undefined;
        }
        return state.series[idx].name || `Series ${idx + 1}`;
    };
    const setAxis = (i: number, patch: Partial<EchartsAxisConfig>): void => {
        const next = axes.map((a, idx) => (idx === i ? { ...a, ...patch } : a));
        // A side-flip (position change) re-staggers both sides densely so no two axes overlap
        // (ADR-0028). Only `position` triggers it — an offset edit is an explicit fine-justure the
        // user does not want normalised out from under them.
        set({ yAxes: 'position' in patch ? packStaggeredAxes(next) : next });
    };
    // Manual "add axis" uses the same 1:1 layout helper as series-add (ADR-0018): alternating side,
    // 80 px stagger, splitLine on axis 0 only — so a new axis never overlaps an existing one.
    const addAxis = (): void => set({ yAxes: [...axes, axisLayout(axes.length)] });
    const removeAxis = (i: number): void => {
        // JSON mode: `state.series` is empty — the payload owns the series, and the axes are DERIVED
        // 1:1 from the visible payload names (the modal axis effect rebuilds `yAxes` whenever the
        // visible set changes). Removing an axis config directly would leave `jsonSeriesStyle.yAxisIndex`
        // stale, so the builder clamps the orphaned series to axis 0 (the "wrong axis gone + line
        // lingers" chaos). The only sane "delete this axis" here is to HIDE its bound payload series
        // (jsonHidden, ADR-0011) — the axis effect then drops the axis automatically. Symmetric to the
        // history/live pair-delete below.
        if (state.mode === 'json') {
            const boundName = Object.entries(state.jsonSeriesStyle).find(([, m]) => m.yAxisIndex === i)?.[0];
            if (boundName && !state.jsonHidden.includes(boundName)) {
                set({ jsonHidden: [...state.jsonHidden, boundName] });
            } else {
                // No bound payload series (orphan axis, or already hidden) — just drop the config.
                set({ yAxes: axes.filter((_, idx) => idx !== i) });
            }
            return;
        }
        // History/live (ADR-0025): an axis is an independent citizen — deleting it NEVER deletes its
        // bound series. They rebind to a surviving axis of the same `format` (the unit proxy), else
        // axis 0 + an advisory unit-mismatch toast. Survivors re-index + pack. The dense-1:1 pair-
        // delete that used to live here is gone: the user deletes a series explicitly when they want
        // both gone (series-delete still orphan-cleans its axis).
        const deletedAxis = axes[i];
        const survivors = axes.filter((_a, idx) => idx !== i);
        const match = sameFormatSurvivor(deletedAxis?.format, survivors);
        const target = match ?? 0; // index in survivors = the new yAxisIndex
        if (match === null) {
            setToast(Generic.t('echarts_axis_rebind_unit_mismatch'));
        }
        set({
            yAxes: packStaggeredAxes(survivors),
            series: state.series.map(s => {
                const yi = s.yAxisIndex;
                if (typeof yi !== 'number') {
                    return s;
                }
                if (yi === i) {
                    return { ...s, yAxisIndex: target }; // rebind to the same-format survivor
                }
                return { ...s, yAxisIndex: yi > i ? yi - 1 : yi }; // re-index around the dropped axis
            }),
        });
    };

    const setMark = (i: number, patch: Partial<EchartsMarkLine>): void =>
        set({ markLines: state.markLines.map((m, idx) => (idx === i ? { ...m, ...patch } : m)) });
    const addMark = (): void =>
        // No explicit colour → inherits the theme divider token (ADR-0027), like the builder default.
        set({
            markLines: [...state.markLines, { id: nextStableId(), value: 0, label: '', dashed: true }],
        });
    const removeMark = (i: number): void => set({ markLines: state.markLines.filter((_, idx) => idx !== i) });

    return (
        <Box>
            <SubGroup
                title={Generic.t('echarts_axes')}
                hint={Generic.t('echarts_axes_hint')}
            >
                {axes.length === 0 && (
                    <Box
                        sx={{
                            mb: 1.5,
                            p: 1.5,
                            border: '1px dashed',
                            borderColor: 'divider',
                            borderRadius: 1,
                            textAlign: 'center',
                        }}
                    >
                        <Typography
                            variant="caption"
                            color="text.secondary"
                        >
                            {Generic.t('echarts_axes_empty')}
                        </Typography>
                    </Box>
                )}
                {/* The X-Karte is the manager's first card — the shared time axis (ADR-0035). It
                    is flat config: no delete, no reorder, no series binding; its colour inherits
                    the theme's label token (the axis belongs to no series). */}
                <XCard
                    x={state.xAxis}
                    open={xExpanded}
                    onToggle={() => setXExpanded(v => !v)}
                    onChange={patch => set({ xAxis: { ...state.xAxis, ...patch } })}
                    pickerCtx={pickerCtx}
                    fallbackColor={themeTokens.textSecondary}
                />
                {axes.map((a, i) => (
                    <AxisCard
                        key={a.id ?? i}
                        axis={a}
                        index={i}
                        total={axes.length}
                        open={!!expanded[i]}
                        onToggle={() => toggleCard(i)}
                        onChange={patch => setAxis(i, patch)}
                        onRemove={() => removeAxis(i)}
                        pickerCtx={pickerCtx}
                        seriesColor={boundAxisColor(i)}
                        seriesName={boundAxisName(i)}
                    />
                ))}
                <Button
                    size="small"
                    startIcon={<AddIcon />}
                    onClick={addAxis}
                >
                    {Generic.t('echarts_axis_add')}
                </Button>
            </SubGroup>

            <SubGroup title={Generic.t('echarts_zoom')}>
                <SwitchList>
                    <SwitchRow
                        label={Generic.t('echarts_zoom_slider')}
                        checked={state.dataZoomSlider}
                        onChange={v => set({ dataZoomSlider: v })}
                    />
                    <SwitchRow
                        label={Generic.t('echarts_zoom_inside')}
                        checked={state.dataZoomInside}
                        onChange={v => set({ dataZoomInside: v })}
                    />
                </SwitchList>
            </SubGroup>

            <SubGroup
                title={Generic.t('echarts_thresholds')}
                hint={Generic.t('echarts_thresholds_hint')}
            >
                {state.markLines.map((m, i) => (
                    <Box
                        key={m.id ?? i}
                        sx={{ border: 1, borderColor: 'divider', borderRadius: 1.5, p: 1.5, mb: 1 }}
                    >
                        <FieldGrid min={110}>
                            <NumberField
                                label={Generic.t('echarts_threshold_value')}
                                value={m.value}
                                onChange={v => setMark(i, { value: v })}
                            />
                            {axes.length >= 2 && (
                                <LabeledSelect
                                    label={Generic.t('echarts_threshold_axis')}
                                    value={String(Math.min(Math.max(m.yAxisIndex ?? 0, 0), axes.length - 1))}
                                    onChange={v => setMark(i, { yAxisIndex: Number(v) })}
                                    options={axes.map(
                                        (ax, ai) =>
                                            [String(ai), ax.name ? `${ai + 1} · ${ax.name}` : String(ai + 1)] as [
                                                string,
                                                string,
                                            ],
                                    )}
                                />
                            )}
                            <TextField2
                                label={Generic.t('echarts_threshold_label')}
                                value={m.label ?? ''}
                                onChange={v => setMark(i, { label: v })}
                            />
                            <Box>
                                <FieldLabel>{Generic.t('echarts_editor_series_color')}</FieldLabel>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                    <Box sx={{ flex: 1, minWidth: 0 }}>
                                        <ColorField
                                            value={m.color}
                                            fallback={themeTokens.divider}
                                            onChange={v => setMark(i, { color: v ?? undefined })}
                                            ctx={pickerCtx}
                                        />
                                    </Box>
                                    <IconButton
                                        size="small"
                                        onClick={() => removeMark(i)}
                                        aria-label={Generic.t('echarts_editor_series_remove')}
                                        sx={{ flexShrink: 0 }}
                                    >
                                        <DeleteIcon fontSize="small" />
                                    </IconButton>
                                </Box>
                            </Box>
                        </FieldGrid>
                        <SwitchList sx={{ mt: 1.5 }}>
                            <SwitchRow
                                label={Generic.t('echarts_threshold_dashed')}
                                checked={m.dashed ?? false}
                                onChange={v => setMark(i, { dashed: v })}
                            />
                        </SwitchList>
                    </Box>
                ))}
                <Button
                    size="small"
                    startIcon={<AddIcon />}
                    onClick={addMark}
                >
                    {Generic.t('echarts_threshold_add')}
                </Button>
            </SubGroup>
            <Snackbar
                open={!!toast}
                autoHideDuration={5000}
                onClose={() => setToast(null)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert
                    severity="warning"
                    variant="filled"
                    onClose={() => setToast(null)}
                    sx={{ alignItems: 'center' }}
                >
                    {toast}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default AxesZoomSection;
