/**
 * The slider's `onlyStates` option follows the Zustandsmenge (ADR-0106 decision 8).
 *
 * @module lib/sliderFields.onlyStates.test
 * @remarks
 * vis-2 hands the hidden predicates the raw widget data; the option and its divider are shown
 * exactly when `effectiveStateCount` reads more than zero states — the same rule as
 * `stateFields` and useData.
 */
import { describe, expect, it } from 'vitest';

import sliderFields from './sliderFields';

type HiddenPredicate = (data: Record<string, unknown>) => boolean;

interface FieldLike {
    name?: string;
    type?: string;
    hidden?: unknown;
}

const fields = sliderFields() as FieldLike[];
const optionIndex = fields.findIndex(field => field.name === 'onlyStates');
const option = fields[optionIndex];
// The divider directly above the option belongs to it.
const divider = fields[optionIndex - 1];

const hiddenOf = (field: FieldLike, data: Record<string, unknown>): boolean => (field.hidden as HiddenPredicate)(data);

const COMMON_STATES = { oidObject: { commonStates: { 0: 'off', 1: 'on' } } };

describe('sliderFields onlyStates visibility', () => {
    it('pairs the option with a custom divider directly above it', () => {
        expect(option).toBeDefined();
        expect(divider.type).toBe('custom');
    });

    it.each<[string, boolean, Record<string, unknown>]>([
        [
            'common states, all rows deleted (ignoreCommonStates false)',
            true,
            { ...COMMON_STATES, values_count: 0, ignoreCommonStates: false },
        ],
        ['neither rows nor common states', true, { values_count: 0 }],
        ['no rows field and no OID object', true, {}],
        ['authored rows', false, { values_count: 3, ignoreCommonStates: false }],
        ['authored rows without common states (legacy, mode unset)', false, { values_count: 2 }],
        ['legacy widget: common states, ignoreCommonStates unset', false, { ...COMMON_STATES }],
        ['common states with ignoreCommonStates true', false, { ...COMMON_STATES, ignoreCommonStates: true }],
    ])('%s → hidden=%s', (_label, hidden, data) => {
        expect(hiddenOf(option, data)).toBe(hidden);
        expect(hiddenOf(divider, data)).toBe(hidden);
    });
});
