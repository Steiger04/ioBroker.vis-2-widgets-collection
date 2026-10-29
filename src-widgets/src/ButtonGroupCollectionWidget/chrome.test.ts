import { describe, expect, it } from 'vitest';

import type { Theme } from '@mui/material/styles';

import { buildButtonChrome, buildGroupChrome } from './chrome';
import type { ButtonGroupChromeInput } from './chrome';

/** Minimal theme: chrome only reads palette.text.primary (the separator fallback). */
const theme = { palette: { text: { primary: '#2f3e51' } } } as unknown as Theme;

const groupSx = (overrides: Partial<ButtonGroupChromeInput> = {}): Record<string, any> =>
    buildGroupChrome({
        variant: 'text',
        orientation: 'horizontal',
        buttonGroupColor: null,
        basePadding: false,
        count: 3,
        theme,
        ...overrides,
    });

const first = (sx: Record<string, any>): Record<string, any> => sx['& .MuiToggleButtonGroup-firstButton'];
const middle = (sx: Record<string, any>): Record<string, any> => sx['& .MuiToggleButtonGroup-middleButton'];
const last = (sx: Record<string, any>): Record<string, any> => sx['& .MuiToggleButtonGroup-lastButton'];
const buttonRoot = (sx: Record<string, any>): Record<string, any> => sx['&.MuiToggleButton-root'];
/** The group's child rule (descendant selector, WITH space — unlike buttonRoot's self-selector). */
const groupChild = (sx: Record<string, any>): Record<string, any> => sx['& .MuiToggleButton-root'];

describe('buildGroupChrome — text variant (default)', () => {
    it('removes the borders on all positions and draws inset separators on middle/last only', () => {
        const sx = groupSx();

        expect(first(sx).border).toBe('none');
        expect(first(sx).boxShadow).toBeUndefined();
        expect(first(sx).borderColor).toBeUndefined();

        for (const block of [middle(sx), last(sx)]) {
            expect(block.border).toBe('none');
            expect(block.borderColor).toBeUndefined();
            // horizontal: the separator runs vertically between the buttons
            expect(block.boxShadow).toBe('inset 1px 0 0 0 rgba(47, 62, 81, 0.6)');
        }
    });

    it('resolves the separator from the configured group colour at the frozen alpha', () => {
        const sx = groupSx({ buttonGroupColor: '#3399CC' });

        expect(middle(sx).boxShadow).toBe('inset 1px 0 0 0 rgba(51, 153, 204, 0.6)');
    });

    it('treats an undefined variant like text (frozen default)', () => {
        expect(groupSx({ variant: undefined })).toEqual(groupSx({ variant: 'text' }));
    });

    it('squares off the rounded ends without basePadding and keeps them with it', () => {
        const squared = groupSx({ basePadding: false });
        expect(first(squared).borderRadius).toBe(0);
        expect(last(squared).borderRadius).toBe(0);

        const rounded = groupSx({ basePadding: 8 });
        expect(first(rounded).borderRadius).toBeUndefined();
        expect(last(rounded).borderRadius).toBeUndefined();
    });
});

describe('buildGroupChrome — orientation', () => {
    it('stacks vertically, caps each button at its share and flips the separator axis', () => {
        const sx = groupSx({ orientation: 'vertical' });

        expect(sx.flexDirection).toBe('column');
        expect(sx.height).toBe('100%');
        expect(sx.maxHeight).toBe('100%');

        expect(sx['& .MuiToggleButton-root']).toEqual({
            flex: '1 1 0',
            minHeight: 0,
            maxHeight: 'calc(100% / 3)',
        });

        for (const block of [middle(sx), last(sx)]) {
            // vertical: the separator runs horizontally between the buttons
            expect(block.boxShadow).toBe('inset 0 1px 0 0 rgba(47, 62, 81, 0.6)');
            expect(block.marginLeft).toBeUndefined();
            expect(block.marginTop).toBe(0);
        }
    });

    it('lays out horizontally without the per-button cap', () => {
        const sx = groupSx({ orientation: 'horizontal' });

        expect(sx.flexDirection).toBe('row');
        expect(sx.height).toBe('auto');
        expect(sx.maxHeight).toBe('none');
        expect(sx['& .MuiToggleButton-root']).toBeUndefined();

        for (const block of [middle(sx), last(sx)]) {
            expect(block.marginLeft).toBe(0);
            expect(block.marginTop).toBeUndefined();
        }
    });

    it('freezes the count-0 edge: the cap formula degenerates but the rule matches nothing', () => {
        const sx = groupSx({ orientation: 'vertical', count: 0 });

        expect(groupChild(sx).maxHeight).toBe('calc(100% / 0)');
    });
});

describe('buildGroupChrome — outlined variant', () => {
    it('colours all position borders instead of removing them', () => {
        const sx = groupSx({ variant: 'outlined', buttonGroupColor: '#3399CC' });

        for (const block of [first(sx), middle(sx), last(sx)]) {
            expect(block.borderColor).toBe('rgba(51, 153, 204, 0.6)');
            expect(block.border).toBeUndefined();
            expect(block.boxShadow).toBeUndefined();
        }
    });
});

describe('buildButtonChrome', () => {
    it('passes a solid background through and lightens it on hover (0.5) and selection (0.3)', () => {
        const root = buttonRoot(buildButtonChrome({ background: '#3399cc', isActive: false }));

        expect(root.background).toBe('#3399cc');
        expect(root['&:hover'].background).toBe('rgb(153, 204, 229)');
        expect(root['&.Mui-selected'].background).toBe('rgb(112, 183, 219)');
        // no dimming without a gradient
        expect(root.filter).toBeUndefined();
        expect(root['&:hover'].filter).toBeUndefined();
    });

    it('keeps a gradient as-is and dims via the opacity filter instead of lightening', () => {
        const gradient = 'linear-gradient(red, blue)';

        const inactive = buttonRoot(buildButtonChrome({ background: gradient, isActive: false }));
        expect(inactive.background).toBe(gradient);
        expect(inactive.filter).toBeUndefined();
        expect(inactive['&:hover'].background).toBeUndefined();
        expect(inactive['&:hover'].filter).toBe('opacity(80%)');
        expect(inactive['&.Mui-selected'].background).toBeUndefined();

        const active = buttonRoot(buildButtonChrome({ background: gradient, isActive: true }));
        expect(active.filter).toBe('opacity(80%)');
    });

    it('yields no backgrounds at all without a configured colour', () => {
        const root = buttonRoot(buildButtonChrome({ background: undefined, isActive: false }));

        expect(root.background).toBeUndefined();
        expect(root['&:hover'].background).toBeUndefined();
        expect(root['&.Mui-selected'].background).toBeUndefined();
    });
});
