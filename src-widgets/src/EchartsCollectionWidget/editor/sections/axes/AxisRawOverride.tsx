/**
 * Axis raw override — the per-axis echarts-JSON escape hatch (ADR-0037; X joins via the
 * addendum).
 *
 * @module EchartsCollectionWidget/editor/sections/axes/AxisRawOverride
 * @remarks
 * Series-raw anatomy (ADR-0015/0017) one level down: a `+/−` toggle, a lazy-mounted
 * {@link JsonEditor}, the axis template multi-select and a validity caption. The raw is
 * deep-merged UNDER the built axis entry — the card wins every collision; every builder-
 * uncovered key (label/name fonts, minorTick, splitArea, …) merges through. Since ADR-0042's
 * addendum the chips are plain label+X and the activation FOLLOWS THE TEXT (every valid text
 * edit reconciles the ids), so deleting a template's keys inside the editor removes its chip.
 * The component is catalog-agnostic since the X addendum: the Y cards pass the `AXIS_*` catalog
 * triple, the X-Karte passes `X_AXIS_TEMPLATES` — same anatomy, one implementation. Invalid
 * JSON locks the menu and leaves the ids untouched.
 */
import { useState, type FC } from 'react';
import { Box, Button, Collapse, Typography } from '@mui/material';

import Generic from '../../../../Generic';
import JsonEditor from '../../JsonEditor';
import { parseRawObject } from '../../axisTemplates';
import type { AxisTemplateCatalog } from '../../axisTemplates';
import SnippetChips, { activeSnippetEntries, useSnippetActions } from '../SnippetChips';
import TemplateMenu from '../TemplateMenu';

/**
 * Collapsible per-axis raw echarts JSON override (ADR-0037). Since ADR-0042 the templates are a
 * persistent checkbox multi-select composing the raw text with the Eigenanteil — deactivation
 * removes the pristine leaves, hand edits survive; since the addendum the text edits themselves
 * keep the activation list in sync with the text.
 */
const AxisRawOverride: FC<{
    raw: string | undefined;
    onChange: (value: string) => void;
    /** The catalog bundle driving the template menu (Y cards: `AXIS_CATALOG`; X-Karte: `X_AXIS_CATALOG`). */
    catalog: AxisTemplateCatalog;
    /** Ordered ACTIVE template ids (ADR-0042 — the axis config's `snippets`). */
    snippets?: string[];
    /**
     * Commit callback (ADR-0042 addendum): the new editor text + activation ids, so the caller
     * commits BOTH into its config in one history step — fired by menu toggles AND by
     * valid text edits. Without it (or on invalid text) edits fall back to {@link onChange}.
     */
    onCommit?: (result: { text: string; ids: string[] }) => void;
}> = ({ raw, onChange, catalog, snippets, onCommit }) => {
    const [open, setOpen] = useState(false);
    const trimmed = (raw ?? '').trim();
    const parsed = parseRawObject(raw ?? '');
    const valid = !trimmed || !!parsed;

    // The shared wiring (ADR-0042 + addendum): menu toggles AND valid text edits commit text +
    // ids through one callback in one history step; without `onCommit` (or on invalid text)
    // edits fall back to onChange, leaving the ids untouched.
    const { toggle: runToggle, applyText } = useSnippetActions({
        templates: catalog.templates,
        ids: snippets ?? [],
        currentText: raw ?? '',
        commit: r => (onCommit ? onCommit(r) : onChange(r.text)),
        onTextChange: onChange,
    });
    const entries = activeSnippetEntries(catalog.templates, snippets ?? []);

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
                    templates={catalog.templates}
                    categoryOrder={catalog.categoryOrder}
                    categoryI18n={catalog.categoryI18n}
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
                    {Generic.t('echarts_editor_advanced_note')}
                </Typography>
            </Collapse>
        </Box>
    );
};

export default AxisRawOverride;
