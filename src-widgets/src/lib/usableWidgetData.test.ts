/**
 * The Rückfall-Regel at its seam: which stored values the widget reads as unset.
 *
 * @module lib/usableWidgetData.test
 */
import { describe, expect, it } from 'vitest';

import { encodeBlob } from './encoding';
import { fieldRulesOf, usableWidgetData } from './usableWidgetData';

import type { RxWidgetInfoGroup } from '@iobroker/types-vis-2';

const groups = [
    {
        name: 'common',
        fields: [
            { name: 'size', type: 'slider', min: 0, max: 100 },
            { name: 'delay', type: 'number' },
            { name: 'flag', type: 'checkbox' },
            { name: 'mode', type: 'select', options: ['a', 'b'] },
            { name: 'align', type: 'select', options: ['', 'left'] },
            {
                name: 'side',
                type: 'select',
                options: [
                    { value: 'left', label: 'left' },
                    { value: 1, label: 'one' },
                ],
            },
            { name: 'label', type: 'text' },
            { name: 'color', type: 'custom', storedValue: 'string' },
            { name: 'config', type: 'custom', storedValue: { json: 'object' } },
            { name: 'rows', type: 'custom', storedValue: { json: 'array' } },
            { name: 'button', type: 'custom' },
            { type: 'custom' },
        ],
    },
] as unknown as RxWidgetInfoGroup[];

const rules = fieldRulesOf(groups);
const read = (data: Record<string, unknown>): Record<string, unknown> => usableWidgetData(data, rules);

describe('usableWidgetData: an unusable stored value reads as unset', () => {
    it.each([
        ['a number field with text', 'size', 'abc'],
        ['a number field with a boolean', 'size', true],
        ['a number field with an object', 'delay', { value: 5 }],
        ['a number field with a list', 'delay', [5]],
        ['a checkbox with a string', 'flag', 'true'],
        ['a checkbox with a number', 'flag', 1],
        ['a select with a value outside its options', 'mode', 'c'],
        ['a select with the right value in the wrong type', 'side', '1'],
        // vis-2's select stores only its options: '' there comes from raw data and means nothing.
        ['a select with an empty string outside its options', 'mode', ''],
        ['a select of option objects with an empty string outside its options', 'side', ''],
        ['a string custom field with a number', 'color', 5],
        ['a string custom field with an object', 'color', { r: 1 }],
        ['a JSON field with no JSON', 'config', '{oops'],
        ['a JSON field with a broken blob', 'config', 'b64:%%%'],
        ['a JSON object field holding a list', 'config', '[]'],
        ['a JSON list field holding an object', 'rows', '{}'],
        ['a JSON field with an object instead of its text', 'config', { a: 1 }],
        ['a JSON field with a number', 'rows', 5],
    ])('drops %s', (_case, name, value) => {
        const data = { [name]: value, label: 'kept' };

        expect(read(data)).toEqual({ label: 'kept' });
    });

    it('leaves the stored data untouched', () => {
        const data = { size: 'abc' };

        read(data);

        expect(data).toEqual({ size: 'abc' });
    });
});

describe('usableWidgetData: usable values stay as stored', () => {
    it.each([
        ['a number', 'size', 12],
        ['a numeric string (vis-2 text input, bindings)', 'delay', ' 12.5 '],
        ['a boolean', 'flag', false],
        ['an option', 'mode', 'b'],
        ['an option value of an option object', 'side', 1],
        ['a string', 'color', '#ff0000'],
        ['a JSON object', 'config', '{"a":1}'],
        ['a JSON object as blob', 'config', encodeBlob('{"a":1}')],
        ['a JSON list', 'rows', '[{"a":1}]'],
        ['any value of an undeclared custom field', 'button', 5],
        ['any value of a text field', 'label', 5],
        ['any key without a field', 'unknownKey', { a: 1 }],
    ])('keeps %s', (_case, name, value) => {
        expect(read({ [name]: value })).toEqual({ [name]: value });
    });

    it.each([
        ['undefined', undefined],
        ['null', null],
        ['an empty string', ''],
    ])('keeps %s on every kind of field (already unset, or a meaning of its own)', (_case, value) => {
        const data = Object.fromEntries(['size', 'flag', 'color', 'config', 'rows'].map(name => [name, value]));

        expect(read(data)).toEqual(data);
    });

    it.each([
        ['undefined', undefined],
        ['null', null],
    ])('keeps %s in a select field (already unset)', (_case, value) => {
        expect(read({ mode: value, side: value })).toEqual({ mode: value, side: value });
    });

    it('keeps an empty string in a select field that offers it', () => {
        expect(read({ align: '' })).toEqual({ align: '' });
    });

    it('returns the very same data object when nothing is unusable', () => {
        const data = { size: 12, flag: true, mode: 'a' };

        expect(read(data)).toBe(data);
    });

    it('returns the same reading for the same data object', () => {
        const data = { size: 'abc' };

        expect(read(data)).toBe(read(data));
    });
});

