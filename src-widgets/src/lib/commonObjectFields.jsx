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

export const oidChangeHandlerAsync =
	(allowedTypes, oid = "oid") =>
	async (field, data, changeData, socket) => {
		if (data[oid]) {
			const object = await socket.getObject(data[oid]);
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
							case "mixed":
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
			// no oid
			data.icon = null;
			data.onlyStates = null;
			data.write = false;
			data.onlyDisplay = true;
			for (let i = 1; i <= Number(data.values_count); i++) {
				delete data[`iconSmall${i}`];
				delete data[`icon${i}`];
				delete data[`iconSize${i}`];
				delete data[`iconColor${i}`];
				delete data[`iconHover${i}`];
				delete data[`iconXOffset${i}`];
				delete data[`iconYOffset${i}`];
				delete data[`noHeader${i}`];
				delete data[`header${i}`];
				delete data[`headerSize${i}`];
				delete data[`alias${i}`];
				delete data[`value${i}`];
				delete data[`valueSize${i}`];
				delete data[`noFooter${i}`];
				delete data[`footer${i}`];
				delete data[`footerSize${i}`];
				delete data[`noCard${i}`];
				delete data[`squaredCorner${i}`];
				delete data[`textColor${i}`];
				delete data[`outlined${i}`];
				delete data[`outlinedFrame${i}`];
				delete data[`basePadding${i}`];
				delete data[`baseElevation${i}`];
				delete data[`square${i}`];
				delete data[`ellipse${i}`];
				delete data[`circle${i}`];
				delete data[`background${i}`];
				delete data[`backgroundColor${i}`];
				delete data[`frameBackground${i}`];
				delete data[`frameBackgroundColor${i}`];
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
];

export default commonObjectFields;
