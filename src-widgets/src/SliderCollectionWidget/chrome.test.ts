/**
 * Slider-Chrome: the complete sx of the MUI Slider and the end symbols' offset as pure data.
 *
 * @module widgets/SliderCollectionWidget/chrome.test
 * @remarks
 * Mock-free: the chrome imports only the component-free contract module. The colour cases
 * read each slot's cascade through the sx; the geometry cases pin the former styled
 * callback's values per orientation with their fallbacks. The DOM characterisation in
 * SliderCollection.test.tsx pins the same rules as rendered.
 */
import { describe, expect, it } from 'vitest';

import { buildSliderChrome, type SliderChromeInput } from './chrome';
import { sliderColorContracts } from '../lib/sliderColorContract';

import type { SliderFieldsRxData } from '../types';
import type { Theme } from '@mui/material';

const PRIMARY = '#1976d2';
const theme = { palette: { primary: { main: PRIMARY } } } as unknown as Theme;

const chrome = (
    data: SliderFieldsRxData,
    overrides: Partial<SliderChromeInput> = {},
): ReturnType<typeof buildSliderChrome> => buildSliderChrome({ data, label: {}, theme, ...overrides });

/** The sx rule for one slider part. */
const part = (
    data: SliderFieldsRxData,
    selector: string,
    overrides?: Partial<SliderChromeInput>,
): Record<string, any> => chrome(data, overrides).sx[selector] as Record<string, any>;

const thumb = (data: SliderFieldsRxData, overrides?: Partial<SliderChromeInput>): Record<string, any> =>
    part(data, '& .MuiSlider-thumb', overrides);
const track = (data: SliderFieldsRxData): Record<string, any> => part(data, '& .MuiSlider-track');
const rail = (data: SliderFieldsRxData): Record<string, any> => part(data, '& .MuiSlider-rail');
const mark = (data: SliderFieldsRxData): Record<string, any> => part(data, '& .MuiSlider-mark');
const markActive = (data: SliderFieldsRxData): Record<string, any> => part(data, '& .MuiSlider-markActive');

describe('sliderColorContracts', () => {
    it('declares exactly the slider color fields with a terminal', () => {
        expect(Object.keys(sliderColorContracts).sort()).toEqual(
            [
                'sliderColor',
                'thumbColor',
                'thumbBorderColor',
                'trackBackgroundColor',
                'trackBorderColor',
                'railBackgroundColor',
                'railBorderColor',
                'markBackgroundColor',
                'markerTextColor',
                'startIconColor',
                'endIconColor',
            ].sort(),
        );
    });

    it('declares the thumb border cascade in the field itself', () => {
        expect(sliderColorContracts.thumbBorderColor).toEqual({
            name: 'thumbBorderColor',
            fallbackFields: ['thumbColor', 'sliderColor'],
            terminal: 'primary',
            inheritTextStyle: undefined,
        });
    });

    it('declares the marker text cascade in the field itself', () => {
        // Label contract (swatch only): the runtime renders the mark text via
        // useData — markerTextColor → textColor → vis-2 text style → theme text.
        expect(sliderColorContracts.markerTextColor).toEqual({
            name: 'markerTextColor',
            fallbackFields: ['textColor'],
            terminal: 'text',
            inheritTextStyle: true,
        });
    });
});

