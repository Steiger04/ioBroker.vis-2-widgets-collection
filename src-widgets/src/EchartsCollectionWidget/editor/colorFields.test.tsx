/**
 * ECharts colour inputs — `ColorField` and `ColorListField` over the Textfeld-Zeile (ADR-0102).
 *
 * @module EchartsCollectionWidget/editor/colorFields.test
 * @remarks
 * Seam 3 (spec "Testing Decisions"): props in, DOM and `onChange` out. The fields talk to the row
 * in value / change / fallback — no vis-2 attribute contract. The row opens the real Farbwähler;
 * its library is replaced by the test fake (happy-dom has no canvas). The configurator modal
 * provides the editor theme as the ambient MUI theme — the `Host` here does the same.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

// happy-dom has no canvas: the library is replaced by the Farbwähler's test fake.
vi.mock(
    'react-best-gradient-color-picker',
    async () => (await import('../../components/colorPicker/testing/fakeColorPickerLibrary')).fakeColorPickerLibrary,
);

import { act, type FC } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import type { Connection } from '@iobroker/adapter-react-v5';
import type { VisTheme } from '@iobroker/types-vis-2';

import { renderComponent, type RenderComponentHandle } from '../../lib/testing/testHarness';
import { lastLibraryProps, resetFakeLibrary } from '../../components/colorPicker/testing/fakeColorPickerLibrary';
import ColorField, { ColorListField } from './colorFields';
import type { OidPickerCtx } from './OidPicker';

/** A socket whose Collection theme reads are counted (getState / subscribeState). */
function themeSocket(): { socket: Connection; reads: () => number } {
    const getState = vi.fn(() =>
        Promise.resolve({ val: JSON.stringify({ palette: { primary: { main: '#123456' } } }) } as ioBroker.State),
    );
    const subscribeState = vi.fn(() => Promise.resolve());
    const socket = { getState, subscribeState, unsubscribeState: vi.fn() } as unknown as Connection;
    return { socket, reads: () => getState.mock.calls.length + subscribeState.mock.calls.length };
}

/** The editor context the configurator drills down; the theme is the modal's ambient theme. */
const editorCtx = (mode: 'light' | 'dark', socket?: Connection): OidPickerCtx => ({
    socket: socket ?? themeSocket().socket,
    theme: Object.assign(createTheme({ palette: { mode } }), { name: mode }) as unknown as VisTheme,
    themeType: mode,
});

interface HostProps {
    kind: 'field' | 'list';
    ctx: OidPickerCtx;
    value?: string | null;
    fallback?: string;
    allowGradient?: boolean;
    disabled?: boolean;
    title?: string;
    onChange: (value: string | null) => void;
}

/**
 * Renders the field under the editor theme, as the configurator modal does. The fallback is
 * required on the field (N4) — a test that does not care inherits an unpainted surface.
 */
const Host: FC<HostProps> = ({ kind, ctx, onChange, value, fallback = 'transparent', ...rest }) => (
    <ThemeProvider theme={ctx.theme}>
        {kind === 'field' ? (
            <ColorField
                value={value}
                onChange={onChange}
                ctx={ctx}
                fallback={fallback}
                {...rest}
            />
        ) : (
            <ColorListField
                value={value ?? ''}
                onChange={onChange}
                ctx={ctx}
                title={rest.title}
            />
        )}
    </ThemeProvider>
);

let handle: RenderComponentHandle<HostProps> | null = null;

