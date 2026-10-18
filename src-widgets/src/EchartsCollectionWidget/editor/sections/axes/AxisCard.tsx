/**
 * One Y-axis card of the Axis manager (ADR-0012; body in Karten-Tabs per ADR-0073 — the
 * former ADR-0019 Sub-groups became tabs; extracted from AxesZoomSection per ADR-0051:
 * concept name = file name).
 *
 * @module EchartsCollectionWidget/editor/sections/axes/AxisCard
 * @remarks
 * The shared EditorCard shell (swatch = effective axis colour, place stepper ▲▼ + `Seite ·
 * Platz/Total` subtitle + delete, ADR-0079) with
 * the body in Karten-Tabs (ADR-0073) — basis (name/position/colour/offset), values (min/max/format,
 * advisory min≥max), scale & ticks (`alignTicks` only on follower axes, axis 0 is the reference,
 * ADR-0034, + splitNumber/minInterval), presentation (name rotation/placement/gap) — plus the
 * per-axis raw escape hatch in Erweitert (ADR-0037). Purely presentational: every write goes
 * through the onChange patch / onRemove callbacks; the section owns the orchestration.
 */
import type { FC } from 'react';
import { Box, IconButton } from '@mui/material';
import { ArrowDownward as DownIcon, ArrowUpward as UpIcon, DeleteOutline as DeleteIcon } from '@mui/icons-material';

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
import GridStyleFields from './GridStyleFields';
import type { OidPickerCtx } from '../../OidPicker';
import type { EchartsAxisConfig } from '../../../../types/field-definitions/echarts-fields';
import { alignTicksDisabledByOverride, displayPosition, type AxisPlaceSight } from '../../axisLayout';
import RawJsonSection from '../RawJsonSection';
import { AXIS_CATALOG } from '../../axisTemplates';
import { snippetPatch } from '../../snippetComposition';

