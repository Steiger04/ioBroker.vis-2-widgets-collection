/**
 * Hook that distinguishes between a normal click/tap and a long-press gesture.
 *
 * @module hooks/useLongPress
 * @remarks
 * Uses Pointer Events to unify mouse, touch, and pen input in a single handler.
 * This avoids passive-listener warnings on mobile and prevents ghost mouse events
 * from firing after touch interactions (which caused double-toggle bugs).
 *
 * The returned `style` object sets `touch-action: manipulation` to suppress
 * browser double-tap zoom while preserving panning.
 */

import { useCallback, useMemo, useRef, type PointerEvent, type CSSProperties } from 'react';

/**
 * Handler types used by {@link module:hooks/useLongPress.useLongPress}.
 */
type EventHandler<T = Element> = (event: PointerEvent<T>) => void;
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
 * Returned handlers for pointer events.
 */
export interface UseLongPressHandlers<T = Element> {
    onPointerDown: (event: PointerEvent<T>) => void;
    onPointerUp: (event: PointerEvent<T>) => void;
    onPointerLeave: (event: PointerEvent<T>) => void;
    onPointerCancel: (event: PointerEvent<T>) => void;
    /** Must be spread onto the element to set `touch-action: manipulation`. */
    style: CSSProperties;
}

/**
 * Detects a long-press gesture.
 *
 * @template T - Element type used by React event generics.
 * @param config - Hook configuration.
 * @param config.onClick - Called when the pointer is released on the element before the threshold.
 * @param config.onLongPress - Called when the press exceeds the threshold.
 * @param config.ms - Threshold in milliseconds.
 * @returns Event handlers and style to attach to an element.
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
    const eventRef = useRef<PointerEvent<T> | null>(null);
    const longPressTriggeredRef = useRef<boolean>(false);
    /** Track the pointer id to ignore unrelated pointers (e.g. multi-touch). */
    const activePointerIdRef = useRef<number | null>(null);

    const longPressCallback = useCallback(() => {
        if (eventRef.current) {
            longPressTriggeredRef.current = true;
            onLongPress(eventRef.current);
        }
        timerRef.current = null;
        eventRef.current = null;
    }, [onLongPress]);

    const start = useCallback(
        (event: PointerEvent<T>) => {
            // Ignore secondary pointers (multi-touch)
            if (activePointerIdRef.current !== null) {
                return;
            }

            activePointerIdRef.current = event.pointerId;
            eventRef.current = event;
            longPressTriggeredRef.current = false;

            timerRef.current = setTimeout(longPressCallback, ms);
        },
        [longPressCallback, ms],
    );

    /** Ends the tracked press and hands back its event while no long press fired. */
    const endPress = useCallback((event: PointerEvent<T>): PointerEvent<T> | null => {
        // Ignore events from pointers we aren't tracking
        if (event.pointerId !== activePointerIdRef.current) {
            return null;
        }

        const pendingEvent = longPressTriggeredRef.current ? null : eventRef.current;

        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }

        eventRef.current = null;
        longPressTriggeredRef.current = false;
        activePointerIdRef.current = null;

        return pendingEvent;
    }, []);

    const stop = useCallback(
        (event: PointerEvent<T>) => {
            const pendingEvent = endPress(event);
            if (pendingEvent) {
                onClick(pendingEvent);
            }
        },
        [endPress, onClick],
    );

    // A press the pointer leaves, or the browser takes over (a touch turning into a pan), is no
    // click: it ends without one.
    const abort = useCallback(
        (event: PointerEvent<T>) => {
            endPress(event);
        },
        [endPress],
    );

    return useMemo(
        () => ({
            onPointerDown: start,
            onPointerUp: stop,
            onPointerLeave: abort,
            onPointerCancel: abort,
            style: { touchAction: 'manipulation' } as CSSProperties,
        }),
        [start, stop, abort],
    );
}