describe('usableWidgetData: a value the host substituted into the stored attribute stays as it is', () => {
    it.each([
        ['a bound select resolved to text outside its options', 'mode', '{0_userdata.0.mode}', 'c'],
        ['a bound number field resolved to text', 'size', '{0_userdata.0.size;*2}', 'NaN'],
        ['a bound text field', 'label', '{0_userdata.0.label}', 'false'],
    ])('keeps %s', (_case, name, stored, resolved) => {
        const data = { [name]: resolved };

        expect(usableWidgetData(data, rules, { [name]: stored })).toEqual(data);
    });

    it.each([
        ['JSON braces in quotes (vis-2: no binding)', '{"a":1}'],
        ['nested braces (vis-2: no binding)', '{{x}}'],
    ])('still reads text with %s as stored, unbound', (_case, stored) => {
        expect(usableWidgetData({ flag: stored }, rules, { flag: stored })).toEqual({});
    });

    // vis-2 resolves every binding to text (formatBinding); a checkbox field reads that text the way
    // the Sperre reads a bound onlyDisplay (lib/helper/readsAsOn).
    it.each([
        ['a binding resolved to "true"', '{0_userdata.0.lock}', 'true', true],
        ['a binding resolved to "false"', '{0_userdata.0.lock}', 'false', false],
        ['a binding resolved to "0"', '{0_userdata.0.lock}', '0', false],
        ['a binding resolved to ""', '{0_userdata.0.lock}', '', false],
        ['a binding resolved to "1"', '{0_userdata.0.lock}', '1', true],
        ['a binding not resolved yet', '{0_userdata.0.lock}', '{0_userdata.0.lock}', true],
        ['a group attribute substituted by the host', '%lockAttr%', 'yes', true],
    ])('reads a checkbox field with %s as the boolean it names', (_case, stored, resolved, flag) => {
        expect(usableWidgetData({ flag: resolved }, rules, { flag: stored })).toEqual({ flag });
    });

    it('leaves the stored data and the host data untouched', () => {
        const data = { flag: 'false' };
        const stored = { flag: '{0_userdata.0.lock}' };

        usableWidgetData(data, rules, stored);
        expect(data).toEqual({ flag: 'false' });
        expect(stored).toEqual({ flag: '{0_userdata.0.lock}' });
    });

    it('still drops a broken value the host left as stored', () => {
        expect(usableWidgetData({ flag: 'true', size: 'abc' }, rules, { flag: 'true', size: 'abc' })).toEqual({});
    });
});

describe('usableWidgetData: fields stored per Feldnummer (the Zustandszeilen, name{n})', () => {
    const rowGroups = [
        {
            name: 'values',
            fields: [
                { name: 'values_count', type: 'custom', storedValue: 'number' },
                // A Zustandseditor detail field: it edits `iconSize{n}` / `iconColor{n}` / `value{n}` of every row.
                { name: 'stateEditor:iconSize', type: 'custom', perStateField: { name: 'iconSize', type: 'slider' } },
                {
                    name: 'stateEditor:iconColor',
                    type: 'custom',
                    perStateField: { name: 'iconColor', type: 'custom', storedValue: 'string' },
                },
                { name: 'stateEditor:value', type: 'custom', perStateField: { name: 'value', type: 'text' } },
            ],
        },
        { name: 'own', fields: [{ name: 'iconSize2', type: 'checkbox' }] },
    ] as unknown as RxWidgetInfoGroup[];
    const rowRules = fieldRulesOf(rowGroups);

    it('reads an unusable value of any row as unset', () => {
        expect(usableWidgetData({ iconSize1: 'abc', iconSize12: true, iconColor3: 5, value1: 1 }, rowRules)).toEqual({
            value1: 1,
        });
    });

    it('keeps usable row values, the base name itself and keys without a Feldnummer', () => {
        const data = { iconSize1: '12', iconColor3: '#fff', iconSize: 'abc', iconSizeX: 'abc', iconSize0: 'abc' };

        expect(usableWidgetData(data, rowRules)).toBe(data);
    });

    it('lets a field of the same name win over the row rule', () => {
        expect(usableWidgetData({ iconSize2: 12 }, rowRules)).toEqual({});
        expect(usableWidgetData({ iconSize2: true }, rowRules)).toEqual({ iconSize2: true });
    });

    it('reads a bound row value of a checkbox field as the boolean it names', () => {
        const flagRules = fieldRulesOf([
            {
                name: 'values',
                fields: [
                    { name: 'stateEditor:mask', type: 'custom', perStateField: { name: 'mask', type: 'checkbox' } },
                ],
            },
        ] as unknown as RxWidgetInfoGroup[]);

        expect(usableWidgetData({ mask1: 'false' }, flagRules, { mask1: '{0_userdata.0.mask}' })).toEqual({
            mask1: false,
        });
    });

    it('keeps a bound row value as the host resolved it', () => {
        expect(usableWidgetData({ iconSize1: 'big' }, rowRules, { iconSize1: '{0_userdata.0.size}' })).toEqual({
            iconSize1: 'big',
        });
    });
});

