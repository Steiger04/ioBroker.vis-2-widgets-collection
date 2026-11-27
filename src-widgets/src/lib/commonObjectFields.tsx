/**
 * Helpers and field generators related to selecting ioBroker objects (OIDs) in the vis-2 editor.
 *
 * @module lib/commonObjectFields
 * @remarks
 * The main export in this module is `oidChangeHandlerAsync()`, an `onChange` handler factory used by several
 * widgets. It resolves the selected object and stores its metadata; the field's OID role decides which
 * widget data the pick owns beyond that (ADR-0096): only the main OID populates the root fields (icon,
 * unit, min/max, value rows, etc.); the Select's control ID owns only `cidObject` and the `onlyDisplay`
 * suggestion (Schreibziel, ADR-0090); an auxiliary ID owns only its own `<name>Object`. A pick without a
 * usable object drops only that object; only an emptied main-OID field removes the rows (ADR-0111).
 *
 * Types: import from `vis-2-widgets-collection/types/field-definitions/common-object-fields`.
 */
import CollectionDivider from '../components/CollectionDivider';
import { oidTypeFilter } from './allowedOidTypes';
import { isUnset } from './fieldDefaults';
import optionalNumber from './helper/optionalNumber';
import { oidRole } from './oidRole';
import { stateEditorSpec } from './stateEditorConfig';
import { applyStateRowOperation, assignStateRowPatch, isStateRowKey, stateRowCount } from './stateRows';
import { writeTargetDeniesWrite } from './writeTarget';

import type { AllowedType } from './allowedOidTypes';
import type { Connection } from '@iobroker/gui-components';
import type { RxWidgetInfoAttributesField, WidgetData } from '@iobroker/types-vis-2';

const getObjectIconAsync = async (socket: Connection, object: ioBroker.Object): Promise<string | null> => {
    const idArray = object._id.split('.');

    for (let i = idArray.length; i > 0; i--) {
        try {
            const parentObject = await socket.getObject(idArray.slice(0, i).join('.'));
            if (parentObject?.common?.icon) {
                return parentObject.common.icon;
            }
        } catch {
            // Continue with next parent if current fails
            continue;
        }
    }

    return null;
};

/** The Zustandszeilen of the main OID (`oid`): the row keys every state widget carries. */
const MAIN_STATE_ROWS = stateEditorSpec().config;

/**
 * Drops this field's object, nothing else (ADR-0111 Nr. 1); the control ID's suggestion follows
 * the fallback to the main OID (ADR-0090). Exactly `<name>Object`: a field name may prefix another
 * id field's (`boost`/`boostBeenden`, `ventil1`/`ventil10`), whose object stays.
 */
const dropFieldObject = (data: WidgetData, oid: string): void => {
    delete data[`${oid}Object`];

    if (oidRole(oid) === 'control') {
        data.onlyDisplay = writeTargetDeniesWrite(data);
    }
};

/**
 * Removes the rows and the root fields of the main OID — only for an emptied field (ADR-0111
 * Nr. 2). Runs before the OID object goes: its common.states count.
 */
const removeMainOidRows = (data: WidgetData): void => {
    // Every row the widget may still carry: the authored rows or the states, whichever reach further.
    const rowCount = Math.max(
        // The one number reading: a numeric string counts, a value the Rückfall-Regel drops counts
        // no rows, as in the Zustandseditor (lib/effectiveStateCount).
        optionalNumber(data.values_count) ?? 0,
        Object.keys(data.oidObject?.commonStates || {}).length,
    );

    delete data.icon;
    delete data.write;
    delete data.unit;

    for (let i = 1; i <= rowCount; i++) {
        MAIN_STATE_ROWS.schema.keys.forEach(key => {
            delete data[`${key}${i}`];
        });
    }

    // The rows are gone, so are their bindings — a binding left behind would make the
    // selected widgets' bindings disagree and lock the structural row actions unmarked.
    if (data.bindings?.some(name => isStateRowKey(name, MAIN_STATE_ROWS))) {
        data.bindings = data.bindings.filter(name => !isStateRowKey(name, MAIN_STATE_ROWS));
    }

    data.values_count = 0;
};

