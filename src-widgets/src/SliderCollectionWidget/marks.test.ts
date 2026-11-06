import { describe, expect, it } from 'vitest';
import type { Theme } from '@mui/material';

import { buildSliderMarks, type BuildSliderMarksParams } from './marks';
import { createPropertyResolvers } from '../hooks/useData/propertyResolvers';
import { getStyleData } from '../hooks/useData/styleDataResolver';

import type { MarkerLayer, PropertyResolvers, StateStyleData, StyleData } from '../hooks/useData/types';

const baseStyle = (overrides: Partial<StyleData> = {}): StyleData => ({
    iconSize: '24px',
    iconColor: '#111',
    forceColorMask: false,
    textColor: '#222',
    ...overrides,
});

const activeStyle = (overrides: Partial<StyleData> = {}): StyleData => ({
    ...baseStyle(),
    iconSize: '48px',
    iconColor: '#f00',
    forceColorMask: true,
    ...overrides,
});

const state = (value: number, overrides: Partial<StateStyleData> = {}): StateStyleData => ({
    // The marks never read the Feldnummer — any valid one will do.
    fieldNumber: 1,
    // The marks derive their active overlay from oidValue, never from this flag.
    active: false,
    value,
    label: String(value),
    ...overrides,
});

const params = (overrides: Partial<BuildSliderMarksParams> = {}): BuildSliderMarksParams => ({
    states: [],
    minValue: 0,
    maxValue: 100,
    markStep: 10,
    onlyStates: false,
    unit: '',
    oidValue: undefined,
    baseStyle: baseStyle(),
    activeStyle: activeStyle(),
    ...overrides,
});

const valuesOf = (marks: { value: number }[]): number[] => marks.map(m => m.value);

describe('buildSliderMarks — onlyStates', () => {
    it('returns state marks sorted, without min/max/step injection', () => {
        const marks = buildSliderMarks(params({ states: [state(30), state(10), state(20)], onlyStates: true }));

        expect(valuesOf(marks)).toEqual([10, 20, 30]);
    });

    it('keeps state labels untouched', () => {
        const marks = buildSliderMarks(params({ states: [state(7, { label: 'sieben' })], onlyStates: true }));

        expect(marks[0].label).toBe('sieben');
    });

    it('filters out non-numeric state values', () => {
        const marks = buildSliderMarks(
            params({
                states: [{ ...state(0), value: 'foo' }, { ...state(0), value: true }, state(10)],
                onlyStates: true,
            }),
        );

        expect(valuesOf(marks)).toEqual([10]);
    });
});

describe('buildSliderMarks — range filter', () => {
    it('drops states outside [minValue, maxValue]', () => {
        const marks = buildSliderMarks(params({ states: [state(1), state(50), state(999)], onlyStates: true }));

        expect(valuesOf(marks)).toEqual([1, 50]);
    });

    it('treats null bounds as unbounded', () => {
        const marks = buildSliderMarks(params({ states: [state(5)], minValue: null, maxValue: null }));

        expect(valuesOf(marks)).toEqual([5]);
    });
});

describe('buildSliderMarks — min/max injection', () => {
    it('injects missing bounds with unit labels', () => {
        const marks = buildSliderMarks(
            params({ states: [state(3), state(7)], minValue: 0, maxValue: 10, markStep: 20 }),
        );

        expect(valuesOf(marks)).toEqual([0, 3, 7, 10]);
        expect(marks.find(m => m.value === 0)?.label).toBe('0');
        expect(marks.find(m => m.value === 10)?.label).toBe('10');
        // State labels survive the injection untouched.
        expect(marks.find(m => m.value === 3)?.label).toBe('3');
    });

    it('skips injection when a state already sits on the bound', () => {
        const marks = buildSliderMarks(
            params({ states: [state(0), state(10)], minValue: 0, maxValue: 10, markStep: 20 }),
        );

        expect(valuesOf(marks)).toEqual([0, 10]);
    });

    it('injects nothing without bounds', () => {
        const marks = buildSliderMarks(params({ states: [state(5)], minValue: null, maxValue: null, markStep: 2 }));

        expect(valuesOf(marks)).toEqual([5]);
    });
});

describe('buildSliderMarks — step division', () => {
    it('fills steps between the bounds', () => {
        const marks = buildSliderMarks(params({ states: [], minValue: 0, maxValue: 10, markStep: 2 }));

        expect(valuesOf(marks)).toEqual([0, 2, 4, 6, 8, 10]);
    });

    it('does not duplicate values already present', () => {
        const marks = buildSliderMarks(params({ states: [state(4)], minValue: 0, maxValue: 10, markStep: 2 }));

        expect(valuesOf(marks)).toEqual([0, 2, 4, 6, 8, 10]);
    });

    it('falls back to step 1 for markStep 0', () => {
        const marks = buildSliderMarks(params({ states: [], minValue: 0, maxValue: 3, markStep: 0 }));

        expect(valuesOf(marks)).toEqual([0, 1, 2, 3]);
    });

    it('falls back to step 1 for unset markStep', () => {
        const marks = buildSliderMarks(params({ states: [], minValue: 0, maxValue: 3, markStep: undefined }));

        expect(valuesOf(marks)).toEqual([0, 1, 2, 3]);
    });

    // A negative step used to survive the `Number(x) || 1` fallback (truthy)
    // and made the `i += step` loop diverge for min < max — an endless loop
    // that froze the tab. It is now clamped to its absolute value.
    it('treats a negative markStep as its absolute value', () => {
        const marks = buildSliderMarks(params({ states: [], minValue: 0, maxValue: 4, markStep: -2 }));

        expect(valuesOf(marks)).toEqual([0, 2, 4]);
    });

    it('accumulates i += step, keeping the float drift', () => {
        const marks = buildSliderMarks(params({ states: [], minValue: 0, maxValue: 1, markStep: 0.2 }));

        expect(valuesOf(marks)).toEqual([0, 0.2, 0.4, 0.6000000000000001, 0.8, 1]);
    });
});

