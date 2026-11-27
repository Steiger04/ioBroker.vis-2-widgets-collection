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
 * Below each id field of a Bedeutung with fixed values stands its Wertezuordnung
 * (`lib/heating/mappingField`), shown while the Bedeutung is bound. The pick of such a Bedeutung
 * fills its own empty Wertezuordnung from what it recognises (`lib/heating/meaningPick`,
 * `lib/heating/recognition`); a set one stays.
 *
 * The pick of the main Bedeutung prefills the device's other Bedeutungen, Bezeichnung and
 * Unterzeile (`lib/heating/mainPickPrefill`); right below it an InfoBox names the candidates of a
 * Bedeutung the prefill left empty (`lib/heating/prefillNoticeField`).
 *
 * The entry number is the seam for the list editor of the house types (ADR-0121): with entry 3
 * every stored key carries the number before its suffix (`soll3`, `soll3Object`). Single-room
 * types use the unnumbered case. The valve list is widget-wide, never per entry
 * (`lib/heating/valveListFields`).
 */
import { createIdField } from '../commonObjectFields';
import { mainPickPrefill } from './mainPickPrefill';
import { meaningMappingField } from './mappingField';
import { headerKeys, MEANINGS, meaningKeys } from './meaningCatalog';
import { meaningPickOptions } from './meaningPick';
import { prefillNoticeField } from './prefillNoticeField';

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
    ...createIdField(meaningKeys(field, entry).field, MEANINGS[field].valueTypes, meaningPickOptions(field, entry)),
    label: MEANINGS[field].label,
});

/**
 * The id field of one Bedeutung and, where it has fixed values, its Wertezuordnung below it.
 *
 * @param field - The Bedeutung's field name.
 * @param entry - The entry number; none for the unnumbered case.
 * @returns One or two fields.
 */
const meaningFields = (field: MeaningField, entry?: number): RxWidgetInfoAttributesField[] => {
    const mapping = meaningMappingField(field, entry);
    return mapping ? [meaningIdField(field, entry), mapping] : [meaningIdField(field, entry)];
};

/**
 * Builds the binding fields of a heating type.
 *
 * @param subset - The type's subset of the catalogue.
 * @param entry - The entry number of a list entry (ADR-0121); none for a single-room type.
 * @returns The main Bedeutung with its prefill notice, Bezeichnung, Unterzeile, then the other
 *   Bedeutungen in subset order, each Wertezuordnung right after its id field.
 */
export function heatingBindingFields(subset: MeaningSubset, entry?: number): RxWidgetInfoAttributesField[] {
    const header = headerKeys(entry);
    const [mainId, ...mainRest] = meaningFields(subset.main, entry);
    return [
        // The pick of the main Bedeutung prefills the device's other Bedeutungen (ADR-0119).
        { ...mainId, onChange: mainPickPrefill(subset, entry) },
        ...mainRest,
        prefillNoticeField(subset, entry),
        { name: header.name, type: 'text', label: 'heating_bezeichnung' },
        { name: header.subLine, type: 'text', label: 'heating_unterzeile' },
        ...subset.meanings.filter(field => field !== subset.main).flatMap(field => meaningFields(field, entry)),
    ];
}
