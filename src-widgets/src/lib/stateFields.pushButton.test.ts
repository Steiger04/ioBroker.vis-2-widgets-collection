/**
 * The push-button switch counts the rows with a value, as the runtime does (ADR-0110, V14).
 *
 * @module lib/stateFields.pushButton.test
 * @remarks
 * vis-2 hands the hidden predicates the raw widget data. The switch is shown exactly when the
 * runtime would have two states to press and release; the `onlyStates` option above it keeps
 * following the Zustandsmenge, which counts blank rows too (ADR-0104).
 */
import { describe, expect, it, vi } from 'vitest';

// The field list pulls CollectionDivider, ContractColorField and PlainColorField, which all pull
// Generic (extends window.visRxWidget, absent outside vis-2) — each mock is needed. The tests
// read only the field data.
vi.mock('../components/ContractColorField', () => ({ default: () => null }));
vi.mock('../components/PlainColorField', () => ({ default: () => null }));
vi.mock('../components/CollectionDivider', () => ({ default: () => null }));

import stateFields from './stateFields';

type HiddenPredicate = (data: Record<string, unknown>) => boolean;

interface FieldLike {
    name?: string;
    hidden?: unknown;
}

const fields = stateFields() as FieldLike[];
const fieldNamed = (name: string): FieldLike => fields.find(field => field.name === name)!;
const hiddenOf = (name: string, data: Record<string, unknown>): boolean =>
    (fieldNamed(name).hidden as HiddenPredicate)(data);

const STRING_OID = { oidObject: { type: 'string' } };
const LEGACY_COMMON_STATES = {
    oidObject: { type: 'number', commonStates: { 0: 'off', 1: 'on' } },
    values_count: 0,
};

describe('stateFields push-button switch — ticket 09', () => {
    it.each<[string, boolean, Record<string, unknown>]>([
        ['two rows with a value', false, { ...STRING_OID, values_count: 2, value1: 'a', value2: 'b' }],
        ['two rows, one empty', true, { ...STRING_OID, values_count: 2, value1: 'a', value2: '' }],
        ['two rows, one only spaces', true, { ...STRING_OID, values_count: 2, value1: 'a', value2: '   ' }],
        ['two rows, one without the key', true, { ...STRING_OID, values_count: 2, value1: 'a' }],
        ['three rows, one empty', false, { ...STRING_OID, values_count: 3, value1: 'a', value2: '', value3: 'c' }],
        ['three rows with a value', true, { ...STRING_OID, values_count: 3, value1: 'a', value2: 'b', value3: 'c' }],
        ['a value behind the counted rows', true, { ...STRING_OID, values_count: 2, value1: 'a', value3: 'c' }],
        ['false and 0 are values', false, { oidObject: { type: 'mixed' }, values_count: 2, value1: false, value2: 0 }],
        ['legacy widget: common states, rows filled', false, { ...LEGACY_COMMON_STATES, value1: 0, value2: 1 }],
        ['legacy widget: common states, one row filled', true, { ...LEGACY_COMMON_STATES, value1: 0 }],
        ['legacy widget: common states, no row filled', true, { ...LEGACY_COMMON_STATES }],
        [
            'legacy widget: three common states, two rows filled',
            false,
            {
                oidObject: { type: 'number', commonStates: { 0: 'off', 1: 'on', 2: 'auto' } },
                values_count: 0,
                value1: 0,
                value2: 1,
                value3: '',
            },
        ],
        ['two filled rows without an OID object', true, { values_count: 2, value1: 'a', value2: 'b' }],
    ])('with onlyStates: %s → hidden=%s', (_label, hidden, data) => {
        expect(hiddenOf('statePushButton', { ...data, onlyStates: true })).toBe(hidden);
    });

    it('stays hidden without onlyStates, however many rows have a value', () => {
        expect(hiddenOf('statePushButton', { ...STRING_OID, values_count: 2, value1: 'a', value2: 'b' })).toBe(true);
    });

    it.each<[string, boolean, Record<string, unknown>]>([
        ['blank rows count as rows', false, { ...STRING_OID, values_count: 2, value1: '', value2: ' ' }],
        ['no rows at all', true, { ...STRING_OID, values_count: 0 }],
    ])('leaves the onlyStates option on the Zustandsmenge: %s → hidden=%s', (_label, hidden, data) => {
        expect(hiddenOf('onlyStates', data)).toBe(hidden);
    });
});
