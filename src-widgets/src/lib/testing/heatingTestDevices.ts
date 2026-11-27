/**
 * The heating test devices (Nachgebildete Geräte): plain ioBroker objects and state values for
 * the tests of the heating widgets and for the dev-server copy.
 *
 * @module lib/testing/heatingTestDevices
 * @remarks
 * One description per device yields both the fixtures (object database and states behind the
 * faked socket of the editor and widget seams) and the dev-server copy below
 * {@link HEATING_TEST_PREFIX}. Nothing here simulates a device: the data is plain JSON and
 * nothing reacts to a write — a device answer comes as new values from the test.
 *
 * - **Neutral device:** only standard roles and value lists of the ioBroker STATE_ROLES, spread
 *   over two channels, with no HomeMatic data point name. It proves the role path and thereby
 *   the neutrality. Beside it the baits: states without a standard role or with a generic one.
 * - **Ambiguous device:** the neutral device with extra candidates of the same role — one case
 *   the set point channel decides, one it cannot (ADR-0119, ambiguity rule of the prefill).
 * - **Neutral pair device:** the neutral device plus a write-only mode command of another role
 *   with the mode's value list, in the mode's channel — the operating-mode pair of the role path
 *   (ADR-0119 Nachtrag K5).
 * - **Stump device:** only set point and actual temperature — the missing bindings.
 * - **Installation extract:** a HmIP-WTH-2 and a HmIP-FALMOT-C12 taken whole from an export of a
 *   real installation — it proves the hint-table path.
 *
 * Ids are relative to a prefix; the description holds them without it, the function puts the
 * prefix in front. `common` and `native` stay as described.
 */
import anlage from './heatingTestDevices.anlage.json';

/** Where the dev-server copy lives, and the default prefix of the fixtures. */
export const HEATING_TEST_PREFIX = '0_userdata.0.collection-test-states.heizung.';

/** A state value as the state database holds it — the keys the host spreads into the values map. */
export type HeatingTestState = Pick<ioBroker.State, 'val' | 'ack' | 'ts' | 'lc'> & {
    q: NonNullable<ioBroker.State['q']>;
};

/** The object database and the state values of all test devices. */
export interface HeatingTestDevices {
    /** Every device, channel and state object, keyed by its id. */
    objects: Record<string, ioBroker.Object>;
    /** The value of every state object, keyed by its id. */
    states: Record<string, HeatingTestState>;
}

/** When the values of the described devices were reported (ts and lc). */
const REPORTED_AT = Date.UTC(2026, 10, 26, 8, 0, 0);

/** One described state: where it sits, its `common`, and its reported value. */
interface StateDescription {
    /** The id relative to the prefix: `<device>.<channel>.<name>`. */
    id: string;
    common: ioBroker.StateCommon;
    val: ioBroker.StateValue;
}

/** One described device: its name, its channels (relative id → name) and its states. */
interface DeviceDescription {
    id: string;
    name: string;
    channels: Record<string, string>;
    states: StateDescription[];
}

const NEUTRAL = 'neutral';
const NEUTRAL_THERMOSTAT = `${NEUTRAL}.thermostat`;
const NEUTRAL_MAINTENANCE = `${NEUTRAL}.maintenance`;

/** The neutral device: what binds to which meaning of the room thermostat (ids relative). */
const NEUTRAL_BINDING = {
    soll: `${NEUTRAL_THERMOSTAT}.setpoint`,
    ist: `${NEUTRAL_THERMOSTAT}.temperature`,
    luftfeuchte: `${NEUTRAL_THERMOSTAT}.humidity`,
    betriebsart: `${NEUTRAL_THERMOSTAT}.mode`,
    boost: `${NEUTRAL_THERMOSTAT}.boost`,
    fenster: `${NEUTRAL_THERMOSTAT}.window`,
    ventil: `${NEUTRAL_THERMOSTAT}.valve`,
    erreichbarkeit: `${NEUTRAL_MAINTENANCE}.reachable`,
    batterieSchwach: `${NEUTRAL_MAINTENANCE}.lowBattery`,
    batteriestand: `${NEUTRAL_MAINTENANCE}.battery`,
} as const;

/** The baits of the neutral device: they must stay unbound without a hint-table entry. */
const NEUTRAL_BAITS = {
    boostRestzeit: `${NEUTRAL_THERMOSTAT}.boostRemaining`,
    urlaubBeginn: `${NEUTRAL_THERMOSTAT}.holidayStart`,
    urlaubEnde: `${NEUTRAL_THERMOSTAT}.holidayEnd`,
} as const;

