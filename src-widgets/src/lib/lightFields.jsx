import { oidChangeHandlerAsync } from './commonObjectFields';
import CollectionDivider from '../components/CollectionDivider';

const PowerSettingsNewIcon =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMyAzaC0ydjEwaDJWM3ptNC44MyAyLjE3bC0xLjQyIDEuNDJBNi45MiA2LjkyIDAgMCAxIDE5IDEyYzAgMy44Ny0zLjEzIDctNyA3QTYuOTk1IDYuOTk1IDAgMCAxIDcuNTggNi41OEw2LjE3IDUuMTdBOC45MzIgOC45MzIgMCAwIDAgMyAxMmE5IDkgMCAwIDAgMTggMGMwLTIuNzQtMS4yMy01LjE4LTMuMTctNi44M3oiLz48L3N2Zz4=';

const RGB_ROLES = {
    'switch.light': 'colorLightSwitchOid',
    // switch: "colorLightSwitchOid",
    'level.color.rgb': 'colorLightRgbHexOid',

    'level.color.red': 'colorLightRedOid',
    'level.color.green': 'colorLightGreenOid',
    'level.color.blue': 'colorLightBlueOid',

    'level.color.hue': 'colorLightHueOid',
    'level.color.saturation': 'colorLightSaturationOid',
    'level.brightness': 'colorLightBrightnessOid',
    'level.dimmer': 'colorLightBrightnessOid',

    'level.color.luminance': 'luminance',
    'level.color.temperature': 'colorLightTemperatureOid',
    'level.color.white': 'white',
};

const loadStatesAsync = async (field, data, changeData, socket) => {
    console.log('loadStatesAsync -> field', field);

    if (data[field.name]) {
        const object = await socket.getObject(data[field.name]);

        if (object && object.common) {
            const id = data[field.name].split('.');
            id.pop();
            const states = await socket.getObjectView(`${id.join('.')}.`, `${id.join('.')}.\u9999`, 'state');

            if (states) {
                Object.values(states).forEach(async state => {
                    const role = state.common.role;

                    if (
                        role &&
                        RGB_ROLES[role] &&
                        (!data[role] || data[role] === 'nothing_selected') &&
                        field !== role
                    ) {
                        data[RGB_ROLES[role]] = state._id;
                        await oidChangeHandlerAsync(['boolean', 'number', 'string', 'mixed'], RGB_ROLES[role])(
                            field,
                            data,
                            changeData,
                            socket,
                        );

                        if (RGB_ROLES[role] === 'color_temperature') {
                            if (!data.ct_min && state.common.min) {
                                data.ct_min = state.common.min;
                            }
                            if (!data.ct_max && state.common.max) {
                                data.ct_max = state.common.max;
                            }
                        }

                        if (RGB_ROLES[role] === 'colorLightSwitchOid') {
                            // data.oidType = 'boolean';

                            data.values_count = 2;
                            data.value1 = true;
                            data.alias1 = 'TRUE';
                            data.value2 = false;
                            data.alias2 = 'FALSE';

                            data.iconSize = 0;
                            data.iconSmall1 = PowerSettingsNewIcon;
                            data.iconColor1 = 'red';
                            data.iconSize1 = 100;
                            data.iconSmall2 = PowerSettingsNewIcon;
                            data.iconColor2 = 'green';
                            data.iconSize2 = 100;
                        }
                    }
                });
                changeData(data);
            }
        }
    }
};

