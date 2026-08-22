/**
 * stableId — the single stable-id generator for every keyed editor card list.
 *
 * @module EchartsCollectionWidget/editor/stableId.test
 */
import { afterEach, describe, expect, it, vi } from 'vitest';

import { nextStableId, withStableIds } from './stableId';

interface Item {
    id?: string;
    value: number;
}

describe('stableId', () => {
    it('nextStableId returns a unique, truthy id per call', () => {
        const a = nextStableId();
        const b = nextStableId();
        expect(a).toBeTruthy();
        expect(b).toBeTruthy();
        expect(a).not.toBe(b);
    });

    it('nextStableId honours the per-list prefix in the counter fallback', () => {
        vi.stubGlobal('crypto', { randomUUID: undefined });
        const a = nextStableId('sr-');
        const b = nextStableId('sr-');
        expect(a).toMatch(/^sr-\d+$/);
        expect(b).toMatch(/^sr-\d+$/);
        expect(a).not.toBe(b);
    });

    it('nextStableId counter-fallback defaults to the id- prefix', () => {
        vi.stubGlobal('crypto', { randomUUID: undefined });
        expect(nextStableId()).toMatch(/^id-\d+$/);
    });

    it('withStableIds backfills ids on items missing one, leaves id-bearing items untouched', () => {
        const withId: Item = { id: 'keep', value: 1 };
        const withoutId: Item = { value: 2 };
        const out = withStableIds([withId, withoutId]);
        expect(out[0].id).toBe('keep');
        expect(out[0]).toBe(withId); // same reference — not cloned when id present
        expect(out[1].id).toBeTruthy(); // backfilled
        expect(out[1].value).toBe(2); // other fields preserved
    });

    it('withStableIds gives every backfilled item a distinct id', () => {
        const out = withStableIds<Item>([{ value: 1 }, { value: 2 }, { value: 3 }]);
        expect(new Set(out.map(o => o.id)).size).toBe(3);
    });

    it('withStableIds passes the prefix through to the backfill (counter fallback)', () => {
        vi.stubGlobal('crypto', { randomUUID: undefined });
        const out = withStableIds<Item>([{ value: 1 }], 'ax-');
        expect(out[0].id).toMatch(/^ax-\d+$/);
    });

    it('withStableIds preserves unknown sibling fields (e.g. a raw JSON override) on the backfill spread', () => {
        interface RawItem {
            id?: string;
            raw: string;
        }
        const RAW = '{ "minorTick": { "show": true } }';
        const out = withStableIds<RawItem>([{ id: 'a0', raw: RAW }, { raw: RAW }]);
        expect(out[0].raw).toBe(RAW); // id-bearing item untouched
        expect(out[1].raw).toBe(RAW); // backfilled item keeps raw through the spread
    });

    afterEach(() => {
        vi.unstubAllGlobals();
    });
});
