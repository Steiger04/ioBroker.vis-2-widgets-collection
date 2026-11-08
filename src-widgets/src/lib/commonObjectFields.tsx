/**
 * Helpers and field generators related to selecting ioBroker objects (OIDs) in the vis-2 editor.
 *
 * @module lib/commonObjectFields
 * @remarks
 * The main export in this module is `oidChangeHandlerAsync()`, an `onChange` handler factory used by several
 * widgets. It resolves the selected object and stores its metadata; the field's OID role decides which
 * widget data the pick owns beyond that (ADR-0096): only the main OID populates the root fields (icon,
 * min/max, value rows, etc.); the Select's control ID owns only `cidObject` and the `onlyDisplay`
 * suggestion (Schreibziel, ADR-0090); an auxiliary ID owns only its own `<name>Object`.
 *
 * Types: import from `vis-2-widgets-collection/types/field-definitions/common-object-fields`.
 */
import CollectionDivider from '../components/CollectionDivider';
import { oidRole } from './oidRole';
import { stateEditorSpec } from './stateEditorConfig';
import { applyStateRowOperation, assignStateRowPatch, isStateRowKey, stateRowCount } from './stateRows';
import { writeTargetDeniesWrite } from './writeTarget';

import type { AllowedType } from './allowedOidTypes';
import type { Connection } from '@iobroker/adapter-react-v5';
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

const clearValueFields = (data: WidgetData, oid: string = 'oid'): void => {
    const role = oidRole(oid);
    // Every row the widget may still carry — counted before the OID object (and with it its
    // common.states) is removed: the authored rows or the states, whichever reach further.
    const rowCount =
        role === 'main'
            ? Math.max(
                  typeof data.values_count === 'number' ? data.values_count : 0,
                  Object.keys(data.oidObject?.commonStates || {}).length,
              )
            : 0;

    // Clear only fields that start with the given OID and end with 'Object'
    Object.keys(data).forEach(key => {
        if (key.startsWith(oid) && key.endsWith('Object')) {
            delete data[key];
        }
    });

    if (role === 'control') {
        // The control ID is gone: the write target falls back to the main OID (ADR-0090).
        data.onlyDisplay = writeTargetDeniesWrite(data);
    }

    if (role === 'main') {
        delete data.icon;
        delete data.write;

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
    }
};

/**
 * Creates an async `onChange` handler for an OID/id editor field.
 *
 * @param allowedTypes Allowed JS types for the selected state/object.
 * @param oid The name of the data property that stores the selected object id.
 * @remarks
 * Every pick stores the object's metadata in `${oid}Object`. Beyond that the field's role
 * ({@link module:lib/oidRole}) decides what the pick owns:
 * - `main` (Haupt-OID `oid`): root `icon`/`write`/`minValue`/`maxValue`, the Zustandszeilen, and
 *   the `onlyDisplay` suggestion of the write target ({@link module:lib/writeTarget}) — a resolved
 *   control ID keeps its suggestion, whatever the picking order. The pick supplements the rows
 *   from the object's `common.states` (boolean without them: TRUE/FALSE) and writes
 *   `ignoreCommonStates: false` with `values_count` (ADR-0104 §5, §6).
 * - `control` (the Select's Steuer ID, ADR-0090): only `cidObject` and the `onlyDisplay`
 *   suggestion; clearing it (or losing its object) re-derives the suggestion from the main OID.
 * - `auxiliary` (Hilfs-OID — Dialog's `dialogId`, Light2's channel IDs, ADR-0096): only its own
 *   `${oid}Object`, `commonStates` included — no root field, no `onlyDisplay` suggestion.
 */
export const oidChangeHandlerAsync =
    (allowedTypes: readonly AllowedType[], oid = 'oid') =>
    async (
        _field: RxWidgetInfoAttributesField,
        data: WidgetData,
        changeData: (newData: WidgetData) => void,
        socket: Connection,
    ): Promise<void> => {
        const role = oidRole(oid);

        if (!data[oid]) {
            clearValueFields(data, oid);
            setTimeout(() => changeData(data), 100);
            return;
        }

        try {
            const object = (await socket.getObject(data[oid])) as ioBroker.StateObject | undefined;
            if (!object) {
                clearValueFields(data, oid);
                setTimeout(() => changeData(data), 100);
                return;
            }

            const oidType = object.common.type as AllowedType;
            if (!allowedTypes.includes(oidType)) {
                return;
            }

            if (role === 'main') {
                // The rows the widget carries now, counted against the previous OID object — a
                // widget saved with ignoreCommonStates on (values_count 0) shows its states'
                // rows. From here on its authored rows govern (ADR-0104 §5, Nachtrag Ticket 01).
                data.values_count = stateRowCount(data, MAIN_STATE_ROWS);
                data.ignoreCommonStates = false;
            }

            // Set object metadata
            const objectData = {
                _id: object._id,
                name: object.common.name || '',
                type: oidType,
                icon: await getObjectIconAsync(socket, object),
                write: object.common.write,
                onlyDisplay: object.common.write === false,
                unit: object.common.unit || '',
                // `??`: a real bound of 0 is a range, only a missing one gets seeded.
                minValue: object.common.min ?? 0,
                maxValue: object.common.max ?? 100,
            };

            data[`${oid}Object`] = objectData;

            if (role === 'main') {
                // Root level properties belong to the main OID alone (required for compatibility).
                data.icon = objectData.icon;
                data.write = objectData.write;
                // The main OID's suggestion yields to a resolved control ID (the write target).
                data.onlyDisplay = writeTargetDeniesWrite(data);
                data.minValue = objectData.minValue;
                data.maxValue = objectData.maxValue;
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

            setTimeout(() => changeData(data), 100);
        } catch (error) {
            console.error(`Error handling OID change for ${data[oid]}:`, error);
            clearValueFields(data, oid);
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
 * @returns The field definition.
 * @remarks
 * `allowedTypes` also lands on the field as an introspectable mirror of the onChange
 * filter — the allowedOidTypes parity test reads it (vis-2 ignores unknown keys).
 * @example createIdField('oid', ANY_VALUE_TYPES)
 */
export const createIdField = (name: string, allowedTypes: readonly AllowedType[]): RxWidgetInfoAttributesField =>
    ({
        name,
        type: 'id',
        label: name,
        onChange: oidChangeHandlerAsync(allowedTypes, name),
        allowedTypes,
    }) as RxWidgetInfoAttributesField;

/** Options to toggle optional sections emitted by {@link commonObjectFields}. */
interface CommonObjectFieldsOptions {
    /** Include the unit override field (default: true). */
    unit?: boolean;
}

const commonObjectFields = (
    allowedTypes: readonly AllowedType[],
    { unit = true }: CommonObjectFieldsOptions = {},
): RxWidgetInfoAttributesField[] => {
    // The OID picker is always present; the unit section is optional and carries its own
    // leading divider so toggling it leaves no orphan divider. The Zustandszeilen are edited in
    // the widget's values group (`lib/stateEditorFields`), not here (ADR-0104).
    const fields: RxWidgetInfoAttributesField[] = [createIdField('oid', allowedTypes)];

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