/** One Y-axis card: the shared EditorCard shell, body in Karten-Tabs (ADR-0073). */
const AxisCard: FC<{
    axis: EchartsAxisConfig;
    index: number;
    /**
     * The axis' EMITTED index (Q5): its rank among the axes in array order — the position the
     * builder emits. The alignTicks gates follow this, not the configured index: the reference
     * axis is the first one.
     */
    emittedIndex?: number;
    /** The number of axes — the emitted total the alignTicks gates read (Q5). */
    emittedTotal: number;
    /**
     * The axis' **Achsen-Platz** sight (ADR-0079): its 1-based depth rank within its side
     * (1 = closest to the plot) + the side's total — one struct, straight from
     * {@link axisPlace}. Drives the header stepper's grey states and the
     * `Seite · Platz/Total` subtitle; undefined leaves the bare side label.
     */
    sight?: AxisPlaceSight;
    open: boolean;
    onToggle: () => void;
    onChange: (patch: Partial<EchartsAxisConfig>) => void;
    /** Move one place within the side (−1 nearer, +1 farther — insert-shift, ADR-0079). */
    onMovePlace?: (dir: -1 | 1) => void;
    onRemove: () => void;
    pickerCtx: OidPickerCtx;
    /** Effective colour of the first bound series — the axis-colour default shown in the swatch (ADR-0018). */
    seriesColor?: string;
    /** Effective name of the first bound series — the axis-name default shown as placeholder (ADR-0018). */
    seriesName?: string;
    /** Theme divider token — the grid colour's inherit value (the theme's splitline floor). */
    dividerColor: string;
}> = ({
    axis: a,
    index: i,
    emittedIndex,
    emittedTotal,
    sight,
    open,
    onToggle,
    onChange,
    onMovePlace,
    onRemove,
    pickerCtx,
    seriesColor,
    seriesName,
    dividerColor,
}) => {
    const axisInvalid = typeof a.min === 'number' && typeof a.max === 'number' && a.min >= a.max;
    // alignTicks is an explicit per-axis opt-in (ADR-0034): off by default, no smart-default. Only
    // meaningful with 2+ EMITTED axes, and only on an emitted FOLLOWER (rank > 0): echarts aligns
    // followers against the FIRST EMITTED value axis, so the gates read the emitted index/total
    // (Q5), not the configured ones.
    const alignTicksEffective = a.alignTicks ?? false;
    // The emitted follower predicate (Q5): rank > 0 among ≥2 axes — the alignTicks switch and its
    // override warning share it; the reference (rank 0) gets no switch.
    const isEmittedFollower = emittedTotal > 1 && (emittedIndex ?? -1) > 0;
    // echarts ignores alignTicks when the tick interval is fixed (min/max/splitNumber/minInterval);
    // surface that as a non-blocking warning on an emitted follower axis that opted in (ADR-0034).
    const alignConflict = isEmittedFollower && alignTicksEffective && alignTicksDisabledByOverride(a);
    // axisTick defaults to shown (echarts default); the switch reflects it.
    const axisTickEffective = a.axisTick ?? true;
    // Splitlines default on for the emitted rank-0 axis only (ADR-0012) — the grid colour rides
    // this state. Q5's sight applies here too: the builder resolves the default at the EMITTED
    // index (cartesian buildYAxisEntry), so the card must show what the chart draws.
    const splitLineEffective = a.splitLine ?? emittedIndex === 0;

    // The side label + the ADR-0079 subtitle: `Seite · Platz/Total` once the section passes the
    // place sight — the whole side ordering readable with every card collapsed. The i18n pattern
    // carries the separator/order; the t-stub in tests returns the raw key (no placeholders).
    const sideLabel =
        displayPosition(a, i) === 'left' ? Generic.t('echarts_axis_left') : Generic.t('echarts_axis_right');
    const subtitle = sight
        ? Generic.t('echarts_axis_place_subtitle')
              .replace('{side}', sideLabel)
              .replace('{place}', String(sight.place))
              .replace('{total}', String(sight.sideTotal))
        : sideLabel;
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
            title={
                <Box
                    component="span"
                    sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75, minWidth: 0 }}
                >
                    {a.name || seriesName || `Achse ${i + 1}`}
                </Box>
            }
            subtitle={subtitle}
            actions={
                <>
                    {/* The stepper's grey states (ADR-0079): at the place bounds and while the
                        axis is alone on its side — mute everywhere, the aria-labels stay set
                        (no tooltips by decision). */}
                    <IconButton
                        size="small"
                        disabled={!sight || sight.sideTotal < 2 || sight.place <= 1}
                        onClick={() => onMovePlace?.(-1)}
                        aria-label={Generic.t('echarts_axis_move_up')}
                        sx={{ p: 0.25 }}
                    >
                        <UpIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                        size="small"
                        disabled={!sight || sight.sideTotal < 2 || sight.place >= sight.sideTotal}
                        onClick={() => onMovePlace?.(1)}
                        aria-label={Generic.t('echarts_axis_move_down')}
                        sx={{ p: 0.25 }}
                    >
                        <DownIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                        size="small"
                        onClick={onRemove}
                        aria-label={Generic.t('echarts_axis_delete')}
                        sx={{ p: 0.25 }}
                    >
                        <DeleteIcon fontSize="small" />
                    </IconButton>
                </>
            }
        >
            {/* Karten-Tabs (ADR-0073): Basis | Werte | Skala | Darstellung | Erweitert —
                the former Sub-groups become tabs; the raw escape hatch lands in Erweitert.
                The card header (swatch, position subtitle, delete) stays outside. */}
            <SectionTabs
                tabs={[
                    { key: 'basis', label: Generic.t('echarts_grp_basis') },
                    { key: 'values', label: Generic.t('echarts_tab_values') },
                    { key: 'scale', label: Generic.t('echarts_grp_scale_ticks') },
                    { key: 'presentation', label: Generic.t('echarts_grp_presentation') },
                    { key: 'advanced', label: Generic.t('echarts_tab_advanced') },
                ]}
            >
                <Box>
                    <FieldGrid>
                        {/* '' → undefined so a cleared name inherits the bound series' name instead of
                        freezing it out (cartesian builder treats '' as unset). */}
                        <TextField2
                            label={Generic.t('echarts_axis_name')}
                            value={a.name ?? ''}
                            placeholder={seriesName}
                            onChange={v => onChange({ name: v || undefined })}
                        />
                        {/* The side is fine-justure exactly like the offset beside it (ADR-0067: a
                        manual position survives until the next STRUCTURAL event — a flip itself
                        is not one, so the Q4 lock is reverted). A REAL flip re-staggers both
                        sides densely with the sides preserved (ADR-0028 flip semantics):
                        no collision with the axes already on the target side. `displayPosition`
                        is the same index-aware default the builder emits (ADR-0012). */}
                        <LabeledSelect
                            label={Generic.t('echarts_axis_position')}
                            value={displayPosition(a, i)}
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
                </Box>

                <Box>
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
                </Box>

                <Box>
                    <SwitchList sx={{ mb: 1.5 }}>
                        <SwitchRow
                            label={Generic.t('echarts_y_log')}
                            checked={a.log ?? false}
                            onChange={v => onChange({ log: v })}
                        />
                        <SwitchRow
                            label={Generic.t('echarts_axis_splitline')}
                            checked={splitLineEffective}
                            onChange={v => onChange({ splitLine: v })}
                        />
                        <SwitchRow
                            label={Generic.t('echarts_axis_scale')}
                            checked={a.scale ?? false}
                            onChange={v => onChange({ scale: v })}
                        />
                        {isEmittedFollower && (
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
                    {emittedTotal > 1 && <InfoBox text={Generic.t('echarts_axis_align_hint')} />}
                    {alignConflict && (
                        <InfoBox
                            tone="warning"
                            text={Generic.t('echarts_axis_align_conflict')}
                        />
                    )}
                    {/* Grid styling cluster (GridStyleFields — colour parity Build D, ADR-0055;
                    width + type ADR-0070 addendum 6), under this axis' splitlines switch. */}
                    {splitLineEffective && (
                        <GridStyleFields
                            color={a.gridColor ?? ''}
                            width={a.gridWidth}
                            lineType={a.gridType}
                            dividerColor={dividerColor}
                            ctx={pickerCtx}
                            onChange={onChange}
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
                        {/* Label size + tick colour (parity Build D): additive fine-tuning UNDER the
                        one-colour idiom — the axis colour keeps painting label colour + line; the
                        tick inherit swatch shows the line's effective colour. */}
                        <OptionalSliderField
                            label={Generic.t('echarts_axis_label_font_size')}
                            value={a.labelFontSize}
                            min={6}
                            max={32}
                            fallback={12}
                            onChange={v => onChange({ labelFontSize: v })}
                        />
                        <Box>
                            <FieldLabel>{Generic.t('echarts_axis_tick_color')}</FieldLabel>
                            <ColorField
                                value={a.tickColor ?? ''}
                                fallback={a.color ?? seriesColor ?? dividerColor}
                                onChange={v => onChange({ tickColor: v ?? undefined })}
                                ctx={pickerCtx}
                            />
                        </Box>
                    </FieldGrid>
                </Box>

                <Box>
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
                </Box>

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
            </SectionTabs>
        </EditorCard>
    );
};

export default AxisCard;
