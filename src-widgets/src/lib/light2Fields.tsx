/**
 * vis-2 widget editor field generator for Light2 (color light) options.
 *
 * @module lib/light2Fields
 * @remarks
 * Light2 can auto-detect related RGB/CCT states from a selected "switch" object and pre-fill additional OID
 * fields in the widget configuration. A channel's own field runs the shared OID handler: a Hilfs-OID whose
 * pick stores or drops its object and nothing else (ADR-0096, ADR-0111 Nr. 1).
 *
 * Types: import from `vis-2-widgets-collection/types/field-definitions/light2-fields`.
 */
import CollectionDivider from '../components/CollectionDivider';
import { createIdField, oidChangeHandlerAsync } from './commonObjectFields';
import { createColorField } from './fieldFactories';
import { hasView, isChannelFieldVisible, viewsOf } from './light2Channels';
import { COLOR_LIGHT_MODAL_HEIGHT_DEFAULT, COLOR_LIGHT_SLIDER_WIDTH_DEFAULT } from './light2Defaults';
import { light2BorderColorContract } from './light2ColorContract';
import { stateEditorSpec } from './stateEditorConfig';
import { applyStateRowOperation, assignStateRowPatch, stateRowCount } from './stateRows';

import type { Connection } from '@iobroker/gui-components';
import type { RxWidgetInfoAttributesField, WidgetData } from '@iobroker/types-vis-2';
import type { ExtendedField } from '../types/field-definitions/extended-field';
import type { Light2FieldsRxData } from '../types/field-definitions/light2-fields';
import type { Light2ChannelField } from './light2Channels';

const PowerSettingsNewIcon =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMyAzaC0ydjEwaDJWM3ptNC44MyAyLjE3bC0xLjQyIDEuNDJBNi45MiA2LjkyIDAgMCAxIDE5IDEyYzAgMy44Ny0zLjEzIDctNyA3QTYuOTk1IDYuOTk1IDAgMCAxIDcuNTggNi41OEw2LjE3IDUuMTdBOC45MzIgOC45MzIgMCAwIDAgMyAxMmE5IDkgMCAwIDAgMTggMGMwLTIuNzQtMS4yMy01LjE4LTMuMTctNi44M3oiLz48L3N2Zz4=';

/** The Lichttyp of the raw widget data vis-2 hands to the `hidden` rules. */
const lightTypeOf = (data: WidgetData): Light2FieldsRxData['colorLightType'] =>
    (data as Light2FieldsRxData).colorLightType;

/** The Zustandszeilen of the button mode: they belong to the switch OID, always two (ADR-0104). */
const SWITCH_ROWS = stateEditorSpec({ oidProperty: 'colorLightSwitchOid', fixedRows: true }).config;

/** The look a seeded switch row gets: the power icon, red for ON, green for OFF. */
const SWITCH_ROW_LOOK = { iconSmall: PowerSettingsNewIcon, iconSize: 100 };

/**
 * Seeds the two rows of the button mode, `true` and `false` — fixed; the switch's other
 * `common.states` never become rows.
 *
 * @param data The widget data, changed in place.
 * @remarks
 * Supplements like the main-OID pick (ADR-0104 §6, Nachtrag Ticket 02): rows already carrying
 * `true`/`false` keep order, alias and styles; only a missing row is appended, with the power
 * icon and the alias of `common.states[true|false]` (else TRUE/FALSE, Nachtrag Review). The
 * widget icon is hidden (`iconSize` 0) only when the rows are seeded from none.
 */
