/**
 * Tests for JsonTableColumn.samples (zuordnung-redesign ticket 01) — the first ≤3 distinct
 * non-null scalar values per column, in row order, raw and unformatted.
 *
 * @module hooks/useJsonTableAnalysis/samples.test
 */
import { describe, expect, it } from 'vitest';

import { analyzeJsonTable } from './useJsonTableAnalysis';
import type { JsonTableColumn } from './types';

/** Find one column by path — the tests address their column explicitly. */
const column = (result: ReturnType<typeof analyzeJsonTable>, path: string): JsonTableColumn => {
    const col = result.columns.find(c => c.path === path);
    if (!col) {
        throw new Error(`no column ${path} in ${result.columns.map(c => c.path).join(', ')}`);
    }
    return col;
};

describe('analyzeJsonTable — samples (first distinct scalars)', () => {
    it('collects the first distinct non-null values in row order', () => {
        const result = analyzeJsonTable([{ v: 'a' }, { v: 'b' }, { v: 'c' }]);
        expect(column(result, 'v').samples).toEqual(['a', 'b', 'c']);
    });

    it('duplicates do not consume sample slots', () => {
        const result = analyzeJsonTable([{ v: 'Alufelge' }, { v: 'Alufelge' }, { v: 'Stahlfelge' }]);
        expect(column(result, 'v').samples).toEqual(['Alufelge', 'Stahlfelge']);
    });

    it('nulls are skipped, not sampled', () => {
        const result = analyzeJsonTable([{ v: null }, { v: 'a' }, {}, { v: 'b' }, { v: 'c' }, { v: 'd' }]);
        expect(column(result, 'v').samples).toEqual(['a', 'b', 'c']);
    });

    it('caps at three samples', () => {
        const result = analyzeJsonTable([{ v: 1 }, { v: 2 }, { v: 3 }, { v: 4 }, { v: 5 }]);
        expect(column(result, 'v').samples).toEqual([1, 2, 3]);
    });

    it('a null-only column carries no samples key', () => {
        const result = analyzeJsonTable([{ v: null }, { v: null }, {}]);
        expect(column(result, 'v').samples).toBeUndefined();
    });

    it('works through the flattener on nested dot-paths', () => {
        const result = analyzeJsonTable([
            { order: { item: { sku: 'x-1' } } },
            { order: { item: { sku: 'x-2' } } },
            { order: { item: { sku: 'x-1' } } },
        ]);
        expect(column(result, 'order.item.sku').samples).toEqual(['x-1', 'x-2']);
    });

    it('booleans and epoch numbers ride along as scalars', () => {
        const result = analyzeJsonTable([
            { b: true, t: 1_700_000_000 },
            { b: false, t: 1_700_000_001 },
        ]);
        expect(column(result, 'b').samples).toEqual([true, false]);
        expect(column(result, 't').samples).toEqual([1_700_000_000, 1_700_000_001]);
    });
});
