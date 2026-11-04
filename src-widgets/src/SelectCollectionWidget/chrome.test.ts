import { describe, expect, it, vi } from 'vitest';

import { buildMenuChrome, buildMenuItemChrome, buildSelectChrome } from './chrome';
import type { MenuChromeInput, SelectChromeInput } from './chrome';
import type { Theme } from '@mui/material';

const menuChrome = (overrides: Partial<MenuChromeInput> = {}): ReturnType<typeof buildMenuChrome> =>
    buildMenuChrome({
        width: undefined,
        noCard: undefined,
        frameBackground: undefined,
        borderStyles: undefined,
        ...overrides,
    });

const paper = (overrides: Partial<MenuChromeInput> = {}): Record<string, any> =>
    menuChrome(overrides).PaperProps?.sx as Record<string, any>;

describe('buildMenuChrome — the popup surface', () => {
    it('flattens the noCard popup — no shadow, no overlay — and keeps it opaque in the paper-coloured frame background', () => {
        // The runtime path: an unset frame background resolves to the theme paper (terminal `paper`).
        expect(paper({ noCard: true, frameBackground: '#fff' })).toEqual({
            overflow: 'hidden',
            '& .MuiMenu-list': {
                maxHeight: '100vh',
                overflowY: 'auto',
            },
            '--Paper-overlay': 'none !important',
            '--Paper-shadow': 'none !important',
            boxShadow: 'none !important',
            background: '#fff',
        });
    });

    it('leaves a noCard popup transparent only for an empty resolved frame background (defensive)', () => {
        // Unreachable through the frame background resolver, which ends on the theme paper.
        expect(paper({ noCard: true })).toEqual({
            overflow: 'hidden',
            '& .MuiMenu-list': {
                maxHeight: '100vh',
                overflowY: 'auto',
            },
            '--Paper-overlay': 'none !important',
            '--Paper-shadow': 'none !important',
            boxShadow: 'none !important',
            background: 'transparent',
        });
        expect(paper({ noCard: true, frameBackground: '' }).background).toBe('transparent');
    });

    it('paints the frame background, with or without noCard — gradients included', () => {
        expect(paper({ noCard: true, frameBackground: '#123456' }).background).toBe('#123456');
        expect(paper({ frameBackground: '#123456' }).background).toBe('#123456');

        const gradient = 'linear-gradient(90deg, #ff0000 0%, #0000ff 100%)';
        expect(paper({ frameBackground: gradient }).background).toBe(gradient);
    });

    it('leaves elevation and surface to MUI without noCard and without a frame background', () => {
        const sx = paper();

        expect(sx['--Paper-overlay']).toBeUndefined();
        expect(sx['--Paper-shadow']).toBeUndefined();
        expect(sx.boxShadow).toBeUndefined();
        expect(sx.background).toBeUndefined();
    });

    it("takes over the widget's vis-2 border styles, camel-cased", () => {
        const sx = paper({
            borderStyles: {
                'border-width': '2px',
                'border-style': 'solid',
                'border-color': '#ff0000',
                'border-radius': '8px',
            },
        });

        expect(sx).toMatchObject({
            borderWidth: '2px',
            borderStyle: 'solid',
            borderColor: '#ff0000',
            borderRadius: '8px',
        });
    });

    it('keeps the backdrop transparent', () => {
        expect(menuChrome().slotProps?.backdrop).toEqual({
            style: { backgroundColor: 'transparent !important' },
        });
    });
});

describe('buildMenuChrome — the popup width bound', () => {
    const popupRoot = (width: number | undefined): unknown =>
        (menuChrome({ width }).slotProps?.root as { sx: unknown } | undefined)?.sx;

    it('bounds the popup by the measured content box, offset below the field, list unpadded', () => {
        expect(popupRoot(480)).toEqual({
            maxWidth: 480,
            mt: 0.5,
            '& .MuiList-root': {
                py: 0,
            },
        });
    });

    it('assumes 300 px until the first measurement — a measured 0 stays 0', () => {
        expect(popupRoot(undefined)).toMatchObject({ maxWidth: 300 });
        expect(popupRoot(0)).toMatchObject({ maxWidth: 0 });
    });
});

