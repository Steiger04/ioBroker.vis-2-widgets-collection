/**
 * The notice of a heating type whose main Bedeutung `soll` is missing or of the wrong type
 * (ADR-0123 Nr. 5).
 *
 * @module lib/heating/setpointNotice
 * @remarks
 * The main Bedeutung is not `oid`, so the frame's OID hint would name no field: the type reports a
 * valid type to the frame and shows this notice instead, naming the set-point. It reads like the
 * frame's: no object of the set-point asks for one (also while the Lese-Naht still loads it, and
 * for an id the pick refused), an object of another type says it must be a number.
 */
import type { ZoneReading } from './zoneReading';

/** The notice keys, family-wide: every heating type with the set-point as main Bedeutung shares them. */
export const SETPOINT_NOTICES = {
    choose: 'heating_notice_choose_setpoint',
    notNumber: 'heating_notice_setpoint_not_number',
} as const;

/**
 * The notice key for the set-point binding of a Heizzone.
 *
 * @param zone - The Heizzonen-Lesung of the zone.
 * @returns The translation key of the notice, none while the set-point is a usable number.
 */
export function setpointNoticeKey(zone: ZoneReading): string | undefined {
    const { _id: id, type } = zone.meaning('soll').object;
    if (id === undefined) {
        return SETPOINT_NOTICES.choose;
    }
    return type === 'number' ? undefined : SETPOINT_NOTICES.notNumber;
}
