import Generic from "../Generic";
import CollectionDivider from "./CollectionDivider";
import CollectionGradientColorPicker from "./CollectionGradientColorPicker";

export async function getObjectIconAsync(socket, object) {
	let icon = null;

	if (object?.common?.icon) {
		icon = object.common.icon;
	} else if (
		!object?.common?.icon &&
		(object.type === "state" || object.type === "channel")
	) {
		const idArray = object._id.split(".");

		// read channel
		const parentObject = await socket.getObject(idArray.slice(0, -1).join("."));

		icon = Generic.getObjectIcon(parentObject, idArray.slice(0, -1).join("."));

		if (!icon) {
			// read device
			const grandParentObject = await socket.getObject(
				idArray.slice(0, -2).join("."),
			);

			icon = Generic.getObjectIcon(
				grandParentObject,
				idArray.slice(0, -2).join("."),
			);
		}
	}

	return icon;
}

const oidChangeHandlerAsync =
	(allowedTypes) => async (field, data, changeData, socket) => {
		if (data.oid) {
			const object = await socket.getObject(data.oid);
			if (!object) return;

			const oidType = object.common?.type;
			if (!allowedTypes.includes(oidType)) return;

			const _icon = await getObjectIconAsync(socket, object);

			data.oidType = oidType;
			data.write = object?.common?.write;
			data.noButton = !object?.common?.write;
			data.unit = object?.common?.unit || "";
			data.minValue = object?.common?.min || 0;
			data.maxValue = object?.common?.max || 100;

			data.icon = _icon;

			if (object?.common?.states) {
				if (Array.isArray(object.common.states)) {
					// convert to {'state1': 'state1', 'state2': 'state2', ...}
					const states = {};
					object.common.states.forEach((state) => {
						states[state] = state;
					});
					object.common.states = states;
				}

				data.values_count = Object.keys(object.common.states).length;

				Object.entries(object.common.states).forEach(
					([value, alias], index) => {
						switch (oidType) {
							case "boolean":
								data[`value${index + 1}`] = value === "true";
								data[`alias${index + 1}`] = alias;
								break;

							case "number":
								data[`value${index + 1}`] = Number(value);
								data[`alias${index + 1}`] = alias;
								break;
							case "string":
								data[`value${index + 1}`] = value;
								data[`alias${index + 1}`] = alias;
								break;

							default:
								break;
						}
					},
				);

				changeData(data);
			} else if (object?.common?.type === "boolean") {
				data.values_count = 2;
				data.value1 = true;
				data.alias1 = "TRUE";
				data.value2 = false;
				data.alias2 = "FALSE";

				changeData(data);
			} else if (object?.common) {
				data.values_count = 0;

				changeData(data);
			}
		} else {
			data.icon = null;
			data.onlyStates = null;
			data.write = false;
			data.noButton = true;
			for (let i = 1; i <= data.values_count; i++) {
				delete data[`value${i}`];
				delete data[`alias${i}`];
			}
			data.values_count = 0;

			changeData(data);
		}
	};

