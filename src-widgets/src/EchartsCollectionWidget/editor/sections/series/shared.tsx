/**
 * Shared building blocks of the Series section (ADR-0019 decomposition, WS5).
 *
 * @module EchartsCollectionWidget/editor/sections/series/shared
 * @remarks
 * The family-agnostic pieces every series sub-view composes: the read-only effective-colour
 * Swatch, the dashed EmptyState with CTA, the OID-first AddSeriesViaOid affordance, the
 * item-scoped IssueList, and the per-series raw-override editor ("Erweitertes JSON", the axis
 * label — ADR-0037 parity) with its template multi-select (ADR-0015/0017/0042) and the
 * state-aware ✓/◐/✗ key analysis (seriesRawAnalysis.ts) aggregating onto the active chips.
 */
import { useState, type FC, type ReactNode } from 'react';
import { Box, Button, Chip, Collapse, Typography } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { SelectID, type Connection, type IobTheme } from '@iobroker/adapter-react-v5';

import Generic from '../../../../Generic';
import JsonEditor from '../../JsonEditor';
import {
    SERIES_TEMPLATES,
    TEMPLATE_CATEGORY_I18N,
    TEMPLATE_CATEGORY_ORDER,
    type SeriesTemplateSlot,
} from '../../seriesTemplates';
import { classifySeriesKeys, type SeriesAnalysisContext } from '../../seriesRawAnalysis';
import TemplateMenu from '../TemplateMenu';
import SnippetChips, { activeSnippetEntries, snippetStatuses, SnippetNotice, useSnippetToggle } from '../SnippetChips';
import type { ValidationIssue } from '../../validation';
import type { OidPickerCtx } from '../../OidPicker';

/** Read-only swatch showing a series' effective colour (explicit → palette slot). */
export const Swatch: FC<{ color: string }> = ({ color }) => (
    <Box
        sx={{
            width: 16,
            height: 16,
            borderRadius: '4px',
            backgroundColor: color,
            border: '1px solid',
            borderColor: 'divider',
            flexShrink: 0,
        }}
    />
);

/**
 * Dashed empty state; the CTA is supplied as children (an OID-picker CTA for cartesian/pie, a plain
 * button for radar indicators — ADR-0010 onboarding, skeleton removed per ADR-0013).
 */
export const EmptyState: FC<{ text: string; children: ReactNode }> = ({ text, children }) => (
    <Box
        sx={{
            border: '1px dashed',
            borderColor: 'divider',
            borderRadius: 1.5,
            p: 2,
            textAlign: 'center',
        }}
    >
        <Typography
            variant="caption"
            color="text.secondary"
            sx={{ display: 'block', mb: 1 }}
        >
            {text}
        </Typography>
        {children}
    </Box>
);

/**
 * An "add series" affordance that opens the OID picker FIRST and creates the series only once an OID
 * is chosen — no empty-OID card beforehand (the user's "keine Serie vor OID-Auswahl"). `variant='cta'`
 * for the empty state, `'button'` for the inline "+" add. cartesian/pie only.
 */
export const AddSeriesViaOid: FC<{
    pickerCtx: OidPickerCtx;
    historyOnly: boolean;
    onPick: (oid: string) => void;
    variant: 'cta' | 'button';
    label: string;
}> = ({ pickerCtx, historyOnly, onPick, variant, label }) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            {variant === 'cta' ? (
                <Button
                    size="small"
                    variant="outlined"
                    startIcon={<AddIcon />}
                    onClick={() => setOpen(true)}
                    sx={{ textTransform: 'none' }}
                >
                    {label}
                </Button>
            ) : (
                <Button
                    size="small"
                    startIcon={<AddIcon />}
                    onClick={() => setOpen(true)}
                    sx={{ mt: 0.5 }}
                >
                    {label}
                </Button>
            )}
            {open && (
                <SelectID
                    socket={pickerCtx.socket as unknown as Connection}
                    theme={pickerCtx.theme as unknown as IobTheme}
                    themeType={pickerCtx.themeType}
                    selected=""
                    title={Generic.t('oid')}
                    {...(historyOnly ? { customFilter: { common: { custom: '_dataSources' } } } : {})}
                    onClose={() => setOpen(false)}
                    onOk={sel => {
                        onPick(typeof sel === 'string' ? sel : (sel?.[0] ?? ''));
                        setOpen(false);
                    }}
                />
            )}
        </>
    );
};

