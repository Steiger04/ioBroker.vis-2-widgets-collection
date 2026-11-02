/**
 * resolveCollectionTheme — the one theme resolution shared by the canvas and the studio.
 *
 * @module lib/theme/resolveCollectionTheme.test
 * @remarks
 * Pins the host→collection boundary (`sanitizeHostTheme`, ADR-0078) and the resolution chain
 * on top of it (derived secondary, text follows primary, corners).
 *
 * Regression guard for the vis-2 React-19/MUI-9 era: the host theme is a
 * CSS-variables theme whose `vars` mirror (and `components` skin) must never
 * reach the collection theme — a leaked `vars` overrides the merged palette
 * inside every MUI component (`(theme.vars || theme).palette`), pinning all
 * surfaces to the host colors while palette-readers (resolvers, sx) re-theme
 * correctly. The fixture below mirrors the real gui-components host shape
 * (keys verified live against vis-2 with Admin 8 / gui-components 10).
 */

import { describe, expect, it } from 'vitest';

import { createTheme } from '@mui/material';

import { resolveCollectionTheme, sanitizeHostTheme } from './resolveCollectionTheme';
import type { Theme, ThemeOptions } from '@mui/material/styles';
import type { UserTheme } from './themeTypes';

/** A Rubin-style user theme (palette-only, like the curated presets). */
const USER_THEME: ThemeOptions = {
    palette: {
        mode: 'dark',
        primary: { main: '#f87171' },
        secondary: { main: '#fb7185' },
        background: { default: '#190d0d', paper: '#241414' },
    },
};

/**
 * MUI-9/cssVars-shaped host theme (data-only stand-in, no real MUI 9 needed):
 * literal palette + `vars` mirror + colorSchemes + component skin + function
 * closures + augmented typography + assorted MUI-9-only top-level keys.
 */
function buildMui9StyleHost(): Theme {
    return {
        breakpoints: { keys: ['xs'], values: { xs: 0 } },
        direction: 'ltr',
        spacing: (factor: number): string => `${factor * 8}px`,
        shape: { borderRadius: 10 },
        shadows: ['none', '0px 2px 1px -1px rgba(0,0,0,0.2)'],
        typography: {
            fontFamily: '"Inter", "Segoe UI", Roboto',
            fontSize: 14,
            pxToRem: (px: number): string => `${px / 14}rem`,
            body1: { fontFamily: '"Inter"', fontSize: '1rem' },
            body2: { fontFamily: '"Inter"', fontSize: '0.875rem' },
        } as unknown as Theme['typography'],
        transitions: { duration: { short: 200 } } as unknown as Theme['transitions'],
        zIndex: { drawer: 1200 },
        palette: {
            mode: 'dark',
            primary: { main: '#137BF8', dark: '#0B62D6', light: '#4B9BFA', contrastText: '#FFFFFF' },
            background: {
                default: '#0A121D',
                paper: '#121A26',
                defaultChannel: '10 18 29',
                paperChannel: '18 26 38',
            },
            getContrastText: (): string => '#fff',
            augmentColor: (): unknown => ({}),
        } as unknown as Theme['palette'],
        // cssVars machinery — the leak that pinned the surfaces:
        defaultColorScheme: 'dark',
        cssVarPrefix: 'mui',
        colorSchemeSelector: 'data',
        rootSelector: ':root',
        getCssVar: (): string => '',
        colorSchemes: { dark: { palette: { background: { paper: '#121A26' } } } },
        vars: { palette: { background: { paper: 'var(--mui-palette-background-paper)' } } },
        generateThemeVars: (): unknown[] => [],
        generateStyleSheets: (): unknown[] => [],
        generateSpacing: (): unknown => ({}),
        getColorSchemeSelector: (): string => ':root',
        shouldSkipGeneratingVar: (): boolean => false,
        opacity: {},
        overlays: [],
        font: {},
        applyStyles: (): Record<string, unknown> => ({}),
        internal_cache: { instance: 1 },
        unstable_sxConfig: {},
        unstable_sx: (): unknown => ({}),
        toRuntimeSource: '',
        alpha: (): string => '',
        lighten: (): string => '',
        darken: (): string => '',
        // admin component skin with hardcoded surface colors:
        components: {
            MuiPaper: {
                defaultProps: { elevation: 0 },
                styleOverrides: { root: { backgroundColor: '#121A26', backgroundImage: 'none' } },
            },
            MuiCard: { styleOverrides: { root: { backgroundColor: '#121A26' } } },
        },
        toolbar: {},
        saveToolbar: {},
        classes: {},
        motion: {},
        mixins: {},
        containerQueries: {},
    } as unknown as Theme;
}

