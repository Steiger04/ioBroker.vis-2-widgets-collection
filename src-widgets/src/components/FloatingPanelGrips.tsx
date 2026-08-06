/**
 * The 8 Resize grips of a floating panel (ADR-0020 addendum).
 *
 * @module components/FloatingPanelGrips
 * @remarks
 * Pure chrome for {@link module:hooks/useFloatingPanel}: 4 edge grips in the bare-hairline
 * idiom (transparent at rest, `primary.main` on hover/focus/drag — the line colouring itself
 * is the interaction signature) + 4 corner grips as invisible hit zones revealed only by the
 * resize cursor. Edge strips are inset by the corner size so hit zones never overlap.
 */
import { Box } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import type React from 'react';

import type { CornerGripProps, EdgeGripProps, PanelCorner, PanelEdge, PanelGrip } from '../hooks/useFloatingPanel';
import { CORNER_HIT, EDGE_HIT, EDGE_INSET, GRIP_CURSORS } from '../hooks/useFloatingPanel';

/** Props for {@link FloatingPanelGrips}. */
interface FloatingPanelGripsProps {
    /** Separator props per edge, from {@link module:hooks/useFloatingPanel}. */
    edgeProps: Record<PanelEdge, EdgeGripProps>;
    /** Pointer-only props per corner, from {@link module:hooks/useFloatingPanel}. */
    cornerProps: Record<PanelCorner, CornerGripProps>;
    /** The drag in flight — the active edge keeps its primary hairline. */
    activeDrag: PanelGrip | 'move' | null;
}

const EDGES: readonly PanelEdge[] = ['w', 'e', 'n', 's'];
const CORNERS: readonly PanelCorner[] = ['nw', 'ne', 'sw', 'se'];

/** Straddling hit strip with the 1 px hairline centred on the panel's border. */
const edgeSx = (edge: PanelEdge, active: boolean): SxProps<Theme> => {
    const vertical = edge === 'w' || edge === 'e';
    return {
        position: 'absolute',
        zIndex: 2,
        cursor: GRIP_CURSORS[edge],
        ...(edge === 'w' && { left: -EDGE_INSET, top: CORNER_HIT, bottom: CORNER_HIT, width: EDGE_HIT }),
        ...(edge === 'e' && { right: -EDGE_INSET, top: CORNER_HIT, bottom: CORNER_HIT, width: EDGE_HIT }),
        ...(edge === 'n' && { top: -EDGE_INSET, left: CORNER_HIT, right: CORNER_HIT, height: EDGE_HIT }),
        ...(edge === 's' && { bottom: -EDGE_INSET, left: CORNER_HIT, right: CORNER_HIT, height: EDGE_HIT }),
        '&::after': {
            content: '""',
            position: 'absolute',
            bgcolor: active ? 'primary.main' : 'transparent',
            transition: 'background-color 150ms',
            ...(vertical
                ? { top: 0, bottom: 0, width: 1, ...(edge === 'w' ? { left: EDGE_INSET } : { right: EDGE_INSET }) }
                : { left: 0, right: 0, height: 1, ...(edge === 'n' ? { top: EDGE_INSET } : { bottom: EDGE_INSET }) }),
        },
        '&:hover::after, &:focus-visible::after': { bgcolor: 'primary.main' },
        '&:focus-visible': { outline: 'none' },
    };
};

/** Invisible corner hit zone — the resize cursor alone reveals it. */
const cornerSx = (corner: PanelCorner): SxProps<Theme> => ({
    position: 'absolute',
    zIndex: 3,
    width: CORNER_HIT,
    height: CORNER_HIT,
    cursor: GRIP_CURSORS[corner],
    ...(corner.includes('n') ? { top: -CORNER_HIT / 2 } : { bottom: -CORNER_HIT / 2 }),
    ...(corner.includes('w') ? { left: -CORNER_HIT / 2 } : { right: -CORNER_HIT / 2 }),
});

/**
 * Renders the 8 grips. Must sit inside a positioned panel element (the grips anchor to it
 * absolutely).
 */
function FloatingPanelGrips({ edgeProps, cornerProps, activeDrag }: FloatingPanelGripsProps): React.JSX.Element {
    return (
        <>
            {EDGES.map(edge => (
                <Box
                    key={edge}
                    {...edgeProps[edge]}
                    sx={edgeSx(edge, activeDrag === edge)}
                />
            ))}
            {CORNERS.map(corner => (
                <Box
                    key={corner}
                    {...cornerProps[corner]}
                    sx={cornerSx(corner)}
                />
            ))}
        </>
    );
}

export default FloatingPanelGrips;