describe('buildSelectChrome', () => {
    /** The theme text colour — the arrow contract's terminal. */
    const THEME_TEXT = 'rgba(0, 0, 0, 0.87)';
    const THEME = { palette: { text: { primary: THEME_TEXT } } } as unknown as Theme;

    const selectSx = (overrides: Partial<SelectChromeInput> = {}): Record<string, any> =>
        buildSelectChrome({
            width: undefined,
            arrowColor: undefined,
            textColor: '#00aa00',
            textStyles: undefined,
            theme: THEME,
            ...overrides,
        });

    const arrowColour = (overrides: Partial<SelectChromeInput>): unknown =>
        selectSx(overrides)['& .MuiSelect-icon'].color;

    it('fills its box, bounded by the measured content box', () => {
        expect(selectSx({ width: 480 })).toEqual({
            width: '100%',
            height: '100%',
            maxWidth: 'calc(480px - 10%)',
            '& .MuiSelect-icon': {
                color: '#00aa00',
            },
        });
    });

    it('assumes 300 px until the first measurement — a measured 0 stays 0', () => {
        expect(selectSx({ width: undefined }).maxWidth).toBe('calc(300px - 10%)');
        expect(selectSx({ width: 0 }).maxWidth).toBe('calc(0px - 10%)');
    });

    it("colours the arrow with arrowColor before the active state's text colour", () => {
        expect(arrowColour({ arrowColor: '#aa0000', textColor: '#00aa00' })).toBe('#aa0000');
        expect(arrowColour({ arrowColor: '', textColor: '#00aa00' })).toBe('#00aa00');
        expect(arrowColour({ arrowColor: undefined, textColor: '#00aa00' })).toBe('#00aa00');
    });

    it('takes the 50 % colour of a gradient', () => {
        const gradient = 'linear-gradient(90deg, #ff0000 0%, #0000ff 100%)';

        expect(arrowColour({ arrowColor: gradient })).toBe('rgb(128, 0, 128)');
        expect(arrowColour({ arrowColor: undefined, textColor: gradient })).toBe('rgb(128, 0, 128)');
    });

    it('falls back to the active text colour for an invalid arrowColor — not to the MUI default', () => {
        expect(arrowColour({ arrowColor: 'not-a-colour', textColor: '#00aa00' })).toBe('#00aa00');
    });

    it('paints a typed CSS colour as stored: name, hsl(), var(--…) (Regeln für Farbeingaben)', () => {
        // The browser's `CSS.supports('color', …)` — absent in node; a browser-like list.
        vi.stubGlobal('CSS', {
            supports: (_property: string, value?: string): boolean =>
                /^(#[0-9a-f]{3,8}|rgba?\(.*\)|hsla?\(.*\)|var\(--.*\)|red)$/i.test(value ?? ''),
        });
        try {
            for (const typed of ['red', 'hsl(0, 100%, 40%)', 'var(--accent)']) {
                expect(arrowColour({ arrowColor: typed, textColor: '#00aa00' })).toBe(typed);
            }
            expect(arrowColour({ arrowColor: undefined, textColor: 'red' })).toBe('red');
        } finally {
            vi.unstubAllGlobals();
        }
    });

    it('follows the arrow contract past an empty or invalid text colour: vis-2 CSS colour, else theme text', () => {
        // Unreachable with the textColor resolver (it ends on the theme text colour) — the contract's end.
        expect(arrowColour({ textColor: undefined, textStyles: { color: '#0000aa' } })).toBe('#0000aa');
        expect(arrowColour({ textColor: 'not-a-colour', textStyles: { color: '#0000aa' } })).toBe('#0000aa');
        expect(arrowColour({ textColor: undefined })).toBe(THEME_TEXT);
    });
});

describe('buildMenuItemChrome', () => {
    it('paints a solid state background and hovers in its 50 % alpha — selected or not', () => {
        expect(buildMenuItemChrome('#3399cc')).toEqual({
            background: null,
            bgcolor: '#3399cc',
            '&.Mui-selected': {
                background: null,
                bgcolor: '#3399cc',
            },
            '&.Mui-selected:hover': {
                background: undefined,
                bgcolor: 'rgba(51, 153, 204, 0.5)',
            },
            '&:hover': {
                background: undefined,
                bgcolor: 'rgba(51, 153, 204, 0.5)',
            },
        });
    });

    it('paints a gradient over a transparent base and hovers in the 50 % alpha of its extracted colour', () => {
        const gradient = 'linear-gradient(90deg, #ff0000 0%, #0000ff 100%)';

        // Red → blue: the extracted 50 % colour is rgb(128, 0, 128).
        expect(buildMenuItemChrome(gradient)).toEqual({
            background: gradient,
            bgcolor: 'transparent',
            '&.Mui-selected': {
                background: gradient,
                bgcolor: undefined,
            },
            '&.Mui-selected:hover': {
                background: 'rgba(128, 0, 128, 0.5)',
                bgcolor: undefined,
            },
            '&:hover': {
                background: 'rgba(128, 0, 128, 0.5)',
                bgcolor: undefined,
            },
        });
    });

    it('tints nothing on hover without a state background', () => {
        // '' is what the background resolver yields for an unset state background.
        const sx = buildMenuItemChrome('') as Record<string, any>;

        expect(sx['&:hover']).toEqual({ background: undefined, bgcolor: undefined });
        expect(sx['&.Mui-selected:hover']).toEqual({ background: undefined, bgcolor: undefined });
    });

    it.each([
        ['a named colour', 'red'],
        ['a CSS variable', 'var(--accent)'],
    ])('paints %s MUI cannot parse but tints nothing on hover — without throwing', (_case, bgColor) => {
        expect(buildMenuItemChrome(bgColor)).toEqual({
            background: null,
            bgcolor: bgColor,
            '&.Mui-selected': {
                background: null,
                bgcolor: bgColor,
            },
            '&.Mui-selected:hover': {
                background: undefined,
                bgcolor: undefined,
            },
            '&:hover': {
                background: undefined,
                bgcolor: undefined,
            },
        });
    });

    it('paints a hex starting with whitespace but tints nothing on hover, as before the spec', () => {
        // MUI's alpha() never read a value starting with whitespace, so the legacy hover stayed untinted.
        const sx = buildMenuItemChrome(' #3399cc ') as Record<string, any>;

        expect(sx.bgcolor).toBe(' #3399cc ');
        expect(sx['&:hover']).toEqual({ background: undefined, bgcolor: undefined });
        expect(sx['&.Mui-selected:hover']).toEqual({ background: undefined, bgcolor: undefined });
    });

    it.each([
        ['hsl()', 'hsl(200, 60%, 50%)', 'hsla(200, 60%, 50%, 0.5)'],
        ['a 4-digit hex', '#39cf', 'rgba(51, 153, 204, 0.5)'],
    ])('tints %s on hover in its half alpha, as MUI did before the spec', (_case, bgColor, hover) => {
        const sx = buildMenuItemChrome(bgColor) as Record<string, any>;

        expect(sx['&:hover']).toEqual({ background: undefined, bgcolor: hover });
    });

    it('tints a hex with only trailing whitespace on hover, as before the spec', () => {
        // MUI's alpha() read past trailing whitespace, so the legacy hover was tinted.
        const sx = buildMenuItemChrome('#3399cc ') as Record<string, any>;

        expect(sx['&:hover']).toEqual({ background: undefined, bgcolor: 'rgba(51, 153, 204, 0.5)' });
    });

    it('paints a gradient without an extractable colour but tints nothing on hover — without throwing', () => {
        // Named stops: extractColorFromValue reads hex/rgb stops only, and MUI cannot parse a gradient.
        const gradient = 'linear-gradient(90deg, red 0%, blue 100%)';

        expect(buildMenuItemChrome(gradient)).toEqual({
            background: gradient,
            bgcolor: 'transparent',
            '&.Mui-selected': {
                background: gradient,
                bgcolor: undefined,
            },
            '&.Mui-selected:hover': {
                background: undefined,
                bgcolor: undefined,
            },
            '&:hover': {
                background: undefined,
                bgcolor: undefined,
            },
        });
    });
});
