import { describe, expect, it } from 'vitest';

import { resolveEndSymbols } from './endSymbols';

import type { SliderFieldsRxData } from '../types';
import type { Theme } from '@mui/material';

const PRIMARY = '#1976d2';
const theme = { palette: { primary: { main: PRIMARY } } } as unknown as Theme;

const BASE64_ICON = 'data:image/svg+xml;base64,PHN2Zy8+';
const URL_ICON = '/vis-2.0/main/img/slider-end.png';

describe('resolveEndSymbols', () => {
    it('puts the min icon at the start in horizontal orientation, a Base64 icon without a value in primary', () => {
        const { start } = resolveEndSymbols({ iconSmallMin: BASE64_ICON } as SliderFieldsRxData, theme, 'horizontal');

        expect(start).toEqual({ icon: BASE64_ICON, color: PRIMARY, size: '24px' });
    });

    it('leaves an image icon (URL) without a value uncoloured', () => {
        const { start } = resolveEndSymbols({ iconMin: URL_ICON } as SliderFieldsRxData, theme, 'horizontal');

        expect(start.color).toBeUndefined();
    });

    it('paints the stored value raw, as stored, on an image icon and on a Base64 icon', () => {
        const image = resolveEndSymbols(
            { iconMin: URL_ICON, startIconColor: 'tomato' } as SliderFieldsRxData,
            theme,
            'horizontal',
        );
        const base64 = resolveEndSymbols(
            { iconSmallMin: BASE64_ICON, startIconColor: 'linear-gradient(red, blue)' } as SliderFieldsRxData,
            theme,
            'horizontal',
        );

        expect(image.start.color).toBe('tomato');
        expect(base64.start.color).toBe('linear-gradient(red, blue)');
    });

    const BOTH: SliderFieldsRxData = {
        iconSmallMin: BASE64_ICON,
        iconSizeStart: '16px',
        iconMax: URL_ICON,
        iconSizeEnd: '40px',
        endIconColor: '#aa0000',
    } as SliderFieldsRxData;

    it('puts the max icon with its own colour and size at the end in horizontal orientation', () => {
        expect(resolveEndSymbols(BOTH, theme, 'horizontal')).toEqual({
            start: { icon: BASE64_ICON, color: PRIMARY, size: '16px' },
            end: { icon: URL_ICON, color: '#aa0000', size: '40px' },
        });
    });

    it('swaps only the position in vertical orientation: colour and size travel with the source icon', () => {
        expect(resolveEndSymbols(BOTH, theme, 'vertical')).toEqual({
            start: { icon: URL_ICON, color: '#aa0000', size: '40px' },
            end: { icon: BASE64_ICON, color: PRIMARY, size: '16px' },
        });
    });

    it('keeps an image icon without a value uncoloured when vertical moves it to the end', () => {
        const { end } = resolveEndSymbols({ iconMin: URL_ICON } as SliderFieldsRxData, theme, 'vertical');

        expect(end).toEqual({ icon: URL_ICON, color: undefined, size: '24px' });
    });

    it('resolves no icon for an end without a source icon', () => {
        const { start, end } = resolveEndSymbols({} as SliderFieldsRxData, theme, 'horizontal');

        expect(start.icon).toBeUndefined();
        expect(end.icon).toBeUndefined();
    });
});
