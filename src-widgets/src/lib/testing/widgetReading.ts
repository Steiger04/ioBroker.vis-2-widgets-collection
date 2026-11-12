/**
 * The widget data as a widget reads it, for the body tests (KI-Integration, ADR-0114).
 *
 * @module lib/testing/widgetReading
 * @remarks
 * A widget class hands its body the stored data through the Rückfall-Regel (`lib/usableWidgetData`)
 * and the palette's defaults (`lib/fieldDefaults`), so a body never reads an unset key that has a
 * default, nor an emptied field that declares it reads as unset. A body test that mounts the body
 * directly reads the same way through {@link readWidgetData} — the production functions over the
 * field definitions, no copy of a default. {@link fieldDefaultOf} is the one place a test reads a
 * field's default from.
 */
import { fieldDefaultsOf, withFieldDefaults } from '../fieldDefaults';
import { fieldRulesOf, usableWidgetData } from '../usableWidgetData';

import type { ExtendedField } from '../../types/field-definitions/extended-field';
import type { RxWidgetInfo, RxWidgetInfoAttributesField, RxWidgetInfoGroup } from '@iobroker/types-vis-2';

/** Field definitions: a widget's info, its attribute groups, or a field module's list. */
export type FieldSource =
    RxWidgetInfo | readonly RxWidgetInfoGroup[] | readonly (RxWidgetInfoAttributesField | ExtendedField)[];

/** The attribute groups of a field source; a field list is one group. */
const groupsOf = (source: FieldSource): readonly RxWidgetInfoGroup[] => {
    if (!Array.isArray(source)) {
        return (source as RxWidgetInfo).visAttrs ?? [];
    }
    return (source as readonly { fields?: unknown }[]).some(item => Array.isArray(item.fields))
        ? (source as readonly RxWidgetInfoGroup[])
        : [{ name: 'fields', fields: source }];
};

/**
 * The data the widget's body reads for stored data: unusable values and declared emptied values
 * unset, then every unset key that has a default read as it.
 *
 * @param source - The widget's field definitions (the fields a test's data touches suffice).
 * @param data - The data as vis-2 hands it to the widget (`rxData`).
 * @param stored - The data as stored in the project (bindings unresolved); defaults to `data`.
 */
export const readWidgetData = <T extends object>(source: FieldSource, data: T, stored: object = data): T => {
    const groups = groupsOf(source);
    return withFieldDefaults(usableWidgetData(data, fieldRulesOf(groups), stored), fieldDefaultsOf(groups));
};

/**
 * A field's default as the widget reads it for the unset key (`lib/fieldDefaults`): none for a
 * field without one and for a field that keeps its unset reading (`keepUnset`).
 *
 * @param source - The field definitions.
 * @param name - The field's name.
 */
export const fieldDefaultOf = (source: FieldSource, name: string): unknown =>
    fieldDefaultsOf(groupsOf(source)).get(name);
