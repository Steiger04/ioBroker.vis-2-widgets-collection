/**
 * parseStoredTheme — how the value of the theme state becomes a user theme.
 *
 * @module lib/theme/storedTheme.test
 * @remarks
 * Pins the Rückfall-Regel for the stored theme (ADR-0115): one unusable value falls away, the
 * rest holds. That the canvas and the Theme Studio both read through this function is pinned
 * in hooks/useCollectionTheme.hook.test.ts.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { parseStoredTheme } from './storedTheme';
import type { UserTheme } from './themeTypes';
import { setNestedValue } from './themeUtils';

/** Reads a theme object the way it sits in the state: as JSON text. */
const read = (theme: unknown): unknown => parseStoredTheme(JSON.stringify(theme));

describe('parseStoredTheme: a usable theme', () => {
    it('reads a valid stored theme', () => {
        expect(parseStoredTheme('{"palette":{"primary":{"main":"#ff0000"}}}')).toEqual({
            palette: { primary: { main: '#ff0000' } },
        });
    });

    it('reads Google fonts, component overrides and CSS variables unchanged', () => {
        const stored = {
            palette: { mode: 'dark', primary: { main: '#ff0000', light: '#ff8080' }, grey: { 500: '#808080' } },
            typography: { fontFamily: '"Lobster", cursive', fontSize: 15, h1: { fontWeight: 700 } },
            shape: { borderRadius: 12 },
            corners: { topLeft: 12, topRight: 0, bottomRight: 12, bottomLeft: 0 },
            spacing: 6,
            cssVariables: { cssVarPrefix: 'my', disableCssColorScheme: true },
            components: {
                MuiButton: {
                    defaultProps: { disableRipple: true },
                    styleOverrides: { root: { textTransform: 'none', '&.Mui-disabled': { opacity: 0.4 } } },
                },
            },
            googleFonts: {
                Lobster: [
                    { weight: 400, data: 'data:font/woff2;base64,AAAA' },
                    { weight: 700, weightMax: 900, data: 'data:font/woff2;base64,BBBB' },
                ],
            },
        };

        expect(read(stored)).toEqual(stored);
    });

    it('keeps a key the schema does not know (a warning, not an unusable value)', () => {
        expect(read({ spacing: 4, myOwnKey: { anything: true } })).toEqual({
            spacing: 4,
            myOwnKey: { anything: true },
        });
    });

    it('keeps a branch that was stored empty', () => {
        expect(read({ palette: {}, spacing: 4 })).toEqual({ palette: {}, spacing: 4 });
    });
});

describe('parseStoredTheme: no theme at all', () => {
    it.each([
        ['an unset state', undefined],
        ['a null value', null],
        ['an empty string', ''],
        ['a value that is not text', 42],
        ['corrupt JSON', '{"palette":'],
        ['JSON null', 'null'],
        ['a JSON list', '[1]'],
        ['a JSON text', '"dark"'],
        ['a JSON number', '7'],
    ])('reads %s as the empty theme', (_label, raw) => {
        expect(parseStoredTheme(raw)).toEqual({});
    });
});

