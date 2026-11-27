/**
 * Prefill on the pick of the main Bedeutung: binding a Heizzone in one step (ADR-0119 „Prefill on
 * pick only“ with its addenda, ADR-0123 Nr. 7).
 *
 * @module lib/heating/mainPickPrefill
 * @remarks
 * The `onChange` of the main Bedeutung's id field. It runs the field's own pick through the shared
 * pick chain, then reads every channel of the device the picked state belongs to (object types
 * device → channel → state; the Light2 channel detection widened from the channel to the device)
 * and fills the still-empty fields of the type's other Bedeutungen with what recognition takes for
 * them (`lib/heating/recognition`: role path, then hint table — for the field and for its mapping
 * the first way that recognises something). Each filled field runs its own pick, so it stores its
 * object and its empty Wertezuordnung like a pick by hand. Set fields and set mappings stay.
 *
 * - **Ambiguity:** of several candidates for one Bedeutung, those in the channel of the picked main
 *   Bedeutung count first; one there wins. Several there, or none there and several in the device,
 *   leave the field empty — the candidates live only in the editor session
 *   (`lib/heating/prefillCandidates`), never in the widget data.
 * - **Bezeichnung:** the room enum of the device (state → channel → device, the first enum wins, as
 *   the host's device wizard), else the device name; **Unterzeile:** the device name when the
 *   Bezeichnung came from the room enum on this pick. Both only into empty fields.
 * - Valve values are never prefilled: recognition knows no valve role.
 * - A reading that means its Bedeutung only beside another (`RoleEntry.prefillBeside`: an operating
 *   voltage is a battery level only beside a battery flag) counts only when the device holds a
 *   candidate for that other Bedeutung.
 * - The pair rule of the role path (`RoleEntry.pair`, ADR-0119 Nachtrag K5) adds the candidates
 *   for „Betriebsart setzen“ beside each candidate for „Betriebsart“ — one state found by both
 *   ways counts once.
 *
 * Nothing of this runs at runtime; the read seam derives only what the pick of one field stores.
 */
import {
    applyObjectPick,
    loadObjectOrNoneAsync,
    loadPickedObjectAsync,
    oidChangeHandlerAsync,
    parentIdOf,
} from '../commonObjectFields';
import { headerKeys, MEANINGS, meaningKeys } from './meaningCatalog';
import { boundIdOf } from './meaningReading';
import { meaningPickOptions } from './meaningPick';
import { recordOpenCandidates } from './prefillCandidates';
import { recognisePair, recogniseState } from './recognition';

import type { AllowedType } from '../allowedOidTypes';
import type { MeaningField, MeaningSubset } from './meaningCatalog';
import type { OpenCandidates } from './prefillCandidates';
import type { Connection } from '@iobroker/gui-components';
import type { RxWidgetInfoAttributesField, RxWidgetInfoFieldChangeHandler, WidgetData } from '@iobroker/types-vis-2';

/** Where the picked state sits: its channel and its device, as far as they exist. */
interface DevicePlace {
    /** The channel above the state (a `channel` or `folder` object). */
    readonly channel?: ioBroker.Object;
    /** The device above that channel (a `device` or `folder` object). */
    readonly device?: ioBroker.Object;
    /** The id below which the scan reads: the device, else the channel. */
    readonly root: string;
}

/**
 * The channel and the device above a state — the parents the host's device wizard reads
 * (vis-2 `Wizard/deviceDetection.ts` `getParents`); none for a state without a channel above it.
 */
const devicePlaceAsync = async (socket: Connection, stateId: string): Promise<DevicePlace | undefined> => {
    const channelId = parentIdOf(stateId);
    const parent = await loadObjectOrNoneAsync(socket, channelId);
    if (!parent || (parent.type !== 'channel' && parent.type !== 'folder')) {
        // No channel, no device: the siblings of a loose state (an adapter instance's states) are
        // no device to read.
        return undefined;
    }
    const above = await loadObjectOrNoneAsync(socket, parentIdOf(channelId));
    if (!above || (above.type !== 'device' && above.type !== 'folder')) {
        return { channel: parent, root: channelId };
    }
    return { channel: parent, device: above, root: above._id };
};

/** The language of the editor, for an object name with one text per language. */
const editorLanguage = (): ioBroker.Languages => {
    const host = typeof window === 'undefined' ? undefined : window.visRxWidget;
    return (host as { getLanguage?: () => ioBroker.Languages } | undefined)?.getLanguage?.() ?? 'en';
};

