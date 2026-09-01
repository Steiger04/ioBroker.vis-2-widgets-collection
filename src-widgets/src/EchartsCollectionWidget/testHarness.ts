/**
 * A minimal renderHook harness (K5) — the ADR-0046 implementation addendum's "no renderHook
 * infrastructure" resolution: React 18's stable `act` + `react-dom/client` over a happy-dom
 * element, with NO @testing-library dependency (the project's chosen dev-dep abstinence).
 *
 * @module EchartsCollectionWidget/testHarness
 * @remarks
 * Widget-local on purpose — extract into `src/lib/testing/` on the second consumer (the
 * project's "extract on second use" stance). Time-based behaviour is driven with vitest fake
 * timers by the TESTS; the harness only owns mount / rerender / unmount. `rerender` takes the
 * NEXT hook callback so effect dependencies change exactly as they would in a real component.
 */
import { act, createElement, type FC, type ReactElement } from 'react';
import { createRoot, type Root } from 'react-dom/client';

// React 18 requires the act-environment flag when driving updates outside react-dom/test-utils.
(globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

/** The mounted hook's view: `result.current` is the latest hook return. */
export interface RenderHookHandle<T> {
    result: { current: T };
    /** Re-render with the next hook callback (same component — effects re-run on new deps). */
    rerender: (next: () => T) => void;
    unmount: () => void;
}

/**
 * Mount a hook-calling component and return its live result.
 *
 * @param initialCallback - Called on every render; return the hook's value.
 */
export function renderHook<T>(initialCallback: () => T): RenderHookHandle<T> {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const result: { current: T } = { current: undefined as unknown as T };
    let callback = initialCallback;
    let root: Root | null = createRoot(container);
    const Probe = (): null => {
        result.current = callback();
        return null;
    };
    act(() => {
        root?.render(createElement(Probe));
    });
    return {
        result,
        rerender: (next: () => T): void => {
            callback = next;
            act(() => {
                root?.render(createElement(Probe));
            });
        },
        unmount: (): void => {
            act(() => {
                root?.unmount();
            });
            root = null;
            container.remove();
        },
    };
}

/** A mounted component's view — the container is the assertion surface (text/DOM queries). */
export interface RenderComponentHandle<P> {
    container: HTMLDivElement;
    /** Re-render with the next props (same component — state survives). */
    rerender: (next: P) => void;
    unmount: () => void;
}

/**
 * Mount a plain component (the renderHook counterpart for prop-driven components — the
 * "second consumer" the header note reserved this harness for). Returns the live container;
 * assertions read it, updates go through `rerender` with the next props.
 *
 * @param type - The component to mount.
 * @param initialProps - Its initial props.
 */
export function renderComponent<P extends object>(type: FC<P>, initialProps: P): RenderComponentHandle<P> {
    const container = document.createElement('div');
    document.body.appendChild(container);
    let props = initialProps;
    let root: Root | null = createRoot(container);
    // createElement's overloads refuse a naked generic FC<P> — the arrow cast keeps the
    // call-site typing while matching the FunctionComponent overload inside.
    const element = (p: P): ReactElement => createElement(type as (props: P) => ReactElement, p);
    act(() => {
        root?.render(element(props));
    });
    return {
        container,
        rerender: (next: P): void => {
            props = next;
            act(() => {
                root?.render(element(props));
            });
        },
        unmount: (): void => {
            act(() => {
                root?.unmount();
            });
            root = null;
            container.remove();
        },
    };
}
