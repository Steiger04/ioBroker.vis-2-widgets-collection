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
 * The popover follows its content (ADR-0102): when the content grows after opening (Color Guide,
 * Advanced sliders, gradient stops) it is repositioned at once so it stays fully visible; when the
 * content shrinks it stays put. happy-dom has no layout, so the tests stub the anchor's rect, the
 * paper's size and the ResizeObserver, and read the position MUI writes onto the paper.
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

// happy-dom has no canvas: the picker library is replaced by an inert fake.
vi.mock('react-best-gradient-color-picker', () => ({ default: () => null }));

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

/** ResizeObserver stub: records the observed elements so a test can report a new content size. */
const observers: { callback: ResizeObserverCallback; targets: Set<Element> }[] = [];

class StubResizeObserver {
    private readonly entry: { callback: ResizeObserverCallback; targets: Set<Element> };

    constructor(callback: ResizeObserverCallback) {
        this.entry = { callback, targets: new Set() };
        observers.push(this.entry);
    }

    observe(target: Element): void {
        this.entry.targets.add(target);
    }

    unobserve(target: Element): void {
        this.entry.targets.delete(target);
    }

    disconnect(): void {
        this.entry.targets.clear();
    }
}

/** Layout the stubs report: the anchor's rect and the popover paper's height. */
const layout = { anchorTop: 100, anchorHeight: 20, paperHeight: 200 };

/** The content now measures `height`: the paper grows with it, every observer is told. */
const resizeContent = (height: number): void => {
    layout.paperHeight = height;
    act(() => {
        for (const { callback, targets } of observers) {
            for (const target of targets) {
                callback(
                    [{ target, contentRect: { width: 220, height } } as unknown as ResizeObserverEntry],
                    {} as ResizeObserver,
                );
            }
        }
    });
};

/** The top MUI wrote onto the popover paper. */
const paperTop = (): string | undefined => document.body.querySelector<HTMLElement>('.MuiPopover-paper')?.style.top;

/** Opens the picker by clicking the row. */
const openPicker = (container: HTMLElement): void => {
    act(() => container.querySelector<HTMLElement>('[data-swatch-color]')?.click());
};

describe('ColorPickerField popover follows its content', () => {
    beforeEach(() => {
        observers.length = 0;
        layout.anchorTop = 100;
        layout.paperHeight = 200;
        vi.stubGlobal('ResizeObserver', StubResizeObserver);
        vi.stubGlobal('innerHeight', 800);
        vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockImplementation(
            () =>
                ({
                    top: layout.anchorTop,
                    bottom: layout.anchorTop + layout.anchorHeight,
                    left: 100,
                    right: 300,
                    width: 200,
                    height: layout.anchorHeight,
                    x: 100,
                    y: layout.anchorTop,
                }) as DOMRect,
        );
        vi.spyOn(HTMLElement.prototype, 'offsetHeight', 'get').mockImplementation(function (this: HTMLElement) {
            return this.classList.contains('MuiPopover-paper') ? layout.paperHeight : 0;
        });
    });

    afterEach(() => {
        vi.restoreAllMocks();
        vi.unstubAllGlobals();
    });

    it('opens below the anchor when there is more room below', () => {
        const { container } = mount();
        openPicker(container);
        // Anchor bottom 120 — the paper hangs from it.
        expect(paperTop()).toBe('120px');
    });

    it('opens above the anchor when there is more room above', () => {
        layout.anchorTop = 600;
        const { container } = mount();
        openPicker(container);
        // Anchor top 600 minus the paper height 200.
        expect(paperTop()).toBe('400px');
    });

    it('moves at once when the content grows after opening', () => {
        const { container } = mount();
        openPicker(container);
        resizeContent(200);
        expect(paperTop()).toBe('120px');
        // 120 + 750 would end below the window (800 - 16 margin): MUI shifts it up to 784 - 750.
        resizeContent(750);
        expect(paperTop()).toBe('34px');
    });

    it('stays put when the content shrinks', () => {
        layout.paperHeight = 750;
        const { container } = mount();
        openPicker(container);
        resizeContent(750);
        expect(paperTop()).toBe('34px');
        resizeContent(200);
        expect(paperTop()).toBe('34px');
    });
});
