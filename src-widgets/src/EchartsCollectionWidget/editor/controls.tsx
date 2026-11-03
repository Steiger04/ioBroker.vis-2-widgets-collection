/**
 * The top-row master selectors of the v2 echarts configurator.
 *
 * @module EchartsCollectionWidget/editor/controls
 * @remarks
 * The generic control kit (FieldLabel, FieldGrid, SwitchList, SliderField, …) moved to
 * `components/controls` (ADR-0020) so every configurator shares it — this module keeps only
 * the echarts-specific selectors. `ChartTypePicker` is the real family switch (replaces the v1
 * decorative disabled toggle); `ModeSelect` keeps the global data-mode toggle.
 */
import type { FC } from 'react';
import { Box, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';

import Generic from '../../Generic';
import { FieldLabel } from '../../components/controls';
import { chartTypePickerEntries } from '../families/editorial';
import { applyStructureEvent, type StructureAdvisory, type StructureEvent } from './structureEvents';
import type { SetEditor, EditorState } from './editorState';
import type { EchartsChartType, EchartsJsonKind, EchartsMode } from '../../types/field-definitions/echarts-fields';

// ── master selectors (top row) ────────────────────────────────────

// The primary chart-type selector is a 4-type grid of the concrete chart types (ADR-0008 r4:
// 'area' removed — area is a per-series fill mode, not a chart type). It is the single,
// authoritative type choice: it sets the family (derived) and the type every non-overridden
// series inherits. Since ADR-0083 the entries come from the family profiles' picker lists
// (concatenated in registry order); the glyphs are hand-drawn monochrome SVG at currentColor
// so they theme with the editor and stay quiet (the one signature element).
const CHART_TYPES = chartTypePickerEntries();

/** The chart-type glyph outside the picker (e.g. the modal title) — quiet, at currentColor. */
export const ChartTypeGlyph: FC<{ chartType: EchartsChartType }> = ({ chartType }) => (
    <Box
        component="span"
        sx={{ display: 'inline-flex', color: 'text.secondary', flexShrink: 0 }}
    >
        {CHART_TYPES.find(t => t.value === chartType)?.icon}
    </Box>
);

/**
 * The primary selector — a grid of the four concrete chart types. The value is the concrete
 * `chartType` (the editor normalises a legacy `'cartesian'` or `'area'` to a concrete type on
 * load, so one of the four is always highlighted).
 */
/**
 * The field ownership of the three boundary pickers (ADR-0049 slice): the crossing is a
 * structure event (ADR-0099) — its view reads the structural fields, and the reset patch
 * writes the whole data path incl. the Zuordnung paths (ADR-0067/0075).
 */
export type BoundaryPickerSlice = Pick<
    EditorState,
    | 'chartType'
    | 'mode'
    | 'jsonKind'
    | 'series'
    | 'yAxes'
    | 'markLines'
    | 'axisSlotMemory'
    | 'jsonSeriesStyle'
    | 'jsonHidden'
    | 'jsonOid'
    | 'jsonRowPath'
    | 'jsonXPath'
>;
/** The chart-type picker's field ownership — the family-boundary crossing. */
export type ChartTypePickerSlice = BoundaryPickerSlice;

/** The props every boundary picker shares. */
interface BoundaryPickerProps {
    state: BoundaryPickerSlice;
    set: SetEditor<BoundaryPickerSlice>;
    /** The live payload names (serien-förmig JSON) — the loss counts the visible ones. */
    payloadNames?: readonly string[];
    /** The crossing's notice (the data-path loss) — rendered by the modal's notice host. */
    onAdvisory?: (advisory: StructureAdvisory) => void;
}

/** Run a picker's structure event: flip (+ reset) in ONE set(), the loss handed on. */
const applyPick = ({ state, set, payloadNames = [], onAdvisory }: BoundaryPickerProps, event: StructureEvent): void => {
    const r = applyStructureEvent({ ...state, payloadNames }, event);
    if (r.patch) {
        set(r.patch);
    }
    if (r.advisory && onAdvisory) {
        onAdvisory(r.advisory);
    }
};

export const ChartTypePicker: FC<BoundaryPickerProps> = props => (
    <Box>
        <FieldLabel>{Generic.t('echarts_type')}</FieldLabel>
        <ToggleButtonGroup
            exclusive
            size="small"
            value={props.state.chartType}
            onChange={(_, v: EchartsChartType | null) => {
                if (!v) {
                    return;
                }
                // Family boundary (ADR-0067): cartesian↔pie resets the whole data path in the
                // same step; line↔bar↔scatter is a plain flip — the changeFamily event decides.
                applyPick(props, { type: 'changeFamily', to: v });
            }}
            // B9 (review 2026-11-03): four columns — all four types fit one row at the 440 px rail
            sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0.5, width: '100%' }}
        >
            {CHART_TYPES.map(({ value, label, icon }) => (
                <ToggleButton
                    key={value}
                    value={value}
                    sx={{ flexDirection: 'column', gap: 0.25, py: 0.75, textTransform: 'none' }}
                >
                    {icon}
                    <Typography
                        component="span"
                        variant="caption"
                    >
                        {Generic.t(label)}
                    </Typography>
                </ToggleButton>
            ))}
        </ToggleButtonGroup>
    </Box>
);

