import { useCallback, useMemo, useRef, type MouseEvent, type TouchEvent } from 'react';

/**
 * Event-Handler-Typen
 */
type EventHandler<T = Element> = (event: MouseEvent<T> | TouchEvent<T>) => void;
type VoidHandler = () => void;

/**
 * Konfiguration für useLongPress Hook
 */
interface UseLongPressConfig<T = Element> {
    /** Handler für normale Klicks (wird nur ausgeführt wenn kein Long Press erkannt wird) */
    onClick?: EventHandler<T> | VoidHandler;
    /** Handler für Long Press Events */
    onLongPress?: EventHandler<T> | VoidHandler;
    /** Dauer in Millisekunden für Long Press Erkennung */
    ms?: number;
}

/**
 * Return-Type des useLongPress Hooks
 */
interface UseLongPressHandlers<T = Element> {
    onMouseDown: (event: MouseEvent<T>) => void;
    onMouseUp: (event: MouseEvent<T>) => void;
    onMouseLeave: (event: MouseEvent<T>) => void;
    onTouchStart: (event: TouchEvent<T>) => void;
    onTouchEnd: (event: TouchEvent<T>) => void;
}

/**
 * Hook für Long Press Gesten-Erkennung
 * Unterscheidet zwischen normalen Klicks und Long Press Events
 * Unterstützt sowohl Mouse- als auch Touch-Events
 *
 * @param config - Konfiguration für Long Press Verhalten
 * @param config.onClick - Handler für normale Klicks (wird nur ausgeführt wenn kein Long Press erkannt wird)
 * @param config.onLongPress - Handler für Long Press Events
 * @param config.ms - Dauer in Millisekunden für Long Press Erkennung
 * @returns Event-Handler für React-Elemente
 */
export function useLongPress<T = Element>({
    onClick = () => {},
    onLongPress = () => {},
    ms = 300,
}: UseLongPressConfig<T> = {}): UseLongPressHandlers<T> {
    // Timer-Referenz für Long Press Timeout
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    // Event-Referenz für aktuelles Event
    const eventRef = useRef<MouseEvent<T> | TouchEvent<T> | null>(null);

    // Flag um zu verfolgen ob Long Press ausgelöst wurde
    const longPressTriggeredRef = useRef<boolean>(false);

    // Memoized Long Press Callback
    const longPressCallback = useCallback(() => {
        if (eventRef.current) {
            longPressTriggeredRef.current = true;
            onLongPress(eventRef.current);
        }
        // Cleanup
        timerRef.current = null;
        eventRef.current = null;
    }, [onLongPress]);

    // Start Long Press Timer
    const start = useCallback(
        (event: MouseEvent<T> | TouchEvent<T>) => {
            // Prevent default behavior für Touch Events
            if ('touches' in event) {
                event.preventDefault();
            }

            eventRef.current = event;
            longPressTriggeredRef.current = false;

            // Starte Timer für Long Press
            timerRef.current = setTimeout(longPressCallback, ms);
        },
        [longPressCallback, ms],
    );

    // Stop Long Press und handle Click
    const stop = useCallback(
        (_event: MouseEvent<T> | TouchEvent<T>) => {
            const currentEvent = eventRef.current;
            const wasLongPress = longPressTriggeredRef.current;

            // Cleanup Timer
            if (timerRef.current) {
                clearTimeout(timerRef.current);
                timerRef.current = null;
            }

            // Nur onClick ausführen wenn kein Long Press stattgefunden hat
            if (!wasLongPress && currentEvent) {
                onClick(currentEvent);
            }

            // Cleanup
            eventRef.current = null;
            longPressTriggeredRef.current = false;
        },
        [onClick],
    );

    // Memoized Event Handlers
    return useMemo(
        () => ({
            onMouseDown: start,
            onMouseUp: stop,
            onMouseLeave: stop,
            onTouchStart: start,
            onTouchEnd: stop,
        }),
        [start, stop],
    );
}
