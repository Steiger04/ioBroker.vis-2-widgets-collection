/**
 * The border colour of the Lampen-Bedienelement: one contract, field → theme primary, solid
 * (ADR-0004, ADR-0102 Nachtrag 2026-11-07).
 *
 * @module lib/light2ColorContract.test
 * @remarks
 * Expected colours are the stock MUI light and dark primaries `#1976d2` / `#90caf9`.
 */
import { describe, expect, it, vi } from 'vitest';

import { createTheme } from '@mui/material/styles';
import type { ExtendedField } from '../types/field-definitions/extended-field';
import { light2BorderColorContract, resolveLight2BorderColor } from './light2ColorContract';

// The field list renders CollectionDivider and the colour field adapters, which pull Generic
// (extends window.visRxWidget, absent outside vis-2). The field test reads only the field data.
vi.mock('../components/ContractColorField', () => ({ default: () => null }));
vi.mock('../components/PlainColorField', () => ({ default: () => null }));
vi.mock('../components/CollectionDivider', () => ({ default: () => null }));

import light2Fields from './light2Fields';

const LIGHT = createTheme({ palette: { mode: 'light' } });
const DARK = createTheme({ palette: { mode: 'dark' } });

describe('light2BorderColorContract — field → theme primary, no intermediate stage', () => {
    it('declares the field, no fallback field and the primary terminal', () => {
        expect(light2BorderColorContract).toEqual({
            name: 'colorLightBorderColor',
            fallbackFields: [],
            terminal: 'primary',
        });
    });
});

describe('colorLightBorderColor field — declares the contract the picker resolves (ADR-0004)', () => {
    const field = light2Fields().find(
        candidate => (candidate as { name?: string }).name === 'colorLightBorderColor',
    ) as ExtendedField;

    it('spreads the contract, solid only', () => {
        const { name, fallbackFields, terminal, inheritTextStyle } = field;
        expect({ name, fallbackFields, terminal, inheritTextStyle }).toEqual({
            ...light2BorderColorContract,
            inheritTextStyle: undefined,
        });
        expect(field.noGradient).toBe(true);
        expect(field.plainColor).toBeUndefined();
    });

    it('keeps its label and shows without a hidden rule', () => {
        const { label, hidden } = field as ExtendedField & { label?: string; hidden?: unknown };
        expect(label).toBe('color_light_border_color');
        expect(hidden).toBeUndefined();
    });
});

describe('resolveLight2BorderColor — the colour the Lampen-Bedienelement draws its border in', () => {
    it.each([
        ['light', LIGHT, '#1976d2'],
        ['dark', DARK, '#90caf9'],
    ])('%s: an empty field draws the theme primary', (_mode, theme, primary) => {
        expect(resolveLight2BorderColor({}, theme)).toBe(primary);
        expect(resolveLight2BorderColor({ colorLightBorderColor: '' }, theme)).toBe(primary);
    });

    it('a value of only whitespace counts as unset and draws the theme primary', () => {
        expect(resolveLight2BorderColor({ colorLightBorderColor: '   ' }, LIGHT)).toBe('#1976d2');
    });

    it.each(['#ff0000', '#f00', 'rgb(255, 0, 0)', 'rgba(0, 128, 0, 0.5)'])('a set colour %s draws as stored', value => {
        expect(resolveLight2BorderColor({ colorLightBorderColor: value }, LIGHT)).toBe(value);
    });

    it('a set colour with surrounding whitespace draws the trimmed colour', () => {
        expect(resolveLight2BorderColor({ colorLightBorderColor: ' #ff0000 ' }, LIGHT)).toBe('#ff0000');
    });

    it('a gradient draws its Repräsentative Vollfarbe (the colour at the midpoint)', () => {
        expect(
            resolveLight2BorderColor(
                { colorLightBorderColor: 'linear-gradient(90deg, #ff0000 0%, #0000ff 100%)' },
                LIGHT,
            ),
        ).toBe('rgb(128, 0, 128)');
    });

    it.each(['red', 'transparent', 'var(--vis2-border)', 'not-a-color'])(
        'a value without a Repräsentative Vollfarbe (%s) counts as unset and draws the theme primary',
        value => {
            expect(resolveLight2BorderColor({ colorLightBorderColor: value }, LIGHT)).toBe('#1976d2');
        },
    );
});
