/**
 * Shared field widgets for the echarts configurator modal.
 *
 * @module EchartsCollectionWidget/editor/fields
 * @remarks
 * Each widget takes the editor state + a patch setter. The Tabs body composes them; only the
 * arrangement differs between potential layouts (Tabs is the chosen one, map decision 06).
 * Labels go through `Generic.t` (the collection i18n prefix is auto-applied); the series
 * colour palette is derived from the MUI theme via {@link echartsPalette}.
 */
import { useEffect, useMemo, useState, type FC } from 'react';
import type React from 'react';
import {
    Box,
    Button,
    Chip,
    IconButton,
    MenuItem,
    TextField,
    ToggleButton,
    ToggleButtonGroup,
    Typography,
    useTheme,
} from '@mui/material';
import { Add as AddIcon, DeleteOutline as DeleteIcon } from '@mui/icons-material';

import Generic from '../../Generic';
import EChart from '../EChart';
import { buildEchartsTheme, echartsPalette } from '../echartsTheme';
import { LINE_TEMPLATE_DEFAULTS, buildGeneratedOption, parseUserJson } from '../optionBuilder';
import { mergeOptionForEcharts } from '../utils/mergeOption';
import { buildPreviewSeries, type EditorSeries, type EditorState, type SetEditor } from './editorState';
import OidPicker, { type OidPickerCtx } from './OidPicker';

// ── tiny shared labels / inputs ───────────────────────────────────

const FieldLabel: FC<{ children: React.ReactNode }> = ({ children }) => (
    <Typography
        variant="caption"
        color="text.secondary"
        sx={{ display: 'block', mb: 0.5 }}
    >
        {children}
    </Typography>
);