/** An object name as text, in the editor language or else English (as the host's `getText`). */
const textOf = (name: ioBroker.StringOrTranslated | undefined): string => {
    if (typeof name === 'string') {
        return name;
    }
    if (!name || typeof name !== 'object') {
        return '';
    }
    const texts = name as Partial<Record<ioBroker.Languages, string>>;
    return texts[editorLanguage()] || texts.en || '';
};

/** Where the room enums live. */
const ROOMS = 'enum.rooms.';

/**
 * The room of a state the way the host's device wizard finds it (vis-2 `Wizard/deviceDetection.ts`
 * `buildEnums`): the first room enum a member is in wins, looked up for the state, then its
 * channel, then its device.
 *
 * @param socket - The vis-2 connection.
 * @param ids - The state, its channel and its device, in lookup order.
 * @returns The room's name; none without membership or when the enums cannot be read.
 */
const roomNameAsync = async (socket: Connection, ids: readonly string[]): Promise<string | undefined> => {
    let enums: Record<string, ioBroker.Object>;
    try {
        enums = (await socket.getObjectView(ROOMS, `${ROOMS}\u9999`, 'enum')) ?? {};
    } catch {
        return undefined;
    }
    const roomOf: Record<string, string> = {};
    for (const id of Object.keys(enums).sort()) {
        const room = enums[id];
        if (room?.type !== 'enum' || !id.startsWith(ROOMS)) {
            continue;
        }
        for (const member of (room.common as ioBroker.EnumCommon).members ?? []) {
            roomOf[member] ||= id;
        }
    }
    const roomId = ids.map(id => roomOf[id]).find(Boolean);
    return roomId ? textOf(enums[roomId].common.name) || roomId.substring(ROOMS.length) : undefined;
};

/** Whether a text field holds no text. */
const isEmptyText = (value: unknown): boolean => value === undefined || value === null || value === '';

/**
 * Fills Bezeichnung and Unterzeile where empty: the room of the device and the device name below
 * it, or, without a room, the device name alone (ADR-0119, ADR-0123 Nachtrag).
 */
const nameAsync = async (
    socket: Connection,
    data: WidgetData,
    mainId: string,
    place: DevicePlace,
    entry: number | undefined,
): Promise<void> => {
    const { name: nameKey, subLine: lineKey } = headerKeys(entry);
    if (!isEmptyText(data[nameKey])) {
        return;
    }
    const deviceName = textOf((place.device ?? place.channel)?.common.name);
    const lookup = [mainId, place.channel?._id, place.device?._id].filter((id): id is string => !!id);
    const room = await roomNameAsync(socket, lookup);
    if (room) {
        data[nameKey] = room;
        if (deviceName && isEmptyText(data[lineKey])) {
            data[lineKey] = deviceName;
        }
    } else if (deviceName) {
        data[nameKey] = deviceName;
    }
};

/** One recognised candidate for a Bedeutung. */
interface Candidate {
    readonly id: string;
    /** The id of its channel (its parent). */
    readonly channelId: string;
    /** The Bedeutung the device must hold a candidate for beside it (`RoleEntry.prefillBeside`). */
    readonly beside?: MeaningField;
}

/** The objects of one type below `root`; a socket error reads as none. */
const objectsBelowAsync = async (
    socket: Connection,
    root: string,
    type: 'state' | 'channel',
): Promise<Record<string, ioBroker.Object>> => {
    try {
        return (await socket.getObjectView(`${root}.`, `${root}.香`, type)) ?? {};
    } catch {
        return {};
    }
};

/**
 * The candidates of the device per Bedeutung of the subset (the main one left out): what
 * recognition takes each state for, and what the pair rule finds beside each candidate.
 */
