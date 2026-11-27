/**
 * The hint table of the heating family: the only place technology knowledge lives in the
 * Neutraler Kern (ADR-0119, ADR-0120 with its addenda).
 *
 * @module lib/heating/hintTable
 * @remarks
 * Pure data. An entry recognises a data point by what its objects say — the data point name (the
 * last segment of its id) and the type of its channel (`native.TYPE` of the channel object) — never
 * by the adapter namespace of its id (`hm-rpc.N`): the development copy of real devices below
 * `0_userdata` takes the same path as the original, and the channel type tells HmIP from BidCos,
 * where the same name means something else. It names the Bedeutung and its Wertezuordnung, with
 * unit or time format. Recognition (`lib/heating/recognition`) asks it for what the role path does
 * not recognise. The table grows per technology as data; it is not stored in widget data.
 */
import type { MeaningField } from './meaningCatalog';
import type { ValueMapping } from './valueMapping';

/** One entry: which data point it recognises, and as what. */
export interface HintEntry {
    /** The channel type: `native.TYPE` of the data point's channel object. */
    readonly channelType: string;
    /** The data point name: the last segment of its id. */
    readonly name: string;
    /** The Bedeutung it binds to. */
    readonly meaning: MeaningField;
    /** Its Wertezuordnung, with unit or time format; none for a Bedeutung without one. */
    readonly mapping?: ValueMapping;
}

/** The HmIP wall/radiator thermostat's climate channel (HmIP-WTH-2 channel 1). */
const HMIP_CLIMATE = 'HEATING_CLIMATECONTROL_TRANSCEIVER';

/**
 * All entries. Stage 1: HmIP only — the data points of the HmIP-WTH-2 the role path leaves without
 * a Bedeutung or without a mapping. Its other data points of the Raumthermostat (set point, actual
 * value, humidity, `BOOST_MODE`, `WINDOW_STATE`, `UNREACH`, `LOW_BAT`, `OPERATING_VOLTAGE`) carry
 * standard roles and go the role path. Deliberately not here: `BOOST_TIME_PERIOD` (a MASTER
 * parameter, Homematic-Zusatz), `DURATION_UNIT`/`DURATION_VALUE` (the time-limited set point, not
 * the boost), `QUICK_VETO_TIME`, `PARTY_TIME_START` and `PARTY_SET_POINT_TEMPERATURE` (outside the
 * Raumthermostat's subset).
 */
export const HINT_TABLE: readonly HintEntry[] = [
    // Role level.mode.thermostat, but the value list AUTO-MODE/MANU-MODE/PARTY-MODE is not the
    // STATE_ROLES one; PARTY is HmIP's Urlaub (ADR-0120).
    {
        channelType: HMIP_CLIMATE,
        name: 'SET_POINT_MODE',
        meaning: 'betriebsart',
        mapping: { auto: [0], manuell: [1], urlaub: [2] },
    },
    // Write only, role `indicator`: switching back to Auto or Manuell also ends a running Urlaub.
    {
        channelType: HMIP_CLIMATE,
        name: 'CONTROL_MODE',
        meaning: 'betriebsartSetzen',
        mapping: { auto: [0], manuell: [1] },
    },
    // Assumption (stage-1 spec): the remaining boost time in minutes. No primary source states the
    // unit and the reference installation could not show it; observing it is a stage-4 check.
    { channelType: HMIP_CLIMATE, name: 'BOOST_TIME', meaning: 'boostRestzeit', mapping: { einheit: 'min' } },
    // Read only (role `indicator`, the adapter's read-only form of switch.mode.party).
    { channelType: HMIP_CLIMATE, name: 'PARTY_MODE', meaning: 'urlaub', mapping: { an: [true], aus: [false] } },
    // Text without a role; its default `2000_01_01 00:00` means „no period“.
    {
        channelType: HMIP_CLIMATE,
        name: 'PARTY_TIME_END',
        meaning: 'urlaubEnde',
        mapping: { zeitformat: 'YYYY_MM_DD HH:mm' },
    },
];
