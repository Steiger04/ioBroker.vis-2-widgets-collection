/**
 * TypographySection — the closed font-family select and the corner radii.
 *
 * @module ThemeConfigWizard/sections/TypographySection.test
 * @remarks
 * Without `typography.fontFamily` the default entry (value `''`) is active; the closed select
 * must still show its label instead of rendering empty. The corner radius is one slider while
 * linked and a 2x2 grid of bounded number fields while unlinked. The fine-tuning weights carry
 * a help hint. Undo-related behaviour (one step per font change, state derived from the draft)
 * is pinned with the real session in ThemeStudioPanel.test.tsx.
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
import { CORNER_RADIUS_MAX } from '../../lib/theme/themeUtils';
import type { TypographySectionProps } from './TypographySection';
import TypographySection from './TypographySection';

let handle: RenderComponentHandle<TypographySectionProps> | null = null;

afterEach(() => {
    handle?.unmount();
    handle = null;
});

describe('TypographySection font family', () => {
    it('shows the default label in the closed select when no font family is set', () => {
        const mounted = renderComponent<TypographySectionProps>(TypographySection, {
            theme: {},
            onChange: () => {},
            onApply: () => {},
            expanded: true,
        });
        handle = mounted;

        const select = mounted.container.querySelector('.MuiSelect-select');
        expect(select?.textContent).toBe('theme_wizard_typography_font_family_default');
    });
});

describe('TypographySection corner radii', () => {
    /** Mounts the expanded section over `theme`; returns the container and the change spy. */
    const mount = (
        theme: TypographySectionProps['theme'],
    ): { container: HTMLElement; onChange: ReturnType<typeof vi.fn> } => {
        const onChange = vi.fn();
        handle = renderComponent<TypographySectionProps>(TypographySection, {
            theme,
            onChange,
            onApply: vi.fn(),
            expanded: true,
        });
        return { container: handle.container, onChange };
    };

    /** The corner link toggle (the button carrying the link / link-off icon). */
    const linkToggle = (container: HTMLElement): HTMLButtonElement => {
        const icon = container.querySelector('[data-testid="LinkIcon"], [data-testid="LinkOffIcon"]');
        const toggle = icon?.closest('button');
        if (!toggle) {
            throw new Error('corner link toggle not found');
        }
        return toggle;
    };

    /** The corner number inputs in DOM order, keyed by their caption. */
    const cornerInputs = (container: HTMLElement): Array<[string, HTMLInputElement]> =>
        Array.from(container.querySelectorAll<HTMLInputElement>('[data-corner-grid] input[type="number"]')).map(
            input => [input.closest('[data-corner]')?.getAttribute('data-corner') ?? '', input],
        );

    /** Types a value like a user would: React listens to the native input event. */
    const type = (input: HTMLInputElement, value: string): void => {
        act(() => {
            Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set?.call(input, value);
            input.dispatchEvent(new Event('input', { bubbles: true }));
        });
    };

    const rangeSliders = (container: HTMLElement): number => container.querySelectorAll('input[type="range"]').length;

    it('drives all four corners with one slider while linked', () => {
        const { container } = mount({});
        expect(container.querySelector('[data-corner-grid]')).toBeNull();
        // Base font size + the linked radius.
        expect(rangeSliders(container)).toBe(2);
    });

    it('lays the unlinked corners out as a 2x2 grid of number fields, without sliders', () => {
        const { container } = mount({ corners: { topLeft: 1, topRight: 2, bottomRight: 3, bottomLeft: 4 } });
        // Non-uniform radii open unlinked.
        expect(cornerInputs(container).map(([corner, input]) => [corner, input.value])).toEqual([
            ['topLeft', '1'],
            ['topRight', '2'],
            ['bottomLeft', '4'],
            ['bottomRight', '3'],
        ]);
        // Only the base font size remains a slider.
        expect(rangeSliders(container)).toBe(1);
    });

    it('writes the typed radius to its own corner path', () => {
        const { container, onChange } = mount({});
        act(() => linkToggle(container).click());
        const inputs = new Map(cornerInputs(container));
        type(inputs.get('bottomLeft')!, '12');
        expect(onChange).toHaveBeenLastCalledWith('corners.bottomLeft', 12);
        type(inputs.get('topRight')!, '7.5');
        expect(onChange).toHaveBeenLastCalledWith('corners.topRight', 7.5);
    });

    it('keeps a typed radius within 0 … CORNER_RADIUS_MAX', () => {
        const { container, onChange } = mount({});
        act(() => linkToggle(container).click());
        const inputs = new Map(cornerInputs(container));
        type(inputs.get('topLeft')!, String(CORNER_RADIUS_MAX + 50));
        expect(onChange).toHaveBeenLastCalledWith('corners.topLeft', CORNER_RADIUS_MAX);
        type(inputs.get('topLeft')!, '-3');
        expect(onChange).toHaveBeenLastCalledWith('corners.topLeft', 0);
    });

    it('labels the link toggle by what a click does and exposes its state as pressed', () => {
        const { container } = mount({});
        const toggle = linkToggle(container);
        expect(toggle.getAttribute('aria-pressed')).toBe('true');
        expect(toggle.getAttribute('aria-label')).toBe('theme_studio_corners_unlink');
        // A MUI tooltip, not the native title.
        expect(toggle.hasAttribute('title')).toBe(false);

        act(() => toggle.click());
        const unlinked = linkToggle(container);
        expect(unlinked.getAttribute('aria-pressed')).toBe('false');
        expect(unlinked.getAttribute('aria-label')).toBe('theme_studio_corners_link');
    });
});

describe('TypographySection fine-tuning', () => {
    /** Mounts the expanded section and opens the fine-tuning disclosure. */
    const openFineTuning = (): HTMLElement => {
        handle = renderComponent<TypographySectionProps>(TypographySection, {
            theme: {},
            onChange: () => {},
            onApply: () => {},
            expanded: true,
        });
        const disclosure = Array.from(handle.container.querySelectorAll('button')).find(
            element => element.textContent === 'theme_studio_feintuning',
        );
        act(() => disclosure?.click());
        return handle.container;
    };

    it('shows the weights hint as an info box', () => {
        const container = openFineTuning();
        const hint = Array.from(container.querySelectorAll('[data-info-box]')).map(box => box.textContent);
        expect(hint).toEqual(['theme_studio_feintuning_hint']);
    });

    it('explains the weight roles with a help hint at the weights group', () => {
        const container = openFineTuning();
        const help = container.querySelector('button[aria-label="theme_studio_help_weights"]');
        expect(help).not.toBeNull();
        // The hint sits beside the weight selects, not elsewhere in the section.
        expect(help?.closest('[data-weights-group]')?.textContent).toContain('theme_wizard_typography_weight_light');
    });
});
