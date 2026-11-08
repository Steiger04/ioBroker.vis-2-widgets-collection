import { describe, expect, it } from 'vitest';

import { buildScale, type BuildScaleParams } from './scale';

import type { StateStyleData, StyleData } from '../hooks/useData/types';

const baseStyle: StyleData = { iconSize: '24px', iconColor: '#111', textColor: '#222' };

const state = (value: number, overrides: Partial<StateStyleData> = {}): StateStyleData => ({
    // The Skala never reads the Feldnummer — any valid one will do.
    fieldNumber: 1,
    active: false,
    value,
    label: String(value),
    ...overrides,
});

// useData's State-Spanne for the states below is 10..30.
const states = [state(10), state(20), state(30)];

const params = (overrides: Partial<BuildScaleParams> = {}): BuildScaleParams => ({
    fields: {},
    states,
    stateMin: 10,
    stateMax: 30,
    markBaseStyle: { inactive: baseStyle, active: baseStyle },
    unit: '',
    oidValue: undefined,
    ...overrides,
});

// What the host stores for a field the user emptied, and what else is no number.
const EMPTIED: [string, unknown][] = [
    ['an emptied field', ''],
    ['a blank field', ' '],
    ['a null field', null],
    ['a non-numeric field', 'abc'],
];

describe('buildScale — range', () => {
    it('takes the state range for onlyStates, ignoring the range fields', () => {
        const { min, max } = buildScale(params({ fields: { onlyStates: true, minValue: 0, maxValue: 100 } }));

        expect({ min, max }).toEqual({ min: 10, max: 30 });
    });

    it('takes the range fields without onlyStates', () => {
        const { min, max } = buildScale(params({ fields: { minValue: 0, maxValue: 100 } }));

        expect({ min, max }).toEqual({ min: 0, max: 100 });
    });

    it('falls back to the state range per unset field', () => {
        const { min, max } = buildScale(params({ fields: { maxValue: 100 } }));

        expect({ min, max }).toEqual({ min: 10, max: 100 });
    });

    it('stays unbounded without a field and without numeric states', () => {
        const { min, max } = buildScale(params({ states: [], stateMin: null, stateMax: null }));

        expect({ min, max }).toEqual({ min: null, max: null });
    });

    it('reads a field stored as a string as a number', () => {
        // vis-2 may store number inputs as strings; the slider needs numbers.
        const { min, max } = buildScale(params({ fields: { minValue: '5', maxValue: '50' } as never }));

        expect({ min, max }).toEqual({ min: 5, max: 50 });
    });

    it('keeps a field set to 0', () => {
        const { min, max } = buildScale(params({ fields: { minValue: 0, maxValue: '0' } as never }));

        expect({ min, max }).toEqual({ min: 0, max: 0 });
    });

    it.each<[string, unknown]>(EMPTIED)('falls back to the state range for %s', (_case, value) => {
        const { min, max } = buildScale(params({ fields: { minValue: value, maxValue: value } as never }));

        expect({ min, max }).toEqual({ min: 10, max: 30 });
    });

    it.each<[string, unknown]>(EMPTIED)('stays unbounded for %s without numeric states', (_case, value) => {
        const { min, max } = buildScale(
            params({
                fields: { minValue: value, maxValue: value } as never,
                states: [],
                stateMin: null,
                stateMax: null,
            }),
        );

        expect({ min, max }).toEqual({ min: null, max: null });
    });

    it('takes the state range for onlyStates, ignoring emptied range fields', () => {
        const { min, max } = buildScale(params({ fields: { onlyStates: true, minValue: '', maxValue: '' } as never }));

        expect({ min, max }).toEqual({ min: 10, max: 30 });
    });
});

describe('buildScale — grid (ADR-0002)', () => {
    it('snaps to the marks for onlyStates, ignoring the step field', () => {
        expect(buildScale(params({ fields: { onlyStates: true, step: 5 } })).step).toBeNull();
    });

    it('takes the step field without onlyStates', () => {
        expect(buildScale(params({ fields: { step: 5 } })).step).toBe(5);
    });

    it("leaves MUI's default for an unset step field", () => {
        expect(buildScale(params()).step).toBeUndefined();
    });

    it('keeps a step set to 0', () => {
        expect(buildScale(params({ fields: { step: 0 } })).step).toBe(0);
    });

    it.each<[string, unknown]>(EMPTIED)("leaves MUI's default for %s", (_case, value) => {
        expect(buildScale(params({ fields: { step: value } as never })).step).toBeUndefined();
    });

    it('snaps to the marks for onlyStates, ignoring an emptied step field', () => {
        expect(buildScale(params({ fields: { onlyStates: true, step: '' } as never })).step).toBeNull();
    });
});

describe('buildScale — marks and the selected mark', () => {
    it('generates no mark at 0 for emptied range fields', () => {
        const { marks } = buildScale(params({ fields: { minValue: '', maxValue: '', markStep: 10 } as never }));

        expect(marks.map(mark => mark.value)).toEqual([10, 20, 30]);
    });

    it('builds the marks over the resolved range', () => {
        const { marks } = buildScale(params({ fields: { minValue: 0, maxValue: 40, markStep: 20 } }));

        expect(marks.map(mark => mark.value)).toEqual([0, 10, 20, 30, 40]);
    });

    it('selects the first active mark', () => {
        const { marks, selectedIndex } = buildScale(
            params({
                fields: { onlyStates: true, aliasActive: 'hier' },
                states: [state(10), state(20, { active: true }), state(20, { active: true }), state(30)],
            }),
        );

        expect(selectedIndex).toBe(1);
        expect(marks[1].label).toBe('hier');
    });

    it('selects a generated mark by the backend value', () => {
        const { marks, selectedIndex } = buildScale(
            params({ fields: { minValue: 0, maxValue: 40, markStep: 20 }, oidValue: '40' }),
        );

        expect(selectedIndex).toBe(4);
        expect(marks[4].value).toBe(40);
    });

    it('selects nothing without a backend value', () => {
        expect(buildScale(params({ fields: { minValue: 0, maxValue: 40 } })).selectedIndex).toBeNull();
    });

    it('selects nothing when no mark matches', () => {
        expect(
            buildScale(params({ fields: { minValue: 0, maxValue: 40, markStep: 20 }, oidValue: 15 })).selectedIndex,
        ).toBeNull();
    });
});
