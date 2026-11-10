/**
 * Hook that computes the effective widget size based on configuration (square/circle) and available space.
 *
 * @module hooks/useSize
 * @remarks
 * For square/circle widgets, the resulting width/height is the smaller side of the measured
 * element's content area. The ResizeObserver's `contentRect` already excludes the element's own
 * padding (CollectionBase's BASE-BOX-1 carries `p: basePadding`), so the base padding is not
 * subtracted again.
 */

import { useContext, useState, useMemo, type RefObject } from 'react';
import { CollectionContext } from '../components/CollectionProvider';
import useElementDimensions from './useElementDimensions';

/**
 * Dimensions returned by {@link module:hooks/useElementDimensions.default}.
 */
interface Dimensions {
    width: number | null;
    height: number | null;
}

/**
 * Return type for {@link module:hooks/useSize.default}.
 */
interface UseSizeReturn {
    /** CSS width value (e.g. `"100%"`, `"120px"`). */
    width: string;
    /** CSS height value (e.g. `"100%"`, `"120px"`). */
    height: string;
}

/**
 * Computes the widget size for square/circle layouts.
 *
 * @param ref - Ref to the element whose content area (its padding excluded) bounds the frame.
 * @returns Computed `width` and `height` as CSS strings.
 * @example
 * ```tsx
 * const ref = useRef<HTMLDivElement>(null);
 * const { width, height } = useSize(ref);
 *
 * return <div ref={ref} style={{ width, height }} />;
 * ```
 */
const useSize = (ref: HTMLElement | RefObject<HTMLElement | HTMLDivElement> | null): UseSizeReturn => {
    const { widget } = useContext(CollectionContext);

    const [width, setWidth] = useState<string>('100%');
    const [height, setHeight] = useState<string>('100%');

    const { width: clientWidth, height: clientHeight } = useElementDimensions(ref) as Dimensions;

    const widgetConfig = useMemo(
        () => ({
            isSquare: widget.data.square || false,
            isCircle: widget.data.circle || false,
        }),
        [widget.data.square, widget.data.circle],
    );

    // Re-sized while rendering whenever the measurement or the shape changes; without a usable
    // measurement the last size stays.
    const sizeInputs = [clientWidth, clientHeight, widgetConfig.isSquare, widgetConfig.isCircle] as const;
    const [sizedFor, setSizedFor] = useState<typeof sizeInputs>();
    if (!sizedFor || sizeInputs.some((input, i) => input !== sizedFor[i])) {
        setSizedFor(sizeInputs);
        if (clientWidth && clientHeight && clientWidth >= 0 && clientHeight >= 0) {
            if (!widgetConfig.isSquare && !widgetConfig.isCircle) {
                setWidth('100%');
                setHeight('100%');
            } else {
                // The measurement is the content area: the padding is already outside it.
                const squareSize = Math.min(clientWidth, clientHeight);

                setWidth(`${squareSize}px`);
                setHeight(`${squareSize}px`);
            }
        }
    }

    return { width, height };
};

export default useSize;
