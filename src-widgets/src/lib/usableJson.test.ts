import { describe, expect, it } from 'vitest';

import { encodeBlob } from './encoding';
import { anyOf, isFlag, isJsonNumber, isText, isTextList, readUsableJson, withoutBroken } from './usableJson';

describe('readUsableJson', () => {
    it('reads JSON text, plain or as blob, of the declared top level', () => {
        expect(readUsableJson({ json: 'array' }, '[1,2]')).toEqual([1, 2]);
        expect(readUsableJson({ json: 'array' }, encodeBlob('[1,2]'))).toEqual([1, 2]);
        expect(readUsableJson({ json: 'object' }, '{"a":1}')).toEqual({ a: 1 });
    });

    it.each([
        ['undefined', undefined],
        ['null', null],
        ['empty text', ''],
        ['unparsable JSON', '{"oops'],
        ['plain text that is no JSON', 'a,b'],
        ['a broken blob', 'b64:!!!'],
        ['the other top level', '{}'],
        ['JSON null', 'null'],
        ['a number', 5],
        ['a list instead of its JSON text', [1]],
    ])('reads %s as no value', (_case, raw) => {
        expect(readUsableJson({ json: 'array' }, raw)).toBeUndefined();
    });
});

describe('withoutBroken', () => {
    const kinds = { name: isText, size: isJsonNumber, on: isFlag, tags: isTextList, at: anyOf(isJsonNumber, isText) };

    it('returns the object itself when every key is of its kind', () => {
        const object = { name: 'a', size: 2, on: true, tags: ['x'], at: '1m', other: { any: 1 } };
        expect(withoutBroken(object, kinds)).toBe(object);
    });

    it('leaves out a key whose value is not of its kind, null included, and keeps keys it does not know', () => {
        expect(
            withoutBroken({ name: 5, size: '2', on: 'true', tags: ['x', 1], at: false, other: null, keep: 'k' }, kinds),
        ).toEqual({ other: null, keep: 'k' });
        expect(withoutBroken({ name: null, size: Number.NaN }, kinds)).toEqual({});
    });
});
