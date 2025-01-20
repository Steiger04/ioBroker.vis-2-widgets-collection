import CollectionDivider from "./CollectionDivider";
import CollectionGradientColorPicker from "./CollectionGradientColorPicker";

function camelCase(str) {
	// converting all characters to lowercase
	const ans = str.toLowerCase();

	// Returning string to camelcase
	return ans
		.split(" ")
		.reduce((s, c) => s + (c.charAt(0).toUpperCase() + c.slice(1)));
}

export default function CollectionGroupAttributes(groupName) {
	const nameIconSmall =
		groupName === "values" ? "iconSmall" : camelCase(`icon small ${groupName}`);
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
	const nameAlias =
		groupName === "values" ? "alias" : camelCase(`alias ${groupName}`);
	const nameValue =
		groupName === "values" ? "value" : camelCase(`value ${groupName}`);
	const nameValueSize =
		groupName === "values" ? "valueSize" : camelCase(`value size ${groupName}`);
	const nameFooter =
		groupName === "values" ? "footer" : camelCase(`footer ${groupName}`);
	const nameFooterSize =
		groupName === "values"
			? "footerSize"
			: camelCase(`footer size ${groupName}`);
	const nameBackgroundColor =
		groupName === "values"
			? "backgroundColor"
			: camelCase(`background color ${groupName}`);
	const nameBackground =
		groupName === "values"
			? "background"
			: camelCase(`background ${groupName}`);
	const nameFrameBackgroundColor =
		groupName === "values"
			? "frameBackgroundColor"
			: camelCase(`frame background color ${groupName}`);
	const nameFrameBackground =
		groupName === "values"
			? "frameBackground"
			: camelCase(`frame background ${groupName}`);
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
			//  indexTo: 3,
		};
	} else {
		group = {
			name: nameGroup,
			label: nameGroupLabel,
			/* hidden: (data) => {
				console.log("static data", data);
				return (
					data.oidType === undefined ||
					(data.oidType !== "boolean" &&
						(nameGroup === "on" || nameGroup === "off")) ||
					(data.oidType === "boolean" && nameGroup === "active")
				);
			}, */
		};
	}

	return {
		...group,
		fields: [
			{
				label: "",
				type: "custom",
				component: () => <CollectionDivider dividerText="icon" />,
				hidden: "data.noIcon",
			},
			{
				name: nameIconSmall,
				label: "small_icon",
				type: "icon64",
				hidden: (data, i) =>
					data.noIcon || data[`${nameIcon}${i === undefined ? "" : i}`],
			},
			{
				name: nameIcon,
				label: "icon",
				type: "image",
				hidden: (data, i) =>
					data.noIcon || data[`${nameIconSmall}${i === undefined ? "" : i}`],
			},
			{
				name: nameIconSize,
				label: "icon_size",
				type: "slider",
				min: 1,
				max: 500,
				// default: 0,
				step: 1,
				hidden: "data.noIcon",
				/* hidden: (data, i) =>
					(i === undefined ? !data[`${nameIcon}`] : !data[`${nameIcon}${i}`]) ||
					!!data.noIcon, */
			},
			{
				name: nameIconColor,
				label: "icon_color",
				type: "color",
				hidden: "data.noIcon",
				/* hidden: (data, i) =>
					(i === undefined ? !data[`${nameIcon}`] : !data[`${nameIcon}${i}`]) ||
					!!data.noIcon, */
			},
			{
				name: nameIconHover,
				label: "icon_hover",
				type: "slider",
				min: 0,
				max: 300,
				// default: 200,
				step: 1,
				hidden: "data.noIcon",
				/* hidden: (data, i) =>
					(i === undefined ? !data[`${nameIcon}`] : !data[`${nameIcon}${i}`]) ||
					!!data.noIcon, */
			},
			{
				name: nameIconXOffset,
				label: "icon_x_offset",
				type: "text",
				default: "0px",
				hidden: "data.noIcon",
				/* hidden: (data, i) =>
					(i === undefined ? !data[`${nameIcon}`] : !data[`${nameIcon}${i}`]) ||
					!!data.noIcon, */
			},
			{
				name: nameIconYOffset,
				label: "icon_y_offset",
				type: "text",
				default: "0px",
				hidden: "data.noIcon",
				/* hidden: (data, i) =>
					(i === undefined ? !data[`${nameIcon}`] : !data[`${nameIcon}${i}`]) ||
					!!data.noIcon, */
			},
			{
				label: "",
				type: "custom",
				component: () => <CollectionDivider dividerText="header" />,
			},
			{
				name: nameHeader,
				label: "header_text",
				type: "text",
				default: "",
			},
			{
				name: nameHeaderSize,
				label: "header_size",
				type: "slider",
				min: 0,
				max: 500,
				// default: 0,
				step: 1,
			},
			{
				label: "",
				type: "custom",
				component: () => <CollectionDivider dividerText="value" />,
			},
			{
				name: nameAlias,
				label: "alias",
				type: "text",
				default: "",
			},
			{
				name: nameValue,
				label: "value",
				type: "text",
				default: "",
				hidden: (data) =>
					data.oidType === "boolean" || nameValue === "valueActive",
			},
			{
				name: nameValueSize,
				label: "value_size",
				type: "slider",
				min: 0,
				max: 500,
				// default: 0,
				step: 1,
			},
			{
				label: "",
				type: "custom",
				component: () => <CollectionDivider dividerText="footer" />,
			},
			{
				name: nameFooter,
				label: "footer_text",
				type: "text",
				default: "",
			},
			{
				name: nameFooterSize,
				label: "footer_size",
				type: "slider",
				min: 0,
				max: 500,
				// default: 0,
				step: 1,
			},
			{
				label: "",
				type: "custom",
				component: () => <CollectionDivider dividerText="characteristics" />,
			},
			{
				name: nameTextColor,
				label: "text_color",
				type: "color",
			},
			{
				label: "",
				type: "custom",
				component: () => <CollectionDivider dividerText="background" />,
			},
			{
				name: nameBackground,
				label: "background",
				default: "",
				type: "custom", // important
				component: (
					// important
					field, // field properties: {name, label, type, set, singleName, component,...}
					data, // widget data
					onDataChange, // function to call, when data changed
					props, // additional properties : {socket, projectName, instance, adapterName, selectedView, selectedWidgets, project, widgetID}
					// widgetID: widget ID or widgets IDs. If selecteld more than one widget, it is array of IDs
					// project object: {VIEWS..., [view]: {widgets: {[widgetID]: {tpl, data, style}}, settings, parentId, rerender, filterList, activeWidgets}, ___settings: {}}
				) => (
					<CollectionGradientColorPicker
						field={field}
						data={data}
						onDataChange={onDataChange}
					/>
				),
			},
			{
				name: nameBackgroundColor,
				label: "background_color",
				type: "color",
			},
			{
				label: "",
				type: "custom",
				component: () => <CollectionDivider dividerText="frame_background" />,
			},
			{
				name: nameFrameBackground,
				label: "frame_background",
				default: "",
				type: "custom", // important
				component: (
					// important
					field, // field properties: {name, label, type, set, singleName, component,...}
					data, // widget data
					onDataChange, // function to call, when data changed
					props, // additional properties : {socket, projectName, instance, adapterName, selectedView, selectedWidgets, project, widgetID}
					// widgetID: widget ID or widgets IDs. If selecteld more than one widget, it is array of IDs
					// project object: {VIEWS..., [view]: {widgets: {[widgetID]: {tpl, data, style}}, settings, parentId, rerender, filterList, activeWidgets}, ___settings: {}}
				) => (
					<CollectionGradientColorPicker
						field={field}
						data={data}
						onDataChange={onDataChange}
					/>
				),
			},
			{
				name: nameFrameBackgroundColor,
				label: "frame_background_color",
				type: "color",
			},
		],
	};
}
