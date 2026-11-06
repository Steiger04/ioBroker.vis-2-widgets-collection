/**
 * Schalter-Chrome: the complete sx of the MUI Switch as pure data.
 *
 * @module widgets/SwitchCollectionWidget/chrome.test
 * @remarks
 * Expected colours are MUI 6.5.0's own Switch defaults on the stock MUI light and dark
 * themes (primary `#1976d2` / `#90caf9`, `common.white` `#fff`, `grey[100]` `#f5f5f5`,
 * `grey[300]` `#e0e0e0`, `grey[600]` `#757575`) — the same literals the colour contract
 * tests pin. The geometry cases are the nine former geometry-module cases, read through
 * the chrome output.
 */
import { describe, expect, it, vi } from 'vitest';

import { createTheme } from '@mui/material/styles';

// The chrome reads the thumb size default from the field list, which renders
// CollectionDivider / ContractColorField — they pull Generic (extends window.visRxWidget,
// absent outside vis-2).
vi.mock('../components/ContractColorField', () => ({ default: () => null }));
vi.mock('../components/PlainColorField', () => ({ default: () => null }));
vi.mock('../components/CollectionDivider', () => ({ default: () => null }));

import { buildSwitchChrome } from './chrome';
import type { SwitchChromeInput } from './chrome';

const LIGHT = createTheme({ palette: { mode: 'light' } });
const DARK = createTheme({ palette: { mode: 'dark' } });

const chrome = (overrides: Partial<SwitchChromeInput> = {}): Record<string, any> =>
    buildSwitchChrome({
        data: { thumbSize: 62 },
        icon: {},
        width: 200,
        contentBoxHeight: 400,
        locked: false,
        theme: LIGHT,
        ...overrides,
    });

const base = (sx: Record<string, any>): Record<string, any> => sx['& .MuiSwitch-switchBase'];
const checked = (sx: Record<string, any>): Record<string, any> => base(sx)['&.Mui-checked'];
const thumb = (sx: Record<string, any>): Record<string, any> => sx['& .MuiSwitch-thumb'];
const trackOff = (sx: Record<string, any>): Record<string, any> => base(sx)['&:not(.Mui-checked) + .MuiSwitch-track'];
const trackOn = (sx: Record<string, any>): Record<string, any> => checked(sx)['& + .MuiSwitch-track'];
const overlay = (sx: Record<string, any>): Record<string, any> => thumb(sx)['&::before'];

/** The off and on transforms of the switch base for a travel of `px` (off +, on −). */
const travelOf = (sx: Record<string, any>): [string, string] => [base(sx).transform, checked(sx).transform];
const travel = (off: string, on: string): [string, string] => [
    `translate(-50%, -50%) translateX(${off})`,
    `translate(-50%, -50%) translateX(${on})`,
];

describe('buildSwitchChrome — thumb travel (sign off/on, frozen 4px inset)', () => {
    it('travels half the thumb size minus the inset while the thumb fits', () => {
        expect(travelOf(chrome({ data: { thumbSize: 62 }, contentBoxHeight: 400 }))).toEqual(travel('27px', '-27px'));
    });

    it('clamps to half the available height once it undercuts the thumb', () => {
        expect(travelOf(chrome({ data: { thumbSize: 62 }, contentBoxHeight: 40 }))).toEqual(travel('16px', '-16px'));
    });

    it('treats the boundary (budget === thumb size) as fitting', () => {
        expect(travelOf(chrome({ data: { thumbSize: 62 }, contentBoxHeight: 62 }))).toEqual(travel('27px', '-27px'));
    });

    it('treats an unmeasured height budget as zero (first render)', () => {
        expect(travelOf(chrome({ contentBoxHeight: undefined }))).toEqual(travel('-4px', '4px'));
    });

    it('may go negative when the budget undercuts twice the inset (legacy, frozen)', () => {
        expect(travelOf(chrome({ contentBoxHeight: 0 }))).toEqual(travel('-4px', '4px'));
        expect(travelOf(chrome({ contentBoxHeight: 6 }))).toEqual(travel('-1px', '1px'));
    });

    it('honours the field caps', () => {
        // thumbSize 0 (slider minimum): the inset dominates
        expect(travelOf(chrome({ data: { thumbSize: 0 }, contentBoxHeight: 400 }))).toEqual(travel('-4px', '4px'));
        // thumbSize 500 (slider maximum), capped by a smaller budget
        expect(travelOf(chrome({ data: { thumbSize: 500 }, contentBoxHeight: 400 }))).toEqual(
            travel('196px', '-196px'),
        );
        expect(travelOf(chrome({ data: { thumbSize: 500 }, contentBoxHeight: 600 }))).toEqual(
            travel('246px', '-246px'),
        );
    });

    it('falls back to the schema thumb size (62) when none is stored', () => {
        expect(travelOf(chrome({ data: {} }))).toEqual(travel('27px', '-27px'));
        expect(travelOf(chrome({ data: { thumbSize: null as unknown as number } }))).toEqual(travel('27px', '-27px'));
    });
});