/**
 * The keys of a main-OID pick that count the Zustandszeilen ({@link convertToAuthoredRows} and the
 * supplement): the pick computes them from the stored rows and count, so its value carries the
 * stored one instead of replacing a choice — the runtime pick (`lib/pickedWidgetData`) takes them
 * with the rows it supplements, also where the data sets them.
 */
export const PICK_ROW_COUNT_KEYS: readonly string[] = ['values_count', 'ignoreCommonStates'];

/**
 * Writes the rows the widget carries now, counted against the previous OID object: a widget saved
 * with ignoreCommonStates on (values_count 0) shows its states' rows. From here on its authored
 * rows govern (ADR-0104 §5, Nachtrag Ticket 01).
 */
const convertToAuthoredRows = (data: WidgetData): void => {
    data.values_count = stateRowCount(data, MAIN_STATE_ROWS);
    data.ignoreCommonStates = false;
};

/**
 * A pick without a usable object — a type outside `allowedTypes`, an id that does not resolve, a
 * socket error — drops that field's object, nothing else (ADR-0111 Nr. 1): without it nothing is
 * written, the rows return with the next usable pick.
 */
const dropUnusableObject = (data: WidgetData, oid: string): void => {
    if (oidRole(oid) === 'main') {
        // Counted first, or the rows of a widget saved with ignoreCommonStates on go with the object.
        convertToAuthoredRows(data);
    }
    dropFieldObject(data, oid);
};

/** Options of an id field's pick. */
interface OidPickOptions {
    /**
     * Seed a missing bound (0..100, default: true). Off for a widget that draws no range: a
     * main-OID pick takes only the object's real bounds into the root `minValue`/`maxValue`
     * (ADR-0109 Nr. 8) and its `oidObject` copy stays seeded; any other id field takes only the
     * real bounds into its `<oid>Object` copy (the other roles write no root range).
     */
    inventRange?: boolean;
    /** The field's own derivation beyond the shared one; see {@link PickDerivation}. */
    pickDerivation?: PickDerivation;
}

/**
 * An id field's own pick derivation: further keys its pick takes from the picked object (and its
 * channel), beyond what the shared derivation writes — e.g. the Wertezuordnung of a heating
 * Bedeutung (ADR-0120). Its keys fill only keys the data leaves unset, in the editor pick and in
 * the Lese-Naht alike (`lib/pickedWidgetData`) — there also for a field that holds its own object
 * while one of its {@link PickDerivation.keys} is unset.
 */
export interface PickDerivation {
    /**
     * @param picked - What {@link loadPickedObjectAsync} read, the channel included.
     * @returns The derived keys; `undefined` or `{}` for none.
     */
    (picked: PickedObject): Readonly<Record<string, unknown>> | undefined;
    /** Every key the derivation may write. */
    readonly keys: readonly string[];
}

/**
 * Fills `data` with what a field's own derivation takes from `picked`, only into unset keys: what
 * is set wins.
 *
 * @param data - The widget data, changed in place (top-level keys only).
 * @param picked - What {@link loadPickedObjectAsync} read.
 * @param pickDerivation - The field's own derivation; none: nothing changes.
 */
export const applyPickDerivation = (
    data: WidgetData,
    picked: PickedObject,
    pickDerivation: PickDerivation | undefined,
): void => {
    for (const [key, value] of Object.entries(pickDerivation?.(picked) ?? {})) {
        if (!isUnset(value) && isUnset(data[key])) {
            data[key] = value;
        }
    }
};

/**
 * Stores a bound the object really has in a root field and removes the field otherwise.
 *
 * @remarks
 * `delete`, not vis-2's `null` patch: `changeData` replaces the widget's whole data, so a `null`
 * would stay stored and read as the limit 0.
 */
const setRealBound = (data: WidgetData, key: 'minValue' | 'maxValue', bound: number | null | undefined): void => {
    if (bound === undefined || bound === null) {
        delete data[key];
    } else {
        data[key] = bound;
    }
};

/**
 * The range of the object copy (`<oid>Object`).
 *
 * @param object - The picked state object.
 * @param seeded - Seed a missing bound with 0..100 (ADR-0109 Nr. 8, addendum K6: the copy of the
 *   main OID and of every field without `inventRange: false`); otherwise only a bound the object
 *   really has gets a key — a non-main id field with `inventRange: false` (Heizungs-Widgets: „Aus“ of
 *   the Raumthermostat needs the real minimum of the setpoint, ADR-0119/0120).
 */
