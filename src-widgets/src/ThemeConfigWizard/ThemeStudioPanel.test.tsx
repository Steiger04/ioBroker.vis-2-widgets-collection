/**
 * ThemeStudioPanel — draft lifetime on the canvas and the footer problem counter.
 *
 * @module ThemeConfigWizard/ThemeStudioPanel.test
 * @remarks
 * The panel mirrors its draft into the draft store while open (ADR-0020). When vis-2 unmounts
 * the palette entry (collapsing the palette group) without a close, the draft must leave the
 * canvas; after a save, the per-widget save handoff retires the draft instead, so the panel
 * must not clear it early. The store promotes writes inside a rAF flush, so every assertion
 * on {@link getDraftTheme} waits one frame first.
 */
import { afterEach, describe, expect, it, vi } from 'vitest';

vi.hoisted(() => {
    // Generic extends window.visRxWidget (undefined outside the vis-2 host) — the repo's stub
    // pattern. Arguments are echoed so tests can tell the singular from the plural key.
    (window as unknown as { visRxWidget: unknown }).visRxWidget = class {
        static t(key: string, ...args: unknown[]): string {
            return args.length ? `${key}(${args.join(',')})` : key;
        }
    };
});
import { act, createElement, useState, type FC } from 'react';
import type { Connection } from '@iobroker/adapter-react-v5';

import { clearDraftTheme, getDraftTheme } from '../lib/theme/draftThemeStore';
import { setLastKnownTheme } from '../lib/theme/lastKnownTheme';
import { renderComponent, type RenderComponentHandle } from '../lib/testing/testHarness';
import type { UserTheme } from '../lib/theme/themeTypes';
import ThemeStudioPanel from './ThemeStudioPanel';

/** Waits for the draft store's rAF flush. */
const nextFrame = (): Promise<void> =>
    act(
        () =>
            new Promise<void>(resolve => {
                requestAnimationFrame(() => resolve());
            }),
    );

/**
 * Waits until the throttled draft push (100 ms leading + trailing) has landed in the store:
 * the first push carries the pre-seed `{}`, the seed follows as the trailing push.
 */
const settle = async (): Promise<void> => {
    await act(() => new Promise<void>(resolve => setTimeout(resolve, 150)));
    await nextFrame();
};

/** A socket whose state read never answers — the seed stays the draft (no rebase). */
const fakeSocket = (): { socket: Connection; setState: ReturnType<typeof vi.fn> } => {
    const setState = vi.fn(() => Promise.resolve());
    const socket = {
        getState: () => new Promise(() => {}),
        setState,
    } as unknown as Connection;
    return { socket, setState };
};

interface HostProps {
    /** Whether the palette entry (button + panel) is mounted at all. */
    mounted: boolean;
    socket: Connection;
}

/** Mirrors ThemeWizardButton: the panel opens once and closes through its own onClose. */
const Host: FC<HostProps> = ({ mounted, socket }) => {
    const [open, setOpen] = useState(true);
    return mounted
        ? createElement(ThemeStudioPanel, { open, onClose: () => setOpen(false), socket, themeType: 'light' })
        : null;
};

/** Finds a button by its (stubbed, key-valued) label. */
const button = (label: string): HTMLButtonElement => {
    const found = Array.from(document.body.querySelectorAll('button')).find(b => b.textContent === label);
    if (!found) {
        throw new Error(`button "${label}" not found`);
    }
    return found;
};

const SEED: UserTheme = { palette: { primary: { main: '#ff0000' } } };

let handle: RenderComponentHandle<HostProps> | null = null;

/** Mounts the open panel seeded with `seed` (the session's last known theme). */
const mountPanel = async (seed: UserTheme): Promise<{ setState: ReturnType<typeof vi.fn>; socket: Connection }> => {
    setLastKnownTheme(seed);
    const fake = fakeSocket();
    handle = renderComponent<HostProps>(Host, { mounted: true, socket: fake.socket });
    await settle();
    return fake;
};

afterEach(async () => {
    handle?.unmount();
    handle = null;
    clearDraftTheme();
    await nextFrame();
});

describe('ThemeStudioPanel draft lifetime', () => {
    it('clears the draft from the canvas when unmounted while open', async () => {
        const { socket } = await mountPanel(SEED);
        expect(getDraftTheme()).toEqual(SEED);

        handle?.rerender({ mounted: false, socket });
        await nextFrame();

        expect(getDraftTheme()).toBeNull();
    });

    it('leaves the saved draft to the save handoff when unmounted after save', async () => {
        const { socket, setState } = await mountPanel(SEED);
        // Reset makes the draft dirty ({} vs. the seed), so Save is allowed.
        act(() => {
            button('theme_wizard_reset').click();
        });
        await settle();
        expect(getDraftTheme()).toEqual({});
        await act(async () => {
            button('save').click();
            await Promise.resolve();
        });
        expect(setState).toHaveBeenCalledTimes(1);

        handle?.rerender({ mounted: false, socket });
        await nextFrame();

        expect(getDraftTheme()).toEqual({});
    });
});

describe('ThemeStudioPanel problem counter', () => {
    // Out-of-range corner radii are validation errors that MUI's createTheme tolerates
    // (an invalid colour would already throw while resolving the display theme).
    /** The footer's scroll-to-error button (the only error-coloured text button). */
    const counter = (): string | null | undefined =>
        document.body.querySelector('button.MuiButton-colorError')?.textContent;

    it('uses the singular for one problem', async () => {
        await mountPanel({ corners: { topLeft: -1 } });
        expect(counter()).toBe('theme_studio_problems_one');
    });

    it('uses the plural with the count for two problems', async () => {
        await mountPanel({ corners: { topLeft: -1, topRight: -1 } });
        expect(counter()).toBe('theme_studio_problems(2)');
    });
});
