/**
 * Window-style geometry for a floating panel: header drag + 8-grip resize (ADR-0020 addendum).
 *
 * @module hooks/useFloatingPanel
 * @remarks
 * The Studio panel resizes like an OS window: 4 edge grips (keyboard-operable separators,
 * double-click reset) + 4 corner grips (pointer-only, `aria-hidden`), the header drags.
 * The geometry `{x, y, w, h|null}` persists as ONE localStorage entry; `h: null` is Auto
 * height (content-driven). The stored value is the user's INTENT — it is clamped only on
 * application (live during drags; on browser-window resize: size first, then position), so
 * a re-grown window restores the intended size.
 *
 * Folds in the former `useDraggable` + `useStudioWidth` (single consumer each). Deliberately
 * no library — every dependency ships in the Module-Federation remote bundle. The drag is
 * pointer-event based (mouse + touch + pen); the pure geometry math is exported for tests.
 */

import { useEffect, useRef, useState } from 'react';
import type React from 'react';

/** Panel size constraints (px). The ceiling is viewport-relative: viewport − 2×margin. */
export const PANEL_MIN_W = 320;
export const PANEL_MIN_H = 240;
export const PANEL_DEFAULT_W = 380;
export const VIEWPORT_MARGIN = 24;

/** Hit-zone sizes (px): edges straddle the panel border, corners sit centred on the corner. */
export const EDGE_HIT = 7;
export const EDGE_INSET = 3;
export const CORNER_HIT = 14;

export type PanelEdge = 'n' | 's' | 'e' | 'w';
export type PanelCorner = 'ne' | 'nw' | 'se' | 'sw';
export type PanelGrip = PanelEdge | PanelCorner;

/** Cursor per grip — the interaction signature of the otherwise invisible corners. */
export const GRIP_CURSORS: Record<PanelGrip, string> = {
    e: 'col-resize',
    w: 'col-resize',
    n: 'row-resize',
    s: 'row-resize',
    ne: 'nesw-resize',
    sw: 'nesw-resize',
    nw: 'nwse-resize',
    se: 'nwse-resize',
};

/** The persisted window rectangle. `h: null` = Auto height (content-driven). */
export interface PanelGeometry {
    x: number;
    y: number;
    w: number;
    h: number | null;
}

/** A fully resolved rectangle (Auto height measured into a number). */
export interface ResolvedGeometry {
    x: number;
    y: number;
    w: number;
    h: number;
}

export interface Viewport {
    w: number;
    h: number;
}

/** Largest allowed panel width for a viewport width (never below the minimum). */
export const maxPanelWidth = (viewportW: number): number => Math.max(PANEL_MIN_W, viewportW - 2 * VIEWPORT_MARGIN);

/** Largest allowed panel height for a viewport height (never below the minimum). */
export const maxPanelHeight = (viewportH: number): number => Math.max(PANEL_MIN_H, viewportH - 2 * VIEWPORT_MARGIN);

/** Clamp a requested width to [PANEL_MIN_W, maxPanelWidth]. */
export const clampWidth = (requested: number, viewportW: number): number =>
    Math.round(Math.min(Math.max(requested, PANEL_MIN_W), maxPanelWidth(viewportW)));

/** Clamp a requested height to [PANEL_MIN_H, maxPanelHeight]. */
export const clampHeight = (requested: number, viewportH: number): number =>
    Math.round(Math.min(Math.max(requested, PANEL_MIN_H), maxPanelHeight(viewportH)));

/** Clamp a position so the whole rectangle stays on-screen (drag-clamp idiom). */
export const clampPosition = (
    x: number,
    y: number,
    w: number,
    h: number,
    viewport: Viewport,
): { x: number; y: number } => ({
    x: Math.max(0, Math.min(x, viewport.w - w)),
    y: Math.max(0, Math.min(y, viewport.h - h)),
});

/**
 * Resize a rectangle by dragging a grip, with live viewport clamping. The opposite edge is
 * the anchor: W/N drags shift x/y so the right/bottom edge stays put; a dragged edge stops
 * at the viewport boundary (size clamp and boundary clamp both apply, size wins first).
 */
