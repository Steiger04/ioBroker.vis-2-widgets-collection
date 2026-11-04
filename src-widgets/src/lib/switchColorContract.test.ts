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

describe('resolveSwitchColors — without values the tracks draw the MUI Switch defaults', () => {
    it('light: track on is the theme primary, track off is black (common.onBackground)', () => {
        const colors = resolveSwitchColors({}, LIGHT, false);
        expect([colors.on.track, colors.off.track]).toEqual(['#1976d2', '#000']);
    });

    it('dark: track on is the theme primary, track off is white (common.onBackground)', () => {
        const colors = resolveSwitchColors({}, DARK, false);
        expect([colors.on.track, colors.off.track]).toEqual(['#90caf9', '#fff']);
    });
});

describe('resolveSwitchColors — the legacy trackColor is the fallback field of both tracks (no data rewrite)', () => {
    it.each([
        ['light', LIGHT],
        ['dark', DARK],
    ])('%s: a set trackColor draws both tracks, as before the split', (_mode, theme) => {
        const colors = resolveSwitchColors({ trackColor: '#ff9800' }, theme, false);
        expect([colors.on.track, colors.off.track]).toEqual(['#ff9800', '#ff9800']);
    });

    it('a new track field wins over the legacy trackColor, each for its own state', () => {
        const on = resolveSwitchColors({ trackColor: '#ff9800', trackColorTrue: '#00aa00' }, LIGHT, false);
        expect([on.on.track, on.off.track]).toEqual(['#00aa00', '#ff9800']);
        const off = resolveSwitchColors({ trackColor: '#ff9800', trackColorFalse: '#aa0000' }, LIGHT, false);
        expect([off.on.track, off.off.track]).toEqual(['#ff9800', '#aa0000']);
    });

    it('each track reads only its own field (and the legacy one)', () => {
        const colors = resolveSwitchColors({ trackColorTrue: '#00aa00' }, DARK, false);
        expect([colors.on.track, colors.off.track]).toEqual(['#00aa00', '#fff']);
    });
});

describe('resolveSwitchColors — an explicit track colour is drawn raw, as stored (ADR-0004 P2)', () => {
    it.each(['red', 'transparent', 'var(--x)', 'linear-gradient(90deg, #ff0000 0%, #0000ff 100%)', ' #b0bec5 '])(
        '%s',
        value => {
            const fresh = resolveSwitchColors({ trackColorTrue: value, trackColorFalse: value }, LIGHT, false);
            expect([fresh.on.track, fresh.off.track]).toEqual([value, value]);
            const legacy = resolveSwitchColors({ trackColor: value }, LIGHT, false);
            expect([legacy.on.track, legacy.off.track]).toEqual([value, value]);
        },
    );
});

describe('resolveSwitchColors — the track alpha is frozen presentation, not contract (MUI 6.5.0)', () => {
    it('light: off 0.38, on 0.5', () => {
        const colors = resolveSwitchColors({}, LIGHT, false);
        expect([colors.on.trackAlpha, colors.off.trackAlpha]).toEqual([0.5, 0.38]);
    });

    it('dark: off 0.3, on 0.5', () => {
        const colors = resolveSwitchColors({}, DARK, false);
        expect([colors.on.trackAlpha, colors.off.trackAlpha]).toEqual([0.5, 0.3]);
    });

    it('applies to an explicit track colour too, as today', () => {
        const colors = resolveSwitchColors({ trackColor: '#ff9800' }, LIGHT, false);
        expect([colors.on.trackAlpha, colors.off.trackAlpha]).toEqual([0.5, 0.38]);
    });
});

