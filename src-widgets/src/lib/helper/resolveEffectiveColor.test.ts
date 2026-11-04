import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import type { Theme } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { resolveEffectiveColor, resolveEffectiveSolidColor, terminalColor } from './resolveEffectiveColor';
import type { ColorFieldContract } from './resolveEffectiveColor';

const THEME = {
    palette: {
        primary: { main: '#pri' },
        text: { primary: '#txt', secondary: '#txs' },
        background: { paper: '#pap', default: '#bg' },
        divider: '#div',
    },
} as unknown as Theme;

const contract = (overrides: Partial<ColorFieldContract>): ColorFieldContract => ({
    name: 'iconColor',
    ...overrides,
});

describe('terminalColor', () => {
    it('maps each terminal to its theme color', () => {
        expect(terminalColor('primary', THEME)).toBe('#pri');
        expect(terminalColor('text', THEME)).toBe('#txt');
        expect(terminalColor('paper', THEME)).toBe('#pap');
        expect(terminalColor('transparent', THEME)).toBe('');
        expect(terminalColor(undefined, THEME)).toBe('');
    });

    it('maps the chrome terminals to the theme divider and the secondary text colour', () => {
        expect(terminalColor('divider', THEME)).toBe('#div');
        expect(terminalColor('textSecondary', THEME)).toBe('#txs');
    });

    it("maps switchThumbOff to MUI 6.5.0's Switch thumb default: white in light mode, grey[300] in dark mode", () => {
        // MUI 6.5.0 Switch.js, SwitchSwitchBase `color`: common.white (light) / grey[300] (dark)
        expect(terminalColor('switchThumbOff', createTheme({ palette: { mode: 'light' } }))).toBe('#fff');
        expect(terminalColor('switchThumbOff', createTheme({ palette: { mode: 'dark' } }))).toBe('#e0e0e0');
    });

    it('computes switchThumbOff from the theme mode and palette, without CSS variables (ADR-0078)', () => {
        const custom = {
            palette: { mode: 'dark', common: { white: '#w' }, grey: { 300: '#g300' } },
            vars: { palette: { Switch: { defaultColor: 'var(--never)' } } },
        } as unknown as Theme;
        expect(terminalColor('switchThumbOff', custom)).toBe('#g300');
        expect(terminalColor('switchThumbOff', { ...custom, palette: { ...custom.palette, mode: 'light' } })).toBe(
            '#w',
        );
    });
});

describe('resolveEffectiveColor', () => {
    it('returns the explicit override when set', () => {
        const c = contract({ name: 'iconColor', terminal: 'primary' });
        expect(resolveEffectiveColor(c, { iconColor: '#a1a1a1' }, THEME, undefined)).toBe('#a1a1a1');
    });

    it('falls through the fallbackFields in order', () => {
        const c = contract({ name: 'thumbColor', terminal: 'primary', fallbackFields: ['sliderColor'] });
        // no explicit, sliderColor set
        expect(resolveEffectiveColor(c, { sliderColor: '#5b5b5b' }, THEME, undefined)).toBe('#5b5b5b');
        // explicit beats fallback
        expect(resolveEffectiveColor(c, { thumbColor: '#3c3c3c', sliderColor: '#5b5b5b' }, THEME, undefined)).toBe(
            '#3c3c3c',
        );
    });

    it('skips invalid/empty fallback entries and keeps searching', () => {
        const c = contract({
            name: 'thumbBorderColor',
            terminal: 'primary',
            fallbackFields: ['thumbColor', 'sliderColor'],
        });
        expect(resolveEffectiveColor(c, { thumbColor: '', sliderColor: '#5b5b5b' }, THEME, undefined)).toBe('#5b5b5b');
    });

    it("honors the legacy fallbackFields: ['']  (empty entry is skipped, terminal still applies)", () => {
        const c = contract({ name: 'textColor', terminal: 'text', inheritTextStyle: false, fallbackFields: [''] });
        expect(resolveEffectiveColor(c, {}, THEME, undefined)).toBe('#txt');
    });

    it('uses textStyles.color before the terminal when inheritTextStyle is true', () => {
        const c = contract({ name: 'textColor', terminal: 'text', inheritTextStyle: true });
        expect(resolveEffectiveColor(c, {}, THEME, { color: '#tsColor' })).toBe('#tsColor');
    });

    it('ignores textStyles.color when inheritTextStyle is false', () => {
        const c = contract({ name: 'iconColor', terminal: 'primary', inheritTextStyle: false });
        expect(resolveEffectiveColor(c, {}, THEME, { color: '#tsColor' })).toBe('#pri');
    });

    it('resolves each terminal when nothing is set', () => {
        expect(resolveEffectiveColor(contract({ name: 'iconColor', terminal: 'primary' }), {}, THEME, undefined)).toBe(
            '#pri',
        );
        expect(resolveEffectiveColor(contract({ name: 'textColor', terminal: 'text' }), {}, THEME, undefined)).toBe(
            '#txt',
        );
        expect(
            resolveEffectiveColor(contract({ name: 'background', terminal: 'transparent' }), {}, THEME, undefined),
        ).toBe('');
        // Frame fields inherit the theme surface: the swatch shows the same
        // color the widget card renders (terminal `paper`, commonFields).
        expect(
            resolveEffectiveColor(contract({ name: 'frameBackground', terminal: 'paper' }), {}, THEME, undefined),
        ).toBe('#pap');
    });

    it('treats a missing terminal as transparent (legacy default)', () => {
        expect(resolveEffectiveColor(contract({ name: 'background' }), {}, THEME, undefined)).toBe('');
    });
});