export function resizeGeometry(
    start: ResolvedGeometry,
    grip: PanelGrip,
    dx: number,
    dy: number,
    viewport: Viewport,
): ResolvedGeometry {
    let { x, y, w, h } = start;
    if (grip.includes('e')) {
        w = clampWidth(Math.min(start.w + dx, viewport.w - start.x), viewport.w);
    }
    if (grip.includes('w')) {
        const right = start.x + start.w;
        w = clampWidth(Math.min(start.w - dx, right), viewport.w);
        x = right - w;
    }
    if (grip.includes('s')) {
        h = clampHeight(Math.min(start.h + dy, viewport.h - start.y), viewport.h);
    }
    if (grip.includes('n')) {
        const bottom = start.y + start.h;
        h = clampHeight(Math.min(start.h - dy, bottom), viewport.h);
        y = bottom - h;
    }
    return { x, y, w, h };
}

/**
 * Clamp an intent geometry for application: size first, then position (order matters — the
 * position clamp needs the clamped size). Auto height (`h: null`) passes through; the
 * position clamp then uses the measured element height.
 */
export function clampGeometry(geometry: PanelGeometry, measuredAutoHeight: number, viewport: Viewport): PanelGeometry {
    const w = clampWidth(geometry.w, viewport.w);
    const h = geometry.h == null ? null : clampHeight(geometry.h, viewport.h);
    const { x, y } = clampPosition(geometry.x, geometry.y, w, h ?? measuredAutoHeight, viewport);
    return { x, y, w, h };
}

/** Read the persisted geometry, or null when absent/invalid/unreadable (privacy mode). Values are NOT clamped here — the stored intent survives; clamping happens on application. */
export const readStoredGeometry = (storageKey: string, storage?: Storage | null): PanelGeometry | null => {
    try {
        const raw = (storage ?? window.localStorage).getItem(storageKey);
        if (!raw) {
            return null;
        }
        const parsed: unknown = JSON.parse(raw);
        if (typeof parsed !== 'object' || parsed === null) {
            return null;
        }
        const { x, y, w, h } = parsed as Record<string, unknown>;
        const finite = (v: unknown): v is number => typeof v === 'number' && Number.isFinite(v);
        if (!finite(x) || !finite(y) || !finite(w) || w <= 0) {
            return null;
        }
        if (h !== null && (!finite(h) || h <= 0)) {
            return null;
        }
        return { x, y, w, h };
    } catch {
        return null;
    }
};

/** Persist the geometry (best-effort; storage may be unavailable). */
export const storeGeometry = (storageKey: string, geometry: PanelGeometry, storage?: Storage | null): void => {
    try {
        (storage ?? window.localStorage).setItem(storageKey, JSON.stringify(geometry));
    } catch {
        /* storage unavailable — session-only geometry */
    }
};

/** Props spread on an edge grip: full separator a11y + pointer + keyboard + reset. */
export interface EdgeGripProps {
    role: 'separator';
    'aria-orientation': 'horizontal' | 'vertical';
    'aria-valuemin': number;
    'aria-valuemax': number;
    'aria-valuenow': number;
    'aria-valuetext'?: string;
    'aria-label': string;
    title: string;
    tabIndex: number;
    onPointerDown: (e: React.PointerEvent<HTMLElement>) => void;
    onPointerMove: (e: React.PointerEvent<HTMLElement>) => void;
    onPointerUp: (e: React.PointerEvent<HTMLElement>) => void;
    onPointerCancel: (e: React.PointerEvent<HTMLElement>) => void;
    onKeyDown: (e: React.KeyboardEvent<HTMLElement>) => void;
    onDoubleClick: () => void;
}

/** Props spread on a corner grip: pointer-only by decision (keyboard covers all via edges). */
export interface CornerGripProps {
    'aria-hidden': true;
    onPointerDown: (e: React.PointerEvent<HTMLElement>) => void;
    onPointerMove: (e: React.PointerEvent<HTMLElement>) => void;
    onPointerUp: (e: React.PointerEvent<HTMLElement>) => void;
    onPointerCancel: (e: React.PointerEvent<HTMLElement>) => void;
}

/** Handlers to spread onto the drag-handle element (the panel header). */
export interface PanelDragHandleProps {
    onPointerDown: (event: React.PointerEvent<HTMLDivElement>) => void;
    style: React.CSSProperties;
}

export interface FloatingPanel {
    /** Attach to the panel element (size measurement + drag clamping). */
    panelRef: React.RefObject<HTMLDivElement>;
    /** The applied (clamped) geometry — drive the panel style from this. */
    geometry: PanelGeometry;
    /** The drag in flight, for styling affordances (transition kill, hairline highlight). */
    activeDrag: PanelGrip | 'move' | null;
    /** Spread on the header (move drag). */
    dragHandleProps: PanelDragHandleProps;
    /** Spread on the 4 edge grips. */
    edgeProps: Record<PanelEdge, EdgeGripProps>;
    /** Spread on the 4 corner grips. */
    cornerProps: Record<PanelCorner, CornerGripProps>;
}