describe('resolveSwitchColors — Sperre is a state rule: it reproduces the MUI disabled look', () => {
    it.each([
        ['light', 0.12, LIGHT],
        ['dark', 0.2, DARK],
    ])('%s: the track alpha is %s in both states, also with an explicit track colour', (_mode, alpha, theme) => {
        const unset = resolveSwitchColors({}, theme, true);
        expect([unset.on.trackAlpha, unset.off.trackAlpha]).toEqual([alpha, alpha]);
        const explicit = resolveSwitchColors({ trackColor: '#ff9800', trackColorTrue: 'red' }, theme, true);
        expect([explicit.on.trackAlpha, explicit.off.trackAlpha]).toEqual([alpha, alpha]);
    });

    it('keeps the track colours: unset the MUI defaults, explicit raw', () => {
        const unset = resolveSwitchColors({}, LIGHT, true);
        expect([unset.on.track, unset.off.track]).toEqual(['#1976d2', '#000']);
        const explicit = resolveSwitchColors({ trackColor: '#ff9800', trackColorTrue: 'red' }, DARK, true);
        expect([explicit.on.track, explicit.off.track]).toEqual(['red', '#ff9800']);
    });

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

    it('trackColorTrue spreads the track-on contract: theme primary, legacy trackColor as fallback field', () => {
        const { name, fallbackFields, terminal, inheritTextStyle } = fieldNamed('trackColorTrue');
        expect({ name, fallbackFields, terminal, inheritTextStyle }).toEqual(switchColorContracts.trackColorTrue);
        expect(switchColorContracts.trackColorTrue).toEqual({
            name: 'trackColorTrue',
            fallbackFields: ['trackColor'],
            terminal: 'primary',
        });
    });

    it('trackColorFalse spreads the track-off contract: onBackground, legacy trackColor as fallback field', () => {
        const { name, fallbackFields, terminal, inheritTextStyle } = fieldNamed('trackColorFalse');
        expect({ name, fallbackFields, terminal, inheritTextStyle }).toEqual(switchColorContracts.trackColorFalse);
        expect(switchColorContracts.trackColorFalse).toEqual({
            name: 'trackColorFalse',
            fallbackFields: ['trackColor'],
            terminal: 'onBackground',
        });
    });

    it('the track fields carry labels', () => {
        const labelOf = (name: string): unknown => (fieldNamed(name) as { label?: string }).label;
        expect([labelOf('trackColorTrue'), labelOf('trackColorFalse')]).toEqual([
            'track_color_true',
            'track_color_false',
        ]);
    });

    it('the legacy trackColor shows only while set: its vis-2 hidden rule reads the raw data', () => {
        const { hidden } = fieldNamed('trackColor');
        // vis-2 compiles a string `hidden` against the raw stored widget data (no defaults merged).
        const isHidden = (data: Record<string, unknown>): boolean =>
            Boolean(new Function('data', `return ${hidden as string};`)(data));
        expect([isHidden({}), isHidden({ trackColor: null }), isHidden({ trackColor: '' })]).toEqual([
            true,
            true,
            true,
        ]);
        expect(isHidden({ trackColor: '#ff9800' })).toBe(false);
    });

    it.each([
        ['light', LIGHT],
        ['dark', DARK],
    ])('%s: without a value each track swatch shows the colour the enabled track draws', (_mode, theme) => {
        const runtime = resolveSwitchColors({}, theme, false);
        const data = { textColor: '#00aa00', iconColor: '#aa00aa' };
        const style = { color: '#0000aa' };
        expect(resolveEffectiveColor(fieldNamed('trackColorTrue'), data, theme, style)).toBe(runtime.on.track);
        expect(resolveEffectiveColor(fieldNamed('trackColorFalse'), data, theme, style)).toBe(runtime.off.track);
    });

    it('with the legacy trackColor set both track swatches show it, like the runtime', () => {
        const data = { trackColor: '#ff9800' };
        const runtime = resolveSwitchColors(data, LIGHT, false);
        expect(resolveEffectiveColor(fieldNamed('trackColorTrue'), data, LIGHT)).toBe(runtime.on.track);
        expect(resolveEffectiveColor(fieldNamed('trackColorFalse'), data, LIGHT)).toBe(runtime.off.track);
    });

    it('with a value each swatch shows the colour the switch draws', () => {
        const data = { thumbColorTrue: '#4caf50', thumbColorFalse: 'rgb(18, 52, 86)' };
        const runtime = resolveSwitchColors(data, DARK, false);
        expect(resolveEffectiveColor(fieldNamed('thumbColorTrue'), data, DARK)).toBe(runtime.on.thumb);
        expect(resolveEffectiveColor(fieldNamed('thumbColorFalse'), data, DARK)).toBe(runtime.off.thumb);
    });
});
