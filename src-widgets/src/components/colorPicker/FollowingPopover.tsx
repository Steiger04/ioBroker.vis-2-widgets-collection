/**
 * Popover that follows the size of its content.
 *
 * @module components/colorPicker/FollowingPopover
 * @remarks
 * Renders the MUI popover itself and observes its content (ADR-0102). When the content grows
 * after opening — Color Guide, Advanced sliders or gradient stops unfold — the popover is
 * repositioned at once so it stays fully visible; when the content shrinks it stays put, so a
 * collapsing section does not make it jump. MUI repositions the popover after every render (a
 * pick re-renders it), so a shrunk popover is *held*: `anchorReference="none"` makes MUI leave
 * the paper's top/left as they are. The next growth, a window resize or reopening lets go.
 *
 * The opening side follows the available space: below the anchor unless there is more room
 * above; a content that no longer fits on its side flips to the other one when that one is
 * larger. MUI's own margin handling then shifts the popover into the viewport. The paper's
 * maxHeight is nearly the viewport height, so the content renders at its natural size.
 *
 * MUI mounts the popover content through a portal only after the popover itself has mounted,
 * so the observation is bound to the content element through a callback ref and attaches as
 * soon as that element exists (the former positioning hook attached before it and never again).
 */

import { Box, Popover } from '@mui/material';
import type { PopoverActions, PopoverOrigin } from '@mui/material/Popover';
import type { SxProps, Theme } from '@mui/material/styles';
import { useCallback, useEffect, useInsertionEffect, useRef, useState } from 'react';
import type React from 'react';

/** Vertical side of the anchor the popover opens on. */
type Placement = 'top' | 'bottom';

/** Viewport margin in px — MUI's default `marginThreshold`. */
const MARGIN = 16;

/** Props for {@link FollowingPopover}. */
export interface FollowingPopoverProps {
    /** Element the popover hangs from. */
    anchorEl: HTMLElement | null;
    /** Whether the popover is shown; the content is unmounted while closed. */
    open: boolean;
    /** Called on Escape and on a click outside the popover. */
    onClose: () => void;
    /** Popover content; its size is observed. */
    children: React.ReactNode;
    /** Look of the popover paper (padding, radius, background …); positioning is owned here. */
    paperSx?: SxProps<Theme>;
}

/** Room above and below the anchor, in px. */
function availableSpace(anchor: HTMLElement): { above: number; below: number } {
    const rect = anchor.getBoundingClientRect();
    return { above: rect.top, below: window.innerHeight - rect.bottom };
}

/** The side with more room — below on a tie. */
function roomierSide(anchor: HTMLElement): Placement {
    const { above, below } = availableSpace(anchor);
    return above > below ? 'top' : 'bottom';
}

/**
 * MUI popover that repositions when its content grows and holds still when it shrinks.
 *
 * @param props - Component props.
 * @param props.anchorEl - Element the popover hangs from.
 * @param props.open - Whether the popover is shown.
 * @param props.onClose - Called on Escape and on a click outside.
 * @param props.children - Popover content.
 * @param props.paperSx - Look of the popover paper.
 * @returns The popover.
 */
function FollowingPopover({ anchorEl, open, onClose, children, paperSx }: FollowingPopoverProps): React.JSX.Element {
    const [placement, setPlacement] = useState<Placement>('bottom');
    const placementRef = useRef<Placement>('bottom');
    const actionRef = useRef<PopoverActions>(null);
    // State, not a ref: the content mounts after the popover, and its arrival must re-run the effect.
    const [content, setContent] = useState<HTMLElement | null>(null);
    // Held after a shrink: MUI keeps the paper where it is instead of re-placing it on each render.
    const [held, setHeld] = useState(false);

    const applyPlacement = useCallback((next: Placement): void => {
        placementRef.current = next;
        setPlacement(next);
    }, []);

    // Opening side on open, and again when the window changes size. An opening releases a held
    // popover while rendering; the side needs the anchor's layout, so it is measured after the commit.
    const [openedFor, setOpenedFor] = useState<{ open?: boolean; anchorEl?: HTMLElement | null }>({});
    if (openedFor.open !== open || openedFor.anchorEl !== anchorEl) {
        setOpenedFor({ open, anchorEl });
        if (open && anchorEl) {
            setHeld(false);
        }
    }
    const anchorRef = useRef(anchorEl);
    useInsertionEffect(() => {
        anchorRef.current = anchorEl;
    });
    useEffect(() => {
        const anchor = anchorRef.current;
        if (!open || !anchor) {
            return undefined;
        }
        const side = roomierSide(anchor);
        placementRef.current = side;
        setPlacement(side);
        const onResize = (): void => {
            setHeld(false);
            applyPlacement(roomierSide(anchor));
        };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, [open, anchorEl, applyPlacement]);

    // Follow the content: grows → reposition (flipping sides if it no longer fits), shrinks → hold.
    useEffect(() => {
        if (!open || !anchorEl || !content) {
            return undefined;
        }
        let last: { width: number; height: number } | null = null;
        const observer = new ResizeObserver(entries => {
            const entry = entries[entries.length - 1];
            if (!entry) {
                return;
            }
            const { width, height } = entry.contentRect;
            const grew = last === null || width > last.width || height > last.height;
            last = { width, height };
            if (!grew) {
                setHeld(true);
                return;
            }
            setHeld(false);
            const { above, below } = availableSpace(anchorEl);
            const current = placementRef.current;
            const currentSpace = current === 'bottom' ? below : above;
            const otherSpace = current === 'bottom' ? above : below;
            if (height > currentSpace - MARGIN && otherSpace > currentSpace) {
                applyPlacement(current === 'bottom' ? 'top' : 'bottom');
            }
            // A held popover is re-placed by the render that releases it.
            actionRef.current?.updatePosition();
        });
        observer.observe(content);
        return () => observer.disconnect();
    }, [open, anchorEl, content, applyPlacement]);

    const anchorOrigin: PopoverOrigin = { vertical: placement === 'bottom' ? 'bottom' : 'top', horizontal: 'center' };
    const transformOrigin: PopoverOrigin = {
        vertical: placement === 'bottom' ? 'top' : 'bottom',
        horizontal: 'center',
    };

    return (
        <Popover
            action={actionRef}
            open={open}
            anchorEl={anchorEl}
            anchorReference={held ? 'none' : 'anchorEl'}
            onClose={onClose}
            anchorOrigin={anchorOrigin}
            transformOrigin={transformOrigin}
            slotProps={{
                paper: {
                    elevation: 0,
                    sx: [
                        {
                            boxSizing: 'border-box',
                            maxHeight: `calc(100vh - ${2 * MARGIN}px)`,
                            overflowX: 'hidden',
                            overflowY: 'auto',
                        },
                        ...(paperSx === undefined ? [] : Array.isArray(paperSx) ? paperSx : [paperSx]),
                    ],
                },
            }}
        >
            <Box ref={setContent}>{children}</Box>
        </Popover>
    );
}

export default FollowingPopover;