const EDGES: readonly PanelEdge[] = ['n', 's', 'e', 'w'];
const CORNERS: readonly PanelCorner[] = ['ne', 'nw', 'se', 'sw'];

/** Does dragging this grip touch the vertical dimension? (Then Auto height becomes fixed.) */
const touchesHeight = (grip: PanelGrip): boolean => grip.includes('n') || grip.includes('s');

const currentViewport = (): Viewport =>
    typeof window === 'undefined' ? { w: 1280, h: 800 } : { w: window.innerWidth, h: window.innerHeight };

/**
 * The floating-panel chrome behaviour. Width/height changes are committed to state live and
 * the anchor edge held via position shift; persistence happens on drag-end / keyboard /
 * reset only. While any drag is in flight the cursor + selection lock live on `<body>`, so
 * fast flicks off a 7 px strip neither flicker the cursor nor select text.
 *
 * @param options - Hook options.
 * @param options.storageKey - localStorage key for the single geometry entry.
 * @param options.defaultGeometry - factory for the first-run geometry (no storage yet).
 * @param options.labels - localized aria-labels for the edge grips.
 * @param options.labels.width - aria-label for the e/w (width) edge grips.
 * @param options.labels.height - aria-label for the n/s (height) edge grips.
 * @param options.active - when the panel is visible; re-clamps on open (element measurable).
 */
