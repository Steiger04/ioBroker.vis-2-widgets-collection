/**
 * seriesIdentity — stable series id for React-key reconciliation (analogue of axisLayout's id helpers).
 *
 * @module EchartsCollectionWidget/editor/seriesIdentity.test
 */
import { describe, expect, it } from 'vitest';

import { nextSeriesId, normalizeSeries } from './seriesIdentity';
import type { EditorSeries } from './editorState';

describe('seriesIdentity', () => {
    it('nextSeriesId returns a unique, truthy id per call', () => {
        const a = nextSeriesId();
        const b = nextSeriesId();
        expect(a).toBeTruthy();
        expect(b).toBeTruthy();
        expect(a).not.toBe(b);
    });

    it('normalizeSeries backfills an id on series missing one, leaves id-bearing series untouched', () => {
        const withId: EditorSeries = { id: 'keep-me', oid: 'a', name: 'A' };
        const withoutId: EditorSeries = { oid: 'b', name: 'B' };
        const out = normalizeSeries([withId, withoutId]);
        expect(out[0].id).toBe('keep-me'); // preserved
        expect(out[0]).toBe(withId); // same reference — not cloned when id present
        expect(out[1].id).toBeTruthy(); // backfilled
        expect(out[1].name).toBe('B'); // other fields preserved
    });

    it('normalizeSeries gives every backfilled series a distinct id', () => {
        const out = normalizeSeries([{ oid: 'a' }, { oid: 'b' }, { oid: 'c' }]);
        const ids = out.map(s => s.id);
        expect(new Set(ids).size).toBe(3);
    });
});