describe('buildSwitchChrome — anchor and invisible input', () => {
    it('anchors the base at 0 % off and at 100 % on, vertically centred', () => {
        const sx = chrome();
        expect([base(sx).top, base(sx).left]).toEqual(['50%', '0%']);
        expect([checked(sx).top, checked(sx).left]).toEqual(['50%', '100%']);
    });

    it('lays the input over the measured track row: left edge off, shifted right by the thumb size on', () => {
        const sx = chrome({ width: 200, data: { thumbSize: 62 } });
        expect(base(sx)['& .MuiSwitch-input']).toEqual({ left: 0, width: '200px' });
        expect(checked(sx)['& .MuiSwitch-input']).toEqual({ left: '-138px', width: '200px' });
    });

    it('treats an unmeasured width as zero (first render)', () => {
        const sx = chrome({ width: undefined, data: { thumbSize: 62 } });
        expect(base(sx)['& .MuiSwitch-input'].width).toBe('0px');
        expect(checked(sx)['& .MuiSwitch-input']).toEqual({ left: '62px', width: '0px' });
    });

    it('degrades the checked input to the thumb size at width zero', () => {
        expect(checked(chrome({ width: 0, data: { thumbSize: 62 } }))['& .MuiSwitch-input'].left).toBe('62px');
    });
});

describe('buildSwitchChrome — thumb size and height budget', () => {
    it('sizes the thumb and caps it at the height budget', () => {
        const t = thumb(chrome({ data: { thumbSize: 40 }, contentBoxHeight: 24 }));
        expect([t.width, t.height, t.maxWidth, t.maxHeight]).toEqual(['40px', '40px', '24px', '24px']);
    });

    it('leaves the thumb uncapped while the budget is unmeasured', () => {
        const t = thumb(chrome({ data: { thumbSize: 40 }, contentBoxHeight: undefined }));
        expect([t.width, t.height, t.maxWidth, t.maxHeight]).toEqual(['40px', '40px', undefined, undefined]);
    });

    it('keeps a thumb size of 1 in px (no sx fraction-to-percent conversion)', () => {
        const t = thumb(chrome({ data: { thumbSize: 1 }, contentBoxHeight: 1 }));
        expect([t.width, t.height, t.maxWidth, t.maxHeight]).toEqual(['1px', '1px', '1px', '1px']);
    });

    it('fills the track row and lets the thumb overflow the root', () => {
        const sx = chrome();
        expect([sx.width, sx.height, sx.padding, sx.margin]).toEqual(['100%', '100%', 0, 0]);
        expect(sx['&.MuiSwitch-root']).toEqual({ overflow: 'visible' });
        expect([base(sx).margin, base(sx).padding]).toEqual([0, 0]);
    });
});

