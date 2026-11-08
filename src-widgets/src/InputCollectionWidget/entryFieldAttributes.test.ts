import { describe, expect, it } from 'vitest';

import { buildEntryFieldAttributes, type BuildEntryFieldAttributesParams } from './entryFieldAttributes';

type EntryObject = NonNullable<BuildEntryFieldAttributesParams['object']>;

const params = (overrides: Partial<BuildEntryFieldAttributesParams> = {}): BuildEntryFieldAttributesParams => ({
    fields: {},
    object: { type: 'number' },
    draft: '',
    ...overrides,
});

describe('buildEntryFieldAttributes — input type', () => {
    it.each<[EntryObject['type'], 'number' | 'text']>([
        ['number', 'number'],
        ['string', 'text'],
        ['mixed', 'text'],
        ['boolean', 'text'],
    ])('makes an OID of type %s a %s field', (type, inputType) => {
        expect(buildEntryFieldAttributes(params({ object: { type } })).type).toBe(inputType);
    });

    it('stays a text field without a bound object', () => {
        expect(buildEntryFieldAttributes(params({ object: undefined })).type).toBe('text');
    });
});

describe('buildEntryFieldAttributes — unit', () => {
    it.each<[string, EntryObject | undefined, string | undefined]>([
        ['the object unit', { type: 'number', unit: '°C' }, '°C'],
        ['the object unit on a text field', { type: 'string', unit: 'kWh' }, 'kWh'],
        ['no unit for an empty one', { type: 'number', unit: '' }, undefined],
        ['no unit for an object without one', { type: 'number' }, undefined],
        ['no unit without an object', undefined, undefined],
    ])('takes %s', (_case, object, unit) => {
        expect(buildEntryFieldAttributes(params({ object })).unit).toBe(unit);
    });
});

describe('buildEntryFieldAttributes — number attributes', () => {
    const fields = { step: 0.5, minValue: 10, maxValue: 90 };

    it('puts step, min and max on a number field', () => {
        expect(buildEntryFieldAttributes(params({ fields })).htmlInput).toEqual({ step: 0.5, min: 10, max: 90 });
    });

    it.each(['string', 'mixed', 'boolean'] as const)('puts none of them on a %s field', type => {
        expect(buildEntryFieldAttributes(params({ fields, object: { type } })).htmlInput).toBeUndefined();
    });

    it('puts none of them on a field without a bound object', () => {
        expect(buildEntryFieldAttributes(params({ fields, object: undefined })).htmlInput).toBeUndefined();
    });

    it('leaves a field without a configured value unset', () => {
        expect(buildEntryFieldAttributes(params()).htmlInput).toEqual({
            step: undefined,
            min: undefined,
            max: undefined,
        });
    });

    it.each<[string, unknown, number]>([
        ['0', 0, 0],
        ['a string', '5', 5],
        ['the string 0', '0', 0],
        ['a negative number', -5, -5],
    ])('reads %s as a number', (_case, value, number) => {
        const stored = { step: value, minValue: value, maxValue: value } as never;

        expect(buildEntryFieldAttributes(params({ fields: stored })).htmlInput).toEqual({
            step: number,
            min: number,
            max: number,
        });
    });

    it.each<[string, unknown]>([
        ['an emptied field', ''],
        ['a blank field', ' '],
        ['a null field', null],
        ['a non-numeric field', 'abc'],
    ])('leaves %s unset', (_case, value) => {
        const stored = { step: value, minValue: value, maxValue: value } as never;

        expect(buildEntryFieldAttributes(params({ fields: stored })).htmlInput).toEqual({
            step: undefined,
            min: undefined,
            max: undefined,
        });
    });

    it('reads each field on its own', () => {
        const stored = { step: '', minValue: 0, maxValue: '' } as never;

        expect(buildEntryFieldAttributes(params({ fields: stored })).htmlInput).toEqual({
            step: undefined,
            min: 0,
            max: undefined,
        });
    });

    it.each([
        ['above the maximum', '500'],
        ['below the minimum', '-5'],
        ['in range', '50'],
        ['empty', ''],
        ['non-numeric', 'abc'],
    ])('keeps both limits with a draft %s (Ist-Verhalten, kippt in 07)', (_case, draft) => {
        const { htmlInput } = buildEntryFieldAttributes(params({ fields: { minValue: 0, maxValue: 100 }, draft }));

        expect(htmlInput).toMatchObject({ min: 0, max: 100 });
    });
});