const copiedRange = (object: ioBroker.StateObject, seeded: boolean): { minValue?: number; maxValue?: number } => {
    const { min, max } = object.common;
    if (seeded) {
        // `??`: a real bound of 0 is a range, only a missing one gets seeded.
        return { minValue: min ?? 0, maxValue: max ?? 100 };
    }
    return {
        ...(typeof min === 'number' ? { minValue: min } : {}),
        ...(typeof max === 'number' ? { maxValue: max } : {}),
    };
};

/** What a pick reads from the object database: the usable object and the icon it carries. */
export interface PickedObject {
    /** The picked state object; its `common.type` is one of the field's allowed types. */
    object: ioBroker.StateObject;
    /** The icon of the object or of its nearest parent with one. */
    icon: string | null;
    /**
     * The object one level above the state (its channel), read only for a field with a
     * {@link PickDerivation}; `undefined` when it is missing or its read failed.
     */
    channel?: ioBroker.Object;
}

/** The id one level above `id`; `''` for a top-level id. */
export const parentIdOf = (id: string): string => id.split('.').slice(0, -1).join('.');

/**
 * Reads an object where its absence is no error: an empty id, a missing object and a socket error
 * read as none.
 *
 * @param socket - The vis-2 connection.
 * @param id - The object id.
 */
export const loadObjectOrNoneAsync = async (socket: Connection, id: string): Promise<ioBroker.Object | undefined> => {
    if (!id) {
        return undefined;
    }
    try {
        return (await socket.getObject(id)) ?? undefined;
    } catch {
        return undefined;
    }
};

/** Reads the object one level above `id`; without it the state's pick stands. */
const loadChannelAsync = (socket: Connection, id: string): Promise<ioBroker.Object | undefined> =>
    loadObjectOrNoneAsync(socket, parentIdOf(id));

/**
 * Reads what a pick of `id` takes from the object database.
 *
 * @param socket - The vis-2 connection.
 * @param id - The picked object id.
 * @param allowedTypes - Allowed JS types for the picked state.
 * @param options - The field's pick options: a {@link OidPickOptions.pickDerivation} also reads
 *   the channel.
 * @returns The object and its icon (and channel); `undefined` for an id that does not resolve or a
 *   type outside `allowedTypes`. A socket error on the object rejects.
 */
export const loadPickedObjectAsync = async (
    socket: Connection,
    id: string,
    allowedTypes: readonly AllowedType[],
    options: OidPickOptions = {},
): Promise<PickedObject | undefined> => {
    const object = (await socket.getObject(id)) as ioBroker.StateObject | undefined;
    if (!object || !allowedTypes.includes(object.common.type as AllowedType)) {
        return undefined;
    }
    const icon = await getObjectIconAsync(socket, object);
    if (!options.pickDerivation) {
        return { object, icon };
    }
    const channel = await loadChannelAsync(socket, id);
    return channel ? { object, icon, channel } : { object, icon };
};

/**
 * Writes into `data` what a pick of the field `oid` with a usable object writes: the one
 * derivation of a pick, run by the editor ({@link oidChangeHandlerAsync}) and read at runtime for
 * an id without its object (`lib/pickedWidgetData`, KI-Integration).
 *
 * @param data - The widget data, changed in place (top-level keys only).
 * @param oid - The name of the data property that stores the picked id.
 * @param picked - What {@link loadPickedObjectAsync} read.
 * @param picked.object - The picked state object.
 * @param picked.icon - Its icon, or its nearest parent's.
 * @param options - See {@link OidPickOptions}.
 * @param options.inventRange - See {@link OidPickOptions.inventRange}.
 * @param options.pickDerivation - See {@link OidPickOptions.pickDerivation}.
 */
