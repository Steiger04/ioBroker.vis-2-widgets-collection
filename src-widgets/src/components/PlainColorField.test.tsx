/**
 * PlainColorField — the adapter of `createPlainColorField` (ADR-0102): renders a Schlichtes
 * Farbfeld as the Textfeld-Zeile without the Auflösungskaskade.
 *
 * @module components/PlainColorField.test
 * @remarks
 * Props in (vis-2 custom-field contract: field, data, onDataChange, props), DOM and patches out.
 * `CSS.supports` is stubbed with a browser-like list (happy-dom answers `true` for anything);
 * the picker library is the Farbwähler's test fake. The Collection theme hook is a spy: a
 * Schlichtes Farbfeld must not read the theme until its Farbwähler opens.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

vi.hoisted(() => {
    // Generic extends window.visRxWidget (undefined outside the vis-2 host) — the repo's stub pattern.
    (window as unknown as { visRxWidget: unknown }).visRxWidget = class {
        static t(key: string): string {
            return `t:${key}`;
        }
    };
});

const { readCollectionTheme } = vi.hoisted(() => ({ readCollectionTheme: vi.fn() }));

vi.mock(
    'react-best-gradient-color-picker',
    async () => (await import('./colorPicker/testing/fakeColorPickerLibrary')).fakeColorPickerLibrary,
);
vi.mock('../hooks/useCollectionTheme', async () => {
    const { createTheme } = await import('@mui/material');
    const theme = createTheme({ palette: { primary: { main: '#1976d2' } } });
    readCollectionTheme.mockImplementation(() => theme);
    return { default: readCollectionTheme, useCollectionTheme: readCollectionTheme };
});

import { createTheme } from '@mui/material';
import { act, type ComponentProps } from 'react';

import type { RxWidgetInfoCustomComponentProperties, WidgetData } from '@iobroker/types-vis-2';
import { renderComponent, type RenderComponentHandle } from '../lib/testing/testHarness';
import { lastLibraryProps, resetFakeLibrary } from './colorPicker/testing/fakeColorPickerLibrary';
import type { ExtendedField } from '../types/field-definitions/extended-field';
import PlainColorField from './PlainColorField';

type Props = ComponentProps<typeof PlainColorField>;

const hostTheme = Object.assign(createTheme(), { name: 'light' });

const editorProps = {
    context: { theme: hostTheme, socket: {} },
    selectedView: 'v',
    selectedWidgets: ['w1'],
} as unknown as RxWidgetInfoCustomComponentProperties;

let handle: RenderComponentHandle<Props> | null = null;

beforeEach(() => {
    resetFakeLibrary();
    readCollectionTheme.mockClear();
    vi.stubGlobal('CSS', {
        supports: (_property: string, value?: string): boolean =>
            /^(#[0-9a-f]{3,8}|rgba?\(.*\)|hsla?\(.*\)|var\(--.*\)|transparent|red)$/i.test(value ?? ''),
    });
});

afterEach(() => {
    handle?.unmount();
    handle = null;
    vi.unstubAllGlobals();
});

const mount = (
    data: WidgetData = {} as WidgetData,
    fieldExtra: Partial<ExtendedField> = {},
): { container: HTMLElement; input: HTMLInputElement; onDataChange: ReturnType<typeof vi.fn> } => {
    const onDataChange = vi.fn();
    handle = renderComponent<Props>(PlainColorField, {
        field: { name: 'gaugeColorBar', label: 'gauge_color_bar', type: 'custom', ...fieldExtra } as ExtendedField,
        data,
        onDataChange,
        props: editorProps,
    });
    const input = handle.container.querySelector<HTMLInputElement>('input');
    if (!input) {
        throw new Error('no text input rendered');
    }
    return { container: handle.container, input, onDataChange };
};

const swatchBackground = (container: HTMLElement): string => {
    const inner = container.querySelector<HTMLElement>('[data-color-swatch]')?.firstElementChild as HTMLElement;
    return getComputedStyle(inner).background || inner.style.background;
};

/** Types like a user would: React listens to the native input event. */
const type = (input: HTMLInputElement, value: string): void => {
    act(() => {
        Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set?.call(input, value);
        input.dispatchEvent(new Event('input', { bubbles: true }));
    });
};

const open = (container: HTMLElement): HTMLElement | null => {
    act(() => container.querySelector<HTMLElement>('[data-color-swatch]')?.click());
    return document.body.querySelector<HTMLElement>('.MuiPopover-paper');
};

describe('PlainColorField shows the stored value — no cascade', () => {
    it('an empty field shows no "erbt" placeholder', () => {
        const { input } = mount();
        expect(input.value).toBe('');
        expect(input.placeholder).toBe('');
    });

    it('the swatch shows the stored value, a colour name included', () => {
        const { container, input } = mount({ gaugeColorBar: 'red' } as WidgetData);
        expect(input.value).toBe('red');
        expect(swatchBackground(container)).toMatch(/^red$|rgb\(255, 0, 0\)/);
    });

    it.each([
        ['a missing key', {}],
        ['an empty value', { gaugeColorBar: '' }],
    ])('with %s the swatch and the Farbwähler show the schema default, nothing is stored', (_case, data) => {
        const { container, input, onDataChange } = mount(
            data as WidgetData,
            { default: '#cccccc' } as Partial<ExtendedField>,
        );
        expect(input.value).toBe('');
        expect(swatchBackground(container)).toMatch(/^#cccccc$|rgb\(204, 204, 204\)/);
        open(container);
        expect(lastLibraryProps().value).toBe('#cccccc');
        expect(onDataChange).not.toHaveBeenCalled();
    });

    it('does not read the Collection theme while the Farbwähler is closed', () => {
        mount({ gaugeColorBar: '#123456' } as WidgetData);
        expect(readCollectionTheme).not.toHaveBeenCalled();
    });
});

describe('PlainColorField writes the field', () => {
    it('stores typed `transparent` as typed', () => {
        const { input, onDataChange } = mount();
        type(input, 'transparent');
        expect(onDataChange).toHaveBeenLastCalledWith({ gaugeColorBar: 'transparent' });
    });

    it('marks a typed gradient and stores nothing — solid only', () => {
        const { input, onDataChange } = mount();
        type(input, 'linear-gradient(90deg, #ff0000 0%, #0000ff 100%)');
        expect(onDataChange).not.toHaveBeenCalled();
        expect(input.getAttribute('aria-invalid')).toBe('true');
    });

    it('the trash clears the field: null, the widget falls back to its own default', () => {
        const { container, onDataChange } = mount({ gaugeColorBar: '#123456' } as WidgetData);
        act(() => container.querySelector<HTMLElement>('button[title="t:clear_color"]')?.click());
        expect(onDataChange).toHaveBeenCalledExactlyOnceWith({ gaugeColorBar: null });
    });
});

describe('PlainColorField opens the Farbwähler', () => {
    it('with the translated field name as title', () => {
        const { container } = mount();
        expect(open(container)?.querySelector('[data-picker-title]')?.textContent).toBe('t:gauge_color_bar');
    });

    it('without Solid/Gradient', () => {
        open(mount().container);
        expect(lastLibraryProps().hideColorTypeBtns).toBe(true);
    });

    it('with the Collection theme colours as presets', () => {
        const presets = Array.from(open(mount().container)?.querySelectorAll<HTMLElement>('button[data-preset]') ?? []);
        expect(presets.map(el => el.dataset.preset)).toContain('#1976d2');
    });
});
