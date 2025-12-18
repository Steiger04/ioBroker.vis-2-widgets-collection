/**
 * Hook that measures an element using `ResizeObserver` and exposes width/height/maxWidth.
 *
 * @module hooks/useElementDimensions
 * @remarks
 * `maxWidth` is derived from the element size and an optional slider size.
 * It is used by some widgets to keep slider controls within bounds.
 */

import { useEffect, useState, useCallback, useMemo, type RefObject } from 'react';

/**
 * Measured element dimensions.
 */
export interface ElementDimensions {
    /** Current width in px (rounded), if measurable. */
    width: number | undefined;
    /** Current height in px (rounded), if measurable. */
    height: number | undefined;
    /** Derived max width used by slider layouts, if measurable. */
    maxWidth: number | undefined;
}

/**
 * Measures a DOM element and updates on resize.
 *
 * @param element - Element or ref to measure.
 * @param sliderSize - Optional slider size used for calculating `maxWidth` (default: 28).
 * @returns Current `width`, `height` and `maxWidth`.
 * @example
 * ```tsx
 * const ref = useRef<HTMLDivElement>(null);
 * const { width, height } = useElementDimensions(ref);
 *
 * return <div ref={ref}>{width}×{height}</div>;
 * ```
 */
const useElementDimensions = (
    element: HTMLElement | RefObject<HTMLElement | HTMLDivElement> | null | undefined,
    sliderSize: number = 28,
): ElementDimensions => {
    const [dimensions, setDimensions] = useState<ElementDimensions>({
        width: undefined,
        height: undefined,
        maxWidth: undefined,
    });

    const updateDimensions = useCallback(
        (entries: ResizeObserverEntry[]) => {
            if (entries.length === 0) {
                return;
            }

            const entry = entries[0];
            const { width: clientWidth, height: clientHeight } = entry.contentRect;

            const width = Math.round(clientWidth);
            const height = Math.round(clientHeight);
            const maxWidth = width <= height + sliderSize + 12 ? width - sliderSize - 12 : height;

            setDimensions({
                width,
                height,
                maxWidth,
            });
        },
        [sliderSize],
    );

    const targetElement = useMemo(() => {
        if (!element) {
            return null;
        }

        if (typeof element === 'object' && 'current' in element) {
            return element.current;
        }

        return element;
    }, [element]);

    useEffect(() => {
        if (!targetElement) {
            setDimensions({ width: undefined, height: undefined, maxWidth: undefined });
            return;
        }

        const observer = new ResizeObserver(updateDimensions);

        try {
            observer.observe(targetElement);
        } catch (error) {
            console.warn('ResizeObserver failed to observe element:', error);
            return;
        }

        return () => {
            try {
                observer.disconnect();
            } catch (error) {
                console.warn('ResizeObserver cleanup failed:', error);
            }
        };
    }, [targetElement, updateDimensions]);

    return dimensions;
};

export default useElementDimensions;

/**
 * Compatibility export for older code paths.
 *
 * @remarks
 * `useRefDimensions` is kept to avoid churn in widget implementations.
 */
export { useElementDimensions as useRefDimensions };
