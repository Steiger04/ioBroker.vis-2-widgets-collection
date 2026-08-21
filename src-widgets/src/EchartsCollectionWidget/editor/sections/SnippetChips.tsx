/**
 * The active-template chip row (ADR-0042 + addendum) — the single template affordance under the
 * template menu at all three raw levels.
 *
 * @module EchartsCollectionWidget/editor/sections/SnippetChips
 * @remarks
 * One plain chip per **Aktive Vorlage**, in selection order: the template's label and an X that
 * deactivates it (the same path as unchecking it in the menu). No status glyphs and no
 * recomposition notice — that honesty layer was retired with the ADR-0042 addendum (the key
 * analysis lives on only as the catalog audit tests). The activation itself follows the raw
 * text: the hosts reconcile the ids on every valid text edit (`reconcileSnippetIds`), so
 * deleting a template's keys inside the editor removes its chip. The pure composition seam
 * lives in editor/snippetComposition.ts; this module holds the React-facing chip row, the
 * entry resolver, and the shared {@link useSnippetActions} wiring the three hosts commit through.
 */
import { type FC } from 'react';
import { Box, Chip } from '@mui/material';

import { reconcileSnippetIds, toggleSnippet, type SnippetCommit, type SnippetTemplate } from '../snippetComposition';

/** One active template as rendered by the chip row. */
export interface ActiveSnippetEntry {
    id: string;
    label: string;
}

/**
 * The shared toggle + text-edit wiring behind all three raw levels (ADR-0042 + addendum): ONE
 * commit path so the levels cannot drift. `toggle` recomposes through the seam; `applyText`
 * reconciles the ids from a valid text edit — both hand a {@link SnippetCommit} to `commit` in
 * one history step. Invalid intermediate JSON (or a host without a commit path) falls back to
 * `onTextChange`, leaving the ids untouched (the menu is locked there anyway).
 */
export const useSnippetActions = (args: {
    templates: readonly SnippetTemplate[];
    ids: readonly string[];
    currentText: string;
    commit: (result: SnippetCommit) => void;
    onTextChange: (value: string) => void;
}): { toggle: (id: string) => void; applyText: (value: string) => void } => ({
    toggle: (id: string): void => {
        const res = toggleSnippet({
            templates: args.templates,
            selection: { ids: [...args.ids] },
            id,
            currentText: args.currentText,
        });
        if (res) {
            args.commit({ text: res.text, ids: res.selection.ids });
        }
    },
    applyText: (value: string): void => {
        const ids = reconcileSnippetIds({ templates: args.templates, ids: args.ids, text: value });
        if (ids) {
            args.commit({ text: value, ids });
        } else {
            args.onTextChange(value);
        }
    },
});

const SnippetChips: FC<{
    entries: readonly ActiveSnippetEntry[];
    /** Deactivate the template (the chip's X — same path as unchecking it in the menu). */
    onRemove: (id: string) => void;
}> = ({ entries, onRemove }) => {
    if (!entries.length) {
        return null;
    }
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 0.5 }}>
            {entries.map(e => (
                <Chip
                    key={e.id}
                    size="small"
                    variant="outlined"
                    label={e.label}
                    onDelete={() => onRemove(e.id)}
                />
            ))}
        </Box>
    );
};

export default SnippetChips;

/** The chip entries for the ACTIVE ids, in selection order, resolved against a catalog. */
export const activeSnippetEntries = (
    templates: readonly { id: string; label: string }[],
    ids: readonly string[],
): ActiveSnippetEntry[] =>
    ids
        .map(id => templates.find(t => t.id === id))
        .filter((t): t is { id: string; label: string } => !!t)
        .map(t => ({ id: t.id, label: t.label }));
