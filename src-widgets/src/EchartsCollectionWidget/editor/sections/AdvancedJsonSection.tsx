/**
 * Advanced JSON section — the demoted expert escape hatch (ADR-0007/0010/0014/0017/0040).
 *
 * @module EchartsCollectionWidget/editor/sections/AdvancedJsonSection
 * @remarks
 * Strictly supplemental and **chart-wide only** (ADR-0017): the GUI owns all presentation, and
 * per-series presentation now lives on the series cards (Series raw), so this U textarea is the escape
 * hatch for echarts keys the GUI does not expose AT THE CHART LEVEL. Its one-click templates (the pure
 * `editor/advancedJsonTemplates.ts` catalog — audited by the ADR-0036 replaceMerge guard test) are
 * grouped by component (Titel / Legende / Tooltip / Toolbox / X-Achse, the shared TemplateMenu
 * idiom — ADR-0040 restructured the old complete scaffolds into these small one-capability
 * snippets) plus the radar presets; the free text also accepts the standalone `graphic` / `aria` /
 * `axisPointer` / `textStyle` components and exotic `animationEasing`.
 * title/legend/tooltip/xAxis are only PARTIALLY managed, so their non-GUI subkeys DO merge through.
 * `series` is a fully-managed key (a U `series` is ignored — use the per-card Series raw instead).
 * Carries the honesty affordances: the managed-keys box, the grouped one-click templates, JSON
 * validity, and the 3-state sub-key merge preview (ADR-0030: ✓ effective / ◐ partial / ✗ managed).
 */
import type { FC } from 'react';
import { Box, Chip, Typography } from '@mui/material';

import Generic from '../../../Generic';
import { familyOf, parseUserJson } from '../../optionBuilder';
import JsonEditor from '../JsonEditor';
import TemplateMenu from './TemplateMenu';
import { deepMerge } from '../../utils/mergeOption';
import { MANAGED_KEYS, classifyUserKeys } from '../advancedJsonAnalysis';
import { CHART_CATEGORY_I18N, CHART_CATEGORY_ORDER, chartTemplatesForFamily } from '../advancedJsonTemplates';
import type { EchartsChartType } from '../../../types/field-definitions/echarts-fields';
import type { SetEditor } from '../editorState';

interface AdvancedJsonSectionProps {
    userText: string;
    setUserText: (value: string) => void;
    set: SetEditor;
    /** The chart type drives the family-aware template catalog (ADR-0014). */
    chartType: EchartsChartType;
}

const AdvancedJsonSection: FC<AdvancedJsonSectionProps> = ({ userText, setUserText, set: _set, chartType }) => {
    const parsed = parseUserJson(userText);
    const chips = parsed.ok ? classifyUserKeys(parsed.value) : [];

    /** Deep-merge a snippet into the U text (ADR-0037 idiom: snippets of one component share keys). */
    const insertSnippet = (json: string): void => {
        const cur = parseUserJson(userText);
        const snip = parseUserJson(json);
        const base = cur.ok ? cur.value : {};
        const merged = snip.ok ? deepMerge(base, snip.value) : base;
        setUserText(JSON.stringify(merged, null, 2));
    };

    const templates = chartTemplatesForFamily(familyOf(chartType));

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
            <TemplateMenu
                templates={templates}
                categoryOrder={CHART_CATEGORY_ORDER}
                categoryI18n={CHART_CATEGORY_I18N}
                onInject={insertSnippet}
            />

            <JsonEditor
                value={userText}
                onChange={setUserText}
                minRows={6}
                placeholder={'{\n  "tooltip": { … }\n}'}
            />
            <Typography
                variant="caption"
                sx={{ color: parsed.ok ? 'success.main' : 'error.main', display: 'block', mt: 0.5 }}
            >
                {parsed.ok ? Generic.t('echarts_editor_valid_json') : `✗ ${parsed.error}`}
            </Typography>

            {parsed.ok && chips.length > 0 && (
                <Box sx={{ mt: 1 }}>
                    <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ display: 'block', mb: 0.5 }}
                    >
                        {Generic.t('echarts_advanced_effect')}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 0.5 }}>
                        {chips.map(c => {
                            if (c.cls === 'effective') {
                                return (
                                    <Chip
                                        key={c.key}
                                        size="small"
                                        color="success"
                                        variant="outlined"
                                        label={`${c.key} ✓`}
                                    />
                                );
                            }
                            if (c.cls === 'partial') {
                                return (
                                    <Chip
                                        key={c.key}
                                        size="small"
                                        color="warning"
                                        variant="outlined"
                                        label={`${c.key} ◐`}
                                        title={`${Generic.t('echarts_advanced_gui_managed')} ${c.managed.join(', ')}`}
                                    />
                                );
                            }
                            return (
                                <Chip
                                    key={c.key}
                                    size="small"
                                    variant="outlined"
                                    label={`${c.key} ✗`}
                                    // ADR-0037: yAxis is card-managed per axis — point at the escape
                                    // hatch that actually reaches it (the Axis cards' raw override).
                                    title={c.key === 'yAxis' ? Generic.t('echarts_advanced_yaxis_hint') : undefined}
                                    sx={{ opacity: 0.6, textDecoration: 'line-through' }}
                                />
                            );
                        })}
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
