import CollectionDivider from "../components/CollectionDivider";

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
		name: "colorLightSwitchOid",
		type: "id",
		label: "color_light_switch_oid",
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
		name: "colorLightOnlySlider",
		label: "color_light_only_slider",
		type: "checkbox",
		default: false,
	},
	{
		name: "colorLightRgbHexOid",
		type: "id",
		label: "color_light_rgb_hex_oid",
		hidden: (data) => data.colorLightType !== "rgb",
	},
	{
		name: "colorLightRedOid",
		type: "id",
		label: "color_light_red_oid",
		hidden: (data) => data.colorLightType !== "r/g/b",
	},
	{
		name: "colorLightGreenOid",
		type: "id",
		label: "color_light_green_oid",
		hidden: (data) => data.colorLightType !== "r/g/b",
	},
	{
		name: "colorLightBlueOid",
		type: "id",
		label: "color_light_blue_oid",
		hidden: (data) => data.colorLightType !== "r/g/b",
	},
	{
		name: "colorLightHsvOid",
		type: "id",
		label: "color_light_hsv_oid",
		hidden: (data) => data.colorLightType !== "hsv",
	},
	{
		name: "colorLightHueOid",
		type: "id",
		label: "color_light_hue_oid",
		hidden: (data) => data.colorLightType !== "h/s/v",
	},
	{
		name: "colorLightSaturationOid",
		type: "id",
		label: "color_light_saturation_oid",
		hidden: (data) => data.colorLightType !== "h/s/v",
	},
	{
		name: "colorLightBrightnessOid",
		type: "id",
		label: "color_light_brightness_oid",
		hidden: (data) => data.colorLightType !== "h/s/v",
	},
];

export default dialogFields;
