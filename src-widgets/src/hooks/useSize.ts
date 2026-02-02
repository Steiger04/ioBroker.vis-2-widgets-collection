/**
 * Hook that computes the effective widget size based on configuration (square/circle) and available space.
 *
 * @module hooks/useSize
 * @remarks
 * For square/circle widgets, the resulting width/height is based on the smaller of the available
 * dimensions after subtracting base padding.
 */

import { useContext, useEffect, useState, useMemo, type RefObject } from 'react';
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
 * @param ref - Ref to the element that should be measured.
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
            basePadding: widget.data.basePadding || 0,
            isSquare: widget.data.square || false,
            isCircle: widget.data.circle || false,
        }),
        [widget.data.basePadding, widget.data.square, widget.data.circle],
    );

    const paddingOffset = useMemo(() => {
        return widgetConfig.basePadding * 16;
    }, [widgetConfig.basePadding]);

    useEffect(() => {
        if (!clientWidth || !clientHeight || clientWidth < 0 || clientHeight < 0) {
            return;
        }

        if (!widgetConfig.isSquare && !widgetConfig.isCircle) {
            setWidth('100%');
            setHeight('100%');
            return;
        }

        const hasMinimumSpace = clientWidth >= paddingOffset && clientHeight >= paddingOffset;

        if (!hasMinimumSpace) {
            setWidth('0px');
            setHeight('0px');
            return;
        }

        const availableWidth = clientWidth - paddingOffset;
        const availableHeight = clientHeight - paddingOffset;
        const squareSize = Math.min(availableWidth, availableHeight);

        setWidth(`${squareSize}px`);
        setHeight(`${squareSize}px`);
    }, [clientWidth, clientHeight, paddingOffset, widgetConfig.isSquare, widgetConfig.isCircle]);

    return { width, height };
};

export default useSize;
