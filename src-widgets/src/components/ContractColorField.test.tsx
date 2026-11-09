/**
 * ContractColorField — the contract adapter of `createColorField` (ADR-0102): the one place that
 * resolves the Auflösungskaskade for the attribute panel and hands value, effective colour and
 * the translated field name to the Textfeld-Zeile.
 *
 * @module components/ContractColorField.test
 * @remarks
 * Props in (vis-2 custom-field contract: field, data, onDataChange, props), DOM and patches out.
 * `CSS.supports` is stubbed with a browser-like list (happy-dom answers `true` for anything);
 * the picker library is the Farbwähler's test fake.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

vi.hoisted(() => {
    // An own `t`: its `t:` prefix tells a translated text from a literal one.
    (window as unknown as { visRxWidget: unknown }).visRxWidget = class {
        static t(key: string): string {
            return `t:${key}`;
        }
    };
});

vi.mock(
    'react-best-gradient-color-picker',
    async () => (await import('./colorPicker/testing/fakeColorPickerLibrary')).fakeColorPickerLibrary,
);
vi.mock('../hooks/useCollectionTheme', async () => {
    const { createTheme } = await import('@mui/material');
    const theme = createTheme({ palette: { primary: { main: '#1976d2' }, text: { primary: '#2f3e51' } } });
    return { default: (): unknown => theme, useCollectionTheme: (): unknown => theme };
});

import { createTheme } from '@mui/material';
import { act, type ComponentProps } from 'react';

import type { RxWidgetInfoCustomComponentProperties, WidgetData } from '@iobroker/types-vis-2';
import { renderComponent, type RenderComponentHandle } from '../lib/testing/testHarness';
import { lastLibraryProps, resetFakeLibrary } from './colorPicker/testing/fakeColorPickerLibrary';
import type { ExtendedField } from '../types/field-definitions/extended-field';
import ContractColorField from './ContractColorField';

type Props = ComponentProps<typeof ContractColorField>;

const hostTheme = Object.assign(createTheme(), { name: 'light' });

/** vis-2 editor props; `widgetColor` is the vis-2 CSS `color` of the selected widget. */
const editorProps = (widgetColor?: string): RxWidgetInfoCustomComponentProperties =>
    ({
        context: {
            theme: hostTheme,
            socket: {},
            views: { v: { widgets: { w1: { style: widgetColor ? { color: widgetColor } : {} } } } },
        },
        selectedView: 'v',
        selectedWidgets: ['w1'],
    }) as unknown as RxWidgetInfoCustomComponentProperties;

let handle: RenderComponentHandle<Props> | null = null;

