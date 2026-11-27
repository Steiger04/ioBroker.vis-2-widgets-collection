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
 * written, with the pick's own derivation ({@link applyObjectPick}) — a field's own
 * `pickDerivation` included (e.g. a missing Wertezuordnung, ADR-0120) — into what the widget reads:
 * - an object whose `_id` is not the id reads as missing (also while it loads, and for an id
 *   without a usable object: the widget shows its OID hint as without an object);
 * - a field that holds its own object reads only its own derivation, while one of its keys is unset
 *   (a bound Bedeutung without its stored Wertezuordnung, ADR-0120 Nachtrag „Spec Stufe 1
 *   schreiben“); its object stays, also while the read runs and without a usable object. A field
 *   without its own derivation and with its own object waits for nothing;
 * - every key the pick writes counts only where the data leaves it unset (`isUnset`):
 *   what is set wins — except the row count (`values_count`, `ignoreCommonStates`), which the pick
 *   counts from the stored rows and count together with the rows it supplements, so the stored
 *   value is its input and the pick's own result counts.
 *
 * The same merge reads the palette's defaults (`lib/fieldDefaults`) for the unset keys: the
 * reference of an assistant-inserted widget is the palette's widget with the same data whose id the
 * user picked after the drop, so the picks run over the defaults and win over them. In the Lese-Naht
 * this is stages 2 (pick) and 3 (defaults), after the Rückfall-Regel and before the frame stage
 * (`lib/widgetFrame`).
 *
 * The stored data is never written. A field whose object matches its id is not touched, and data
 * without such a field and without an unset key that has a default comes back as the same object.
 */
import { applyObjectPick, applyPickDerivation, PICK_ROW_COUNT_KEYS } from './commonObjectFields';
import { isUnset, NO_FIELD_DEFAULTS, withFieldDefaults } from './fieldDefaults';

import type { AllowedType } from './allowedOidTypes';
import type { PickDerivation, PickedObject } from './commonObjectFields';
import type { FieldDefaults } from './fieldDefaults';
import type { RxWidgetInfoGroup, WidgetData } from '@iobroker/types-vis-2';

/** An id field whose pick runs the shared derivation: its name and the options of its pick. */
export interface OidPickField {
    /** The data property that stores the id; its object lives in `<name>Object`. */
    readonly name: string;
    /** Allowed JS types of the picked state. */
    readonly allowedTypes: readonly AllowedType[];
    /** Whether a missing bound is seeded (`createIdField`'s `inventRange`). */
    readonly inventRange: boolean;
    /** The field's own pick derivation (`createIdField`'s `pickDerivation`), if it has one. */
    readonly pickDerivation?: PickDerivation;
}

/**
 * What the pick and the field defaults take from a widget's fields, read once per widget class from
 * its `getWidgetInfo()` (`Generic`): the id fields with the shared pick and the palette's defaults.
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
    pickDerivation?: unknown;
}

/**
 * The id fields of a widget whose pick runs the shared derivation: the fields `createIdField`
 * builds, recognised by their `allowedTypes` mirror, with their `inventRange` and `pickDerivation`.
 *
 * @param visAttrs - The widget's `getWidgetInfo().visAttrs`.
 * @returns The fields in declaration order.
 */
export const oidPickFieldsOf = (visAttrs: readonly RxWidgetInfoGroup[]): OidPickField[] =>
    visAttrs.flatMap(group =>
        (group.fields ?? []).flatMap(field => {
            const { name, type, allowedTypes, inventRange, pickDerivation } = field as PickFieldMirror;
            return type === 'id' && name && Array.isArray(allowedTypes)
                ? [
                      {
                          name,
                          allowedTypes: allowedTypes as AllowedType[],
                          inventRange: inventRange !== false,
                          ...(typeof pickDerivation === 'function' &&
                          Array.isArray((pickDerivation as Partial<PickDerivation>).keys)
                              ? { pickDerivation: pickDerivation as PickDerivation }
                              : {}),
                      },
                  ]
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
    /** The field holds its own object and waits only for its own derivation. */
    readonly ownObject?: true;
}

/** Whether the field's own derivation leaves one of its keys unset in the data. */
const derivesUnsetKey = (data: WidgetData, field: OidPickField): boolean =>
    !!field.pickDerivation?.keys.some(key => isUnset(data[key]));

/**
 * The fields that hold an id without its object (no object, or one with a foreign `_id`), and the
 * fields that hold their own object while their own derivation leaves a key unset.
 *
 * @param data - The widget data as the widget reads it.
 * @param fields - The widget's {@link oidPickFieldsOf}.
 */
export const awaitedObjectsOf = (data: WidgetData, fields: readonly OidPickField[]): AwaitedObject[] =>
    fields.flatMap((field): AwaitedObject[] => {
        const id = idOf(data, field);
        if (id === undefined) {
            return [];
        }
        if (!hasOwnObject(data, field, id)) {
            return [{ field, id }];
        }
        return derivesUnsetKey(data, field) ? [{ field, id, ownObject: true }] : [];
    });

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
    for (const { field, ownObject } of awaited) {
        // A foreign object belongs to another id: it reads as missing.
        if (!ownObject && `${field.name}Object` in read) {
            delete read[`${field.name}Object`];
            changed = true;
        }
    }

    // The palette's widget: the defaults, then the picks in field order, as successive picks in the
    // panel would run.
    const derived: WidgetData = { ...withFieldDefaults(read, defaults) };
    for (const awaitedObject of awaited) {
        const picked = pickedOf(awaitedObject);
        if (picked && awaitedObject.ownObject) {
            applyPickDerivation(derived, picked, awaitedObject.field.pickDerivation);
        } else if (picked) {
            applyObjectPick(derived, awaitedObject.field.name, picked, awaitedObject.field);
        }
    }

    // What is set wins: a derived value fills only a key the data leaves unset — except the row
    // count, which the pick counted from the stored one together with the rows it supplemented.
    for (const [key, value] of Object.entries(derived)) {
        if ((isUnset(read[key]) || PICK_ROW_COUNT_KEYS.includes(key)) && value !== read[key]) {
            read[key] = value;
            changed = true;
        }
    }
    return changed ? (read as T) : data;
}
