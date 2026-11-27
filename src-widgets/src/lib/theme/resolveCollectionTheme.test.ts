/**
 * resolveCollectionTheme — the one theme resolution shared by the canvas and the studio.
 *
 * @module lib/theme/resolveCollectionTheme.test
 * @remarks
 * Pins the host→collection boundary (`sanitizeHostTheme`, ADR-0078) and the resolution chain
 * on top of it (derived secondary, text follows primary, corners, unusable colours inherit).
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
import { getNestedValue } from './themeUtils';

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

    it.each(['nope', 'red', 'transparent'])(
        'lets a primary MUI cannot compute with (%s) inherit instead of throwing',
        value => {
            const theme = resolveCollectionTheme(host(), {}, { palette: { primary: { main: value } } });
            expect(theme.palette.primary.main).toBe('#137bf8');
            // Nothing to derive from: secondary and text inherit as if the primary were unset.
            expect(theme.palette.secondary.main).toBe('#e91e63');
            expect(theme.palette.text.primary).toBe('#137bf8');
        },
    );

    // The Studio's draft reaches the resolution unvalidated: what is typed there must not throw
    // in a component that computes with it (alpha/lighten/darken on text, surfaces, divider …).
    it.each<[string, string, object]>([
        ['text.primary', 'white', { text: { primary: 'white' } }],
        ['background.paper', 'white', { background: { paper: 'white' } }],
        ['divider', 'transparent', { divider: 'transparent' }],
        ['action.active', 'currentColor', { action: { active: 'currentColor' } }],
        ['grey.700', 'white', { grey: { 700: 'white' } }],
        ['error.light', 'red', { error: { main: '#d32f2f', light: 'red' } }],
        ['primary.contrastText', 'white', { primary: { main: '#137bf8', contrastText: 'white' } }],
    ])('lets a colour MUI cannot compute with at palette.%s inherit', (path, colour, palette) => {
        const theme = resolveCollectionTheme(host(), {}, { palette, spacing: 6 });
        // The colour is gone (the field inherits or MUI derives it), the rest of the draft holds.
        expect(getNestedValue<string>(theme.palette, path)).toEqual(expect.any(String));
        expect(getNestedValue<string>(theme.palette, path)).not.toBe(colour);
        expect(theme.spacing(1)).toBe('6px');
    });

    it('drops an unusable status colour but keeps the valid ones next to it', () => {
        const user: UserTheme = { palette: { error: { main: 'nope' }, success: { main: '#00aa00' } } };
        const theme = resolveCollectionTheme(host(), {}, user);
        expect(theme.palette.error.main).toBe(createTheme().palette.error.main);
        expect(theme.palette.success.main).toBe('#00aa00');
    });
});

describe('resolveCollectionTheme — CSS variables prefix (spec B17)', () => {
    // The vis-2 editor owns `--mui-*` on `:root`; the collection's variables must not collide.
    const host = createTheme({ palette: { primary: { main: '#137BF8' } } });
    const primaryVar = (userTheme: UserTheme): string | undefined =>
        // `vars` exists only on a CSS-variables theme (MUI types it on CssVarsTheme).
        (resolveCollectionTheme(host, undefined, userTheme) as Theme & { vars?: { palette: Theme['palette'] } }).vars
            ?.palette.primary.main;

    it.each<[string, UserTheme]>([
        ['cssVariables: true', { cssVariables: true }],
        ['an object without prefix', { cssVariables: {} }],
        ['an empty prefix', { cssVariables: { cssVarPrefix: '' } }],
        ['the reserved prefix mui', { cssVariables: { cssVarPrefix: 'mui' } }],
    ])('names the variables --vis2c-* for %s', (_label, userTheme) => {
        // MUI appends the resolved value as fallback: `var(--vis2c-palette-primary-main, #…)`.
        expect(primaryVar(userTheme)).toMatch(/^var\(--vis2c-palette-primary-main[,)]/);
    });

    it('keeps an own prefix', () => {
        expect(primaryVar({ cssVariables: { cssVarPrefix: 'my' } })).toMatch(/^var\(--my-palette-primary-main[,)]/);
    });

    it('creates no variables while they are off', () => {
        expect(primaryVar({})).toBeUndefined();
    });
});

describe('resolveCollectionTheme — a user mode other than the host mode', () => {
    /** The vis-2 standard dark host: white secondary text, dark surfaces. */
    const darkHost = (): Theme =>
        createTheme({
            palette: {
                mode: 'dark',
                primary: { main: '#4dabf5' },
                text: { primary: '#ffffff', secondary: '#ffffff' },
                background: { default: '#121212', paper: '#121212' },
            },
        });
    /** A light theme the user picked over the dark host (the Daylight preset). */
    const lightPreset: UserTheme = {
        palette: {
            mode: 'light',
            primary: { main: '#2563eb' },
            background: { default: '#f8fafc', paper: '#ffffff' },
        },
    };

    it("drops the host's mode-bound neutrals, so a light preset over a dark host stays readable", () => {
        const theme = resolveCollectionTheme(darkHost(), {}, lightPreset);
        const lightDefaults = createTheme({ palette: { mode: 'light' } }).palette;
        expect(theme.palette.mode).toBe('light');
        expect(theme.palette.text.secondary).toBe(lightDefaults.text.secondary);
        expect(theme.palette.text.disabled).toBe(lightDefaults.text.disabled);
        expect(theme.palette.divider).toBe(lightDefaults.divider);
        expect(theme.palette.action.hover).toBe(lightDefaults.action.hover);
        expect(theme.palette.background.paper).toBe('#ffffff');
        expect(theme.palette.text.primary).toBe('#2563eb');
    });

    it("takes the new mode's surfaces when the user sets only the mode", () => {
        const theme = resolveCollectionTheme(darkHost(), {}, { palette: { mode: 'light' } });
        const lightDefaults = createTheme({ palette: { mode: 'light' } }).palette;
        expect(theme.palette.background.paper).toBe(lightDefaults.background.paper);
        expect(theme.palette.background.default).toBe(lightDefaults.background.default);
        // The host accent stays the inherited DNA (ADR-0078 no. 2).
        expect(theme.palette.primary.main).toBe('#4dabf5');
    });

    it('keeps the host neutrals when the user mode matches the host mode', () => {
        const theme = resolveCollectionTheme(
            darkHost(),
            {},
            { palette: { mode: 'dark', primary: { main: '#34d399' } } },
        );
        expect(theme.palette.text.secondary).toBe('#ffffff');
        expect(theme.palette.background.paper).toBe('#121212');
    });

    it('keeps a neutral the user sets explicitly', () => {
        const theme = resolveCollectionTheme(
            darkHost(),
            {},
            {
                palette: { mode: 'light', text: { secondary: '#445566' }, divider: '#abcdef' },
            },
        );
        expect(theme.palette.text.secondary).toBe('#445566');
        expect(theme.palette.divider).toBe('#abcdef');
    });
});

