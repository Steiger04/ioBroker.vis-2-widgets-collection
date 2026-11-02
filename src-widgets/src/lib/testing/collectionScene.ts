/**
 * Shared scaffolding of the collection DOM tests: the preview scene around one widget, and its
 * body mounted on the real CollectionProvider.
 *
 * @module lib/testing/collectionScene
 * @remarks
 * Extracted from the collection DOM tests and the useData hook test, which each carried a copy.
 * Only the scene's envelope is shared — light mode, inside its card, 480 × 120, the OID's status —
 * while each test keeps its widget data in view: the OID, its object and the state rows. The mount records the context's `setState` (optimistic patch) and `setValue`
 * (backend write) as mocks; the preview context's own are no-ops. It mounts through testHarness,
 * so importing this module sets IS_REACT_ACT_ENVIRONMENT. A scene may carry a Content-Box
 * ({@link withContentBox}): the frame publishes it instead of measuring under the inert
 * ResizeObserver.
 */
import { createElement, type FC } from 'react';
import { afterEach, vi } from 'vitest';

import CollectionProvider from '../../components/CollectionProvider';
import { InjectedContentBoxContext, type ContentBox } from '../../hooks/useContentBox';
import { buildPreviewContext } from '../../preview/mockContext';
import { renderComponent } from './testHarness';
import type { AllCollectionContextProps } from '../../types';
import type { PreviewScene } from '../../preview/types';

/**
 * Installs an inert ResizeObserver unless the environment provides one: the frame (its
 * Content-Box) and bodies measuring their own elements (useElementDimensions) observe on mount.
 * Call it once at module level; give a scene a box with {@link withContentBox}.
 */
export function installInertResizeObserver(): void {
    if (typeof (globalThis as { ResizeObserver?: unknown }).ResizeObserver !== 'undefined') {
        return;
    }
    /* eslint-disable class-methods-use-this -- inert stub, nothing to use `this` for */
    (globalThis as { ResizeObserver?: unknown }).ResizeObserver = class {
        observe(): void {}
        unobserve(): void {}
        disconnect(): void {}
    };
    /* eslint-enable class-methods-use-this */
}

/**
 * The preview scene of one collection widget: light mode, inside its card, 480 × 120.
 *
 * @param slug - The scene's slug.
 * @param data - The widget data — `oid` names the state whose value the scene carries, unless
 * `valueOid` names another one.
 * @param status - The value of that state.
 * @param valueOid - The state carrying `status`, for widgets whose state is not `data.oid`
 * (e.g. the Dialog's Sitzungs-OID `dialogId`). Defaults to `data.oid`.
 */
export const collectionScene = (
    slug: string,
    data: { oid?: string } & Record<string, unknown>,
    status: unknown,
    valueOid: string | undefined = data.oid,
): PreviewScene =>
    ({
        slug,
        size: { width: 480, height: 120 },
        context: {
            widget: { data, style: {} },
            values: { [`${valueOid}.val`]: status },
            mode: 'light',
            wrappedContent: true,
        },
    }) as unknown as PreviewScene;

/** A preview scene that may carry the Content-Box the frame publishes ({@link withContentBox}). */
export interface CollectionScene extends PreviewScene {
    /** Published by CollectionBase instead of its measurement. */
    contentBox?: ContentBox;
}

/**
 * The same scene with a Content-Box: CollectionBase publishes `contentBox` to the body instead of
 * measuring (the ResizeObserver stays inert for everything else).
 *
 * @param scene - The preview scene.
 * @param contentBox - The box in px.
 */
export const withContentBox = (scene: PreviewScene, contentBox: ContentBox): CollectionScene => ({
    ...scene,
    contentBox,
});

/** A collection body mounted on the real CollectionProvider. */
export interface MountedCollectionBody {
    container: HTMLDivElement;
    /** The context's `setState` — the optimistic patch lands here. */
    setState: ReturnType<typeof vi.fn>;
    /** The context's `setValue` — the backend write lands here. */
    setValue: ReturnType<typeof vi.fn>;
    /**
     * Re-renders the same body over the next scene — new widget data or state values, the way the
     * host re-renders on a subscription update; component state survives, the mocks stay the same.
     */
    rerender: (scene: CollectionScene) => void;
    unmount: () => void;
}

const CollectionHost: FC<{ context: AllCollectionContextProps; body: FC; contentBox?: ContentBox }> = ({
    context,
    body,
    contentBox,
}) =>
    createElement(
        InjectedContentBoxContext.Provider,
        { value: contentBox },
        createElement(CollectionProvider, { context } as never, createElement(body)),
    );

/**
 * Mounts a collection body (or a hook probe) inside the real CollectionProvider over the scene's
 * preview context, `setState` and `setValue` recorded.
 *
 * @param body - The component rendered inside the provider.
 * @param scene - The preview scene, optionally with a Content-Box ({@link withContentBox}).
 * @param extraContext - Widget-specific context entries merged over the preview context, the
 * way a widget's `renderWithProvider` adds them (e.g. the Dialog's `getWidgetView`).
 */
export function mountCollectionBody(
    body: FC,
    scene: CollectionScene,
    extraContext: Record<string, unknown> = {},
): MountedCollectionBody {
    const setState = vi.fn();
    const setValue = vi.fn();
    const contextOf = (next: CollectionScene): AllCollectionContextProps =>
        ({
            ...buildPreviewContext(next),
            ...extraContext,
            setState,
            setValue,
        }) as unknown as AllCollectionContextProps;

    const handle = renderComponent(CollectionHost, { context: contextOf(scene), body, contentBox: scene.contentBox });
    return {
        container: handle.container,
        setState,
        setValue,
        rerender: (next: CollectionScene): void =>
            handle.rerender({ context: contextOf(next), body, contentBox: next.contentBox }),
        unmount: handle.unmount,
    };
}

/**
 * A {@link mountCollectionBody} whose bodies are unmounted after each test — the `mounted[]` +
 * `afterEach(unmount)` pattern in one call. Optional: call it once at module level, it registers
 * the `afterEach` hook.
 *
 * @returns The mount function, called like {@link mountCollectionBody}.
 */
export function testScopedMount(): typeof mountCollectionBody {
    const mounted: MountedCollectionBody[] = [];
    afterEach(() => {
        mounted.splice(0).forEach(body => body.unmount());
    });
    return (body, scene, extraContext) => {
        const handle = mountCollectionBody(body, scene, extraContext);
        mounted.push(handle);
        return handle;
    };
}
