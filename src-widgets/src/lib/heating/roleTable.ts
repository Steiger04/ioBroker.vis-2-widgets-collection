/**
 * The role table of the heating family: which ioBroker role (with its value list) binds to which
 * Thermostat-Bedeutung, and how its values map onto the neutral values (ADR-0119, ADR-0120).
 *
 * @module lib/heating/roleTable
 * @remarks
 * Pure data, only standard roles and values of the ioBroker STATE_ROLES — no technology knowledge
 * (that lives in `lib/heating/hintTable`). Recognition (`lib/heating/recognition`) reads it as the
 * first way. A role binds only where it is unambiguous for a thermostat: valve roles never
 * (automatic circuit assignment is a Homematic-Zusatz), nor the generic timer/text roles, nor
 * `switch.mode.party`, `switch.power` and `value.mode.thermostat`, which name no stage-1 Bedeutung
 * unambiguously. Order matters only where two entries could recognise the same state; none do.
 */
import type { MeaningField, NeutralKey } from './meaningCatalog';

/**
 * How a role's values map onto the neutral values:
 * - `boolean`: a boolean data point; `true` reads as the Bedeutung's `trueKey`, or — `inverted` —
 *   as the other key (a role that names the disturbed state, such as `indicator.unreach`).
 * - `labels`: the labels of the value list (`common.states`), compared without case; the state is
 *   recognised only when every label maps. A neutral value takes the device values of its labels
 *   in the order listed here (the first is the write value).
 */
export type RoleEncoding =
    | { readonly kind: 'boolean'; readonly inverted: boolean }
    | { readonly kind: 'labels'; readonly labels: readonly (readonly [label: string, neutral: NeutralKey])[] };

/** One entry: the roles it recognises, the Bedeutung, and the encoding of a Bedeutung with fixed values. */
export interface RoleEntry {
    /** The roles, compared exactly. */
    readonly roles: readonly string[];
    /** The Bedeutung they bind to. */
    readonly meaning: MeaningField;
    /** How the values map; none for a Bedeutung without a Wertezuordnung (a measured or set value). */
    readonly encoding?: RoleEncoding;
    /**
     * The device-wide prefill takes the state only when the device also holds a candidate for this
     * Bedeutung — a reading that means the Bedeutung only beside it. The pick of the one field by
     * hand is unaffected.
     */
    readonly prefillBeside?: MeaningField;
}

/** All entries. */
export const ROLE_TABLE: readonly RoleEntry[] = [
    { roles: ['level.temperature'], meaning: 'soll' },
    { roles: ['value.temperature'], meaning: 'ist' },
    { roles: ['value.humidity'], meaning: 'luftfeuchte' },
    {
        roles: ['level.mode.thermostat'],
        meaning: 'betriebsart',
        encoding: {
            kind: 'labels',
            labels: [
                ['AUTO', 'auto'],
                ['MANUAL', 'manuell'],
                ['VACATION', 'urlaub'],
            ],
        },
    },
    { roles: ['switch.mode.boost', 'switch.boost'], meaning: 'boost', encoding: { kind: 'boolean', inverted: false } },
    {
        roles: ['value.window'],
        meaning: 'fenster',
        encoding: {
            kind: 'labels',
            labels: [
                ['CLOSED', 'zu'],
                ['OPEN', 'offen'],
                ['TILTED', 'offen'],
            ],
        },
    },
    { roles: ['sensor.window'], meaning: 'fenster', encoding: { kind: 'boolean', inverted: false } },
    {
        roles: ['indicator.reachable'],
        meaning: 'erreichbarkeit',
        encoding: { kind: 'boolean', inverted: false },
    },
    {
        roles: ['indicator.unreach', 'indicator.maintenance.unreach'],
        meaning: 'erreichbarkeit',
        encoding: { kind: 'boolean', inverted: true },
    },
    {
        roles: ['indicator.lowbat', 'indicator.maintenance.lowbat'],
        meaning: 'batterieSchwach',
        encoding: { kind: 'boolean', inverted: false },
    },
    { roles: ['value.battery'], meaning: 'batteriestand' },
    // An operating voltage is a battery level only on a battery device: a mains-powered one (HmIP
    // FALMOT `OPERATING_VOLTAGE`) carries the same role without a battery flag.
    { roles: ['value.voltage'], meaning: 'batteriestand', prefillBeside: 'batterieSchwach' },
];
