/**
 * The Raumthermostat's operating-mode segment: the pills Auto, Manuell and Boost, and the Urlaub pill
 * while Urlaub runs (stage-1 spec „Bedienen“; ADR-0120 with its Nachträge).
 *
 * @module HeatingThermostatCollectionWidget/thermostatModes
 * @remarks
 * Only a neutral value the widget can write becomes a pill (ADR-0120 „Runtime honesty“): its target
 * is writable and maps the value to a device value. A tap writes exactly one state, the first device
 * value of the mapping.
 * - **Auto / Manuell** write the operating mode's target (`operatingModeTarget`: „Betriebsart
 *   setzen“ while bound, else „Betriebsart“); they also end a running Urlaub, as the CCU WebUI does.
 *   A pill lights while the reported operating mode reads its value — a device value without a
 *   mapping lights none.
 * - **Boost** starts with `boost` = `an` (the device's duration). While Boost runs it lights, and a
 *   tap ends it: `boostBeenden` = `beenden` while bound, else `boost` = `aus`. The pill is there only
 *   while the action a tap takes now is writable.
 * - **Urlaub** shows only while Urlaub runs, lit, with its end where it lies ahead. It is never
 *   started here; where `urlaub` itself is writable a tap writes its `aus`, else the pill only shows.
 */
import { boundIdOf } from '../lib/heating/meaningReading';
import { meaningKeys, type MeaningField } from '../lib/heating/meaningCatalog';
import { writeValueOf } from '../lib/heating/useMeaningWrite';
import { operatingModeTarget } from './thermostatOff';
import type { DeviceValue } from '../lib/heating/valueMapping';
import type { ThermostatStatus } from './thermostatStatus';

import type { WidgetData } from '@iobroker/types-vis-2';

/** The Bedeutungen a pill of the segment writes. */
export type ModeWriteField = Extract<
    MeaningField,
    'betriebsart' | 'betriebsartSetzen' | 'boost' | 'boostBeenden' | 'urlaub'
>;

/** One write of a pill: one state. */
export interface ModeWrite {
    readonly field: ModeWriteField;
    readonly value: DeviceValue;
}

/** One pill of the segment. */
export interface ModeAction {
    readonly key: 'auto' | 'manuell' | 'boost' | 'urlaub';
    /** The reported state equals what the pill stands for. */
    readonly active: boolean;
    /** What a tap writes; none for the Urlaub pill that only shows. */
    readonly write?: ModeWrite;
    /** The end of the running Urlaub, where it lies ahead (ms). */
    readonly end?: number;
}

/**
 * A write where its target is writable and maps the neutral value.
 *
 * @param data - The widget data as the widget reads it.
 * @param field - The target Bedeutung.
 * @param key - The neutral value.
 * @param writable - Whether a Bedeutung is a writable target.
 * @param entry - The entry number.
 * @returns The write, or none.
 */
const writeOf = (
    data: WidgetData,
    field: ModeWriteField,
    key: Parameters<typeof writeValueOf>[2],
    writable: (field: ModeWriteField) => boolean,
    entry: number | undefined,
): ModeWrite | undefined => {
    const value = writeValueOf(data, field, key, entry);
    return value !== undefined && writable(field) ? { field, value } : undefined;
};

/**
 * The pills of the operating-mode segment.
 *
 * @param data - The widget data as the widget reads it (with the Lese-Naht's objects and mappings).
 * @param status - The Raumthermostat's status (operating mode, Boost, Urlaub).
 * @param writable - Whether a Bedeutung is a writable target (`useMeaningWrite`).
 * @param entry - The entry number; none for the unnumbered binding.
 * @returns The pills in display order: Auto, Manuell, Boost, Urlaub — each only where it exists.
 */
export function thermostatModeActions(
    data: WidgetData,
    status: Pick<ThermostatStatus, 'mode' | 'boosting' | 'holiday'>,
    writable: (field: ModeWriteField) => boolean,
    entry?: number,
): ModeAction[] {
    const actions: ModeAction[] = [];
    const target = operatingModeTarget(data, entry);
    for (const key of ['auto', 'manuell'] as const) {
        const write = writeOf(data, target, key, writable, entry);
        if (write) {
            actions.push({ key, active: status.mode === key, write });
        }
    }

    let boost: ModeWrite | undefined;
    if (!status.boosting) {
        boost = writeOf(data, 'boost', 'an', writable, entry);
    } else if (boundIdOf(data, meaningKeys('boostBeenden', entry).field)) {
        boost = writeOf(data, 'boostBeenden', 'beenden', writable, entry);
    } else {
        boost = writeOf(data, 'boost', 'aus', writable, entry);
    }
    if (boost) {
        actions.push({ key: 'boost', active: status.boosting, write: boost });
    }

    if (status.holiday) {
        const write = writeOf(data, 'urlaub', 'aus', writable, entry);
        actions.push({
            key: 'urlaub',
            active: true,
            ...(write ? { write } : {}),
            ...(status.holiday.end === undefined ? {} : { end: status.holiday.end }),
        });
    }
    return actions;
}