describe('resolveCollectionTheme — user surfaces over the host neutrals', () => {
    /** The vis-2 modernDark host: opaque navy divider, slate secondary text, blue selection. */
    const modernDarkHost = (): Theme =>
        createTheme({
            palette: {
                mode: 'dark',
                primary: { main: '#137BF8' },
                divider: '#1E2837',
                text: { primary: '#E8EDF5', secondary: '#8B97A8', disabled: '#586576' },
                action: { hover: 'rgba(255, 255, 255, 0.05)', selected: 'rgba(19, 123, 248, 0.16)' },
                background: { default: '#0A121D', paper: '#121A26' },
            },
        });
    /** The Bernstein preset: same mode as the host, its own surfaces. */
    const bernstein: UserTheme = {
        palette: {
            mode: 'dark',
            primary: { main: '#fbbf24' },
            background: { default: '#18140a', paper: '#221c11' },
        },
    };

    it('lets a preset with its own surfaces take the neutrals of its mode instead of the host ones', () => {
        const theme = resolveCollectionTheme(modernDarkHost(), {}, bernstein);
        const darkDefaults = createTheme({ palette: { mode: 'dark' } }).palette;
        expect(theme.palette.divider).toBe(darkDefaults.divider);
        expect(theme.palette.text.secondary).toBe(darkDefaults.text.secondary);
        expect(theme.palette.text.disabled).toBe(darkDefaults.text.disabled);
        expect(theme.palette.action.hover).toBe(darkDefaults.action.hover);
        expect(theme.palette.action.selected).toBe(darkDefaults.action.selected);
        expect(theme.palette.background.paper).toBe('#221c11');
        expect(theme.palette.text.primary).toBe('#fbbf24');
    });

    it('keeps the host surface the user does not set', () => {
        const theme = resolveCollectionTheme(
            modernDarkHost(),
            {},
            {
                palette: { background: { paper: '#221c11' } },
            },
        );
        expect(theme.palette.background.default).toBe('#0A121D');
        expect(theme.palette.divider).toBe(createTheme({ palette: { mode: 'dark' } }).palette.divider);
    });

    it('keeps the host neutrals while the user sets no surface', () => {
        const theme = resolveCollectionTheme(modernDarkHost(), {}, { palette: { primary: { main: '#fbbf24' } } });
        expect(theme.palette.divider).toBe('#1E2837');
        expect(theme.palette.text.secondary).toBe('#8B97A8');
    });

    it('keeps a neutral the user sets next to the surfaces', () => {
        const theme = resolveCollectionTheme(
            modernDarkHost(),
            {},
            {
                palette: { ...bernstein.palette, divider: '#3a2f1a' },
            },
        );
        expect(theme.palette.divider).toBe('#3a2f1a');
    });
});
