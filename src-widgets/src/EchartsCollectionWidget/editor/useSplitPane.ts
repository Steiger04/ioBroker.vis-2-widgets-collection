/**
 * Resizable rail↔preview split for the echarts configurator (ADR-0019).
 *
 * @module EchartsCollectionWidget/editor/useSplitPane
 * @remarks
 * Custom hook — deliberately no library: a single static two-pane split does not need a constraint
 * solver, and every dependency ships in the Module-Federation remote bundle. The rail width is
 * pixel-based (a form width is a design decision, not a percentage accident), clamped to
 * [RAIL_MIN, min(RAIL_MAX, containerWidth − PREVIEW_MIN)], persisted globally in localStorage.
 *
 * The drag is pointer-event based (mouse + touch), keyboard-operable (`role="separator"`, arrows
 * ±16 px, Shift ±64 px, Home/End), and double-click resets to the default. Section contents reflow
 * purely in CSS (the auto-fill field grid), so a drag is a layout/paint operation only — the chart
 * resizes itself via its own ResizeObserver; no React re-render storm is needed beyond the width
 * state itself.
 */
import { useEffect, useRef, useState } from 'react';
import type React from 'react';

export const RAIL_MIN = 320;
export const RAIL_MAX = 720;
export const PREVIEW_MIN = 400;
export const RAIL_DEFAULT = 440;
export const RAIL_STORAGE_KEY = 'vis-2-widgets-collection:echarts-editor:rail-width';

/**
 * Clamp a requested rail width: at least RAIL_MIN, at most RAIL_MAX, and never so wide that the
 * preview drops below PREVIEW_MIN. If the container is too narrow to honour both minimums the rail
 * wins (RAIL_MIN) — a degenerate case that never occurs in practice (the splitter only renders at
 * md+), but the function stays total.
 */
export const clampRailWidth = (requested: number, containerWidth: number): number => {
    const max = Math.max(RAIL_MIN, Math.min(RAIL_MAX, containerWidth - PREVIEW_MIN));
    return Math.round(Math.min(Math.max(requested, RAIL_MIN), max));
};

/** Read the persisted rail width, or null when absent/invalid/unreadable (privacy mode). */
export const readStoredRailWidth = (storage?: Storage | null): number | null => {
    try {
        const raw = (storage ?? window.localStorage).getItem(RAIL_STORAGE_KEY);
        if (!raw) {
            return null;
        }
        const n = Number(raw);
        return Number.isFinite(n) && n > 0 ? n : null;
    } catch {
        return null;
    }
};

/** Persist the rail width (best-effort; storage may be unavailable). */
export const storeRailWidth = (width: number, storage?: Storage | null): void => {
    try {
        (storage ?? window.localStorage).setItem(RAIL_STORAGE_KEY, String(width));
    } catch {
        /* storage unavailable — session-only width */
    }
};

export interface SplitPaneHandle {
    /** Current rail width in px. */
    railWidth: number;
    /** Attach to the flex container holding rail + handle + preview. */
    containerRef: React.RefObject<HTMLDivElement | null>;
    /** True while a pointer drag is in flight (for styling affordances). */
    dragging: boolean;
    /** Props to spread on the handle element (a11y + pointer + keyboard + reset). */
    handleProps: {
        role: 'separator';
        'aria-orientation': 'vertical';
        'aria-valuemin': number;
        'aria-valuemax': number;
        'aria-valuenow': number;
        tabIndex: number;
        onPointerDown: (e: React.PointerEvent<HTMLElement>) => void;
        onPointerMove: (e: React.PointerEvent<HTMLElement>) => void;
        onPointerUp: (e: React.PointerEvent<HTMLElement>) => void;
        onPointerCancel: (e: React.PointerEvent<HTMLElement>) => void;
        onKeyDown: (e: React.KeyboardEvent<HTMLElement>) => void;
        onDoubleClick: () => void;
    };
}

/**
 * The split behaviour. The returned handle props turn any element into the draggable separator.
 * Width changes are committed to state live (CSS reflows the panes) but persisted only on
 * drag-end / keyboard / reset.
 */
export function useSplitPane(): SplitPaneHandle {
    const [railWidth, setRailWidth] = useState<number>(() => readStoredRailWidth() ?? RAIL_DEFAULT);
    const railWidthRef = useRef(railWidth);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [dragging, setDragging] = useState(false);
    const dragRef = useRef<{ pointerId: number; startX: number; startWidth: number } | null>(null);

    const applyWidth = (w: number): void => {
        railWidthRef.current = w;
        setRailWidth(w);
    };

    const containerWidth = (): number => containerRef.current?.getBoundingClientRect().width ?? RAIL_DEFAULT * 2;

    const onPointerDown = (e: React.PointerEvent<HTMLElement>): void => {
        if (e.button !== 0) {
            return;
        }
        e.preventDefault();
        e.currentTarget.setPointerCapture(e.pointerId);
        dragRef.current = { pointerId: e.pointerId, startX: e.clientX, startWidth: railWidthRef.current };
        setDragging(true);
    };

    const onPointerMove = (e: React.PointerEvent<HTMLElement>): void => {
        const drag = dragRef.current;
        if (!drag || drag.pointerId !== e.pointerId) {
            return;
        }
        applyWidth(clampRailWidth(drag.startWidth + (e.clientX - drag.startX), containerWidth()));
    };

    const endDrag = (e: React.PointerEvent<HTMLElement>): void => {
        if (!dragRef.current || dragRef.current.pointerId !== e.pointerId) {
            return;
        }
        dragRef.current = null;
        setDragging(false);
        storeRailWidth(railWidthRef.current);
    };

    const onKeyDown = (e: React.KeyboardEvent<HTMLElement>): void => {
        const step = e.shiftKey ? 64 : 16;
        let next: number | null = null;
        if (e.key === 'ArrowLeft') {
            next = railWidthRef.current - step;
        } else if (e.key === 'ArrowRight') {
            next = railWidthRef.current + step;
        } else if (e.key === 'Home') {
            next = RAIL_MIN;
        } else if (e.key === 'End') {
            next = RAIL_MAX;
        }
        if (next === null) {
            return;
        }
        e.preventDefault();
        const w = clampRailWidth(next, containerWidth());
        applyWidth(w);
        storeRailWidth(w);
    };

    const onDoubleClick = (): void => {
        const w = clampRailWidth(RAIL_DEFAULT, containerWidth());
        applyWidth(w);
        storeRailWidth(w);
    };

    // While dragging, the cursor + selection lock live on <body> so leaving the handle's 12 px hit
    // strip mid-drag (fast flicks) does not flicker the cursor or start selecting text.
    useEffect(() => {
        if (!dragging) {
            return;
        }
        const { body } = document;
        const prevCursor = body.style.cursor;
        const prevUserSelect = body.style.userSelect;
        body.style.cursor = 'col-resize';
        body.style.userSelect = 'none';
        return () => {
            body.style.cursor = prevCursor;
            body.style.userSelect = prevUserSelect;
        };
    }, [dragging]);

    return {
        railWidth,
        containerRef,
        dragging,
        handleProps: {
            role: 'separator',
            'aria-orientation': 'vertical',
            'aria-valuemin': RAIL_MIN,
            'aria-valuemax': RAIL_MAX,
            'aria-valuenow': railWidth,
            tabIndex: 0,
            onPointerDown,
            onPointerMove,
            onPointerUp: endDrag,
            onPointerCancel: endDrag,
            onKeyDown,
            onDoubleClick,
        },
    };
}
