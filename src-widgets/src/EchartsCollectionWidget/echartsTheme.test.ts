/**
 * Unit tests for the theme-token + palette-bridge helpers (ADR-0027).
 *
 * @module EchartsCollectionWidget/echartsTheme.test
 */
import { describe, expect, it } from 'vitest';
import type { Theme } from '@mui/material/styles';

import { effectiveTextTokens, resolveThemeTokens, echartsPalette } from './echartsTheme';

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
    },
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
        });
    });

    it('auto follows the theme mode (no flip)', () => {
        expect(effectiveTextTokens(lightTheme, 'auto').textPrimary).toBe('#tp');
    });
});

describe('echartsPalette', () => {
    it('orders the palette primary-first then the accents', () => {
        expect(echartsPalette(lightTheme)).toEqual(['#p', '#s', '#w', '#su', '#i', '#e']);
    });
});
