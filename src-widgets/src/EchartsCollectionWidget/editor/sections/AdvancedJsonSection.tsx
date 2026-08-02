/**
 * Advanced JSON section — the demoted expert escape hatch (ADR-0007/0010; split from Behaviour in
 * the v3.1 junk-drawer cleanup, ADR-0011 companion / D5).
 *
 * @module EchartsCollectionWidget/editor/sections/AdvancedJsonSection
 * @remarks
 * Strictly supplemental: the GUI owns all presentation, so this U textarea is for echarts keys the
 * GUI does not expose. Carries the honesty affordances: the managed-keys box, one-click snippet
 * templates, JSON validity, and the merge preview (which U keys are effective vs GUI-managed/
 * ignored). `animationEasing` is GUI-owned now (promoted to a Behaviour field, ADR-0011 D5) → it is
 * a managed key, and the easing snippet was removed.
 */
import type { FC } from 'react';
import { Box, Button, Chip, TextField, Typography } from '@mui/material';

import Generic from '../../../Generic';
import { parseUserJson } from '../../optionBuilder';
import type { SetEditor } from '../editorState';

interface AdvancedJsonSectionProps {
    userText: string;
    setUserText: (value: string) => void;
    set: SetEditor;
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
        label: 'echarts_tpl_textstyle',
        json: '{\n  "textStyle": { "fontFamily": "Inter, sans-serif" }\n}',
    },
];

const AdvancedJsonSection: FC<AdvancedJsonSectionProps> = ({ userText, setUserText, set: _set }) => {
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
                placeholder={'{\n  "graphic": [ … ]\n}'}
                sx={{ fontFamily: 'monospace' }}
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
