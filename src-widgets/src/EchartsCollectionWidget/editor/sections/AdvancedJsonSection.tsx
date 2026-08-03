/**
 * Advanced JSON section — the demoted expert escape hatch (ADR-0007/0010/0014/0017).
 *
 * @module EchartsCollectionWidget/editor/sections/AdvancedJsonSection
 * @remarks
 * Strictly supplemental and **chart-wide only** (ADR-0017): the GUI owns all presentation, and
 * per-series presentation now lives on the series cards (Series raw), so this U textarea is for
 * echarts keys the GUI does not expose AT THE CHART LEVEL — `graphic`, `aria`, `axisPointer`,
 * `textStyle`, exotic `animationEasing`, and radar-component options (`radar.splitArea`/…).
 * `series` is a fully-managed key (a U `series` is ignored — use the per-card Series raw instead).
 * Carries the honesty affordances: the managed-keys box, chart-wide one-click templates, JSON
 * validity, and the 2-state merge preview (✓ effective / ✗ GUI-managed).
 */
import type { FC } from 'react';
import { Box, Button, Chip, Typography } from '@mui/material';

import Generic from '../../../Generic';
import { familyOf, parseUserJson } from '../../optionBuilder';
import JsonEditor from '../JsonEditor';
import type { EchartsChartFamily, EchartsChartType } from '../../../types/field-definitions/echarts-fields';
import type { SetEditor } from '../editorState';

interface AdvancedJsonSectionProps {
    userText: string;
    setUserText: (value: string) => void;
    set: SetEditor;
    /** The chart type drives the type-aware template catalog (ADR-0014). */
    chartType: EchartsChartType;
}

/** Top-level option keys the GUI owns (the Advanced "Managed keys" honesty box + merge analysis). */
const MANAGED_KEYS = [
    'series',
    'legend',
    'xAxis',
    'yAxis',
    'title',
    'tooltip',
    'grid',
    'dataZoom',
    'visualMap',
    'animation',
    'animationEasing',
    'animationDuration',
    'color', // the series palette
    'markLine',
] as const;

interface Template {
    label: string;
    json: string;
}

// ── Family-agnostic templates (chart-level GUI-uncovered keys → clean ✓) ──
const TPL_ALL: Template[] = [
    {
        label: 'echarts_tpl_graphic',
        json: '{\n  "graphic": [\n    { "type": "text", "left": "center", "bottom": 10, "style": { "text": "© me" } }\n  ]\n}',
    },
    {
        label: 'echarts_tpl_aria',
        json: '{\n  "aria": { "enabled": true, "label": { "description": "Chart description for screen readers" } }\n}',
    },
    {
        label: 'echarts_tpl_axispointer',
        json: '{\n  "axisPointer": { "link": [{ "xAxisIndex": "all" }] }\n}',
    },
    {
        label: 'echarts_tpl_textstyle',
        json: '{\n  "textStyle": { "fontFamily": "Inter, sans-serif" }\n}',
    },
];

// ── Family-specific templates (ADR-0017: chart-wide/component keys only — the series-riding
//    presets moved to the per-card Series raw catalogs in seriesTemplates.ts). ──
const TEMPLATES_BY_FAMILY: Record<EchartsChartFamily, Template[]> = {
    cartesian: [],
    pie: [],
    gauge: [],
    radar: [
        {
            label: 'echarts_tpl_radar_splitarea',
            json: '{\n  "radar": { "splitArea": { "show": true, "areaStyle": { "color": ["#f5f5f5", "#e8e8e8"] } } }\n}',
        },
        {
            label: 'echarts_tpl_radar_axisname',
            json: '{\n  "radar": { "axisName": { "formatter": "{value}", "color": "#666" } }\n}',
        },
    ],
};

const AdvancedJsonSection: FC<AdvancedJsonSectionProps> = ({ userText, setUserText, set: _set, chartType }) => {
    const parsed = parseUserJson(userText);
    const managedSet = new Set<string>(MANAGED_KEYS);
    const uKeys = parsed.ok ? Object.keys(parsed.value) : [];
    const effective = uKeys.filter(k => !managedSet.has(k));
    const ignored = uKeys.filter(k => managedSet.has(k));

    /** Merge a snippet's keys into the current U text (accumulates; invalid current text is replaced). */
    const insertSnippet = (json: string): void => {
        const cur = parseUserJson(userText);
        const base = cur.ok ? cur.value : {};
        const snip = parseUserJson(json);
        const merged = { ...base, ...(snip.ok ? snip.value : {}) };
        setUserText(JSON.stringify(merged, null, 2));
    };

    const templates = [...TEMPLATES_BY_FAMILY[familyOf(chartType)], ...TPL_ALL];

    return (
        <Box>
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
                    <code>{MANAGED_KEYS.join(' · ')}</code>
                </Typography>
            </Box>

            <Typography
                variant="caption"
                color="text.secondary"
                sx={{ display: 'block', mb: 0.5 }}
            >
                {Generic.t('echarts_advanced_templates')}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 1.5 }}>
                {templates.map(s => (
                    <Button
                        key={s.label}
                        size="small"
                        variant="outlined"
                        onClick={() => insertSnippet(s.json)}
                        sx={{ textTransform: 'none' }}
                    >
                        {Generic.t(s.label)}
                    </Button>
                ))}
            </Box>

            <JsonEditor
                value={userText}
                onChange={setUserText}
                minRows={6}
                placeholder={'{\n  "graphic": [ … ]\n}'}
            />
            <Typography
                variant="caption"
                sx={{ color: parsed.ok ? 'success.main' : 'error.main', display: 'block', mt: 0.5 }}
            >
                {parsed.ok ? Generic.t('echarts_editor_valid_json') : `✗ ${parsed.error}`}
            </Typography>

            {parsed.ok && uKeys.length > 0 && (
                <Box sx={{ mt: 1 }}>
                    <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ display: 'block', mb: 0.5 }}
                    >
                        {Generic.t('echarts_advanced_effect')}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 0.5 }}>
                        {effective.map(k => (
                            <Chip
                                key={k}
                                size="small"
                                color="success"
                                variant="outlined"
                                label={`${k} ✓`}
                            />
                        ))}
                        {ignored.map(k => (
                            <Chip
                                key={k}
                                size="small"
                                variant="outlined"
                                label={`${k} ✗`}
                                sx={{ opacity: 0.6, textDecoration: 'line-through' }}
                            />
                        ))}
                    </Box>
                    <Typography
                        variant="caption"
                        color="text.secondary"
                    >
                        {Generic.t('echarts_advanced_effect_legend')}
                    </Typography>
                </Box>
            )}

            <Typography
                variant="caption"
                color="text.secondary"
                sx={{ display: 'block', mt: 1 }}
            >
                {Generic.t('echarts_editor_advanced_note')}
            </Typography>
        </Box>
    );
};

export default AdvancedJsonSection;
