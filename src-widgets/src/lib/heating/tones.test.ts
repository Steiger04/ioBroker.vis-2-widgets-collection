/**
 * Heating tones — tone → colours at the function's interface (ADR-0124).
 *
 * @module lib/heating/tones.test
 * @remarks
 * Contrast is measured with MUI's `getContrastRatio` (WCAG relative luminance), calibrated
 * below against published values, never with the module's own arithmetic. The themes are
 * resolved the way the canvas widgets resolve them: host stand-in (vis-2 modern, verbatim
 * palette constants) or MUI's default, each preset and a user palette on top.
 */

import { describe, expect, it } from 'vitest';

import { createTheme, decomposeColor, getContrastRatio, getLuminance } from '@mui/material/styles';

import { createChromeTheme } from '../theme/chromeTheme';
import { resolveCollectionTheme } from '../theme/resolveCollectionTheme';
import { THEME_PRESETS } from '../theme/presets';
import type { Theme } from '@mui/material/styles';
import type { UserTheme } from '../theme/themeTypes';
import { accentColors, HEATING_TONES, toneColors } from './tones';

/** WCAG AA for normal text. */
const AA = 4.5;

/** vis-2 modern host stand-in. */
const modern = (mode: 'dark' | 'light'): Theme => createChromeTheme(mode);

/** Resolves a user theme on top of the host, as the canvas widgets do. */
const resolve = (host: Theme, user: UserTheme = {}): Theme => resolveCollectionTheme(host, undefined, user);

describe('contrast measure (calibration against published values)', () => {
    it('reads black on white as 21:1 and the WCAG reference grey #767676 on white as 4.54:1', () => {
        expect(getContrastRatio('#000000', '#ffffff')).toBeCloseTo(21, 1);
        expect(getContrastRatio('#767676', '#ffffff')).toBeCloseTo(4.54, 1);
    });

    it('reads white on the vis-2 modern dark error #E5534B as 3.7:1 (below AA)', () => {
        expect(getContrastRatio('#ffffff', '#E5534B')).toBeCloseTo(3.7, 1);
    });
});

describe('störung (filled)', () => {
    it('fills with the vis-2 modern dark error and writes black on it, since white reaches only 3.7:1', () => {
        const colors = toneColors(resolve(modern('dark')), 'störung');
        expect(colors.surface).toBe('rgb(229, 83, 75)'); // #E5534B
        expect(colors.text).toBe('#000');
        expect(colors.mark).toBe('triangle');
    });
});

/** The `[r, g, b]` channels of an opaque colour. */
const channels = (color: string): number[] => decomposeColor(color).values.slice(0, 3);

describe('hinweis (tinted)', () => {
    it('tints the vis-2 modern dark paper with error at alpha 0.16 and lightens the text to AA', () => {
        const colors = toneColors(resolve(modern('dark')), 'hinweis');
        // #E5534B at 0.16 over the paper #121A26, per channel round(paper·0.84 + error·0.16)
        expect(colors.surface).toBe('rgb(52, 35, 44)');
        // the raw slot colour on its own tint stays below AA (ADR-0124: about 4.0:1) ...
        expect(getContrastRatio('#E5534B', colors.surface)).toBeLessThan(AA);
        // ... so the text is the error hue, lightened until AA
        expect(getContrastRatio(colors.text, colors.surface)).toBeGreaterThanOrEqual(AA);
        expect(getLuminance(colors.text)).toBeGreaterThan(getLuminance('#E5534B'));
        const [r, g, b] = channels(colors.text);
        expect(r).toBeGreaterThan(g);
        expect(r).toBeGreaterThan(b);
        expect(colors.mark).toBe('triangle');
    });

    it('tints the vis-2 modern light paper with error at alpha 0.10 and darkens the text to AA', () => {
        const colors = toneColors(resolve(modern('light')), 'hinweis');
        // #D93025 at 0.10 over the paper #FFFFFF
        expect(colors.surface).toBe('rgb(251, 234, 233)');
        expect(getContrastRatio(colors.text, colors.surface)).toBeGreaterThanOrEqual(AA);
        expect(getLuminance(colors.text)).toBeLessThanOrEqual(getLuminance('#D93025'));
        const [r, g, b] = channels(colors.text);
        expect(r).toBeGreaterThan(g);
        expect(r).toBeGreaterThan(b);
        expect(colors.mark).toBe('triangle');
    });
});

