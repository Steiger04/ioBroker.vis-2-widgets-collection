/**
 * Unit tests for the snippet composition seam (ADR-0042) — persistent template activation,
 * two-source composition, leaf attribution and derived tombstones.
 *
 * @module EchartsCollectionWidget/editor/snippetComposition.test
 */
import { describe, expect, it } from 'vitest';

import { composeActiveSnippets, pruneSnippetIds, toggleSnippet, type SnippetTemplate } from './snippetComposition';

/** Full catalog shape (id/category/label/json) — the seam only needs id + json. */
type TestTemplate = SnippetTemplate & { category: string; label: string };

const TEMPLATES: TestTemplate[] = [
    {
        id: 'tooltip-cross',
        category: 'tooltip',
        label: 'tooltip · cross',
        json: '{ "tooltip": { "trigger": "item", "axisPointer": { "type": "cross" } } }',
    },
    {
        id: 'tooltip-confine',
        category: 'tooltip',
        label: 'tooltip · confine',
        json: '{ "tooltip": { "confine": true } }',
    },
    {
        id: 'title-subtext',
        category: 'title',
        label: 'title · subtext',
        json: '{ "title": { "subtext": "Unit: kWh", "subtextStyle": { "color": "#888" } } }',
    },
    {
        id: 'mark-peak',
        category: 'annotations',
        label: 'markPoint · peaks',
        json: '{ "markPoint": { "data": [{ "type": "max" }, { "type": "min" }] } }',
    },
    // Two snippets sharing one leaf — the conflict case (ADR-0042 decision 4: last activation wins).
    {
        id: 'legend-scroll',
        category: 'legend',
        label: 'legend · scroll',
        json: '{ "legend": { "type": "scroll", "pageIconSize": 12 } }',
    },
    { id: 'legend-plain', category: 'legend', label: 'legend · plain', json: '{ "legend": { "type": "plain" } }' },
];

const asObject = (text: string): Record<string, unknown> => JSON.parse(text) as Record<string, unknown>;

describe('composeActiveSnippets (ADR-0042)', () => {
    it('deep-merges the active templates in selection order — later ids win shared leaves', () => {
        const composed = composeActiveSnippets(TEMPLATES, ['legend-scroll', 'legend-plain']);
        expect((composed.legend as Record<string, unknown>).type).toBe('plain');
        // The non-conflicting sibling leaf of the earlier snippet survives the conflict.
        expect((composed.legend as Record<string, unknown>).pageIconSize).toBe(12);
    });

    it('skips unknown ids (family-pruned or stale) instead of throwing', () => {
        const composed = composeActiveSnippets(TEMPLATES, ['nope', 'title-subtext']);
        expect((composed.title as Record<string, unknown>).subtext).toBe('Unit: kWh');
        expect(Object.keys(composed)).toHaveLength(1);
    });
});

describe('toggleSnippet — activation & deactivation', () => {
    it('activates a snippet into empty text: pretty JSON, selection records the id, nothing kept', () => {
        const res = toggleSnippet({
            templates: TEMPLATES,
            selection: { ids: [] },
            id: 'tooltip-cross',
            currentText: '',
        });
        expect(res).not.toBeNull();
        expect(res!.selection.ids).toEqual(['tooltip-cross']);
        expect(res!.kept).toBe(0);
        expect(res!.text).toBe(JSON.stringify(JSON.parse(TEMPLATES[0].json), null, 2));
    });

    it('accumulates a second snippet sharing a top-level key without clobbering', () => {
        let res = toggleSnippet({ templates: TEMPLATES, selection: { ids: [] }, id: 'tooltip-cross', currentText: '' });
        res = toggleSnippet({
            templates: TEMPLATES,
            selection: res!.selection,
            id: 'tooltip-confine',
            currentText: res!.text,
        });
        const tooltip = asObject(res!.text).tooltip as Record<string, unknown>;
        expect(tooltip.trigger).toBe('item');
        expect(tooltip.confine).toBe(true);
        expect(res!.selection.ids).toEqual(['tooltip-cross', 'tooltip-confine']);
    });

    it('deactivating removes exactly the pristine leaves — the other snippet keeps its keys', () => {
        let res = toggleSnippet({ templates: TEMPLATES, selection: { ids: [] }, id: 'tooltip-cross', currentText: '' });
        res = toggleSnippet({
            templates: TEMPLATES,
            selection: res!.selection,
            id: 'tooltip-confine',
            currentText: res!.text,
        });
        res = toggleSnippet({
            templates: TEMPLATES,
            selection: res!.selection,
            id: 'tooltip-cross',
            currentText: res!.text,
        });
        expect(res!.selection.ids).toEqual(['tooltip-confine']);
        const obj = asObject(res!.text);
        expect(obj.tooltip).toEqual({ confine: true });
    });

    it('deactivating the last snippet empties the editor text (no {} husk)', () => {
        let res = toggleSnippet({ templates: TEMPLATES, selection: { ids: [] }, id: 'title-subtext', currentText: '' });
        res = toggleSnippet({
            templates: TEMPLATES,
            selection: res!.selection,
            id: 'title-subtext',
            currentText: res!.text,
        });
        expect(res!.text).toBe('');
        expect(res!.selection.ids).toEqual([]);
    });

    it('a conflict leaf reverts to the earlier snippet when the later one is deactivated', () => {
        let res = toggleSnippet({ templates: TEMPLATES, selection: { ids: [] }, id: 'legend-scroll', currentText: '' });
        res = toggleSnippet({
            templates: TEMPLATES,
            selection: res!.selection,
            id: 'legend-plain',
            currentText: res!.text,
        });
        // legend-plain won the shared `type` leaf; deactivating it restores legend-scroll's value.
        res = toggleSnippet({
            templates: TEMPLATES,
            selection: res!.selection,
            id: 'legend-plain',
            currentText: res!.text,
        });
        const legend = asObject(res!.text).legend as Record<string, unknown>;
        expect(legend.type).toBe('scroll');
        expect(legend.pageIconSize).toBe(12);
    });
});

