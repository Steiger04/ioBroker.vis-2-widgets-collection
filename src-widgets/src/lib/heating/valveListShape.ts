/**
 * The stored shape of the valve list and its two edits (ADR-0119, ADR-0121): `ventil1…ventilN`,
 * each with `ventil{m}Object`, counted by `ventilAnzahl`.
 *
 * @module lib/heating/valveListShape
 */
import { createIdField } from '../commonObjectFields';
import optionalNumber from '../helper/optionalNumber';
import { VALVE_LIST } from './meaningCatalog';

import type { RxWidgetInfoAttributesField, WidgetData } from '@iobroker/types-vis-2';

/**
 * The id field of valve `m`: the shared pick under the numbered name, a Hilfs-ID with „real range
 * only“, so its pick stores only `ventil{m}Object`.
 *
 * @param m - The valve number (1-based).
 * @returns The field the panel renders natively.
 */
export const valveIdField = (m: number): RxWidgetInfoAttributesField => ({
    ...createIdField(`${VALVE_LIST.field}${m}`, VALVE_LIST.valueTypes, { inventRange: false }),
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
 * The patch that adds an empty valve after the last one; it clears leftovers under the new number.
 *
 * @param data - The widget data.
 * @returns The vis-2 patch (`null` deletes a key).
 */
export const addValvePatch = (data: WidgetData): WidgetData => {
    const next = valveCountOf(data) + 1;
    return {
        [VALVE_LIST.counter]: next,
        [`${VALVE_LIST.field}${next}`]: null,
        [`${VALVE_LIST.field}${next}Object`]: null,
    };
};

/**
 * The patch that removes valve `m`: the later valves move up with their objects, the last number
 * goes, the counter follows.
 *
 * @param data - The widget data.
 * @param m - The valve number to remove (1-based).
 * @returns The vis-2 patch (`null` deletes a key).
 */
export const removeValvePatch = (data: WidgetData, m: number): WidgetData => {
    const count = valveCountOf(data);
    const patch: WidgetData = { [VALVE_LIST.counter]: count - 1 };
    for (const suffix of ['', 'Object']) {
        for (let k = m; k < count; k++) {
            patch[`${VALVE_LIST.field}${k}${suffix}`] = data[`${VALVE_LIST.field}${k + 1}${suffix}`] ?? null;
        }
        patch[`${VALVE_LIST.field}${count}${suffix}`] = null;
    }
    return patch;
};
