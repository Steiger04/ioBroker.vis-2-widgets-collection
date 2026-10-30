/**
 * Helpers and field generators related to selecting ioBroker objects (OIDs) in the vis-2 editor.
 *
 * @module lib/commonObjectFields
 * @remarks
 * The main export in this module is `oidChangeHandlerAsync()`, an `onChange` handler factory used by several
 * widgets. It resolves the selected object and populates common widget fields (icons, labels, min/max, etc.)
 * based on object metadata — except for the Select's control ID, which owns only `cidObject` and the
 * `onlyDisplay` suggestion (Schreibziel, ADR-0090).
 *
 * Types: import from `vis-2-widgets-collection/types/field-definitions/common-object-fields`.
 */
import CollectionDivider from '../components/CollectionDivider';
import { isControlIdField, writeTargetDeniesWrite } from './writeTarget';

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

const clearValueFields = (data: WidgetData, oid: string = 'oid'): void => {
    // Clear only fields that start with the given OID and end with 'Object'
    Object.keys(data).forEach(key => {
        if (key.startsWith(oid) && key.endsWith('Object')) {
            delete data[key];
        }
    });

    if (isControlIdField(oid)) {
        // The control ID is gone: the write target falls back to the main OID (ADR-0090).
        data.onlyDisplay = writeTargetDeniesWrite(data);
    }

    const keys = [
        'iconSmall',
        'icon',
        'iconSize',
        'iconColor',
        'iconHover',
        'iconXOffset',
        'iconYOffset',
        'noHeader',
        'header',
        'headerSize',
        'alias',
        'value',
        'valueSize',
        'noFooter',
        'footer',
        'footerSize',
        'noCard',
        'squaredCorner',
        'textColor',
        'outlined',
        'outlinedFrame',
        'basePadding',
        'baseElevation',
        'square',
        'ellipse',
        'circle',
        'background',
        'backgroundColor',
        'frameBackground',
        'frameBackgroundColor',
    ];

    if (oid === 'oid') {
        delete data.icon;
        delete data.write;

        // Use the larger of values_count and commonStates length to ensure all fields are cleared
        const storedCount = typeof data.values_count === 'number' ? data.values_count : 0;
        const commonStatesCount = Object.keys(data.oidObject?.commonStates || {}).length;
        const count = Math.max(storedCount, commonStatesCount);

        for (let i = 1; i <= count; i++) {
            keys.forEach(key => {
                delete data[`${key}${i}`];
            });
        }

        data.values_count = 0;
    }
};

const convertValueByType = (value: string, type: AllowedType): boolean | number | string => {
    switch (type) {
        case 'boolean':
            return value === 'true';
        case 'number':
            return Number(value);
        case 'string':
            return String(value);
        case 'mixed':
            if (value === 'true') {
                return true;
            }
            if (value === 'false') {
                return false;
            }
            if (!isNaN(Number(value)) && value !== '') {
                return Number(value);
            }
            return String(value);
        default:
            return String(value);
    }
};

/**
 * Creates an async `onChange` handler for an OID/id editor field.
 *
 * @param allowedTypes Allowed JS types for the selected state/object.
 * @param oid The name of the data property that stores the selected object id.
 * @remarks
 * Every pick stores the object's metadata in `${oid}Object`. Beyond that the field's role decides:
 * - `'oid'` (main OID): root `icon`/`write`/`minValue`/`maxValue`, the value rows, and the
 *   `onlyDisplay` suggestion of the write target ({@link module:lib/writeTarget}) — a resolved
 *   control ID keeps its suggestion, whatever the picking order.
 * - the control ID (`isControlIdField`, the Select's Steuer ID, ADR-0090): only `cidObject` and
 *   the `onlyDisplay` suggestion; clearing it (or losing its object) re-derives the suggestion
 *   from the main OID.
 * - any other id (Dialog's `dialogId`, Light2's channel IDs): root fields and the suggestion from
 *   the picked object, as before.
 */
