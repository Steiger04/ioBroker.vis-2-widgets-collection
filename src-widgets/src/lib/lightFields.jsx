import CollectionDivider from "../components/CollectionDivider";

const dialogFields = () => [
	{
		label: "",
		type: "custom",
		component: () => <CollectionDivider />,
	},
	{
		name: "colorLightRgbHexOid",
		type: "id",
		label: "color_light_rgb_hex_oid",
		// onChange: oidChangeHandlerAsync(allowedTypes),
	},
	{
		name: "colorLightPadding",
		type: "number",
		label: "color_light_padding",
		default: 2,
		step: 1,
		min: 0,
	},
];

export default dialogFields;
