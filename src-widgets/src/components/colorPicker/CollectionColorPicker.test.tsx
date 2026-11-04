/**
 * CollectionColorPicker — the Farbwähler, tested over its interface (ADR-0102, Seam 1).
 *
 * @module components/colorPicker/CollectionColorPicker.test
 * @remarks
 * Props in (anchor · close · title · value · commit · gradient allowed), DOM and callbacks out.
 * The picker library is replaced by a fake (`testing/fakeColorPickerLibrary`): its buttons emit
 * fixed `onChange` values and it records the props it receives. The following popover is tested
 * here too, with the layout stubs of `testing/popoverLayoutStubs`.
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

import { Dialog, ThemeProvider, createTheme } from '@mui/material';
import { act } from 'react';
import type React from 'react';

import { renderComponent, type RenderComponentHandle } from '../../lib/testing/testHarness';
import CollectionColorPicker, { type CollectionColorPickerProps } from './CollectionColorPicker';
import { FAKE_PICKS, lastLibraryProps, resetFakeLibrary } from './testing/fakeColorPickerLibrary';
import { installPopoverLayoutStubs, layout, paperTop, resizeContent } from './testing/popoverLayoutStubs';

/** Test host: the Farbwähler under an ambient MUI theme of the given mode. */
interface HostProps extends CollectionColorPickerProps {
    mode?: 'light' | 'dark';
}

const themes = { light: createTheme({ palette: { mode: 'light' } }), dark: createTheme({ palette: { mode: 'dark' } }) };

function Host({ mode = 'light', ...props }: HostProps): React.JSX.Element {
    return (
        <ThemeProvider theme={themes[mode]}>
            <CollectionColorPicker {...props} />
        </ThemeProvider>
    );
}

let handle: RenderComponentHandle<HostProps> | null = null;
let anchor: HTMLElement;

