/**
 * The Raumthermostat's status: the chip of its Kartenkopf, its hint line and the status of its tile
 * (stage-1 spec „Status-Chip“, „Hinweiszeile“; ADR-0120, ADR-0123, ADR-0124).
 *
 * @module HeatingThermostatCollectionWidget/thermostatStatus
 * @remarks
 * Everything reads reported values through the Heizzonen-Lesung (`lib/heating/zoneReading`) and its
 * stored Wertezuordnung (guard rail „Gemeldet statt behauptet“): a Bedeutung that is unbound, has no
 * value, has not reported yet or reports a value without a mapping says nothing.
 *
 * Chip, by precedence: Störung „Nicht erreichbar“ (`störung`) · window open (`kühl`) · Aus
 * (`neutral`) · Boost with its remaining time where known (`heizt`) · Urlaub (`neutral`) · with a
 * reported valve „Heizt“ above 0 (`heizt`), else „Hält“ · the operating mode (`neutral`). A bound
 * valve that has not reported counts as none; there is no „Heizt“ from set-point above actual. A
 * Hinweis (battery low) leaves the chip alone.
 *
 * Hint line, by precedence: Störung „Keine Funkverbindung seit …“ (the reachability's `lc`) ·
 * Hinweis battery low · window open with the reported set-point · Aus · Boost · Urlaub until its
 * end · the operating mode's text. Only Störung and Hinweis tone it (ADR-0124 Nr. 2); the tile's
 * Meldung is the hint line's. Chip and hint line keep their own precedence lists, as the spec states
 * them: they share most steps but not all (no battery in the chip, no valve in the hint line).
 *
 * - **Aus** is active when the operating mode reads `aus`, or — where Aus writes the set-point's
 *   real minimum (`thermostatActions`' `thermostatOff`) — when the reported set-point equals that minimum.
 * - **Boost läuft** (ADR-0120 and its Nachtrag): Boost reported and mapped → its value; else the
 *   remaining time > 0; else the operating mode reads `boost`. The remaining time counts on locally
 *   from its last report (`ts`), in the mapping's unit, or towards the end time of its time format.
 * - **Urlaub aktiv**: Urlaub reported and mapped → its value; else the operating mode reads
 *   `urlaub`. Its end shows only while it lies ahead — a default such as `2000_01_01 00:00` means
 *   „no period“.
 */
import { formatDuration, formatReading, formatSince, formatUntil } from '../lib/heating/readingFormat';
import { parseTimePoint } from '../lib/heating/timePoint';
import { translate } from '../lib/translate';
import { thermostatOff } from './thermostatActions';
import type { TileStatus } from '../lib/heating/SizeStages';
import type { NeutralKey } from '../lib/heating/meaningCatalog';
import type { HeatingTone } from '../lib/heating/tones';
import type { ZoneReading } from '../lib/heating/zoneReading';

/** The hint line's text of an operating mode without an Übersteuerung (literal keys). */
const MODE_HINTS = { manuell: 'heating_hinweis_manuell', auto: 'heating_hinweis_auto' } as const;

/** A Meldung: what tones the hint line and the tile's sign (ADR-0124 Nr. 2). */
export type ThermostatMessage = Extract<HeatingTone, 'störung' | 'hinweis'>;

/** The chip of the Kartenkopf. */
export interface ThermostatChip {
    readonly text: string;
    readonly tone: HeatingTone;
}

/** The hint line. */
export interface ThermostatHint {
    readonly text: string;
    /** The Meldung it reports; none for a quiet line. */
    readonly message?: ThermostatMessage;
}

