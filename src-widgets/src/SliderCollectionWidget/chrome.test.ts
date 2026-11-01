import { describe, expect, it, vi } from 'vitest';

// sliderFields pulls fieldFactories, which pulls CollectionGradientColorPicker,
// which pulls Generic, which extends window.visRxWidget — undefined outside the
// vis-2 runtime. The contracts under test are independent of those components.
vi.mock('../components/CollectionGradientColorPicker', () => ({ default: () => null }));
vi.mock('../components/CollectionDivider', () => ({ default: () => null }));

import { buildSliderChromeStyles } from './chrome';
import { sliderColorContracts } from '../lib/sliderFields';

import type { SliderFieldsRxData } from '../types';
import type { Theme } from '@mui/material';

const PRIMARY = '#1976d2';
const theme = { palette: { primary: { main: PRIMARY } } } as unknown as Theme;

const styles = (data: SliderFieldsRxData): ReturnType<typeof buildSliderChromeStyles> =>
    buildSliderChromeStyles(data, theme);

describe('sliderColorContracts', () => {
    it('derives exactly the slider color fields with a terminal', () => {
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

describe('buildSliderChromeStyles', () => {
    it('resolves every slot to the primary terminal when nothing is set', () => {
        const chrome = styles({});

        expect(chrome).toEqual({
            thumbBackground: PRIMARY,
            thumbShadowBase: PRIMARY,
            thumbBorder: PRIMARY,
            trackBackground: PRIMARY,
            trackBorder: PRIMARY,
            railBackground: PRIMARY,
            railBorder: PRIMARY,
            markBackground: PRIMARY,
        });
    });

    it('lets sliderColor cascade into every dependent slot', () => {
        const chrome = styles({ sliderColor: '#00ff00' });

        expect(chrome.thumbBackground).toBe('#00ff00');
        expect(chrome.thumbShadowBase).toBe('#00ff00');
        expect(chrome.thumbBorder).toBe('#00ff00');
        expect(chrome.trackBackground).toBe('#00ff00');
        expect(chrome.trackBorder).toBe('#00ff00');
        expect(chrome.railBackground).toBe('#00ff00');
        expect(chrome.railBorder).toBe('#00ff00');
        expect(chrome.markBackground).toBe('#00ff00');
    });

    it('an explicit slot wins over sliderColor, others keep cascading', () => {
        const chrome = styles({ sliderColor: '#00ff00', thumbColor: '#ff0000' });

        expect(chrome.thumbBackground).toBe('#ff0000');
        expect(chrome.thumbBorder).toBe('#ff0000'); // via thumbBorderColor → thumbColor fallback
        expect(chrome.trackBackground).toBe('#00ff00');
        expect(chrome.railBackground).toBe('#00ff00');
        expect(chrome.markBackground).toBe('#00ff00');
    });

    it('resolves the three-tier thumb border cascade', () => {
        expect(styles({ thumbBorderColor: '#0000ff' }).thumbBorder).toBe('#0000ff');
        expect(styles({ thumbColor: '#ff0000' }).thumbBorder).toBe('#ff0000');
        expect(styles({ sliderColor: '#00ff00' }).thumbBorder).toBe('#00ff00');
        expect(styles({}).thumbBorder).toBe(PRIMARY);
    });

    it('keeps gradients on backgrounds but extracts solids for borders and shadows', () => {
        const gradient = 'linear-gradient(90deg, #ff0000 0%, #0000ff 100%)';

        const chrome = styles({ thumbColor: gradient, trackBorderColor: gradient });

        // Background slots carry the raw gradient (the surface may render it).
        expect(chrome.thumbBackground).toBe(gradient);
        // Solid slots get the interpolated 50% representative.
        expect(chrome.thumbShadowBase).toBe('rgb(128, 0, 128)');
        expect(chrome.trackBorder).toBe('rgb(128, 0, 128)');
    });

    it('lets border and shadow slots without a solid color fall through the cascade', () => {
        // 'red' is no Repräsentative Vollfarbe; nor is a gradient with named stops,
        // which the picker accepts as valid but no color calculation can read.
        const namedGradient = 'linear-gradient(red, blue)';

        for (const value of ['red', namedGradient]) {
            const chrome = styles({ trackBorderColor: value, railBorderColor: value, sliderColor: '#00ff00' });
            expect(chrome.trackBorder).toBe('#00ff00');
            expect(chrome.railBorder).toBe('#00ff00');
        }

        const chrome = styles({ thumbColor: namedGradient });
        // The background slot keeps the raw gradient (the surface may render it) …
        expect(chrome.thumbBackground).toBe(namedGradient);
        // … the solid slots fall through to the primary terminal.
        expect(chrome.thumbShadowBase).toBe(PRIMARY);
        expect(chrome.thumbBorder).toBe(PRIMARY);
    });

    it('falls through on invalid explicit colors (documented delta)', () => {
        // Legacy `||` chains let 'not-a-color' flow into CSS unchecked; the
        // contract resolver skips invalid values (ADR-0004 intention).
        const chrome = styles({ thumbColor: 'not-a-color', sliderColor: '#00ff00' });

        expect(chrome.thumbBackground).toBe('#00ff00');
    });

    it('treats empty strings as unset', () => {
        const chrome = styles({ thumbColor: '', sliderColor: '' });

        expect(chrome.thumbBackground).toBe(PRIMARY);
    });

    it('returns validated colors normalized (trimmed)', () => {
        const chrome = styles({ thumbColor: '  rgb(255, 0, 0)  ' });

        expect(chrome.thumbBackground).toBe('rgb(255, 0, 0)');
    });
});