beforeEach(() => {
    resetFakeLibrary();
    // Browser-like `CSS.supports('color', …)` for the cases used here (happy-dom accepts anything).
    vi.stubGlobal('CSS', {
        supports: (_property: string, value?: string): boolean =>
            /^(#[0-9a-f]{3,8}|rgba?\(.*\)|hsla?\(.*\)|var\(--.*\)|transparent)$/i.test(value ?? ''),
    });
});

afterEach(() => {
    handle?.unmount();
    handle = null;
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
});

/** Mounts a field (or list) and returns the change spy and DOM lookups. */
const mount = (
    props: Partial<HostProps> = {},
): {
    onChange: ReturnType<typeof vi.fn>;
    container: HTMLElement;
    swatches: () => HTMLElement[];
    trashes: () => HTMLElement[];
} => {
    const onChange = vi.fn();
    handle = renderComponent<HostProps>(Host, { kind: 'field', ctx: editorCtx('light'), onChange, ...props });
    const { container } = handle;
    return {
        onChange,
        container,
        swatches: () => Array.from(container.querySelectorAll<HTMLElement>('[data-color-swatch]')),
        trashes: () => Array.from(container.querySelectorAll<HTMLElement>('button[title="clear_color"]')),
    };
};

/** The swatch's colour layer background (it lies on the checkerboard). */
const swatchColor = (swatch: HTMLElement): string => {
    const fill = swatch.querySelector<HTMLElement>('[data-swatch-fill]') as HTMLElement;
    return (getComputedStyle(fill).background || fill.style.background).toLowerCase();
};

/** The Farbwähler's popover paper, or null while closed. */
const paper = (): HTMLElement | null => document.body.querySelector<HTMLElement>('.MuiPopover-paper');

/** Types like a user would: React listens to the native input event. */
const type = (input: HTMLInputElement, value: string): void => {
    act(() => {
        Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set?.call(input, value);
        input.dispatchEvent(new Event('input', { bubbles: true }));
    });
};

describe('ECharts ColorField swatch', () => {
    it('shows the stored colour, and the fallback while the field inherits', () => {
        const stored = mount({ value: '#123456', fallback: '#abcdef' });
        expect(swatchColor(stored.swatches()[0])).toMatch(/#123456|rgb\(18, 52, 86\)/);
        handle?.unmount();

        const inherited = mount({ value: null, fallback: '#abcdef' });
        expect(swatchColor(inherited.swatches()[0])).toMatch(/#abcdef|rgb\(171, 205, 239\)/);
        expect(inherited.container.querySelector('input')?.placeholder).toBe('color_inherit');
    });

    it('shows a gradient fallback as is (the derived scale an allowGradient field inherits)', () => {
        const gradient = 'linear-gradient(90deg, #ff0000 0%, #0000ff 100%)';
        const { swatches } = mount({ value: undefined, fallback: gradient, allowGradient: true });
        expect(swatchColor(swatches()[0])).toContain('linear-gradient');
    });

    it('paints nothing on the checkerboard while it inherits an unpainted surface (transparent)', () => {
        const { swatches } = mount({ value: null, fallback: 'transparent' });
        expect(swatchColor(swatches()[0])).toMatch(/^(transparent|)$/);
    });
});

describe('ECharts ColorField Farbwähler', () => {
    it('shows the title in the Farbwähler header', () => {
        const { swatches } = mount({ value: '#123456', title: 'Background' });
        act(() => swatches()[0].click());
        expect(paper()?.querySelector('[data-picker-title]')?.textContent).toBe('Background');
    });

    it('starts from the fallback while the field inherits', () => {
        const { swatches } = mount({ value: null, fallback: '#abcdef' });
        act(() => swatches()[0].click());
        expect(lastLibraryProps().value).toBe('#abcdef');
    });

    it('offers Solid/Gradient only for allowGradient fields', () => {
        const solid = mount({ value: '#123456' });
        act(() => solid.swatches()[0].click());
        expect(lastLibraryProps().hideColorTypeBtns).toBe(true);
        handle?.unmount();

        const gradient = mount({ value: '#123456', allowGradient: true });
        act(() => gradient.swatches()[0].click());
        expect(lastLibraryProps().hideColorTypeBtns).not.toBe(true);
    });

    it('follows the light / dark mode of the configurator', () => {
        const dark = mount({ value: '#123456', ctx: editorCtx('dark') });
        act(() => dark.swatches()[0].click());
        expect(lastLibraryProps().disableLightMode).toBe(true);
        handle?.unmount();

        const light = mount({ value: '#123456', ctx: editorCtx('light') });
        act(() => light.swatches()[0].click());
        expect(lastLibraryProps().disableDarkMode).toBe(true);
    });

    it('reads the Collection theme presets through the editor socket — only once open', async () => {
        const { socket, reads } = themeSocket();
        const { swatches } = mount({ value: '#123456', ctx: editorCtx('light', socket) });
        await act(async () => {
            await Promise.resolve();
        });
        expect(reads()).toBe(0);

        act(() => swatches()[0].click());
        await act(async () => {
            await Promise.resolve();
        });
        expect(reads()).toBeGreaterThan(0);
        const presets = Array.from(document.body.querySelectorAll<HTMLElement>('button[data-preset]')).map(
            el => el.dataset.preset,
        );
        expect(presets[0]).toBe('#123456');
    });
});

describe('ECharts ColorField editing', () => {
    it('renders the outlined text field of the configurator', () => {
        const { container } = mount({ value: '#123456' });
        expect(container.querySelector('.MuiOutlinedInput-root')).not.toBeNull();
    });

    it('reports a typed colour and null for the trash', () => {
        const { container, onChange, trashes } = mount({ value: '#123456' });
        type(container.querySelector('input') as HTMLInputElement, '#654321');
        expect(onChange).toHaveBeenLastCalledWith('#654321');
        act(() => trashes()[0].click());
        expect(onChange).toHaveBeenLastCalledWith(null);
    });

    it('is inert while disabled — the swatch does not open the Farbwähler', () => {
        const { container, swatches } = mount({ value: '#123456', disabled: true });
        expect(container.querySelector('[inert]')).not.toBeNull();
        act(() => swatches()[0].click());
        expect(paper()).toBeNull();
    });
});

describe('ECharts ColorListField', () => {
    it('removes a stop whose colour is cleared', () => {
        const { onChange, trashes } = mount({ kind: 'list', value: '#111111;#222222;#333333' });
        act(() => trashes()[1].click());
        expect(onChange).toHaveBeenLastCalledWith('#111111;#333333');
    });

    it('shows the list title in the Farbwähler header of every stop', () => {
        const { swatches } = mount({ kind: 'list', value: '#111111;#222222', title: 'Custom colours' });
        act(() => swatches()[1].click());
        expect(paper()?.querySelector('[data-picker-title]')?.textContent).toBe('Custom colours');
    });
});