describe('toggleSnippet — Eigenanteil attribution (hand edits survive)', () => {
    it('a hand-changed template leaf becomes Eigenanteil: kept through deactivation and re-activation', () => {
        let res = toggleSnippet({ templates: TEMPLATES, selection: { ids: [] }, id: 'tooltip-cross', currentText: '' });
        // Hand-edit the snippet's leaf value.
        const edited = JSON.stringify({ tooltip: { trigger: 'axis', axisPointer: { type: 'cross' } } }, null, 2);
        res = toggleSnippet({
            templates: TEMPLATES,
            selection: res!.selection,
            id: 'tooltip-cross',
            currentText: edited,
        });
        expect(res!.kept).toBe(1);
        // Deactivation keeps ONLY the changed leaf; the untouched sibling (axisPointer) was template
        // territory and goes with the snippet.
        expect(asObject(res!.text).tooltip).toEqual({ trigger: 'axis' });
        // Re-activation: the Eigenanteil wins over the snippet's own value, the sibling returns.
        res = toggleSnippet({
            templates: TEMPLATES,
            selection: res!.selection,
            id: 'tooltip-cross',
            currentText: res!.text,
        });
        expect(res!.kept).toBe(1);
        const tooltip = asObject(res!.text).tooltip as Record<string, unknown>;
        expect(tooltip.trigger).toBe('axis');
        expect(tooltip.axisPointer).toEqual({ type: 'cross' });
    });

    it('a hand-added key survives every recomposition', () => {
        let res = toggleSnippet({
            templates: TEMPLATES,
            selection: { ids: [] },
            id: 'tooltip-confine',
            currentText: '',
        });
        const withOwn = JSON.stringify({ tooltip: { confine: true, showDelay: 50 } }, null, 2);
        res = toggleSnippet({
            templates: TEMPLATES,
            selection: res!.selection,
            id: 'tooltip-confine',
            currentText: withOwn,
        });
        expect(res!.selection.ids).toEqual([]);
        expect(res!.text).toBe(JSON.stringify({ tooltip: { showDelay: 50 } }, null, 2));
        expect(res!.kept).toBe(1);
    });

    it('arrays are atomic — a hand-edited markPoint.data list is Eigenanteil as a whole', () => {
        let res = toggleSnippet({ templates: TEMPLATES, selection: { ids: [] }, id: 'mark-peak', currentText: '' });
        const edited = JSON.stringify({ markPoint: { data: [{ type: 'average' }] } }, null, 2);
        res = toggleSnippet({ templates: TEMPLATES, selection: res!.selection, id: 'mark-peak', currentText: edited });
        expect(res!.kept).toBe(1);
        expect(asObject(res!.text).markPoint).toEqual({ data: [{ type: 'average' }] });
    });
});

