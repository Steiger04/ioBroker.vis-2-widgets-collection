/**
 * Light2 channel mapping — picker colour ⇄ Kanal value, in both directions.
 *
 * @module Light2CollectionWidget/channelMapping
 * @remarks
 * ADR-0108 Nr. 2: the one conversion between an `iro.Color` and the lamp's Kanäle. Which
 * Kanäle a Lichttyp binds in a view comes from the Lichttyp channel table
 * (`lib/light2Channels`); this module adds what needs iro and the Kanal values, so iro stays
 * out of `lib/` and of the editor path. The Hue-Skala runs through `hueScale`.
 *
 * - **Read** (`readChannelsIntoColor`): Kanal values → picker colour, on picker init and on
 *   foreign changes. Safe fallbacks instead of throwing: 2000 K, `#ffffff`, 0 for r/g/b; the
 *   colour view reads only when all its Kanäle are configured.
 * - **Write** (`channelWrites`): picker colour → write requests (Kanal, value), which the body
 *   carries out through its `useValueState` setters. Rounded, on the Hue-Skala where the Kanal's
 *   object says 254, gated by the HSV change flags and — in the CCT-Ansicht — by the picker; a
 *   Kanal without object is skipped.
 */
import type iro from '@jaames/iro';
import type { VisRxData } from '@iobroker/types-vis-2';
import { channelsOf } from '../lib/light2Channels';
import type {
    Light2CctPicker,
    Light2Channel,
    Light2ChannelField,
    Light2PickerProperty,
    Light2View,
} from '../lib/light2Channels';
import type {
    CommonFieldsRxData,
    CommonObjectFieldsRxData,
    DelayFieldsRxData,
    Light2FieldsRxData,
    OidObjectMeta,
} from '../types';
import { fromHueScale, isHueScale, toHueScale } from './hueScale';

export type Light2WidgetData = VisRxData &
    Light2FieldsRxData &
    CommonObjectFieldsRxData &
    CommonFieldsRxData &
    DelayFieldsRxData;

/** Which hsv components a picker input changed (iro's `input:change`). */
export type ColorChanges = {
    h?: boolean;
    s?: boolean;
    v?: boolean;
};

/** The picker a read or write concerns: the Lichttyp, the view, and in the CCT-Ansicht the picker. */
export interface PickerTarget {
    type: string | undefined;
    view: Light2View;
    /** CCT-Ansicht only: the Kelvin- or the Helligkeits-Picker; without one nothing is read or written there. */
    picker?: Light2CctPicker;
}

/** One write request: the Kanal and the value it gets. */
export interface ChannelWrite {
    field: Light2ChannelField;
    value: string | number;
}

/** The Kanäle the target's picker reads and writes: in the CCT-Ansicht only those of its picker. */
const channelsFor = ({ type, view, picker }: PickerTarget): readonly Light2Channel[] =>
    channelsOf(type, view).filter(channel => channel.picker === undefined || channel.picker === picker);

const objectOf = (field: Light2ChannelField, widgetData: Light2WidgetData): OidObjectMeta | undefined =>
    (widgetData as unknown as Record<string, OidObjectMeta | undefined>)[`${field}Object`];

/**
 * Whether the Kanal field holds a usable OID: a non-blank string.
 *
 * @param field The Kanal field.
 * @param widgetData The widget data.
 */
export const hasChannelOid = (field: Light2ChannelField, widgetData: Light2WidgetData): boolean => {
    const oid = widgetData[field];
    return typeof oid === 'string' && oid.trim() !== '';
};

/** The temperature of a lamp without one, in K: the read and write fallback, and where the CCT-Ansicht starts it. */
export const FALLBACK_KELVIN = 2000;

/** Read fallbacks: a missing temperature reads as 2000 K, a missing r/g/b component as 0; others stay untouched. */
const READ_FALLBACK: Partial<Record<Light2PickerProperty, number>> = {
    kelvin: FALLBACK_KELVIN,
    red: 0,
    green: 0,
    blue: 0,
};

/** Write fallbacks for a picker colour without the property: 2000 K, `#ffffff`, else 0. */
const writeFallback = (property: Light2PickerProperty): string | number =>
    property === 'kelvin' ? FALLBACK_KELVIN : property === 'hexString' ? '#ffffff' : 0;

/**
 * Reads a numeric Kanal (referenced by field name — the accessor resolves it to the OID).
 *
 * @returns `undefined` when the field holds no usable OID or the value is not numeric.
 */
const readNumber = (
    field: Light2ChannelField,
    widgetData: Light2WidgetData,
    getPropertyValue: (stateName: string) => ioBroker.StateValue,
): number | undefined => {
    if (!hasChannelOid(field, widgetData)) {
        return undefined;
    }
    const value = Number(getPropertyValue(field));
    return Number.isFinite(value) ? value : undefined;
};

