import { describe, expect, it } from 'vitest';

import type { Theme } from '@mui/material/styles';

import { resolveEffectiveColor, type StyleColor } from '../../lib/helper/resolveEffectiveColor';
import { jsonTableCellTextColorContract, jsonTableColorContracts } from '../../lib/jsonTableColorContracts';
import { tableTextColor } from './cellColors';

/** Minimal theme: the text contracts read only the theme text colour. */
const theme = { palette: { text: { primary: '#2f3e51' } } } as unknown as Theme;

describe('cell text contract — the cells name their inherited colour themselves (ADR-0004)', () => {
    it.each<[string, StyleColor]>([
        ['vis-2 CSS colour', { color: '#0000aa' }],
        ['no vis-2 CSS colour', undefined],
        ['empty vis-2 CSS colour', { color: '' }],
    ])('cells and header text inherit the same colour today (%s)', (_case, styleColor) => {
        const header = resolveEffectiveColor(jsonTableColorContracts.tableHeaderTextColor, {}, theme, styleColor);
        const cells = resolveEffectiveColor(jsonTableCellTextColorContract, {}, theme, styleColor);

        expect(cells).toBe(header);
        expect(tableTextColor({ theme, styleColor })).toBe(cells);
    });

    it('declares the cell text cascade: vis-2 CSS colour, else the theme text', () => {
        expect(jsonTableCellTextColorContract).toEqual({
            name: 'cellTextColor',
            fallbackFields: [],
            terminal: 'text',
            inheritTextStyle: true,
        });
        expect(tableTextColor({ theme, styleColor: { color: '#0000aa' } })).toBe('#0000aa');
        expect(tableTextColor({ theme, styleColor: undefined })).toBe('#2f3e51');
    });
});
