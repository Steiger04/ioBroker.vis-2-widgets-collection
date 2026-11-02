/**
 * Hook that measures an element using `ResizeObserver` and exposes width/height.
 *
 * @module hooks/useElementDimensions
 * @remarks
 * Generic measurement only — a widget's own bounds are derived at its call site (Light2's
 * main-picker bound lives in its colorPickerMemos). Bodies inside CollectionBase read the
 * frame's Content-Box ({@link module:hooks/useContentBox}) instead of measuring themselves.
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
}

/**
 * Measures a DOM element and updates on resize.
 *
 * @param element - Element or ref to measure.
 * @returns Current `width` and `height`.
 * @example
 * ```tsx
 * const ref = useRef<HTMLDivElement>(null);
 * const { width, height } = useElementDimensions(ref);
 *
 * return <div ref={ref}>{width}×{height}</div>;
 * ```
 */
const useElementDimensions = (element: HTMLElement | RefObject<HTMLElement> | null | undefined): ElementDimensions => {
    const [dimensions, setDimensions] = useState<ElementDimensions>({
        width: undefined,
        height: undefined,
    });

    const updateDimensions = useCallback((entries: ResizeObserverEntry[]) => {
        if (entries.length === 0) {
            return;
        }

        const entry = entries[0];
        const { width: clientWidth, height: clientHeight } = entry.contentRect;

        setDimensions({
            width: Math.round(clientWidth),
            height: Math.round(clientHeight),
        });
    }, []);

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
            setDimensions({ width: undefined, height: undefined });
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
