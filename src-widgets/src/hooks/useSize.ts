import { useContext, useEffect, useState, useMemo, type RefObject } from 'react';
import { CollectionContext } from '../components/CollectionProvider';
import useElementDimensions from './useElementDimensions';

/**
 * Interface für Dimensionen-Return-Werte
 */
interface Dimensions {
    width: number | null;
    height: number | null;
}

/**
 * Interface für den Return-Typ des useSize Hooks
 */
interface UseSizeReturn {
    width: string;
    height: string;
}

/**
 * Hook für dynamische Größenberechnung basierend auf Widget-Konfiguration
 * Unterstützt quadratische und kreisförmige Layouts mit automatischer Größenanpassung
 *
 * @param ref React RefObject für das zu messende Element
 * @returns Objekt mit berechneter width und height als CSS-Strings
 */
const useSize = (ref: RefObject<HTMLElement | HTMLDivElement>): UseSizeReturn => {
    const { widget } = useContext(CollectionContext);

    const [width, setWidth] = useState<string>('100%');
    const [height, setHeight] = useState<string>('100%');

    const { width: clientWidth, height: clientHeight } = useElementDimensions(ref) as Dimensions;

    // Memoization der Widget-Konfiguration für bessere Performance
    const widgetConfig = useMemo(
        () => ({
            basePadding: widget.data.basePadding || 0,
            isSquare: widget.data.square || false,
            isCircle: widget.data.circle || false,
        }),
        [widget.data.basePadding, widget.data.square, widget.data.circle],
    );

    // Memoization der Padding-Berechnung
    const paddingOffset = useMemo(() => {
        return widgetConfig.basePadding * 16;
    }, [widgetConfig.basePadding]);

    useEffect(() => {
        // Frühe Rückgabe wenn Dimensionen nicht verfügbar
        if (!clientWidth || !clientHeight || clientWidth < 0 || clientHeight < 0) {
            return;
        }

        // Standard-Layout: Vollbreite/Vollhöhe
        if (!widgetConfig.isSquare && !widgetConfig.isCircle) {
            setWidth('100%');
            setHeight('100%');
            return;
        }

        // Quadratisches/Kreisförmiges Layout
        const hasMinimumSpace = clientWidth >= paddingOffset && clientHeight >= paddingOffset;

        if (!hasMinimumSpace) {
            // Nicht genug Platz - Element ausblenden
            setWidth('0px');
            setHeight('0px');
            return;
        }

        // Berechnung der quadratischen Größe basierend auf kleinerer Dimension
        const availableWidth = clientWidth - paddingOffset;
        const availableHeight = clientHeight - paddingOffset;
        const squareSize = Math.min(availableWidth, availableHeight);

        setWidth(`${squareSize}px`);
        setHeight(`${squareSize}px`);
    }, [clientWidth, clientHeight, paddingOffset, widgetConfig.isSquare, widgetConfig.isCircle]);

    return { width, height };
};

export default useSize;
