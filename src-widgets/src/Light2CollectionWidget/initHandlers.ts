import type iro from '@jaames/iro';
import type { VisRxData } from '@iobroker/types-vis-2';
import type { Light2FieldsRxData, CommonObjectFieldsRxData, CommonFieldsRxData, DelayFieldsRxData } from '../newTypes';

export type Light2WidgetData = VisRxData &
    Light2FieldsRxData &
    CommonObjectFieldsRxData &
    CommonFieldsRxData &
    DelayFieldsRxData;

type WidgetPropertyName = Extract<keyof Light2WidgetData, string>;

/**
 * Reads a numeric state value by referencing the widget property name (not the OID string itself).
 * Returns undefined when the widget data does not provide an OID or the value cannot be parsed.
 */
const readNumericValue = (
    propertyName: WidgetPropertyName,
    widgetData: Light2WidgetData,
    getPropertyValue: (stateName: string) => ioBroker.StateValue,
): number | undefined => {
    const oid = widgetData[propertyName];
    if (typeof oid !== 'string' || !oid.trim()) {
        return undefined;
    }

    const rawValue = getPropertyValue(propertyName);
    const numericValue = Number(rawValue);

    return Number.isFinite(numericValue) ? numericValue : undefined;
};

const normalizePercentValue = (value: number | undefined, maxValue?: number | null): number | undefined => {
    if (value === undefined) {
        return undefined;
    }

    if (typeof maxValue === 'number' && maxValue === 254) {
        return Math.round((value / 254) * 100);
    }

    return Math.round(value);
};

const readNormalizedPercentValue = (
    propertyName: WidgetPropertyName,
    widgetData: Light2WidgetData,
    getPropertyValue: (stateName: string) => ioBroker.StateValue,
    maxValue?: number | null,
): number | undefined => {
    const rawValue = readNumericValue(propertyName, widgetData, getPropertyValue);
    return normalizePercentValue(rawValue, maxValue);
};

/**
 * Default fallbacks used while initializing colors from ioBroker states:
 * - Kelvin defaults to 2000K when no temperature value is available.
 * - Hex strings default to '#ffffff' if missing or empty.
 * - Numeric channels (RGB/HSV) default to 0 when undefined.
 * - Hue-compatible channels with maxValue 254 are normalized to percent values before applying to iro.Color.
 */

export function initializeKelvin(
    color: iro.Color,
    widgetData: Light2WidgetData,
    getPropertyValue: (stateName: string) => ioBroker.StateValue,
): void {
    const kelvinValue = readNumericValue('colorLightTemperatureOid', widgetData, getPropertyValue) ?? 2000;
    color.kelvin = kelvinValue;
}

export function initializeBrightness(
    color: iro.Color,
    widgetData: Light2WidgetData,
    getPropertyValue: (stateName: string) => ioBroker.StateValue,
): void {
    const brightnessValue = readNormalizedPercentValue(
        'colorLightBrightnessOid',
        widgetData,
        getPropertyValue,
        widgetData.colorLightBrightnessOidObject?.maxValue,
    );

    if (brightnessValue === undefined) {
        return;
    }

    color.value = brightnessValue;
}

/**
 * Initializes the Light2 picker with the latest ioBroker states so the UI mirrors the real device.
 * The optional CCT component number (1 = Kelvin, 2 = Brightness) decides which part of the twin pickers is initialized.
 * Missing states gracefully fallback to reasonable defaults (2000K for Kelvin, untouched others) without throwing.
 * Hue-compatible channels with maxValue 254 are converted to percent values before being applied to {@link iro.Color}.
 */
export function initializeColorFromStates(
    color: iro.Color,
    colorLightType: Light2FieldsRxData['colorLightType'],
    getPropertyValue: (oid: string) => ioBroker.StateValue,
    widgetData: Light2WidgetData,
    cctComponentNumber?: number,
): void {
    switch (colorLightType) {
        case 'cct': {
            if (cctComponentNumber === 1) {
                initializeKelvin(color, widgetData, getPropertyValue);
            } else if (cctComponentNumber === 2) {
                const brightnessValue = readNormalizedPercentValue(
                    'colorLightBrightnessOid',
                    widgetData,
                    getPropertyValue,
                    widgetData.colorLightBrightnessOidObject?.maxValue,
                );

                if (brightnessValue !== undefined) {
                    color.value = brightnessValue;
                }
            }
            break;
        }
        case 'rgb':
        case 'rgbcct': {
            if (!widgetData.colorLightRgbHexOid) {
                break;
            }

            /* if (colorLightType === 'rgbcct') {
                initializeKelvin(color, widgetData, getPropertyValue);
            } */

            const hexValue = getPropertyValue('colorLightRgbHexOid');
            const hexString = typeof hexValue === 'string' && hexValue.trim().length > 0 ? hexValue : '#ffffff';

            color.hexString = hexString;

            break;
        }
        case 'r/g/b':
        case 'r/g/b/cct': {
            /* if (colorLightType === 'r/g/b/cct') {
                initializeKelvin(color, widgetData, getPropertyValue);
            } */

            if (widgetData.colorLightRedOid && widgetData.colorLightGreenOid && widgetData.colorLightBlueOid) {
                const red = readNumericValue('colorLightRedOid', widgetData, getPropertyValue);
                const green = readNumericValue('colorLightGreenOid', widgetData, getPropertyValue);
                const blue = readNumericValue('colorLightBlueOid', widgetData, getPropertyValue);

                color.red = red ?? 0;
                color.green = green ?? 0;
                color.blue = blue ?? 0;
            }

            break;
        }
        case 'h/s/v':
        case 'h/s/v/cct': {
            /* if (colorLightType === 'h/s/v/cct') {
                initializeKelvin(color, widgetData, getPropertyValue);
            } */

            if (
                widgetData.colorLightHueOid &&
                widgetData.colorLightSaturationOid &&
                widgetData.colorLightBrightnessOid
            ) {
                const hue = readNumericValue('colorLightHueOid', widgetData, getPropertyValue);
                const saturation = readNormalizedPercentValue(
                    'colorLightSaturationOid',
                    widgetData,
                    getPropertyValue,
                    widgetData.colorLightSaturationOidObject?.maxValue,
                );
                const brightness = readNormalizedPercentValue(
                    'colorLightBrightnessOid',
                    widgetData,
                    getPropertyValue,
                    widgetData.colorLightBrightnessOidObject?.maxValue,
                );

                if (hue !== undefined) {
                    color.hue = hue;
                }

                if (saturation !== undefined) {
                    color.saturation = saturation;
                }

                if (brightness !== undefined) {
                    color.value = brightness;
                }
            }

            break;
        }
        default:
            break;
    }
}
