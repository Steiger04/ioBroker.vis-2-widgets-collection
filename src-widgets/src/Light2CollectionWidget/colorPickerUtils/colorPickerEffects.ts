// colorPickerUtils/colorPickerEffects.ts
import iro from '@jaames/iro';

export function initializeColorPicker(
    ref: React.RefObject<HTMLDivElement>,
    pickerRef: React.MutableRefObject<iro.ColorPicker | null>,
    options: Record<string, any>,
): void {
    if (!ref.current) {
        return;
    }
    pickerRef.current = iro.ColorPicker(ref.current, options);
}

export function cleanupColorPicker(pickerRef: React.MutableRefObject<iro.ColorPicker | null>): void {
    pickerRef.current = null;
}

export function resizeColorPicker(picker: iro.ColorPicker | null, width: number | undefined): void {
    if (!width) {
        return;
    }
    picker?.resize(width);
}

export function setColorPickerOptions(picker: iro.ColorPicker | null, options: Record<string, any>): void {
    if (!picker) {
        return;
    }
    picker.setOptions(options);
}
