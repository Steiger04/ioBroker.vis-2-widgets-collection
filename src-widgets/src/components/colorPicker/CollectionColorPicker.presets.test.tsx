/**
 * CollectionColorPicker — the preset row (ADR-0102, Seam 1, Ticket 05).
 *
 * @module components/colorPicker/CollectionColorPicker.presets.test
 * @remarks
 * Passed presets win; without them the Farbwähler reads the Collection theme itself, only while
 * open (call counter on the socket mock). The picker library is the fake of
 * `testing/fakeColorPickerLibrary`; its preset buttons emit the preset as `onChange`.
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

vi.mock(
    'react-best-gradient-color-picker',
    async () => (await import('./testing/fakeColorPickerLibrary')).fakeColorPickerLibrary,
);

import type { Connection } from '@iobroker/adapter-react-v5';
import { ThemeProvider, createTheme } from '@mui/material';
import { act } from 'react';
import type React from 'react';

import { renderComponent, type RenderComponentHandle } from '../../lib/testing/testHarness';
import CollectionColorPicker, { type CollectionColorPickerProps } from './CollectionColorPicker';
import { lastLibraryProps, resetFakeLibrary } from './testing/fakeColorPickerLibrary';

const ambientTheme = createTheme({ palette: { mode: 'light' } });

function Host(props: CollectionColorPickerProps): React.JSX.Element {
    return (
        <ThemeProvider theme={ambientTheme}>
            <CollectionColorPicker {...props} />
        </ThemeProvider>
    );
}

/** Socket mock serving a stored Collection theme; counts the theme reads. */
function themeSocket(themeJson: string): { socket: Connection; reads: () => number } {
    const getState = vi.fn(() => Promise.resolve({ val: themeJson } as ioBroker.State));
    const subscribeState = vi.fn(() => Promise.resolve());
    const unsubscribeState = vi.fn();
    const socket = { getState, subscribeState, unsubscribeState } as unknown as Connection;
    return { socket, reads: () => getState.mock.calls.length + subscribeState.mock.calls.length };
}

let handle: RenderComponentHandle<CollectionColorPickerProps> | null = null;
let anchor: HTMLElement;

beforeEach(() => {
    resetFakeLibrary();
    anchor = document.createElement('button');
    document.body.appendChild(anchor);
    vi.stubGlobal('CSS', { supports: (): boolean => true });
});

afterEach(() => {
    handle?.unmount();
    handle = null;
    anchor.remove();
    vi.useRealTimers();
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
});

const baseProps = (props: Partial<CollectionColorPickerProps>): CollectionColorPickerProps => ({
    anchorEl: anchor,
    onClose: vi.fn(),
    value: '#112233',
    onCommit: vi.fn(),
    allowGradient: true,
    ...props,
});

const mount = (props: Partial<CollectionColorPickerProps> = {}): CollectionColorPickerProps => {
    const current = baseProps(props);
    handle = renderComponent<CollectionColorPickerProps>(Host, current);
    return current;
};

/** Preset values of the shown preset row (empty when the row is off). */
const shownPresets = (): string[] =>
    Array.from(document.body.querySelectorAll<HTMLElement>('.MuiPopover-paper button[data-preset]')).map(
        el => el.dataset.preset ?? '',
    );

const clickPreset = (preset: string): void => {
    act(() => document.body.querySelector<HTMLElement>(`button[data-preset="${preset}"]`)?.click());
};

/** Lets the socket promises resolve. */
const settle = async (): Promise<void> => {
    await act(async () => {
        await Promise.resolve();
    });
};

describe('CollectionColorPicker — presets', () => {
    it('shows the passed presets', () => {
        mount({ presets: ['#ff0000', '#00ff00', '#0000ff'] });

        expect(lastLibraryProps().hidePresets).toBe(false);
        expect(shownPresets()).toEqual(['#ff0000', '#00ff00', '#0000ff']);
    });

    it('shows the Collection theme colours without passed presets, read only after opening', async () => {
        const { socket, reads } = themeSocket(JSON.stringify({ palette: { primary: { main: '#123456' } } }));
        const closed = mount({ anchorEl: null, socket });
        await settle();

        expect(reads()).toBe(0);

        act(() => handle?.rerender({ ...closed, anchorEl: anchor }));
        await settle();

        expect(reads()).toBeGreaterThan(0);
        const presets = shownPresets();
        // The stored Collection theme (primary) on top of the ambient theme (error, paper).
        expect(presets[0]).toBe('#123456');
        expect(presets).toContain('#d32f2f');
        expect(presets).toContain('#fff');
    });

    it('prefers passed presets over the Collection theme and does not read it', async () => {
        const { socket, reads } = themeSocket(JSON.stringify({ palette: { primary: { main: '#123456' } } }));
        mount({ presets: ['#abcdef'], socket });
        await settle();

        expect(shownPresets()).toEqual(['#abcdef']);
        expect(reads()).toBe(0);
    });

    it('switches the library presets off for an empty list (no demo colours)', async () => {
        const { socket, reads } = themeSocket('');
        mount({ presets: [], socket });
        await settle();

        expect(lastLibraryProps().hidePresets).toBe(true);
        expect(shownPresets()).toEqual([]);
        expect(reads()).toBe(0);
    });

    it('switches the library presets off without presets and without a connection', () => {
        mount();

        expect(lastLibraryProps().hidePresets).toBe(true);
        expect(shownPresets()).toEqual([]);
    });

    it('commits the normalized value of a clicked preset', () => {
        vi.useFakeTimers();
        const onCommit = vi.fn();
        mount({ presets: ['#ABCDEF', 'rgba(0, 128, 255, 0.4)'], onCommit });

        clickPreset('#ABCDEF');
        act(() => {
            vi.advanceTimersByTime(150);
        });
        expect(onCommit).toHaveBeenLastCalledWith('#abcdef');

        clickPreset('rgba(0, 128, 255, 0.4)');
        act(() => {
            vi.advanceTimersByTime(150);
        });
        expect(onCommit).toHaveBeenLastCalledWith('#0080ff66');
    });

    it('offers gradient presets only where the field takes gradients', () => {
        const gradient = 'linear-gradient(90deg, #ff0000 0%, #0000ff 100%)';
        mount({ presets: ['#ff0000', gradient], allowGradient: false });
        expect(shownPresets()).toEqual(['#ff0000']);

        act(() => handle?.rerender(baseProps({ presets: ['#ff0000', gradient], allowGradient: true })));
        expect(shownPresets()).toEqual(['#ff0000', gradient]);
    });

    it('shows each preset once and at most 18', () => {
        const many = Array.from({ length: 20 }, (_, i) => `#0000${(i + 10).toString(16).padStart(2, '0')}`);
        mount({ presets: ['#FF0000', '#ff0000', ...many] });

        const presets = shownPresets();
        expect(presets).toHaveLength(18);
        expect(presets.slice(0, 2)).toEqual(['#FF0000', '#00000a']);
    });
});