export function useFloatingPanel(options: {
    storageKey: string;
    defaultGeometry: () => PanelGeometry;
    labels: { width: string; height: string };
    active?: boolean;
}): FloatingPanel {
    const [initialIntent] = useState<PanelGeometry>(
        () => readStoredGeometry(options.storageKey) ?? options.defaultGeometry(),
    );
    // The user's choice, persisted as-is — never the clamped value.
    const intentRef = useRef<PanelGeometry>(initialIntent);
    // The clamped geometry that actually renders.
    const [applied, setApplied] = useState<PanelGeometry>(() =>
        clampGeometry(initialIntent, PANEL_MIN_H, currentViewport()),
    );
    const appliedRef = useRef(applied);
    const panelRef = useRef<HTMLDivElement>(null);
    const [activeDrag, setActiveDrag] = useState<PanelGrip | 'move' | null>(null);
    // Latest labels in a ref so the pointer handlers never go stale.
    const labelsRef = useRef(options.labels);
    labelsRef.current = options.labels;

    // Last measured element height — the Auto-height fallback for clamps while unmounted.
    const measuredRef = useRef(PANEL_MIN_H);
    const measuredHeight = (): number => {
        const el = panelRef.current;
        if (!el) {
            return measuredRef.current;
        }
        measuredRef.current = el.offsetHeight;
        return measuredRef.current;
    };

    /** The resolved start rectangle for a resize interaction (Auto height measured in). */
    const startGeometry = (): ResolvedGeometry => {
        const a = appliedRef.current;
        return { x: a.x, y: a.y, w: a.w, h: a.h ?? measuredHeight() };
    };

    /** Commit a new intent: keep it verbatim (persistence), render it clamped. */
    const commit = (nextIntent: PanelGeometry): void => {
        intentRef.current = nextIntent;
        const nextApplied = clampGeometry(nextIntent, measuredHeight(), currentViewport());
        appliedRef.current = nextApplied;
        setApplied(nextApplied);
    };

    const persist = (): void => storeGeometry(options.storageKey, intentRef.current);

    // ---------------------------------------------------------------- move drag (header)
    const moveDragRef = useRef<{
        pointerId: number;
        startX: number;
        startY: number;
        originX: number;
        originY: number;
    } | null>(null);

    const onMovePointerMove = (event: PointerEvent): void => {
        const drag = moveDragRef.current;
        if (!drag || event.pointerId !== drag.pointerId) {
            return;
        }
        commit({
            ...intentRef.current,
            x: drag.originX + (event.clientX - drag.startX),
            y: drag.originY + (event.clientY - drag.startY),
        });
    };

    const endMoveDrag = (event: PointerEvent): void => {
        const drag = moveDragRef.current;
        if (!drag || event.pointerId !== drag.pointerId) {
            return;
        }
        moveDragRef.current = null;
        window.removeEventListener('pointermove', onMovePointerMove);
        window.removeEventListener('pointerup', endMoveDrag);
        window.removeEventListener('pointercancel', endMoveDrag);
        setActiveDrag(null);
        persist();
    };

    const onMovePointerDown = (event: React.PointerEvent<HTMLDivElement>): void => {
        if (event.button !== 0) {
            return;
        }
        moveDragRef.current = {
            pointerId: event.pointerId,
            startX: event.clientX,
            startY: event.clientY,
            originX: appliedRef.current.x,
            originY: appliedRef.current.y,
        };
        // Prevent text/image selection while dragging.
        event.preventDefault();
        window.addEventListener('pointermove', onMovePointerMove);
        window.addEventListener('pointerup', endMoveDrag);
        window.addEventListener('pointercancel', endMoveDrag);
        setActiveDrag('move');
    };

    // --------------------------------------------------------------- resize (8 grips)
    const gripDragRef = useRef<{
        pointerId: number;
        grip: PanelGrip;
        startX: number;
        startY: number;
        start: ResolvedGeometry;
    } | null>(null);

    const onGripPointerDown =
        (grip: PanelGrip) =>
        (e: React.PointerEvent<HTMLElement>): void => {
            if (e.button !== 0) {
                return;
            }
            e.preventDefault();
            e.currentTarget.setPointerCapture(e.pointerId);
            gripDragRef.current = {
                pointerId: e.pointerId,
                grip,
                startX: e.clientX,
                startY: e.clientY,
                start: startGeometry(),
            };
            setActiveDrag(grip);
        };

    const onGripPointerMove = (e: React.PointerEvent<HTMLElement>): void => {
        const drag = gripDragRef.current;
        if (!drag || drag.pointerId !== e.pointerId) {
            return;
        }
        const next = resizeGeometry(
            drag.start,
            drag.grip,
            e.clientX - drag.startX,
            e.clientY - drag.startY,
            currentViewport(),
        );
        // A vertical delta fixes the height; a pure width drag keeps Auto (`h: null`).
        commit({ x: next.x, y: next.y, w: next.w, h: touchesHeight(drag.grip) ? next.h : intentRef.current.h });
    };

    const endGripDrag = (e: React.PointerEvent<HTMLElement>): void => {
        const drag = gripDragRef.current;
        if (!drag || drag.pointerId !== e.pointerId) {
            return;
        }
        gripDragRef.current = null;
        setActiveDrag(null);
        persist();
    };

    /** Keyboard: drive the edge to an absolute target size (arrows step, Home/End min/max). */
    const resizeTo = (edge: PanelEdge, target: number): void => {
        const start = startGeometry();
        const viewport = currentViewport();
        let next: ResolvedGeometry;
        if (edge === 'e') {
            next = resizeGeometry(start, 'e', target - start.w, 0, viewport);
        } else if (edge === 'w') {
            next = resizeGeometry(start, 'w', start.w - target, 0, viewport);
        } else if (edge === 's') {
            next = resizeGeometry(start, 's', 0, target - start.h, viewport);
        } else {
            next = resizeGeometry(start, 'n', 0, start.h - target, viewport);
        }
        commit({ x: next.x, y: next.y, w: next.w, h: touchesHeight(edge) ? next.h : intentRef.current.h });
        persist();
    };

    const onEdgeKeyDown =
        (edge: PanelEdge) =>
        (e: React.KeyboardEvent<HTMLElement>): void => {
            const step = e.shiftKey ? 64 : 16;
            const viewport = currentViewport();
            const start = startGeometry();
            const horizontal = edge === 'e' || edge === 'w';
            let target: number | null = null;
            if (horizontal) {
                // w edge: ArrowLeft widens (the edge travels left); e edge: ArrowRight widens.
                const growKey = edge === 'w' ? 'ArrowLeft' : 'ArrowRight';
                const shrinkKey = edge === 'w' ? 'ArrowRight' : 'ArrowLeft';
                if (e.key === growKey) {
                    target = start.w + step;
                } else if (e.key === shrinkKey) {
                    target = start.w - step;
                } else if (e.key === 'Home') {
                    target = PANEL_MIN_W;
                } else if (e.key === 'End') {
                    target = maxPanelWidth(viewport.w);
                }
            } else {
                // n edge: ArrowUp grows (the edge travels up); s edge: ArrowDown grows.
                const growKey = edge === 'n' ? 'ArrowUp' : 'ArrowDown';
                const shrinkKey = edge === 'n' ? 'ArrowDown' : 'ArrowUp';
                if (e.key === growKey) {
                    target = start.h + step;
                } else if (e.key === shrinkKey) {
                    target = start.h - step;
                } else if (e.key === 'Home') {
                    target = PANEL_MIN_H;
                } else if (e.key === 'End') {
                    target = maxPanelHeight(viewport.h);
                }
            }
            if (target === null) {
                return;
            }
            e.preventDefault();
            resizeTo(edge, target);
        };

    /** Double-click reset: e/w restore the default width (anchor kept), n/s restore Auto. */
    const onEdgeDoubleClick = (edge: PanelEdge) => (): void => {
        if (edge === 'e' || edge === 'w') {
            resizeTo(edge, PANEL_DEFAULT_W);
            return;
        }
        commit({ ...intentRef.current, h: null });
        persist();
    };

    // ------------------------------------------------- viewport / visibility re-clamping
    // Browser-window resize: re-apply the INTENT (identity for fitting values), so a
    // shrunken window clamps and a re-grown window restores the intended size.
    useEffect(() => {
        const onResize = (): void => {
            const nextApplied = clampGeometry(intentRef.current, measuredHeight(), currentViewport());
            appliedRef.current = nextApplied;
            setApplied(nextApplied);
        };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    // On open the element becomes measurable — re-clamp with the real Auto height.
    useEffect(() => {
        if (!options.active) {
            return;
        }
        const nextApplied = clampGeometry(intentRef.current, measuredHeight(), currentViewport());
        appliedRef.current = nextApplied;
        setApplied(nextApplied);
    }, [options.active]);

    // Release the window listeners if the element unmounts mid-move.
    useEffect(
        () => (): void => {
            window.removeEventListener('pointermove', onMovePointerMove);
            window.removeEventListener('pointerup', endMoveDrag);
            window.removeEventListener('pointercancel', endMoveDrag);
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [],
    );

    // While dragging, lock cursor + selection on <body> (fast flicks off the strip).
    useEffect(() => {
        if (!activeDrag) {
            return;
        }
        const { body } = document;
        const prevCursor = body.style.cursor;
        const prevUserSelect = body.style.userSelect;
        body.style.cursor = activeDrag === 'move' ? 'move' : GRIP_CURSORS[activeDrag];
        body.style.userSelect = 'none';
        return () => {
            body.style.cursor = prevCursor;
            body.style.userSelect = prevUserSelect;
        };
    }, [activeDrag]);

    const edgeProps = Object.fromEntries(
        EDGES.map(edge => {
            const horizontal = edge === 'e' || edge === 'w';
            const label = horizontal ? labelsRef.current.width : labelsRef.current.height;
            const props: EdgeGripProps = {
                role: 'separator',
                'aria-orientation': horizontal ? 'vertical' : 'horizontal',
                'aria-valuemin': horizontal ? PANEL_MIN_W : PANEL_MIN_H,
                'aria-valuemax': horizontal ? maxPanelWidth(currentViewport().w) : maxPanelHeight(currentViewport().h),
                'aria-valuenow': horizontal ? applied.w : (applied.h ?? measuredRef.current),
                ...(horizontal || applied.h != null ? {} : { 'aria-valuetext': 'auto' }),
                'aria-label': label,
                title: label,
                tabIndex: 0,
                onPointerDown: onGripPointerDown(edge),
                onPointerMove: onGripPointerMove,
                onPointerUp: endGripDrag,
                onPointerCancel: endGripDrag,
                onKeyDown: onEdgeKeyDown(edge),
                onDoubleClick: onEdgeDoubleClick(edge),
            };
            return [edge, props];
        }),
    ) as Record<PanelEdge, EdgeGripProps>;

    const cornerProps = Object.fromEntries(
        CORNERS.map(corner => {
            const props: CornerGripProps = {
                'aria-hidden': true,
                onPointerDown: onGripPointerDown(corner),
                onPointerMove: onGripPointerMove,
                onPointerUp: endGripDrag,
                onPointerCancel: endGripDrag,
            };
            return [corner, props];
        }),
    ) as Record<PanelCorner, CornerGripProps>;

    return {
        panelRef,
        geometry: applied,
        activeDrag,
        dragHandleProps: {
            onPointerDown: onMovePointerDown,
            style: { touchAction: 'none', cursor: 'move', userSelect: 'none' },
        },
        edgeProps,
        cornerProps,
    };
}

export default useFloatingPanel;
