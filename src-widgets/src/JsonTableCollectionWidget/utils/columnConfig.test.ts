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

    /** A Column entry with every key the table reads, each set. */
    const FULL: Record<string, unknown> = {
        path: 'value',
        visible: true,
        headerName: 'Weight',
        width: 120,
        align: 'right',
        format: { type: 'number', numberDecimals: 1 },
        cellStyle: [{ logic: { '<': [{ var: 'value' }, 0] }, backgroundColor: '#ff0000' }],
        cellStyleMode: 'all-match',
        sortable: 'auto',
        filterable: false,
        enableHiding: true,
    };

    it('keeps every key of a well-formed entry, and keys it does not know', () => {
        const entry = { ...FULL, note: 'kept' };

        expect(parseColumnConfig(JSON.stringify([entry]))).toEqual([entry]);
    });

    it.each([
        ['visible', ['true', 1]],
        ['headerName', [5, { text: 'Weight' }]],
        ['width', ['abc', '120', -5, 0, { px: 120 }]],
        ['align', ['middle', 5]],
        ['format', ['number', 5, [], {}, { type: 'nope' }]],
        ['cellStyle', [{}, 'red', 5]],
        ['cellStyleMode', ['any', 5]],
        ['sortable', ['yes', 1]],
        ['filterable', ['yes', 1]],
        ['enableHiding', ['yes', 1]],
    ])('reads a broken %s like the key left out', (key, values) => {
        const { [key]: _left, ...without } = FULL;
        for (const value of values) {
            expect(parseColumnConfig(JSON.stringify([{ ...FULL, [key]: value }])), JSON.stringify(value)).toEqual([
                without,
            ]);
        }
    });
});

describe('parseColumnConfig — the conditional styles', () => {
    const RULE: Record<string, unknown> = {
        id: 'r1',
        logic: { '<': [{ var: 'value' }, 0] },
        backgroundColor: '#ff0000',
        textColor: '#ffffff',
        fontWeight: 'bold',
        fontStyle: 'italic',
    };
    const styled = (cellStyle: unknown[]): string => JSON.stringify([{ path: 'value', cellStyle }]);

    it('keeps a well-formed rule', () => {
        expect(parseColumnConfig(styled([RULE]))).toEqual([{ path: 'value', cellStyle: [RULE] }]);
    });

    it('leaves out a rule that is no object', () => {
        expect(parseColumnConfig(styled([null, 5, 'red', [], RULE]))).toEqual([{ path: 'value', cellStyle: [RULE] }]);
    });

    it.each([
        ['id', [5]],
        ['logic', ['x < 0', 5, [], null]],
        ['backgroundColor', [5, { color: 'red' }, null]],
        ['textColor', [5, { color: 'red' }, null]],
        ['fontWeight', ['heavy', 700, null]],
        ['fontStyle', ['oblique', 1, null]],
    ])('reads a broken %s of a rule like the key left out', (key, values) => {
        const { [key]: _left, ...without } = RULE;
        for (const value of values) {
            expect(parseColumnConfig(styled([{ ...RULE, [key]: value }])), JSON.stringify(value)).toEqual([
                { path: 'value', cellStyle: [without] },
            ]);
        }
    });
});
