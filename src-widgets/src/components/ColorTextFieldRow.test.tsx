/**
 * ColorTextFieldRow — the text-field row of colour fields (text field · trash · swatch, ADR-0102).
 *
 * @module components/ColorTextFieldRow.test
 * @remarks
 * Seam 3 (spec "Testing Decisions"): props in, DOM and `onChange` out. Typed text runs through the
 * Regeln für Farbeingaben — the browser's check is `CSS.supports('color', …)`, which happy-dom
 * answers `true` for anything, so the tests stub it with a small browser-like list. The swatch
 * opens the real Farbwähler; its library is replaced by the test fake (happy-dom has no canvas).
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

// happy-dom has no canvas: the library is replaced by the Farbwähler's test fake.
vi.mock(
    'react-best-gradient-color-picker',
    async () => (await import('./colorPicker/testing/fakeColorPickerLibrary')).fakeColorPickerLibrary,
);

import { act, type ComponentProps } from 'react';
import type { Connection } from '@iobroker/adapter-react-v5';

import { renderComponent, type RenderComponentHandle } from '../lib/testing/testHarness';
import { lastLibraryProps, resetFakeLibrary } from './colorPicker/testing/fakeColorPickerLibrary';
import ColorTextFieldRow from './ColorTextFieldRow';

type Props = ComponentProps<typeof ColorTextFieldRow>;

let handle: RenderComponentHandle<Props> | null = null;
let current: Props | null = null;

/** Re-renders the mounted row with some props changed. */
const rerender = (changed: Partial<Props>): void => {
    current = { ...(current as Props), ...changed };
    act(() => handle?.rerender(current as Props));
};

