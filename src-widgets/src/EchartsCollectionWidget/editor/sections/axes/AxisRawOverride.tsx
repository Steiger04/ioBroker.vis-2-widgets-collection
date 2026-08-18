/**
 * Axis raw override — the per-axis echarts-JSON escape hatch (ADR-0037).
 *
 * @module EchartsCollectionWidget/editor/sections/axes/AxisRawOverride
 * @remarks
 * Series-raw anatomy (ADR-0015/0017) one level down: a `+/−` toggle, a lazy-mounted
 * {@link JsonEditor}, the axis template multi-select (`axisTemplates.ts`; persistent activation
 * since ADR-0042), a validity caption — PLUS the state-aware ✓/◐/✗ key analysis
 * (`axisRawAnalysis.ts`), a deliberate divergence from the series sibling: the axis builder
 * ALWAYS-emits keys (type/position/offset/alignTicks/splitLine.show/axisTick.show/nameLocation/
 * nameGap) that would silently eat raw keys, and its managed set is partly conditional
 * (colour/format/min/max…), so the chips resolve against the card's actual state. The raw is
 * deep-merged UNDER the built yAxis entry — the card wins every collision; every
 * builder-uncovered key (label/name fonts, minorTick, splitArea, logBase, …) merges through.
 */
import { useState, type FC } from 'react';
import { Box, Button, Chip, Collapse, Typography } from '@mui/material';

import Generic from '../../../../Generic';
import JsonEditor from '../../JsonEditor';
import { AXIS_CATEGORY_I18N, AXIS_CATEGORY_ORDER, AXIS_TEMPLATES, parseRawObject } from '../../axisTemplates';
import { classifyAxisKeys } from '../../axisRawAnalysis';
import TemplateMenu from '../TemplateMenu';
import SnippetChips, { activeSnippetEntries, snippetStatuses, SnippetNotice, useSnippetToggle } from '../SnippetChips';
import type { EchartsAxisConfig } from '../../../../types/field-definitions/echarts-fields';

/**
 * Collapsible per-axis raw echarts JSON override (ADR-0037). The analysis chips need the card
 * state (axis config + inherited colour/name) so conditional managed keys classify honestly.
 * Since ADR-0042 the templates are a persistent checkbox multi-select composing the raw text
 * with the Eigenanteil — deactivation removes the pristine leaves, hand edits survive.
 */
const AxisRawOverride: FC<{
    raw: string | undefined;
    onChange: (value: string) => void;
    /** The card's axis config — drives the state-aware ✓/◐/✗ classification. */
    axis: EchartsAxisConfig;
    /** Effective colour of the first bound series (the axis-colour default, ADR-0018). */
    seriesColor?: string;
    /** Effective name of the first bound series (the axis-name default, ADR-0018). */
    seriesName?: string;
    /** Ordered ACTIVE axis-template ids (ADR-0042 — the axis config's `snippets`). */
    snippets?: string[];
    /**
     * Recomposition callback (ADR-0042): the new editor text + activation ids, so the caller
     * commits BOTH into the axis config in one history step.
     */
    onToggle?: (result: { text: string; ids: string[] }) => void;
}> = ({ raw, onChange, axis, seriesColor, seriesName, snippets, onToggle }) => {
    const [open, setOpen] = useState(false);
    // The shared multi-select wiring (ADR-0042): run the seam, hand BOTH layers to the card in
    // one callback, surface the recomposition notice.
    const { toggle, notice, clearNotice } = useSnippetToggle(r => onToggle?.(r));
    const trimmed = (raw ?? '').trim();
    const parsed = parseRawObject(raw ?? '');
    const valid = !trimmed || !!parsed;
    // State-aware key analysis (ADR-0037): ✓ effective · ◐ partial · ✗ card-managed.
    const chips = parsed ? classifyAxisKeys(parsed, { axis, seriesColor, seriesName }) : [];

    const runToggle = (id: string): void =>
        toggle({ templates: AXIS_TEMPLATES, ids: snippets ?? [], id, currentText: raw ?? '' });
    const entries = activeSnippetEntries(AXIS_TEMPLATES, snippets ?? []);
    const statuses = snippetStatuses(AXIS_TEMPLATES, snippets ?? [], v =>
        classifyAxisKeys(v, { axis, seriesColor, seriesName }),
    );

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
                    statuses={statuses}
                    onRemove={runToggle}
                />
                <JsonEditor
                    value={raw ?? ''}
                    onChange={onChange}
                    minRows={3}
                    placeholder={'{\n  "minorTick": { "show": true }\n}'}
                />
                <Typography
                    variant="caption"
                    sx={{ color: valid ? 'success.main' : 'error.main', display: 'block' }}
                >
                    {valid ? Generic.t('echarts_editor_valid_json') : `✗ ${Generic.t('echarts_axis_raw_invalid')}`}
                </Typography>
                {chips.length > 0 && (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 0.5 }}>
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
                                    sx={{ opacity: 0.6, textDecoration: 'line-through' }}
                                />
                            );
                        })}
                    </Box>
                )}
                <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ display: 'block', mt: 0.5 }}
                >
                    {Generic.t('echarts_axis_raw_hint')}
                </Typography>
                <SnippetNotice
                    notice={notice}
                    onClose={clearNotice}
                />
            </Collapse>
        </Box>
    );
};

export default AxisRawOverride;
