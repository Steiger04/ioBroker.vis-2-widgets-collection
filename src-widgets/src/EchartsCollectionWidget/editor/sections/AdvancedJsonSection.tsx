/**
 * Advanced JSON section — the demoted expert escape hatch (ADR-0007/0010/0014/0017/0040/0042).
 *
 * @module EchartsCollectionWidget/editor/sections/AdvancedJsonSection
 * @remarks
 * Strictly supplemental and **chart-wide only** (ADR-0017): the GUI owns all presentation, and
 * per-series presentation now lives on the series cards (Series raw), so this U textarea is the
 * escape hatch for echarts keys the GUI does not expose AT THE CHART LEVEL. Its templates (the
 * pure `editor/advancedJsonTemplates.ts` catalog — audited by the ADR-0036 replaceMerge guard
 * test) are grouped by component (Titel / Legende / Tooltip / Toolbox / X-Achse — ADR-0040) and,
 * since ADR-0042, a persistent CHECKBOX multi-select: the active snippets compose the editor
 * text together with the user's Eigenanteil, the chips above the editor deactivate them, and
 * every leaf the user hand-wrote or hand-changed survives each recomposition. The free text
 * also accepts the standalone `graphic` / `aria` / `axisPointer` / `textStyle` components and
 * exotic `animationEasing`. Since the ADR-0042 addendum the chips are plain label+X (the ✓/◐/✗
 * honesty layer is retired — the key analysis lives on only as the catalog audit tests) and the
 * activation FOLLOWS THE TEXT: every valid text edit reconciles the ids via `reconcileSnippetIds`
 * against the FULL catalog (a family-stale activation survives until the Apply prune), so
 * deleting a template's keys inside the editor removes its chip. Invalid JSON locks the menu
 * (ADR-0042 decision 8) and leaves the ids untouched.
 */
import type { FC } from 'react';
import { Box, Typography } from '@mui/material';

import Generic from '../../../Generic';
import { familyOf, parseUserJson } from '../../optionBuilder';
import JsonEditor from '../JsonEditor';
import TemplateMenu from './TemplateMenu';
import SnippetChips, { activeSnippetEntries, useSnippetActions } from './SnippetChips';
import {
    CHART_CATEGORY_I18N,
    CHART_CATEGORY_ORDER,
    CHART_TEMPLATES,
    chartTemplatesForFamily,
} from '../advancedJsonTemplates';
import type { EchartsChartType } from '../../../types/field-definitions/echarts-fields';
import type { SetEditor } from '../editorState';

interface AdvancedJsonSectionProps {
    userText: string;
    set: SetEditor;
    /** The chart type drives the family-aware template catalog (ADR-0014). */
    chartType: EchartsChartType;
    /** Ordered ACTIVE chart-level template ids (ADR-0042 — the `chartSnippets` blob). */
    snippets: string[];
}

const AdvancedJsonSection: FC<AdvancedJsonSectionProps> = ({ userText, set, chartType, snippets }) => {
    // The shared wiring (ADR-0042 + addendum) against the FULL catalog — a family-stale
    // activation (xAxis on radar, between the switch and Apply) must neither vanish nor corrupt
    // a recomposition; the Apply prune stays the only place it drops. One commit path: the ids
    // ride the SAME patch as the text (one history step, one coalescing key); invalid
    // intermediate JSON keeps the ids untouched (the menu is locked there anyway, decision 8).
    const { toggle: runToggle, applyText } = useSnippetActions({
        templates: CHART_TEMPLATES,
        ids: snippets,
        currentText: userText,
        commit: r => set({ userText: r.text, chartSnippets: r.ids }),
        onTextChange: value => set({ userText: value, chartSnippets: snippets }),
    });

    const parsed = parseUserJson(userText);
    const templates = chartTemplatesForFamily(familyOf(chartType));
    // Chips for EVERY activation, resolved against the FULL catalog — a family-stale one stays a
    // plain chip until the Apply prune (the IssueList warning counts it, ADR-0042 decision 6).
    const entries = activeSnippetEntries(CHART_TEMPLATES, snippets);

    return (
        <Box>
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
                activeIds={snippets}
                onToggle={runToggle}
                disabled={!parsed.ok}
            />
            <SnippetChips
                entries={entries}
                onRemove={runToggle}
            />

            <JsonEditor
                value={userText}
                onChange={applyText}
                minRows={6}
                placeholder={'{\n  "tooltip": { … }\n}'}
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
                sx={{ display: 'block', mt: 1 }}
            >
                {Generic.t('echarts_editor_advanced_note')}
            </Typography>
        </Box>
    );
};

export default AdvancedJsonSection;