/** The states of the neutral device, by their place relative to the device. */
function neutralStates(device: string): StateDescription[] {
    const at = (id: string): string => `${device}${id.slice(NEUTRAL.length)}`;
    return [
        {
            id: at(NEUTRAL_BINDING.soll),
            common: {
                name: 'Set point',
                role: 'level.temperature',
                type: 'number',
                unit: '°C',
                min: 5,
                max: 30,
                read: true,
                write: true,
            },
            val: 21,
        },
        {
            id: at(NEUTRAL_BINDING.ist),
            common: {
                name: 'Temperature',
                role: 'value.temperature',
                type: 'number',
                unit: '°C',
                read: true,
                write: false,
            },
            val: 20.5,
        },
        {
            id: at(NEUTRAL_BINDING.luftfeuchte),
            common: { name: 'Humidity', role: 'value.humidity', type: 'number', unit: '%', read: true, write: false },
            val: 48,
        },
        {
            id: at(NEUTRAL_BINDING.betriebsart),
            common: {
                name: 'Mode',
                role: 'level.mode.thermostat',
                type: 'number',
                states: { 0: 'AUTO', 1: 'MANUAL', 2: 'VACATION' },
                read: true,
                write: true,
            },
            val: 0,
        },
        {
            id: at(NEUTRAL_BINDING.boost),
            common: { name: 'Boost', role: 'switch.mode.boost', type: 'boolean', read: true, write: true },
            val: false,
        },
        {
            id: at(NEUTRAL_BINDING.fenster),
            common: {
                name: 'Window',
                role: 'value.window',
                type: 'number',
                states: { 0: 'CLOSED', 1: 'TILTED', 2: 'OPEN' },
                read: true,
                write: false,
            },
            val: 0,
        },
        {
            id: at(NEUTRAL_BINDING.ventil),
            common: { name: 'Valve', role: 'value.valve', type: 'number', unit: '%', read: true, write: false },
            val: 35,
        },
        {
            id: at(NEUTRAL_BAITS.boostRestzeit),
            common: {
                name: 'Boost remaining',
                role: 'value.timer',
                type: 'number',
                unit: 's',
                read: true,
                write: false,
            },
            val: 0,
        },
        {
            id: at(NEUTRAL_BAITS.urlaubBeginn),
            common: { name: 'Holiday start', role: 'text', type: 'string', read: true, write: true },
            val: '',
        },
        {
            id: at(NEUTRAL_BAITS.urlaubEnde),
            common: { name: 'Holiday end', role: 'text', type: 'string', read: true, write: true },
            val: '',
        },
        {
            id: at(NEUTRAL_BINDING.erreichbarkeit),
            common: { name: 'Reachable', role: 'indicator.reachable', type: 'boolean', read: true, write: false },
            val: true,
        },
        {
            id: at(NEUTRAL_BINDING.batterieSchwach),
            common: { name: 'Low battery', role: 'indicator.lowbat', type: 'boolean', read: true, write: false },
            val: false,
        },
        {
            id: at(NEUTRAL_BINDING.batteriestand),
            common: { name: 'Battery', role: 'value.battery', type: 'number', unit: '%', read: true, write: false },
            val: 80,
        },
    ];
}

/** The channels the neutral layout uses, relative to the device. */
const neutralChannels = (device: string): Record<string, string> => ({
    [`${device}.thermostat`]: 'Thermostat',
    [`${device}.maintenance`]: 'Maintenance',
});

const NEUTRAL_PAIR = 'neutral-pair';

/** The neutral pair device: the neutral one, ids relative, plus its mode command. */
const NEUTRAL_PAIR_BINDING = {
    soll: `${NEUTRAL_PAIR}.thermostat.setpoint`,
    betriebsart: `${NEUTRAL_PAIR}.thermostat.mode`,
    betriebsartSetzen: `${NEUTRAL_PAIR}.thermostat.modeCommand`,
} as const;

/** The mode command of the neutral pair device: write only, a generic role, the mode's value list. */
const MODE_COMMAND: StateDescription = {
    id: NEUTRAL_PAIR_BINDING.betriebsartSetzen,
    common: {
        name: 'Mode command',
        role: 'level',
        type: 'number',
        states: { 0: 'AUTO', 1: 'MANUAL', 2: 'VACATION' },
        read: false,
        write: true,
    },
    val: 0,
};