export const applyObjectPick = (
    data: WidgetData,
    oid: string,
    picked: PickedObject,
    { inventRange = true, pickDerivation }: OidPickOptions = {},
): void => {
    const { object, icon } = picked;
    const role = oidRole(oid);
    const oidType = object.common.type as AllowedType;

    if (role === 'main') {
        convertToAuthoredRows(data);
    }

    // Set object metadata
    const objectData = {
        _id: object._id,
        name: object.common.name || '',
        type: oidType,
        icon,
        write: object.common.write,
        onlyDisplay: object.common.write === false,
        unit: object.common.unit || '',
        ...copiedRange(object, role === 'main' || inventRange),
        // Copy only: no root field, and no key for an object without a step (ADR-0110 Nr. 12).
        ...(typeof object.common.step === 'number' ? { step: object.common.step } : {}),
    };

    data[`${oid}Object`] = objectData;

    if (role === 'main') {
        // Root level properties belong to the main OID alone (required for compatibility).
        data.icon = objectData.icon;
        data.write = objectData.write;
        data.unit = objectData.unit;
        // The main OID's suggestion yields to a resolved control ID (the write target).
        data.onlyDisplay = writeTargetDeniesWrite(data);
        if (inventRange) {
            data.minValue = objectData.minValue;
            data.maxValue = objectData.maxValue;
        } else {
            setRealBound(data, 'minValue', object.common.min);
            setRealBound(data, 'maxValue', object.common.max);
        }
    } else if (role === 'control') {
        // Control ID (Schreibziel, ADR-0090): owns only cidObject and the onlyDisplay
        // suggestion — the root fields belong to the main OID.
        data.onlyDisplay = writeTargetDeniesWrite(data);
    }
    // An auxiliary ID (Dialog's dialogId, Light2's channel IDs) owns nothing but its
    // own `${oid}Object` (ADR-0096).

    // Handle states configuration
    if (object.common.states) {
        let states = object.common.states;

        // Convert array states to object format
        if (Array.isArray(states)) {
            const statesObj: Record<string, string> = {};
            states.forEach(state => {
                statesObj[state] = state;
            });
            states = statesObj;
        }

        data[`${oid}Object`].commonStates = states;
    } else if (oidType === 'boolean' && role === 'main') {
        data[`${oid}Object`].commonStates = { true: 'TRUE', false: 'FALSE' };
    }

    if (role === 'main') {
        // Supplement, never overwrite: existing rows keep order, alias and styles; the
        // states no row carries yet are appended (ADR-0104 §6).
        assignStateRowPatch(data, applyStateRowOperation(data, { kind: 'supplement' }, MAIN_STATE_ROWS));
    }

    // The field's own derivation fills only what the data leaves unset: what is set wins.
    applyPickDerivation(data, picked, pickDerivation);
};

/**
 * Creates an async `onChange` handler for an OID/id editor field.
 *
 * @param allowedTypes Allowed JS types for the selected state/object.
 * @param oid The name of the data property that stores the selected object id.
 * @param options See {@link OidPickOptions}.
 * @param options.inventRange See {@link OidPickOptions.inventRange}.
 * @remarks
 * Every pick stores the object's metadata in `${oid}Object`. Beyond that the field's role
 * ({@link module:lib/oidRole}) decides what the pick owns ({@link applyObjectPick}):
 * - `main` (Haupt-OID `oid`): root `icon`/`write`/`unit`/`minValue`/`maxValue`, the Zustandszeilen,
 *   and the `onlyDisplay` suggestion of the write target ({@link module:lib/writeTarget}) — a
 *   resolved control ID keeps its suggestion, whatever the picking order. The pick supplements the
 *   rows from the object's `common.states` (boolean without them: TRUE/FALSE) and writes
 *   `ignoreCommonStates: false` with `values_count` (ADR-0104 §5, §6). A missing bound of the root
 *   range is seeded unless {@link OidPickOptions.inventRange} is off. Root `unit` shows the object's
 *   unit in the panel and replaces an earlier override; readers use the copy `oidObject.unit`
 *   (ADR-0109 Nr. 12).
 * - `control` (the Select's Steuer ID, ADR-0090): only `cidObject` and the `onlyDisplay`
 *   suggestion; clearing it (or losing its object) re-derives the suggestion from the main OID.
 * - `auxiliary` (Hilfs-OID — Dialog's `dialogId`, Light2's channel IDs, ADR-0096): only its own
 *   `${oid}Object`, `commonStates` included — no root field, no `onlyDisplay` suggestion.
 *
 * A pick without a usable object drops only that object, for every role (ADR-0111 Nr. 1). Only an
 * emptied main-OID field also removes the rows and the root fields (Nr. 2). `changeData` runs on
 * every path.
 */
