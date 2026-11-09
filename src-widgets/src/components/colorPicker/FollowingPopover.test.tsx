/**
 * FollowingPopover — the opening side and the release of a held popover.
 *
 * @module components/colorPicker/FollowingPopover.test
 * @remarks
 * The popover opens on the side of its anchor with more room. A shrunk popover is held (MUI
 * leaves the paper's top/left alone); reopening lets go, so the paper is placed at the anchor.
 */
import { act } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import FollowingPopover, { type FollowingPopoverProps } from './FollowingPopover';
import { renderComponent, type RenderComponentHandle } from '../../lib/testing/testHarness';

/** The ResizeObserver callbacks of the observed contents, newest last. */
let observers: ResizeObserverCallback[] = [];

beforeEach(() => {
    observers = [];
    vi.stubGlobal(
        'ResizeObserver',
        class {
            constructor(callback: ResizeObserverCallback) {
                observers.push(callback);
            }

            /* eslint-disable class-methods-use-this -- the test reports the sizes itself */
            observe(): void {}
            unobserve(): void {}
            disconnect(): void {}
            /* eslint-enable class-methods-use-this */
        },
    );
});

const mounted: RenderComponentHandle<FollowingPopoverProps>[] = [];
afterEach(() => {
    mounted.splice(0).forEach(handle => handle.unmount());
    vi.unstubAllGlobals();
});

/** An anchor whose box sits at the given vertical position of the viewport. */
const anchorAt = (top: number): HTMLElement => {
    const anchor = document.createElement('button');
    document.body.appendChild(anchor);
    anchor.getBoundingClientRect = () => new DOMRect(100, top, 40, 20);
    return anchor;
};

const props = (anchorEl: HTMLElement, open: boolean): FollowingPopoverProps => ({
    anchorEl,
    open,
    onClose: vi.fn(),
    children: 'content',
});

const mount = (anchorEl: HTMLElement, open: boolean): RenderComponentHandle<FollowingPopoverProps> => {
    const handle = renderComponent(FollowingPopover, props(anchorEl, open));
    mounted.push(handle);
    return handle;
};

/** The popover paper renders into a portal on the body. */
const paper = (): HTMLElement | null => document.body.querySelector('.MuiPopover-paper');

/** Reports a content size to the newest observer. */
const reportSize = (width: number, height: number): void => {
    act(() => {
        observers[observers.length - 1]?.([{ contentRect: { width, height } } as ResizeObserverEntry], {
            disconnect: () => undefined,
        } as unknown as ResizeObserver);
    });
};

describe('FollowingPopover', () => {
    it('opens below an anchor with more room below', () => {
        // The paper hangs from the anchor's bottom edge.
        mount(anchorAt(100), true);
        expect(paper()?.style.top).toBe('120px');
    });

    it('opens above an anchor with more room above', () => {
        // The paper stands on the anchor's top edge (it has no height of its own here).
        mount(anchorAt(window.innerHeight - 40), true);
        expect(paper()?.style.top).toBe(`${window.innerHeight - 40}px`);
    });

    it('places the paper at the moved anchor when a held popover reopens', () => {
        const anchor = anchorAt(100);
        const handle = mount(anchor, true);
        reportSize(200, 200);
        reportSize(100, 100);

        // Held: the paper stays where it was, even across the close (its exit still runs).
        handle.rerender(props(anchor, false));
        anchor.getBoundingClientRect = () => new DOMRect(100, 300, 40, 20);
        handle.rerender(props(anchor, true));
        expect(paper()?.style.top).toBe('320px');
    });
});
