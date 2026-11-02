/**
 * The Radio colour rules: the unchecked icon resolves its field contract; checked and
 * disabled-unchecked are state rules on top (ADR-0004, Nachtrag „Chrome-Slots").
 *
 * @module lib/radioColorContract.test
 */
import { describe, expect, it, vi } from 'vitest';

import type { Theme } from '@mui/material';
import type { ExtendedField } from '../types/field-definitions/extended-field';
import { resolveEffectiveColor } from './helper/resolveEffectiveColor';
import { radioUncheckedIconColorContract, resolveRadioColors } from './radioColorContract';

// The field list renders CollectionDivider / CollectionGradientColorPicker, which pull
// Generic (extends window.visRxWidget, absent outside vis-2). The parity test reads only
// the field data.
vi.mock('../components/CollectionGradientColorPicker', () => ({ default: () => null }));
vi.mock('../components/CollectionDivider', () => ({ default: () => null }));

import radioGroupFields from './radioGroupFields';

/** Distinct colours per palette slot, so a test sees which slot a colour came from. */
const THEME = {
    palette: {
        primary: { main: '#pri' },
        text: { primary: '#txt', secondary: '#sec' },
        action: { active: '#act', disabled: '#dis' },
        background: { paper: '#pap', default: '#bg' },
        divider: '#div',
    },
} as unknown as Theme;

describe('resolveRadioColors — the unchecked icon resolves the field contract', () => {
    it('draws an explicit unchecked icon colour as set', () => {
        expect(resolveRadioColors({ radioGroupUncheckedIconColor: '#b0bec5' }, '', THEME).unchecked).toBe('#b0bec5');
    });

    it('without a value, draws the theme secondary text colour (terminal textSecondary)', () => {
        expect(resolveRadioColors({}, '', THEME).unchecked).toBe('#sec');
    });

    it('treats an invalid value as unset', () => {
        expect(resolveRadioColors({ radioGroupUncheckedIconColor: 'not-a-colour' }, '', THEME).unchecked).toBe('#sec');
    });
});

describe('resolveRadioColors — the checked icon follows the state', () => {
    it("draws the state's icon colour", () => {
        expect(resolveRadioColors({ radioGroupUncheckedIconColor: '#b0bec5' }, '#aa0000', THEME).checked).toBe(
            '#aa0000',
        );
    });

    it('without a state icon colour, draws the theme primary — not the unchecked colour', () => {
        expect(resolveRadioColors({ radioGroupUncheckedIconColor: '#b0bec5' }, '', THEME).checked).toBe('#pri');
        expect(resolveRadioColors({}, undefined, THEME).checked).toBe('#pri');
    });
});

describe('resolveRadioColors — disabled unchecked is a state rule, not the terminal', () => {
    it('draws an explicit unchecked icon colour as set while disabled', () => {
        expect(resolveRadioColors({ radioGroupUncheckedIconColor: '#b0bec5' }, '', THEME).disabledUnchecked).toBe(
            '#b0bec5',
        );
    });

    it('state rule: without a value, disabled draws action.active — it does not follow the terminal text.secondary', () => {
        expect(resolveRadioColors({}, '', THEME).disabledUnchecked).toBe('#act');
    });

    it('state rule: an invalid value counts as unset while disabled, too (action.active)', () => {
        expect(resolveRadioColors({ radioGroupUncheckedIconColor: 'not-a-colour' }, '', THEME).disabledUnchecked).toBe(
            '#act',
        );
    });
});

describe('radioGroupUncheckedIconColor — the field declares the contract the unchecked icon resolves (ADR-0004)', () => {
    const field = radioGroupFields().find(
        candidate => (candidate as { name?: string }).name === 'radioGroupUncheckedIconColor',
    ) as ExtendedField;

    it('spreads exactly the unchecked icon colour contract, solid-only', () => {
        const { name, fallbackFields, terminal, inheritTextStyle, noGradient } = field;

        expect({ name, fallbackFields, terminal, inheritTextStyle }).toEqual(radioUncheckedIconColorContract);
        expect(radioUncheckedIconColorContract).toEqual({
            name: 'radioGroupUncheckedIconColor',
            fallbackFields: [],
            terminal: 'textSecondary',
        });
        expect(noGradient).toBe(true);
    });

    it('without a value, the swatch shows the theme secondary text colour — not textColor, not the vis-2 CSS colour', () => {
        expect(resolveEffectiveColor(field, { textColor: '#00aa00' }, THEME, { color: '#0000aa' })).toBe('#sec');
    });
});
