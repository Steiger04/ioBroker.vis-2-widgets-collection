/**
 * Tests for the Zuordnung's schema core (ADR-0075 ticket 03) — array discovery (the Zeilenpfad
 * options), the chosen rows' column analysis (the shared engine, editor-side only) and the
 * error surface parity with `parseJsonTableState`.
 *
 * @module EchartsCollectionWidget/editor/useJsonTableSchema.test
 */
import { describe, expect, it } from 'vitest';

import { analyzeJsonTableSchema, suggestedRowPath } from './useJsonTableSchema';

const RAW_NESTED = JSON.stringify({
    meta: { title: 'x' },
    data: {
        rows: [
            { ts: '2024-12-01', temp: 20, on: true },
            { ts: '2024-12-02', temp: 21 },
        ],
    },
    tags: ['a', 'b'],
});

describe('analyzeJsonTableSchema — array discovery (the Zeilenpfad options)', () => {
    it('a top-level array is the path "" candidate', () => {
        const out = analyzeJsonTableSchema(JSON.stringify([{ a: 1 }]), '');
        expect(out.arrayPaths).toEqual([{ path: '', length: 1 }]);
    });

    it('nested object-key arrays are discovered with their sample lengths', () => {
        const out = analyzeJsonTableSchema(RAW_NESTED, 'data.rows');
        expect(out.arrayPaths).toEqual([
            { path: 'data.rows', length: 2 },
            { path: 'tags', length: 2 },
        ]);
    });

    it('arrays INSIDE array elements are not rows candidates (that is the column sight)', () => {
        const out = analyzeJsonTableSchema(JSON.stringify([{ items: [1, 2] }, { items: [3] }]), '');
        expect(out.arrayPaths.map(p => p.path)).toEqual(['']); // only the top level
    });

    it('the depth cap stops the walk (engine maxDepth parity)', () => {
        // 12 levels deep — the walker stops at depth 10.
        let doc: unknown = { rows: [{ a: 1 }] };
        for (let i = 0; i < 12; i++) {
            doc = { deeper: doc };
        }
        const out = analyzeJsonTableSchema(JSON.stringify(doc), '');
        expect(out.arrayPaths).toEqual([]); // rows sits deeper than the cap
    });

    it('empty raw is not an error — the honest no-payload hint state', () => {
        expect(analyzeJsonTableSchema('', '')).toEqual({ arrayPaths: [], columns: [] });
    });
});

describe('analyzeJsonTableSchema — columns + error surface', () => {
    it('columns come from the CHOSEN rows array (typed by the shared engine)', () => {
        const out = analyzeJsonTableSchema(RAW_NESTED, 'data.rows');
        expect(out.error).toBeUndefined();
        const byPath = Object.fromEntries(out.columns.map(c => [c.path, c.type]));
        expect(byPath.ts).toBe('date');
        expect(byPath.temp).toBe('number');
        expect(byPath.on).toBe('boolean');
    });

    it('rowPath "" reads the top-level array; an unresolvable AUTHORED rowPath is the error', () => {
        const top = analyzeJsonTableSchema(JSON.stringify([{ a: 1 }, { a: 2 }]), '');
        expect(top.columns.map(c => c.path)).toEqual(['a']);
        const drifted = analyzeJsonTableSchema(RAW_NESTED, 'gone.list');
        expect(drifted.error).toBe('rows path "gone.list" is not an array');
        expect(drifted.arrayPaths).toHaveLength(2); // discovery still feeds the select
    });

    it('an UNSET rowPath over an object payload is NO error — the quiet Leerfall + suggestion', () => {
        // Decision 6/9: the error surface belongs to AUTHORED drift; a fresh table widget
        // without a rows choice shows the candidates and stays quiet.
        const out = analyzeJsonTableSchema(RAW_NESTED, '');
        expect(out.error).toBeUndefined();
        expect(out.columns).toEqual([]);
        expect(out.arrayPaths.map(p => p.path)).toEqual(['data.rows', 'tags']);
    });

    it('invalid JSON surfaces the parse error', () => {
        const out = analyzeJsonTableSchema('{nope', '');
        expect(out.error).toBeTruthy();
        expect(out.arrayPaths).toEqual([]);
    });
});

describe('suggestedRowPath (ADR-0075 decision 8 — a suggestion, never silently set)', () => {
    it('top level wins when the payload is an array', () => {
        expect(suggestedRowPath([{ path: '' }, { path: 'data.rows' }])).toBe('');
    });

    it('otherwise the LONGEST discovered path is the suggestion', () => {
        expect(suggestedRowPath([{ path: 'tags' }, { path: 'data.rows' }])).toBe('data.rows');
    });

    it('no arrays → no suggestion (the empty string stays honest)', () => {
        expect(suggestedRowPath([])).toBe('');
    });
});
