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
        const data = Object.fromEntries(['size', 'flag', 'mode', 'color', 'config', 'rows'].map(name => [name, value]));

        expect(read(data)).toEqual(data);
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
