import { useEffect, useState, useCallback, useMemo, type RefObject } from 'react';

/**
 * Interface für Dimensionen-Return-Werte
 */
interface ElementDimensions {
    width: number | undefined;
    height: number | undefined;
    maxWidth: number | undefined;
}

/**
 * Hook für Echtzeit-Dimensionsmessung von DOM-Elementen
 * Verwendet ResizeObserver für optimale Performance und automatische Updates
 *
 * @param element Element oder RefObject für das zu messende DOM-Element
 * @returns Objekt mit aktueller width und height (undefined wenn Element nicht verfügbar)
 */
const useElementDimensions = (
    element: HTMLElement | RefObject<HTMLElement | HTMLDivElement> | null | undefined,
): ElementDimensions => {
    const [dimensions, setDimensions] = useState<ElementDimensions>({
        width: undefined,
        height: undefined,
        maxWidth: undefined,
    });

    // Memoization der Dimensions-Update-Funktion
    const updateDimensions = useCallback((entries: ResizeObserverEntry[]) => {
        if (entries.length === 0) {
            return;
        }

        const entry = entries[0];
        const { width: clientWidth, height: clientHeight } = entry.contentRect;

        const width = Math.round(clientWidth);
        const height = Math.round(clientHeight);
        const maxWidth = width <= height ? width : height;

        setDimensions({
            width,
            height,
            maxWidth,
        });
    }, []);

    // Memoization des tatsächlichen DOM-Elements
    const targetElement = useMemo(() => {
        if (!element) {
            return null;
        }

        // Prüfung ob es ein RefObject ist
        if (typeof element === 'object' && 'current' in element) {
            return element.current;
        }

        // Direktes HTMLElement
        return element;
    }, [element]);

    useEffect(() => {
        if (!targetElement) {
            // Reset dimensions wenn kein Element verfügbar
            setDimensions({ width: undefined, height: undefined, maxWidth: undefined });
            return;
        }

        // ResizeObserver für optimale Performance
        const observer = new ResizeObserver(updateDimensions);

        try {
            observer.observe(targetElement);
        } catch (error) {
            console.warn('ResizeObserver failed to observe element:', error);
            return;
        }

        // Cleanup-Funktion
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

// Export sowohl als useElementDimensions als auch als useRefDimensions für Kompatibilität
export default useElementDimensions;
export { useElementDimensions as useRefDimensions };
