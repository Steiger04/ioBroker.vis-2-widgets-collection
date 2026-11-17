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
// The Leinwand-Theme the panel reads; a test may hand it Rahmenvorgaben (`widgetFrame`).
const canvasThemeHolder = vi.hoisted(() => ({ widgetFrame: undefined as object | undefined }));
vi.mock('../lib/theme/canvasTheme', () => ({
    useCanvasTheme: () => {
        const theme = canvasThemeHolder.widgetFrame ? { widgetFrame: canvasThemeHolder.widgetFrame } : {};
        return { theme, stored: theme, draft: null };
    },
}));
// The collection theme resolved from it, which gives the colours.
vi.mock('../hooks/useCollectionTheme', async () => {
    const { createTheme } = await import('@mui/material');
    const theme = createTheme({ palette: { primary: { main: '#1976d2' }, text: { primary: '#2f3e51' } } });
    const current = (): unknown => theme;
    return { default: current, useCollectionTheme: current, useCollectionThemeOf: current };
});

import { createTheme } from '@mui/material';
import { act, type ComponentProps } from 'react';

import type { RxWidgetInfoCustomComponentProperties, WidgetData } from '@iobroker/types-vis-2';
import { renderComponent, type RenderComponentHandle } from '../lib/testing/testHarness';
import { lastLibraryProps, resetFakeLibrary } from './colorPicker/testing/fakeColorPickerLibrary';
import type { ExtendedField } from '../types/field-definitions/extended-field';
import ContractColorField from './ContractColorField';
import commonFields from '../lib/commonFields';

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
    canvasThemeHolder.widgetFrame = undefined;
});

