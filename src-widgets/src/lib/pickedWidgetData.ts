/**
 * The editor's OID pick read at runtime: what a widget reads for an id field whose object is
 * missing (KI-Integration, ADR-0114).
 *
 * @module lib/pickedWidgetData
 * @remarks
 * Only the field's `onChange` stores the object of a picked id (`<id>Object`) and the pick's other
 * keys (`lib/commonObjectFields`). The vis-2 assistant sets the id without running it, and its flat
 * update leaves an older object with a foreign `_id` behind. For such a field the widget reads the
 * object itself; this module decides which fields wait for one and merges what the pick would have
 * written, with the pick's own derivation ({@link applyObjectPick}), into what the widget reads:
 * - an object whose `_id` is not the id reads as missing (also while it loads, and for an id
 *   without a usable object: the widget shows its OID hint as without an object);
 * - every key the pick writes counts only where the data leaves it unset (`undefined`, `null`):
 *   what is set wins.
 *
 * The same merge reads the palette's defaults (`lib/fieldDefaults`) for the unset keys: the
 * reference of an assistant-inserted widget is the palette's widget with the same data whose id the
 * user picked after the drop, so the picks run over the defaults and win over them.
 *
 * The stored data is never written. A field whose object matches its id is not touched, and data
 * without such a field and without an unset key that has a default comes back as the same object.
 */
import { applyObjectPick } from './commonObjectFields';
import { NO_FIELD_DEFAULTS, withFieldDefaults } from './fieldDefaults';

import type { AllowedType } from './allowedOidTypes';
import type { PickedObject } from './commonObjectFields';
import type { FieldDefaults } from './fieldDefaults';
import type { RxWidgetInfoGroup, WidgetData } from '@iobroker/types-vis-2';

/** An id field whose pick runs the shared derivation: its name and the options of its pick. */
export interface OidPickField {
    /** The data property that stores the id; its object lives in `<name>Object`. */
    readonly name: string;
    /** Allowed JS types of the picked state. */
    readonly allowedTypes: readonly AllowedType[];
    /** Whether a main-OID pick seeds a missing bound of the root range. */
    readonly inventRange: boolean;
}

/**
 * What a widget's data reading takes from its fields, read once per widget class from its
 * `getWidgetInfo()` (`Generic`): the id fields with the shared pick and the palette's defaults.
 */
export interface WidgetDataReading {
    /** The id fields whose pick runs the shared derivation ({@link oidPickFieldsOf}). */
    readonly oidPickFields: readonly OidPickField[];
    /** The defaults the unset keys read as (`lib/fieldDefaults`). */
    readonly defaults: FieldDefaults;
}

/** The keys of a field definition this module reads: the mirrors `createIdField` sets. */
interface PickFieldMirror {
    name?: string;
    type?: string;
    allowedTypes?: unknown;
    inventRange?: unknown;
}

/**
 * The id fields of a widget whose pick runs the shared derivation: the fields `createIdField`
 * builds, recognised by their `allowedTypes` mirror.
 *
 * @param visAttrs - The widget's `getWidgetInfo().visAttrs`.
 * @returns The fields in declaration order.
 */
export const oidPickFieldsOf = (visAttrs: readonly RxWidgetInfoGroup[]): OidPickField[] =>
    visAttrs.flatMap(group =>
        (group.fields ?? []).flatMap(field => {
            const { name, type, allowedTypes, inventRange } = field as PickFieldMirror;
            return type === 'id' && name && Array.isArray(allowedTypes)
                ? [{ name, allowedTypes: allowedTypes as AllowedType[], inventRange: inventRange !== false }]
                : [];
        }),
    );

/** The id a field holds: a non-empty string, else none. */
const idOf = (data: WidgetData, field: OidPickField): string | undefined => {
    const id: unknown = data[field.name];
    return typeof id === 'string' && id !== '' ? id : undefined;
};

/** Whether the field's stored object belongs to its id. */
const hasOwnObject = (data: WidgetData, field: OidPickField, id: string): boolean => {
    const object: unknown = data[`${field.name}Object`];
    return !!object && typeof object === 'object' && (object as { _id?: unknown })._id === id;
};

/** A field that waits for its object, with the id it holds. */
export interface AwaitedObject {
    readonly field: OidPickField;
    readonly id: string;
}

/**
 * The fields that hold an id without its object: no object, or one with a foreign `_id`.
 *
 * @param data - The widget data as the widget reads it.
 * @param fields - The widget's {@link oidPickFieldsOf}.
 */
export const awaitedObjectsOf = (data: WidgetData, fields: readonly OidPickField[]): AwaitedObject[] =>
    fields.flatMap(field => {
        const id = idOf(data, field);
        return id !== undefined && !hasOwnObject(data, field, id) ? [{ field, id }] : [];
    });

const isUnset = (value: unknown): boolean => value === undefined || value === null;

/**
 * The widget data with the picks of its awaited objects read in, over the palette's defaults.
 *
 * @param data - The widget data as the widget reads it.
 * @param awaited - Its {@link awaitedObjectsOf}.
 * @param pickedOf - The loaded pick of an awaited object: `undefined` while it loads, `null` for an
 *   id without a usable object.
 * @param defaults - The widget's field defaults (`lib/fieldDefaults`); none: no key reads a default.
 * @returns `data` itself when nothing changes; otherwise a copy where every awaited field's
 *   foreign object is gone and the unset keys read what the palette's widget with the same data
 *   would hold after the picks in the panel: the picks run over the defaults (in the panel the user
 *   picks after the drop), so a key a pick writes reads the pick's value, a key it removes reads as
 *   unset, every other key its default.
 */
export function pickedWidgetData<T extends WidgetData>(
    data: T,
    awaited: readonly AwaitedObject[],
    pickedOf: (awaitedObject: AwaitedObject) => PickedObject | null | undefined,
    defaults: FieldDefaults = NO_FIELD_DEFAULTS,
): T {
    const read: WidgetData = { ...data };
    let changed = false;
    for (const { field } of awaited) {
        // A foreign object belongs to another id: it reads as missing.
        if (`${field.name}Object` in read) {
            delete read[`${field.name}Object`];
            changed = true;
        }
    }

    // The palette's widget: the defaults, then the picks in field order, as successive picks in the
    // panel would run.
    const derived: WidgetData = { ...withFieldDefaults(read, defaults) };
    for (const awaitedObject of awaited) {
        const picked = pickedOf(awaitedObject);
        if (picked) {
            applyObjectPick(derived, awaitedObject.field.name, picked, awaitedObject.field);
        }
    }

    // What is set wins: a derived value fills only a key the data leaves unset.
    for (const [key, value] of Object.entries(derived)) {
        if (isUnset(read[key]) && value !== read[key]) {
            read[key] = value;
            changed = true;
        }
    }
    return changed ? (read as T) : data;
}
