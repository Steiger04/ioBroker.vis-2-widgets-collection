/**
 * The active-template chip row + recomposition wiring (ADR-0042) — the shared surface of the
 * template multi-select at all three raw levels.
 *
 * @module EchartsCollectionWidget/editor/sections/SnippetChips
 * @remarks
 * One chip per **Aktive Vorlage**, in selection order, carrying the worst-wins aggregate of its
 * leaves' ✓/◐/✗ analysis (✗ only when EVERY leaf is swallowed — the "brings you nothing,
 * deactivate" signal). X on the chip deactivates. The hosts share three pieces of wiring so the
 * three levels can never drift apart: {@link useSnippetToggle} (run the seam, commit both layers
 * in one history step, surface the notice), {@link activeSnippetEntries} (the chip list from a
 * catalog) and {@link snippetStatuses} (per-chip verdicts via the level's classifier). The
 * recomposition notice ("n Schlüsser blieben erhalten · n bleiben gelöscht") rides the advisory
 * Snackbar idiom the Axes section established. The pure composition seam lives in
 * editor/snippetComposition.ts; this module holds only the localized, React-facing adapters.
 */
import { useState, type FC } from 'react';
import { Alert, Box, Chip, Snackbar } from '@mui/material';

import Generic from '../../../Generic';
import { toggleSnippet, type SnippetTemplate } from '../snippetComposition';

/** A chip's aggregated honesty verdict: ✓ all leaves effective · ◐ mixed · ✗ every leaf swallowed. */
export type SnippetStatus = 'ok' | 'mixed' | 'dead';

/** Worst-wins aggregation over a snippet's classification chips (✗ only when every leaf is dead). */
export const aggregateSnippetStatus = (chips: { cls: 'effective' | 'partial' | 'ignored' }[]): SnippetStatus => {
    if (!chips.length || chips.every(c => c.cls === 'effective')) {
        return 'ok';
    }
    return chips.every(c => c.cls === 'ignored') ? 'dead' : 'mixed';
};

/** One active template as rendered by the chip row. */
export interface ActiveSnippetEntry {
    id: string;
    label: string;
    /** Tooltip override (e.g. a family-stale activation's "removed on Apply" note). */
    note?: string;
}

const STATUS_GLYPH: Record<SnippetStatus, string> = { ok: '✓', mixed: '◐', dead: '✗' };

const SnippetChips: FC<{
    entries: readonly ActiveSnippetEntry[];
    /** Per-id aggregated verdict; an absent id renders neutral (no analysis context available). */
    statuses?: Record<string, SnippetStatus>;
    /** Deactivate the template (the chip's X — same path as unchecking it in the menu). */
    onRemove: (id: string) => void;
}> = ({ entries, statuses, onRemove }) => {
    if (!entries.length) {
        return null;
    }
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 0.5 }}>
            {entries.map(e => {
                const status = statuses?.[e.id] ?? 'ok';
                const tooltip =
                    status === 'ok'
                        ? Generic.t('echarts_stpl_chip_ok')
                        : status === 'mixed'
                          ? Generic.t('echarts_stpl_chip_mixed')
                          : Generic.t('echarts_stpl_chip_dead');
                return (
                    <Chip
                        key={e.id}
                        size="small"
                        variant="outlined"
                        color={status === 'ok' ? 'success' : status === 'mixed' ? 'warning' : 'default'}
                        label={`${e.label} ${STATUS_GLYPH[status]}`}
                        title={e.note ?? tooltip}
                        onDelete={() => onRemove(e.id)}
                        sx={status === 'dead' ? { opacity: 0.6, textDecoration: 'line-through' } : undefined}
                    />
                );
            })}
        </Box>
    );
};

export default SnippetChips;

/** One toggle's host-facing outcome: the recomposed text, the next ids, and the notice (if any). */
export interface HostToggleResult {
    text: string;
    ids: string[];
    notice: string | null;
}

/**
 * Run one activation toggle through the composition seam and shape it for a host. `null` mirrors
 * the seam's invalid-JSON guard — the menu should be locked, so a null here is a stale call to drop.
 */
