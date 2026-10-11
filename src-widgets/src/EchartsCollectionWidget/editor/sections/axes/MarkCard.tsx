/**
 * One marking card of the „Markierungen" SubGroup in Axes & Zoom (parity Build C, ADR-0061
 * stage 1 + ADR-0062 stage 2; extracted per the ADR-0051 concept-name convention).
 *
 * @module EchartsCollectionWidget/editor/sections/axes/MarkCard
 * @remarks
 * The shared EditorCard shell (swatch = effective line colour, bounds/label title, axis
 * subtitle, delete) with the body in SubGroup rows — Grenzwert (upper/lower as number-or-OID
 * bound fields + target axis + the band fill while BOTH bounds are authored), Stil (colour,
 * width, shadow, 3-way line style), and ONE label SubGroup per authored bound (ADR-0081: text
 * + position + X offset + size + colour; a cluster renders only while its bound exists — the
 * band-fill gating idiom — and its tuning is never text-gated: it also styles the edge's
 * Wert-Fallback value label). The ANCHOR is the Y-axis (our model); the emit hangs the
 * markLine/markArea on the first series of that axis (builder-side, ADR-0023). Both bounds
 * resolved ⇒ a band WITH its two styled edge lines, each carrying its OWN label cluster
 * (ADR-0076/0081 — every style/label field works for bands too), one ⇒ a lone line
 * (ADR-0062 — the resolution itself is pipeline-side; the card only authors). Purely
 * presentational: every write goes through the onChange patch / onRemove callbacks; the
 * section owns the list.
 */
import { useState, type FC } from 'react';
import { Box, IconButton, TextField } from '@mui/material';
import { DeleteOutline as DeleteIcon, Search as SearchIcon } from '@mui/icons-material';
import { SelectID, type Connection, type IobTheme } from '@iobroker/adapter-react-v5';

import Generic from '../../../../Generic';
import {
    EditorCard,
    FieldGrid,
    FieldLabel,
    LabeledSelect,
    OptionalSliderField,
    SubGroup,
    TextField2,
} from '../../../../components/controls';
import ColorField from '../../colorFields';
import { displayAxisIndex } from '../../axisLayout';
import {
    DEFAULT_MARK_FILL,
    edgeLabelOf,
    markLabelColorOf,
    markLineStyleOf,
    parseMarkBound,
    type EchartsMarkEdge,
} from '../../../presentation';
import type { OidPickerCtx } from '../../OidPicker';
import type { EchartsMarkLabelPosition, EchartsMarkLine } from '../../../../types/field-definitions/echarts-fields';

/** The 12 echarts-native label places (ADR-0061) → select options with their i18n labels. */
const LABEL_POSITIONS: ReadonlyArray<[EchartsMarkLabelPosition, string]> = [
    ['start', Generic.t('echarts_mark_pos_start')],
    ['middle', Generic.t('echarts_mark_pos_middle')],
    ['end', Generic.t('echarts_mark_pos_end')],
    ['insideStart', Generic.t('echarts_mark_pos_inside_start')],
    ['insideStartTop', Generic.t('echarts_mark_pos_inside_start_top')],
    ['insideStartBottom', Generic.t('echarts_mark_pos_inside_start_bottom')],
    ['insideMiddle', Generic.t('echarts_mark_pos_inside_middle')],
    ['insideMiddleTop', Generic.t('echarts_mark_pos_inside_middle_top')],
    ['insideMiddleBottom', Generic.t('echarts_mark_pos_inside_middle_bottom')],
    ['insideEnd', Generic.t('echarts_mark_pos_inside_end')],
    ['insideEndTop', Generic.t('echarts_mark_pos_inside_end_top')],
    ['insideEndBottom', Generic.t('echarts_mark_pos_inside_end_bottom')],
];

/**
 * A marking bound field (ADR-0062): a number OR an OID in one input — a pure-numeric entry
 * stores the NUMBER, anything else stays a string the pipeline resolves via subscription. The
 * "…" button opens the SelectID dialog (the OidPicker idiom inline; marks accept any state with
 * a current value, so no history filter).
 */
const BoundField: FC<{
    label: string;
    value: number | string | undefined;
    onChange: (value: number | string | undefined) => void;
    ctx: OidPickerCtx;
}> = ({ label, value, onChange, ctx }) => {
    const [open, setOpen] = useState(false);
    return (
        <Box>
            <FieldLabel>{label}</FieldLabel>
            <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center', width: '100%' }}>
                <TextField
                    size="small"
                    placeholder="20 / oid"
                    value={value === undefined ? '' : String(value)}
                    onChange={e => onChange(parseMarkBound(e.target.value))}
                    fullWidth
                />
                <IconButton
                    size="small"
                    onClick={() => setOpen(true)}
                    aria-label={Generic.t('echarts_editor_browse_oid')}
                >
                    <SearchIcon fontSize="small" />
                </IconButton>
                {open && (
                    <SelectID
                        socket={ctx.socket as unknown as Connection}
                        theme={ctx.theme as unknown as IobTheme}
                        themeType={ctx.themeType}
                        selected={typeof value === 'string' ? value : ''}
                        title={label}
                        onClose={() => setOpen(false)}
                        onOk={(selected): void => {
                            onChange(typeof selected === 'string' ? selected : (selected?.[0] ?? ''));
                            setOpen(false);
                        }}
                    />
                )}
            </Box>
        </Box>
    );
};

