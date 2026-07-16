/**
 * Hook that makes an element draggable via Pointer Events, clamped to the viewport.
 *
 * @module hooks/useDraggable
 * @remarks
 * Unified mouse/touch/pen dragging with native Pointer Events, matching the
 * codebase idiom (see {@link module:hooks/useLongPress}). Movement listeners
 * attach to `window` only while a drag is active, and only the drag-handle
 * element starts a drag — so the panel body's inner controls (sliders, selects,
 * color-picker popovers) keep working normally.
 *
 * The dragged element's size is read from the returned `panelRef` (attached to
 * the element) so the position is clamped to keep the whole element on-screen.
 */

import { useCallback, useEffect, useRef, useState } from 'react';
import type { CSSProperties, PointerEvent as ReactPointerEvent } from 'react';

/** A pixel position (top-left of the element). */
export interface Position {
    x: number;
    y: number;
}

/** Handlers to spread onto the drag-handle element. */
export interface DragHandleHandlers {
    onPointerDown: (event: ReactPointerEvent<HTMLDivElement>) => void;
    style: CSSProperties;
}

interface UseDraggableOptions {
    /** Initial top-left position. */
    initial?: Position;
}

/**
 * Drives pointer-based dragging for one element.
 *
 * @returns `position` (to position the element), `setPosition` (programmatic),
 * `panelRef` (attach to the dragged element) and `dragHandlers` (attach to the
 * drag handle).
 */
export function useDraggable({ initial }: UseDraggableOptions = {}): {
    position: Position;
    setPosition: (pos: Position) => void;
    panelRef: React.RefObject<HTMLDivElement>;
    dragHandlers: DragHandleHandlers;
} {
    const [position, setPosition] = useState<Position>(initial ?? { x: 0, y: 0 });
    const panelRef = useRef<HTMLDivElement>(null);

    // Mirror position into a ref so the pointerdown handler reads the latest
    // origin without re-creating itself on every move.
    const positionRef = useRef(position);
    positionRef.current = position;

    const dragState = useRef<{
        pointerId: number;
        startX: number;
        startY: number;
        originX: number;
        originY: number;
    } | null>(null);

    const clamp = useCallback((x: number, y: number): Position => {
        if (typeof window === 'undefined') {
            return { x, y };
        }
        const el = panelRef.current;
        const width = el?.offsetWidth ?? 0;
        const height = el?.offsetHeight ?? 0;
        return {
            x: Math.max(0, Math.min(x, window.innerWidth - width)),
            y: Math.max(0, Math.min(y, window.innerHeight - height)),
        };
    }, []);

    const onPointerMove = useCallback(
        (event: PointerEvent): void => {
            const state = dragState.current;
            if (!state || event.pointerId !== state.pointerId) {
                return;
            }
            setPosition(
                clamp(state.originX + (event.clientX - state.startX), state.originY + (event.clientY - state.startY)),
            );
        },
        [clamp],
    );

    const endDrag = useCallback(
        (event: PointerEvent): void => {
            const state = dragState.current;
            if (!state || event.pointerId !== state.pointerId) {
                return;
            }
            dragState.current = null;
            window.removeEventListener('pointermove', onPointerMove);
            window.removeEventListener('pointerup', endDrag);
            window.removeEventListener('pointercancel', endDrag);
        },
        [onPointerMove],
    );

    const onPointerDown = useCallback(
        (event: ReactPointerEvent<HTMLDivElement>): void => {
            // Only the primary button starts a drag.
            if (event.button !== 0) {
                return;
            }
            dragState.current = {
                pointerId: event.pointerId,
                startX: event.clientX,
                startY: event.clientY,
                originX: positionRef.current.x,
                originY: positionRef.current.y,
            };
            // Prevent text/image selection while dragging.
            event.preventDefault();
            window.addEventListener('pointermove', onPointerMove);
            window.addEventListener('pointerup', endDrag);
            window.addEventListener('pointercancel', endDrag);
        },
        [onPointerMove, endDrag],
    );

    // Release the window listeners if the element unmounts mid-drag.
    useEffect(
        () => (): void => {
            window.removeEventListener('pointermove', onPointerMove);
            window.removeEventListener('pointerup', endDrag);
            window.removeEventListener('pointercancel', endDrag);
        },
        [onPointerMove, endDrag],
    );

    return {
        position,
        setPosition,
        panelRef,
        dragHandlers: {
            onPointerDown,
            style: { touchAction: 'none', cursor: 'move', userSelect: 'none' },
        },
    };
}

export default useDraggable;
