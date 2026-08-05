/**
 * Width + position geometry for the floating theme-studio panel (ADR-0020).
 *
 * @module ThemeConfigWizard/useStudioWidth
 * @remarks
 * The left-edge resize grip of the floating panel, in the codebase's splitter idiom
 * (see {@link module:EchartsCollectionWidget/editor/useSplitPane}): pointer-event drag
 * with pointer capture, keyboard-operable (`role="separator"`, arrows ±16 px, Shift
 * ±64 px, Home/End), double-click resets to the default, width persisted in
 * localStorage. Unlike the configurator's rail the grip sits on the panel's LEFT edge
 * (the panel's default dock is top-right), so dragging left WIDENS the panel; the
 * caller anchors the right edge by shifting the panel position on every live change
 * (the `onLive` callback with the width delta).
 *
 * Also owns the position persistence (read/store helpers + viewport clamping), used
 * by the panel together with {@link module:hooks/useDraggable}.
 */

import { useRef, useState } from 'react';
import type React from 'react';

/** Panel width constraints (px). */
export const STUDIO_WIDTH_MIN = 320;
export const STUDIO_WIDTH_MAX = 560;
export const STUDIO_WIDTH_DEFAULT = 380;

/** localStorage keys (codebase namespacing idiom, cf. RAIL_STORAGE_KEY). */
export const STUDIO_WIDTH_KEY = 'vis-2-widgets-collection:theme-studio:width';
export const STUDIO_POSITION_KEY = 'vis-2-widgets-collection:theme-studio:position';

/** Clamp a requested width to [STUDIO_WIDTH_MIN, STUDIO_WIDTH_MAX]. */
export const clampStudioWidth = (requested: number): number =>
    Math.round(Math.min(Math.max(requested, STUDIO_WIDTH_MIN), STUDIO_WIDTH_MAX));

/** Read the persisted width, or null when absent/invalid/unreadable (privacy mode). */
export const readStoredWidth = (storage?: Storage | null): number | null => {
    try {
        const raw = (storage ?? window.localStorage).getItem(STUDIO_WIDTH_KEY);
        if (!raw) {
            return null;
        }
        const n = Number(raw);
        return Number.isFinite(n) && n > 0 ? clampStudioWidth(n) : null;
    } catch {
        return null;
    }
};

/** Persist the width (best-effort; storage may be unavailable). */
export const storeWidth = (width: number, storage?: Storage | null): void => {
    try {
        (storage ?? window.localStorage).setItem(STUDIO_WIDTH_KEY, String(width));
    } catch {
        /* storage unavailable — session-only width */
    }
};

/** A persisted panel position. */
export interface StoredPosition {
    x: number;
    y: number;
}

/**
 * Read the persisted position, clamped to the CURRENT viewport (the window may have
 * shrunk since it was stored), or null when absent/invalid/unreadable.
 */
export const readStoredPosition = (storage?: Storage | null): StoredPosition | null => {
    try {
        const raw = (storage ?? window.localStorage).getItem(STUDIO_POSITION_KEY);
        if (!raw) {
            return null;
        }
        const parsed: unknown = JSON.parse(raw);
        if (typeof parsed !== 'object' || parsed === null) {
            return null;
        }
        const { x, y } = parsed as Record<string, unknown>;
        if (typeof x !== 'number' || typeof y !== 'number' || !Number.isFinite(x) || !Number.isFinite(y)) {
            return null;
        }
        // Keep at least a usable slab of the panel on-screen.
        const maxX = Math.max(0, window.innerWidth - STUDIO_WIDTH_MIN);
        const maxY = Math.max(0, window.innerHeight - 120);
        return { x: Math.min(Math.max(0, x), maxX), y: Math.min(Math.max(0, y), maxY) };
    } catch {
        return null;
    }
};

/** Persist the position (best-effort; storage may be unavailable). */
export const storePosition = (position: StoredPosition, storage?: Storage | null): void => {
    try {
        (storage ?? window.localStorage).setItem(STUDIO_POSITION_KEY, JSON.stringify(position));
    } catch {
        /* storage unavailable — session-only position */
    }
};