/** The status of one Raumthermostat. */
export interface ThermostatStatus {
    /** The chip; none when nothing is known to show. */
    readonly chip?: ThermostatChip;
    /** The hint line; none when there is nothing to say. */
    readonly hint?: ThermostatHint;
    /** The device is not reachable: drawn dimmed, still operable. */
    readonly unreachable: boolean;
    /** The device is off — the rule of the chip „Aus“, also lighting the pill Aus. */
    readonly off: boolean;
    /** The neutral value of the reported operating mode; none while unknown or unmapped. */
    readonly mode?: NeutralKey;
    /** Boost runs (ADR-0120 „Boost läuft“) — the chip's rule, also lighting the pill Boost. */
    readonly boosting: boolean;
    /** The running Urlaub with its end where it lies ahead; none while no Urlaub runs. */
    readonly holiday?: { readonly end: number | undefined };
    /** What the tile's sign and accessible name show. */
    readonly tile: TileStatus;
    /** A remaining time counts on screen: render again every second. */
    readonly counting: boolean;
}

/** When the status is read. */
export interface ThermostatStatusContext {
    /** The current time (ms). */
    readonly now: number;
    /** The host language. */
    readonly lang: string;
}

/** A running Boost: its remaining time where known (ms). */
interface Boost {
    readonly remaining: number | undefined;
}

/** What the remaining-time Bedeutung says: whether time is left, and how much where known. */
function remainingOf(zone: ZoneReading, now: number): { left: boolean; remaining: number | undefined } {
    const reading = zone.meaning('boostRestzeit');
    if (reading.kind !== 'reported') {
        return { left: false, remaining: undefined };
    }
    const { mapping } = reading;
    if (mapping?.zeitformat) {
        const end = parseTimePoint(reading.value, mapping.zeitformat);
        return end === undefined ? { left: false, remaining: undefined } : { left: end > now, remaining: end - now };
    }
    if (reading.number === undefined) {
        return { left: false, remaining: undefined };
    }
    const left = reading.number > 0;
    if (!mapping?.einheit) {
        // A duration without a unit: running, but its time is not known.
        return { left, remaining: undefined };
    }
    const total = reading.number * (mapping.einheit === 'min' ? 60_000 : 1000);
    // The time of the last report: `ts`, else `lc`.
    const since = reading.ts ?? reading.lc;
    return { left, remaining: left ? total - Math.max(0, now - (since ?? now)) : undefined };
}

/** The running Boost, or none. */
function boostOf(zone: ZoneReading, now: number, mode: NeutralKey | undefined): Boost | undefined {
    const rest = remainingOf(zone, now);
    const boost = zone.meaning('boost').neutral;
    let running: boolean;
    if (boost === 'an' || boost === 'aus') {
        running = boost === 'an';
    } else {
        running = rest.left || mode === 'boost';
    }
    return running ? { remaining: rest.left ? rest.remaining : undefined } : undefined;
}

/** The running Urlaub with its end where it lies ahead, or none. */
function holidayOf(
    zone: ZoneReading,
    now: number,
    mode: NeutralKey | undefined,
): { end: number | undefined } | undefined {
    const holiday = zone.meaning('urlaub').neutral;
    const running = holiday === 'an' || holiday === 'aus' ? holiday === 'an' : mode === 'urlaub';
    if (!running) {
        return undefined;
    }
    const endReading = zone.meaning('urlaubEnde');
    const format = endReading.mapping?.zeitformat;
    const end = endReading.kind === 'reported' && format ? parseTimePoint(endReading.value, format) : undefined;
    return { end: end !== undefined && end > now ? end : undefined };
}

/** The chip's tone as the tile's dot shows it: a Meldung's tone has its own sign. */
const dotTone = (tone: HeatingTone | undefined): TileStatus['tone'] =>
    tone === 'heizt' || tone === 'kühl' ? tone : 'neutral';

/**
 * Reads the status of a Raumthermostat.
 *
 * @param zone - The Heizzonen-Lesung of the zone.
 * @param context - The current time and the host language.
 * @returns Chip, hint line, whether the device is unreachable, the tile's status and whether a
 *   remaining time counts.
 */
