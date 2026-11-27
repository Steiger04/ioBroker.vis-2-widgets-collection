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
import { operatingModeTarget } from './thermostatOff';
import type { MeaningField, NeutralKey } from '../lib/heating/meaningCatalog';
import type { DeviceValue } from '../lib/heating/valueMapping';
import type { ZoneReading } from '../lib/heating/zoneReading';
import type { ThermostatStatus } from './thermostatStatus';

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
 * @param zone - The Heizzonen-Lesung of the zone.
 * @param field - The target Bedeutung.
 * @param key - The neutral value.
 * @returns The write, or none.
 */
const writeOf = (zone: ZoneReading, field: ModeWriteField, key: NeutralKey): ModeWrite | undefined => {
    const target = zone.meaning(field);
    const value = target.writeValue(key);
    return value !== undefined && target.writable ? { field, value } : undefined;
};

/**
 * The pills of the operating-mode segment.
 *
 * @param zone - The Heizzonen-Lesung of the zone.
 * @param status - The Raumthermostat's status (operating mode, Boost, Urlaub).
 * @returns The pills in display order: Auto, Manuell, Boost, Urlaub — each only where it exists.
 */
export function thermostatModeActions(
    zone: ZoneReading,
    status: Pick<ThermostatStatus, 'mode' | 'boosting' | 'holiday'>,
): ModeAction[] {
    const actions: ModeAction[] = [];
    const target = operatingModeTarget(zone);
    for (const key of ['auto', 'manuell'] as const) {
        const write = writeOf(zone, target, key);
        if (write) {
            actions.push({ key, active: status.mode === key, write });
        }
    }

    let boost: ModeWrite | undefined;
    if (!status.boosting) {
        boost = writeOf(zone, 'boost', 'an');
    } else if (zone.meaning('boostBeenden').kind !== 'unbound') {
        boost = writeOf(zone, 'boostBeenden', 'beenden');
    } else {
        boost = writeOf(zone, 'boost', 'aus');
    }
    if (boost) {
        actions.push({ key: 'boost', active: status.boosting, write: boost });
    }

    if (status.holiday) {
        const write = writeOf(zone, 'urlaub', 'aus');
        actions.push({
            key: 'urlaub',
            active: true,
            ...(write ? { write } : {}),
            ...(status.holiday.end === undefined ? {} : { end: status.holiday.end }),
        });
    }
    return actions;
}
