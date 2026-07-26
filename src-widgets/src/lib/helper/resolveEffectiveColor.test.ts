import { describe, expect, it } from 'vitest';
import type { Theme } from '@mui/material';
import { resolveEffectiveColor, terminalColor } from './resolveEffectiveColor';
import type { ColorFieldContract } from './resolveEffectiveColor';

const THEME = {
    palette: { primary: { main: '#pri' }, text: { primary: '#txt' } },
} as unknown as Theme;

const contract = (overrides: Partial<ColorFieldContract>): ColorFieldContract => ({
    name: 'iconColor',
    ...overrides,
});

describe('terminalColor', () => {
    it('maps each terminal to its theme color', () => {
        expect(terminalColor('primary', THEME)).toBe('#pri');
        expect(terminalColor('text', THEME)).toBe('#txt');
        expect(terminalColor('transparent', THEME)).toBe('');
        expect(terminalColor(undefined, THEME)).toBe('');
    });
});

describe('resolveEffectiveColor', () => {
    it('returns the explicit override when set', () => {
        const c = contract({ name: 'iconColor', terminal: 'primary' });
        expect(resolveEffectiveColor(c, { iconColor: '#a1a1a1' }, THEME, undefined)).toBe('#a1a1a1');
    });

    it('falls through the fallbackFields in order', () => {
        const c = contract({ name: 'thumbColor', terminal: 'primary', fallbackFields: ['sliderColor'] });
        // no explicit, sliderColor set
        expect(resolveEffectiveColor(c, { sliderColor: '#5b5b5b' }, THEME, undefined)).toBe('#5b5b5b');
        // explicit beats fallback
        expect(resolveEffectiveColor(c, { thumbColor: '#3c3c3c', sliderColor: '#5b5b5b' }, THEME, undefined)).toBe(
            '#3c3c3c',
        );
    });

    it('skips invalid/empty fallback entries and keeps searching', () => {
        const c = contract({
            name: 'thumbBorderColor',
            terminal: 'primary',
            fallbackFields: ['thumbColor', 'sliderColor'],
        });
        expect(resolveEffectiveColor(c, { thumbColor: '', sliderColor: '#5b5b5b' }, THEME, undefined)).toBe('#5b5b5b');
    });

    it("honors the legacy fallbackFields: ['']  (empty entry is skipped, terminal still applies)", () => {
        const c = contract({ name: 'textColor', terminal: 'text', inheritTextStyle: false, fallbackFields: [''] });
        expect(resolveEffectiveColor(c, {}, THEME, undefined)).toBe('#txt');
    });

    it('uses textStyles.color before the terminal when inheritTextStyle is true', () => {
        const c = contract({ name: 'textColor', terminal: 'text', inheritTextStyle: true });
        expect(resolveEffectiveColor(c, {}, THEME, { color: '#tsColor' })).toBe('#tsColor');
    });

    it('ignores textStyles.color when inheritTextStyle is false', () => {
        const c = contract({ name: 'iconColor', terminal: 'primary', inheritTextStyle: false });
        expect(resolveEffectiveColor(c, {}, THEME, { color: '#tsColor' })).toBe('#pri');
    });

    it('resolves each terminal when nothing is set', () => {
        expect(resolveEffectiveColor(contract({ name: 'iconColor', terminal: 'primary' }), {}, THEME, undefined)).toBe(
            '#pri',
        );
        expect(resolveEffectiveColor(contract({ name: 'textColor', terminal: 'text' }), {}, THEME, undefined)).toBe(
            '#txt',
        );
        expect(
            resolveEffectiveColor(contract({ name: 'background', terminal: 'transparent' }), {}, THEME, undefined),
        ).toBe('');
    });

    it('treats a missing terminal as transparent (legacy default)', () => {
        expect(resolveEffectiveColor(contract({ name: 'background' }), {}, THEME, undefined)).toBe('');
    });
});