/** Result of {@link useStudioWidth}. */
export interface StudioWidth {
    /** Current panel width in px. */
    width: number;
    /** True while a pointer drag is in flight (for styling affordances). */
    resizing: boolean;
    /** Props to spread on the grip element (a11y + pointer + keyboard + reset). */
    handleProps: {
        role: 'separator';
        'aria-orientation': 'vertical';
        'aria-valuemin': number;
        'aria-valuemax': number;
        'aria-valuenow': number;
        'aria-label': string;
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
 * The left-edge resize behaviour. Width changes are committed to state live and reported
 * via `onLive(width, delta)` so the caller can anchor the opposite edge; persisted only
 * on drag-end / keyboard / reset.
 *
 * @param options - Hook options.
 * @param options.onLive - Live width-change callback (anchor the right edge by shifting x).
 * @param options.gripLabel - Accessible name for the separator (localized by the caller).
 */
export function useStudioWidth(options: {
    onLive?: (width: number, delta: number) => void;
    gripLabel: string;
}): StudioWidth {
    const [width, setWidth] = useState<number>(() => readStoredWidth() ?? STUDIO_WIDTH_DEFAULT);
    const widthRef = useRef(width);
    const [resizing, setResizing] = useState(false);
    const dragRef = useRef<{ pointerId: number; startX: number; startWidth: number } | null>(null);
    // Latest onLive in a ref so the pointer handlers never go stale.
    const onLiveRef = useRef(options.onLive);
    onLiveRef.current = options.onLive;

    const applyWidth = (next: number): void => {
        const w = clampStudioWidth(next);
        const delta = w - widthRef.current;
        if (delta === 0) {
            return;
        }
        widthRef.current = w;
        setWidth(w);
        onLiveRef.current?.(w, delta);
    };

    const onPointerDown = (e: React.PointerEvent<HTMLElement>): void => {
        if (e.button !== 0) {
            return;
        }
        e.preventDefault();
        e.currentTarget.setPointerCapture(e.pointerId);
        dragRef.current = { pointerId: e.pointerId, startX: e.clientX, startWidth: widthRef.current };
        setResizing(true);
    };

    const onPointerMove = (e: React.PointerEvent<HTMLElement>): void => {
        const drag = dragRef.current;
        if (!drag || drag.pointerId !== e.pointerId) {
            return;
        }
        // Left edge: dragging left (negative dx) widens the panel.
        applyWidth(drag.startWidth + (drag.startX - e.clientX));
    };

    const endDrag = (e: React.PointerEvent<HTMLElement>): void => {
        if (!dragRef.current || dragRef.current.pointerId !== e.pointerId) {
            return;
        }
        dragRef.current = null;
        setResizing(false);
        storeWidth(widthRef.current);
    };

    const onKeyDown = (e: React.KeyboardEvent<HTMLElement>): void => {
        const step = e.shiftKey ? 64 : 16;
        let next: number | null = null;
        // Left edge: ArrowLeft moves the edge left → wider; ArrowRight → narrower.
        if (e.key === 'ArrowLeft') {
            next = widthRef.current + step;
        } else if (e.key === 'ArrowRight') {
            next = widthRef.current - step;
        } else if (e.key === 'Home') {
            next = STUDIO_WIDTH_MIN;
        } else if (e.key === 'End') {
            next = STUDIO_WIDTH_MAX;
        }
        if (next === null) {
            return;
        }
        e.preventDefault();
        applyWidth(next);
        storeWidth(widthRef.current);
    };

    const onDoubleClick = (): void => {
        applyWidth(STUDIO_WIDTH_DEFAULT);
        storeWidth(widthRef.current);
    };

    return {
        width,
        resizing,
        handleProps: {
            role: 'separator',
            'aria-orientation': 'vertical',
            'aria-valuemin': STUDIO_WIDTH_MIN,
            'aria-valuemax': STUDIO_WIDTH_MAX,
            'aria-valuenow': width,
            'aria-label': options.gripLabel,
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

export default useStudioWidth;