const AMBIGUOUS = 'ambiguous';

/** The ambiguity cases of the ambiguous device (ids relative). */
const AMBIGUITY = {
    /** One candidate in the set point channel, one elsewhere in the device: the channel decides. */
    resolvedByChannel: {
        role: 'value.temperature',
        inSetPointChannel: `${AMBIGUOUS}.thermostat.temperature`,
        elsewhere: `${AMBIGUOUS}.maintenance.deviceTemperature`,
    },
    /** Two candidates outside the set point channel, none inside: the field stays empty. */
    unresolved: {
        role: 'value.window',
        candidates: [`${AMBIGUOUS}.windows.left`, `${AMBIGUOUS}.windows.right`],
    },
} as const;

/** The window contact of the ambiguous device — the neutral one, moved out of its channel. */
const windowContact = (id: string, name: string): StateDescription => ({
    id,
    common: {
        name,
        role: 'value.window',
        type: 'number',
        states: { 0: 'CLOSED', 1: 'TILTED', 2: 'OPEN' },
        read: true,
        write: false,
    },
    val: 0,
});

/** The described devices of own making: neutral, neutral pair, ambiguous and stump. */
const DESCRIBED: DeviceDescription[] = [
    {
        id: NEUTRAL,
        name: 'Neutral thermostat',
        channels: neutralChannels(NEUTRAL),
        states: neutralStates(NEUTRAL),
    },
    {
        id: NEUTRAL_PAIR,
        name: 'Neutral thermostat with mode command',
        channels: neutralChannels(NEUTRAL_PAIR),
        states: [...neutralStates(NEUTRAL_PAIR), MODE_COMMAND],
    },
    {
        id: AMBIGUOUS,
        name: 'Ambiguous thermostat',
        channels: { ...neutralChannels(AMBIGUOUS), [`${AMBIGUOUS}.windows`]: 'Windows' },
        states: [
            ...neutralStates(AMBIGUOUS).filter(state => state.common.role !== 'value.window'),
            {
                id: AMBIGUITY.resolvedByChannel.elsewhere,
                common: {
                    name: 'Device temperature',
                    role: 'value.temperature',
                    type: 'number',
                    unit: '°C',
                    read: true,
                    write: false,
                },
                val: 23,
            },
            windowContact(AMBIGUITY.unresolved.candidates[0], 'Window left'),
            windowContact(AMBIGUITY.unresolved.candidates[1], 'Window right'),
        ],
    },
    {
        id: 'stump',
        name: 'Stump thermostat',
        channels: { 'stump.thermostat': 'Thermostat' },
        states: [
            {
                id: 'stump.thermostat.setpoint',
                common: {
                    name: 'Set point',
                    role: 'level.temperature',
                    type: 'number',
                    unit: '°C',
                    min: 5,
                    max: 30,
                    read: true,
                    write: true,
                },
                val: 21,
            },
            {
                id: 'stump.thermostat.temperature',
                common: {
                    name: 'Temperature',
                    role: 'value.temperature',
                    type: 'number',
                    unit: '°C',
                    read: true,
                    write: false,
                },
                val: 20.5,
            },
        ],
    },
];

/** The described devices as objects and reported values, ids relative. */
function describedObjectsAndStates(): HeatingTestDevices {
    const objects: Record<string, ioBroker.Object> = {};
    const states: Record<string, HeatingTestState> = {};
    for (const device of DESCRIBED) {
        objects[device.id] = { _id: device.id, type: 'device', common: { name: device.name }, native: {} };
        for (const [id, name] of Object.entries(device.channels)) {
            objects[id] = { _id: id, type: 'channel', common: { name }, native: {} };
        }
        for (const state of device.states) {
            objects[state.id] = { _id: state.id, type: 'state', common: state.common, native: {} };
            states[state.id] = { val: state.val, ack: true, ts: REPORTED_AT, lc: REPORTED_AT, q: 0 };
        }
    }
    return { objects, states };
}