describe('buildSliderChrome — colours (Chrome-Farbvertrag)', () => {
    /** Every colour slot the sx paints, read back from its rule. */
    const colours = (data: SliderFieldsRxData): Record<string, unknown> => ({
        thumbBackground: thumb(data).background,
        thumbHalo: thumb(data)['&:hover'].boxShadow,
        thumbBorder: thumb({ ...data, thumbBorderWidth: 1 }).border,
        trackBackground: track(data).background,
        trackBorder: track(data).borderColor,
        railBackground: rail(data).background,
        railBorder: rail(data).borderColor,
        markBackground: mark(data).background,
        markActiveBackground: markActive(data).background,
    });

    it('resolves every slot to the primary terminal when nothing is set', () => {
        expect(colours({})).toEqual({
            thumbBackground: PRIMARY,
            thumbHalo: '0px 0px 0px 8px rgba(25, 118, 210, 0.32)',
            thumbBorder: `1px solid ${PRIMARY}`,
            trackBackground: PRIMARY,
            trackBorder: PRIMARY,
            railBackground: PRIMARY,
            railBorder: PRIMARY,
            markBackground: PRIMARY,
            markActiveBackground: PRIMARY,
        });
    });

    it('lets sliderColor cascade into every dependent slot', () => {
        expect(colours({ sliderColor: '#00ff00' })).toEqual({
            thumbBackground: '#00ff00',
            thumbHalo: '0px 0px 0px 8px rgba(0, 255, 0, 0.32)',
            thumbBorder: '1px solid #00ff00',
            trackBackground: '#00ff00',
            trackBorder: '#00ff00',
            railBackground: '#00ff00',
            railBorder: '#00ff00',
            markBackground: '#00ff00',
            markActiveBackground: '#00ff00',
        });
    });

    it('an explicit slot wins over sliderColor, others keep cascading', () => {
        const data = { sliderColor: '#00ff00', thumbColor: '#ff0000' };

        expect(thumb(data).background).toBe('#ff0000');
        expect(thumb({ ...data, thumbBorderWidth: 1 }).border).toBe('1px solid #ff0000'); // via thumbColor
        expect(track(data).background).toBe('#00ff00');
        expect(rail(data).background).toBe('#00ff00');
        expect(mark(data).background).toBe('#00ff00');
    });

    it('resolves the three-tier thumb border cascade', () => {
        const border = (data: SliderFieldsRxData): string => thumb({ ...data, thumbBorderWidth: 1 }).border;

        expect(border({ thumbBorderColor: '#0000ff' })).toBe('1px solid #0000ff');
        expect(border({ thumbColor: '#ff0000' })).toBe('1px solid #ff0000');
        expect(border({ sliderColor: '#00ff00' })).toBe('1px solid #00ff00');
        expect(border({})).toBe(`1px solid ${PRIMARY}`);
    });

    it('keeps gradients on backgrounds but extracts solids for borders and the halo', () => {
        const gradient = 'linear-gradient(90deg, #ff0000 0%, #0000ff 100%)';
        const data = { thumbColor: gradient, trackBorderColor: gradient };

        // Background slots carry the raw gradient (the surface may render it).
        expect(thumb(data).background).toBe(gradient);
        // Solid slots get the interpolated 50% representative.
        expect(thumb(data)['&:hover'].boxShadow).toBe('0px 0px 0px 8px rgba(128, 0, 128, 0.32)');
        expect(track(data).borderColor).toBe('rgb(128, 0, 128)');
    });

    it('lets border and halo slots without a solid color fall through the cascade', () => {
        // 'red' is no Repräsentative Vollfarbe; nor is a gradient with named stops,
        // which the picker accepts as valid but no color calculation can read.
        const namedGradient = 'linear-gradient(red, blue)';

        for (const value of ['red', namedGradient]) {
            const data = { trackBorderColor: value, railBorderColor: value, sliderColor: '#00ff00' };
            expect(track(data).borderColor).toBe('#00ff00');
            expect(rail(data).borderColor).toBe('#00ff00');
        }

        const data = { thumbColor: namedGradient, thumbBorderWidth: 1 };
        // The background slot keeps the raw gradient (the surface may render it) …
        expect(thumb(data).background).toBe(namedGradient);
        // … the solid slots fall through to the primary terminal.
        expect(thumb(data)['&:hover'].boxShadow).toBe('0px 0px 0px 8px rgba(25, 118, 210, 0.32)');
        expect(thumb(data).border).toBe(`1px solid ${PRIMARY}`);
    });

    it('falls through on invalid explicit colors (documented delta)', () => {
        // Legacy `||` chains let 'not-a-color' flow into CSS unchecked; the
        // contract resolver skips invalid values (ADR-0004 intention).
        expect(thumb({ thumbColor: 'not-a-color', sliderColor: '#00ff00' }).background).toBe('#00ff00');
    });

    it('treats empty strings as unset', () => {
        expect(thumb({ thumbColor: '', sliderColor: '' }).background).toBe(PRIMARY);
    });

    it('returns validated colors normalized (trimmed)', () => {
        expect(thumb({ thumbColor: '  rgb(255, 0, 0)  ' }).background).toBe('rgb(255, 0, 0)');
    });

    it('draws no halo and a currentColor border when no stage has a solid colour', () => {
        // Only an unreadable theme primary leaves the cascade without a Repräsentative Vollfarbe.
        const unreadable = { palette: { primary: { main: 'var(--primary)' } } } as unknown as Theme;
        const rule = thumb({ thumbBorderWidth: 2 }, { theme: unreadable });

        expect(rule['&:hover'].boxShadow).toBeUndefined();
        expect(rule['&:active'].boxShadow).toBeUndefined();
        expect(rule.border).toBe('2px solid currentColor');
    });
});