/** Per-widget data mode (chart-global, not per-series). */
/** The mode select's field ownership — the JSON-boundary crossing. */
export type ModeSelectSlice = BoundaryPickerSlice;

export const ModeSelect: FC<BoundaryPickerProps> = props => (
    <Box>
        <FieldLabel>{Generic.t('echarts_editor_data_mode')}</FieldLabel>
        <ToggleButtonGroup
            exclusive
            size="small"
            value={props.state.mode}
            onChange={(_, v: EchartsMode | null) => {
                if (!v) {
                    return;
                }
                // JSON boundary (ADR-0067): into or out of JSON resets the whole data path in the
                // same step (one undo step restores both).
                applyPick(props, { type: 'changeMode', to: v });
            }}
        >
            <ToggleButton value="history">{Generic.t('echarts_mode_history')}</ToggleButton>
            <ToggleButton value="json">{Generic.t('echarts_mode_json')}</ToggleButton>
        </ToggleButtonGroup>
    </Box>
);

/** The payload-family select's field ownership — the payload-family crossing (ADR-0075). */
export type JsonKindSelectSlice = BoundaryPickerSlice;

/**
 * The payload-family toggle (ADR-0075): pinned UNDER the mode toggle, rendered only while the
 * json mode is active (the family is a property OF the json data mode, never a third mode —
 * hidden entirely otherwise).
 */
export const JsonKindSelect: FC<BoundaryPickerProps> = props =>
    props.state.mode === 'json' ? (
        <Box>
            <FieldLabel>{Generic.t('echarts_editor_json_kind')}</FieldLabel>
            <ToggleButtonGroup
                exclusive
                size="small"
                value={props.state.jsonKind}
                onChange={(_, v: EchartsJsonKind | null) => {
                    if (!v) {
                        return;
                    }
                    // Payload-family boundary (ADR-0075): the derived data path falls, jsonOid
                    // stays (the same state, read the other way) — one step.
                    applyPick(props, { type: 'changeJsonKind', to: v });
                }}
            >
                <ToggleButton value="series">{Generic.t('echarts_json_kind_series')}</ToggleButton>
                <ToggleButton value="table">{Generic.t('echarts_json_kind_table')}</ToggleButton>
            </ToggleButtonGroup>
        </Box>
    ) : null;

// ── position grid (ADR-0021) ──────────────────────────────────────

/**
 * The nine 3×3 grid positions in row-order with their i18n labels — the shared option table of
 * every 9-position {@link PositionGrid} consumer (Legend ADR-0021, Toolbox ADR-0045; the Title
 * keeps its own 6-entry table — its grid is 3×2).
 */
export const GRID9_POSITIONS: ReadonlyArray<[string, string]> = [
    ['topLeft', Generic.t('echarts_pos_top_left')],
    ['topCenter', Generic.t('echarts_pos_top_center')],
    ['topRight', Generic.t('echarts_pos_top_right')],
    ['middleLeft', Generic.t('echarts_pos_middle_left')],
    ['middleCenter', Generic.t('echarts_pos_middle_center')],
    ['middleRight', Generic.t('echarts_pos_middle_right')],
    ['bottomLeft', Generic.t('echarts_pos_bottom_left')],
    ['bottomCenter', Generic.t('echarts_pos_bottom_center')],
    ['bottomRight', Generic.t('echarts_pos_bottom_right')],
];

