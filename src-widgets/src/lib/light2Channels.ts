/**
 * The Lichttyp channel table of Light2 — which Kanäle each Lichttyp binds, per view.
 *
 * @module lib/light2Channels
 * @remarks
 * ADR-0108 Nr. 1: the one place that knows the Kanäle of a Lichttyp. Per Lichttyp it declares
 * the colour model of the colour view, whether there is a CCT-Ansicht, and through both the
 * Kanäle of each view. Per Kanal: the field, the picker property it is written from and read
 * into, whether the Hue-Skala may apply, the HSV change flag that gates its write, and — in the
 * CCT-Ansicht — whether the Kelvin- or the Helligkeits-Picker writes it. „& cct" is a property
 * of a Lichttyp (its CCT-Ansicht), not a channel set of its own.
 *
 * Its consumers ask it: the editor `hidden` rules (`light2Fields`, field literals stay —
 * ADR-0001), the widget's channel mapping (read and write) and the Kanäle handed to
 * `backendSyncKey`. Kept free of components and of iro: the editor path loads it.
 */
import type { Light2FieldsRxData } from '../types/field-definitions/light2-fields';

/** What a Light2 widget steers of its lamp (`colorLightType`). */
export type Light2Type = NonNullable<Light2FieldsRxData['colorLightType']>;

/** The two views of a Light2 widget: the colour picker, or the CCT-Ansicht (Kelvin + Helligkeit). */
export type Light2View = 'color' | 'cct';

/** The field of a Kanal — one of the eight colour states a Light2 widget binds. */
export type Light2ChannelField =
    | 'colorLightTemperatureOid'
    | 'colorLightRgbHexOid'
    | 'colorLightRedOid'
    | 'colorLightGreenOid'
    | 'colorLightBlueOid'
    | 'colorLightHueOid'
    | 'colorLightSaturationOid'
    | 'colorLightBrightnessOid';

/** The scalar `iro.Color` property a Kanal is written from and read into. */
export type Light2PickerProperty = 'kelvin' | 'hexString' | 'red' | 'green' | 'blue' | 'hue' | 'saturation' | 'value';

/** The picker of the CCT-Ansicht that writes a Kanal. */
export type Light2CctPicker = 'kelvin' | 'brightness';

/** One Kanal as a view uses it. */
export interface Light2Channel {
    /** The Kanal's field. */
    field: Light2ChannelField;
    /** The picker property the Kanal is written from and read into. */
    property: Light2PickerProperty;
    /** Percent Kanal: the Hue-Skala applies when its object's maximum is 254, else it is rounded. */
    hueScale: boolean;
    /** Colour view of h/s/v: the Kanal is written only when the picker reports this component changed. */
    changeFlag?: 'h' | 's' | 'v';
    /** CCT-Ansicht: the picker that writes the Kanal. */
    picker?: Light2CctPicker;
}

/** Every Kanal field, once, in field-list order. */
export const LIGHT2_CHANNEL_FIELDS: readonly Light2ChannelField[] = [
    'colorLightTemperatureOid',
    'colorLightRgbHexOid',
    'colorLightRedOid',
    'colorLightGreenOid',
    'colorLightBlueOid',
    'colorLightHueOid',
    'colorLightSaturationOid',
    'colorLightBrightnessOid',
];

/** The colour model of the colour view. */
type ColorModel = 'rgb-hex' | 'r/g/b' | 'h/s/v';

/** The Kanäle of each colour model, in write and sync order. */
const COLOR_MODEL_CHANNELS: Record<ColorModel, readonly Light2Channel[]> = {
    'rgb-hex': [{ field: 'colorLightRgbHexOid', property: 'hexString', hueScale: false }],
    'r/g/b': [
        { field: 'colorLightRedOid', property: 'red', hueScale: false },
        { field: 'colorLightGreenOid', property: 'green', hueScale: false },
        { field: 'colorLightBlueOid', property: 'blue', hueScale: false },
    ],
    'h/s/v': [
        { field: 'colorLightHueOid', property: 'hue', hueScale: false, changeFlag: 'h' },
        { field: 'colorLightSaturationOid', property: 'saturation', hueScale: true, changeFlag: 's' },
        // Brightness is shared: the same Kanal as in the CCT-Ansicht.
        { field: 'colorLightBrightnessOid', property: 'value', hueScale: true, changeFlag: 'v' },
    ],
};

