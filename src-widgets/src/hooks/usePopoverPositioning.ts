/**
 * Unified hook for dynamic popover placement and content resize tracking.
 *
 * @module hooks/usePopoverPositioning
 * @remarks
 * Determines preferred placement direction (above/below) based on viewport space,
 * and uses a ResizeObserver on the popover content to flip direction when needed.
 * The maxHeight is set to nearly the full viewport height so content renders at
 * its natural size. MUI Popover's built-in viewport boundary handling shifts the
 * popover to keep it fully visible.
 *
 * Replaces the former `usePopoverPlacement` + `usePopoverResizeObserver` pair.
 */

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { PopoverActions } from '@mui/material/Popover';

/** Vertical placement direction relative to anchor. */
type Placement = 'top' | 'bottom';

/** MUI Popover origin configuration. */
interface PopoverOrigin {
    vertical: 'top' | 'bottom';
    horizontal: 'center';
}

/** Return value of usePopoverPositioning. */
export interface UsePopoverPositioningResult {
    /** Pass to Popover `anchorOrigin` */
    anchorOrigin: PopoverOrigin;
    /** Pass to Popover `transformOrigin` */
    transformOrigin: PopoverOrigin;
    /** Dynamic maxHeight CSS string for the Popover paper */
    maxHeight: string;
    /** Callback ref — attach to the inner content `<Box>` inside the Popover */
    setContentRef: (element: HTMLElement | null) => void;
    /** Pass to Popover `action` prop */
    popoverActionRef: React.RefObject<PopoverActions>;
}

/** Calculates available space above and below an anchor element. */
function getAvailableSpace(anchor: HTMLElement): { above: number; below: number } {
    const rect = anchor.getBoundingClientRect();
    return {
        above: rect.top,
        below: window.innerHeight - rect.bottom,
    };
}

/**
 * Unified popover positioning hook.
 *
 * @param anchorEl - The element the popover attaches to (null when closed)
 * @param open - Whether the popover is currently open
 * @param margin - Viewport margin in px (default: 16, matches MUI's marginThreshold)
 * @returns Placement props for MUI Popover and a content callback ref
 */
export function usePopoverPositioning(
    anchorEl: HTMLElement | null,
    open: boolean,
    margin = 16,
): UsePopoverPositioningResult {
    const [placement, setPlacement] = useState<Placement>('bottom');

    // Viewport-based maxHeight: content renders at natural size, MUI shifts the popover to fit
    const maxHeight = useMemo(() => `calc(100vh - ${2 * margin}px)`, [margin]);

    const placementRef = useRef<Placement>('bottom');
    const contentRef = useRef<HTMLElement | null>(null);
    const popoverActionRef = useRef<PopoverActions>(null);

    // --- Placement helpers ---------------------------------------------------

    const applyPlacement = useCallback((dir: Placement) => {
        placementRef.current = dir;
        setPlacement(dir);
    }, []);

    const recalculate = useCallback(
        (contentHeight?: number) => {
            if (!anchorEl) {
                return;
            }
            const { above, below } = getAvailableSpace(anchorEl);
            const current = placementRef.current;

            if (contentHeight !== undefined) {
                const currentSpace = current === 'bottom' ? below : above;
                const otherSpace = current === 'bottom' ? above : below;

                // Content fits on current side — keep direction
                if (contentHeight <= currentSpace - margin) {
                    return;
                }
                // Flip if the other side has more room
                if (otherSpace > currentSpace) {
                    applyPlacement(current === 'bottom' ? 'top' : 'bottom');
                }
            } else {
                applyPlacement(above > below ? 'top' : 'bottom');
            }
        },
        [anchorEl, margin, applyPlacement],
    );

    // --- Initial placement on open -------------------------------------------

    useEffect(() => {
        if (!open || !anchorEl) {
            return;
        }
        const { above, below } = getAvailableSpace(anchorEl);
        applyPlacement(above > below ? 'top' : 'bottom');
    }, [open, anchorEl, applyPlacement]);

    // --- Window resize while open --------------------------------------------

    useEffect(() => {
        if (!open || !anchorEl) {
            return;
        }
        const onResize = (): void => recalculate();
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, [open, anchorEl, recalculate]);

    // --- ResizeObserver on content -------------------------------------------

    // Callback ref (triggers re-render so the ResizeObserver effect can attach)
    const [, forceUpdate] = useState({});
    const setContentRef = useCallback((element: HTMLElement | null) => {
        contentRef.current = element;
        forceUpdate({});
    }, []);

    useEffect(() => {
        if (!open || !contentRef.current) {
            return;
        }
        let rafId: number | null = null;

        const observer = new ResizeObserver((entries: ResizeObserverEntry[]) => {
            if (rafId !== null) {
                cancelAnimationFrame(rafId);
            }
            rafId = requestAnimationFrame(() => {
                rafId = null;
                popoverActionRef.current?.updatePosition();
                if (entries.length > 0) {
                    recalculate(entries[0].contentRect.height);
                }
            });
        });

        observer.observe(contentRef.current);
        return () => {
            if (rafId !== null) {
                cancelAnimationFrame(rafId);
            }
            observer.disconnect();
        };
    }, [open, recalculate]);

    // --- Derived origins -----------------------------------------------------

    const anchorOrigin: PopoverOrigin =
        placement === 'bottom'
            ? { vertical: 'bottom', horizontal: 'center' }
            : { vertical: 'top', horizontal: 'center' };

    const transformOrigin: PopoverOrigin =
        placement === 'bottom'
            ? { vertical: 'top', horizontal: 'center' }
            : { vertical: 'bottom', horizontal: 'center' };

    return { anchorOrigin, transformOrigin, maxHeight, setContentRef, popoverActionRef };
}
