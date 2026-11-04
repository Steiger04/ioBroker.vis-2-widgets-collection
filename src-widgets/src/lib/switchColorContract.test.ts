/**
 * The Switch colour rules: the thumb fields resolve their contracts; the Sperre is a state
 * rule on top (ADR-0004, Nachtrag 2026-11-04).
 *
 * @module lib/switchColorContract.test
 * @remarks
 * Expected colours are MUI 6.5.0's own Switch defaults (Switch.js) on the stock MUI light
 * and dark themes: primary `#1976d2` / `#90caf9`, `common.white` `#fff`, `grey[100]`
 * `#f5f5f5`, `grey[300]` `#e0e0e0`, `grey[600]` `#757575`.
 */
import { describe, expect, it, vi } from 'vitest';

import { createTheme } from '@mui/material/styles';
import type { ExtendedField } from '../types/field-definitions/extended-field';
import { resolveEffectiveColor } from './helper/resolveEffectiveColor';
import { resolveSwitchColors, switchColorContracts } from './switchColorContract';

// The field list renders CollectionDivider / ContractColorField, which pull Generic (extends
// window.visRxWidget, absent outside vis-2). The field tests read only the field data.
vi.mock('../components/ContractColorField', () => ({ default: () => null }));
vi.mock('../components/PlainColorField', () => ({ default: () => null }));
vi.mock('../components/CollectionDivider', () => ({ default: () => null }));

import switchFields from './switchFields';

const LIGHT = createTheme({ palette: { mode: 'light' } });
const DARK = createTheme({ palette: { mode: 'dark' } });

describe('resolveSwitchColors — without values the thumbs draw the MUI Switch defaults', () => {
    it('light: thumb on is the theme primary, thumb off is white', () => {
        const colors = resolveSwitchColors({}, LIGHT, false);
        expect([colors.on.thumb, colors.off.thumb]).toEqual(['#1976d2', '#fff']);
    });

    it('dark: thumb on is the theme primary, thumb off is grey[300]', () => {
        const colors = resolveSwitchColors({}, DARK, false);
        expect([colors.on.thumb, colors.off.thumb]).toEqual(['#90caf9', '#e0e0e0']);
    });
});

describe('resolveSwitchColors — Sperre is a state rule: it reproduces the MUI disabled look', () => {
    it('light: without a value, thumb off is grey[100], thumb on the lightened primary (MUI 6.5.0)', () => {
        // lighten(#1976d2, 0.62), as MUI computes it for the checked disabled thumb
        const colors = resolveSwitchColors({}, LIGHT, true);
        expect([colors.on.thumb, colors.off.thumb]).toEqual(['rgb(167, 202, 237)', '#f5f5f5']);
    });

    it('dark: without a value, thumb off is grey[600], thumb on the darkened primary (MUI 6.5.0)', () => {
        // darken(#90caf9, 0.55), as MUI computes it for the checked disabled thumb
        const colors = resolveSwitchColors({}, DARK, true);
        expect([colors.on.thumb, colors.off.thumb]).toEqual(['rgb(64, 90, 112)', '#757575']);
    });

    it('an explicit thumb colour keeps winning, raw', () => {
        const colors = resolveSwitchColors({ thumbColorTrue: 'red', thumbColorFalse: '#123456' }, DARK, true);
        expect([colors.on.thumb, colors.off.thumb]).toEqual(['red', '#123456']);
    });
});

describe('resolveSwitchColors — an explicit thumb colour is drawn raw, as stored (ADR-0004 P2)', () => {
    it.each([
        '#4caf50',
        'red',
        'transparent',
        'var(--x)',
        'linear-gradient(90deg, #ff0000 0%, #0000ff 100%)',
        ' #b0bec5 ',
    ])('%s', value => {
        const colors = resolveSwitchColors({ thumbColorTrue: value, thumbColorFalse: value }, LIGHT, false);
        expect([colors.on.thumb, colors.off.thumb]).toEqual([value, value]);
    });

    it('each thumb reads only its own field', () => {
        const colors = resolveSwitchColors({ thumbColorTrue: '#00aa00' }, DARK, false);
        expect([colors.on.thumb, colors.off.thumb]).toEqual(['#00aa00', '#e0e0e0']);
        const other = resolveSwitchColors({ thumbColorFalse: '#aa0000' }, DARK, false);
        expect([other.on.thumb, other.off.thumb]).toEqual(['#90caf9', '#aa0000']);
    });
});

describe('switch thumb fields — each field declares the contract its thumb resolves (ADR-0004)', () => {
    const fieldNamed = (name: string): ExtendedField =>
        switchFields().find(candidate => (candidate as { name?: string }).name === name) as ExtendedField;

    it('thumbColorTrue spreads the thumb-on contract: theme primary, no fallback field, no vis-2 style', () => {
        const { name, fallbackFields, terminal, inheritTextStyle } = fieldNamed('thumbColorTrue');
        expect({ name, fallbackFields, terminal, inheritTextStyle }).toEqual(switchColorContracts.thumbColorTrue);
        expect(switchColorContracts.thumbColorTrue).toEqual({
            name: 'thumbColorTrue',
            fallbackFields: [],
            terminal: 'primary',
        });
    });

    it('thumbColorFalse spreads the thumb-off contract: switchThumbOff, no fallback field, no vis-2 style', () => {
        const { name, fallbackFields, terminal, inheritTextStyle } = fieldNamed('thumbColorFalse');
        expect({ name, fallbackFields, terminal, inheritTextStyle }).toEqual(switchColorContracts.thumbColorFalse);
        expect(switchColorContracts.thumbColorFalse).toEqual({
            name: 'thumbColorFalse',
            fallbackFields: [],
            terminal: 'switchThumbOff',
        });
    });

    it.each([
        ['light', LIGHT],
        ['dark', DARK],
    ])('%s: without a value each swatch shows what the enabled switch draws', (_mode, theme) => {
        const runtime = resolveSwitchColors({}, theme, false);
        // Unrelated colours in the data and the vis-2 style must not leak into the swatch.
        const data = { textColor: '#00aa00', iconColor: '#aa00aa' };
        const style = { color: '#0000aa' };
        expect(resolveEffectiveColor(fieldNamed('thumbColorTrue'), data, theme, style)).toBe(runtime.on.thumb);
        expect(resolveEffectiveColor(fieldNamed('thumbColorFalse'), data, theme, style)).toBe(runtime.off.thumb);
    });

    it('with a value each swatch shows the colour the switch draws', () => {
        const data = { thumbColorTrue: '#4caf50', thumbColorFalse: 'rgb(18, 52, 86)' };
        const runtime = resolveSwitchColors(data, DARK, false);
        expect(resolveEffectiveColor(fieldNamed('thumbColorTrue'), data, DARK)).toBe(runtime.on.thumb);
        expect(resolveEffectiveColor(fieldNamed('thumbColorFalse'), data, DARK)).toBe(runtime.off.thumb);
    });
});
