/**
 * vis-2 widget editor field generator for Light2 (color light) options.
 *
 * @module lib/light2Fields
 * @remarks
 * Light2 can auto-detect related RGB/CCT states from a selected "switch" object and pre-fill additional OID
 * fields in the widget configuration.
 *
 * Types: import from `vis-2-widgets-collection/types/field-definitions/light2-fields`.
 */
import CollectionDivider from '../components/CollectionDivider';
import { oidChangeHandlerAsync } from './commonObjectFields';
import { createPlainColorField } from './fieldFactories';
import { stateEditorSpec } from './stateEditorConfig';
import { applyStateRowOperation, stateRowCount } from './stateRows';

import type { Connection } from '@iobroker/adapter-react-v5';
import type { RxWidgetInfoAttributesField, WidgetData } from '@iobroker/types-vis-2';

const PowerSettingsNewIcon =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMyAzaC0ydjEwaDJWM3ptNC44MyAyLjE3bC0xLjQyIDEuNDJBNi45MiA2LjkyIDAgMCAxIDE5IDEyYzAgMy44Ny0zLjEzIDctNyA3QTYuOTk1IDYuOTk1IDAgMCAxIDcuNTggNi41OEw2LjE3IDUuMTdBOC45MzIgOC45MzIgMCAwIDAgMyAxMmE5IDkgMCAwIDAgMTggMGMwLTIuNzQtMS4yMy01LjE4LTMuMTctNi44M3oiLz48L3N2Zz4=';

/**
 * Light2 configuration extension of `WidgetData`.
 *
 * @remarks
 * Only used internally by the field generator to type `data` while pre-filling values.
 */
interface ExtendedWidgetData extends WidgetData {
    colorLightButton?: boolean;
    colorLightDelayLongPress?: number;
    colorLightModalWidth?: number;
    colorLightModalHeight?: number;
    colorLightSliderWidth?: number;
    colorLightBorderWidth?: number;
    colorLightBorderColor?: string;
    colorLightPadding?: number;
    colorLightSwitchOid?: string;
    colorLightUIComponent?: 'wheel' | 'box' | 'slider';
    colorWheelLightness?: boolean;
    colorLightType?: 'none' | 'cct' | 'rgb' | 'rgbcct' | 'r/g/b' | 'r/g/b/cct' | 'h/s/v' | 'h/s/v/cct';
    colorLightTemperatureOid?: string;
    colorLightCtMin?: number;
    colorLightCtMax?: number;
    colorLightRgbHexOid?: string;
    colorLightRedOid?: string;
    colorLightGreenOid?: string;
    colorLightBlueOid?: string;
    colorLightHueOid?: string;
    colorLightSaturationOid?: string;
    colorLightBrightnessOid?: string;
}

/** The Zustandszeilen of the button mode: they belong to the switch OID, always two (ADR-0104). */
const SWITCH_ROWS = stateEditorSpec({ oidProperty: 'colorLightSwitchOid', fixedRows: true }).config;

/** The look a seeded switch row gets: the power icon, red for ON, green for OFF. */
const SWITCH_ROW_LOOK = { iconSmall: PowerSettingsNewIcon, iconSize: 100 };

/**
 * Seeds the two rows of the button mode, TRUE and FALSE — fixed, never from `common.states`.
 *
 * @param data The widget data, changed in place.
 * @remarks
 * Supplements like the main-OID pick (ADR-0104 §6, Nachtrag Ticket 02): rows already carrying
 * `true`/`false` keep order, alias and styles; only a missing row is appended, with the power
 * icon. The widget icon is hidden (`iconSize` 0) only when the rows are seeded from none.
 */
const seedSwitchRows = (data: WidgetData): void => {
    const before = stateRowCount(data, SWITCH_ROWS);
    // The source is always TRUE/FALSE: judged as a boolean OID without common.states.
    const patch = applyStateRowOperation(
        { ...data, colorLightSwitchOidObject: { type: 'boolean' } },
        { kind: 'supplement' },
        SWITCH_ROWS,
    );
    Object.entries(patch ?? {}).forEach(([key, value]) => {
        if (value === null) {
            delete data[key];
        } else {
            data[key] = value;
        }
    });

    for (let n = before + 1; n <= (data.values_count as number); n++) {
        Object.assign(data, {
            [`iconSmall${n}`]: SWITCH_ROW_LOOK.iconSmall,
            [`iconColor${n}`]: data[`value${n}`] === true ? 'red' : 'green',
            [`iconSize${n}`]: SWITCH_ROW_LOOK.iconSize,
        });
    }
    if (before === 0) {
        data.iconSize = 0;
    }
};

/**
 * Mapping of ioBroker state roles to the corresponding Light2 configuration field.
 */
const RGB_ROLES: Record<string, string> = {
    'switch.light': 'colorLightSwitchOid',
    'level.color.rgb': 'colorLightRgbHexOid',
    'level.color.red': 'colorLightRedOid',
    'level.color.green': 'colorLightGreenOid',
    'level.color.blue': 'colorLightBlueOid',
    'level.color.hue': 'colorLightHueOid',
    'level.color.saturation': 'colorLightSaturationOid',
    'level.brightness': 'colorLightBrightnessOid',
    'level.dimmer': 'colorLightBrightnessOid',
    'level.color.temperature': 'colorLightTemperatureOid',
    'level.color.luminance': 'colorLightBrightnessOid',
    'level.color.white': 'colorLightBrightnessOid',
};

