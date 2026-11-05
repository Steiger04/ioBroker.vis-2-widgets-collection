/**
 * The checkerboard swatch both colour field rows show their colour on.
 *
 * @module components/swatchCheckerboard
 * @remarks
 * Shared by the Textfeld-Zeile (`ColorTextFieldRow`) and the label row (`ColorPickerField`). A
 * swatch paints its colour on top of the checkerboard: an opaque colour covers it, a translucent
 * one lies on it and an inherited `transparent` (or no colour) shows it alone. Its squares are
 * fixed colours, not theme colours, so a translucent colour reads the same in a light and a dark
 * editor. {@link CheckerboardSwatch} builds the two layers — the checkerboard box
 * (`data-swatch-checkerboard`) and the colour fill inside it (`data-swatch-fill`); each row keeps
 * its own size, frame and fill (e.g. the Textfeld-Zeile's error hatch).
 */

import { Box, type SxProps, type Theme } from '@mui/material';
import type React from 'react';

/** CSS `background` of the checkerboard: light-grey and white squares of 4 px. */
export const SWATCH_CHECKERBOARD = 'repeating-conic-gradient(#cccccc 0% 25%, #ffffff 0% 50%) 0 0 / 8px 8px';

/** The colour of a swatch that names no colour: nothing painted, the checkerboard alone. */
export const TRANSPARENT = 'transparent';

/** Props for {@link CheckerboardSwatch}. */
interface CheckerboardSwatchProps {
    /** CSS `background` of the fill; `''` paints nothing ({@link TRANSPARENT}). */
    fill: string;
    /** Size, shape and frame of the checkerboard box; its `background` is the checkerboard. */
    sx: SxProps<Theme>;
    /** Whether the fill takes the box's corner radius (`borderRadius: 'inherit'`). */
    roundedFill?: boolean;
    /** Exposed as `data-swatch-color` on the checkerboard box (label row). */
    swatchColor?: string;
}

/**
 * The two swatch layers: the checkerboard box and the colour fill on it.
 *
 * @param props - See {@link CheckerboardSwatchProps}.
 * @param props.fill - CSS `background` of the fill.
 * @param props.sx - Size, shape and frame of the checkerboard box.
 * @param props.roundedFill - Whether the fill inherits the box's corner radius.
 * @param props.swatchColor - Value of the box's `data-swatch-color` attribute.
 * @returns The checkerboard box with its fill.
 */
export function CheckerboardSwatch({ fill, sx, roundedFill, swatchColor }: CheckerboardSwatchProps): React.JSX.Element {
    return (
        <Box
            data-swatch-color={swatchColor}
            data-swatch-checkerboard
            sx={[...(Array.isArray(sx) ? sx : [sx]), { background: SWATCH_CHECKERBOARD }]}
        >
            <Box
                data-swatch-fill
                sx={{
                    width: '100%',
                    height: '100%',
                    ...(roundedFill ? { borderRadius: 'inherit' } : {}),
                    background: fill || TRANSPARENT,
                }}
            />
        </Box>
    );
}
