/**
 * Rail-axis offset of the slider inside its flex container.
 *
 * @module SliderCollectionWidget/railOffset
 * @remarks
 * MUI centers the rail in the slider root (symmetric root padding, rail at
 * 50 % with a −50 % translate). The only asymmetry is the margin the widget
 * reserves for the mark labels ({@link MARK_LABEL_SPACE}) on one side of the
 * root: the centered margin box shifts the rail by half of it the other way.
 * The end icons are translated by this offset so they sit on the rail axis —
 * derived from the layout contract instead of measured from the DOM.
 */

/** Space (px) reserved for the mark labels: below (horizontal) or right (vertical) of the slider. */
export const MARK_LABEL_SPACE = {
    horizontal: 20,
    vertical: 44,
} as const;

/**
 * Offset of the rail center from the container center.
 *
 * @param marks - Whether mark labels are shown (reserves {@link MARK_LABEL_SPACE}).
 * @param orientation - Slider orientation.
 * @returns The offset in px; only the cross axis of the orientation is non-zero.
 */
export function railOffset(marks: boolean, orientation: 'horizontal' | 'vertical'): { x: number; y: number } {
    if (!marks) {
        return { x: 0, y: 0 };
    }

    return orientation === 'horizontal'
        ? { x: 0, y: -MARK_LABEL_SPACE.horizontal / 2 }
        : { x: -MARK_LABEL_SPACE.vertical / 2, y: 0 };
}
