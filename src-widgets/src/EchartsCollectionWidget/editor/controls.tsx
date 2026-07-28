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
import { Box, MenuItem, Switch, TextField, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';

import Generic from '../../Generic';
import type { SetEditor, EditorState } from './editorState';
import type { EchartsChartType, EchartsMode } from '../../types/field-definitions/echarts-fields';

// ── tiny shared labels / inputs ───────────────────────────────────

export const FieldLabel: FC<{ children: React.ReactNode }> = ({ children }) => (
    <Typography
        variant="caption"
        color="text.secondary"
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
}> = ({ label, value, onChange, options }) => (
    <TextField
        select
        size="small"
        label={label}
        value={value}
        onChange={e => onChange(e.target.value)}
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
);

export const NumberField: FC<{
    label: string;
    value: number;
    onChange: (value: number) => void;
    step?: number;
}> = ({ label, value, onChange, step = 1 }) => (
    <TextField
        size="small"
        type="number"
        label={label}
        value={value}
        inputProps={{ step }}
        onChange={e => onChange(Number(e.target.value) || 0)}
        fullWidth
    />
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
}> = ({ label, value, onChange, step = 1 }) => (
    <TextField
        size="small"
        type="number"
        label={label}
        value={value ?? ''}
        inputProps={{ step }}
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
    />
);

export const TextField2: FC<{
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}> = ({ label, value, onChange, placeholder }) => (
    <TextField
        size="small"
        label={label}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        fullWidth
    />
);

/** Checkbox-style boolean toggle (label + MUI Switch) in a compact grid cell. */
export const CheckField: FC<{ label: string; value: boolean; onChange: (v: boolean) => void }> = ({
    label,
    value,
    onChange,
}) => (
    <Box>
        <FieldLabel>{label}</FieldLabel>
        <Switch
            checked={value}
            onChange={e => onChange(e.target.checked)}
        />
    </Box>
);

// ── master selectors (top row) ────────────────────────────────────

const CHART_TYPES: ReadonlyArray<[EchartsChartType, string]> = [
    ['line', 'echarts_type_line'],
    ['bar', 'echarts_type_bar'],
    ['area', 'echarts_type_area'],
    ['pie', 'echarts_type_pie'],
    ['gauge', 'echarts_type_gauge'],
    ['radar', 'echarts_type_radar'],
];

/** The real family switch (line/bar/area/pie/gauge/radar). Replaces the v1 decorative picker. */
export const ChartTypePicker: FC<{ state: EditorState; set: SetEditor }> = ({ state, set }) => (
    <Box>
        <FieldLabel>{Generic.t('echarts_type')}</FieldLabel>
        <ToggleButtonGroup
            exclusive
            size="small"
            value={state.chartType}
            onChange={(_, v: EchartsChartType | null) => v && set({ chartType: v })}
        >
            {CHART_TYPES.map(([v, label]) => (
                <ToggleButton
                    key={v}
                    value={v}
                >
                    {Generic.t(label)}
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
