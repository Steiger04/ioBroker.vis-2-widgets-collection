/**
 * Side-effect helpers for creating and controlling an iro.js ColorPicker instance.
 *
 * @module Light2CollectionWidget/colorPickerUtils/colorPickerEffects
 * @remarks
 * This module wraps `iro.ColorPicker(...)` and provides small utilities that are convenient to call from React
 * effects (initialize, clean up, resize, and update options).
 */
import iro from '@jaames/iro';

/**
 * Partial change information for HSV channels emitted by iro.js.
 */
export type ColorChanges = {
    h?: boolean;
    s?: boolean;
    v?: boolean;
};

/**
 * Creates an `iro.ColorPicker` instance for the given DOM ref and wires up the relevant event handlers.
 */
export function initializeColorPicker(
    ref: React.RefObject<HTMLDivElement>,
    pickerRef: React.MutableRefObject<iro.ColorPicker | null>,
    options: Record<string, any>,
    onInputChange?: (color: iro.Color, changes?: ColorChanges) => void,
    onInit?: (color: iro.Color, cctComponentNumber?: number) => void,
    cctComponentNumber?: number,
): void {
    if (!ref.current) {
        return;
    }
    pickerRef.current = iro.ColorPicker(ref.current, options);

    // Initialize the current color when iro fires its init event.
    pickerRef.current.on('color:init', (color: iro.Color) => {
        if (onInit) {
            onInit(color, cctComponentNumber);
        }
    });

    // Subscribe to interactive changes (optionally with HSV change flags).
    pickerRef.current.on('input:change', (color: iro.Color, changes: ColorChanges) => {
        if (onInputChange) {
            onInputChange(color, changes);
        }
    });
}

export function cleanupColorPicker(pickerRef: React.MutableRefObject<iro.ColorPicker | null>): void {
    pickerRef.current = null;
}

export function resizeColorPicker(picker: iro.ColorPicker | null, width: number | undefined): void {
    if (!picker || !width) {
        return;
    }
    picker.resize(width);
}

export function setColorPickerOptions(picker: iro.ColorPicker | null, options: Record<string, any>): void {
    if (!picker) {
        return;
    }
    picker.setOptions(options);
}