/** A red with a pink cast, as a user might set `error` in the Theme Studio (the design's hue). */
const PINK_ERROR = '#EC5A7E';

describe('slots: each tone reads only its own palette slot', () => {
    const host = modern('dark');
    const base = resolve(host);
    const colorsOf = (theme: Theme): Record<string, unknown> =>
        Object.fromEntries(HEATING_TONES.map(tone => [tone, toneColors(theme, tone)]));
    const changedTones = (user: UserTheme): string[] => {
        const before = colorsOf(base);
        const after = colorsOf(resolve(host, user));
        return HEATING_TONES.filter(tone => JSON.stringify(before[tone]) !== JSON.stringify(after[tone]));
    };

    it('a user error (the pink cast) acts on störung and hinweis only', () => {
        expect(changedTones({ palette: { error: { main: PINK_ERROR } } })).toEqual(['störung', 'hinweis']);
        expect(toneColors(resolve(host, { palette: { error: { main: PINK_ERROR } } }), 'störung').surface).toBe(
            'rgb(236, 90, 126)',
        );
    });

    it('a user warning acts on heizt only, a user info on kühl only', () => {
        expect(changedTones({ palette: { warning: { main: '#ff8a00' } } })).toEqual(['heizt']);
        expect(changedTones({ palette: { info: { main: '#00bcd4' } } })).toEqual(['kühl']);
    });

    it('primary, secondary and success act on no tone', () => {
        expect(
            changedTones({
                palette: {
                    primary: { main: '#f87171' },
                    secondary: { main: '#22c55e' },
                    success: { main: '#a3e635' },
                },
            }),
        ).toEqual([]);
    });
});

describe('fill and sign', () => {
    const theme = resolve(modern('light'));

    it('fills störung with the opaque error colour and tints hinweis, both with the triangle', () => {
        expect(toneColors(theme, 'störung').surface).toBe('rgb(217, 48, 37)'); // #D93025
        expect(toneColors(theme, 'hinweis').surface).not.toBe('rgb(217, 48, 37)');
        expect(toneColors(theme, 'störung').mark).toBe('triangle');
        expect(toneColors(theme, 'hinweis').mark).toBe('triangle');
    });

    it('gives heizt, kühl and neutral no sign', () => {
        expect(toneColors(theme, 'heizt').mark).toBeNull();
        expect(toneColors(theme, 'kühl').mark).toBeNull();
        expect(toneColors(theme, 'neutral').mark).toBeNull();
    });
});

describe('readability: at least 4.5:1 for every tone', () => {
    const hosts: [string, Theme][] = [
        ['vis-2 modern dark', modern('dark')],
        ['vis-2 modern light', modern('light')],
        ['MUI default dark', createTheme({ palette: { mode: 'dark' } })],
        ['MUI default light', createTheme({ palette: { mode: 'light' } })],
    ];
    const users: [string, UserTheme][] = [
        ['no user theme', {}],
        ...THEME_PRESETS.map((preset): [string, UserTheme] => [`preset ${preset.id}`, preset.theme]),
        ['pink error', { palette: { error: { main: PINK_ERROR } } }],
    ];
    const cases = hosts.flatMap(([hostName, host]) =>
        users.flatMap(([userName, user]) =>
            HEATING_TONES.map(tone => ({ name: `${hostName} + ${userName}: ${tone}`, host, user, tone })),
        ),
    );

    it.each(cases)('$name', ({ host, user, tone }) => {
        const { surface, text } = toneColors(resolve(host, user), tone);
        expect(getContrastRatio(text, surface)).toBeGreaterThanOrEqual(AA);
    });

    const extremes: [string, UserTheme][] = [
        [
            'light mode, pale slots',
            {
                palette: {
                    mode: 'light',
                    error: { main: '#ffff00' },
                    warning: { main: '#ffffff' },
                    info: { main: '#e0f7ff' },
                    text: { secondary: '#f0f0f0' },
                },
            },
        ],
        [
            'dark mode, deep slots',
            {
                palette: {
                    mode: 'dark',
                    error: { main: '#000000' },
                    warning: { main: '#1a0f00' },
                    info: { main: '#00001a' },
                    text: { secondary: '#101010' },
                },
            },
        ],
        [
            'mid-grey everything',
            {
                palette: {
                    error: { main: '#777777' },
                    warning: { main: '#808080' },
                    info: { main: '#7a7a7a' },
                    text: { secondary: '#787878' },
                    background: { paper: '#767676' },
                },
            },
        ],
    ];

    it.each(extremes)('extreme theme colours stay readable: %s', (_name, user) => {
        for (const host of [modern('dark'), modern('light')]) {
            const theme = resolve(host, user);
            for (const tone of HEATING_TONES) {
                const { surface, text } = toneColors(theme, tone);
                expect(getContrastRatio(text, surface)).toBeGreaterThanOrEqual(AA);
            }
        }
    });
});