describe('usableWidgetData: fields of a vis-2 indexed group (stored as name{n})', () => {
    const indexedRules = fieldRulesOf([
        {
            name: 'series',
            indexFrom: 1,
            indexTo: 'series_count',
            fields: [
                { name: 'width', type: 'number' },
                { name: 'oid', type: 'id' },
            ],
        },
    ] as unknown as RxWidgetInfoGroup[]);

    it('reads an unusable value of any index as unset, the way of the Zustandszeilen', () => {
        expect(usableWidgetData({ width1: 'abc', width2: 3, width3: '4', oid1: 5 }, indexedRules)).toEqual({
            width2: 3,
            width3: '4',
            oid1: 5,
        });
    });

    it('stores no field under the bare name', () => {
        const data = { width: 'abc' };

        expect(usableWidgetData(data, indexedRules)).toBe(data);
    });
});

describe('usableWidgetData: a text field that declares the JSON it stores (a hidden configuration blob)', () => {
    const blobRules = fieldRulesOf([
        {
            name: 'chart',
            fields: [
                { name: 'axes', type: 'text', storedValue: { json: 'array' } },
                { name: 'title', type: 'text' },
            ],
        },
    ] as unknown as RxWidgetInfoGroup[]);

    it('reads JSON of another top level, unparsable text or no text as unset', () => {
        for (const axes of ['{}', '{"oops', 'a,b', 5, [1]]) {
            expect(usableWidgetData({ axes, title: 5 }, blobRules), JSON.stringify(axes)).toEqual({ title: 5 });
        }
    });

    it('keeps its JSON, plain or as blob, and its empty text', () => {
        for (const axes of ['[]', encodeBlob('[{"name":"a"}]'), '', null]) {
            const data = { axes };
            expect(usableWidgetData(data, blobRules)).toBe(data);
        }
    });
});

// vis-2's number field stores '' once the user empties it. A field whose reading of '' is the unset
// field's declares it (`emptiedReadsUnset`): the rule reads its '' as unset, stored or bound — and a
// bound value its rule rejects, which its reader read as unset too.
describe('usableWidgetData: a field that declares its emptied value as unset', () => {
    const emptiedRules = fieldRulesOf([
        {
            name: 'own',
            fields: [
                { name: 'gap', type: 'number', emptiedReadsUnset: true },
                { name: 'variant', type: 'select', options: ['a', 'b'], emptiedReadsUnset: true },
                { name: 'sizes', type: 'text', emptiedReadsUnset: true },
                { name: 'padding', type: 'number' },
            ],
        },
    ] as unknown as RxWidgetInfoGroup[]);

    it('reads its stored "" and null as unset', () => {
        expect(usableWidgetData({ gap: '', variant: '', sizes: '', padding: '' }, emptiedRules)).toEqual({
            padding: '',
        });
        expect(usableWidgetData({ gap: null, sizes: null, padding: null }, emptiedRules)).toEqual({ padding: null });
    });

    it('reads a bound "" and a bound value its rule rejects as unset', () => {
        const bound = { gap: '{0_userdata.0.gap}', variant: '{0_userdata.0.variant}', sizes: '{0_userdata.0.sizes}' };

        expect(usableWidgetData({ gap: '', variant: '', sizes: '' }, emptiedRules, bound)).toEqual({});
        expect(usableWidgetData({ gap: 'abc', variant: 'c', sizes: 'abc' }, emptiedRules, bound)).toEqual({
            sizes: 'abc',
        });
    });

    it('keeps a bound value its rule accepts, and a bound "" of an undeclared field', () => {
        const data = { gap: '12', variant: 'b', padding: '' };

        expect(
            usableWidgetData(data, emptiedRules, {
                gap: '{0_userdata.0.gap}',
                variant: '{0_userdata.0.variant}',
                padding: '{0_userdata.0.padding}',
            }),
        ).toBe(data);
    });

    it('keeps its usable stored values, as the same data object', () => {
        const data = { gap: 0, variant: 'a', sizes: '10,20' };

        expect(usableWidgetData(data, emptiedRules)).toBe(data);
    });
});
