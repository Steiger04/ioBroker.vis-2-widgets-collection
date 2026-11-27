/**
 * Recognition of a data point as a Thermostat-Bedeutung and of its Wertezuordnung: the knowledge
 * prefill runs on (ADR-0119 „Prefill on pick only“, ADR-0120 with its addenda).
 *
 * @module lib/heating/recognition
 * @remarks
 * Two ways, read in this order — for the Bedeutung and for its mapping the first way that
 * recognises something holds:
 * 1. the role path (`lib/heating/roleTable`): role and value list after the STATE_ROLES; a
 *    Bedeutung with fixed values is recognised only when its values map onto the neutral values.
 *    Its pair rule ({@link recognisePair}, `RoleEntry.pair`) finds „Betriebsart setzen“ beside a
 *    candidate for „Betriebsart“; that Bedeutung's mapping comes from the partner entry's labels,
 *    whatever the state's role;
 * 2. the hint table (`lib/heating/hintTable`): data point name and channel type.
 *
 * Recognition reads only what the objects say — the state object and its channel object — never
 * the adapter namespace of the id. It runs where a pick runs: the pick of a single Bedeutung fills
 * its own empty mapping ({@link mappingPickDerivation}, wired through `createIdField`'s
 * `pickDerivation`), and the Lese-Naht reads the same derivation for a bound Bedeutung without its
 * stored mapping (ADR-0120 Nachtrag „Spec Stufe 1 schreiben“). The prefill of the whole device on
 * the main pick runs {@link recogniseState} over every state of the device and
 * {@link recognisePair} beside each candidate.
 */
import { convertToOidType } from '../../hooks/useValueState';
import { parentIdOf } from '../commonObjectFields';
import { HINT_TABLE } from './hintTable';
import { MEANINGS, meaningKeys } from './meaningCatalog';
import { ROLE_TABLE } from './roleTable';
import { booleanMapping } from './valueMapping';

import type { OidType } from '../../types';
import type { PickDerivation, PickedObject } from '../commonObjectFields';
import type { MeaningField, NeutralKey } from './meaningCatalog';
import type { RoleEncoding, RoleEntry } from './roleTable';
import type { DeviceValue, ValueMapping } from './valueMapping';

/** What recognition found for one data point. */
export interface Recognition {
    /** The Bedeutung the data point binds to. */
    readonly meaning: MeaningField;
    /** Its Wertezuordnung; none when no way recognised one (or the Bedeutung has none). */
    readonly mapping?: ValueMapping;
    /** The Bedeutung the device-wide prefill needs beside it (`RoleEntry.prefillBeside`). */
    readonly prefillBeside?: MeaningField;
}

/** The value list of a state as label per device value, in its listed order; none without one. */
const valueListOf = (common: ioBroker.StateCommon): [DeviceValue, string][] | undefined => {
    const { states } = common;
    const type = common.type as OidType | undefined;
    if (Array.isArray(states)) {
        return states.length > 0 ? states.map(label => [String(label), String(label)]) : undefined;
    }
    if (states && typeof states === 'object' && Object.keys(states).length > 0) {
        // A key is a device value in the data point's type, as the panel and the write chain take it.
        return Object.entries(states).map(([key, label]) => [convertToOidType(key, type) ?? key, String(label)]);
    }
    return undefined;
};

/**
 * The mapping a role's encoding yields for a state.
 *
 * @returns The mapping; `undefined` when the state does not fit the encoding (not boolean, no value
 *   list, a label that maps onto no neutral value).
 */
const mappingOfEncoding = (
    encoding: RoleEncoding,
    meaning: MeaningField,
    common: ioBroker.StateCommon,
): ValueMapping | undefined => {
    const shape = MEANINGS[meaning].mapping;
    if (!shape) {
        return undefined;
    }
    if (encoding.kind === 'boolean') {
        return common.type === 'boolean' ? booleanMapping(shape, encoding.inverted) : undefined;
    }
    const valueList = valueListOf(common);
    if (!valueList) {
        return undefined;
    }
    const neutralOf = (label: string): NeutralKey | undefined =>
        encoding.labels.find(([known]) => known.toUpperCase() === label.trim().toUpperCase())?.[1];
    if (valueList.some(([, label]) => neutralOf(label) === undefined)) {
        return undefined;
    }
    const mapping: Partial<Record<NeutralKey, DeviceValue[]>> = {};
    for (const [known, neutral] of encoding.labels) {
        if (!shape.keys.includes(neutral)) {
            // A label of the encoding the Bedeutung has no neutral value for (VACATION of a pair).
            continue;
        }
        for (const [value, label] of valueList) {
            if (label.trim().toUpperCase() === known.toUpperCase()) {
                (mapping[neutral] ??= []).push(value);
            }
        }
    }
    return Object.keys(mapping).length > 0 ? mapping : undefined;
};

/** The role path: the first role entry that recognises the state, with its mapping. */
const byRole = (object: ioBroker.Object): Recognition | undefined => {
    const common = object.common as ioBroker.StateCommon;
    for (const entry of ROLE_TABLE) {
        if (typeof common.role !== 'string' || !entry.roles.includes(common.role)) {
            continue;
        }
        const beside = entry.prefillBeside ? { prefillBeside: entry.prefillBeside } : {};
        if (!entry.encoding) {
            return { meaning: entry.meaning, ...beside };
        }
        const mapping = mappingOfEncoding(entry.encoding, entry.meaning, common);
        if (mapping) {
            return { meaning: entry.meaning, mapping, ...beside };
        }
    }
    return undefined;
};

