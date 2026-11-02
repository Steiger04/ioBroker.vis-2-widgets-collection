/**
 * ErweitertSection — the CSS-variables explanation.
 *
 * @module ThemeConfigWizard/sections/ErweitertSection.test
 * @remarks
 * The CSS-variables text is an info box of the control kit and appears in exactly one form,
 * whether the switch is on or off (no second copy as help hint).
 */
import { afterEach, describe, expect, it, vi } from 'vitest';

vi.hoisted(() => {
    // Generic extends window.visRxWidget (undefined outside the vis-2 host) — the repo's stub pattern.
    (window as unknown as { visRxWidget: unknown }).visRxWidget = class {
        static t(key: string): string {
            return key;
        }
    };
});

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
        ['on', { cssVariables: true } as StudioSectionProps['theme']],
        ['on with a prefix', { cssVariables: { cssVarPrefix: 'my' } } as StudioSectionProps['theme']],
    ])('explains them once, as an info box (%s)', (_state, theme) => {
        handle = renderComponent<StudioSectionProps>(ErweitertSection, { theme, onChange: () => {}, expanded: true });
        const { container } = handle;
        const boxes = Array.from(container.querySelectorAll('[data-info-box]')).map(box => box.textContent);
        expect(boxes).toEqual([TEXT]);
        expect(container.textContent?.split(TEXT)).toHaveLength(2);
        expect(container.querySelector(`[aria-label="${TEXT}"]`)).toBeNull();
    });
});
