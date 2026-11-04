/**
 * Unit tests for the theme-token + palette-bridge helpers (ADR-0027).
 *
 * @module EchartsCollectionWidget/echartsTheme.test
 */
import { describe, expect, it } from 'vitest';
import type { Theme } from '@mui/material/styles';

import {
    buildEchartsTheme,
    chartCanvasColor,
    chartThemeSignature,
    effectiveTextTokens,
    resolveThemeTokens,
    echartsPalette,
} from './echartsTheme';

/** Minimal light-mode theme — only the fields the token helpers read. */
const lightTheme = {
    palette: {
        mode: 'light',
        primary: { main: '#p' },
        secondary: { main: '#s' },
        success: { main: '#su' },
        warning: { main: '#w' },
        error: { main: '#e' },
        info: { main: '#i' },
        text: { primary: '#tp', secondary: '#ts' },
        divider: '#d',
        background: { paper: '#pa' },
    },
    typography: { fontFamily: 'f' },
} as unknown as Theme;

describe('resolveThemeTokens (ADR-0027)', () => {
    it('returns the palette mains + the theme text/divider tokens', () => {
        expect(resolveThemeTokens(lightTheme)).toEqual({
            primary: '#p',
            secondary: '#s',
            success: '#su',
            warning: '#w',
            error: '#e',
            info: '#i',
            divider: '#d',
            textPrimary: '#tp',
            textSecondary: '#ts',
            paper: '#pa',
        });
    });

    it('swaps text/divider to the fixed dark tokens when forceMode flips to dark', () => {
        const t = resolveThemeTokens(lightTheme, 'dark');
        // Palette colours are unchanged (only text/divider are mode-aware).
        expect(t.primary).toBe('#p');
        expect(t.success).toBe('#su');
        // Text/divider flipped to the dark token set.
        expect(t.textPrimary).toBe('#e0e0e0');
        expect(t.textSecondary).toBe('rgba(255,255,255,0.7)');
        expect(t.divider).toBe('rgba(255,255,255,0.18)');
    });

    it('leaves the theme tokens when forceMode agrees with the host mode', () => {
        const t = resolveThemeTokens(lightTheme, 'light');
        expect(t.textPrimary).toBe('#tp');
        expect(t.divider).toBe('#d');
    });
});

describe('effectiveTextTokens', () => {
    it('returns the theme values when no override', () => {
        expect(effectiveTextTokens(lightTheme)).toEqual({
            textPrimary: '#tp',
            textSecondary: '#ts',
            divider: '#d',
            paper: '#pa',
        });
    });

    it('auto follows the theme mode (no flip)', () => {
        expect(effectiveTextTokens(lightTheme, 'auto').textPrimary).toBe('#tp');
    });
});

describe('paper token (ADR-0027 addendum 2026-11-04)', () => {
    const darkTheme = {
        ...lightTheme,
        palette: { ...lightTheme.palette, mode: 'dark', background: { paper: '#dpa' } },
    } as unknown as Theme;

    it('is the theme paper while the chart follows the host mode (light and dark)', () => {
        expect(resolveThemeTokens(lightTheme).paper).toBe('#pa');
        expect(resolveThemeTokens(lightTheme, 'auto').paper).toBe('#pa');
        expect(resolveThemeTokens(lightTheme, 'light').paper).toBe('#pa');
        expect(resolveThemeTokens(darkTheme).paper).toBe('#dpa');
        expect(resolveThemeTokens(darkTheme, 'dark').paper).toBe('#dpa');
    });

    it('is the fixed canvas colour of a forced mode that differs from the host', () => {
        expect(resolveThemeTokens(lightTheme, 'dark').paper).toBe('#1e1e1e');
        expect(resolveThemeTokens(darkTheme, 'light').paper).toBe('#ffffff');
        // The same constants the forced-mode canvas paints.
        expect(resolveThemeTokens(lightTheme, 'dark').paper).toBe(chartCanvasColor(lightTheme, 'dark'));
        expect(resolveThemeTokens(darkTheme, 'light').paper).toBe(chartCanvasColor(darkTheme, 'light'));
    });
});

