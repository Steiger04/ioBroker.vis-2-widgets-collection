/**
 * The Raumthermostat's actions: what each of its keys writes where, and whether it may (stage-1 spec
 * „Bedienen“; ADR-0120 with its Nachträge, ADR-0118 Nachtrag 2026-11-27 K4).
 *
 * @module HeatingThermostatCollectionWidget/thermostatActions
 * @remarks
 * A pure module over the Heizzonen-Lesung, the status and the widget values `komfort` / `absenk`.
 * Every action names its target Bedeutung, the device value a tap writes, whether it is lit and
 * whether it is locked; the content draws it and hangs the write of its target on it — one state
 * per action (ADR-0120). An action whose target the Heizzonen-Lesung reads as not writable does not
 * exist („Runtime honesty“).
 *
 * A segment pill exists only for a neutral value its target maps to a device value; a tap writes
 * the first device value of the mapping.
 *
 * - **Absenk / Komfort** write the widget's temperature into the set-point, also while it has not
 *   reported; lit while the reported set-point equals it.
 * - **Aus** ({@link thermostatOff}) goes through the operating mode's value `aus` where its target
 *   maps it, else through the set-point's real minimum; without either there is no Aus. Lit by the
 *   status's rule of the chip „Aus“.
 * - **Auto / Manuell** write the operating mode's target („Betriebsart setzen“ while bound, else
 *   „Betriebsart“); they also end a running Urlaub, as the CCU WebUI does. Lit while the reported
 *   operating mode reads their value — a device value without a mapping lights none.
 * - **Boost** starts with `boost` = `an` (the device's duration). While Boost runs it lights, and a
 *   tap ends it: `boostBeenden` = `beenden` while bound, else `boost` = `aus`. It is there only
 *   while the action a tap takes now is writable.
 * - **Urlaub** shows only while Urlaub runs, lit, with its end where it lies ahead. It is never
 *   started here; where `urlaub` itself is writable a tap writes its `aus`, else it only shows.
 * - **Steps** down and up move the reported set-point by one step of its scale
 *   (`lib/heating/setpointScale`): locked at the limit they head for and while the set-point has not
 *   reported, and they write only a value other than the reported one.
 */
import optionalNumber from '../lib/helper/optionalNumber';
import { setpointScale, stepDown, stepUp, type SetpointScale } from '../lib/heating/setpointScale';
import type { MeaningField, NeutralKey } from '../lib/heating/meaningCatalog';
import type { DeviceValue } from '../lib/heating/valueMapping';
import type { ZoneReading } from '../lib/heating/zoneReading';
import type { ThermostatStatus } from './thermostatStatus';

/** The Bedeutungen an action of the Raumthermostat writes. */
export type ActionField = Extract<
    MeaningField,
    'soll' | 'betriebsart' | 'betriebsartSetzen' | 'boost' | 'boostBeenden' | 'urlaub'
>;

/** The Bedeutungen the operating mode is written into. */
type OperatingModeField = Extract<ActionField, 'betriebsart' | 'betriebsartSetzen'>;

/** The keys of the pills of Groß. */
export type PillKey = 'absenk' | 'komfort' | 'aus';

/** The keys of the operating-mode segment. */
export type ModeKey = Extract<NeutralKey, 'auto' | 'manuell' | 'boost' | 'urlaub'>;

/** The keys of the steps. */
export type StepKey = 'down' | 'up';

/** One action of the Raumthermostat. */
export interface ThermostatAction<K extends PillKey | ModeKey | StepKey = PillKey | ModeKey | StepKey> {
    readonly key: K;
    /** The Bedeutung a tap writes. */
    readonly field: ActionField;
    /** The device value a tap writes; none where a tap writes nothing now. */
    readonly value?: DeviceValue;
    /** The reported state equals what the action sets. */
    readonly active: boolean;
    /** Shown but not to be tapped now. */
    readonly locked: boolean;
    /** The end of the running Urlaub, where it lies ahead (ms) — the pill's „bis …“. */
    readonly end?: number;
}

/** All actions of the Raumthermostat. */
export interface ThermostatActions {
    /** The pills of Groß: Absenk, Komfort, Aus — each only where it exists. */
    readonly pills: readonly ThermostatAction<PillKey>[];
    /** The operating-mode segment: Auto, Manuell, Boost, the running Urlaub — each only where it exists. */
    readonly modes: readonly ThermostatAction<ModeKey>[];
    /** One step down and up on the set-point's scale; none while the set-point is not writable. */
    readonly steps?: { readonly [K in StepKey]: ThermostatAction<K> };
}

/** The widget values the pills write, as stored — read through `optionalNumber` (ADR-0109 Nr. 7). */
export interface ThermostatTemperatures {
    readonly komfort?: unknown;
    readonly absenk?: unknown;
}

/** The status the actions light by. */
export type ActionStatus = Pick<ThermostatStatus, 'off' | 'mode' | 'boosting' | 'holiday'>;

/** How Aus is written. */
export type ThermostatOff =
    /** Through the operating mode: write `value` into `field`. */
    | { readonly kind: 'mode'; readonly field: OperatingModeField; readonly value: DeviceValue }
    /** Through the set-point: write its real minimum. */
    | { readonly kind: 'minimum'; readonly value: number };

