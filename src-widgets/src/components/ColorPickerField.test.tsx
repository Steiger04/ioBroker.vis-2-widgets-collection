/**
 * ColorPickerField — the optional hex input next to the swatch.
 *
 * @module components/ColorPickerField.test
 * @remarks
 * The field is shared (theme studio, JsonTable editors): the hex input is opt-in and off by
 * default. When on, it shows the colour value as text — selectable, so it can be copied — and
 * commits an edited value on Enter or blur; Escape restores the value. The input is no part of
 * the swatch's click target: clicking into it must not open the picker popover.
 *
 * A click on the row opens the Farbwähler (`colorPicker/CollectionColorPicker`) with the label as
 * title; its picks reach `onChange`. The theme studio (with `presets`) keeps it solid and hands
 * the presets on, the JsonTable editors (without) keep gradients and get the Collection theme
 * colours through the socket. The reset icon is the trash can.
 * The Farbwähler itself (debounce, popover following its content) is tested over its own seam
 * (`colorPicker/CollectionColorPicker.test`); here the library fake shows what reaches it.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

vi.hoisted(() => {
    // Generic extends window.visRxWidget (undefined outside the vis-2 host) — the repo's stub pattern.
    (window as unknown as { visRxWidget: unknown }).visRxWidget = class {
        static t(key: string): string {
            return key;
        }
    };
});

// happy-dom has no canvas: the picker library is replaced by the shared fake.
vi.mock(
    'react-best-gradient-color-picker',
    async () => (await import('./colorPicker/testing/fakeColorPickerLibrary')).fakeColorPickerLibrary,
);

import type { Connection } from '@iobroker/adapter-react-v5';
import { act, type ComponentProps } from 'react';

import { renderComponent, type RenderComponentHandle } from '../lib/testing/testHarness';
import { lastLibraryProps, resetFakeLibrary } from './colorPicker/testing/fakeColorPickerLibrary';
import ColorPickerField from './ColorPickerField';

type Props = ComponentProps<typeof ColorPickerField>;

let handle: RenderComponentHandle<Props> | null = null;

beforeEach(() => {
    resetFakeLibrary();
});

afterEach(() => {
    handle?.unmount();
    handle = null;
    vi.useRealTimers();
});

/** Mounts the field; returns its container and the change spy. */
const mount = (props: Partial<Props> = {}): { container: HTMLElement; onChange: ReturnType<typeof vi.fn> } => {
    const onChange = vi.fn();
    handle = renderComponent<Props>(ColorPickerField, { label: 'Primary', value: '#112233', onChange, ...props });
    return { container: handle.container, onChange };
};

/** The hex text input (throws when the field renders none). */
const hexInput = (container: HTMLElement): HTMLInputElement => {
    const input = container.querySelector<HTMLInputElement>('input[data-hex-input]');
    if (!input) {
        throw new Error('no hex input rendered');
    }
    return input;
};

/** Types like a user would: React listens to the native input event. */
const type = (input: HTMLInputElement, value: string): void => {
    act(() => {
        Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set?.call(input, value);
        input.dispatchEvent(new Event('input', { bubbles: true }));
    });
};

const press = (input: HTMLInputElement, key: string): void => {
    act(() => {
        input.dispatchEvent(new KeyboardEvent('keydown', { key, bubbles: true }));
    });
};

const popoverOpen = (): boolean => document.body.querySelector('.MuiPopover-root') !== null;

describe('ColorPickerField hex input', () => {
    it('is off by default', () => {
        const { container } = mount();
        expect(container.querySelector('input')).toBeNull();
    });

    it('shows the colour value as monospace text', () => {
        const { container } = mount({ hexInput: true });
        const input = hexInput(container);
        expect(input.value).toBe('#112233');
        expect(getComputedStyle(input).fontFamily).toContain('monospace');
    });

    it('commits an edited value on Enter', () => {
        const { container, onChange } = mount({ hexInput: true });
        const input = hexInput(container);
        type(input, '#abcdef');
        expect(onChange).not.toHaveBeenCalled();
        press(input, 'Enter');
        expect(onChange).toHaveBeenCalledExactlyOnceWith('#abcdef');
    });

    it('commits an edited value on blur, trimmed', () => {
        const { container, onChange } = mount({ hexInput: true });
        const input = hexInput(container);
        act(() => input.focus());
        type(input, '  #abcdef ');
        act(() => input.blur());
        expect(onChange).toHaveBeenCalledExactlyOnceWith('#abcdef');
    });

    it('passes an invalid value on unchanged — the field validation judges it', () => {
        const { container, onChange } = mount({ hexInput: true });
        const input = hexInput(container);
        type(input, 'nope');
        press(input, 'Enter');
        expect(onChange).toHaveBeenCalledExactlyOnceWith('nope');
    });

    it('does not commit an unchanged value', () => {
        const { container, onChange } = mount({ hexInput: true });
        const input = hexInput(container);
        act(() => input.focus());
        act(() => input.blur());
        press(input, 'Enter');
        expect(onChange).not.toHaveBeenCalled();
    });

    it('restores the value on Escape without closing the surrounding panel', () => {
        const { container, onChange } = mount({ hexInput: true });
        const onWindowKey = vi.fn();
        window.addEventListener('keydown', onWindowKey);
        try {
            const input = hexInput(container);
            type(input, '#abcdef');
            press(input, 'Escape');
            expect(input.value).toBe('#112233');
            expect(onWindowKey).not.toHaveBeenCalled();
            act(() => input.blur());
            expect(onChange).not.toHaveBeenCalled();
        } finally {
            window.removeEventListener('keydown', onWindowKey);
        }
    });

    it('follows a new value from outside', () => {
        const { container } = mount({ hexInput: true });
        handle?.rerender({ label: 'Primary', value: '#445566', onChange: vi.fn(), hexInput: true });
        expect(hexInput(container).value).toBe('#445566');
    });

    it('does not open the picker when clicked into', () => {
        const { container } = mount({ hexInput: true });
        act(() => hexInput(container).click());
        expect(popoverOpen()).toBe(false);
        // The swatch row itself still opens it.
        act(() => container.querySelector<HTMLElement>('[data-swatch-color]')?.click());
        expect(popoverOpen()).toBe(true);
    });
});