const candidatesOfDevice = (
    subset: MeaningSubset,
    mainId: string,
    states: Record<string, ioBroker.Object>,
    channels: Record<string, ioBroker.Object>,
): Map<MeaningField, Candidate[]> => {
    const found = new Map<MeaningField, Candidate[]>();
    const add = (meaning: MeaningField, state: ioBroker.Object, beside?: MeaningField): void => {
        if (meaning === subset.main || !subset.meanings.includes(meaning)) {
            return;
        }
        const type = (state.common as ioBroker.StateCommon).type as AllowedType | undefined;
        const list = found.get(meaning) ?? [];
        if (!type || !MEANINGS[meaning].valueTypes.includes(type) || list.some(one => one.id === state._id)) {
            return;
        }
        list.push({ id: state._id, channelId: parentIdOf(state._id), beside });
        found.set(meaning, list);
    };
    const others = Object.values(states).filter(state => state._id !== mainId && state.type === 'state');
    const recognised = others.flatMap(state => {
        const one = recogniseState(state, channels[parentIdOf(state._id)]);
        return one ? [{ state, ...one }] : [];
    });
    for (const { state, meaning, prefillBeside } of recognised) {
        add(meaning, state, prefillBeside);
    }
    // The pair rule of the role path: beside every recognised candidate, whatever bound it.
    for (const { state, meaning } of recognised) {
        const pair = recognisePair(meaning, state, others);
        pair?.states.forEach(paired => add(pair.meaning, paired));
    }
    // A candidate that means its Bedeutung only beside another one counts only with it.
    for (const [meaning, list] of found) {
        const kept = list.filter(candidate => !candidate.beside || found.has(candidate.beside));
        if (kept.length > 0) {
            found.set(meaning, kept);
        } else {
            found.delete(meaning);
        }
    }
    return found;
};

/**
 * The ambiguity rule: the candidates in the main Bedeutung's channel count first.
 *
 * @returns The winner's id, or the candidates that leave the field empty.
 */
const decide = (candidates: Candidate[], mainChannel: string): { winner: string } | { ambiguous: string[] } => {
    const inChannel = candidates.filter(candidate => candidate.channelId === mainChannel);
    const deciding = inChannel.length > 0 ? inChannel : candidates;
    return deciding.length === 1 ? { winner: deciding[0].id } : { ambiguous: deciding.map(one => one.id) };
};

/** Binds `id` to a Bedeutung's field through its own pick; an unusable pick leaves it unbound. */
const bindAsync = async (
    socket: Connection,
    data: WidgetData,
    meaning: MeaningField,
    id: string,
    entry: number | undefined,
): Promise<void> => {
    const key = meaningKeys(meaning, entry).field;
    const options = meaningPickOptions(meaning, entry);
    try {
        const picked = await loadPickedObjectAsync(socket, id, MEANINGS[meaning].valueTypes, options);
        if (picked) {
            data[key] = id;
            applyObjectPick(data, key, picked, options);
        }
    } catch {
        // A socket error on the object: the field stays empty.
    }
};

/**
 * The `onChange` of a type's main Bedeutung: its pick, then the prefill of the device.
 *
 * @param subset - The type's subset of the catalogue.
 * @param entry - The entry number of a list entry (ADR-0121); none for a single-room type.
 * @returns The handler.
 */
export const mainPickPrefill =
    (subset: MeaningSubset, entry?: number): RxWidgetInfoFieldChangeHandler =>
    async (
        field: RxWidgetInfoAttributesField,
        data: WidgetData,
        changeData: (newData: WidgetData) => void,
        socket: Connection,
    ): Promise<void> => {
        const keys = meaningKeys(subset.main, entry);
        await oidChangeHandlerAsync(
            MEANINGS[subset.main].valueTypes,
            keys.field,
            meaningPickOptions(subset.main, entry),
        )(field, data, changeData, socket);
        if (!data[keys.object]) {
            // Emptied or unusable: the shared handler has dropped the object, nothing to prefill.
            return;
        }

        const mainId = data[keys.field] as string;
        const mainChannel = parentIdOf(mainId);
        const place = await devicePlaceAsync(socket, mainId);
        if (!place) {
            recordOpenCandidates(keys.field, mainId, {});
            changeData(data);
            return;
        }
        const [states, channels] = await Promise.all([
            objectsBelowAsync(socket, place.root, 'state'),
            objectsBelowAsync(socket, place.root, 'channel'),
        ]);

        const open: Partial<Record<MeaningField, readonly string[]>> = {};
        for (const [meaning, candidates] of candidatesOfDevice(subset, mainId, states, channels)) {
            if (boundIdOf(data, meaningKeys(meaning, entry).field) !== undefined) {
                continue;
            }
            const decision = decide(candidates, mainChannel);
            if ('winner' in decision) {
                await bindAsync(socket, data, meaning, decision.winner, entry);
            } else {
                open[meaning] = decision.ambiguous;
            }
        }
        recordOpenCandidates(keys.field, mainId, open satisfies OpenCandidates);
        await nameAsync(socket, data, mainId, place, entry);

        changeData(data);
    };
