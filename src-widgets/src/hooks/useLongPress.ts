/**
 * Hook that distinguishes between a normal click/tap and a long-press gesture.
 *
 * @module hooks/useLongPress
 * @remarks
 * The hook returns event handlers that you can spread onto any interactive element.
 * For touch events, `preventDefault()` is used to reduce accidental native behaviors.
 */

import { useCallback, useMemo, useRef, type MouseEvent, type TouchEvent } from 'react';

/**
 * Handler types used by {@link module:hooks/useLongPress.useLongPress}.
 */
type EventHandler<T = Element> = (event: MouseEvent<T> | TouchEvent<T>) => void;
type VoidHandler = () => void;

/**
 * Configuration for {@link module:hooks/useLongPress.useLongPress}.
 */
interface UseLongPressConfig<T = Element> {
    /** Handler for normal clicks/taps (only fires if no long-press is detected). */
    onClick?: EventHandler<T> | VoidHandler;
    /** Handler for long-press events. */
    onLongPress?: EventHandler<T> | VoidHandler;
    /** Long-press threshold in milliseconds. */
    ms?: number;
}

/**
 * Returned handlers for mouse/touch events.
 */
interface UseLongPressHandlers<T = Element> {
    onMouseDown: (event: MouseEvent<T>) => void;
    onMouseUp: (event: MouseEvent<T>) => void;
    onMouseLeave: (event: MouseEvent<T>) => void;
    onTouchStart: (event: TouchEvent<T>) => void;
    onTouchEnd: (event: TouchEvent<T>) => void;
}

/**
 * Detects a long-press gesture.
 *
 * @template T - Element type used by React event generics.
 * @param config - Hook configuration.
 * @param config.onClick - Called when the press ends before the threshold.
 * @param config.onLongPress - Called when the press exceeds the threshold.
 * @param config.ms - Threshold in milliseconds.
 * @returns Event handlers to attach to an element.
 * @example
 * ```tsx
 * const handlers = useLongPress<HTMLButtonElement>({
 *   ms: 600,
 *   onClick: () => console.log('click'),
 *   onLongPress: () => console.log('long press'),
 * });
 *
 * return <button {...handlers}>Press me</button>;
 * ```
 */
export function useLongPress<T = Element>({
    onClick = () => {},
    onLongPress = () => {},
    ms = 300,
}: UseLongPressConfig<T> = {}): UseLongPressHandlers<T> {
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const eventRef = useRef<MouseEvent<T> | TouchEvent<T> | null>(null);
    const longPressTriggeredRef = useRef<boolean>(false);

    const longPressCallback = useCallback(() => {
        if (eventRef.current) {
            longPressTriggeredRef.current = true;
            onLongPress(eventRef.current);
        }
        timerRef.current = null;
        eventRef.current = null;
    }, [onLongPress]);

    const start = useCallback(
        (event: MouseEvent<T> | TouchEvent<T>) => {
            if ('touches' in event) {
                event.preventDefault();
            }

            eventRef.current = event;
            longPressTriggeredRef.current = false;

            timerRef.current = setTimeout(longPressCallback, ms);
        },
        [longPressCallback, ms],
    );

    const stop = useCallback(
        (_event: MouseEvent<T> | TouchEvent<T>) => {
            const currentEvent = eventRef.current;
            const wasLongPress = longPressTriggeredRef.current;

            if (timerRef.current) {
                clearTimeout(timerRef.current);
                timerRef.current = null;
            }

            if (!wasLongPress && currentEvent) {
                onClick(currentEvent);
            }

            eventRef.current = null;
            longPressTriggeredRef.current = false;
        },
        [onClick],
    );

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
