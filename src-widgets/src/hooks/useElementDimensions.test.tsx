/**
 * useElementDimensions — the observed content size of an element.
 *
 * @module hooks/useElementDimensions.test
 * @remarks
 * The ResizeObserver reports the content rect (rounded to whole pixels); without an element the
 * dimensions are unknown, also after an element went away.
 */
import { act } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import useElementDimensions, { type ElementDimensions } from './useElementDimensions';
import { renderHook, type RenderHookHandle } from '../lib/testing/testHarness';

/** Content rect every observed element reports on observe. */
let contentRect = { width: 120.4, height: 80.6 };

beforeEach(() => {
    contentRect = { width: 120.4, height: 80.6 };
    vi.stubGlobal(
        'ResizeObserver',
        class {
            private readonly callback: ResizeObserverCallback;

            constructor(callback: ResizeObserverCallback) {
                this.callback = callback;
            }

            observe(target: Element): void {
                this.callback([{ target, contentRect } as unknown as ResizeObserverEntry], this);
            }

            /* eslint-disable class-methods-use-this -- nothing to release */
            unobserve(): void {}
            disconnect(): void {}
            /* eslint-enable class-methods-use-this */
        },
    );
});

const mounted: RenderHookHandle<ElementDimensions>[] = [];
afterEach(() => {
    mounted.splice(0).forEach(handle => handle.unmount());
    vi.unstubAllGlobals();
});

const mount = (element: HTMLElement | null): RenderHookHandle<ElementDimensions> => {
    const handle = renderHook(() => useElementDimensions(element));
    mounted.push(handle);
    return handle;
};

describe('useElementDimensions', () => {
    it('reports the rounded content size of the observed element', () => {
        const handle = mount(document.createElement('div'));
        expect(handle.result.current).toEqual({ width: 120, height: 81 });
    });

    it('knows no dimensions without an element', () => {
        const handle = mount(null);
        expect(handle.result.current).toEqual({ width: undefined, height: undefined });
    });

    it('drops the dimensions when the element goes away', () => {
        const handle = mount(document.createElement('div'));
        act(() => {
            handle.rerender(() => useElementDimensions(null));
        });
        expect(handle.result.current).toEqual({ width: undefined, height: undefined });
    });
});