const seedSwitchRows = (data: WidgetData): void => {
    // Fixed rows: the source is always true/false (alias from the switch's common.states[true|
    // false], else TRUE/FALSE). The rows are the authored ones — counted with the switch's
    // common.states, those would stand in for the rows of a widget that has none yet.
    const judged = { ...data, ignoreCommonStates: false };
    const before = stateRowCount(judged, SWITCH_ROWS);
    assignStateRowPatch(data, applyStateRowOperation(judged, { kind: 'supplement' }, SWITCH_ROWS));

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
 * Mapping of ioBroker state roles to the Light2 channel OID field they fill. The switch itself is
 * never detected: it is the user's pick that starts the detection.
 */
const RGB_ROLES: Record<string, Light2ChannelField> = {
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

/** The JS types a Light2 OID may have — the switch and every channel state. */
const LIGHT2_OID_TYPES = ['boolean', 'number', 'string', 'mixed'] as const;

/** A channel field may be filled by the detection only while it holds no pick of the user. */
const isUnset = (value: unknown): boolean => !value || value === 'nothing_selected';

/**
 * `onChange` handler for the Light2 switch OID field.
 *
 * @remarks
 * Stores the picked switch's object and seeds the two rows of the button mode — whatever role the
 * switch has. Then scans the switch's channel and fills each channel OID field that is still unset
 * from the state with the matching ioBroker role. A pick never replaces the picked switch nor a
 * channel OID the user already chose (ADR-0104 §6, Nachtrag Fix Light2-Kanalerkennung): picking
 * another lamp leaves set channel fields alone, the user empties them to have them detected again.
 * Emptying the switch, or a pick without a usable object (no such id, a type no Light2 OID may have,
 * a socket error), drops its object and keeps its rows: the decision is the handler's result, the
 * object it stored or dropped (ADR-0111 Nr. 3).
 */
const loadStatesAsync = async (
    field: RxWidgetInfoAttributesField,
    data: WidgetData,
    changeData: (newData: WidgetData) => void,
    socket: Connection,
): Promise<void> => {
    const fieldName = field.name;
    if (!fieldName) {
        return;
    }
    await oidChangeHandlerAsync(LIGHT2_OID_TYPES, fieldName)(field, data, changeData, socket);
    if (!data[`${fieldName}Object`]) {
        // The switch behaves like every auxiliary ID (ADR-0096) — the shared OID handler dropped
        // its object; the rows stay, the values group asks for an OID.
        changeData(data);
        return;
    }

    seedSwitchRows(data);

    const id = (data[fieldName] as string).split('.');
    id.pop();
    const states = await socket.getObjectView(`${id.join('.')}.`, `${id.join('.')}.\u9999`, 'state');

    if (states) {
        const channelData = data as Light2FieldsRxData;

        await Promise.all(
            Object.values(states).map(async state => {
                const role = state.common.role;
                const targetField = role ? RGB_ROLES[role] : undefined;

                // Checked and claimed before the first await: of two states with the same
                // target (level.dimmer, level.brightness) the first one wins.
                if (!targetField || !isUnset(data[targetField])) {
                    return;
                }
                // A cast, not a check: the raw widget data written through its Light2 field view.
                channelData[targetField] = state._id;

                await oidChangeHandlerAsync(LIGHT2_OID_TYPES, targetField)(field, data, changeData, socket);

                // A newly detected temperature brings its CT range where it declares one: it
                // replaces the stored range, which vis-2 already filled with the schema defaults
                // 2000/6500 when the widget was created (ADR-0104, Nachtrag 2026-11-07).
                if (targetField === 'colorLightTemperatureOid') {
                    if (state.common.min) {
                        data.colorLightCtMin = state.common.min;
                    }
                    if (state.common.max) {
                        data.colorLightCtMax = state.common.max;
                    }
                }
            }),
        );
    }
    changeData(data);
};

const light2Fields = (): (RxWidgetInfoAttributesField | ExtendedField)[] => [
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
        // Emptied ('') like 0: every press counts as long, as stored lamps always read it.
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
        default: COLOR_LIGHT_MODAL_HEIGHT_DEFAULT,
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
        default: COLOR_LIGHT_SLIDER_WIDTH_DEFAULT,
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
    // Field-Vertrag (ADR-0102 Nachtrag 2026-11-07): the swatch shows the primary the empty border draws.
    createColorField({
        ...light2BorderColorContract,
        label: 'color_light_border_color',
        noGradient: true,
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
        ...createIdField('colorLightSwitchOid', LIGHT2_OID_TYPES),
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
        hidden: (data: WidgetData) => !hasView(lightTypeOf(data), 'color'),
    },
    {
        name: 'colorWheelLightness',
        label: 'color_wheel_lightness',
        type: 'checkbox',
        default: false,
        hidden: (data: WidgetData) =>
            !hasView(lightTypeOf(data), 'color') || (data as Light2FieldsRxData).colorLightUIComponent !== 'wheel',
    },
    {
        type: 'custom',
        component: () => <CollectionDivider />,
        hidden: (data: WidgetData) => !hasView(lightTypeOf(data), 'color'),
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
        hidden: (data: WidgetData) => viewsOf(lightTypeOf(data)).length === 0,
    },
    {
        ...createIdField('colorLightTemperatureOid', LIGHT2_OID_TYPES),
        label: 'color_light_temperature_oid',
        hidden: (data: WidgetData) => !isChannelFieldVisible(lightTypeOf(data), 'colorLightTemperatureOid'),
    },
    {
        name: 'colorLightCtMin',
        type: 'number',
        min: 500,
        max: 10000,
        default: 2000,
        // An emptied bound draws the Kelvin slider over the default range, not over 0.
        emptiedReadsUnset: true,
        label: 'color_light_ct_min',
        hidden: (data: WidgetData) =>
            !isChannelFieldVisible(lightTypeOf(data), 'colorLightTemperatureOid') ||
            !(data as Light2FieldsRxData).colorLightTemperatureOid,
    },
    {
        name: 'colorLightCtMax',
        type: 'number',
        min: 500,
        max: 10000,
        default: 6500,
        emptiedReadsUnset: true,
        label: 'color_light_ct_max',
        hidden: (data: WidgetData) =>
            !isChannelFieldVisible(lightTypeOf(data), 'colorLightTemperatureOid') ||
            !(data as Light2FieldsRxData).colorLightTemperatureOid,
    },
    {
        type: 'custom',
        component: () => <CollectionDivider />,
        hidden: (data: WidgetData) => !hasView(lightTypeOf(data), 'cct'),
    },
    {
        ...createIdField('colorLightRgbHexOid', LIGHT2_OID_TYPES),
        label: 'color_light_rgb_hex_oid',
        hidden: (data: WidgetData) => !isChannelFieldVisible(lightTypeOf(data), 'colorLightRgbHexOid'),
    },
    {
        ...createIdField('colorLightRedOid', LIGHT2_OID_TYPES),
        label: 'color_light_red_oid',
        hidden: (data: WidgetData) => !isChannelFieldVisible(lightTypeOf(data), 'colorLightRedOid'),
    },
    {
        ...createIdField('colorLightGreenOid', LIGHT2_OID_TYPES),
        label: 'color_light_green_oid',
        hidden: (data: WidgetData) => !isChannelFieldVisible(lightTypeOf(data), 'colorLightGreenOid'),
    },
    {
        ...createIdField('colorLightBlueOid', LIGHT2_OID_TYPES),
        label: 'color_light_blue_oid',
        hidden: (data: WidgetData) => !isChannelFieldVisible(lightTypeOf(data), 'colorLightBlueOid'),
    },
    {
        ...createIdField('colorLightHueOid', LIGHT2_OID_TYPES),
        label: 'color_light_hue_oid',
        hidden: (data: WidgetData) => !isChannelFieldVisible(lightTypeOf(data), 'colorLightHueOid'),
    },
    {
        ...createIdField('colorLightSaturationOid', LIGHT2_OID_TYPES),
        label: 'color_light_saturation_oid',
        hidden: (data: WidgetData) => !isChannelFieldVisible(lightTypeOf(data), 'colorLightSaturationOid'),
    },
    {
        ...createIdField('colorLightBrightnessOid', LIGHT2_OID_TYPES),
        label: 'color_light_brightness_oid',
        hidden: (data: WidgetData) => !isChannelFieldVisible(lightTypeOf(data), 'colorLightBrightnessOid'),
    },
];

export default light2Fields;