describe('ColorPickerField swatch and error', () => {
    it('links the error to the hex input and marks it invalid', () => {
        const { container } = mount({ hexInput: true, error: 'Must be a colour' });
        const input = hexInput(container);
        expect(input.getAttribute('aria-invalid')).toBe('true');
        const describedBy = input.getAttribute('aria-describedby');
        expect(describedBy && document.getElementById(describedBy)?.textContent).toBe('Must be a colour');
    });

    it('describes nothing while valid', () => {
        const { container } = mount({ hexInput: true });
        const input = hexInput(container);
        expect(input.getAttribute('aria-describedby')).toBeNull();
        expect(input.getAttribute('aria-invalid')).not.toBe('true');
    });

    it('paints the swatch value instead of the value, until the user edits', () => {
        const { container } = mount({ hexInput: true, value: 'red', swatchValue: '#0000ff' });
        const swatch = (): string | undefined =>
            container.querySelector<HTMLElement>('[data-swatch-color]')?.dataset.swatchColor;
        expect(hexInput(container).value).toBe('red');
        expect(swatch()).toBe('#0000ff');
        const input = hexInput(container);
        type(input, '#00ff00');
        press(input, 'Enter');
        expect(swatch()).toBe('#00ff00');
    });
});

describe('ColorPickerField Farbwähler', () => {
    /** The open Farbwähler's paper (throws when closed). */
    const paper = (): HTMLElement => {
        const el = document.body.querySelector<HTMLElement>('.MuiPopover-paper');
        if (!el) {
            throw new Error('the Farbwähler is not open');
        }
        return el;
    };

    const openPicker = (container: HTMLElement): void => {
        act(() => container.querySelector<HTMLElement>('[data-swatch-color]')?.click());
    };

    /** Preset colours the library shows. */
    const shownPresets = (): string[] =>
        Array.from(paper().querySelectorAll<HTMLElement>('button[data-preset]')).map(b => b.dataset.preset ?? '');

    it('opens on a click on the row, with the label as title', () => {
        const { container } = mount();
        act(() => container.querySelector<HTMLElement>('p')?.click());
        expect(paper().querySelector('[data-picker-title]')?.textContent).toBe('Primary');
        expect(paper().querySelector('[data-fake-library]')?.getAttribute('data-value')).toBe('#112233');
    });

    it('commits a pick to onChange and shows it in the swatch', () => {
        vi.useFakeTimers();
        const { container, onChange } = mount();
        openPicker(container);
        act(() => paper().querySelector<HTMLElement>('button[data-pick="translucent"]')?.click());
        act(() => {
            vi.advanceTimersByTime(150);
        });
        expect(onChange).toHaveBeenCalledExactlyOnceWith('#0080ff66');
        expect(container.querySelector<HTMLElement>('[data-swatch-color]')?.dataset.swatchColor).toBe('#0080ff66');
    });

    it('keeps gradients without presets (JsonTable editors)', () => {
        const { container } = mount();
        openPicker(container);
        expect(lastLibraryProps().hideColorTypeBtns).toBe(false);
        expect(lastLibraryProps().hideGradientControls).toBe(false);
    });

    it('offers the Collection theme colours through the socket without presets', async () => {
        const socket = {
            getState: vi.fn(() =>
                Promise.resolve({ val: JSON.stringify({ palette: { primary: { main: '#123456' } } }) }),
            ),
            subscribeState: vi.fn(() => Promise.resolve()),
            unsubscribeState: vi.fn(),
        } as unknown as Connection;
        const { container } = mount({ socket });
        openPicker(container);
        await act(() => new Promise<void>(resolve => setTimeout(resolve, 0)));
        expect(shownPresets()[0]).toBe('#123456');
    });

    it('stays solid and shows the passed presets with presets (theme studio)', () => {
        const { container } = mount({ presets: ['#ff0000', '#00ff00'] });
        openPicker(container);
        expect(lastLibraryProps().hideColorTypeBtns).toBe(true);
        expect(lastLibraryProps().hideGradientControls).toBe(true);
        expect(shownPresets()).toEqual(['#ff0000', '#00ff00']);
    });
});

describe('ColorPickerField reset', () => {
    const resetButton = (container: HTMLElement): HTMLButtonElement | null =>
        container.querySelector<HTMLButtonElement>('button[title="theme_studio_reset_color"]');

    it('shows a trash can only while overridden', () => {
        expect(resetButton(mount().container)).toBeNull();
        handle?.unmount();
        const button = resetButton(mount({ overridden: true }).container);
        expect(button?.querySelector('[data-testid="DeleteIcon"]')).not.toBeNull();
    });

    it('resets without opening the Farbwähler', () => {
        const { container, onChange } = mount({ overridden: true });
        act(() => resetButton(container)?.click());
        expect(onChange).toHaveBeenCalledExactlyOnceWith('');
        expect(popoverOpen()).toBe(false);
    });
});
