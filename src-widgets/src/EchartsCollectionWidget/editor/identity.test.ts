/**
 * identity — shared stable-id helper for mark-lines + radar indicators.
 *
 * @module EchartsCollectionWidget/editor/identity.test
 */
import { describe, expect, it } from 'vitest';

import { nextStableId, withStableIds } from './identity';

interface Item {
    id?: string;
    value: number;
}

describe('identity', () => {
    it('nextStableId returns a unique, truthy id per call', () => {
        const a = nextStableId();
        const b = nextStableId();
        expect(a).toBeTruthy();
        expect(b).toBeTruthy();
        expect(a).not.toBe(b);
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
});