/**
 * `onChange` handler for the Light2 switch OID field.
 *
 * @remarks
 * When the selected object looks like a device channel, this scans related states and populates matching Light2
 * OID fields based on ioBroker roles.
 */
const loadStatesAsync = async (
    field: RxWidgetInfoAttributesField,
    data: WidgetData,
    changeData: (newData: WidgetData) => void,
    socket: Connection,
): Promise<void> => {
    const fieldName = field.name;
    if (fieldName && data[fieldName]) {
        const object = await socket.getObject(data[fieldName] as string);

        if (object && object.common) {
            const id = (data[fieldName] as string).split('.');
            id.pop();
            const states = await socket.getObjectView(`${id.join('.')}.`, `${id.join('.')}.\u9999`, 'state');

            if (states) {
                const extendedData = data as ExtendedWidgetData;

                await Promise.all(
                    Object.values(states).map(async state => {
                        const role = state.common.role;

                        if (
                            role &&
                            RGB_ROLES[role] &&
                            (!data[role as keyof WidgetData] ||
                                data[role as keyof WidgetData] === 'nothing_selected') &&
                            fieldName !== role
                        ) {
                            const targetField = RGB_ROLES[role];
                            // Type-safe assignment to ExtendedWidgetData
                            extendedData[targetField as keyof ExtendedWidgetData] = state._id;

                            await oidChangeHandlerAsync(['boolean', 'number', 'string', 'mixed'], targetField)(
                                field,
                                data,
                                changeData,
                                socket,
                            );

                            if (targetField === 'colorLightTemperatureOid') {
                                if (!extendedData.colorLightCtMin && state.common.min) {
                                    extendedData.colorLightCtMin = state.common.min;
                                }
                                if (!extendedData.colorLightCtMax && state.common.max) {
                                    extendedData.colorLightCtMax = state.common.max;
                                }
                            }

                            if (targetField === 'colorLightSwitchOid') {
                                seedSwitchRows(data);
                            }
                        }
                    }),
                );
                changeData(data);
            }
        }
    }
};

