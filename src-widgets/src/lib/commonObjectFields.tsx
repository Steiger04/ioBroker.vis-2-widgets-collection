import CollectionDivider from '../components/CollectionDivider';

import type { LegacyConnection } from '@iobroker/adapter-react-v5';
import type { RxWidgetInfoAttributesField, WidgetData } from '@iobroker/types-vis-2';

type AllowedType = 'boolean' | 'number' | 'string' | 'mixed';

const getObjectIconAsync = async (socket: LegacyConnection, object: ioBroker.Object): Promise<string | null> => {
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

        const count = typeof data.values_count === 'number' ? data.values_count : 0;

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

export const oidChangeHandlerAsync =
    (allowedTypes: AllowedType[], oid = 'oid') =>
    async (
        _field: RxWidgetInfoAttributesField,
        data: WidgetData,
        changeData: (newData: WidgetData) => void,
        socket: LegacyConnection,
    ): Promise<void> => {
        if (!data[oid]) {
            clearValueFields(data, oid);
            setTimeout(() => changeData(data), 100);
            return;
        }

        try {
            const object: ioBroker.StateObject = await socket.getObject(data[oid]);
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
                onlyDisplay: !object.common.write,
                unit: object.common.unit || '',
                minValue: object.common.min || 0,
                maxValue: object.common.max || 100,
            };

            data[`${oid}Object`] = objectData;

            // Set root level properties (required for compatibility)
            data.icon = objectData.icon;
            data.write = objectData.write;
            data.onlyDisplay = objectData.onlyDisplay;
            data.minValue = objectData.minValue;
            data.maxValue = objectData.maxValue;

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
                data.values_count = 2;
                data.value1 = true;
                data.alias1 = 'TRUE';
                data.value2 = false;
                data.alias2 = 'FALSE';
            } else if (oid === 'oid') {
                data.values_count = 0;
            }

            setTimeout(() => changeData(data), 100);
        } catch (error) {
            console.error(`Error handling OID change for ${data[oid]}:`, error);
            clearValueFields(data, oid);
            setTimeout(() => changeData(data), 100);
        }
    };

type ValueFields = {
    [K in `value${string}`]?: string | number | boolean | undefined;
};

export interface CommonObjectFieldsRxData extends ValueFields {
    oid: string;
    unit: string;
    values_count: number;
    icon?: string | null;
    write?: boolean;
    onlyDisplay?: boolean;
    minValue?: number;
    maxValue?: number;
    [key: `${string}Object`]: {
        _id: string;
        name: string;
        type: AllowedType;
        commonStates?: ioBroker.StateCommon['states'];
        unit: string;
        icon?: string | null;
        write?: boolean;
        onlyDisplay?: boolean;
        minValue?: number;
        maxValue?: number;
    };
    [key: `alias${string | number}?`]: string;
    // [key: string]: any;
}

const commonObjectFields = (allowedTypes: AllowedType[]): RxWidgetInfoAttributesField[] => [
    {
        name: 'oid',
        type: 'id',
        label: 'oid',
        onChange: oidChangeHandlerAsync(allowedTypes),
    },
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
            _socket: LegacyConnection,
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
    {
        label: '',
        type: 'custom',
        component: () => <CollectionDivider />,
        hidden: (data, _i) => data.oidObject?.type === 'boolean' || data.oidObject === undefined,
    },
    {
        name: 'values_count',
        type: 'number',
        default: 0,
        label: 'values_count',
        hidden: (data, _i) => data.oidObject?.type === 'boolean' || data.oidObject === undefined,
    },
];

export default commonObjectFields;