export const runSnippetToggle = (args: {
    templates: readonly SnippetTemplate[];
    ids: readonly string[];
    id: string;
    currentText: string;
}): HostToggleResult | null => {
    const res = toggleSnippet({
        templates: args.templates,
        selection: { ids: [...args.ids] },
        id: args.id,
        currentText: args.currentText,
    });
    if (!res) {
        return null;
    }
    const parts: string[] = [];
    if (res.kept > 0) {
        parts.push(Generic.t('echarts_stpl_kept', String(res.kept)));
    }
    if (res.deleted > 0) {
        parts.push(Generic.t('echarts_stpl_stay_deleted', String(res.deleted)));
    }
    return { text: res.text, ids: res.selection.ids, notice: parts.length ? parts.join(' · ') : null };
};

/** The wiring {@link useSnippetToggle} hands its host. */
export interface SnippetToggleApi {
    /** Toggle one activation through the seam (args: catalog, active ids, target id, raw text). */
    toggle: (args: {
        templates: readonly SnippetTemplate[];
        ids: readonly string[];
        id: string;
        currentText: string;
    }) => void;
    /** The recomposition notice to render via {@link SnippetNotice}. */
    notice: string | null;
    /** Dismiss the notice. */
    clearNotice: () => void;
}

/**
 * The per-host toggle wiring: run the seam, commit BOTH layers (text + ids) through the host's
 * callback, surface the recomposition notice. One hook behind all three levels so the
 * null-guard and notice handling stay identical.
 */
export const useSnippetToggle = (commit: (result: HostToggleResult) => void): SnippetToggleApi => {
    const [notice, setNotice] = useState<string | null>(null);
    const toggle = (args: {
        templates: readonly SnippetTemplate[];
        ids: readonly string[];
        id: string;
        currentText: string;
    }): void => {
        const res = runSnippetToggle(args);
        if (!res) {
            return; // invalid text — the menu is locked; a stale call is dropped
        }
        commit(res);
        if (res.notice) {
            setNotice(res.notice);
        }
    };
    return { toggle, notice, clearNotice: () => setNotice(null) };
};

/** The chip entries for the ACTIVE ids, in selection order, resolved against a catalog. */
export const activeSnippetEntries = (
    templates: readonly { id: string; label: string }[],
    ids: readonly string[],
): ActiveSnippetEntry[] =>
    ids
        .map(id => templates.find(t => t.id === id))
        .filter((t): t is { id: string; label: string } => !!t)
        .map(t => ({ id: t.id, label: t.label }));

/** Parse a catalog entry's JSON payload — catalog-audited valid; `?? {}` is the belt-and-braces. */
const parseSnippetValue = (json: string): Record<string, unknown> => {
    try {
        const v = JSON.parse(json);
        return v && typeof v === 'object' && !Array.isArray(v) ? (v as Record<string, unknown>) : {};
    } catch {
        return {};
    }
};

/**
 * Per-chip verdicts: classify each ACTIVE template's own payload with the level's classifier
 * (the same ✓/◐/✗ analysis the editor shows for the composed text) and worst-wins aggregate it.
 */
export const snippetStatuses = (
    templates: readonly SnippetTemplate[],
    ids: readonly string[],
    classify: (value: Record<string, unknown>) => { cls: 'effective' | 'partial' | 'ignored' }[],
): Record<string, SnippetStatus> => {
    const out: Record<string, SnippetStatus> = {};
    for (const t of templates) {
        if (ids.includes(t.id)) {
            out[t.id] = aggregateSnippetStatus(classify(parseSnippetValue(t.json)));
        }
    }
    return out;
};

/** The recomposition notice — the advisory Snackbar idiom (Axes section precedent), auto-hiding. */
export const SnippetNotice: FC<{ notice: string | null; onClose: () => void }> = ({ notice, onClose }) => (
    <Snackbar
        open={!!notice}
        autoHideDuration={5000}
        onClose={onClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
        <Alert
            severity="info"
            variant="filled"
            onClose={onClose}
            sx={{ alignItems: 'center' }}
        >
            {notice}
        </Alert>
    </Snackbar>
);