beforeEach(() => {
    resetFakeLibrary();
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
    field: Partial<ExtendedField>,
    data: WidgetData = {} as WidgetData,
    props: RxWidgetInfoCustomComponentProperties = editorProps(),
): { container: HTMLElement; input: HTMLInputElement; onDataChange: ReturnType<typeof vi.fn> } => {
    const onDataChange = vi.fn();
    handle = renderComponent<Props>(ContractColorField, {
        field: { name: 'iconColor', type: 'custom', ...field } as ExtendedField,
        data,
        onDataChange,
        props,
    });
    const input = handle.container.querySelector<HTMLInputElement>('input');
    if (!input) {
        throw new Error('no text input rendered');
    }
    return { container: handle.container, input, onDataChange };
};

const getComputedSwatch = (container: HTMLElement): string => {
    const inner = container.querySelector<HTMLElement>('[data-color-swatch] [data-swatch-fill]') as HTMLElement;
    return getComputedStyle(inner).background || inner.style.background;
};

/** Types like a user would: React listens to the native input event. */
const type = (input: HTMLInputElement, value: string): void => {
    act(() => {
        Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set?.call(input, value);
        input.dispatchEvent(new Event('input', { bubbles: true }));
    });
};

describe('ContractColorField resolves the Auflösungskaskade for the swatch', () => {
    it('shows the terminal while nothing is set, and "erbt" in the text field', () => {
        const { container, input } = mount({ terminal: 'primary' });
        expect(getComputedSwatch(container).toLowerCase()).toMatch(/#1976d2|rgb\(25, 118, 210\)/);
        expect(input.value).toBe('');
        expect(input.placeholder).toBe('t:color_inherit');
    });

    it('shows the checkerboard alone for the transparent terminal and opens the Farbwähler on alpha 0', () => {
        const { container } = mount({ name: 'background', terminal: 'transparent' });
        const swatch = container.querySelector<HTMLElement>('[data-color-swatch]') as HTMLElement;
        expect(swatch.querySelector('[data-swatch-checkerboard]')).not.toBeNull();
        expect(getComputedSwatch(container)).toMatch(/^(transparent|)$/);
        expect(getComputedStyle(swatch).border).not.toContain('dashed');
        act(() => swatch.click());
        expect(lastLibraryProps().value).toBe('transparent');
    });

    it('shows a fallback field before the terminal', () => {
        const { container } = mount({ terminal: 'primary', fallbackFields: ['textColor'] }, {
            textColor: '#00ff00',
        } as WidgetData);
        expect(getComputedSwatch(container).toLowerCase()).toMatch(/#00ff00|rgb\(0, 255, 0\)/);
    });

    it('shows the vis-2 widget CSS colour where the field inherits it', () => {
        const { container } = mount(
            { terminal: 'text', inheritTextStyle: true },
            {} as WidgetData,
            editorProps('#0000aa'),
        );
        expect(getComputedSwatch(container).toLowerCase()).toMatch(/#0000aa|rgb\(0, 0, 170\)/);
    });

    it('shows a typed CSS colour as override — not the fallback', () => {
        const { container, input } = mount({ terminal: 'primary', fallbackFields: ['textColor'] }, {
            iconColor: 'red',
            textColor: '#00ff00',
        } as WidgetData);
        expect(input.value).toBe('red');
        expect(getComputedSwatch(container)).toMatch(/^red$|rgb\(255, 0, 0\)/);
    });
});

describe('ContractColorField writes the field', () => {
    it('stores typed text under the field name', () => {
        const { input, onDataChange } = mount({ terminal: 'primary' });
        type(input, 'hsl(120, 50%, 50%)');
        expect(onDataChange).toHaveBeenLastCalledWith({ iconColor: 'hsl(120, 50%, 50%)' });
    });

    it('the trash removes the override: null, the field inherits again', () => {
        const { container, onDataChange } = mount({ terminal: 'primary' }, { iconColor: '#123456' } as WidgetData);
        act(() => container.querySelector<HTMLElement>('button[title="t:clear_color"]')?.click());
        expect(onDataChange).toHaveBeenCalledExactlyOnceWith({ iconColor: null });
    });

    it('marks a gradient typed into a noGradient field and stores nothing', () => {
        const { input, onDataChange } = mount({ noGradient: true });
        type(input, 'linear-gradient(90deg, #ff0000 0%, #0000ff 100%)');
        expect(onDataChange).not.toHaveBeenCalled();
        expect(input.getAttribute('aria-invalid')).toBe('true');
    });
});

describe('ContractColorField opens the Farbwähler', () => {
    const open = (container: HTMLElement): HTMLElement | null => {
        act(() => container.querySelector<HTMLElement>('[data-color-swatch]')?.click());
        return document.body.querySelector<HTMLElement>('.MuiPopover-paper');
    };

    it('with the translated field name as title', () => {
        const { container } = mount({ label: 'icon_color' });
        expect(open(container)?.querySelector('[data-picker-title]')?.textContent).toBe('t:icon_color');
    });

    it('translates a label the vis-2 host already prefixed only once', () => {
        // The host catalog writes the set prefix into field.label (visWidgetsCatalog: i18nPrefix + label).
        const { container } = mount({ label: 'vis_2_widgets_collection_icon_color' });
        expect(open(container)?.querySelector('[data-picker-title]')?.textContent).toBe('t:icon_color');
    });

    it('with the Collection theme colours as presets', () => {
        const presets = Array.from(
            open(mount({}).container)?.querySelectorAll<HTMLElement>('button[data-preset]') ?? [],
        );
        expect(presets.map(el => el.dataset.preset)).toContain('#1976d2');
    });

    it('with Solid/Gradient unless the field is noGradient', () => {
        open(mount({}).container);
        expect(lastLibraryProps().hideColorTypeBtns).not.toBe(true);
        handle?.unmount();
        handle = null;
        open(mount({ noGradient: true }).container);
        expect(lastLibraryProps().hideColorTypeBtns).toBe(true);
    });
});
