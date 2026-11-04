/**
 * CollectionGradientColorPicker — the attribute picker's text field runs the Regeln für
 * Farbeingaben (ADR-0102).
 *
 * @module components/CollectionGradientColorPicker.test
 * @remarks
 * Typed text: everything the browser accepts as CSS colour is stored as typed; a gradient only
 * where the field allows it — in a `noGradient` field it is an error with its own message, no
 * longer reduced to its midpoint colour; invalid input is marked and not stored; empty → null.
 * The browser's check is `CSS.supports('color', …)` — happy-dom answers `true` for anything,
 * so the tests stub it with a small browser-like list.
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
vi.mock('../hooks/useCollectionTheme', async () => {
    const { createTheme } = await import('@mui/material');
    const theme = createTheme();
    return { default: (): unknown => theme, useCollectionTheme: (): unknown => theme };
});

import { createTheme } from '@mui/material';
import { act, type ComponentProps } from 'react';

import type { RxWidgetInfoCustomComponentProperties, WidgetData } from '@iobroker/types-vis-2';
import { renderComponent, type RenderComponentHandle } from '../lib/testing/testHarness';
import { lastLibraryProps, resetFakeLibrary } from './colorPicker/testing/fakeColorPickerLibrary';
import type { ExtendedField } from '../types/field-definitions/extended-field';
import CollectionGradientColorPicker from './CollectionGradientColorPicker';

type Props = ComponentProps<typeof CollectionGradientColorPicker>;

const hostTheme = Object.assign(createTheme(), { name: 'light' });
const editorProps = {
    context: { theme: hostTheme, socket: {}, views: {} },
    selectedView: 'v',
    selectedWidgets: [],
} as unknown as RxWidgetInfoCustomComponentProperties;

let handle: RenderComponentHandle<Props> | null = null;

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

/** Mounts the picker for one colour field; returns its text input and the change spy. */
const mount = (
    field: Partial<ExtendedField> = {},
    data: WidgetData = {} as WidgetData,
): { input: HTMLInputElement; container: HTMLElement; onDataChange: ReturnType<typeof vi.fn> } => {
    const onDataChange = vi.fn();
    handle = renderComponent<Props>(CollectionGradientColorPicker, {
        field: { name: 'bg', type: 'custom', ...field } as ExtendedField,
        data,
        onDataChange,
        props: editorProps,
    });
    const input = handle.container.querySelector<HTMLInputElement>('input');
    if (!input) {
        throw new Error('no text input rendered');
    }
    return { input, container: handle.container, onDataChange };
};

/** Types like a user would: React listens to the native input event. */
const type = (input: HTMLInputElement, value: string): void => {
    act(() => {
        Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set?.call(input, value);
        input.dispatchEvent(new Event('input', { bubbles: true }));
    });
};

const isMarked = (input: HTMLInputElement): boolean => input.getAttribute('aria-invalid') === 'true';

describe('CollectionGradientColorPicker text field', () => {
    it.each(['red', 'hsl(120, 50%, 50%)', 'transparent', 'var(--vis2c-palette-primary-main)'])(
        'stores %s as typed',
        text => {
            const { input, onDataChange } = mount({ noGradient: true });
            type(input, text);
            expect(onDataChange).toHaveBeenLastCalledWith({ bg: text });
            expect(isMarked(input)).toBe(false);
        },
    );

    it('marks an invalid colour and stores nothing', () => {
        const { input, container, onDataChange } = mount();
        type(input, 'notacolor');
        expect(onDataChange).not.toHaveBeenCalled();
        expect(isMarked(input)).toBe(true);
        expect(container.textContent).toContain('color_invalid');
    });

    it('stores a typed gradient where the field allows it, unchanged', () => {
        const { input, onDataChange } = mount();
        type(input, 'linear-gradient(90deg, #ff0000 0%, #0000ff 100%)');
        expect(onDataChange).toHaveBeenLastCalledWith({ bg: 'linear-gradient(90deg, #ff0000 0%, #0000ff 100%)' });
    });

    it('shows a gradient typed into a noGradient field as its own error instead of storing its midpoint', () => {
        const { input, container, onDataChange } = mount({ noGradient: true });
        type(input, 'linear-gradient(90deg, #ff0000 0%, #0000ff 100%)');
        expect(onDataChange).not.toHaveBeenCalled();
        expect(isMarked(input)).toBe(true);
        expect(container.textContent).toContain('color_gradient_not_allowed');
        expect(container.textContent).not.toContain('color_invalid');
    });

    it('stores null for an emptied field and clears the mark', () => {
        const { input, onDataChange } = mount({}, { bg: '#123456' } as WidgetData);
        type(input, 'nope');
        expect(isMarked(input)).toBe(true);
        type(input, '   ');
        expect(onDataChange).toHaveBeenLastCalledWith({ bg: null });
        expect(isMarked(input)).toBe(false);
    });
});

/** Opens the Farbwähler by clicking the swatch; returns its popover paper. */
const openPicker = (container: HTMLElement): HTMLElement => {
    act(() => container.querySelector<HTMLElement>('[title="choose_color"]')?.click());
    const paper = document.body.querySelector<HTMLElement>('.MuiPopover-paper');
    if (!paper) {
        throw new Error('the Farbwähler did not open');
    }
    return paper;
};

describe('CollectionGradientColorPicker opens the Farbwähler', () => {
    it('with the field label as title and a close ×', () => {
        vi.useFakeTimers();
        const { container } = mount({ label: 'bg_color' });
        const paper = openPicker(container);
        expect(paper.querySelector('[data-picker-title]')?.textContent).toBe('bg_color');
        const close = paper.querySelector<HTMLElement>('button[aria-label="color_picker_close"]');
        expect(close).not.toBeNull();
        act(() => close?.click());
        // Closed once the exit transition has run.
        act(() => {
            vi.advanceTimersByTime(1000);
        });
        expect(document.body.querySelector('.MuiPopover-paper')).toBeNull();
    });

    it('keeps Solid/Gradient for a gradient field', () => {
        const { container } = mount();
        openPicker(container);
        expect(lastLibraryProps().hideColorTypeBtns).not.toBe(true);
    });

    it('hides Solid/Gradient for a noGradient field', () => {
        const { container } = mount({ noGradient: true });
        openPicker(container);
        expect(lastLibraryProps().hideColorTypeBtns).toBe(true);
    });

    it('stores a pick normalized and shows it in the text field', () => {
        vi.useFakeTimers();
        const { input, container, onDataChange } = mount({ noGradient: true });
        const paper = openPicker(container);
        act(() => paper.querySelector<HTMLElement>('button[data-pick="translucent"]')?.click());
        act(() => {
            vi.advanceTimersByTime(150);
        });
        expect(onDataChange).toHaveBeenCalledExactlyOnceWith({ bg: '#0080ff66' });
        expect(input.value).toBe('#0080ff66');
    });

    it('stores a picked gradient unchanged', () => {
        const { container, onDataChange } = mount();
        const paper = openPicker(container);
        act(() => paper.querySelector<HTMLElement>('button[data-pick="gradient"]')?.click());
        act(() => document.body.querySelector<HTMLElement>('button[aria-label="color_picker_close"]')?.click());
        expect(onDataChange).toHaveBeenCalledExactlyOnceWith({
            bg: 'linear-gradient(90deg, RGBA(255, 0, 0, 1) 0%, rgba(0, 0, 255, 1) 100%)',
        });
    });
});
