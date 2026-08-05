/**
 * Shared controls + the top-row master selectors for the v2 echarts configurator.
 *
 * @module EchartsCollectionWidget/editor/controls
 * @remarks
 * Quiet, dense MUI controls aligned on the 8px scale (configurator-design anatomy). All labels
 * go through `Generic.t`. `ChartTypePicker` is the real family switch (replaces the v1 decorative
 * disabled toggle); `ModeSelect` keeps the global data-mode toggle.
 */
import type { FC } from 'react';
import type React from 'react';
import { Box, MenuItem, TextField, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';

import Generic from '../../Generic';
import type { SetEditor, EditorState } from './editorState';
import type { EchartsChartType, EchartsMode } from '../../types/field-definitions/echarts-fields';

// ── tiny shared labels / inputs ───────────────────────────────────

/** Hides the native number spinners (ugly + inconsistent across browsers) on type=number inputs. */
export const noSpinnerSx = {
    '& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button': {
        WebkitAppearance: 'none',
        margin: 0,
    },
    '& input[type=number]': { MozAppearance: 'textfield', appearance: 'textfield' },
} as const;

/**
 * The one label idiom (ADR-0019): a 12 px caption above the control — never a floating label
 * (those truncate brutally in narrow grid cells). Single-line with ellipsis; the full text rides
 * as a tooltip. The control below is label-free and owns the full cell width for its value.
 */
export const FieldLabel: FC<{ children: React.ReactNode }> = ({ children }) => (
    <Typography
        variant="caption"
        color="text.secondary"
        noWrap
        title={typeof children === 'string' ? children : undefined}
        sx={{ display: 'block', mb: 0.5 }}
    >
        {children}
    </Typography>
);

export const SectionLabel: FC<{ children: React.ReactNode; hint?: string }> = ({ children, hint }) => (
    <Box>
        <Typography
            variant="subtitle2"
            fontWeight={600}
        >
            {children}
        </Typography>
        {hint && (
            <Typography
                variant="caption"
                color="text.secondary"
            >
                {hint}
            </Typography>
        )}
    </Box>
);

export const LabeledSelect: FC<{
    label: string;
    value: string;
    onChange: (value: string) => void;
    options: ReadonlyArray<[string, string]>;
    disabled?: boolean;
}> = ({ label, value, onChange, options, disabled }) => (
    <Box>
        <FieldLabel>{label}</FieldLabel>
        <TextField
            select
            size="small"
            value={value}
            onChange={e => onChange(e.target.value)}
            disabled={disabled}
            fullWidth
        >
            {options.map(([v, l]) => (
                <MenuItem
                    key={v}
                    value={v}
                >
                    {l}
                </MenuItem>
            ))}
        </TextField>
    </Box>
);

export const NumberField: FC<{
    label: string;
    value: number;
    onChange: (value: number) => void;
    step?: number;
    error?: boolean;
    helperText?: string;
    disabled?: boolean;
}> = ({ label, value, onChange, step = 1, error, helperText, disabled }) => (
    <Box>
        <FieldLabel>{label}</FieldLabel>
        <TextField
            size="small"
            type="number"
            value={value}
            inputProps={{ step }}
            onChange={e => onChange(Number(e.target.value) || 0)}
            error={error}
            helperText={helperText}
            disabled={disabled}
            fullWidth
            sx={noSpinnerSx}
        />
    </Box>
);

/**
 * Number field that can be cleared: an empty input maps to `undefined` (an optional numeric
 * config value, e.g. a gauge target where "unset" is meaningful and distinct from 0).
 */
export const OptionalNumberField: FC<{
    label: string;
    value: number | undefined;
    onChange: (value: number | undefined) => void;
    step?: number;
    error?: boolean;
    helperText?: string;
    disabled?: boolean;
}> = ({ label, value, onChange, step = 1, error, helperText, disabled }) => (
    <Box>
        <FieldLabel>{label}</FieldLabel>
        <TextField
            size="small"
            type="number"
            value={value ?? ''}
            inputProps={{ step }}
            error={error}
            helperText={helperText}
            disabled={disabled}
            onChange={e => {
                const raw = e.target.value;
                if (raw === '') {
                    onChange(undefined);
                    return;
                }
                const n = Number(raw);
                onChange(Number.isFinite(n) ? n : undefined);
            }}
            fullWidth
            sx={noSpinnerSx}
        />
    </Box>
);

/**
 * Text input, caption-above (ADR-0019). The placeholder is always visible (no floating label
 * competes with it) — used e.g. to show an inherited value as ghost text.
 */
export const TextField2: FC<{
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    error?: boolean;
    helperText?: string;
    disabled?: boolean;
}> = ({ label, value, onChange, placeholder, error, helperText, disabled }) => (
    <Box>
        <FieldLabel>{label}</FieldLabel>
        <TextField
            size="small"
            value={value}
            onChange={e => onChange(e.target.value)}
            placeholder={placeholder}
            error={error}
            helperText={helperText}
            disabled={disabled}
            fullWidth
        />
    </Box>
);

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
