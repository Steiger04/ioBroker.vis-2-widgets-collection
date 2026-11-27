/**
 * The pick of a Bedeutung's id field: the options the shared pick chain runs it with, the same in
 * the editor (`createIdField`) and wherever the Lese-Naht reads it.
 *
 * @module lib/heating/meaningPick
 * @remarks
 * A Bedeutung is a Hilfs-ID with „real range only“ (`inventRange: false`, ADR-0119/0120); one with
 * fixed values also derives its Wertezuordnung from the picked data point
 * (`lib/heating/recognition`).
 */
import { MEANINGS, meaningKeys } from './meaningCatalog';
import { mappingPickDerivation } from './recognition';

import type { PickDerivation } from '../commonObjectFields';
import type { OidPickField } from '../pickedWidgetData';
import type { MeaningField } from './meaningCatalog';

/** The options of a Bedeutung's pick. */
export interface MeaningPickOptions {
    readonly inventRange: false;
    readonly pickDerivation?: PickDerivation;
}

/**
 * The options of a Bedeutung's pick.
 *
 * @param field - The Bedeutung.
 * @param entry - The entry number; none for the unnumbered case.
 */
export const meaningPickOptions = (field: MeaningField, entry?: number): MeaningPickOptions =>
    MEANINGS[field].mapping
        ? { inventRange: false, pickDerivation: mappingPickDerivation(field, entry) }
        : { inventRange: false };

/**
 * A Bedeutung's id field as the Lese-Naht reads it (`oidPickFieldsOf` of its `createIdField`).
 *
 * @param field - The Bedeutung.
 * @param entry - The entry number; none for the unnumbered case.
 */
export const meaningPickField = (field: MeaningField, entry?: number): OidPickField => ({
    name: meaningKeys(field, entry).field,
    allowedTypes: MEANINGS[field].valueTypes,
    ...meaningPickOptions(field, entry),
});
