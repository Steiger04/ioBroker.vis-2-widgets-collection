import { describe, expect, it } from 'vitest';

import { encodeBlob } from '../../lib/encoding';
import { parseColumnConfig } from './columnConfig';

/** A Column entry as the column editor stores it. */
const COLUMN = { path: 'value', visible: true, headerName: 'Weight', width: 120 };

describe('parseColumnConfig — the top level (the shared rule)', () => {
    it('reads the blob the column editor stores and the same list as plain JSON alike', () => {
        expect(parseColumnConfig(encodeBlob(JSON.stringify([COLUMN])))).toEqual([COLUMN]);
        expect(parseColumnConfig(JSON.stringify([COLUMN]))).toEqual([COLUMN]);
    });

    it.each([
        ['unset', undefined],
        ['null', null],
        ['empty', ''],
        ['the empty list', '[]'],
        ['unparsable JSON', '{"oops'],
        ['a JSON object', '{"path":"value"}'],
        ['plain text', 'name,value'],
        ['a broken blob', 'b64:!!!'],
        ['a list instead of its JSON text', [COLUMN]],
        ['a number', 5],
    ])('reads %s as no configuration', (_case, raw) => {
        expect(parseColumnConfig(raw)).toEqual([]);
    });
});

describe('parseColumnConfig — the entries', () => {
    it('leaves out an entry that is no Column: no object, or without a text path', () => {
        const junk = [null, 5, 'value', [], {}, { path: 5 }, { headerName: 'Weight' }];

        expect(parseColumnConfig(JSON.stringify([...junk, COLUMN]))).toEqual([COLUMN]);
    });
});