export const oidChangeHandlerAsync =
    (allowedTypes: readonly AllowedType[], oid = 'oid') =>
    async (
        _field: RxWidgetInfoAttributesField,
        data: WidgetData,
        changeData: (newData: WidgetData) => void,
        socket: Connection,
    ): Promise<void> => {
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

            // Set object metadata
            const objectData = {
                _id: object._id,
                name: object.common.name || '',
                type: oidType,
                icon: await getObjectIconAsync(socket, object),
                write: object.common.write,
                onlyDisplay: object.common.write === false,
                unit: object.common.unit || '',
                minValue: object.common.min || 0,
                maxValue: object.common.max || 100,
            };

            data[`${oid}Object`] = objectData;

            if (isControlIdField(oid)) {
                // Control ID (Schreibziel, ADR-0090): owns only cidObject and the onlyDisplay
                // suggestion — the root fields belong to the main OID.
                data.onlyDisplay = writeTargetDeniesWrite(data);
            } else {
                // Set root level properties (required for compatibility)
                data.icon = objectData.icon;
                data.write = objectData.write;
                // The main OID's suggestion yields to a resolved control ID (the write target);
                // other auxiliary IDs (Dialog, Light2 channels) keep their own suggestion.
                data.onlyDisplay = oid === 'oid' ? writeTargetDeniesWrite(data) : objectData.onlyDisplay;
                data.minValue = objectData.minValue;
                data.maxValue = objectData.maxValue;
            }

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

                if (oid === 'oid') {
                    data.values_count = Object.keys(states).length;

                    Object.entries(states).forEach(([value, alias], index) => {
                        const keyIndex = index + 1;
                        data[`value${keyIndex}`] = convertValueByType(value, oidType);
                        data[`alias${keyIndex}`] = String(alias);
                    });
                }
            } else if (oidType === 'boolean' && oid === 'oid') {
                data[`${oid}Object`].commonStates = { true: 'TRUE', false: 'FALSE' };
                data.values_count = 2;
                data.value1 = true;
                data.alias1 = 'TRUE';
                data.value2 = false;
                data.alias2 = 'FALSE';
            } else if (oid === 'oid') {
                data.values_count = 0;
            }

            // When ignoreCommonStates is active, hide value groups in editor but keep data populated
            if (oid === 'oid' && data.ignoreCommonStates !== false) {
                data.values_count = 0;
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
    /** Include the common.states value-group machinery — `ignoreCommonStates` + `values_count` (default: true). */
    valueGroups?: boolean;
}

const commonObjectFields = (
    allowedTypes: readonly AllowedType[],
    { unit = true, valueGroups = true }: CommonObjectFieldsOptions = {},
): RxWidgetInfoAttributesField[] => {
    // The OID picker is always present; the unit and value-group sections are optional
    // and each carries its own leading divider so toggling them leaves no orphan dividers.
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

    if (valueGroups) {
        fields.push(
            {
                label: '',
                type: 'custom',
                component: () => <CollectionDivider />,
                hidden: (data, _i) => data.oidObject === undefined,
            },
            {
                name: 'ignoreCommonStates',
                type: 'checkbox',
                default: true,
                label: 'ignore_common_states',
                tooltip: 'ignore_common_states_tooltip',
                hidden: (data, _i) => data.oidObject === undefined,
                // eslint-disable-next-line @typescript-eslint/require-await
                onChange: async (
                    _field: RxWidgetInfoAttributesField,
                    data: WidgetData,
                    changeData: (newData: WidgetData) => void,
                    _socket: Connection,
                ): Promise<void> => {
                    if (data.ignoreCommonStates !== false) {
                        // Hide value groups: set values_count to 0
                        data.values_count = 0;
                    } else {
                        // Restore values_count from commonStates
                        const commonStates = data.oidObject?.commonStates;
                        if (commonStates) {
                            data.values_count = Object.keys(commonStates).length;
                        } else if (data.oidObject?.type === 'boolean') {
                            data.values_count = 2;
                        } else {
                            data.values_count = 0;
                        }
                    }
                    setTimeout(() => changeData(data), 100);
                },
            },
            {
                name: 'values_count',
                type: 'number',
                default: 0,
                label: 'values_count',
                hidden: (data, _i) =>
                    data.oidObject?.type === 'boolean' ||
                    data.oidObject === undefined ||
                    data.ignoreCommonStates !== false,
            },
        );
    }

    return fields;
};

export default commonObjectFields;