function CollectionGroupCommonAttributes(allowedTypes = []) {
	return {
		name: "common", // group name
		fields: [
			{
				name: "oid",
				type: "id",
				label: "oid",
				onChange: oidChangeHandlerAsync(allowedTypes),
			},
			{
				name: "unit",
				label: "unit",
				type: "text",
				default: "",
			},
			{
				name: "values_count",
				type: "number",
				default: 0,
				label: "values_count",
				hidden: "data.oidType === 'boolean'",
			},
			{
				type: "custom",
				component: () => <CollectionDivider dividerText="write_value" />,
			},
			{
				name: "sampleInterval",
				type: "checkbox",
				label: "sample_interval",
				default: false,
			},
			{
				name: "sampleIntervalValue",
				type: "number",
				label: "sample_interval_value",
				default: 50,
				min: 0,
				max: 1000,
				step: 1,
				hidden: "!data.sampleInterval",
			},
			{
				name: "delay",
				type: "number",
				label: "delay",
				default: 300,
				min: 0,
				max: 1000,
				step: 1,
				hidden: "data.sampleInterval",
			},
			{
				type: "custom",
				component: () => <CollectionDivider dividerText="icon" />,
				hidden: "data.noIcon",
			},
			{
				name: "iconSmall",
				label: "small_icon",
				type: "icon64",
				hidden: "data.noIcon || data.icon",
			},
			{
				name: "icon",
				label: "icon",
				type: "image",
				hidden: "data.noIcon || data.iconSmall",
				/* onChange: async (field, data, changeData, socket) => {
					if (!data.icon) {
						if (data.oid !== "nothing_selected" && data.oid !== "") {
							const object = await socket.getObject(data.oid);
							data.icon = await getObjectIconAsync(socket, object);
							changeData(data);
						}
					}
				}, */
			},
			/* {
				type: "custom",
				component: () => <CollectionDivider />,
				hidden: "data.noIcon || data.iconSmall",
			}, */
			{
				name: "iconSize",
				label: "icon_size",
				type: "slider",
				min: 1,
				max: 500,
				// default: 0,
				step: 1,
				hidden: "data.noIcon",
				// hidden: "data.noIcon || !data.icon",
			},
			{
				name: "iconColor",
				label: "icon_color",
				type: "color",
				hidden: "data.noIcon",
				// hidden: "data.noIcon || !data.icon",
			},
			{
				name: "iconHover",
				label: "icon_hover",
				type: "slider",
				min: 0,
				max: 300,
				// default: 200,
				step: 1,
				hidden: "data.noIcon",
				// hidden: "data.noIcon || !data.icon",
			},
			{
				name: "iconXOffset",
				label: "icon_x_offset",
				type: "text",
				default: "0px",
				hidden: "data.noIcon",
				// hidden: "data.noIcon || !data.icon",
			},
			{
				name: "iconYOffset",
				label: "icon_y_offset",
				type: "text",
				default: "0px",
				hidden: "data.noIcon",
				// hidden: "data.noIcon || !data.icon",
			},
			{
				type: "custom",
				component: () => <CollectionDivider dividerText="header" />,
			},
			{
				name: "noHeader",
				type: "checkbox",
				label: "no_header",
			},
			{
				name: "header",
				label: "header_text",
				type: "html",
				default: "",
				hidden: "data.noHeader",
			},
			{
				name: "headerSize",
				label: "header_size",
				type: "slider",
				min: 0,
				max: 500,
				// default: 0,
				step: 1,
				hidden: "data.noHeader",
			},
			{
				type: "custom",
				component: () => <CollectionDivider dividerText="value" />,
			},
			{
				name: "valueSize",
				label: "value_size",
				type: "slider",
				min: 0,
				max: 500,
				// default: 0,
				step: 1,
			},
			{
				type: "custom",
				component: () => <CollectionDivider dividerText="footer" />,
			},
			{
				name: "noFooter",
				label: "no_footer",
				type: "checkbox",
			},
			{
				name: "footer",
				label: "footer_text",
				type: "html",
				default: "",
				hidden: "data.noFooter",
			},
			{
				name: "footerSize",
				label: "footer_size",
				type: "slider",
				min: 0,
				max: 500,
				// default: 0,
				step: 1,
				hidden: "data.noFooter",
			},
			{
				type: "custom",
				component: () => <CollectionDivider dividerText="characteristics" />,
			},
			{
				name: "noCard",
				label: "without_card",
				type: "checkbox",
			},
			{
				name: "squaredCorner",
				label: "squared_corner",
				type: "checkbox",
			},
			{
				name: "textColor",
				label: "text_color",
				type: "color",
			},
			{
				type: "custom",
				component: () => <CollectionDivider />,
			},
			{
				name: "outlined",
				label: "outlined",
				type: "checkbox",
			},
			{
				name: "outlinedFrame",
				label: "outlined_frame",
				type: "checkbox",
			},
			{
				type: "custom",
				component: () => <CollectionDivider />,
			},
			{
				name: "basePadding",
				label: "base_padding",
				type: "slider",
				min: 0,
				max: 10,
				step: 0.1,
				default: 1,
			},
			{
				name: "baseElevation",
				label: "base_elevation",
				type: "slider",
				min: 0,
				max: 24,
				step: 1,
				default: 4,
			},
			{
				type: "custom",
				component: () => <CollectionDivider dividerText="geometry" />,
			},
			{
				name: "square",
				label: "square",
				type: "checkbox",
				hidden: "data.circle || data.ellipse",
			},
			{
				name: "ellipse",
				label: "ellipse",
				type: "checkbox",
				hidden: "data.circle || data.square",
			},
			{
				name: "circle",
				label: "circle",
				type: "checkbox",
				hidden: "data.ellipse || data.square",
			},
			{
				type: "custom",
				component: () => <CollectionDivider dividerText="background" />,
			},

			{
				name: "background",
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
				name: "backgroundColor",
				label: "background_color",
				type: "color",
			},
			{
				type: "custom",
				component: () => <CollectionDivider dividerText="frame_background" />,
			},
			{
				name: "frameBackground",
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
				name: "frameBackgroundColor",
				label: "frame_background_color",
				type: "color",
			},
		],
	};
}

export default CollectionGroupCommonAttributes;
