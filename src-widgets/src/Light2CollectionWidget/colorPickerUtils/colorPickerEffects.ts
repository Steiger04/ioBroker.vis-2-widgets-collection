// colorPickerUtils/colorPickerEffects.ts
import iro from '@jaames/iro';

export function initializeColorPicker(
    ref: React.RefObject<HTMLDivElement>,
    pickerRef: React.MutableRefObject<iro.ColorPicker | null>,
    options: Record<string, any>,
    onChange?: (color: iro.Color) => void, // <-- zusätzlicher Parameter
): void {
    if (!ref.current) {
        return;
    }
    pickerRef.current = iro.ColorPicker(ref.current, options);

    // Event-Listener für Farbänderung hinzufügen
    pickerRef.current.on('input:change', (color: iro.Color) => {
        if (onChange) {
            onChange(color);
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
