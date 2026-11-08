/**
 * Unit tests for the empty rule of stored number fields.
 *
 * @module lib/helper/optionalNumber.test
 */
import { describe, expect, it } from 'vitest';

import optionalNumber from './optionalNumber';

describe('optionalNumber', () => {
    it.each<[string, unknown, number]>([
        ['the number 0', 0, 0],
        ['the string 0', '0', 0],
        ['a number', 12.5, 12.5],
        ['a numeric string', '12.5', 12.5],
        ['a negative number', -5, -5],
        ['a negative string', '-5', -5],
        ['a string with padding', ' 5 ', 5],
        ['an exponent string', '1e3', 1000],
    ])('reads %s as the number', (_case, value, number) => {
        expect(optionalNumber(value)).toBe(number);
    });

    it.each<[string, unknown]>([
        ['an emptied field', ''],
        ['a blank field', ' '],
        ['null', null],
        ['undefined', undefined],
        ['a non-numeric string', 'abc'],
        ['NaN', Number.NaN],
        ['the string NaN', 'NaN'],
        ['Infinity', Number.POSITIVE_INFINITY],
        ['-Infinity', Number.NEGATIVE_INFINITY],
        ['the string Infinity', 'Infinity'],
        ['a boolean', true],
        ['an array', [5]],
        ['an object', {}],
    ])('leaves %s unset', (_case, value) => {
        expect(optionalNumber(value)).toBeUndefined();
    });
});
