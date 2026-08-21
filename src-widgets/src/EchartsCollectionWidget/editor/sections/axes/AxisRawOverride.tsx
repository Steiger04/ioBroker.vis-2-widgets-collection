/**
 * Axis raw override — the per-axis echarts-JSON escape hatch (ADR-0037).
 *
 * @module EchartsCollectionWidget/editor/sections/axes/AxisRawOverride
 * @remarks
 * Series-raw anatomy (ADR-0015/0017) one level down: a `+/−` toggle, a lazy-mounted
 * {@link JsonEditor}, the axis template multi-select (`axisTemplates.ts`; persistent activation
 * since ADR-0042) and a validity caption. The raw is deep-merged UNDER the built yAxis entry —
 * the card wins every collision; every builder-uncovered key (label/name fonts, minorTick,
 * splitArea, logBase, …) merges through. Since the ADR-0042 addendum the chips are plain
 * label+X (the state-aware ✓/◐/✗ analysis is retired from the UI — the classifier lives on as
 * the axis-catalog audit test) and the activation FOLLOWS THE TEXT: every valid text edit
 * reconciles the ids (`reconcileSnippetIds`), so deleting a template's keys inside the editor
 * removes its chip. Invalid JSON locks the menu and leaves the ids untouched.
 */
import { useState, type FC } from 'react';
import { Box, Button, Collapse, Typography } from '@mui/material';

import Generic from '../../../../Generic';
import JsonEditor from '../../JsonEditor';
import { AXIS_CATEGORY_I18N, AXIS_CATEGORY_ORDER, AXIS_TEMPLATES, parseRawObject } from '../../axisTemplates';
import TemplateMenu from '../TemplateMenu';
import SnippetChips, { activeSnippetEntries, useSnippetActions } from '../SnippetChips';

/**
 * Collapsible per-axis raw echarts JSON override (ADR-0037). Since ADR-0042 the templates are a
 * persistent checkbox multi-select composing the raw text with the Eigenanteil — deactivation
 * removes the pristine leaves, hand edits survive; since the addendum the text edits themselves
 * keep the activation list in sync with the text.
 */
const AxisRawOverride: FC<{
    raw: string | undefined;
    onChange: (value: string) => void;
    /** Ordered ACTIVE axis-template ids (ADR-0042 — the axis config's `snippets`). */
    snippets?: string[];
    /**
     * Commit callback (ADR-0042 addendum): the new editor text + activation ids, so the caller
     * commits BOTH into the axis config in one history step — fired by menu toggles AND by
     * valid text edits. Without it (or on invalid text) edits fall back to {@link onChange}.
     */
    onCommit?: (result: { text: string; ids: string[] }) => void;
}> = ({ raw, onChange, snippets, onCommit }) => {
    const [open, setOpen] = useState(false);
    const trimmed = (raw ?? '').trim();
    const parsed = parseRawObject(raw ?? '');
    const valid = !trimmed || !!parsed;

    // The shared wiring (ADR-0042 + addendum): menu toggles AND valid text edits commit text +
    // ids through one callback in one history step; without `onCommit` (or on invalid text)
    // edits fall back to onChange, leaving the ids untouched.
    const { toggle: runToggle, applyText } = useSnippetActions({
        templates: AXIS_TEMPLATES,
        ids: snippets ?? [],
        currentText: raw ?? '',
        commit: r => (onCommit ? onCommit(r) : onChange(r.text)),
        onTextChange: onChange,
    });
    const entries = activeSnippetEntries(AXIS_TEMPLATES, snippets ?? []);

    return (
        <Box sx={{ mt: 1 }}>
            <Button
                size="small"
                onClick={() => setOpen(v => !v)}
                sx={{ textTransform: 'none', color: 'text.secondary', minWidth: 0 }}
            >
                {open ? '−' : '+'} {Generic.t('echarts_axis_raw')}
            </Button>
            {/* mountOnEnter: the JsonEditor (Prism highlighting) is expensive — mount it only when
                the raw override is actually opened, never for a collapsed one (ADR-0019 lesson). */}
            <Collapse
                in={open}
                mountOnEnter
            >
                <TemplateMenu
                    templates={AXIS_TEMPLATES}
                    categoryOrder={AXIS_CATEGORY_ORDER}
                    categoryI18n={AXIS_CATEGORY_I18N}
                    activeIds={snippets ?? []}
                    onToggle={runToggle}
                    disabled={!valid}
                />
                <SnippetChips
                    entries={entries}
                    onRemove={runToggle}
                />
                <JsonEditor
                    value={raw ?? ''}
                    onChange={applyText}
                    minRows={3}
                    placeholder={'{\n  "minorTick": { "show": true }\n}'}
                />
                <Typography
                    variant="caption"
                    sx={{ color: valid ? 'success.main' : 'error.main', display: 'block' }}
                >
                    {valid ? Generic.t('echarts_editor_valid_json') : `✗ ${Generic.t('echarts_axis_raw_invalid')}`}
                </Typography>
                <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ display: 'block', mt: 0.5 }}
                >
                    {Generic.t('echarts_axis_raw_hint')}
                </Typography>
            </Collapse>
        </Box>
    );
};

export default AxisRawOverride;
