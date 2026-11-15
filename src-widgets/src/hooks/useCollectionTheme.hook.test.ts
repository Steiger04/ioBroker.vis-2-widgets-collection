/**
 * useCollectionTheme — how the canvas reads the stored user theme.
 *
 * @module hooks/useCollectionTheme.hook.test
 * @remarks
 * Pins the Rückfall-Regel at the runtime seam (ADR-0115): one unusable value in the theme state
 * falls away, the widgets render the rest. And that the canvas and the Theme Studio read the
 * state alike: for the same stored value the canvas renders exactly the theme the Studio
 * session opens with. The rule itself is pinned value by value in lib/theme/storedTheme.test.ts.
 *
 * The effective theme is compared by identity: the resolution returns one shared theme object
 * per content (`createThemeCached`), so `toBe` means "the same user theme reached the canvas".
 */
import { act } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { createTheme } from '@mui/material';
import type { Theme } from '@mui/material/styles';
import type { Connection } from '@iobroker/gui-components';

import { THEME_STATE_ID } from '../lib/constants';
import { clearDraftTheme } from '../lib/theme/draftThemeStore';
import { setLastKnownTheme } from '../lib/theme/lastKnownTheme';
import { resolveCollectionTheme } from '../lib/theme/resolveCollectionTheme';
import { renderHook, type RenderHookHandle } from '../lib/testing/testHarness';
import type { UserTheme } from '../lib/theme/themeTypes';
import useStudioSession from '../ThemeConfigWizard/useStudioSession';
import useCollectionTheme from './useCollectionTheme';

/** The host theme the collection theme resolves onto (MUI's default light theme). */
const HOST = createTheme();

/** A stored theme with two unusable values (a mode that does not exist, a radius out of range). */
const PARTLY_UNUSABLE = {
    palette: { mode: 'purple', primary: { main: '#ff0000' } },
    shape: { borderRadius: 12 },
    corners: { topLeft: -1 },
    spacing: 6,
};
/** What is left of it. */
const THE_REST: UserTheme = { palette: { primary: { main: '#ff0000' } }, shape: { borderRadius: 12 }, spacing: 6 };

/** A fully valid theme with the parts no assistant can set. */
const FULL: UserTheme = {
    palette: { mode: 'dark', primary: { main: '#ff0000' } },
    cssVariables: { cssVarPrefix: 'my' },
    components: { MuiButton: { defaultProps: { disableRipple: true } } },
    googleFonts: { Lobster: [{ weight: 400, data: 'data:font/woff2;base64,AAAA' }] },
};

/** The stored values that hold no theme. */
const NO_THEME: [string, unknown][] = [
    ['an unset state', undefined],
    ['an empty value', ''],
    ['corrupt JSON', '{"palette":'],
    ['a JSON list', '[1]'],
    ['a JSON text', '"dark"'],
    ['a value that is not text', 42],
];

type StateHandler = (id: string, state: ioBroker.State | null) => void;

/** A socket that answers the theme read with `val` and lets the test push later changes. */
interface FakeSocket {
    socket: Connection;
    /** Resolves once the read has been answered. */
    answered: Promise<unknown>;
    /** Reports a changed state to the subscriber. */
    push: (val: unknown) => void;
}

const fakeSocket = (val: unknown): FakeSocket => {
    const answered = Promise.resolve(val === undefined ? null : ({ val } as ioBroker.State));
    let handler: StateHandler = () => {};
    const socket = {
        getState: vi.fn(() => answered),
        setState: vi.fn(() => Promise.resolve()),
        subscribeState: vi.fn((_id: string, cb: StateHandler) => {
            handler = cb;
            return Promise.resolve();
        }),
        unsubscribeState: vi.fn(),
    } as unknown as Connection;
    return {
        socket,
        answered,
        push: next => act(() => handler(THEME_STATE_ID, { val: next } as ioBroker.State)),
    };
};

/** The hook mounted right now (canvas or Studio), unmounted after the test at the latest. */
let mounted: Pick<RenderHookHandle<unknown>, 'unmount'> | null = null;

