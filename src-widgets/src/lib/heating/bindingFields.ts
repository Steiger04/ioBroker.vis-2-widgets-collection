/**
 * The binding building block of the heating family: the attribute-panel fields of a subset of the
 * meaning catalogue (ADR-0119, ADR-0121, ADR-0123 Nr. 8).
 *
 * @module lib/heating/bindingFields
 * @remarks
 * One id field per Bedeutung through the shared pick chain (`createIdField`): a Hilfs-ID, so its
 * pick stores only `<field>Object` with `commonStates` and no root field (ADR-0096) — the main
 * Bedeutung is not `oid` (ADR-0123 Nr. 5) — with „real range only“ (`inventRange: false`). The
 * field carries the mirrors the Lese-Naht reads (`oidPickFieldsOf`). Bezeichnung and Unterzeile
 * stand with the binding, after the main Bedeutung, not in the host's fixed group (ADR-0123 Nr. 8;
 * `name` is a host attribute, hence `bezeichnung`).
 *
 * The entry number is the seam for the list editor of the house types (ADR-0121): with entry 3
 * every stored key carries the number before its suffix (`soll3`, `soll3Object`). Single-room
 * types use the unnumbered case. The valve list is widget-wide, never per entry
 * (`lib/heating/valveListFields`).
 */
import { createIdField } from '../commonObjectFields';
import { MEANINGS, meaningKeys } from './meaningCatalog';

import type { MeaningField, MeaningSubset } from './meaningCatalog';
import type { RxWidgetInfoAttributesField } from '@iobroker/types-vis-2';

/**
 * The id field of one Bedeutung.
 *
 * @param field - The Bedeutung's field name.
 * @param entry - The entry number; none for the unnumbered case.
 * @returns The id field, labelled with the Bedeutung's catalogue key.
 */
export const meaningIdField = (field: MeaningField, entry?: number): RxWidgetInfoAttributesField => ({
    ...createIdField(meaningKeys(field, entry).field, MEANINGS[field].valueTypes, { inventRange: false }),
    label: MEANINGS[field].label,
});

/**
 * Builds the binding fields of a heating type.
 *
 * @param subset - The type's subset of the catalogue.
 * @param entry - The entry number of a list entry (ADR-0121); none for a single-room type.
 * @returns The main Bedeutung, Bezeichnung, Unterzeile, then the other Bedeutungen in subset order.
 */
export function heatingBindingFields(subset: MeaningSubset, entry?: number): RxWidgetInfoAttributesField[] {
    const number = entry ?? '';
    return [
        meaningIdField(subset.main, entry),
        { name: `bezeichnung${number}`, type: 'text', label: 'heating_bezeichnung' },
        { name: `unterzeile${number}`, type: 'text', label: 'heating_unterzeile' },
        ...subset.meanings.filter(field => field !== subset.main).map(field => meaningIdField(field, entry)),
    ];
}
