import { useEffect, useContext, useMemo } from 'react';
import { CollectionContext } from '../components/CollectionProvider';

/**
 * Interface für Signal-Elemente
 */
interface SignalElement extends HTMLElement {
    style: CSSStyleDeclaration;
}

/**
 * Hook für Signal-Visualisierung und -Styling
 * Verwaltet die Sichtbarkeit und das Styling von Signal-Ikonen basierend auf Widget-Konfiguration
 */
const useSignals = (): void => {
    const { isSignalVisible, refService, widget } = useContext(CollectionContext);

    // Memoization der sichtbaren Signal-Indices für bessere Performance
    const visibleSignals = useMemo(() => {
        const visible: number[] = [];
        // Sicherer Zugriff auf signals-count - könnte nicht in allen Widgets existieren
        const signalCount = Number((widget.data as any)['signals-count']) || 0;

        for (let i = 0; i < signalCount; i++) {
            if (isSignalVisible(i)) {
                visible.push(i);
            }
        }

        return visible;
    }, [widget.data, isSignalVisible]);

    // Memoization der Signal-Styling-Konfiguration
    const signalStyles = useMemo(() => {
        const styles: Record<number, string | undefined> = {};

        visibleSignals.forEach(signalIndex => {
            // Sicherer Zugriff auf signal-color Properties
            styles[signalIndex] = (widget.data as any)[`signals-color-${signalIndex}`];
        });

        return styles;
    }, [widget.data, visibleSignals]);

    useEffect(() => {
        if (!refService?.current) {
            return;
        }

        const currentElement = refService.current;
        const elementChildren = currentElement.children;

        // Sammlung aller Signal-Elemente
        const signalElements: SignalElement[] = [];

        // Durchsuche alle Child-Elemente nach Signal-Icons
        Array.from(elementChildren).forEach(child => {
            const signalIcon = child.children[0];

            if (signalIcon && signalIcon instanceof HTMLElement && signalIcon.className === 'vis-signal-icon iconOwn') {
                signalElements.push(signalIcon as SignalElement);
            }
        });

        // Styling anwenden
        signalElements.forEach((signalElement, index) => {
            const visibleIndex = visibleSignals[index];
            const signalColor = visibleIndex !== undefined ? signalStyles[visibleIndex] : undefined;

            // Signal-Styling mit Drop-Shadow-Trick für Farbgebung
            if (signalColor) {
                signalElement.style.color = signalColor;
                signalElement.style.filter = 'drop-shadow(0px 10000px 0)';
                signalElement.style.transform = 'translateY(-10000px)';
            } else {
                // Reset styling wenn keine Farbe definiert
                signalElement.style.color = '';
                signalElement.style.filter = '';
                signalElement.style.transform = '';
            }
        });
    }, [visibleSignals, signalStyles, refService]);
};

export default useSignals;
