/**
 * How the Raumthermostat switches off (stage-1 spec „Bedienen → Aus“, ADR-0120): through the
 * operating mode's value `aus` where it is mapped, else through the set-point's real minimum.
 *
 * @module HeatingThermostatCollectionWidget/thermostatOff
 * @remarks
 * The write target of the operating mode is „Betriebsart setzen“ while bound, else „Betriebsart“
 * ({@link operatingModeTarget}, also the target of the pills Auto and Manuell). Only when that
 * target maps `aus` to a device value does Aus go through the operating mode; else it writes the
 * set-point's real `common.min` — the one its pick stored (a Hilfs-ID stores the real range only,
 * never an invented 0). Without either there is no Aus.
 */
import { meaningKeys } from '../lib/heating/meaningCatalog';
import { boundIdOf } from '../lib/heating/meaningReading';
import { writeValueOf } from '../lib/heating/useMeaningWrite';
import type { DeviceValue } from '../lib/heating/valueMapping';

import type { WidgetData } from '@iobroker/types-vis-2';

/** The Bedeutungen the operating mode is written into. */
export type OperatingModeField = 'betriebsart' | 'betriebsartSetzen';

/** How Aus is written. */
export type ThermostatOff =
    /** Through the operating mode: write `value` into `field`. */
    | { readonly kind: 'mode'; readonly field: OperatingModeField; readonly value: DeviceValue }
    /** Through the set-point: write its real minimum. */
    | { readonly kind: 'minimum'; readonly value: number };

/**
 * Where the operating mode is written: „Betriebsart setzen“ while bound, else „Betriebsart“ (a bound
 * „Betriebsart setzen“ never falls back, also where it maps a value not).
 *
 * @param data - The widget data.
 * @param entry - The entry number; none for the unnumbered binding.
 * @returns The Bedeutung to write.
 */
export const operatingModeTarget = (data: WidgetData, entry?: number): OperatingModeField =>
    boundIdOf(data, meaningKeys('betriebsartSetzen', entry).field) ? 'betriebsartSetzen' : 'betriebsart';

/**
 * How the Raumthermostat writes Aus.
 *
 * @param data - The widget data (as the widget reads it, with the Lese-Naht's mappings).
 * @param entry - The entry number; none for the unnumbered binding.
 * @returns The way to write Aus; `undefined` when neither the operating mode maps `aus` nor the
 *   set-point has a real minimum.
 */
export function thermostatOff(data: WidgetData, entry?: number): ThermostatOff | undefined {
    const field = operatingModeTarget(data, entry);
    const value = writeValueOf(data, field, 'aus', entry);
    if (value !== undefined) {
        return { kind: 'mode', field, value };
    }
    const minimum = (data[meaningKeys('soll', entry).object] as { minValue?: unknown } | undefined)?.minValue;
    return typeof minimum === 'number' && Number.isFinite(minimum) ? { kind: 'minimum', value: minimum } : undefined;
}