describe('buildSwitchChrome — thumb and track colours (the switch colour contracts)', () => {
    it("light, enabled: MUI defaults on the thumbs, the tracks at MUI's fixed alpha", () => {
        const sx = chrome({ theme: LIGHT });
        expect(thumb(sx).background).toBe('#fff');
        expect(checked(sx)['& .MuiSwitch-thumb']).toEqual({ background: '#1976d2' });
        expect(trackOff(sx)).toEqual({ background: '#000', opacity: 0.38 });
        expect(trackOn(sx)).toEqual({ background: '#1976d2', opacity: 0.5 });
    });

    it('dark, enabled: MUI defaults on the thumbs, the dark off alpha', () => {
        const sx = chrome({ theme: DARK });
        expect(thumb(sx).background).toBe('#e0e0e0');
        expect(checked(sx)['& .MuiSwitch-thumb'].background).toBe('#90caf9');
        expect(trackOff(sx)).toEqual({ background: '#fff', opacity: 0.3 });
        expect(trackOn(sx)).toEqual({ background: '#90caf9', opacity: 0.5 });
    });

    it('draws the explicit colours as stored, gradients and the legacy trackColor included', () => {
        const gradient = 'linear-gradient(90deg, #ff0000 0%, #0000ff 100%)';
        const sx = chrome({
            data: { thumbSize: 62, thumbColorTrue: 'red', thumbColorFalse: gradient, trackColor: '#ff9800' },
        });
        expect(thumb(sx).background).toBe(gradient);
        expect(checked(sx)['& .MuiSwitch-thumb'].background).toBe('red');
        expect([trackOff(sx).background, trackOn(sx).background]).toEqual(['#ff9800', '#ff9800']);
    });

    it("light, locked: MUI's disabled thumb greys and the disabled track alpha in both states", () => {
        const sx = chrome({ theme: LIGHT, locked: true });
        expect(thumb(sx).background).toBe('#f5f5f5');
        expect(checked(sx)['& .MuiSwitch-thumb'].background).toBe('rgb(167, 202, 237)');
        expect(trackOff(sx)).toEqual({ background: '#000', opacity: 0.12 });
        expect(trackOn(sx)).toEqual({ background: '#1976d2', opacity: 0.12 });
    });

    it('dark, locked: the dark disabled greys and alpha; an explicit thumb colour keeps winning', () => {
        const sx = chrome({ theme: DARK, locked: true, data: { thumbSize: 62, thumbColorTrue: '#00ff00' } });
        expect(thumb(sx).background).toBe('#757575');
        expect(checked(sx)['& .MuiSwitch-thumb'].background).toBe('#00ff00');
        expect([trackOff(sx).opacity, trackOn(sx).opacity]).toEqual([0.2, 0.2]);
    });
});

describe('buildSwitchChrome — icon overlay (the thumb rule draws it on and off)', () => {
    const BASE64 = 'data:image/svg+xml;base64,PHN2Zy8+';

    it('places the icon by its offsets and size', () => {
        const before = overlay(
            chrome({ icon: { icon: '/icons/power.svg', iconSizeOnly: '70%', iconXOffset: '3px', iconYOffset: '5%' } }),
        );
        expect(before).toEqual({
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 'calc(0px + 3px)',
            top: 'calc(0px - 5%)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: '70%',
            backgroundImage: "url('/icons/power.svg')",
        });
    });

    it('colours a base64 icon through the drop-shadow mask', () => {
        const before = overlay(chrome({ icon: { icon: BASE64, iconColor: '#123456' } }));
        expect([before.color, before.filter, before.transform]).toEqual([
            '#123456',
            'drop-shadow(0px 10000px 0)',
            'translateY(-10000px)',
        ]);
    });

    it('masks a URL icon only with the forced colour mask', () => {
        expect(overlay(chrome({ icon: { icon: '/icons/power.svg', iconColor: '#123456' } })).color).toBeUndefined();
        expect(
            overlay(chrome({ icon: { icon: '/icons/power.svg', iconColor: '#123456', forceColorMask: true } })).color,
        ).toBe('#123456');
    });

    it('is the same overlay on and off: only the off thumb rule carries it', () => {
        const sx = chrome({ icon: { icon: BASE64, iconColor: '#123456' } });
        expect(checked(sx)['& .MuiSwitch-thumb']['&::before']).toBeUndefined();
    });
});

describe('buildSwitchChrome — ripple', () => {
    it("paints the ripple in the state's resolved icon colour", () => {
        expect(chrome({ icon: { iconColor: '#123456' } })['& .MuiTouchRipple-root']).toEqual({ color: '#123456' });
    });
});