/** Mounts a canvas widget's theme hook over a stored value and waits for the read. */
const canvasOver = async (val: unknown): Promise<{ theme: () => Theme; push: (val: unknown) => void }> => {
    const fake = fakeSocket(val);
    const handle = renderHook(() => useCollectionTheme(fake.socket, HOST));
    mounted = handle;
    await act(async () => {
        await fake.answered;
    });
    return { theme: () => handle.result.current, push: fake.push };
};

/** The theme a canvas widget renders for a stored value. */
const canvasThemeFor = async (val: unknown): Promise<Theme> => {
    const canvas = await canvasOver(val);
    const theme = canvas.theme();
    mounted?.unmount();
    mounted = null;
    return theme;
};

/** Runs the draft store's frame, so a cleared draft has left the canvas. */
const releaseCanvas = (): void => {
    clearDraftTheme();
    act(() => {
        vi.advanceTimersByTime(20);
    });
};

/** The draft a Studio session opens with for a stored value (no seed from an earlier session). */
const studioDraftFor = async (val: unknown): Promise<UserTheme> => {
    setLastKnownTheme(null);
    const fake = fakeSocket(val);
    const handle = renderHook(() => useStudioSession(fake.socket));
    mounted = handle;
    await act(async () => {
        await fake.answered;
    });
    const { draft } = handle.result.current;
    handle.unmount();
    mounted = null;
    // The session mirrored its draft to the canvas; take it off again before the next mount.
    releaseCanvas();
    return draft;
};

beforeEach(() => {
    vi.useFakeTimers();
});

afterEach(() => {
    mounted?.unmount();
    mounted = null;
    releaseCanvas();
    setLastKnownTheme(null);
    vi.useRealTimers();
});

describe('useCollectionTheme: reading the stored theme', () => {
    it('renders the rest of a stored theme when single values are unusable', async () => {
        const theme = await canvasThemeFor(JSON.stringify(PARTLY_UNUSABLE));

        // The usable values apply …
        expect(theme.palette.primary.main).toBe('#ff0000');
        expect(theme.shape.borderRadius).toBe(12);
        expect(theme.spacing(1)).toBe('6px');
        // … the unusable ones follow the host.
        expect(theme.palette.mode).toBe('light');
        expect(theme).toBe(resolveCollectionTheme(HOST, undefined, THE_REST));
    });

    it('follows a changed state the same way', async () => {
        const canvas = await canvasOver(JSON.stringify({ spacing: 4 }));
        expect(canvas.theme().spacing(1)).toBe('4px');

        canvas.push(JSON.stringify(PARTLY_UNUSABLE));

        expect(canvas.theme()).toBe(resolveCollectionTheme(HOST, undefined, THE_REST));
    });

    it.each(NO_THEME)('renders the host theme alone for %s', async (_label, val) => {
        expect(await canvasThemeFor(val)).toBe(resolveCollectionTheme(HOST, undefined, {}));
    });

    it('renders a fully valid theme unchanged, with Google fonts, component overrides and CSS variables', async () => {
        const theme = await canvasThemeFor(JSON.stringify(FULL));

        expect(theme).toBe(resolveCollectionTheme(HOST, undefined, FULL));
        expect(theme.palette.mode).toBe('dark');
        expect(theme.components?.MuiButton?.defaultProps).toEqual({ disableRipple: true });
        expect((theme as Theme & { cssVarPrefix?: string }).cssVarPrefix).toBe('my');
        expect(document.querySelector('style[data-collection-google-fonts]')?.textContent).toContain(
            "font-family:'Lobster'",
        );
    });
});

describe('the canvas and the Theme Studio read the stored theme alike', () => {
    it.each<[string, unknown]>([
        ['a fully valid theme', JSON.stringify(FULL)],
        ['a theme with unusable values', JSON.stringify(PARTLY_UNUSABLE)],
        ['a theme whose every value is unusable', '{"corners":{"topLeft":-1},"direction":"up"}'],
        ['a list with an unusable entry', '{"shadows":["none",5],"spacing":4}'],
        ...NO_THEME,
    ])('for %s the canvas renders the theme the Studio opens with', async (_label, val) => {
        const canvasTheme = await canvasThemeFor(val);
        const studioDraft = await studioDraftFor(val);

        expect(canvasTheme).toBe(resolveCollectionTheme(HOST, undefined, studioDraft));
    });
});