describe('a pure function', () => {
    it('returns the same colours for the same input and leaves the theme untouched', () => {
        const theme = resolve(modern('dark'), THEME_PRESETS[0].theme);
        const before = JSON.stringify(theme.palette);
        const first = HEATING_TONES.map(tone => toneColors(theme, tone));
        const second = HEATING_TONES.map(tone => toneColors(theme, tone));
        expect(second).toEqual(first);
        expect(JSON.stringify(theme.palette)).toBe(before);
    });

    it('stays readable instead of throwing on theme colours no calculation reads', () => {
        const theme = createTheme({
            palette: { mode: 'dark', background: { paper: 'transparent' }, text: { secondary: 'var(--host-text)' } },
        });
        for (const tone of HEATING_TONES) {
            const { surface, text } = toneColors(theme, tone);
            expect(getContrastRatio(text, surface)).toBeGreaterThanOrEqual(AA);
        }
    });
});

describe('Bedienakzent: the controls take the theme primary in shades (ADR-0124 Nachtrag 2026-11-27)', () => {
    /** WCAG AA for graphical objects — the ring's arc against the card. */
    const GRAPHIC = 3;
    const hosts: [string, Theme][] = [
        ['vis-2 modern dark', modern('dark')],
        ['vis-2 modern light', modern('light')],
        ['MUI default dark', createTheme({ palette: { mode: 'dark' } })],
        ['MUI default light', createTheme({ palette: { mode: 'light' } })],
    ];
    const users: [string, UserTheme][] = [
        ['no user theme', {}],
        ...THEME_PRESETS.map((preset): [string, UserTheme] => [`preset ${preset.id}`, preset.theme]),
        ['pale primary, light', { palette: { mode: 'light', primary: { main: '#e8f4ff' } } }],
        ['deep primary, dark', { palette: { mode: 'dark', primary: { main: '#06061a' } } }],
    ];
    const cases = hosts.flatMap(([hostName, host]) =>
        users.map(([userName, user]) => ({ name: `${hostName} + ${userName}`, theme: resolve(host, user) })),
    );

    it.each(cases)('$name: arc ≥ 3:1 on the paper, sign and text ≥ 4.5:1 on the surface and its hover', ({ theme }) => {
        const accent = accentColors(theme);
        expect(getContrastRatio(accent.line, theme.palette.background.paper)).toBeGreaterThanOrEqual(GRAPHIC);
        expect(getContrastRatio(accent.text, accent.surface)).toBeGreaterThanOrEqual(AA);
        expect(getContrastRatio(accent.text, accent.hover)).toBeGreaterThanOrEqual(AA);
    });

    it('takes the primary itself for the arc where it already reads: Smaragd draws its emerald, not the amber warning', () => {
        const smaragd = THEME_PRESETS.find(preset => preset.id === 'smaragd')!.theme;
        const theme = resolve(modern('dark'), smaragd);
        expect(accentColors(theme).line).toBe('rgb(52, 211, 153)'); // #34d399
        expect(accentColors(theme).line).not.toBe(toneColors(theme, 'heizt').text);
    });

    it('tints its surfaces with the primary like a Tönung: same alpha, the hover a step stronger', () => {
        const theme = resolve(modern('dark'), {
            palette: { primary: { main: '#ff0000' }, background: { paper: '#000000' } },
        });
        const accent = accentColors(theme);
        expect(accent.surface).toBe('rgb(41, 0, 0)'); // 0.16 × 255
        expect(getLuminance(accent.hover)).toBeGreaterThan(getLuminance(accent.surface));
    });

    it('stays readable instead of throwing on a primary no calculation reads', () => {
        const theme = createTheme({ palette: { mode: 'dark', primary: { main: '#1976d2' } } });
        (theme.palette.primary as { main: string }).main = 'var(--host-primary)';
        const accent = accentColors(theme);
        expect(getContrastRatio(accent.text, accent.surface)).toBeGreaterThanOrEqual(AA);
    });
});