beforeEach(() => {
    resetFakeLibrary();
    anchor = document.createElement('button');
    document.body.appendChild(anchor);
    // happy-dom answers `CSS.supports` with true for anything; the rules only need it for typed text.
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

/** Mounts an open Farbwähler; returns the close and commit spies. */
const mount = (
    props: Partial<HostProps> = {},
): { onClose: ReturnType<typeof vi.fn>; onCommit: ReturnType<typeof vi.fn>; current: () => HostProps } => {
    const onClose = vi.fn();
    const onCommit = vi.fn();
    let current: HostProps = {
        anchorEl: anchor,
        onClose,
        value: '#112233',
        onCommit,
        allowGradient: true,
        ...props,
    };
    handle = renderComponent<HostProps>(Host, current);
    const originalRerender = handle.rerender;
    handle.rerender = (next: HostProps): void => {
        current = next;
        originalRerender(next);
    };
    return { onClose, onCommit, current: () => current };
};

/** The popover paper (throws when the Farbwähler is closed). */
const paper = (): HTMLElement => {
    const el = document.body.querySelector<HTMLElement>('.MuiPopover-paper');
    if (!el) {
        throw new Error('the Farbwähler is not open');
    }
    return el;
};

const closeButton = (): HTMLButtonElement | null =>
    paper().querySelector<HTMLButtonElement>('button[aria-label="color_picker_close"]');

/** Clicks a fixed pick of the fake library. */
const pick = (name: keyof typeof FAKE_PICKS): void => {
    act(() => paper().querySelector<HTMLElement>(`button[data-pick="${name}"]`)?.click());
};

const advance = (ms: number): void => {
    act(() => {
        vi.advanceTimersByTime(ms);
    });
};

const pressEscape = (target: Element): void => {
    act(() => {
        target.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    });
};

describe('CollectionColorPicker header', () => {
    it('shows the title left and a close button right', () => {
        mount({ title: 'Background' });
        const header = paper().querySelector<HTMLElement>('[data-picker-header]');
        expect(header?.textContent).toContain('Background');
        expect(closeButton()).not.toBeNull();
    });

    it('has no title without one, but keeps the close button', () => {
        mount();
        expect(paper().querySelector('[data-picker-title]')).toBeNull();
        expect(closeButton()).not.toBeNull();
    });

    it('closes on ×', () => {
        const { onClose } = mount();
        act(() => closeButton()?.click());
        expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('is not shown without an anchor', () => {
        mount({ anchorEl: null });
        expect(document.body.querySelector('.MuiPopover-paper')).toBeNull();
    });
});

describe('CollectionColorPicker commit', () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    it('commits a pick 150 ms after it', () => {
        const { onCommit } = mount();
        pick('solid');
        advance(149);
        expect(onCommit).not.toHaveBeenCalled();
        advance(1);
        expect(onCommit).toHaveBeenCalledExactlyOnceWith('#ff0000');
    });

    it('commits the latest pick at least every 150 ms while the user keeps dragging', () => {
        const { onCommit } = mount();
        pick('solid');
        advance(100);
        pick('translucent');
        advance(49);
        expect(onCommit).not.toHaveBeenCalled();
        // 150 ms after the first uncommitted pick — although the last change is only 50 ms old.
        advance(1);
        expect(onCommit).toHaveBeenCalledExactlyOnceWith('#0080ff66');
        // Dragging on: picks every 50 ms keep committing.
        for (let i = 0; i < 6; i++) {
            pick(i % 2 === 0 ? 'solid' : 'translucent');
            advance(50);
        }
        expect(onCommit).toHaveBeenCalledTimes(3);
        expect(onCommit).toHaveBeenLastCalledWith('#0080ff66');
    });

    it('stores an opaque solid colour as #rrggbb', () => {
        const { onCommit } = mount();
        pick('solid');
        advance(150);
        expect(onCommit).toHaveBeenCalledExactlyOnceWith('#ff0000');
    });

    it('stores a gradient unchanged', () => {
        const { onCommit } = mount();
        pick('gradient');
        advance(150);
        expect(onCommit).toHaveBeenCalledExactlyOnceWith(FAKE_PICKS.gradient);
    });

    it('keeps showing the picked value while the commit is pending and after it', () => {
        const { onCommit, current } = mount();
        pick('translucent');
        expect(lastLibraryProps().value).toBe(FAKE_PICKS.translucent);
        advance(150);
        // The field row hands the stored value back.
        handle?.rerender({ ...current(), value: onCommit.mock.calls[0][0] as string });
        expect(lastLibraryProps().value).toBe(FAKE_PICKS.translucent);
    });

    it('follows a new value from outside', () => {
        const { current } = mount();
        handle?.rerender({ ...current(), value: '#445566' });
        expect(lastLibraryProps().value).toBe('#445566');
    });

    it('flushes a pending commit on × before closing', () => {
        const { onClose, onCommit } = mount();
        pick('solid');
        act(() => closeButton()?.click());
        expect(onCommit).toHaveBeenCalledExactlyOnceWith('#ff0000');
        expect(onCommit.mock.invocationCallOrder[0]).toBeLessThan(onClose.mock.invocationCallOrder[0]);
        advance(500);
        expect(onCommit).toHaveBeenCalledTimes(1);
    });

    it('flushes a pending commit on Escape', () => {
        const { onClose, onCommit } = mount();
        pick('solid');
        pressEscape(paper());
        expect(onCommit).toHaveBeenCalledExactlyOnceWith('#ff0000');
        expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('flushes a pending commit on a click outside', () => {
        const { onClose, onCommit } = mount();
        pick('solid');
        const backdrop = document.body.querySelector<HTMLElement>('.MuiBackdrop-root');
        act(() => backdrop?.click());
        expect(onCommit).toHaveBeenCalledExactlyOnceWith('#ff0000');
        expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('flushes a pending commit when the field row closes it', () => {
        const { onCommit, current } = mount();
        pick('solid');
        handle?.rerender({ ...current(), anchorEl: null });
        expect(onCommit).toHaveBeenCalledExactlyOnceWith('#ff0000');
    });

    it('flushes a pending commit on unmount', () => {
        const { onCommit } = mount();
        pick('solid');
        handle?.unmount();
        handle = null;
        expect(onCommit).toHaveBeenCalledExactlyOnceWith('#ff0000');
    });

    it('commits nothing when closed without a pick', () => {
        const { onCommit } = mount();
        act(() => closeButton()?.click());
        advance(500);
        expect(onCommit).not.toHaveBeenCalled();
    });
});

describe('CollectionColorPicker library configuration', () => {
    it('offers square, hue, alpha, Advanced sliders and Color Guide, but neither library inputs nor presets', () => {
        mount();
        const props = lastLibraryProps();
        expect(props.hidePickerSquare).not.toBe(true);
        expect(props.hideHue).not.toBe(true);
        expect(props.hideOpacity).not.toBe(true);
        expect(props.hideControls).not.toBe(true);
        expect(props.hideAdvancedSliders).not.toBe(true);
        expect(props.hideColorGuide).not.toBe(true);
        expect(props.hideInputs).toBe(true);
        expect(props.hideInputType).toBe(true);
        expect(props.hidePresets).toBe(true);
    });

    it('offers Solid/Gradient and the gradient controls where gradients are allowed', () => {
        mount({ allowGradient: true });
        expect(lastLibraryProps().hideColorTypeBtns).not.toBe(true);
        expect(lastLibraryProps().hideGradientControls).not.toBe(true);
    });

    it('hides Solid/Gradient and the gradient controls in a solid-only field', () => {
        mount({ allowGradient: false });
        expect(lastLibraryProps().hideColorTypeBtns).toBe(true);
        expect(lastLibraryProps().hideGradientControls).toBe(true);
    });

    it('forces the light library mode under a light theme', () => {
        mount({ mode: 'light' });
        expect(lastLibraryProps().disableDarkMode).toBe(true);
        expect(lastLibraryProps().disableLightMode).not.toBe(true);
        expect(lastLibraryProps().style?.body?.background).toBe(themes.light.palette.background.paper);
    });

    it('forces the dark library mode under a dark theme', () => {
        mount({ mode: 'dark' });
        expect(lastLibraryProps().disableLightMode).toBe(true);
        expect(lastLibraryProps().disableDarkMode).not.toBe(true);
        expect(lastLibraryProps().style?.body?.background).toBe(themes.dark.palette.background.paper);
    });

    it('offers the eyedropper where the browser has the native EyeDropper API', () => {
        vi.stubGlobal('EyeDropper', class {});
        mount();
        expect(lastLibraryProps().hideEyeDrop).not.toBe(true);
    });

    it('hides the eyedropper without the native EyeDropper API', () => {
        expect('EyeDropper' in window).toBe(false);
        mount();
        expect(lastLibraryProps().hideEyeDrop).toBe(true);
    });

    it('a solid-only field stores a pick as solid colour', () => {
        vi.useFakeTimers();
        const { onCommit } = mount({ allowGradient: false });
        pick('translucent');
        advance(150);
        expect(onCommit).toHaveBeenCalledExactlyOnceWith('#0080ff66');
    });
});

/** Test host: the Farbwähler opened from a field inside an open MUI dialog. */
function DialogHost({ onDialogClose, ...props }: HostProps & { onDialogClose: () => void }): React.JSX.Element {
    return (
        <ThemeProvider theme={themes.light}>
            <Dialog
                open
                onClose={onDialogClose}
            >
                <CollectionColorPicker {...props} />
            </Dialog>
        </ThemeProvider>
    );
}

describe('CollectionColorPicker in a dialog', () => {
    it('Escape closes only the Farbwähler, not the surrounding dialog', () => {
        const onClose = vi.fn();
        const onDialogClose = vi.fn();
        const dialogHandle = renderComponent<HostProps & { onDialogClose: () => void }>(DialogHost, {
            anchorEl: anchor,
            onClose,
            value: '#112233',
            onCommit: vi.fn(),
            allowGradient: true,
            onDialogClose,
        });
        try {
            pressEscape(paper().querySelector('[data-fake-library]')!);
            expect(onClose).toHaveBeenCalledTimes(1);
            expect(onDialogClose).not.toHaveBeenCalled();
            // Control: with the Farbwähler closed, the same Escape reaches the dialog.
            dialogHandle.rerender({
                anchorEl: null,
                onClose,
                value: '#112233',
                onCommit: vi.fn(),
                allowGradient: true,
                onDialogClose,
            });
            pressEscape(document.body.querySelector('.MuiDialog-paper')!);
            expect(onDialogClose).toHaveBeenCalledTimes(1);
        } finally {
            dialogHandle.unmount();
        }
    });
});

describe('CollectionColorPicker popover follows its content', () => {
    beforeEach(() => {
        installPopoverLayoutStubs();
    });

    it('opens below the anchor when there is more room below', () => {
        mount();
        // Anchor bottom 120 — the paper hangs from it.
        expect(paperTop()).toBe('120px');
    });

    it('opens above the anchor when there is more room above', () => {
        layout.anchorTop = 600;
        mount();
        // Anchor top 600 minus the paper height 200.
        expect(paperTop()).toBe('400px');
    });

    it('moves at once when the content grows after opening', () => {
        mount();
        resizeContent(200);
        expect(paperTop()).toBe('120px');
        // 120 + 750 would end below the window (800 - 16 margin): MUI shifts it up to 784 - 750.
        resizeContent(750);
        expect(paperTop()).toBe('34px');
    });

    it('stays put when the content shrinks', () => {
        layout.paperHeight = 750;
        mount();
        resizeContent(750);
        expect(paperTop()).toBe('34px');
        resizeContent(200);
        expect(paperTop()).toBe('34px');
    });

    it('keeps its position after shrinking across re-renders, and follows the next growth', () => {
        layout.paperHeight = 750;
        mount();
        resizeContent(750);
        resizeContent(200);
        // A pick re-renders the popover — MUI would place the smaller paper at the anchor (120px).
        pick('solid');
        expect(paperTop()).toBe('34px');
        // Growing again repositions from the anchor: 120 + 300 fits below.
        resizeContent(300);
        expect(paperTop()).toBe('120px');
    });

    it('lets go of the held position when the window changes size', () => {
        layout.paperHeight = 750;
        mount();
        resizeContent(750);
        resizeContent(200);
        act(() => {
            window.dispatchEvent(new Event('resize'));
        });
        pick('solid');
        expect(paperTop()).toBe('120px');
    });
});
