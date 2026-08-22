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
import type React from 'react';
import { Box, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';

import Generic from '../../Generic';
import { FieldLabel } from '../../components/controls';
import type { SetEditor, EditorState } from './editorState';
import type { EchartsChartType, EchartsMode } from '../../types/field-definitions/echarts-fields';

// ── master selectors (top row) ────────────────────────────────────

// The primary chart-type selector is a 5-icon grid of the concrete chart types (ADR-0008 r4:
// 'area' removed — area is a per-series fill mode, not a chart type). It is the single,
// authoritative type choice: it sets the family (derived) and the type every non-overridden
// series inherits. The glyphs are hand-drawn monochrome SVG at currentColor so they theme with
// the editor and stay quiet (the one signature element).
const Glyph: FC<{ children: React.ReactNode }> = ({ children }) => (
    <svg
        viewBox="0 0 24 24"
        width={22}
        height={22}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
    >
        {children}
    </svg>
);
const LineGlyph: FC = () => (
    <Glyph>
        <polyline points="3,17 9,11 13,14 21,6" />
    </Glyph>
);
const BarGlyph: FC = () => (
    <Glyph>
        <line
            x1="6"
            y1="20"
            x2="6"
            y2="11"
        />
        <line
            x1="12"
            y1="20"
            x2="12"
            y2="5"
        />
        <line
            x1="18"
            y1="20"
            x2="18"
            y2="14"
        />
    </Glyph>
);
const PieGlyph: FC = () => (
    <Glyph>
        <circle
            cx="12"
            cy="12"
            r="8"
        />
        <line
            x1="12"
            y1="12"
            x2="12"
            y2="4"
        />
        <line
            x1="12"
            y1="12"
            x2="18.5"
            y2="15"
        />
    </Glyph>
);
const GaugeGlyph: FC = () => (
    <Glyph>
        <path d="M4 18 A8 8 0 0 1 20 18" />
        <line
            x1="12"
            y1="18"
            x2="15.5"
            y2="11"
        />
    </Glyph>
);
const RadarGlyph: FC = () => (
    <Glyph>
        <polygon points="12,4 20.5,18 3.5,18" />
        <line
            x1="12"
            y1="4"
            x2="12"
            y2="18"
        />
        <line
            x1="3.5"
            y1="18"
            x2="20.5"
            y2="18"
        />
    </Glyph>
);

const CHART_TYPES: ReadonlyArray<{ value: EchartsChartType; label: string; icon: React.ReactNode }> = [
    { value: 'line', label: 'echarts_type_line', icon: <LineGlyph /> },
    { value: 'bar', label: 'echarts_type_bar', icon: <BarGlyph /> },
    { value: 'pie', label: 'echarts_type_pie', icon: <PieGlyph /> },
    { value: 'gauge', label: 'echarts_type_gauge', icon: <GaugeGlyph /> },
    { value: 'radar', label: 'echarts_type_radar', icon: <RadarGlyph /> },
];

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
 * The primary selector — a grid of the five concrete chart types. The value is the concrete
 * `chartType` (the editor normalises a legacy `'cartesian'` or `'area'` to a concrete type on
 * load, so one of the five is always highlighted).
 */
export const ChartTypePicker: FC<{ state: EditorState; set: SetEditor }> = ({ state, set }) => (
    <Box>
        <FieldLabel>{Generic.t('echarts_type')}</FieldLabel>
        <ToggleButtonGroup
            exclusive
            size="small"
            value={state.chartType}
            onChange={(_, v: EchartsChartType | null) => v && set({ chartType: v })}
            sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0.5, width: '100%' }}
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

const MODE_HINTS: Record<EchartsMode, string> = {
    history: 'echarts_editor_mode_hint_history',
    live: 'echarts_editor_mode_hint_live',
    json: 'echarts_editor_mode_hint_json',
};

/** Per-widget data mode (chart-global, not per-series). */
export const ModeSelect: FC<{ state: EditorState; set: SetEditor }> = ({ state, set }) => (
    <Box>
        <FieldLabel>{Generic.t('echarts_editor_data_mode')}</FieldLabel>
        <ToggleButtonGroup
            exclusive
            size="small"
            value={state.mode}
            onChange={(_, v: EchartsMode | null) => v && set({ mode: v })}
        >
            <ToggleButton value="history">{Generic.t('echarts_mode_history')}</ToggleButton>
            <ToggleButton value="live">{Generic.t('echarts_mode_live')}</ToggleButton>
            <ToggleButton value="json">{Generic.t('echarts_mode_json')}</ToggleButton>
        </ToggleButtonGroup>
        <Typography
            variant="caption"
            color="text.secondary"
            sx={{ display: 'block', mt: 0.5 }}
        >
            {Generic.t(MODE_HINTS[state.mode])}
        </Typography>
    </Box>
);

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
