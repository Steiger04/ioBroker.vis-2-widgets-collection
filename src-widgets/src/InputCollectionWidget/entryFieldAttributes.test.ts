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
});

describe('buildEntryFieldAttributes — limit rule (ADR-0109 Nr. 5, 6)', () => {
    type Limits = { min: number | undefined; max: number | undefined };

    const limitsOf = (fields: unknown, draft: string): Limits => {
        const { htmlInput } = buildEntryFieldAttributes(params({ fields: fields as never, draft }));

        return { min: htmlInput?.min, max: htmlInput?.max };
    };

    const RANGE = { minValue: 0, maxValue: 100 };

    it.each<[string, string, Limits]>([
        ['above the maximum drops the maximum', '500', { min: 0, max: undefined }],
        ['below the minimum drops the minimum', '-5', { min: undefined, max: 100 }],
        ['on the maximum keeps both', '100', { min: 0, max: 100 }],
        ['on the minimum keeps both', '0', { min: 0, max: 100 }],
        ['in range keeps both', '50', { min: 0, max: 100 }],
        ['empty keeps both', '', { min: 0, max: 100 }],
        ['blank keeps both', ' ', { min: 0, max: 100 }],
        ['non-numeric keeps both', 'abc', { min: 0, max: 100 }],
    ])('a draft %s', (_case, draft, limits) => {
        expect(limitsOf(RANGE, draft)).toEqual(limits);
    });

    it.each<[string, unknown, string, Limits]>([
        [
            'an unset minimum stays unset above the maximum',
            { maxValue: 100 },
            '500',
            { min: undefined, max: undefined },
        ],
        ['an unset minimum stays unset below the maximum', { maxValue: 100 }, '-5', { min: undefined, max: 100 }],
        ['an unset maximum stays unset below the minimum', { minValue: 0 }, '-5', { min: undefined, max: undefined }],
        ['an unset maximum stays unset above the minimum', { minValue: 0 }, '500', { min: 0, max: undefined }],
        ['no limits stay unset', {}, '500', { min: undefined, max: undefined }],
        ['emptied limits stay unset', { minValue: '', maxValue: '' }, '500', { min: undefined, max: undefined }],
    ])('%s', (_case, fields, draft, limits) => {
        expect(limitsOf(fields, draft)).toEqual(limits);
    });

    it('reads a limit stored as a string, including 0', () => {
        expect(limitsOf({ minValue: '0', maxValue: '0' }, '5')).toEqual({ min: 0, max: undefined });
        expect(limitsOf({ minValue: '0', maxValue: '0' }, '-5')).toEqual({ min: undefined, max: 0 });
        expect(limitsOf({ minValue: '0', maxValue: '0' }, '0')).toEqual({ min: 0, max: 0 });
    });

    it('drops both limits of an inverted range a draft crosses on both sides', () => {
        expect(limitsOf({ minValue: 100, maxValue: 0 }, '50')).toEqual({ min: undefined, max: undefined });
    });

    it('keeps the step when a limit drops', () => {
        const { htmlInput } = buildEntryFieldAttributes(params({ fields: { ...RANGE, step: 5 }, draft: '500' }));

        expect(htmlInput?.step).toBe(5);
    });

    it('puts no limits on a text field, whatever the draft', () => {
        const { htmlInput } = buildEntryFieldAttributes(
            params({ fields: RANGE, object: { type: 'string' }, draft: '500' }),
        );

        expect(htmlInput).toBeUndefined();
    });
});