/** The role entry whose pair rule names `meaning` (`RoleEntry.pair`). */
const pairEntryOf = (meaning: MeaningField): RoleEntry | undefined => ROLE_TABLE.find(entry => entry.pair === meaning);

/** The pair path of the role path: the mapping of a state as a paired Bedeutung, whatever its role. */
const byPair = (meaning: MeaningField, object: ioBroker.Object): Recognition | undefined => {
    const encoding = pairEntryOf(meaning)?.encoding;
    const mapping = encoding && mappingOfEncoding(encoding, meaning, object.common as ioBroker.StateCommon);
    return mapping ? { meaning, mapping } : undefined;
};

/** The value list of a state as label per device value written as text; none without one. */
const valueListKey = (object: ioBroker.Object): Map<string, string> | undefined => {
    const valueList = valueListOf(object.common as ioBroker.StateCommon);
    return valueList && new Map(valueList.map(([value, label]) => [String(value), label]));
};

/** Whether two value lists hold the same labels for the same device values. */
const sameValueList = (one: Map<string, string>, other: Map<string, string>): boolean =>
    one.size === other.size && [...one].every(([value, label]) => other.get(value) === label);

/** The hint-table path: the entry for the data point name in its channel's type. */
const byHint = (object: ioBroker.Object, channel: ioBroker.Object | undefined): Recognition | undefined => {
    const channelType: unknown = channel?.type === 'channel' ? channel.native?.TYPE : undefined;
    if (typeof channelType !== 'string') {
        return undefined;
    }
    const name = object._id.split('.').pop();
    const entry = HINT_TABLE.find(one => one.channelType === channelType && one.name === name);
    return entry && (entry.mapping ? { meaning: entry.meaning, mapping: entry.mapping } : { meaning: entry.meaning });
};

/**
 * Recognises a data point: its Bedeutung and its Wertezuordnung.
 *
 * @param object - The state object.
 * @param channel - Its channel object (one level above); none when unknown — then only the role
 *   path can recognise.
 * @returns What the first way recognised for the Bedeutung (with its `prefillBeside`), with the
 *   mapping of the first way that recognised one for that Bedeutung; `undefined` when neither way
 *   recognises the data point.
 */
export function recogniseState(object: ioBroker.Object, channel?: ioBroker.Object): Recognition | undefined {
    const role = byRole(object);
    const hint = byHint(object, channel);
    const first = role ?? hint;
    if (!first) {
        return undefined;
    }
    const { meaning, prefillBeside } = first;
    const ways = [role, byPair(meaning, object), hint];
    const mapping = ways.find(way => way?.meaning === meaning && way.mapping)?.mapping;
    return { meaning, ...(mapping ? { mapping } : {}), ...(prefillBeside ? { prefillBeside } : {}) };
}

/**
 * The pair rule of the role path (`RoleEntry.pair`, ADR-0119 Nachtrag K5): beside a candidate for
 * a Bedeutung whose role entry names a pair, every further writable state of the same channel
 * whose value list equals the candidate's is a candidate for the paired Bedeutung, whatever its
 * role. It reads what `search_objects` shows the assistant too — `write` and `states`, not `read`.
 *
 * @param partnerMeaning - The Bedeutung recognition took the partner for.
 * @param partner - The partner state.
 * @param states - The states to look through (those of the device); others than states and the
 *   partner itself are skipped.
 * @returns The paired Bedeutung with its candidates, in the order of `states`; `undefined` when
 *   no role entry of `partnerMeaning` names a pair or the partner has no value list.
 */
export function recognisePair(
    partnerMeaning: MeaningField,
    partner: ioBroker.Object,
    states: Iterable<ioBroker.Object>,
): { meaning: MeaningField; states: ioBroker.Object[] } | undefined {
    const meaning = ROLE_TABLE.find(entry => entry.meaning === partnerMeaning && entry.pair)?.pair;
    const partnerList = valueListKey(partner);
    if (!meaning || !partnerList) {
        return undefined;
    }
    const channelId = parentIdOf(partner._id);
    const paired: ioBroker.Object[] = [];
    for (const state of states) {
        if (state.type !== 'state' || state._id === partner._id || parentIdOf(state._id) !== channelId) {
            continue;
        }
        const list = valueListKey(state);
        if ((state.common as ioBroker.StateCommon).write === true && list && sameValueList(list, partnerList)) {
            paired.push(state);
        }
    }
    return { meaning, states: paired };
}

/**
 * The pick derivation of a Bedeutung's id field: its Wertezuordnung, when recognition takes the
 * picked data point for this very Bedeutung and recognises a mapping — or, for a paired Bedeutung
 * (`RoleEntry.pair`), when the partner entry's labels map it, whatever recognition takes it for.
 *
 * @param field - The Bedeutung.
 * @param entry - The entry number of a list entry (ADR-0121); none for the unnumbered case.
 * @returns The derivation: `{ <bedeutung>Zuordnung: mapping }` or nothing. The pick chain fills it
 *   only into an unset key, so a set mapping stays.
 */
export const mappingPickDerivation = (field: MeaningField, entry?: number): PickDerivation => {
    const mappingKey = meaningKeys(field, entry).mapping;
    return Object.assign(
        ({ object, channel }: PickedObject) => {
            const recognised = recogniseState(object, channel);
            const mapping = recognised?.meaning === field ? recognised.mapping : byPair(field, object)?.mapping;
            return mapping ? { [mappingKey]: mapping } : undefined;
        },
        { keys: [mappingKey] },
    );
};
