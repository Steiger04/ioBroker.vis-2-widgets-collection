/**
 * Studio host — the Theme Studio in its own React root outside the widget palette.
 *
 * @module ThemeConfigWizard/studioHost.test
 * @remarks
 * vis-2 renders the palette button inside the palette tree, which unmounts on every group
 * collapse, filter or view switch (ADR-0020 addendum 2026-11-02, B1/B2). The studio therefore
 * lives in a root of its own under `document.body`: these tests pin the host's lifecycle (one
 * container per page, close removes it, a leftover container is reused) and the button's role
 * as a mere trigger that forwards the latest host props.
 */
import { afterEach, describe, expect, it, vi } from 'vitest';

import { act, type FC } from 'react';
import type { Connection } from '@iobroker/adapter-react-v5';
import type { CustomPaletteProperties } from '@iobroker/types-vis-2';

import { clearDraftTheme, getDraftTheme } from '../lib/theme/draftThemeStore';
import { setLastKnownTheme } from '../lib/theme/lastKnownTheme';
import { renderComponent, type RenderComponentHandle } from '../lib/testing/testHarness';
import ThemeWizardButton from './ThemeWizardButton';
import { STUDIO_CONTAINER_ID, closeStudio, openStudio } from './studioHost';

/** A socket whose state read never answers — the seed stays the draft. */
const fakeSocket = (): Connection =>
    ({
        getState: () => new Promise(() => {}),
        setState: vi.fn(() => Promise.resolve()),
    }) as unknown as Connection;

/** Waits for the draft store's rAF flush. */
const nextFrame = (): Promise<void> =>
    act(
        () =>
            new Promise<void>(resolve => {
                requestAnimationFrame(() => resolve());
            }),
    );

/** All studio containers on the page. */
const containers = (): Element[] => Array.from(document.querySelectorAll(`#${STUDIO_CONTAINER_ID}`));

/** The studio's panel surface (the floating Paper). */
const panel = (): HTMLElement | null =>
    document.getElementById(STUDIO_CONTAINER_ID)?.querySelector<HTMLElement>('.MuiPaper-root') ?? null;

/** Finds a button anywhere on the page by its (stubbed, key-valued) label. */
const buttonByText = (label: string): HTMLButtonElement => {
    const found = Array.from(document.querySelectorAll('button')).find(b => b.textContent === label);
    if (!found) {
        throw new Error(`button "${label}" not found`);
    }
    return found;
};

type ButtonProps = Pick<CustomPaletteProperties, 'socket' | 'themeType'>;

/** Mounts the palette button (vis-2 passes more palette context; only these two are read). */
const mountButton = (props: ButtonProps): RenderComponentHandle<ButtonProps> =>
    renderComponent<ButtonProps>(ThemeWizardButton as unknown as FC<ButtonProps>, props);

/** Clicks the palette button inside the given handle's container. */
const clickButton = (handle: RenderComponentHandle<ButtonProps>): void => {
    act(() => {
        handle.container.querySelector('button')?.click();
    });
};

let buttonHandle: RenderComponentHandle<ButtonProps> | null = null;

afterEach(async () => {
    buttonHandle?.unmount();
    buttonHandle = null;
    act(() => closeStudio());
    document.getElementById(STUDIO_CONTAINER_ID)?.remove();
    clearDraftTheme();
    await nextFrame();
});