/** Item-scoped validation issues as a compact warning list on top of the section. */
export const IssueList: FC<{ issues: ValidationIssue[] }> = ({ issues }) => (
    <Box
        sx={{
            mb: 1.5,
            p: 1,
            bgcolor: 'action.hover',
            borderLeft: 3,
            borderColor: 'warning.main',
            borderRadius: 0.5,
        }}
    >
        {issues.map((issue, i) => (
            <Typography
                key={i}
                variant="caption"
                color="text.secondary"
                component="div"
            >
                • {issue.args?.length ? `${issue.args[0]}: ` : ''}
                {Generic.t(issue.key, ...(issue.args ?? []).slice(1))}
            </Typography>
        ))}
    </Box>
);

/**
 * Collapsible per-series raw echarts JSON override (ADR-0015/0017) — labelled "Erweitertes JSON"
 * like the axis sibling (ADR-0037 parity). GUI knobs win, data is managed. Since ADR-0042 the
 * templates are a persistent CHECKBOX multi-select ("Aktive Vorlage"): the active snippets compose
 * the raw text with the Eigenanteil, the chips above the editor deactivate them, and the menu
 * locks while the text is invalid JSON. When `analysis` is set, the state-aware ✓/◐/✗ key chips
 * classify every raw key against the series builder's emissions — and aggregate onto each chip.
 */
export const SeriesRawOverride: FC<{
    raw: string | undefined;
    onChange: (value: string) => void;
    slot?: SeriesTemplateSlot;
    /** Card state for the ✓/◐/✗ classification; omit to skip the analysis. */
    analysis?: SeriesAnalysisContext;
    /** Ordered ACTIVE template ids (ADR-0042 — the series meta's `snippets`). */
    snippets?: string[];
    /**
     * Recomposition callback (ADR-0042): the new editor text + activation ids, so the caller
     * commits BOTH into its card state in one history step.
     */
    onToggle?: (result: { text: string; ids: string[] }) => void;
}> = ({ raw, onChange, slot, analysis, snippets, onToggle }) => {
    const [open, setOpen] = useState(false);
    // The shared multi-select wiring (ADR-0042): run the seam, hand BOTH layers to the card in
    // one callback, surface the recomposition notice.
    const { toggle, notice, clearNotice } = useSnippetToggle(r => onToggle?.(r));
    const trimmed = (raw ?? '').trim();
    let parsed: Record<string, unknown> | null = null;
    if (trimmed) {
        try {
            const v = JSON.parse(trimmed);
            parsed = v && typeof v === 'object' && !Array.isArray(v) ? (v as Record<string, unknown>) : null;
        } catch {
            parsed = null;
        }
    }
    const valid = !trimmed || !!parsed;
    const chips = analysis && parsed ? classifySeriesKeys(parsed, analysis) : [];

    const templates = slot ? SERIES_TEMPLATES[slot] : [];
    const runToggle = (id: string): void => {
        if (slot) {
            toggle({ templates, ids: snippets ?? [], id, currentText: raw ?? '' });
        }
    };
    const entries = activeSnippetEntries(templates, snippets ?? []);
    const statuses = analysis
        ? snippetStatuses(templates, snippets ?? [], v => classifySeriesKeys(v, analysis))
        : undefined;

    return (
        <Box sx={{ mt: 1 }}>
            <Button
                size="small"
                onClick={() => setOpen(v => !v)}
                sx={{ textTransform: 'none', color: 'text.secondary', minWidth: 0 }}
            >
                {open ? '−' : '+'} {Generic.t('echarts_series_raw')}
            </Button>
            {/* mountOnEnter: the JsonEditor (Prism highlighting) is expensive — mount it only when
                the raw override is actually opened, never for a collapsed one. */}
            <Collapse
                in={open}
                mountOnEnter
            >
                {slot && (
                    <>
                        <TemplateMenu
                            templates={templates}
                            categoryOrder={TEMPLATE_CATEGORY_ORDER}
                            categoryI18n={TEMPLATE_CATEGORY_I18N}
                            activeIds={snippets ?? []}
                            onToggle={runToggle}
                            disabled={!valid}
                        />
                        <SnippetChips
                            entries={entries}
                            statuses={statuses}
                            onRemove={runToggle}
                        />
                    </>
                )}
                <JsonEditor
                    value={raw ?? ''}
                    onChange={onChange}
                    minRows={3}
                    placeholder={'{\n  "markPoint": { "data": [{ "type": "max" }] }\n}'}
                />
                <Typography
                    variant="caption"
                    sx={{ color: valid ? 'success.main' : 'error.main', display: 'block' }}
                >
                    {valid ? Generic.t('echarts_editor_valid_json') : `✗ ${Generic.t('echarts_series_raw_invalid')}`}
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
                >
                    {Generic.t('echarts_series_raw_hint')}
                </Typography>
                <SnippetNotice
                    notice={notice}
                    onClose={clearNotice}
                />
            </Collapse>
        </Box>
    );
};