/**
 * One edge's label cluster (ADR-0081): the text plus the four tuning fields — rendered while
 * the edge's BOUND is authored (the band-fill gating idiom, applied by the caller). The tuning
 * is NOT text-gated: it also styles the Wert-Fallback (a textless edge shows its bound value
 * as a fully styled label, builder-side).
 */
const EdgeLabelFields: FC<{
    edge: EchartsMarkEdge;
    m: EchartsMarkLine;
    onChange: (patch: Partial<EchartsMarkLine>) => void;
    pickerCtx: OidPickerCtx;
    textSecondary: string;
}> = ({ edge, m, onChange, pickerCtx, textSecondary }) => {
    const isUpper = edge === 'upper';
    // The ONE per-edge selector (shared with the builder) reads the values; the onChange
    // ternaries below write the patch KEYS, which the selector deliberately does not model.
    const cluster = edgeLabelOf(m, edge);
    return (
        <>
            <TextField2
                label={Generic.t('echarts_threshold_label')}
                value={cluster.text ?? ''}
                onChange={v => onChange(isUpper ? { labelUpper: v } : { labelLower: v })}
            />
            <LabeledSelect
                label={Generic.t('echarts_mark_label_position')}
                value={cluster.position ?? ''}
                onChange={v =>
                    onChange(
                        isUpper
                            ? { labelUpperPosition: (v || undefined) as EchartsMarkLabelPosition }
                            : { labelLowerPosition: (v || undefined) as EchartsMarkLabelPosition },
                    )
                }
                options={[['', Generic.t('echarts_mark_label_position_default')], ...LABEL_POSITIONS]}
            />
            <OptionalSliderField
                label={Generic.t('echarts_mark_label_offset')}
                value={cluster.offset}
                min={-100}
                max={100}
                fallback={0}
                onChange={v => onChange(isUpper ? { labelUpperOffset: v } : { labelLowerOffset: v })}
            />
            <OptionalSliderField
                label={Generic.t('echarts_mark_label_size')}
                value={cluster.size}
                min={6}
                max={32}
                fallback={12}
                onChange={v => onChange(isUpper ? { labelUpperSize: v } : { labelLowerSize: v })}
            />
            <Box>
                <FieldLabel>{Generic.t('echarts_mark_label_color')}</FieldLabel>
                <ColorField
                    value={isUpper ? m.labelUpperColor : m.labelLowerColor}
                    // The ONE ADR 0080 resolver, shared with the builder — the card never
                    // previews a colour the chart does not draw.
                    fallback={markLabelColorOf(m, edge, textSecondary)}
                    onChange={v =>
                        onChange(isUpper ? { labelUpperColor: v ?? undefined } : { labelLowerColor: v ?? undefined })
                    }
                    ctx={pickerCtx}
                />
            </Box>
        </>
    );
};
/** One marking card: the shared EditorCard shell, body in SubGroups (Grenzwert/Stil/label-per-bound). */
const MarkCard: FC<{
    mark: EchartsMarkLine;
    /** Axis select options ([value, label]) — empty when the chart has only axis 0. */
    axisOptions: ReadonlyArray<[string, string]>;
    open: boolean;
    onToggle: () => void;
    onChange: (patch: Partial<EchartsMarkLine>) => void;
    onRemove: () => void;
    pickerCtx: OidPickerCtx;
    /** Theme divider token — the line colour's inherit value (the builder's default). */
    dividerColor: string;
    /**
     * Theme axis-text token — the LABEL colour's inherit fallback (ADR 0080: the swatch shows
     * exactly what the builder emits — marking colour first, this token beneath).
     */
    textSecondary: string;
}> = ({ mark: m, axisOptions, open, onToggle, onChange, onRemove, pickerCtx, dividerColor, textSecondary }) => {
    // The ONE legacy-tolerance resolver (shared with the builder — the select must never show a
    // different effective style than the chart draws).
    const lineStyleEffective = markLineStyleOf(m);
    const hasBothBounds = m.upper !== undefined && m.lower !== undefined;
    // Collapsed title: an edge label (upper first), else the authored bounds (a band shows its span).
    const boundsTitle =
        m.upper === undefined && m.lower === undefined
            ? '—'
            : hasBothBounds
              ? `${m.lower} … ${m.upper}`
              : String(m.upper ?? m.lower);
    // The DISPLAY clamp mirrors the builder (`yi >= total ? 0 : yi` — B4, the F7/Q6 idiom): the
    // select AND the collapsed subtitle read the same clamped value, so they can never name
    // different axes; the STORED value stays untouched (no silent rewrite). The old
    // `Math.min(…, length-1)` clamp showed the LAST axis while the chart clamped to axis 1.
    const shownAxis = displayAxisIndex(m.yAxisIndex, axisOptions.length);

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
                        // Effective line colour: explicit wins, else the divider token (the
                        // builder's `m.color ?? divider`, ADR-0027).
                        backgroundColor: m.color ?? dividerColor,
                        border: '1px solid',
                        borderColor: 'divider',
                        flexShrink: 0,
                    }}
                />
            }
            title={m.labelUpper || m.labelLower || boundsTitle}
            subtitle={
                axisOptions.length > 1
                    ? (axisOptions.find(([v]) => Number(v) === shownAxis)?.[1] ?? axisOptions[0]?.[1])
                    : undefined
            }
            actions={
                <IconButton
                    size="small"
                    onClick={onRemove}
                    aria-label={Generic.t('echarts_mark_delete')}
                    sx={{ p: 0.25 }}
                >
                    <DeleteIcon fontSize="small" />
                </IconButton>
            }
        >
            <SubGroup title={Generic.t('echarts_mark_grp_limit')}>
                <FieldGrid min={130}>
                    <BoundField
                        label={Generic.t('echarts_mark_upper')}
                        value={m.upper}
                        onChange={v => onChange({ upper: v })}
                        ctx={pickerCtx}
                    />
                    <BoundField
                        label={Generic.t('echarts_mark_lower')}
                        value={m.lower}
                        onChange={v => onChange({ lower: v })}
                        ctx={pickerCtx}
                    />
                    {axisOptions.length > 1 && (
                        <LabeledSelect
                            label={Generic.t('echarts_threshold_axis')}
                            value={String(shownAxis)}
                            onChange={v => onChange({ yAxisIndex: Number(v) })}
                            options={axisOptions}
                        />
                    )}
                    {/* The band fill exists only while BOTH bounds are authored (upper AND
                     lower ⇒ band); with one bound the marking is a line and fill is inert. */}
                    {hasBothBounds && (
                        <OptionalSliderField
                            label={Generic.t('echarts_mark_fill')}
                            value={m.fill}
                            min={0}
                            max={1}
                            step={0.05}
                            fallback={DEFAULT_MARK_FILL}
                            onChange={v => onChange({ fill: v })}
                        />
                    )}
                </FieldGrid>
            </SubGroup>
            <SubGroup title={Generic.t('echarts_mark_grp_style')}>
                <FieldGrid min={130}>
                    <Box>
                        <FieldLabel>{Generic.t('echarts_editor_series_color')}</FieldLabel>
                        <ColorField
                            value={m.color}
                            fallback={dividerColor}
                            onChange={v => onChange({ color: v ?? undefined })}
                            ctx={pickerCtx}
                        />
                    </Box>
                    <LabeledSelect
                        label={Generic.t('echarts_series_line_style')}
                        value={lineStyleEffective}
                        onChange={v => onChange({ lineStyle: v as EchartsMarkLine['lineStyle'] })}
                        options={[
                            ['solid', Generic.t('echarts_style_solid')],
                            ['dashed', Generic.t('echarts_style_dashed')],
                            ['dotted', Generic.t('echarts_style_dotted')],
                        ]}
                    />
                    <OptionalSliderField
                        label={Generic.t('echarts_series_line_width')}
                        value={m.width}
                        min={0.5}
                        max={8}
                        step={0.5}
                        fallback={2}
                        onChange={v => onChange({ width: v })}
                    />
                    <OptionalSliderField
                        label={Generic.t('echarts_series_shadow')}
                        value={m.shadow}
                        min={0}
                        max={30}
                        fallback={0}
                        onChange={v => onChange({ shadow: v })}
                    />
                </FieldGrid>
            </SubGroup>
            {/* One label SubGroup per AUTHORED bound (ADR-0081) — the band-fill gating idiom:
                 a lone line shows only its own edge's cluster, no dead fields. The tuning is
                 never text-gated: it also styles the textless edge's Wert-Fallback label. */}
            {m.upper !== undefined && (
                <SubGroup title={Generic.t('echarts_mark_grp_label_upper')}>
                    <FieldGrid min={130}>
                        <EdgeLabelFields
                            edge="upper"
                            m={m}
                            onChange={onChange}
                            pickerCtx={pickerCtx}
                            textSecondary={textSecondary}
                        />
                    </FieldGrid>
                </SubGroup>
            )}
            {m.lower !== undefined && (
                <SubGroup title={Generic.t('echarts_mark_grp_label_lower')}>
                    <FieldGrid min={130}>
                        <EdgeLabelFields
                            edge="lower"
                            m={m}
                            onChange={onChange}
                            pickerCtx={pickerCtx}
                            textSecondary={textSecondary}
                        />
                    </FieldGrid>
                </SubGroup>
            )}
        </EditorCard>
    );
};

export default MarkCard;
