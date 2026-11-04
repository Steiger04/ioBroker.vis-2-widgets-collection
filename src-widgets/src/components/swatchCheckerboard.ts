/**
 * The checkerboard both colour field rows lay their swatch on.
 *
 * @module components/swatchCheckerboard
 * @remarks
 * Shared by the Textfeld-Zeile (`ColorTextFieldRow`) and the label row (`ColorPickerField`). A
 * swatch paints its colour on top of it: an opaque colour covers it, a translucent one lies on it
 * and an inherited `transparent` shows it alone. Its squares are fixed colours, not theme colours,
 * so a translucent colour reads the same in a light and a dark editor.
 */

/** CSS `background` of the checkerboard: light-grey and white squares of 4 px. */
export const SWATCH_CHECKERBOARD = 'repeating-conic-gradient(#cccccc 0% 25%, #ffffff 0% 50%) 0 0 / 8px 8px';
