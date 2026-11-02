/**
 * The Content-Box: the area a widget's contents live in, measured and published by the frame.
 *
 * @module hooks/useContentBox
 * @remarks
 * CollectionBase measures its inner paper (BASE-PAPER-1) — so square/circle sizing, the outlined
 * border and padding are already reflected — and publishes `{ width, height }` around its
 * children (ADR-0098). Widget bodies read it with {@link useContentBox} instead of mounting their
 * own 100 % wrapper and ResizeObserver; they never read the frame's DOM, so the frame may
 * restructure freely. Both values are `undefined` until the first measurement, and outside
 * CollectionBase — a widget rendering without the frame measures itself.
 */

import { createContext, useContext, useMemo } from 'react';
import useElementDimensions from './useElementDimensions';

/** The Content-Box in px (rounded); `undefined` until measured. */
export interface ContentBox {
    readonly width: number | undefined;
    readonly height: number | undefined;
}

/** The box before the first measurement, and outside the frame. */
const UNMEASURED: ContentBox = Object.freeze({ width: undefined, height: undefined });

/** The published box — provided by CollectionBase around its children. */
export const ContentBoxContext = createContext<ContentBox>(UNMEASURED);

/**
 * Test seam: a fixed box the frame publishes instead of measuring. Provided only by the test
 * scene (`withContentBox` in lib/testing/collectionScene) — DOM tests run on an inert
 * ResizeObserver; production never sets it.
 */
export const InjectedContentBoxContext = createContext<ContentBox | undefined>(undefined);

/**
 * The frame's side: measures the element the contents live in, unless the test scene injects a
 * box. Called by CollectionBase only.
 *
 * @param element - The frame's inner paper, `null` until it mounts.
 * @returns The box to publish, referentially stable until its size changes.
 */
export function useMeasuredContentBox(element: HTMLElement | null): ContentBox {
    const injected = useContext(InjectedContentBoxContext);
    const { width, height } = useElementDimensions(injected ? null : element);

    return useMemo(() => injected ?? { width, height }, [injected, width, height]);
}

/**
 * The Content-Box of the surrounding frame.
 *
 * @returns `{ width, height }` in px — both `undefined` until the first measurement and outside
 * CollectionBase.
 * @example
 * ```tsx
 * const { width, height } = useContentBox();
 * ```
 */
export default function useContentBox(): ContentBox {
    return useContext(ContentBoxContext);
}
