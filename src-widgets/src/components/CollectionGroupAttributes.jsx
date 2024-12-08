import CollectionDivider from "./CollectionDivider";

function camelCase(str) {
	// converting all characters to lowercase
	const ans = str.toLowerCase();

	// Returning string to camelcase
	return ans
		.split(" ")
		.reduce((s, c) => s + (c.charAt(0).toUpperCase() + c.slice(1)));
}

export default function CollectionGroupAttributes(groupName) {
	const nameIcon =
		groupName === "values" ? "icon" : camelCase(`icon ${groupName}`);
	const nameIconSize =
		groupName === "values" ? "iconSize" : camelCase(`icon size ${groupName}`);
	const nameIconColor =
		groupName === "values" ? "iconColor" : camelCase(`icon color ${groupName}`);
	const nameIconHover =
		groupName === "values" ? "iconHover" : camelCase(`icon hover ${groupName}`);
	const nameIconXOffset =
		groupName === "values"
			? "iconXOffset"
			: camelCase(`icon x offset ${groupName}`);
	const nameIconYOffset =
		groupName === "values"
			? "iconYOffset"
			: camelCase(`icon y offset ${groupName}`);
	const nameTextColor =
		groupName === "values" ? "textColor" : camelCase(`text color ${groupName}`);
	const nameHeader =
		groupName === "values" ? "header" : camelCase(`header ${groupName}`);
	const nameHeaderSize =
		groupName === "values"
			? "headerSize"
			: camelCase(`header size ${groupName}`);
	const nameValue =
		groupName === "values" ? "value" : camelCase(`value ${groupName}`);
	const nameValueSize =
		groupName === "values" ? "valueSize" : camelCase(`value size ${groupName}`);
	const nameBackgroundColor =
		groupName === "values"
			? "backgroundColor"
			: camelCase(`background color ${groupName}`);
	const nameBackground =
		groupName === "values"
			? "background"
			: camelCase(`background ${groupName}`);
	const nameGroup = groupName === "values" ? "values" : `${groupName}`;
	const nameGroupLabel =
		groupName === "values" ? "values" : `group_${groupName}`;

	let group;
	if (groupName === "values") {
		group = {
			name: nameGroup,
			label: nameGroupLabel,
			indexFrom: 1,
			indexTo: "values_count",
		};
	} else {
		group = {
			name: nameGroup,
			label: nameGroupLabel,
		};
	}

	return {
		...group,
		fields: [
			{
				name: nameIcon,
				label: "icon",
				// type: "icon64",
				type: "image",
				hidden: "data.noIcon",
			},
			{
				name: nameIconSize,
				label: "icon_size",
				type: "slider",
				min: 1,
				max: 200,
				default: 100,
				step: 1,
				hidden: (data, i) =>
					(i === undefined ? !data[`${nameIcon}`] : !data[`${nameIcon}${i}`]) ||
					!!data.noIcon,
			},
			{
				name: nameIconColor,
				label: "icon_color",
				type: "color",
				hidden: (data, i) =>
					(i === undefined ? !data[`${nameIcon}`] : !data[`${nameIcon}${i}`]) ||
					!!data.noIcon,
			},
			{
				name: nameIconHover,
				label: "icon_hover",
				type: "slider",
				min: 0,
				max: 300,
				default: 200,
				step: 1,
				hidden: (data, i) =>
					(i === undefined ? !data[`${nameIcon}`] : !data[`${nameIcon}${i}`]) ||
					!!data.noIcon,
			},
			{
				name: nameIconXOffset,
				label: "icon_x_offset",
				type: "text",
				default: "0px",
				hidden: (data, i) =>
					(i === undefined ? !data[`${nameIcon}`] : !data[`${nameIcon}${i}`]) ||
					!!data.noIcon,
			},
			{
				name: nameIconYOffset,
				label: "icon_y_offset",
				type: "text",
				default: "0px",
				hidden: (data, i) =>
					(i === undefined ? !data[`${nameIcon}`] : !data[`${nameIcon}${i}`]) ||
					!!data.noIcon,
			},
			{
				label: "",
				type: "custom",
				component: () => <CollectionDivider />,
			},
			{
				name: nameTextColor,
				label: "text_color",
				type: "color",
			},
			{
				label: "",
				type: "custom",
				component: () => <CollectionDivider />,
			},
			{
				name: nameHeader,
				label: "header",
				type: "text",
				default: "",
			},
			{
				name: nameHeaderSize,
				label: "header_size",
				type: "slider",
				min: 0,
				max: 500,
				default: 100,
				step: 1,
			},
			{
				label: "",
				type: "custom",
				component: () => <CollectionDivider />,
			},
			{
				name: nameValue,
				label: "value",
				type: "text",
				default: "",
			},
			{
				name: nameValueSize,
				label: "value_size",
				type: "slider",
				min: 0,
				max: 500,
				default: 100,
				step: 1,
			},
			{
				label: "",
				type: "custom",
				component: () => <CollectionDivider />,
			},
			{
				name: nameBackgroundColor,
				label: "background_color",
				type: "color",
			},
			{
				name: nameBackground,
				label: "background",
				type: "text",
				default: "",
			},
		],
	};
}
