/**
 * Raw-JSON section — the generic collapsible "Erweitertes JSON" escape hatch every component
 * section carries (ADR-0037 axis anatomy, generalized by ADR-0044).
 *
 * @module EchartsCollectionWidget/editor/sections/RawJsonSection
 * @remarks
 * A `+/−` toggle, a lazy-mounted {@link JsonEditor}, the section's template multi-select and a
 * validity caption. The raw is deep-merged UNDER the component's built entry — the GUI wins
 * every collision. Since ADR-0042's addendum the chips are plain label+X and the activation
 * FOLLOWS THE TEXT (every valid text edit reconciles the ids), so deleting a template's keys
 * inside the editor removes its chip. Catalog-agnostic: the axis cards pass `AXIS_CATALOG`, the
 * X-Karte `X_AXIS_CATALOG`, the Title/Legend/Tooltip sections their own bundles — one anatomy,
 * five hosts. Invalid JSON locks the menu and leaves the ids untouched.
 */
import { useState, type FC } from 'react';
import { Box, Button, Collapse, Typography } from '@mui/material';

import Generic from '../../../Generic';
import { InfoBox } from '../../../components/controls';
import JsonEditor from '../JsonEditor';
import type { RawTemplateCatalog } from '../catalog';
import { parseRawObject } from '../snippetComposition';
import SnippetChips, { activeSnippetEntries, useSnippetActions } from './SnippetChips';
import TemplateMenu from './TemplateMenu';

const RawJsonSection: FC<{
    raw: string | undefined;
    onChange: (value: string) => void;
    /** The catalog bundle driving the template menu (AXIS_/X_AXIS_/TITLE_/LEGEND_/TOOLTIP_CATALOG). */
    catalog: RawTemplateCatalog;
    /** Ordered ACTIVE template ids (ADR-0042 — the section state's snippet list). */
    snippets?: string[];
    /** Editor placeholder — a free key of THIS component (hosts pass their own example). */
    placeholder?: string;
    /**
     * Commit callback (ADR-0042 addendum): the new editor text + activation ids, so the caller
     * commits BOTH into its state in one history step — fired by menu toggles AND by
     * valid text edits. Without it (or on invalid text) edits fall back to {@link onChange}.
     */
    onCommit?: (result: { text: string; ids: string[] }) => void;
}> = ({ raw, onChange, catalog, snippets, placeholder, onCommit }) => {
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
                    placeholder={placeholder ?? '{\n  "minorTick": { "show": true }\n}'}
                />
                <Typography
                    variant="caption"
                    sx={{ color: valid ? 'success.main' : 'error.main', display: 'block' }}
                >
                    {valid ? Generic.t('echarts_editor_valid_json') : `✗ ${Generic.t('echarts_axis_raw_invalid')}`}
                </Typography>
                <InfoBox text={Generic.t('echarts_editor_advanced_note')} />
            </Collapse>
        </Box>
    );
};

export default RawJsonSection;
