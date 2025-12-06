// colorPickerUtils/colorPickerEffects.ts
import iro from '@jaames/iro';

// Changes-Typ für H/S/V-Änderungsinformationen
export type ColorChanges = {
    h?: boolean;
    s?: boolean;
    v?: boolean;
};

export function initializeColorPicker(
    ref: React.RefObject<HTMLDivElement>,
    pickerRef: React.MutableRefObject<iro.ColorPicker | null>,
    options: Record<string, any>,
    onInputChange?: (color: iro.Color, changes?: ColorChanges) => void, // <-- mit changes Parameter
    onInit?: (color: iro.Color, cctComponentNumber?: number) => void, // <-- zusätzlicher Parameter
    cctComponentNumber?: number,
): void {
    if (!ref.current) {
        return;
    }
    pickerRef.current = iro.ColorPicker(ref.current, options);

    // Event-Listener für Farbinitialisierung hinzufügen
    pickerRef.current.on('color:init', (color: iro.Color) => {
        if (onInit) {
            onInit(color, cctComponentNumber);
        }
    });

    // Event-Listener für Farbänderung hinzufügen (mit changes für H/S/V-Optimierung)
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
