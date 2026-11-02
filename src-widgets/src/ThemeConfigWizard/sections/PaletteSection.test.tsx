/**
 * PaletteSection — the colour-mode toggle.
 *
 * @module ThemeConfigWizard/sections/PaletteSection.test
 * @remarks
 * The default mode (Automatisch, follow the vis-2 host) comes first: Automatisch · Hell · Dunkel.
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

import { act } from 'react';

import { renderComponent, type RenderComponentHandle } from '../../lib/testing/testHarness';
import type { StudioSectionProps } from '../../lib/theme/themeTypes';
import PaletteSection from './PaletteSection';

let handle: RenderComponentHandle<StudioSectionProps> | null = null;

afterEach(() => {
    handle?.unmount();
    handle = null;
});

/** The mode toggle's buttons in display order. */
const modeButtons = (container: HTMLElement): HTMLButtonElement[] =>
    Array.from(container.querySelectorAll<HTMLButtonElement>('.MuiToggleButtonGroup-root button'));

describe('PaletteSection colour mode', () => {
    it('orders the modes Automatisch · Hell · Dunkel', () => {
        handle = renderComponent<StudioSectionProps>(PaletteSection, { theme: {}, onChange: () => {}, expanded: true });
        expect(modeButtons(handle.container).map(button => button.textContent)).toEqual([
            'theme_wizard_palette_mode_auto',
            'theme_wizard_palette_mode_light',
            'theme_wizard_palette_mode_dark',
        ]);
    });

    it('still writes the picked mode (and clears it for Automatisch)', () => {
        const onChange = vi.fn();
        handle = renderComponent<StudioSectionProps>(PaletteSection, {
            theme: { palette: { mode: 'light' } },
            onChange,
            expanded: true,
        });
        const [auto, , dark] = modeButtons(handle.container);
        act(() => dark.click());
        expect(onChange).toHaveBeenLastCalledWith('palette.mode', 'dark');
        act(() => auto.click());
        expect(onChange).toHaveBeenLastCalledWith('palette.mode', undefined);
    });
});