export const oidChangeHandlerAsync =
    (allowedTypes: readonly AllowedType[], oid = 'oid', options: OidPickOptions = {}) =>
    async (
        _field: RxWidgetInfoAttributesField,
        data: WidgetData,
        changeData: (newData: WidgetData) => void,
        socket: Connection,
    ): Promise<void> => {
        if (!data[oid]) {
            if (oidRole(oid) === 'main') {
                removeMainOidRows(data);
            }
            dropFieldObject(data, oid);
            setTimeout(() => changeData(data), 100);
            return;
        }

        try {
            const picked = await loadPickedObjectAsync(socket, data[oid], allowedTypes, options);
            if (!picked) {
                dropUnusableObject(data, oid);
                setTimeout(() => changeData(data), 100);
                return;
            }

            applyObjectPick(data, oid, picked, options);

            setTimeout(() => changeData(data), 100);
        } catch (error) {
            console.error(`Error handling OID change for ${data[oid]}:`, error);
            dropUnusableObject(data, oid);
            setTimeout(() => changeData(data), 100);
        }
    };

/**
 * Builds an OID picker field: a vis-2 `id` field labelled by its data property (the i18n
 * key), whose pick runs {@link oidChangeHandlerAsync} for that same property.
 *
 * @param name - Data property the picked id is stored in — the main `'oid'`, the Select's
 *   control ID (`CONTROL_ID_FIELD`).
 * @param allowedTypes - Allowed JS types for the picked state.
 * @param options - Passed on to {@link oidChangeHandlerAsync}.
 * @returns The field definition.
 * @remarks
 * `allowedTypes` also lands on the field as an introspectable mirror of the onChange
 * filter — the allowedOidTypes parity test reads it (vis-2 ignores unknown keys) — and as
 * `filter` for the object dialog, which then offers only those types (ADR-0111 Nr. 4).
 * `allowedTypes`, `inventRange` and a given `pickDerivation` are the mirror the runtime reads for
 * an id without its object (`lib/pickedWidgetData`): the same pick, without the editor.
 * @example createIdField('oid', ANY_VALUE_TYPES)
 */
export const createIdField = (
    name: string,
    allowedTypes: readonly AllowedType[],
    options?: OidPickOptions,
): RxWidgetInfoAttributesField =>
    ({
        name,
        type: 'id',
        label: name,
        onChange: oidChangeHandlerAsync(allowedTypes, name, options),
        allowedTypes,
        inventRange: options?.inventRange !== false,
        ...(options?.pickDerivation ? { pickDerivation: options.pickDerivation } : {}),
        filter: oidTypeFilter(allowedTypes),
    }) as RxWidgetInfoAttributesField;

/** Options to toggle optional sections emitted by {@link commonObjectFields}. */
interface CommonObjectFieldsOptions extends OidPickOptions {
    /** Include the unit override field (default: true). */
    unit?: boolean;
}

const commonObjectFields = (
    allowedTypes: readonly AllowedType[],
    { unit = true, inventRange }: CommonObjectFieldsOptions = {},
): RxWidgetInfoAttributesField[] => {
    // The OID picker is always present; the unit section is optional and carries its own
    // leading divider so toggling it leaves no orphan divider. The Zustandszeilen are edited in
    // the widget's values group (`lib/stateEditorFields`), not here (ADR-0104).
    const fields: RxWidgetInfoAttributesField[] = [createIdField('oid', allowedTypes, { inventRange })];

    if (unit) {
        fields.push(
            {
                label: '',
                type: 'custom',
                component: () => <CollectionDivider />,
                hidden: (data, _i) => data.oidObject === undefined,
            },
            {
                name: 'unit',
                label: 'unit',
                type: 'text',
                default: '',
                hidden: (data, _i) => data.oidObject === undefined,
                // eslint-disable-next-line @typescript-eslint/require-await
                onChange: async (
                    _field: RxWidgetInfoAttributesField,
                    data: WidgetData,
                    changeData: (newData: WidgetData) => void,
                    _socket: Connection,
                ): Promise<void> => {
                    if (data.oidObject) {
                        // Update the unit in the object data
                        data.oidObject.unit = data.unit || '';
                        // setTimeout ensures the change is applied after the current event loop cycle
                        // This is important for UI consistency and proper state updates
                        setTimeout(() => changeData(data), 100);
                    }
                },
            },
        );
    }

    return fields;
};

export default commonObjectFields;