// The one signature control of the Title/Legend sections (ADR-0021): a 3-column grid of position
// glyphs — a frame with a dot at the chosen corner/edge/centre. Language-neutral (the glyph IS the
// label; words ride only as the button aria-label/title), scannable at 6/9 options where a dropdown
// is not, and it mirrors the ChartTypePicker's 3-column glyph-grid idiom so it reads as the same
// editor, not a new aesthetic.
const PositionGlyph: FC<{ pos: string }> = ({ pos }) => {
    const cx = pos.includes('Left') ? 5 : pos.includes('Right') ? 19 : 12;
    const cy = pos.includes('top') ? 5 : pos.includes('bottom') ? 19 : 12;
    return (
        <svg
            viewBox="0 0 24 24"
            width={18}
            height={18}
            fill="none"
            stroke="currentColor"
            strokeWidth={1.4}
            aria-hidden
        >
            <rect
                x={2.5}
                y={2.5}
                width={19}
                height={19}
                rx={2}
            />
            <circle
                cx={cx}
                cy={cy}
                r={2.4}
                fill="currentColor"
                stroke="none"
            />
        </svg>
    );
};

/**
 * A 3-column position selector rendered as a glyph grid (the Title/Legend position control,
 * ADR-0021). `options` is the active subset in row-order: title passes 6 (a 3×2 grid), legend 9
 * (a 3×3 grid). The glyph is derived from the value; the human label rides as the aria-label.
 */
export const PositionGrid: FC<{
    label: string;
    value: string;
    onChange: (value: string) => void;
    options: ReadonlyArray<[string, string]>;
    disabled?: boolean;
}> = ({ label, value, onChange, options, disabled }) => (
    <Box>
        <FieldLabel>{label}</FieldLabel>
        <ToggleButtonGroup
            exclusive
            size="small"
            value={value}
            onChange={(_, v: string | null) => v && onChange(v)}
            sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0.5, width: '100%' }}
        >
            {options.map(([v, l]) => (
                <ToggleButton
                    key={v}
                    value={v}
                    disabled={disabled}
                    aria-label={l}
                    title={l}
                    sx={{ py: 0.5, px: 0, color: 'text.secondary' }}
                >
                    <PositionGlyph pos={v} />
                </ToggleButton>
            ))}
        </ToggleButtonGroup>
    </Box>
);

// ── font weight / style selects (ADR-0029) ────────────────────────

// The ECharts `textStyle.fontWeight` doc set, de-duplicated: the four named weights plus the
// numeric CSS grades, but 400/700 are dropped (they ARE normal/bold). Title + Legend share this one
// list. Values are strings (the select is string-based); `editor/fontOptions` coerces back to numbers.
const WEIGHT_OPTIONS_RAW: ReadonlyArray<[string, string]> = [
    ['normal', 'echarts_weight_normal'],
    ['bold', 'echarts_weight_bold'],
    ['bolder', 'echarts_weight_bolder'],
    ['lighter', 'echarts_weight_lighter'],
    ['100', 'echarts_weight_100'],
    ['200', 'echarts_weight_200'],
    ['300', 'echarts_weight_300'],
    ['500', 'echarts_weight_500'],
    ['600', 'echarts_weight_600'],
    ['800', 'echarts_weight_800'],
    ['900', 'echarts_weight_900'],
];

/** Font-weight select options — `[value, translated label]`. */
export const FONT_WEIGHT_OPTIONS: ReadonlyArray<[string, string]> = WEIGHT_OPTIONS_RAW.map(([v, key]) => [
    v,
    Generic.t(key),
]);

// The three ECharts `textStyle.fontStyle` doc values; `oblique` is doc-faithful though ≈ italic.
const STYLE_OPTIONS_RAW: ReadonlyArray<[string, string]> = [
    ['normal', 'echarts_font_style_normal'],
    ['italic', 'echarts_font_style_italic'],
    ['oblique', 'echarts_font_style_oblique'],
];

/** Font-style select options — `[value, translated label]`. */
export const FONT_STYLE_OPTIONS: ReadonlyArray<[string, string]> = STYLE_OPTIONS_RAW.map(([v, key]) => [
    v,
    Generic.t(key),
]);
