import iro from '@jaames/iro';
import { type ElementDimensions } from '../../hooks/useElementDimensions';
import { type Light2FieldsRxData } from '../../lib/light2Fields';

type IroLayout = Array<{
    component: typeof iro.ui.Wheel | typeof iro.ui.Box | typeof iro.ui.Slider;
    options?: Record<string, any>;
}>;

// Gibt das Layout für den ColorPicker zurück
export function getColorLightLayout(colorLightUIComponent: Light2FieldsRxData['colorLightUIComponent']): IroLayout {
    switch (colorLightUIComponent) {
        case 'wheel':
            return [
                {
                    component: iro.ui.Wheel,
                    options: { wheelLightness: false },
                },
                {
                    component: iro.ui.Slider,
                    options: { sliderType: 'value' },
                },
            ];
        case 'box':
            return [
                {
                    component: iro.ui.Box,
                    options: { boxLightness: false },
                },
                {
                    component: iro.ui.Slider,
                    options: { sliderType: 'hue' },
                },
            ];
        case 'slider':
            return [
                { component: iro.ui.Slider, options: { sliderType: 'red' } },
                { component: iro.ui.Slider, options: { sliderType: 'green' } },
                { component: iro.ui.Slider, options: { sliderType: 'blue' } },
            ];
        default:
            return [];
    }
}

// Gibt die Breite für den ColorPicker zurück
export function getColorLightWidth(
    dimensions: ElementDimensions,
    colorLightUIComponent: Light2FieldsRxData['colorLightUIComponent'],
): number | undefined {
    switch (colorLightUIComponent) {
        case 'wheel':
        case 'box':
            return dimensions.maxWidth;
        case 'slider':
            return dimensions.height;
        default:
            return 0;
    }
}

// Gibt den Abstand zwischen Pickern zurück
export function getMarginBetweenPickers(
    dimensions: ElementDimensions,
    colorLightUIComponent: Light2FieldsRxData['colorLightUIComponent'],
    colorLightSliderWidth: Light2FieldsRxData['colorLightSliderWidth'],
): number {
    if (!dimensions.width || colorLightUIComponent !== 'slider') {
        return 12;
    }
    return (dimensions.width - 3 * (colorLightSliderWidth || 1) * 28) / 2;
}
