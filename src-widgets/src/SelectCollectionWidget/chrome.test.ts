import { describe, expect, it } from 'vitest';

import { buildMenuChrome, buildMenuItemChrome, buildSelectChrome } from './chrome';
import type { MenuChromeInput, SelectChromeInput } from './chrome';

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
    it('flattens the popup for noCard: no shadow, no overlay, transparent without a frame background (frozen)', () => {
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
    const selectSx = (overrides: Partial<SelectChromeInput> = {}): Record<string, any> =>
        buildSelectChrome({
            width: undefined,
            arrowColor: undefined,
            textColor: '#00aa00',
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

    it('consults nothing beyond the two — without both the arrow keeps the MUI default', () => {
        expect(arrowColour({ arrowColor: undefined, textColor: undefined })).toBeNull();
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
});