describe('buildSliderChrome — thumb geometry', () => {
    it('measures 20 × 20 px by default and takes thumbWidth/thumbHeight', () => {
        expect([thumb({}).width, thumb({}).height]).toEqual(['20px', '20px']);
        expect([
            thumb({ thumbWidth: 30, thumbHeight: 12 }).width,
            thumb({ thumbWidth: 30, thumbHeight: 12 }).height,
        ]).toEqual(['30px', '12px']);
    });

    it.each<[string, number | undefined]>([
        ['unset', undefined],
        ['zero', 0],
        ['negative', -1],
    ])('draws no border for a %s border width', (_case, thumbBorderWidth) => {
        expect(thumb({ thumbBorderWidth, thumbBorderColor: '#00aa00' })).not.toHaveProperty('border');
    });

    it('draws the border for a positive width', () => {
        expect(thumb({ thumbBorderWidth: 2, thumbBorderColor: '#00aa00' }).border).toBe('2px solid #00aa00');
    });

    it('draws an 8 px halo on hover and a 14 px halo while active', () => {
        const rule = thumb({ thumbColor: '#ff0000' });

        expect(rule['&:hover']).toEqual({ boxShadow: '0px 0px 0px 8px rgba(255, 0, 0, 0.32)' });
        expect(rule['&:active']).toEqual({ boxShadow: '0px 0px 0px 14px rgba(255, 0, 0, 0.32)' });
    });
});

describe('buildSliderChrome — track and rail geometry', () => {
    it.each<[string, SliderFieldsRxData, Record<string, string>]>([
        [
            'horizontal, unset',
            { sliderOrientation: 'horizontal' },
            { trackHeight: '4px', trackWidth: 'auto', railHeight: '4px', railWidth: '100%' },
        ],
        [
            'horizontal, set',
            { sliderOrientation: 'horizontal', trackLength: 6, railLength: 8 },
            { trackHeight: '6px', trackWidth: 'auto', railHeight: '8px', railWidth: '100%' },
        ],
        [
            'vertical, unset',
            { sliderOrientation: 'vertical' },
            { trackHeight: 'auto', trackWidth: '4px', railHeight: '100%', railWidth: '4px' },
        ],
        [
            'vertical, set',
            { sliderOrientation: 'vertical', trackLength: 6, railLength: 8 },
            { trackHeight: 'auto', trackWidth: '6px', railHeight: '100%', railWidth: '8px' },
        ],
        // An unset orientation renders horizontal, like MUI.
        [
            'orientation unset',
            { trackLength: 6, railLength: 8 },
            { trackHeight: '6px', trackWidth: 'auto', railHeight: '8px', railWidth: '100%' },
        ],
    ])('takes the cross-axis length of the orientation (%s)', (_case, data, expected) => {
        expect({
            trackHeight: track(data).height,
            trackWidth: track(data).width,
            railHeight: rail(data).height,
            railWidth: rail(data).width,
        }).toEqual(expected);
    });

    it('draws a solid border of the configured width, 0px when unset or zero', () => {
        const set = { trackBorderWidth: 3, railBorderWidth: 2 };

        expect([track(set).borderWidth, track(set).borderStyle]).toEqual(['3px', 'solid']);
        expect([rail(set).borderWidth, rail(set).borderStyle]).toEqual(['2px', 'solid']);
        for (const data of [{}, { trackBorderWidth: 0, railBorderWidth: 0 }]) {
            expect([track(data).borderWidth, track(data).borderStyle]).toEqual(['0px', 'solid']);
            expect([rail(data).borderWidth, rail(data).borderStyle]).toEqual(['0px', 'solid']);
        }
    });

    it('leaves the rail opacity to MUI', () => {
        expect(rail({})).not.toHaveProperty('opacity');
    });
});

describe('buildSliderChrome — marks', () => {
    it.each<[string, SliderFieldsRxData, [string, string]]>([
        ['horizontal, unset', { sliderOrientation: 'horizontal' }, ['2px', '2px']],
        ['horizontal, set', { sliderOrientation: 'horizontal', markWidth: 5, markHeight: 7 }, ['5px', '7px']],
        ['vertical, unset', { sliderOrientation: 'vertical' }, ['16px', '3px']],
        ['vertical, set', { sliderOrientation: 'vertical', markWidth: 5, markHeight: 7 }, ['7px', '5px']],
        ['orientation unset (the horizontal fallbacks)', {}, ['2px', '2px']],
    ])('sizes the inactive and the active mark alike (%s)', (_case, data, expected) => {
        expect([mark(data).width, mark(data).height]).toEqual(expected);
        expect([markActive(data).width, markActive(data).height]).toEqual(expected);
    });

    it('lays the frozen brightness over the active mark, backgroundColor before background', () => {
        expect(markActive({ sliderOrientation: 'horizontal', markBackgroundColor: '#204060' })).toEqual({
            width: '2px',
            height: '2px',
            backgroundColor: '#204060',
            background: '#204060',
            filter: 'brightness(2.5)',
        });
        expect(Object.keys(markActive({}))).toEqual(['width', 'height', 'backgroundColor', 'background', 'filter']);
    });

    it('leaves the inactive mark unfiltered and both opacities to MUI', () => {
        expect(mark({})).not.toHaveProperty('filter');
        expect(mark({})).not.toHaveProperty('opacity');
        expect(markActive({})).not.toHaveProperty('opacity');
    });
});