/**
 * Where the operating mode is written: „Betriebsart setzen“ while bound, else „Betriebsart“ (a bound
 * „Betriebsart setzen“ never falls back, also where it maps a value not).
 */
const operatingModeTarget = (zone: ZoneReading): OperatingModeField =>
    zone.meaning('betriebsartSetzen').kind === 'unbound' ? 'betriebsart' : 'betriebsartSetzen';

/**
 * How the Raumthermostat writes Aus: through the operating mode's target where it maps `aus`, else
 * through the set-point's real `common.min` — the one its pick stored (a Hilfs-ID stores the real
 * range only, never an invented 0). The status reads it too (the chip „Aus“ by the minimum).
 *
 * @param zone - The Heizzonen-Lesung of the zone.
 * @returns The way to write Aus; `undefined` when neither the operating mode maps `aus` nor the
 *   set-point has a real minimum.
 */
export function thermostatOff(zone: ZoneReading): ThermostatOff | undefined {
    const field = operatingModeTarget(zone);
    const value = zone.meaning(field).writeValue('aus');
    if (value !== undefined) {
        return { kind: 'mode', field, value };
    }
    const minimum = zone.meaning('soll').object.minValue;
    return minimum !== undefined ? { kind: 'minimum', value: minimum } : undefined;
}

/**
 * A segment pill where its target is writable and maps the neutral value: a tap writes the first
 * device value of the mapping.
 */
function modeAction(
    zone: ZoneReading,
    key: ModeKey,
    field: ActionField,
    neutral: NeutralKey,
    active: boolean,
): ThermostatAction<ModeKey> | undefined {
    const target = zone.meaning(field);
    const value = target.writeValue(neutral);
    return value !== undefined && target.writable ? { key, field, value, active, locked: false } : undefined;
}

/** The pills of the operating-mode segment, in display order. */
function modesOf(zone: ZoneReading, status: ActionStatus): ThermostatAction<ModeKey>[] {
    const target = operatingModeTarget(zone);
    const actions = (['auto', 'manuell'] as const).map(key => modeAction(zone, key, target, key, status.mode === key));

    if (!status.boosting) {
        actions.push(modeAction(zone, 'boost', 'boost', 'an', false));
    } else if (zone.meaning('boostBeenden').kind !== 'unbound') {
        actions.push(modeAction(zone, 'boost', 'boostBeenden', 'beenden', true));
    } else {
        actions.push(modeAction(zone, 'boost', 'boost', 'aus', true));
    }

    if (status.holiday) {
        const { end } = status.holiday;
        // Urlaub is never started here: where `urlaub` is not writable the pill only shows.
        const holiday: ThermostatAction<ModeKey> = modeAction(zone, 'urlaub', 'urlaub', 'aus', true) ?? {
            key: 'urlaub',
            field: 'urlaub',
            active: true,
            locked: true,
        };
        actions.push(end === undefined ? holiday : { ...holiday, end });
    }
    return actions.filter(action => action !== undefined);
}

/**
 * One step down and up from the reported set-point: locked at the limit it heads for and while the
 * set-point has not reported; a step writes only a value other than the reported one.
 */
function stepsOf(reported: number | undefined, scale: SetpointScale): NonNullable<ThermostatActions['steps']> {
    const step = <K extends StepKey>(key: K): ThermostatAction<K> => {
        if (reported === undefined) {
            return { key, field: 'soll', active: false, locked: true };
        }
        const next = key === 'up' ? stepUp(reported, scale) : stepDown(reported, scale);
        return {
            key,
            field: 'soll',
            ...(next === reported ? {} : { value: next }),
            active: false,
            locked: key === 'up' ? reported >= scale.max : reported <= scale.min,
        };
    };
    return { down: step('down'), up: step('up') };
}

/**
 * The actions of a Raumthermostat.
 *
 * @param zone - The Heizzonen-Lesung of the zone.
 * @param status - The Raumthermostat's status (Aus, operating mode, Boost, Urlaub).
 * @param temperatures - The widget values `komfort` and `absenk`.
 * @returns Every action that exists, in display order.
 */
export function thermostatActions(
    zone: ZoneReading,
    status: ActionStatus,
    temperatures: ThermostatTemperatures,
): ThermostatActions {
    const setpoint = zone.meaning('soll');
    const reported = setpoint.number;

    const pills: ThermostatAction<PillKey>[] = [];
    if (setpoint.writable) {
        for (const key of ['absenk', 'komfort'] as const) {
            const value = optionalNumber(temperatures[key]);
            if (value !== undefined) {
                pills.push({ key, field: 'soll', value, active: reported === value, locked: false });
            }
        }
    }
    const off = thermostatOff(zone);
    const offField = off?.kind === 'mode' ? off.field : 'soll';
    if (off && zone.meaning(offField).writable) {
        pills.push({ key: 'aus', field: offField, value: off.value, active: status.off, locked: false });
    }

    return {
        pills,
        modes: modesOf(zone, status),
        ...(setpoint.writable ? { steps: stepsOf(reported, setpointScale(setpoint.object)) } : {}),
    };
}