describe('studio host', () => {
    it('open mounts the studio in one container directly under document.body', () => {
        act(() => openStudio({ socket: fakeSocket(), themeType: 'light' }));

        expect(containers()).toHaveLength(1);
        expect(containers()[0].parentElement).toBe(document.body);
        expect(panel()?.textContent).toContain('theme_wizard_title');
    });

    it('a second open adds no container and brings the studio to the front', () => {
        const socket = fakeSocket();
        act(() => openStudio({ socket, themeType: 'light' }));
        const later = document.createElement('div');
        document.body.appendChild(later);

        act(() => openStudio({ socket, themeType: 'light' }));

        expect(containers()).toHaveLength(1);
        expect(document.body.lastElementChild).toBe(containers()[0]);
        expect(document.querySelectorAll('.MuiPaper-root')).toHaveLength(1);
        later.remove();
    });

    it('closing through the panel removes the container and ends the session', async () => {
        setLastKnownTheme({ palette: { primary: { main: '#ff0000' } } });
        act(() => openStudio({ socket: fakeSocket(), themeType: 'light' }));
        await nextFrame();
        expect(getDraftTheme()).not.toBeNull();

        act(() => {
            document.querySelector<HTMLButtonElement>('button[aria-label="theme_studio_close"]')?.click();
        });
        await nextFrame();

        expect(containers()).toHaveLength(0);
        expect(getDraftTheme()).toBeNull();
        setLastKnownTheme(null);
    });

    it('the discard confirm portals out of the root and its confirm closes the studio', async () => {
        setLastKnownTheme({ palette: { primary: { main: '#ff0000' } } });
        act(() => openStudio({ socket: fakeSocket(), themeType: 'light' }));
        // Reset makes the draft dirty, so closing asks first.
        act(() => buttonByText('theme_wizard_reset').click());
        act(() => {
            document.querySelector<HTMLButtonElement>('button[aria-label="theme_studio_close"]')?.click();
        });
        const dialog = document.querySelector('[role="dialog"]');
        expect(dialog?.textContent).toContain('theme_studio_discard_text');
        expect(document.getElementById(STUDIO_CONTAINER_ID)?.contains(dialog as Node)).toBe(false);

        act(() => buttonByText('theme_studio_discard').click());
        await nextFrame();

        expect(containers()).toHaveLength(0);
        expect(getDraftTheme()).toBeNull();
        setLastKnownTheme(null);
    });

    it('reopens fresh after a close', () => {
        const socket = fakeSocket();
        act(() => openStudio({ socket, themeType: 'light' }));
        act(() => closeStudio());
        expect(containers()).toHaveLength(0);

        act(() => openStudio({ socket, themeType: 'light' }));

        expect(containers()).toHaveLength(1);
        expect(panel()).not.toBeNull();
    });

    it('reuses a leftover container with the studio id (module reload)', () => {
        const leftover = document.createElement('div');
        leftover.id = STUDIO_CONTAINER_ID;
        document.body.appendChild(leftover);

        act(() => openStudio({ socket: fakeSocket(), themeType: 'light' }));

        expect(containers()).toEqual([leftover]);
        expect(panel()).not.toBeNull();
    });
});

describe('palette button as trigger', () => {
    it('the studio stays open when the palette button unmounts', () => {
        buttonHandle = mountButton({ socket: fakeSocket(), themeType: 'light' });
        clickButton(buttonHandle);
        expect(panel()).not.toBeNull();

        buttonHandle.unmount();
        buttonHandle = null;

        expect(containers()).toHaveLength(1);
        expect(panel()?.textContent).toContain('theme_wizard_title');
    });

    it('a changed host mode from the button reaches the open studio', () => {
        const socket = fakeSocket();
        buttonHandle = mountButton({ socket, themeType: 'light' });
        clickButton(buttonHandle);
        const lightBg = getComputedStyle(panel() as HTMLElement).backgroundColor;

        buttonHandle.rerender({ socket, themeType: 'dark' });

        const darkBg = getComputedStyle(panel() as HTMLElement).backgroundColor;
        expect(lightBg.toLowerCase()).toBe('#ffffff');
        expect(darkBg.toLowerCase()).toBe('#121a26');
    });

    it('rendering the button alone opens nothing', () => {
        buttonHandle = mountButton({ socket: fakeSocket(), themeType: 'light' });

        expect(containers()).toHaveLength(0);
    });
});