const light2Fields = (): RxWidgetInfoAttributesField[] => [
    {
        type: 'custom',
        component: () => <CollectionDivider />,
    },
    {
        name: 'colorLightButton',
        label: 'color_light_button',
        type: 'checkbox',
        default: false,
    },
    {
        name: 'colorLightDelayLongPress',
        label: 'color_light_delay_long_press',
        type: 'number',
        default: 500,
        min: 0,
        max: 10000,
        step: 1,
        hidden: '!data.colorLightButton',
    },
    {
        name: 'colorLightModalWidth',
        label: 'color_light_modal_width',
        type: 'number',
        min: 0,
        max: 5000,
        step: 1,
        hidden: '!data.colorLightButton',
        tooltip: 'color_light_modal_width_tooltip',
    },
    {
        name: 'colorLightModalHeight',
        label: 'color_light_modal_height',
        type: 'number',
        default: 300,
        min: 0,
        max: 5000,
        step: 1,
        hidden: '!data.colorLightButton',
    },
    {
        type: 'custom',
        component: () => <CollectionDivider />,
    },
    {
        name: 'colorLightSliderWidth',
        label: 'color_light_slider_width',
        type: 'slider',
        min: 0,
        max: 10,
        default: 1,
        step: 0.1,
    },
    {
        name: 'colorLightBorderWidth',
        label: 'color_light_border_width',
        type: 'slider',
        min: 0,
        max: 100,
        default: 3,
        step: 1,
    },
    createPlainColorField({
        name: 'colorLightBorderColor',
        label: 'color_light_border_color',
    }),
    {
        name: 'colorLightPadding',
        type: 'number',
        label: 'color_light_padding',
        default: 1,
        step: 0.5,
        min: 0,
    },
    {
        type: 'custom',
        component: () => <CollectionDivider />,
    },
    {
        name: 'colorLightSwitchOid',
        type: 'id',
        label: 'color_light_switch_oid',
        onChange: loadStatesAsync,
    },
    {
        type: 'custom',
        component: () => <CollectionDivider />,
    },
    {
        name: 'colorLightUIComponent',
        type: 'select',
        label: 'color_light_ui_component',
        options: [
            { value: 'wheel', label: 'Wheel' },
            { value: 'box', label: 'Box' },
            { value: 'slider', label: 'Slider' },
        ],
        default: 'wheel',
        noTranslation: true,
        hidden: (data: WidgetData) =>
            (data as Partial<ExtendedWidgetData>).colorLightType === 'cct' ||
            (data as Partial<ExtendedWidgetData>).colorLightType === 'none',
    },
    {
        name: 'colorWheelLightness',
        label: 'color_wheel_lightness',
        type: 'checkbox',
        default: false,
        hidden: (data: WidgetData) =>
            (data as Partial<ExtendedWidgetData>).colorLightType === 'none' ||
            (data as Partial<ExtendedWidgetData>).colorLightType === 'cct' ||
            (data as Partial<ExtendedWidgetData>).colorLightUIComponent !== 'wheel',
    },
    {
        type: 'custom',
        component: () => <CollectionDivider />,
        hidden: (data: WidgetData) =>
            (data as Partial<ExtendedWidgetData>).colorLightType === 'cct' ||
            (data as Partial<ExtendedWidgetData>).colorLightType === 'none',
    },
    {
        name: 'colorLightType',
        type: 'select',
        label: 'color_light_type',
        options: [
            { value: 'none', label: 'none' },
            { value: 'cct', label: 'cct' },
            { value: 'rgb', label: 'rgb' },
            { value: 'rgbcct', label: 'rgb & cct' },
            { value: 'r/g/b', label: 'r/g/b' },
            { value: 'r/g/b/cct', label: 'r/g/b & cct' },
            { value: 'h/s/v', label: 'h/s/v' },
            { value: 'h/s/v/cct', label: 'h/s/v & cct' },
        ],
        default: 'none',
        noTranslation: true,
    },
    {
        type: 'custom',
        component: () => <CollectionDivider />,
        hidden: (data: WidgetData) => (data as Partial<ExtendedWidgetData>).colorLightType === 'none',
    },
    {
        name: 'colorLightTemperatureOid',
        type: 'id',
        label: 'color_light_temperature_oid',
        hidden: (data: WidgetData) =>
            !['cct', 'rgbcct', 'r/g/b/cct', 'h/s/v/cct'].includes(
                (data as Partial<ExtendedWidgetData>).colorLightType || '',
            ),
    },
    {
        name: 'colorLightCtMin',
        type: 'number',
        min: 500,
        max: 10000,
        default: 2000,
        label: 'color_light_ct_min',
        hidden: (data: WidgetData) =>
            !['cct', 'rgbcct', 'r/g/b/cct', 'h/s/v/cct'].includes(
                (data as Partial<ExtendedWidgetData>).colorLightType || '',
            ) || !(data as Partial<ExtendedWidgetData>).colorLightTemperatureOid,
    },
    {
        name: 'colorLightCtMax',
        type: 'number',
        min: 500,
        max: 10000,
        default: 6500,
        label: 'color_light_ct_max',
        hidden: (data: WidgetData) =>
            !['cct', 'rgbcct', 'r/g/b/cct', 'h/s/v/cct'].includes(
                (data as Partial<ExtendedWidgetData>).colorLightType || '',
            ) || !(data as Partial<ExtendedWidgetData>).colorLightTemperatureOid,
    },
    {
        type: 'custom',
        component: () => <CollectionDivider />,
        hidden: (data: WidgetData) =>
            !['cct', 'rgbcct', 'r/g/b/cct', 'h/s/v/cct'].includes(
                (data as Partial<ExtendedWidgetData>).colorLightType || '',
            ) || (data as Partial<ExtendedWidgetData>).colorLightType === 'none',
    },
    {
        name: 'colorLightRgbHexOid',
        type: 'id',
        label: 'color_light_rgb_hex_oid',
        hidden: (data: WidgetData) =>
            !['rgb', 'rgbcct'].includes((data as Partial<ExtendedWidgetData>).colorLightType || ''),
    },
    {
        name: 'colorLightRedOid',
        type: 'id',
        label: 'color_light_red_oid',
        hidden: (data: WidgetData) =>
            !['r/g/b', 'r/g/b/cct'].includes((data as Partial<ExtendedWidgetData>).colorLightType || ''),
    },
    {
        name: 'colorLightGreenOid',
        type: 'id',
        label: 'color_light_green_oid',
        hidden: (data: WidgetData) =>
            !['r/g/b', 'r/g/b/cct'].includes((data as Partial<ExtendedWidgetData>).colorLightType || ''),
    },
    {
        name: 'colorLightBlueOid',
        type: 'id',
        label: 'color_light_blue_oid',
        hidden: (data: WidgetData) =>
            !['r/g/b', 'r/g/b/cct'].includes((data as Partial<ExtendedWidgetData>).colorLightType || ''),
    },
    {
        name: 'colorLightHueOid',
        type: 'id',
        label: 'color_light_hue_oid',
        hidden: (data: WidgetData) =>
            !['h/s/v', 'h/s/v/cct'].includes((data as Partial<ExtendedWidgetData>).colorLightType || ''),
    },
    {
        name: 'colorLightSaturationOid',
        type: 'id',
        label: 'color_light_saturation_oid',
        hidden: (data: WidgetData) =>
            !['h/s/v', 'h/s/v/cct'].includes((data as Partial<ExtendedWidgetData>).colorLightType || ''),
    },
    {
        name: 'colorLightBrightnessOid',
        type: 'id',
        label: 'color_light_brightness_oid',
        hidden: (data: WidgetData) =>
            !['cct', 'h/s/v', 'h/s/v/cct'].includes((data as Partial<ExtendedWidgetData>).colorLightType || ''),
    },
];

export default light2Fields;