const mount = (
    field: Partial<ExtendedField>,
    data: WidgetData = {},
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

    describe('a surface that paints nothing without the card', () => {
        const surface: Partial<ExtendedField> = {
            name: 'frameBackground',
            terminal: 'paper',
            terminalWithoutCard: 'transparent',
        };

        it('shows the checkerboard and "erbt" under noCard', () => {
            const { container, input } = mount(surface, { noCard: true });
            expect(getComputedSwatch(container)).toMatch(/^(transparent|)$/);
            expect(input.value).toBe('');
            expect(input.placeholder).toBe('t:color_inherit');
        });

        it('shows the paper in the card', () => {
            const { container } = mount(surface, { noCard: false });
            expect(getComputedSwatch(container)).not.toMatch(/^(transparent|)$/);
        });

        it('shows the set colour under noCard', () => {
            const { container } = mount(surface, { noCard: true, frameBackground: '#336699' });
            expect(getComputedSwatch(container).toLowerCase()).toMatch(/#336699|rgb\(51, 102, 153\)/);
        });
    });

    // Ein effektiver Wert (ADR-0117): the swatch sees noCard as the widget renders it — an unset
    // noCard reads the Rahmenvorgabe of the collection theme, else the built-in standard (card).
    describe('ticket 04: an inherited noCard', () => {
        const surfaces = (['background', 'frameBackground'] as const).map(name => {
            const field = commonFields().find(candidate => candidate.name === name);
            if (!field) {
                throw new Error(`commonFields declares no ${name}`);
            }
            return [name, field] as const;
        });

        it.each(surfaces)('%s shows the checkerboard under the Rahmenvorgabe "without card"', (_name, field) => {
            canvasThemeHolder.widgetFrame = { noCard: true };
            const { container } = mount(field, {});
            expect(getComputedSwatch(container)).toMatch(/^(transparent|)$/);
        });

        it.each(surfaces)('%s shows the paper without a Rahmenvorgabe, and for an own card', (_name, field) => {
            const unset = mount(field, {});
            expect(getComputedSwatch(unset.container)).not.toMatch(/^(transparent|)$/);
            handle?.unmount();

            canvasThemeHolder.widgetFrame = { noCard: true };
            const ownCard = mount(field, { noCard: false });
            expect(getComputedSwatch(ownCard.container)).not.toMatch(/^(transparent|)$/);
        });
    });

    // Under a multi-selection vis-2 hands the field its `commonValues`, where a differing noCard is
    // null and would read as inherited: the swatch reads the frame of the first selected widget, as
    // it does the vis-2 style colour (ADR-0117, addendum 2026-11-17).
    describe('ticket 13: a multi-selection with differing noCard', () => {
        const surface: Partial<ExtendedField> = {
            name: 'frameBackground',
            terminal: 'paper',
            terminalWithoutCard: 'transparent',
        };
        const twoWidgets = (first: WidgetData, second: WidgetData): RxWidgetInfoCustomComponentProperties =>
            ({
                context: {
                    theme: hostTheme,
                    socket: {},
                    views: { v: { widgets: { w1: { data: first, style: {} }, w2: { data: second, style: {} } } } },
                },
                selectedView: 'v',
                selectedWidgets: ['w1', 'w2'],
            }) as unknown as RxWidgetInfoCustomComponentProperties;

        it('shows the checkerboard when the first selected widget has no card of its own', () => {
            const { container } = mount(surface, { noCard: null }, twoWidgets({ noCard: true }, {}));
            expect(getComputedSwatch(container)).toMatch(/^(transparent|)$/);
        });

        it('shows the paper when the first selected widget inherits the card', () => {
            canvasThemeHolder.widgetFrame = { noCard: false };
            const { container } = mount(surface, { noCard: null }, twoWidgets({}, { noCard: true }));
            expect(getComputedSwatch(container)).not.toMatch(/^(transparent|)$/);
        });

        it('shows the paper when the first selected widget has a card under the Rahmenvorgabe "without card"', () => {
            canvasThemeHolder.widgetFrame = { noCard: true };
            const { container } = mount(surface, { noCard: null }, twoWidgets({ noCard: false }, {}));
            expect(getComputedSwatch(container)).not.toMatch(/^(transparent|)$/);
        });
    });

    // The Rückfall-Regel (ADR-0114) before the cascade: a stored noCard the widget cannot use — the
    // text the vis-2 assistant writes into a boolean — reads as unset, as the widget and the panel
    // read it, so the swatch follows the Rahmenvorgabe, else the card.
    describe('review: an unusable stored noCard', () => {
        const surface: Partial<ExtendedField> = {
            name: 'frameBackground',
            terminal: 'paper',
            terminalWithoutCard: 'transparent',
        };

        it.each(['true', 'false'])('noCard "%s" (text) shows the paper of the card', text => {
            const { container } = mount(surface, { noCard: text });
            expect(getComputedSwatch(container)).not.toMatch(/^(transparent|)$/);
        });

        it('noCard "false" (text) shows the checkerboard under the Rahmenvorgabe "without card"', () => {
            canvasThemeHolder.widgetFrame = { noCard: true };
            const { container } = mount(surface, { noCard: 'false' });
            expect(getComputedSwatch(container)).toMatch(/^(transparent|)$/);
        });
    });

    it('shows a fallback field before the terminal', () => {
        const { container } = mount(
            { terminal: 'primary', fallbackFields: ['textColor'] },
            {
                textColor: '#00ff00',
            },
        );
        expect(getComputedSwatch(container).toLowerCase()).toMatch(/#00ff00|rgb\(0, 255, 0\)/);
    });

    it('shows the vis-2 widget CSS colour where the field inherits it', () => {
        const { container } = mount({ terminal: 'text', inheritTextStyle: true }, {}, editorProps('#0000aa'));
        expect(getComputedSwatch(container).toLowerCase()).toMatch(/#0000aa|rgb\(0, 0, 170\)/);
    });

    it('shows a typed CSS colour as override — not the fallback', () => {
        const { container, input } = mount(
            { terminal: 'primary', fallbackFields: ['textColor'] },
            {
                iconColor: 'red',
                textColor: '#00ff00',
            },
        );
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
        const { container, onDataChange } = mount({ terminal: 'primary' }, { iconColor: '#123456' });
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