describe('echartsPalette', () => {
    it('orders the palette primary-first then the accents', () => {
        expect(echartsPalette(lightTheme)).toEqual(['#p', '#s', '#w', '#su', '#i', '#e']);
    });
});

describe('chartCanvasColor (ADR-0007 dark-mode)', () => {
    const darkTheme = { ...lightTheme, palette: { ...lightTheme.palette, mode: 'dark' } } as unknown as Theme;

    it('stays transparent while the chart follows the host mode', () => {
        expect(chartCanvasColor(lightTheme)).toBe('transparent');
        expect(chartCanvasColor(lightTheme, 'auto')).toBe('transparent');
        expect(chartCanvasColor(lightTheme, 'light')).toBe('transparent');
        expect(chartCanvasColor(darkTheme, 'dark')).toBe('transparent');
    });

    it('paints the fixed canvas colour of a forced mode that differs from the host', () => {
        expect(chartCanvasColor(lightTheme, 'dark')).toBe('#1e1e1e');
        expect(chartCanvasColor(darkTheme, 'light')).toBe('#ffffff');
    });

    it('is the canvas colour of the chart theme base', () => {
        expect(buildEchartsTheme(lightTheme, 'dark').backgroundColor).toBe('#1e1e1e');
        expect(buildEchartsTheme(darkTheme, 'light').backgroundColor).toBe('#ffffff');
        expect(buildEchartsTheme(lightTheme).backgroundColor).toBe('transparent');
    });
});

describe('tooltip floor of the theme base (ADR-0027 addendum 2026-11-04)', () => {
    const darkTheme = {
        ...lightTheme,
        palette: { ...lightTheme.palette, mode: 'dark', text: { primary: '#dtp', secondary: '#dts' }, background: { paper: '#dpa' } },
    } as unknown as Theme;

    it('paints the card surface with the legend-text colour while following the host mode', () => {
        expect(buildEchartsTheme(lightTheme).tooltip).toEqual({ backgroundColor: '#pa', textStyle: { color: '#ts' } });
        expect(buildEchartsTheme(darkTheme, 'auto').tooltip).toEqual({
            backgroundColor: '#dpa',
            textStyle: { color: '#dts' },
        });
    });

    it('takes the fixed canvas surface and text of a forced mode that differs from the host', () => {
        expect(buildEchartsTheme(lightTheme, 'dark').tooltip).toEqual({
            backgroundColor: '#1e1e1e',
            textStyle: { color: 'rgba(255,255,255,0.7)' },
        });
        expect(buildEchartsTheme(darkTheme, 'light').tooltip).toEqual({
            backgroundColor: '#ffffff',
            textStyle: { color: 'rgba(0,0,0,0.6)' },
        });
    });

    it('leaves border and shadow to echarts (no borderColor emitted)', () => {
        const tooltip = buildEchartsTheme(lightTheme).tooltip as Record<string, unknown>;
        expect(tooltip).not.toHaveProperty('borderColor');
        expect(tooltip).not.toHaveProperty('shadowColor');
    });
});

describe('chartThemeSignature (the theme-base memo key of the live body)', () => {
    const withPalette = (over: Record<string, unknown>): Theme =>
        ({ ...lightTheme, palette: { ...lightTheme.palette, ...over } }) as unknown as Theme;

    it('changes when only the paper colour changes — the tooltip floor must rebuild', () => {
        expect(chartThemeSignature(withPalette({ background: { paper: '#other' } }))).not.toBe(
            chartThemeSignature(lightTheme),
        );
    });

    it('stays equal for a content-equal theme under a new reference (editor move, no redraw)', () => {
        const copy = JSON.parse(JSON.stringify(lightTheme)) as Theme;
        expect(chartThemeSignature(copy)).toBe(chartThemeSignature(lightTheme));
    });
});
