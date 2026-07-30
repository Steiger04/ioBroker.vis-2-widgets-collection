/**
 * Advanced tab — the demoted supplemental JSON escape hatch, with authoring help (ADR-0007, Q5).
 *
 * @module EchartsCollectionWidget/editor/panels/AdvancedPanel
 * @remarks
 * The Advanced JSON (U) is strictly supplemental: the GUI owns all presentation, so U is for
 * echarts keys the GUI does not expose (`graphic`, `axisPointer`, exotic animation easings, …).
 * The data-binding + presentation keys are managed (forced back / owned by the GUI).
 *
 * Two affordances beyond the raw textarea:
 *  - **Vorlagen** — one-click snippets that merge a supplemental key into U.
 *  - **Wirkung (Merge-Preview)** — parses U and shows which of its keys are *effective*
 *    (supplemental, survive the merge) vs *ignored* (GUI-managed — silently overridden). This is
 *    the honest merge preview: the user sees exactly what their JSON contributes.
 */
import type { FC } from 'react';
import { Box, Button, Chip, TextField, Typography } from '@mui/material';

import Generic from '../../../Generic';
import { parseUserJson } from '../../optionBuilder';
import { SectionLabel } from '../controls';

interface PanelProps {
    userText: string;
    setUserText: (value: string) => void;
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
    'color', // the series palette
    'markLine',
] as const;

/** One-click supplemental snippets (keys the GUI does not expose). */
const SNIPPETS: ReadonlyArray<{ label: string; json: string }> = [
    {
        label: 'echarts_tpl_graphic',
        json: '{\n  "graphic": [\n    { "type": "text", "left": "center", "bottom": 10, "style": { "text": "© me" } }\n  ]\n}',
    },
    {
        label: 'echarts_tpl_axispointer',
        json: '{\n  "axisPointer": { "link": [{ "xAxisIndex": "all" }] }\n}',
    },
    {
        label: 'echarts_tpl_easing',
        json: '{\n  "animationEasing": "cubicOut",\n  "animationDuration": 800\n}',
    },
    {
        label: 'echarts_tpl_textstyle',
        json: '{\n  "textStyle": { "fontFamily": "Inter, sans-serif" }\n}',
    },
];

const AdvancedPanel: FC<PanelProps> = ({ userText, setUserText }) => {
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
                    <code>{MANAGED_KEYS.join(' · ')}</code>
                </Typography>
            </Box>

            {/* Snippet templates — one-click supplemental keys. */}
            <Typography
                variant="caption"
                color="text.secondary"
                sx={{ display: 'block', mb: 0.5 }}
            >
                {Generic.t('echarts_advanced_templates')}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 1.5 }}>
                {SNIPPETS.map(s => (
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

            <TextField
                multiline
                minRows={6}
                fullWidth
                size="small"
                value={userText}
                onChange={e => setUserText(e.target.value)}
                placeholder={'{\n  "graphic": [ … ],\n  "animationEasing": "cubicOut"\n}'}
                sx={{ fontFamily: 'monospace' }}
            />
            <Typography
                variant="caption"
                sx={{ color: parsed.ok ? 'success.main' : 'error.main', display: 'block', mt: 0.5 }}
            >
                {parsed.ok ? Generic.t('echarts_editor_valid_json') : `✗ ${parsed.error}`}
            </Typography>

            {/* Merge preview — which of U's keys survive vs are GUI-managed (ignored). */}
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

export default AdvancedPanel;
