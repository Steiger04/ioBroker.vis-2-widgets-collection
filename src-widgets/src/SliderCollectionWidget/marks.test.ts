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
    // useData's Aktiver Zustand — the marks keep it as given, whatever oidValue says.
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

const flagsOf = (marks: { value: number; active: boolean }[]): [number, boolean][] =>
    marks.map(m => [m.value, m.active]);

describe('buildSliderMarks — active flag', () => {
    it('flags the generated mark matching oidValue', () => {
        const marks = buildSliderMarks(params({ minValue: 0, maxValue: 10, markStep: 5, oidValue: 5 }));

        expect(flagsOf(marks)).toEqual([
            [0, false],
            [5, true],
            [10, false],
        ]);
    });

    it("flags a numeric mark for the string value '5' (sameStateValue)", () => {
        const marks = buildSliderMarks(params({ minValue: 0, maxValue: 10, markStep: 5, oidValue: '5' }));

        expect(marks.find(m => m.value === 5)?.active).toBe(true);
    });

    it.each([
        ['a value between the marks', 7],
        ['no backend value', undefined],
    ])('flags no mark for %s', (_case, oidValue) => {
        const marks = buildSliderMarks(params({ minValue: 0, maxValue: 10, markStep: 5, oidValue }));

        expect(marks.some(m => m.active)).toBe(false);
    });

    it("keeps the state marks' own flag from useData", () => {
        const marks = buildSliderMarks(
            params({
                states: [state(3, { active: true }), state(5, { active: false })],
                minValue: 0,
                maxValue: 10,
                markStep: 10,
                oidValue: 5,
            }),
        );

        expect(flagsOf(marks)).toEqual([
            [0, false],
            [3, true],
            [5, false],
            [10, false],
        ]);
    });
});

describe('buildSliderMarks — selected mark', () => {
    it('gives aliasActive to the first active mark only, duplicates keep their labels', () => {
        const marks = buildSliderMarks(
            params({
                states: [state(5, { active: true, label: 'first' }), state(5, { active: true, label: 'second' })],
                onlyStates: true,
                aliasActive: '<b>on</b>',
            }),
        );

        expect(marks.map(m => [m.label, m.active])).toEqual([
            ['<b>on</b>', true],
            ['second', true],
        ]);
    });

    it('gives aliasActive to a selected generated mark', () => {
        const marks = buildSliderMarks(
            params({ minValue: 0, maxValue: 10, markStep: 5, unit: '%', oidValue: 5, aliasActive: 'half' }),
        );

        expect(marks.map(m => m.label)).toEqual(['0%', 'half', '10%']);
    });

    it('leaves a selected mark without a label empty', () => {
        const marks = buildSliderMarks(
            params({ states: [state(5, { active: true, label: '' })], onlyStates: true, aliasActive: 'on' }),
        );

        expect(marks[0].label).toBe('');
    });

    it('keeps the label without aliasActive', () => {
        const marks = buildSliderMarks(params({ minValue: 0, maxValue: 10, markStep: 5, oidValue: 5 }));

        expect(marks.find(m => m.value === 5)?.label).toBe('5');
    });

    it('does not touch the state entry it selects', () => {
        const entry = state(5, { active: true, label: 'five', iconXOffset: '3px' });
        buildSliderMarks(params({ states: [entry], onlyStates: true, aliasActive: 'on' }));

        expect(entry).toEqual(state(5, { active: true, label: 'five', iconXOffset: '3px' }));
    });
});

describe('buildSliderMarks — text of the selected mark', () => {
    const styles = {
        baseStyle: baseStyle({ textColor: '#base', valueSize: '1rem' }),
        activeStyle: activeStyle({ textColor: 'linear-gradient(90deg, #f00, #00f)', valueSize: '2.5rem' }),
    };
    const textOf = (marks: { value: number; textColor?: string; valueSize?: string | null }[]): unknown[] =>
        marks.map(({ value, textColor, valueSize }) => [value, textColor, valueSize]);

    it('gives a selected generated mark the text colour and size of the active style', () => {
        const marks = buildSliderMarks(params({ minValue: 0, maxValue: 10, markStep: 5, oidValue: 5, ...styles }));

        expect(textOf(marks)).toEqual([
            [0, '#base', '1rem'],
            [5, 'linear-gradient(90deg, #f00, #00f)', '2.5rem'],
            [10, '#base', '1rem'],
        ]);
    });

    it('keeps the per-state text of a selected state mark', () => {
        const marks = buildSliderMarks(
            params({
                states: [state(5, { active: true, textColor: '#state', valueSize: '3rem' })],
                onlyStates: true,
                oidValue: 5,
                ...styles,
            }),
        );

        expect(textOf(marks)).toEqual([[5, '#state', '3rem']]);
    });
});

// The 0px rule (ADR-0106): frozen presentation, read from the RAW active offsets — unlike the
// shared resolver, an unset value does not fall back to the mark's own offset.
describe('buildSliderMarks — the 0px rule of the selected icon offset', () => {
    const offsets = (
        active: Partial<Pick<BuildSliderMarksParams, 'iconXOffsetActive' | 'iconYOffsetActive'>>,
    ): { value: number; iconXOffset?: string; iconYOffset?: string }[] =>
        buildSliderMarks(
            params({
                states: [state(10, { active: true, iconXOffset: '3px', iconYOffset: '4px' })],
                minValue: 0,
                maxValue: 10,
                markStep: 10,
                oidValue: 10,
                baseStyle: baseStyle({ iconXOffset: '1px', iconYOffset: '2px' }),
                ...active,
            }),
        ).map(({ value, iconXOffset, iconYOffset }) => ({ value, iconXOffset, iconYOffset }));

    it.each([
        ['unset', {}, '0px', '0px'],
        ["''", { iconXOffsetActive: '', iconYOffsetActive: '' }, '3px', '4px'],
        ["'0px'", { iconXOffsetActive: '0px', iconYOffsetActive: '0px' }, '0px', '0px'],
        ['a value', { iconXOffsetActive: '7px', iconYOffsetActive: '-2px' }, '7px', '-2px'],
    ])('places the selected icon for an active offset %s', (_case, active, x, y) => {
        expect(offsets(active)).toEqual([
            { value: 0, iconXOffset: '1px', iconYOffset: '2px' },
            { value: 10, iconXOffset: x, iconYOffset: y },
        ]);
    });

    it('applies to a selected generated mark too', () => {
        const marks = buildSliderMarks(
            params({
                minValue: 0,
                maxValue: 10,
                markStep: 5,
                oidValue: 5,
                baseStyle: baseStyle({ iconXOffset: '1px', iconYOffset: '2px' }),
                iconYOffsetActive: '',
            }),
        );

        expect(marks.map(({ iconXOffset, iconYOffset }) => [iconXOffset, iconYOffset])).toEqual([
            ['1px', '2px'],
            ['0px', '2px'],
            ['1px', '2px'],
        ]);
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
