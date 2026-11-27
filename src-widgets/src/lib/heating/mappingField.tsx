/**
 * The panel field of a Bedeutung's Wertezuordnung (ADR-0120 „Panel“), declared by the binding
 * building block right after the Bedeutung's id field (`lib/heating/bindingFields`).
 *
 * @module lib/heating/mappingField
 * @remarks
 * A custom field that stores nothing under its own name: its name `zuordnung:<field>` is no data
 * key, the mapping lands under `<field>Zuordnung` (`lib/heating/valueMapping`). So the palette
 * stores no default (a missing mapping stays „not mapped“, which the Lese-Naht reads), the
 * Rückfall-Regel leaves the object alone, and under a multi-selection vis-2 keeps the field — its
 * name is counted once per widget (see `lib/stateEditorFields`). Hidden while the Bedeutung is
 * unbound; `hidden` gets the raw stored data.
 */
import { guardWidgetData } from '../fieldFactories';
import { MEANINGS, meaningKeys } from './meaningCatalog';
import { boundIdOf } from './meaningReading';
import ValueMappingField from './ValueMappingField';

import type { MeaningField } from './meaningCatalog';
import type { RxWidgetInfoAttributesField, WidgetData } from '@iobroker/types-vis-2';

/** The name prefix of the Wertezuordnung fields: no data key starts with it. */
export const MAPPING_FIELD_PREFIX = 'zuordnung:';

/**
 * The Wertezuordnung field of one Bedeutung.
 *
 * @param field - The Bedeutung's field name.
 * @param entry - The entry number of a list entry (ADR-0121); none for the unnumbered case.
 * @returns The custom field; `undefined` for a Bedeutung without fixed values (no mapping).
 */
export function meaningMappingField(field: MeaningField, entry?: number): RxWidgetInfoAttributesField | undefined {
    if (!MEANINGS[field].mapping) {
        return undefined;
    }
    const keys = meaningKeys(field, entry);
    return {
        name: `${MAPPING_FIELD_PREFIX}${keys.field}`,
        type: 'custom',
        label: 'heating_zuordnung',
        noBinding: true,
        hidden: (data: WidgetData) => boundIdOf(data, keys.field) === undefined,
        component: guardWidgetData((_field: unknown, data, onDataChange, props) => (
            <ValueMappingField
                field={field}
                entry={entry}
                data={data}
                onDataChange={onDataChange}
                props={props}
            />
        )),
    };
}
