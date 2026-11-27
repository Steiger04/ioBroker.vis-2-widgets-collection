/**
 * The stored shape of the valve list and its two edits (ADR-0119, ADR-0121): `ventil1…ventilN`,
 * each with `ventil{m}Object`, counted by `ventilAnzahl`.
 *
 * @module lib/heating/valveListShape
 * @remarks
 * The keys of one valve are named only here ({@link valveKeys}), its zone reference
 * `ventil{m}Zone` included: the house types store which list entry a valve belongs to (ADR-0121
 * Nachtrag 2026-11-27). The key is read from stage 1 on; a field for it arrives in stage 2.
 */
import { createIdField } from '../commonObjectFields';
import optionalNumber from '../helper/optionalNumber';
import { VALVE_LIST } from './meaningCatalog';

import type { RxWidgetInfoAttributesField, WidgetData } from '@iobroker/types-vis-2';

/** The stored keys of one valve. */
export interface ValveKeys {
    /** The id field. */
    readonly field: string;
    /** The object its pick stores. */
    readonly object: string;
    /** The entry number of the list entry it belongs to (house types). */
    readonly zone: string;
}

/**
 * The stored keys of valve `m`.
 *
 * @param m - The valve number (1-based).
 * @returns `ventil{m}`, `ventil{m}Object` and `ventil{m}Zone`.
 */
export const valveKeys = (m: number): ValveKeys => {
    const field = `${VALVE_LIST.field}${m}`;
    return { field, object: `${field}Object`, zone: `${field}Zone` };
};

/** Every stored key of valve `m`: what moves with it and what goes with its number. */
const allValveKeys = (m: number): string[] => Object.values(valveKeys(m));

/**
 * The id field of valve `m`: the shared pick under the numbered name, a Hilfs-ID with „real range
 * only“, so its pick stores only `ventil{m}Object`.
 *
 * @param m - The valve number (1-based).
 * @returns The field the panel renders natively.
 */
export const valveIdField = (m: number): RxWidgetInfoAttributesField => ({
    ...createIdField(valveKeys(m).field, VALVE_LIST.valueTypes, { inventRange: false }),
    label: VALVE_LIST.label,
});

/**
 * The number of valves a widget stores: the counter, within 0…99.
 *
 * @param data - The widget data.
 * @returns The counted valves.
 */
export const valveCountOf = (data: WidgetData): number =>
    Math.min(VALVE_LIST.max, Math.max(0, Math.trunc(optionalNumber(data[VALVE_LIST.counter]) ?? 0)));

/**
 * The patch that adds an empty valve after the last one; it clears every leftover key under the
 * new number ({@link valveKeys}).
 *
 * @param data - The widget data.
 * @returns The vis-2 patch (`null` deletes a key).
 */
export const addValvePatch = (data: WidgetData): WidgetData => {
    const next = valveCountOf(data) + 1;
    return { [VALVE_LIST.counter]: next, ...Object.fromEntries(allValveKeys(next).map(key => [key, null])) };
};

/**
 * The patch that removes valve `m`: the later valves move up with every key of theirs
 * ({@link valveKeys}: id, object, zone reference — a missing key moves as a deletion), the last
 * number goes, the counter follows.
 *
 * @param data - The widget data.
 * @param m - The valve number to remove (1-based).
 * @returns The vis-2 patch (`null` deletes a key).
 */
export const removeValvePatch = (data: WidgetData, m: number): WidgetData => {
    const count = valveCountOf(data);
    const patch: WidgetData = { [VALVE_LIST.counter]: count - 1 };
    for (let k = m; k < count; k++) {
        const next = allValveKeys(k + 1);
        allValveKeys(k).forEach((key, i) => {
            patch[key] = data[next[i]] ?? null;
        });
    }
    for (const key of allValveKeys(count)) {
        patch[key] = null;
    }
    return patch;
};