describe('parseStoredTheme: an unusable value falls away, the rest holds', () => {
    it('drops a number outside its range', () => {
        expect(read({ corners: { topLeft: -1, topRight: 8 }, spacing: 4 })).toEqual({
            corners: { topRight: 8 },
            spacing: 4,
        });
    });

    it('drops a value that is not one of the allowed ones', () => {
        expect(read({ palette: { mode: 'purple', primary: { main: '#ff0000' } } })).toEqual({
            palette: { primary: { main: '#ff0000' } },
        });
    });

    it('drops a value of the wrong type', () => {
        expect(read({ typography: { fontFamily: 12, fontSize: 15 }, shape: 'round' })).toEqual({
            typography: { fontSize: 15 },
        });
    });

    it('drops every unusable value, wherever it sits', () => {
        expect(
            read({
                palette: { mode: 'purple', contrastThreshold: 3 },
                typography: { fontSize: 500, htmlFontSize: 16 },
                shape: { borderRadius: 97 },
                direction: 'up',
                spacing: 4,
            }),
        ).toEqual({
            palette: { contrastThreshold: 3 },
            typography: { htmlFontSize: 16 },
            spacing: 4,
        });
    });

    it('leaves no empty branch behind', () => {
        expect(read({ corners: { topLeft: -1 }, shape: { borderRadius: 97 }, spacing: 4 })).toEqual({ spacing: 4 });
    });

    it('reads a theme whose every value is unusable as the empty theme', () => {
        expect(read({ corners: { topLeft: -1 }, direction: 'up' })).toEqual({});
    });

    // ADR-0117: a broken Rahmenvorgabe neither takes the others nor the rest of the theme along.
    it('drops an unusable Rahmenvorgabe alone', () => {
        expect(read({ widgetFrame: { baseElevation: 25 }, spacing: 4 })).toEqual({ spacing: 4 });
        expect(read({ widgetFrame: { baseElevation: 'deep' }, corners: { topLeft: 8 } })).toEqual({
            corners: { topLeft: 8 },
        });
    });

    it('keeps a usable Rahmenvorgabe', () => {
        expect(read({ widgetFrame: { baseElevation: 0 } })).toEqual({ widgetFrame: { baseElevation: 0 } });
        expect(read({ widgetFrame: { baseElevation: 24 } })).toEqual({ widgetFrame: { baseElevation: 24 } });
    });

    it('finds a value below a key that contains a dot', () => {
        expect(
            read({
                components: {
                    MuiButton: { styleOverrides: { root: { '&.Mui-disabled': { color: null, opacity: 0.4 } } } },
                },
            }),
        ).toEqual({
            components: { MuiButton: { styleOverrides: { root: { '&.Mui-disabled': { opacity: 0.4 } } } } },
        });
    });
});

describe('ticket 03: parseStoredTheme — the boolean and padding Rahmenvorgaben', () => {
    it('keeps usable switch and padding presets, false included', () => {
        const widgetFrame = { noHeader: true, noHeaderIcon: false, noFooter: true, outlined: false, basePadding: 0 };
        expect(read({ widgetFrame })).toEqual({ widgetFrame });
        expect(read({ widgetFrame: { outlinedFrame: true, basePadding: 10 } })).toEqual({
            widgetFrame: { outlinedFrame: true, basePadding: 10 },
        });
    });

    it('drops an unusable switch or padding alone: the other presets and the rest hold', () => {
        expect(read({ widgetFrame: { noFooter: 'yes', outlined: true }, spacing: 4 })).toEqual({
            widgetFrame: { outlined: true },
            spacing: 4,
        });
        expect(read({ widgetFrame: { basePadding: 10.5, noHeader: false } })).toEqual({
            widgetFrame: { noHeader: false },
        });
    });
});

// MUI draws a shadow only for a whole elevation: a shadow preset that is no whole number falls away alone.
describe('ticket 07: parseStoredTheme — a shadow preset that is no whole number', () => {
    it('drops the shadow and keeps the other presets', () => {
        expect(read({ widgetFrame: { baseElevation: 2.5, noCard: true }, spacing: 4 })).toEqual({
            widgetFrame: { noCard: true },
            spacing: 4,
        });
        expect(read({ widgetFrame: { baseElevation: 24, basePadding: 0.5 } })).toEqual({
            widgetFrame: { baseElevation: 24, basePadding: 0.5 },
        });
    });
});

describe('parseStoredTheme: an unusable colour', () => {
    // Colour checks ask the browser (absent under node): stand in one that rejects only "nope".
    beforeEach(() => {
        vi.stubGlobal('CSS', { supports: (_property: string, value?: string): boolean => value !== 'nope' });
    });
    afterEach(() => {
        vi.unstubAllGlobals();
    });

    it('drops the colour and keeps the colours next to it', () => {
        expect(
            read({
                palette: {
                    background: { paper: 'nope', default: '#101010' },
                    divider: 'nope',
                    primary: { main: '#ff0000' },
                },
            }),
        ).toEqual({
            palette: { background: { default: '#101010' }, primary: { main: '#ff0000' } },
        });
    });

    // Without its main colour the rest of a slot is none MUI can build.
    it('drops an accent colour slot as a whole when its main colour is unusable', () => {
        expect(
            read({ palette: { primary: { main: 'nope', light: '#ff8080' }, secondary: { main: '#00ff00' } } }),
        ).toEqual({
            palette: { secondary: { main: '#00ff00' } },
        });
    });

    it('drops only the unusable variant of an accent colour slot', () => {
        expect(read({ palette: { primary: { main: '#ff0000', light: 'nope', dark: '#800000' } } })).toEqual({
            palette: { primary: { main: '#ff0000', dark: '#800000' } },
        });
    });
});

