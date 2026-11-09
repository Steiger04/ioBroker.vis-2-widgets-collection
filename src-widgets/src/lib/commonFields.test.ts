/**
 * Shared editor fields: the content background swatch shows what the card paints (ADR-0004).
 *
 * @module lib/commonFields.test
 * @remarks
 * Without a value the card's inner paper (CollectionBase, BASE-PAPER-1) paints MUI's Paper
 * default `palette.background.paper`, so the `background` contract — and with it the per-state
 * `background{n}` (the same field in the `values` group) and `backgroundActive` — names
 * `paper`. Under `noCard` / embedded the runtime paints `transparent` instead: a documented
 * divergence (ADR-0004, ticket 12), pinned in `components/CollectionBase.test.tsx`.
 * Expected colours are the stock MUI light and dark paper: `#fff` / `#121212`.
 */
import { describe, expect, it } from 'vitest';

import { createTheme } from '@mui/material/styles';
import type { ExtendedField } from '../types/field-definitions/extended-field';
import { resolveEffectiveColor } from './helper/resolveEffectiveColor';

import commonFields from './commonFields';

const LIGHT = createTheme({ palette: { mode: 'light' } });
const DARK = createTheme({ palette: { mode: 'dark' } });

/** The field `name` of the shared list built for `groupName`. */
const fieldOf = (groupName: string, name: string): ExtendedField =>
    commonFields({ groupName, allFields: false }).find(
        field => (field as { name?: string }).name === name,
    ) as ExtendedField;

describe('commonFields — the content background swatch shows the card paper', () => {
    it.each([
        ['background', ''],
        ['backgroundActive', 'Active'],
    ])('%s without a value shows the theme paper, light and dark', (name, groupName) => {
        const field = fieldOf(groupName, name);

        expect(resolveEffectiveColor(field, {}, LIGHT)).toBe('#fff');
        expect(resolveEffectiveColor(field, {}, DARK)).toBe('#121212');
    });

    it('an explicit background stays as set', () => {
        expect(resolveEffectiveColor(fieldOf('', 'background'), { background: '#336699' }, LIGHT)).toBe('#336699');
    });
});

/** The four colour fields every state and Active row carries, with their stock light terminal. */
const STATE_COLORS: [string, string][] = [
    ['iconColor', '#1976d2'],
    ['textColor', 'rgba(0, 0, 0, 0.87)'],
    ['background', '#fff'],
    ['frameBackground', '#fff'],
];

/**
 * The per-state field `name{index}` as vis-2 builds it: the `values` group's field list is
 * deep-cloned per index and every field renamed `name + index` (`visWidgetsCatalog.tsx`), the
 * rest of the definition — the contract included — carried over as declared.
 */
const stateFieldOf = (name: string, index: number, settings: { markerLayer?: boolean } = {}): ExtendedField => {
    const field = commonFields({ groupName: '', allFields: false, perState: true, ...settings }).find(
        entry => (entry as { name?: string }).name === name,
    ) as ExtendedField;
    return { ...field, name: `${name}${index}` };
};

describe('commonFields — a state row without a value shows the base colour it inherits', () => {
    it.each(STATE_COLORS)('%s{n} inherits the base field', name => {
        const field = stateFieldOf(name, 2);

        expect(resolveEffectiveColor(field, { [name]: '#aa0000' }, LIGHT)).toBe('#aa0000');
    });

    it.each(STATE_COLORS)('%s{n} keeps its own value over the base', name => {
        const field = stateFieldOf(name, 2);

        expect(resolveEffectiveColor(field, { [name]: '#aa0000', [`${name}2`]: '#00aa00' }, LIGHT)).toBe('#00aa00');
    });

    it.each(STATE_COLORS)('%s{n} with the base unset too shows the terminal as before', (name, terminal) => {
        expect(resolveEffectiveColor(stateFieldOf(name, 2), {}, LIGHT)).toBe(terminal);
    });

    it('textColor{n} with the base unset shows the vis-2 widget colour before the terminal', () => {
        expect(resolveEffectiveColor(stateFieldOf('textColor', 2), {}, LIGHT, { color: '#123456' })).toBe('#123456');
    });

    it('the base field itself declares no inheritance of its own', () => {
        for (const [name] of STATE_COLORS) {
            expect(fieldOf('', name).fallbackFields ?? [], name).toEqual([]);
        }
    });
});

describe('commonFields — the slider state rows put the Marker-Ebene before the base', () => {
    it.each([
        ['iconColor', 'markerIconColor'],
        ['textColor', 'markerTextColor'],
    ])('%s{n} shows %s over the base', (name, marker) => {
        const field = stateFieldOf(name, 3, { markerLayer: true });

        expect(resolveEffectiveColor(field, { [name]: '#aa0000', [marker]: '#0000aa' }, LIGHT)).toBe('#0000aa');
        expect(resolveEffectiveColor(field, { [name]: '#aa0000' }, LIGHT)).toBe('#aa0000');
    });

    it.each([['background'], ['frameBackground']])('%s{n} has no marker tier and inherits the base', name => {
        const field = stateFieldOf(name, 3, { markerLayer: true });

        expect(resolveEffectiveColor(field, { [name]: '#aa0000' }, LIGHT)).toBe('#aa0000');
    });
});

describe('commonFields — an Active row without a value shows the base colour it inherits', () => {
    it.each(STATE_COLORS)('%sActive inherits the base field', name => {
        const field = fieldOf('Active', `${name}Active`);

        expect(resolveEffectiveColor(field, { [name]: '#aa0000' }, LIGHT)).toBe('#aa0000');
        expect(resolveEffectiveColor(field, { [name]: '#aa0000', [`${name}Active`]: '#00aa00' }, LIGHT)).toBe(
            '#00aa00',
        );
    });

    it.each(STATE_COLORS)('%sActive with the base unset too shows the terminal as before', (name, terminal) => {
        expect(resolveEffectiveColor(fieldOf('Active', `${name}Active`), {}, LIGHT)).toBe(terminal);
    });

    it('the Active row never reads the Marker-Ebene (it resolves the style `data`, not a mark)', () => {
        const field = fieldOf('Active', 'iconColorActive');

        expect(resolveEffectiveColor(field, { markerIconColor: '#0000aa' }, LIGHT)).toBe('#1976d2');
    });
});
