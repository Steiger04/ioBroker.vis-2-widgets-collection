import CollectionDivider from "./CollectionDivider";

async function oidChangeHandlerAsync(field, data, changeData, socket) {
	if (data.oid) {
		const object = await socket.getObject(data.oid);

		data.write = object?.common?.write;
		data.noButton = !object?.common?.write;
		data.unit = object?.common?.unit || "";
		data.minValue = object?.common?.min || 0;
		data.maxValue = object?.common?.max || 100;

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
			data.withStates = true;
			data.withNumber = false;
			Object.keys(object.common.states).forEach((state, index) => {
				data[`value${index + 1}`] = object.common.states[state];
			});

			changeData(data);
		} else if (object?.common) {
			data.withNumber = object.common.type === "number";
			data.withStates = false;
			data.values_count = 0;

			changeData(data);
		}
	} else {
		data.write = false;
		data.noButton = true;
		changeData(data);
	}
}

function CollectionCommonAttributes() {
	return {
		name: "common", // group name
		fields: [
			{
				name: "oid",
				type: "id",
				label: "oid",
				onChange: oidChangeHandlerAsync,
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
			},
			{
				type: "custom",
				component: () => <CollectionDivider dividerText="characteristic" />,
			},
			{
				name: "noHeader",
				type: "checkbox",
				label: "no_header",
			},
			{
				name: "header",
				label: "header",
				type: "text",
				default: "",
				hidden: "data.noHeader",
			},
			{
				name: "noFooter",
				type: "checkbox",
				label: "no_footer",
			},
			{
				type: "custom",
				component: () => <CollectionDivider />,
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
				name: "outlined",
				label: "outlined",
				type: "checkbox",
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
				component: () => <CollectionDivider />,
			},
			{
				name: "onlyTransparent",
				type: "checkbox",
				label: "only_transparent",
			},
		],
	};
}

export default CollectionCommonAttributes;
