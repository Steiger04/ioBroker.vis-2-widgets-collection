import CollectionDivider from "../components/CollectionDivider";

async function getObjectIconAsync(socket, object) {
	let icon = null;

	const idArray = object._id.split(".");

	for (let i = idArray.length; i > 0; i--) {
		const parentObject = await socket.getObject(idArray.slice(0, i).join("."));

		if (parentObject?.common?.icon) {
			icon = parentObject.common.icon;
			break;
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
			data.onlyDisplay = !object?.common?.write;
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
			data.onlyDisplay = true;
			for (let i = 1; i <= data.values_count; i++) {
				delete data[`value${i}`];
				delete data[`alias${i}`];
			}
			data.values_count = 0;

			changeData(data);
		}
	};

const commonObjectFields = (allowedTypes) => [
	{
		name: "oid",
		type: "id",
		label: "oid",
		onChange: oidChangeHandlerAsync(allowedTypes),
	},
	{
		label: "",
		type: "custom",
		component: () => <CollectionDivider />,
	},
	{
		name: "unit",
		label: "unit",
		type: "text",
		default: "",
	},
	{
		label: "",
		type: "custom",
		component: () => <CollectionDivider />,
		hidden: "data.oidType === 'boolean'",
	},
	{
		name: "values_count",
		type: "number",
		default: 0,
		label: "values_count",
		hidden: "data.oidType === 'boolean'",
	},
	{
		label: "",
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
];

export default commonObjectFields;
