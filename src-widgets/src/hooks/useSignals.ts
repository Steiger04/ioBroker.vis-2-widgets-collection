/**
 * Hook that styles and updates the visibility of vis-2 “signal” icons rendered inside a widget container.
 *
 * @module hooks/useSignals
 * @remarks
 * Signals are rendered by vis-2 with fixed class names. This hook queries the DOM underneath
 * `refService.current` and applies a drop-shadow/translate trick to recolor icons reliably.
 */

import { useEffect, useContext, useMemo } from 'react';
import { CollectionContext } from '../components/CollectionProvider';

/**
 * DOM element shape for signal icons.
 */
interface SignalElement extends HTMLElement {
    style: CSSStyleDeclaration;
}

/**
 * Applies signal visibility and styling according to widget configuration.
 *
 * @returns Nothing. This hook performs DOM side effects.
 * @example
 * ```tsx
 * function WidgetFrame() {
 *   useSignals();
 *   return <div ref={refService} />;
 * }
 * ```
 */
const useSignals = (): void => {
    const { isSignalVisible, refService, widget } = useContext(CollectionContext);

    const visibleSignals = useMemo(() => {
        const visible: number[] = [];
        const signalCount = Number(widget.data['signals-count']) || 0;

        for (let i = 0; i < signalCount; i++) {
            if (isSignalVisible(i)) {
                visible.push(i);
            }
        }

        return visible;
    }, [widget.data, isSignalVisible]);

    const signalStyles = useMemo(() => {
        const styles: Record<number, string | undefined> = {};

        visibleSignals.forEach(signalIndex => {
            // Safe access to signal color properties.
            styles[signalIndex] = widget.data[`signals-color-${signalIndex}`];
        });

        return styles;
    }, [widget.data, visibleSignals]);

    useEffect(() => {
        if (!refService?.current) {
            return;
        }

        const currentElement = refService.current;
        const elementChildren = currentElement.children;

        const signalElements: SignalElement[] = [];

        Array.from(elementChildren).forEach(child => {
            const signalIcon = child.children[0];

            if (signalIcon && signalIcon instanceof HTMLElement && signalIcon.className === 'vis-signal-icon iconOwn') {
                signalElements.push(signalIcon as SignalElement);
            }
        });

        signalElements.forEach((signalElement, index) => {
            const visibleIndex = visibleSignals[index];
            const signalColor = visibleIndex !== undefined ? signalStyles[visibleIndex] : undefined;

            if (signalColor) {
                signalElement.style.color = signalColor;
                signalElement.style.filter = 'drop-shadow(0px 10000px 0)';
                signalElement.style.transform = 'translateY(-10000px)';
            } else {
                signalElement.style.color = '';
                signalElement.style.filter = '';
                signalElement.style.transform = '';
            }
        });
    }, [visibleSignals, signalStyles, refService]);
};

export default useSignals;