/*
 * The installation extract: a HmIP-WTH-2 („Thermostat Bad“, carrying the not-yet-reported
 * placeholder of the export: q = 0x20 with 0 / 4.5) and a HmIP-FALMOT-C12, each whole with all
 * channels, `_ALARM` states and the baits DEW_POINT_ALARM / HUMIDITY_ALARM. Names, roles, value
 * lists, `native` (with the channel types `native.TYPE`), values and `q` are copied verbatim from
 * the export — an independent source, nothing corrected. Only `type`, `common` and `native` of
 * the objects and `val`, `ack`, `ts`, `lc`, `q` of the states are taken.
 *
 * Deliberate exception (decided 2026-11-26): the serial numbers of both devices are replaced by
 * invented ones, the same in every id and in `native.ADDRESS`, `native.PARENT` and
 * `native.CHILDREN`. The `hm-rpc.1.` namespace is dropped; the prefix takes its place.
 */

/** The invented serial of the HmIP-WTH-2 of the installation extract. */
const WTH2_SERIAL = '000A0000000B01';
/** The invented serial of the HmIP-FALMOT-C12 of the installation extract. */
const FALMOT_SERIAL = '001B0000000F01';

/** The neutral device: its id and which state binds to which meaning (ids relative to the prefix). */
export const NEUTRAL_DEVICE: {
    id: string;
    binding: Record<string, string>;
    baits: Record<string, string>;
} = { id: NEUTRAL, binding: NEUTRAL_BINDING, baits: NEUTRAL_BAITS };

/**
 * The neutral pair device: the neutral device plus the mode command beside the mode (ids relative
 * to the prefix).
 */
export const NEUTRAL_PAIR_DEVICE = { id: NEUTRAL_PAIR, binding: NEUTRAL_PAIR_BINDING } as const;

/** The stump device: only set point and actual temperature (ids relative to the prefix). */
export const STUMP_DEVICE = {
    id: 'stump',
    binding: { soll: 'stump.thermostat.setpoint', ist: 'stump.thermostat.temperature' },
} as const;

/** The ambiguous device: its set point and its two ambiguity cases (ids relative to the prefix). */
export const AMBIGUOUS_DEVICE = {
    id: AMBIGUOUS,
    soll: `${AMBIGUOUS}.thermostat.setpoint`,
    ...AMBIGUITY,
} as const;

/** The HmIP-WTH-2 of the installation extract; its id is its (invented) serial. */
export const ANLAGE_WTH2 = { id: WTH2_SERIAL } as const;

/** The HmIP-FALMOT-C12 of the installation extract; its id is its (invented) serial. */
export const ANLAGE_FALMOT = { id: FALMOT_SERIAL } as const;

/** Puts the prefix in front of every id (keys and `_id`), on a fresh copy. */
function withPrefix(devices: HeatingTestDevices, prefix: string): HeatingTestDevices {
    const objects: Record<string, ioBroker.Object> = {};
    const states: Record<string, HeatingTestState> = {};
    for (const [id, object] of Object.entries(devices.objects)) {
        const copy = structuredClone(object);
        copy._id = `${prefix}${id}`;
        objects[copy._id] = copy;
    }
    for (const [id, state] of Object.entries(devices.states)) {
        states[`${prefix}${id}`] = { ...state };
    }
    return { objects, states };
}

/**
 * The object database and the state values of all heating test devices.
 *
 * @param prefix - Put in front of every id; ends with a dot. Defaults to the place of the
 *   dev-server copy.
 * @returns A fresh copy on every call — writing to it changes nothing for the next caller.
 */
export function heatingTestDevices(prefix: string = HEATING_TEST_PREFIX): HeatingTestDevices {
    const described = describedObjectsAndStates();
    const extract = anlage as unknown as HeatingTestDevices;
    return withPrefix(
        {
            objects: { ...described.objects, ...extract.objects },
            states: { ...described.states, ...extract.states },
        },
        prefix,
    );
}

/**
 * Spreads state values into the values map the widget seam renders over — the keys the host fills
 * per subscribed id: `<id>.val`, `.ack`, `.ts`, `.lc` and `.q`.
 *
 * @param states - The states to spread, keyed by id.
 */
export function valuesOf(states: Record<string, HeatingTestState>): Record<string, unknown> {
    const values: Record<string, unknown> = {};
    for (const [id, state] of Object.entries(states)) {
        values[`${id}.val`] = state.val;
        values[`${id}.ack`] = state.ack;
        values[`${id}.ts`] = state.ts;
        values[`${id}.lc`] = state.lc;
        values[`${id}.q`] = state.q;
    }
    return values;
}