export function thermostatStatus(zone: ZoneReading, context: ThermostatStatusContext): ThermostatStatus {
    const { now, lang } = context;
    const reachability = zone.meaning('erreichbarkeit');
    const unreachable = reachability.neutral === 'unerreichbar';
    const batteryLow = zone.meaning('batterieSchwach').neutral === 'schwach';
    const windowOpen = zone.meaning('fenster').neutral === 'offen';
    const setpointReading = zone.meaning('soll');
    const setpoint = setpointReading.number;

    const modeReading = zone.meaning('betriebsart');
    const mode = modeReading.neutral;
    const off = thermostatOff(zone);
    const isOff = mode === 'aus' || (off?.kind === 'minimum' && setpoint !== undefined && setpoint === off.value);
    const boost = boostOf(zone, now, mode);
    const holiday = holidayOf(zone, now, mode);
    const valve = zone.valveMean;

    // The operating mode's display text, once it has reported.
    const modeText = modeReading.kind === 'reported' ? modeReading.text : undefined;
    const remaining = boost?.remaining === undefined ? undefined : formatDuration(boost.remaining);

    let chip: ThermostatChip | undefined;
    if (unreachable) {
        chip = { text: translate('heating_status_unerreichbar'), tone: 'störung' };
    } else if (windowOpen) {
        chip = { text: translate('heating_status_fenster'), tone: 'kühl' };
    } else if (isOff) {
        chip = { text: translate('heating_status_aus'), tone: 'neutral' };
    } else if (boost) {
        chip = {
            text: remaining ? translate('heating_status_boost_rest', remaining) : translate('heating_status_boost'),
            tone: 'heizt',
        };
    } else if (holiday) {
        chip = { text: translate('heating_status_urlaub'), tone: 'neutral' };
    } else if (typeof valve === 'number') {
        chip =
            valve > 0
                ? { text: translate('heating_status_heizt'), tone: 'heizt' }
                : { text: translate('heating_status_haelt'), tone: 'neutral' };
    } else if (modeText) {
        chip = { text: modeText, tone: 'neutral' };
    }

    let hint: ThermostatHint | undefined;
    if (unreachable) {
        const since = reachability.kind === 'reported' ? reachability.lc : undefined;
        hint = {
            text:
                since === undefined
                    ? translate('heating_hinweis_keine_verbindung')
                    : translate('heating_hinweis_keine_verbindung_seit', formatSince(since, now, lang)),
            message: 'störung',
        };
    } else if (batteryLow) {
        hint = { text: translate('heating_hinweis_batterie_schwach'), message: 'hinweis' };
    } else if (windowOpen) {
        hint = {
            text:
                setpoint === undefined
                    ? translate('heating_hinweis_fenster')
                    : translate(
                          'heating_hinweis_fenster_soll',
                          formatReading(setpoint, 'temperature', lang, setpointReading.unit),
                      ),
        };
    } else if (isOff) {
        hint = { text: translate('heating_hinweis_aus') };
    } else if (boost) {
        hint = {
            text: remaining ? translate('heating_hinweis_boost_rest', remaining) : translate('heating_hinweis_boost'),
        };
    } else if (holiday) {
        hint = {
            text:
                holiday.end === undefined
                    ? translate('heating_hinweis_urlaub')
                    : translate('heating_hinweis_urlaub_bis', formatUntil(holiday.end, lang)),
        };
    } else if (mode === 'manuell' || mode === 'auto') {
        hint = { text: translate(MODE_HINTS[mode]) };
    }

    // The Meldung is the hint line's: only Störung and Hinweis carry one, and they lead its precedence.
    const message = hint?.message;
    const label = [chip?.text, message === 'hinweis' ? hint?.text : undefined].filter(Boolean).join(', ');

    return {
        chip,
        hint,
        unreachable,
        off: isOff,
        ...(mode ? { mode } : {}),
        boosting: boost !== undefined,
        ...(holiday ? { holiday } : {}),
        tile: { tone: dotTone(chip?.tone), ...(message ? { message } : {}), ...(label ? { label } : {}) },
        counting: remaining !== undefined,
    };
}
