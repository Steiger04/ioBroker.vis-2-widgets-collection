/**
 * The Anzeigetext as a table over the pure rule.
 *
 * @module lib/displayText.test
 * @remarks
 * The rule hands back the raw value; what a caller makes of it (the Checkbox's empty label for
 * `false`, the footer's string) stays with the caller's own tests. An object or `NaN` gives no text
 * (ADR-0111 Nr. 6).
 */
import { describe, expect, it } from 'vitest';

import { displayText, valueWithUnit } from './displayText';

const UNIT = '°C';

describe('valueWithUnit', () => {
    it.each<[string, unknown, string | undefined, unknown]>([
        ['a number', 21, UNIT, '21°C'],
        ['a zero', 0, UNIT, '0°C'],
        ['a string', 'warm', UNIT, 'warm°C'],
        ['a false', false, UNIT, 'false°C'],
        ['a true', true, UNIT, 'true°C'],
        ['a number with an emptied unit', 21, '', 21],
        ['a number without a unit', 21, undefined, 21],
        ['a false without a unit', false, undefined, false],
        ['a zero without a unit', 0, undefined, 0],
        ['an empty string: no lone unit', '', UNIT, ''],
        ['an empty string without a unit', '', undefined, ''],
        ['spaces: no lone unit', '   ', UNIT, '   '],
        ['nothing', undefined, UNIT, undefined],
        ['null', null, UNIT, undefined],
        ['an object', { a: 1 }, UNIT, undefined],
        ['an array', [1, 2], UNIT, undefined],
        ['NaN', NaN, UNIT, undefined],
        ['NaN without a unit', NaN, undefined, undefined],
    ])('%s', (_what, value, unit, expected) => {
        expect(valueWithUnit(value, unit)).toBe(expected);
    });
});

describe('displayText', () => {
    it.each<[string, Parameters<typeof displayText>[0], unknown]>([
        ['the alias wins, without a unit', { value: 21, unit: UNIT, alias: 'warm', rowValue: '21 kWh' }, 'warm'],
        ['the row value wins as it is', { value: 21, unit: UNIT, rowValue: '21 kWh' }, '21 kWh'],
        ['an empty alias and row value fall through', { value: 21, unit: UNIT, alias: '', rowValue: '' }, '21°C'],
        ['a row value of only spaces stays text', { value: 21, unit: UNIT, rowValue: '   ' }, '   '],
        ['a row value "0" wins: the resolver stringifies the row', { value: 21, unit: UNIT, rowValue: '0' }, '0'],
        ['a row value "false" wins, too', { value: 21, unit: UNIT, rowValue: 'false' }, 'false'],
        ['the current value takes the unit', { value: 21, unit: UNIT }, '21°C'],
        ['the raw value stays raw without a unit', { value: 21 }, 21],
        ['false stays raw for the caller to shape', { value: false }, false],
        ['an empty value stays empty', { value: '', unit: UNIT }, ''],
        ['nothing to show', { value: undefined, unit: UNIT }, undefined],
        ['null shows nothing', { value: null, unit: UNIT }, undefined],
        ['an object shows nothing', { value: { a: 1 }, unit: UNIT }, undefined],
        ['NaN shows nothing', { value: NaN, unit: UNIT }, undefined],
        ['an alias still shows over an object', { value: { a: 1 }, alias: 'warm' }, 'warm'],
    ])('%s', (_what, input, expected) => {
        expect(displayText(input)).toBe(expected);
    });

    it.each([
        ['spaces', '   '],
        ['tabs and line breaks', '\t\n'],
    ])('an alias of only %s names nothing', (_what, alias) => {
        expect(displayText({ value: 21, unit: UNIT, alias })).toBe('21°C');
        expect(displayText({ value: 21, unit: UNIT, alias, rowValue: '21 kWh' })).toBe('21 kWh');
    });

    it('an alias keeps its edge spaces', () => {
        expect(displayText({ value: 21, alias: ' warm ' })).toBe(' warm ');
    });
});
