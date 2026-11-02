/**
 * ColorPickerField — the optional hex input next to the swatch.
 *
 * @module components/ColorPickerField.test
 * @remarks
 * The field is shared (theme studio, JsonTable editors): the hex input is opt-in and off by
 * default. When on, it shows the colour value as text — selectable, so it can be copied — and
 * commits an edited value on Enter or blur; Escape restores the value. The input is no part of
 * the swatch's click target: clicking into it must not open the picker popover.
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

import { act, type ComponentProps } from 'react';

import { renderComponent, type RenderComponentHandle } from '../lib/testing/testHarness';
import ColorPickerField from './ColorPickerField';

type Props = ComponentProps<typeof ColorPickerField>;

let handle: RenderComponentHandle<Props> | null = null;

afterEach(() => {
    handle?.unmount();
    handle = null;
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