describe('toggleSnippet — tombstones (deletions survive)', () => {
    it('a deleted template leaf stays deleted when ANOTHER snippet is toggled', () => {
        let res = toggleSnippet({ templates: TEMPLATES, selection: { ids: [] }, id: 'title-subtext', currentText: '' });
        // Delete the subtext leaf by hand, keep subtextStyle.
        const deleted = JSON.stringify({ title: { subtextStyle: { color: '#888' } } }, null, 2);
        res = toggleSnippet({
            templates: TEMPLATES,
            selection: res!.selection,
            id: 'tooltip-confine',
            currentText: deleted,
        });
        expect(res!.deleted).toBe(1);
        const obj = asObject(res!.text);
        expect((obj.title as Record<string, unknown>).subtext).toBeUndefined();
        expect((obj.title as Record<string, unknown>).subtextStyle).toEqual({ color: '#888' });
        expect((obj.tooltip as Record<string, unknown>).confine).toBe(true);
    });

    it('deactivating a snippet clears its tombstones — re-activation restores the leaf', () => {
        let res = toggleSnippet({ templates: TEMPLATES, selection: { ids: [] }, id: 'title-subtext', currentText: '' });
        const deleted = JSON.stringify({ title: {} }, null, 2);
        // Deactivate (the deleted leaf vanishes with the snippet — nothing to tombstone).
        res = toggleSnippet({
            templates: TEMPLATES,
            selection: res!.selection,
            id: 'title-subtext',
            currentText: deleted,
        });
        expect(res!.deleted).toBe(0);
        expect(res!.text).toBe('');
        // Re-activate: the pristine snippet returns in full.
        res = toggleSnippet({
            templates: TEMPLATES,
            selection: res!.selection,
            id: 'title-subtext',
            currentText: res!.text,
        });
        expect(res!.deleted).toBe(0);
        expect(asObject(res!.text).title).toEqual({ subtext: 'Unit: kWh', subtextStyle: { color: '#888' } });
    });

    it('a deleted leaf shared by two snippets stays deleted while the other snippet still supplies it', () => {
        let res = toggleSnippet({ templates: TEMPLATES, selection: { ids: [] }, id: 'legend-scroll', currentText: '' });
        res = toggleSnippet({
            templates: TEMPLATES,
            selection: res!.selection,
            id: 'legend-plain',
            currentText: res!.text,
        });
        // Hand-delete the shared `type` leaf (keep pageIconSize from the first snippet).
        const deleted = JSON.stringify({ legend: { pageIconSize: 12 } }, null, 2);
        res = toggleSnippet({
            templates: TEMPLATES,
            selection: res!.selection,
            id: 'legend-plain',
            currentText: deleted,
        });
        expect(res!.deleted).toBe(1);
        expect((asObject(res!.text).legend as Record<string, unknown>).type).toBeUndefined();
        // Deactivating the LAST snippet supplying the leaf clears its tombstone (ADR-0042 decision 5)
        // — re-activation brings the pristine value back.
        res = toggleSnippet({
            templates: TEMPLATES,
            selection: res!.selection,
            id: 'legend-scroll',
            currentText: res!.text,
        });
        res = toggleSnippet({
            templates: TEMPLATES,
            selection: res!.selection,
            id: 'legend-scroll',
            currentText: res!.text,
        });
        expect(res!.deleted).toBe(0);
        expect((asObject(res!.text).legend as Record<string, unknown>).type).toBe('scroll');
    });
});

describe('toggleSnippet — invalid JSON guard (ADR-0042 decision 8)', () => {
    it('returns null on invalid text — the menu is locked, nothing is discarded', () => {
        const res = toggleSnippet({
            templates: TEMPLATES,
            selection: { ids: [] },
            id: 'title-subtext',
            currentText: '{ "tooltip": ',
        });
        expect(res).toBeNull();
    });

    it('returns null on non-object JSON (an array is not a raw override)', () => {
        const res = toggleSnippet({
            templates: TEMPLATES,
            selection: { ids: [] },
            id: 'title-subtext',
            currentText: '[1, 2]',
        });
        expect(res).toBeNull();
    });
});

describe('pruneSnippetIds (family prune on Apply)', () => {
    it('drops ids the catalog no longer offers', () => {
        expect(pruneSnippetIds(TEMPLATES, ['title-subtext', 'gone', 'tooltip-confine'])).toEqual([
            'title-subtext',
            'tooltip-confine',
        ]);
    });

    it('preserves the selection order of the survivors', () => {
        expect(pruneSnippetIds(TEMPLATES, ['legend-plain', 'title-subtext', 'nope'])).toEqual([
            'legend-plain',
            'title-subtext',
        ]);
    });
});