describe('buildSliderChrome — mark-label space and end symbol offset', () => {
    it.each<[string, SliderFieldsRxData, { mb: string; mr: string }, string]>([
        [
            'horizontal with marks',
            { sliderOrientation: 'horizontal', marks: true },
            { mb: '20px', mr: '0px' },
            'translateY(-10px)',
        ],
        [
            'vertical with marks',
            { sliderOrientation: 'vertical', marks: true },
            { mb: '0px', mr: '44px' },
            'translateX(-22px)',
        ],
        ['horizontal without marks', { sliderOrientation: 'horizontal' }, { mb: '0px', mr: '0px' }, 'translateY(0px)'],
        [
            'vertical without marks',
            { sliderOrientation: 'vertical', marks: false },
            { mb: '0px', mr: '0px' },
            'translateX(0px)',
        ],
        // An unset orientation renders horizontal, like MUI.
        ['orientation unset with marks', { marks: true }, { mb: '20px', mr: '0px' }, 'translateY(-10px)'],
    ])('reserves the label space and moves the end symbols by half of it (%s)', (_case, data, margins, transform) => {
        const { sx, endSymbolTransform } = chrome(data);

        expect({ mb: sx.mb, mr: sx.mr }).toEqual(margins);
        expect(endSymbolTransform).toBe(transform);
    });
});

describe('buildSliderChrome — orientation', () => {
    // MUI renders every orientation but 'vertical' horizontal; the chrome hands that one
    // orientation out, so the body, the end symbols and MUI read the same.
    it.each<[string, SliderFieldsRxData, 'horizontal' | 'vertical']>([
        ['horizontal', { sliderOrientation: 'horizontal' }, 'horizontal'],
        ['vertical', { sliderOrientation: 'vertical' }, 'vertical'],
        ['unset', {}, 'horizontal'],
    ])('hands out the rendered orientation (%s)', (_case, data, expected) => {
        expect(chrome(data).orientation).toBe(expected);
    });

    it('puts the labels of an unset orientation where a horizontal slider has them', () => {
        const data: SliderFieldsRxData = { labelPosition: '-7px', markPosition: '25px' };

        expect(part(data, '& .MuiSlider-valueLabel')).toMatchObject({ top: '-7px', right: undefined });
        expect(part(data, '& .MuiSlider-markLabel')).toMatchObject({ top: '25px', left: undefined });
    });
});

describe('buildSliderChrome — label containers', () => {
    const label = { valueSize: 'calc(1rem * 0.875)', textColor: '#aa00aa' };

    it('paints the value label in the resolved active style on a transparent ground', () => {
        expect(
            part({ sliderOrientation: 'horizontal', labelPosition: '-7px' }, '& .MuiSlider-valueLabel', { label }),
        ).toEqual({
            fontSize: label.valueSize,
            color: label.textColor,
            bgcolor: 'transparent',
            top: '-7px',
            right: undefined,
        });
    });

    it('sizes the mark-label container with the value size and no colour', () => {
        expect(
            part({ sliderOrientation: 'horizontal', markPosition: '25px' }, '& .MuiSlider-markLabel', { label }),
        ).toEqual({
            fontSize: label.valueSize,
            top: '25px',
            left: undefined,
        });
    });

    it('moves both labels beside a vertical slider', () => {
        const data: SliderFieldsRxData = { sliderOrientation: 'vertical', labelPosition: '-7px', markPosition: '25px' };

        expect(part(data, '& .MuiSlider-valueLabel')).toMatchObject({ top: undefined, right: '-7px' });
        expect(part(data, '& .MuiSlider-markLabel')).toMatchObject({ top: undefined, left: '25px' });
    });
});

// vis-2's number field stores '' once the user empties it (and an assistant may write it):
// the length reads like the unset field — its fallback — instead of the invalid CSS `px`.
describe('buildSliderChrome — emptied lengths', () => {
    const LENGTHS = ['thumbWidth', 'thumbHeight', 'trackLength', 'railLength', 'markWidth', 'markHeight'] as const;

    it.each(['horizontal', 'vertical'] as const)('draws every emptied length like the unset one (%s)', orientation => {
        const emptied = Object.fromEntries(LENGTHS.map(name => [name, ''])) as SliderFieldsRxData;

        expect(chrome({ sliderOrientation: orientation, ...emptied }).sx).toEqual(
            chrome({ sliderOrientation: orientation }).sx,
        );
    });
});
