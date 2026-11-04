import { describe, expect, it, vi } from 'vitest';

import type { Theme } from '@mui/material/styles';

import { buttonGroupColorContract } from '../lib/buttonGroupColorContract';
import { resolveEffectiveColor } from '../lib/helper/resolveEffectiveColor';
import type { ExtendedField } from '../types/field-definitions/extended-field';
import { buildButtonChrome, buildGroupChrome } from './chrome';
import type { ButtonGroupChromeInput } from './chrome';

// The field list renders CollectionDivider / ContractColorField, which pull
// Generic (extends window.visRxWidget, absent outside vis-2). The parity test reads only
// the field data.
vi.mock('../components/ContractColorField', () => ({ default: () => null }));
vi.mock('../components/PlainColorField', () => ({ default: () => null }));
vi.mock('../components/CollectionDivider', () => ({ default: () => null }));

import buttonGroupFields from '../lib/buttonGroupFields';

/** Minimal theme: chrome only reads palette.text.primary (the separator fallback). */
const theme = { palette: { text: { primary: '#2f3e51' } } } as unknown as Theme;

const groupSx = (overrides: Partial<ButtonGroupChromeInput> = {}): Record<string, any> =>
    buildGroupChrome({
        variant: 'text',
        orientation: 'horizontal',
        data: {},
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
        const sx = groupSx({ data: { buttonGroupColor: '#3399CC' } });

        expect(middle(sx).boxShadow).toBe('inset 1px 0 0 0 rgba(51, 153, 204, 0.6)');
    });

    it("takes a gradient group colour's midpoint for the separator instead of throwing", () => {
        const gradient = 'linear-gradient(90deg, #ff0000 0%, #0000ff 100%)';

        expect(() => groupSx({ data: { buttonGroupColor: gradient } })).not.toThrow();
        expect(middle(groupSx({ data: { buttonGroupColor: gradient } })).boxShadow).toBe(
            'inset 1px 0 0 0 rgba(128, 0, 128, 0.6)',
        );
        expect(first(groupSx({ variant: 'outlined', data: { buttonGroupColor: gradient } })).borderColor).toBe(
            'rgba(128, 0, 128, 0.6)',
        );
    });

    it('treats an undefined variant like text (frozen default)', () => {
        expect(groupSx({ variant: undefined })).toEqual(groupSx({ variant: 'text' }));
    });

    it('squares off the rounded ends without basePadding and keeps them with it', () => {
        for (const squared of [groupSx({ data: {} }), groupSx({ data: { basePadding: 0 } })]) {
            expect(first(squared).borderRadius).toBe(0);
            expect(last(squared).borderRadius).toBe(0);
        }

        const rounded = groupSx({ data: { basePadding: 8 } });
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
        const sx = groupSx({ variant: 'outlined', data: { buttonGroupColor: '#3399CC' } });

        for (const block of [first(sx), middle(sx), last(sx)]) {
            expect(block.borderColor).toBe('rgba(51, 153, 204, 0.6)');
            expect(block.border).toBeUndefined();
            expect(block.boxShadow).toBeUndefined();
        }
    });
});

