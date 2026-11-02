/**
 * TypographySection — the closed font-family select.
 *
 * @module ThemeConfigWizard/sections/TypographySection.test
 * @remarks
 * Without `typography.fontFamily` the default entry (value `''`) is active; the closed select
 * must still show its label instead of rendering empty.
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
import TypographySection from './TypographySection';

let handle: RenderComponentHandle<StudioSectionProps> | null = null;

afterEach(() => {
    handle?.unmount();
    handle = null;
});

describe('TypographySection font family', () => {
    it('shows the default label in the closed select when no font family is set', () => {
        const mounted = renderComponent<StudioSectionProps>(TypographySection, {
            theme: {},
            onChange: () => {},
            expanded: true,
        });
        handle = mounted;

        const select = mounted.container.querySelector('.MuiSelect-select');
        expect(select?.textContent).toBe('theme_wizard_typography_font_family_default');
    });
});