const SectionLabel: FC<{ children: React.ReactNode; hint?: string }> = ({ children, hint }) => (
    <Box sx={{ mb: 1 }}>
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

function LabeledSelect({
    label,
    value,
    onChange,
    options,
}: {
    label: string;
    value: string;
    onChange: (value: string) => void;
    options: ReadonlyArray<[string, string]>;
}): React.JSX.Element {
    return (
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
}

function NumberField({
    label,
    value,
    onChange,
    step = 1,
}: {
    label: string;
    value: number;
    onChange: (value: number) => void;
    step?: number;
}): React.JSX.Element {
    return (
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
}

// ── field widgets ─────────────────────────────────────────────────

/** Template picker — v1 ships only the line template; others are signposted as disabled. */
export const TemplatePicker: FC = () => (
    <Box>
        <FieldLabel>{Generic.t('echarts_editor_template')}</FieldLabel>
        <ToggleButtonGroup
            exclusive
            size="small"
            value="line"
        >
            <ToggleButton value="line">{Generic.t('echarts_template_line')}</ToggleButton>
            <ToggleButton
                value="bar"
                disabled
            >
                {Generic.t('echarts_template_bar')}
            </ToggleButton>
            <ToggleButton
                value="pie"
                disabled
            >
                {Generic.t('echarts_template_pie')}
            </ToggleButton>
            <ToggleButton
                value="gauge"
                disabled
            >
                {Generic.t('echarts_template_gauge')}
            </ToggleButton>
        </ToggleButtonGroup>
        <Typography
            variant="caption"
            color="text.secondary"
            sx={{ display: 'block', mt: 0.5 }}
        >
            {Generic.t('echarts_editor_template_hint')}
        </Typography>
    </Box>
);

const MODE_HINTS: Record<EditorState['mode'], string> = {
    history: 'echarts_editor_mode_hint_history',
    live: 'echarts_editor_mode_hint_live',
    json: 'echarts_editor_mode_hint_json',
};

/** Per-widget data mode (mode is chart-global, not per-series). */
export const ModeSelect: FC<{ state: EditorState; set: SetEditor }> = ({ state, set }) => (
    <Box>
        <FieldLabel>{Generic.t('echarts_editor_data_mode')}</FieldLabel>
        <ToggleButtonGroup
            exclusive
            size="small"
            value={state.mode}
            onChange={(_, v) => v && set({ mode: v as EditorState['mode'] })}
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

/** OID binding story + the history-specific fields. */
export const DataPanel: FC<{ state: EditorState; set: SetEditor; pickerCtx: OidPickerCtx }> = ({
    state,
    set,
    pickerCtx,
}) => {
    const [instances, setInstances] = useState<string[]>([]);
    useEffect(() => {
        let active = true;
        // List adapters that can serve history (common.getHistory) — same filter vis-2 uses for
        // its native 'history' field type. Lets the user pin a concrete instance, which is the
        // standard fix when getHistory hangs without `instance` (server can't auto-route).
        void pickerCtx.socket.getAdapterInstances('').then(all => {
            if (!active) {
                return;
            }
            const list = all
                .filter(o => (o.common as { getHistory?: boolean } | undefined)?.getHistory)
                .map(o => o._id.replace('system.adapter.', ''))
                .sort((a, b) => a.localeCompare(b));
            setInstances(list);
            // If exactly one history adapter exists and none is set, default to it — leaving
            // `instance` empty can hang getHistory when the server can't determine the adapter.
            if (list.length === 1 && !state.instance) {
                set({ instance: list[0] });
            }
        });
        return () => {
            active = false;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const instanceOptions: ReadonlyArray<[string, string]> = [
        ['', Generic.t('echarts_instance_auto')],
        ...instances.map(id => [id, id] as [string, string]),
    ];

    return (
        <Box>
            <Box
                sx={{
                    mb: 1.5,
                    p: 1,
                    bgcolor: 'action.hover',
                    borderLeft: 3,
                    borderColor: 'primary.main',
                    borderRadius: 0.5,
                }}
            >
                <Typography variant="caption">
                    {state.mode === 'json'
                        ? Generic.t('echarts_editor_info_json')
                        : Generic.t('echarts_editor_info_series')}
                </Typography>
            </Box>
            <TextField
                size="small"
                fullWidth
                label={Generic.t('echarts_editor_title_text')}
                value={state.titleText}
                onChange={e => set({ titleText: e.target.value })}
                placeholder={'Living room: {0.0.temperature.val} °C'}
                sx={{ mb: 1.5 }}
            />
            {state.mode === 'history' && (
                <>
                    <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5 }}>
                        <LabeledSelect
                            label={Generic.t('echarts_time_range')}
                            value={state.timeRange}
                            onChange={v => set({ timeRange: v as EditorState['timeRange'] })}
                            options={[
                                ['24h', '24h'],
                                ['7d', '7d'],
                                ['30d', '30d'],
                            ]}
                        />
                        <LabeledSelect
                            label={Generic.t('echarts_aggregate')}
                            value={state.aggregate}
                            onChange={v => set({ aggregate: v as EditorState['aggregate'] })}
                            options={[
                                ['average', 'average'],
                                ['minmax', 'minmax'],
                                ['min', 'min'],
                                ['max', 'max'],
                                ['total', 'total'],
                                ['count', 'count'],
                                ['onchange', 'onchange'],
                                ['none', 'none'],
                            ]}
                        />
                        <NumberField
                            label={Generic.t('echarts_count')}
                            value={state.count}
                            onChange={v => set({ count: v })}
                        />
                        <NumberField
                            label={Generic.t('echarts_refresh')}
                            value={state.refreshMs}
                            step={1000}
                            onChange={v => set({ refreshMs: v })}
                        />
                    </Box>
                    <Box sx={{ mt: 1.5 }}>
                        {instances.length > 0 ? (
                            <LabeledSelect
                                label={Generic.t('echarts_instance')}
                                value={state.instance}
                                onChange={v => set({ instance: v })}
                                options={instanceOptions}
                            />
                        ) : (
                            <Typography
                                variant="caption"
                                color="error"
                            >
                                {Generic.t('echarts_instance_missing')}
                            </Typography>
                        )}
                    </Box>
                </>
            )}
        </Box>
    );
};

/** Series list — the data sources (G-owned) + per-series styling. */
export const SeriesList: FC<{ state: EditorState; set: SetEditor; pickerCtx: OidPickerCtx }> = ({
    state,
    set,
    pickerCtx,
}) => {
    const theme = useTheme();
    const palette = useMemo(() => echartsPalette(theme), [theme]);

    const update = (i: number, patch: Partial<EditorSeries>): void => {
        set({ series: state.series.map((s, idx) => (idx === i ? { ...s, ...patch } : s)) });
    };
    const remove = (i: number): void => {
        set({ series: state.series.filter((_, idx) => idx !== i) });
    };
    const add = (): void => {
        set({
            series: [
                ...state.series,
                {
                    oid: '',
                    name: `Series ${state.series.length + 1}`,
                    color: palette[state.series.length % palette.length],
                    type: 'line',
                    yAxisIndex: 0,
                },
            ],
        });
    };

    return (
        <Box>
            <SectionLabel hint={Generic.t('echarts_editor_series_hint')}>{Generic.t('echarts_series')}</SectionLabel>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {state.series.map((s, i) => (
                    <Box
                        key={i}
                        sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, alignItems: 'center' }}
                    >
                        <Box
                            component="input"
                            type="color"
                            value={s.color ?? '#000000'}
                            onChange={e => update(i, { color: e.target.value })}
                            sx={{
                                width: 34,
                                height: 34,
                                p: 0,
                                border: 1,
                                borderColor: 'divider',
                                borderRadius: 1,
                                cursor: 'pointer',
                            }}
                            aria-label={Generic.t('echarts_editor_series_color')}
                        />
                        <TextField
                            size="small"
                            label={Generic.t('echarts_editor_series_name')}
                            value={s.name ?? ''}
                            onChange={e => update(i, { name: e.target.value })}
                            sx={{ width: 150 }}
                        />
                        <OidPicker
                            value={s.oid}
                            onChange={oid => update(i, { oid })}
                            ctx={pickerCtx}
                        />
                        <TextField
                            select
                            size="small"
                            label={Generic.t('echarts_editor_series_type')}
                            value={s.type ?? 'line'}
                            onChange={e => update(i, { type: e.target.value as EditorSeries['type'] })}
                            sx={{ width: 100 }}
                        >
                            <MenuItem value="line">{Generic.t('echarts_template_line')}</MenuItem>
                            <MenuItem value="bar">{Generic.t('echarts_template_bar')}</MenuItem>
                        </TextField>
                        <TextField
                            select
                            size="small"
                            label={Generic.t('echarts_editor_series_yaxis')}
                            value={String(s.yAxisIndex ?? 0)}
                            onChange={e => update(i, { yAxisIndex: Number(e.target.value) as 0 | 1 })}
                            sx={{ width: 90 }}
                        >
                            <MenuItem value="0">{Generic.t('echarts_editor_series_left')}</MenuItem>
                            <MenuItem value="1">{Generic.t('echarts_editor_series_right')}</MenuItem>
                        </TextField>
                        <IconButton
                            size="small"
                            onClick={() => remove(i)}
                            aria-label={Generic.t('echarts_editor_series_remove')}
                        >
                            <DeleteIcon fontSize="small" />
                        </IconButton>
                    </Box>
                ))}
            </Box>
            <Button
                startIcon={<AddIcon />}
                onClick={add}
                sx={{ mt: 1 }}
            >
                {Generic.t('echarts_editor_series_add')}
            </Button>
        </Box>
    );
};

/** Advanced JSON editor — the U escape hatch (presentation overrides). */
export const AdvancedJsonEditor: FC<{
    userText: string;
    setUserText: (value: string) => void;
}> = ({ userText, setUserText }) => {
    const parsed = parseUserJson(userText);
    return (
        <Box>
            <SectionLabel hint={Generic.t('echarts_editor_advanced_hint')}>
                {Generic.t('echarts_editor_advanced')}
            </SectionLabel>
            <Box
                sx={{
                    mb: 1,
                    p: 1,
                    bgcolor: 'action.hover',
                    borderLeft: 3,
                    borderColor: 'text.disabled',
                    borderRadius: 0.5,
                }}
            >
                <Typography
                    variant="caption"
                    color="text.secondary"
                >
                    {Generic.t('echarts_editor_managed_keys')}
                </Typography>
                <Typography
                    variant="caption"
                    component="div"
                >
                    <code>series · xAxis · yAxis · legend.data</code>
                </Typography>
            </Box>
            <TextField
                multiline
                minRows={6}
                fullWidth
                size="small"
                value={userText}
                onChange={e => setUserText(e.target.value)}
                placeholder={
                    '{\n  "tooltip": { "trigger": "axis" },\n  "grid": { "top": 40 },\n  "animation": false\n}'
                }
                sx={{ fontFamily: 'monospace' }}
            />
            <Typography
                variant="caption"
                sx={{ color: parsed.ok ? 'success.main' : 'error.main', display: 'block', mt: 0.5 }}
            >
                {parsed.ok ? Generic.t('echarts_editor_valid_json') : `✗ ${parsed.error}`}
            </Typography>
            <Typography
                variant="caption"
                color="text.secondary"
                sx={{ display: 'block' }}
            >
                {Generic.t('echarts_editor_advanced_note')}
            </Typography>
        </Box>
    );
};

/** Live preview banner — the EChart wrapper fed by the data-wins merge. */
export const PreviewBanner: FC<{ state: EditorState; userText: string }> = ({ state, userText }) => {
    const theme = useTheme();
    const option = useMemo(() => {
        const previewSeries = buildPreviewSeries(state.series, Date.now());
        const overrides = parseUserJson(userText);
        return mergeOptionForEcharts(
            buildGeneratedOption(previewSeries, state.series),
            LINE_TEMPLATE_DEFAULTS,
            overrides.ok ? overrides.value : {},
            buildEchartsTheme(theme),
        );
    }, [state, userText, theme]);
    const hasOverrides = parseUserJson(userText).ok && userText.trim().length > 0;
    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
                <Typography
                    variant="caption"
                    color="text.secondary"
                >
                    {Generic.t('echarts_editor_preview')}
                </Typography>
                <Chip
                    size="small"
                    variant="outlined"
                    label={Generic.t(
                        hasOverrides ? 'echarts_editor_preview_overrides' : 'echarts_editor_preview_defaults',
                    )}
                />
            </Box>
            <Box sx={{ height: 150 }}>
                <EChart option={option} />
            </Box>
        </Box>
    );
};