// A colour name or `transparent` is a colour to the browser, but none MUI can compute with: a
// component that computes with it throws (hooks/useCollectionTheme.hook.test.ts renders them).
// The check needs no browser, so it gives the same answer under node as in the editor.
describe('parseStoredTheme: a colour the widgets cannot compute with', () => {
    /** The stored values next to the colour: they hold. */
    const REST: UserTheme = { palette: { mode: 'dark' }, spacing: 6 };

    it.each([
        'text.primary',
        'text.secondary',
        'text.disabled',
        'background.default',
        'background.paper',
        'divider',
        'action.active',
        'action.hover',
        'action.selected',
        'action.disabled',
        'action.disabledBackground',
        'action.focus',
        'common.black',
        'common.white',
        'grey.700',
    ])('drops a colour name at palette.%s and keeps the rest', path => {
        expect(read(setNestedValue(REST, `palette.${path}`, 'white'))).toEqual(REST);
    });

    it.each(['white', 'transparent', 'currentColor', 'inherit', 'var(--my-colour)', 'oklch(0.5 0.1 20)', ' #fff'])(
        'drops "%s"',
        colour => {
            expect(read(setNestedValue(REST, 'palette.divider', colour))).toEqual(REST);
        },
    );

    it.each([
        '#abc',
        '#1976d2',
        '#1976d280',
        'rgb(25, 118, 210)',
        'rgba(25, 118, 210, 0.5)',
        'hsl(210, 79%, 46%)',
        'hsla(210, 79%, 46%, 0.5)',
        'color(srgb 0.1 0.46 0.82)',
    ])('keeps "%s"', colour => {
        const stored = setNestedValue(REST, 'palette.divider', colour);
        expect(read(stored)).toEqual(stored);
    });

    // What is left of the slot without that colour is none MUI can build.
    it.each([
        ['its main colour', { main: 'red' }],
        ['its main colour, beside a usable variant', { main: 'red', light: '#ff8080' }],
        ['its main shade', { 500: 'red' }],
        ['its main shade, beside a usable shade', { 500: 'red', 300: '#ff8080' }],
    ])('drops an accent colour slot as a whole for %s', (_label, slot) => {
        expect(read(setNestedValue(REST, 'palette.primary', slot))).toEqual(REST);
    });

    it.each([
        ['a variant', { main: '#ff0000', light: 'red' }, { main: '#ff0000' }],
        ['its contrast text', { main: '#ff0000', contrastText: 'white' }, { main: '#ff0000' }],
        ['two of its colours', { main: '#ff0000', light: 'red', dark: 'white' }, { main: '#ff0000' }],
        ['a shade beside the main one', { 500: '#ff0000', 300: 'red' }, { 500: '#ff0000' }],
    ])('drops only that colour of an accent colour slot for %s', (_label, slot, left) => {
        expect(read(setNestedValue(REST, 'palette.primary', slot))).toEqual(
            setNestedValue(REST, 'palette.primary', left),
        );
    });
});

describe('parseStoredTheme: an accent colour MUI cannot build', () => {
    const REST: UserTheme = { palette: { mode: 'dark' }, spacing: 6 };

    it.each([
        ['only variants', { light: '#ffaaaa' }],
        ['shades without the main one', { 300: '#ffaaaa' }],
    ])('drops a slot that holds %s', (_label, slot) => {
        expect(read(setNestedValue(REST, 'palette.primary', slot))).toEqual(REST);
    });
});

describe('parseStoredTheme: an unusable entry takes its list with it', () => {
    it('drops the whole list, so no entry moves to another position', () => {
        expect(read({ shadows: ['none', 5, '0 1px 2px #000'], spacing: 4 })).toEqual({ spacing: 4 });
    });

    it('drops a Google font with an unusable face and keeps the other fonts', () => {
        expect(
            read({
                googleFonts: {
                    Lobster: [
                        { weight: 400, data: 'data:font/woff2;base64,AAAA' },
                        { weight: 700, data: 7 },
                    ],
                    Pacifico: [{ weight: 400, data: 'data:font/woff2;base64,CCCC' }],
                },
            }),
        ).toEqual({
            googleFonts: { Pacifico: [{ weight: 400, data: 'data:font/woff2;base64,CCCC' }] },
        });
    });

    it('drops a list with several unusable entries once', () => {
        expect(read({ shadows: [1, 2], zIndex: { drawer: 1200 } })).toEqual({ zIndex: { drawer: 1200 } });
    });
});