describe('resolveEffectiveColor reads stored values with the Regeln für Farbeingaben', () => {
    // The browser's `CSS.supports('color', …)` — absent in node; a browser-like list for these cases.
    beforeEach(() => {
        vi.stubGlobal('CSS', {
            supports: (_property: string, value?: string): boolean =>
                /^(#[0-9a-f]{3,8}|rgba?\(.*\)|hsla?\(.*\)|var\(--.*\)|transparent|red)$/i.test(value ?? ''),
        });
    });
    afterEach(() => {
        vi.unstubAllGlobals();
    });

    const field = contract({ name: 'iconColor', terminal: 'primary', fallbackFields: ['textColor'] });

    it.each(['red', 'hsl(120, 50%, 50%)', 'var(--vis2c-palette-primary-main)', 'transparent', '#f008'])(
        'takes a typed CSS colour %s as override, not as Erben',
        typed => {
            expect(resolveEffectiveColor(field, { iconColor: typed, textColor: '#5b5b5b' }, THEME)).toBe(typed);
        },
    );

    it('takes a typed CSS colour in a fallback field', () => {
        expect(resolveEffectiveColor(field, { textColor: 'hsl(0, 0%, 20%)' }, THEME)).toBe('hsl(0, 0%, 20%)');
    });

    it('stores trimmed: a padded value resolves to its trimmed text', () => {
        expect(resolveEffectiveColor(field, { iconColor: '  red  ' }, THEME)).toBe('red');
    });

    it('still skips what is no colour', () => {
        expect(resolveEffectiveColor(field, { iconColor: 'notacolor', textColor: 'red' }, THEME)).toBe('red');
        expect(resolveEffectiveColor(field, { iconColor: 'notacolor' }, THEME)).toBe('#pri');
    });

    it('keeps gradients as before: a complete one overrides, a half-typed one is skipped', () => {
        const gradient = 'linear-gradient(90deg, #ff0000 0%, #0000ff 100%)';
        expect(resolveEffectiveColor(field, { iconColor: gradient }, THEME)).toBe(gradient);
        expect(resolveEffectiveColor(field, { iconColor: 'linear-gradient(90deg, #ff0000 0%' }, THEME)).toBe('#pri');
    });
});

describe('resolveEffectiveSolidColor', () => {
    /** A theme whose terminals are readable solids (the shared THEME's placeholders are not). */
    const SOLID_THEME = {
        palette: {
            primary: { main: '#1976d2' },
            text: { primary: '#2f3e51' },
            background: { paper: '#ffffff', default: '#fafafa' },
        },
    } as unknown as Theme;

    const GRADIENT = 'linear-gradient(90deg, #ff0000 0%, #0000ff 100%)';
    /** A valid gradient (the Regeln für Farbeingaben accept it) without a Repräsentative Vollfarbe. */
    const NAMED_GRADIENT = 'linear-gradient(red, blue)';

    const border = contract({ name: 'thumbBorderColor', terminal: 'primary', fallbackFields: ['sliderColor'] });

    it('returns a solid override as-is', () => {
        expect(resolveEffectiveSolidColor(border, { thumbBorderColor: '#a1a1a1' }, SOLID_THEME, undefined)).toBe(
            '#a1a1a1',
        );
    });

    it('reduces a gradient override to its midpoint color', () => {
        expect(resolveEffectiveSolidColor(border, { thumbBorderColor: GRADIENT }, SOLID_THEME, undefined)).toBe(
            'rgb(128, 0, 128)',
        );
    });

    it('lets an override without a solid color fall back to the fallback field', () => {
        for (const override of ['red', 'var(--x)', 'transparent', NAMED_GRADIENT]) {
            expect(
                resolveEffectiveSolidColor(
                    border,
                    { thumbBorderColor: override, sliderColor: '#5b5b5b' },
                    SOLID_THEME,
                    undefined,
                ),
            ).toBe('#5b5b5b');
        }
    });

    it('skips a fallback field without a solid color and ends on the terminal', () => {
        expect(resolveEffectiveSolidColor(border, { sliderColor: NAMED_GRADIENT }, SOLID_THEME, undefined)).toBe(
            '#1976d2',
        );
    });

    it('skips a vis-2 style color without a solid color', () => {
        const text = contract({ name: 'textColor', terminal: 'text', inheritTextStyle: true });

        for (const styleColor of ['red', 'var(--x)', 'transparent']) {
            expect(resolveEffectiveSolidColor(text, {}, SOLID_THEME, { color: styleColor })).toBe('#2f3e51');
        }
        // a readable vis-2 style color still counts
        expect(resolveEffectiveSolidColor(text, {}, SOLID_THEME, { color: '#123456' })).toBe('#123456');
    });

    it('yields undefined for the transparent terminal and for no terminal', () => {
        expect(
            resolveEffectiveSolidColor(
                contract({ name: 'background', terminal: 'transparent' }),
                {},
                SOLID_THEME,
                undefined,
            ),
        ).toBeUndefined();
        expect(
            resolveEffectiveSolidColor(contract({ name: 'background' }), {}, SOLID_THEME, undefined),
        ).toBeUndefined();
    });

    it('yields undefined when even the terminal has no solid color', () => {
        // A theme primary no colour calculation reads (a CSS variable).
        const unreadable = { palette: { ...THEME.palette, primary: { main: 'var(--primary)' } } } as unknown as Theme;
        expect(resolveEffectiveSolidColor(border, {}, unreadable, undefined)).toBeUndefined();
    });
});
