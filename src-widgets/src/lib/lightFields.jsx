import CollectionDivider from "../components/CollectionDivider";

const RGB_ROLES = {
	"switch.light": "colorLightSwitchOid",
	// switch: "colorLightSwitchOid",
	"level.color.rgb": "colorLightRgbHexOid",

	"level.color.red": "colorLightRedOid",
	"level.color.green": "colorLightGreenOid",
	"level.color.blue": "colorLightBlueOid",

	"level.color.hsv": "colorLightHsvOid",

	"level.color.hue": "colorLightHueOid",
	"level.color.saturation": "colorLightSaturationOid",
	"level.brightness": "colorLightBrightnessOid",
	"level.dimmer": "colorLightBrightnessOid",

	"level.color.luminance": "luminance",
	"level.color.temperature": "color_temperature",
	"level.color.white": "white",
};

const loadStates = async (field, data, changeData, socket) => {
	console.log("loadStates - field", field);
	console.log("loadStates - data[field.name]", data[field.name]);

	if (data[field.name]) {
		const object = await socket.getObject(data[field.name]);
		console.log("loadStates - object", object);

		if (object && object.common) {
			const id = data[field.name].split(".");
			id.pop();
			const states = await socket.getObjectView(
				`${id.join(".")}.`,
				`${id.join(".")}.\u9999`,
				"state",
			);
			console.log("loadStates - states", states);

			if (states) {
				Object.values(states).forEach((state) => {
					const role = state.common.role;
					if (
						role &&
						RGB_ROLES[role] &&
						(!data[role] || data[role] === "nothing_selected") &&
						field !== role
					) {
						data[RGB_ROLES[role]] = state._id;
						if (RGB_ROLES[role] === "color_temperature") {
							if (!data.ct_min && state.common.min) {
								data.ct_min = state.common.min;
							}
							if (!data.ct_max && state.common.max) {
								data.ct_max = state.common.max;
							}
						}
					}
				});
				console.log("data before changeData", data);
				changeData(data);
			}
		}
	}
};

const dialogFields = () => [
	{
		label: "",
		type: "custom",
		component: () => <CollectionDivider />,
	},
	{
		name: "colorLightSliderWidth",
		label: "color_light_slider_width",
		type: "slider",
		min: 0,
		max: 1,
		default: 0.15,
		step: 0.05,
	},
	{
		name: "colorLightBorderWidth",
		label: "color_light_border_width",
		type: "slider",
		min: 0,
		max: 100,
		default: 3,
		step: 1,
	},
	{
		name: "colorLightBorderColor",
		label: "color_light_border_color",
		type: "color",
	},
	{
		name: "colorLightPadding",
		type: "number",
		label: "color_light_padding",
		default: 2,
		step: 1,
		min: 0,
	},
	{
		label: "",
		type: "custom",
		component: () => <CollectionDivider />,
	},
	{
		name: "colorLightUIComponent",
		type: "select",
		label: "color_light_ui_component",
		options: [
			{ value: "wheel", label: "Wheel" },
			{ value: "box", label: "Box" },
			{ value: "slider", label: "Slider" },
		],
		default: "wheel",
		noTranslation: true,
		hidden: (data) =>
			data.colorLightType === "cct" || data.colorLightType === "none",
	},
	{
		label: "",
		type: "custom",
		component: () => <CollectionDivider />,
	},
	{
		name: "colorLightSwitchOid",
		type: "id",
		label: "color_light_switch_oid",
		onChange: loadStates,
	},
	{
		label: "",
		type: "custom",
		component: () => <CollectionDivider />,
	},
	{
		name: "colorLightType",
		type: "select",
		label: "color_light_type",
		options: [
			{ value: "none", label: "nothing_selected" },
			{ value: "cct", label: "cct" },
			{ value: "rgb", label: "rgb" },
			{ value: "r/g/b", label: "r/g/b" },
			{ value: "hsv", label: "hsv" },
			{ value: "h/s/v", label: "h/s/v" },
		],
		default: "none",
		noTranslation: true,
	},
	{
		label: "",
		type: "custom",
		component: () => <CollectionDivider />,
	},
	{
		name: "colorLightRgbHexOid",
		type: "id",
		label: "color_light_rgb_hex_oid",
		hidden: (data) => data.colorLightType !== "rgb",
		onChange: loadStates,
	},
	{
		name: "colorLightRedOid",
		type: "id",
		label: "color_light_red_oid",
		hidden: (data) => data.colorLightType !== "r/g/b",
		onChange: loadStates,
	},
	{
		name: "colorLightGreenOid",
		type: "id",
		label: "color_light_green_oid",
		hidden: (data) => data.colorLightType !== "r/g/b",
		onChange: loadStates,
	},
	{
		name: "colorLightBlueOid",
		type: "id",
		label: "color_light_blue_oid",
		hidden: (data) => data.colorLightType !== "r/g/b",
		onChange: loadStates,
	},
	{
		name: "colorLightHsvOid",
		type: "id",
		label: "color_light_hsv_oid",
		hidden: (data) => data.colorLightType !== "hsv",
		onChange: loadStates,
	},
	{
		name: "colorLightHueOid",
		type: "id",
		label: "color_light_hue_oid",
		hidden: (data) => data.colorLightType !== "h/s/v",
		onChange: loadStates,
	},
	{
		name: "colorLightSaturationOid",
		type: "id",
		label: "color_light_saturation_oid",
		hidden: (data) => data.colorLightType !== "h/s/v",
		onChange: loadStates,
	},
	{
		name: "colorLightBrightnessOid",
		type: "id",
		label: "color_light_brightness_oid",
		hidden: (data) => data.colorLightType !== "h/s/v",
		onChange: loadStates,
	},
];

export default dialogFields;
