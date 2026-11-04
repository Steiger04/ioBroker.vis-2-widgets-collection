/**
 * Layout stubs for testing the following popover in happy-dom (no layout engine).
 *
 * @module components/colorPicker/testing/popoverLayoutStubs
 * @remarks
 * `installPopoverLayoutStubs()` (call in `beforeEach`) stubs the ResizeObserver (fired by hand
 * via {@link resizeContent}), every element's `getBoundingClientRect` (the anchor's rect from
 * {@link layout}), the `.MuiPopover-paper`'s `offsetHeight` and `window.innerHeight` (800). MUI
 * writes the computed position onto the paper — read it with {@link paperTop}. Undo with
 * `vi.restoreAllMocks()` + `vi.unstubAllGlobals()` in `afterEach`.
 */
import { act } from 'react';
import { vi } from 'vitest';

/** One stubbed observer: its callback and the elements it observes. */
interface StubObserverEntry {
    callback: ResizeObserverCallback;
    targets: Set<Element>;
}

const observers: StubObserverEntry[] = [];

/** ResizeObserver stub: records the observed elements so a test can report a new content size. */
class StubResizeObserver {
    private readonly entry: StubObserverEntry;

    constructor(callback: ResizeObserverCallback) {
        this.entry = { callback, targets: new Set() };
        observers.push(this.entry);
    }

    observe(target: Element): void {
        this.entry.targets.add(target);
    }

    unobserve(target: Element): void {
        this.entry.targets.delete(target);
    }

    disconnect(): void {
        this.entry.targets.clear();
    }
}

/** Layout the stubs report: the anchor's rect and the popover paper's height (mutable per test). */
export const layout = { anchorTop: 100, anchorHeight: 20, paperHeight: 200 };

/** Installs the stubs and resets {@link layout} to its defaults. */
export function installPopoverLayoutStubs(): void {
    observers.length = 0;
    layout.anchorTop = 100;
    layout.anchorHeight = 20;
    layout.paperHeight = 200;
    vi.stubGlobal('ResizeObserver', StubResizeObserver);
    vi.stubGlobal('innerHeight', 800);
    vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockImplementation(
        () =>
            ({
                top: layout.anchorTop,
                bottom: layout.anchorTop + layout.anchorHeight,
                left: 100,
                right: 300,
                width: 200,
                height: layout.anchorHeight,
                x: 100,
                y: layout.anchorTop,
            }) as DOMRect,
    );
    vi.spyOn(HTMLElement.prototype, 'offsetHeight', 'get').mockImplementation(function (this: HTMLElement) {
        return this.classList.contains('MuiPopover-paper') ? layout.paperHeight : 0;
    });
}

/** The content now measures `height`: the paper grows with it, every observer is told. */
export function resizeContent(height: number): void {
    layout.paperHeight = height;
    act(() => {
        for (const { callback, targets } of observers) {
            for (const target of targets) {
                callback(
                    [{ target, contentRect: { width: 220, height } } as unknown as ResizeObserverEntry],
                    {} as ResizeObserver,
                );
            }
        }
    });
}

/** The top MUI wrote onto the popover paper. */
export function paperTop(): string | undefined {
    return document.body.querySelector<HTMLElement>('.MuiPopover-paper')?.style.top;
}