const dialogFields = () => [
    {
        label: '',
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
        label: '',
        type: 'custom',
        component: () => <CollectionDivider />,
    },
    {
        name: 'colorLightSliderWidth',
        label: 'color_light_slider_width',
        type: 'slider',
        min: 0,
        max: 1,
        default: 0.15,
        step: 0.05,
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
    {
        name: 'colorLightBorderColor',
        label: 'color_light_border_color',
        type: 'color',
    },
    {
        name: 'colorLightPadding',
        type: 'number',
        label: 'color_light_padding',
        default: 2,
        step: 1,
        min: 0,
    },
    {
        label: '',
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
        label: '',
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
        hidden: data => data.colorLightType === 'cct' || data.colorLightType === 'none',
    },
    {
        name: 'colorWheelLightness',
        label: 'color_wheel_lightness',
        type: 'checkbox',
        default: false,
        hidden: data =>
            data.colorLightType === 'none' || data.colorLightType === 'cct' || data.colorLightUIComponent !== 'wheel',
    },
    {
        label: '',
        type: 'custom',
        component: () => <CollectionDivider />,
        hidden: data => data.colorLightType === 'cct' || data.colorLightType === 'none',
    },
    {
        name: 'colorLightType',
        type: 'select',
        label: 'color_light_type',
        options: [
            { value: 'none', label: 'nothing_selected' },
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
        label: '',
        type: 'custom',
        component: () => <CollectionDivider />,
        hidden: data => data.colorLightType === 'none',
    },
    {
        name: 'colorLightTemperatureOid',
        type: 'id',
        label: 'color_light_temperature_oid',
        hidden: data => !['cct', 'rgbcct', 'r/g/b/cct', 'h/s/v/cct'].includes(data.colorLightType),
        // onChange: loadStatesAsync,
    },
    {
        name: 'colorLightCtMin',
        type: 'number',
        min: 500,
        max: 10000,
        default: 2000,
        label: 'color_light_ct_min',
        hidden: data =>
            !['cct', 'rgbcct', 'r/g/b/cct', 'h/s/v/cct'].includes(data.colorLightType) ||
            !data.colorLightTemperatureOid,
    },
    {
        name: 'colorLightCtMax',
        type: 'number',
        min: 500,
        max: 10000,
        default: 6500,
        label: 'color_light_ct_max',
        hidden: data =>
            !['cct', 'rgbcct', 'r/g/b/cct', 'h/s/v/cct'].includes(data.colorLightType) ||
            !data.colorLightTemperatureOid,
    },
    {
        label: '',
        type: 'custom',
        component: () => <CollectionDivider />,
        hidden: data =>
            !['cct', 'rgbcct', 'r/g/b/cct', 'h/s/v/cct'].includes(data.colorLightType) ||
            data.colorLightType === 'none',
    },
    {
        name: 'colorLightRgbHexOid',
        type: 'id',
        label: 'color_light_rgb_hex_oid',
        hidden: data => !['rgb', 'rgbcct'].includes(data.colorLightType),
        // onChange: loadStatesAsync,
    },
    {
        name: 'colorLightRedOid',
        type: 'id',
        label: 'color_light_red_oid',
        hidden: data => !['r/g/b', 'r/g/b/cct'].includes(data.colorLightType),
        // onChange: loadStatesAsync,
    },
    {
        name: 'colorLightGreenOid',
        type: 'id',
        label: 'color_light_green_oid',
        hidden: data => !['r/g/b', 'r/g/b/cct'].includes(data.colorLightType),
        // onChange: loadStatesAsync,
    },
    {
        name: 'colorLightBlueOid',
        type: 'id',
        label: 'color_light_blue_oid',
        hidden: data => !['r/g/b', 'r/g/b/cct'].includes(data.colorLightType),
        // onChange: loadStatesAsync,
    },
    {
        name: 'colorLightHueOid',
        type: 'id',
        label: 'color_light_hue_oid',
        hidden: data => !['h/s/v', 'h/s/v/cct'].includes(data.colorLightType),
        // onChange: loadStatesAsync,
    },
    {
        name: 'colorLightSaturationOid',
        type: 'id',
        label: 'color_light_saturation_oid',
        hidden: data => !['h/s/v', 'h/s/v/cct'].includes(data.colorLightType),
        // onChange: loadStatesAsync,
    },
    {
        name: 'colorLightBrightnessOid',
        type: 'id',
        label: 'color_light_brightness_oid',
        hidden: data => !['cct', 'h/s/v', 'h/s/v/cct'].includes(data.colorLightType),
        // onChange: loadStatesAsync,
    },
];

export default dialogFields;