describe('buildSliderMarks — empty states', () => {
    it('returns an empty list without bounds', () => {
        const marks = buildSliderMarks(params({ states: [], minValue: null, maxValue: null, onlyStates: true }));

        expect(marks).toEqual([]);
    });
});

describe('buildSliderMarks — unit', () => {
    it('appends the unit to generated labels only', () => {
        const marks = buildSliderMarks(
            params({ states: [state(5)], minValue: 0, maxValue: 10, markStep: 5, unit: '°C' }),
        );

        expect(marks.find(m => m.value === 0)?.label).toBe('0°C');
        expect(marks.find(m => m.value === 5)?.label).toBe('5');
        expect(marks.find(m => m.value === 10)?.label).toBe('10°C');
    });
});

describe('buildSliderMarks — active overlay', () => {
    it('applies active icon size/color/mask to the matching mark only', () => {
        const marks = buildSliderMarks(
            params({ states: [], minValue: 0, maxValue: 10, markStep: 5, oidValue: 5, iconColorActive: '#f00' }),
        );

        const active = marks.find(m => m.value === 5);
        const inactive = marks.find(m => m.value === 0);

        expect(active?.iconSize).toBe('48px');
        expect(active?.iconColor).toBe('#f00');
        expect(active?.forceColorMask).toBe(true);
        expect(inactive?.iconSize).toBe('24px');
        expect(inactive?.iconColor).toBe('#111');
        expect(inactive?.forceColorMask).toBe(false);
    });

    it('keeps the base icon color when iconColorActive is unset', () => {
        const marks = buildSliderMarks(params({ states: [], minValue: 0, maxValue: 10, markStep: 5, oidValue: 5 }));

        expect(marks.find(m => m.value === 5)?.iconColor).toBe('#111');
    });

    it('compares values as strings (string oidValue matches numeric mark)', () => {
        const marks = buildSliderMarks(
            params({ states: [], minValue: 0, maxValue: 10, markStep: 5, oidValue: '5', iconColorActive: '#f00' }),
        );

        expect(marks.find(m => m.value === 5)?.iconColor).toBe('#f00');
    });

    // The legacy `iconSizeActive !== undefined` / `enableIconColorMaskActive !== undefined`
    // guards were dropped: with the Active fields unset, resolveStyleData('', true)
    // falls back to the base cascade, so rewriting iconSize/forceColorMask from
    // activeStyle writes back exactly what the base spread already set. The test
    // below pins that outcome: activeStyle equal to baseStyle leaves the mark
    // indistinguishable from a non-active one.
    it('writes base values when the active style equals the base style', () => {
        const base = baseStyle();
        const marks = buildSliderMarks(
            params({
                states: [],
                minValue: 0,
                maxValue: 10,
                markStep: 5,
                oidValue: 5,
                baseStyle: base,
                activeStyle: base,
            }),
        );

        const active = marks.find(m => m.value === 5);

        expect(active?.iconSize).toBe(base.iconSize);
        expect(active?.iconColor).toBe(base.iconColor);
        expect(active?.forceColorMask).toBe(base.forceColorMask);
    });
});

/** The real resolver chains over plain widget data — what useData resolves the marks with. */
const markResolvers = (rxData: Record<string, unknown>, markerLayer: MarkerLayer): PropertyResolvers =>
    createPropertyResolvers({
        rxData,
        oidObject: undefined,
        oidName: undefined,
        theme: {
            palette: { primary: { main: '#pri' }, text: { primary: '#txt' }, background: { paper: '#pap' } },
        } as unknown as Theme,
        fontStyles: undefined,
        textStyles: undefined,
        backgroundStyles: undefined,
        formatSize: size => (size == null ? undefined : `${size}%`),
        getDataValue: <T>(key: string, ext: string) => rxData[`${key}${ext}`] as T | undefined,
        markerLayer,
    });

describe('buildSliderMarks — marker layer applies to marks only, between per-state and base', () => {
    it('renders a state mark and a generated mark alike: marker text colour, text size and icon size beat the base', () => {
        // Base and marker both set; the state row 50 carries no style of its own.
        const r = markResolvers(
            { textColor: '#base', valueSize: 16, iconSize: 200 },
            { textColor: '#marker', textSize: 18, iconSize: 50 },
        );
        const stateStyle = getStyleData(1, false, r);

        const marks = buildSliderMarks(
            params({
                states: [
                    state(50, {
                        textColor: stateStyle.textColor,
                        valueSize: stateStyle.valueSize,
                        iconSize: stateStyle.iconSize,
                    }),
                ],
                minValue: 0,
                maxValue: 100,
                markStep: 50,
                baseStyle: getStyleData('', false, r),
                activeStyle: getStyleData('', true, r),
            }),
        );

        const marker = { textColor: '#marker', valueSize: '18%', iconSize: 'calc(24px * 50 / 100)' };
        expect(
            marks.map(({ value, textColor, valueSize, iconSize }) => ({ value, textColor, valueSize, iconSize })),
        ).toEqual([
            { value: 0, ...marker },
            { value: 50, ...marker },
            { value: 100, ...marker },
        ]);
    });
});