describe('sanitizeHostTheme — host→collection boundary', () => {
    it('drops the cssVars machinery (vars, colorSchemes, generators)', () => {
        const sanitized = sanitizeHostTheme(buildMui9StyleHost());
        expect('vars' in sanitized).toBe(false);
        expect('colorSchemes' in sanitized).toBe(false);
        expect('cssVarPrefix' in sanitized).toBe(false);
        expect('colorSchemeSelector' in sanitized).toBe(false);
        expect('getCssVar' in sanitized).toBe(false);
        expect('generateThemeVars' in sanitized).toBe(false);
        expect('generateStyleSheets' in sanitized).toBe(false);
        expect('rootSelector' in sanitized).toBe(false);
        expect('opacity' in sanitized).toBe(false);
        expect('applyStyles' in sanitized).toBe(false);
    });

    it('drops the host component skin (no admin Paper/Card overrides)', () => {
        const sanitized = sanitizeHostTheme(buildMui9StyleHost());
        expect('components' in sanitized).toBe(false);
    });

    it('drops palette function closures and augmented typography', () => {
        const sanitized = sanitizeHostTheme(buildMui9StyleHost());
        expect('getContrastText' in (sanitized.palette as object)).toBe(false);
        expect('augmentColor' in (sanitized.palette as object)).toBe(false);
        const typography = sanitized.typography as Record<string, unknown>;
        expect('pxToRem' in typography).toBe(false);
        expect('body1' in typography).toBe(false);
        expect('body2' in typography).toBe(false);
        expect(typography.fontFamily).toBe('"Inter", "Segoe UI", Roboto');
    });

    it('keeps the inheritable DNA (palette values, shape, shadows, typography base)', () => {
        const sanitized = sanitizeHostTheme(buildMui9StyleHost());
        expect((sanitized.palette as Record<string, unknown>).mode).toBe('dark');
        expect((sanitized.shape as Record<string, unknown>).borderRadius).toBe(10);
        expect((sanitized.shadows as unknown[]).length).toBe(2);
        expect(sanitized.direction).toBe('ltr');
        expect('breakpoints' in sanitized).toBe(true);
        expect('zIndex' in sanitized).toBe(true);
    });
});

describe('merge chain over a sanitized MUI-9 host', () => {
    it('delivers the user background/primary and no vars leak into the created theme', () => {
        const theme = resolveCollectionTheme(buildMui9StyleHost(), {}, USER_THEME);

        // User theme wins on every key it sets:
        expect(theme.palette.background.paper).toBe('#241414');
        expect(theme.palette.background.default).toBe('#190d0d');
        expect(theme.palette.primary.main).toBe('#f87171');
        expect(theme.palette.mode).toBe('dark');

        // No cssVars leak: MUI components must read theme.palette (not a stale
        // vars mirror), and no host component skin may ride along:
        expect('vars' in theme).toBe(false);
        expect('colorSchemes' in theme).toBe(false);
        expect(Object.keys(theme.components ?? {})).toEqual([]);
    });
});

describe('resolveCollectionTheme — the effective colour', () => {
    /** A plain MUI host (light mode, non-default accents) — the studio passes the chrome theme. */
    const host = (): Theme =>
        createTheme({
            palette: {
                mode: 'light',
                primary: { main: '#137bf8' },
                secondary: { main: '#e91e63' },
                text: { primary: '#101418', secondary: '#5f6b7a' },
                background: { default: '#f3f5f8', paper: '#ffffff' },
                divider: '#dde3ea',
            },
        });

    it('inherits every unset colour from the host, text following the host primary', () => {
        const theme = resolveCollectionTheme(host(), {}, {});
        expect(theme.palette.primary.main).toBe('#137bf8');
        expect(theme.palette.secondary.main).toBe('#e91e63');
        expect(theme.palette.text.primary).toBe('#137bf8');
        expect(theme.palette.text.secondary).toBe('#5f6b7a');
        expect(theme.palette.background.paper).toBe('#ffffff');
        expect(theme.palette.mode).toBe('light');
    });

    it('derives the secondary from a user primary and lets the text follow it', () => {
        const theme = resolveCollectionTheme(host(), {}, { palette: { primary: { main: '#ff0000' } } });
        expect(theme.palette.primary.main).toBe('#ff0000');
        expect(theme.palette.secondary.main).toBe('#00ff00');
        expect(theme.palette.text.primary).toBe('#ff0000');
    });

    it('keeps an explicit user text colour', () => {
        const user: UserTheme = { palette: { primary: { main: '#ff0000' }, text: { primary: '#222222' } } };
        const theme = resolveCollectionTheme(host(), {}, user);
        expect(theme.palette.text.primary).toBe('#222222');
    });

    it('applies overrides between host and user theme (user wins)', () => {
        const theme = resolveCollectionTheme(
            host(),
            { typography: { fontSize: 12 }, shape: { borderRadius: 2 } },
            { shape: { borderRadius: 6 } },
        );
        expect(theme.typography.fontSize).toBe(12);
        expect(theme.shape.borderRadius).toBe(6);
    });

    it('injects per-corner radii into the surface components', () => {
        const user: UserTheme = { corners: { topLeft: 4, topRight: 8, bottomRight: 12, bottomLeft: 16 } };
        const theme = resolveCollectionTheme(host(), {}, user);
        const paperRoot = (theme.components?.MuiPaper?.styleOverrides as { root: { borderRadius: string } }).root;
        expect(paperRoot.borderRadius).toBe('4px 8px 12px 16px');
        expect(theme.shape.borderRadius).toBe(4);
    });
});
