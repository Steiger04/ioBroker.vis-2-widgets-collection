/**
 * The writes of the Bedeutungen the Raumthermostat's actions target (ADR-0120: one state per
 * action).
 *
 * @module HeatingThermostatCollectionWidget/useThermostatWrites
 * @remarks
 * One write chain (`lib/heating/useMeaningWrite`) per {@link ActionField}, bound to the Bedeutung as
 * the Heizzonen-Lesung reads it: the content hangs the write of an action's target on the action and
 * names no Bedeutung itself. The record's type follows the action module's target list, so a new
 * target cannot be left without its write.
 */
import { useMeaningWrite, type MeaningWrite } from '../lib/heating/useMeaningWrite';
import type { ZoneReading } from '../lib/heating/zoneReading';
import type { ActionField } from './thermostatActions';

/**
 * The write of every Bedeutung an action of the Raumthermostat targets.
 *
 * @param zone - The Heizzonen-Lesung of the zone.
 * @returns One write per target Bedeutung.
 */
export function useThermostatWrites(zone: ZoneReading): Record<ActionField, MeaningWrite> {
    return {
        soll: useMeaningWrite(zone.meaning('soll')),
        betriebsart: useMeaningWrite(zone.meaning('betriebsart')),
        betriebsartSetzen: useMeaningWrite(zone.meaning('betriebsartSetzen')),
        boost: useMeaningWrite(zone.meaning('boost')),
        boostBeenden: useMeaningWrite(zone.meaning('boostBeenden')),
        urlaub: useMeaningWrite(zone.meaning('urlaub')),
    };
}