describe('buildGroupChrome — the separator resolves the button-group colour contract', () => {
    const THEME_TEXT_SEPARATOR = 'rgba(47, 62, 81, 0.6)';

    it('without a value, draws the theme text colour at the frozen alpha (unchanged)', () => {
        expect(middle(groupSx()).boxShadow).toBe(`inset 1px 0 0 0 ${THEME_TEXT_SEPARATOR}`);
        expect(first(groupSx({ variant: 'outlined' })).borderColor).toBe(THEME_TEXT_SEPARATOR);
    });

    it("stays at the theme text colour when only textColor is set — the field's old fallback never applied", () => {
        for (const data of [{ textColor: '#00aa00' }, { textColor: '#00aa00', buttonGroupColor: '' }]) {
            expect(middle(groupSx({ data })).boxShadow).toBe(`inset 1px 0 0 0 ${THEME_TEXT_SEPARATOR}`);
            expect(first(groupSx({ variant: 'outlined', data })).borderColor).toBe(THEME_TEXT_SEPARATOR);
        }
    });

    it.each([
        ['hsl()', 'hsl(200, 60%, 50%)', 'hsla(200, 60%, 50%, 0.6)'],
        ['a 4-digit hex', '#39cf', 'rgba(51, 153, 204, 0.6)'],
    ])(
        'draws an explicit %s the picker rejects but the colour calculation reads as stored, as before the spec',
        (_case, buttonGroupColor, separator) => {
            expect(middle(groupSx({ data: { buttonGroupColor } })).boxShadow).toBe(`inset 1px 0 0 0 ${separator}`);
            expect(first(groupSx({ variant: 'outlined', data: { buttonGroupColor } })).borderColor).toBe(separator);
        },
    );

    it('treats a value without a Repräsentative Vollfarbe as unset and falls back to the theme text colour', () => {
        // A gradient with named stops passes the picker's validation but has no solid colour;
        // a colour name or a CSS variable is no valid stored colour at all.
        for (const buttonGroupColor of ['linear-gradient(red, blue)', 'red', 'var(--x)']) {
            expect(middle(groupSx({ data: { buttonGroupColor } })).boxShadow).toBe(
                `inset 1px 0 0 0 ${THEME_TEXT_SEPARATOR}`,
            );
        }
    });
});

describe('buttonGroupColor — the field declares the contract the separator resolves (ADR-0004)', () => {
    const field = buttonGroupFields().find(
        candidate => (candidate as { name?: string }).name === 'buttonGroupColor',
    ) as ExtendedField;

    it('spreads exactly the button-group colour contract, solid-only', () => {
        const { name, fallbackFields, terminal, inheritTextStyle, noGradient } = field;

        expect({ name, fallbackFields, terminal, inheritTextStyle }).toEqual(buttonGroupColorContract);
        expect(buttonGroupColorContract).toEqual({ name: 'buttonGroupColor', fallbackFields: [], terminal: 'text' });
        expect(noGradient).toBe(true);
    });

    it('without a value, the swatch shows the theme text colour — not textColor, not the vis-2 CSS colour', () => {
        expect(resolveEffectiveColor(field, { textColor: '#00aa00' }, theme, { color: '#0000aa' })).toBe('#2f3e51');
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

    it('gives a background no tint calculation can read no hover/selected tint instead of throwing', () => {
        // 'RGB(…)' is a valid stored colour (case-insensitive) that MUI's lighten() rejects.
        for (const background of ['red', 'var(--x)', 'RGB(51, 153, 204)']) {
            expect(() => buildButtonChrome({ background, isActive: false })).not.toThrow();

            const root = buttonRoot(buildButtonChrome({ background, isActive: false }));
            expect(root.background).toBe(background);
            expect(root['&:hover'].background).toBeUndefined();
            expect(root['&.Mui-selected'].background).toBeUndefined();
        }
    });

    it('gives a background its own reading never took (hsl(), a 4-digit hex) no hover/selected tint, as before the spec', () => {
        // The button tints only what extractColorFromValue reads (hex 3/6/8, rgb(a)), even
        // where MUI's lighten() could calculate.
        for (const background of ['hsl(200, 60%, 50%)', '#39cf']) {
            const root = buttonRoot(buildButtonChrome({ background, isActive: false }));
            expect(root.background).toBe(background);
            expect(root['&:hover'].background).toBeUndefined();
            expect(root['&.Mui-selected'].background).toBeUndefined();
        }
    });

    it('yields no backgrounds at all without a configured colour', () => {
        const root = buttonRoot(buildButtonChrome({ background: undefined, isActive: false }));

        expect(root.background).toBeUndefined();
        expect(root['&:hover'].background).toBeUndefined();
        expect(root['&.Mui-selected'].background).toBeUndefined();
    });
});