beforeEach(() => {
    resetFakeLibrary();
    // Browser-like `CSS.supports('color', …)` for the cases used here.
    vi.stubGlobal('CSS', {
        supports: (_property: string, value?: string): boolean =>
            /^(#[0-9a-f]{3,8}|rgba?\(.*\)|hsla?\(.*\)|var\(--.*\)|transparent|red)$/i.test(value ?? ''),
    });
});

afterEach(() => {
    handle?.unmount();
    handle = null;
    vi.useRealTimers();
    vi.unstubAllGlobals();
});

interface Mounted {
    input: HTMLInputElement;
    container: HTMLElement;
    onChange: ReturnType<typeof vi.fn>;
    swatch: () => HTMLElement;
    trash: () => HTMLElement | null;
}

/** Mounts one row; returns its text input, the change spy and the swatch / trash lookups. */
const mount = (props: Partial<Props> = {}): Mounted => {
    const onChange = vi.fn();
    current = {
        value: null,
        onChange,
        effectiveColor: '',
        placeholder: 'inherit',
        allowGradient: true,
        ...props,
    };
    handle = renderComponent<Props>(ColorTextFieldRow, current);
    const { container } = handle;
    const input = container.querySelector<HTMLInputElement>('input');
    if (!input) {
        throw new Error('no text input rendered');
    }
    return {
        input,
        container,
        onChange,
        swatch: (): HTMLElement => {
            const swatch = container.querySelector<HTMLElement>('[data-color-swatch]');
            if (!swatch) {
                throw new Error('no swatch rendered');
            }
            return swatch;
        },
        trash: (): HTMLElement | null => container.querySelector<HTMLElement>('button[title="clear_color"]'),
    };
};

/** Types like a user would: React listens to the native input event. */
const type = (input: HTMLInputElement, value: string): void => {
    act(() => {
        Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set?.call(input, value);
        input.dispatchEvent(new Event('input', { bubbles: true }));
    });
};

const isMarked = (input: HTMLInputElement): boolean => input.getAttribute('aria-invalid') === 'true';

/** The swatch's inner colour box. */
const swatchColor = (swatch: HTMLElement): string =>
    getComputedStyle(swatch.firstElementChild as HTMLElement).background ||
    (swatch.firstElementChild as HTMLElement).style.background;

/** The Farbwähler's popover paper, or null while closed. */
const paper = (): HTMLElement | null => document.body.querySelector<HTMLElement>('.MuiPopover-paper');

describe('ColorTextFieldRow typing runs the Regeln für Farbeingaben', () => {
    it.each(['red', 'hsl(120, 50%, 50%)', 'transparent', 'var(--vis2c-palette-primary-main)', '#12345678'])(
        'stores %s as typed',
        text => {
            const { input, onChange } = mount({ allowGradient: false });
            type(input, text);
            expect(onChange).toHaveBeenLastCalledWith(text);
            expect(isMarked(input)).toBe(false);
        },
    );

    it('marks an invalid colour with its message and stores nothing', () => {
        const { input, container, onChange } = mount();
        type(input, 'notacolor');
        expect(onChange).not.toHaveBeenCalled();
        expect(isMarked(input)).toBe(true);
        expect(container.textContent).toContain('color_invalid');
    });

    it('stores a typed gradient unchanged where the row allows it', () => {
        const { input, onChange } = mount({ allowGradient: true });
        type(input, 'linear-gradient(90deg, #ff0000 0%, #0000ff 100%)');
        expect(onChange).toHaveBeenLastCalledWith('linear-gradient(90deg, #ff0000 0%, #0000ff 100%)');
    });

    it('shows a gradient typed into a solid-only row as its own error', () => {
        const { input, container, onChange } = mount({ allowGradient: false });
        type(input, 'linear-gradient(90deg, #ff0000 0%, #0000ff 100%)');
        expect(onChange).not.toHaveBeenCalled();
        expect(isMarked(input)).toBe(true);
        expect(container.textContent).toContain('color_gradient_not_allowed');
        expect(container.textContent).not.toContain('color_invalid');
    });

    it('stores null for an emptied field and clears the mark', () => {
        const { input, onChange } = mount({ value: '#123456' });
        type(input, 'nope');
        expect(isMarked(input)).toBe(true);
        type(input, '   ');
        expect(onChange).toHaveBeenLastCalledWith(null);
        expect(isMarked(input)).toBe(false);
    });

    it('marks the swatch while the text is invalid', () => {
        const { input, swatch } = mount({ effectiveColor: '#00ff00' });
        type(input, 'notacolor');
        expect(swatch().getAttribute('data-invalid')).toBe('true');
    });
});

describe('ColorTextFieldRow trash', () => {
    it('removes the override: null, the text field empties', () => {
        const { input, onChange, trash } = mount({ value: 'red' });
        expect(input.value).toBe('red');
        act(() => trash()?.click());
        expect(onChange).toHaveBeenCalledExactlyOnceWith(null);
        expect(input.value).toBe('');
    });

    it('shows only while a value is stored', () => {
        expect(mount({ value: '' }).trash()).toBeNull();
    });
});

describe('ColorTextFieldRow placeholder', () => {
    it('shows "erbt" in an empty field in the inherit mode', () => {
        const { input } = mount({ placeholder: 'inherit' });
        expect(input.placeholder).toBe('color_inherit');
    });

    it('shows no placeholder in the none mode', () => {
        const { input } = mount({ placeholder: 'none' });
        expect(input.placeholder).toBe('');
    });

    it('shows no placeholder once a value is stored', () => {
        const { input } = mount({ placeholder: 'inherit', value: '#123456' });
        expect(input.placeholder).toBe('');
    });
});

describe('ColorTextFieldRow swatch', () => {
    it('shows the effective colour, not the stored text', () => {
        const { swatch } = mount({ value: null, effectiveColor: 'rgb(1, 2, 3)' });
        expect(swatchColor(swatch())).toContain('rgb(1, 2, 3)');
    });

    it('follows a new effective colour', () => {
        const { swatch } = mount({ effectiveColor: '#111111' });
        rerender({ effectiveColor: '#222222' });
        expect(swatchColor(swatch()).toLowerCase()).toMatch(/#222222|rgb\(34, 34, 34\)/);
    });

    it('opens the Farbwähler with the title on click', () => {
        const { swatch } = mount({ title: 'Background', effectiveColor: '#00ff00' });
        expect(paper()).toBeNull();
        act(() => swatch().click());
        expect(paper()?.querySelector('[data-picker-title]')?.textContent).toBe('Background');
    });

    it('starts the Farbwähler from the stored value, else from the effective colour', () => {
        const stored = mount({ value: '#123456', effectiveColor: '#00ff00' });
        act(() => stored.swatch().click());
        expect(lastLibraryProps().value).toBe('#123456');
        handle?.unmount();
        handle = null;
        resetFakeLibrary();

        const inherited = mount({ value: null, effectiveColor: '#00ff00' });
        act(() => inherited.swatch().click());
        expect(lastLibraryProps().value).toBe('#00ff00');
    });

    it('offers Solid/Gradient only where the row allows gradients', () => {
        const solidOnly = mount({ allowGradient: false });
        act(() => solidOnly.swatch().click());
        expect(lastLibraryProps().hideColorTypeBtns).toBe(true);
        handle?.unmount();
        handle = null;

        const gradient = mount({ allowGradient: true });
        act(() => gradient.swatch().click());
        expect(lastLibraryProps().hideColorTypeBtns).not.toBe(true);
    });

    it('stores a pick normalized and shows it in the text field', () => {
        vi.useFakeTimers();
        const { input, swatch, onChange } = mount({ allowGradient: false });
        act(() => swatch().click());
        act(() => paper()?.querySelector<HTMLElement>('button[data-pick="translucent"]')?.click());
        act(() => {
            vi.advanceTimersByTime(150);
        });
        expect(onChange).toHaveBeenCalledExactlyOnceWith('#0080ff66');
        expect(input.value).toBe('#0080ff66');
    });
});

describe('ColorTextFieldRow theme presets', () => {
    it('hands the socket to the Farbwähler, which reads the Collection theme only once open', async () => {
        const getState = vi.fn(() =>
            Promise.resolve({ val: JSON.stringify({ palette: { primary: { main: '#123456' } } }) } as ioBroker.State),
        );
        const socket = {
            getState,
            subscribeState: vi.fn(() => Promise.resolve()),
            unsubscribeState: vi.fn(),
        } as unknown as Connection;
        const { swatch } = mount({ socket });
        expect(getState).not.toHaveBeenCalled();

        act(() => swatch().click());
        await act(async () => {
            await Promise.resolve();
        });

        expect(getState).toHaveBeenCalled();
        const presets = Array.from(document.body.querySelectorAll<HTMLElement>('button[data-preset]')).map(
            el => el.dataset.preset,
        );
        expect(presets[0]).toBe('#123456');
    });

    it('shows no preset row without a socket', () => {
        const { swatch } = mount();
        act(() => swatch().click());
        expect(lastLibraryProps().hidePresets).toBe(true);
    });
});

describe('ColorTextFieldRow external value', () => {
    it('takes a value changed from outside (undo, preset) and drops a pending error', () => {
        const { input } = mount({ value: '#111111' });
        type(input, 'nope');
        expect(isMarked(input)).toBe(true);
        rerender({ value: '#222222' });
        expect(input.value).toBe('#222222');
        expect(isMarked(input)).toBe(false);
    });
});

describe('ColorTextFieldRow disabled', () => {
    it('is inert as a whole — text field, trash and swatch — and the swatch does not open the Farbwähler', () => {
        const { input, container, swatch, trash } = mount({ disabled: true, value: '#123456' });
        const inert = container.querySelector('[inert]');
        expect(inert?.getAttribute('aria-disabled')).toBe('true');
        expect(inert?.contains(input)).toBe(true);
        expect(inert?.contains(trash())).toBe(true);
        expect(inert?.contains(swatch())).toBe(true);
        act(() => swatch().click());
        expect(paper()).toBeNull();
    });

    it('is not inert while enabled', () => {
        expect(mount().container.querySelector('[inert]')).toBeNull();
    });

    it('still shows the value and the swatch colour', () => {
        const { input, swatch } = mount({ disabled: true, value: '#123456', effectiveColor: '#123456' });
        expect(input.value).toBe('#123456');
        expect(swatchColor(swatch()).toLowerCase()).toMatch(/#123456|rgb\(18, 52, 86\)/);
    });
});

describe('ColorTextFieldRow variants', () => {
    it('renders the standard (underline) text field by default and the outlined one on request', () => {
        expect(mount().container.querySelector('.MuiInput-underline')).not.toBeNull();
        handle?.unmount();
        handle = null;
        expect(mount({ variant: 'outlined' }).container.querySelector('.MuiOutlinedInput-root')).not.toBeNull();
    });
});