/** The Kanäle of the CCT-Ansicht: the Kelvin-Picker writes the temperature, the Helligkeits-Picker the brightness. */
const CCT_CHANNELS: readonly Light2Channel[] = [
    { field: 'colorLightTemperatureOid', property: 'kelvin', hueScale: false, picker: 'kelvin' },
    { field: 'colorLightBrightnessOid', property: 'value', hueScale: true, picker: 'brightness' },
];

/** A Lichttyp: the colour model of its colour view (none: no colour view), and whether it has a CCT-Ansicht. */
interface LightTypeEntry {
    colorModel?: ColorModel;
    cctView: boolean;
}

const LIGHT_TYPES: Record<Light2Type, LightTypeEntry> = {
    none: { cctView: false },
    cct: { cctView: true },
    rgb: { colorModel: 'rgb-hex', cctView: false },
    rgbcct: { colorModel: 'rgb-hex', cctView: true },
    'r/g/b': { colorModel: 'r/g/b', cctView: false },
    'r/g/b/cct': { colorModel: 'r/g/b', cctView: true },
    'h/s/v': { colorModel: 'h/s/v', cctView: false },
    'h/s/v/cct': { colorModel: 'h/s/v', cctView: true },
};

/**
 * A Lichttyp the table does not know — a widget stored without the key: the widget shows the
 * colour picker without Kanäle (it only skips the pickers for `none`), so the editor shows the
 * picker settings and no Kanal field.
 */
const UNKNOWN_TYPE: LightTypeEntry & { unknown: true } = { cctView: false, unknown: true };

const entryOf = (type: string | undefined): LightTypeEntry & { unknown?: true } =>
    type !== undefined && Object.hasOwn(LIGHT_TYPES, type) ? LIGHT_TYPES[type as Light2Type] : UNKNOWN_TYPE;

/** The views the Lichttyp offers: the colour view first, then the CCT-Ansicht. */
export function viewsOf(type: string | undefined): Light2View[] {
    const entry = entryOf(type);
    const views: Light2View[] = [];
    if (entry.colorModel || entry.unknown) {
        views.push('color');
    }
    if (entry.cctView) {
        views.push('cct');
    }
    return views;
}

/** Whether the Lichttyp offers the view. */
export const hasView = (type: string | undefined, view: Light2View): boolean => viewsOf(type).includes(view);

/** Whether the Lichttyp switches between the colour view and the CCT-Ansicht („& cct"). */
export const offersViewSwitch = (type: string | undefined): boolean => viewsOf(type).length > 1;

/** The Kanäle of the Lichttyp in the view, in write order — empty when the Lichttyp lacks the view. */
export function channelsOf(type: string | undefined, view: Light2View): readonly Light2Channel[] {
    const entry = entryOf(type);
    if (view === 'cct') {
        return entry.cctView ? CCT_CHANNELS : [];
    }
    return entry.colorModel ? COLOR_MODEL_CHANNELS[entry.colorModel] : [];
}

/**
 * Whether the editor shows the Kanal field for the Lichttyp: a view of the Lichttyp uses the
 * Kanal — so the brightness shows for rgbcct and r/g/b/cct too, whose CCT-Ansicht writes and
 * reads it.
 */
export const isChannelFieldVisible = (type: string | undefined, field: Light2ChannelField): boolean =>
    viewsOf(type).some(view => channelsOf(type, view).some(channel => channel.field === field));

/**
 * The Kanäle whose foreign changes re-sync the main picker, in the fixed order handed to
 * `backendSyncKey`: the colour-view Kanäle. The CCT-Ansicht has none — its temperature and
 * brightness sync on their own keys.
 */
export const mainColorSyncFields = (type: string | undefined, view: Light2View): Light2ChannelField[] =>
    view === 'color' ? channelsOf(type, 'color').map(channel => channel.field) : [];