/** The picker value of one Kanal, or `undefined` when it has none. */
const readChannel = (
    channel: Light2Channel,
    widgetData: Light2WidgetData,
    getPropertyValue: (stateName: string) => ioBroker.StateValue,
): string | number | undefined => {
    if (channel.property === 'hexString') {
        const hex = getPropertyValue(channel.field);
        return typeof hex === 'string' && hex.trim().length > 0 ? hex : '#ffffff';
    }
    const value = readNumber(channel.field, widgetData, getPropertyValue);
    if (value === undefined || !channel.hueScale) {
        return value;
    }
    // Percent Kanal: Hue-Skala 0-254 → percent, else whole percent.
    return isHueScale(objectOf(channel.field, widgetData)?.maxValue) ? fromHueScale(value) : Math.round(value);
};

/**
 * Mirrors the Kanal values into the picker colour, so the picker shows the real lamp.
 *
 * @param color The picker colour, changed in place.
 * @param target The Lichttyp, view and — in the CCT-Ansicht — the picker.
 * @param widgetData The widget data (Kanal fields and their objects).
 * @param getPropertyValue Value of a widget property, by field name.
 */
export function readChannelsIntoColor(
    color: iro.Color,
    target: PickerTarget,
    widgetData: Light2WidgetData,
    getPropertyValue: (stateName: string) => ioBroker.StateValue,
): void {
    const channels = channelsFor(target);

    // The colour view mirrors its Kanäle only when all of them are configured.
    if (target.view === 'color' && !channels.every(channel => widgetData[channel.field])) {
        return;
    }

    for (const channel of channels) {
        const value = readChannel(channel, widgetData, getPropertyValue) ?? READ_FALLBACK[channel.property];
        if (value !== undefined) {
            (color as unknown as Record<Light2PickerProperty, string | number>)[channel.property] = value;
        }
    }
}

/**
 * The write requests of one picker change.
 *
 * @param color The picker colour after the change.
 * @param target The Lichttyp, view and — in the CCT-Ansicht — the picker that changed.
 * @param changes The hsv components the input changed; without them every Kanal is written.
 * @param widgetData The widget data (the Kanal objects).
 * @returns The Kanäle to write with their values, in table order.
 */
export function channelWrites(
    color: iro.Color,
    target: PickerTarget,
    changes: ColorChanges | undefined,
    widgetData: Light2WidgetData,
): ChannelWrite[] {
    const writes: ChannelWrite[] = [];

    for (const channel of channelsFor(target)) {
        if (channel.changeFlag && changes && !changes[channel.changeFlag]) {
            continue;
        }
        const object = objectOf(channel.field, widgetData);
        if (!object) {
            continue;
        }
        let value: string | number | undefined = color[channel.property];
        if (typeof value === 'number') {
            value = channel.hueScale && isHueScale(object.maxValue) ? toHueScale(value) : Math.round(value);
        }
        writes.push({ field: channel.field, value: value ?? writeFallback(channel.property) });
    }

    return writes;
}

/** Whether a stored numeric Kanal value is usable: a number or a non-blank numeric string. */
const isUsableNumber = (value: unknown): boolean =>
    (typeof value === 'number' || (typeof value === 'string' && value.trim() !== '')) && Number.isFinite(Number(value));

/**
 * The write requests that send the stored Kanal values of a target back to the lamp — taken from
 * the states, never from iro's lossy read-back. A view switch writes them, so the lamp switches
 * its mode (white or colour) with the view.
 *
 * @param target The Lichttyp, view and — in the CCT-Ansicht — the picker.
 * @param widgetData The widget data (Kanal fields and their objects).
 * @param getPropertyValue Value of a widget property, by field name.
 * @returns Per Kanal of the target with OID, object and a usable stored value: that value — numbers
 *   whole, a hex colour as stored —, in table order.
 */
export function storedChannelWrites(
    target: PickerTarget,
    widgetData: Light2WidgetData,
    getPropertyValue: (stateName: string) => ioBroker.StateValue,
): ChannelWrite[] {
    const writes: ChannelWrite[] = [];

    for (const channel of channelsFor(target)) {
        if (!hasChannelOid(channel.field, widgetData) || !objectOf(channel.field, widgetData)) {
            continue;
        }
        const stored = getPropertyValue(channel.field);
        if (channel.property === 'hexString') {
            if (typeof stored === 'string' && stored.trim() !== '') {
                writes.push({ field: channel.field, value: stored });
            }
        } else if (isUsableNumber(stored)) {
            writes.push({ field: channel.field, value: Math.round(Number(stored)) });
        }
    }

    return writes;
}
