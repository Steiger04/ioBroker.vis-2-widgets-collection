/**
 * ErweitertSection — the CSS-variables explanation and the removed text direction.
 *
 * @module ThemeConfigWizard/sections/ErweitertSection.test
 * @remarks
 * The CSS-variables text is an info box of the control kit and appears in exactly one form,
 * whether the switch is on or off (no second copy as help hint). The text direction toggle is
 * gone (it never mirrored anything, spec B16).
 */
import { afterEach, describe, expect, it } from 'vitest';

import { renderComponent, type RenderComponentHandle } from '../../lib/testing/testHarness';
import type { StudioSectionProps } from '../../lib/theme/themeTypes';
import ErweitertSection from './ErweitertSection';

let handle: RenderComponentHandle<StudioSectionProps> | null = null;

afterEach(() => {
    handle?.unmount();
    handle = null;
});

const TEXT = 'theme_studio_help_css_vars';

describe('ErweitertSection CSS variables', () => {
    it.each<[string, StudioSectionProps['theme']]>([
        ['off', {}],
        // cssVariables is a ThemeOptions key outside the UserTheme type (the studio writes it by path).
        ['on', { cssVariables: true }],
        ['on with a prefix', { cssVariables: { cssVarPrefix: 'my' } }],
    ])('explains them once, as an info box (%s)', (_state, theme) => {
        handle = renderComponent<StudioSectionProps>(ErweitertSection, { theme, onChange: () => {}, expanded: true });
        const { container } = handle;
        const boxes = Array.from(container.querySelectorAll('[data-info-box]')).map(box => box.textContent);
        expect(boxes).toEqual([TEXT]);
        expect(container.textContent?.split(TEXT)).toHaveLength(2);
        expect(container.querySelector(`[aria-label="${TEXT}"]`)).toBeNull();
    });

    it('shows the default prefix vis2c in the empty prefix field', () => {
        handle = renderComponent<StudioSectionProps>(ErweitertSection, {
            theme: { cssVariables: true },
            onChange: () => {},
            expanded: true,
        });
        const input = handle.container.querySelector<HTMLInputElement>('input[type="text"]');
        expect([input?.value, input?.placeholder]).toEqual(['', 'vis2c']);
    });

    it('shows a prefix error at the prefix field', () => {
        handle = renderComponent<StudioSectionProps>(ErweitertSection, {
            theme: { cssVariables: { cssVarPrefix: 'mui' } },
            onChange: () => {},
            expanded: true,
            errorFor: path => (path === 'cssVariables.cssVarPrefix' ? 'reserved prefix' : undefined),
        });
        const input = handle.container.querySelector<HTMLInputElement>('input[type="text"]');
        expect(input?.getAttribute('aria-invalid')).toBe('true');
        const describedBy = input?.getAttribute('aria-describedby');
        expect(describedBy && document.getElementById(describedBy)?.textContent).toBe('reserved prefix');
        expect(handle.container.querySelector('[data-theme-error]')).not.toBeNull();
    });
});

describe('ErweitertSection text direction', () => {
    // A stored `direction` stays valid in the schema, but the studio no longer offers it (B16).
    const rtlTheme = { direction: 'rtl', spacing: 4 } as StudioSectionProps['theme'];

    it('offers no text direction control, even for a stored rtl theme', () => {
        handle = renderComponent<StudioSectionProps>(ErweitertSection, {
            theme: rtlTheme,
            onChange: () => {},
            expanded: true,
        });
        const text = handle.container.textContent ?? '';
        expect(text).not.toContain('theme_wizard_layout_direction');
        // Keys are lower-case, so upper-case LTR/RTL can only be the direction labels.
        expect(text).not.toMatch(/LTR|RTL/);
    });

    it('summarises spacing and CSS variables only', () => {
        handle = renderComponent<StudioSectionProps>(ErweitertSection, {
            theme: rtlTheme,
            onChange: () => {},
            expanded: false,
        });
        const text = handle.container.textContent ?? '';
        // The summary follows the section title directly: no direction segment in front.
        expect(text).toContain('theme_studio_section_advanced4px · theme_studio_off');
    });
});
