/**
 * The valve list of the heating binding block: a small counted list of valve values (ADR-0119,
 * ADR-0121).
 *
 * @module lib/heating/valveListFields
 * @remarks
 * Stored as `ventil1…ventilN`, each with its `ventil{m}Object`, and the counter `ventilAnzahl` —
 * the flat shape the house types share; the zone reference `ventil{m}Zone` exists only there.
 * Two fields:
 * 1. the base field `ventil`, declared once, hidden, as an id field: the host takes `ventil1…99`
 *    for ids by its digit rule (name minus up to two trailing digits is a declared id field) and
 *    subscribes them; it carries the mirrors of `createIdField` for the Lese-Naht;
 * 2. the custom field `ventilAnzahl`: per valve the host's native id field (through vis-2's
 *    `Editor`, the pick chain of `createIdField` under the numbered name) with a remove button,
 *    then an add button. A remove moves the later valves up together with their objects and
 *    deletes the last one in one patch.
 *
 * Not vis-2's indexed group: its delete, move and clone carry only the group's declared fields
 * (`Attributes/Widget/index.tsx` onGroupMove), and `ventil{m}Object` cannot be declared under
 * that name in a group, so a removed valve would leave its object with the next valve.
 */
import { createIdField } from '../commonObjectFields';
import { guardWidgetData } from '../fieldFactories';
import { VALVE_LIST } from './meaningCatalog';
import ValveList from './ValveList';

import type { RxWidgetInfoAttributesField } from '@iobroker/types-vis-2';

/**
 * Builds the valve list fields.
 *
 * @returns The hidden base declaration `ventil` and the list field `ventilAnzahl`.
 */
export function heatingValveListFields(): RxWidgetInfoAttributesField[] {
    return [
        { ...createIdField(VALVE_LIST.field, VALVE_LIST.valueTypes, { inventRange: false }), hidden: () => true },
        {
            name: VALVE_LIST.counter,
            type: 'custom',
            label: VALVE_LIST.listLabel,
            component: guardWidgetData((_field: unknown, data, onDataChange, props) => (
                <ValveList
                    data={data}
                    onDataChange={onDataChange}
                    props={props}
                />
            )),
        },
    ];
}
