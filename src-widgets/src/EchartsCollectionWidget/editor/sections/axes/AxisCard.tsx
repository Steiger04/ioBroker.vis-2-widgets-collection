/**
 * One Y-axis card of the Axis manager (ADR-0012; body in SubGroups per ADR-0019; extracted from
 * AxesZoomSection per ADR-0051: concept name = file name).
 *
 * @module EchartsCollectionWidget/editor/sections/axes/AxisCard
 * @remarks
 * The shared EditorCard shell (swatch = effective axis colour, position subtitle, delete) with
 * the body in SubGroups — basis (name/position/colour/offset), value range (min/max/format,
 * advisory min≥max), scale & ticks (`alignTicks` only on follower axes, axis 0 is the reference,
 * ADR-0034, + splitNumber/minInterval), presentation (name rotation/placement/gap) — plus the
 * per-axis raw escape hatch (ADR-0037). Purely presentational: every write goes through the
 * onChange patch / onRemove callbacks; the section owns the orchestration.
 */
import type { FC } from 'react';
import { Box, IconButton } from '@mui/material';
import { DeleteOutline as DeleteIcon } from '@mui/icons-material';

import Generic from '../../../../Generic';
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
} from '../../../../components/controls';
import ColorField from '../../colorFields';
import type { OidPickerCtx } from '../../OidPicker';
import type { EchartsAxisConfig } from '../../../../types/field-definitions/echarts-fields';
import { alignTicksDisabledByOverride } from '../../axisLayout';
import RawJsonSection from '../RawJsonSection';
import { AXIS_CATALOG } from '../../axisTemplates';
import { snippetPatch } from '../../snippetComposition';

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

export default AxisCard;
